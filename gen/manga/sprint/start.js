// chibi sprinter with inky twin pigtails holds "set" in the blocks, explodes off in dust, sprints with speed lines, then rewinds
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=20,delay=60,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),lerp=(a,b,k)=>a+(b-a)*k
const blend=(p,q,k)=>Array.isArray(p)?p.map((v,n)=>blend(v,q[n],k)):lerp(p,q,k)
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
// pose: [hip, torso lean, near leg [knee,foot], far leg, near arm [elbow,hand], far arm], legs from the hip, arms from the shoulder
const SET=[[88,194],1.2,[[24,14],[12,42]],[[-18,26],[-42,42]],[[4,30],[2,58]],[[-2,30],[-6,58]]]
const GO=[[114,184],.8,[[28,4],[22,36]],[[-20,26],[-46,50]],[[-22,16],[-34,-4]],[[20,14],[32,-6]]]
const run=f=>{const lg=s=>{const th=.95*sin(f+s),sh=th-.25-1.3*(sin(f+s+1.3)+1)/2;return[[30*sin(th),30*cos(th)],[30*sin(th)+30*sin(sh),30*cos(th)+30*cos(sh)]]}
  const am=s=>{const a=-.9*sin(f+s);return[[24*sin(a),24*cos(a)],[24*sin(a)+22*sin(a-1.4),24*cos(a)+22*cos(a-1.4)]]}
  return[[132,176+3*abs(sin(f))],.32,lg(0),lg(PI),am(PI),am(0)]}
const eye=(c,x,y,d,lt)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-6+d*4);c.lineTo(x+17,y-6-d*4);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+3,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+7,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x+4,y,3.5,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6+d*4);c.lineTo(x+16,y-6-d*4);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-14,y-26+d*6);c.lineTo(x+14,y-26-d*6);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const f=(t-.4)/.42*T*2.5
  let P=t<.3?SET:t<.4?blend(SET,GO,ease((t-.3)/.1)):t<.5?blend(GO,run(f),ease((t-.4)/.1)):t<.8?run(f):blend(run(f),SET,ease((t-.8)/.2))
  if(t<.3)P=blend(P,P,0),P[0]=[P[0][0]+(t>.18?1.5*sin(t*T*24):0),P[0][1]]
  const[H,a,nl,fl,na,fa]=P,go=t>=.3&&t<.82
  c.save();c.translate(118,236);c.scale(1.07,1.07);c.translate(-116,-242)
  // starting blocks
  c.lineWidth=5
  c.fillStyle='#111';for(const x of[44,98])c.beginPath(),c.moveTo(x,240),c.lineTo(x+20,240),c.lineTo(x+4,222),c.closePath(),c.fill(),c.stroke()
  if(t>=.32&&t<.75){const k=(t-.32)/.43;c.fillStyle='#fff';c.lineWidth=4;for(const[x,r]of[[50,14],[74,18],[98,12],[32,10]])c.beginPath(),c.arc(x-8*k,232-6*k,r*(1-k)*(1+.6*k),0,T),c.fill(),c.stroke()}
  if(t>=.42&&t<.82){c.lineWidth=4;for(const[y,o]of[[110,0],[140,.4],[170,.2],[200,.7],[226,.5]]){const x=18+((o+t*5)%1)*32;c.beginPath();c.moveTo(x,y);c.lineTo(x+34,y);c.stroke()}}
  const S=[H[0]+44*sin(a),H[1]-44*cos(a)],F=[S[0]-6,S[1]-2]
  const leg=(l,w,dx)=>{const hp=[H[0]+dx,H[1]],kn=[hp[0]+l[0][0],hp[1]+l[0][1]],ft=[hp[0]+l[1][0],hp[1]+l[1][1]];limb(c,[hp,kn,ft],w)
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(ft[0]+6,ft[1]+2,14,8,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.fillRect(ft[0]-6,ft[1]+4,24,4)}
  const arm=(o,l)=>{const e=[o[0]+l[0][0],o[1]+l[0][1]],w=[o[0]+l[1][0],o[1]+l[1][1]];limb(c,[o,e,w],12);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...w,8,0,T);c.fill();c.stroke()}
  arm(F,fa);leg(fl,15,-4)
  // torso
  c.save();c.translate(...H);c.rotate(a)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-20,-8);c.lineTo(20,-8);c.lineTo(23,12);c.lineTo(-23,12);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(-26,-8,52,22);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(-20,-4);c.lineTo(20,-4);c.lineTo(22,-48);c.quadraticCurveTo(0,-56,-20,-48);c.closePath();c.fill();c.save();c.clip();c.fillStyle='#111';c.fillRect(-21,-54,7,52);c.restore();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.roundRect(-6,-38,24,20,2);c.stroke();c.fillStyle='#111';c.fillRect(0,-33,4,11);c.fillRect(8,-33,6,11)
  c.restore()
  leg(nl,15,4)
  // head
  c.save();c.translate(H[0]+90*sin(a)+4,H[1]-90*cos(a));c.rotate(a*.45);c.scale(.64,.64);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#111'
  const fl2=go?10*sin(t*T*8):3*sin(t*T*2)
  for(const[y,d]of[[96,0],[150,1]]){c.beginPath();c.moveTo(70,y-12);c.quadraticCurveTo(30,y-20+fl2*(d?-1:1),6,y+6+fl2);c.quadraticCurveTo(26,y+10,20,y+30+fl2*.6);c.quadraticCurveTo(46,y+18,72,y+14);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(72,y+1,9,12,0,0,T);c.fill();c.stroke();c.fillStyle='#111'}
  c.beginPath();c.moveTo(66,154);c.bezierCurveTo(46,74,88,36,130,36);c.bezierCurveTo(176,36,208,74,190,150);c.lineTo(160,154);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,114,140,-1,lt);eye(c,162,140,1,lt)
  c.lineWidth=3.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(138+d*42+j-3,168),c.lineTo(138+d*42+j+3,160),c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath()
  if(go)c.roundRect(128,162,26,14,4),c.fill(),c.stroke(),c.beginPath(),c.moveTo(128,169),c.lineTo(154,169),c.moveTo(137,162),c.lineTo(137,176),c.moveTo(146,162),c.lineTo(146,176),c.stroke()
  else c.moveTo(132,170),c.lineTo(150,168),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(72,126);c.lineTo(72,92);c.bezierCurveTo(86,50,174,50,188,94);c.lineTo(188,124);c.lineTo(176,104);c.lineTo(168,120);c.lineTo(156,100);c.lineTo(146,116);c.lineTo(134,98);c.lineTo(122,114);c.lineTo(110,98);c.lineTo(100,116);c.lineTo(90,102);c.lineTo(82,118);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;for(const[s,e]of[[1.18,1.3],[1.38,1.56],[1.64,1.76]])c.beginPath(),c.arc(130,124,60,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  if(t>=.16&&t<.3){c.lineWidth=4;c.beginPath();c.moveTo(170,104);c.lineTo(174,90);c.moveTo(188,110);c.lineTo(198,98);c.moveTo(152,106);c.lineTo(150,92);c.stroke()}
  arm(S,na)
  c.restore()
}

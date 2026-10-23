// chibi volleyball girl with hatched hair and a headband crouches, leaps, cocks her arm and spikes the ball away in a burst
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,hypot}=Math,T=2*PI
export const frames=18,delay=70,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),lerp=(a,b,k)=>a+(b-a)*k,mix=(a,b,k)=>a.map((v,n)=>lerp(v,b[n],k))
// keyframe lookup: list of [t,value] with smooth steps between
const key=(ks,t)=>{for(let n=1;n<ks.length;n++)if(t<=ks[n][0]){const[a,va]=ks[n-1],[b,vb]=ks[n],k=ease((t-a)/(b-a));return Array.isArray(va)?mix(va,vb,k):lerp(va,vb,k)}return ks.at(-1)[1]}
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
// knee for a two-bone leg, always bent toward +x (she faces right)
const knee=(h,f,L)=>{const dx=f[0]-h[0],dy=f[1]-h[1],d=hypot(dx,dy)/2,o=d<L?Math.sqrt(L*L-d*d)/(2*d):0;return[(h[0]+f[0])/2+dy*o,(h[1]+f[1])/2-dx*o]}
const hatch=(c,x0,y0,x1,y1)=>{c.lineWidth=3.5;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=12)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0);c.stroke()}
const ball=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,0,19,0,T);c.fill();c.save();c.clip();c.lineWidth=3.5
  for(let j=0;j<3;j++){c.rotate(T/3);c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(12,-2,16,14);c.moveTo(-6,-8);c.quadraticCurveTo(14,-12,22,6);c.stroke()}c.restore();c.lineWidth=5;c.beginPath();c.arc(0,0,19,0,T);c.stroke();c.restore()}
const eye=(c,x,y,d,lt)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-6+d*4);c.lineTo(x+17,y-6-d*4);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y-2,9,11,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-6,y+2,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x+3,y-5,3.5,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6+d*4);c.lineTo(x+16,y-6-d*4);c.lineTo(x+d*21,y-12-d*d*2);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-14,y-24+d*7);c.lineTo(x+14,y-24-d*7);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const k=key([[0,0],[.18,1],[.3,0],[.62,0],[.7,1],[.92,0],[1,0]],t),h=key([[0,0],[.22,0],[.4,1],[.48,1],[.68,0],[1,0]],t)
  // arm keyframes as [elbow offset, hand offset] from the shoulder
  const sp=key([[0,[4,22,0,44]],[.18,[-20,16,-36,30]],[.32,[-24,-30,-46,-52]],[.4,[-30,-38,-62,-40]],[.44,[30,-36,56,-64]],[.5,[30,0,52,26]],[.68,[14,18,16,42]],[1,[4,22,0,44]]],t)
  const fp=key([[0,[-4,22,-4,44]],[.18,[-24,12,-40,26]],[.32,[6,-26,16,-54]],[.44,[8,-28,22,-52]],[.54,[6,22,12,44]],[1,[-4,22,-4,44]]],t)
  c.save();c.translate(128,242);c.scale(.98,.98);c.translate(-128,-242)
  const H=[100+8*k,180+14*k-16*h],lean=.12*k-.08*h
  c.fillStyle=dt;c.beginPath();c.ellipse(104,240,46*(1-.6*h),7*(1-.6*h),0,0,T);c.fill()
  const sh=(x,y)=>[H[0]+x*cos(lean)-y*sin(lean),H[1]+x*sin(lean)+y*cos(lean)],S=sh(10,-46),F=sh(-12,-46)
  const arm=(o,p)=>{const e=[o[0]+p[0],o[1]+p[1]],w=[o[0]+p[2],o[1]+p[3]];limb(c,[o,e,w],15);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...w,9,0,T);c.fill();c.stroke();return w}
  arm(F,fp)
  for(const d of[-1,1]){const hp=[H[0]+d*9,H[1]],ft=h>.05?[hp[0]-16+d*12,hp[1]+46]:[100+d*16,236],kn=knee(hp,ft,30)
    limb(c,[hp,kn,ft],17);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(kn[0]-10,kn[1]-7,20,14,5);c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(ft[0]+5,ft[1]+3,14,8,h*.5,0,T);c.fill();c.stroke()}
  c.save();c.translate(...H);c.rotate(lean)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-24,-8);c.lineTo(24,-8);c.lineTo(28,14);c.lineTo(2,14);c.lineTo(0,6);c.lineTo(-2,14);c.lineTo(-28,14);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(-30,-8,60,24);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(-24,-4);c.lineTo(26,-4);c.lineTo(28,-50);c.quadraticCurveTo(2,-58,-24,-50);c.closePath();c.fill();c.save();c.clip();c.fillStyle='#111';c.fillRect(-26,-52,7,50);c.fillRect(20,-52,8,50);c.restore();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-2,-40);c.lineTo(6,-44);c.lineTo(9,-44);c.lineTo(9,-16);c.lineTo(3,-16);c.lineTo(3,-36);c.lineTo(-2,-34);c.fill()
  c.restore()
  arm(S,sp)
  const shout=t>=.38&&t<.54
  c.save();c.translate(...sh(6,-94));c.rotate(lean-.08*h);c.scale(.68,.68);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#fff'
  const back=()=>{c.beginPath();c.moveTo(66,160);c.bezierCurveTo(46,74,88,34,130,34);c.bezierCurveTo(176,34,210,74,190,150);c.lineTo(178,170);c.lineTo(172,150);c.lineTo(84,150);c.lineTo(78,172);c.closePath()}
  back();c.fill();c.save();c.clip();hatch(c,30,20,230,190);c.restore();c.lineWidth=9;back();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,112,140,-1,lt);eye(c,160,140,1,lt)
  c.lineWidth=3.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(136+d*42+j-3,168),c.lineTo(136+d*42+j+3,160),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath()
  if(shout)c.moveTo(124,164),c.lineTo(154,164),c.quadraticCurveTo(150,186,139,186),c.quadraticCurveTo(128,186,124,164),c.fill(),c.stroke()
  else c.moveTo(128,168),c.quadraticCurveTo(140,176,152,166),c.stroke()
  const fr=()=>{c.beginPath();c.moveTo(72,124);c.lineTo(72,92);c.bezierCurveTo(86,52,172,52,186,92);c.lineTo(188,126);c.lineTo(178,108);c.lineTo(170,120);c.lineTo(160,100);c.lineTo(148,118);c.lineTo(138,98);c.lineTo(126,116);c.lineTo(114,98);c.lineTo(102,118);c.lineTo(92,100);c.lineTo(84,116);c.closePath()}
  fr();c.fill();c.save();c.clip();hatch(c,60,40,200,130);c.restore();c.lineWidth=9;fr();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(70,94);c.quadraticCurveTo(128,62,186,94);c.lineTo(186,80);c.quadraticCurveTo(128,48,70,80);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(86,82);c.quadraticCurveTo(128,62,170,82);c.stroke();c.strokeStyle='#111'
  c.restore()
  // ball drops in from the top right, meets the hand at the top of the swing, then rockets away
  const hp=[S[0]+56,S[1]-64],bb=t<.44?[lerp(196,hp[0]+12,min(1,t/.44)),lerp(-24,hp[1]-10,ease(min(1,t/.44)))]:[lerp(hp[0]+12,320,(t-.44)/.14),lerp(hp[1]-10,300,(t-.44)/.14)]
  if(t>=.44&&t<.58){c.lineWidth=4;for(const d of[-12,0,12])c.beginPath(),c.moveTo(bb[0]-60+d,bb[1]-56-d),c.lineTo(bb[0]-24+d,bb[1]-20-d),c.stroke()}
  if(t<.58)ball(c,...bb,t*14)
  if(t>=.42&&t<.5){const x=hp[0]+12,y=hp[1]-10;c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(let j=0;j<16;j++){const r=j%2?13:27,b=j*PI/8;c.lineTo(x+cos(b)*r,y+sin(b)*r)}c.closePath();c.fill();c.stroke()}
  if(t>=.42&&t<.52){c.lineWidth=4;for(let j=0;j<3;j++)c.beginPath(),c.arc(S[0],S[1],62+j*7,-2.6+j*.12,-1.3),c.stroke()}
  c.restore()
}

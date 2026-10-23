// chibi traceur in a dotted hoodie, hood up over white fluffy bangs, sprints past speed lines and speed-vaults a brick wall
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs,min,max,hypot}=Math,T=2*PI
export const frames=16,delay=65,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),lerp=(a,b,k)=>a+(b-a)*k,mix=(a,b,k)=>a.map((v,n)=>lerp(v,b[n],k))
const limb=(c,p,w,tone)=>{for(const[l,s]of[[w+8,'#111'],[w,tone||'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
// elbow for a two-bone arm, bending backward (-x) so it reads as a facing-right pose
const joint=(a,b,L)=>{const dx=b[0]-a[0],dy=b[1]-a[1],d=hypot(dx,dy)/2,o=d<L?Math.sqrt(L*L-d*d)/(2*d):0;return[(a[0]+b[0])/2-dy*o,(a[1]+b[1])/2+dx*o]}
const eye=(c,x,y,d,lt)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-6+d*4);c.lineTo(x+17,y-6-d*4);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+2,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+6,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x+4,y-1,3.5,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6+d*4);c.lineTo(x+16,y-6-d*4);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const f=t*T*3,wx=300-380*t,WT=196
  const w=ease((t-.38)/.06)*(1-ease((t-.58)/.08)),wp=ease((t-.41)/.03)*(1-ease((t-.575)/.03)),fl=sin(t*T*8)
  const H=[118,182-3*abs(sin(f))*(1-w)-30*w],lean=.16*(1-w)-.3*w
  // speed lines and ground dashes scroll left
  c.lineWidth=4;for(const[y,o,l]of[[44,0,46],[96,.6,40],[150,.3,36],[206,.8,28]]){const x=((o-t*3)%1+1)%1*320-50;c.beginPath();c.moveTo(x,y);c.lineTo(x+l,y);c.stroke()}
  c.lineWidth=5;c.beginPath();for(let k=0;k<4;k++){const x=((k/4-t*3)%1+1)%1*300-30;c.moveTo(x,246);c.lineTo(x+22,246)}c.stroke()
  // brick wall
  if(wx>-80&&wx<260){c.save();c.beginPath();c.rect(wx,WT,64,50);c.clip();c.fillStyle='#fff';c.fillRect(wx,WT,64,50);c.lineWidth=3.5
    for(let r=0;r<4;r++)for(let k=-1;k<3;k++){const x=wx+k*28+(r%2)*14,y=WT+r*13;c.beginPath();c.rect(x,y,28,13);if((r*3+k)%5==1){c.fillStyle=dt;c.fill()}c.stroke()}
    c.restore();c.lineWidth=5;c.strokeRect(wx,WT,64,50);c.fillStyle='#111';c.fillRect(wx-3,WT-6,70,8)}
  c.save();c.translate(120,246);c.scale(.92,.92);c.translate(-120,-246)
  const S=[H[0]+44*sin(lean),H[1]-44*cos(lean)]
  // legs: running cycle blended into both legs swept forward over the wall
  const lg=s=>{const th=.9*sin(f+s),sh=th-.3-1.2*(sin(f+s+1.3)+1)/2,k=[30*sin(th),30*cos(th)];return[...k,k[0]+30*sin(sh),k[1]+30*cos(sh)]}
  const leg=(s,v,dx)=>{const o=mix(lg(s),v,w),hp=[H[0]+dx,H[1]],kn=[hp[0]+o[0],hp[1]+o[1]],ft=[hp[0]+o[2],hp[1]+o[3]]
    limb(c,[hp,kn,ft],16,'#111');c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(hp[0]+2,hp[1]+4);c.lineTo(kn[0]+2,kn[1]);c.lineTo(ft[0],ft[1]-4);c.stroke();c.strokeStyle='#111'
    const a=Math.atan2(ft[1]-kn[1],ft[0]-kn[0])-PI/2;c.save();c.translate(...ft);c.rotate(a);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(-5,4,9,15,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.fillRect(-15,6,5,0);c.beginPath();c.moveTo(-14,8);c.lineTo(4,8);c.lineTo(4,12);c.lineTo(-14,12);c.fill();c.restore()}
  const arm=(o,p,tone)=>{limb(c,[o,[o[0]+p[0],o[1]+p[1]],[o[0]+p[2],o[1]+p[3]]],11,tone);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(o[0]+p[2],o[1]+p[3],8,0,T);c.fill();c.stroke()}
  const ra=s=>{const a=.8*sin(f+s);return[24*sin(a),24*cos(a),24*sin(a)+20*sin(a+1.5),24*cos(a)+20*cos(a+1.5)]}
  arm([S[0]-6,S[1]+2],mix(ra(0),[-22,-14,-30,-38],w))
  leg(PI,[30,8,56,22],-5)
  // hoodie torso with a flapping hem and kangaroo pocket
  c.save();c.translate(...H);c.rotate(lean)
  c.fillStyle=dt;c.lineWidth=5;c.beginPath();c.moveTo(-22,6+2*fl);c.lineTo(-24,-36);c.quadraticCurveTo(0,-50,22,-40);c.lineTo(24,4);c.lineTo(0,8);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-26,-4+2*fl);c.lineTo(24,-6);c.lineTo(26,6);c.lineTo(-30,10+4*fl);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(0,-24);c.lineTo(18,-24);c.lineTo(22,-10);c.lineTo(-2,-10);c.closePath();c.fill();c.stroke()
  c.restore()
  leg(0,[33,4,60,16],5)
  // head inside the hood; hood tail and drawstrings flap behind
  c.save();c.translate(H[0]+96*sin(lean)+6,H[1]-96*cos(lean)+2);c.rotate(lean*.6);c.scale(.64,.64);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle=dt
  const hood=()=>{c.beginPath();c.moveTo(64,170);c.bezierCurveTo(30,120,46,26,128,26);c.bezierCurveTo(200,26,214,96,196,170);c.closePath()}
  c.beginPath();c.moveTo(62,96);c.quadraticCurveTo(24,104+6*fl,-4,134+12*fl);c.lineTo(10,146+10*fl);c.lineTo(-2,164+8*fl);c.quadraticCurveTo(36,166,64,156);c.closePath();c.fill();c.stroke()
  hood();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(76,100);c.bezierCurveTo(72,154,100,184,128,186);c.bezierCurveTo(156,184,184,154,180,100);c.bezierCurveTo(176,60,80,60,76,100);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(70,166);c.bezierCurveTo(60,90,90,52,128,52);c.bezierCurveTo(168,52,196,90,186,166);c.stroke()
  eye(c,112,140,-1,lt);eye(c,160,140,1,lt)
  c.fillStyle='#fff';c.lineWidth=4;c.save();c.translate(98,170);c.rotate(-.3);c.beginPath();c.roundRect(-14,-7,28,14,5);c.fill();c.stroke();c.beginPath();c.moveTo(-3,-7);c.lineTo(-3,7);c.moveTo(3,-7);c.lineTo(3,7);c.stroke();c.restore()
  c.lineWidth=3.5;for(const j of[-6,0,6])c.beginPath(),c.moveTo(182+j-3,166),c.lineTo(182+j+3,158),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath()
  if(w>.3)c.moveTo(128,164),c.lineTo(156,162),c.quadraticCurveTo(152,182,142,182),c.quadraticCurveTo(130,182,128,164),c.fill(),c.stroke(),c.fillStyle='#fff',c.beginPath(),c.moveTo(132,165),c.lineTo(138,165),c.lineTo(135,171),c.fill()
  else c.moveTo(130,168),c.quadraticCurveTo(142,174,154,164),c.stroke()
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(80,118);c.quadraticCurveTo(78,82,100,72);c.quadraticCurveTo(108,62,124,66);c.quadraticCurveTo(138,58,152,68);c.quadraticCurveTo(174,72,178,92);c.quadraticCurveTo(182,104,176,120);c.quadraticCurveTo(168,104,160,112);c.quadraticCurveTo(152,96,140,106);c.quadraticCurveTo(130,92,118,106);c.quadraticCurveTo(106,94,96,110);c.quadraticCurveTo(88,104,80,118);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;for(const[a,b,e,g]of[[104,80,98,96],[150,78,156,94],[128,72,126,86]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+e)/2+5,(b+g)/2,e,g),c.stroke()
  c.restore()
  // drawstrings
  const nk=[H[0]+46*sin(lean)+4,H[1]-46*cos(lean)+2];c.lineWidth=3;for(const d of[-6,6]){const e=[nk[0]+d-10-6*fl*(1+w),nk[1]+22+2*fl];c.beginPath();c.moveTo(nk[0]+d,nk[1]);c.quadraticCurveTo(nk[0]+d-4,nk[1]+12,...e);c.stroke();c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.roundRect(e[0]-3,e[1]-2,6,8,2);c.fill();c.stroke()}
  // near arm: pumping, then planted on the wall top
  const ro=[S[0]+4,S[1]+2],run=ra(PI),pl=[min(max(wx+18,64),170),WT-6],ph=mix([ro[0]+run[2],ro[1]+run[3]],pl,wp),el=wp>.01?joint(ro,ph,27):[ro[0]+run[0],ro[1]+run[1]]
  limb(c,[ro,mix([ro[0]+run[0],ro[1]+run[1]],el,wp),ph],11);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...ph,8,0,T);c.fill();c.stroke()
  if(t>=.42&&t<.5){c.lineWidth=4;for(const a of[-2.6,-2,-1.2,-.5])c.beginPath(),c.moveTo(pl[0]+cos(a)*14,pl[1]+sin(a)*14),c.lineTo(pl[0]+cos(a)*24,pl[1]+sin(a)*24),c.stroke()}
  c.restore()
}

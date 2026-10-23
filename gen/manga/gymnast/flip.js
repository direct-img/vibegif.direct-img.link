// chibi gymnast with a crosshatched top bun swings her arms, springs into a tucked backflip and lands arms up with sparkles
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=18,delay=70,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),lerp=(a,b,k)=>a+(b-a)*k,mix=(a,b,k)=>a.map((v,n)=>lerp(v,b[n],k))
const key=(ks,t)=>{for(let n=1;n<ks.length;n++)if(t<=ks[n][0]){const[a,va]=ks[n-1],[b,vb]=ks[n];return lerp(va,vb,ease((t-a)/(b-a)))}return ks.at(-1)[1]}
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const xhatch=(c,x0,y0,x1,y1)=>{c.lineWidth=3;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=11)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0),c.moveTo(x,y0),c.lineTo(x+(y1-y0),y1);c.stroke()}
const star=(c,x,y,r)=>{c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();for(let k=0;k<8;k++){const q=k%2?r*.35:r,a=k*PI/4;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
const eye=(c,x,y,d,lt,happy)=>{
  if(happy){c.lineWidth=8;c.beginPath();c.arc(x,y+6,12,PI*1.1,PI*1.9);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,16,0,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+4,10,13,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-6,y+7,22,12)
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y-1,5,0,T);c.fill();c.beginPath();c.arc(x+8,y+10,2,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-15,y-10);c.quadraticCurveTo(x,y-18,x+15,y-10);c.lineTo(x+d*21,y-14);c.stroke()
  c.lineWidth=4;for(const q of[-6,0,6])c.beginPath(),c.moveTo(x+q+d*2,y-15),c.lineTo(x+q+d*5,y-21),c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const r=t<.28?0:t<.66?-T*ease((t-.28)/.38):0,h=t>.26&&t<.68?sin(PI*(t-.26)/.42):0
  const k=key([[0,0],[.28,0],[.36,1],[.56,1],[.66,0],[1,0]],t),cr=key([[0,0],[.14,0],[.24,1],[.28,0],[.64,0],[.7,1],[.82,0],[1,0]],t),ab=key([[0,0],[.12,0],[.24,1],[.3,0],[.64,0],[.7,.7],[.82,0],[1,0]],t)
  const H=[124,188+14*cr-46*h],P=[0,-28]
  c.save();c.translate(124,238);c.scale(.9,.9);c.translate(-124,-244)
  // shadow, motion arcs, landing sparkles
  c.fillStyle=dt;c.beginPath();c.ellipse(124,240,40*(1-.5*h),7*(1-.5*h),0,0,T);c.fill()
  if(t>.32&&t<.62){c.lineWidth=4;for(const q of[0,1]){const e=r+PI*1.5,R=72+q*9;c.beginPath();c.arc(H[0],H[1]-28,R,e+.15,e+1.3+q*.2);c.stroke()}}
  if(t>.8){const s=ease((t-.8)/.12);for(const[x,y,q]of[[52,70,1],[200,56,.8],[214,130,.6],[40,140,.7]])star(c,x,y,14*q*s*(1+.2*sin(t*T*6+x)))}
  c.save();c.translate(H[0]+P[0],H[1]+P[1]);c.rotate(r);c.translate(-P[0],-P[1])
  const lg=d=>mix(mix([[2+d,24],[d*2,48]].flat(),[[16,16],[0,34]].flat(),cr),[[22,-14],[6,10]].flat(),k)
  const S=mix([0,-46],[10,-40],k),HD=mix([4,-94],[30,-72],k),tl=lerp(0,.5,k)
  const arm=(dx,w)=>{const am=mix(mix(dx>0?[24,-12,48,-34]:[-24,-12,-46,-34],[-14,20,-30,34],ab),[18,8,14,30],k),o=[S[0]+dx,S[1]],e=[o[0]+am[0],o[1]+am[1]],h2=[o[0]+am[2],o[1]+am[3]];limb(c,[o,e,h2],w);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...h2,8,0,T);c.fill();c.stroke()}
  const leg=dx=>{const l=lg(dx),hp=[dx,0],kn=[dx+l[0],l[1]],ft=[dx+l[2],l[3]];limb(c,[hp,kn,ft],15);c.save();c.lineWidth=15;c.strokeStyle=dt;c.beginPath();c.moveTo(...hp);c.lineTo(...kn);c.lineTo(...ft);c.stroke();c.restore()
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(ft[0]+5,ft[1]+3,13,8,0,0,T);c.fill();c.stroke()}
  arm(-8,12);leg(-6)
  // jacket
  c.save();c.translate(0,0);c.rotate(k*.25)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-22,4);c.lineTo(22,4);c.lineTo(24,-44);c.quadraticCurveTo(0,-54,-22,-44);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(4,-48);c.lineTo(4,4);c.stroke();c.fillStyle='#111';c.fillRect(-22,-2,44,7);c.beginPath();c.moveTo(-10,-50);c.lineTo(4,-36);c.lineTo(18,-50);c.lineTo(14,-54);c.lineTo(4,-44);c.lineTo(-6,-54);c.fill()
  c.restore()
  leg(6)
  // head with a crosshatched top bun
  const happy=t<.14||t>.76
  c.save();c.translate(...HD);c.rotate(tl);c.scale(.64,.64);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#fff'
  const bun=()=>{c.beginPath();c.arc(128,22,30,0,T)},back=()=>{c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,74,88,40,128,40);c.bezierCurveTo(168,40,204,74,186,150);c.closePath()}
  for(const f of[bun,back]){f();c.fill();c.save();c.clip();xhatch(c,40,-20,220,170);c.restore();c.lineWidth=9;f();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.roundRect(100,40,56,16,8);c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,110,140,-1,lt,happy);eye(c,158,140,1,lt,happy)
  c.lineWidth=3.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(134+d*42+j-3,168),c.lineTo(134+d*42+j+3,160),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath()
  if(happy)c.moveTo(120,164),c.lineTo(150,164),c.quadraticCurveTo(146,184,135,184),c.quadraticCurveTo(124,184,120,164),c.fill(),c.stroke()
  else c.moveTo(126,168),c.quadraticCurveTo(136,174,146,168),c.stroke()
  const fr=()=>{c.beginPath();c.moveTo(72,120);c.bezierCurveTo(66,70,100,50,128,52);c.bezierCurveTo(160,50,192,70,186,120);c.quadraticCurveTo(170,96,150,90);c.quadraticCurveTo(146,104,134,110);c.quadraticCurveTo(126,94,112,90);c.quadraticCurveTo(96,100,84,102);c.quadraticCurveTo(78,108,72,120);c.closePath()}
  fr();c.fill();c.save();c.clip();xhatch(c,60,40,200,130);c.restore();c.lineWidth=9;fr();c.stroke()
  c.restore()
  arm(8,12)
  c.restore()
  c.restore()
}

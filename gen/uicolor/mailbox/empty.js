// mailbox with its flag down, the door drops open with a puff of dust and a lonely moth flutters out, loops around and leaves, then the door shuts
const{sin,cos,PI,max,min,abs,floor}=Math,T=2*PI
export const frames=24,delay=80
const MB='#4dabf7',DR='#74c0fc',DI='#d0ebff',IN='#343a40',FL='#ff6b6b',PO='#a9744f',MW='#ffe8cc',MS='#e0a96d',MG='#ced4da',BL='#ffa8a8',DU='#e9ecef'
const E=u=>u<0?0:u>1?1:u*u*(3-2*u)
const KP=[[66,118],[66,118],[46,64],[100,34],[164,58],[200,30],[250,-70],[250,-70]]
const cr=u=>{const s=min(4.999,max(0,u)*5),k=floor(s),f=s-k,[a,b,d,e]=KP.slice(k,k+4);return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f**3))}
const arch=(c,x,k)=>{c.beginPath();c.moveTo(x-32,148);for(let a=PI;a<=T+.01;a+=PI/16)c.lineTo(x+32*cos(a),148-(40-32*sin(a))*k);c.lineTo(x+32,148);c.closePath()}
const moth=(c,x,y,s,f,r)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.strokeStyle='#111'
  for(const d of[-1,1]){c.save();c.scale(d*f,1);c.fillStyle=MW;c.lineWidth=5
    c.beginPath();c.moveTo(0,4);c.bezierCurveTo(24,4,34,22,24,32);c.bezierCurveTo(14,40,4,26,0,10);c.fill();c.stroke()
    c.beginPath();c.moveTo(0,-4);c.bezierCurveTo(18,-32,50,-30,46,-8);c.bezierCurveTo(44,8,16,10,0,4);c.fill();c.stroke()
    c.fillStyle=MS;c.beginPath();c.arc(30,-10,6,0,T);c.fill();c.beginPath();c.arc(16,20,4,0,T);c.fill();c.restore()}
  for(const d of[-1,1])for(const[w,st]of[[7,'#111'],[3,MW]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(d*3,-16),c.quadraticCurveTo(d*6,-30,d*16,-34),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle=MG;c.beginPath();c.ellipse(0,8,8,20,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(0,-13,9,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*3.5,-14,2,0,T),c.fill()
  c.restore()
}
export default(c,t)=>{
  const th=PI*.66*(E((t-.06)/.12)-E((t-.82)/.12)),k=cos(th),op=th>.05,u=(t-.2)/.66,[mx,my]=cr(u),mv=u>0&&u<1
  c.save();c.translate(128,120);c.scale(1.12,1.12);c.translate(-128,-120)
  c.fillStyle=PO;c.beginPath();c.roundRect(126,140,26,88,4);c.fill();c.stroke()
  c.fillStyle=MB;c.beginPath();c.moveTo(72,76);c.lineTo(192,76);c.arc(192,108,32,-PI/2,0);c.lineTo(224,148);c.lineTo(72,148);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(110,88);c.lineTo(176,88);c.stroke();c.strokeStyle='#111'
  arch(c,72,1);c.fillStyle=op?IN:DR;c.fill();c.lineWidth=7;c.stroke()
  if(op){arch(c,72,k);c.fillStyle=k>0?DR:DI;c.fill();c.stroke()}
  c.fillStyle=MG;c.lineWidth=4;c.beginPath();c.roundRect(64,op?148-(k>0?66:60)*k-4:78,16,8,4);c.fill();c.stroke()
  c.save();c.translate(204,104);c.rotate(.06*sin(t*T*2))
  for(const[w,s]of[[11,'#111'],[5,FL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(-34,0),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=FL;c.beginPath();c.roundRect(-44,-4,18,30,4);c.fill();c.stroke()
  c.fillStyle=MG;c.beginPath();c.arc(0,0,6,0,T);c.fill();c.stroke();c.restore()
  const lx=mv?max(-3,min(3,(mx-136)/14)):0,ly=mv?max(-3,min(2,(my-116)/14)):2
  c.fillStyle='#111';for(const x of[118,146])c.beginPath(),c.arc(x+lx,106+ly,6,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[118,146])c.beginPath(),c.arc(x+lx-2,104+ly,2,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(110,92);c.lineTo(124,88);c.moveTo(154,92);c.lineTo(140,88);c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(132,132,8,1.2*PI,1.8*PI);c.stroke()
  c.fillStyle=BL;for(const x of[106,158])c.beginPath(),c.ellipse(x,120,7,4,0,0,T),c.fill()
  c.restore()
  const p=(t-.14)/.3
  if(p>0&&p<1)for(const[a,o]of[[-2.4,0],[-1.9,.15],[-2.9,.1]]){const q=min(1,max(0,p-o)/.8),r=13*sin(PI*q);if(r>1)c.fillStyle=DU,c.lineWidth=4,c.beginPath(),c.arc(66+cos(a)*(30+40*q),118+sin(a)*(20+40*q),r,0,T),c.fill(),c.stroke()}
  if(mv)moth(c,mx,my,.4+.75*E(u*5),.25+.75*abs(cos(6*PI*t)),.3*sin(u*T*2))
}

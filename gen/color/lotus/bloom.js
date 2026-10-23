// pink lotus on a lily pad opening into full bloom and closing back to a bud, ripples spreading on the pond
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=100
const W='#74c0fc',WL='#d0ebff',PAD='#51cf66',PD='#2f9e44',P1='#fcc2d7',P2='#f783ac',PV='#fff0f6',POD='#ffd43b',PDK='#f59f00'
const spk=(c,x,y,s)=>{c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const o=min(1,max(0,(1-cos(t*T))/2*1.3-.12)),bx=128,by=166
  const pond=()=>{c.beginPath();c.ellipse(128,174,118,48,0,0,T)}
  pond();c.fillStyle=W;c.fill();c.stroke()
  c.save();pond();c.clip()
  for(let k=0;k<2;k++){const p=(t*2+k/2)%1,r=98+50*p;c.strokeStyle=WL;c.lineWidth=5*(1-p)+1;c.beginPath();c.ellipse(128,176,r,r*.36,0,0,T);c.stroke()}
  c.restore();c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle=PAD;c.beginPath();c.ellipse(204,204,16,6,0,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(128,176);c.ellipse(128,176,96,32,0,.4,.4+T-.45);c.closePath();c.fill();c.stroke()
  c.strokeStyle=PD;c.lineWidth=3;for(const q of[1.2,1.9,2.6,3.4,4.2,5,5.7])c.beginPath(),c.moveTo(128,176),c.lineTo(128+82*cos(q),176+26*sin(q)),c.stroke()
  c.strokeStyle='#111'
  const petal=(a,L,w,col)=>{c.save();c.translate(bx,by);c.rotate(a);c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-w,-L*.5,0,-L);c.quadraticCurveTo(w,-L*.5,0,0);c.fillStyle=col;c.fill();c.lineWidth=7;c.stroke();c.strokeStyle=PV;c.lineWidth=4;c.beginPath();c.moveTo(0,-12);c.lineTo(0,-L*.68);c.stroke();c.restore();c.strokeStyle='#111'}
  petal(0,117,55,P1);for(const d of[-1,1])petal(d*(.36+.95*o),107,55,P1)
  c.fillStyle=POD;c.lineWidth=6;c.beginPath();c.ellipse(128,109,26,12,0,0,T);c.fill();c.stroke()
  c.fillStyle=PDK;for(const x of[-13,0,13])c.beginPath(),c.arc(128+x,109,3,0,T),c.fill()
  for(const d of[-1,1])petal(d*(.12+.72*o),96,49,P2)
  petal(0,88*(1-.52*o),49,P2)
  if(o>.7)for(const[x,y,q]of[[46,62,0],[210,54,.5]])spk(c,x,y,(o-.7)/.3*(5+5*max(0,sin((t+q)*4*T))))
}

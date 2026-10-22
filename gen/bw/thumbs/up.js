// thumbs up bouncing on the beat while little sparkles pop around it
const{sin,cos,PI,max}=Math,T=2*PI
export const delay=70
const star=(c,x,y,s)=>{c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.32:s,a=k*PI/4;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const b=max(0,sin(2*T*t)),y=-14*b,r=-.06+.1*sin(2*T*t-.6)
  c.lineWidth=5;for(const[x,yy,p]of[[48,70,0],[208,92,.33],[196,30,.66]]){const s=16*max(0,sin(((t+p)%1)*T*2));if(s>1)star(c,x,yy,s)}
  c.lineWidth=7
  c.translate(128,226+y);c.rotate(r);c.translate(-128,-226)
  c.save();c.translate(104,128);c.rotate(-.12);c.beginPath();c.roundRect(-17,-82,34,96,17);c.restore();c.fill();c.stroke()
  c.lineWidth=4;c.save();c.translate(104,128);c.rotate(-.12);c.beginPath();c.arc(0,-62,10,PI*1.1,PI*1.9);c.stroke();c.restore();c.lineWidth=7
  c.beginPath();c.roundRect(74,112,56,100,20);c.fill();c.stroke()
  for(let k=0;k<4;k++)c.beginPath(),c.roundRect(100,114+k*24,74,26,13),c.fill(),c.stroke()
  c.beginPath();c.roundRect(76,204,82,26,6);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(86,212);c.lineTo(148,212);c.moveTo(86,222);c.lineTo(148,222);c.stroke()
}

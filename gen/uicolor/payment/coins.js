// spinning gold coins dropping one after another into a happy purple wallet that gulps and bounces with each one
const{sin,cos,PI,abs,max,min}=Math,T=2*PI
export const frames=24,delay=60
const G='#ffd43b',GD='#f59f00',WF='#b197fc',WB='#7950f2',WT='#9775fa',BILL='#8ce99a',BL='#ffa8a8'
const C=[[100,0],[148,1/3],[122,2/3]]
const sp=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  let bump=0
  for(const[x,o]of C){const p=(t+o)%1,q=(p-.42)/.2;if(q>0&&q<1)bump=max(bump,sin(PI*q))}
  c.translate(128,234);c.scale(1+.05*bump,1-.07*bump);c.translate(-128,-234)
  c.fillStyle=WB;c.beginPath();c.roundRect(42,104,172,122,18);c.fill();c.stroke()
  c.save();c.translate(150,96);c.rotate(.12);c.fillStyle=BILL;c.beginPath();c.roundRect(-34,-26,68,60,4);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(0,-2,9,0,T);c.stroke();c.restore();c.lineWidth=7
  for(const[x,o]of C){
    const p=(t+o)%1;if(p>.44)continue
    const u=p/.44,y=34+114*u*u,w=max(6,28*abs(cos(u*PI*1.5))),xx=x+8*sin(u*PI)
    c.save();c.translate(xx,y);c.scale(min(1,u*5),min(1,u*5))
    c.fillStyle=GD;c.lineWidth=5;c.beginPath();c.ellipse(0,0,w,28,0,0,T);c.fill();c.stroke()
    c.fillStyle=G;c.beginPath();c.ellipse(0,0,w*.78,22,0,0,T);c.fill()
    if(w>12){c.scale(w/28,1);c.lineWidth=4.5/(w/28);c.beginPath();c.moveTo(7,-8);c.bezierCurveTo(4,-14,-10,-13,-9,-5);c.bezierCurveTo(-8,2,9,-1,9,6);c.bezierCurveTo(9,14,-6,15,-9,8);c.moveTo(0,-17);c.lineTo(0,17);c.stroke()}
    c.restore()
  }
  c.lineWidth=7;c.fillStyle=WF;c.beginPath();c.roundRect(32,128,192,104,20);c.fill();c.stroke()
  c.fillStyle=WT;c.beginPath();c.roundRect(176,150,56,46,12);c.fill();c.stroke()
  c.fillStyle=G;c.lineWidth=5;c.beginPath();c.arc(214,173,8,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(48,148);c.lineTo(48,168);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(110+d*26,170-3*bump,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(108+d*26,167-3*bump,2.2,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(110,184,10+3*bump,0,PI);c.closePath();c.fill()
  c.fillStyle='#ff8787';c.beginPath();c.ellipse(110,190+2*bump,5,3,0,0,T);c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(110+d*44,186,8,4.5,0,0,T),c.fill()
  for(const[x,o]of C){const p=(t+o)%1,q=(p-.42)/.2;if(q>0&&q<1)sp(c,x+(x<128?-34:34),112,14*sin(PI*q))}
}

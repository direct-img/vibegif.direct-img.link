// gold coin spinning on the spot, star on one face and a heart on the other, glints popping off it
const{sin,cos,PI,abs,max}=Math,T=2*PI
export const frames=24,delay=50
const G='#ffd43b',GD='#f59f00',GE='#fab005'
export default(c,t)=>{
  const a=t*T,k=cos(a),w=max(4,72*abs(k)),y=-6*sin(2*T*t),edge=10*sin(a)
  for(const[x,yy,o]of[[44,60,0],[210,70,.5],[200,196,.25]]){const s=10*max(0,sin(PI*((t*2+o)%1)));if(s>1.5){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,yy-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,yy+qy,x+px,yy+py);c.fill();c.stroke()}}
  c.lineWidth=7;c.translate(128,128+y)
  c.fillStyle=GE;c.beginPath();c.ellipse(edge,0,w,72,0,0,T);c.fill();c.stroke()
  c.beginPath();c.rect(Math.min(0,edge),-72,abs(edge),144);c.fill()
  c.fillStyle=G;c.beginPath();c.ellipse(0,0,w,72,0,0,T);c.fill();c.stroke()
  if(w>14){
    c.save();c.scale(w/72,1)
    c.lineWidth=5/(w/72);c.beginPath();c.arc(0,0,56,0,T);c.strokeStyle=GD;c.stroke();c.strokeStyle='#111'
    c.fillStyle=GD;c.beginPath()
    if(k>0)for(let j=0;j<10;j++){const r=j%2?14:32,b=j*PI/5-PI/2;c.lineTo(cos(b)*r,sin(b)*r)}
    else c.moveTo(0,22),c.bezierCurveTo(-34,0,-22,-30,0,-14),c.bezierCurveTo(22,-30,34,0,0,22)
    c.closePath();c.fill();c.lineWidth=4/(w/72);c.stroke()
    c.restore()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(0,0,w*.78,56,0,PI*1.15,PI*1.38);c.stroke();c.strokeStyle='#111'
  }
}

// two-tier birthday cake, candle flame flickering, sparkles popping around it
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const star=(c,x,y,r)=>{const k=r*.18;c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,k,-k],[0,r,k,k],[-r,0,-k,k],[0,-r,-k,-k]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const tier=(c,x,y,w,h)=>{
  c.beginPath();c.roundRect(x,y,w,h,10);c.fill();c.stroke()
  c.beginPath();c.moveTo(x,y+12);const n=Math.round(w/22);for(let k=0;k<n;k++){const a=x+k*w/n;c.arc(a+w/n/2,y+12,w/n/2,PI,0,true)}c.lineWidth=5;c.stroke();c.lineWidth=7
}
export default(c,t)=>{
  c.lineWidth=4;for(const[x,y,o]of[[42,70,0],[214,56,.33],[206,128,.66]]){const r=13*max(0,sin(PI*((t*2+o)%1)));if(r>1.5)star(c,x,y,r)}
  c.lineWidth=7
  c.beginPath();c.ellipse(128,230,100,12,0,0,T);c.fill();c.stroke()
  tier(c,48,152,160,76);tier(c,74,98,108,58)
  c.lineWidth=4;for(const[x,y,a]of[[70,196,.4],[100,212,-.5],[140,200,.8],[176,210,-.2],[188,184,.3],[96,136,-.6],[124,144,.5],[160,132,-.3]])c.beginPath(),c.moveTo(x-cos(a)*5,y-sin(a)*5),c.lineTo(x+cos(a)*5,y+sin(a)*5),c.stroke()
  c.lineWidth=7;c.beginPath();c.roundRect(119,50,18,50,4);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(119,50,18,50);c.clip();c.lineWidth=4;for(const y of[56,72,88])c.beginPath(),c.moveTo(118,y+8),c.lineTo(138,y),c.stroke();c.restore()
  c.beginPath();c.moveTo(128,50);c.lineTo(128,42);c.lineWidth=4;c.stroke()
  const h=26+5*sin(2*T*t)+3*sin(5*T*t),b=4*sin(3*T*t)
  c.lineWidth=6;c.beginPath();c.moveTo(128+b,40-h);c.quadraticCurveTo(142,32,138,22+0);c.arc(128,24,10,0,PI);c.quadraticCurveTo(114,32,128+b,40-h);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,28,4,6,0,0,T);c.fill()
}

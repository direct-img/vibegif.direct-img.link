// fridge door swings open to show nothing but one lonely shivering egg, the light inside flickering, then it shuts again
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=90
const BD='#99e9f2',LN='#e3fafc',LIT='#fff3bf',DIM='#5c6670',SH='#d0ebff',BY='#ffd43b',BL='#ffa8a8',FL='000101110110101111010000'
const E=u=>u<0?0:u>1?1:u*u*(3-2*u)
export default(c,t,i)=>{
  const th=PI*.68*(E((t-.04)/.16)-E((t-.76)/.14)),k=cos(th),op=th>.05,on=op&&FL[i]>0,X=90,W=112
  c.fillStyle='#495057';for(const x of[100,176])c.beginPath(),c.roundRect(x,226,18,16,4),c.fill(),c.stroke()
  c.fillStyle=BD;c.beginPath();c.roundRect(X,14,W,220,16);c.fill();c.stroke()
  if(op){
    c.fillStyle=on?LIT:DIM;c.beginPath();c.roundRect(96,84,100,142,8);c.fill();c.lineWidth=5;c.stroke()
    if(on){c.lineWidth=4;c.fillStyle=BY;c.beginPath();c.arc(146,88,9,0,PI);c.fill();c.stroke()
      for(const a of[.5,1.1,PI/2,PI-1.1,PI-.5])for(const[w,s]of[[8,'#111'],[3,BY]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(146+cos(a)*16,88+sin(a)*16),c.lineTo(146+cos(a)*24,88+sin(a)*24),c.stroke()
      c.strokeStyle='#111'}
    c.lineWidth=4;c.fillStyle=SH;for(const y of[132,192])c.beginPath(),c.roundRect(96,y,100,8,3),c.fill(),c.stroke()
    const j=i%2?1.5:-1.5
    c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(146+j,170,18,23,0,0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.globalAlpha=.8;c.beginPath();c.ellipse(139+j,160,4,6,-.4,0,T);c.fill();c.globalAlpha=1
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(146+j+d*7,170,2.8,0,T),c.fill()
    c.lineWidth=3;c.beginPath();c.arc(146+j,182,4.5,1.2*PI,1.8*PI);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(146+j+d*12,177,3.5,2,0,0,T),c.fill()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  const fx=X+W*k,dy=6*sin(th)
  c.fillStyle=k>0?BD:LN;c.beginPath();c.moveTo(X,80);c.lineTo(fx,80-dy);c.lineTo(fx,232+dy);c.lineTo(X,232);c.closePath();c.fill();c.stroke()
  if(k>.25)for(const[w,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(X+(W-16)*k,100),c.lineTo(X+(W-16)*k,144),c.stroke()
  if(k<-.2){c.lineWidth=4;c.strokeStyle='#111';c.fillStyle=SH;for(const y of[118,176])c.beginPath(),c.moveTo(X,y),c.lineTo(fx+6,y+(y>150?3:-3)*sin(th)),c.lineTo(fx+6,y+20),c.lineTo(X,y+20),c.closePath(),c.fill(),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7;c.beginPath();c.moveTo(X,78);c.lineTo(X+W,78);c.stroke()
  for(const[w,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(186,30),c.lineTo(186,62),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111'
  const ly=op?4:0
  for(const d of[-1,1])c.beginPath(),c.arc(146+d*20,44+ly,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(144+d*20,42+ly,2,0,T),c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(146+d*11,30),c.lineTo(146+d*27,34),c.stroke()
  c.lineWidth=5;c.beginPath();op?c.ellipse(146,62,5,4,0,0,T):c.arc(146,66,8,1.2*PI,1.8*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(146+d*36,56,7,4,0,0,T),c.fill()
  if(op){c.fillStyle='#a5d8ff';c.lineWidth=3;c.beginPath();c.moveTo(106,32);c.quadraticCurveTo(113,43,106,45);c.quadraticCurveTo(99,43,106,32);c.fill();c.stroke()}
}

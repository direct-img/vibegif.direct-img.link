// happy red balloon bobbing, panics, pops into a burst of rubber bits, the sad scrap and its droopy string flop to the ground, then it puffs back up
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=24,delay=80
const RD='#ff6b6b',BL='#ffa8a8',BY='#ffd43b',TR='#74c0fc'
const E=u=>u<0?0:u>1?1:u*u*(3-2*u)
const two=(c,w,col,f)=>{for(const[l,s]of[[w,'#111'],[w-6,col]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
export default(c,t,i)=>{
  let x=128,y=96,rx=58,ry=68,b=0,m=0,f=0,ph=0
  if(i<9){y=96+4*sin(i/9*T);ph=i/9*T;if(i>6)m=1,x+=i%2?5:-5,rx+=5,ry+=4}
  else if(i<19){const q=min(1,((i-9)/4)**2);x=128-24*q;y=100+88*q;rx=52;ry=32;b=.13;m=i<11?1:2;f=q;if(i==13)rx=60,ry=24;if(i==14)rx=49,ry=35}
  else{const u=E((i-18)/6);x=104+24*u;y=188-92*u;rx=52+6*u;ry=32+36*u;b=.13*(1-u);m=u<.5?2:0;f=1-u}
  const k=rx/58,K=y+ry
  if(i==9){c.save();c.translate(128,96);c.beginPath();for(let n=0;n<24;n++){const r=n%2?50:82,a=n*PI/12;c.lineTo(cos(a)*r,sin(a)*r)}c.closePath();c.fillStyle=BY;c.fill();c.stroke();c.restore()}
  if(i==10)for(let n=0;n<12;n++){const a=n*T/12+.2;two(c,12,BY,()=>{c.moveTo(128+cos(a)*62,96+sin(a)*62);c.lineTo(128+cos(a)*84,96+sin(a)*84)})}
  if(i>6&&i<9)for(const d of[-1,1])two(c,10,'#fff',()=>{for(const o of[-16,16])c.moveTo(x+d*(rx+14),y+o),c.lineTo(x+d*(rx+26),y+o)})
  two(c,9,'#fff',()=>{for(let n=0;n<=14;n++){const u=n/14,ax=x+9*sin(u*5+ph)*u,ay=K+8+u*60,gx=x+8+u*100,gy=K+8+3*sin(u*16)*u;c.lineTo(ax+(gx-ax)*f,ay+(gy-ay)*f)}})
  c.lineWidth=7;c.fillStyle=RD;c.beginPath()
  for(let a=0;a<T;a+=.1){const r=1+b*sin(a*7+1)*(.7+.3*sin(a*3));c.lineTo(x+cos(a)*rx*r*(1-.1*Math.max(0,sin(a))),y+sin(a)*ry*r)}
  c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(x-7*k,K+9);c.lineTo(x+7*k,K+9);c.lineTo(x,K-3);c.closePath();c.fill();c.stroke()
  if(b<.08){c.fillStyle='#fff';c.beginPath();c.ellipse(x-rx*.45,y-ry*.45,rx*.14,ry*.2,-.5,0,T);c.fill()}
  c.save();c.translate(x,y+(m==2?-2:0));c.scale(k,k);c.fillStyle='#111';c.strokeStyle='#111'
  if(m==1){
    c.lineWidth=4;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*18,-8,10,0,T),c.fill(),c.stroke()
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*18,-7,4,0,T),c.fill()
    c.beginPath();c.ellipse(0,18,7,9,0,0,T);c.fill()
  }else{
    for(const d of[-1,1])c.beginPath(),c.arc(d*18,-6,6.5,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*18-2,-8,2.2,0,T),c.fill()
    c.lineWidth=5;c.beginPath();m?c.arc(0,20,10,1.15*PI,1.85*PI):c.arc(0,6,11,.15*PI,.85*PI);c.stroke()
    if(m==2){c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*9,-22),c.lineTo(d*27,-16),c.stroke()}
  }
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*34,8,8,5,0,0,T),c.fill()
  if(i>14&&i<19){c.fillStyle=TR;c.lineWidth=3/k;const ty=-2+(i-15)*7;c.beginPath();c.moveTo(-18,ty);c.quadraticCurveTo(-11,ty+10,-18,ty+12);c.quadraticCurveTo(-25,ty+10,-18,ty);c.fill();c.stroke()}
  c.restore()
  if(i>8&&i<13)for(let n=0;n<6;n++){const a=n*T/6+.4,d=60+(i-9)*26;c.save();c.translate(128+cos(a)*d,96+sin(a)*d+(i-9)**2*5);c.rotate(a+i);two(c,10,RD,()=>{c.moveTo(-9,0);c.quadraticCurveTo(-4,-8,1,0);c.quadraticCurveTo(5,7,10,-1)});c.restore()}
}

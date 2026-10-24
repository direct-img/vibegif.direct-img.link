// a ring wrench cranks a hex bolt a sixth of a turn and ratchets back for another go, while a big gear turns behind them
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const gear=(c,x,y,n,R,th)=>{
  const p=T/n,ri=R-10,ro=R+9
  c.beginPath();for(let k=0;k<n;k++){const a=th+k*p;for(const[f,r]of[[-.5,ri],[-.34,ri],[-.22,ro],[.22,ro],[.34,ri]])c.lineTo(x+cos(a+f*p)*r,y+sin(a+f*p)*r)}
  c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(x,y,R-22,0,T);c.stroke()
  for(let k=0;k<5;k++){const a=th+k*T/5;c.beginPath();c.arc(x+cos(a)*(R-38),y+sin(a)*(R-38),7,0,T);c.stroke()}
  c.lineWidth=7;c.beginPath();c.arc(x,y,11,0,T);c.stroke()
}
export default(c,t)=>{
  const p=ease(t/.5),q=ease((t-.6)/.32),a=-.55+(p-q)*PI/3,b=p*PI/3,X=112,Y=160
  gear(c,82,92,10,54,-t*T/5)
  if(p>.15&&p<.95)for(const r of[128,110])ln(c,11,()=>c.arc(X,Y,r,a-.42,a-.16))
  c.save();c.translate(X,Y);c.rotate(a)
  const sh=()=>{c.beginPath();c.roundRect(20,-15,104,30,15);c.moveTo(38,0);c.arc(0,0,38,0,T)}
  c.lineWidth=14;sh();c.stroke();sh();c.fill()
  c.lineWidth=4;c.beginPath();c.roundRect(52,-5,52,10,5);c.stroke()
  c.lineWidth=6;c.beginPath();c.arc(0,0,27,0,T);c.stroke()
  c.restore()
  c.lineWidth=6;c.beginPath();for(let k=0;k<6;k++)c.lineTo(X+cos(b+k*PI/3)*21,Y+sin(b+k*PI/3)*21);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(X,Y,10,0,T);c.stroke()
}

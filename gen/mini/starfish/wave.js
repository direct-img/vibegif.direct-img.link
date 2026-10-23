// starfish sitting on its two bottom arms, waving hello with its upper right arm, smiling and blinking
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const cx=128,cy=134+2*sin(T*t*2),bl=t>.7&&t<.76,wv=.5+.5*sin(T*t*2)
  c.fillStyle='#111'
  const arm=(a,bend)=>{
    let x=cx,y=cy
    for(let i=0;i<=40;i++){const u=i/40;x+=cos(a+bend*u)*78/40;y+=sin(a+bend*u)*78/40;c.beginPath();c.arc(x,y,21-11*u,0,T);c.fill()}
  }
  arm(-PI/2,.06*sin(T*t));arm(-PI*.9,.08*sin(T*t+1));arm(PI*.7,.04*sin(T*t+2));arm(PI*.3,-.04*sin(T*t+2))
  arm(-.31-.32*wv,-.55*sin(T*t*2-.9))
  c.beginPath();c.arc(cx,cy,34,0,T);c.fill()
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=3;c.lineCap='round'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(cx+d*13,cy-9,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(cx+d*13,cy-7,5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(cx,cy+3,9,.2*PI,.8*PI);c.stroke()
}

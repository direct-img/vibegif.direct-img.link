// chochin-obake, a paper lantern yokai swinging from its hook: its one big eye glances around and blinks, its long tongue licks out and wags
const{sin,cos,PI,sqrt,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const bl=t>.44&&t<.5,lk=sin(T*t*2),gx=6*sin(T*t+1)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(128,14);c.rotate(.12*sin(T*t));c.scale(1.06,1.06);c.translate(-128,-10)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  c.lineWidth=4;c.beginPath();c.moveTo(128,12);c.lineTo(128,46);c.stroke()
  c.beginPath();c.arc(128,16,7,0,T);c.stroke();c.lineWidth=6
  for(const y of[50,198])shape(()=>c.roundRect(96,y,64,14,4))
  shape(()=>c.ellipse(128,130,62,70,0,0,T))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  for(const y of[50,198])c.beginPath(),c.moveTo(100,y+(y<99?14:0)),c.lineTo(156,y+(y<99?14:0)),c.stroke()
  for(let y=76;y<=190;y+=19){const w=62*sqrt(max(0,1-((y-130)/70)**2))-6;c.beginPath();c.moveTo(128-w,y);c.quadraticCurveTo(128,y+5,128+w,y);c.stroke()}
  c.fillStyle=c.strokeStyle='#fff';c.beginPath();c.ellipse(128,104,24,21,0,0,T);c.fill()
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  if(bl)c.beginPath(),c.arc(128,100,20,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.ellipse(128,104,24,21,0,0,T),c.stroke(),c.beginPath(),c.arc(128+gx,106,9,0,T),c.fill()
  c.beginPath();c.moveTo(92,148);c.quadraticCurveTo(128,158,164,146);c.quadraticCurveTo(130,196,92,148);c.fill()
  const tx=150+30*lk,ty=200-6*lk
  const tg=()=>{c.beginPath();c.moveTo(128,164);c.quadraticCurveTo(132+12*lk,206,tx,ty);c.stroke()}
  c.save();c.beginPath();c.ellipse(128,130,62,70,0,0,T);c.rect(96,198,64,14);c.clip();c.lineWidth=23;tg();c.restore()
  c.strokeStyle='#fff';c.lineWidth=16;tg()
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(130,172);c.quadraticCurveTo(132+10*lk,198,(tx+128)/2+8*lk,(ty+170)/2+6);c.stroke()
}

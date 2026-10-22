// spider bouncing on its thread like a bungee cord, legs wiggling
// legs and body get their white rims in one pass first, so they read on black
const{sin,cos,PI}=Math,T=2*PI
export const delay=70
export default(c,t)=>{
  const y=132+32*sin(T*t)
  for(const[l,s]of[[6,'#111'],[2,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128,0),c.lineTo(128,y-20),c.stroke()
  const legs=[]
  for(const d of[-1,1])for(let i=0;i<4;i++){
    const wg=6*sin(2*T*t+i*1.3+(d>0?1:0)),by=y-9+i*7
    legs.push([[128+d*18,by],[128+d*(50+i*3),y-30+i*14+wg*.5],[128+d*(70-i*2),y-10+i*20+wg]])
  }
  const pl=p=>{c.beginPath();c.moveTo(...p[0]);c.lineTo(...p[1]);c.lineTo(...p[2])}
  c.strokeStyle='#fff';c.lineWidth=15;for(const p of legs)pl(p),c.stroke()
  c.lineWidth=16;c.beginPath();c.ellipse(128,y,30,27,0,0,T);c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;for(const p of legs)pl(p),c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,y,30,27,0,0,T);c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*11,y-4,8,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*10,y-2,4.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*10-1.5,y-4,1.5,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(128,y+8,6,.15*PI,.85*PI);c.stroke()
}

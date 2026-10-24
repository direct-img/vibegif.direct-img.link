// closed stage curtains sway and twitch as if they're about to part, while a spotlight wobbles across them
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
export default(c,t)=>{
  const g=3+9*max(0,sin(T*t))**3,sp=[128+34*sin(T*t),132+18*sin(2*T*t+1),50+4*sin(3*T*t)]
  const cur=d=>{
    c.beginPath();c.moveTo(128+d*118,44);c.lineTo(128+d*118,222)
    const ix=y=>128+d*(g+(y-44)/178*10*(1+sin(T*t))+3*sin(y/26-T*t*2))
    c.lineTo(128+d*118,224);c.quadraticCurveTo(128+d*(g+60),232,ix(222),222)
    for(let y=222;y>=44;y-=6)c.lineTo(ix(y),y)
    c.closePath()
  }
  c.fillStyle='#111';c.fillRect(20,40,216,184)
  for(const d of[-1,1]){
    cur(d);c.fillStyle='#bbb';c.fill()
    c.save();c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(sp[0],sp[1],sp[2],sp[2]*1.1,0,0,T);c.fill()
    c.strokeStyle='#888';c.lineWidth=8
    for(const f of[.3,.58,.84]){c.beginPath();for(let y=44;y<=230;y+=6)c.lineTo(128+d*(g+f*108+(y-44)*.04*(1+sin(T*t))+3*sin(y/26-T*t*2+f*5)),y);c.stroke()}
    c.restore();c.strokeStyle='#111';c.lineWidth=7;cur(d);c.stroke()
  }
  c.fillStyle='#fff'
  c.beginPath();c.roundRect(8,218,240,28,8);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(18,230);c.lineTo(238,230);c.stroke();c.lineWidth=7
  c.beginPath();c.moveTo(8,14);c.lineTo(248,14);c.lineTo(248,50)
  for(let k=0;k<5;k++)c.arc(248-24-k*48,50,24,0,PI)
  c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(16,30);c.lineTo(240,30);c.stroke()
}

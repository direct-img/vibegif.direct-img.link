// retro tv with wobbling rabbit-ear antennas and snowy static flickering on the screen
// the static cycles through three fixed noise patterns so the file stays small
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=80
let s=7;const rnd=()=>(s=s*16807%2147483647)/2147483647
const noise=[0,1,2].map(()=>Array.from({length:22*17},()=>rnd()<.5))
export default(c,t,i)=>{
  for(const[d,a0,L]of[[-1,-2.1,70],[1,-1.05,80]]){
    const a=a0+.1*sin(t*T*2+d)
    for(const[w,s2]of[[13,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=s2,c.beginPath(),c.moveTo(128,86),c.lineTo(128+cos(a)*L,86+sin(a)*L),c.stroke()
    c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.arc(128+cos(a)*L,86+sin(a)*L,8,0,T);c.fill();c.stroke()
  }
  c.lineWidth=7;c.beginPath();c.ellipse(128,90,26,12,0,PI,0);c.fill();c.stroke()
  for(const x of[72,184])for(const[w,s2]of[[22,'#111'],[8,'#fff']])c.lineWidth=w,c.strokeStyle=s2,c.beginPath(),c.moveTo(x,210),c.lineTo(x+(x<128?-8:8),232),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.roundRect(32,88,192,124,20);c.fill();c.stroke()
  const scr=()=>{c.beginPath();c.roundRect(48,104,132,92,16)}
  c.save();scr();c.clip();const n=noise[i%3]
  c.fillStyle='#111';for(let y=0;y<17;y++)for(let x=0;x<22;x++)if(n[y*22+x])c.fillRect(48+x*6,104+y*6,6,6)
  c.restore();c.fillStyle='#fff';scr();c.stroke()
  for(const y of[124,156])c.beginPath(),c.arc(202,y,10,0,T),c.fill(),c.stroke()
  c.lineWidth=4;for(const y of[180,190])c.beginPath(),c.moveTo(194,y),c.lineTo(210,y),c.stroke()
  c.lineWidth=5;for(const[y,a]of[[124,.6+t*T],[156,-.4]])c.beginPath(),c.moveTo(202,y),c.lineTo(202+cos(a)*8,y+sin(a)*8),c.stroke()
}

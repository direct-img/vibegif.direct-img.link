// glossy red pop-art lips with the mouth open, a twisting wavy rainbow ribbon pouring out and streaming down, sparkles twinkling around it
export const frames=24,delay=70
const P=Math.PI*2,K='#111',rb=['#ff2e63','#ff8c1a','#ffd400','#25d962','#1ea7ff','#9b4dff']
const sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))),x*x*(3-2*x))
export default(c,t)=>{
  const o=Math.sin(P*t)*3,cy=72
  // lip contours: outer top, inner top, inner bottom, outer bottom
  const ot=()=>{c.moveTo(46,cy+14);c.bezierCurveTo(70,cy-6,92,cy-26,108,cy-24);c.bezierCurveTo(118,cy-23,124,cy-14,128,cy-12)
    c.bezierCurveTo(132,cy-14,138,cy-23,148,cy-24);c.bezierCurveTo(164,cy-26,186,cy-6,210,cy+14)}
  const it=()=>{c.lineTo(210,cy+14);c.bezierCurveTo(180,cy+6-o,150,cy+6-o,128,cy+8-o);c.bezierCurveTo(106,cy+6-o,76,cy+6-o,46,cy+14)}
  const ib=()=>{c.moveTo(46,cy+14);c.bezierCurveTo(80,cy+30+o,100,cy+36+o,128,cy+36+o);c.bezierCurveTo(156,cy+36+o,176,cy+30+o,210,cy+14)}
  const ob=()=>{c.lineTo(210,cy+14);c.bezierCurveTo(188,cy+58,160,cy+68,128,cy+68);c.bezierCurveTo(96,cy+68,68,cy+58,46,cy+14)}
  c.lineWidth=6
  // mouth hole + teeth
  c.beginPath();ot();ob();c.fillStyle='#4a0618';c.fill()
  c.save();c.beginPath();ib();it();c.clip()
  c.beginPath();it();c.strokeStyle='#fff';c.lineWidth=20;c.stroke()
  c.restore();c.strokeStyle=K;c.lineWidth=6
  // lower lip
  c.beginPath();ib();ob();c.closePath();c.fillStyle='#ff1744';c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(150,cy+56);c.quadraticCurveTo(170,cy+52,180,cy+42);c.stroke()
  c.strokeStyle=K
  // ribbon: centerline sways and twists, waves travel downward
  const N=70,L=[]
  for(let k=0;k<=N;k++){
    const u=k/N,y=cy+6+u*170,a=P*(1.1*u-t)
    const x=128+Math.sin(a)*u*44,dx=Math.cos(a)*u*44*P*1.1/170+Math.sin(a)*44/170
    const n=Math.hypot(1,dx),tw=1+(Math.cos(P*(.9*u-t))-1)*sm(.12,.45,u)
    L.push([x,y,1/n,-dx/n,(30+u*8)*tw*(1-.88*sm(.5,1,u))])
  }
  const ed=e=>L.map(([x,y,nx,ny,w])=>[x+nx*w*e,y+ny*w*e])
  for(let s=0;s<6;s++){
    const a=ed(-1+s/3),b=ed(-1+(s+1)/3).reverse()
    c.beginPath();[...a,...b].forEach(p=>c.lineTo(...p));c.closePath()
    c.fillStyle=rb[s];c.fill()
  }
  c.lineWidth=5
  c.beginPath();[...ed(-1),...ed(1).reverse()].forEach(p=>c.lineTo(...p));c.stroke()
  c.lineWidth=6
  // upper lip on top
  c.beginPath();ot();it();c.closePath();c.fillStyle='#ff1744';c.fill();c.stroke()
  // gloss
  c.strokeStyle='#fff'
  c.lineWidth=4;c.beginPath();c.moveTo(84,cy-6);c.quadraticCurveTo(94,cy-14,104,cy-16);c.stroke()
  c.beginPath();c.arc(162,cy-10,2.5,0,P);c.fillStyle='#fff';c.fill()
  // sparkles popping around the stream
  c.strokeStyle=K;c.lineWidth=2.5
  ;[[44,170,0],[210,150,.25],[60,230,.5],[200,222,.75]].forEach(([x,y,f],k)=>{
    const z=Math.max(0,Math.sin(P*(t+f)))*15
    if(z<4)return
    c.beginPath()
    for(let a=0;a<8;a++){const r=a%2?z*.36:z;c.lineTo(x+Math.cos(a*P/8)*r,y+Math.sin(a*P/8)*r)}
    c.closePath();c.fillStyle=rb[[2,4,0,3][k]];c.fill();c.stroke()
  })
}

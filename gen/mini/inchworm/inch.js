// inchworm inching along: the back end catches up into a tall loop, then the front stretches out flat again, ground dashes slide back
const{sin,cos,PI,sqrt,max,min}=Math,T=2*PI
export const frames=24,delay=80,rim=3
const L=170,G=100,Y=164
export default(c,t)=>{
  const A=t<.5,u=A?t/.5:(t-.5)/.5,e=(1-cos(PI*u))/2,o=43-G*t
  const tx=o+(A?G*e:G),hx=o+(A?L:L+G*e),ty=Y-(A?14*sin(PI*u):0),hy=Y-(A?0:16*sin(PI*u)),d=hx-tx
  const H=1.35*sqrt(max(0,(L/2)**2-(d/2)**2)),k=(L-d)*.12
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=4
  for(let n=0;n<4;n++){
    const x=20+n*G-G*t+G*.5,l=8*min(1,max(0,(x-20)/24),max(0,(236-x)/24))
    if(l>.5)c.beginPath(),c.moveTo(x-l,Y+30),c.lineTo(x+l,Y+30),c.stroke()
  }
  c.lineWidth=5
  for(const[x,y]of[[tx-4,ty],[tx+6,ty],[hx-14,hy],[hx-4,hy]])c.beginPath(),c.moveTo(x,y),c.lineTo(x,y+15),c.stroke()
  c.lineWidth=24;c.beginPath();c.moveTo(tx,ty);c.bezierCurveTo(tx-k,ty-H,hx+k,hy-H,hx,hy);c.stroke()
  c.lineWidth=6;c.beginPath();c.arc(hx+6,hy-6,15,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(hx+11,hy-10,3.5,0,T);c.fill()
}

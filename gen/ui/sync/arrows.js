// two curved arrows chase each other round and round a little face that watches them go
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=60
export default(c,t)=>{
  const a0=PI*t+.2*sin(T*t),R=80,S=2.15
  for(const[w,k]of[[34,'#111'],[20,'#fff']])for(const o of[0,PI]){
    const a=a0+o,e=a+S,px=128+R*cos(e),py=128+R*sin(e),tx=-sin(e),ty=cos(e),nx=cos(e),ny=sin(e)
    c.lineWidth=w;c.strokeStyle=k;c.beginPath();c.arc(128,128,R,a,e);c.stroke()
    c.fillStyle=k;c.lineWidth=w>30?14:0;c.beginPath();c.moveTo(px+nx*28,py+ny*28);c.lineTo(px+tx*34,py+ty*34);c.lineTo(px-nx*28,py-ny*28);c.closePath();c.fill();if(w>30)c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#fff'
  c.beginPath();c.arc(128,128,38,0,T);c.fill();c.stroke()
  const ex=4*sin(T*t*2)
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*13+ex,121,6,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128+ex*.5,132,9,PI*.15,PI*.85);c.stroke()
}

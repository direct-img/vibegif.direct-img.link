// loading ring of dots with a fading trail, and a little face in the middle watching it go round
const{sin,cos,PI}=Math,T=2*PI
export const delay=60
export default(c,t)=>{
  const h=t*T
  c.lineWidth=5
  for(let k=0;k<10;k++){
    const a=k*T/10-PI/2,g=((t-k/10)%1+1)%1,r=5+13*(1-g)**1.6
    c.beginPath();c.arc(128+cos(a)*78,128+sin(a)*78,r,0,T);c.fill();c.stroke()
  }
  c.lineWidth=7;c.beginPath();c.arc(128,128,40,0,T);c.fill();c.stroke()
  const ex=cos(h-PI/2)*5,ey=sin(h-PI/2)*5
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*13+ex,122+ey,6,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128+ex*.5,140+ey*.5,6,0,T);c.stroke()
}

// two meshing gears turning against each other, the small one spinning faster
// the small gear's angle comes from rolling contact, offset half a tooth so its gap meets the big gear's tooth
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=70
const gear=(c,x,y,n,R,th,holes)=>{
  const p=T/n,ri=R-10,ro=R+8
  c.beginPath()
  for(let k=0;k<n;k++){const a=th+k*p;for(const[f,r]of[[-.5,ri],[-.3,ri],[-.18,ro],[.18,ro],[.3,ri]])c.lineTo(x+cos(a+f*p)*r,y+sin(a+f*p)*r)}
  c.closePath();c.lineWidth=7;c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(x,y,R-22,0,T);c.stroke()
  for(let k=0;k<holes;k++){const a=th+k*T/holes;c.beginPath();c.arc(x+cos(a)*(R-38)*.95,y+sin(a)*(R-38)*.95,R*.13,0,T);c.stroke()}
  c.lineWidth=7;c.beginPath();c.arc(x,y,R*.2,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(x,y,6,0,T);c.fill();c.fillStyle='#fff'
}
export default(c,t)=>{
  const N=12,n=8,m=11,R=N*m/2,r=n*m/2,f=-.6,bx=90,by=158,sx=bx+(R+r)*cos(f),sy=by+(R+r)*sin(f)
  const tb=t*T/6,ts=f+PI+PI/n-(N/n)*(tb-f)
  gear(c,bx,by,N,R,tb,6)
  gear(c,sx,sy,n,r,ts,0)
}

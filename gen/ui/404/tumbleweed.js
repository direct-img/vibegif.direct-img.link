// chunky 404 digits stand in the desert like rocks under a hot sun while a tumbleweed bounces across in front, kicking up dust puffs
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=18,delay=70
const X=t=>-46+348*t
const weed=(c,x,y,r,a,s)=>{
  c.save();c.translate(x,y+r);c.scale(2-s,s);c.translate(0,-r);c.rotate(a)
  c.beginPath();for(let k=0;k<36;k++){const b=k*T/36,q=r*(1+.05*sin(b*7));c.lineTo(cos(b)*q,sin(b)*q)}
  c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[u,v,R,a]of[[.25,.15,.55,0],[-.3,.1,.5,2.2],[.05,-.3,.5,4],[-.1,.3,.42,1],[.1,0,.72,3.4]])c.beginPath(),c.arc(u*r,v*r,R*r,a,a+3),c.stroke()
  c.lineWidth=5;for(const b of[.4,2.3,4.1,5.4])c.beginPath(),c.moveTo(cos(b)*r,sin(b)*r),c.lineTo(cos(b+.25)*(r+8),sin(b+.25)*(r+8)),c.stroke()
  c.restore()
}
export default(c,t)=>{
  c.save();c.translate(210,42)
  for(let k=0;k<8;k++){const a=k*T/8;for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(cos(a)*21,sin(a)*21),c.lineTo(cos(a)*27,sin(a)*27),c.stroke()}
  c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.arc(0,0,14,0,T);c.fill();c.stroke();c.restore()
  c.lineWidth=7;c.beginPath();c.roundRect(10,190,236,46,23);c.fill();c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[30,214],[92,226],[160,222],[228,214]])c.beginPath(),c.arc(x,y,3.5,0,T),c.fill()
  c.fillStyle='#fff'
  for(const[x,a,z]of[[50,-.07,0],[128,.03,1],[206,.07,0]]){
    c.save();c.translate(x,202);c.rotate(a)
    for(const[w,s]of[[34,'#111'],[20,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();z?c.ellipse(0,-52,22,52,0,0,T):(c.moveTo(12,0),c.lineTo(12,-104),c.lineTo(-24,-36),c.lineTo(24,-36));c.stroke()}
    c.restore()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  const q=t*3%1,x=X(t),r=30,y=230-r-76*4*q*(1-q),e=min(q,1-q),s=e<.07?.8+.2*e/.07:1
  const lx=X(Math.floor(t*3)/3),p=q/.5
  if(p<1){c.lineWidth=5;for(const d of[-1,1])for(const[o,v,R]of[[16,30,12],[30,44,8]])c.beginPath(),c.arc(lx+d*(o+v*p),226-(R+4)*p,R*(1-p)+1,0,T),c.fill(),c.stroke()}
  for(const[dy,L]of[[-10,24],[8,16]])for(const[w,st]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x-r-14,y+dy),c.lineTo(x-r-14-L,y+dy),c.stroke()
  c.lineWidth=6;c.strokeStyle='#111'
  weed(c,x,y,r,x/r,s)
}

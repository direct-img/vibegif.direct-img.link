// pufferfish: rests, puffs up into a round spiky ball with a surprised look, wobbles, then lets the air out
const{sin,cos,PI,abs,hypot}=Math,T=2*PI
export const frames=24,delay=80,rim=3
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const g=sm((t-.1)/.25)-sm((t-.6)/.25),cx=134,cy=128+4*sin(T*t),rx=56+24*g+2*g*sin(T*t*4),ry=42+38*g,bl=t>.9&&t<.96
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  const at=a=>[cx+rx*cos(a),cy+ry*sin(a)]
  shape(cx-rx+4,cy,.25*sin(T*t*3),()=>{
    c.moveTo(4,-12);c.quadraticCurveTo(-14,-24,-26,-22);c.quadraticCurveTo(-20,0,-26,22);c.quadraticCurveTo(-14,24,4,12)})
  for(const d of[-1,1])shape(...at(d*2.15),d*(-2.15+PI/2)+.3*sin(T*t*3+d),()=>{c.moveTo(-9,4);c.quadraticCurveTo(-6,-16,6,-18);c.quadraticCurveTo(10,-6,9,4)})
  if(g>.04){
    c.lineWidth=3
    for(let i=0;i<18;i++){
      const a=-PI+(i+.5)*T/18
      if(abs(a)<.4||abs(a)>PI-.45||abs(abs(a)-2.15)<.2)continue
      const[x,y]=at(a),nx=cos(a)/rx,ny=sin(a)/ry,n=hypot(nx,ny),ux=nx/n,uy=ny/n,l=3+13*g
      c.beginPath();c.moveTo(x-uy*5-ux*3,y+ux*5-uy*3);c.lineTo(x+ux*l,y+uy*l);c.lineTo(x+uy*5-ux*3,y-ux*5-uy*3);c.fill();c.stroke()
    }
    c.lineWidth=6
  }
  shape(0,0,0,()=>c.ellipse(cx,cy,rx,ry,0,0,T))
  const ex=cx+rx*.42,ey=cy-ry*.3
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(ex,ey-2,6,.15*PI,.85*PI),c.stroke()
  else{c.beginPath();c.arc(ex,ey,6+3*g,0,T);c.fill();if(g>.3)c.fillStyle='#111',c.beginPath(),c.arc(ex+1,ey,3.5*g,0,T),c.fill()}
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(cx+rx-10,cy+ry*.15,3.5+1.5*g,0,T);c.stroke()
}

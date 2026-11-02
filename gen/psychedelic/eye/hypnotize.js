// staring almond eye with a spinning rainbow spiral iris and pulsing pupil, framed by wavy rainbow sunburst rays that slowly turn the other way
export const frames=24,delay=70
const T=Math.PI*2,{sin,cos}=Math,P=['#ff2e93','#ff7a1a','#ffd21f','#3ddc6a','#1ec8ff','#7b5cff']
export default(c,t)=>{
  const X=128,Y=128,eye=()=>{
    c.beginPath()
    c.moveTo(30,Y)
    c.quadraticCurveTo(X,40,226,Y)
    c.quadraticCurveTo(X,216,30,Y)
    c.closePath()
  }
  // rays
  for(let j=0;j<12;j++){
    const u=j+t,a=-u*T/12,L=110+12*cos(Math.PI*u),w=sin(3*Math.PI*u)*.07
    c.fillStyle=`hsl(${u*30+t*360},100%,58%)`
    c.beginPath()
    c.moveTo(X+30*cos(a-.24),Y+30*sin(a-.24))
    c.quadraticCurveTo(X+L*.75*cos(a-.2+w),Y+L*.75*sin(a-.2+w),X+L*cos(a+w*2),Y+L*sin(a+w*2))
    c.quadraticCurveTo(X+L*.75*cos(a+.2+w),Y+L*.75*sin(a+.2+w),X+30*cos(a+.24),Y+30*sin(a+.24))
    c.closePath()
    c.fill()
    c.stroke()
  }
  // sclera
  c.fillStyle='#fff'
  eye()
  c.fill()
  // iris spiral
  c.save()
  eye()
  c.clip()
  c.beginPath()
  c.arc(X,Y,48,0,T)
  c.clip()
  for(let k=8;k>=-1;k--){
    c.fillStyle=P[(k+6)%6]
    c.beginPath()
    c.arc(X,Y,Math.max(0,(k+t*6)*8),0,T)
    c.fill()
  }
  const b=4,f=T*t*2
  c.fillStyle='#160a2e'
  c.beginPath()
  for(let q=0;q<=16;q+=.1)c.lineTo(X+b*q*cos(q+f),Y+b*q*sin(q+f))
  for(let q=16;q>=0;q-=.1)c.lineTo(X+b*(q+Math.PI)*cos(q+f),Y+b*(q+Math.PI)*sin(q+f))
  c.fill()
  // pupil + glints
  c.fillStyle='#111'
  c.beginPath()
  c.arc(X,Y,13+3*sin(T*t*2),0,T)
  c.fill()
  c.fillStyle='#fff'
  c.beginPath()
  c.arc(X-18,Y-20,8,0,T)
  c.arc(X+20,Y+18,4,0,T)
  c.fill()
  c.lineWidth=5
  c.beginPath()
  c.arc(X,Y,48,0,T)
  c.stroke()
  c.restore()
  c.lineWidth=7
  eye()
  c.stroke()
}

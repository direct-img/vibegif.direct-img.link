// blissed-out amanita mushroom with a smiling face on its stem, rainbow ripple bands flowing outward across its wobbling cap, white spots pulsing, sparkles rising around it
export const frames=24,delay=70
const P=['#ff2e93','#ff7a1a','#ffd21f','#3ddc6a','#1ec8ff','#7b5cff'],T=Math.PI*2,{sin,cos}=Math
const D=[[-.55,-.45,13],[.05,-.78,15],[.6,-.42,12],[-.15,-.3,9],[.32,-.2,8],[-.8,-.15,7],[.82,-.12,7]]
export default(c,t)=>{
  const s=sin(T*t),cx=128+7*s,cy=118,rx=100,ry=80*(1+.04*sin(2*T*t)),cap=()=>{
    c.beginPath()
    for(let a=Math.PI;a<=T+1e-9;a+=Math.PI/60){
      const m=1+.03*sin(6*a-2*T*t)
      c.lineTo(cx+rx*m*cos(a),cy+ry*m*sin(a))
    }
    c.quadraticCurveTo(cx+4*s,cy+30,cx-rx*(1+.03*sin(6*Math.PI-2*T*t)),cy)
    c.closePath()
  }
  // sparkles
  c.lineWidth=2.5
  for(let j=0;j<6;j++){
    const p=(t+j/6)%1,a=j*2.4+1,x=128+(j%2?1:-1)*(96+12*sin(a)),y=226-p*200,z=16*sin(Math.PI*p)
    c.fillStyle=P[j]
    c.beginPath()
    for(let k=0;k<8;k++){
      const r=k%2?z*.32:z,b=k*Math.PI/4+p*3
      c.lineTo(x+r*cos(b),y+r*sin(b))
    }
    c.closePath()
    c.fill()
    c.stroke()
  }
  c.lineWidth=7
  // stem
  c.fillStyle='#fff5df'
  c.beginPath()
  c.moveTo(cx-23,cy+10)
  c.bezierCurveTo(cx-26,cy+50,90,190,94,222)
  c.quadraticCurveTo(128,236,162,222)
  c.bezierCurveTo(166,190,cx+26,cy+50,cx+23,cy+10)
  c.closePath()
  c.fill()
  c.stroke()
  // face
  const fx=(cx+128)/2+2*s,fy=172
  c.lineWidth=5
  for(const d of[-1,1]){
    c.beginPath()
    c.arc(fx+d*15,fy+4,7,Math.PI*1.15,Math.PI*1.85)
    c.stroke()
  }
  c.beginPath()
  c.arc(fx,fy+12,9,.15*Math.PI,.85*Math.PI)
  c.stroke()
  c.fillStyle='#ff8fc4'
  for(const d of[-1,1]){
    c.beginPath()
    c.ellipse(fx+d*27,fy+13,7,4,0,0,T)
    c.fill()
  }
  // cap bands
  c.save()
  cap()
  c.clip()
  const ox=cx,oy=cy-ry-10
  for(let k=26;k>=-6;k--){
    const r=(k+6*t)*13
    if(r<=0)continue
    c.fillStyle=P[(k%6+6)%6]
    c.beginPath()
    for(let a=0;a<T;a+=T/90){
      const q=r+3.5*sin(7*a+(k%6+6)%6*1.3+T*t)
      c.lineTo(ox+q*cos(a),oy+q*sin(a))
    }
    c.fill()
  }
  // spots
  c.lineWidth=4
  D.forEach(([u,v,r],j)=>{
    const p=r*(1+.18*sin(T*t+j*2.1))
    c.fillStyle='#fff'
    c.beginPath()
    c.ellipse(cx+u*rx,cy+v*ry,p,p*.85,0,0,T)
    c.fill()
    c.stroke()
  })
  c.restore()
  c.lineWidth=7
  cap()
  c.stroke()
}

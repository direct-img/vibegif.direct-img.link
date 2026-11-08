// white rounded speech bubble with a thick dark outline and a tail at bottom left, three grey dots inside hop up one after another and turn darker at the top of each hop, someone is typing
const{sin,PI,round,max}=Math
export const frames=36,delay=40
const mix=(a,b,q)=>'#'+a.map((v,j)=>round(v+(b[j]-v)*q).toString(16).padStart(2,'0')).join('')
export default(c,t)=>{
  // body+tail as one path: wide stroke first, then fill hides the inner half, leaving one clean outline
  const bub=()=>{
    c.beginPath(),c.roundRect(24,58,208,112,56)
    c.moveTo(108,162),c.quadraticCurveTo(80,190,42,202),c.lineTo(66,150),c.closePath() // same winding as the body
  }
  c.lineWidth=20,bub(),c.stroke(),bub(),c.fill()
  for(let k=0;k<3;k++){
    const p=((t-k*.15)%1+1)%1,u=p/.4,q=u<1?sin(PI*u):0,
      s=u<1?0:max(0,1-(u-1)*8)*.18 // small squash right after landing
    c.save(),c.translate(80+k*48,140-24*q),c.scale(1+s,1-s)
    c.fillStyle=mix([168,173,182],[84,90,102],round(q*4)/4) // few grey steps keep the gif palette clean
    c.beginPath(),c.arc(0,-16,16,0,2*PI),c.fill(),c.restore()
  }
}

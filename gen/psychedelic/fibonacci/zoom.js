// golden ratio spiral of dark squares, each holding a rainbow-banded quarter-circle fan, endlessly shrinking and turning into its center inside a round portal
export const frames=20,delay=80
const P=Math.PI*2,f=(1+Math.sqrt(5))/2,k=1/f,b=(1-k)/(1+k*k),a=1+k*b,W=58
export default(c,t)=>{
  // Z^s maps square 0 onto square s: rotate -90deg*s and scale k^s about the spiral center (a,b)
  const Z=(s,x,y)=>{
    const r=k**s,q=-Math.PI/2*s,X=x-a,Y=y-b
    return[128+W*r*(X*Math.cos(q)-Y*Math.sin(q)),128-W*r*(X*Math.sin(q)+Y*Math.cos(q))]
  }
  c.save();c.beginPath();c.arc(128,128,118,0,P);c.clip()
  for(let n=-7;n<12;n++){
    const s=n+t,h=(n+t)*47,sz=W*k**s,lw=Math.min(4,sz*.05)
    c.beginPath();for(const[x,y]of[[0,0],[1,0],[1,1],[0,1]])c.lineTo(...Z(s,x,y));c.closePath()
    c.fillStyle=`hsl(${h+200},70%,20%)`;c.fill()
    // quarter disc of the spiral, banded like a rainbow
    for(let j=0;j<6;j++){
      const m=1-j/6.5
      c.beginPath();c.moveTo(...Z(s,1,0))
      for(let i=0;i<=20;i++){const q=Math.PI/2+i/20*Math.PI/2;c.lineTo(...Z(s,1+m*Math.cos(q),m*Math.sin(q)))}
      c.closePath();c.fillStyle=`hsl(${h+j*60},100%,${j%2?66:56}%)`;c.fill()
      if(!j)c.lineWidth=lw,c.stroke()
    }
    c.beginPath();for(const[x,y]of[[0,0],[1,0],[1,1],[0,1]])c.lineTo(...Z(s,x,y));c.closePath();c.stroke()
  }
  c.restore()
  c.beginPath();c.arc(128,128,118,0,P);c.lineWidth=7;c.stroke()
}

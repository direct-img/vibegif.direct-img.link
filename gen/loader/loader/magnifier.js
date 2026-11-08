// big magnifying glass with a chunky orange rim and red handle circling over a 3x3 grid of fat outlined coral, gold, teal and purple circles, each circle ballooning to fill the pale blue lens as it slides over it
const{sin,cos,hypot,PI}=Math,T=2*PI
export const frames=32,delay=50
const ink='#111',R=52,G=-8,cols=['#ff6b6b','#ffb627','#2ec4b6','#8b6cf6']
export default(c,t)=>{
  c.translate(128+G,128+G)
  // lingers a moment over each of the four edge circles
  const a=T*t-PI/2-.45*sin(4*T*t)/4,lx=45*cos(a),ly=45*sin(a)
  // fisheye inside the lens: centres pushed outwards, circles (and outlines) grow up to 1.85x
  const dots=m=>{
    for(let y=-1;y<2;y++)for(let x=-1;x<2;x++){
      let px=x*52,py=y*52,dx=px-lx,dy=py-ly,u=hypot(dx,dy)/R,k=1
      if(m&&u<1)k=1.85-.85*u*u,px=lx+dx*(1.85-.85*u),py=ly+dy*(1.85-.85*u)
      c.beginPath(),c.arc(px,py,21*k,0,T),c.fillStyle=cols[(x+y*3+4+8)%4],c.fill()
      c.lineWidth=5.5*k,c.strokeStyle=ink,c.stroke()
    }
  }
  dots(0)
  // handle always points down-right
  c.save(),c.translate(lx,ly),c.rotate(PI/4)
  c.lineWidth=6,c.strokeStyle=ink
  c.beginPath(),c.roundRect(R+8,-12,40,24,12),c.fillStyle='#e04f3f',c.fill(),c.stroke()
  c.beginPath(),c.roundRect(R+4,-14,15,28,4),c.fillStyle='#9aa3b5',c.fill(),c.stroke()
  c.restore()
  // glass with the magnified circles on top
  c.beginPath(),c.arc(lx,ly,R,0,T),c.fillStyle='#d6eeff',c.fill()
  c.save(),c.clip(),dots(1)
  c.lineWidth=8,c.strokeStyle='#fff',c.beginPath(),c.arc(lx,ly,R-13,PI*1.08,PI*1.42),c.stroke()
  c.restore()
  // rim
  c.beginPath(),c.arc(lx,ly,R+8,0,T),c.arc(lx,ly,R-1,0,T,1),c.fillStyle='#ff9f1c',c.fill()
  c.lineWidth=6,c.strokeStyle=ink
  c.beginPath(),c.arc(lx,ly,R+9,0,T),c.stroke()
  c.beginPath(),c.arc(lx,ly,R-1,0,T),c.stroke()
}

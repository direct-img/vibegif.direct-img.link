// op-art round checkerboard of black and rainbow squares with a magnifying bulge roaming in a figure-eight, warping the grid like a lens as rainbow rings ripple out from it
export const frames=24,delay=70
const R=118,N=16,s=256/N,m=5,P=Math.PI*2
export default(c,t)=>{
  const a=P*t,lx=128+46*Math.sin(a),ly=128+32*Math.sin(2*a)
  const W=(x,y)=>{
    const dx=x-lx,dy=y-ly,k=1+.95*Math.exp(-(dx*dx+dy*dy)/2600)
    return[lx+dx*k,ly+dy*k]
  }
  c.save()
  c.beginPath();c.arc(128,128,R,0,P);c.fillStyle='#111';c.fill();c.clip()
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){
    if((i+j)%2)continue
    const x=i*s,y=j*s,cx=x+s/2-lx,cy=y+s/2-ly
    c.beginPath()
    for(let e=0;e<4;e++)for(let k=0;k<m;k++){
      const u=k/m,q=[[u,0],[1,u],[1-u,1],[0,1-u]][e]
      c.lineTo(...W(x+q[0]*s,y+q[1]*s))
    }
    c.fillStyle=`hsl(${Math.round(Math.hypot(cx,cy)/6.8-24*t)*15},100%,58%)`
    c.fill()
  }
  c.restore()
  c.beginPath();c.arc(128,128,R,0,P);c.stroke()
}

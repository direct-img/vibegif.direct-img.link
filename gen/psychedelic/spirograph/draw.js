// spirograph toy: a pink gear rolls inside a violet toothed ring on a dark blacklight disc while three pens in its holes trace a 15-point neon rainbow star rosette that builds up, then gets eaten back from the tail
export const frames=40,delay=60
const R=100,r=40,k=(R-r)/r,T=4*Math.PI,P=Math.PI*2,N=240
const H=j=>[j<6?30:15,j*Math.PI/3+(j>5)*.5],pens=[0,2,4].map((j,n)=>[H(j)[0],n*120,H(j)[1]])
const pt=(th,d,o)=>[128+(R-r)*Math.cos(th)+d*Math.cos(k*th-o),128+(R-r)*Math.sin(th)-d*Math.sin(k*th-o)]
const hue=(h,u)=>`hsl(${h+Math.floor(u/T*24)*30},100%,62%)`
const teeth=(c,x,y,rad,n,h,a)=>{
  for(let j=0;j<=n*4;j++){
    const b=a+j/n/4*P,q=rad+(j%4<2?h:0)
    c.lineTo(x+q*Math.cos(b),y+q*Math.sin(b))
  }
  c.closePath()
}
export default(c,t)=>{
  c.lineWidth=4
  c.fillStyle='#1c0b40'
  c.beginPath();c.arc(128,128,104,0,P);c.fill()
  c.fillStyle='#9b30ff'
  c.beginPath();c.arc(128,128,125,0,P);c.moveTo(229,128);teeth(c,128,128,R+2,30,-6,0)
  c.fill('evenodd');c.stroke()
  c.strokeStyle='#d9a6ff';c.lineWidth=3
  c.beginPath();c.arc(128,128,115,0,P);c.stroke()
  // the pen head runs on, the tail starts eating it halfway and catches up by the end
  const b=2*t*T,a=t<.5?0:(4*t-2)*T,s=Math.ceil((b-a)/T*N)
  c.lineWidth=4.2
  for(const[d,h,o]of pens){
    let p=pt(a,d,o),q
    for(let j=1;j<=s;j++){
      const u=a+(b-a)*j/s
      q=pt(u,d,o)
      c.strokeStyle=hue(h,u)
      c.beginPath();c.moveTo(...p);c.lineTo(...q);c.stroke()
      p=q
    }
  }
  // rolling gear with its pen holes
  const th=b%P,gx=128+(R-r)*Math.cos(th),gy=128+(R-r)*Math.sin(th),ph=-k*b
  c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();teeth(c,gx,gy,r-3,16,5,ph);c.stroke()
  c.strokeStyle='#ff4fa3';c.lineWidth=3
  c.beginPath();teeth(c,gx,gy,r-3,16,5,ph);c.stroke()
  c.fillStyle='#ff4fa3'
  for(let j=0;j<12;j++){
    const[d,e]=H(j)
    c.beginPath();c.arc(gx+d*Math.cos(e+ph),gy+d*Math.sin(e+ph),1.8,0,P);c.fill()
  }
  c.lineWidth=2.5;c.strokeStyle='#111'
  for(const[d,h,o]of pens){
    c.fillStyle=hue(h,b%T)
    c.beginPath();c.arc(...pt(b,d,o),5.5,0,P);c.fill();c.stroke()
  }
}

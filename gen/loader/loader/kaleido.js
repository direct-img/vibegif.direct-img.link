// six-fold kaleidoscope in a dark hexagon window with an orange frame: mirrored amber, orange, terracotta and cream glass shards drift, spin and reshape while the whole pattern turns a sixth of a turn, symmetric every frame
const{sin,cos,PI}=Math,T=2*PI
export const frames=32,delay=70
// each shard: color, sides, then (w)=>[radius, angle, size, spin, stretch]
const S=[
  ['#c15f3c',3,w=>[66+12*sin(w),.26+.22*sin(w+1),38+6*cos(2*w),w/3+.4,1]],
  ['#e8875f',4,w=>[94+5*sin(w+2),.26+.2*sin(w-.6),22,w/2,.55+.15*sin(2*w)]],
  ['#f2a541',3,w=>[40+10*sin(w+3),.1+.3*sin(w+2.2),24+5*sin(2*w+1),-w/3,1]],
  ['#fbe6c4',4,w=>[72+18*sin(w+.5),.3*sin(w+4),15,w,.45]],
  ['#d97757',6,w=>[0,0,24+4*sin(2*w),w/6,1]],
  ['#fbe6c4',3,w=>[0,0,11+3*cos(2*w),-w/3,1]]
]
const hex=(c,r)=>{
  c.beginPath()
  for(let k=0;k<6;k++)c.lineTo(r*cos(k*T/6+T/12),r*sin(k*T/6+T/12))
  c.closePath()
}
export default(c,t)=>{
  const w=T*t
  c.translate(128,128)
  hex(c,98),c.fillStyle='#3d1e14',c.fill()
  c.save(),c.clip(),c.rotate(w/6),c.scale(.9,.9)
  for(const[col,n,f]of S){
    const[r,a,s,sp,q]=f(w)
    c.fillStyle=col
    // draw every shard twelve times: six turns, each with its mirror
    for(let m=0;m<12;m++){
      c.save(),c.rotate((m>>1)*T/6),c.scale(1,m&1?-1:1)
      c.translate(r*cos(a),r*sin(a)),c.rotate(sp),c.beginPath()
      for(let k=0;k<n;k++){
        const b=k*T/n
        c.lineTo(s*cos(b),s*sin(b)*(k%2?q:1))
      }
      c.fill(),c.restore()
    }
  }
  c.restore()
  hex(c,98),c.lineWidth=11,c.strokeStyle='#d97757',c.stroke()
}

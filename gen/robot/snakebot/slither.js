// top-down modular snake robot slithering in an S-shaped serpenoid wave, a chain of white servo modules with orange bands and dark joints, red LED eyes, camera nose and a flicking forked sensor tongue
export const frames=20,delay=60
const T=Math.PI*2,N=11,L=250,G=L/N,M=250
export default(c,t)=>{
  // serpenoid curve: heading is a travelling sine along the body, calmer near the head
  const pt=[]
  let x=0,y=0,mx=0,my=0
  for(let k=0;k<=M;k++){
    const u=k/M,a=1.1*Math.sin(T*t+u*T)*(1-.55*Math.max(0,(u-.8)/.2))
    pt.push([x,y,a]);mx+=x;my+=y;x+=Math.cos(a)*L/M;y+=Math.sin(a)*L/M
  }
  mx/=M+1;my/=M+1
  const rot=-.45-Math.atan2(pt[M][1]-pt[0][1],pt[M][0]-pt[0][0])
  const at=s=>pt[Math.round(s/L*M)]
  const place=(ox,oy)=>{c.setTransform(1,0,0,1,128+ox,128+oy);c.rotate(rot);c.translate(-mx,-my)}
  const mods=[...Array(N)].map((_,j)=>{const[px,py,pa]=at(L-G*.5-j*G);return{px,py,pa,j}})
  const box=(w,h,r,dx=0,dy=0)=>{c.beginPath();c.roundRect(-w/2+dx,-h/2+dy,w,h,r)}
  const lit=(w,h,r,dk,lt,pa)=>{
    // base colour, then a lighter copy nudged toward the light (top-left of the screen)
    const b=-(pa+rot),ox=(-.6*Math.cos(b)+.8*Math.sin(b))*3.5,oy=(-.6*Math.sin(b)-.8*Math.cos(b))*3.5
    box(w,h,r);c.fillStyle=dk;c.fill()
    c.save();c.clip();box(w,h,r,ox,oy);c.fillStyle=lt;c.fill();c.restore()
    box(w,h,r);c.stroke()
  }
  place(4,7);c.fillStyle='#8b939c'
  for(const{px,py,pa,j}of mods){
    c.save();c.translate(px,py);c.rotate(pa);box(j?22:42,j?30:34,10);c.fill();c.restore()
  }
  place(0,0)
  for(const{px,py,pa,j}of[...mods].reverse()){
    c.save();c.translate(px,py);c.rotate(pa);c.lineWidth=4.5;c.strokeStyle='#111'
    if(j<N-1){
      const qx=mods[j+1].px-px,qy=mods[j+1].py-py
      c.save();c.rotate(-pa);c.translate(qx/2,qy/2);c.rotate(Math.atan2(qy,qx))
      box(14,20,4);c.fillStyle='#3a424c';c.fill();c.stroke()
      c.fillStyle='#aab4be';c.beginPath();c.arc(0,0,3,0,T);c.fill();c.restore()
    }
    if(j==0){
      const f=Math.max(0,Math.sin(T*t*2-.6))**3*20
      if(f>1){
        const tg=()=>{c.beginPath();c.moveTo(19,0);c.lineTo(22+f,0);c.lineTo(28+f,-6);c.moveTo(22+f,0);c.lineTo(28+f,6)}
        tg();c.lineWidth=5;c.stroke();tg();c.lineWidth=2;c.strokeStyle='#ff4a3d';c.stroke();c.strokeStyle='#111';c.lineWidth=4.5
      }
      lit(40,32,14,'#c3ccd5','#f4f6f8',pa)
      c.save();box(40,32,14);c.clip();c.fillStyle='#e8781e';c.fillRect(-20,-16,9,32);c.restore();box(40,32,14);c.stroke()
      c.lineWidth=3.5
      for(const u of[-1,1]){
        c.beginPath();c.ellipse(6,u*9,6,4.5,0,0,T);c.fillStyle='#ff3b30';c.fill();c.stroke()
        c.fillStyle='#ffd8d2';c.beginPath();c.arc(4.5,u*9-1.2,1.7,0,T);c.fill()
      }
      c.beginPath();c.arc(16,0,4.5,-1.5,1.5);c.fillStyle='#1d2733';c.fill();c.stroke()
      c.fillStyle='#57c7ff';c.beginPath();c.arc(16.5,0,2,0,T);c.fill()
    }else{
      const w=18
      lit(w,28,7,'#c3ccd5','#f4f6f8',pa)
      if(j==N-1){c.fillStyle='#ff3b30';c.beginPath();c.arc(-4,0,2.6,0,T);c.fill()}
      else if(j%2){
        c.lineWidth=3;c.beginPath();c.arc(0,0,7,0,T);c.fillStyle='#e8781e';c.fill();c.stroke()
        c.fillStyle='#111';c.beginPath();c.arc(0,0,2,0,T);c.fill()
      }else{
        c.save();box(w,28,7);c.clip();c.fillStyle='#e8781e';c.fillRect(-w/2,-4,w,8);c.restore()
        box(w,28,7);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(-9,-4);c.lineTo(9,-4);c.moveTo(-9,4);c.lineTo(9,4);c.stroke()
        c.fillStyle='#111';for(const u of[-9.5,9.5]){c.beginPath();c.arc(0,u,1.8,0,T);c.fill()}
      }
    }
    c.restore()
  }
}

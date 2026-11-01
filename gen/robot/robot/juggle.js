// little tread-based robot juggling three colored hex nuts in a cascade with telescoping arms, glowing eyes following the nuts, chest lights blinking
export const frames=24,delay=70
const P=Math.PI,C=128,cols=['#f5c242','#f06a5a','#53c0ea']
const lerp=(a,b,k)=>a+(b-a)*k,ez=k=>k*k*(3-2*k)
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
// hand position for side g (+1 right of image, -1 left) at phase h in [0,2)
const hand=(g,h)=>{
  if(h<1){const e=ez(h);return[C+g*lerp(34,88,e),lerp(204,178,e)-8*Math.sin(P*e)]}
  const e=ez(h-1);return[C+g*lerp(88,34,e),lerp(178,204,e)+14*Math.sin(P*e)]
}
const nut=(c,x,y,a,col)=>{
  c.save();c.translate(x,y);c.strokeStyle='#111'
  const hex=(dy,r)=>{c.beginPath();for(let k=0;k<6;k++)c.lineTo(Math.cos(a+k*P/3)*r,Math.sin(a+k*P/3)*r*.92+dy);c.closePath()}
  c.lineWidth=3.5;hex(4,14);c.fillStyle='#5b4a3a';c.fill();c.stroke()
  hex(0,14);c.fillStyle=col;c.fill();c.stroke()
  c.lineWidth=2;c.strokeStyle='rgba(255,255,255,.75)'
  c.beginPath();c.moveTo(Math.cos(a+P*7/6)*9-1,Math.sin(a+P*7/6)*9-1);c.lineTo(Math.cos(a+P*9/6)*9-1,Math.sin(a+P*9/6)*9-1);c.stroke()
  c.beginPath();c.arc(0,0,5.5,0,2*P);c.fillStyle='#2a2f38';c.fill();c.lineWidth=2.5;c.strokeStyle='#111';c.stroke()
  c.restore()
}
export default(c,t)=>{
  const u=t*6,bob=Math.abs(Math.sin(u*P))*2
  // nuts: ball i thrown at beats i and i+3, flies 2 beats, sits in the catching hand 1 beat
  const ns=[0,1,2].map(i=>{
    const s=((u-i)%6+6)%6,b=(i+(s<3?0:3))%6,g=b%2?-1:1,q=s%3
    if(q<2){const k=q/2,x0=C+g*34,x1=C-g*88
      return{x:lerp(x0,x1,k),y:lerp(192,166,k)-4*146*k*(1-k),a:g*k*P*4/3,air:1,i}}
    const[hx,hy]=hand(-g,1+(q-2));return{x:hx,y:hy-16,a:0,air:0,i}
  })
  c.save();c.translate(0,bob)
  // tread base
  rr(c,90,226,76,24,12);c.fillStyle='#3b4250';c.fill();c.stroke()
  for(const x of[103,128,153]){c.beginPath();c.arc(x,238,6,0,2*P);c.fillStyle='#8d97a6';c.fill();c.lineWidth=3;c.stroke()}
  c.lineWidth=7
  rr(c,116,210,24,18,4);c.fillStyle='#9aa5b4';c.fill();c.stroke()
  // torso
  rr(c,88,158,80,58,16);c.fillStyle='#e4e9f0';c.fill();c.stroke()
  rr(c,150,164,12,46,6);c.fillStyle='#c3cbd6';c.fill()
  rr(c,102,170,52,30,7);c.fillStyle='#2d3440';c.lineWidth=4;c.fill();c.stroke()
  for(const n of ns){const x=113+n.i*15
    c.beginPath();c.arc(x,185,5.5,0,2*P);c.fillStyle=n.air?cols[n.i]:'#4a5361';c.fill()
    if(n.air){c.beginPath();c.arc(x-1.5,183.5,1.8,0,2*P);c.fillStyle='#fff';c.fill()}}
  // head
  c.lineWidth=5;c.beginPath();c.moveTo(C,112);c.lineTo(C,94);c.stroke()
  const on=Math.floor(u*2)%2
  c.beginPath();c.arc(C,91,6,0,2*P);c.fillStyle=on?'#ff5a4a':'#8a2f2a';c.fill();c.lineWidth=3.5;c.stroke()
  c.lineWidth=7;rr(c,120,148,16,14,3);c.fillStyle='#9aa5b4';c.fill();c.stroke()
  rr(c,94,110,68,44,14);c.fillStyle='#e4e9f0';c.fill();c.stroke()
  rr(c,147,115,10,34,5);c.fillStyle='#c3cbd6';c.fill()
  for(const g of[-1,1]){c.beginPath();c.arc(C+g*38,132,6,0,2*P);c.fillStyle='#9aa5b4';c.fill();c.lineWidth=4;c.stroke()}
  // eyes track the airborne nuts
  const air=ns.filter(n=>n.air),tx=air.reduce((s,n)=>s+n.x,0)/air.length,ty=air.reduce((s,n)=>s+n.y,0)/air.length
  for(const g of[-1,1]){
    const ex=C+g*15,ey=127,d=Math.hypot(tx-ex,ty-ey)||1
    c.beginPath();c.arc(ex,ey,10,0,2*P);c.fillStyle='#2d3440';c.fill();c.lineWidth=4;c.stroke()
    c.beginPath();c.arc(ex+(tx-ex)/d*3.5,ey+(ty-ey)/d*3.5,5.5,0,2*P);c.fillStyle='#8ff0ff';c.fill()
    c.beginPath();c.arc(ex+(tx-ex)/d*3.5-1.5,ey+(ty-ey)/d*3.5-1.5,1.8,0,2*P);c.fillStyle='#fff';c.fill()
  }
  rr(c,116,143,24,5,2.5);c.fillStyle='#2d3440';c.fill()
  c.restore()
  // telescoping arms
  for(const g of[-1,1]){
    const sx=C+g*40,sy=170+bob,h=((u-(g>0?0:1))%2+2)%2,[hx,hy]=hand(g,h),dx=hx-sx,dy=hy-sy,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L
    c.lineCap='butt'
    c.lineWidth=16;c.strokeStyle='#111';c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+ux*20,sy+uy*20);c.stroke()
    c.lineWidth=9;c.strokeStyle='#c3cbd6';c.stroke()
    c.lineWidth=12;c.strokeStyle='#111';c.beginPath();c.moveTo(sx+ux*18,sy+uy*18);c.lineTo(hx,hy);c.stroke()
    c.lineWidth=6;c.strokeStyle='#ff9f43';c.stroke()
    c.lineCap='round';c.strokeStyle='#111'
    c.beginPath();c.arc(sx,sy,9,0,2*P);c.fillStyle='#9aa5b4';c.lineWidth=4;c.fill();c.stroke()
    c.beginPath();c.arc(sx+ux*20,sy+uy*20,5,0,2*P);c.fillStyle='#e4e9f0';c.lineWidth=3;c.fill();c.stroke()
    // cup hand
    c.beginPath();c.arc(hx,hy-6,12,.1*P,.9*P);c.closePath();c.fillStyle='#9aa5b4';c.lineWidth=4;c.fill();c.stroke()
    c.beginPath();c.arc(hx,hy-6,12,.1*P,.9*P);c.lineWidth=4;c.stroke()
  }
  for(const n of ns)nut(c,n.x,n.y,n.a,cols[n.i])
}

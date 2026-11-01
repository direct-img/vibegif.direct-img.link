// orange industrial robot arm on a pedestal lifts a cardboard box off a conveyor belt, swings it overhead and drops it into a hazard-striped bin while the belt brings the next box
export const frames=40,delay=55
const{PI,sin,cos,atan2,acos,hypot,min,max}=Math,T=PI*2
const S=[140,186],L1=70,L2=66,BW=30,BH=26
const ez=x=>(1-cos(PI*min(1,max(0,x))))/2
// joint angles (absolute) for wrist point w; side picks the elbow-up branch
const ik=(w,side)=>{
  const dx=w[0]-S[0],dy=w[1]-S[1],d=min(hypot(dx,dy),L1+L2-.01),th=atan2(dy,dx)
  const a=acos((L1*L1+d*d-L2*L2)/(2*L1*d)),q1=th+side*a
  const e=[S[0]+cos(q1)*L1,S[1]+sin(q1)*L1]
  return[q1,atan2(w[1]-e[1],w[0]-e[0])]
}
const A=[76,130],B=[76,82],C=[214,82],D=[214,148]
const lerp=(p,q,e)=>[p[0]+(q[0]-p[0])*e,p[1]+(q[1]-p[1])*e]
// arm pose and grip state over the cycle: [q1,q2,closed,holding]
const pose=t=>{
  const seg=(a,b)=>(t-a)/(b-a)
  if(t<.08)return[...ik(lerp(B,A,ez(seg(0,.08))),1),0,0]
  if(t<.13)return[...ik(A,1),ez(seg(.08,.13)),0]
  if(t<.21)return[...ik(lerp(A,B,ez(seg(.13,.21))),1),1,1]
  const jl=(p,q,e)=>p.map((v,k)=>v+(q[k]-v)*e)
  if(t<.45)return[...jl(ik(B,1),ik(C,-1),ez(seg(.21,.45))),1,1]
  if(t<.53)return[...ik(lerp(C,D,ez(seg(.45,.53))),-1),1,1]
  if(t<.57)return[...ik(D,-1),1-ez(seg(.53,.57)),0]
  if(t<.64)return[...ik(lerp(D,C,ez(seg(.57,.64))),-1),0,0]
  if(t<.9)return[...jl(ik(C,-1),ik(B,1),ez(seg(.64,.9))),0,0]
  return[...ik(B,1),0,0]
}
const box=(c,x,y)=>{
  c.fillStyle='#d19a5b';c.lineWidth=3.5;c.fillRect(x-BW/2,y,BW,BH);c.strokeRect(x-BW/2,y,BW,BH)
  c.fillStyle='#a8743b';c.fillRect(x-BW/2+1.5,y+1.5,BW-3,5)
  c.fillStyle='#efd9a8';c.fillRect(x-3,y+1.5,6,BH-3)
  c.lineWidth=2;c.beginPath();c.moveTo(x-BW/2,y+7);c.lineTo(x+BW/2,y+7);c.stroke()
}
const link=(c,p,q,w0,w1,f,hi)=>{
  const a=atan2(q[1]-p[1],q[0]-p[0]),n=[-sin(a),cos(a)]
  c.beginPath();c.arc(...p,w0,a+PI/2,a-PI/2);c.arc(...q,w1,a-PI/2,a+PI/2);c.closePath()
  c.fillStyle=f;c.fill();c.lineWidth=4;c.stroke()
  c.strokeStyle=hi;c.lineWidth=3;c.beginPath();c.moveTo(p[0]-n[0]*(w0-5),p[1]-n[1]*(w0-5));c.lineTo(q[0]-n[0]*(w1-5),q[1]-n[1]*(w1-5));c.stroke();c.strokeStyle='#111'
}
const joint=(c,p,r)=>{c.fillStyle='#3d434b';c.lineWidth=3.5;c.beginPath();c.arc(...p,r,0,T);c.fill();c.stroke()
  c.fillStyle='#b9c0c8';c.beginPath();c.arc(...p,r*.38,0,T);c.fill()}
export default(c,t)=>{
  const[q1,q2,cl,hold]=pose(t),E=[S[0]+cos(q1)*L1,S[1]+sin(q1)*L1],W=[E[0]+cos(q2)*L2,E[1]+sin(q2)*L2]
  // floor
  c.strokeStyle='#8a8a8a';c.lineWidth=4;c.beginPath();c.moveTo(6,233);c.lineTo(250,233);c.stroke();c.strokeStyle='#111'
  // conveyor: next box rides in from the hopper
  const mv=ez((t-.4)/.5),nx=16+60*mv,belt=t<.4?0:mv*60
  c.lineWidth=4
  for(const x of[22,92]){c.fillStyle='#7c858f';c.fillRect(x-3,190,6,42);c.strokeRect(x-3,190,6,42)}
  c.fillStyle='#4e555e';c.beginPath();c.roundRect(10,176,96,15,7.5);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(16,177,84,13);c.clip();c.strokeStyle='#8f99a4';c.lineWidth=2.5
  for(let k=-1;k<9;k++){const x=16+k*12+belt%12;c.beginPath();c.moveTo(x,179);c.lineTo(x+4,183.5);c.lineTo(x,188);c.stroke()}
  c.restore()
  for(const x of[18,98]){c.fillStyle='#c9d0d8';c.lineWidth=3;c.beginPath();c.arc(x,183.5,4.5,0,T);c.fill();c.stroke()}
  if(t<.13)box(c,A[0],150)
  if(t>=.4)box(c,nx,150)
  // hopper hiding the incoming boxes
  c.fillStyle='#8fa0ad';c.lineWidth=4;c.beginPath();c.moveTo(2,96);c.lineTo(46,96);c.lineTo(40,146);c.lineTo(40,176);c.lineTo(8,176);c.lineTo(8,146);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffcf33';c.fillRect(10,104,28,8);c.lineWidth=2.5;c.strokeRect(10,104,28,8)
  c.fillStyle='#262b31';c.lineWidth=3;c.beginPath();c.moveTo(40,150);c.lineTo(26,150);c.lineTo(26,176);c.lineTo(40,176);c.fill();c.stroke()
  // amber beacon
  const bl=(t*4%1)<.5
  c.fillStyle='#4e555e';c.lineWidth=3;c.fillRect(17,90,14,6);c.strokeRect(17,90,14,6)
  c.fillStyle=bl?'#ffb300':'#8a5a00';c.beginPath();c.arc(24,90,7,PI,0);c.closePath();c.fill();c.stroke()
  if(bl){c.strokeStyle='#ffb300';c.lineWidth=2.5;for(const a of[-2.4,-1.57,-.74]){c.beginPath();c.moveTo(24+cos(a)*11,88+sin(a)*11);c.lineTo(24+cos(a)*16,88+sin(a)*16);c.stroke()}c.strokeStyle='#111'}
  // dropped box falls inside the bin, clipped to its interior
  if(t>=.53){
    const u=max(0,t-.555),y=D[1]+20+9000*u*u
    c.save();c.beginPath();c.rect(184,0,64,229);c.clip();box(c,D[0],y);c.restore()
  }
  // pedestal and turntable
  c.fillStyle='#6f7782';c.lineWidth=4;c.beginPath();c.moveTo(118,232);c.lineTo(124,200);c.lineTo(156,200);c.lineTo(162,232);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffcf33';c.lineWidth=2.5;c.fillRect(124,214,32,6);c.strokeRect(124,214,32,6)
  c.fillStyle='#4e555e';c.lineWidth=4;c.beginPath();c.roundRect(116,190,48,12,4);c.fill();c.stroke()
  // power cable to the elbow
  c.lineWidth=3;c.beginPath();c.moveTo(156,196);c.quadraticCurveTo((S[0]+E[0])/2+18,(S[1]+E[1])/2+14,E[0]+6,E[1]+4);c.stroke()
  link(c,S,E,15,11,'#f28c28','#ffb566')
  joint(c,E,11)
  link(c,E,W,11,8,'#f28c28','#ffb566')
  joint(c,S,14)
  // wrist and gripper hang straight down
  const sp=24-7*cl,[x,y]=W
  c.lineWidth=3.5;c.fillStyle='#9aa3ad';c.fillRect(x-4,y,8,12);c.strokeRect(x-4,y,8,12)
  c.fillStyle='#3d434b';c.beginPath();c.roundRect(x-sp-3,y+12,sp*2+6,8,3);c.fill();c.stroke()
  if(hold)box(c,x,y+20)
  c.fillStyle='#c9d0d8'
  for(const d of[-1,1]){c.beginPath();c.moveTo(x+d*sp,y+18);c.lineTo(x+d*(sp+4),y+18);c.lineTo(x+d*(sp+4),y+34);c.lineTo(x+d*sp,y+30);c.closePath();c.fill();c.stroke()}
  joint(c,W,8)
  // bin front wall
  c.fillStyle='#9aa6b2';c.lineWidth=4;c.beginPath();c.moveTo(184,180);c.lineTo(248,180);c.lineTo(244,232);c.lineTo(188,232);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#ffcf33';c.fillRect(180,190,72,12);c.fillStyle='#111'
  for(let k=0;k<6;k++){c.beginPath();c.moveTo(180+k*14,202);c.lineTo(187+k*14,190);c.lineTo(194+k*14,190);c.lineTo(187+k*14,202);c.fill()}
  c.restore();c.lineWidth=2.5;c.strokeRect(184,190,64,12)
  c.lineWidth=5;c.beginPath();c.moveTo(181,180);c.lineTo(251,180);c.stroke()
  // thud specks when the box lands
  if(t>.58&&t<.7){const s=(t-.58)/.12;c.fillStyle='#d19a5b';c.lineWidth=2
    for(const d of[-1,-.4,.5,1]){c.beginPath();c.arc(214+d*24*s,172-20*s*(1.4-s)+8*s*s,3*(1-s)+1,0,T);c.fill();c.stroke()}}
}

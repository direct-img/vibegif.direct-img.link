// robotic metal hand counting on its fingers: starts as a fist, raises index, middle, ring, pinky then thumb for 1 to 5 with a digit display on the wrist, then snaps shut
export const frames=18
const H=360,T=55
export const delay=[...Array(frames)].map((_,i)=>i%3==2?H:T)
const P=Math.PI*2,D=Math.PI/180
const ease=u=>{const s=1.6;return 1+(s+1)*(u-1)**3+s*(u-1)**2}
const cap=(c,a,b,w,col)=>{
  c.beginPath();c.moveTo(...a);c.lineTo(...b)
  c.strokeStyle='#111';c.lineWidth=w+7;c.stroke()
  c.strokeStyle=col;c.lineWidth=w;c.stroke()
  c.beginPath();c.moveTo(a[0]-w*.22,a[1]);c.lineTo(b[0]-w*.22,b[1]);c.strokeStyle='#ffffffaa';c.lineWidth=w*.25;c.stroke()
}
const joint=(c,[x,y],r)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle='#4b5560';c.fill();c.strokeStyle='#111';c.lineWidth=3;c.stroke()}
// fingers: knuckle x, length, fan tilt
const F=[[96,80,-5],[120,88,-1.5],[144,82,2],[166,64,6]]
const SEG=['1110111','0010010','1011101','1011011','0111010','1101011']
export default(c,t,i)=>{
  const s=Math.floor(i/3),u=(i%3+1)/3,k=ease(u)
  const ex=(n,st)=>st>n?1:0
  const E=n=>{const a=ex(n,s),b=ex(n,(s+1)%6);return a+(b-a)*k}
  const shown=u>=1?(s+1)%6:s
  c.translate(128,128);c.scale(.9,.9);c.translate(-128,-122)
  // forearm
  c.lineWidth=7
  c.beginPath();c.roundRect(100,190,56,58,[8,8,14,14]);c.fillStyle='#9aa6b2';c.fill();c.stroke()
  for(const x of[108,148]){c.beginPath();c.moveTo(x,198);c.lineTo(x,240);c.strokeStyle='#111';c.lineWidth=9;c.stroke();c.strokeStyle='#e8c14a';c.lineWidth=4;c.stroke()}
  c.strokeStyle='#111'
  // digit display
  c.beginPath();c.roundRect(115,206,26,36,5);c.fillStyle='#16222b';c.fill();c.lineWidth=4;c.stroke()
  const sg=SEG[shown],L=[[119,210,137,210],[119,210,119,224],[137,210,137,224],[119,224,137,224],[119,224,119,238],[137,224,137,238],[119,238,137,238]]
  L.forEach(([a,b,d,e],j)=>{c.beginPath();c.moveTo(a,b);c.lineTo(d,e);c.strokeStyle=sg[j]=='1'?'#59f0ff':'#24404a';c.lineWidth=3.5;c.stroke()})
  c.strokeStyle='#111'
  // wrist joint
  c.beginPath();c.roundRect(92,180,72,18,8);c.fillStyle='#4b5560';c.fill();c.lineWidth=6;c.stroke()
  // palm
  c.beginPath();c.moveTo(84,118);c.lineTo(176,118);c.lineTo(178,160);c.quadraticCurveTo(170,186,150,188);c.lineTo(106,188);c.quadraticCurveTo(84,184,80,160);c.closePath()
  c.fillStyle='#cfd7df';c.fill()
  c.save();c.clip();c.fillStyle='#b3bdc7';c.fillRect(160,110,30,90);c.restore()
  c.lineWidth=7;c.stroke()
  c.beginPath();c.arc(130,154,13,0,P);c.fillStyle='#16222b';c.fill();c.lineWidth=4;c.stroke()
  c.beginPath();c.arc(130,154,7,0,P);c.fillStyle=shown?'#59f0ff':'#24404a';c.fill()
  c.fillStyle='#8a96a3';c.lineWidth=2.5
  for(const[x,y]of[[92,128],[168,128],[96,176],[160,176]]){c.beginPath();c.arc(x,y,3,0,P);c.fill();c.stroke()}
  // fingers, curling toward the viewer
  F.forEach(([x,l,tl],n)=>{
    const e=E(n),q=1-e,a=[85*q,100*q,75*q],ls=[.44,.31,.25].map(v=>v*l),tt=tl*e*D
    let p=[x,120],ph=0
    const pts=[p]
    a.forEach((d,j)=>{ph+=d*D;p=[p[0]+Math.sin(tt)*ls[j]*Math.cos(ph),p[1]-Math.cos(tt)*ls[j]*Math.cos(ph)];pts.push(p)})
    for(let j=0;j<3;j++)cap(c,pts[j],pts[j+1],j<2?20:18,j==2?'#eef2f5':'#dde3e9')
    joint(c,pts[0],7);joint(c,pts[1],5.5);joint(c,pts[2],5)
  })
  // thumb, folding across the curled fingers
  const e=E(4),q=1-e,b=[86,176],A=[-125+q*80,-115+q*110]
  const p1=[b[0]+30*Math.cos(A[0]*D),b[1]+30*Math.sin(A[0]*D)],p2=[p1[0]+28*Math.cos(A[1]*D),p1[1]+28*Math.sin(A[1]*D)]
  cap(c,b,p1,22,'#dde3e9');cap(c,p1,p2,20,'#eef2f5')
  joint(c,b,8);joint(c,p1,6)
}

// close-up of a cyborg's mechanical eye: steel bezel with bolts, seven aperture iris blades snap shut and dilate open around a glowing red lens
export const frames=24,delay=70
const{PI,sin,cos,atan2,hypot,sqrt}=Math,T=PI*2
// keyframed value, cosine eased, wraps at t=1
const K=(t,k)=>{for(let j=0;j<k.length-1;j++){const[a,u]=k[j],[b,v]=k[j+1];if(t<b){const e=(1-cos(PI*(t-a)/(b-a)))/2;return u+(v-u)*e}}return k.at(-1)[1]}
export default(c,t)=>{
  const X=128,Y=128,R=80
  const r=K(t,[[0,46],[.3,48],[.4,15],[.62,15],[.82,55],[.9,51],[1,46]])
  const hot=K(t,[[0,0],[.34,0],[.42,1],[.6,1],[.75,0],[1,0]])
  c.translate(X,Y)
  // outer bezel
  let g=c.createRadialGradient(-30,-40,10,0,0,122)
  g.addColorStop(0,'#fbfcfd');g.addColorStop(.7,'#d3d9e0');g.addColorStop(1,'#9aa3ad')
  c.fillStyle=g;c.beginPath();c.arc(0,0,120,0,T);c.fill();c.lineWidth=6;c.stroke()
  c.lineWidth=2
  for(let k=0;k<48;k++){const a=k*T/48,l=k%4?3:7;c.beginPath();c.moveTo(cos(a)*113,sin(a)*113);c.lineTo(cos(a)*(113-l),sin(a)*(113-l));c.stroke()}
  // bolts
  for(let k=0;k<6;k++){
    const a=k*T/6+PI/6,x=cos(a)*102,y=sin(a)*102
    c.fillStyle='#e9edf1';c.lineWidth=2.5;c.beginPath()
    for(let h=0;h<6;h++)c.lineTo(x+cos(h*PI/3+a)*6,y+sin(h*PI/3+a)*6)
    c.closePath();c.fill();c.stroke()
    c.fillStyle='#555';c.beginPath();c.arc(x,y,2,0,T);c.fill()
  }
  // knurled focus ring turns with the aperture
  c.fillStyle='#2c3138';c.lineWidth=4;c.beginPath();c.arc(0,0,94,0,T);c.fill();c.stroke()
  c.fillStyle='#5b6470'
  for(let k=0;k<40;k++){const a=k*T/40+r*.02;c.save();c.rotate(a);c.fillRect(85,-2,8,4);c.restore()}
  c.fillStyle='#16191d';c.beginPath();c.arc(0,0,R+2,0,T);c.fill()
  // lens behind the blades
  g=c.createRadialGradient(-4,-4,0,0,0,R)
  g.addColorStop(0,'#fff');g.addColorStop(.06+.1*hot,'#ffe2a8');g.addColorStop(.18+.12*hot,'#ff4a26')
  g.addColorStop(.42,'#b30d0d');g.addColorStop(.7,'#3a0606');g.addColorStop(1,'#120202')
  c.fillStyle=g;c.beginPath();c.arc(0,0,R,0,T);c.fill()
  c.strokeStyle='#ff6a4a';c.lineWidth=1.5
  for(const q of[28,40])c.beginPath(),c.arc(0,0,q,0,T),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-14,-16,6,3.5,-PI/4,0,T);c.fill()
  c.beginPath();c.arc(-21,-6,2,0,T);c.fill()
  // aperture blades
  const N=7,a0=-r*.035,P=[...Array(N)].map((_,k)=>[cos(a0+k*T/N)*r,sin(a0+k*T/N)*r])
  const Q=P.map((p,k)=>{
    const n=P[(k+1)%N],d=[n[0]-p[0],n[1]-p[1]],l=hypot(...d);d[0]/=l;d[1]/=l
    const b=n[0]*d[0]+n[1]*d[1],s=-b+sqrt(b*b-(n[0]**2+n[1]**2-R*R))
    return[n[0]+s*d[0],n[1]+s*d[1]]
  })
  for(let k=0;k<N;k++){
    const p=P[k],n=P[(k+1)%N],q=Q[k],o=Q[(k+N-1)%N]
    g=c.createLinearGradient(p[0],p[1],q[0],q[1])
    g.addColorStop(0,k%2?'#4c5562':'#424a56');g.addColorStop(1,k%2?'#2a3038':'#232830')
    c.fillStyle=g;c.beginPath();c.moveTo(...p);c.lineTo(...n);c.lineTo(...q)
    c.arc(0,0,R,atan2(q[1],q[0]),atan2(o[1],o[0]),1);c.closePath();c.fill()
  }
  // blade edges: dark seam with a bright lip
  c.lineCap='butt'
  for(let k=0;k<N;k++){
    const p=P[k],q=Q[(k+N-1)%N]
    c.strokeStyle='#0d0f12';c.lineWidth=3;c.beginPath();c.moveTo(...p);c.lineTo(...q);c.stroke()
    c.strokeStyle='#8d99a8';c.lineWidth=1.2;c.beginPath();c.moveTo(p[0]+1,p[1]+1);c.lineTo(q[0]+1,q[1]+1);c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.arc(0,0,R+1,0,T);c.stroke()
  // flare when the iris is shut tight
  if(hot>.05){
    const L=10+48*hot
    c.fillStyle='#ffe6cf';c.beginPath()
    for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?3.5:L*(k%4?.55:1);c.lineTo(cos(a)*q,sin(a)*q)}
    c.fill()
  }
  // glass glint
  c.lineCap='round';c.strokeStyle='#fff';c.lineWidth=3
  c.beginPath();c.arc(0,0,R-8,PI*1.12,PI*1.38);c.stroke()
  c.lineWidth=2;c.beginPath();c.arc(0,0,R-8,PI*1.43,PI*1.48);c.stroke()
  // status led
  c.fillStyle=hot>.5?'#ff3b2f':'#6a1a16';c.lineWidth=2
  c.beginPath();c.arc(78,-78,4,0,T);c.fill();c.stroke()
}

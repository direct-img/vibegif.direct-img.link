// impossible triangle of three teal beams with light, mid and dark shaded faces and dark outlines, a coral ball with a cream spot rolls endlessly round and round along its beams, easing at each corner
const{sin,cos,PI,sqrt,min}=Math,T=2*PI,h=sqrt(3)/2
export const frames=54,delay=40
const n=6,U=30,cx=128-2.5*U,cy=128+2.165*U
// lattice (a,b) on 60 degree axes to canvas
const L=([a,b])=>[cx+(a-b/2)*U,cy-b*h*U]
// the three L-shaped pieces, one per face direction
const F=[
  ['#8ff0d8',[[-1,0],[n-2,0],[n-2,1],[1,1],[n,n],[n-1,n]]],
  ['#2fbfa6',[[n-1,-1],[n,0],[n,n],[1,1],[2,1],[n-1,n-2]]],
  ['#1d7c80',[[-1,-1],[n-1,-1],[n-1,n-2],[n-2,n-3],[n-2,0],[-1,0]]]
]
// ball path: the beam centre lines
const C=[[0,0],[n-1,0],[n-1,n-1]].map(L),r=(n-1)*U/T
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+8&~15)
  }
  c.putImageData(d,0,0)
}
const poly=(c,p)=>{c.beginPath();p.forEach(q=>c.lineTo(...L(q)));c.closePath()}
export default(c,t)=>{
  F.forEach(([f,p])=>{poly(c,p);c.fillStyle=f;c.fill()})
  c.lineWidth=5;F.forEach(([,p])=>{poly(c,p);c.stroke()})
  // one side per third of the loop, eased so it slows into each corner
  const s=3*t,g=s%1,j=(s-g)%3,e=g-.55*sin(T*g)/T,[ax,ay]=C[j],[bx,by]=C[(j+1)%3]
  const x=ax+(bx-ax)*e,y=ay+(by-ay)*e,l=Math.hypot(bx-ax,by-ay),dx=(bx-ax)/l,dy=(by-ay)/l
  // exactly one full roll per side, so the spots line up at every corner
  const th=T*e,sg=cos(th)<0?-1:1,sx=sin(th)*sg,sz=cos(th)*sg
  // soft shadow, kept on the beams so the gif never sees it over empty space
  c.save();c.beginPath();F.forEach(([,p])=>p.forEach((q,i)=>c[i?'lineTo':'moveTo'](...L(q))));c.clip()
  c.beginPath();c.arc(x+4,y+5,r,0,T);c.globalAlpha=.28;c.fillStyle='#000';c.fill();c.restore()
  c.beginPath();c.arc(x,y,r,0,T);c.fillStyle='#ff6b5b';c.fill()
  c.save();c.clip()
  c.beginPath();c.arc(x+r*.45,y+r*.45,r*1.05,0,T);c.fillStyle='#d9443a';c.fill()
  c.beginPath();c.ellipse(x+r*.8*sx*dx,y+r*.8*sx*dy,r*.4*Math.max(.05,sz),r*.4,Math.atan2(dy,dx),0,T);c.fillStyle='#fff3d6';c.fill()
  c.beginPath();c.arc(x-r*.42,y-r*.42,r*.18,0,T);c.fillStyle='#fff';c.fill()
  c.restore()
  c.beginPath();c.arc(x,y,r,0,T);c.lineWidth=4.5;c.stroke()
  Q(c)
}

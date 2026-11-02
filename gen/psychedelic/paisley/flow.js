// 60s paisley teardrop with nested rainbow bands flowing outward from a spinning flower in its belly, scalloped edge beads marching around it
export const frames=18,delay=70,rim=4
const T=Math.PI*2,P=['#ff2e88','#ff8c1a','#ffd60a','#8be01f','#19c2b8','#7b3fe4'],Q=['#ff2e88','#ffd60a','#19c2b8']
const bz=(a,b,c,d,u)=>a*(1-u)**3+3*b*u*(1-u)**2+3*c*u*u*(1-u)+d*u**3
// outline polygon, clockwise: belly arc, left side up to the hooked tip, back down the right side
const O=[]
for(let k=0;k<=60;k++)O.push([62*Math.cos(k/60*Math.PI),30+62*Math.sin(k/60*Math.PI)])
for(const[a,b,c,d]of[[[-62,30],[-62,-60],[10,-130],[80,-94]],[[80,-94],[38,-88],[66,-40],[62,30]]])
  for(let k=1;k<=50;k++)O.push([0,1].map(j=>bz(a[j],b[j],c[j],d[j],k/50)))
const L=[0];for(let k=1;k<O.length;k++)L.push(L[k-1]+Math.hypot(O[k][0]-O[k-1][0],O[k][1]-O[k-1][1]))
const at=u=>{
  u=(u%1+1)%1*L.at(-1);let k=1;while(L[k]<u)k++
  const f=(u-L[k-1])/(L[k]-L[k-1]),[a,b]=O[k-1],[x,y]=O[k]
  return[a+(x-a)*f,b+(y-b)*f]
}
const F=[-4,36]
const poly=(c,s)=>{c.beginPath();for(const[x,y]of O)c.lineTo(F[0]+(x-F[0])*s,F[1]+(y-F[1])*s);c.closePath()}
export default(c,t)=>{
  c.translate(110,128);c.scale(1.06,1.06);c.rotate(.3)
  // marching scallop beads
  const B=[...Array(27)].map((_,j)=>at((j+t*3)/27))
  c.fillStyle='#111';B.map(([x,y])=>{c.beginPath();c.arc(x,y,13,0,T);c.fill()})
  B.map(([x,y],j)=>{c.fillStyle=Q[j%3];c.beginPath();c.arc(x,y,10,0,T);c.fill()})
  poly(c,1);c.fillStyle='#111';c.lineWidth=7;c.fill();c.stroke()
  c.save();poly(c,1);c.clip()
  c.lineWidth=3
  for(let k=8;k>-6;k--){
    const s=(k+t*6)/7
    if(s<=0)continue
    poly(c,s);c.fillStyle=P[(k%6+6)%6];c.fill();c.stroke()
  }
  c.restore()
  poly(c,1);c.lineWidth=7;c.stroke()
  // flower at the focus
  c.translate(...F);c.rotate(T*t/5)
  c.fillStyle='#fff'
  const fl=()=>{c.beginPath();for(let k=0;k<5;k++){const a=k*T/5,x=10*Math.sin(a),y=-10*Math.cos(a);c.moveTo(x+6*Math.cos(a),y+6*Math.sin(a));c.ellipse(x,y,6,9,a,0,T)}}
  fl();c.lineWidth=6;c.stroke();fl();c.fill()
  c.lineWidth=3;c.fillStyle='#ffd60a';c.beginPath();c.arc(0,0,5,0,T);c.fill();c.stroke()
}

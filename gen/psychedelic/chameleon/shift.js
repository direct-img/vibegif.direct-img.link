// chameleon gripping a branch with a curled spiral tail, its skin rippling head to tail through neon stripes, polka dots and a spinning swirl while its turret eye rolls around
export const frames=30,delay=80
const T=Math.PI*2,E=[198,112]
// tapered tube along a centerline -> closed polygon
const tube=(c,p,w0,w1)=>{
  const L=[],R=[],n=p.length-1
  p.map(([x,y],k)=>{
    const[a,b]=p[Math.max(0,k-1)],[d,e]=p[Math.min(n,k+1)],l=Math.hypot(d-a,e-b),w=(w0+(w1-w0)*k/n)/2
    L.push([x-(e-b)/l*w,y+(d-a)/l*w]);R.unshift([x+(e-b)/l*w,y-(d-a)/l*w])
  })
  c.beginPath();[...L,...R].map(([x,y])=>c.lineTo(x,y));c.closePath()
}
const qb=(a,b,d,s)=>[0,1].map(j=>a[j]*(1-s)**2+2*b[j]*s*(1-s)+d[j]*s*s)
const tail=[...[...Array(10)].map((_,k)=>qb([70,150],[64,186],[46,186],k/10)),
  ...[...Array(41)].map((_,k)=>{const s=k/40,a=-Math.PI/2-s*T*1.55,r=28*(1-s*.82);return[46+r*Math.cos(a),214+r*Math.sin(a)]})]
const parts=[
  c=>tube(c,tail,22,5),
  c=>tube(c,[[96,150],[88,168],[82,183]],17,12),
  c=>{
    c.beginPath();c.moveTo(64,138)
    c.bezierCurveTo(80,100,128,84,158,94)
    c.quadraticCurveTo(164,72,178,70)
    c.bezierCurveTo(200,78,220,100,232,118)
    c.quadraticCurveTo(240,130,228,136)
    c.bezierCurveTo(214,146,190,150,174,146)
    c.quadraticCurveTo(166,152,158,157)
    c.bezierCurveTo(138,168,92,168,66,158)
    c.closePath()
  },
  c=>tube(c,[[160,146],[174,164],[170,183]],17,12),
  ...[82,170].map(x=>c=>{c.beginPath();c.ellipse(x-6,184,7.5,5,.3,0,T);c.moveTo(x+13.5,184);c.ellipse(x+6,184,7.5,5,-.3,0,T)})
]
const S=[['#ff2e88','#ff8c1a','#ffd60a'],['#19c2b8','#a6ff2e','#8a3cff'],['#8a3cff','#1fb8ff','#5cffe0']]
const pat=(c,n,t)=>{
  const k=S[n]
  if(n==0){
    c.save();c.rotate(-Math.PI/4)
    for(let j=-30;j<30;j++){c.fillStyle=k[(j%3+3)%3];c.fillRect(j*12+t*72,-400,12.5,800)}
    c.restore()
  }else if(n==1){
    c.fillStyle=k[0];c.fillRect(-20,-20,300,300)
    for(let y=0;y<17;y++)for(let x=0;x<18;x++){
      const X=x*15+(y%2)*7.5,Y=y*15,r=3.5+2.5*Math.sin(T*t*3-X/30)
      c.fillStyle=k[1+(x+y)%2];c.beginPath();c.arc(X,Y,Math.max(1,r),0,T);c.fill()
    }
  }else{
    c.save();c.translate(122,126);c.rotate(T*t/2)
    for(let j=0;j<6;j++){
      c.fillStyle=k[j%3];c.beginPath()
      for(let r=0;r<200;r+=3)c.lineTo(r*Math.cos(j*T/6+r/13),r*Math.sin(j*T/6+r/13))
      for(let r=200;r>=0;r-=3)c.lineTo(r*Math.cos((j+1)*T/6+r/13),r*Math.sin((j+1)*T/6+r/13))
      c.fill()
    }
    c.restore()
  }
}
export default(c,t)=>{
  const p=t*3%3,n=Math.floor(p),f=Math.min(1,Math.max(0,(p-n-.55)/.45)),X=250-f*260
  c.translate(0,-20)
  // branch with a leaf
  c.fillStyle='#3fbf4a';c.beginPath();c.moveTo(214,186);c.quadraticCurveTo(240,190,236,214);c.quadraticCurveTo(210,206,214,186);c.fill();c.stroke()
  c.fillStyle='#8a5a2b';c.beginPath()
  c.moveTo(-10,176);c.quadraticCurveTo(128,168,266,170);c.lineTo(266,188);c.quadraticCurveTo(128,186,-10,194);c.closePath()
  c.fill();c.stroke()
  c.lineWidth=6
  for(const d of parts){
    c.save();d(c);c.clip();pat(c,n,t)
    if(f>0){
      c.beginPath();c.moveTo(300,-10);for(let y=-10;y<=266;y+=8)c.lineTo(X+9*Math.sin(y/14),y);c.lineTo(300,266);c.clip()
      pat(c,(n+1)%3,t)
    }
    c.restore();d(c);c.stroke()
  }
  // eye turret
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...E,15,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.arc(...E,9,0,T);c.stroke()
  const a=T*t*2,ex=E[0]+5*Math.cos(a),ey=E[1]+4*Math.sin(a)
  c.fillStyle='#111';c.beginPath();c.arc(ex,ey,5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(ex-1.5,ey-1.5,1.5,0,T);c.fill()
  // mouth, nostril
  c.lineWidth=3.5;c.beginPath();c.moveTo(230,131);c.quadraticCurveTo(210,138,190,134);c.quadraticCurveTo(186,133,184,129);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(224,120,2,0,T);c.fill()
}

// neon jellyfish pulsing its bell, rainbow arches rippling out inside the dome and color bands flowing down its wavy tentacles
export const frames=24,delay=70
const P=Math.PI*2,X=128
const C=['#ff2d75','#ff8a1a','#ffd60a','#24e06a','#00c8ff','#3f5bff','#c33cff']
export default(c,t)=>{
  const p=Math.sin(P*t),w=60-7*p,h=58+7*p,ry=100-7*Math.sin(P*t-.9)
  // tentacles: dark core then color segments, a wave runs down each one
  const T=[-.86,-.6,-.32,-.1,.1,.32,.6,.86]
  for(const[j,f]of T.entries()){
    const x0=X+f*w*.9,L=100+(j*37%5)*5,pts=[]
    for(let s=0;s<=1.001;s+=.04)pts.push([x0+f*16*s+s*11*Math.sin(P*(s*1.2-t)+j*1.7),ry+2+s*L])
    c.strokeStyle='#111';c.lineWidth=7.5;c.beginPath();pts.forEach(q=>c.lineTo(...q));c.stroke()
    c.lineWidth=3.5
    for(let k=1;k<pts.length;k++){
      c.strokeStyle=C[((Math.floor(k/3-7*t+j*2))%7+7)%7]
      c.beginPath();c.moveTo(...pts[k-1]);c.lineTo(...pts[k]);c.stroke()
    }
  }
  // frilly oral arms
  for(const f of[-1,1]){
    const q=[]
    for(let s=0;s<=1.001;s+=.05)q.push([X+f*(5+s*7)+s*8*Math.sin(P*(s-t)+f),ry+s*64])
    for(const pass of[0,1])q.forEach(([x,y],k)=>{
      const r=5.5-k*.15+1.5*Math.sin(k*1.9-P*t*2)
      c.beginPath();c.arc(x,y,r+(pass?0:3.5),0,P)
      c.fillStyle=pass?'#ffd6f5':'#111';c.fill()
    })
  }
  // bell with scalloped rim
  const bell=()=>{
    c.beginPath();c.moveTo(X-w,ry)
    c.bezierCurveTo(X-w*1.03,ry-h*.8,X-w*.6,ry-h,X,ry-h)
    c.bezierCurveTo(X+w*.6,ry-h,X+w*1.03,ry-h*.8,X+w,ry)
    for(let k=0,n=8;k<n;k++)c.quadraticCurveTo(X+w-(k+.5)*2*w/n,ry+10,X+w-(k+1)*2*w/n,ry)
    c.closePath()
  }
  bell()
  c.save();c.translate(X,ry);c.scale(1,h/w)
  const g=c.createRadialGradient(0,0,0,0,0,w*1.05),B=w*1.05/6,o=7*t
  for(let k=-1;k<7;k++){
    const a=Math.max(0,Math.min(1,(k+o%1)/6)),b=Math.max(0,Math.min(1,(k+1+o%1)/6)),col=C[((k-Math.floor(o))%7+7)%7]
    g.addColorStop(a,col);g.addColorStop(Math.max(a,b-.001),col)
  }
  c.fillStyle=g;c.fill();c.restore()
  c.strokeStyle='#111';c.lineWidth=7;c.stroke()
  // gloss
  c.strokeStyle='#fff';c.lineWidth=5
  c.beginPath();c.ellipse(X-w*.42,ry-h*.6,w*.18,h*.22,-.6,Math.PI*1.05,Math.PI*1.6);c.stroke()
}

// umbrella twirling in the rain, colored panels sweeping round, raindrops splashing off the top
const{sin,cos,PI,asin,max}=Math,T=2*PI
export const frames=24,delay=60
const COL=['#ff6b6b','#ffd43b','#4dabf7','#ff6b6b','#ffd43b','#4dabf7'],BU='#a5d8ff'
const CX=128,TOP=46,BASE=124,RX=94
const dome=c=>{c.beginPath();c.moveTo(CX-RX,BASE);c.bezierCurveTo(CX-RX,TOP-20,CX+RX,TOP-20,CX+RX,BASE);const n=6;for(let k=0;k<n;k++){const x1=CX+RX-(k+1)*2*RX/n,xm=(CX+RX-k*2*RX/n+x1)/2;c.quadraticCurveTo(xm,BASE-14,x1,BASE)}c.closePath()}
const surf=x=>{const u=(x-CX)/RX;return BASE-(BASE-TOP+16)*(1-u*u)*.98}
export default(c,t)=>{
  const rot=t*T/3
  for(const[x,o]of[[60,0],[104,.4],[150,.7],[196,.2],[226,.55]]){
    const p=(t*2+o)%1,ys=surf(x)-6,y=-20+p*(ys+20)*1.6
    c.lineWidth=4;c.fillStyle=BU
    if(y<ys){c.beginPath();c.ellipse(x,y,4,8,0,0,T);c.fill();c.stroke()}
    else{const q=(y-ys)/(ys*.6+12);if(q<1)for(const d of[-1,1])c.beginPath(),c.arc(x+d*14*q,ys-16*q+20*q*q,3.5,0,T),c.fill(),c.stroke()}
  }
  c.lineWidth=7
  for(const[w,s]of[[16,'#111'],[6,'#ced4da']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(CX,BASE-10),c.lineTo(CX,206),c.arc(CX-16,206,16,0,PI),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  dome(c);c.fillStyle=COL[0];c.fill()
  c.save();dome(c);c.clip()
  for(let k=0;k<6;k++){
    const a0=((rot+k*PI/3)%T+T)%T,a1=a0+PI/3
    for(const w of[0,T]){
      const lo=max(a0,w),hi=Math.min(a1,w+PI);if(hi<=lo)continue
      const x0=CX+RX*cos(hi-w),x1=CX+RX*cos(lo-w)
      c.fillStyle=COL[k];c.beginPath();c.moveTo(CX,TOP-6);c.quadraticCurveTo(x0,TOP,x0,BASE+4);c.lineTo(x1,BASE+4);c.quadraticCurveTo(x1,TOP,CX,TOP-6);c.fill()
    }
  }
  c.lineWidth=4;for(let k=0;k<6;k++){const a=((rot+k*PI/3)%T+T)%T;if(a>PI)continue;const x=CX+RX*cos(a);c.beginPath();c.moveTo(CX,TOP-6);c.quadraticCurveTo(x,TOP,x,BASE+4);c.stroke()}
  c.restore();c.lineWidth=7;dome(c);c.stroke()
  c.fillStyle='#ced4da';c.beginPath();c.roundRect(CX-4,TOP-24,8,16,4);c.fill();c.lineWidth=5;c.stroke()
}

// a cream pen dot draws a thick seven-petal spirograph rosette in a stepped ribbon of terracotta, orange and amber over a faint peach guide line, then rubs it out from the tail end going the same way round
const{sin,cos,PI,floor,min,max}=Math,T=2*PI
export const frames=60,delay=40
const M=420,
  P=[...Array(M+1)].map((_,k)=>{const u=k/M*T;return[40*cos(2*u)+58*cos(5*u),40*sin(2*u)-58*sin(5*u)]}),
  // stepped color ramp along the line, terracotta to amber and back
  C=['#c15f3c','#cd6a46','#d97757','#e3824f','#ec9248','#f2a541','#ec9248','#e3824f','#d97757','#cd6a46'],
  B=M/30,                              // points per color step
  at=f=>{const k=min(floor(f),M-1),r=f-k;return[P[k][0]*(1-r)+P[k+1][0]*r,P[k][1]*(1-r)+P[k+1][1]*r]},
  ea=x=>.6*x+.2*(1-cos(PI*x))           // mostly steady, soft start and stop
export default(c,t)=>{
  c.translate(128,128)
  c.lineWidth=3,c.strokeStyle='#ebbd98',c.beginPath(),P.forEach(p=>c.lineTo(...p)),c.stroke()
  const a=(t<.5?0:ea(2*t-1))*M,b=(t<.5?ea(2*t):1)*M
  c.lineWidth=10
  for(let s=floor(a/B)*B;s<b;s+=B){
    const s0=max(s,a),s1=min(s+B,b)
    if(s1-s0<.01)continue
    c.strokeStyle=C[floor(s/B+.5)%10],c.beginPath(),c.moveTo(...at(s0))
    for(let k=floor(s0)+1;k<s1;k++)c.lineTo(...P[k])
    c.lineTo(...at(s1)),c.stroke()
  }
  // pen nib rides the head while drawing, the tail while erasing
  const[x,y]=at(t<.5?b:a)
  c.lineWidth=4,c.strokeStyle='#5a2614',c.fillStyle='#fbe6c4'
  c.beginPath(),c.arc(x,y,9,0,T),c.fill(),c.stroke()
}

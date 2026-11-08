// blue hexagon holding a yellow pentagon holding a pink square holding a green triangle, all with dark outlines, each turns its own way at its own pace with a springy settle and they all click back into line pointing up once per loop
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=48,delay=40
// sides, radius, color, symmetry steps turned per loop (sign is direction), active window
const S=[[6,104,'#3a86ff',1,.02,.62],[5,85,'#ffbe0b',-2,.1,.7],[4,63,'#ff4d8d',3,.18,.78],[3,40,'#3ddc84',-4,.26,.86]]
// ease in-out with a little wind-up before and a springy overshoot after
const K=1.4,E=p=>p<.5?(2*p)**2*((K+1)*2*p-K)/2:((2*p-2)**2*((K+1)*(2*p-2)+K)+2)/2
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+8&~15)
  }
  c.putImageData(d,0,0)
}
export default(c,t)=>{
  S.forEach(([n,r,f,k,a,b])=>{
    const p=max(0,min(1,(t-a)/(b-a))),q=-PI/2+k*T/n*E(p)
    c.beginPath()
    for(let j=0;j<n;j++)c.lineTo(128+r*cos(q+j*T/n),128+r*sin(q+j*T/n))
    c.closePath();c.fillStyle=f;c.fill();c.lineWidth=7;c.stroke()
  })
  c.beginPath();c.arc(128,128,7,0,T);c.fillStyle='#fff';c.fill();c.lineWidth=4;c.stroke()
  Q(c)
}

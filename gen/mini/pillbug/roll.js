// pillbug: trundles along on its little legs, curls up into a striped ball with an eye peeking from the seam, rolls forward and back, then unrolls and blinks
const{sin,cos,PI,min,max,sqrt}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
const N=7,Lb=170,W=40,G=204,ez=u=>(1-cos(PI*min(1,max(0,u))))/2,rot=([x,y],a)=>[x*cos(a)-y*sin(a),x*sin(a)+y*cos(a)]
export default(c,t)=>{
  const q=t<.5?ez((t-.14)/.16):ez((.86-t)/.16),r=t>.3&&t<.7?.65*sin(T*(t-.3)/.4):0,bl=t>.9&&t<.96
  const th=2.5+(T-2.5)*q,R=Lb/th,z=1+.25*q,lg=10*(1-q),yb=-R*cos(th/2)+W/2,m=q*q*(3-2*q)
  const a0=-PI/2-th/2,a1=-PI/2+th/2,P=(a,k=R)=>[k*cos(a),k*sin(a)],s=1-q,o=R+W/2
  c.fillStyle=c.strokeStyle='#fff'
  c.translate(116+12*q+z*o*r*q,G-z*(yb+lg));c.scale(z,z);c.rotate(r*q-q)
  if(lg>1){c.lineWidth=5;for(const[i,x]of[-44,-16,12,40].entries()){const k=4*sin(T*t*4+i*PI/2);c.beginPath();c.moveTo(x,yb-8);c.lineTo(x+k,yb+lg);c.stroke()}}
  if(s>.05){
    c.save();c.translate(...P(a0-6/R));c.rotate(a0-PI/2);c.scale(s,s);c.lineWidth=5
    for(const d of[-1,1])c.beginPath(),c.moveTo(0,d*6),c.lineTo(16,d*11),c.stroke();c.restore()
    c.save();c.translate(...P(a1+16/R));c.rotate(a1+PI/2);c.scale(s,s)
    c.lineWidth=3.5;for(const d of[0,1])c.beginPath(),c.moveTo(10,2),c.quadraticCurveTo(24+6*d,-6+4*sin(T*t*2+d),36+4*d,8+10*d),c.stroke()
    c.lineWidth=6;c.beginPath();c.arc(0,0,19,0,T);c.fill();c.stroke()
    c.fillStyle=c.strokeStyle='#111'
    if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(4,-8,5,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(4,-6,5,0,T),c.fill()
    c.lineWidth=3;c.beginPath();c.arc(10,3,5,.1*PI,.7*PI);c.stroke()
    c.restore()
  }
  if(q>.85){
    const p=(q-.85)/.15;c.lineWidth=3.5
    for(const[a,b]of[[-.16,-.26],[-.04,.02]])c.beginPath(),c.moveTo(...P(PI/2+a,o-4)),c.lineTo(...P(PI/2+b,o-4+14*p)),c.stroke()
  }
  c.beginPath();c.arc(0,0,R,a0,a1);c.closePath();c.fill();c.lineWidth=W;c.stroke()
  // plates: lines across the dome when open, parallel curved bands across the ball when shut, only drawn on top of the body
  c.globalCompositeOperation='source-atop';c.strokeStyle=c.fillStyle='#111';c.lineWidth=3
  for(let k=1;k<N;k++){
    const[tx,ty]=P(a0+k/N*th,o-6),O=[[tx,ty],[tx*.9+5,(ty+yb)/2],[tx*.82,yb-5]]
    const u=-1+2*k/N,h=(o-4)*sqrt(1-u*u),x=(o-4)*u,C=[[x,-h],[x+.7*h,0],[x,h]].map(v=>rot(v,1))
    const[A,B,D]=O.map((v,j)=>v.map((w,i)=>w+(C[j][i]-w)*m))
    c.beginPath();c.moveTo(...A);c.quadraticCurveTo(...B,...D);c.stroke()
  }
  if(q>.85)c.beginPath(),c.arc(...P(PI/2-.32,o-13),4.5*(q-.85)/.15,0,T),c.fill()
  c.globalCompositeOperation='source-over'
}

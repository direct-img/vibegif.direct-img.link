// emoticon in a rage, heat boils up inside the shaking head until it bubbles over the top and blows off steam
export const frames=26,delay=80
const P=Math.PI,{sin,cos,max,min,abs}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
// blobs outlined first then filled, so overlapping ones merge into one shape
const blobs=(c,B,f)=>{
  c.fillStyle=K;for(const[x,y,r]of B){c.beginPath();c.arc(x,y,r+4,0,2*P);c.fill()}
  c.fillStyle=f;for(const[x,y,r]of B){c.beginPath();c.arc(x,y,r,0,2*P);c.fill()}
}
export default(c,t,i)=>{
  // build (0-.7), boil over (.7-.8), blow (.8), drain (.8-1)
  const lv=t<.7?.08+.92*(t/.7)**1.4:t<.8?1:1-.92*ez((t-.8)/.16),
    ov=ez((t-.68)/.06)*(1-ez((t-.79)/.03)),bw=cl((t-.79)/.16),pop=max(0,1-abs(t-.8)/.05),
    A=t<.8?.5+3.5*lv**2:3.5*(1-ez(bw*2.5)),R=96+5*lv**3-4*pop
  // rattle: flip side every frame, bob every other frame
  c.translate(128+A*(i%2*2-1),132+A*.5*((i>>1)%2*2-1)+3*pop)
  // foam spilling over the top of the head
  if(ov>0){const F=[];for(let k=-2;k<=2;k++)F.push([k*20,-R+4-10*ov*(1+.3*sin(2*P*t*8+k*2)),(9+3*(k&1))*ov]);blobs(c,F,G)}
  // steam blown off the top, flying out to the corners
  if(bw>0&&bw<1){
    // burst lines flung out from the pop
    c.lineWidth=5;c.strokeStyle=G
    for(let k=0;k<5;k++){
      const a=-P/2+(k-2)*.5,d=100+12*bw,l=15*sin(P*bw)
      c.beginPath();c.moveTo(cos(a)*d,sin(a)*d);c.lineTo(cos(a)*(d+l),sin(a)*(d+l));c.stroke()
    }
    const B=[]
    for(const s of[-1,1])for(let k=0;k<2;k++){
      const g=1-(1-bw)**2,r=(13-4*k)*sin(P*bw)**.5,x=s*(40+58*g-k*18),y=-100+6*g+k*14
      if(r>3)B.push([x,y,r],[x+r,y+r*.25,r*.75],[x-r,y+r*.25,r*.75],[x+r*.45,y-r*.45,r*.6])
    }
    blobs(c,B,'#fff')
  }
  c.beginPath();c.ellipse(0,0,R+3*pop,R-3*pop,0,0,2*P)
  c.fillStyle='#fff';c.fill()
  // boiling heat level inside, with bubbles
  c.save();c.clip()
  const sy=R-2*R*lv
  c.beginPath();c.moveTo(-R,R)
  for(let x=-R;x<=R;x+=8)c.lineTo(x,sy+3*sin(x*.09+2*P*t*6)*(1-abs(lv-.5)))
  c.lineTo(R,R);c.closePath();c.fillStyle=G;c.fill()
  for(let k=0;k<7;k++){
    const f=(t*3+k*.37)%1,x=-60+k*20+5*sin(f*9),y=R-f*(R-sy+6)
    if(y>sy+4){c.beginPath();c.arc(x,y,2+3*f,0,2*P);c.lineWidth=3;c.strokeStyle='#fff';c.stroke()}
  }
  c.restore()
  c.beginPath();c.ellipse(0,0,R+3*pop,R-3*pop,0,0,2*P);c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // furious slanted eyes
  c.fillStyle=K
  for(const s of[-1,1]){
    c.save();c.beginPath();c.moveTo(s*10,-4);c.lineTo(s*66,-34);c.lineTo(s*66,30);c.lineTo(s*10,30);c.clip()
    c.beginPath();c.ellipse(s*38,-6,18,15,0,0,2*P);c.fill();c.restore()
  }
  // brows crashing down into a steep V
  c.lineWidth=12;c.strokeStyle=K
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*8,-18);c.lineTo(s*68,-52-3*pop);c.stroke()}
  // gritted teeth, mouth stretched with the corners pulled down
  const w=38+4*lv,h=16+4*lv
  const m=()=>{c.beginPath();c.moveTo(-w,52+h);c.lineTo(-w+6,40-h*.3);c.quadraticCurveTo(0,32-h*.4,w-6,40-h*.3);c.lineTo(w,52+h);c.quadraticCurveTo(0,44+h,-w,52+h);c.closePath()}
  m();c.fillStyle='#fff';c.fill()
  c.save();c.clip();c.lineWidth=4
  c.beginPath();c.moveTo(-w,44+h*.3);c.quadraticCurveTo(0,38+h*.3,w,44+h*.3)
  for(let k=-1;k<=1;k++){c.moveTo(k*w*.48,20);c.lineTo(k*w*.48,80)}
  c.stroke();c.restore()
  m();c.lineWidth=8;c.stroke()
}

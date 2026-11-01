// emoticon pouting, turns away in a huff and puffs up both cheeks, peeks back, then blows the air out
export const frames=48,delay=55
const P=Math.PI,{sin,max,min,abs}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
const win=(t,a,b,c,d)=>ez((t-a)/(b-a))*(1-ez((t-c)/(d-c)))
// puff cloud of three blobs, outline first then white so they merge
const cloud=(c,x,y,r)=>{
  const B=[[0,0,r],[r*.85,r*.25,r*.7],[-r*.8,r*.3,r*.65]]
  c.fillStyle=K;for(const[a,b,q]of B){c.beginPath();c.arc(x+a,y+b,q+4,0,2*P);c.fill()}
  c.fillStyle='#fff';for(const[a,b,q]of B){c.beginPath();c.arc(x+a,y+b,q,0,2*P);c.fill()}
}
export default(c,t)=>{
  const T=win(t,.06,.2,.8,.94),p=win(t,.12,.32,.76,.88),
    sh=win(t,.16,.22,.44,.5),pk=win(t,.5,.56,.7,.76),rl=cl((t-.76)/.22)
  c.translate(128,128)
  c.rotate(-.06*T)
  // head plus two round cheek balloons that swell out of it while the breath is held
  const H=[[0,0,96],...[-1,1].map(s=>[s*60-4*T,30,44*p])]
  c.fillStyle=K;for(const[x,y,r]of H){c.beginPath();c.arc(x,y,r+4,0,2*P);c.fill()}
  c.fillStyle='#fff';for(const[x,y,r]of H){c.beginPath();c.arc(x,y,max(0,r-4),0,2*P);c.fill()}
  c.translate(-14*T,-2*T)
  // blush hatching, spreading as the cheeks puff
  c.lineWidth=4;c.strokeStyle=G
  for(const s of[-1,1])for(let j=-1;j<=1;j++){
    const x=s*(56+10*p)+j*(10+2*p)+6*T,y=32+10*p
    c.beginPath();c.moveTo(x+4,y-6-3*p);c.lineTo(x-4,y+6+3*p);c.stroke()
  }
  c.strokeStyle=K
  // sulky brows, pulled down at the middle
  c.lineWidth=10
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(s*60,-50+2*T);c.quadraticCurveTo(s*44,-52-2*T,s*20,-38+4*sh);c.stroke()
  }
  // eyes: half-lidded glare, squeezed shut for the "hmph", sliding back to peek
  for(const s of[-1,1]){
    const x=s*38,y=-14
    if(sh>.5){c.beginPath();c.moveTo(x-17,y-4+s*3);c.lineTo(x+17,y-4-s*3);c.lineWidth=9;c.stroke();continue}
    const lk=8*pk
    c.beginPath();c.moveTo(x-17,y-5);c.lineTo(x+17,y-5);c.arc(x,y-5,17,0,P);c.closePath();c.fillStyle=K;c.fill()
    c.beginPath();c.arc(x+lk-4,y+1,4.5,0,2*P);c.fillStyle='#fff';c.fill()
  }
  // mouth: a tight sulky frown, squeezed small while the cheeks are full, fluttering open on the blow
  const fl=rl>0&&rl<.55?sin(rl*P*14)*(1-rl/.55):0
  c.fillStyle=K;c.lineWidth=10
  if(rl>0&&rl<.55){
    c.beginPath();c.ellipse(-4,52,10+3*fl,8+4*abs(fl),0,0,2*P);c.fill()
  }else{
    const w=24-13*p,h=12-11*p
    c.beginPath();c.moveTo(-w,54);c.quadraticCurveTo(0,54-2*h,w,54);c.stroke()
  }
  // the held breath blown out the side of the mouth in little clouds
  for(let j=0;j<3;j++){
    const f=cl((rl-j*.1)/.6);if(f<=0||f>=1)continue
    cloud(c,-30-f*62+j*6,58+f*32-j*10,(15-j*3)*sin(P*f)**.5)
  }
}

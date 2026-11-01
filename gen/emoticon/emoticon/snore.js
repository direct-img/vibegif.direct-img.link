// emoticon fast asleep and snoring, - - dash eyes that wave into ~ on the rattle, an o mouth that snores open into O, and z Z Z typed out by a blinking █ cursor while a snot bubble swells with the breath
export const frames=32,delay=80
// keys: t, mouth open (snoring in), snot bubble (blowing out)
const k=[[0,.15,1],[.36,1,0],[.5,1,0],[1,.15,1]]
const P=Math.PI,B='#111',cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,T)=>{
  const t=(T+.45)%1,[mo,bu]=K(t),wv=ez((t-.3)/.06)*ez((.56-t)/.06),rr=wv?Math.sin(t*P*44)*wv:0,
  // stroke the current path twice, white keyline under ink, so it reads on dark pages too
  ink=w=>{c.strokeStyle='#fff';c.lineWidth=w+5;c.stroke();c.strokeStyle=B;c.lineWidth=w;c.stroke()}
  c.save()
  c.translate(116+rr*1.5,138);c.rotate(-.1)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  c.lineCap='butt'
  for(const s of[-1,1]){
    const x=s*34-4,y=-6
    // eyes are typed - dashes that ripple into ~ tildes while the snore rattles
    c.beginPath()
    for(let u=0;u<=1.001;u+=.05)c.lineTo(x-13+26*u,y+1-wv*6*Math.sin(2*P*u)*(1+.25*rr))
    c.lineWidth=9;c.stroke()
    c.beginPath();c.moveTo(x-11,y-30+s*1);c.quadraticCurveTo(x,y-34,x+11,y-30-s*1);c.lineCap='round';c.lineWidth=6;c.stroke();c.lineCap='butt'
  }
  // mouth is an o glyph that snores open into a big O, rattling on the inhale
  const mw=8+7*mo,mh=9+10*mo+rr*1.5
  c.beginPath();c.ellipse(-6,50,mw,mh,-.12,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=9;c.stroke()
  // snot bubble growing out of one nostril
  if(bu>.03){
    const r=3+27*bu,bx=10+r*.6,by=20+r*.62
    c.beginPath();c.arc(bx,by,r,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=4;c.stroke()
    c.beginPath();c.arc(bx,by,r*.66,P*1.1,P*1.45);c.strokeStyle='#9a9a9a';c.lineWidth=2+r*.12;c.stroke();c.strokeStyle=B
  }
  c.restore()
  // z Z Z typed out up a rising line by a blinking block cursor, then backspaced away before the next breath
  const L=[[163,40,8],[189,32,10],[217,23,11],[240,17,10]],
  pop=x=>(x=cl(x)-1,1+2.7*x**3+1.7*x**2),
  // glyph z, h = half height, w = half width
  zg=(h,w)=>{c.beginPath();c.moveTo(-w,-h);c.lineTo(w,-h);c.lineTo(-w,h);c.lineTo(w,h);c.lineJoin='miter';c.miterLimit=3;ink(Math.max(3,h*.68))},
  ty=n=>.3+.06*n,bs=n=>.82-.04*n
  let cur=0
  for(let n=0;n<3;n++){
    cur+=(t>=ty(n))-(t>=bs(n))
    if(t<ty(n)||t>=bs(n))continue
    const [x,y,h]=L[n],z=pop((t-ty(n))/.08)
    c.save();c.translate(x,y);c.rotate(-.2);c.scale(z,z);zg(h,h*(n?.85:.95));c.restore()
  }
  // cursor sits at the next slot, solid while keys are hit, blinking while idle
  const busy=t>=ty(0)&&t<ty(2)+.06||t>=bs(2)&&t<bs(0)+.03
  if(t>.24&&t<.9&&(busy||Math.floor(T*8)%2)){
    const [x,y,h]=L[cur]
    c.save();c.translate(x,y);c.rotate(-.2);c.beginPath();c.rect(-h*.45,-h,h*.9,h*2);c.lineWidth=5;c.strokeStyle='#fff';c.stroke();c.fillStyle=B;c.fill();c.restore()
  }
}

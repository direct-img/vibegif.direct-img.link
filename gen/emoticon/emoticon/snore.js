// emoticon fast asleep and snoring, z Z Z popping out on each snore while a snot bubble swells and shrinks with the breath
export const frames=32,delay=80
// keys: t, mouth open (snoring in), snot bubble (blowing out)
const k=[[0,.15,1],[.36,1,0],[.5,1,0],[1,.15,1]]
const P=Math.PI,B='#111',cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,T)=>{
  const t=(T+.45)%1,[mo,bu]=K(t),rr=t>.3&&t<.56?Math.sin(t*P*44)*ez((t-.3)/.06)*ez((.56-t)/.06):0,
  // stroke the current path twice, white keyline under ink, so it reads on dark pages too
  ink=w=>{c.strokeStyle='#fff';c.lineWidth=w+5;c.stroke();c.strokeStyle=B;c.lineWidth=w;c.stroke()}
  c.save()
  c.translate(116+rr*1.5,138);c.rotate(-.1)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  c.lineWidth=7
  for(const s of[-1,1]){
    const x=s*34-4,y=-4
    // shut eyes, little lash flick at the outer end, relaxed brows
    c.beginPath();c.arc(x,y-10,16,P*.18,P*.82);c.stroke()
    c.beginPath();c.moveTo(x+s*14,y-3);c.lineTo(x+s*19,y-7);c.lineWidth=5;c.stroke()
    c.beginPath();c.moveTo(x-11,y-34+s*1);c.quadraticCurveTo(x,y-38,x+11,y-34-s*1);c.lineWidth=6;c.stroke();c.lineWidth=7
  }
  // snoring mouth, rattles open on the inhale
  const mw=9+6*mo,mh=4+15*mo+rr*2
  c.beginPath();c.ellipse(-6,50,mw,mh,-.12,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=4;c.stroke()
  if(mo>.4){c.save();c.clip();c.beginPath();c.ellipse(-4,50+mh,mw*.8,mh*.55,0,0,2*P);c.fillStyle='#9a9a9a';c.fill();c.restore()}
  // snot bubble growing out of one nostril
  if(bu>.03){
    const r=3+27*bu,bx=10+r*.6,by=20+r*.62
    c.beginPath();c.arc(bx,by,r,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=4;c.stroke()
    c.beginPath();c.arc(bx,by,r*.66,P*1.1,P*1.45);c.strokeStyle='#9a9a9a';c.lineWidth=2+r*.12;c.stroke()
  }
  c.restore()
  // z Z Z pop out one by one on the snore, bob, then shrink away before the next breath
  const bo=x=>(x=cl(x)-1,1+2.7*x**3+1.7*x**2)
  for(let n=0;n<3;n++){
    const a=.3+.06*n,v=.86+.04*n,z=bo((t-a)/.1)*(1-ez((t-v)/.06)),s=(6.5+3*n)*z,l=cl((t-a)/(v-a+.1))
    if(s<1)continue
    c.save();c.translate(182+22.5*n,71-21.5*n-l*4);c.rotate(-.15+.1*Math.sin((t-a)*P*4))
    c.beginPath();c.moveTo(-s,-s);c.lineTo(s,-s);c.lineTo(-s,s);c.lineTo(s,s);ink(Math.max(2.5,s*.42))
    c.restore()
  }
}

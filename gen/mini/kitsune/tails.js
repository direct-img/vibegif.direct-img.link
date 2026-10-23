// fox spirit sitting side-on, three white-tipped tails fanned out behind it swaying one after another,
// a fox-fire flame flickering beside its nose, an ear twitches and it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const bl=t>.7&&t<.77,tw=t>.36&&t<.44?.3:0,hr=.04*sin(T*t),f=k=>3*sin(T*t*2+k)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6;c.translate(122,218);c.scale(.88,.88);c.translate(-138,-218)
  const shape=(x,y,r,g)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();g();c.fill();c.stroke();c.restore()}
  // tails: plump, curled tip, white tip cut out by clipping a circle to the tail's own outline
  // tails: narrow at the root, bushy in the middle, pointed curling tip; the white tip is a circle clipped to the tail
  for(const[i,a]of[-.05,.8,1.65].entries()){
    const r=a+.1*sin(T*t-i*.9),L=[],R=[];let x=160,y=194
    for(let j=0;j<=20;j++){const s=j/20,th=r+.5*s*s,w=2.5+15*sin(PI*s**1.4);L.push([x-cos(th)*w,y-sin(th)*w]);R.push([x+cos(th)*w,y+sin(th)*w]);x+=sin(th)*5;y-=cos(th)*5}
    c.save();c.beginPath();for(const p of[...L,...R.reverse()])c.lineTo(...p);c.closePath();c.fill();c.stroke();c.clip()
    c.fillStyle='#fff';c.beginPath();c.arc(x,y,24,0,T);c.fill();c.restore()
  }
  shape(0,0,0,()=>c.ellipse(136,186,36,32,0,0,T))
  shape(0,0,0,()=>c.ellipse(136,218,20,6,0,0,T))
  shape(0,0,0,()=>{c.moveTo(86,178);c.bezierCurveTo(70,160,68,132,80,112);c.lineTo(108,104);c.bezierCurveTo(116,130,140,148,158,180);c.lineTo(108,190);c.closePath()})
  c.lineWidth=13;c.beginPath();c.moveTo(92,172);c.lineTo(90,213);c.stroke()
  c.lineWidth=6;shape(0,0,0,()=>c.ellipse(85,217,11,5.5,0,0,T))
  // fox-fire: round base with three flickering tongues
  c.save();c.translate(38,64+6*sin(T*t));c.scale(1.15,1.15)
  shape(0,0,.08*sin(T*t*2),()=>{c.moveTo(-11,6);c.arc(0,6,11,PI,0,true);c.quadraticCurveTo(14,0,16+f(1),-12);c.quadraticCurveTo(10,-7,7,-7)
    c.quadraticCurveTo(10,-22,2+f(2),-38);c.quadraticCurveTo(-9,-22,-6,-9);c.quadraticCurveTo(-11,-9,-15+f(3),-16);c.quadraticCurveTo(-15,-2,-11,6)})
  c.restore()
  c.translate(96,108);c.rotate(hr);c.translate(-96,-108)
  shape(0,0,0,()=>c.ellipse(94,92,20,18,0,0,T))
  shape(0,0,0,()=>{c.moveTo(100,82);c.lineTo(56,99);c.quadraticCurveTo(48,103,56,107);c.lineTo(98,110)})
  shape(0,0,0,()=>{c.moveTo(102,100);c.lineTo(116,116);c.lineTo(92,110)})
  shape(0,0,0,()=>{c.moveTo(82,82);c.lineTo(86,44);c.lineTo(100,76)})
  shape(106,80,tw,()=>{c.moveTo(-8,-2);c.lineTo(4,-36);c.lineTo(8,6)})
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.moveTo(77,90),c.lineTo(90,87),c.stroke()
  else c.beginPath(),c.ellipse(84,89,6.5,3.2,-.3,0,T),c.fill()
}

// cockatoo on a perch: it bobs side to side, flicks its crest up into a fan and lays it back down, and blinks
const{sin,PI,min}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const q=t>.1&&t<.6?sin(PI*(t-.1)/.5):0,g=min(1,q*1.5),s=sin(T*t*2),bl=t>.78&&t<.84
  c.fillStyle=c.strokeStyle='#fff'
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=14;c.beginPath();c.moveTo(50,214);c.lineTo(206,214);c.stroke()
  c.translate(124,214);c.rotate(.07*s);c.translate(-124,-214)
  c.lineWidth=6
  shape(()=>{c.moveTo(100,190);c.lineTo(94,238);c.lineTo(116,236);c.lineTo(124,194)})
  for(let i=0;i<5;i++){
    const a=-PI*.97+i*.05+g*(PI*.22+i*.3),L=32+i*3
    c.save();c.translate(132,76);c.rotate(a);shape(()=>{c.moveTo(0,-6);c.bezierCurveTo(L*.5,-9,L*.9,-6,L,5);c.quadraticCurveTo(L*.5,4,0,6)});c.restore()
  }
  shape(()=>c.ellipse(122,162,40,54,-.25,0,T))
  shape(()=>c.arc(146,98,34,0,T))
  c.fillStyle=c.strokeStyle='#111'
  // beak gets a white ring so it still shows on a black page
  const bk=()=>{c.moveTo(170,86);c.quadraticCurveTo(198,88,194,120);c.quadraticCurveTo(186,108,172,110);c.ellipse(176,114,9,7,0,0,T)}
  c.lineWidth=7;c.strokeStyle='#fff';c.beginPath();bk();c.stroke();c.strokeStyle='#111';c.beginPath();bk();c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(154,92,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(154,94,6,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.moveTo(146,134);c.quadraticCurveTo(152,180,108,204);c.stroke()
  for(const x of[112,134])c.beginPath(),c.arc(x,208,5,PI*.9,PI*2.1),c.stroke()
}

// dodo waddling in place: its round body rocks side to side as its big feet step, its head bobs, the tail tuft wobbles and it blinks
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const r=.07*sin(T*t*2),hb=4*sin(T*t*4),bl=t>.62&&t<.68,L=p=>8*max(0,sin(T*t*2+p))
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(-8,0)
  for(const[x,p]of[[104,0],[140,PI]]){const l=L(p)
    c.lineWidth=13;c.beginPath();c.moveTo(x,186);c.lineTo(x+2,220-l);c.stroke()
    c.lineWidth=6;for(const a of[-.25,0,.25])c.beginPath(),c.moveTo(x+2,222-l),c.lineTo(x+2+20*cos(a),222-l+8*sin(a)+2),c.stroke()}
  c.translate(122,222);c.rotate(r);c.translate(-122,-222)
  for(const[x,y,q]of[[58,104,0],[46,120,1],[56,90,2]]){c.save();c.translate(x,y);c.rotate(.15*sin(T*t*2-q));shape(()=>c.arc(0,0,11,0,T));c.restore()}
  shape(()=>c.ellipse(118,142,60,54,0,0,T))
  c.lineWidth=30;c.beginPath();c.moveTo(146,120);c.lineTo(164,88+hb);c.stroke()
  c.translate(0,hb)
  c.lineWidth=6;shape(()=>c.arc(170,78,28,0,T))
  shape(()=>{c.moveTo(184,62);c.quadraticCurveTo(222,58,236,80);c.quadraticCurveTo(242,98,228,100);c.quadraticCurveTo(226,90,214,92);c.quadraticCurveTo(196,96,184,94);c.closePath()})
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(170,70,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(170,72,5.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(190,82);c.quadraticCurveTo(208,82,226,90);c.stroke()
  c.beginPath();c.moveTo(196,68);c.quadraticCurveTo(204,64,212,68);c.stroke()
  c.translate(0,-hb)
  c.lineWidth=3.5;c.beginPath();c.moveTo(96,124);c.quadraticCurveTo(122,120,132,142);c.quadraticCurveTo(116,160,100,150);c.stroke()
}

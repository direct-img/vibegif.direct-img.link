// deadpan blob slowly raises a hand, plants it on its face with a smack, holds it there, then drags it down its face in despair
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=80,rim=5
const Y='#ffd43b',BL='#ff8787',YD='#f0b400'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const hand=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(1.4,1.4);c.fillStyle=Y;c.lineWidth=5
  for(const[fx,h]of[[-24,30],[-8,36],[8,36],[24,30]])c.beginPath(),c.roundRect(fx-8,-h-14,16,h+20,8),c.fill(),c.stroke()
  c.beginPath();c.ellipse(36,6,10,18,-.7,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(-34,-20,68,52,[10,10,22,22]);c.fill();c.stroke()
  c.fillStyle=Y;c.fillRect(-29,-24,58,8)
  c.strokeStyle=YD;c.lineWidth=3;c.beginPath();for(const fx of[-16,0,16])c.moveTo(fx,-22),c.lineTo(fx,-14);c.stroke();c.strokeStyle='#111'
  c.restore()}
export default(c,t,i)=>{
  const raise=ez(t,.16,.34),slap=ez(t,.34,.38),drag=ez(t,.62,.84),drop=ez(t,.84,.98),hit=t>=.38&&t<.5
  const sq=hit?1-.05*(1-ez(t,.38,.48)):1,shake=t>=.46&&t<.62?.035*sin((t-.46)*T*6):0
  // body
  c.save();c.translate(128,240);c.scale(2-sq,sq);c.rotate(shake);c.translate(-128,-240)
  c.fillStyle=Y;c.beginPath();c.moveTo(48,240);c.bezierCurveTo(42,130,72,72,128,72);c.bezierCurveTo(184,72,214,130,208,240);c.closePath();c.fill();c.stroke()
  // face: flat stare, eyes and mouth pulled down while the hand drags
  const pl=drag*(1-drop)*14,bl=t>=.08&&t<.12
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,158+pl*.6,11,5,0,0,T),c.fill()
  for(const d of[-1,1]){const x=128+d*26,y=128
    c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(x,y+pl*.5,13,10+pl*.5,0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';if(!bl)c.beginPath(),c.arc(x,y+3+pl*.6,5,0,T),c.fill()
    c.fillStyle=Y;c.beginPath();c.rect(x-15,y-14,30,12+(bl?14:0));c.fill()
    c.lineWidth=5.5;c.beginPath();c.moveTo(x-15,y-2+(bl?12:0));c.lineTo(x+15,y-2+(bl?12:0));c.stroke()}
  c.lineWidth=5;c.beginPath();c.moveTo(112,172+pl);c.quadraticCurveTo(128,170+pl*1.5,144,172+pl);c.stroke()
  // the hand: up from the side, smack onto the face, drag down, drop
  const hx=206-76*raise+76*drop,hy=250-120*raise+14*slap+72*drag+50*drop,ha=.45-.45*raise+.4*drop,wx=hx-sin(ha)*44,wy=hy+cos(ha)*44
  for(const[w,s]of[[30,'#111'],[16,Y]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(214,250),c.quadraticCurveTo(212,wy+10,wx,wy),c.stroke()
  c.strokeStyle='#111'
  hand(c,hx,hy,ha)
  c.restore()
  if(hit){const p=ez(t,.38,.44);for(const d of[-1,1])for(let k=0;k<3;k++){const a=(d>0?0:PI)+(k-1)*.5;for(const[w,s]of[[10,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+cos(a)*(64+10*p),116+sin(a)*(44+8*p)),c.lineTo(128+cos(a)*(84+16*p),116+sin(a)*(58+12*p)),c.stroke()}c.strokeStyle='#111'}
}

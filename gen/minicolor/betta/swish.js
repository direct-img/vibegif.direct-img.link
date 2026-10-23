// betta fish swishing: small red body trailing big pink fins whose wavy edges ripple
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#ee5a5a',A='#ff85a8',L='#ffc2d4',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),sw=.12*sin(T*t-1),fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,128+6*s);c.rotate(.04*cos(T*t));c.translate(-120,-128)
  const rim=i=>{const a=PI+1.15-2.3*i/32+sw,r=78+8*sin(i/32*T*1.5-T*t*2);return[114+r*cos(a),128+r*sin(a)]}
  fill(A,()=>{c.moveTo(118,112);for(let i=0;i<=32;i++)c.lineTo(...rim(i));c.lineTo(118,144)})
  c.strokeStyle=L;c.lineWidth=3;c.lineCap='round'
  for(const i of[7,16,25]){const[x,y]=rim(i);c.beginPath();c.moveTo(114+(x-114)*.25,128+(y-128)*.25);c.lineTo(114+(x-114)*.75,128+(y-128)*.75);c.stroke()}
  fill(A,()=>{c.moveTo(176,104);c.quadraticCurveTo(160,56,112+4*s,58+6*sin(T*t*2));c.quadraticCurveTo(124,92,130,106)})
  fill(A,()=>{c.moveTo(172,142);c.quadraticCurveTo(162,196,110+4*s,196+5*sin(T*t*2+1));c.quadraticCurveTo(122,160,128,140)})
  fill(B,()=>c.ellipse(152,124,44,26,0,0,T))
  c.save();c.translate(156,136);c.rotate(2.3+.4*sin(T*t*2));fill(A,()=>c.ellipse(10,0,12,6,0,0,T));c.restore()
  c.fillStyle=D;c.beginPath();c.arc(182,116,5,0,T);c.fill()
  c.strokeStyle=D;c.lineWidth=3;c.beginPath();c.arc(190,126,5,.4*PI,.85*PI);c.stroke()
}

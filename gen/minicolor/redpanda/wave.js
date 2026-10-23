// red panda sitting up and waving a paw, ringed tail swishing behind it, blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#ff7a5c',L='#ffc4b5',A='#b84a32',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),w=sin(T*t*2),y=1.5*s,bl=t>.7&&t<.76,tx=204+10*s
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const line=(col,lw,f)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();f();c.stroke()}
  const tail=()=>{c.moveTo(150,198);c.bezierCurveTo(208,204,226,168,tx,124)}
  line(B,30,tail)
  c.lineCap='butt';c.setLineDash([11,13]);c.lineDashOffset=-8;line(A,30,tail);c.setLineDash([]);c.lineCap='round'
  for(const d of[-1,1])fill(A,()=>c.ellipse(128+d*18,212,15,9,0,0,T))
  fill(B,()=>c.ellipse(128,166+y,44,46,0,0,T))
  fill(A,()=>c.ellipse(128,176+y,26,30,0,0,T))
  line(A,17,()=>{c.moveTo(150,150+y);c.quadraticCurveTo(158,172,142,184+y)})
  const a=-2.15+.38*w,hx=102+46*cos(a),hy=150+y+46*sin(a)
  line(A,17,()=>{c.moveTo(104,152+y);c.lineTo(hx,hy)});fill(A,()=>c.arc(hx,hy,9,0,T))
  for(const d of[-1,1]){
    c.save();c.translate(128+d*34,70+y);c.rotate(d*.35)
    fill(B,()=>{c.moveTo(-16,12);c.quadraticCurveTo(-14,-18,0,-20);c.quadraticCurveTo(14,-18,16,12);c.closePath()})
    fill(L,()=>{c.moveTo(-8,8);c.quadraticCurveTo(-6,-10,0,-11);c.quadraticCurveTo(6,-10,8,8);c.closePath()});c.restore()
  }
  fill(B,()=>c.ellipse(128,100+y,50,40,0,0,T))
  fill(L,()=>c.ellipse(128,118+y,22,15,0,0,T))
  for(const d of[-1,1])fill(L,()=>c.ellipse(128+d*20,80+y,8,5,d*.2,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(128+d*20,93+y,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*20,96+y,5.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,112+y,5,3.5,0,0,T);c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(121,120+y);c.quadraticCurveTo(124.5,124+y,128,120+y);c.quadraticCurveTo(131.5,124+y,135,120+y);c.stroke()
}

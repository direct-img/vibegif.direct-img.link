// snowman waving a twig arm and tipping its top hat while snowflakes drift past
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const flake=(c,x,y,r)=>{for(const[w,s]of[[9,'#111'],[3,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let k=0;k<3;k++){const a=k*PI/3;c.moveTo(x-cos(a)*r,y-sin(a)*r);c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.stroke()}}
const twig=(c,x0,y0,a,L)=>{
  const x1=x0+cos(a)*L,y1=y0+sin(a)*L
  for(const[w,s]of[[11,'#111'],[4,'#fff']]){
    c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1)
    for(const d of[-.6,.6])c.moveTo(x0+cos(a)*L*.7,y0+sin(a)*L*.7),c.lineTo(x0+cos(a)*L*.7+cos(a+d)*16,y0+sin(a)*L*.7+sin(a+d)*16)
    c.moveTo(x1,y1);c.lineTo(x1+cos(a-.5)*12,y1+sin(a-.5)*12);c.moveTo(x1,y1);c.lineTo(x1+cos(a+.5)*12,y1+sin(a+.5)*12);c.stroke()
  }
  c.strokeStyle='#111'
}
export default(c,t)=>{
  for(const[x,o]of[[30,0],[226,.4],[206,.75]]){const p=(t+o)%1;if(p>.08&&p<.92)flake(c,x+6*sin(p*T),p*130+18,8*sin(PI*p))}
  twig(c,100,140,PI+.45,58);twig(c,156,140,-.75+.4*sin(2*T*t),58)
  const B=[[128,204,46],[128,140,34],[128,86,26]]
  c.lineWidth=14;for(const[x,y,r]of B)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
  for(const[x,y,r]of B)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.fillStyle='#111';for(const y of[126,144,162])c.beginPath(),c.arc(128,y,4.5,0,T),c.fill()
  for(const x of[118,138])c.beginPath(),c.arc(x,78,4.5,0,T),c.fill()
  for(const k of[-2,-1,0,1,2])c.beginPath(),c.arc(128+k*7,100-Math.abs(k)*2,2.5,0,T),c.fill()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(128,84);c.lineTo(156,90);c.lineTo(128,93);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(138,86);c.lineTo(136,91);c.moveTo(146,88);c.lineTo(144,91);c.stroke()
  const sw=3*sin(T*t)
  c.lineWidth=6;c.beginPath();c.moveTo(146,110);c.quadraticCurveTo(152+sw,130,150+sw,146);c.lineTo(138+sw,146);c.quadraticCurveTo(142,128,136,110);c.fill();c.stroke()
  c.beginPath();c.roundRect(98,106,60,14,7);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(const x of[112,128,144])c.moveTo(x,108),c.lineTo(x,118);c.moveTo(140+sw,134);c.lineTo(150+sw,134);c.stroke()
  const l=max(0,sin(T*t))**2
  c.save();c.translate(150,64);c.rotate(-.35*l);c.translate(-150,-64-10*l)
  const dark=f=>{c.beginPath();f();c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()}
  dark(()=>c.roundRect(110,26,36,36,4));dark(()=>c.ellipse(128,62,32,7,0,0,T))
  c.fillStyle='#fff';c.fillRect(110,48,36,7);c.restore()
}

// lion whose mane is dandelion fluff: three seeds blow off and drift away, new ones grow back in their place
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3
const N=18,F=[1,2,3]
const seed=c=>{c.beginPath();c.moveTo(0,0);c.lineTo(24,0);for(let j=-2;j<=2;j++)c.moveTo(24,0),c.lineTo(24+10*cos(j*.42),10*sin(j*.42));c.stroke()}
export default(c,t)=>{
  const bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(128,128);c.scale(1.1,1.1);c.translate(-128,-128)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  c.lineWidth=7;c.beginPath();c.moveTo(150,204);c.quadraticCurveTo(186,210,188+6*sin(T*t),178);c.stroke();c.lineWidth=6
  shape(()=>c.ellipse(188+6*sin(T*t),172,7,11,.2,0,T))
  shape(()=>c.ellipse(128,182,34,36,0,0,T))
  for(const x of[112,144])shape(()=>c.ellipse(x,218,13,8,0,0,T))
  c.lineWidth=2.5
  for(let i=0;i<N;i++){
    const a=-PI/2+i*T/N,j=F.indexOf(i)
    if(j<0){c.save();c.translate(128+42*cos(a),100+42*sin(a));c.rotate(a);seed(c);c.restore();continue}
    const t0=.15+j*.1,q=min(1,max(0,(t-t0)/.45)),g=min(1,max(0,(t-.7-j*.07)/.15))
    if(q<1){const z=min(1,(1-q)*2.5);c.save();c.translate(128+42*cos(a)+40*q+4*sin(T*q*1.5),100+42*sin(a)-26*q);c.rotate(a+q*.8);c.scale(z,z);seed(c);c.restore()}
    if(t>=t0+.45&&g>0){c.save();c.translate(128+42*cos(a),100+42*sin(a));c.rotate(a);c.scale(g,g);seed(c);c.restore()}
  }
  c.lineWidth=6
  for(const d of[-1,1])shape(()=>c.arc(128+d*30,70,11,0,T))
  shape(()=>c.arc(128,100,40,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*15,94,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*15,96,5,0,T),c.fill()
  c.beginPath();c.moveTo(121,108);c.lineTo(135,108);c.lineTo(128,116);c.closePath();c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(128,116);c.lineTo(128,120);c.quadraticCurveTo(124,125,119,123);c.moveTo(128,120);c.quadraticCurveTo(132,125,137,123);c.stroke()
}

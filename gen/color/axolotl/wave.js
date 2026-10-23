// pink axolotl waving a little hand, its feathery gill fronds wiggling, bubbles drifting up
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const PK='#faa2c1',PD='#f06595',PL='#ffdeeb',BL='#ff8fab',BU='#a5d8ff'
export default(c,t)=>{
  const wv=sin(2*T*t),tl=.12*sin(T*t)
  const D=(wd,cl,f)=>{for(const[l,s]of[[wd,'#111'],[wd-10,cl]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  for(const[x,y0,r,o]of[[204,0,9,0],[222,0,6,.4],[196,0,5,.75]]){const p=(t+o)%1,y=70-p*60;if(p<.85){c.fillStyle=BU;c.lineWidth=4;c.beginPath();c.arc(x+3*sin(p*T*2),y,r,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x+3*sin(p*T*2)-r*.35,y-r*.35,r*.25,0,T);c.fill()}}
  c.lineWidth=7
  c.save();c.translate(150,200);c.rotate(tl)
  c.fillStyle=PK;c.beginPath();c.moveTo(0,-14);c.quadraticCurveTo(70,-30,92,6);c.quadraticCurveTo(60,20,0,16);c.closePath();c.fill();c.stroke()
  c.fillStyle=PL;c.beginPath();c.moveTo(20,-12);c.quadraticCurveTo(66,-24,84,0);c.quadraticCurveTo(60,-6,20,-4);c.closePath();c.fill()
  c.restore()
  c.fillStyle=PK;for(const[x,d]of[[96,-1],[160,1]])c.beginPath(),c.ellipse(x,226,15,10,d*.3,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(128,196,48,36,0,0,T);c.fill();c.stroke()
  c.fillStyle=PL;c.beginPath();c.ellipse(128,206,28,20,0,0,T);c.fill()
  for(const d of[-1,1])for(let k=0;k<3;k++){
    const a=d*(-.55+k*.45)+.1*sin(2*T*t+k*1.3+(d>0?1:0)),bx=128+d*58,by=104+k*18-18
    c.save();c.translate(bx,by);c.rotate(d>0?a:PI+a)
    D(14,PD,()=>{c.moveTo(0,0);c.lineTo(36,0)})
    c.fillStyle=PD;c.lineWidth=4;for(const x of[12,24])for(const s of[-1,1])c.beginPath(),c.ellipse(x,s*7,5,3,s*.6,0,T),c.fill(),c.stroke()
    c.restore();c.lineWidth=7
  }
  c.fillStyle=PK;c.beginPath();c.ellipse(128,118,70,52,0,0,T);c.fill();c.stroke()
  for(const d of[-1,1]){c.fillStyle='#111';c.beginPath();c.arc(128+d*34,110,8,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(128+d*34-2,107,3,0,T);c.fill()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,128,10,6,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(104,126);c.quadraticCurveTo(128,146,152,126);c.stroke()
  c.fillStyle=PK;c.lineWidth=7
  c.beginPath();c.ellipse(92,192,12,9,.4,0,T);c.fill();c.stroke()
  c.save();c.translate(166,182);c.rotate(-.9+.35*wv)
  D(20,PK,()=>{c.moveTo(0,0);c.lineTo(30,0)})
  c.translate(36,0);c.fillStyle=PK
  c.lineWidth=5;for(const a of[-.7,0,.7])c.beginPath(),c.ellipse(cos(a)*9,sin(a)*9,6,4,a,0,T),c.fill(),c.stroke()
  c.beginPath();c.arc(0,0,9,0,T);c.fill();c.stroke()
  c.restore()
  for(const d of[-1,1])c.lineWidth=4,c.beginPath(),c.arc(224,138+d*12,10,-.6,.6),c.stroke()
  c.lineWidth=7
}

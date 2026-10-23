// giraffe stretching its long neck up to a branch, munching leaves with its jaw working and an ear flicking
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=80
const GY='#ffc078',SP='#a9744f',MZ='#ffe8cc',BR='#8d6346',LF='#69db7c',LD='#51cf66',BL='#ffa8a8'
export default(c,t,i)=>{
  const ch=abs(sin(3*PI*t)),hx=-3*ch,fl=i==10||i==11?.7:i==9||i==12?.35:0
  const D=(wd,col,f)=>{for(const[l,s]of[[wd,'#111'],[wd-10,col]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  D(20,BR,()=>{c.moveTo(118,24);c.quadraticCurveTo(190,18,248,38)})
  c.fillStyle=LF;for(const[x,y,r]of[[150,34,.6],[176,40,.2],[236,52,-.4],[244,26,-1]])c.beginPath(),c.ellipse(x,y,14,8,r,0,T),c.fill(),c.stroke()
  for(const[x,y]of[[54,196],[104,198]])D(18,GY,()=>{c.moveTo(x,y);c.lineTo(x-2,236)})
  for(const[x,y]of[[70,198],[120,196]])D(18,GY,()=>{c.moveTo(x,y);c.lineTo(x+2,238)})
  c.fillStyle=BR;for(const x of[52,72,102,122])c.beginPath(),c.roundRect(x-10,232,20,12,4),c.fill(),c.stroke()
  D(10,GY,()=>{c.moveTo(42,170);c.quadraticCurveTo(26,184,30,206)})
  c.fillStyle=BR;c.beginPath();c.ellipse(30,210,6,10,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  for(const x of[188,200])D(10,GY,()=>{c.moveTo(x+hx,70);c.lineTo(x+hx-2,48)})
  c.fillStyle=BR;for(const x of[186,198])c.beginPath(),c.arc(x+hx,46,7,0,T),c.fill(),c.stroke()
  D(16,BR,()=>{for(let k=0;k<=8;k++){const u=k/8,o=k%2?-7:0;c.lineTo(96+u*(70+hx)+o,158-u*86+o)}})
  const sil=()=>{c.beginPath();c.ellipse(86,180,50,28,-.08,0,T);c.moveTo(102,164);c.lineTo(174+hx,80);c.lineTo(196+hx,94);c.lineTo(130,176);c.closePath();c.moveTo(220+hx,80);c.ellipse(194+hx,80,27,18,-.35,0,T)}
  sil();c.lineWidth=14;c.stroke();c.fillStyle=GY;sil();c.fill()
  c.save();sil();c.clip();c.fillStyle=SP
  for(const[x,y,r]of[[60,172,11],[86,186,12],[112,170,10],[78,160,8],[46,190,7],[122,190,8],[118,148,9],[136,128,9],[150,108,8],[132,150,6],[164,96,6]])c.beginPath(),c.ellipse(x,y,r,r*.8,.5,0,T),c.fill()
  c.restore();c.lineWidth=7
  c.save();c.translate(178+hx,70);c.rotate(-.9-fl);c.fillStyle=GY;c.beginPath();c.ellipse(-12,0,14,7,0,0,T);c.fill();c.stroke();c.fillStyle=BL;c.beginPath();c.ellipse(-12,0,7,3,0,0,T);c.fill();c.restore()
  c.save();c.translate(212+hx,74);c.rotate(-.35)
  c.fillStyle=MZ;c.beginPath();c.ellipse(4,-2,13,11,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.beginPath();c.moveTo(8,8+ch*2);c.quadraticCurveTo(0,12+ch*5,-8,8);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(8,-4,2.5,2,0,0,T);c.fill()
  c.restore()
  D(10,LD,()=>{c.moveTo(224+hx,82+ch*2);c.quadraticCurveTo(232,70,236,56)})
  c.fillStyle=LF;c.beginPath();c.ellipse(232+hx*.5,84+ch*3,10,6,.5+ch*.3,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.lineWidth=5;c.beginPath();c.arc(190+hx,76,6,1.1*PI,1.9*PI);c.stroke();c.lineWidth=7
  c.fillStyle=BL;c.beginPath();c.ellipse(196+hx,88,7,4,-.3,0,T);c.fill()
}

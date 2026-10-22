// cow chewing its cud side to side, the bell under its chin swinging and one ear flicking
const{sin,cos,PI}=Math,T=2*PI
export const delay=80
export default(c,t)=>{
  const j=5*sin(2*T*t),bs=.3*sin(2*T*t-.8),ef=t>.55&&t<.8?sin(PI*(t-.55)/.25):0
  c.beginPath();c.rect(100,150,56,52);c.fill();c.stroke()
  c.beginPath();c.roundRect(92,192,72,13,6);c.fill();c.stroke()
  c.save();c.translate(128,204);c.rotate(bs)
  c.beginPath();c.moveTo(-9,0);c.lineTo(9,0);c.lineTo(16,28);c.quadraticCurveTo(0,34,-16,28);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,35,5,0,T);c.fill();c.restore();c.fillStyle='#fff'
  for(const d of[-1,1]){
    c.beginPath();c.moveTo(128+d*22,58);c.quadraticCurveTo(128+d*46,54,128+d*46,28);c.quadraticCurveTo(128+d*34,42,128+d*14,50);c.closePath();c.fill();c.stroke()
    c.save();c.translate(128+d*46,90);c.rotate(d*(.3+(d>0?.45*ef:0)))
    c.beginPath();c.ellipse(d*26,0,28,12,0,0,T);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.ellipse(d*28,0,15,4,0,0,T);c.stroke();c.lineWidth=7;c.restore()
  }
  const head=()=>{c.beginPath();c.roundRect(78,44,100,128,[46,46,40,40])}
  head();c.fill();c.save();c.clip();c.fillStyle='#111'
  c.beginPath();c.ellipse(90,60,28,22,.5,0,T);c.fill();c.beginPath();c.ellipse(180,128,18,28,-.3,0,T);c.fill();c.restore()
  head();c.stroke();c.fillStyle='#fff'
  c.lineWidth=5;c.beginPath();c.moveTo(116,50);c.quadraticCurveTo(120,36,128,46);c.quadraticCurveTo(134,34,140,50);c.stroke();c.lineWidth=7
  c.fillStyle='#111';for(const x of[108,148])c.beginPath(),c.arc(x,100,7,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[106,146])c.beginPath(),c.arc(x,97,2.5,0,T),c.fill()
  c.beginPath();c.ellipse(128+j,148,50,30,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+j+d*18,144,5,8,-d*.25,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(114+j,164+j*.5);c.quadraticCurveTo(128+j*1.6,169,142+j,164-j*.5);c.stroke()
}

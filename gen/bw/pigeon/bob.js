// pigeon walking in place: its head jerks forward and holds while the body catches up, feet stepping in turn
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=60
export default(c,t)=>{
  const q=(2*t)%1,s=q/.25,e=q<.25?s*s*(3-2*s):1-(q-.25)/.75,hx=-6+18*e,hy=-3*sin(PI*e),by=12+1.5*cos(4*PI*t)
  for(const j of[0,1]){
    const l=max(0,sin(T*t+j*PI)),fx=100+j*24+8*l,fy=234-10*l
    for(const[w,st]of[[11,'#111'],[4,'#fff']]){
      c.lineWidth=w;c.strokeStyle=st;c.beginPath()
      c.moveTo(104+j*20,180+by);c.lineTo(fx,fy);c.moveTo(fx-8,fy);c.lineTo(fx+14,fy);c.moveTo(fx,fy);c.lineTo(fx+12,fy+5)
      c.stroke()
    }
  }
  c.strokeStyle='#111';c.lineWidth=7
  c.beginPath();c.moveTo(74,136+by);c.lineTo(20,160+by);c.lineTo(26,180+by);c.lineTo(78,164+by);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(36,156+by);c.lineTo(42,174+by);c.moveTo(48,151+by);c.lineTo(54,170+by);c.stroke()
  const hd=()=>{c.beginPath();c.arc(160+hx,84+hy+by,21,0,T)},bd=()=>{c.beginPath();c.ellipse(110,146+by,58,42,-.12,0,T)},nk=()=>{c.beginPath();c.moveTo(134,128+by);c.lineTo(150+hx*.7,98+hy+by)}
  c.lineWidth=14;bd();c.stroke();hd();c.stroke();c.lineWidth=44;nk();c.stroke()
  bd();c.fill();hd();c.fill();c.lineWidth=30;c.strokeStyle='#fff';nk();c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.beginPath();c.moveTo(80,128+by);c.quadraticCurveTo(140,118+by,150,156+by);c.quadraticCurveTo(116,182+by,62,150+by);c.stroke()
  c.fillStyle='#111';for(const x of[100,120])c.beginPath(),c.moveTo(x,134+by),c.lineTo(x+8,132+by),c.lineTo(x+20,160+by),c.lineTo(x+12,163+by),c.closePath(),c.fill()
  c.lineWidth=4;for(const r of[24,32])c.beginPath(),c.arc(130+hx*.4,104+by+hy*.5,r,-.2*PI,.25*PI),c.stroke()
  const X=160+hx,Y=84+hy+by
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(176+hx,80+hy+by);c.lineTo(197+hx,88+hy+by);c.lineTo(177+hx,93+hy+by);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.ellipse(X+18,Y-5,5,4,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(X+6,Y-4,6,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(X+7,Y-4,3,0,T);c.fill()
}

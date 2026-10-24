// empty inbox tray looking bored while a fly buzzes loop-de-loops around it, leaving a dotted trail
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=24,delay=70
const F=u=>{const a=T*u;return[128+80*cos(a)+16*cos(4*a),116+60*sin(a)+18*sin(4*a)]}
export default(c,t,i)=>{
  const fly=(u,back)=>{
    for(let j=12;j>0;j--){const v=u-j*.012;if((sin(T*v)<0)!=back)continue;const[x,y]=F(v);c.lineWidth=3;c.beginPath();c.arc(x,y,3.2,0,T);c.fill();c.stroke()}
    if((sin(T*u)<0)!=back)return
    const[x,y]=F(u),[px,py]=F(u-.004),h=atan2(y-py,x-px),f=i%2
    c.save();c.translate(x,y);c.rotate(h);c.scale(1.45,1.45)
    c.lineWidth=3.5;for(const d of[-1,1])c.save(),c.translate(-3,d*5),c.rotate(d*(f?.5:1.1)),c.beginPath(),c.ellipse(-8,0,11,6,0,0,T),c.fill(),c.stroke(),c.restore()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(-2,0,11,7.5,0,0,T);c.stroke();c.beginPath();c.arc(10,0,6.5,0,T);c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(-2,0,11,7.5,0,0,T);c.fill();c.beginPath();c.arc(10,0,6.5,0,T);c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(12,d*3.5,3,0,T),c.fill()
    c.restore();c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=7
  }
  fly(t,1)
  c.lineWidth=7
  c.fillStyle='#ddd';c.beginPath();c.moveTo(64,100);c.lineTo(192,100);c.lineTo(222,138);c.lineTo(34,138);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(34,138);c.lineTo(82,138);c.lineTo(94,162);c.lineTo(162,162);c.lineTo(174,138);c.lineTo(222,138);c.lineTo(222,208);c.quadraticCurveTo(222,224,206,224);c.lineTo(50,224);c.quadraticCurveTo(34,224,34,208);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[106,150])c.beginPath(),c.arc(x,188,7,0,PI),c.fill()
  c.lineWidth=5;for(const x of[106,150])c.beginPath(),c.moveTo(x-10,188),c.lineTo(x+10,188),c.stroke()
  c.beginPath();c.moveTo(119,206);c.lineTo(137,206);c.stroke()
  c.fillStyle='#fff';c.lineWidth=7
  fly(t,0)
}

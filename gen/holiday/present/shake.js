// wrapped present rattling and shaking, then its lid and bow pop up as golden light and sparkles burst out
export const frames=32,delay=50,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos,cl=x=>x<0?0:x>1?1:x
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/10-P/4,d=k%2?r*.45:r;c.lineTo(x+d*cs(a),y+d*sn(a))}c.closePath()}
export default(c,t)=>{
  // phases: rattle 0-.42, crouch .42-.5, lid pop .5-.8, settle .8-1
  const e=sn(Math.PI*cl(t/.42)),rot=.08*sn(P*7*t)*e,hop=-7*Math.abs(sn(P*7*t))*e
  const u=cl((t-.5)/.3),pop=u>0&&u<1,ly=pop?-38*4*u*(1-u):-6*Math.abs(sn(P*7*t+.8))*e
  const sq=1-.1*sn(Math.PI*cl((t-.42)/.1))+.07*sn(Math.PI*cl((t-.5)/.08))-.07*sn(Math.PI*cl((t-.8)/.1))
  const lr=pop?-.22*sn(Math.PI*u):rot*.6
  c.translate(128,230+hop);c.rotate(rot);c.scale(2-sq,sq)
  c.strokeStyle=O;c.lineWidth=6
  // golden beams of light fanning out of the open box
  if(pop){const g=sn(Math.PI*u);c.fillStyle='#ffe27a';c.lineWidth=5;c.beginPath()
    for(let k=-2;k<=2;k++){const a=-Math.PI/2+k*.52,l=(k%2?70:90)*(.3+.7*g),w=.16,x0=k*16;c.moveTo(x0,-96);c.lineTo(x0+l*cs(a-w),-96+l*sn(a-w));c.lineTo(x0+l*cs(a+w),-96+l*sn(a+w));c.closePath()}
    c.fill();c.stroke();c.lineWidth=6}
  // sparkles bursting out sideways and up while the lid is up
  if(pop){c.lineWidth=3;for(let k=0;k<6;k++){const a=-Math.PI/2+(k-2.5)*.5,d=30+80*u,r=16*(1-u)**.5*(k%2?.75:1);if(r<3.5)continue
    c.fillStyle=k%2?'#fff6c8':'#ffd23a';star(c,d*cs(a)*.95,-100+ly*.4+d*sn(a)*.8,r);c.fill();c.stroke()}}
  // box body
  const body=()=>{c.beginPath();c.roundRect(-68,-104,136,104,6)}
  c.fillStyle='#2f9a58';body();c.fill();c.save();body();c.clip()
  c.fillStyle='#237a45';c.fillRect(34,-110,40,120)
  c.fillStyle='#fff';for(let k=0;k<10;k++){const x=-52+(k%4)*34+(k>>2)%2*17,y=-84+(k>>2)*30;c.beginPath();c.arc(x,y,4.5,0,P);c.fill()}
  c.fillStyle='#e23b45';c.fillRect(-14,-110,28,120);c.fillStyle='#b8283a';c.fillRect(6,-110,8,120)
  c.fillStyle='rgba(0,0,0,.18)';c.fillRect(-70,-104,140,10)
  c.restore();body();c.stroke()
  // lid + bow
  c.save();c.translate(0,-100+ly);c.rotate(lr)
  const lid=()=>{c.beginPath();c.roundRect(-78,-34,156,36,6)}
  c.fillStyle='#38ad65';lid();c.fill();c.save();lid();c.clip()
  c.fillStyle='#2a8f52';c.fillRect(44,-40,40,50);c.fillStyle='#5cc47f';c.fillRect(-80,-34,160,7)
  c.fillStyle='#e23b45';c.fillRect(-14,-40,28,50);c.fillStyle='#b8283a';c.fillRect(6,-40,8,50)
  c.restore();lid();c.stroke()
  // bow loops and tails
  c.fillStyle='#e23b45';c.lineWidth=5
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(0,-36);c.quadraticCurveTo(s*14,-10,s*30,-6);c.lineTo(s*22,-22);c.lineTo(s*34,-24);c.quadraticCurveTo(s*14,-26,0,-36);c.fill();c.stroke()
    c.beginPath();c.moveTo(0,-38);c.bezierCurveTo(s*20,-84,s*64,-70,s*46,-46);c.quadraticCurveTo(s*30,-30,0,-38);c.fill();c.stroke()
    c.fillStyle='#b8283a';c.beginPath();c.moveTo(s*8,-42);c.quadraticCurveTo(s*26,-66,s*40,-52);c.quadraticCurveTo(s*26,-44,s*8,-42);c.fill();c.fillStyle='#e23b45'
  }
  c.beginPath();c.ellipse(0,-40,11,10,0,0,P);c.fill();c.stroke()
  c.fillStyle='#ff8f8f';c.beginPath();c.ellipse(-3,-43,4,3,0,0,P);c.fill()
  c.restore()
}

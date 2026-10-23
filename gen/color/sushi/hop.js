// salmon nigiri hopping on its wooden board, squishing on landing while a little wasabi buddy watches it go up and down
const{sin,PI,abs}=Math,T=2*PI
export const frames=20,delay=60
const SA='#ffa94d',SS='#fff4e6',WA='#8ce99a',BD='#d4a373',BDD='#a9744f',BL='#ffa8a8'
const salmon=c=>{c.beginPath();c.moveTo(-76,-50);c.bezierCurveTo(-72,-98,58,-106,82,-68);c.quadraticCurveTo(88,-50,72,-46);c.bezierCurveTo(32,-56,-34,-40,-66,-38);c.quadraticCurveTo(-80,-38,-76,-50);c.closePath()}
export default(c,t)=>{
  const air=t<.7,h=air?72*sin(PI*t/.7):0,q=air?0:sin(PI*(t-.7)/.3),st=air?.07*abs(sin(2*PI*t/.7)):0
  const sx=1+.16*q-st,sy=1-.2*q+st
  c.fillStyle=BD;c.beginPath();c.roundRect(16,204,224,24,10);c.fill();c.stroke()
  c.fillStyle=BDD;c.beginPath();c.ellipse(112,216,62*sx*(1-h/72*.45),5,0,0,T);c.fill()
  c.lineWidth=4;c.strokeStyle=BDD;for(const[x,w]of[[34,26],[176,18]])c.beginPath(),c.moveTo(x,220),c.lineTo(x+w,220),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle=WA;c.beginPath();c.moveTo(190,207);c.bezierCurveTo(188,184,200,178,210,170);c.quadraticCurveTo(206,162,214,154);c.quadraticCurveTo(220,166,222,174);c.bezierCurveTo(234,184,236,200,234,207);c.closePath();c.fill();c.stroke()
  const ly=-2.5*h/72
  for(const x of[205,220]){c.fillStyle='#111';c.beginPath();c.arc(x-1.5,192+ly,3.6,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-2.5,190.5+ly,1.3,0,T);c.fill()}
  c.lineWidth=3.5;c.beginPath();c.arc(212,198,4,.15*PI,.85*PI);c.stroke()
  c.lineWidth=7
  c.save();c.translate(112,210-h);c.scale(sx,sy)
  c.fillStyle='#fff';c.beginPath();c.roundRect(-62,-66,124,66,[26,26,14,14]);c.fill();c.stroke()
  c.lineWidth=3;for(const[x,y,a]of[[-46,-14,0],[46,-12,1],[-30,-6,1.5],[30,-5,2.5]])c.beginPath(),c.arc(x,y,5,a,a+1.6),c.stroke()
  c.lineWidth=7
  c.fillStyle=SA;salmon(c);c.fill()
  c.save();salmon(c);c.clip();c.strokeStyle=SS;c.lineWidth=7;for(let k=0;k<5;k++)c.beginPath(),c.moveTo(-70+k*36,-36),c.quadraticCurveTo(-58+k*36,-70,-42+k*36,-104),c.stroke();c.restore()
  salmon(c);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*20,-30,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*20-2,-32,2.2,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(0,-24,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*38,-18,8,4.5,0,0,T),c.fill()
  c.restore()
}

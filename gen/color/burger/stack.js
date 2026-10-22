// burger bouncing on the spot, top bun lagging behind like it's singing, lettuce flapping
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const BUN='#f4a259',PT='#8b5a3c',CH='#ffd43b',LT='#69db7c',TM='#fa5252',SE='#fff4e6'
export default(c,t)=>{
  const b=max(0,sin(2*T*t)),y=-14*b,sq=1-.08*(1-b),lid=-18*max(0,sin(2*T*t-.9))
  c.translate(128,226);c.scale(2-sq,sq);c.translate(-128,-226+y)
  const R=(col,x,yy,w,h,r)=>{c.fillStyle=col;c.beginPath();c.roundRect(x,yy,w,h,r);c.fill();c.stroke()}
  R(BUN,52,192,152,32,[8,8,18,18])
  R(PT,44,166,168,30,15)
  c.fillStyle=CH;c.beginPath();c.moveTo(52,160);c.lineTo(204,160);c.lineTo(196,170);c.lineTo(172,186);c.lineTo(160,170);c.lineTo(100,170);c.lineTo(86,190);c.lineTo(70,170);c.lineTo(52,170);c.closePath();c.fill();c.stroke()
  c.fillStyle=LT;c.beginPath();c.moveTo(40,152);for(let x=40;x<=216;x+=8)c.lineTo(x,152+6*sin(x/8+4*T*t)*(x%16?1:-1));c.lineTo(216,140);c.lineTo(40,140);c.closePath();c.fill();c.stroke()
  R(TM,54,130,148,16,8)
  c.translate(0,lid)
  c.fillStyle=BUN;c.beginPath();c.moveTo(46,130);c.bezierCurveTo(46,40,210,40,210,130);c.quadraticCurveTo(210,138,200,138);c.lineTo(56,138);c.quadraticCurveTo(46,138,46,130);c.fill();c.stroke()
  c.fillStyle=SE;c.lineWidth=3;for(const[x,yy,a]of[[96,74,.4],[128,64,0],[160,74,-.4],[110,92,.2],[148,92,-.2],[78,98,.6],[178,98,-.6]])c.beginPath(),c.ellipse(x,yy,6,3.5,a,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,110,5.5,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,116,9,.15*PI,.85*PI);c.stroke()
}

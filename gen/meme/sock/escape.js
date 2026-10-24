// a striped sock with googly eyes peeks out of the washing machine, hops down and tiptoes away with a little bindle (where socks go)
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=36,delay=75,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),lp=(a,b,u)=>a+(b-a)*u
const WALL='#c5f6fa',FLOOR='#99e9f2',WM='#f8f9fa',GL='#a5d8ff',SK='#fff',ST='#ff6b6b',BAS='#ffc078'
const SX=178,SY=140,R=42
const sockPath=c=>{c.beginPath();c.moveTo(-13,-74);c.lineTo(13,-74);c.lineTo(13,-22);c.quadraticCurveTo(14,-6,0,-6);c.lineTo(-30,-6);c.quadraticCurveTo(-42,-6,-42,-17);c.quadraticCurveTo(-42,-28,-30,-28);c.lineTo(-13,-28);c.closePath()}
const sock=(c,x,y,s,lean,step,lx,bindle)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.strokeStyle='#111'
  for(const[d,k]of[[-26,0],[2,1]]){const up=max(0,sin(step+k*PI))*13;c.lineWidth=4;c.beginPath();c.moveTo(d,-8);c.lineTo(d-2,-up);c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(d-5,-up,5,3,0,0,T);c.fill()}
  c.rotate(lean)
  if(bindle){c.lineWidth=4;c.beginPath();c.moveTo(10,-46);c.lineTo(26,-54);c.stroke();c.beginPath();c.moveTo(-6,-38);c.lineTo(34,-84);c.stroke();c.fillStyle='#4dabf7';c.lineWidth=4;c.beginPath();c.arc(36,-90,11,0,T);c.fill();c.stroke();c.fillStyle='#fff';for(const[a,b]of[[33,-94],[40,-87],[33,-84]])c.beginPath(),c.arc(a,b,2,0,T),c.fill()}
  c.lineWidth=6;sockPath(c);c.fillStyle=SK;c.fill();c.save();c.clip();c.fillStyle=ST;for(const y of[-62,-46,-30])c.fillRect(-50,y,70,8);c.fillStyle='#e9ecef';c.fillRect(-20,-74,40,8);c.restore();sockPath(c);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-13,-66);c.lineTo(13,-66);c.stroke()
  for(const d of[-1,1]){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(d*7,-55,7,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(d*7+lx*3,-55+1,3.5,0,T);c.fill()}
  c.restore()
}
export default(c,t,i)=>{
  const pk=io(t/.1),look=t<.18?sin(T*cl((t-.06)/.12)):-1,jp=cl((t-.2)/.1),wk=cl((t-.32)/.62)
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=WALL;c.fill();c.clip()
  c.fillStyle=FLOOR;c.fillRect(0,224,256,40);c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(0,224);c.lineTo(256,224);c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(24,36,64,50);c.fill();c.stroke();c.fillStyle='#e7f5ff';c.beginPath();c.rect(30,42,52,38);c.fill();c.lineWidth=4;c.beginPath();c.moveTo(56,36);c.lineTo(56,86);c.moveTo(24,61);c.lineTo(88,61);c.stroke()
  c.lineWidth=6;c.fillStyle=BAS;c.beginPath();c.moveTo(14,178);c.lineTo(86,178);c.lineTo(80,226);c.lineTo(20,226);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#e8590c';c.lineWidth=4;c.beginPath();for(const x of[32,50,68])c.moveTo(x,186),c.lineTo(x,218);c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(18,178);c.quadraticCurveTo(30,164,46,172);c.quadraticCurveTo(62,160,82,178);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=WM;c.beginPath();c.roundRect(118,52,124,176,10);c.fill();c.stroke()
  c.beginPath();c.moveTo(118,84);c.lineTo(242,84);c.stroke()
  c.fillStyle='#ced4da';c.lineWidth=4;c.beginPath();c.arc(222,68,8,0,T);c.fill();c.stroke();c.fillStyle='#69db7c';c.beginPath();c.roundRect(132,62,40,12,3);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle='#dee2e6';c.beginPath();c.arc(SX,SY+6,R+10,0,T);c.fill();c.stroke()
  c.fillStyle='#343a40';c.lineWidth=5;c.beginPath();c.arc(SX,SY+6,R,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.arc(SX,SY+6,R-3,0,T);c.clip()
  for(const[a,col]of[[.5,'#ffd43b'],[1.4,'#9775fa'],[2.4,'#69db7c']])c.fillStyle=col,c.lineWidth=4,c.beginPath(),c.ellipse(SX+26*cos(a+.15*sin(T*t)),SY+6+26*sin(a+.15*sin(T*t)),20,14,a,0,T),c.fill(),c.stroke()
  if(t<.22)sock(c,SX+4,SY+64-50*pk,.9,0,0,look,0)
  c.restore()
  c.fillStyle=GL;c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.ellipse(SX-R-20,SY+6,13,R+6,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(SX-R-23,SY-10,3,14,0,0,T);c.fill()
  if(t>=.22&&t<.32){const x=lp(SX+4,150,jp),y=lp(SY+10,224,jp)-60*sin(PI*jp),s=lp(.9,1.35,jp);sock(c,x,y,s,-.2*sin(PI*jp),0,-1,0)}
  if(t>=.32){const x=lp(150,-80,wk),st=wk*T*5,y=224-4*abs(sin(st));sock(c,x,y,1.35,-.1+.06*sin(st),st,wk>.35&&wk<.55?1:-1,1)}
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}

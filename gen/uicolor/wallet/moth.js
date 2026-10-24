// open wallet with nothing in it, a dusty moth flutters up out of the money pocket while the wallet sweats nervously
const{sin,cos,PI,abs,min}=Math,T=2*PI
export const frames=24,delay=80
const WB='#c08457',WF='#e0a96d',WI='#5c3d2e',ST='#ffe8cc',MW='#ffe8cc',MS='#e0a96d',MB='#ced4da',BL='#ffa8a8',DU='#e9ecef',SW='#74c0fc'
const moth=(c,x,y,s,f,r)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.strokeStyle='#111'
  for(const d of[-1,1]){c.save();c.scale(d*f,1);c.fillStyle=MW;c.lineWidth=5
    c.beginPath();c.moveTo(0,4);c.bezierCurveTo(24,4,34,22,24,32);c.bezierCurveTo(14,40,4,26,0,10);c.fill();c.stroke()
    c.beginPath();c.moveTo(0,-4);c.bezierCurveTo(18,-32,50,-30,46,-8);c.bezierCurveTo(44,8,16,10,0,4);c.fill();c.stroke()
    c.fillStyle=MS;c.beginPath();c.arc(30,-10,6,0,T);c.fill();c.beginPath();c.arc(16,20,4,0,T);c.fill();c.restore()}
  for(const d of[-1,1])for(const[w,st]of[[7,'#111'],[3,MW]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(d*3,-16),c.quadraticCurveTo(d*6,-30,d*16,-34),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle=MB;c.beginPath();c.ellipse(0,8,8,20,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(0,-13,9,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*3.5,-14,2,0,T),c.fill()
  c.restore()
}
const pos=u=>[128+30*sin(u*T*1.5)*min(1,u*3),184-240*u]
export default(c,t)=>{
  const u=t/.8
  c.fillStyle=WB;c.beginPath();c.roundRect(42,86,172,70,18);c.fill();c.stroke()
  c.setLineDash([7,6]);c.strokeStyle=ST;c.lineWidth=3;c.beginPath();c.moveTo(60,100);c.lineTo(196,100);c.stroke();c.setLineDash([])
  c.strokeStyle='#111';c.fillStyle=WI;c.lineWidth=6;c.beginPath();c.roundRect(50,116,156,28,12);c.fill();c.stroke()
  if(u<1){const[x,y]=pos(u);moth(c,x,y,1.15,.25+.75*abs(cos(5*PI*t)),.25*cos(u*T*1.5))
    for(let k=1;k<4;k++){const[dx,dy]=pos(u-k*.05),r=7-k*1.5;if(dy<120&&u-k*.05>0)c.fillStyle=DU,c.lineWidth=3,c.beginPath(),c.arc(dx+(k%2?10:-10),dy+40,r,0,T),c.fill(),c.stroke()}}
  c.lineWidth=7;c.fillStyle=WF;c.beginPath();c.roundRect(30,130,188,104,22);c.fill();c.stroke()
  c.setLineDash([8,7]);c.strokeStyle=ST;c.lineWidth=3;c.beginPath();c.roundRect(42,142,164,80,14);c.stroke();c.setLineDash([])
  c.strokeStyle='#111';c.fillStyle=WB;c.lineWidth=6;c.beginPath();c.roundRect(164,158,68,48,16);c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(210,182,7,0,T);c.fill();c.stroke()
  const bl=(t*3)%1<.06,X=104
  c.fillStyle='#111';for(const d of[-1,1])bl?(c.lineWidth=4.5,c.beginPath(),c.moveTo(X+d*24-6,180),c.lineTo(X+d*24+6,180),c.stroke()):(c.beginPath(),c.arc(X+d*24,180,6.5,0,T),c.fill())
  if(!bl){c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(X-2+d*24,178,2.2,0,T),c.fill()}
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(X+d*14,162),c.lineTo(X+d*32,167),c.stroke()
  c.beginPath();for(let x=-12;x<=12;x+=2)c.lineTo(X+x,202+2.5*sin(x/2.5));c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(X+d*44,194,8,5,0,0,T),c.fill()
  const sy=(t*2)%1*8;c.fillStyle=SW;c.lineWidth=3;c.beginPath();c.moveTo(148,150+sy);c.quadraticCurveTo(155,161+sy,148,163+sy);c.quadraticCurveTo(141,161+sy,148,150+sy);c.fill();c.stroke()
}

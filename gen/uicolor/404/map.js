// a folded paper map unfolded, a dotted trail marching from a bouncing red pin to a big wobbly "?" where the road runs out
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=80
const P1='#fff4e6',P2='#ffe8cc',WA='#a5d8ff',LA='#c3fae8',TR='#69db7c',PN='#fa5252',Q='#b197fc'
const X=[16,92,166,240],TOP=[60,46,60,46],BOT=[214,228,214,228]
const map=c=>{c.beginPath();X.forEach((x,k)=>c.lineTo(x,TOP[k]));for(let k=3;k>=0;k--)c.lineTo(X[k],BOT[k]);c.closePath()}
const pnl=(c,k)=>{c.beginPath();c.moveTo(X[k],TOP[k]);c.lineTo(X[k+1],TOP[k+1]);c.lineTo(X[k+1],BOT[k+1]);c.lineTo(X[k],BOT[k]);c.closePath()}
export default(c,t)=>{
  const ph=(t*2)%1,j=4*ph*(1-ph),py=192-30*j,sq=ph<.1?1-(.1-ph)*2:1
  c.fillStyle=P1;map(c);c.fill();c.fillStyle=P2;pnl(c,1);c.fill()
  c.save();map(c);c.clip()
  c.fillStyle=LA;c.beginPath();c.ellipse(204,214,70,40,0,0,T);c.fill();c.beginPath();c.ellipse(30,64,50,34,0,0,T);c.fill()
  c.fillStyle=WA;c.beginPath();c.ellipse(70,92,34,20,-.2,0,T);c.fill()
  c.strokeStyle=WA;c.lineWidth=10;c.beginPath();c.moveTo(96,96);c.bezierCurveTo(130,110,110,150,150,160);c.bezierCurveTo(170,166,160,200,190,236);c.stroke()
  c.fillStyle='rgba(200,110,20,.1)';pnl(c,1);c.fill()
  c.restore()
  c.lineWidth=7;c.strokeStyle='#111';map(c);c.stroke()
  c.lineWidth=4;for(const k of[1,2])c.beginPath(),c.moveTo(X[k],TOP[k]),c.lineTo(X[k],BOT[k]),c.stroke()
  for(const[x,y]of[[110,68],[126,78],[30,168]]){c.fillStyle=TR;c.lineWidth=4;c.beginPath();c.arc(x,y,9,0,T);c.fill();c.stroke()}
  c.lineWidth=8;c.setLineDash([.1,14.9]);c.lineDashOffset=-t*30;c.beginPath();c.moveTo(56,196);c.bezierCurveTo(96,206,94,150,128,150);c.bezierCurveTo(156,150,146,198,172,194);c.stroke();c.setLineDash([])
  c.save();c.translate(182,192);c.rotate(.14*sin(T*t))
  for(const[w,s]of[[30,'#111'],[17,Q]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-24,-82),c.bezierCurveTo(-24,-116,24,-116,24,-84),c.bezierCurveTo(24,-60,0,-62,0,-34),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-20,-90);c.quadraticCurveTo(-16,-102,-6,-104);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=Q;c.beginPath();c.arc(0,-6,12,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle='rgba(0,0,0,.15)';c.beginPath();c.ellipse(56,196,14*(1-j*.4),5*(1-j*.4),0,0,T);c.fill()
  c.save();c.translate(56,py);c.scale(2-sq,sq)
  c.fillStyle=PN;c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-4,-12,-20,-26,-20,-42);c.arc(0,-42,20,PI,0);c.bezierCurveTo(20,-26,4,-12,0,0);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(0,-42,8,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.restore()
}

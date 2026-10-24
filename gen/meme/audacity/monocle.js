// a posh egg gentleman gasps, his monocle pops out and swings on its chain, top hat hops off his head: THE AUDACITY!
const{sin,cos,PI,min,max,exp,atan2,hypot}=Math,T=2*PI
export const frames=26,delay=95,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)},pop=u=>(u=cl(u),u<.6?1.25*u/.6:1.25-.25*(u-.6)/.4)
const G={T:'0080 404c',H:'000c 808c 0686',E:'80000c8c 0666'," ":'',A:'0c0440848c 0787',U:'000a2c6c8a80',D:'005083895c0c00',C:'826020020a2c6c8a',I:'0040 202c 0c4c',Y:'004680 464c',"!":'0008 0c0c'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const CX=128,CY=138,EX=20,EY=-14,AX=46,AY=22,L=hypot(EX-AX,EY-AY),A0=atan2(EX-AX,EY-AY)
const egg=c=>{c.beginPath();c.moveTo(0,-72);c.bezierCurveTo(40,-72,58,-10,54,16);c.bezierCurveTo(50,46,28,58,0,58);c.bezierCurveTo(-28,58,-50,46,-54,16);c.bezierCurveTo(-58,-10,-40,-72,0,-72);c.closePath()}
export default(c,t,i)=>{
  const sh=ez(t,.2,.26)*(1-ez(t,.8,.92)),take=pop((t-.22)/.08),sq=t>.22&&t<.32?.1*sin(PI*(t-.22)/.1):0
  // monocle pendulum angle: sits on the eye at A0, drops and swings, then gets put back
  const tau=cl(t-.26),sw=t<.26?A0:A0*cos(tau*T*3.2)*exp(-4*tau),back=ez(t,.82,.94),th=sw+(A0-sw)*back
  const hop=t>.25&&t<.5?sin(PI*(t-.25)/.25):0
  c.save();c.translate(CX,CY+58);c.scale(1+sq*.6,1-sq);c.translate(0,-58)
  // bow tie
  c.fillStyle='#e03131';c.lineWidth=5;c.beginPath();c.moveTo(0,48);c.lineTo(-22,38);c.lineTo(-22,60);c.closePath();c.moveTo(0,48);c.lineTo(22,38);c.lineTo(22,60);c.closePath();c.fill();c.stroke();c.beginPath();c.arc(0,48,6,0,T);c.fill();c.stroke()
  c.fillStyle='#fff3dc';c.lineWidth=7;egg(c);c.fill();c.stroke()
  c.fillStyle='#ffc9c9';for(const d of[-1,1])c.beginPath(),c.ellipse(d*34,12,9,5,0,0,T),c.fill()
  // eyes and brows
  c.strokeStyle='#111'
  if(sh>.5){c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(d*EX,EY,11,0,T),c.fill(),c.stroke();c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*EX,EY,3.5,0,T),c.fill()
    c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*10,-42),c.quadraticCurveTo(d*20,-50,d*32,-42),c.stroke()}
  else{c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*EX,EY,4.5,5.5,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(d*EX-8,EY-3),c.lineTo(d*EX+8,EY-3),c.stroke()
    c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*10,-28),c.quadraticCurveTo(d*20,-33,d*30,-27),c.stroke()}
  // mouth under the moustache
  if(sh>.5){c.fillStyle='#862e2e';c.lineWidth=4;c.beginPath();c.ellipse(0,30,9*take,12*take,0,0,T);c.fill();c.stroke()}
  else{c.lineWidth=3.5;c.beginPath();c.moveTo(-6,28);c.quadraticCurveTo(0,30,6,28);c.stroke()}
  // handlebar moustache
  c.fillStyle='#3b2a1e';c.lineWidth=3;const tw=sh>.5?.1*((i>>2)%2):0
  for(const d of[-1,1]){c.save();c.scale(d,1);c.rotate(tw*d);c.beginPath();c.moveTo(0,10);c.bezierCurveTo(10,4,22,8,28,16);c.bezierCurveTo(34,22,42,16,40,8);c.bezierCurveTo(44,12,44,22,34,25);c.bezierCurveTo(24,28,14,18,0,22);c.closePath();c.fill();c.stroke();c.restore()}
  // monocle on its chain
  const mx=AX+L*sin(th),my=AY+L*cos(th),ms=1+.35*take*(1-back)*(t<.4?1:0)
  c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.moveTo(AX,AY);c.quadraticCurveTo((AX+mx)/2+4,(AY+my)/2+10*(1-sh),mx,my);c.stroke()
  c.lineWidth=2.5;c.strokeStyle='#fcc419';c.setLineDash([3,3]);c.stroke();c.setLineDash([])
  c.fillStyle='#fcc419';c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.arc(AX,AY,3.5,0,T);c.fill();c.stroke()
  c.save();c.translate(mx,my);c.scale(ms,ms);c.lineWidth=9;c.beginPath();c.arc(0,0,14,0,T);c.stroke();c.lineWidth=5;c.strokeStyle='#fcc419';c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.arc(0,0,8,PI*1.1,PI*1.45);c.stroke();c.restore()
  c.restore()
  // top hat hopping off and landing back
  c.save();c.translate(CX-2,CY-66-18*hop-6*sq);c.rotate(-.1+.5*hop*(t<.375?1:-1)*sin(PI*hop))
  c.fillStyle='#212529';c.lineWidth=6;c.strokeStyle='#111'
  c.beginPath();c.moveTo(-29,0);c.lineTo(-32,-50);c.quadraticCurveTo(0,-58,32,-50);c.lineTo(29,0);c.closePath();c.fill();c.stroke()
  c.fillStyle='#c92a2a';c.beginPath();c.moveTo(-29.5,-6);c.lineTo(-30.5,-18);c.quadraticCurveTo(0,-23,30.5,-18);c.lineTo(29.5,-6);c.quadraticCurveTo(0,-10,-29.5,-6);c.fill();c.stroke()
  c.fillStyle='#212529';c.beginPath();c.ellipse(0,0,46,9,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#495057';c.lineWidth=3;c.beginPath();c.moveTo(-22,-44);c.lineTo(-22,-26);c.stroke()
  c.restore()
  if(sh>.05){const s=min(1.1,pop((t-.24)/.1))*(1-ez(t,.86,.92));c.save();c.translate(128,234);c.scale(s,s);txt(c,'THE AUDACITY!',0,0,17,'#fff');c.restore()}
}

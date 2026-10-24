// judgy half-lidded blob scribbles in a little notepad, taps a period, NOTED. pops up over its head, then it flips to a fresh page
const{sin,cos,PI,max,min,floor}=Math,T=2*PI
export const frames=24,delay=80,rim=5
const Y='#ffd43b',BL='#ff8787',PD='#fff',LN='#a5d8ff',PN='#ffd43b',ER='#f783ac',INK='#364fc7'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const G={N:[[0,6,0,0,4,6,4,0]],O:[[2,0,3.4,.6,4,2,4,4,3.4,5.4,2,6,.6,5.4,0,4,0,2,.6,.6,2,0]],T:[[0,0,4,0],[2,0,2,6]],E:[[4,0,0,0,0,6,4,6],[0,3,3.2,3]],D:[[0,0,0,6,2,6,3.6,5.2,4,3,3.6,.8,2,0,0,0]],'.':[[0,6,0,6]]}
const word=(c,s,h,col)=>{
  const k=h/6,adv=s.split('').map(ch=>ch=='.'?2:6.2),W=(adv.reduce((a,b)=>a+b)-2)*k
  for(const[w,st]of[[h*.5,'#111'],[h*.25,col]]){c.lineWidth=w;c.strokeStyle=st;let x=-W/2;c.beginPath()
    s.split('').forEach((ch,j)=>{for(const p of G[ch]){c.moveTo(x+p[0]*k,p[1]*k-h/2);for(let q=2;q<p.length;q+=2)c.lineTo(x+p[q]*k,p[q+1]*k-h/2)}x+=adv[j]*k})
    c.stroke()}
  c.strokeStyle='#111'}
// scribble path for line r, u in [0,1]
const sc=(r,u)=>[-24+u*48,-14+r*14+3*sin(u*30+r)-2*cos(u*47)]
export default(c,t)=>{
  const wr=min(1,t/.48),tap=t>=.5&&t<.56,up=t>=.56&&t<.92,flip=ez(t,.88,.98),pop=ez(t,.56,.62),bump=1+.3*sin(ez(t,.56,.68)*PI)
  // body
  c.fillStyle=Y;c.beginPath();c.moveTo(34,240);c.bezierCurveTo(28,130,56,84,110,84);c.bezierCurveTo(164,84,192,130,186,240);c.closePath();c.fill();c.stroke()
  // face: half-lidded eyes, one brow up
  const lx=up?7:-2,ly=up?0:5
  for(const d of[-1,1]){const x=110+d*26,y=134
    c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(x,y,14,12,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.arc(x+lx,y+ly,5.5,0,T);c.fill()
    c.fillStyle=Y;c.beginPath();c.rect(x-16,y-14,32,12);c.fill()
    c.beginPath();c.ellipse(x,y,14,12,0,0,T);c.stroke()
    c.lineWidth=5.5;c.beginPath();c.moveTo(x-15,y-2);c.lineTo(x+15,y-2);c.stroke()
    c.lineWidth=5;c.beginPath();const by=d>0&&up?y-30-4*pop:y-22;c.moveTo(x-12,by+(d>0&&up?4:0));c.quadraticCurveTo(x,by-4,x+12,by);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(110+d*44,160,10,5,0,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(100,170);c.quadraticCurveTo(112,172,122,166);c.stroke()
  // notepad, the page flips over the spiral to the back when it's done
  const th=flip*1.5*PI,pg=(ink,back)=>{c.fillStyle=back?'#e9ecef':PD;c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.roundRect(-34,-30,68,62,5);c.fill();c.stroke();if(back)return
    c.strokeStyle=LN;c.lineWidth=2.5;c.beginPath();for(let r=0;r<3;r++)c.moveTo(-28,-8+r*14),c.lineTo(28,-8+r*14);c.stroke()
    if(ink){c.strokeStyle=INK;c.lineWidth=3;c.beginPath();for(let r=0;r<3;r++){const e=min(1,max(0,wr*3-r));if(e>0)for(let u=0;u<=e;u+=.04){const[x,y]=sc(r,u);u?c.lineTo(x,y):c.moveTo(x,y)}}c.stroke()
      if(t>=.52){c.fillStyle=INK;c.beginPath();c.arc(26,14,3.5,0,T);c.fill()}}
    c.strokeStyle='#111'}
  const fp=()=>{c.save();c.translate(0,-30);c.scale(1,cos(th));c.translate(0,30);pg(1,cos(th)<0);c.restore()}
  c.save();c.translate(168,196);c.rotate(-.12)
  if(flip>0&&th>PI)fp()
  pg(!flip,0)
  if(flip>0&&th<=PI)fp()
  c.strokeStyle='#111';c.lineWidth=4;for(let k=-2;k<=2;k++)c.beginPath(),c.arc(k*13,-30,5,PI,0),c.stroke()
  c.restore()
  // hand holding the pad
  c.fillStyle=Y;c.lineWidth=6;c.beginPath();c.ellipse(136,222,14,12,0,0,T);c.fill();c.stroke()
  // pencil hand
  let px,py
  if(t<.5){const r=min(2,floor(wr*3)),[x,y]=sc(r,wr*3-r);px=x;py=y}else[px,py]=[26,14]
  const q=[168+px*cos(-.12)-py*sin(-.12),196+px*sin(-.12)+py*cos(-.12)-(tap?0:t>=.5?8+10*ez(t,.56,.66):0)]
  c.save();c.translate(q[0],q[1]);c.rotate(.55)
  c.lineWidth=5;c.fillStyle='#ffe8cc';c.beginPath();c.moveTo(0,0);c.lineTo(-6,-14);c.lineTo(6,-14);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(0,0);c.lineTo(-2.5,-6);c.lineTo(2.5,-6);c.closePath();c.fill()
  c.fillStyle=PN;c.beginPath();c.roundRect(-6,-58,12,44,2);c.fill();c.stroke()
  c.fillStyle=ER;c.beginPath();c.roundRect(-6,-70,12,12,[4,4,0,0]);c.fill();c.stroke()
  c.fillStyle=Y;c.lineWidth=6;c.beginPath();c.ellipse(4,-30,13,12,0,0,T);c.fill();c.stroke()
  c.restore()
  // NOTED.
  if(up||t>=.92&&t<.96){const s=pop*bump*(t>=.88?1-ez(t,.88,.94):1);if(s>.05){c.save();c.translate(124,40);c.rotate(-.06);c.scale(s,s);word(c,'NOTED.',34,'#fff');c.restore()}}
}

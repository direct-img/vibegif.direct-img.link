// a little guy sits resigned in a simmering pot, a parsley sprig lands on his head as garnish and he blows it off with a sigh: WE'RE COOKED
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=28,delay=90,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)}
const G={W:'002c558ca0',E:'80000c8c 0666',"'":'0003',R:'0c006082856707 478c'," ":'',C:'826020020a2c6c8a',O:'2060828a6c2c0a0220',K:'000c 8007 358c',D:'005083895c0c00'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const WY=156
const tongue=(c,x,y,w,h,col)=>{c.fillStyle=col;c.beginPath();c.moveTo(x-w/2,y);c.quadraticCurveTo(x-w/2,y-h*.6,x,y-h);c.quadraticCurveTo(x+w/2,y-h*.6,x+w/2,y);c.closePath();c.fill();c.stroke()}
const parsley=(c,x,y,r)=>{c.save();c.translate(x,y);c.rotate(r);c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(4,10,2,18);c.stroke()
  c.fillStyle='#40c057';c.lineWidth=3.5;for(const[a,b,s]of[[-9,-4,8],[8,-5,8],[0,-12,9],[-3,2,6],[5,3,6]])c.beginPath(),c.arc(a,b,s,0,T),c.fill(),c.stroke()
  for(const[a,b,s]of[[-9,-4,8],[8,-5,8],[0,-12,9],[-3,2,6],[5,3,6]])c.beginPath(),c.arc(a,b,s-2,0,T),c.fill();c.restore()}
export default(c,t,i)=>{
  const ta=(i>>1)*2/frames,bob=0,land=t>=.42&&t<.82,fall=ez(t,.28,.42),blow=ez(t,.8,.92),pf=t>.76&&t<.86
  // burner flames
  c.lineWidth=4;c.strokeStyle='#111';for(const[k,x]of[[0,90],[1,128],[2,166]]){const h=20+5*sin(ta*T*3+k*2);tongue(c,x,250,24,h,'#4dabf7');tongue(c,x,250,12,h*.55,'#d0ebff')}
  // pot back rim and water
  c.fillStyle='#868e96';c.lineWidth=6;c.beginPath();c.ellipse(128,WY,86,16,0,0,T);c.fill();c.stroke()
  c.fillStyle='#a5d8ff';c.beginPath();c.ellipse(128,WY+2,76,11,0,0,T);c.fill()
  // the guy, in up to his chest
  c.save();c.translate(128,bob)
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(-34,WY+2);c.bezierCurveTo(-40,36,40,36,34,WY+2);c.fill();c.stroke()
  // arms resting along the rim
  for(const d of[-1,1]){for(const[w,s]of[[12,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(d*32,WY-26),c.quadraticCurveTo(d*56,WY-26,d*74,WY-10-bob),c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(d*76,WY-8-bob,7,0,T),c.fill(),c.stroke()
  // deadpan face, glances up at the garnish
  const up=land&&t<.62?1:0,hy=WY-56
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*11,hy+(up?-3:2),3.6,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(d*4,hy-4),c.lineTo(d*18,hy-4),c.stroke()
  if(pf){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.ellipse(4,hy+20,6,5,0,0,T);c.fill();c.stroke()}
  else{c.lineWidth=4;c.beginPath();c.moveTo(-8,hy+20);c.lineTo(8,hy+20);c.stroke()}
  c.fillStyle='#74c0fc';c.lineWidth=3;const sy=hy-18;c.beginPath();c.moveTo(26,sy-9);c.quadraticCurveTo(32,sy,32,sy+3);c.arc(26,sy+3,6,0,PI);c.quadraticCurveTo(20,sy,26,sy-9);c.fill();c.stroke()
  c.restore()
  // water line over him, bubbles and floating veg
  c.fillStyle='#a5d8ff';c.strokeStyle='#111';c.beginPath();c.ellipse(128,WY+6,76,8,0,0,PI);c.lineTo(52,WY+2);c.fill()
  c.lineWidth=3;c.fillStyle='#e7f5ff';for(let k=0;k<5;k++){const u=(ta*2+k/5)%1,x=60+k*34+(k%2?6:-6),s=4+5*sin(PI*u);if(abs(x-128)<38)continue;c.beginPath();c.arc(x,WY+3-2*u,s,0,T);c.fill();c.stroke()}
  c.lineWidth=3;c.fillStyle='#ff922b';c.beginPath();c.ellipse(76,WY+4+1.5*sin(ta*T*2+1),9,4,0,0,T);c.fill();c.stroke();c.fillStyle='#ffc078';c.beginPath();c.ellipse(76,WY+4+1.5*sin(ta*T*2+1),4,1.8,0,0,T);c.fill()
  c.fillStyle='#8ce99a';c.beginPath();c.ellipse(178,WY+5+1.5*sin(ta*T*2+3),8,3.5,0,0,T);c.fill();c.stroke()
  // pot front
  c.fillStyle='#ced4da';c.lineWidth=7;c.beginPath();c.moveTo(42,WY);c.ellipse(128,WY,86,16,0,PI,0,true);c.lineTo(214,WY);c.lineTo(206,226);c.quadraticCurveTo(204,238,190,238);c.lineTo(66,238);c.quadraticCurveTo(52,238,50,226);c.closePath();c.fill();c.stroke()
  c.fillStyle='#adb5bd';c.lineWidth=5;c.beginPath();c.moveTo(46,192);c.lineTo(210,192);c.lineTo(209,204);c.lineTo(47,204);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(62,180);c.lineTo(64,224);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#495057';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.roundRect(d>0?212:20,WY+12,24,12,6),c.fill(),c.stroke()
  // steam
  c.lineCap='round';for(const[k,x]of[[0,66],[1,190]]){const u=(ta*2+k*.5)%1,y=WY-52-40*u,a=1-u
    if(u>.85)continue;for(const[w,s]of[[11,'#111'],[5,'#fff']]){c.lineWidth=w*a+2;c.strokeStyle=s;c.beginPath();c.moveTo(x,y+22);c.bezierCurveTo(x-10,y+12,x+10,y+4,x,y-8);c.stroke()}}
  // parsley garnish falls, sits on his head, gets blown away
  if(t>=.28&&t<.95){let px=128+4,py=-20+(WY-100+bob+20)*fall,r=2*PI*(1-fall)*.8
    if(t>=.8){px+=90*blow;py-=120*blow+30*sin(PI*blow);r=4*blow}
    if(land&&t<.5)py+=2*sin((t-.42)*T*6)
    parsley(c,px,py,r)}
  txt(c,"WE'RE COOKED",128,22,18,'#fff')
}

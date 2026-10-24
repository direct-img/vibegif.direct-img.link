// a grumpy salt shaker with folded arms glares sideways, then furiously shakes itself, spraying salt everywhere, and huffs: SALTY
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=30,delay=80,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)}
const G={S:'82602002042666888a6c2c0a',A:'0c0440848c 0787',L:'000c8c',T:'0080 404c',Y:'004680 464c'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const BX=128,BY=204,S0=.3,S1=.62,rot=t=>t>S0&&t<S1?.42*sin((t-S0)/(S1-S0)*T*3):0,hop=t=>t>S0&&t<S1?12*abs(sin((t-S0)/(S1-S0)*PI*3)):0
const rnd=k=>{const x=sin(k*127.1+311.7)*43758.5453;return x-Math.floor(x)}
export default(c,t,i)=>{
  const r=rot(t),h=hop(t),mad=t>S0-.04&&t<S1+.2,look=t<S0?(t<.15?-1:1):t>.85?-1:0
  // salt grains thrown out of the cap: each launched at its own moment with the cap's tilt at that time
  c.lineWidth=2;c.strokeStyle='#111';c.fillStyle='#fff'
  for(let k=0;k<110;k++){const te=S0+(S1-S0)*k/110,u=t-te;if(u<0||u>.12)continue
    const rr=rot(te);if(abs(rr)<.12)continue
    const a=-PI/2+rr*3+(rnd(k)-.5)*.8,sp=260+260*rnd(k+9),cx=BX+sin(rr)*150,cy=BY-hop(te)-cos(rr)*150
    const x=cx+cos(a)*sp*u,y=cy+sin(a)*sp*u+3000*u*u,z=2.5+1.5*rnd(k+3)
    c.beginPath();c.rect(x-z,y-z,2*z,2*z);c.fill();c.stroke()}
  c.save();c.translate(BX,BY-h);c.rotate(r)
  // feet
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*24,2,13,7,0,0,T),c.fill()
  // glass body with salt inside
  const body=()=>{c.beginPath();c.moveTo(-50,-4);c.lineTo(-42,-118);c.lineTo(42,-118);c.lineTo(50,-4);c.quadraticCurveTo(50,4,40,4);c.lineTo(-40,4);c.quadraticCurveTo(-50,4,-50,-4);c.closePath()}
  c.fillStyle='#e7f5ff';body();c.fill()
  c.save();body();c.clip();c.fillStyle='#fff';c.beginPath();c.moveTo(-60,-52+r*30);c.quadraticCurveTo(0,-60,60,-52-r*30);c.lineTo(60,10);c.lineTo(-60,10);c.fill()
  c.fillStyle='#ced4da';for(let k=0;k<14;k++)c.beginPath(),c.arc(-38+76*rnd(k+40),-40+40*rnd(k+70),2,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(-30,-108);c.lineTo(-34,-64);c.stroke();c.restore()
  c.lineWidth=7;c.strokeStyle='#111';body();c.stroke()
  // cap
  c.fillStyle='#ced4da';c.lineWidth=6;c.beginPath();c.roundRect(-46,-132,92,18,6);c.fill();c.stroke()
  c.beginPath();c.moveTo(-40,-132);c.bezierCurveTo(-38,-162,38,-162,40,-132);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[-16,-142],[0,-146],[16,-142],[-8,-152],[8,-152]])c.beginPath(),c.arc(x,y,2.6,0,T),c.fill()
  c.strokeStyle='#868e96';c.lineWidth=3;for(let x=-36;x<=36;x+=12)c.beginPath(),c.moveTo(x,-129),c.lineTo(x,-117),c.stroke()
  // grumpy face
  c.strokeStyle='#111'
  for(const d of[-1,1]){const x=d*18,y=-90
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(x,y,11,10,0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+look*5,y+2,4.5,0,T);c.fill()
    c.fillStyle='#e7f5ff';c.beginPath();c.moveTo(x-13,y-12);c.lineTo(x+13,y-12);c.lineTo(x+13,y-2+d*(mad?3:1));c.lineTo(x-13,y-2-d*(mad?3:1));c.closePath();c.fill()
    c.lineWidth=4;c.beginPath();c.moveTo(x-11,y-2-d*(mad?3:1)*.85);c.lineTo(x+11,y-2+d*(mad?3:1)*.85);c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(d*6,y-12);c.lineTo(d*30,y-20-(mad?2:0));c.stroke()}
  c.lineWidth=4.5;c.beginPath();if(mad){c.moveTo(-12,-64);c.lineTo(-6,-69);c.lineTo(0,-64);c.lineTo(6,-69);c.lineTo(12,-64)}else{c.moveTo(-10,-64);c.quadraticCurveTo(0,-71,10,-64)}c.stroke()
  // folded arms, each hand tucked under the other elbow
  const arm=(d,full)=>{for(const[w,s]of[[16,'#111'],[8,'#e7f5ff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(d*44,-66);c.quadraticCurveTo(d*54,-50,d*46,-36);if(full)c.quadraticCurveTo(0,-30,-d*34,-42+d*2);c.stroke()}}
  arm(-1,1);arm(1,1);arm(-1,0)
  // anger mark on the cap while shaking
  if(mad){c.strokeStyle='#e03131';c.lineWidth=4;const s=1+.15*(i%2);c.save();c.translate(34,-150);c.scale(s,s);for(let k=0;k<4;k++){c.rotate(PI/2);c.beginPath();c.moveTo(3,-9);c.quadraticCurveTo(3,-3,9,-3);c.stroke()}c.restore()}
  c.restore()
  // huff puffs after the tantrum
  const hf=ez(t,.64,.76)*(1-ez(t,.8,.88));if(hf>0)for(const d of[-1,1]){const x=BX+d*(52+34*hf),y=70-14*hf,s=.4+.8*hf
    c.save();c.translate(x,y);c.scale(d*s,s);c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=4/s;c.beginPath();c.arc(0,0,10,PI*.5,PI*1.5);c.arc(10,-8,9,PI*1.1,PI*1.9);c.arc(22,-2,10,PI*1.4,PI*.6);c.closePath();c.fill();c.stroke();c.restore()}
  txt(c,'SALTY',BX,236,22,'#fff')
}

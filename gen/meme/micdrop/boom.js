// a hand lets go of a mic, it hits the stage with a huge BOOM, then the hand casually reaches down and picks it up to drop it all over again
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=30,delay=80,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)},pop=u=>(u=cl(u),u<.6?1.2*u/.6:1.2-.2*(u-.6)/.4)
const G={B:'0c006082846606 66888a6c0c',O:'2060828a6c2c0a0220',M:'0c0056a0ac'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const HX=92,HY=92,FY=198,SK='#f2c79a'
// mic with its grip point at the origin, head up
const mic=(c,x,y,r)=>{c.save();c.translate(x,y);c.rotate(r);c.strokeStyle='#111'
  c.fillStyle='#343a40';c.lineWidth=5;c.beginPath();c.moveTo(-8,-14);c.lineTo(8,-14);c.lineTo(5,42);c.quadraticCurveTo(0,46,-5,42);c.closePath();c.fill();c.stroke()
  c.fillStyle='#868e96';c.beginPath();c.roundRect(-11,-24,22,12,3);c.fill();c.stroke()
  c.fillStyle='#ced4da';c.beginPath();c.arc(0,-40,17,0,T);c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle='#868e96';c.lineWidth=2;for(let k=-3;k<=3;k++)c.beginPath(),c.moveTo(k*6-12,-58),c.lineTo(k*6+12,-22),c.moveTo(k*6+12,-58),c.lineTo(k*6-12,-22),c.stroke();c.restore()
  c.lineWidth=5;c.beginPath();c.arc(0,-40,17,0,T);c.stroke();c.restore()}
// arm reaches in from the left edge, fist (or open hand) centred on (x,y)
const hand=(c,x,y,open)=>{const ay=y-8-(y-HY)*.55
  for(const[w,s]of[[34,'#111'],[24,'#4c6ef5']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-40,ay),c.lineTo(x-24,y),c.stroke()
  const a=Math.atan2(y-ay,x-24+40);c.save();c.translate(x-24,y);c.rotate(a);c.fillStyle='#364fc7';c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.roundRect(-8,-17,12,34,4);c.fill();c.stroke();c.restore()
  c.fillStyle=SK;c.strokeStyle='#111'
  if(open){for(const[a,l]of[[-.5,22],[-.1,26],[.3,25],[.7,21]]){c.save();c.translate(x-4,y);c.rotate(a);for(const[w,s]of[[14,'#111'],[5,SK]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(l,0),c.stroke();c.restore()}
    c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.ellipse(x-6,y,15,16,0,0,T);c.fill();c.stroke()}
  else{c.lineWidth=5;c.beginPath();c.roundRect(x-18,y-16,34,32,12);c.fill();c.stroke();c.lineWidth=3;for(const yy of[-6,2,10])c.beginPath(),c.moveTo(x+4,y+yy),c.lineTo(x+16,y+yy),c.stroke()
    c.lineWidth=5;c.beginPath();c.ellipse(x-2,y-14,13,6,0,0,T);c.fill();c.stroke()}}
const burst=(c,x,y,s,i)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(((i>>1)%2)*.04);c.fillStyle='#ffd43b';c.lineWidth=6/s;c.strokeStyle='#111';c.beginPath()
  for(let k=0;k<28;k++){const a=k*PI/14,r=k%2?44:66+(k%4?0:8);c.lineTo(r*cos(a)*1.12,r*sin(a)*.9)}c.closePath();c.fill();c.stroke()
  txt(c,'BOOM',0,0,26,'#ff6b6b');c.restore()}
export default(c,t,i)=>{
  // grip point of the mic and where the hand is
  let mx=HX,my=HY,mr=0,hx=HX,hy=HY,open=0
  if(t<.16)mr=-.08*sin(t/.16*PI)
  else if(t<.4){const u=cl((t-.18)/.22);open=1;mx=HX+10*u;my=HY+(FY-HY)*u*u;mr=PI/2*u;if(t<.18)my=HY}
  else if(t<.76){const v=cl((t-.4)/.1);open=1;mx=HX+10;my=FY-16*sin(PI*v);mr=PI/2+.25*sin(PI*v)}
  else{const d=ez(t,.76,.86),g=ez(t,.88,.99);open=t<.86;mx=HX+10-10*g;my=FY+(HY-FY)*g;mr=PI/2*(1-g);hx=HX+10*d-10*g;hy=HY+(FY-HY)*d+(HY-FY)*g}
  // stage
  c.fillStyle='#c08a5b';c.lineWidth=6;c.beginPath();c.roundRect(12,214,232,26,8);c.fill();c.stroke()
  c.strokeStyle='#8c5a33';c.lineWidth=3;for(const x of[70,140,200])c.beginPath(),c.moveTo(x,218),c.lineTo(x,236),c.stroke()
  const hit=t>=.4&&t<.76,hk=cl((t-.4)/.36)
  if(hit){const s=pop(hk*4)*(1-ez(t,.7,.76));burst(c,176,126,s*.88,i)
    c.strokeStyle='#111';c.lineWidth=5;const e=6+10*min(1,hk*3);for(const[a,b]of[[-2.6,1],[-2.2,1],[-.9,1],[-.5,1]]){const cx=HX+40,cy=212;c.beginPath();c.moveTo(cx+cos(a)*(40+e),cy+sin(a)*(22+e));c.lineTo(cx+cos(a)*(56+e),cy+sin(a)*(30+e));c.stroke()}}
  mic(c,mx,my,mr)
  hand(c,hx,hy,open)
}

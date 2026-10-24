// a literal mood swing: a blob on a playground swing is a beaming sunny yellow on the way forward and a sobbing blue on the way back
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
// frames are spaced by swing speed: dense through the fast bottom of the arc, sparse (and held longer) at the slow ends
const N=20,D=2300,PH=(()=>{const M=2000,cum=[0];for(let j=1;j<=M;j++)cum.push(cum[j-1]+abs(cos(T*(j-.5)/M))+.4);return[...Array(N+1)].map((_,k)=>{const g=k/N*cum[M];let j=0;while(j<M&&cum[j+1]<g)j++;return(j+(g-cum[j])/(cum[j+1]-cum[j]))/M})})()
export const frames=N,delay=PH.slice(0,N).map((p,k)=>Math.round((PH[k+1]-p)*D)),rim=4
const G={M:'0c0056a0ac',O:'2060828a6c2c0a0220',D:'005083895c0c00'," ":'',S:'82602002042666888a6c2c0a',W:'002c558ca0',I:'0040 202c 0c4c',N:'0c008c80',G:'826020020a2c6c8a8656'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const PX=128,PY=24,L=138,A=.62
export default(c,_,i)=>{
  const t=PH[i],f=A*sin(t*T),v=cos(t*T),up=f>0
  // A-frame seen from the side
  c.lineWidth=7;for(const[w,s]of[[17,'#111'],[7,'#ff922b']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(30,214),c.lineTo(PX,PY),c.lineTo(226,214),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#ced4da';c.lineWidth=5;for(const x of[30,226])c.beginPath(),c.ellipse(x,216,16,6,0,0,T),c.fill(),c.stroke()
  // swing + blob in the rope's frame, seat at the origin
  c.save();c.translate(PX+L*sin(f),PY+L*cos(f));c.rotate(-f)
  c.lineWidth=4;c.strokeStyle='#111';c.beginPath();c.moveTo(-8,-L);c.lineTo(-8,0);c.stroke();c.scale(1.3,1.3)
  // legs kick forward on the way up front, tuck on the way back
  const lg=up?-.25-.5*f/A:.9+.3*f/A
  c.lineWidth=6;for(const d of[0,6]){c.save();c.translate(8+d,-6);c.rotate(lg);c.beginPath();c.moveTo(0,0);c.lineTo(18,8);c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(21,8,6,4.5,.3,0,T);c.fill();c.restore()}
  c.fillStyle='#a9784f';c.lineWidth=5;c.beginPath();c.roundRect(-26,-4,52,9,4);c.fill();c.stroke()
  c.fillStyle=up?'#ffe066':'#91a7ff';c.lineWidth=6;c.beginPath();c.moveTo(-30,-4);c.bezierCurveTo(-34,-44,-18,-62,0,-62);c.bezierCurveTo(22,-62,34,-44,30,-4);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-2,-62);c.quadraticCurveTo(-4,-76,8,-76);c.quadraticCurveTo(14,-70,6,-66);c.stroke()
  c.fillStyle=up?'#ffe066':'#91a7ff';c.lineWidth=4;c.beginPath();c.arc(-4,-30,6.5,0,T);c.fill();c.stroke()
  // faces, looking forward (+x)
  c.lineWidth=4.5;c.strokeStyle='#111'
  if(up){
    for(const x of[4,22])c.beginPath(),c.arc(x,-38,6,PI*1.1,PI*1.9),c.stroke()
    c.fillStyle='#ff8787';for(const x of[-6,30])c.beginPath(),c.ellipse(x,-28,5,3.5,0,0,T),c.fill()
    c.fillStyle='#862e2e';c.lineWidth=4;c.beginPath();c.moveTo(2,-26);c.lineTo(26,-26);c.quadraticCurveTo(24,-10,14,-10);c.quadraticCurveTo(4,-10,2,-26);c.fill();c.stroke()
    c.fillStyle='#ff8787';c.beginPath();c.ellipse(14,-13,6,3,0,PI,0);c.fill()
  }else{
    c.lineWidth=4;for(const x of[3,23])c.beginPath(),c.moveTo(x-6,-42),c.quadraticCurveTo(x,-34,x+6,-42),c.stroke()
    for(const[w,s]of[[8,'#111'],[4,'#74c0fc']]){c.lineWidth=w;c.strokeStyle=s;for(const x of[3,23])c.beginPath(),c.moveTo(x,-37),c.quadraticCurveTo(x-2,-26,x+1,-12),c.stroke()}
    c.strokeStyle='#111';c.fillStyle='#862e2e';c.lineWidth=4;c.beginPath();c.moveTo(7,-14);c.quadraticCurveTo(13,-28,19,-14);c.quadraticCurveTo(13,-18,7,-14);c.fill();c.stroke()
    // tears blown off behind
    c.fillStyle='#74c0fc';c.lineWidth=3;for(const[x,y,s]of[[-14,-42,1],[-30,-34,.8],[-44,-46,.6]]){const dx=x-6*abs(v),dy=y+4*sin(t*T*3+x);c.beginPath();c.ellipse(dx,dy,7*s,4.5*s,0,0,T);c.fill();c.stroke()}
  }
  c.restore()
  // pivot cap
  c.fillStyle='#ced4da';c.lineWidth=5;c.beginPath();c.arc(PX,PY,9,0,T);c.fill();c.stroke()
  txt(c,'MOOD SWINGS',128,238,18,'#fff')
}

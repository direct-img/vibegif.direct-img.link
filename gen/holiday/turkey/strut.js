// turkey strutting in place, tail feathers fanning and rattling, head bobbing with each step
export const frames=24,delay=60,rim=5
const K='#2a1810',P=Math.PI*2,PI=Math.PI,S=Math.sin,C=Math.cos,G=235
export default(c,t)=>{
  const s=S(P*t),bob=-6*Math.abs(s),sp=1+.1*S(P*2*t+.8),rk=.05*S(P*2*t-.3),hx=8*S(P*2*t-.5),hy=2.5*S(P*2*t+1),wg=7*S(P*2*t-1.6)
  c.strokeStyle=K;c.translate(5,0)
  // legs: planted, or lifted with the toes curled under
  const leg=(x,l)=>{
    const ax=x+20*l,ay=G-6-15*l
    c.lineWidth=14;c.beginPath();c.moveTo(x,180+bob);c.lineTo(x+16*l,206-12*l+bob*.5);c.lineTo(ax,ay);c.stroke()
    c.strokeStyle='#e9a23b';c.lineWidth=7;c.stroke();c.strokeStyle=K;c.lineWidth=5
    for(const[dx,dy]of[[17,5],[12,8],[-9,5]]){const r=l*1.1*Math.sign(dx);c.beginPath();c.moveTo(ax,ay);c.lineTo(ax+dx*C(r)-dy*S(r),ay+dy*C(r)+dx*S(r));c.stroke()}
  }
  const rock=()=>{c.translate(124,198+bob);c.rotate(rk);c.translate(-124,-206)}
  c.save();rock()
  // tail fan: three rows of feathers, red behind, orange, gold in front
  for(const[n,len,w,fc,sc]of[[11,104,15,'#b8392a','#8a2418'],[10,84,14,'#e8842a','#bf5f17'],[9,62,13,'#f2c14e','#d39a26']])
    for(let k=0;k<n;k++){
      const a=-PI/2+(k-(n-1)/2)*(2.95/n)*sp+.035*S(P*4*t+k*1.4)
      c.save();c.translate(122,150);c.rotate(a)
      const pe=()=>{c.beginPath();c.ellipse(len*.54,0,len*.47,w,0,0,P)}
      pe();c.fillStyle=sc;c.fill();c.save();c.clip();c.beginPath();c.ellipse(len*.54,-3,len*.47,w,0,0,P);c.fillStyle=fc;c.fill()
      c.strokeStyle=sc;c.lineWidth=3;c.beginPath();c.moveTo(len*.3,0);c.lineTo(len*.9,0);c.stroke()
      c.restore();c.lineWidth=5;pe();c.stroke();c.restore()
    }
  c.restore()
  leg(104,Math.max(0,-s));leg(138,Math.max(0,s))
  c.save();rock()
  // neck under-stroke, body, neck fill
  const nk=()=>{c.beginPath();c.moveTo(150,150);c.quadraticCurveTo(160,118,174+hx,96+hy)}
  c.lineWidth=32;nk();c.stroke()
  const bd=()=>{c.beginPath();c.ellipse(124,166,54,46,0,0,P)}
  c.save();bd();c.fillStyle='#5e3720';c.fill();c.clip();c.beginPath();c.ellipse(117,160,54,46,0,0,P);c.fillStyle='#8a5530';c.fill()
  c.fillStyle='#a8703f';c.beginPath();c.ellipse(170,170,30,40,0,0,P);c.fill()
  c.restore();c.lineWidth=6;bd();c.stroke()
  c.lineWidth=20;c.strokeStyle='#8a5530';nk();c.stroke();c.strokeStyle=K
  // wing: teardrop with scalloped feather rows
  const wn=()=>{c.beginPath();c.moveTo(146,152);c.bezierCurveTo(140,134,96,132,82,160);c.bezierCurveTo(76,174,84,190,100,190);c.bezierCurveTo(128,190,150,174,146,152)}
  c.save();wn();c.fillStyle='#6e4124';c.fill();c.clip();c.translate(-3,-4);wn();c.fillStyle='#9c6136';c.fill();c.translate(3,4)
  c.strokeStyle='#5e3720';c.lineWidth=3.5;c.beginPath()
  for(const[y,x0,x1]of[[168,90,142],[180,96,136]])for(let x=x0;x<x1;x+=13){c.moveTo(x,y);c.arc(x+6.5,y,6.5,PI,0,!0)}
  c.stroke();c.restore();c.lineWidth=5;wn();c.stroke()
  // head: wattle, snood, beak, eye
  c.translate(hx,hy);c.lineWidth=5
  c.beginPath();c.moveTo(184,104);c.quadraticCurveTo(194+wg*.3,118,184+wg,130);c.quadraticCurveTo(168+wg,130,172,104);c.closePath();c.fillStyle='#d8262c';c.fill();c.stroke()
  c.beginPath();c.arc(177,90,21,0,P);c.fillStyle='#9a6038';c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.moveTo(192,84);c.lineTo(214,93);c.lineTo(192,101);c.closePath();c.fillStyle='#f5b83a';c.fill();c.lineWidth=5;c.stroke()
  c.beginPath();c.moveTo(188,80);c.quadraticCurveTo(202,76,203+wg*.4,102);c.quadraticCurveTo(194+wg*.3,104,194,88);c.closePath();c.fillStyle='#d8262c';c.fill();c.stroke()
  c.beginPath();c.arc(180,85,7,0,P);c.fillStyle='#fff';c.fill();c.lineWidth=3.5;c.stroke()
  c.beginPath();c.arc(182,85,3.6,0,P);c.fillStyle=K;c.fill()
  c.restore()
}

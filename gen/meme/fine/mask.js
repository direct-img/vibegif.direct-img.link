// a calm paper plate smiley held over a face, it slips for a second and shows the frantic scream underneath, then gets slapped back up: I'M FINE
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=28,delay=85,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)}
const G={I:'0040 202c 0c4c',"'":'0003',M:'0c0056a0ac'," ":'',F:'80000c 0666',N:'0c008c80',E:'80000c8c 0666'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const SK='#ffd8a8',HX=188,HY=112
export default(c,t,i)=>{
  const slip=ez(t,.3,.38)-ez(t,.62,.68),scr=slip>.3
  // shirt and shoulders
  c.fillStyle='#38d9a9';c.lineWidth=7;c.beginPath();c.moveTo(36,256);c.quadraticCurveTo(40,186,128,180);c.quadraticCurveTo(216,186,220,256);c.fill();c.stroke()
  c.fillStyle=SK;c.beginPath();c.moveTo(106,170);c.lineTo(106,188);c.quadraticCurveTo(128,200,150,188);c.lineTo(150,170);c.fill();c.lineWidth=6;c.beginPath();c.moveTo(106,172);c.lineTo(106,186);c.moveTo(150,172);c.lineTo(150,186);c.stroke()
  // head, the face underneath screams
  c.save()
  c.fillStyle='#5c3d2e';c.lineWidth=7;c.beginPath();c.moveTo(60,104);for(let k=0;k<=8;k++){const a=PI+k*PI/8,r=k%2?(scr?96:84):70;c.lineTo(128+r*cos(a+(k%2?0:0)),108+r*sin(a))}c.closePath();c.fill();c.stroke()
  c.fillStyle=SK;c.beginPath();c.arc(128,110,66,0,T);c.fill();c.stroke()
  c.fillStyle='#5c3d2e';c.beginPath();c.moveTo(64,100);c.quadraticCurveTo(80,44,128,44);c.quadraticCurveTo(176,44,192,100);c.quadraticCurveTo(170,74,150,80);c.lineTo(140,66);c.lineTo(124,80);c.lineTo(110,66);c.lineTo(98,82);c.quadraticCurveTo(76,78,64,100);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*26,102,15,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*26+(i%2?1.5:-1.5),102,3.5,0,T),c.fill()
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,72),c.lineTo(128+d*40,80),c.stroke()
  c.fillStyle='#862e2e';c.beginPath();c.ellipse(128,144,20,23,0,0,T);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.fillRect(100,118,56,10);c.fillStyle='#ff8787';c.beginPath();c.ellipse(128,166,14,9,0,0,T);c.fill();c.restore()
  c.lineWidth=5;c.beginPath();c.ellipse(128,144,20,23,0,0,T);c.stroke()
  c.fillStyle='#74c0fc';c.lineWidth=3.5;for(const[x,y]of[[68,84],[192,128]])c.beginPath(),c.moveTo(x,y-11),c.quadraticCurveTo(x+7,y,x+7,y+3),c.arc(x,y+3,7,0,PI),c.quadraticCurveTo(x-7,y,x,y-11),c.fill(),c.stroke()
  c.restore()
  if(scr){c.lineWidth=5;for(const[a,r]of[[-2.6,84],[-2.1,92],[-1.05,92],[-.55,84],[-3,80],[-.1,80]]){const r2=r+(i%2?16:12);c.beginPath();c.moveTo(128+r*cos(a),110+r*sin(a));c.lineTo(128+r2*cos(a),110+r2*sin(a));c.stroke()}}
  // the mask, held at its right edge, swings down when it slips
  const hy=HY+48*slip,hx=HX+10*slip
  c.save();c.translate(hx,hy);c.rotate(-1.45*slip);c.translate(-62,0)
  c.fillStyle='#f1f3f5';c.lineWidth=6;c.beginPath();c.arc(0,0,68,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(0,0,54,0,T);c.fill();c.strokeStyle='#ced4da';c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*20,-12,5,7,0,0,T),c.fill()
  c.fillStyle='#ffc9c9';for(const d of[-1,1])c.beginPath(),c.ellipse(d*33,8,8,5,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(0,4,24,.2*PI,.8*PI);c.stroke()
  c.restore()
  // arm and the gripping hand
  c.lineCap='round';for(const[w,s]of[[26,'#111'],[14,'#38d9a9']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(214,256),c.quadraticCurveTo(226,200,hx+6,hy+20),c.stroke()
  c.strokeStyle='#111';c.fillStyle=SK;c.lineWidth=5;c.beginPath();c.roundRect(hx-10,hy-14,26,32,10);c.fill();c.stroke()
  c.lineWidth=3;for(const y of[-4,4])c.beginPath(),c.moveTo(hx-10,hy+y),c.lineTo(hx,hy+y),c.stroke()
  txt(c,"I'M FINE",128,232,22,'#fff')
}

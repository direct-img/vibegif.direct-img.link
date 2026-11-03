// Cuba flag waving on a flagpole, five blue and white stripes with the red triangle and white star, and on the stripes a laughing anime girl with big dark curls, a white mariposa flower in her hair and a ruffled white blouse, with a little tocororo bird hopping on her shoulder
export const frames=16,delay=80,rim=2
const T=Math.PI*2,W=231,H=116,X=15,Y=36
const P=(c,s)=>{c.beginPath();let a=s.match(/[MLQCZ]|-?\d*\.?\d+/g),k,j=0
  while(j<a.length){if(isNaN(a[j]))k=a[j++]
    if(k=='Z'){c.closePath();continue}
    const n={M:2,L:2,Q:4,C:6}[k];c[{M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}[k]](...a.slice(j,j+=n).map(Number))
    if(k=='M')k='L'}}
const F=(c,s,f,o,w)=>{P(c,s);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const E=(c,x,y,a,b,f,o,w,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const both=(c,f)=>{f();c.save();c.scale(-1,1);f();c.restore()}
// cloud of circles: thick outline pass then fill pass so only the outer edge keeps a line
const cloud=(c,o,f,ol,w)=>{for(const p of[0,1])for(const[x,y,r]of o){c.beginPath();c.arc(x,y,r,0,T)
  if(p){c.fillStyle=f;c.fill()}else{c.strokeStyle=ol;c.lineWidth=w*2;c.stroke()}}}
const star=(c,x,y,r,a=-Math.PI/2)=>{c.beginPath();for(let k=0;k<10;k++){const q=a+k*Math.PI/5,d=k%2?r*.382:r;c.lineTo(x+Math.cos(q)*d,y+Math.sin(q)*d)}c.closePath()}
const girl=(c,t,shut)=>{
  const ol='#1a0c08',hr='#2e1b14',hl='#7a4a34',sk='#c98d68',ss='#a96e50',ln='#552818'
  const b=k=>Math.sin(T*(t*2-k*.15))*1.6,cl=[]
  for(let k=0;k<=14;k++){const a=.72*Math.PI+k*.11*Math.PI;cl.push([Math.cos(a)*62,-6+Math.sin(a)*66+b(k),17+(k*7%5)])}
  cloud(c,[...cl,[0,-10,56]],hr,ol,2.4)
  F(c,'M-12 30 L-12 66 L12 66 L12 30 Z',sk,ln,2)
  F(c,'M-12 38 Q0 58 12 38 L12 30 L-12 30 Z',ss)
  F(c,'M-80 170 C-78 94-48 68-14 62 L14 62 C48 68 78 94 80 170 Z','#fbfbff',ol,2.4)
  both(c,()=>F(c,'M-80 170 C-78 112-64 88-46 76 C-58 98-62 130-60 170 Z','#dfe3f0'))
  F(c,'M-80 170 C-78 94-48 68-14 62 L14 62 C48 68 78 94 80 170','',ol,2.4)
  const rf=[];for(let k=0;k<=10;k++){const u=k/10;rf.push([-34+68*u,66+44*u*(1-u),6])}
  cloud(c,rf,'#fff',ol,1.6)
  F(c,'M0 86 L-12 79 L-11 94 Z M0 86 L12 79 L11 94 Z','#cf142b',ol,1.8);E(c,0,86,3.6,3.6,'#b0101f',ol,1.6)
  F(c,'M-47-14 C-48 16-30 42 0 50 C30 42 48 16 47-14 C47-70-47-70-47-14 Z',sk,ln,2.2)
  c.globalAlpha=.4;both(c,()=>E(c,29,30,8,4,'#ff6f7d'));c.globalAlpha=1
  both(c,()=>{
    if(shut){F(c,'M8 15 C14 6 32 6 38 15','',ol,4);F(c,'M37 14 L42 12','',ol,2.4);return}
    P(c,'M9 9 C14-1 30-3 38 3 C39 14 34 26 23 26 C13 26 9 19 9 9 Z');c.fillStyle='#fff';c.fill()
    c.save();c.clip()
    E(c,23,11,12,15.5,'#7c4318');E(c,23,3,12,8.5,'#3a1c08');E(c,23,12,5.5,8,'#1c0a02')
    E(c,23,21,8.5,5.5,'#e0a050');E(c,23,11,12,15.5,'','#2a1004',1.6)
    E(c,17,3,5,5,'#fff');E(c,29,19,2.4,2.4,'#fff')
    c.restore()
    F(c,'M8 10 C13-2 30-5 40 1 L41 5 C30 1 16 2 10 12 Z',ol,ol,1.2);F(c,'M37 2 L42-1','',ol,2.6);F(c,'M39 6 L43 9','',ol,1.8)
    F(c,'M26 27 C31 26 35 22 37 16','',ln,1.4)})
  F(c,'M1 25 L-1 28','',ss,1.8)
  F(c,'M-11 33 Q0 35 11 33 Q8 47 0 47 Q-8 47-11 33 Z','#9a2532',ln,1.6)
  F(c,'M-10 34 Q0 36 10 34 L9 37 Q0 38-9 37 Z','#fff');E(c,0,43,5,2.4,'#ff8a96')
  const fr=[];for(let k=0;k<9;k++){const x=-44+k*11;fr.push([x,-30+(k%2?3:-1)+b(k)*.5,12])}
  cloud(c,[...fr,[-30,-48,18],[0,-56,20],[30,-48,18]],hr,ol,2.2)
  c.strokeStyle=hl;c.lineWidth=2.4
  for(const[x,y,r,a]of[[-38,-52,8,3.6],[-8,-64,8,3.4],[24,-60,8,3.8],[-60,10,8,3.3],[58,4,8,5.6],[-58,40,7,3.6],[56,38,7,5.4],[-22,-30,6,3.2],[14,-28,6,3.2]]){c.beginPath();c.arc(x,y,r,a,a+2);c.stroke()}
  both(c,()=>F(c,'M12-9 C18-13 28-14 35-10','',ln,2.2))
  c.save();c.translate(-50,-30);c.rotate(-.3)
  for(let k=0;k<4;k++){c.save();c.rotate(-1.1+k*.75);E(c,0,-9,6,10,'#fff','#8a8f8a',1.6);c.restore()}
  E(c,0,0,3.2,3.2,'#d6d36a','#8a8a3a',1.2);F(c,'M2 2 L9 12 M-1 3 L3 14','','#e8e4a0',1.6);c.restore()
}
// tocororo, cuba's red white and blue national bird
const bird=(c,t)=>{
  const h=Math.max(0,Math.sin(T*t*2))*5,fl=Math.sin(T*t*2)>.6,ol='#141018'
  c.save();c.translate(0,-h)
  F(c,'M-2-6 L-10 9 L-7 10 L-6 8 L-4 11 L-2 9 L1-5 Z','#2b6f86',ol,1.1)
  E(c,0,-9,5.2,7,'#2c8a72',ol,1.2,.25)
  F(c,'M2-14 C6-12 6-6 3-3 C1-5 1-10 2-14 Z','#fff')
  F(c,'M3-6 C5-3 3 0 0 0 C-2-1 0-4 3-6 Z','#d81c2e')
  E(c,0,-9,5.2,7,'',ol,1.2,.25)
  if(fl)F(c,'M-2-11 C-10-18-14-14-12-8 C-8-10-4-9-2-8 Z','#2c8a72',ol,1.1)
  else{F(c,'M-3-12 C-7-10-7-4-4-2 C-2-5-2-9-3-12 Z','#24705e',ol,1);E(c,-5,-7,.8,.8,'#fff');E(c,-4.5,-4.5,.8,.8,'#fff')}
  E(c,2,-16,4.4,4.2,'#4552c8',ol,1.2);F(c,'M6-17 L9.5-15.5 L6-14.5 Z','#3a3a3a',ol,.8)
  E(c,3.6,-16.6,1.3,1.3,'#111');E(c,3.9,-17,.45,.45,'#fff')
  F(c,'M-1 0 L-1 2 M1.5 0 L1.5 2','','#6a5a4a',1);c.restore()
}
export default(c,t,i)=>{
  const h=H/5,tx=H*.866
  for(let k=0;k<5;k++){c.fillStyle=k%2?'#fff':'#002a8f';c.fillRect(0,k*h,W,h+.5)}
  c.save();c.translate(167,46);c.scale(.5,.5);girl(c,t,i==9||i==10);c.restore()
  c.save();c.translate(137,84);c.scale(1.2,1.2);bird(c,t);c.restore()
  P(c,`M0 0 L${tx} ${H/2} L0 ${H} Z`);c.fillStyle='#cf142b';c.fill()
  star(c,tx/3,H/2,H*.17);c.fillStyle='#fff';c.fill()
  c.strokeStyle='#111';c.lineWidth=2.6;c.strokeRect(1.3,1.3,W-2.6,H-2.6)
  // wave: columns shifted along a travelling sine, light/dark by slope
  const s=c.getImageData(0,0,W,H).data,o=c.createImageData(256,256),d=o.data,A=10,L=W*.8,wv=x=>A*x/W*Math.sin(T*(x/L-t))+x/W*3
  for(let x=0;x<W;x++){
    const u=x/W,p=T*(x/L-t),dy=wv(x),b=-Math.round((A/W*Math.sin(p)+A*u*T/L*Math.cos(p))*40)/40*.5
    for(let y=0;y<256;y++){
      const sy=y-Y-dy,y0=Math.floor(sy),f=sy-y0;if(y0<-1||y0>=H)continue
      let r=0,g=0,v=0,a=0
      for(const[q,w]of[[y0,1-f],[y0+1,f]])if(q>=0&&q<H){const k=(q*W+x)*4,e=s[k+3]*w;r+=s[k]*e;g+=s[k+1]*e;v+=s[k+2]*e;a+=e}
      if(a<1)continue
      const k=(y*256+X+x)*4,sh=z=>b<0?z*(1+b):z+(255-z)*b
      d[k]=sh(r/a);d[k+1]=sh(g/a);d[k+2]=sh(v/a);d[k+3]=a}}
  c.clearRect(0,0,256,256);c.putImageData(o,0,0)
  c.lineWidth=1.6;c.strokeStyle='#111'
  c.fillStyle='#c9ced8';c.fillRect(8,12,7,242);c.strokeRect(8,12,7,242)
  c.fillStyle='#fff';c.fillRect(9.5,13,2,240)
  E(c,11.5,10,6,6,'#f2c14e','#111',1.6);E(c,9.5,8,2,2,'#fff7d0')
  for(const y of[Y+4,Y+H-4]){c.beginPath();c.ellipse(13.5,y,4,2.4,0,0,T);c.strokeStyle='#111';c.lineWidth=2;c.stroke()}
}

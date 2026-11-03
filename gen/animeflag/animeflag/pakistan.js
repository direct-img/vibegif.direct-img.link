// Pakistan flag waving on a flagpole, dark green field with the white crescent and star, and standing in the white hoist band a smiling chibi anime girl in a green kameez with gold trim, white shalwar and a mint dupatta fluttering in the wind, holding jasmine flowers with jasmine in her hair
export const frames=16,delay=80,rim=2
const T=Math.PI*2,W=231,H=154,X=15,Y=30
const P=(c,s)=>{c.beginPath();let a=s.match(/[MLQCZ]|-?\d*\.?\d+/g),k,j=0
  while(j<a.length){if(isNaN(a[j]))k=a[j++]
    if(k=='Z'){c.closePath();continue}
    const n={M:2,L:2,Q:4,C:6}[k];c[{M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}[k]](...a.slice(j,j+=n).map(Number))
    if(k=='M')k='L'}}
const F=(c,s,f,o,w)=>{P(c,s);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const E=(c,x,y,a,b,f,o,w,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const both=(c,f)=>{f();c.save();c.scale(-1,1);f();c.restore()}
const jas=(c,x,y,r)=>{c.save();c.translate(x,y);for(let k=0;k<5;k++){c.rotate(T/5);E(c,0,-r*.55,r*.38,r*.6,'#fff','#8a9a7a',1)}E(c,0,0,r*.22,r*.22,'#f0d860');c.restore()}
const girl=(c,t,shut)=>{
  const ol='#1a0c08',hr='#2c1a16',hl='#6a4a40',sk='#f2cba8',ss='#d9a382',ln='#6a3020',gr='#1d8a4c',gd='#e0b040',gl='#0c4a26'
  const w=k=>Math.sin(T*(t-k*.13))*7
  F(c,'M-50-30 C-64 10-62 80-54 140 C-30 150 30 150 54 140 C62 80 64 10 50-30 Z',hr,ol,2.4)
  // dupatta end flying out to the fly side
  const rb=[];for(let k=0;k<=16;k++){const q=k/16;rb.push([34+q*96,62+q*20+Math.sin(T*(q*1.1-t))*10*q,11-q*3])}
  c.beginPath();for(const[x,y,h]of rb)c.lineTo(x,y-h);for(const[x,y,h]of[...rb].reverse())c.lineTo(x,y+h);c.closePath()
  c.fillStyle='#93dbaa';c.fill();c.strokeStyle='#1f5a34';c.lineWidth=2.2;c.stroke()
  c.beginPath();for(const[x,y]of rb.slice(2,15))c.lineTo(x,y+.5);c.strokeStyle='#6cc08a';c.lineWidth=1.6;c.stroke()
  {const[x,y,h]=rb[16];F(c,`M${x} ${y-h} L${x} ${y+h}`,'',ol,5);F(c,`M${x} ${y-h} L${x} ${y+h}`,'',gd,3)}
  F(c,'M-34 206 L-38 250 L-12 250 L-6 214 L6 214 L12 250 L38 250 L34 206 Z','#f6f6f2',ol,2.2)
  F(c,'M-38 240 L-12 240 M12 240 L38 240','','#c8c8c0',2)
  both(c,()=>{F(c,'M-38 250 C-40 262-12 264-10 252 Z',gd,ol,2);E(c,-24,254,3,2,'#c0303a')})
  F(c,'M-12 30 L-12 60 L12 60 L12 30 Z',sk,ln,2)
  F(c,'M-12 38 Q0 58 12 38 L12 30 L-12 30 Z',ss)
  F(c,'M-40 72 C-40 60-30 56-14 54 L14 54 C30 56 40 60 40 72 L46 150 C52 176 58 194 62 208 L-62 208 C-58 194-52 176-46 150 Z',gr,ol,2.4)
  F(c,'M-60 200 L60 200','',gd,4);F(c,'M-14 54 Q0 70 14 54','',gd,4)
  for(let k=-2;k<=2;k++)jas(c,k*20,186,4.5)
  F(c,'M0 66 L0 130','',gl,2)
  // sleeves and hands holding jasmine
  both(c,()=>{F(c,'M-38 62 C-52 80-50 112-26 118 L-18 106 C-32 100-34 88-28 74 Z',gr,ol,2.2);E(c,-14,110,7,7,sk,ln,1.8);F(c,'M-30 114 L-20 104','',gd,3)})
  F(c,'M-8 104 C-4 90 4 88 10 80 M0 104 C2 94 10 92 14 86','','#3a7a3a',2)
  jas(c,-4,86,9);jas(c,10,80,8);jas(c,14,92,7)
  // dupatta draped over the shoulders, other end hanging in front
  F(c,'M-42 64 C-30 76 30 76 42 64 C44 56 30 52 14 54 C8 62-8 62-14 54 C-30 52-44 56-42 64 Z','#93dbaa','#1f5a34',2)
  F(c,`M-42 64 C-48 90-52 120-50 ${150+w(2)/3} L-36 ${152+w(2)/3} C-38 120-36 90-30 72 Z`,'#93dbaa','#1f5a34',2)
  F(c,`M-50 ${150+w(2)/3} L-36 ${152+w(2)/3}`,'',gd,3)
  F(c,'M-47-14 C-48 16-30 42 0 50 C30 42 48 16 47-14 C47-70-47-70-47-14 Z',sk,ln,2.2)
  c.globalAlpha=.45;both(c,()=>E(c,29,30,8,4,'#ff7080'));c.globalAlpha=1
  both(c,()=>{
    if(shut){F(c,'M8 15 C14 6 32 6 38 15','',ol,4);F(c,'M37 14 L42 12','',ol,2.4);return}
    P(c,'M9 9 C14-1 30-3 38 3 C39 14 34 26 23 26 C13 26 9 19 9 9 Z');c.fillStyle='#fff';c.fill()
    c.save();c.clip()
    E(c,23,11,12,15.5,'#4e8a3c');E(c,23,3,12,8.5,'#1f4a18');E(c,23,12,5.5,8,'#0c2208')
    E(c,23,21,8.5,5.5,'#b8e070');E(c,23,11,12,15.5,'','#123010',1.6)
    E(c,17,3,5,5,'#fff');E(c,29,19,2.4,2.4,'#fff')
    c.restore()
    F(c,'M8 10 C13-2 30-5 40 1 L41 5 C30 1 16 2 10 12 Z',ol,ol,1.2);F(c,'M37 2 L42-1','',ol,2.6);F(c,'M39 6 L43 9','',ol,1.8)
    F(c,'M26 27 C31 26 35 22 37 16','',ln,1.4)})
  F(c,'M1 25 L-1 28','',ss,1.8)
  F(c,'M-9 34 Q0 36 9 34 Q6 42 0 42 Q-6 42-9 34 Z','#a3303c',ln,1.6);E(c,0,39.5,3.6,1.6,'#ff8a96')
  both(c,()=>F(c,'M42-24 C54 0 56 30 52 60 C48 44 46 24 40 2 Z',hr,ol,2.2))
  F(c,'M-53-2 C-58-52-32-80 0-80 C32-80 58-52 53-2 L46-2 C44-16 38-26 30-32 C28-20 22-14 12-12 C14-20 12-28 6-34 C2-24-8-16-22-14 C-16-20-14-28-14-34 C-24-24-36-14-46-2 Z',hr,ol,2.4)
  c.beginPath();for(let k=0;k<=12;k++){const a=-2.4+k*.138,r=k%2?34:37;c.lineTo(Math.cos(a)*r,-18+Math.sin(a)*r)}
  for(let k=12;k>=0;k--){const a=-2.4+k*.138;c.lineTo(Math.cos(a)*42,-18+Math.sin(a)*42)}
  c.fillStyle=hl;c.fill()
  both(c,()=>F(c,'M12-9 C18-13 28-14 35-10','',ln,2.2))
  for(let k=0;k<5;k++)jas(c,48+k*1.5,-44+k*11,5.5)
}
const star=(c,x,y,r,a)=>{c.beginPath();for(let k=0;k<10;k++){const q=a+k*Math.PI/5,d=k%2?r*.382:r;c.lineTo(x+Math.cos(q)*d,y+Math.sin(q)*d)}c.closePath()}
export default(c,t,i)=>{
  const b=W/4,gw=W-b,dx=-gw/Math.hypot(gw,H),dy=H/Math.hypot(gw,H),at=(d)=>[W+dx*d*H,dy*d*H]
  c.fillStyle='#fff';c.fillRect(0,0,b,H);c.fillStyle='#01411c';c.fillRect(b,0,gw,H)
  // crescent from the official construction: circles on the green diagonal
  const[ax,ay]=[b+gw/2,H/2],[bx,by]=at(.65),[sx,sy]=at(.49)
  const r1=.3*H,r2=.275*H,dd=Math.hypot(bx-ax,by-ay),al=Math.atan2(by-ay,bx-ax),aa=(dd*dd+r1*r1-r2*r2)/(2*dd),be=Math.acos(aa/r1),ga=Math.atan2(Math.sqrt(r1*r1-aa*aa),aa-dd)
  c.beginPath();c.arc(ax,ay,r1,al+be,al-be+T);c.arc(bx,by,r2,al-ga,al+ga,true);c.fillStyle='#fff';c.fill()
  star(c,sx,sy,.1*H,Math.atan2(-dy,-dx));c.fillStyle='#fff';c.fill()
  c.save();c.translate(29,45);c.scale(.4,.4);girl(c,t,i==5||i==6);c.restore()
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

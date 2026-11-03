// Greece flag waving on a flagpole, nine blue and white stripes with the white cross canton, and on the stripes an anime girl with long wavy brown hair blowing in the sea breeze, an olive leaf wreath, blue eyes and a white dress with blue trim, blinking and smiling
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
const girl=(c,t,shut)=>{
  const ol='#1e0f08',hr='#4a2c1c',hl='#8a5a3e',sk='#fbe0cc',ss='#eeb9a0',ln='#7a3a26',bl='#0d5eaf'
  const w=k=>Math.sin(T*(t-k*.12))*5
  F(c,`M-48-36 C-66 0-70 50-64 108 L60 108 C80 102 98 100 ${112+w(3)} ${98+w(3)/2} C96 88 90 74 98 66 C110 58 122 56 ${134+w(2)} ${50+w(2)/2} C114 42 98 34 100 24 C104 14 112 10 ${120+w(1)} ${4+w(1)/2} C98-6 78-14 62-32 C40-80-30-82-48-36 Z`,hr,ol,2.4)
  F(c,`M66 4 C84 8 100 16 ${116+w(2)} ${26+w(2)/2} C98 22 84 16 66 12 Z M72 40 C88 50 98 62 ${108+w(3)} ${80+w(3)/2} C94 68 84 56 70 48 Z`,hl)
  F(c,'M-12 30 L-12 66 L12 66 L12 30 Z',sk,ln,2)
  F(c,'M-12 38 Q0 58 12 38 L12 30 L-12 30 Z',ss)
  F(c,'M-80 170 C-78 94-48 66-14 60 L14 60 C48 66 78 94 80 170 Z','#fbfcff',ol,2.4)
  F(c,'M-14 58 L-14 62 C-26 64-34 66-36 68 Q0 98 36 68 C34 66 26 64 14 62 L14 58 Z',sk)
  F(c,'M-37 68 Q0 100 37 68','',ol,10);F(c,'M-37 68 Q0 100 37 68','',bl,7)
  c.strokeStyle='#fff';c.lineWidth=1.3;c.beginPath()
  for(let k=0;k<=16;k++){const u=k/16,x=-37+74*u,y=68+60*u*(1-u)+(k%2?-1.6:1.6);c.lineTo(x,y)}c.stroke()
  both(c,()=>F(c,'M-80 170 C-78 110-64 84-46 72 C-58 96-62 130-60 170 Z','#dde3f1'))
  F(c,'M-12 100 Q-14 130-18 170 M16 98 Q18 130 22 170','','#cfd6e8',2.2)
  F(c,'M-80 170 C-78 94-48 66-14 60 L14 60 C48 66 78 94 80 170','',ol,2.4)
  F(c,'M-47-14 C-48 16-30 42 0 50 C30 42 48 16 47-14 C47-70-47-70-47-14 Z',sk,ln,2.2)
  c.globalAlpha=.45;both(c,()=>E(c,29,30,8,4,'#ff8592'));c.globalAlpha=1
  both(c,()=>{
    if(shut){F(c,'M8 14 C16 22 30 22 38 12','',ol,4);F(c,'M36 13 L41 11','',ol,2.4);return}
    P(c,'M9 9 C14-1 30-3 38 3 C39 14 34 26 23 26 C13 26 9 19 9 9 Z');c.fillStyle='#fff';c.fill()
    c.save();c.clip()
    E(c,23,11,12,15.5,'#2f72d6');E(c,23,3,12,8.5,'#123b86');E(c,23,12,5.5,8,'#0a1a40')
    E(c,23,21,8.5,5.5,'#7cc0ff');E(c,23,11,12,15.5,'','#0a2050',1.6)
    E(c,17,3,5,5,'#fff');E(c,29,19,2.4,2.4,'#fff')
    c.restore()
    F(c,'M8 10 C13-2 30-5 40 1 L41 5 C30 1 16 2 10 12 Z',ol,ol,1.2);F(c,'M37 2 L42-1','',ol,2.6);F(c,'M39 6 L43 9','',ol,1.8)
    F(c,'M26 27 C31 26 35 22 37 16','',ln,1.4)})
  F(c,'M1 25 L-1 28','',ss,1.8)
  F(c,'M-8 35 Q0 36 8 35 Q5 42 0 42 Q-5 42-8 35 Z','#a3303c',ln,1.6)
  E(c,0,40,3.4,1.6,'#ff8a96')
  F(c,'M-45-20 C-56 2-58 30-52 58 C-48 40-44 20-40 2 Z',hr,ol,2.2)
  F(c,`M45-20 C58 0 62 28 ${60+w(1)/2} 56 C54 40 50 20 41 2 Z`,hr,ol,2.2)
  F(c,'M-53-2 C-60-52-32-80 0-80 C32-80 60-52 53-2 L47 0 C46-10 42-20 36-26 C35-14 30-6 22-2 C26-12 24-22 18-28 C12-16 2-10-10-8 C-2-16 0-24-2-30 C-12-18-24-12-36-12 C-28-18-26-26-26-32 C-34-22-42-12-47 0 Z',hr,ol,2.4)
  c.beginPath();for(let k=0;k<=12;k++){const a=-2.4+k*.138,r=k%2?34:37;c.lineTo(Math.cos(a)*r,-14+Math.sin(a)*r)}
  for(let k=12;k>=0;k--){const a=-2.4+k*.138;c.lineTo(Math.cos(a)*42,-14+Math.sin(a)*42)}
  c.fillStyle=hl;c.fill()
  both(c,()=>F(c,'M12-9 C18-13 28-14 35-10','',ln,2.2))
  for(let k=0;k<7;k++)both(c,()=>{const a=Math.PI+.28+k*.19,x=Math.cos(a)*54,y=-36+Math.sin(a)*30
    E(c,x,y,7.5,3.2,'#86ad42','#3c5a18',1.4,a+Math.PI/2+(k%2?.5:-.5))})
  E(c,-30,-58,2.6,3,'#4b3466','#24183a',1);E(c,36,-55,2.6,3,'#4b3466','#24183a',1)
}
export default(c,t,i)=>{
  const h=H/9,q=5*h
  for(let k=0;k<9;k++){c.fillStyle=k%2?'#fff':'#0d5eaf';c.fillRect(0,k*h,W,h+.5)}
  c.fillStyle='#0d5eaf';c.fillRect(0,0,q,q)
  c.fillStyle='#fff';c.fillRect(0,2*h,q,h);c.fillRect(2*h,0,h,q)
  c.save();c.translate(160,62);c.scale(.55,.55);girl(c,t,i==6||i==7);c.restore()
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

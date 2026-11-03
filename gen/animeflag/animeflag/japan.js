// Japan flag waving on a flagpole, white field with the red sun disc, and inside the disc an anime girl with long black hime-cut hair, a sakura hairpin and a sailor collar who smiles and blinks while cherry blossom petals drift past
export const frames=16,delay=80,rim=2
const T=Math.PI*2,W=231,H=154,X=15,Y=30
const P=(c,s)=>{c.beginPath();let a=s.match(/[MLQCZ]|-?\d*\.?\d+/g),k,j=0
  while(j<a.length){if(isNaN(a[j]))k=a[j++]
    if(k=='Z'){c.closePath();continue}
    const n={M:2,L:2,Q:4,C:6}[k];c[{M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}[k]](...a.slice(j,j+=n).map(Number))
    if(k=='M')k='L'}}
const F=(c,s,f,o,w)=>{P(c,s);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const E=(c,x,y,a,b,f,o,w)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const both=(c,f)=>{f();c.save();c.scale(-1,1);f();c.restore()}
// girl in units: face ~96 wide, eyes on y≈10
const girl=(c,shut)=>{
  const ol='#0b0b14',hr='#1c1e2e',hl='#55608f',sk='#ffe7da',ss='#f2bba9',ln='#6e3428'
  F(c,'M-50-34 C-64 10-66 60-70 130 L70 130 C66 60 64 10 50-34 Z',hr,ol,2.4)
  F(c,'M-12 30 L-12 66 L12 66 L12 30 Z',sk,ln,2)
  F(c,'M-12 38 Q0 58 12 38 L12 30 L-12 30 Z',ss)
  F(c,'M-78 140 C-76 92-46 66-13 61 L13 61 C46 66 76 92 78 140 Z','#fafaff',ol,2.4)
  F(c,'M-13 61 L-52 71 C-40 82-22 92-5 98 L0 94 L5 98 C22 92 40 82 52 71 L13 61 L0 86 Z','#24346a',ol,2.4)
  both(c,()=>F(c,'M-46 74 C-34 84-20 90-7 94','',  '#fff',2.4))
  F(c,'M0 88 L-15 82 L-13 98 Z M0 88 L15 82 L13 98 Z','#d8324a',ol,2)
  F(c,'M-3 88 L-7 112 L0 106 L7 112 L3 88 Z','#d8324a',ol,2)
  E(c,0,89,4,4,'#c12740',ol,2)
  F(c,'M-47-14 C-48 16-30 42 0 50 C30 42 48 16 47-14 C47-70-47-70-47-14 Z',sk,ln,2.2)
  c.globalAlpha=.5;both(c,()=>E(c,29,30,8,4,'#ff8592'));c.globalAlpha=1
  both(c,()=>{
    if(shut){F(c,'M8 14 C16 22 30 22 38 12','',ol,4);F(c,'M36 13 L41 11','',ol,2.4);return}
    P(c,'M9 9 C14-1 30-3 38 3 C39 14 34 26 23 26 C13 26 9 19 9 9 Z');c.fillStyle='#fff';c.fill()
    c.save();c.clip()
    E(c,23,11,12,15.5,'#8c2a33');E(c,23,3,12,8.5,'#4a1018');E(c,23,12,5.5,8,'#250608')
    E(c,23,21,8.5,5.5,'#e0606a');E(c,23,11,12,15.5,'','#3a0a10',1.6)
    E(c,17,3,5,5,'#fff');E(c,29,19,2.4,2.4,'#fff')
    c.restore()
    F(c,'M8 10 C13-2 30-5 40 1 L41 5 C30 1 16 2 10 12 Z',ol,ol,1.2);F(c,'M37 2 L42-1','',ol,2.6);F(c,'M39 6 L43 9','',ol,1.8)
    F(c,'M26 27 C31 26 35 22 37 16','',ln,1.4)})
  F(c,'M1 25 L-1 28','',ss,1.8)
  F(c,'M-8 34 Q0 35 8 34 Q6 43 0 44 Q-6 43-8 34 Z','#a3303c',ln,1.6)
  E(c,0,41,4,2,'#ff8a96')
  both(c,()=>F(c,'M41-26 L56-22 C57 0 57 24 56 46 L40 46 C42 24 43 0 41-26 Z',hr,ol,2.4))
  F(c,'M-53-4 C-58-52-32-78 0-78 C32-78 58-52 53-4 L47-6 L45-20 L40-21 L37-16 L33-22 L24-21 L20-16 L16-22 L6-22 L2-16 L-2-22 L-12-22 L-16-16 L-20-22 L-30-21 L-34-16 L-38-22 L-45-20 L-47-6 Z',hr,ol,2.4)
  c.beginPath();for(let k=0;k<=12;k++){const a=-2.55+k*.163,r=k%2?36:39;c.lineTo(Math.cos(a)*r,-26+Math.sin(a)*r)}
  for(let k=12;k>=0;k--){const a=-2.55+k*.163;c.lineTo(Math.cos(a)*44,-26+Math.sin(a)*44)}
  c.fillStyle=hl;c.fill()
  both(c,()=>F(c,'M48 0 L50 40','',hl,2))
  both(c,()=>F(c,'M12-9 C18-13 28-14 35-10','',ln,2.2))
  c.save();c.translate(-40,-40)
  for(let k=0;k<5;k++){c.rotate(T/5);E(c,0,-5.5,3.6,5.6,'#ffb8cb','#c8506e',1.4)}
  E(c,0,0,2.2,2.2,'#f4d24a');c.restore()
}
const petal=(c,x,y,r,s)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  F(c,'M0-6 C5-6 6 2 0 6 C-6 2-5-6 0-6 Z','#ffc0d0','#d05a7c',1.2);F(c,'M0-6 L0-3','',  '#d05a7c',1);c.restore()}
export default(c,t,i)=>{
  c.fillStyle='#fff';c.fillRect(0,0,W,H)
  const R=H*.33,cx=W/2,cy=H/2
  c.save();c.beginPath();c.arc(cx,cy,R,0,T);c.fillStyle='#bc002d';c.fill();c.beginPath();c.arc(cx,cy,R-3.5,0,T);c.clip()
  c.translate(cx,cy-13);c.scale(.44,.44);girl(c,i==12||i==13);c.restore()
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
  // pole
  c.lineWidth=1.6;c.strokeStyle='#111'
  c.fillStyle='#c9ced8';c.fillRect(8,12,7,242);c.strokeRect(8,12,7,242)
  c.fillStyle='#fff';c.fillRect(9.5,13,2,240)
  E(c,11.5,10,6,6,'#f2c14e','#111',1.6);E(c,9.5,8,2,2,'#fff7d0')
  for(const y of[Y+4,Y+H-4]){c.beginPath();c.ellipse(13.5,y,4,2.4,0,0,T);c.strokeStyle='#111';c.lineWidth=2;c.stroke()}
  // sakura petals drifting across
  for(let k=0;k<6;k++){const q=(t+k/6)%1,x=q*(W-16)+8,y=k%2?H-12-k:12+k+Math.sin(T*(q+k*.3))*3
    petal(c,X+x,Y+y+wv(x),T*q*1.5+k,Math.sin(Math.PI*q)*1.25)}
}

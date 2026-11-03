// Norway flag waving on a flagpole, red field with the white-edged blue Nordic cross, and peeking up in the lower fly corner a rosy-cheeked anime girl with honey blonde braids and a white Nordic knit beanie with a pompom, waving a white mitten while snowflakes fall in the red fields
export const frames=16,delay=80,rim=2
const T=Math.PI*2,W=234,H=170,X=15,Y=22
const P=(c,s)=>{c.beginPath();let a=s.match(/[MLQCZ]|-?\d*\.?\d+/g),k,j=0
  while(j<a.length){if(isNaN(a[j]))k=a[j++]
    if(k=='Z'){c.closePath();continue}
    const n={M:2,L:2,Q:4,C:6}[k];c[{M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}[k]](...a.slice(j,j+=n).map(Number))
    if(k=='M')k='L'}}
const F=(c,s,f,o,w)=>{P(c,s);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const E=(c,x,y,a,b,f,o,w,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T);if(f){c.fillStyle=f;c.fill()}if(o){c.strokeStyle=o;c.lineWidth=w;c.stroke()}}
const both=(c,f)=>{f();c.save();c.scale(-1,1);f();c.restore()}
const mit=(c,x,y,r,s)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,1)
  F(c,'M-11 12 C-13-2-11-15 0-15 C11-15 13-2 11 12 Z M9 1 C16-5 22 3 15 9 L10 10 Z','#fbfbff','#3a3f5a',2)
  F(c,'M-9-3 L9-3','','#ba0c2f',3);E(c,0,-9,1.6,1.6,'#1b2c66')
  F(c,'M-12 10 L12 10 L13 80 L-13 80 Z','#1b2c66','#0a0f24',2);F(c,'M-12 18 L12 18','','#fff',2.4);c.restore()}
const girl=(c,t,shut)=>{
  const ol='#3a2208',hr='#e8bf6c',hl='#fde6a6',hd='#c8963e',sk='#ffe6d8',ss='#f3bca8',ln='#7a3a26',nv='#1b2c66',kn='#fbfbff'
  F(c,'M-50-30 C-64 0-64 40-60 80 L60 80 C64 40 64 0 50-30 Z',hd,ol,2.4)
  F(c,'M-12 30 L-12 66 L12 66 L12 30 Z',sk,ln,2)
  F(c,'M-12 38 Q0 58 12 38 L12 30 L-12 30 Z',ss)
  F(c,'M-47-14 C-48 16-30 42 0 50 C30 42 48 16 47-14 C47-70-47-70-47-14 Z',sk,ln,2.2)
  c.globalAlpha=.55;both(c,()=>E(c,29,30,9,4.5,'#ff6878'));c.globalAlpha=1
  both(c,()=>{
    if(shut){F(c,'M8 15 C14 6 32 6 38 15','',ol,4);F(c,'M37 14 L42 12','',ol,2.4);return}
    P(c,'M9 9 C14-1 30-3 38 3 C39 14 34 26 23 26 C13 26 9 19 9 9 Z');c.fillStyle='#fff';c.fill()
    c.save();c.clip()
    E(c,23,11,12,15.5,'#25909c');E(c,23,3,12,8.5,'#0e4a56');E(c,23,12,5.5,8,'#06262c')
    E(c,23,21,8.5,5.5,'#8fe6e0');E(c,23,11,12,15.5,'','#08343c',1.6)
    E(c,17,3,5,5,'#fff');E(c,29,19,2.4,2.4,'#fff')
    c.restore()
    F(c,'M8 10 C13-2 30-5 40 1 L41 5 C30 1 16 2 10 12 Z',ol,ol,1.2);F(c,'M37 2 L42-1','',ol,2.6);F(c,'M39 6 L43 9','',ol,1.8)
    F(c,'M26 27 C31 26 35 22 37 16','',ln,1.4)})
  F(c,'M1 25 L-1 28','',ss,1.8)
  F(c,'M-8 34 Q0 35 8 34 Q6 43 0 44 Q-6 43-8 34 Z','#a3303c',ln,1.6)
  E(c,0,41,4,2,'#ff8a96')
  both(c,()=>{for(let k=0;k<4;k++)E(c,-52+k*1.5,14+k*15,9-k*.6,9.5,hr,ol,2.2);F(c,'M-54 6 C-50 12-44 14-40 12 M-50 22 C-48 26-44 28-42 26','',hd,1.8)})
  F(c,'M-52-2 C-58-52-32-80 0-80 C32-80 58-52 52-2 L46-4 C44-14 40-22 34-26 C34-16 30-10 24-8 C26-16 24-24 20-28 C14-18 6-14-2-14 C2-20 4-26 2-30 C-6-20-16-14-26-14 C-20-20-18-26-18-30 C-28-22-38-14-46-4 Z',hr,ol,2.4)
  F(c,'M-38-22 C-34-16-30-14-26-14 M30-22 C32-16 34-12 36-10','',hl,2.6)
  both(c,()=>F(c,'M12-10 C18-15 28-16 35-12','','#9a6226',2.4))
  // knit beanie with a pompom flopped to the side
  F(c,'M-55-30 C-60-68-30-83 2-83 C34-83 62-66 55-30 Z',kn,'#3a3f5a',2)
  c.strokeStyle='#d8dbe8';c.lineWidth=2;for(let k=-3;k<=3;k++){c.beginPath();c.moveTo(k*13,-40);c.quadraticCurveTo(k*15,-62,k*9,-80);c.stroke()}
  for(let k=-4;k<=4;k++){c.save();c.translate(k*11,-56+Math.abs(k)*k*k*.03+k*k*.35);c.rotate(Math.PI/4);c.fillStyle=k%2?'#ba0c2f':nv;c.fillRect(-3,-3,6,6);c.restore()}
  F(c,'M-58-22 Q0-42 58-22 L57-38 Q0-58-57-38 Z',nv,'#0a0f24',2)
  for(let k=-5;k<=5;k++)E(c,k*10,-31-(25-k*k)*.38,1.8,1.8,'#fff')
  E(c,60,-66,11,11,kn,'#3a3f5a',2);F(c,'M54-70 L58-62 M62-74 L64-66','','#d8dbe8',1.8)
  // mittens up by her chin, the right one waves
  const l=Math.sin(Math.PI*t)**2
  mit(c,-34,38,.1,-1)
  mit(c,34+28*l,38-36*l,.15+l*Math.sin(T*t*4)*.45,1)
}
const flake=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.strokeStyle='#fff';c.lineWidth=1.3
  for(let k=0;k<6;k++){c.rotate(T/6);c.beginPath();c.moveTo(0,0);c.lineTo(0,-r);c.moveTo(-r*.3,-r*.6);c.lineTo(0,-r*.4);c.lineTo(r*.3,-r*.6);c.stroke()}c.restore()}
export default(c,t,i)=>{
  const u=W/22
  c.fillStyle='#ba0c2f';c.fillRect(0,0,W,H)
  c.fillStyle='#fff';c.fillRect(6*u,0,4*u,H);c.fillRect(0,6*u,W,4*u)
  c.fillStyle='#00205b';c.fillRect(7*u,0,2*u,H);c.fillRect(0,7*u,W,2*u)
  // snow stays inside the two red fly fields, clear of the cross
  for(let k=0;k<7;k++){const q=(t+k/7)%1,top=k<4,x0=top?120+k*28:[120,206,221][k-4],y0=top?4:10*u+4,hh=top?6*u-8:6*u-8
    const x=x0+Math.sin(T*(q+k*.37))*5,y=y0+q*hh,r=3.6*Math.sin(Math.PI*q)+.01;flake(c,x,y,r,q*2+k)}
  c.save();c.translate(162,142.5);c.scale(.4,.4);girl(c,t,i==11||i==12);c.restore()
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

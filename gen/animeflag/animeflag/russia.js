// Russia flag: white-blue-red horizontal tricolor waving on a flagpole, with a smiling anime girl printed in the middle, platinum hair in a long side braid, wearing a red-and-gold pearl kokoshnik headdress and a blue sarafan over a white blouse; she blinks and her braid sways as the flag ripples
export const frames=16,rim=3
const W=236,H=157,X=14,Y=30,T=Math.PI*2
const P=(c,s)=>{c.beginPath();for(const[,k,a]of s.matchAll(/([MLCQZ])([^MLCQZ]*)/g)){
  const n=(a.match(/-?\d*\.?\d+(e-?\d+)?/g)||[]).map(Number),z={M:2,L:2,Q:4,C:6}[k]
  if(k=='Z')c.closePath()
  for(let j=0;j<n.length;j+=z){const v=n.slice(j,j+z);k=='C'?c.bezierCurveTo(...v):k=='Q'?c.quadraticCurveTo(...v):k=='M'&&!j?c.moveTo(...v):c.lineTo(...v)}
}}
const F=(c,s,f,l,w)=>{P(c,s);if(f)c.fillStyle=f,c.fill();if(l)c.strokeStyle=l,c.lineWidth=w,c.stroke()}
const E=(c,x,y,a,b,f)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fillStyle=f;c.fill()}
const SK='#ffe4d6',SS='#f6c3b0',SL='#7a4436',HB='#f3e5bf',HS='#d8bf86',HN='#8c6a3c',GO='#f2be42',GD='#a8761a',KR='#c8102e'
const eye=(c,x,m,sh)=>{
  c.save();c.translate(x,8);c.scale(m,1)
  if(sh){F(c,'M-12 3Q0 12 13 2',0,'#3a2230',3);F(c,'M13 2L17 -1',0,'#3a2230',2)}
  else{
    P(c,'M-11 -2Q-2 -11 12 -6L11 11Q0 16 -10 11Z');c.fillStyle='#fff';c.fill();c.save();c.clip()
    E(c,0,3,9,11.5,'#1d3f8f');E(c,0,7,7.5,7.5,'#4f8fe0');E(c,0,10,5,3.6,'#8fd0ff');E(c,0,2,4,5.5,'#0e1d4a')
    F(c,'M-12 -4Q-2 -13 13 -7L13 -1Q-2 -7 -12 1Z','rgba(30,40,90,.35)')
    E(c,-3.5,-1.5,3.3,3.3,'#fff');E(c,4,8,1.7,1.7,'#fff');c.restore()
    F(c,'M-12 1Q-4 -14 11 -9.5L16.5 -6L12 -5Q-2 -9.5 -12 1Z','#3a2230')
    F(c,'M-5 13.5Q2 15.5 8 12.5',0,'#7a4a4a',1.2)
  }
  c.restore()
}
const LK=(c,q)=>{c.moveTo(q[0],q[1]);for(let j=2;j<q.length;j+=2){const[a,b,x,y]=q.slice(j-2,j+2),dn=y>b
  c.quadraticCurveTo(dn?a+(x-a)*.3:x-(x-a)*.3,dn?b+(y-b)*.68:y+(b-y)*.32,x,y)}}
const FR=[-58,-22,-50,10,-43,-13,-34,2,-25,-19,-16,-3,-8,-23,0,-5,7,-22,16,-2,25,-19,34,2,43,-13,50,10,58,-22]
const FACE='M-47 -30L-47 4C-46 24 -22 44 0 48C22 44 46 24 47 4L47 -30Q46 -42 30 -44L-30 -44Q-46 -42 -47 -30Z'
const fringe=(c,f,l)=>{c.beginPath();LK(c,FR);c.quadraticCurveTo(54,-54,0,-56);c.quadraticCurveTo(-54,-54,-58,-22);c.closePath();if(f)c.fillStyle=f,c.fill();if(l)c.beginPath(),LK(c,FR),c.strokeStyle=l,c.lineWidth=2,c.stroke()}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),bl=i==12||i==13
  // back hair
  F(c,`M-54 -40C-72 0 -70 50 -${74+sw*2} 124L${74-sw*2} 124C70 50 72 0 54 -40Z`,HS,HN,2)
  F(c,'M-58 -20C-64 -94 64 -94 58 -20Z',HB,HN,2)
  F(c,'M-60 40Q-64 80 -66 120M60 40Q64 80 66 120M-52 10Q-56 60 -58 120M52 10Q56 60 58 120',0,'#c4a970',1.5)
  // body: white blouse with puffed sleeves, blue sarafan with gold trim
  F(c,'M-12 52C-30 54 -50 58 -60 76C-66 88 -70 110 -72 130L72 130C70 110 66 88 60 76C50 58 30 54 12 52Z','#fff',SL,2)
  for(const m of[-1,1])F(c,`M${m*30} 58Q${m*58} 56 ${m*66} 84Q${m*70} 100 ${m*64} 110Q${m*50} 112 ${m*40} 100Z`,'#fff',SL,1.8),
    F(c,`M${m*50} 66Q${m*58} 84 ${m*56} 104M${m*40} 64Q${m*48} 80 ${m*46} 100`,0,'#cfd3e6',1.4)
  F(c,'M-24 60L-30 130L30 130L24 60Q12 70 0 70Q-12 70 -24 60Z','#1f4fb0','#10224d',2)
  F(c,'M-23 63L-28 130M23 63L28 130',0,GO,2.4)
  F(c,'M-13 54Q0 64 13 54',0,KR,3.4)
  for(let y=80;y<130;y+=13)E(c,0,y,3,3,GO)
  // neck + face
  F(c,'M-9 36L-9 60Q0 66 9 60L9 36Z',SK,SL,2)
  F(c,'M-9 42Q0 54 9 42L9 48Q0 58 -9 48Z',SS)
  F(c,FACE,SK,SL,2)
  c.save();P(c,FACE);c.clip();c.translate(0,5);fringe(c,SS);c.restore()
  E(c,-29,22,9,4.5,'rgba(255,105,120,.38)');E(c,29,22,9,4.5,'rgba(255,105,120,.38)')
  for(const m of[-1,1])for(let k=0;k<3;k++)F(c,`M${m*29+k*4-5} 24L${m*29+k*4-2} 19`,0,'rgba(220,70,90,.6)',1.1)
  eye(c,-21,-1,bl);eye(c,21,1,bl)
  F(c,'M1.5 19L0 21.5',0,'#d08a7a',1.4)
  F(c,'M-6 30Q0 35 6 30',0,'#9a3b3b',1.8)
  // fringe + side locks
  fringe(c,HB,HN)
  F(c,'M-32 -30Q-26 -16 -22 -6M24 -30Q22 -18 18 -8M-4 -32Q-2 -20 -3 -10M8 -30Q12 -18 12 -8',0,HS,1.4)
  for(const m of[-1,1])F(c,`M${m*47} -30Q${m*62} 4 ${m*(56+sw)} 48Q${m*49} 26 ${m*43} 4Q${m*41} -12 ${m*38} -28Z`,HB,HN,2)
  // braid over her right shoulder (viewer's left), swaying
  c.save();c.translate(-42,22);c.rotate(sw*.05)
  for(let k=0;k<7;k++){
    const m=k%2?1:-1
    c.save();c.translate(-6-k*1.8,k*14);c.rotate(m*.45)
    F(c,'M0 -10Q11 0 0 10Q-11 0 0 -10Z',HB,HN,1.8);F(c,'M0 -6Q5 0 0 6',0,HS,1.4)
    c.restore()
  }
  c.restore()
  // kokoshnik
  F(c,'M-52 -26C-56 -66 -30 -98 0 -100C30 -98 56 -66 52 -26Q0 -46 -52 -26Z',GO,GD,2)
  F(c,'M-45 -31C-48 -64 -26 -90 0 -92C26 -90 48 -64 45 -31Q0 -46 -45 -31Z',KR)
  F(c,'M-36 -37C-38 -60 -20 -80 0 -82C20 -80 38 -60 36 -37',0,GO,2)
  F(c,'M0 -78Q10 -64 0 -50Q-10 -64 0 -78Z',GO,GD,1.4)
  F(c,'M-24 -44Q-18 -60 -4 -62M24 -44Q18 -60 4 -62',0,GO,2.2)
  E(c,0,-64,4.5,6,'#2f6fe0');E(c,-1.5,-66,1.5,2,'#bfe0ff')
  for(let k=0;k<=12;k++){const a=k/12,x=-48+a*96,y=-28-Math.sin(a*Math.PI)*12;E(c,x,y,2.6,2.6,'#fff')}
  for(const m of[-1,1])for(let k=1;k<9;k++){const u=k/9,v=1-u,x=m*(v*v*v*52+3*v*v*u*56+3*v*u*u*30),y=-(v*v*v*26+3*v*v*u*66+3*v*u*u*98+u*u*u*100);E(c,x,y,2.6,2.6,'#a8761a');E(c,x,y,1.9,1.9,'#fff')}
  for(const[x,y]of[[-30,-58],[30,-58],[-14,-80],[14,-80],[-40,-40],[40,-40]])E(c,x,y,2,2,GO)
}
const dy=(x,t)=>5*(x/W)*Math.sin(T*(x/180-t))+1.5*(x/W)*Math.sin(T*(x/70-2*t))
export default(c,t,i)=>{
  const f=new c.canvas.constructor(W,H),g=f.getContext('2d')
  g.fillStyle='#fff';g.fillRect(0,0,W,H/3);g.fillStyle='#0039a6';g.fillRect(0,H/3,W,H/3);g.fillStyle='#d52b1e';g.fillRect(0,H*2/3,W,H/3)
  g.lineCap=g.lineJoin='round';g.save();g.translate(W/2,80);g.scale(.72,.72);girl(g,t,i);g.restore()
  const s=g.getImageData(0,0,W,H).data,o=c.createImageData(256,256),d=o.data
  for(let x=0;x<W;x++){
    const v=dy(x,t),L=1+.12*Math.cos(T*(x/180-t))*Math.min(1,x/30)
    for(let y=Math.max(0,Math.floor(Y+v-1));y<Math.min(256,Y+v+H+1);y++){
      const sy=y-Y-v,y0=Math.floor(sy),fr=sy-y0
      let r=0,gg=0,b=0,a=0
      for(const[yy,w]of[[y0,1-fr],[y0+1,fr]])if(yy>=0&&yy<H){const k=(yy*W+x)*4,q=s[k+3]*w;r+=s[k]*q;gg+=s[k+1]*q;b+=s[k+2]*q;a+=q}
      if(a>0){const k=(y*256+X+x)*4;d[k]=r/a*L;d[k+1]=gg/a*L;d[k+2]=b/a*L;d[k+3]=a}
    }
  }
  c.putImageData(o,0,0)
  c.beginPath();for(let x=0;x<=W;x+=2)c.lineTo(X+x,Y+dy(x,t));for(let x=W;x>=0;x-=2)c.lineTo(X+x,Y+H+dy(x,t));c.closePath()
  c.lineWidth=2;c.strokeStyle='#222';c.stroke()
  c.fillStyle='#9aa1ab';c.fillRect(9,Y-6,6,250-Y);c.fillStyle='#d7dce3';c.fillRect(10,Y-6,2,250-Y)
  c.lineWidth=1.5;c.strokeRect(9,Y-6,6,250-Y)
  c.beginPath();c.arc(12,Y-10,6,0,T);c.fillStyle=GO;c.fill();c.stroke();E(c,10,Y-12,2,2,'#fff6c8')
}

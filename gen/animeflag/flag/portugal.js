// Portugal flag: green hoist and red fly with the gold armillary sphere and the national shield (seven gold castles on a red border, five blue quinas) waving on a flagpole, with a gentle anime girl printed in the red field beside it, long dark wavy hair with a green ribbon, a blue-and-white azulejo tile shawl and a gold filigree heart pendant; she blinks and her ribbon flutters as the flag ripples
export const frames=16,rim=3
const W=236,H=157,X=14,Y=30,T=Math.PI*2
const P=(c,s)=>{c.beginPath();for(const[,k,a]of s.matchAll(/([MLCQZ])([^MLCQZ]*)/g)){
  const n=(a.match(/-?\d*\.?\d+(e-?\d+)?/g)||[]).map(Number),z={M:2,L:2,Q:4,C:6}[k]
  if(k=='Z')c.closePath()
  for(let j=0;j<n.length;j+=z){const v=n.slice(j,j+z);k=='C'?c.bezierCurveTo(...v):k=='Q'?c.quadraticCurveTo(...v):k=='M'&&!j?c.moveTo(...v):c.lineTo(...v)}
}}
const F=(c,s,f,l,w)=>{P(c,s);if(f)c.fillStyle=f,c.fill();if(l)c.strokeStyle=l,c.lineWidth=w,c.stroke()}
const E=(c,x,y,a,b,f)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fillStyle=f;c.fill()}
const SK='#fbdcc6',SS='#eab49a',SL='#6e3a2c',HB='#3a241b',HS='#241510',HL='#6a4636',HN='#140a06',GR='#046a38',RE='#da291c',GO='#ffd21a',AZ='#1f4fa8'
const eye=(c,x,m,sh)=>{
  c.save();c.translate(x,8);c.scale(m,1)
  if(sh){F(c,'M-12 3Q0 12 13 2',0,'#26140c',3);F(c,'M13 2L17 -1',0,'#26140c',2)}
  else{
    P(c,'M-11 -2Q-2 -11 12 -6L11 11Q0 16 -10 11Z');c.fillStyle='#fff';c.fill();c.save();c.clip()
    const o=-2.5*m
    E(c,o,3,9,11.5,'#3a3214');E(c,o,7,7.5,7.5,'#6f7a2c');E(c,o,10,5,3.6,'#b9c46a');E(c,o,2,4,5.5,'#16120a')
    F(c,'M-12 -4Q-2 -13 13 -7L13 -1Q-2 -7 -12 1Z','rgba(50,30,10,.35)')
    E(c,o-3.5,-1.5,3.3,3.3,'#fff');E(c,o+4,8,1.7,1.7,'#fff');c.restore()
    F(c,'M-12 1Q-4 -14 11 -9.5L16.5 -6L12 -5Q-2 -9.5 -12 1Z','#26140c')
    F(c,'M-5 13.5Q2 15.5 8 12.5',0,'#6a3a2a',1.2)
  }
  c.restore()
}
const LK=(c,q)=>{c.moveTo(q[0],q[1]);for(let j=2;j<q.length;j+=2){const[a,b,x,y]=q.slice(j-2,j+2),dn=y>b
  c.quadraticCurveTo(dn?a+(x-a)*.3:x-(x-a)*.3,dn?b+(y-b)*.68:y+(b-y)*.32,x,y)}}
// centre-parted fringe
const FR=[-58,-22,-52,14,-46,-8,-38,5,-30,-14,-21,-1,-12,-22,-5,-8,0,-34,5,-8,12,-22,21,-1,30,-14,38,5,46,-8,52,14,58,-22]
const FACE='M-47 -30L-47 4C-46 24 -22 44 0 48C22 44 46 24 47 4L47 -30Q46 -42 30 -44L-30 -44Q-46 -42 -47 -30Z'
const fringe=(c,f,l)=>{c.beginPath();LK(c,FR);c.quadraticCurveTo(54,-54,0,-56);c.quadraticCurveTo(-54,-54,-58,-22);c.closePath();if(f)c.fillStyle=f,c.fill();if(l)c.beginPath(),LK(c,FR),c.strokeStyle=l,c.lineWidth=2,c.stroke()}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),cw=Math.cos(T*t),bl=i==9||i==10
  // long wavy back hair
  F(c,`M-54 -40C-74 -10 -66 30 -72 56Q-82 76 -70 92Q-${84+sw*2} 112 -74 130L74 130Q${84-sw*2} 112 70 92Q82 76 72 56C66 30 74 -10 54 -40Z`,HS,HN,2)
  F(c,'M-58 -20C-64 -94 64 -94 58 -20Z',HB,HN,2)
  F(c,'M-62 50Q-70 70 -64 86M62 50Q70 70 64 86',0,HL,1.5)
  // white blouse + azulejo shawl
  F(c,'M-12 52C-30 54 -50 58 -60 76C-66 88 -70 110 -72 132L72 132C70 110 66 88 60 76C50 58 30 54 12 52Z','#fff',SL,2)
  const SH='M-14 54C-34 56 -54 62 -62 80L-66 100Q-34 118 0 96Q34 118 66 100L62 80C54 62 34 56 14 54Q0 66 -14 54Z'
  F(c,SH,'#f4f6ff')
  c.save();P(c,SH);c.clip()
  for(let y=48;y<124;y+=18)for(let x=-72;x<74;x+=18){
    for(const[u,v]of[[0,4.6],[4.6,0],[0,-4.6],[-4.6,0]])E(c,x+9+u,y+9+v,2.9,2.9,AZ)
    E(c,x+9,y+9,1.8,1.8,'#f2c230');E(c,x,y,5.4,5.4,AZ);E(c,x,y,2,2,'#f4f6ff')
  }
  c.restore();F(c,SH,0,'#14306a',2)
  F(c,'M-66 100Q-34 118 0 96Q34 118 66 100',0,AZ,3.4)
  // neck + filigree heart
  F(c,'M-9 36L-9 58Q0 64 9 58L9 36Z',SK,SL,2)
  F(c,'M-9 42Q0 54 9 42L9 48Q0 58 -9 48Z',SS)
  F(c,'M-10 52Q0 68 10 52',0,'#c99a1a',1.2)
  c.save();c.translate(0,68);F(c,'M0 -2C-4 -9 -12 -5 -9 1L0 10L9 1C12 -5 4 -9 0 -2Z',GO,'#8a5a00',1.6);F(c,'M0 1C-2 -3 -6 -1 -4 2L0 6L4 2C6 -1 2 -3 0 1Z',0,'#b07a00',1);E(c,0,-4,1.6,1.6,GO);c.restore()
  F(c,FACE,SK,SL,2)
  c.save();P(c,FACE);c.clip();c.translate(0,5);fringe(c,SS);c.restore()
  E(c,-29,22,9,4.5,'rgba(255,100,110,.36)');E(c,29,22,9,4.5,'rgba(255,100,110,.36)')
  for(const m of[-1,1])for(let k=0;k<3;k++)F(c,`M${m*29+k*4-5} 24L${m*29+k*4-2} 19`,0,'rgba(210,70,80,.6)',1.1)
  eye(c,-21,-1,bl);eye(c,21,1,bl)
  F(c,'M-0.5 19L-2 21.5',0,'#c07a66',1.4)
  F(c,'M-7 29Q-1 35 5 30',0,'#9a3b3b',1.8)
  // fringe + side locks
  fringe(c,HB,HN)
  F(c,'M-30 -36Q-26 -24 -22 -10M30 -36Q26 -24 22 -10M-10 -44Q-8 -30 -8 -16M10 -44Q8 -30 8 -16',0,HL,1.4)
  F(c,'M-38 -54Q-30 -62 -18 -65Q-28 -60 -34 -52ZM38 -54Q30 -62 18 -65Q28 -60 34 -52Z','#7a5444')
  for(const m of[-1,1])F(c,`M${m*47} -30Q${m*64} 0 ${m*(58+sw)} 28Q${m*66} 42 ${m*(56+sw)} 58Q${m*50} 40 ${m*46} 22Q${m*40} 0 ${m*38} -28Z`,HB,HN,2)
  // green ribbon bow on her left (viewer's right), tails fluttering
  c.save();c.translate(46,-46);c.rotate(.5);c.scale(1.25,1.25)
  F(c,`M0 0Q${10+cw*2} 16 ${6+cw*3} 30L${12+cw*3} 26Q${16+cw} 12 2 0ZM0 0Q${-4+cw} 18 ${-12+cw*3} 30L${-6+cw*3} 32Q${2+cw} 16 -2 0Z`,GR,'#02351a',1.6)
  F(c,'M0 0Q-14 -14 -20 -6Q-22 4 0 0ZM0 0Q14 -14 20 -6Q22 4 0 0Z',GR,'#02351a',1.6)
  F(c,'M-4 -4Q-12 -8 -14 -5M4 -4Q12 -8 14 -5',0,'#2fa86a',1.4)
  E(c,0,-1,4,4,'#03552c');c.restore()
}
// national coat of arms in 600x400 flag units
const arms=c=>{
  const k='#000',ring=(r,s)=>{c.beginPath();c.arc(240,200,r,0,T);c.arc(240,200,s,0,T,true);c.fillStyle=GO;c.fill();c.lineWidth=1.8;c.strokeStyle=k;c.stroke()}
  ring(99,90)
  for(const s of['M141 199Q240 236 339 199L339 209Q240 246 141 209Z','M152 153Q240 182 328 153L324 146Q240 172 156 146Z','M152 247Q240 280 328 247L322 256Q240 286 158 256Z','M156 147Q240 118 324 147L328 155Q240 126 152 155Z','M149 159L156 147Q240 216 325 250L318 262Q234 228 149 159Z'])F(c,s,GO,k,1.8)
  F(c,'M235.5 101L244 101L244 299L235.5 299Z',GO,k,1.8)
  F(c,'M180.6 131.8L299.3 131.8L299.3 211C299.3 244 272 270.3 240 270.3C208 270.3 180.6 244 180.6 211Z','#fff',k,1.6)
  F(c,'M183 134.3L296.6 134.3L296.6 211C296.6 242 271 268 239.8 268C208.6 268 183 242 183 211Z',RE)
  F(c,'M206 157.4L273.8 157.4L273.8 211.4C273.8 230 258.6 245.1 239.9 245.1C221 245.1 206 230 206 211.4Z','#fff',k,1.4)
  for(const[x,y,a]of[[194.3,146,0],[240,146,0],[285.5,146,0],[194.3,192,0],[285.5,192,0],[205.2,240,-.785],[274.6,240,.785]]){
    c.save();c.translate(x,y);c.rotate(a)
    F(c,'M-9 9L9 9L9 2L8 2L8 -4L6 -4L6 -2L4.5 -2L4.5 -4L3 -4L3 2L2.5 2L2.5 -6L1.5 -6L1.5 -8L-1.5 -8L-1.5 -6L-2.5 -6L-2.5 2L-3 2L-3 -4L-4.5 -4L-4.5 -2L-6 -2L-6 -4L-8 -4L-8 2L-9 2Z',GO,k,1)
    F(c,'M-2 9L-2 6Q0 3 2 6L2 9Z',k);c.restore()
  }
  for(const[x,y]of[[0,0],[0,-26],[-20.8,0],[20.7,0],[0,25.8]]){
    c.save();c.translate(x,y)
    F(c,'M232.6 191.6L247.6 191.6L247.6 202.4C247.6 207 244 210.5 240.1 210.5C236 210.5 232.6 207 232.6 202.4Z','#039')
    for(const[u,v]of[[236.1,195.7],[244.4,195.7],[240.2,199.7],[236.1,203.9],[244.4,203.9]])E(c,u,v,1.6,1.6,'#fff')
    c.restore()
  }
}
const dy=(x,t)=>5*(x/W)*Math.sin(T*(x/180-t))+1.5*(x/W)*Math.sin(T*(x/70-2*t))
export default(c,t,i)=>{
  const f=new c.canvas.constructor(W,H),g=f.getContext('2d')
  g.fillStyle=RE;g.fillRect(0,0,W,H);g.fillStyle=GR;g.fillRect(0,0,W*.4,H)
  g.lineCap=g.lineJoin='round';g.save();g.scale(H/400,H/400);arms(g);g.restore()
  g.save();g.translate(184,74);g.scale(.61,.61);girl(g,t,i);g.restore()
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

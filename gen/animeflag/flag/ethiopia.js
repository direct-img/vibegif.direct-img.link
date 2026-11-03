// Ethiopia flag: green-yellow-red horizontal tricolor with the central blue disc and yellow star with rays, waving on a flagpole, with a bright-smiling anime girl printed on the fly side, cornrow shuruba braids with gold beads, yellow Adey Abeba daisies in her hair and a white habesha kemis with a green-yellow-red tibeb border; she blinks and her braids sway as the flag ripples, while Adey Abeba daisies sway at the foot of the pole
export const frames=16,rim=3
const W=236,H=118,X=14,Y=52,T=Math.PI*2
const P=(c,s)=>{c.beginPath();for(const[,k,a]of s.matchAll(/([MLCQZ])([^MLCQZ]*)/g)){
  const n=(a.match(/-?\d*\.?\d+(e-?\d+)?/g)||[]).map(Number),z={M:2,L:2,Q:4,C:6}[k]
  if(k=='Z')c.closePath()
  for(let j=0;j<n.length;j+=z){const v=n.slice(j,j+z);k=='C'?c.bezierCurveTo(...v):k=='Q'?c.quadraticCurveTo(...v):k=='M'&&!j?c.moveTo(...v):c.lineTo(...v)}
}}
const F=(c,s,f,l,w)=>{P(c,s);if(f)c.fillStyle=f,c.fill();if(l)c.strokeStyle=l,c.lineWidth=w,c.stroke()}
const E=(c,x,y,a,b,f)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fillStyle=f;c.fill()}
const SK='#b8784c',SS='#97592f',SL='#3e1d0e',HB='#241612',HS='#120a08',HL='#5a4034',GR='#078930',YE='#fcdd09',RE='#da121a',BU='#0f47af',GO='#f6c22c'
const eye=(c,x,m,sh)=>{
  c.save();c.translate(x,8);c.scale(m,1)
  if(sh){F(c,'M-12 4Q0 -5 13 3',0,'#1a0c06',3);F(c,'M13 3L17 6',0,'#1a0c06',2)}
  else{
    P(c,'M-11 -2Q-2 -11 12 -6L11 11Q0 16 -10 11Z');c.fillStyle='#fff';c.fill();c.save();c.clip()
    E(c,0,3,9,11.5,'#341808');E(c,0,7,7.5,7.5,'#7a4020');E(c,0,10,5,3.6,'#c88a50');E(c,0,2,4,5.5,'#140804')
    F(c,'M-12 -4Q-2 -13 13 -7L13 -1Q-2 -7 -12 1Z','rgba(40,20,10,.35)')
    E(c,-3.5,-1.5,3.3,3.3,'#fff');E(c,4,8,1.7,1.7,'#fff');c.restore()
    F(c,'M-12 1Q-4 -14 11 -9.5L16.5 -6L12 -5Q-2 -9.5 -12 1Z','#1a0c06')
    F(c,'M-5 13.5Q2 15.5 8 12.5',0,'#4a2414',1.2)
  }
  c.restore()
}
const FACE='M-47 -20L-47 4C-46 24 -22 44 0 48C22 44 46 24 47 4L47 -20C46 -40 30 -54 0 -54C-30 -54 -46 -40 -47 -20Z'
const daisy=(c,x,y,r)=>{
  c.save();c.translate(x,y);c.rotate(r)
  for(let k=0;k<8;k++){c.rotate(T/8);F(c,'M0 -3Q-5 -9 -1 -12.5L1 -12.5Q5 -9 0 -3Z',YE,'#9a7a00',.9)}
  E(c,0,0,3.8,3.8,'#e8a010');E(c,-1,-1,1.6,1.6,'#ffd860');c.restore()
}
const braid=(c,x,y,ex,ey,k)=>{
  const s=`M${x} ${y}Q${x*1.12} ${(y+ey)/2} ${ex} ${ey}`
  F(c,s,0,HS,9);F(c,s,0,HB,6.4);c.setLineDash([2.6,2.6]);F(c,s,0,HL,2.2);c.setLineDash([])
  E(c,ex,ey+2,3.4,3.4,k?GO:'#e8e0c8');E(c,ex-1,ey+1,1.2,1.2,'#fff4c0')
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),bl=i==4||i==5
  // braids behind the shoulders
  F(c,'M-54 -30C-62 0 -58 40 -60 62L60 62C58 40 62 0 54 -30Z',HS)
  for(let k=0;k<11;k++){const x=-50+k*10;braid(c,x,-16,x*1.12+sw*1.5,60,k%2)}
  // white habesha kemis with tibeb borders
  F(c,'M-12 52C-28 54 -46 58 -56 76C-62 88 -64 110 -66 132L66 132C64 110 62 88 56 76C46 58 28 54 12 52Z','#fffdf4',SL,2)
  F(c,'M-56 78Q-48 96 -48 132M56 78Q48 96 48 132',0,'#e4e0d2',1.4)
  F(c,'M-10 64L-10 132L10 132L10 64Z',GR);F(c,'M-6 64L-6 132L6 132L6 64Z',YE)
  for(let y=70;y<132;y+=10)F(c,`M0 ${y-5}L5 ${y}L0 ${y+5}L-5 ${y}Z`,RE)
  F(c,'M-10 64L-10 132M10 64L10 132',0,'#05501c',1.2)
  F(c,'M-17 53Q0 74 17 53',0,GR,8);F(c,'M-17 53Q0 74 17 53',0,YE,4.6);F(c,'M-17 53Q0 74 17 53',0,RE,1.8)
  // neck, ears + face
  F(c,'M-9 36L-9 58Q0 64 9 58L9 36Z',SK,SL,2)
  F(c,'M-9 42Q0 54 9 42L9 48Q0 58 -9 48Z',SS)
  for(const m of[-1,1])E(c,m*48,10,7,10,SK),F(c,`M${m*46} 2Q${m*56} 0 ${m*55} 12Q${m*54} 20 ${m*46} 18`,0,SL,1.8),F(c,`M${m*49} 6Q${m*52} 10 ${m*49} 14`,0,SS,1.6)
  F(c,FACE,SK,SL,2)
  E(c,-29,22,9,4.5,'rgba(255,90,90,.3)');E(c,29,22,9,4.5,'rgba(255,90,90,.3)')
  for(const m of[-1,1])for(let k=0;k<3;k++)F(c,`M${m*29+k*4-5} 24L${m*29+k*4-2} 19`,0,'rgba(120,30,30,.45)',1.1)
  eye(c,-21,-1,bl);eye(c,21,1,bl)
  F(c,'M-31 -13Q-21 -19 -10 -14M31 -13Q21 -19 10 -14',0,'#1e100a',2)
  F(c,'M1.5 18L0 21',0,'#6e3618',1.6)
  F(c,'M-8 28Q0 30 8 28Q6 38 0 38Q-6 38 -8 28Z','#6a1a20','#3a0a10',1.4)
  F(c,'M-4 35Q0 32 4 35Q2 37.5 0 37.5Q-2 37.5 -4 35Z','#e06a76')
  F(c,'M-7 28.5Q0 30.5 7 28.5L6.5 30.5Q0 32 -6.5 30.5Z','#fff')
  for(const m of[-1,1])E(c,m*49,22,2.6,2.6,GO),E(c,m*49,28,2,3,GO)
  // cornrow cap
  F(c,'M-49 0Q-50 -30 -30 -37Q0 -45 30 -37Q50 -30 49 0L57 0C62 -94 -62 -94 -57 0Z',HB,HN,2)
  for(let k=-3;k<=3;k++){const s=`M${k*13} ${-41+Math.abs(k)*1.6}Q${k*14} -58 ${k*8} ${-62+Math.abs(k)}`;F(c,s,0,HS,1.6);c.setLineDash([3,3]);F(c,s,0,HL,1.6);c.setLineDash([])}
  F(c,'M-52 -6Q-56 -36 -44 -52M52 -6Q56 -36 44 -52',0,HL,1.4)
  // front braids over the shoulders
  braid(c,-50,-6,-60+sw,74,1);braid(c,50,-6,60+sw,74,1)
  // Adey Abeba daisies on her left (viewer's right)
  daisy(c,40,-52,sw*.1);daisy(c,52,-40,.4+sw*.1);daisy(c,27,-61,.2+sw*.1)
}
const HN='#0a0504'
// central emblem in its own units (disc radius 120)
const emb=c=>{
  E(c,0,0,120,120,BU)
  for(let k=0;k<5;k++){
    c.save();c.rotate(k*T/5)
    F(c,'M0 -96L-4.2 -83.06L13.14 -29.67L-9.99 -29.67L-12.59 -21.67L61.58 -21.67L72.59 -29.67L21.55 -29.67Z',YE)
    c.rotate(-T*.4);F(c,'M0 44L0 96',0,YE,4);c.restore()
  }
}
const dy=(x,t)=>5*(x/W)*Math.sin(T*(x/180-t))+1.5*(x/W)*Math.sin(T*(x/70-2*t))
export default(c,t,i)=>{
  const f=new c.canvas.constructor(W,H),g=f.getContext('2d')
  g.fillStyle=GR;g.fillRect(0,0,W,H/3);g.fillStyle=YE;g.fillRect(0,H/3,W,H/3);g.fillStyle=RE;g.fillRect(0,H*2/3,W,H/3)
  g.lineCap=g.lineJoin='round';g.save();g.translate(W/2,H/2);g.scale(H/360,H/360);emb(g);g.restore()
  g.save();g.translate(196,56);g.scale(.6,.6);girl(g,t,i);g.restore()
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
  // Adey Abeba daisies blooming at the foot of the pole
  for(const[x,d,h]of[[4,-10,26],[14,14,34],[30,-12,30],[40,16,24],[54,10,20]])
    F(c,`M${x-4} 252Q${x+d*.2} ${252-h*.7} ${x+d} ${252-h}Q${x+d*.3+3} ${252-h*.45} ${x+5} 252Z`,'#3c9a3e','#1d5a26',1.4)
  for(const[x,h,s,p]of[[10,38,1,0],[25,48,1.1,.3],[37,32,.95,.6],[49,42,1,.15]]){
    const a=.06*Math.sin(T*(t+p)),hx=x+h*Math.sin(a),hy=252-h*Math.cos(a)
    F(c,`M${x} 252Q${x} ${252-h*.5} ${hx} ${hy}`,0,'#1d5a26',3.2);F(c,`M${x} 252Q${x} ${252-h*.5} ${hx} ${hy}`,0,'#3c9a3e',1.6)
    c.save();c.translate(hx,hy);c.scale(s*.72,s*.72);daisy(c,0,0,a*2+p*3);c.restore()
  }
}

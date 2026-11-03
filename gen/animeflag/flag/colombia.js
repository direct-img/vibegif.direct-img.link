// Colombia flag: yellow-blue-red horizontal bands (yellow top half) waving on a flagpole, with a cheerful anime girl printed in the middle, long wavy dark-brown hair with a purple Cattleya orchid behind her ear and a white ruffled blouse trimmed in yellow, blue and red; she blinks as the flag ripples and three yellow butterflies flutter out below it
export const frames=16,rim=3
const W=236,H=157,X=14,Y=26,T=Math.PI*2
const P=(c,s)=>{c.beginPath();for(const[,k,a]of s.matchAll(/([MLCQZ])([^MLCQZ]*)/g)){
  const n=(a.match(/-?\d*\.?\d+(e-?\d+)?/g)||[]).map(Number),z={M:2,L:2,Q:4,C:6}[k]
  if(k=='Z')c.closePath()
  for(let j=0;j<n.length;j+=z){const v=n.slice(j,j+z);k=='C'?c.bezierCurveTo(...v):k=='Q'?c.quadraticCurveTo(...v):k=='M'&&!j?c.moveTo(...v):c.lineTo(...v)}
}}
const F=(c,s,f,l,w)=>{P(c,s);if(f)c.fillStyle=f,c.fill();if(l)c.strokeStyle=l,c.lineWidth=w,c.stroke()}
const E=(c,x,y,a,b,f)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fillStyle=f;c.fill()}
const SK='#f1c09c',SS='#dc9a76',SL='#6b3a26',HB='#4a2c1c',HS='#2e1a10',HL='#7a5038',HN='#1c0e08',YE='#fcd116',BL='#003893',RE='#ce1126'
const eye=(c,x,m,sh)=>{
  c.save();c.translate(x,8);c.scale(m,1)
  if(sh){F(c,'M-12 3Q0 12 13 2',0,'#2a1408',3);F(c,'M13 2L17 -1',0,'#2a1408',2)}
  else{
    P(c,'M-11 -2Q-2 -11 12 -6L11 11Q0 16 -10 11Z');c.fillStyle='#fff';c.fill();c.save();c.clip()
    E(c,0,3,9,11.5,'#4a2410');E(c,0,7,7.5,7.5,'#9a5424');E(c,0,10,5,3.6,'#e0a050');E(c,0,2,4,5.5,'#1e0c04')
    F(c,'M-12 -4Q-2 -13 13 -7L13 -1Q-2 -7 -12 1Z','rgba(60,30,10,.35)')
    E(c,-3.5,-1.5,3.3,3.3,'#fff');E(c,4,8,1.7,1.7,'#fff');c.restore()
    F(c,'M-12 1Q-4 -14 11 -9.5L16.5 -6L12 -5Q-2 -9.5 -12 1Z','#2a1408')
    F(c,'M-5 13.5Q2 15.5 8 12.5',0,'#6a3a2a',1.2)
  }
  c.restore()
}
const LK=(c,q)=>{c.moveTo(q[0],q[1]);for(let j=2;j<q.length;j+=2){const[a,b,x,y]=q.slice(j-2,j+2),dn=y>b
  c.quadraticCurveTo(dn?a+(x-a)*.3:x-(x-a)*.3,dn?b+(y-b)*.68:y+(b-y)*.32,x,y)}}
// side-swept fringe, parted on her left
const FR=[-58,-22,-52,12,-46,-8,-40,4,-32,-14,-26,-1,-16,-20,-10,-4,0,-24,6,-8,16,-26,26,-6,36,-24,44,-2,50,-18,56,8,58,-22]
const FACE='M-47 -30L-47 4C-46 24 -22 44 0 48C22 44 46 24 47 4L47 -30Q46 -42 30 -44L-30 -44Q-46 -42 -47 -30Z'
const fringe=(c,f,l)=>{c.beginPath();LK(c,FR);c.quadraticCurveTo(54,-54,20,-58);c.quadraticCurveTo(-54,-56,-58,-22);c.closePath();if(f)c.fillStyle=f,c.fill();if(l)c.beginPath(),LK(c,FR),c.strokeStyle=l,c.lineWidth=2,c.stroke()}
const orchid=c=>{
  const L='#8e2f7e'
  for(const a of[-1.9,-.4,.9])c.save(),c.rotate(a),F(c,'M0 0Q-6 -14 0 -26Q6 -14 0 0Z','#e9a6dc',L,1.4),c.restore()
  for(const m of[-1,1])c.save(),c.scale(m,1),c.rotate(.5),F(c,'M0 0Q-4 -20 6 -24Q16 -26 18 -16Q20 -8 12 -4Q6 0 0 0Z','#f0b6e4',L,1.4),F(c,'M3 -6Q8 -14 10 -20',0,'#d27cc4',1.2),c.restore()
  F(c,'M-9 1Q-15 12 -9 19Q-6 23 -2 21Q0 24 2 21Q6 23 9 19Q15 12 9 1Q0 -5 -9 1Z','#b01f7e',L,1.4)
  F(c,'M-5 3Q0 14 5 3Q0 -1 -5 3Z','#f7d046');F(c,'M-2 6L-1 11M2 6L1 11',0,'#c8641a',.9)
  F(c,'M-6 16Q0 19 6 16',0,'#e55aae',1.2)
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),bl=i==6||i==7
  // wavy back hair
  F(c,`M-56 -40C-76 -20 -70 8 -78 28Q-90 48 -76 64Q-${90+sw*2} 84 -78 102Q-${92+sw*2} 118 -80 132L80 132Q${92-sw*2} 118 78 102Q${90-sw*2} 84 76 64Q88 48 78 28C70 8 76 -20 56 -40Z`,HS,HN,2)
  F(c,'M-58 -20C-64 -94 64 -94 58 -20Z',HB,HN,2)
  F(c,'M-64 34Q-74 50 -66 62Q-78 80 -68 98M64 34Q74 50 66 62Q78 80 68 98',0,HL,1.6)
  // white blouse with ruffled collar, trimmed in the flag colours
  F(c,'M-12 52C-30 54 -50 58 -60 76C-66 88 -70 110 -72 132L72 132C70 110 66 88 60 76C50 58 30 54 12 52Z','#fff',SL,2)
  F(c,'M-64 92Q-30 102 0 102Q30 102 64 92',0,'#d8dbe8',1.4)
  const rf=o=>{let r=`M-62 ${80+o}`;for(let k=0;k<8;k++){const x=-62+k*15.5;r+=`Q${x+7.75} ${96+o} ${x+15.5} ${80+o}`}return r}
  F(c,rf(0),0,YE,3);F(c,rf(3),0,BL,3);F(c,rf(6),0,RE,3)
  F(c,'M-16 52Q-34 60 -48 58Q-40 72 -22 72Q-8 72 0 66Q8 72 22 72Q40 72 48 58Q34 60 16 52Z','#fff',SL,1.8)
  F(c,'M-30 62Q-24 68 -14 66M30 62Q24 68 14 66',0,'#d8dbe8',1.3)
  // neck + face
  F(c,'M-9 36L-9 58Q0 64 9 58L9 36Z',SK,SL,2)
  F(c,'M-9 42Q0 54 9 42L9 48Q0 58 -9 48Z',SS)
  F(c,FACE,SK,SL,2)
  c.save();P(c,FACE);c.clip();c.translate(0,5);fringe(c,SS);c.restore()
  E(c,-29,22,9,4.5,'rgba(240,80,90,.35)');E(c,29,22,9,4.5,'rgba(240,80,90,.35)')
  for(const m of[-1,1])for(let k=0;k<3;k++)F(c,`M${m*29+k*4-5} 24L${m*29+k*4-2} 19`,0,'rgba(200,60,70,.6)',1.1)
  eye(c,-21,-1,bl);eye(c,21,1,bl)
  F(c,'M1.5 19L0 21.5',0,'#b06a52',1.4)
  F(c,'M-8 28Q0 30 8 28Q6 38 0 38Q-6 38 -8 28Z','#8a2430','#5a1018',1.4)
  F(c,'M-4 35Q0 32 4 35Q2 37.5 0 37.5Q-2 37.5 -4 35Z','#ee7a86')
  F(c,'M-7 28.5Q0 30.5 7 28.5L6.5 30.5Q0 32 -6.5 30.5Z','#fff')
  // fringe + side locks
  fringe(c,HB,HN)
  F(c,'M-36 -36Q-30 -24 -28 -12M-10 -40Q-8 -26 -8 -14M14 -42Q22 -26 22 -14M34 -38Q40 -24 40 -12',0,HL,1.4)
  for(const m of[-1,1])F(c,`M${m*47} -30Q${m*64} 0 ${m*(58+sw)} 28Q${m*66} 40 ${m*(56+sw)} 54Q${m*50} 38 ${m*46} 22Q${m*40} 0 ${m*38} -28Z`,HB,HN,2)
  // shine
  F(c,'M-38 -54Q-30 -62 -18 -65Q-28 -60 -34 -52ZM6 -66Q20 -66 30 -58Q20 -62 8 -62Z','#9a6a4c')
  // orchid tucked behind her right ear (viewer's left)
  c.save();c.translate(-54,-36);c.rotate(-.35);c.scale(1.25,1.25);orchid(c);c.restore()
}
const dy=(x,t)=>5*(x/W)*Math.sin(T*(x/180-t))+1.5*(x/W)*Math.sin(T*(x/70-2*t))
const bf=(c,x,y,s,fl,r)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  for(const m of[-1,1]){c.save();c.scale(m*fl,1)
    F(c,'M0 -1C4 -14 18 -16 19 -7C20 0 10 2 0 1Z',YE,'#5a3a00',1.6)
    F(c,'M0 1C8 2 15 7 11 13C7 17 2 9 0 3Z','#ffbf1a','#5a3a00',1.6)
    E(c,12,-7,3.2,2.4,'#f08a10');c.restore()}
  F(c,'M0 -6L0 10',0,'#2e1e00',2.8);F(c,'M0 -6Q-3 -12 -6 -14M0 -6Q3 -12 6 -14',0,'#2e1e00',1.1)
  c.restore()
}
export default(c,t,i)=>{
  const f=new c.canvas.constructor(W,H),g=f.getContext('2d')
  g.fillStyle=YE;g.fillRect(0,0,W,H/2);g.fillStyle=BL;g.fillRect(0,H/2,W,H/4);g.fillStyle=RE;g.fillRect(0,H*3/4,W,H/4)
  g.lineCap=g.lineJoin='round';g.save();g.translate(W/2,76);g.scale(.72,.72);girl(g,t,i);g.restore()
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
  c.beginPath();c.arc(12,Y-10,6,0,T);c.fillStyle=YE;c.fill();c.stroke();E(c,10,Y-12,2,2,'#fff6c8')
  // butterflies drifting out of the flag
  for(const[x,y,s,p,q]of[[214,196,1,0,3],[150,222,.85,.35,4],[230,236,.7,.7,3]]){
    const a=T*(t+p),fl=.22+.78*Math.abs(Math.cos(T*q*t+p*7))
    bf(c,x+7*Math.sin(a),y+5*Math.sin(2*a),s,fl,.25*Math.cos(a))
  }
}

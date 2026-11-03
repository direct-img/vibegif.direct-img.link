// Philippines flag: blue over red with the white hoist triangle, golden eight-rayed sun and three gold stars, waving on a flagpole, with a warm-smiling anime girl printed in the fly, glossy black hair in a side bun ringed with white sampaguita jasmine flowers, pearl earrings and a white Filipiniana terno with tall butterfly sleeves; she blinks as the flag ripples
export const frames=16,rim=3
const W=236,H=118,X=14,Y=52,T=Math.PI*2
const P=(c,s)=>{c.beginPath();for(const[,k,a]of s.matchAll(/([MLCQZ])([^MLCQZ]*)/g)){
  const n=(a.match(/-?\d*\.?\d+(e-?\d+)?/g)||[]).map(Number),z={M:2,L:2,Q:4,C:6}[k]
  if(k=='Z')c.closePath()
  for(let j=0;j<n.length;j+=z){const v=n.slice(j,j+z);k=='C'?c.bezierCurveTo(...v):k=='Q'?c.quadraticCurveTo(...v):k=='M'&&!j?c.moveTo(...v):c.lineTo(...v)}
}}
const F=(c,s,f,l,w)=>{P(c,s);if(f)c.fillStyle=f,c.fill();if(l)c.strokeStyle=l,c.lineWidth=w,c.stroke()}
const E=(c,x,y,a,b,f)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fillStyle=f;c.fill()}
const SK='#f5cfa8',SS='#e2a983',SL='#6a3824',HB='#1c171d',HS='#0f0b10',HL='#4a4a66',HN='#060407',BL='#0038a8',RE='#ce1126',GO='#fcd116',CR='#fffaf0'
const eye=(c,x,m,sh)=>{
  c.save();c.translate(x,8);c.scale(m,1)
  if(sh){F(c,'M-12 3Q0 12 13 2',0,'#1a0c08',3);F(c,'M13 2L17 -1',0,'#1a0c08',2)}
  else{
    P(c,'M-11 -2Q-2 -11 12 -6L11 11Q0 16 -10 11Z');c.fillStyle='#fff';c.fill();c.save();c.clip()
    E(c,0,3,9,11.5,'#24140c');E(c,0,7,7.5,7.5,'#5c3620');E(c,0,10,5,3.6,'#a87448');E(c,0,2,4,5.5,'#0c0604')
    F(c,'M-12 -4Q-2 -13 13 -7L13 -1Q-2 -7 -12 1Z','rgba(40,20,10,.35)')
    E(c,-3.5,-1.5,3.3,3.3,'#fff');E(c,4,8,1.7,1.7,'#fff');c.restore()
    F(c,'M-12 1Q-4 -14 11 -9.5L16.5 -6L12 -5Q-2 -9.5 -12 1Z','#1a0c08')
    F(c,'M-5 13.5Q2 15.5 8 12.5',0,'#5a3020',1.2)
  }
  c.restore()
}
const LK=(c,q)=>{c.moveTo(q[0],q[1]);for(let j=2;j<q.length;j+=2){const[a,b,x,y]=q.slice(j-2,j+2),dn=y>b
  c.quadraticCurveTo(dn?a+(x-a)*.3:x-(x-a)*.3,dn?b+(y-b)*.68:y+(b-y)*.32,x,y)}}
// soft, nearly straight-cut fringe
const FR=[-58,-22,-52,14,-46,-6,-39,0,-32,-12,-24,-3,-16,-14,-8,-4,0,-15,8,-4,16,-14,24,-3,32,-12,39,0,46,-6,52,14,58,-22]
const FACE='M-47 -30L-47 4C-46 24 -22 44 0 48C22 44 46 24 47 4L47 -30Q46 -42 30 -44L-30 -44Q-46 -42 -47 -30Z'
const fringe=(c,f,l)=>{c.beginPath();LK(c,FR);c.quadraticCurveTo(54,-54,0,-56);c.quadraticCurveTo(-54,-54,-58,-22);c.closePath();if(f)c.fillStyle=f,c.fill();if(l)c.beginPath(),LK(c,FR),c.strokeStyle=l,c.lineWidth=2,c.stroke()}
const jas=(c,x,y,r,s)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  for(let k=0;k<5;k++){c.rotate(T/5);F(c,'M0 0Q-5 -5 -2 -10Q0 -12 2 -10Q5 -5 0 0Z','#fff','#8a9a7a',1)}
  E(c,0,0,2.2,2.2,'#e8e070');c.restore()
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),bl=i==7||i==8
  // hair swept up into a side chignon
  F(c,'M-54 -40C-64 -10 -60 22 -50 40L50 40C60 22 64 -10 54 -40Z',HS,HN,2)
  E(c,-54,-48,24,22,HN);E(c,-54,-48,22,20,HB);F(c,'M-70 -50Q-62 -66 -46 -62Q-36 -56 -44 -42M-66 -38Q-56 -32 -48 -38',0,HL,1.6)
  F(c,'M-58 -20C-64 -94 64 -94 58 -20Z',HB,HN,2)
  // terno: bodice + butterfly sleeves
  F(c,'M-14 52C-30 54 -46 60 -52 76C-56 92 -58 112 -60 132L60 132C58 112 56 92 52 76C46 60 30 54 14 52Z',CR,SL,2)
  for(const m of[-1,1]){
    const S=`M${m*20} 58Q${m*20} 22 ${m*44} 20Q${m*68} 20 ${m*70} 50Q${m*72} 72 ${m*64} 88Q${m*50} 84 ${m*42} 70Q${m*32} 60 ${m*20} 58Z`
    F(c,S,'#fbf7ef','#5a4a3a',1.8)
    F(c,`M${m*24} 60Q${m*34} 56 ${m*44} 72Q${m*54} 84 ${m*64} 88Q${m*50} 84 ${m*42} 70Q${m*32} 60 ${m*24} 60Z`,'#e6dccb')
    F(c,`M${m*38} 68L${m*27} 36M${m*38} 68L${m*40} 26M${m*38} 68L${m*56} 27M${m*38} 68L${m*66} 48M${m*38} 68L${m*67} 68`,0,'#ddd2bc',1.4)
    F(c,`M${m*23} 48Q${m*24} 27 ${m*44} 24Q${m*64} 24 ${m*66} 50Q${m*68} 70 ${m*62} 84`,0,GO,1.4)
  }
  F(c,'M-14 54Q0 70 14 54',0,GO,2.4)
  for(let y=76;y<132;y+=12)for(const x of[-16,0,16])F(c,`M${x} ${y-4}L${x+3} ${y}L${x} ${y+4}L${x-3} ${y}Z`,'#e9cf86')
  // neck + face
  F(c,'M-9 36L-9 58Q0 64 9 58L9 36Z',SK,SL,2)
  F(c,'M-9 42Q0 54 9 42L9 48Q0 58 -9 48Z',SS)
  F(c,FACE,SK,SL,2)
  c.save();P(c,FACE);c.clip();c.translate(0,5);fringe(c,SS);c.restore()
  E(c,-29,22,9,4.5,'rgba(255,100,110,.36)');E(c,29,22,9,4.5,'rgba(255,100,110,.36)')
  for(const m of[-1,1])for(let k=0;k<3;k++)F(c,`M${m*29+k*4-5} 24L${m*29+k*4-2} 19`,0,'rgba(210,70,80,.6)',1.1)
  eye(c,-21,-1,bl);eye(c,21,1,bl)
  F(c,'M1.5 19L0 21.5',0,'#c07a60',1.4)
  F(c,'M-7 29Q0 36 7 29',0,'#9a3b3b',1.8)
  // fringe + side locks
  fringe(c,HB,HN)
  for(const m of[-1,1])F(c,`M${m*47} -30Q${m*61} 2 ${m*(55+sw*1.5)} 42Q${m*48} 24 ${m*43} 6Q${m*41} -12 ${m*38} -28Z`,HB,HN,2)
  // glossy shine ring
  F(c,'M-40 -50Q-32 -61 -20 -64Q-29 -58 -35 -47ZM-8 -66Q2 -67 10 -65Q2 -63 -7 -62ZM22 -63Q33 -59 40 -50Q35 -50 30 -56Z',HL)
  F(c,'M-26 -40Q-22 -28 -20 -16M24 -40Q22 -28 18 -18M0 -46Q2 -32 0 -20',0,'#34303e',1.4)
  // pearl earrings
  for(const m of[-1,1])F(c,`M${m*47} 18L${m*47} 23`,0,GO,1.2),E(c,m*47,26,3,3.4,'#f4f0ea'),E(c,m*46,25,1,1.1,'#fff')
  // sampaguita cluster on her right (viewer's left)
  for(const[a,z]of[[2.6,1],[3.2,1.1],[3.85,1],[4.5,.95],[5.1,.85]])jas(c,-54+23*Math.cos(a),-48+21*Math.sin(a),a,z)
  for(const a of[2.9,3.5,4.15,4.8])E(c,-54+25*Math.cos(a),-48+23*Math.sin(a),2,2,'#fff')
}
// flag in its own 180x90 units, centre of the sun at the origin
const flag=c=>{
  c.fillStyle=BL;c.fillRect(-28,-45,180,45);c.fillStyle=RE;c.fillRect(-28,0,180,45)
  F(c,'M49.942 0L-28 45L-28 -45Z','#fff')
  E(c,0,0,9,9,GO)
  for(let k=0;k<8;k++){c.save();c.rotate(k*T/8)
    F(c,'M0 0L-3.164 -15.909L-2.219 -16.855ZM0 0L-1.169 -17.831L0 -19L1.169 -17.831ZM0 0L2.219 -16.855L3.164 -15.909Z',GO);c.restore()}
  for(let k=0;k<3;k++){c.save();c.translate(-2.019,0);c.rotate(k*T/3);c.translate(2.019,0)
    F(c,'M40.942 0L37.56 1.176L37.487 4.755L35.324 1.902L31.897 2.939L33.942 0L31.897 -2.939L35.324 -1.902L37.487 -4.755L37.56 -1.176Z',GO);c.restore()}
}
const dy=(x,t)=>5*(x/W)*Math.sin(T*(x/180-t))+1.5*(x/W)*Math.sin(T*(x/70-2*t))
export default(c,t,i)=>{
  const f=new c.canvas.constructor(W,H),g=f.getContext('2d')
  g.lineCap=g.lineJoin='round';g.save();g.scale(W/180,W/180);g.translate(28,45);flag(g);g.restore()
  g.save();g.translate(174,55);g.scale(.7,.7);girl(g,t,i);g.restore()
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

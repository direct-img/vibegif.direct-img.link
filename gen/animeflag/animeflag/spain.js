// Spain flag (red-yellow-red with the crowned coat of arms and Pillars of Hercules at the hoist side) waving on a pole, with a dark-haired anime girl on the fly side wearing a red carnation and a polka-dot ruffled dress, fluttering a red and gold hand fan; she blinks
export const frames=16,delay=85,rim=3
const T=Math.PI*2,X=24,W=224,H=150,Y=54,A=6,KW=1.1
const N={M:2,L:2,Q:4,C:6}
const p=(c,s)=>{
  c.beginPath()
  for(const[,k,a]of s.matchAll(/([MLQCZ])([^MLQCZ]*)/g)){
    if(k=='Z'){c.closePath();continue}
    const v=a.trim().split(/[\s,]+/).map(Number)
    for(let j=0;j<v.length;j+=N[k])c[k=='C'?'bezierCurveTo':k=='Q'?'quadraticCurveTo':k=='M'&&!j?'moveTo':'lineTo'](...v.slice(j,j+N[k]))
  }
}
const f=(c,s,a)=>{p(c,s);c.fillStyle=a;c.fill()}
const k=(c,s,a,w)=>{p(c,s);c.strokeStyle=a;c.lineWidth=w;c.stroke()}
const fk=(c,s,a,b,w)=>{f(c,s,a);c.strokeStyle=b;c.lineWidth=w;c.stroke()}
const e=(c,x,y,rx,ry,a,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fillStyle=a;c.fill()}
const bang=(a,top)=>{
  let s=`M${a[0]} ${a[1]}`
  for(let j=2;j<a.length;j+=2){
    const[u,v,x,y]=a.slice(j-2,j+2),n=y>v?[u,v]:[x,y],m=y>v?[x,y]:[u,v]
    s+=` Q${n[0]+(m[0]-n[0])*.15} ${n[1]+(m[1]-n[1])*.7} ${x} ${y}`
  }
  return s+top
}
const L='#3a1e16',SK='#ffe2cc',HR='#3b2216',HD='#1c0d08',HL='#7d4c34',RD='#c60b1e',YE='#ffc400',GO='#f0b400',OL='#5a3a10'
// coat of arms in 100-unit box, centred
const crown=(c,x,y,s)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.lineWidth=.9;c.strokeStyle=OL
  fk(c,'M-9 0 L-10 -8 Q-5 -4 -3 -9 L0 -11 L3 -9 Q5 -4 10 -8 L9 0Z',GO,OL,.9)
  fk(c,'M-9 -2 L9 -2 L9 1 L-9 1Z',GO,OL,.9)
  e(c,-5,-.5,1.2,1.2,RD);e(c,0,-.5,1.2,1.2,'#2a8a3a');e(c,5,-.5,1.2,1.2,RD)
  e(c,0,-12.5,2,2,GO);c.stroke();k(c,'M0 -14.5 L0 -18 M-1.6 -16.4 L1.6 -16.4',OL,1)
  c.restore()
}
const arms=c=>{
  c.lineJoin='round'
  // pillars with ribbons and crowns
  for(const s of[-1,1]){
    const x=s*35
    fk(c,`M${x-4} -16 L${x+4} -16 L${x+4} 38 L${x-4} 38Z`,'#e6e6ea',OL,.9)
    k(c,`M${x-1.5} -14 L${x-1.5} 36 M${x+1.5} -14 L${x+1.5} 36`,'#b8b8c4',.7)
    fk(c,`M${x-6} -21 L${x+6} -21 L${x+5} -16 L${x-5} -16Z`,GO,OL,.9)
    fk(c,`M${x-6} 38 L${x+6} 38 L${x+7} 43 L${x-7} 43Z`,GO,OL,.9)
    fk(c,`M${x-9} 43 Q${x-4.5} 40 ${x} 43 Q${x+4.5} 46 ${x+9} 43 L${x+9} 47 Q${x+4.5} 50 ${x} 47 Q${x-4.5} 44 ${x-9} 47Z`,'#6aa8e8',OL,.8)
    crown(c,x,-22,.62)
    fk(c,`M${x-9} 4 Q${x} 0 ${x+9} 6 L${x+9} 12 Q${x} 6 ${x-9} 10Z`,RD,OL,.8)
    fk(c,`M${x+9} 6 L${x+12} 5 L${x+11} 9 L${x+12} 13 L${x+9} 12Z`,RD,OL,.8)
    k(c,`M${x-6} 6.5 L${x+6} 7.5`,GO,.7)
  }
  // shield quarters
  const sh='M-24 -22 L24 -22 L24 18 Q24 44 0 47 Q-24 44 -24 18Z'
  c.save();p(c,sh);c.clip()
  f(c,'M-24 -22 L0 -22 L0 10 L-24 10Z',RD)
  f(c,'M0 -22 L24 -22 L24 10 L0 10Z','#f4f4f4')
  f(c,'M-24 10 L0 10 L0 50 L-24 50Z',GO)
  for(let j=0;j<4;j++)f(c,`M${-21+j*6} 10 L${-18+j*6} 10 L${-18+j*6} 50 L${-21+j*6} 50Z`,RD)
  f(c,'M0 10 L24 10 L24 50 L0 50Z',RD)
  k(c,'M3 13 L21 13 L21 38 L3 38Z M12 13 L12 38 M3 25 L21 25 M3 13 L21 38 M21 13 L3 38',GO,1.3);e(c,12,25,2,2,'#2a9a4a')
  fk(c,'M0 30 Q-4 42 -13 45 Q0 52 13 45 Q4 42 0 30Z','#f4f4f4',OL,.8)
  e(c,0,42,3.2,3,'#d23a4a');k(c,'M0 39 L0 36 M0 37 L-2 35 M0 37 L2 35',GO,.6);e(c,-1.5,35.5,1.4,.8,'#2a8a3a',-.5)
  c.restore()
  // castle of Castile
  fk(c,'M-20 3 L-20 -6 L-18 -6 L-18 -10 L-15.5 -10 L-15.5 -6 L-14.5 -6 L-14.5 -13 L-9.5 -13 L-9.5 -6 L-8.5 -6 L-8.5 -10 L-6 -10 L-6 -6 L-4 -6 L-4 3Z',GO,OL,.7)
  f(c,'M-13.5 3 L-13.5 -1 Q-12 -3 -10.5 -1 L-10.5 3Z','#3a5ac8')
  // lion of Leon
  fk(c,'M10 -14 Q15 -16 16 -11 Q19 -9 17 -5 Q20 -1 19 4 L16 4 L15 0 Q12 2 11 4 L8 4 Q10 -1 9 -4 Q5 -5 6 -9 L9 -9 Q7 -13 10 -14Z','#8a2a8a',OL,.7)
  k(c,'M17 -2 Q21 -4 20 -9',  '#8a2a8a',1.2)
  crown(c,12.5,-14.5,.28)
  // Bourbon centre: blue oval, red border, fleurs
  fk(c,'M0 -6 Q7.5 -6 7.5 2 Q7.5 11 0 13 Q-7.5 11 -7.5 2 Q-7.5 -6 0 -6Z','#1f3fae',RD,1.6)
  for(const[x,y]of[[-3,0],[3,0],[0,6]])e(c,x,y,1.2,1.4,GO)
  p(c,sh);c.strokeStyle=OL;c.lineWidth=1.1;c.stroke()
  k(c,'M0 -22 L0 30 M-24 10 L24 10',OL,.6)
  // royal crown on top
  fk(c,'M-20 -24 L20 -24 L21 -30 L-21 -30Z',GO,OL,.9)
  f(c,'M-15 -30 Q-15 -42 0 -42 Q15 -42 15 -30Z','#b01030')
  k(c,'M-20 -30 Q-18 -42 0 -42 Q18 -42 20 -30 M-9 -30 Q-9 -40 0 -42 Q9 -40 9 -30',GO,1.6)
  for(const x of[-14,-7,0,7,14])e(c,x,-27,1.3,1.3,x%14?'#2a8a3a':RD)
  e(c,0,-44.5,3,3,'#2a5ad0');c.strokeStyle=OL;c.lineWidth=.8;c.stroke()
  k(c,'M0 -47.5 L0 -52 M-2 -50 L2 -50',GO,1.2)
}
const eye=(c,s,o)=>{
  c.save();c.scale(s,1)
  if(o){
    f(c,'M9 2 C11 -8 31 -10 36 -2 C37 8 31 16 22 16 C13 16 9 10 9 2Z','#fff');c.save();c.clip()
    e(c,22.5,4,9.8,12,'#7a3a18');e(c,22,-4,12,7,'#3a160a');e(c,22.5,5,4.6,6.6,'#200b04')
    e(c,22,12,7,3.6,'#e8a050');e(c,s>0?18:26,-1,3.8,3.8,'#fff');e(c,s>0?27:17,10,1.9,1.9,'#fff')
    c.restore()
    f(c,'M8 3 Q12 -9 25 -10.5 Q37 -11 42 -1 L37 1 Q33 -7 24 -7.5 Q13 -7 9 5Z',L)
    f(c,'M37 -3 L44 -6 L40 0Z',L)
    k(c,'M13 15.5 Q22 18.5 31 13',L,1.3)
  }else{k(c,'M7 3 Q22 13 37 1',L,3);k(c,'M37 1 L42 -1',L,2)}
  k(c,'M12 -17 Q23 -22 34 -17',HD,2)
  c.restore()
}
const carnation=(c,x,y,r)=>{
  for(let j=0;j<10;j++){const q=j*T/10;e(c,x+Math.cos(q)*r*.5,y+Math.sin(q)*r*.5,r*.55,r*.4,j%2?'#e0182e':'#c20a22',q)}
  for(let j=0;j<6;j++){const q=j*T/6+.4;e(c,x+Math.cos(q)*r*.25,y+Math.sin(q)*r*.25,r*.35,r*.25,'#ff3a50',q)}
  e(c,x,y,r*.2,r*.2,'#a00818')
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),cw=Math.cos(T*t)
  // wavy hair behind
  fk(c,`M-50 -14 C-62 -80 62 -80 50 -14 C60 10 52 30 62 50 Q${70+sw*2} 70 ${60+sw*3} 92 Q${74+sw*4} 104 ${66+sw*4} 124 L-66 124 Q-74 104 -60 92 Q-70 70 -62 50 C-52 30 -60 10 -50 -14Z`,HR,HD,2)
  k(c,`M54 20 Q64 44 56 60 Q66 80 ${58+sw*2} 100 M-54 20 Q-64 44 -56 60 Q-66 80 -58 100`,HL,1.6)
  // dress with polka dots and ruffled neckline
  f(c,'M-12 30 L-13 72 L13 72 L12 30Z',SK)
  f(c,'M-13 38 Q0 58 13 38 L13 50 Q0 64 -13 50Z','#f0bea4')
  fk(c,'M-14 62 Q-36 66 -56 74 Q-74 84 -78 130 L-80 190 L80 190 L78 130 Q74 84 56 74 Q36 66 14 62 Q0 82 -14 62Z',RD,'#5a0a10',2.2)
  c.save();p(c,'M-14 62 Q-36 66 -56 74 Q-74 84 -78 130 L-80 190 L80 190 L78 130 Q74 84 56 74 Q36 66 14 62 Q0 82 -14 62Z');c.clip()
  for(let y=70;y<190;y+=16)for(let x=-96+(y/16%2)*8;x<96;x+=16)e(c,x,y,3.4,3.4,'#fff4f0')
  c.restore()
  fk(c,'M-64 74 Q-30 90 0 96 Q30 90 64 74 Q66 82 60 86 Q52 92 46 90 Q40 98 32 96 Q24 104 16 100 Q8 108 0 103 Q-8 108 -16 100 Q-24 104 -32 96 Q-40 98 -46 90 Q-52 92 -60 86 Q-66 82 -64 74Z',RD,'#5a0a10',1.6)
  for(const x of[-48,-24,0,24,48])e(c,x,90-Math.abs(x)*.25,2.4,2.4,'#fff4f0')
  // face
  fk(c,'M-48 -22 C-49 14 -36 32 -18 44 Q-7 51 0 51 Q7 51 18 44 C36 32 49 14 48 -22 C48 -72 -48 -72 -48 -22Z',SK,L,2)
  const o=i!=12&&i!=13
  eye(c,1,o);eye(c,-1,o)
  e(c,31,23,8.5,4,'rgba(255,100,110,.4)');e(c,-31,23,8.5,4,'rgba(255,100,110,.4)')
  k(c,'M2 23 L0 25.5',L,1.4)
  fk(c,'M-9 33 Q0 37 9 33 Q5 41 0 41 Q-5 41 -9 33Z','#c4404a',L,1.4)
  f(c,'M-4 39 Q0 37 4 39 Q2 41 0 41 Q-2 41 -4 39Z','#ff8f8f')
  e(c,-47,30,2.6,2.6,GO);e(c,47,30,2.6,2.6,GO)
  // side locks and a side-swept fringe
  for(const s of[-1,1])fk(c,`M${s*40} -26 Q${s*58} 6 ${s*52} ${50+sw*s*2} Q${s*60} 64 ${s*54+sw*2} 76 Q${s*44} 60 ${s*42} 30 Q${s*38} 30 ${s*35} 34 Q${s*41} 6 ${s*40} -26Z`,HR,HD,1.6)
  fk(c,bang([54,-14,49,12,42,-14,36,-2,28,-20,18,-6,8,-26,-4,-10,-14,-34,-24,-16,-32,-28,-42,-8,-46,-20,-50,8,-54,-14],' C-62 -84 62 -84 54 -14Z'),HR,HD,1.8)
  f(c,'M-34 -46 Q-4 -62 28 -50 Q-4 -54 -34 -46Z',HL)
  carnation(c,-46,-36,15);for(const q of[-.3,.9])e(c,-36+Math.cos(q)*14,-36+Math.sin(q)*14,7,3,'#2e7d36',q)
  // fan fluttering beside her
  c.save();c.translate(64,52);c.rotate(-.25+sw*.18)
  for(let j=0;j<9;j++){
    const a0=-Math.PI*.95+j*Math.PI*.8/9,a1=a0+Math.PI*.8/9,C=Math.cos,S=Math.sin
    fk(c,`M0 0 L${C(a0)*42} ${S(a0)*42} Q${C((a0+a1)/2)*47} ${S((a0+a1)/2)*47} ${C(a1)*42} ${S(a1)*42}Z`,j%2?YE:RD,'#5a0a10',1.1)
    k(c,`M${C(a0)*35} ${S(a0)*35} Q${C((a0+a1)/2)*39} ${S((a0+a1)/2)*39} ${C(a1)*35} ${S(a1)*35}`,j%2?'#e09a00':'#8a0a18',.9)
  }
  e(c,0,0,3,3,GO);c.strokeStyle='#5a0a10';c.lineWidth=1;c.stroke()
  c.restore()
  fk(c,'M62 52 Q66 42 74 44 Q80 48 78 56 Q74 64 66 62 Q60 58 62 52Z',SK,L,1.6)
  k(c,'M66 48 Q72 47 76 50',L,1)
  fk(c,'M60 60 Q70 58 76 62 L72 72 Q64 70 58 72Z',RD,'#5a0a10',1.5)
}
export default(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.fillStyle=RD;c.fillRect(X,Y,W,H)
  c.fillStyle=YE;c.fillRect(X,Y+H/4,W,H/2)
  c.save();c.translate(X+W/3,Y+H/2);c.scale(.6,.6);arms(c);c.restore()
  c.translate(X+W*.69,Y+56);c.scale(.6,.6);girl(c,t,i)
  c.restore()
  const s=c.getImageData(0,0,256,256).data,d=c.createImageData(256,256),D=d.data
  const o=x=>{const u=(x-X)/W;return A*u*Math.sin(T*(KW*u-t))}
  for(let x=X;x<X+W;x++){
    const u=(x-X)/W,y0=o(x),g=1+.13*Math.cos(T*(KW*u-t))*Math.min(1,u*5)
    for(let y=Y-8;y<Y+H+8;y++){
      const sy=y-y0,a=Math.floor(sy),fr=sy-a,P=(a*256+x)*4,Q=P+1024,R=(y*256+x)*4
      if(a<0||a>254)continue
      for(let h=0;h<4;h++){const v=s[P+h]+(s[Q+h]-s[P+h])*fr;D[R+h]=h<3?v*g:v}
    }
  }
  c.putImageData(d,0,0)
  c.lineWidth=3;c.strokeStyle='#111'
  c.beginPath();for(let x=X;x<=X+W;x+=2)c.lineTo(x,Y+o(x))
  for(let x=X+W;x>=X;x-=2)c.lineTo(x,Y+H+o(x))
  c.closePath();c.stroke()
  c.fillStyle='#d9dde3';c.beginPath();c.rect(X-8,Y-6,6,192);c.fill();c.stroke()
  c.fillStyle='#ffc61a';c.beginPath();c.arc(X-5,Y-11,6,0,T);c.fill();c.stroke()
}

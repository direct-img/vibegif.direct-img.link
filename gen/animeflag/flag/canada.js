// Canada flag (red-white-red with the red maple leaf) waving on a pole, with a chestnut-haired anime girl in a cozy white sweater and mittens hugging the maple leaf in the white center; her hair blows in the wind and she winks with a little pink heart
export const frames=16,delay=85,rim=3
const T=Math.PI*2,X=16,W=236,H=118,Y=69,A=6,KW=1.1
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
const L='#4a2a22',SK='#ffe6d5',HR='#8e4f2c',HD='#55291a',HL='#cf8a5e',RD='#d52b1e',WT='#fffdf8',GR='#b9b2aa'
// the flag's 11-point maple leaf, right half (left mirrored)
const LF=[[0,-50],[8,-34],[11,-33],[19,-38],[14,-11],[16,-10],[27,-21],[30,-15],[31,-14],[45,-17],[40,-3],[41,-1],[46,2],[23,21],[22,23],[25,31],[4,27],[1.5,29],[3,51]]
const eye=(c,s,o)=>{
  c.save();c.scale(s,1)
  if(o){
    f(c,'M9 2 C11 -8 31 -10 36 -2 C37 8 31 16 22 16 C13 16 9 10 9 2Z','#fff');c.save();c.clip()
    e(c,22.5,4,9.8,12,'#8a4f2a');e(c,22,-4,12,7,'#4e2412');e(c,22.5,5,4.6,6.6,'#2a1208')
    e(c,22,12,7,3.6,'#e8a66a');e(c,s>0?18:26,-1,3.8,3.8,'#fff');e(c,s>0?27:17,10,1.9,1.9,'#fff')
    c.restore()
    f(c,'M8 3 Q12 -9 25 -10.5 Q37 -11 42 -1 L37 1 Q33 -7 24 -7.5 Q13 -7 9 5Z',L)
    k(c,'M13 15.5 Q22 18.5 31 13',L,1.3)
  }else{k(c,'M9 6 Q22 -6 36 5',L,3);k(c,'M36 5 L41 7',L,2)}
  k(c,'M13 -18 Q23 -22 33 -18',HD,1.8)
  c.restore()
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),cw=Math.cos(T*t)
  // long hair behind, the right side blowing out in the wind
  fk(c,`M-50 -14 C-62 -78 62 -78 50 -14 C56 20 60 50 ${74+sw*3} 78 Q${88+sw*5} ${96+cw*3} ${102+sw*8} ${108+cw*4} Q84 110 70 104 Q74 118 ${84+sw*6} ${132+cw*3} Q62 128 52 120 L-52 120 Q-62 128 -70 132 Q-64 116 -62 100 Q-66 108 -74 112 Q-60 80 -58 40 C-56 20 -54 0 -50 -14Z`,HR,HD,2)
  k(c,`M54 30 Q62 60 ${80+sw*4} ${90+cw*2} M56 60 Q62 86 ${72+sw*3} ${112+cw*2} M-54 40 Q-58 70 -64 100`,HD,1.4)
  // sweater, arms around the leaf
  f(c,'M-12 30 L-13 70 L13 70 L12 30Z',SK)
  f(c,'M-13 38 Q0 58 13 38 L13 50 Q0 64 -13 50Z','#f3c3ad')
  fk(c,'M-14 60 Q-38 64 -58 72 Q-74 80 -76 110 L-78 170 L78 170 L76 110 Q74 80 58 72 Q38 64 14 60 Q0 72 -14 60Z',WT,L,2.2)
  k(c,'M-12 64 Q0 75 12 64',GR,1.4)
  for(const s of[-1,1]){const a=`M${s*62} 80 Q${s*80} 98 ${s*58} 114`;c.lineCap='round';k(c,a,L,20);k(c,a,WT,16.5);k(c,`M${s*72} 112 Q${s*66} 116 ${s*62} 114`,GR,1.4)}
  // the maple leaf held against her chest
  c.save();c.translate(0,108);c.scale(1.15,1.15)
  c.beginPath();for(const[x,y]of LF)c.lineTo(x,y);for(const[x,y]of[...LF].reverse())c.lineTo(-x,y);c.closePath()
  c.fillStyle=RD;c.fill()
  c.restore()
  for(const s of[-1,1]){
    c.save();c.translate(s*54,110);c.scale(s,1)
    fk(c,'M-6 -11 Q6 -14 10 -4 Q13 6 6 11 Q-2 15 -7 9 Q-11 2 -6 -11Z',WT,L,2)
    fk(c,'M-4 -4 Q-14 -7 -14 0 Q-13 5 -4 4Z',WT,L,1.8)
    c.restore()
  }
  // face
  fk(c,'M-48 -22 C-49 14 -36 32 -18 44 Q-7 51 0 51 Q7 51 18 44 C36 32 49 14 48 -22 C48 -72 -48 -72 -48 -22Z',SK,L,2)
  const w=i>=9&&i<=11
  eye(c,1,!w);eye(c,-1,1)
  e(c,31,23,8.5,4,'rgba(255,110,120,.4)');e(c,-31,23,8.5,4,'rgba(255,110,120,.4)')
  k(c,'M2 23 L0 25.5',L,1.4)
  w?fk(c,'M-9 32 Q0 35 9 32 Q6 44 0 44 Q-6 44 -9 32Z','#c4504f',L,1.4):fk(c,'M-8 33 Q0 36 8 33 Q5 41 0 41 Q-5 41 -8 33Z','#c4504f',L,1.4)
  f(c,'M-4 39 Q0 37 4 39 Q2 41.5 0 41.5 Q-2 41.5 -4 39Z','#ff8f8f')
  // side locks and fringe
  fk(c,`M-40 -26 Q-58 6 -54 ${56+sw*2} Q-47 36 -41 22 Q-38 30 -35 34 Q-41 6 -40 -26Z`,HR,HD,1.6)
  fk(c,`M40 -26 Q58 6 ${60+sw*3} ${58+cw*2} Q48 36 41 22 Q38 30 35 34 Q41 6 40 -26Z`,HR,HD,1.6)
  fk(c,bang([54,-14,49,14,41,-14,35,0,28,-22,18,-6,10,-28,1,-10,-7,-30,-16,-9,-25,-22,-34,0,-41,-14,-48,14,-54,-14],' C-62 -84 62 -84 54 -14Z'),HR,HD,1.8)
  if(w){const h=(i-8)/3,x=58+h*14,y=-14-h*16,r=4+h*3
    fk(c,`M${x} ${y+r} C${x-r*2} ${y-r*.3} ${x-r*.9} ${y-r*1.6} ${x} ${y-r*.5} C${x+r*.9} ${y-r*1.6} ${x+r*2} ${y-r*.3} ${x} ${y+r}Z`,'#ff7aa0','#9a2a4a',1.6)}
  k(c,`M-6 -66 Q${4+sw*2} -84 ${16+sw*4} -80`,HD,5);k(c,`M-6 -66 Q${4+sw*2} -84 ${16+sw*4} -80`,HR,2.5)
  f(c,'M-30 -48 Q0 -62 30 -48 Q0 -54 -30 -48Z',HL)
}
export default(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.fillStyle='#d52b1e';c.fillRect(X,Y,W,H)
  c.fillStyle='#fff';c.fillRect(X+W/4,Y,W/2,H)
  c.translate(X+W/2,Y+32);c.scale(.5,.5);girl(c,t,i)
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
  c.fillStyle='#d9dde3';c.beginPath();c.rect(X-8,Y-6,6,174);c.fill();c.stroke()
  c.fillStyle='#ffc61a';c.beginPath();c.arc(X-5,Y-11,6,0,T);c.fill();c.stroke()
}

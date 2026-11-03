// Ukraine flag (blue over yellow) waving on a pole, with a smiling blonde anime girl in the middle wearing a flower vinok wreath with fluttering ribbons, braids, a red bead necklace and an embroidered vyshyvanka blouse; she blinks
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
// hair fringe: zigzag of notch/tip points, each lock side bowed out, closed over the crown
const bang=(a,top)=>{
  let s=`M${a[0]} ${a[1]}`
  for(let j=2;j<a.length;j+=2){
    const[u,v,x,y]=a.slice(j-2,j+2),n=y>v?[u,v]:[x,y],m=y>v?[x,y]:[u,v]
    s+=` Q${n[0]+(m[0]-n[0])*.15} ${n[1]+(m[1]-n[1])*.7} ${x} ${y}`
  }
  return s+top
}
const L='#4a2a22',SK='#ffe6d5',HR='#f6d27a',HD='#c98f2e',HL='#fff4c8',RD='#d7262b'
const eye=(c,s,o)=>{
  c.save();c.scale(s,1)
  if(o){
    f(c,'M9 2 C11 -8 31 -10 36 -2 C37 8 31 16 22 16 C13 16 9 10 9 2Z','#fff');c.save();c.clip()
    e(c,22.5,4,9.8,12,'#2f6fd6');e(c,22,-4,12,7,'#173f94');e(c,22,5,4.6,6.6,'#0d2560')
    e(c,22,12,7,3.6,'#80c4ff');e(c,s>0?18:26,-1,3.8,3.8,'#fff');e(c,s>0?27:17,10,1.9,1.9,'#fff')
    c.restore()
    f(c,'M8 3 Q12 -9 25 -10.5 Q37 -11 42 -1 L37 1 Q33 -7 24 -7.5 Q13 -7 9 5Z',L)
    k(c,'M13 15.5 Q22 18.5 31 13',L,1.3)
  }else{k(c,'M7 3 Q22 13 37 1',L,3);k(c,'M37 1 L41 -1',L,2)}
  k(c,'M13 -18 Q23 -22 33 -18',HD,1.8)
  c.restore()
}
const dia=(c,x,y,r)=>{f(c,`M${x} ${y-r} L${x+r} ${y} L${x} ${y+r} L${x-r} ${y}Z`,RD);e(c,x,y,r*.35,r*.35,'#222')}
const flower=(c,x,y,r,n,a,b,ro=0)=>{
  c.strokeStyle='rgba(74,42,34,.55)';c.lineWidth=1
  for(let j=0;j<n;j++){const q=ro+j*T/n;e(c,x+Math.cos(q)*r*.55,y+Math.sin(q)*r*.55,r*.5,r*.33,a,q);c.stroke()}
  e(c,x,y,r*.38,r*.38,b);c.stroke()
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t)
  // ribbons tied to the vinok streaming in the wind
  ;['#e8322f','#ffd23f','#3aa655','#ff8a1f','#ff6fa8','#ffffff'].forEach((a,j)=>{
    let s=`M${38+j*2} ${-48+j*5}`
    for(let u=.1;u<1.01;u+=.1)s+=` L${38+j*2+u*112} ${-48+j*5+u*(44+j*6)+Math.sin(T*(u*1.3-t)+j*.9)*10*u}`
    c.lineCap='butt';k(c,s,L,8);k(c,s,a,5.5)
  })
  c.lineCap='round'
  fk(c,'M-52 -10 C-62 -80 62 -80 52 -10 C56 20 54 48 46 64 L-46 64 C-54 48 -56 20 -52 -10Z',HR,HD,2)
  // neck, blouse with embroidery, bead necklace
  f(c,'M-12 30 L-13 74 L13 74 L12 30Z',SK)
  f(c,'M-13 38 Q0 58 13 38 L13 50 Q0 64 -13 50Z','#f3c3ad')
  fk(c,'M-13 63 Q-34 68 -60 77 Q-86 88 -92 140 L-94 200 L94 200 L92 140 Q86 88 60 77 Q34 68 13 63 Q0 74 -13 63Z','#fdfcf6',L,2.2)
  k(c,'M-62 100 Q-66 140 -64 200 M62 100 Q66 140 64 200',L,1.3)
  for(const s of[-1,1])for(let j=0;j<9;j++)dia(c,s*(52+j*.8)+(j%2?s*4:0),84+j*10,3.4)
  for(let j=0;j<8;j++)dia(c,0,92+j*9,3.6)
  ;[[64,74,3],[70,83,3.2],[77,93,3.4]].forEach(([y,b,r],q)=>{
    for(let j=0;j<=10;j++){const u=j/10-.5;e(c,u*(34+q*12),y+(b-y)*(1-4*u*u),r,r,'#d4242e');e(c,u*(34+q*12)-r*.3,y+(b-y)*(1-4*u*u)-r*.35,r*.3,r*.3,'#ff9a9a')}
  })
  // braids over the shoulders
  for(const s of[-1,1]){
    for(let j=0;j<8;j++){
      c.save();c.translate(s*(37+j*1.5)+sw*j*.35,36+j*10.5);c.scale(j%2?1:-1,1)
      fk(c,'M-9 -6 Q3 -11 9 5 Q-3 9 -9 -6Z',HR,HD,1.5);k(c,'M-4 -5 Q2 -6 5 0',HL,1.4)
      c.restore()
    }
    const x=s*49+sw*3
    fk(c,`M${x-5} 120 Q${x} 140 ${x+s*2} 146 Q${x+6} 134 ${x+5} 120Z`,HR,HD,1.5)
    fk(c,`M${x-6} 117 L${x+6} 117 L${x+6} 123 L${x-6} 123Z`,RD,L,1.2)
  }
  // face
  fk(c,'M-48 -22 C-49 14 -36 32 -18 44 Q-7 51 0 51 Q7 51 18 44 C36 32 49 14 48 -22 C48 -72 -48 -72 -48 -22Z',SK,L,2)
  const o=i!=10&&i!=11
  eye(c,1,o);eye(c,-1,o)
  e(c,31,23,8.5,4,'rgba(255,110,120,.35)');e(c,-31,23,8.5,4,'rgba(255,110,120,.35)')
  k(c,'M2 23 L0 25.5',L,1.4)
  fk(c,'M-8 33 Q0 36 8 33 Q5 42 0 42 Q-5 42 -8 33Z','#c4504f',L,1.4)
  f(c,'M-4 39 Q0 37 4 39 Q2 41.5 0 41.5 Q-2 41.5 -4 39Z','#ff8f8f')
  // side locks and fringe
  for(const s of[-1,1])fk(c,`M${s*40} -26 Q${s*58} 6 ${s*54} ${54+sw*s*2} Q${s*47} 36 ${s*41} 22 Q${s*38} 30 ${s*35} 34 Q${s*41} 6 ${s*40} -26Z`,HR,HD,1.6)
  fk(c,bang([54,-14,48,16,40,-14,34,0,27,-22,17,-8,9,-28,0,-12,-8,-30,-17,-10,-26,-22,-35,0,-41,-14,-48,16,-54,-14],' C-62 -84 62 -84 54 -14Z'),HR,HD,1.8)
  f(c,'M-30 -48 Q0 -62 30 -48 Q0 -54 -30 -48Z',HL)
  // vinok wreath: leaves, then poppies, daisies and a sunflower
  for(let j=0;j<13;j++){const q=Math.PI*(1.08+j*.07);e(c,Math.cos(q)*56,-34+Math.sin(q)*32,8,3.8,j%2?'#3f9a45':'#2e7d36',q+1.2)}
  ;[[-52,-38,10,'p'],[-40,-55,11,'d'],[-22,-66,12,'p'],[0,-70,15,'s'],[22,-66,12,'p'],[40,-55,11,'d'],[52,-38,10,'p']].forEach(([x,y,r,q])=>
    q=='s'?flower(c,x,y,r,12,'#ffc61a','#7a4a1c'):q=='p'?flower(c,x,y,r,5,'#e8322f','#2a1a14',.3):flower(c,x,y,r,8,'#fff','#ffcf33'))
}
export default(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.fillStyle='#0057b7';c.fillRect(X,Y,W,H/2)
  c.fillStyle='#ffd700';c.fillRect(X,Y+H/2,W,H/2)
  c.translate(X+W/2+2,Y+56);c.scale(.66,.66);girl(c,t,i)
  c.restore()
  // ripple the cloth: shift each column, shade by slope
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

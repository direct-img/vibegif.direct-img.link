// Egypt flag (red-white-black with the gold Eagle of Saladin in the centre) waving on a pole, with a black-haired anime girl at the hoist side wearing a gold circlet and a beaded gold collar, resting her hands on the black stripe and holding a blue lotus flower; she blinks and the lotus sways
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
const L='#3a1e14',SK='#f2caa4',HR='#1d1a22',HD='#000',HL='#4a4a66',GO='#c99a06',GD='#6e5200',GL='#f2cf4a'
// Eagle of Saladin, head turned to the viewer's left, gold and white shield, scroll in its talons
const eagle=c=>{
  c.lineJoin='round'
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    fk(c,'M7 -12 Q14 -28 24 -38 Q33 -46 42 -45 Q37 -30 40 -14 Q42 -2 37 10 L33 3 L31 12 L27 4 L24 12 L21 3 L18 10 L13 0Z',GO,GD,1.4)
    k(c,'M16 -22 Q26 -30 36 -38 M14 -12 Q26 -16 38 -24 M14 -2 Q26 -4 38 -8',GD,1)
    k(c,'M22 -32 Q30 -38 38 -42',GL,1.3)
    c.restore()
  }
  fk(c,'M-8 24 L-13 37 L-5 33 L0 39 L5 33 L13 37 L8 24Z',GO,GD,1.3)
  fk(c,'M-10 -18 Q0 -24 10 -18 Q14 2 9 26 L-9 26 Q-14 2 -10 -18Z',GO,GD,1.4)
  fk(c,'M-6 -20 Q-9 -31 -4 -38 Q2 -43 6 -37 Q9 -29 6 -20Z',GO,GD,1.3)
  fk(c,'M-5 -38 L-12 -35 Q-10 -32 -5 -33Z',GL,GD,1.1)
  e(c,-1.5,-36.5,1.3,1.3,GD)
  // shield on its breast
  fk(c,'M-7 -11 L7 -11 L7 4 Q7 12 0 15 Q-7 12 -7 4Z','#fff',GD,1.3)
  f(c,'M-2.3 -11 L2.3 -11 L2.3 14 L-2.3 14Z',GO)
  p(c,'M-7 -11 L7 -11 L7 4 Q7 12 0 15 Q-7 12 -7 4Z');c.strokeStyle=GD;c.lineWidth=1.3;c.stroke()
  // talons and scroll
  fk(c,'M-26 36 Q-30 39 -27 43 L27 43 Q30 39 26 36Z','#fff',GD,1.3)
  k(c,'M-20 39.5 L20 39.5',GO,1.4)
  for(const x of[-7,5])k(c,`M${x} 30 L${x-1} 36 M${x+3} 31 L${x+3} 36`,GD,1.5)
}
const eye=(c,s,o)=>{
  c.save();c.scale(s,1)
  if(o){
    f(c,'M9 2 C11 -8 31 -10 36 -2 C37 8 31 16 22 16 C13 16 9 10 9 2Z','#fff');c.save();c.clip()
    e(c,22.5,4,9.8,12,'#8a5214');e(c,22,-4,12,7,'#3e2006');e(c,22.5,5,4.6,6.6,'#1e0e02')
    e(c,22,12,7,3.6,'#f2c050');e(c,s>0?18:26,-1,3.8,3.8,'#fff');e(c,s>0?27:17,10,1.9,1.9,'#fff')
    c.restore()
    f(c,'M8 3 Q12 -9 25 -10.5 Q37 -11 42 -1 L44 -5 L46 -3 L38 2 Q33 -7 24 -7.5 Q13 -7 9 5Z',L)
    k(c,'M13 15.5 Q22 18.5 31 13',L,1.3)
  }else{k(c,'M7 3 Q22 13 37 1',L,3);k(c,'M37 1 L45 -3',L,2)}
  k(c,'M12 -16 Q23 -21 34 -16',HD,2)
  c.restore()
}
const lotus=(c,a)=>{
  c.save();c.rotate(a)
  k(c,'M0 0 Q-2 10 1 18','#2e7d36',3)
  e(c,-9,-1,8,3.4,'#3a9a46',.5);e(c,9,-1,8,3.4,'#3a9a46',-.5)
  for(const[x,r,q]of[[-9,-.7,'#5f86e8'],[9,.7,'#5f86e8'],[-5,-.3,'#7fa4ff'],[5,.3,'#7fa4ff'],[0,0,'#a8c4ff']]){
    c.save();c.translate(x*.4,-2);c.rotate(r)
    fk(c,'M0 0 Q-6 -8 0 -19 Q6 -8 0 0Z',q,'#26408e',1);c.restore()
  }
  c.restore()
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t),cw=Math.cos(T*t)
  // long straight black hair behind
  fk(c,'M-52 -14 C-62 -80 62 -80 52 -14 L58 110 L-58 110 L-52 -14Z',HR,HD,2)
  // linen dress and beaded gold collar
  f(c,'M-12 30 L-13 72 L13 72 L12 30Z',SK)
  f(c,'M-13 38 Q0 58 13 38 L13 50 Q0 64 -13 50Z','#dca47c')
  fk(c,'M-14 62 Q-38 66 -58 74 Q-76 84 -80 130 L-82 200 L82 200 L80 130 Q76 84 58 74 Q38 66 14 62 Q0 74 -14 62Z','#fbfaf4','#5a4a3a',2.2)
  k(c,'M-40 120 Q-44 160 -42 200 M40 120 Q44 160 42 200 M0 110 L0 200',  '#d8d2c4',1.4)
  ;[[GO,24],['#2aa8a8',30],[GO,35],['#2c4cb8',41],[GO,46],['#c8502a',52]].forEach(([a,r])=>{
    c.beginPath();c.ellipse(0,60,r+12,r*.62+4,0,0,Math.PI);c.strokeStyle=a;c.lineWidth=6.5;c.stroke()
  })
  for(let j=0;j<=14;j++){const q=j/14*Math.PI;e(c,Math.cos(q)*66,60+Math.sin(q)*42.5,2.8,3.6,j%2?'#2c4cb8':GO)}
  c.beginPath();c.ellipse(0,60,69,45,0,0,Math.PI);c.strokeStyle=GD;c.lineWidth=1.2;c.stroke()
  // face
  fk(c,'M-48 -22 C-49 14 -36 32 -18 44 Q-7 51 0 51 Q7 51 18 44 C36 32 49 14 48 -22 C48 -72 -48 -72 -48 -22Z',SK,L,2)
  const o=i!=6&&i!=7
  eye(c,1,o);eye(c,-1,o)
  e(c,31,23,8.5,4,'rgba(240,90,90,.35)');e(c,-31,23,8.5,4,'rgba(240,90,90,.35)')
  k(c,'M2 23 L0 25.5',L,1.4)
  k(c,'M-8 34 Q0 40 8 34',L,1.8)
  // straight-cut side locks with gold cuffs, blunt fringe, circlet
  for(const s of[-1,1]){
    fk(c,`M${s*38} -30 Q${s*58} 0 ${s*56} 52 L${s*40} 52 Q${s*42} 10 ${s*36} -10Z`,HR,HD,1.6)
    fk(c,`M${s*39} 36 L${s*57} 36 L${s*57} 44 L${s*39} 44Z`,GO,GD,1.2)
    e(c,s*46,30+(s>0?sw:cw)*1.5,3,4.5,GO)
  }
  fk(c,'M-54 -14 C-60 -84 60 -84 54 -14 L50 -6 L44 -12 L36 -6 L28 -12 L20 -6 L12 -12 L4 -6 L-4 -12 L-12 -6 L-20 -12 L-28 -6 L-36 -12 L-44 -6 L-50 -12Z',HR,HD,1.8)
  f(c,'M-30 -48 Q0 -62 30 -48 Q0 -54 -30 -48Z',HL)
  k(c,'M-52 -30 Q0 -46 52 -30',GD,6.5);k(c,'M-52 -30 Q0 -46 52 -30',GO,4.5)
  fk(c,'M0 -48 Q-7 -40 0 -32 Q7 -40 0 -48Z','#2c6ad8',GD,1.2)
}
// hands resting on the black stripe, one holding a blue lotus
const hands=(c,t)=>{
  c.save();c.translate(-30,96);lotus(c,-.2+Math.sin(T*t)*.12);c.restore()
  for(const[x,s]of[[-30,1],[34,-1]]){
    c.save();c.translate(x,108);c.scale(s,1)
    fk(c,'M-10 4 Q-11 -6 -2 -8 Q8 -9 10 -2 Q11 4 9 6Z',SK,L,1.6)
    k(c,'M-3 -7 Q-1 -2 -2 5 M3 -7 Q5 -2 4 5',L,1)
    c.restore()
  }
}
export default(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.fillStyle='#c8102e';c.fillRect(X,Y,W,H/3)
  c.fillStyle='#fff';c.fillRect(X,Y+H/3,W,H/3)
  c.save();c.translate(X+44,Y+39);c.scale(.55,.55);girl(c,t,i);c.restore()
  c.save();c.translate(X+W/2,Y+H/2-1);c.scale(.54,.54);eagle(c);c.restore()
  c.fillStyle='#000';c.fillRect(X,Y+H*2/3,W,H/3)
  c.translate(X+44,Y+39);c.scale(.55,.55);hands(c,t)
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

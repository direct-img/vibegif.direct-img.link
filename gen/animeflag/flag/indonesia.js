// Indonesia flag (red over white) waving on a pole, with a smiling black-haired anime girl in the middle wearing a white lace kebaya with a brown batik shawl, a hair bun with strands of jasmine flowers and wobbling gold flower hairpins; she blinks
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
const L='#3a1e14',SK='#f2c8a0',HR='#1e1719',HD='#000',HL='#5a4a56',GO='#e2aa1c',GD='#7a5200',BT='#6e3e1a'
const eye=(c,s,o)=>{
  c.save();c.scale(s,1)
  if(o){
    f(c,'M9 2 C11 -8 31 -10 36 -2 C37 8 31 16 22 16 C13 16 9 10 9 2Z','#fff');c.save();c.clip()
    e(c,22.5,4,9.8,12,'#6a3a18');e(c,22,-4,12,7,'#32160a');e(c,22.5,5,4.6,6.6,'#180a04')
    e(c,22,12,7,3.6,'#dc9c58');e(c,s>0?18:26,-1,3.8,3.8,'#fff');e(c,s>0?27:17,10,1.9,1.9,'#fff')
    c.restore()
    f(c,'M8 3 Q12 -9 25 -10.5 Q37 -11 42 -1 L37 1 Q33 -7 24 -7.5 Q13 -7 9 5Z',L)
    k(c,'M13 15.5 Q22 18.5 31 13',L,1.3)
  }else{k(c,'M7 3 Q22 13 37 1',L,3);k(c,'M37 1 L41 -1',L,2)}
  k(c,'M12 -17 Q23 -22 34 -17',HD,2)
  c.restore()
}
const jas=(c,x,y,r,q=0)=>{
  for(let j=0;j<5;j++){const a=q+j*T/5;e(c,x+Math.cos(a)*r*.6,y+Math.sin(a)*r*.6,r*.6,r*.36,'#fffef6',a)}
  c.strokeStyle='#7a7468';c.lineWidth=.8;c.stroke();e(c,x,y,r*.28,r*.28,'#f2e27a')
}
const girl=(c,t,i)=>{
  const sw=Math.sin(T*t)
  // bun at the back of the head, hair behind
  fk(c,'M-32 -66 Q-34 -94 0 -94 Q34 -94 32 -66Z',HR,HD,2)
  k(c,'M-20 -84 Q0 -91 20 -84',HL,2)
  fk(c,'M-52 -14 C-62 -82 62 -82 52 -14 C54 4 50 18 36 26 L-36 26 C-50 18 -54 4 -52 -14Z',HR,HD,2)
  // gold kembang goyang pins wobbling on top of the bun
  ;[[-24,-.6],[0,0],[24,.6]].forEach(([x,a],j)=>{
    const w=a+Math.sin(T*t*2+j*2.1)*.25,l=j==1?16:13,y=-80-(j==1)*4,tx=x+Math.sin(w)*l,ty=y-Math.cos(w)*l
    k(c,`M${x} ${y} Q${x+Math.sin(w)*l*.2} ${y-l*.6} ${tx} ${ty}`,GD,2)
    for(let m=0;m<6;m++){const q=m*T/6+w;e(c,tx+Math.cos(q)*4.6,ty+Math.sin(q)*4.6,4,2.6,GO,q)}
    c.beginPath();c.arc(tx,ty,7.4,0,T);c.strokeStyle=GD;c.lineWidth=.9;c.stroke()
    e(c,tx,ty,2.6,2.6,'#d02a3a')
  })
  // neck and kebaya with lace edge, brooches
  f(c,'M-12 30 L-13 72 L13 72 L12 30Z',SK)
  f(c,'M-13 38 Q0 58 13 38 L13 50 Q0 64 -13 50Z','#dca47c')
  const kb='M-14 62 Q-38 66 -60 76 Q-84 88 -88 140 L-90 200 L90 200 L88 140 Q84 88 60 76 Q38 66 14 62 L0 110Z'
  fk(c,kb,'#fffdf6','#5a4a3a',2.2)
  for(const s of[-1,1]){
    let a=`M${s*14} 62`
    for(let j=1;j<=8;j++)a+=` Q${s*(14-j*1.75+3)} ${62+j*6-3} ${s*(14-j*1.75)} ${62+j*6}`
    k(c,a,'#c8bfae',4.5);k(c,a,'#fffdf6',2.5)
    for(let j=0;j<6;j++)e(c,s*(22+j*1.4),70+j*12,1.5,1.5,'#d8cfbe')
  }
  // batik shawl over her shoulder
  const sl='M30 66 Q50 70 64 78 Q34 130 -6 200 L-44 200 Q-4 130 30 66Z'
  c.save();p(c,sl);c.fillStyle=BT;c.fill();c.clip()
  for(let j=-8;j<14;j++){
    const y=60+j*12
    k(c,`M-60 ${y+60} Q-20 ${y+30} 20 ${y+10} Q50 ${y-4} 90 ${y-30}`,'#c8963a',3.2)
    k(c,`M-60 ${y+66} Q-20 ${y+36} 20 ${y+16} Q50 ${y+2} 90 ${y-24}`,'#f0dcb0',1.2)
  }
  c.restore();p(c,sl);c.strokeStyle='#3a1e0a';c.lineWidth=1.8;c.stroke()
  for(const y of[0,16,32])e(c,0,96+y,3.4,3.4,GO),c.strokeStyle=GD,c.lineWidth=1,c.stroke()
  // face
  fk(c,'M-48 -22 C-49 14 -36 32 -18 44 Q-7 51 0 51 Q7 51 18 44 C36 32 49 14 48 -22 C48 -72 -48 -72 -48 -22Z',SK,L,2)
  const o=i!=3&&i!=4
  eye(c,1,o);eye(c,-1,o)
  e(c,31,23,8.5,4,'rgba(240,90,90,.35)');e(c,-31,23,8.5,4,'rgba(240,90,90,.35)')
  k(c,'M2 23 L0 25.5',L,1.4)
  fk(c,'M-8 33 Q0 36 8 33 Q5 41 0 41 Q-5 41 -8 33Z','#b8404a',L,1.4)
  f(c,'M-4 39 Q0 37 4 39 Q2 41 0 41 Q-2 41 -4 39Z','#ff8f8f')
  // centre-parted hair sweeping to the sides
  for(const s of[-1,1])fk(c,`M${s*2} -60 Q${s*-2} -42 ${s*14} -26 Q${s*30} -14 ${s*42} -8 Q${s*50} 14 ${s*44} 40 Q${s*56} 20 ${s*54} -16 Q${s*52} -60 ${s*2} -62Z`,HR,HD,1.8)
  k(c,'M-10 -58 Q-28 -50 -40 -30 M10 -58 Q28 -50 40 -30',HL,1.8)
  // strands of jasmine hanging from the bun over her shoulder
  for(const[x0,d]of[[36,0],[44,5]])for(let j=0;j<8;j++){
    const u=j/7
    jas(c,x0+u*10+Math.sin(T*t+u*2)*u*3,-62+u*96+d,4.4,j*.7)
  }
  jas(c,-34,-64,6);jas(c,-24,-72,5.5,.5)
}
export default(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.fillStyle='#e70011';c.fillRect(X,Y,W,H/2)
  c.fillStyle='#fff';c.fillRect(X,Y+H/2,W,H/2)
  c.translate(X+W/2+2,Y+67);c.scale(.6,.6);girl(c,t,i)
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

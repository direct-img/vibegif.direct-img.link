// red retro tin robot head goes cross-eyed at a floating dust bunny, winds up "ah... ah..." and sneezes so hard its eyes, antenna and ear bolts boing out on springs in a puff of dust, then snap back and it blushes
export const frames=30,rim=3
export const delay=[120,120,120,120,100,100,100,110,100,100,110,240,150,60,60,60,60,60,60,60,60,60,60,50,50,110,110,110,110,520]
const P=Math.PI,{sin,cos,exp,max,min,hypot}=Math
const W=[0,0,0,0,.25,.45,.55,.4,.6,.85,1,1.08]
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const coil=(c,ax,ay,bx,by,r,n)=>{
  const L=hypot(bx-ax,by-ay);if(L<1)return
  const ux=(bx-ax)/L,uy=(by-ay)/L,N=n*16
  c.beginPath();c.moveTo(ax,ay)
  for(let k=1;k<N;k++){const a=k/16*2*P,q=L*k/N-r*.5*cos(a)+r*.5,p=r*sin(a);c.lineTo(ax+ux*q-uy*p,ay+uy*q+ux*p)}
  c.lineTo(bx,by)
  c.strokeStyle='#111';c.lineWidth=6;c.stroke();c.strokeStyle='#c9d1da';c.lineWidth=2.5;c.stroke();c.strokeStyle='#111'
}
const blob=(c,cs,col,lw=7)=>{c.lineWidth=lw;c.fillStyle=col
  for(const f of[0,1]){c.beginPath();for(const[x,y,r]of cs)if(r>.5){c.moveTo(x+r,y);c.arc(x,y,r,0,2*P)}f?c.fill():c.stroke()}}
const fluff=(x,y,r)=>[[x,y,r*.75],...[0,1,2,3,4,5,6].map(k=>[x+cos(k*.9)*r*.62,y+sin(k*.9)*r*.62,r*.45])]
const dust=(c,x,y,r,i)=>{blob(c,fluff(x,y,r),'#a39c90',5)
  c.strokeStyle='#6f685d';c.lineWidth=1.5;for(let j=0;j<6;j++){const a=j*1.1+i*.5;c.beginPath();c.moveTo(x+cos(a)*r*.3,y+sin(a)*r*.3);c.lineTo(x+cos(a)*r*1.35,y+sin(a)*r*1.35);c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const w=i<12?W[i]:0,k=i-12
  const e=i<12?0:i<23?.78+.42*cos(k*1.7)*exp(-k*.3):i<24?.35:0
  const hy=140-7*w+(i==12?10:i==13?6:i==14?3:0),hx=128,sq=1-.03*w
  // dust bunny drifting toward the nose
  let dx=0,dy=0
  if(i<9){const u=i/8;dx=246+(hx-246)*u**.8;dy=96+(hy+9-96)*u-14*sin(u*P*1.5)*(1-u)}
  c.save();c.translate(hx,hy);c.scale(1/sq,sq)
  // neck and shoulders
  c.lineWidth=6
  rr(c,-96,92,192,60,30);c.fillStyle='#c4483a';c.fill();c.stroke()
  for(let j=0;j<3;j++){rr(c,-26+j*2,58+j*11,52-j*4,13,6);c.fillStyle=j%2?'#9aa6b2':'#c9d1da';c.fill();c.stroke()}
  // ear bolts
  for(const s of[-1,1]){
    const bx=s*(80+34*e),by=-6-10*e
    if(e>.05)coil(c,s*74,-6,bx,by,7,3)
    rr(c,s*76-(s>0?0:12),-22,12,32,4);c.fillStyle='#8a96a3';c.fill();c.stroke()
    c.save();c.translate(bx+s*6,by);c.rotate(e*s*2.5);c.beginPath()
    for(let j=0;j<6;j++)c.lineTo(11*cos(j*P/3),11*sin(j*P/3))
    c.closePath();c.fillStyle='#d6dde5';c.fill();c.lineWidth=5;c.stroke()
    c.beginPath();c.arc(0,0,4,0,2*P);c.fillStyle='#8a96a3';c.fill();c.lineWidth=3;c.stroke();c.restore()
  }
  // antenna
  const at=-70-14-52*e,aw=e*8*sin(k*2.2)
  coil(c,0,-70,aw,at+8,7,e>.05?5:2.5)
  c.beginPath();c.arc(aw,at,9,0,2*P);c.fillStyle=i>=12&&i<23?'#fff36b':'#ffd447';c.fill();c.lineWidth=6;c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(aw-3,at-3,2.5,0,2*P);c.fill()
  // head shell
  c.lineWidth=7;rr(c,-78,-72,156,148,30);c.fillStyle='#e0644f';c.fill()
  c.save();c.clip();c.fillStyle='#c4483a';c.fillRect(52,-80,40,170);c.fillRect(-90,62,190,20)
  c.fillStyle='#f39a86';c.fillRect(-64,-64,64,5);c.restore()
  rr(c,-78,-72,156,148,30);c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[-66,-60],[66,-60],[-66,64],[66,64]]){c.beginPath();c.arc(x,y,3,0,2*P);c.fill()}
  // face plate
  rr(c,-62,-52,124,114,20);c.fillStyle='#dfe5ec';c.fill();c.lineWidth=5;c.stroke()
  // nose vent
  const nv=i>=4&&i<12?1+.25*w:1
  rr(c,-11*nv,2,22*nv,14,5);c.fillStyle='#4a5560';c.fill();c.stroke()
  c.strokeStyle='#9aa6b2';c.lineWidth=2;for(const y of[6.5,11.5]){c.beginPath();c.moveTo(-7*nv,y);c.lineTo(7*nv,y);c.stroke()}
  c.strokeStyle='#111'
  // mouth
  const mo=i<12?w:i<23?1:i<25?.2:0
  if(mo>.15){c.beginPath();c.ellipse(0,38,14+10*mo,5+11*mo,0,0,2*P);c.fillStyle='#3a1f22';c.fill();c.lineWidth=5;c.stroke()
    c.fillStyle='#e8737f';c.beginPath();c.ellipse(0,38+6*mo,8+5*mo,3+3*mo,0,0,P);c.fill()}
  else{rr(c,-24,30,48,16,6);c.fillStyle='#4a5560';c.fill();c.lineWidth=5;c.stroke()
    c.strokeStyle='#9aa6b2';c.lineWidth=2.5;for(let x=-14;x<=14;x+=7){c.beginPath();c.moveTo(x,34);c.lineTo(x,42);c.stroke()}c.strokeStyle='#111'}
  // cheeks
  if(i>=24){c.fillStyle='#ff8fa3';for(const s of[-1,1]){c.beginPath();c.ellipse(s*44,20,10,5,0,0,2*P);c.fill()}
    c.strokeStyle='#e0566e';c.lineWidth=2;for(const s of[-1,1])for(const j of[-1,0,1]){c.beginPath();c.moveTo(s*44+j*6-2,24);c.lineTo(s*44+j*6+2,16);c.stroke()}c.strokeStyle='#111'}
  // eyes
  for(const s of[-1,1]){
    const ex=s*(30+44*e)+(i>12&&i<23?s*5*sin(k*1.9+s):0),ey=-18-40*e+(i>12&&i<23?4*cos(k*2.1):0),R=19*(1+.15*e)
    c.beginPath();c.arc(s*30,-18,22,0,2*P);c.fillStyle='#2c343c';c.fill();c.lineWidth=4;c.stroke()
    if(e>.05)coil(c,s*30,-18,ex,ey,7,6)
    c.beginPath();c.arc(ex,ey,R+5,0,2*P);c.fillStyle='#8a96a3';c.fill();c.lineWidth=5;c.stroke()
    c.beginPath();c.arc(ex,ey,R,0,2*P);c.fillStyle='#fffbe8';c.fill();c.lineWidth=3;c.stroke()
    c.save();c.beginPath();c.arc(ex,ey,R,0,2*P);c.clip()
    let px=0,py=0,pr=R*.42
    if(i<9){const a=Math.atan2(dy-hy-ey,dx-hx-ex),m=min(R*.45,hypot(dy-hy-ey,dx-hx-ex)/6);px=cos(a)*m;py=sin(a)*m}
    else if(i<12){px=-s*R*.28;py=R*.15}
    else if(i<23){pr=R*.22;px=R*.25*sin(k*2.4+s*2);py=R*.25*cos(k*1.8)}
    else if(i<29){px=-R*.35;py=R*.3}
    c.fillStyle='#111';c.beginPath();c.arc(ex+px,ey+py,pr,0,2*P);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(ex+px-pr*.35,ey+py-pr*.4,pr*.32,0,2*P);c.fill()
    const lid=i>=4&&i<12?min(.85,w*.8):i==27?1:i>=24&&i<29?.3:0
    if(lid>0){c.fillStyle='#b9c3cd';c.fillRect(ex-R,ey-R,2*R,2*R*lid);c.lineWidth=4;c.beginPath();c.moveTo(ex-R,ey-R+2*R*lid);c.lineTo(ex+R,ey-R+2*R*lid);c.stroke()}
    c.restore()
  }
  c.restore()
  if(i<9)dust(c,dx,dy,i<8?10:5,i)
  // sneeze cloud
  if(i>=12&&i<22){
    const g=(k+1)/10,sh=k<4?1:max(0,1-(k-3)/6),mx=hx,my=hy+38,cs=[]
    if(k<4)cs.push(...fluff(mx,my,(30+12*g)*(1-k*.2)))
    for(let j=0;j<11;j++){
      const a=-.35+(P+.7)*j/10,d=(30+85*g**.6)*(.8+.25*sin(j*2.7)),r=(16+12*g)*sh*(.85+.3*cos(j*1.7))
      cs.push(...fluff(mx+cos(a)*d*1.25,my+sin(a)*d*.75,r))
    }
    blob(c,cs,'#f3efe7',8)
    c.fillStyle='#dcd5c8';for(let j=0;j<11;j++){const a=-.2+(P+.4)*j/10,d=(60+120*g**.6);c.beginPath();c.arc(mx+cos(a)*d*1.2,my+sin(a)*d*.7,3*sh,0,2*P);c.fill()}
    if(k<4)dust(c,mx-30-34*k,my+6+22*k,10+4*k,i)
  }
  // motion lines
  if(i==12||i==13||i==23||i==24){
    c.lineWidth=5
    const L=i<14?[[40,40,22,22],[216,40,234,22],[20,140,4,140],[236,140,252,140]]:[[64,92,52,80],[192,92,204,80],[44,128,32,124],[212,128,224,124]]
    for(const[a,b,x,y]of L){c.beginPath();c.moveTo(a,b);c.lineTo(x,y);c.stroke()}
  }
}

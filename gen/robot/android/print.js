// 3D printer building a gray android bust layer by layer, the blue print head sweeping back and forth laying a hot orange layer as the gantry climbs; when finished the android's eyes light up cyan and blink, then the print slides off the bed and it starts over
const NL=16,H=10,Y0=214,PR=NL*2
export const frames=PR+14
export const delay=[...Array(frames)].map((_,i)=>i<PR?70:i<PR+8?120:70)
const P=Math.PI,K='#111',M='#dfe4ea'
// half-width profile of the bust (y, half width), smoothed with catmull-rom
const cp=[[214,62],[207,60],[199,54],[193,44],[189,30],[186,19],[181,16],[171,16],[166,20],[161,29],[154,37],[144,43],[128,46],[108,46],[90,44],[76,39],[66,31],[59,20],[55,9],[54,0]]
const prof=[]
for(let j=0;j<cp.length-1;j++){
  const[a,b,c,d]=[cp[Math.max(j-1,0)],cp[j],cp[j+1],cp[Math.min(j+2,cp.length-1)]]
  for(let s=0;s<1;s+=.125){
    const f=(k)=>.5*(2*b[k]+(-a[k]+c[k])*s+(2*a[k]-5*b[k]+4*c[k]-d[k])*s*s+(-a[k]+3*b[k]-3*c[k]+d[k])*s*s*s)
    prof.push([f(0),f(1)])
  }
}
prof.push([54,0])
const hw=y=>prof.reduce((m,p)=>Math.abs(p[0]-y)<Math.abs(m[0]-y)?p:m)[1]+(y>98&&y<126?14:0)
const sil=c=>{
  c.beginPath();prof.forEach(([y,w],j)=>j?c.lineTo(128+w,y):c.moveTo(128+w,y))
  for(const[y,w]of[...prof].reverse())c.lineTo(128-w,y)
  c.closePath()
}
const ln=(c,w,s,f)=>{c.beginPath();f();c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const bust=(c,hot,eyes)=>{
  const[F,G,Lc,Sh]=[[M,'#8996a3','#c2cad3','#c9d0d8'],['#ff8c42','#c95220','#e8702e','#e8702e'],['#f2c9a8','#a98a74','#e2b597','#e2b597']][hot]
  for(const x of[72,184]){
    c.beginPath();c.arc(x,112,13,0,2*P);c.fillStyle=F;c.fill();c.lineWidth=4;c.strokeStyle=K;c.stroke()
    c.beginPath();c.arc(x,112,6,0,2*P);c.fillStyle=eyes?'#5ff0ff':F;c.fill();c.lineWidth=2.5;c.strokeStyle=G;c.stroke()
  }
  sil(c);c.fillStyle=F;c.fill()
  c.save();sil(c);c.clip()
  for(let y=56;y<214;y+=5)ln(c,1,Lc,()=>{c.moveTo(0,y);c.lineTo(256,y)})
  c.fillStyle=Sh;c.fillRect(150,0,40,256)
  c.restore()
  // engraved details
  ln(c,2.5,G,()=>{
    c.moveTo(128,54);c.lineTo(128,72)
    for(const s of[-1,1]){
      c.moveTo(128+s*40,92);c.quadraticCurveTo(128+s*36,138,128+s*14,158)
      c.moveTo(128+s*24,201);c.quadraticCurveTo(128+s*34,192,128+s*52,200)
    }
    for(let k=0;k<3;k++){c.moveTo(118,80+k*5);c.lineTo(138,80+k*5)}
    for(const y of[170,176,182]){c.moveTo(113,y);c.lineTo(143,y)}
    c.moveTo(102,100);c.quadraticCurveTo(111,96,121,100);c.moveTo(135,100);c.quadraticCurveTo(145,96,154,100)
    c.moveTo(128,108);c.lineTo(128,128);c.lineTo(123,131)
    c.moveTo(116,143);c.lineTo(140,143)
  })
  for(const x of[111,145]){
    c.beginPath();c.moveTo(x-12,113);c.quadraticCurveTo(x,104,x+12,113);c.quadraticCurveTo(x,120,x-12,113)
    c.fillStyle=eyes?'#5ff0ff':hot?G:'#56616e';c.fill();c.lineWidth=2.5;c.strokeStyle=K;c.stroke()
    if(eyes){c.beginPath();c.arc(x-3,111,2,0,2*P);c.fillStyle='#fff';c.fill()}
  }
  sil(c);c.lineWidth=4;c.strokeStyle=K;c.stroke()
}
const box=(c,x,y,w,h,f,r=3)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=f;c.fill();c.lineWidth=4;c.strokeStyle=K;c.stroke()}
export default(c,t,i)=>{
  // state
  let k=NL,top=Y0-NL*H,nx=128,deposit=null,gy=top,eyes=0,slide=0
  if(i<PR){
    k=i>>1;const yb=Y0-k*H,yc=yb-H/2,w=hw(yc),dir=k%2,f=i%2?.92:.42
    top=yb;nx=dir?128+w-2*w*f:128-w+2*w*f;gy=yb-H
    deposit=[dir?nx:128-w-2,yb-H,dir?128+w+2-nx:nx-(128-w-2),H]
  }else if(i<PR+8){
    const u=i-PR;gy=top-H;nx=u?200:150;eyes=u>=2&&u!=5
  }else if(i<PR+12){
    slide=(i-PR-7)*58;gy=top-H;nx=200;eyes=1
  }else{const u=(i-PR-11)/3;gy=top-H+(Y0-H-top+H)*u;nx=200-82*u;k=0}
  // printer base with progress screen
  box(c,10,224,236,28,'#5d6876',6)
  box(c,26,231,64,14,'#14212c',3)
  const pg=i<PR?k/NL:i<PR+12?1:0
  c.fillStyle='#4fe3ef';c.fillRect(30,235,56*pg,6)
  c.beginPath();c.arc(222,238,6,0,2*P);c.fillStyle='#aab4bf';c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.arc(202,238,3,0,2*P);c.fillStyle=i<PR?'#ff8c42':'#5ee08c';c.fill()
  // bed
  box(c,40,Y0,176,10,'#c9a24a',2)
  // print
  c.save();c.translate(slide,0)
  if(i<PR){
    c.save();c.beginPath();c.rect(0,top+(k?H:0),256,256);c.clip();bust(c,0,0);c.restore()
    if(k){c.save();c.beginPath();c.rect(0,top,256,H);c.clip();bust(c,2,0);c.restore()}
    c.save();c.beginPath();c.rect(...deposit);c.clip();bust(c,1,0);c.restore()
  }else if(i<PR+12)bust(c,0,eyes)
  c.restore()
  // frame towers and top bar
  for(const x of[18,224]){box(c,x,12,14,214,'#7c8896',2);c.fillStyle='#a6b1bd';c.fillRect(x+3,18,3,204)}
  box(c,12,4,232,12,'#7c8896',4)
  // gantry bar and rail carriages
  const by=gy-26
  box(c,30,by-5,196,10,'#b9c2cb',3)
  for(const x of[14,220])box(c,x,by-9,22,18,'#3c4450',4)
  // print head: body, fan, brass nozzle
  box(c,nx-17,by-13,34,26,'#2f7fd6',5)
  c.beginPath();c.arc(nx,by,9,0,2*P);c.fillStyle='#1a2633';c.fill();c.lineWidth=3;c.strokeStyle=K;c.stroke()
  ln(c,2.5,'#7fa9d6',()=>{for(let q=0;q<3;q++){const a=q*2*P/3+i*1.1;c.moveTo(nx,by);c.lineTo(nx+7*Math.cos(a),by+7*Math.sin(a))}})
  box(c,nx-7,by+13,14,5,'#8a96a3',1)
  c.beginPath();c.moveTo(nx-6,by+18);c.lineTo(nx+6,by+18);c.lineTo(nx+2,gy-1);c.lineTo(nx-2,gy-1);c.closePath()
  c.fillStyle='#e0ab3c';c.fill();c.lineWidth=3;c.strokeStyle=K;c.stroke()
  if(i<PR){c.beginPath();c.arc(nx,gy+2,3,0,2*P);c.fillStyle='#ffd166';c.fill()}
}

// long deep purple haired girl rocking happily while hugging an open book to her chest, its long red ribbon bookmark flutters up beside her and a little star twinkles at the tip
const{sin,cos,PI,max,hypot}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#845ef7',HD='#5f3dc4',HL='#e5dbff',EYE='#fab005',ED='#e67700',TOP='#fff3bf',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',RB='#ff6b6b',RD='#c92a2a',CV='#63e6be',PG='#fffdf5',LN='#ced4da',ST='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const q=k%2?r*.45:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*q,sin(b)*q)}c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  const rk=.05*sin(T*t),hap=t>=.375&&t<.625,N=24
  const pts=[...Array(N+1)].map((_,k)=>{const s=k/N,u=1-s,bx=u*u*128+2*u*s*220+s*s*224,by=u*u*190+2*u*s*204+s*s*84,tx=2*u*(220-128)+2*s*(224-220),ty=2*u*(204-190)+2*s*(84-204),l=hypot(tx,ty),w=13*s*sin(T*(s*1.3-t*2))
    return[bx-ty/l*w,by+tx/l*w,-ty/l,tx/l,15*cos(s*(T+.9*sin(T*t)))]})
  c.save();c.translate(128,330);c.rotate(rk);c.translate(-128,-330)
  const H=f=>{c.save();c.translate(128,154);c.rotate(hap?-.05:0);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(204,34,220,110,222,200);c.lineTo(226,330);c.lineTo(30,330);c.lineTo(34,200);c.bezierCurveTo(36,110,52,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*16,188,128+d*30,190),c.quadraticCurveTo(128+d*30,210,128,216),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(i==13){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,149,x+15,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath()
    if(hap)c.moveTo(114,164),c.quadraticCurveTo(128,168,142,164),c.quadraticCurveTo(140,184,128,184),c.quadraticCurveTo(116,184,114,164),c.fill(),c.stroke(),c.save(),c.clip(),c.fillStyle=TG,c.beginPath(),c.ellipse(128,186,8,6,0,0,T),c.fill(),c.restore()
    else c.moveTo(118,168),c.quadraticCurveTo(123,174,128,169),c.quadraticCurveTo(133,174,138,168),c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,290)
    c.bezierCurveTo(40,74,88,36,128,36);c.bezierCurveTo(168,36,216,74,200,290);c.lineTo(180,290)
    c.quadraticCurveTo(186,200,180,160);c.lineTo(178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,104);c.lineTo(76,160);c.quadraticCurveTo(70,200,76,290);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*60,180),c.quadraticCurveTo(128+d*62,230,128+d*58,280),c.stroke()
    c.strokeStyle='#111';c.fillStyle=RB;c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(170,58),c.quadraticCurveTo(170+d*26,36,170+d*32,58),c.quadraticCurveTo(170+d*24,72,170,58),c.fill(),c.stroke()
    c.beginPath();c.arc(170,58,8,0,T);c.fill();c.stroke()
  })
  c.fillStyle=CV;c.lineWidth=6;c.beginPath();c.moveTo(128,196);c.quadraticCurveTo(94,180,52,188);c.lineTo(50,262);c.lineTo(206,262);c.lineTo(204,188);c.quadraticCurveTo(162,180,128,196);c.fill();c.stroke()
  for(const d of[-1,1]){c.fillStyle=PG;c.lineWidth=5;c.beginPath();c.moveTo(128,198);c.quadraticCurveTo(128+d*30,184,128+d*68,190);c.lineTo(128+d*68,262);c.lineTo(128,262);c.closePath();c.fill();c.stroke()
    c.strokeStyle=LN;c.lineWidth=4;c.beginPath();for(let k=0;k<4;k++){const y=208+k*12;c.moveTo(128+d*12,y+2);c.quadraticCurveTo(128+d*32,y-4,128+d*(k==3?40:56),y)}c.stroke();c.strokeStyle='#111'}
  c.lineWidth=5;c.beginPath();c.moveTo(128,198);c.lineTo(128,262);c.stroke()
  const L=pts.map(([x,y,nx,ny,w])=>[x+nx*w,y+ny*w]),R=pts.map(([x,y,nx,ny,w])=>[x-nx*w,y-ny*w]),[ex,ey]=pts[N],[qx,qy]=pts[N-1],el=hypot(ex-qx,ey-qy),tip=[ex-(ex-qx)/el*16,ey-(ey-qy)/el*16]
  for(let k=0;k<N;k++){c.fillStyle=pts[k][4]+pts[k+1][4]>0?RB:RD;c.beginPath();c.moveTo(...L[k]);c.lineTo(...L[k+1]);c.lineTo(...(k==N-1?tip:R[k+1]));c.lineTo(...R[k]);c.closePath();c.fill();c.lineWidth=1;c.strokeStyle=c.fillStyle;c.stroke()}
  c.fillStyle=pts[N][4]>0?RB:RD;c.beginPath();c.moveTo(...R[N-1]);c.lineTo(...tip);c.lineTo(...R[N]);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(...L[0]);for(const p of L.slice(1))c.lineTo(...p);c.lineTo(...tip);for(const p of R.slice().reverse())c.lineTo(...p);c.closePath();c.stroke()
  for(const d of[-1,1]){ds(c,26,16,TOP,()=>{c.moveTo(128+d*82,262);c.lineTo(128+d*72,230)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(128+d*68,222,11,13,d*.3,0,T);c.fill();c.stroke()}
  c.restore()
  c.fillStyle=ST;c.lineWidth=4;const s=.6+.4*max(0,sin(T*t*2));star(c,pts[N][0]-6,pts[N][1]-30,17*s,T*t/5)
  const s2=max(0,sin(T*(t+.5)*2));if(s2>.15)star(c,34,64,12*s2,0)
}

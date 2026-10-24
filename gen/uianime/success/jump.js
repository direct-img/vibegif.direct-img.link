// mint haired chibi girl in a pink dress jumping for joy with both arms up, eyes squeezed happy, while confetti rains down around her
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#8ce99a',HD='#37b24d',HL='#ebfbee',DR='#ffa8c5',DD='#f06595',SH='#ff6b6b',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',RB='#ffd43b',CF=['#ff6b6b','#ffd43b','#4dabf7','#b197fc','#69db7c','#ff922b']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const conf=(c,t,a)=>{for(let k=a;k<12;k+=2){const o=k*.37%1,p=(t+o)%1,x=18+k*20+8*sin(T*(p*2+o)),y=-14+p*280;c.save();c.translate(x,y);c.rotate(T*p*(k%3?1:-1)+k);c.scale(.3+.7*cos(T*p*2+k),1);c.fillStyle=CF[k%6];c.lineWidth=3;c.beginPath();c.rect(-5,-8,10,16);c.fill();c.stroke();c.restore()}}
export default(c,t)=>{
  const h=sin(PI*t),y=-26*h,Z=.62
  conf(c,t,0)
  c.save();c.translate(128,242);c.scale(1.08,1.08);c.translate(-128,-242)
  c.fillStyle='rgba(134,142,150,.35)';c.beginPath();c.ellipse(128,240,40-14*h,7-2*h,0,0,T);c.fill()
  for(const d of[-1,1]){const fx=128+d*(11+16*h),fy=232-14*h+y
    ds(c,16,9,SKIN,()=>{c.moveTo(128+d*9,206+y);c.lineTo(fx,fy-4)})
    c.lineWidth=5;c.fillStyle=SH;c.beginPath();c.ellipse(fx+d*3,fy,11,7,d*.3*h,0,T);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle=DR;c.beginPath();c.moveTo(112,164+y);c.lineTo(144,164+y);c.quadraticCurveTo(156,184,166,212+y)
  for(let k=1;k<=4;k++)c.quadraticCurveTo(166-k*19+9.5,220+y,166-k*19,212+y)
  c.quadraticCurveTo(100,184,112,164+y);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128,170+y),c.quadraticCurveTo(128+d*14,164+y,128+d*16,176+y),c.quadraticCurveTo(128+d*8,182+y,128,170+y),c.fill(),c.stroke()
  c.fillStyle=RB;c.beginPath();c.arc(128,172+y,4,0,T);c.fill();c.stroke()
  c.save();c.translate(128,116+y);c.scale(Z,Z);c.translate(-128,-128);c.lineWidth=9
  for(const d of[-1,1]){c.save();c.translate(128+d*62,88);c.rotate(d*(-.1+.35*(1-h)))
    c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*34,2,d*46,60,d*28,104);c.quadraticCurveTo(d*22,118,d*8,114);c.bezierCurveTo(d*22,74,d*6,32,0,0);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(d*12,16);c.bezierCurveTo(d*26,40,d*30,70,d*22,96);c.stroke();c.strokeStyle='#111';c.lineWidth=9
    c.fillStyle=RB;c.beginPath();c.arc(0,0,13,0,T);c.fill();c.stroke();c.restore()}
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,16,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=6;c.fillStyle=MO;c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.restore()
  for(const d of[-1,1]){const hx=128+d*(54-6*h),hy=150-48*h+y
    ds(c,16,9,SKIN,()=>{c.moveTo(128+d*14,172+y);c.lineTo(hx,hy)})
    c.lineWidth=5;c.fillStyle=DR;c.beginPath();c.ellipse(128+d*16,170+y,10,9,0,0,T);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,9,0,T);c.fill();c.stroke()}
  c.restore()
  conf(c,t,1)
}

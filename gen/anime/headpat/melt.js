// fluffy light-brown haired girl getting head pats, squishing down with happy ^^ eyes while flowers and sparkles float up
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#d4a373',HD='#b07d4f',HL='#f3dcc0',TOP='#a5d8ff',TD='#74c0fc',RIB='#f06595',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',HAND='#f8d0b0',SL='#748ffc'
const flower=(c,x,y,r,a,f)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=f;c.lineWidth=3.5;c.beginPath();for(let k=0;k<5;k++){const b=k*T/5;c.moveTo(cos(b)*r*1.5+r*.75,sin(b)*r*1.5);c.arc(cos(b)*r*1.5,sin(b)*r*1.5,r*.75,0,T)}c.stroke();c.fill();c.fillStyle='#ffd43b';c.beginPath();c.arc(0,0,r*.7,0,T);c.fill();c.stroke();c.restore()}
export default(c,t)=>{
  c.translate(128,256);c.scale(.88,.88);c.translate(-128,-256)
  const p=(t*2)%1,h=(1+cos(T*p))/2,yb=50-28*h,q=max(0,yb-34)/110,a=t*T
  for(const[x,y,r,o,f]of[[36,120,7,0,'#ffc9de'],[220,110,7,.5,'#fff3bf'],[28,200,6,.25,'#d3f9d8'],[228,190,6,.75,'#ffc9de']])flower(c,x+4*sin(a+o*T),y-6*sin(2*a+o*T),r,a*(o>.4?-1:1),f)
  const sq=f=>{c.save();c.translate(128,186);c.scale(1+.4*q,1-q);c.translate(-128,-186);f();c.restore()}
  sq(()=>{c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,30);c.bezierCurveTo(198,30,214,90,204,150);c.quadraticCurveTo(212,168,196,176);c.lineTo(60,176);c.quadraticCurveTo(44,168,52,150);c.bezierCurveTo(42,90,58,30,128,30);c.fill();c.stroke()})
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,198),c.quadraticCurveTo(128+d*36,192,128+d*34,210),c.quadraticCurveTo(128+d*20,220,128,206),c.closePath(),c.fill(),c.lineWidth=5,c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.lineTo(128,200);c.lineTo(140,190);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
  c.fillStyle=RIB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,214),c.lineTo(128+d*16,206),c.lineTo(128+d*14,224),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,215,4.5,0,T);c.fill();c.stroke()
  sq(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.1,PI*1.9),c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,14,7,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,157),c.stroke()
    c.fillStyle=MO;c.lineWidth=3.5;c.beginPath();c.moveTo(118,164);c.quadraticCurveTo(128,168,138,164);c.quadraticCurveTo(136,180,128,180);c.quadraticCurveTo(120,180,118,164);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,181,7,5,0,0,T);c.fill();c.restore()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,152)
    c.bezierCurveTo(46,72,88,32,128,32);c.bezierCurveTo(168,32,210,72,192,152);c.quadraticCurveTo(184,158,180,150);c.quadraticCurveTo(188,130,180,112)
    c.quadraticCurveTo(178,100,170,106);c.quadraticCurveTo(164,92,152,98);c.quadraticCurveTo(144,86,134,98);c.quadraticCurveTo(124,88,114,98)
    c.quadraticCurveTo(104,88,96,100);c.quadraticCurveTo(86,94,84,108);c.quadraticCurveTo(76,108,76,118);c.quadraticCurveTo(68,132,76,150);c.quadraticCurveTo(70,158,64,152);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,100,58,PI*a,PI*b),c.stroke()
    c.strokeStyle='#111'
  })
  for(const[w,s]of[[40,'#111'],[29,SL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(262,yb-110),c.lineTo(184,yb-26),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=HAND
  c.beginPath();c.ellipse(170,yb-4,9,15,.6,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(186,yb-44);c.quadraticCurveTo(150,yb-50,112,yb-36);c.quadraticCurveTo(92,yb-28,96,yb-12);c.quadraticCurveTo(100,yb+2,120,yb);c.quadraticCurveTo(160,yb+4,184,yb-10);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const k of[0,1,2])c.moveTo(98+k*2,yb-30+k*8),c.lineTo(128+k*3,yb-30+k*8);c.stroke()
  c.fillStyle='#fff';c.lineWidth=3.5
  for(const[x,y,o]of[[56,64,0],[204,58,.33],[196,150,.66],[44,166,.5]]){const r=11*max(0,sin(T*((t*2+o)%1)));if(r>2){c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+r*.2,y-r*.2,x+r,y);c.quadraticCurveTo(x+r*.2,y+r*.2,x,y+r);c.quadraticCurveTo(x-r*.2,y+r*.2,x-r,y);c.quadraticCurveTo(x-r*.2,y-r*.2,x,y-r);c.fill();c.stroke()}}
}

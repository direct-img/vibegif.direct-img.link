// magenta haired idol singing into her mic with her eyes closed, side ponytail bouncing to the beat, notes floating up, fans waving glow sticks
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#e64980',HD='#c2255c',HL='#ffdeeb',BL='#ffa8a8',DR='#3bc9db',BOW='#ffd43b',MIC='#ced4da',GRIP='#f06595'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const note=(c,x,y,s,col,two)=>{
  ds(c,8,3,col,()=>{c.moveTo(x+6*s,y);c.lineTo(x+6*s,y-24*s);if(two)c.lineTo(x+22*s,y-28*s),c.lineTo(x+22*s,y-4*s);else c.quadraticCurveTo(x+18*s,y-18*s,x+14*s,y-8*s)})
  c.fillStyle=col;c.lineWidth=3.5;for(const o of two?[0,16]:[0])c.beginPath(),c.ellipse(x+o*s,y+(o?-4*s:0),7*s,5*s,-.4,0,T),c.fill(),c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t)=>{
  const a=t*T,op=abs(sin(2*a))
  for(const[x,s,o]of[[34,1,0],[62,-1,.5]]){const p=(t+o)%1,y=150-110*p,sc=sin(PI*p);if(sc>.2)note(c,x+10*sin(p*T*2)*s,y,.6+.6*sc,['#ffd43b','#66d9e8'][o?1:0],!o)}
  c.fillStyle='#fff';for(const[x,y,o]of[[30,60,0],[226,52,.33],[214,120,.66]]){const r=9*sin(PI*((t*2+o)%1));if(r>2)c.lineWidth=3.5,spark(c,x,y,r)}
  const head=f=>f()
  head(()=>{
    c.save();c.translate(180,64);c.rotate(.12+.18*sin(2*a+.8));c.scale(.9,.9)
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,-4);c.bezierCurveTo(44,-20,70,50,56,120);c.quadraticCurveTo(48,142,30,146);c.quadraticCurveTo(44,96,0,20);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(14,6);c.bezierCurveTo(40,20,52,70,44,118);c.stroke();c.strokeStyle='#111'
    c.restore()
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,156);c.lineTo(58,156);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  })
  c.lineWidth=6;c.fillStyle=DR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(let k=0;k<5;k++)c.beginPath(),c.arc(104+k*12,196,7,0,PI),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.rect(116,168,24,22);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,189);c.moveTo(140,168);c.lineTo(140,189);c.stroke()
  c.fillStyle=BOW;for(const d of[-1,1])c.beginPath(),c.moveTo(128,226),c.quadraticCurveTo(128+d*24,204,128+d*28,224),c.quadraticCurveTo(128+d*22,242,128,226),c.fill(),c.stroke()
  c.beginPath();c.arc(128,226,6,0,T);c.fill();c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    for(const d of[-1,1]){const x=128+d*25;c.lineWidth=6;c.beginPath();c.arc(x,148,13,PI*1.15,PI*1.85);c.moveTo(x+d*12,140);c.lineTo(x+d*18,135);c.moveTo(x+d*13,145);c.lineTo(x+d*20,144);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
    c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(128,169,7+op,3+6*op,0,0,T);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,176,6,4,0,0,T);c.fill();c.restore()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(184,118,176,104);c.quadraticCurveTo(170,98,164,104);c.quadraticCurveTo(160,94,148,90);c.quadraticCurveTo(144,102,134,108)
    c.quadraticCurveTo(130,96,120,90);c.quadraticCurveTo(114,102,104,108);c.quadraticCurveTo(100,96,92,94);c.quadraticCurveTo(86,104,82,110)
    c.quadraticCurveTo(76,124,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BOW;c.lineWidth=4;c.beginPath();for(let k=0;k<10;k++){const r=k%2?5:11,b=k*PI/5-PI/2;c.lineTo(176+cos(b)*r,62+sin(b)*r)}c.closePath();c.fill();c.stroke()
  })
  for(const[l,k]of[[30,'#111'],[19,DR]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(66,250),c.lineTo(78,226),c.lineTo(96,224),c.stroke()
  c.strokeStyle='#111';ds(c,16,9,GRIP,()=>{c.moveTo(100,234);c.lineTo(108,196)})
  c.lineWidth=5;c.fillStyle=MIC;c.beginPath();c.arc(110,190,13,0,T);c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle='#868e96';c.lineWidth=2;c.beginPath();for(let k=-12;k<=12;k+=6)c.moveTo(97,190+k),c.lineTo(123,190+k),c.moveTo(110+k,177),c.lineTo(110+k,203);c.stroke();c.restore()
  c.lineWidth=5;c.beginPath();c.arc(110,190,13,0,T);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.ellipse(100,224,12,13,.2,0,T);c.fill();c.stroke()
  for(const[x,d,col,o]of[[18,1,'#ff8fab',0],[238,-1,'#66d9e8',2.2]]){
    const r=d*(.45+.3*sin(2*a+o)),ex=x+sin(r)*80,ey=270-cos(r)*80,hx=x+sin(r)*22,hy=270-cos(r)*22
    for(const[l,k]of[[20,'#111'],[13,col],[5,'#fff']])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(hx,hy),c.lineTo(ex,ey),c.stroke()
    ds(c,20,13,'#868e96',()=>{c.moveTo(x,270);c.lineTo(hx,hy)})
  }
}

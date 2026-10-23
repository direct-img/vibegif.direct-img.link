// figure skater with a sky-blue bun spinning on the ice, arms joined overhead, skirt flaring, a sparkle trail circling her
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#8ec5fc',HD='#4dabf7',HL='#e7f5ff',DR='#cc5de8',DD='#9c36b5',SK=['#e599f7','#f783ac'],RIB='#f783ac',BL='#ffa8a8',ICE='#e7f5ff',IL='#a5d8ff'
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const star=(c,x,y,r,col)=>{c.fillStyle=col;c.lineWidth=3.5;c.beginPath();for(let k=0;k<8;k++){const q=k%2?r*.38:r,b=k*PI/4;c.lineTo(x+q*cos(b),y+q*sin(b))}c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const q=T*2*t,cq=cos(q),sq=sin(q),w=abs(cq),bob=1.5*sin(2*q)
  c.fillStyle=ICE;c.lineWidth=6;c.beginPath();c.ellipse(128,226,92,20,0,0,T);c.fill();c.stroke()
  c.strokeStyle=IL;c.lineWidth=3;c.beginPath();c.ellipse(128,226,30,7,0,0,T);c.stroke();c.beginPath();c.ellipse(128,226,58,12,0,-2.6,-.4);c.stroke();c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(56,222);c.lineTo(74,218);c.moveTo(178,232);c.lineTo(198,229);c.stroke();c.strokeStyle='#111'
  const orb=f=>{for(let k=0;k<3;k++){const a=q*.5+k*T/3+1,s=sin(a);if(f(s))star(c,128+84*cos(a),174+18*s,5+3*(s+1),['#ffd43b','#fff','#f783ac'][k])}}
  orb(s=>s<0)
  const arcs=d=>{for(const[y,r]of[[176,70],[116,58]]){const a0=d>0?.1:PI+.1;for(const[lw,s]of[[9,'#111'],[3.5,'#fff']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.ellipse(128,y,r,r*.22,0,a0,a0+.9),c.stroke()}c.strokeStyle='#111'}
  arcs(-1)
  const sx=16*cq,fl=sq
  line(c,[[128-4,184],[128-2,214]],8,SKIN)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(118,206,18,14,5);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(114,224);c.lineTo(142,224);c.stroke()
  const kx=128+18*fl,fx=128+6*fl;line(c,[[132,184],[kx,198],[fx,206]],8,SKIN)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(fx+4*fl,207,9,6,0,0,T);c.fill();c.stroke()
  const skirt=()=>{c.beginPath();c.moveTo(104,160+bob);c.lineTo(152,160+bob);c.quadraticCurveTo(178,174,188,190);c.quadraticCurveTo(128,202,68,190);c.quadraticCurveTo(78,174,104,160+bob);c.closePath()}
  c.fillStyle=SK[0];c.lineWidth=5;skirt();c.fill();c.save();c.clip()
  for(let k=0;k<8;k++){const a=q+k*T/8;if(sin(a)>-.2&&k%2){const x=128+64*cos(a),wd=10+10*sin(a);c.fillStyle=SK[1];c.beginPath();c.moveTo(128+22*cos(a)-wd*.3,160);c.lineTo(128+22*cos(a)+wd*.3,160);c.lineTo(x+wd,200);c.lineTo(x-wd,200);c.closePath();c.fill()}}
  c.restore();skirt();c.stroke()
  c.fillStyle=DR;c.lineWidth=5;c.beginPath();c.moveTo(112,128+bob);c.lineTo(144,128+bob);c.quadraticCurveTo(152,146,150,164+bob);c.lineTo(106,164+bob);c.quadraticCurveTo(104,146,112,128+bob);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(let k=0;k<6;k++){const a=q+k*T/6;if(sin(a)>0){c.beginPath();c.arc(128+18*cos(a),146+bob+6*(k%2),2.4,0,T);c.fill()}}
  for(const d of[-1,1]){const s=[128+d*14,134+bob],e=[128+d*(56+4*w),86+bob],h=[128+d*6,14+bob];line(c,[s,e,h],8,SKIN)}
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.ellipse(128,13+bob,9,7,0,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(122,120+bob,12,10);c.fill()
  const head=g=>{c.save();c.translate(128,96+bob);c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  const front=cq>-.25,ex=36*sq,es=26*cq
  head(()=>{
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
    c.beginPath();c.arc(128,30,30,0,T);c.fill();c.stroke();c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.arc(128,30,18,PI*.9,PI*2.1);c.stroke();c.strokeStyle='#111'
    if(front){
      c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
      c.save();c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.clip()
      c.lineWidth=8;for(const d of[-1,1]){const x=128+ex+d*es;if(abs(es)>8||d*sq>0)c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke(),c.beginPath(),c.moveTo(x+d*12*sign(cq),138),c.lineTo(x+d*19*sign(cq),134),c.stroke()}
      c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+ex*1.1+d*42*cq,162,11*max(.4,w),6,0,0,T),c.fill()
      c.fillStyle='#c92a2a';c.lineWidth=5;c.beginPath();c.arc(128+ex*1.1,166,7,.1*PI,.9*PI);c.closePath();c.fill();c.stroke();c.restore()
      c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(70,140);c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,140)
      c.quadraticCurveTo(182,112,170,96);c.quadraticCurveTo(160,104,152,112);c.quadraticCurveTo(150,96,138,88);c.quadraticCurveTo(128,104,112,110);c.quadraticCurveTo(116,98,112,88);c.quadraticCurveTo(96,104,86,112);c.quadraticCurveTo(74,120,70,140);c.closePath();c.fill();c.stroke()
    }else{
      c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(72,100);c.bezierCurveTo(68,160,100,186,128,186);c.bezierCurveTo(156,186,188,160,184,100);c.bezierCurveTo(184,44,72,44,72,100);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;for(const d of[-1,0,1])c.beginPath(),c.moveTo(128+d*20,70),c.quadraticCurveTo(128+d*30,130,128+d*22,176),c.stroke();c.strokeStyle='#111'
    }
    c.strokeStyle=HL;c.lineWidth=8;c.beginPath();c.arc(128,104,56,PI*1.28,PI*1.42);c.stroke();c.beginPath();c.arc(128,30,22,PI*1.2,PI*1.5);c.stroke();c.strokeStyle='#111'
    c.save();c.translate(128+34*sq,28);c.fillStyle=RIB;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(0,0),c.lineTo(d*24*max(.35,w),-12),c.lineTo(d*24*max(.35,w),12),c.closePath(),c.fill(),c.stroke();c.beginPath();c.arc(0,0,8,0,T);c.fill();c.stroke();c.restore()
  })
  arcs(1)
  orb(s=>s>=0)
}
const sign=x=>x<0?-1:1

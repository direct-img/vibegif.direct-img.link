// little girl in a nightcap sitting on a crescent moon, swinging her legs and fishing a wriggling star up on her line
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=110
const SKIN='#ffe3d1',HAIR='#74c0fc',HD='#339af0',HL='#e7f5ff',EYE='#fcc419',ED='#e67700',PJ='#748ffc',PD='#4c6ef5',MOON='#ffe066',MD='#fab005',STAR='#ffd43b',BL='#ffa8a8',Z=.55
const L=w=>w/Z
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.48:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
const twinkle=(c,x,y,s)=>{if(s<.2)return;c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(x,y-10*s);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x,y,x+a*10*s,y+b*10*s);c.fill();c.stroke()}
export default(c,t)=>{
  const sw=.07*sin(t*T),len=140+8*sin(t*T*2),tx=222,ty=44,sx=tx+len*sin(sw),sy=ty+len*cos(sw),lg=sin(t*T*2)
  for(const[x,y,o]of[[176,24,0],[248,120,.33],[176,226,.66]])twinkle(c,x,y,sin(PI*((t*2+o)%1)))
  const cres=(R,r)=>{c.beginPath();const hy=112-(R*R-r*r+26*26)/52,hx=Math.sqrt(R*R-(hy-112)**2),a=Math.atan2(hy-112,hx),b=Math.atan2(hy-86,hx);c.arc(118,112,R,a,PI-a);c.arc(118,86,r,PI-b,b,true);c.closePath()}
  c.lineWidth=6;c.fillStyle=MOON;cres(92,84);c.fill();c.stroke()
  c.save();cres(89,87);c.clip();c.fillStyle=MD;c.lineWidth=4
  for(const[x,y,r]of[[44,158,8],[72,186,9],[162,188,7],[190,152,6],[32,116,5]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  c.restore()
  c.save();c.translate(112,130);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,50);c.bezierCurveTo(60,50,52,140,62,220);c.quadraticCurveTo(70,236,92,230);c.lineTo(164,230);c.quadraticCurveTo(186,236,194,220);c.bezierCurveTo(204,140,196,50,128,50);c.fill();c.stroke()
  c.restore()
  for(const d of[-1,1]){const a=d*lg*.45,kx=112+d*11,fx=kx+36*sin(a),fy=172+36*cos(a)
    for(const[l,s]of[[19,'#111'],[10,PJ]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(kx,170),c.lineTo(fx,fy),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle=SKIN;c.beginPath();c.ellipse(fx+d*2+3*sin(a),fy+4,7,6,a,0,T);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle=PJ;c.beginPath();c.moveTo(102,130);c.quadraticCurveTo(92,142,88,164);c.quadraticCurveTo(112,172,136,164);c.quadraticCurveTo(132,142,122,130);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(112+d*11,168,10,0,T),c.fill(),c.stroke()
  c.fillStyle=STAR;c.lineWidth=2.5;for(const[x,y]of[[100,150],[122,144],[110,160]])star(c,x,y,4.5,0)
  for(const[l,s]of[[9,'#111'],[4,'#a9744f']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(116,162),c.lineTo(tx,ty),c.stroke()
  c.strokeStyle='#111'
  for(const[l,s]of[[5,'#111'],[2,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(tx,ty),c.lineTo(sx,sy),c.stroke()
  c.strokeStyle='#111';const rx=136,ry=146,ra=t*T*2,cx=rx+9*cos(ra),cy=ry+9*sin(ra);c.lineWidth=4;c.fillStyle='#ced4da';c.beginPath();c.arc(rx,ry,6,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(rx,ry);c.lineTo(cx,cy);c.stroke()
  for(const[a,b]of[[[100,136],[126,156]],[[120,136],[cx,cy]]])for(const[l,s]of[[17,'#111'],[8,PJ]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...a),c.lineTo(...b),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle=SKIN;for(const[x,y]of[[126,156],[cx,cy]])c.beginPath(),c.arc(x,y,6.5,0,T),c.fill(),c.stroke()
  c.save();c.translate(112,130);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,14,17,0,0,T);c.fill();c.save();c.clip();c.fillStyle=EYE;c.beginPath();c.ellipse(x+5,140,11.5,15,0,0,T);c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+5,130,13,9,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x+6,142,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+2,134,5.5,0,T);c.fill();c.restore()
    c.lineWidth=L(5.5);c.beginPath();c.moveTo(x-16,134);c.quadraticCurveTo(x,120,x+16,134);c.moveTo(x+d*15,133);c.lineTo(x+d*21,128);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
  c.lineWidth=L(3.5);c.fillStyle='#c92a2a';c.beginPath();c.moveTo(120,164);c.quadraticCurveTo(130,180,140,164);c.closePath();c.fill();c.stroke()
  c.lineWidth=L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,42,128,42);c.bezierCurveTo(168,42,202,74,186,150)
  c.quadraticCurveTo(182,116,172,104);c.quadraticCurveTo(164,110,160,118);c.quadraticCurveTo(152,100,138,96);c.quadraticCurveTo(132,108,126,114)
  c.quadraticCurveTo(118,100,104,98);c.quadraticCurveTo(98,110,96,118);c.quadraticCurveTo(90,106,84,104);c.quadraticCurveTo(72,120,70,150);c.closePath();c.fill();c.stroke()
  const cp=.12*sin(t*T)
  c.fillStyle=PJ;c.beginPath();c.moveTo(66,92);c.bezierCurveTo(70,30,150,14,196,40);c.quadraticCurveTo(230+30*cp,60,236+40*cp,108);c.quadraticCurveTo(214,70,190,88);c.quadraticCurveTo(130,64,66,92);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(62,96);c.quadraticCurveTo(128,62,194,90);c.lineTo(192,74);c.quadraticCurveTo(128,48,64,80);c.closePath();c.fill();c.stroke()
  c.fillStyle=STAR;c.beginPath();c.arc(238+40*cp,112,17,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle=STAR;c.lineWidth=4.5;star(c,sx,sy+20,20,sw*3+.25*sin(t*T*4))
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(sx-6,sy+12);c.lineTo(sx-3,sy+9);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(sx+d*6,sy+20,2,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();c.arc(sx,sy+23,3,.1*PI,.9*PI);c.stroke()
}

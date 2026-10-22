// kitsune girl with orange fox ears fanning six fluffy tails behind her while blue foxfire circles around
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#ff922b',HD='#e8590c',HL='#ffe8cc',TIP='#fff4e6',EYE='#94d82d',ED='#5c940d',RED='#fa5252',BL='#ffa8a8',FF='#339af0',FC='#d0ebff'
const eye=(c,x,y,d,shut)=>{
  if(shut){c.lineWidth=5;c.beginPath();c.moveTo(x-15,y);c.quadraticCurveTo(x,y+8,x+15,y);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.strokeStyle=RED;c.lineWidth=4;c.beginPath();c.moveTo(x+d*13,y+12);c.lineTo(x+d*20,y+5);c.stroke();c.strokeStyle='#111'
}
const tail=(c,a,L,b)=>{
  c.save();c.translate(128,224);c.rotate(a)
  const p=()=>{c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(L*.25,-34,L*.55,-46+b*.4,L*.84,-28+b*.8);c.quadraticCurveTo(L+4,-16+b,L+6,b-4);c.quadraticCurveTo(L-2,b+18,L*.84,24+b*.8);c.bezierCurveTo(L*.55,42+b*.4,L*.25,30,0,10);c.closePath()}
  c.lineWidth=6;c.fillStyle=HAIR;p();c.fill();c.save();c.clip()
  const z=()=>{c.beginPath();c.moveTo(L-28,-60);for(let k=0;k<6;k++)c.quadraticCurveTo(L-20+(k%2?6:-6),-50+k*20,L-28,-40+k*20)}
  z();c.lineTo(L+30,60);c.lineTo(L+30,-60);c.fillStyle=TIP;c.fill();z();c.lineWidth=3;c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(24,0);c.bezierCurveTo(L*.4,-8,L*.5,-14+b*.4,L*.66,-18+b*.6);c.moveTo(L*.3,14);c.bezierCurveTo(L*.45,18,L*.55,14+b*.4,L*.66,8+b*.6);c.stroke()
  c.restore();c.lineWidth=6;p();c.stroke();c.restore()
}
const flame=(c,x,y,s,w)=>{
  c.save();c.translate(x,y);c.scale(s,s)
  for(const[k,f]of[[1,FF],[.55,FC]]){
    c.save();c.translate(0,6*(1-k));c.scale(k,k);c.beginPath();c.moveTo(w,-36);c.bezierCurveTo(w+2,-20,14,-12,14,4);c.arc(0,4,14,0,PI);c.quadraticCurveTo(-16,-8,-w*.5-12,-22);c.quadraticCurveTo(-4,-14,-2,-12);c.quadraticCurveTo(w*.6,-22,w,-36);c.closePath();c.restore();c.fillStyle=f;c.fill();if(k==1)c.lineWidth=5/s,c.stroke()
  }
  c.restore()
}
export default(c,t,i)=>{
  const fire=front=>{for(let k=0;k<3;k++){const a=T*t+k*T/3,s=sin(a);if(s>0==front)flame(c,128+112*cos(a),216+24*s,.75+.1*s,8*sin(2*T*t+k*2))}}
  fire(false)
  for(const[k,a,L]of[[0,-2.98,118],[1,-2.6,140],[2,-2.2,160],[3,-.94,160],[4,-.54,140],[5,-.16,118]]){const p=T*t-k*.7;tail(c,a+.1*sin(p),L,14*sin(p-1))}
  c.save();c.translate(128,258);c.scale(.72,.72);c.translate(-128,-256)
  const tw=i>=4&&i<=6?.3*sin((i-4)*PI/2):0
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(212,196,198,214);c.lineTo(58,214);c.quadraticCurveTo(44,196,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,214);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle=RED;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,190),c.lineTo(128,218),c.lineTo(128-d*30,256),c.lineTo(128-d*44,256),c.lineTo(128-d*6,206),c.lineTo(128+d*2,190),c.closePath(),c.fill(),c.stroke()
  for(const[d,r]of[[-1,tw],[1,0]]){
    c.save();c.translate(128+d*40,62);c.rotate(r*d)
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(d*-24,10);c.quadraticCurveTo(d*-6,-30,d*12,-54);c.quadraticCurveTo(d*30,-18,d*24,14);c.closePath();c.fill();c.stroke()
    c.fillStyle=TIP;c.beginPath();c.moveTo(d*-10,6);c.quadraticCurveTo(d*2,-20,d*12,-38);c.quadraticCurveTo(d*20,-12,d*14,8);c.closePath();c.fill()
    c.restore()
  }
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const sh=i==9||i==10
  eye(c,103,140,-1,sh);eye(c,153,140,1,sh)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,11,5,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(121,167);c.quadraticCurveTo(128,176,135,167);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,194,176)
  c.quadraticCurveTo(184,140,180,104);c.quadraticCurveTo(172,100,166,110);c.quadraticCurveTo(158,96,148,92);c.quadraticCurveTo(142,104,134,110)
  c.quadraticCurveTo(128,96,120,92);c.quadraticCurveTo(116,104,108,110);c.quadraticCurveTo(100,96,92,94);c.quadraticCurveTo(86,104,84,110)
  c.quadraticCurveTo(80,102,76,104);c.quadraticCurveTo(70,140,62,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=RED;c.lineWidth=5;c.beginPath();c.moveTo(168,74);c.lineTo(190,64);c.lineTo(186,86);c.closePath();c.fill();c.stroke()
  c.restore()
  fire(true)
}

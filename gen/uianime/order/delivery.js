// brown haired delivery girl in a blue cap hugging a parcel under one arm and snapping a crisp salute to her brim, a twinkle popping off it
const{sin,cos,PI,max,min,atan2}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#8d5a3b',HD='#6b3f26',HL='#e0b08f',EYE='#fab005',ED='#e67700',CAP='#339af0',CD='#1971c2',BOX='#e8b07a',BD='#c47f45',TAPE='#fff3bf',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const glint=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<8;k++){const rr=k%2?r*.28:r,b=k*PI/4;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const u=ez(t,0,.14)-ez(t,.84,.98),g=t>=.14&&t<.5?sin(PI*(t-.14)/.36):0
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,208,96,202,170);c.quadraticCurveTo(192,182,182,172);c.lineTo(74,172);c.quadraticCurveTo(64,182,54,170);c.bezierCurveTo(48,96,60,34,128,34);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=CAP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*30,188),c.lineTo(128+d*34,204),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(128,208);c.lineTo(128,226);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.lineTo(128,206);c.lineTo(140,192);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(154,214,30,20,4);c.fill();c.stroke()
  c.strokeStyle=CAP;c.lineWidth=3;c.beginPath();c.moveTo(160,221);c.lineTo(178,221);c.moveTo(160,228);c.lineTo(172,228);c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1);eye(c,153,142,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,166),c.lineTo(128+d*42+k+2,160),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(117,167);c.quadraticCurveTo(128,172,139,167);c.quadraticCurveTo(137,182,128,182);c.quadraticCurveTo(119,182,117,167);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,183,7,5,0,0,T);c.fill();c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(56,96,70,80,96,80);c.lineTo(160,80);c.bezierCurveTo(186,80,200,96,186,150)
  c.quadraticCurveTo(184,120,178,106);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(160,102,150,96);c.quadraticCurveTo(144,106,136,112)
  c.quadraticCurveTo(132,100,124,94);c.quadraticCurveTo(118,104,110,110);c.quadraticCurveTo(106,100,96,98);c.quadraticCurveTo(90,106,86,114)
  c.quadraticCurveTo(80,106,78,106);c.quadraticCurveTo(70,124,70,150);c.closePath();c.fill();c.stroke()
  c.fillStyle=CAP;c.beginPath();c.moveTo(66,96);c.bezierCurveTo(56,30,200,30,190,96);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,96,56,PI*1.25,PI*1.4);c.stroke();c.strokeStyle='#111'
  c.fillStyle=CD;c.beginPath();c.moveTo(56,96);c.quadraticCurveTo(128,78,200,96);c.quadraticCurveTo(206,108,196,114);c.quadraticCurveTo(128,98,60,114);c.quadraticCurveTo(50,108,56,96);c.fill();c.stroke()
  c.strokeStyle='#74c0fc';c.lineWidth=3;c.beginPath();c.moveTo(78,100);c.quadraticCurveTo(128,90,178,100);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(128,66,12,0,T);c.fill();c.stroke()
  c.fillStyle=CAP;c.lineWidth=2.5;c.beginPath();c.moveTo(121,62);c.lineTo(128,58);c.lineTo(135,62);c.lineTo(135,72);c.lineTo(121,72);c.closePath();c.fill();c.stroke()
  // salute arm
  const ex=200+30*u,ey=246-84*u,hx=176+22*u,hy=268-150*u,a=atan2(hy-ey,hx-ex)
  ds(c,30,19,CAP,()=>{c.moveTo(176,214);c.lineTo(ex,ey);c.lineTo(ex+(hx-ex)*.7,ey+(hy-ey)*.7)})
  c.save();c.translate(hx,hy);c.rotate(a-.45*u)
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.roundRect(-10,-10,44,20,10);c.fill();c.stroke()
  c.beginPath();c.ellipse(4,10,10,5,.3,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(14,-3);c.lineTo(32,-3);c.moveTo(14,3);c.lineTo(32,3);c.stroke()
  c.restore()
  if(g>0){c.fillStyle='#fff9db';c.lineWidth=3.5;glint(c,214,80,6+14*g,g*2)
    ds(c,8,3.5,'#fff',()=>{for(const b of[-2.2,-1.6,-1])c.moveTo(186+36*cos(b),104+36*sin(b)),c.lineTo(186+(44+6*g)*cos(b),104+(44+6*g)*sin(b))})}
  // parcel under the other arm
  ds(c,30,19,CAP,()=>{c.moveTo(84,208);c.lineTo(42,230)})
  c.save();c.translate(86,224);c.rotate(-.05)
  c.lineWidth=6;c.fillStyle=BOX;c.beginPath();c.rect(-50,-20,100,52);c.fill();c.stroke()
  c.fillStyle=BD;c.beginPath();c.moveTo(-50,-20);c.lineTo(-38,-34);c.lineTo(62,-34);c.lineTo(50,-20);c.closePath();c.fill();c.stroke()
  c.fillStyle=TAPE;c.lineWidth=4;c.beginPath();c.rect(-10,-20,20,52);c.fill();c.stroke()
  c.beginPath();c.moveTo(-6,-34);c.lineTo(12,-34);c.lineTo(4,-20);c.lineTo(-14,-20);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(18,-10,26,22,3);c.fill();c.stroke()
  c.strokeStyle=BD;c.lineWidth=3;c.beginPath();c.moveTo(31,7);c.lineTo(31,-5);c.moveTo(25,1);c.lineTo(31,-6);c.lineTo(37,1);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(-50,8,10,14,0,0,T);c.fill();c.stroke()
  for(const y of[-2,9,20])c.beginPath(),c.ellipse(-40,y,9,5,0,0,T),c.fill(),c.stroke()
  c.restore()
}

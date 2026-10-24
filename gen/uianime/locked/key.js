// red haired girl straining to turn a giant gold key in a big padlock, the shackle clicks shut and she beams as sparkles pop
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#ff8787',HD='#e03131',HL='#ffe3e3',EYE='#845ef7',ED='#5f3dc4',TOP='#d0bfff',TD='#9775fa',BL='#ffa8a8',LK='#74c0fc',SH='#dee2e6',GD='#ffd43b',GDD='#f59f00',SP='#ffe066',SW='#a5d8ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t)=>{
  const tw=t<.5,p=min(1,t/.5),th=PI*p*p*(3-2*p),cs=abs(cos(th)),hap=t>=.5&&t<.875
  const dy=t<.5?-24:t<.5625?4:t<.875?0:-24*min(1,(t-.875)/.0625)
  const H=f=>{c.save();c.translate(188,138);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(212,210,200,250);c.lineTo(56,250);c.quadraticCurveTo(44,210,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(102,190);c.lineTo(128,226);c.lineTo(154,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=TD;c.beginPath();c.moveTo(128,224);c.lineTo(112,214);c.lineTo(112,236);c.closePath();c.moveTo(128,224);c.lineTo(144,214);c.lineTo(144,236);c.closePath();c.fill();c.stroke()
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(tw){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()
      c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(108,160,40,18,7);c.fill();c.stroke();c.beginPath();c.moveTo(110,169);c.lineTo(146,169);c.stroke()}
    else if(hap){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()
      c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,190,144,164);c.closePath();c.fill();c.stroke()}
    else{eye(c,103,140,-1);eye(c,153,140,1);c.lineWidth=5;c.beginPath();c.arc(128,164,8,.15*PI,.85*PI);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=GD;c.lineWidth=7;c.beginPath();c.ellipse(80,66,16,11,-.6,0,T);c.fill();c.stroke()
    if(tw){c.fillStyle=SW;c.lineWidth=7;for(const[x,y]of[[196,96],[212,128]])c.beginPath(),c.moveTo(x,y-18),c.quadraticCurveTo(x+12,y,x,y+7),c.quadraticCurveTo(x-12,y,x,y-18),c.fill(),c.stroke()}
  })
  ds(c,24,13,SH,()=>{c.moveTo(38,150);c.lineTo(38,84+dy);c.arc(70,84+dy,32,PI,0);c.lineTo(102,128+dy)})
  c.fillStyle=LK;c.lineWidth=6;c.beginPath();c.roundRect(12,124,116,104,24);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(28,150);c.quadraticCurveTo(28,138,40,136);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#343a40';c.lineWidth=4;c.beginPath();c.arc(70,166,11,0,T);c.moveTo(64,170);c.lineTo(60,196);c.lineTo(80,196);c.lineTo(76,170);c.fill()
  ds(c,18,9,GD,()=>{c.moveTo(70,174);c.lineTo(150,174)})
  c.fillStyle=GD;c.lineWidth=5;c.beginPath();c.roundRect(136,164,12,20,3);c.fill();c.stroke()
  ds(c,22,11,GD,()=>{c.ellipse(178,174,22,max(1,28*cs),0,0,T)})
  c.strokeStyle=GDD;c.lineWidth=3;if(cs>.3){c.beginPath();c.ellipse(178,174,22,28*cs,0,PI*1.1,PI*1.45);c.stroke()}c.strokeStyle='#111'
  const y1=174-30*cs,y2=174+30*cs
  ds(c,22,12,TOP,()=>{c.moveTo(150,150);c.quadraticCurveTo(150,y1-16,170,y1)})
  ds(c,22,12,TOP,()=>{c.moveTo(220,156);c.quadraticCurveTo(226,y2,196,y2)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[[176,y1],[190,y2]])c.beginPath(),c.ellipse(x,y,12,11,0,0,T),c.fill(),c.stroke()
  if(t>=.5&&t<.875){const q=(t-.5)/.375,s=sin(PI*min(1,q*1.6))
    for(let k=0;k<5;k++){const a=-PI/2+(k-2)*.5;ds(c,8,4,SP,()=>{c.moveTo(70+cos(a)*(48+8*q),66+sin(a)*(48+8*q));c.lineTo(70+cos(a)*(60+14*q),66+sin(a)*(60+14*q))})}
    c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[132,40,0],[236,30,.2],[240,104,.35]]){const r=sin(PI*min(1,max(0,q*1.4-o)));if(r>.1)spark(c,x,y,13*r)}}
}

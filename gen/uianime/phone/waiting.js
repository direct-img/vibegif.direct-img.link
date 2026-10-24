// indigo haired girl in a comfy hoodie staring half-lidded at her phone, pulls to refresh, still no notifications, and lets out a big sigh
const{sin,PI,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#748ffc',HD='#4c6ef5',HL='#dbe4ff',EYE='#f783ac',ED='#c2255c',BL='#ffa8a8',HO='#96f2d7',HOD='#20c997',PH='#ffd43b',SCR='#e7f5ff'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,l)=>{
  const ly=y-17+30*l
  c.save();c.beginPath();c.moveTo(x-24,ly+3);c.quadraticCurveTo(x,ly,x+24,ly+3);c.lineTo(x+24,y+30);c.lineTo(x-24,y+30);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.beginPath();c.ellipse(x+3,y+5,11.5,14,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-4,12,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+7,5.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y+2,4,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,ly+3);c.quadraticCurveTo(x,ly,x+16,ly+3);c.moveTo(x+d*15,ly+3);c.lineTo(x+d*20,ly+5);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const puff=(c,x,y,s)=>{c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(const[ox,oy,r]of[[-9,3,9],[2,-4,11],[12,4,8]])c.moveTo(x+(ox+r)*s,y+oy*s),c.arc(x+ox*s,y+oy*s,r*s,0,T);c.stroke();c.fill()}
export default(c,t,i)=>{
  const sg=E((t-.42)/.08)-E((t-.66)/.1),dr=5*sg,bk=i==13
  c.save();c.translate(128,150+dr*.6);c.scale(.76,.76);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(204,34,216,110,210,190);c.quadraticCurveTo(214,226,196,232);c.lineTo(60,232);c.quadraticCurveTo(42,226,46,190);c.bezierCurveTo(40,110,52,34,128,34);c.fill();c.stroke()
  c.fillStyle=HO;c.beginPath();c.moveTo(96,188);c.quadraticCurveTo(46,196,36,310);c.lineTo(220,310);c.quadraticCurveTo(210,196,160,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=HOD;c.beginPath();c.moveTo(84,194);c.quadraticCurveTo(128,236,172,194);c.quadraticCurveTo(160,186,150,186);c.quadraticCurveTo(128,206,106,186);c.quadraticCurveTo(96,186,84,194);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.quadraticCurveTo(128,204,140,190);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
  for(const d of[-1,1])ds(c,10,4,'#fff',()=>{c.moveTo(128+d*16,214);c.lineTo(128+d*18,250-d*4)})
  c.save();c.translate(0,dr);c.translate(128,186);c.rotate(.05-.04*sg);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sg>.5){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,146),c.quadraticCurveTo(x,151,x+15,146),c.stroke()}
  else{const l=bk?.95:.36;eye(c,103,140,-1,l);eye(c,153,140,1,l)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,163,12,6,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath()
  if(sg>.2)c.ellipse(124,172,6*sg+2,7*sg+2,0,0,T),c.fill(),c.stroke()
  else c.moveTo(120,172),c.quadraticCurveTo(128,168,136,172),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,170)
  c.bezierCurveTo(46,74,88,38,128,38);c.bezierCurveTo(168,38,210,74,192,170)
  c.quadraticCurveTo(190,124,180,104);c.quadraticCurveTo(172,100,168,90);c.quadraticCurveTo(160,104,148,106);c.quadraticCurveTo(140,96,134,86)
  c.quadraticCurveTo(126,102,114,106);c.quadraticCurveTo(108,94,98,90);c.quadraticCurveTo(92,102,78,104);c.quadraticCurveTo(66,130,64,170);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.restore();c.restore()
  // phone with an empty bell, a pull to refresh that finds nothing
  c.save();c.translate(178,200+dr*.4);c.rotate(.12)
  c.lineWidth=6;c.fillStyle=PH;c.beginPath();c.roundRect(-30,-50,60,96,10);c.fill();c.stroke()
  c.fillStyle=SCR;c.lineWidth=3.5;c.beginPath();c.roundRect(-22,-40,44,72,4);c.fill();c.stroke()
  c.fillStyle='#dee2e6';c.beginPath();c.moveTo(-13,6);c.quadraticCurveTo(-13,-20,0,-20);c.quadraticCurveTo(13,-20,13,6);c.lineTo(16,11);c.lineTo(-16,11);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(0,15,3.5,0,T);c.fill();c.stroke()
  c.strokeStyle='#adb5bd';c.lineWidth=4;c.beginPath();c.moveTo(-12,24);c.lineTo(12,24);c.stroke();c.strokeStyle='#111'
  if(t>.12&&t<.36){const a=t*T*5;c.strokeStyle='#4dabf7';c.lineWidth=4;c.beginPath();c.arc(0,-30,6,a,a+PI*1.5);c.stroke();c.strokeStyle='#111'}
  c.restore()
  ds(c,24,15,HO,()=>{c.moveTo(118,258);c.lineTo(150,232)})
  ds(c,24,15,HO,()=>{c.moveTo(240,258);c.lineTo(212,226)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(152,228,11,12,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(210,222,11,12,0,0,T);c.fill();c.stroke()
  // sigh puff drifting away
  if(t>.46&&t<.82){const p=(t-.46)/.36;puff(c,96-56*p,148-40*p,.8+.8*sin(PI*min(1,p*1.2)))}
}

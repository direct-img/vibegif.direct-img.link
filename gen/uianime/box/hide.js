// white haired catgirl hiding in an empty cardboard box: ears poke out, she peeks left and right, pops up with a cat smile, then ducks back in
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#f8f9fa',HD='#ced4da',EAR='#ffc9d6',EYE='#4dabf7',ED='#1864ab',BL='#ffa8a8',BX='#e0a96d',BXD='#c08552',BXL='#f1c48a',IN='#8d6346',TP='#ffe8cc'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const poly=(c,...p)=>{c.beginPath();for(const[x,y]of p)c.lineTo(x,y);c.closePath();c.fill();c.stroke()}
const eye=(c,x,y,d,o)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+o,y+3,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+o,y-7,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+o,y+4,4,8.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+o-4,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+o+5,y+9,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const pk=E((t-.12)/.1),up=E((t-.5)/.07),dn=E((t-.7)/.07),cy=236-(73*pk+23*up)*(1-dn),o=t>.24&&t<.48?-6*cos(PI*(t-.24)/.24):0,hp=up>.5&&dn<.5
  const fw=t>.76?5*sin(T*4*(t-.76))*(1-(t-.76)/.24):0,tw=(t>.04&&t<.1)||(t>.88&&t<.94)?.35:0
  // flaps behind and the dark inside
  c.lineWidth=6;c.fillStyle=BXD;poly(c,[44,122],[222,122],[214,98+fw],[52,98+fw])
  c.fillStyle=BXL;poly(c,[26,140],[44,122],[20,104-fw],[8,126-fw]);poly(c,[204,140],[222,122],[242,104+fw],[236,130+fw])
  c.fillStyle=IN;poly(c,[26,140],[204,140],[222,122],[44,122])
  // the girl, only what is above the front rim shows
  c.save();c.beginPath();c.rect(0,0,256,140);c.clip()
  c.translate(124,cy);c.scale(.76,.76);c.translate(-128,-186)
  for(const[d,r]of[[-1,-tw],[1,0]]){
    c.save();c.translate(128+d*36,62);c.rotate(r*d)
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(d*-26,8);c.lineTo(d*12,-48);c.lineTo(d*24,12);c.closePath();c.fill();c.stroke()
    c.fillStyle=EAR;c.beginPath();c.moveTo(d*-12,4);c.lineTo(d*11,-32);c.lineTo(d*15,6);c.closePath();c.fill()
    c.restore()
  }
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,212,100,204,190);c.lineTo(52,190);c.bezierCurveTo(44,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(hp){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,13,PI*1.15,PI*1.85),c.stroke()}
  else eye(c,103,140,-1,o),eye(c,153,140,1,o)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(122,176,128,169);c.quadraticCurveTo(134,176,140,168);c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(48,74,88,38,128,38);c.bezierCurveTo(168,38,208,74,190,160)
  c.quadraticCurveTo(188,120,180,104);c.quadraticCurveTo(170,104,164,96);c.quadraticCurveTo(156,108,144,110);c.quadraticCurveTo(140,98,130,92)
  c.quadraticCurveTo(122,106,108,110);c.quadraticCurveTo(104,98,96,94);c.quadraticCurveTo(88,106,78,106);c.quadraticCurveTo(68,128,66,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.restore()
  // box sides, front with a paw print, folded front flap
  c.lineWidth=6;c.fillStyle=BXD;poly(c,[204,140],[222,122],[222,230],[204,248])
  c.fillStyle=BX;c.beginPath();c.rect(26,140,178,108);c.fill();c.stroke()
  c.fillStyle=BXL;poly(c,[26,140],[204,140],[198,164+fw*.6],[32,164+fw*.6])
  c.fillStyle=TP;c.lineWidth=4;c.beginPath();c.rect(104,164+fw*.6,22,30);c.fill();c.stroke()
  c.fillStyle=BXD;c.beginPath();c.ellipse(115,224,16,12,0,0,T);c.fill();for(const[x,y]of[[95,208],[107,199],[123,199],[135,208]])c.beginPath(),c.ellipse(x,y,5.5,7,(x-115)*.03,0,T),c.fill()
  if(up>.3&&dn<.6){c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(124+d*34,140,13,10,0,0,T),c.fill(),c.stroke()
    c.lineWidth=2.5;c.beginPath();for(const d of[-1,1])for(const k of[-4,4])c.moveTo(124+d*34+k,134),c.lineTo(124+d*34+k,140);c.stroke()
    c.fillStyle='#ffd43b';c.lineWidth=3.5;for(const[x,y]of[[210,40],[38,62]])c.beginPath(),c.moveTo(x,y-11),[[1,0],[0,1],[-1,0],[0,-1]].forEach(([a,b])=>c.quadraticCurveTo(x+(a+b)*2,y+(b-a)*2,x+a*11,y+b*11)),c.fill(),c.stroke()}
}

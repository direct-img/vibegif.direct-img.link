// orange bob girl in a mint hoodie typing furiously on her phone with both thumbs, tongue poking out, while a chat bubble's three dots bounce
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=75
const SKIN='#ffe3d1',HAIR='#ffa94d',HD='#f76707',HL='#fff4e6',EYE='#20c997',ED='#087f5b',HO='#96f2d7',HOD='#20c997',PH='#b197fc',BL='#ffa8a8',TG='#ff8fab',CLIP='#f06595'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+3,11.5,14,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-6,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+3,11.5,14,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+6,5.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-2,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+10,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-18,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
export default(c,t)=>{
  const th=[0,PI].map(o=>max(0,sin(3*T*t+o)))
  c.save();c.translate(116,22);c.scale(.8,.8);c.translate(-128,0)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,100,204,168);c.quadraticCurveTo(200,186,184,184);c.lineTo(72,184);c.quadraticCurveTo(56,186,52,168);c.bezierCurveTo(42,100,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=HOD;c.beginPath();c.moveTo(84,196);c.quadraticCurveTo(128,176,172,196);c.lineTo(166,214);c.quadraticCurveTo(128,200,90,214);c.closePath();c.fill();c.stroke()
  c.fillStyle=HO;c.beginPath();c.moveTo(96,194);c.quadraticCurveTo(58,202,50,262);c.lineTo(206,262);c.quadraticCurveTo(198,202,160,194);c.quadraticCurveTo(128,214,96,194);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,165),c.lineTo(128+d*42+k+2,159),c.stroke()
  c.fillStyle=TG;c.lineWidth=3;c.beginPath();c.ellipse(134,172,5,6,-.3,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(119,168);c.quadraticCurveTo(128,171,139,167);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
  c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,194,176);c.quadraticCurveTo(186,180,178,176)
  c.quadraticCurveTo(182,128,176,104);c.quadraticCurveTo(168,104,162,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
  c.quadraticCurveTo(130,96,122,90);c.quadraticCurveTo(116,102,108,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(88,104,82,108)
  c.quadraticCurveTo(74,128,78,176);c.quadraticCurveTo(70,180,62,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  for(const[w,s]of[[11,'#111'],[5,CLIP]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(158,66);c.lineTo(176,80);c.moveTo(164,82);c.lineTo(172,62);c.stroke()}
  c.strokeStyle='#111'
  for(const d of[-1,1])ds(c,30,19,HO,()=>{c.moveTo(128+d*86,300);c.lineTo(128+d*40,282)})
  c.save();c.translate(128,236);c.rotate(-.05)
  c.lineWidth=6;c.fillStyle=PH;c.beginPath();c.roundRect(-38,-48,76,100,13);c.fill();c.stroke()
  c.fillStyle='#f8f9fa';c.lineWidth=3;c.beginPath();c.roundRect(-30,-40,60,84,6);c.fill();c.stroke()
  c.fillStyle='#a5d8ff';c.beginPath();c.roundRect(-25,-35,32,10,5);c.fill()
  c.fillStyle='#ffc9de';c.beginPath();c.roundRect(-6,-21,31,10,5);c.fill()
  c.fillStyle='#dee2e6';c.beginPath();c.roundRect(-30,-4,60,48,[0,0,6,6]);c.fill()
  c.fillStyle='#fff';for(let r=0;r<3;r++)for(let k=0;k<5;k++)c.beginPath(),c.roundRect(-27+k*11.4,r*11,9,8,2),c.fill()
  for(const[k,d,tx,y]of[[0,-1,-12,8],[1,1,10,14]]){
    const l=th[k],ty=y-5*l
    c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(d*34,40,14,16,0,0,T);c.fill();c.stroke()
    ds(c,18,9,SKIN,()=>{c.moveTo(d*34,36);c.lineTo(tx,ty)})
    c.fillStyle=SKIN;c.beginPath();c.ellipse(tx,ty,6.5+1.5*l,6.5+1.5*l,0,0,T);c.fill()
  }
  c.restore()
  for(const[k,d]of[[0,-1],[1,1]])if(th[k]<.3)ds(c,8,3.5,'#fff',()=>{for(const a of[-.5,0,.5])c.moveTo(128+d*(50+12*cos(a)),196+12*sin(a)*d),c.lineTo(128+d*(50+24*cos(a)),196+24*sin(a)*d)})
  c.restore()
  // typing bubble with three bouncing dots
  c.lineWidth=5;c.fillStyle='#fff'
  for(const[x,y,r]of[[164,82,5],[176,70,9]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  c.lineWidth=6;c.beginPath();c.roundRect(168,14,80,50,25);c.fill();c.stroke()
  for(let k=0;k<3;k++){const p=(t-k*.14+1)%1,l=p<.42?sin(PI*p/.42):0;c.fillStyle=l>.3?'#495057':'#adb5bd';c.beginPath();c.arc(186+k*22,40-8*l,7,0,T);c.fill()}
}

// girl with dark brown half-up hair folding a pink paper square, poof, it becomes a paper crane that flaps up out of her hands while she watches in delight
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#6b4a35',HD='#4f3526',HL='#b8927a',EYE='#9c36b5',ED='#5f1f6e',BL='#ffa8a8',CAR='#96f2d7',CAD='#38d9a9',PAP='#faa2c1',PAD='#f06595',TIE='#fa5252',STK='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,ly,lx=0)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+lx,y+2+ly,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+lx,y-8+ly,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+3+ly,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-4,y-5+ly,4.5,0,T);c.fill();c.beginPath();c.arc(x+lx+5,y+8+ly,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const P=(c,...q)=>{c.beginPath();q.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}
const crane=(c,x,y,f)=>{
  c.save();c.translate(x,y);c.scale(-1.3,1.3);c.lineWidth=3.5;c.fillStyle=PAD
  P(c,[-14,-2],[-4,5],[-32,-28]);c.fill();c.stroke();P(c,[-32,-28],[-42,-20],[-29,-21]);c.fill();c.stroke()
  P(c,[14,-2],[5,5],[26,-20]);c.fill();c.stroke()
  c.fillStyle=PAP;P(c,[-16,0],[0,-8],[16,0],[0,11]);c.fill();c.stroke()
  c.fillStyle=PAD;P(c,[-9,-3],[9,-3],[6,-3-36*f]);c.fill();c.stroke()
  c.fillStyle=PAP;P(c,[-9,-3],[9,-3],[-4,-3-40*f]);c.fill();c.stroke()
  c.strokeStyle=PAD;c.lineWidth=2;c.beginPath();c.moveTo(0,-8);c.lineTo(0,11);c.stroke();c.strokeStyle='#111'
  c.restore()
}
const poof=(c,x,y,r)=>{c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();for(let k=0;k<6;k++){const a=k*PI/3,X=x+cos(a)*r*.7,Y=y+sin(a)*r*.5;c.moveTo(X+r*.4,Y);c.arc(X,Y,r*.4,0,T)}c.fill();c.stroke();for(let k=0;k<4;k++){const a=k*PI/2+.4;ds(c,6,2.5,'#ffd43b',()=>{c.moveTo(x+cos(a)*r*1.1,y+sin(a)*r*.9);c.lineTo(x+cos(a)*r*1.5,y+sin(a)*r*1.2)})}}
export default(c,t)=>{
  const fold=min(1,max(0,(t-.12)/.26)),fly=t>=.44&&t<.92,fp=fly?(t-.44)/.48:0,cy=198-92*sin(PI*fp),cx=128+70*sin(PI*fp),flap=.4+.6*Math.abs(sin(3*T*fp)),ly=fly?5-11*sin(PI*fp):5,lx=fly?5*sin(PI*fp):0,joy=fly&&fp>.15&&fp<.85
  c.lineWidth=7;c.fillStyle=CAR;c.beginPath();c.moveTo(102,150);c.quadraticCurveTo(62,160,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,160,154,150);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(110,152);c.lineTo(128,176);c.lineTo(146,152);c.closePath();c.fill();c.stroke()
  c.fillStyle=TIE;c.beginPath();c.moveTo(128,168);c.lineTo(120,190);c.lineTo(128,198);c.lineTo(136,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CAD;c.lineWidth=3;c.beginPath();for(const y of[200,214,228])c.moveTo(66,y),c.lineTo(80,y),c.moveTo(176,y),c.lineTo(190,y);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(118,134);c.lineTo(118,152);c.quadraticCurveTo(128,160,138,152);c.lineTo(138,134);c.fill();c.beginPath();c.moveTo(118,134);c.lineTo(118,150);c.moveTo(138,134);c.lineTo(138,150);c.stroke()
  c.save();c.translate(128,96);c.scale(.68,.68);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,202,176);c.quadraticCurveTo(190,188,180,180);c.lineTo(76,180);c.quadraticCurveTo(66,188,54,176);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(150,40);c.bezierCurveTo(190,6,214,30,200,66);c.quadraticCurveTo(188,48,164,52);c.closePath();c.fill();c.stroke()
  c.fillStyle=TIE;c.lineWidth=5;c.beginPath();c.ellipse(160,46,8,11,.6,0,T);c.fill();c.stroke()
  ds(c,9,4,STK,()=>{c.moveTo(138,30);c.lineTo(186,62)});c.fillStyle=STK;c.lineWidth=4;c.beginPath();c.arc(136,28,6,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(t>=.4&&t<.46){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,132),c.lineTo(x+8,140),c.lineTo(x-14,148),c.stroke()}else eye(c,103,140,-1,ly,lx),eye(c,153,140,1,ly,lx)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath()
  if(joy)c.moveTo(114,164),c.quadraticCurveTo(128,186,142,164),c.closePath(),c.fill(),c.stroke();else c.moveTo(120,168),c.quadraticCurveTo(128,174,136,168),c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,172)
  c.bezierCurveTo(46,80,86,38,128,38);c.bezierCurveTo(170,38,210,80,192,172)
  c.quadraticCurveTo(188,140,182,112);c.lineTo(168,114);c.lineTo(166,98);c.lineTo(150,112);c.lineTo(144,96);c.lineTo(128,112)
  c.lineTo(118,96);c.lineTo(106,112);c.lineTo(96,98);c.lineTo(88,114);c.lineTo(74,112);c.quadraticCurveTo(68,140,64,172);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,106,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  const hy=fly?214:206
  ds(c,20,11,CAR,()=>{c.moveTo(98,168);c.lineTo(80,200);c.lineTo(104,hy)})
  ds(c,20,11,CAR,()=>{c.moveTo(158,168);c.lineTo(176,200);c.lineTo(152,hy)})
  if(!fly&&t<.4){const top=-36+52*fold,w=36-10*fold
    c.fillStyle=PAP;c.lineWidth=5;P(c,[128-w,196],[128,196+top],[128+w,196],[128,232-8*fold]);c.fill();c.stroke()
    c.strokeStyle=PAD;c.lineWidth=2.5;c.beginPath();c.moveTo(128-w,196);c.lineTo(128+w,196);c.moveTo(128,196+top);c.lineTo(128,232-8*fold);c.stroke();c.strokeStyle='#111'}
  if(fly||t>=.4&&t<.46||t>=.92)crane(c,cx,cy,fly?flap:.4)
  if(t>=.38&&t<.48)poof(c,128,196,30*sin(PI*(t-.38)/.1))
  if(t>=.92)poof(c,128,200,30*sin(PI*(t-.92)/.08))
  c.fillStyle=SKIN;c.lineWidth=5;for(const x of[104,152])c.beginPath(),c.ellipse(x,hy,12,10,0,0,T),c.fill(),c.stroke()
  if(joy)for(const[x,y,r]of[[cx-34,cy-34,7],[cx+30,cy+30,6]]){c.fillStyle='#ffd43b';c.lineWidth=3;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?r*.35:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
}

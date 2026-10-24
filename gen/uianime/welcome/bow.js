// lilac-haired shop girl in a frilly headband bowing politely in welcome, hands folded in front, sparkles twinkling around her
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=12,delay=120
const SKIN='#ffe3d1',HAIR='#da77f2',HD='#ae3ec9',HL='#f8f0fc',EYE='#20c997',ED='#087f5b',DR='#4c6ef5',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',SP='#ffd43b'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.2,y+(b-a)*r*.2,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t)=>{
  const b=min(1,max(0,1.6*sin(PI*t)**2-.3)),dn=b>.4
  const head=(f,q=1)=>{c.save();c.translate(128,q?36+40*b:186+40*b);c.scale(1,q?1+.12*b:1-.38*b);c.translate(-128,q?-36:-186);f();c.restore()}
  head(()=>{c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(212,200,198,226);c.lineTo(58,226);c.quadraticCurveTo(44,200,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()})
  c.save();c.translate(0,8*b)
  c.lineWidth=6;c.fillStyle=DR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,252);c.lineTo(202,252);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*12,212,128+d*30,196),c.lineTo(128+d*14,188),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,204);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle='#ff6b6b';c.lineWidth=4;c.beginPath();c.arc(128,204,6,0,T);c.fill();c.stroke()
  for(const d of[-1,1]){
    for(const[w,s]of[[30,'#111'],[19,DR]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*58,206),c.quadraticCurveTo(128+d*52,236,128+d*14,238),c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(120,240,15,11,.3,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(136,236,15,11,-.3,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const k of[-5,1])c.moveTo(130+k,230),c.lineTo(134+k,240);c.stroke()
  c.restore()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(dn){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,132,13,PI*.15,PI*.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
    c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
    if(dn){c.lineWidth=3.5;c.beginPath();c.arc(128,164,7,.15*PI,.85*PI);c.stroke()}
    else{c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(117,165);c.quadraticCurveTo(128,186,139,165);c.closePath();c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,180,7,5,0,0,T);c.fill();c.restore()}
  },0)
  head(()=>{
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,150)
    c.quadraticCurveTo(188,118,180,104);c.quadraticCurveTo(172,100,166,110);c.quadraticCurveTo(160,96,148,92);c.quadraticCurveTo(142,104,132,108)
    c.quadraticCurveTo(126,96,114,92);c.quadraticCurveTo(108,104,98,108);c.quadraticCurveTo(92,96,82,100)
    c.quadraticCurveTo(70,120,66,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.34],[1.44,1.52],[1.66,1.76]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4
    for(let k=0;k<7;k++){const a=PI*(1.2+k*.1);c.beginPath();c.arc(128+66*cos(a),110+66*sin(a),9,0,T);c.fill();c.stroke()}
    for(const[w,s]of[[16,'#111'],[9,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,110,58,PI*1.2,PI*1.8),c.stroke()
    c.strokeStyle='#111'
  })
  c.fillStyle=SP;c.lineWidth=4
  for(const[x,y,o,r]of[[28,74,0,22],[228,96,.3,20],[34,170,.55,17],[224,184,.8,17],[206,30,.15,14]]){const s=sin(T*(t+o));if(s>0)spark(c,x,y,r*s)}
}

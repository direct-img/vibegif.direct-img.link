// sailor-uniform girl hit by a shock: lightning cracks open behind her, her eyes go blank and gloom lines run down her face, then she blinks back
const{min,PI}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const face=c=>{c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96)}
const eye=(c,x,y,d,blank,shut)=>{
  if(shut){c.lineWidth=5;c.beginPath();c.moveTo(x-14,y+2);c.quadraticCurveTo(x,y+9,x+14,y+2);c.moveTo(x+d*13,y+3);c.lineTo(x+d*19,y-1);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,17,0,0,T);c.fill()
  if(blank){c.lineWidth=3;c.stroke()}
  else{
    c.fillStyle='#111';c.beginPath();c.ellipse(x,y+2,10.5,14.5,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-4,4.5,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2.2,0,T);c.fill()
  }
  c.lineWidth=6;c.beginPath();c.moveTo(x-15,y-8);c.quadraticCurveTo(x,y-21,x+15,y-8);c.moveTo(x+d*14,y-9);c.lineTo(x+d*21,y-14);c.stroke()
}
const bolt=(c,f)=>{c.beginPath();[[24,10],[78,10],[60,54],[92,52],[30,136],[48,78],[14,82]].forEach(([x,y],k)=>c[k?'lineTo':'moveTo'](f?256-x:x,y));c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const s=i>=4&&i<=12,g=s?min(1,(i-3)/4):0,j=s?(i%2?1:-1):0
  c.translate(j,s?-2:0)
  if(s){
    const p=i==4?1.12:1
    c.save();c.translate(128,70);c.scale(p,p);c.translate(-128,-70);c.fillStyle='#fff';c.lineWidth=5;bolt(c,0);bolt(c,1);c.restore()
  }
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,204,170);c.lineTo(208,244);c.lineTo(48,244);c.lineTo(52,170);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(64,198,58,246);c.lineTo(198,246);c.quadraticCurveTo(192,198,156,190);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,28);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=16;c.beginPath();c.moveTo(96,194);c.lineTo(128,226);c.lineTo(160,194);c.stroke();c.strokeStyle='#fff';c.lineWidth=2.5;c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';c.beginPath();c.moveTo(114,222);c.lineTo(142,222);c.lineTo(128,244);c.closePath();c.fill()
  c.lineWidth=6;c.fillStyle='#fff';face(c);c.fill();c.stroke()
  eye(c,103,140,-1,s,i==14);eye(c,153,140,1,s,i==14)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,155);c.lineTo(127,158);c.stroke()
  c.lineWidth=3.5
  if(s){c.fillStyle='#fff';c.beginPath();c.ellipse(128,171,6+i%2,8-i%2,0,0,T);c.fill();c.stroke()}
  else{c.beginPath();c.arc(128,162,8,.2*PI,.8*PI);c.stroke();c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,164),c.lineTo(128+d*42+k+3,157),c.stroke()}
  if(s){c.save();face(c);c.clip();c.lineWidth=2.2;for(let x=80;x<180;x+=6){c.beginPath();c.moveTo(x,60);c.lineTo(x,60+96*g*(.7+.3*((x*7)%5)/5));c.stroke()}c.restore()}
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(74,150);c.bezierCurveTo(58,74,88,36,128,36);c.bezierCurveTo(168,36,198,74,182,150)
  c.lineTo(178,112);c.lineTo(160,110);c.lineTo(150,116);c.lineTo(140,109);c.lineTo(128,115);c.lineTo(114,109);c.lineTo(104,116);c.lineTo(94,110);c.lineTo(78,112);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*58,100);c.lineTo(128+d*46,112);c.lineTo(128+d*46,186);c.lineTo(128+d*50,244);c.lineTo(128+d*70,244);c.lineTo(128+d*62,186);c.closePath();c.fill();c.stroke()}
  c.strokeStyle='#fff';c.lineWidth=5;for(const[a,e]of[[1.22,1.34],[1.42,1.58],[1.66,1.78]])c.beginPath(),c.arc(128,106,56,PI*a,PI*e),c.stroke()
  c.lineWidth=2.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*55,150),c.lineTo(128+d*58,232),c.stroke()
  c.strokeStyle='#111'
  if(s&&i>5){c.fillStyle='#fff';c.lineWidth=3.5;const y=112+(i-6)*2;c.beginPath();c.moveTo(196,y-14);c.quadraticCurveTo(206,y,202,y+6);c.arc(196,y+5,6,0,PI);c.quadraticCurveTo(188,y,196,y-14);c.fill();c.stroke()}
}

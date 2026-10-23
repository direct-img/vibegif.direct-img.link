// flustered girl with dotted low pigtails: her ink heart pops out in front of her chest and pounds doki-doki, beat lines flaring on each thump
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,exp}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const DOT=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.5,0,T);x.fill();return t})()
const toned=(c,path,shine)=>{path();c.fillStyle='#fff';c.fill();c.fillStyle=c.createPattern(DOT,'repeat');c.fill();if(shine){c.save();c.clip();shine();c.restore()}path();c.stroke()}
export default(c,t)=>{
  const p=t*2%1,b=exp(-(((p-.06)/.07)**2))+.75*exp(-(((p-.3)/.07)**2)),s=.8*(1+.24*b),j=b>.4?1:0
  c.lineWidth=6
  for(const d of[-1,1]){c.save();c.translate(128,0);c.scale(d,1)
    toned(c,()=>{c.beginPath();c.moveTo(54,144);c.bezierCurveTo(94,164,100,214,84,244);c.quadraticCurveTo(72,232,60,238);c.quadraticCurveTo(70,204,44,172);c.closePath()})
    c.restore()}
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(66,198,62,250);c.lineTo(194,250);c.quadraticCurveTo(190,198,156,190);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(100,192);c.lineTo(128,232);c.lineTo(156,192);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=140
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x,y+1,10,14,0,0,T);c.clip();c.fillStyle=c.createPattern(DOT,'repeat');c.fillRect(x-12,y-14,24,30);c.fillStyle='#111';c.fillRect(x-12,y-14,24,8);c.restore()
    c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+1,10,14,0,0,T);c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,4.5,6,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-3+j,y-4,4,0,T);c.fill();c.beginPath();c.arc(x+4-j,y+7,2,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-15,y-6);c.quadraticCurveTo(x,y-18,x+15,y-6);c.moveTo(x+d*14,y-7);c.lineTo(x+d*20,y-12);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x+d*11,y-22);c.lineTo(x-d*9,y-28);c.stroke()}
  c.lineWidth=2.2;for(const d of[-1,1])for(let k=0;k<5;k++)c.beginPath(),c.moveTo(128+d*42+k*5-13,167),c.lineTo(128+d*42+k*5-7,156),c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(117,170);for(let k=1;k<=6;k++)c.lineTo(117+k*3.7,170+(k%2?-2.4:1.2));c.stroke()
  c.lineWidth=6
  toned(c,()=>{c.beginPath();c.moveTo(68,152);c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,152);c.quadraticCurveTo(186,118,178,104);c.lineTo(168,114);c.lineTo(160,98);c.lineTo(148,112);c.lineTo(138,96);c.lineTo(126,112);c.lineTo(114,98);c.lineTo(104,112);c.lineTo(94,100);c.lineTo(82,112);c.quadraticCurveTo(72,126,68,152);c.closePath()},
    ()=>{c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.arc(128,110,58,PI*1.22,PI*1.4);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.5,PI*1.8);c.stroke()})
  c.fillStyle='#fff';c.lineWidth=4
  for(const d of[-1,1]){const x=128+d*62,y=158
    for(const e of[-1,1])c.beginPath(),c.moveTo(x,y),c.lineTo(x+e*13,y-9),c.lineTo(x+e*13,y+9),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.arc(x,y,5,0,T);c.fill();c.stroke()}
  c.save();c.translate(128,222);c.scale(s,s);c.lineWidth=6/s;c.beginPath();c.moveTo(0,22);c.bezierCurveTo(-40,-4,-26,-36,0,-18);c.bezierCurveTo(26,-36,40,-4,0,22);c.closePath()
  c.fillStyle='#111';c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=5/s;c.beginPath();c.arc(-15,-12,9,PI*1.05,PI*1.65);c.stroke();c.restore()
  if(b>.12)for(const d of[-1,1])for(const a of[-.6,0,.6]){const r1=40,r2=44+18*b
    for(const[l,st]of[[9,'#fff'],[4,'#111']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(128+d*cos(a)*r1,220+sin(a)*r1*.8),c.lineTo(128+d*cos(a)*r2,220+sin(a)*r2*.8),c.stroke()}
}

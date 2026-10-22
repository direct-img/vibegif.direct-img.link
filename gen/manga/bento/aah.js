// girl with screentone twin tails holding out a tamagoyaki on chopsticks, "say aah", over her open bento box
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore()}
const tama=(c,x,y,s,dot)=>{c.save();c.translate(x,y);c.scale(s,s);c.lineWidth=4
  c.beginPath();c.moveTo(-12,-16);c.lineTo(20,-16);c.quadraticCurveTo(28,-16,26,-6);c.lineTo(24,10);c.quadraticCurveTo(22,18,14,18);c.lineTo(-12,18);c.closePath();c.fillStyle='#fff';c.fill();c.fillStyle=dot;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-12,1,13,17,0,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(let a=0;a<T*2.2;a+=.2){const r=1+a*1.6;c.lineTo(-12+r*cos(a)*.75,1+r*sin(a))}c.stroke();c.restore()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),p=(1-cos(t*T))/2,aah=p>.45,b=Math.round(2*sin(t*T*2))
  // twin tails, swinging a little
  for(const d of[-1,1]){
    c.save();c.translate(118+d*58,70)
    c.lineWidth=6;c.beginPath();c.moveTo(0,-6);c.bezierCurveTo(d*58,-14,d*74,62,d*58,122);c.quadraticCurveTo(d*52,146,d*40,158);c.quadraticCurveTo(d*44,136,d*34,124);c.quadraticCurveTo(d*30,140,d*20,146);c.bezierCurveTo(d*40,86,d*22,26,0,10);c.closePath();toned(c,dot)
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(d*20,4);c.bezierCurveTo(d*44,14,d*54,50,d*52,84);c.stroke();c.strokeStyle='#111';c.lineWidth=2;c.beginPath();c.moveTo(d*14,20);c.bezierCurveTo(d*36,50,d*40,90,d*32,128);c.stroke()
    c.restore()
  }
  c.save();c.translate(-10,0)
  // dark sailor uniform with white stripes
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,56,246);c.lineTo(200,246);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*32,194),c.lineTo(128+d*6,232),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(110,191);c.lineTo(128,220);c.lineTo(146,191);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128,218),c.quadraticCurveTo(128+d*18,214,128+d*20,226),c.quadraticCurveTo(128+d*10,228,128,218),c.fill(),c.stroke()
  c.beginPath();c.rect(116,168,24,24);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  // face
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){
    if(!aah){c.lineWidth=6;c.beginPath();c.moveTo(x-13,146);c.quadraticCurveTo(x,130,x+13,146);c.stroke();continue}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+3,141,10.5,15,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x,135,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,149,2,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
  }
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*40+(k-1.5)*5-3,170),c.lineTo(128+d*40+(k-1.5)*5+3,161),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath()
  if(aah){c.ellipse(128,172,9,11,0,0,T);c.fill();c.stroke();c.save();c.clip();c.fillStyle='#fff';c.beginPath();c.ellipse(128,182,7,5,0,0,T);c.fill();c.restore()}
  else{c.moveTo(119,166);c.quadraticCurveTo(128,178,137,166);c.closePath();c.fill();c.stroke()}
  // screentone bangs, ribbons on the tails
  c.lineWidth=6;c.beginPath();c.moveTo(70,146);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=30;k++){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?52:48)*cos(a),104+(k%2?52:48)*sin(a))}for(let k=30;k>=0;k--){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?44:40)*cos(a),104+(k%2?44:40)*sin(a))}c.fill()
  c.fillStyle='#111';c.lineWidth=4;for(const d of[-1,1]){const x=128+d*62;for(const e of[-1,1])c.beginPath(),c.moveTo(x,74),c.lineTo(x+e*16,62),c.lineTo(x+e*16,86),c.closePath(),c.fill(),c.stroke();c.beginPath();c.arc(x,74,5,0,T);c.fill()}
  c.restore()
  // open bento held in her left hand
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.roundRect(30,200,124,48,8);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(90,204);c.lineTo(90,244);c.moveTo(90,224);c.lineTo(150,224);c.stroke()
  c.fillStyle=dot;c.beginPath();c.roundRect(36,206,50,36,4);c.fill();c.fillStyle='#fff';for(const[x,y]of[[50,216],[66,228],[76,214],[44,232]])c.beginPath(),c.ellipse(x,y,4,2.5,.4,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.arc(61,222,7,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(59,219,2,0,T);c.fill()
  c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.roundRect(96,206,24,15,4);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.arc(103,213,4,0,T*.8);c.stroke()
  c.lineWidth=3;c.beginPath();c.arc(136,212,6,0,T);c.fillStyle=dot;c.fill();c.stroke();c.beginPath();c.arc(130,215,5,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(112,236,12,7,0,PI,0);c.lineTo(124,236);c.fill();c.stroke();for(let k=0;k<4;k++)c.beginPath(),c.moveTo(101+k*7,236),c.quadraticCurveTo(100+k*7,244,104+k*7,244),c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(108,231,1.5,0,T);c.arc(116,231,1.5,0,T);c.fill()
  c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(28,226,10,13,.3,0,T);c.fill();c.stroke()
  // chopsticks bring the tamagoyaki forward
  const s=1+.35*p,tx=154+12*p,ty=192+6*p,hx=216,hy=216+b
  for(const o of[-5,5])for(const[l,st]of[[8,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(hx+14,hy+16+o*.3),c.lineTo(tx+10*s,ty+o*s*.9),c.stroke()
  c.strokeStyle='#111';tama(c,tx,ty,s,dot)
  c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(hx,hy,12,13,-.4,0,T);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(hx-8,hy-2);c.quadraticCurveTo(hx-2,hy+2,hx+2,hy-4);c.stroke()
  // sparkle on the egg and a heart
  c.fillStyle='#fff';c.lineWidth=3;const sp=7*p;if(sp>2){c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?sp*.3:sp;c.lineTo(tx+30*s+r*cos(a),ty-20*s+r*sin(a))}c.closePath();c.fill();c.stroke()}
  const hp=(t+.25)%1;c.fillStyle='#111';heart(c,214,104-hp*40,.9+.4*sin(PI*hp));c.fill()
}

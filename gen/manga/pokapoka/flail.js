// chibi with hatched high pigtails throwing a poka-poka tantrum: both little arms windmill-punching, tears at her squeezed eyes, steam puffs and an anger mark
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=60,rim=4
const hatch=(c,x0,x1,y0,y1,s=5)=>{c.lineWidth=1.6;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=s)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0);c.stroke()}
const hatched=(c,path)=>{path();c.fillStyle='#fff';c.fill();c.save();c.clip();hatch(c,20,240,10,200);c.restore();c.lineWidth=5;path();c.stroke()}
const puff=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=4/s;c.beginPath();c.arc(-8,0,8,PI*.5,PI*1.6);c.arc(2,-5,9,PI*1.1,PI*1.95);c.arc(10,1,7,PI*1.4,PI*.5);c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t)=>{
  const b=2*max(0,sin(4*T*t)),stomp=sin(4*T*t)
  for(const o of[0,.33,.66]){const p=(t*2+o)%1;if(p<.85)puff(c,128+(o-.33)*70+sin(p*6)*6,40-p*34,.5+.6*p)}
  c.save();c.translate(0,-b)
  for(const d of[-1,1]){c.save();c.translate(128+d*54,58);c.rotate(-d*(.5+.12*sin(4*T*t+d)))
    hatched(c,()=>{c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*34,-8,d*40,40,d*24,70);c.quadraticCurveTo(d*16,62,d*8,70);c.quadraticCurveTo(d*14,30,-d*4,10);c.closePath()})
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,4,7,0,T);c.fill();c.stroke();c.restore()}
  c.lineWidth=5;c.fillStyle='#fff'
  for(const d of[-1,1]){const lift=d*stomp>0?6*abs(stomp):0;c.beginPath();c.roundRect(128+d*14-7,196-lift,14,30,6);c.fill();c.stroke();c.beginPath();c.ellipse(128+d*16,228-lift,13,8,0,0,T);c.fillStyle='#111';c.fill();c.fillStyle='#fff'}
  c.beginPath();c.moveTo(108,150);c.lineTo(148,150);c.lineTo(170,206);c.quadraticCurveTo(128,214,86,206);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const x of[104,118,132,146])c.moveTo(x,170),c.lineTo(x-4,206);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(128,96,62,56,0,0,T);c.fill();c.stroke()
  for(const[x,d]of[[104,-1],[152,1]]){c.lineWidth=5.5;c.beginPath();c.moveTo(x-d*12,104);c.lineTo(x+d*8,112);c.lineTo(x-d*12,120);c.stroke()
    c.fillStyle='#fff';c.lineWidth=3;const q=(t*4+(d>0?.5:0))%1;c.save();c.translate(x+d*(20+q*14),110-q*8+q*q*30);c.beginPath();c.moveTo(0,-7);c.quadraticCurveTo(5,0,4.5,3);c.arc(0,3,4.5,0,PI);c.quadraticCurveTo(-5,0,0,-7);c.fill();c.stroke();c.restore()}
  c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*40+k-3,132),c.lineTo(128+d*40+k+3,124),c.stroke()
  const m=3*sin(8*T*t)
  c.fillStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(118,126);c.quadraticCurveTo(128,120,138,126);c.quadraticCurveTo(138,136+m,128,136+m);c.quadraticCurveTo(118,136+m,118,126);c.fill();c.stroke()
  hatched(c,()=>{c.beginPath();c.moveTo(68,112);c.bezierCurveTo(56,52,88,38,128,38);c.bezierCurveTo(168,38,200,52,188,112);c.quadraticCurveTo(186,88,178,80);c.lineTo(168,92);c.lineTo(162,76);c.lineTo(150,90);c.lineTo(142,74);c.lineTo(130,88);c.lineTo(122,72);c.lineTo(110,88);c.lineTo(102,74);c.lineTo(92,90);c.lineTo(84,78);c.quadraticCurveTo(72,90,68,112);c.closePath()})
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,90,50,PI*1.25,PI*1.42);c.stroke();c.beginPath();c.arc(128,90,50,PI*1.56,PI*1.74);c.stroke();c.strokeStyle='#111'
  for(const[x,d]of[[104,-1],[152,1]])for(const[l,st]of[[9,'#fff'],[4,'#111']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(x+d*14,88),c.lineTo(x-d*8,97),c.stroke()
  const ap=1+.15*sin(4*T*t);c.save();c.translate(170,52);c.scale(ap,ap);c.lineWidth=7;c.strokeStyle='#fff';c.beginPath();for(const[a,e]of[[0,1],[1,2],[2,3],[3,0]])c.moveTo(cos(a*PI/2+PI/4)*4,sin(a*PI/2+PI/4)*4),c.quadraticCurveTo(cos(a*PI/2+PI/2)*4,sin(a*PI/2+PI/2)*4,cos(a*PI/2+PI/4)*13,sin(a*PI/2+PI/4)*13);c.stroke();c.lineWidth=3.5;c.strokeStyle='#111';c.stroke();c.restore()
  for(const d of[-1,1]){const sx=128+d*34,sy=166,a=4*T*t*d*-1+(d>0?PI:0),fx=sx+cos(a)*36,fy=sy+sin(a)*30
    c.beginPath();c.ellipse(sx,sy,42,36,0,a+d*2.4,a+d*.5,d>0);for(const[l,st]of[[8,'#fff'],[3.5,'#111']])c.lineWidth=l,c.strokeStyle=st,c.stroke()
    for(const[l,st]of[[16,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(sx,sy),c.lineTo(fx,fy),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.arc(fx,fy,11,0,T);c.fill();c.stroke()}
  c.restore()
}
const abs=Math.abs

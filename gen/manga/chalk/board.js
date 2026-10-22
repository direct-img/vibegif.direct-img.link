// side view: girl on tiptoe stretching to write a cursive line high on the chalkboard, chalk squeaking, dust puffs, then the line dusts away
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
// prolate cycloid reads as looped handwriting
const W=(u,x0,y0,w)=>{const th=u*12*PI;return[x0+w*u-5*sin(th),y0-5*cos(th)+5]}
const line=(c,x0,y0,w,u)=>{c.beginPath();for(let k=0;k<=u*120;k++){const[x,y]=W(k/120,x0,y0,w);c.lineTo(x,y)}c.stroke()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),wr=t<.8,u=min(t/.8,1),b=i%2,fade=wr?1:1-(t-.8)/.2
  // chalkboard
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(124,18,124,160);c.fill();c.stroke()
  c.fillStyle='#111';c.fillRect(132,26,108,144)
  c.strokeStyle='#fff';c.lineWidth=3;line(c,150,40,70,1);c.beginPath();c.moveTo(146,58);c.lineTo(228,58);c.stroke()
  c.lineWidth=2.5;for(const y of[120,146])line(c,178,y,52,1)
  c.lineWidth=3;c.beginPath();for(let k=0;k<=10;k++){const a=k*PI/5-PI/2,r=k%2?5:12;c.lineTo(156+r*cos(a),136+r*sin(a))}c.closePath();c.stroke()
  c.globalAlpha=fade;c.lineWidth=3;line(c,140,82,64,u);c.globalAlpha=1
  if(!wr)for(let k=0;k<7;k++){const p=(t-.8)/.2,x=144+k*9,y=86-p*(14+k%3*6)-(k%2)*4;c.fillStyle='#fff';c.beginPath();c.arc(x+3*sin(k+p*6),y,1.6+k%2,0,T);c.fill()}
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(126,172,120,8);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.rect(206,164,22,8);c.fillStyle=dot;c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.rect(184,167,14,5);c.fill();c.stroke()
  // where the chalk is
  const[ex,ey]=W(1,140,82,64),[tx,ty]=wr?W(u,140,82,64):[ex+(140-ex)*(t-.8)/.2,ey+10*sin(PI*(t-.8)/.2)]
  const y=b?-1:0
  c.save();c.translate(0,y)
  // ponytail behind
  c.lineWidth=5;c.fillStyle='#fff';const sw=6*sin(t*T*2)
  c.beginPath();c.moveTo(56,92);c.bezierCurveTo(30+sw,96,18+sw,140,26+sw*1.5,176);c.quadraticCurveTo(34+sw,166,40+sw,170);c.bezierCurveTo(38+sw,140,52,118,66,104);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const k of[0,1])c.beginPath(),c.moveTo(50-k*6,104),c.quadraticCurveTo(30+sw-k*2,130,32+sw*1.3-k*3,160),c.stroke()
  // far arm: under her chin, elbow out, up to the chalk
  const ox=134+(tx-140)*.3
  c.beginPath();c.moveTo(98,176);c.lineTo(ox,160);c.lineTo(tx-4,ty+10)
  for(const[l,s2]of[[21,'#fff'],[14,'#111'],[8,'#fff'],[8,dot]])c.lineWidth=l,c.strokeStyle=s2,c.stroke()
  c.strokeStyle='#fff';c.lineWidth=12;c.beginPath();c.arc(tx-3,ty+8,8,0,T);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(tx-3,ty+8,8,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.rect(tx-2,ty-3,5,8);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(tx-9,ty+5);c.lineTo(tx-4,ty+5);c.moveTo(tx-9,ty+10);c.lineTo(tx-4,ty+10);c.stroke()
  // legs on tiptoe and skirt
  for(const[x,d]of[[70,0],[86,1]]){c.lineWidth=12;c.beginPath();c.moveTo(x,214);c.lineTo(x+2,240);c.stroke();c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(x,214);c.lineTo(x+2,240);c.stroke();c.strokeStyle='#111'
    c.fillStyle=d?'#111':'#fff';c.lineWidth=4;c.beginPath();c.ellipse(x+5,241,9,4.5,1.05,0,T);c.fill();c.stroke()}
  c.lineWidth=2.5;for(const d of[-1,1])c.beginPath(),c.arc(79+d*22,236,6,d<0?.6*PI:-.4*PI,d<0?1.4*PI:.4*PI),c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(62,196);c.lineTo(100,196);c.lineTo(108,222);c.lineTo(54,222);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;for(const x of[68,80,92])c.beginPath(),c.moveTo(x+(x-81)*.1,198),c.lineTo(x+(x-81)*.35,221),c.stroke()
  // cardigan body and the arm resting on the tray
  c.lineWidth=5;c.fillStyle=dot;c.beginPath();c.moveTo(70,160);c.quadraticCurveTo(60,180,62,200);c.lineTo(102,200);c.quadraticCurveTo(102,176,94,160);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(80,162);c.lineTo(86,178);c.lineTo(92,162);c.fill();c.stroke()
  c.lineWidth=13;c.beginPath();c.moveTo(78,170);c.quadraticCurveTo(96,196,120,182);c.stroke();c.strokeStyle=dot;c.lineWidth=7;c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(123,181,6.5,0,T);c.fill();c.stroke()
  // head in profile
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.arc(80,124,40,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(82,98);c.quadraticCurveTo(116,98,118,124);c.lineTo(124,140);c.lineTo(118,144);c.quadraticCurveTo(120,152,116,156);c.quadraticCurveTo(110,168,92,166);c.quadraticCurveTo(80,164,76,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.arc(80,140,7,-.5*PI,.6*PI);c.stroke()
  // eye looking up at the board
  c.fillStyle='#fff';c.beginPath();c.ellipse(105,130,7,12,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(108,127,5.5,9.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(109,123,2.6,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(98,120);c.quadraticCurveTo(106,114,114,118);c.moveTo(99,121);c.lineTo(93,116);c.stroke()
  c.lineWidth=3;c.beginPath();c.ellipse(114,153,3,2.5+b,0,0,T);c.stroke()
  c.lineWidth=2.5;for(let k=0;k<3;k++)c.beginPath(),c.moveTo(97+k*4,150),c.lineTo(100+k*4,144),c.stroke()
  // white hair: crown, bangs, scrunchie
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(42,132);c.bezierCurveTo(34,82,80,74,104,90);c.quadraticCurveTo(118,100,120,118)
  c.quadraticCurveTo(112,112,110,118);c.quadraticCurveTo(104,106,98,114);c.quadraticCurveTo(92,104,86,112);c.quadraticCurveTo(80,104,78,128);c.quadraticCurveTo(70,120,60,138);c.quadraticCurveTo(52,128,42,132);c.fill();c.stroke()
  c.lineWidth=2;for(const[a,b2,e]of[[[52,98],[70,88],[86,96]],[[50,112],[64,100],[80,104]],[[96,96],[108,100],[114,112]]])c.beginPath(),c.moveTo(...a),c.quadraticCurveTo(...b2,...e),c.stroke()
  c.fillStyle=dot;c.lineWidth=4;c.beginPath();c.ellipse(56,94,9,12,.5,0,T);c.fill();c.stroke()
  c.restore()
  // squeak marks and chalk dust at the tip
  if(wr){
    c.strokeStyle='#fff';c.lineWidth=2.5;if(i%3==0)for(const a of[-.9,-.4,.1])c.beginPath(),c.moveTo(tx+10*cos(a),ty-6+10*sin(a)),c.lineTo(tx+16*cos(a),ty-6+16*sin(a)),c.stroke()
    c.fillStyle='#fff';for(let k=0;k<3;k++){const p=(t*5+k/3)%1;c.beginPath();c.arc(tx+10+k*3,ty+2+p*18,1.4+p*1.4,0,T);c.fill()}
    c.strokeStyle='#111'
  }
}

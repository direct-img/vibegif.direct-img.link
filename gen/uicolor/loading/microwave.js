// mint microwave humming away: light on inside, a smiling soup bowl turning round on the spinning plate, the green timer glowing and counting down
const{sin,cos,PI,floor}=Math,T=2*PI
export const frames=20,delay=90
const BO='#63e6be',BD='#20c997',IN='#fff3bf',BW='#ff8787',SO='#ffd43b',DS='#343a40',GG='#2f9e44',GB='#b2f2bb',BL='#ffa8a8'
const SEG=[63,6,91,79,102,109,125,7,127,111]
const digit=(c,n,x,y,w=11,h=20)=>{const P=[[0,0,w,0],[w,0,w,h/2],[w,h/2,w,h],[0,h,w,h],[0,h/2,0,h],[0,0,0,h/2],[0,h/2,w,h/2]];c.beginPath();P.forEach(([a,b,e,f],k)=>{if(SEG[n]>>k&1)c.moveTo(x+a,y+b),c.lineTo(x+e,y+f)})}
export default(c,t,i)=>{
  const th=t*T,PX=98,PY=162
  c.fillStyle=BD;for(const x of[44,196])c.beginPath(),c.roundRect(x-14,200,28,22,8),c.fill(),c.stroke()
  c.fillStyle=BO;c.beginPath();c.roundRect(14,44,228,166,24);c.fill();c.stroke()
  c.fillStyle=BD;c.beginPath();c.roundRect(28,58,144,138,16);c.fill();c.lineWidth=5;c.stroke()
  const win=()=>{c.beginPath();c.roundRect(40,70,118,114,10)}
  c.fillStyle=IN;win();c.fill()
  c.save();win();c.clip()
  c.fillStyle='#ffe066';c.beginPath();c.ellipse(99,70,44,16,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(PX,PY,46,12,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#dee2e6';for(let k=0;k<6;k++){const a=th+k*T/6;if(sin(a)>0)continue;c.beginPath();c.arc(PX+cos(a)*36,PY+sin(a)*8,2.6,0,T);c.fill()}
  const by=PY-6
  c.fillStyle=BW;c.lineWidth=6;c.beginPath();c.ellipse(PX,by-32,32,8,0,0,PI,true);c.ellipse(PX,by-32,32,34,0,0,PI);c.fill();c.stroke()
  c.save();c.beginPath();c.ellipse(PX,by-32,32,34,0,0,PI);c.clip()
  for(const[o,face]of[[0,1],[PI,0]]){const a=th+o,cx=PX+22*sin(a),k=cos(a);if(k<.05)continue
    c.save();c.translate(cx,by-11);c.scale(k,1)
    if(face){c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*9,-4,3.5,0,T),c.fill();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*9-1.2,-5.2,1.3,0,T),c.fill();c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.arc(0,0,4.5,.15*PI,.85*PI);c.stroke();c.fillStyle='#ffc9c9';for(const d of[-1,1])c.beginPath(),c.ellipse(d*16,1,4,2.5,0,0,T),c.fill()}
    else{c.fillStyle='#fff';c.beginPath();c.moveTo(0,6);c.bezierCurveTo(-12,-2,-7,-11,0,-5);c.bezierCurveTo(7,-11,12,-2,0,6);c.fill()}
    c.restore()}
  c.restore()
  c.fillStyle=SO;c.beginPath();c.ellipse(PX,by-32,27,6,0,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=6;c.beginPath();c.ellipse(PX,by-32,32,8,0,0,T);c.stroke()
  for(let k=0;k<2;k++){const pts=[];for(let s=0;s<=1;s+=.125)pts.push([PX-10+k*20+4*sin(T*(s-t*2)+k*2),by-46-30*s]);for(const[w,st]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));c.stroke()}}
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(52,92);c.lineTo(62,82);c.moveTo(52,108);c.lineTo(76,84);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=6;win();c.stroke()
  c.lineWidth=7;c.fillStyle=DS;c.beginPath();c.roundRect(180,64,50,34,8);c.fill();c.stroke()
  const n=20-i;for(const[w,col]of[[7,GG],[3.5,GB]]){c.lineWidth=w;c.strokeStyle=col;digit(c,floor(n/10),189,71);c.stroke();digit(c,n%10,210,71);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=4
  for(let r=0;r<2;r++)for(let q=0;q<3;q++){c.fillStyle=['#fff','#ffd43b','#ff8787'][q];c.beginPath();c.roundRect(182+q*16,110+r*18,12,12,4);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(205,170,16,0,T);c.fill();c.stroke()
  c.save();c.translate(205,170);c.rotate(-th);c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.lineTo(0,-10);c.stroke();c.restore()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(160,84,10,90,5);c.fill();c.stroke()
}

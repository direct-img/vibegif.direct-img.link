// a girl with a short blue cut and a little side ponytail in a purple sporty top pumps a floor pump that pushes the coverage gauge needle from 40% to 100%, it glows gold and she throws a peace sign
// tags: proud, anime, coding, testing, gauge, celebration
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor,round}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const star=(c,x,y,r,f,w=2)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/5-P/2,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);c.stroke();c.beginPath();c.moveTo(x+f*9,y+3);c.lineTo(x+f*13,y);c.lineWidth=3;return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){star(c,x+lx,y+ly+2,7.5*pp,'#fff36b',1.6);el(c,x+lx-4.5,y+ly-5,2.4,2.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='drool'){c.moveTo(-5,0);c.quadraticCurveTo(0,3,5,0);c.stroke();c.beginPath();c.moveTo(4,1);c.quadraticCurveTo(7,6,5,9);c.quadraticCurveTo(2,6,4,1);fs(c,'#bfe8ff',1.6)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=26,delay=80,rim=4
const H='#3f7de8',Hd='#2a55b0',Hl='#9cc4ff',S='#e2ae86',J='#8a5cf0',Jd='#6a3cc8'
export default(c,t,i)=>{
  const T0=k=>.03+k*.14,dn=k=>{const u=(t-T0(k))/.14;return u<0?0:u>1?0:sg(u,.15,.45)*(1-sg(u,.5,1))},
    push=[0,1,2,3].reduce((a,k)=>a+dn(k),0),gold=sg(t,.6,.64)*(1-sg(t,.86,.94)),pose=t>.62&&t<.88,
    rs=sg(t,.86,.96),hh=pose?0:push
  let v=40;for(let k=0;k<4;k++){const u=(t-T0(k))/.14;if(u>.15)v+=15*min(1,sg(u,.15,.45))+(u<1?sin(sg(u,.4,1)*P*2)*3*(1-sg(u,.4,1)):0)}
  v=min(102,v)-(rs*60)+(gold>.5?sin(t*60)*1:0)
  // gauge
  const gx=62,gy=66,R=50
  if(gold>0){c.save();c.translate(gx,gy+8);for(let k=0;k<9;k++){c.save();c.rotate((k-4)*P/16+sin(t*20+k)*.04);pg(c,-6,-R-4,6,-R-4,0,-R-4-18*gold);fs(c,'#ffd84d',2.5);c.restore()}c.restore()}
  c.beginPath();c.arc(gx,gy,R,P,0);c.lineTo(gx+R,gy+34);c.quadraticCurveTo(gx+R,gy+40,gx+R-6,gy+40);c.lineTo(gx-R+6,gy+40);c.quadraticCurveTo(gx-R,gy+40,gx-R,gy+34);c.closePath();fs(c,gold>.5?'#fff1b0':'#fff')
  for(const[a,b,col]of[[0,.5,'#ff6b6b'],[.5,.8,'#ffd166'],[.8,1,'#5ad18f']]){c.beginPath();c.arc(gx,gy,R-8,P+a*P,P+b*P);c.lineWidth=8;c.strokeStyle=col;c.stroke()}
  for(let k=0;k<=10;k++){const a=P+k*P/10;c.beginPath();c.moveTo(gx+cos(a)*(R-14),gy+sin(a)*(R-14));c.lineTo(gx+cos(a)*(R-(k%5?19:23)),gy+sin(a)*(R-(k%5?19:23)));c.lineWidth=2;c.strokeStyle=O;c.stroke()}
  const na=P+v/100*P;c.beginPath();c.moveTo(gx,gy);c.lineTo(gx+cos(na)*(R-12),gy+sin(na)*(R-12));st(c,3.5,'#e8344e',2.2);el(c,gx,gy,6);fs(c,'#555c70',2.5)
  tx(c,(gold>.3?100:min(100,round(v)))+'%',gx,gy+14,15,gold>.5?'#ffd84d':'#fff',4.5);tx(c,'coverage',gx,gy+31,12,'#7a6fa8',0)
  // hose from the pump to the gauge
  c.beginPath();c.moveTo(150,230);c.bezierCurveTo(70,240,24,210,gx-30,gy+40);st(c,5,'#3a3f57',2.5)
  // back hair + side ponytail
  const hy=86+hh*6,hx=158
  c.save();c.translate(hx,hy);c.scale(.8,.8)
  c.save();c.translate(44,-30);c.rotate(.3+sin(t*4*P)*.08);c.beginPath();c.moveTo(0,-6);c.bezierCurveTo(30,-4,40,30,30,64);c.quadraticCurveTo(22,50,12,60);c.quadraticCurveTo(18,26,-4,8);c.closePath();fs(c,H);c.restore()
  el(c,44,-30,7,9);fs(c,'#ffd84d',3)
  c.beginPath();c.moveTo(-48,-10);c.bezierCurveTo(-52,16,-46,26,-38,30);c.lineTo(38,30);c.bezierCurveTo(46,26,52,16,48,-10);fs(c,Hd)
  c.restore()
  // torso
  c.beginPath();c.moveTo(hx-22,126+hh*5);c.bezierCurveTo(hx-44,132,hx-50,154,hx-50,186);c.lineTo(hx-50,240);c.lineTo(hx+50,240);c.lineTo(hx+50,186);c.bezierCurveTo(hx+50,154,hx+44,132,hx+22,126+hh*5);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-14,128+hh*5);c.quadraticCurveTo(hx,140+hh*5,hx+14,128+hh*5);fs(c,S,3)
  for(const f of[-1,1]){c.beginPath();c.moveTo(hx+f*36,140);c.lineTo(hx+f*42,236);c.lineWidth=4;c.strokeStyle='#fff';c.stroke()}
  // head
  c.save();c.translate(hx,hy);c.scale(.8,.8);c.rotate(pose?.08:-.02)
  hd(c,S)
  face(c,pose?{ex:'happy',m:'grin',mo:1.2,br:.5,bc:Hd}:{e:['#a3245e','#ff8ccf'],lx:-6,ly:-2,pp:.9,m:hh>.5?'grit':'smile',mo:hh>.5?.8:.9,br:hh>.5?-.7:0,bc:Hd})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,22)
  qs(c,[50,22,44,-4,36,-12,28,-26,16,-6,4,-28,-6,-8,-20,-26,-28,-6,-38,-18,-46,0,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  c.restore()
  if(hh>.5)drop(c,hx-44,hy-24,.8)
  // floor pump in front of her
  const ty=150+hh*24
  rr(c,118,226,64,10,4);fs(c,'#3a3f57')
  rr(c,141,160,18,68,5);fs(c,'#2fc4b2');rr(c,144,166,5,56,2);fs(c,'rgba(255,255,255,.5)',0)
  c.beginPath();c.moveTo(150,ty);c.lineTo(150,162);st(c,4,'#c9d0e0',2)
  rr(c,116,ty-7,68,13,6);fs(c,'#3a3f57')
  // arms
  const arm=(sx,sy,qx,qy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,13,S,3.2);el(c,x,y,8.5,8);fs(c,S,3.2)}
  arm(hx-38,140+hh*5,hx-50,150+hh*12,124,ty)
  if(pose){c.beginPath();c.moveTo(hx+38,140);c.quadraticCurveTo(hx+66,128,hx+70,96);st(c,13,S,3.2)
    c.save();c.translate(hx+70,88);c.rotate(.2);for(const a of[-.25,.2]){c.beginPath();c.moveTo(0,0);c.lineTo(sin(a)*20,-cos(a)*20);st(c,6,S,3)}el(c,0,4,9,8.5);fs(c,S,3.2);c.restore()
    for(let k=0;k<5;k++){const a=k*1.26+t*6;star(c,hx+cos(a)*72,hy+sin(a)*54,4+2*sin(t*50+k),'#ffe14d',2)}}
  else arm(hx+38,140+hh*5,hx+50,150+hh*12,176,ty)
}

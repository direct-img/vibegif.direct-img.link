// manga chibi princess twirling in a ball gown: skirt folds sweep around, hem flares, curly white hair swings, sparkles circle her
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const star=(c,x,y,s)=>{c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.3:s,a=k*PI/4;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),r=t*T,sw=sin(r),fl=1+.06*sin(2*r)
  // sparkles circling, the ones behind her first
  const sp=k=>{const a=r+k*T/5;return[128+100*cos(a),168+22*sin(a),sin(a),k]}
  const drawSp=([x,y,z,k])=>{c.fillStyle='#fff';c.lineWidth=2.5;star(c,x,y,(5+3*z)*(1+.3*sin(r*3+k)))}
  for(let k=0;k<5;k++){const p=sp(k);if(p[2]<0)drawSp(p)}
  // curly white hair behind: a ringlet lock down each side, swinging out with the spin
  for(const d of[-1,1]){const X=x=>128+d*x,o=-d*10*sw,lk=()=>{c.beginPath();c.moveTo(X(26),46);c.quadraticCurveTo(X(58),46,X(60),80)
      for(let k=0;k<4;k++){const y=90+k*20,ox=o*(k+1)/4;c.quadraticCurveTo(X(70)+ox,y+4,X(60)+ox,y+12)}
      c.quadraticCurveTo(X(54)+o,182,X(42)+o,172);for(let k=3;k>=0;k--){const y=90+k*20,ox=o*k/4;c.quadraticCurveTo(X(34)+ox,y+8,X(40)+ox,y-4)}c.closePath()}
    c.lineWidth=5;c.fillStyle='#fff';lk();c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();for(let k=0;k<4;k++){const y=96+k*20,ox=o*(k+.5)/4;c.moveTo(X(42)+ox,y);c.quadraticCurveTo(X(54)+ox,y+4,X(60)+ox,y+12)}c.stroke()}
  // ball gown: bell skirt whose folds sweep around as she turns
  const W=82*fl,hem=x=>222+5*sin((x-128)/W*PI*3-r*2)
  const sk=()=>{c.beginPath();c.moveTo(112,136);c.bezierCurveTo(100,170,128-W*.8,190,128-W,hem(128-W));for(let x=128-W;x<=128+W;x+=4)c.lineTo(x,hem(x));c.bezierCurveTo(128+W*.8,190,156,170,144,136);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';sk();c.fill()
  c.save();c.clip()
  for(let k=0;k<8;k++){const a=r+k*T/8,z=sin(a);if(z<0)continue;const x=128+W*cos(a)
    c.fillStyle=k%2?tn:'#fff';c.beginPath();c.moveTo(128+16*cos(a),136);c.quadraticCurveTo(128+W*.6*cos(a),190,x,232);const a2=a+T/8;c.lineTo(128+W*cos(a2),232);c.quadraticCurveTo(128+W*.6*cos(a2),190,128+16*cos(a2),136);c.closePath();if(k%2)c.fill()
    c.lineWidth=2.5;c.beginPath();c.moveTo(128+16*cos(a),136);c.quadraticCurveTo(128+W*.6*cos(a),190,x,232);c.stroke()}
  c.restore();sk();c.stroke()
  // ruffled hem
  c.lineWidth=3;c.beginPath();for(let x=128-W+8;x<=128+W-8;x+=12)c.moveTo(x+6,hem(x)-6),c.arc(x,hem(x)-6,6,0,PI);c.stroke()
  // bodice with puffed sleeves and a bow
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(110,104);c.lineTo(146,104);c.lineTo(142,140);c.quadraticCurveTo(128,146,114,140);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(100,100,56,50);c.restore();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*22,110,11,9,d*.4,0,T),c.fillStyle='#fff',c.fill(),c.stroke()
  c.fillStyle='#fff';c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,140),c.lineTo(128+d*12,132),c.lineTo(128+d*12,148),c.closePath(),c.fill(),c.stroke()
  // arms: one raised in a flourish, one out to hold the skirt
  for(const[pts,hx,hy]of[[[146,112,170,96],174,70],[[110,112,92,128],80,146]]){for(const[l,s]of[[11,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(pts[0],pts[1]),c.quadraticCurveTo(pts[2],pts[3],hx,hy),c.stroke()
    c.strokeStyle='#111';c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.arc(hx,hy,5.5,0,T);c.fill();c.stroke()}
  // head
  c.save();c.translate(128,66);c.scale(.48,.48);c.translate(-128,-120)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // happy closed eyes with lashes
  c.lineWidth=7;for(const[x,d]of[[103,-1],[153,1]]){c.beginPath();c.moveTo(x-16,144);c.quadraticCurveTo(x,126,x+16,144);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(x+d*14,138);c.lineTo(x+d*22,132);c.moveTo(x+d*16,144);c.lineTo(x+d*24,142);c.stroke();c.lineWidth=7}
  c.lineWidth=3.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,186,142,166);c.closePath();c.fill();c.stroke()
  // wavy white bangs with strand lines
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(70,146);c.bezierCurveTo(52,74,88,40,128,40);c.bezierCurveTo(168,40,204,74,186,146)
  c.quadraticCurveTo(184,114,172,102);c.quadraticCurveTo(166,112,156,114);c.quadraticCurveTo(152,96,138,90);c.quadraticCurveTo(134,106,124,110);c.quadraticCurveTo(118,96,104,92)
  c.quadraticCurveTo(100,108,90,112);c.quadraticCurveTo(84,106,80,102);c.quadraticCurveTo(70,118,70,146);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();for(const[a,b,e,f]of[[98,56,88,90],[118,50,116,84],[148,52,154,84],[166,62,176,98]])c.moveTo(a,b),c.quadraticCurveTo((a+e)/2+6,(b+f)/2,e,f);c.stroke()
  // tiara with jewels and a glint
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(88,62);c.lineTo(100,36);c.lineTo(112,52);c.lineTo(128,20);c.lineTo(144,52);c.lineTo(156,36);c.lineTo(168,62);c.quadraticCurveTo(128,50,88,62);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const[x,y,s]of[[128,42,7],[102,50,4],[154,50,4]])c.beginPath(),c.arc(x,y,s,0,T),c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(126,40,2.5,0,T);c.fill()
  const g=max(0,sin(r*2));if(g>.3){c.lineWidth=4;star(c,150,14,18*g)}
  c.restore()
  for(let k=0;k<5;k++){const p=sp(k);if(p[2]>=0)drawSp(p)}
}

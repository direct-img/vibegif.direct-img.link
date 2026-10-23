// manga kappa girl with messy screentone hair, the water dish on her head sloshing and a turtle-shell backpack, munching a cucumber with webbed hands: bite, chew, chew
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
// big round eyes, iris toned with an ink top band and a ring of tiny highlights
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,15,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,12,13.5,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-13,y-12,26,28);c.fillStyle='#111';c.beginPath();c.ellipse(x,y-9,14,9,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,12,13.5,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(x,y+3,5.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2.2,0,T);c.fill();c.beginPath();c.arc(x+6,y-1,1.4,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-17,y-6);c.quadraticCurveTo(x,y-20,x+17,y-6);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(x+d*15,y-8);c.lineTo(x+d*21,y-13);c.moveTo(x+d*16,y-3);c.lineTo(x+d*22,y-5);c.stroke()
}
const cuke=(c,x,y,tn)=>{
  // bumpy cucumber, bitten off at the right end
  c.save();c.translate(x,y);c.rotate(-.12)
  c.beginPath();c.moveTo(-50,-10);c.quadraticCurveTo(-62,0,-50,10);c.lineTo(34,12);for(let k=0;k<5;k++)c.lineTo(38+(k%2)*5,12-k*6);c.lineTo(34,-12);c.closePath()
  c.fillStyle='#fff';c.lineWidth=4;c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(-64,-14,94,10);c.restore();c.stroke()
  c.fillStyle='#111';for(const[a,b]of[[-36,2],[-20,-6],[-6,4],[10,-4],[22,6]])c.beginPath(),c.arc(a,b,1.8,0,T),c.fill()
  c.lineWidth=2;c.beginPath();c.ellipse(36,0,3,8,0,0,T);c.stroke()
  c.restore()
}
export default(c,t,i)=>{
  const tn=c.createPattern(TL,'repeat')
  // bite on the first quarter, then two chews with puffed cheeks
  const u=t*4%1,ph=t*4|0,bite=ph==0,lift=bite?sin(PI*u):0,puff=bite?0:abs(sin(PI*u)),sl=sin(2*T*t)
  c.save();c.translate(128,136);c.scale(.88,.88);c.translate(-128,-128)
  // turtle shell backpack peeking out round her shoulders: toned and white plates around an inner ring
  const shell=()=>{c.beginPath();c.ellipse(128,200,108,92,0,0,T)}
  c.lineWidth=6;c.fillStyle='#fff';shell();c.fill()
  c.save();shell();c.clip();c.fillStyle=tn;for(let k=0;k<12;k+=2){c.beginPath();c.moveTo(128,200);c.arc(128,200,120,k*T/12-PI/12,(k+1)*T/12-PI/12);c.fill()}
  c.lineWidth=4;c.beginPath();for(let k=0;k<12;k++){const a=k*T/12-PI/12;c.moveTo(128+70*cos(a),200+60*sin(a));c.lineTo(128+120*cos(a),200+110*sin(a))}c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(128,200,70,60,0,0,T);c.fill();c.stroke();c.restore()
  c.lineWidth=6;shell();c.stroke()
  // messy toned hair behind
  c.beginPath();c.moveTo(128,40);c.bezierCurveTo(62,40,54,102,64,150);for(const[x,y]of[[58,168],[74,164],[72,182],[90,174]])c.quadraticCurveTo(x-10,y-12,x,y)
  c.lineTo(166,174);for(const[x,y]of[[184,182],[182,164],[198,168],[192,150]])c.quadraticCurveTo(x+10,y-12,x,y)
  c.bezierCurveTo(202,102,194,40,128,40);c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(50,40,160,150);c.restore();c.stroke()
  // shell straps over a white hoodie
  c.fillStyle='#fff';c.beginPath();c.moveTo(98,186);c.quadraticCurveTo(62,196,56,258);c.lineTo(200,258);c.quadraticCurveTo(194,196,158,186);c.closePath();c.fill();c.stroke()
  c.lineWidth=10;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*42,190),c.quadraticCurveTo(128+d*38,220,128+d*44,258);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // face, cheeks puff out while chewing
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(puff>.05)for(const d of[-1,1])c.beginPath(),c.arc(128+d*42,160,12+5*puff,d<0?PI*.55:-PI*.55,d<0?PI*1.45:PI*.45),c.fill(),c.stroke()
  if(bite){eye(c,103,138,-1,tn);eye(c,153,138,1,tn)}
  else{c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,144,12,PI*1.15,PI*1.85),c.stroke()}
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath()
  if(bite)c.ellipse(128,170,8,4+6*lift,0,0,T),c.fillStyle='#111',c.fill()
  else c.moveTo(120,168),c.quadraticCurveTo(124,172+2*puff,128,168),c.quadraticCurveTo(132,172+2*puff,136,168)
  c.stroke()
  // messy toned bangs with stray tufts
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,148);c.bezierCurveTo(54,74,88,44,128,44);c.bezierCurveTo(168,44,202,74,186,148)
  for(const[x,y]of[[180,110],[170,120],[164,100],[150,116],[142,96],[130,114],[118,96],[108,116],[98,100],[88,120],[78,108]])c.quadraticCurveTo(x+4,y-8,x,y)
  c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(60,40,140,90);c.restore();c.stroke()
  // the dish, water sloshing side to side, a drop hopping out now and then
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(128,50,44,13,0,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.ellipse(128,50,34,8,0,0,T);c.clip();c.fillStyle=tn;c.beginPath();c.moveTo(90,62);c.lineTo(90,50+6*sl);c.quadraticCurveTo(128,44-6*sl,166,50-6*sl);c.lineTo(166,62);c.fill()
  c.lineWidth=2.5;c.beginPath();c.moveTo(94,50+5*sl);c.quadraticCurveTo(128,44-6*sl,162,50-5*sl);c.stroke();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(128,50,34,8,0,0,T);c.stroke()
  const dp=t*2%1;if(dp<.5){const q=dp/.5,dx=128+(sl>0?-1:1)*(30+20*q),dy=44-30*sin(PI*q);c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(dx,dy-7);c.quadraticCurveTo(dx+5,dy,dx,dy+4);c.quadraticCurveTo(dx-5,dy,dx,dy-7);c.fill();c.stroke()}
  // cucumber held up in both webbed hands
  const cy=200-16*lift
  cuke(c,128+(bite?8:24),cy,tn)
  for(const d of[-1,1]){const hx=128+d*34+(bite?8:24),hy=cy+6;c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(hx,hy,12,11,0,0,T);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();for(const k of[-6,0,6])c.moveTo(hx+k,hy-11),c.quadraticCurveTo(hx+k+3,hy-4,hx+k,hy+2);c.stroke()}
  if(!bite&&puff>.6){c.fillStyle='#111';for(const[a,b]of[[164,176],[170,186]])c.beginPath(),c.arc(a,b,2,0,T),c.fill()}
  c.restore()
}

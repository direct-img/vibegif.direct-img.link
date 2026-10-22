// graduating girl with light screentone hair and a big bow pulls the cap off her diploma tube, pop, cherry petals burst out
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const lt=createCanvas(7,7),l=lt.getContext('2d');l.fillStyle='#111';l.beginPath();l.arc(3.5,3.5,1,0,T);l.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const petal=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(9,-4,0,9);c.quadraticCurveTo(-9,-4,0,-9);c.fill();c.stroke();c.beginPath();c.moveTo(0,9);c.lineTo(0,3);c.stroke();c.restore()}
const P=[...Array(10)].map((_,k)=>[-110+k*17+(k%2?6:-6),58+k%3*14,k*1.7])
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),lite=c.createPattern(lt,'repeat')
  const pull=t<.3?t/.3:0,open=t>=.3&&t<.85,cy=open?-34*sin(PI*min(1,(t-.3)/.12)/2)*(t<.75?1:1-(t-.75)/.1):-3*pull,sh=t<.3&&i%2?1:0
  // long light-toned hair behind
  c.save();c.translate(-18,0)
  c.lineWidth=6;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,208,100,204,170);c.lineTo(208,240);c.lineTo(48,240);c.lineTo(52,170);c.bezierCurveTo(48,100,60,36,128,36);toned(c,lite)
  // blazer, ribbon, corsage
  c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(64,196,58,244);c.lineTo(198,244);c.quadraticCurveTo(192,196,156,188);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(108,189);c.lineTo(128,228);c.lineTo(148,189);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*14,198),c.lineTo(128+d*14,214),c.closePath(),c.fill()
  c.fillStyle='#fff';c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(88+d*4,214),c.lineTo(88+d*9,240),c.lineTo(88+d*2,236),c.closePath(),c.fill(),c.stroke()
  for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.beginPath();c.ellipse(88+9*cos(a),210+9*sin(a),7,5,a,0,T);c.fill();c.stroke()}
  c.beginPath();c.arc(88,210,5,0,T);c.fillStyle=dot;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  // face: straining while pulling, then delighted
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){
    if(!open){c.lineWidth=5;c.beginPath();c.moveTo(x-d*12,132);c.lineTo(x+d*6,141);c.lineTo(x-d*12,150);c.stroke();continue}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+3,140,10.5,15,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?2.5:7;c.lineTo(x+r*cos(a),135+r*sin(a))}c.fill();c.beginPath();c.arc(x+8,149,2,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
  }
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*40+(k-1.5)*5-3,170),c.lineTo(128+d*40+(k-1.5)*5+3,161),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath()
  if(open){c.moveTo(116,165);c.quadraticCurveTo(128,184,140,165);c.closePath();c.fill();c.stroke()}else{c.moveTo(118,170);c.lineTo(138,170);c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(132,173,4,4,0,0,PI);c.fill();c.stroke()}
  // straight bangs and a big black bow
  c.lineWidth=6;c.beginPath();c.moveTo(68,170);c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,188,170)
  c.quadraticCurveTo(182,130,178,106);c.lineTo(166,110);c.lineTo(156,104);c.lineTo(146,112);c.lineTo(134,104);c.lineTo(122,112);c.lineTo(110,104);c.lineTo(98,112);c.lineTo(88,104);c.lineTo(78,108);c.quadraticCurveTo(72,140,68,170);c.closePath();toned(c,lite)
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=30;k++){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?52:48)*cos(a),102+(k%2?52:48)*sin(a))}for(let k=30;k>=0;k--){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?44:40)*cos(a),102+(k%2?44:40)*sin(a))}c.fill()
  c.fillStyle='#111';c.lineWidth=5;for(const e of[-1,1])c.beginPath(),c.moveTo(128,34),c.quadraticCurveTo(128+e*26,10,128+e*34,24),c.quadraticCurveTo(128+e*30,40,128,34),c.fill(),c.stroke()
  c.beginPath();c.arc(128,32,7,0,T);c.fill()
  c.restore()
  // diploma tube with the cap
  const X=184+sh
  c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.roundRect(X-13,150,26,92,4);c.fill();c.stroke()
  c.fillStyle='#fff';c.fillRect(X-13,196,26,8);c.strokeRect(X-13,196,26,8);c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(X-6,160);c.lineTo(X-6,190);c.moveTo(X-6,210);c.lineTo(X-6,232);c.stroke();c.strokeStyle='#111'
  if(open){c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(X,150,13,4,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(X,150,8,2,0,0,T);c.fill()}
  c.fillStyle='#111';c.lineWidth=5;c.beginPath();c.roundRect(X-15,128+cy,30,24,4);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(X-7,134+cy);c.lineTo(X-7,146+cy);c.stroke();c.strokeStyle='#111'
  // hands on cap and tube
  c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(X+14,140+cy,10,12,0,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(X-14,222,10,12,0,0,T);c.fill();c.stroke()
  // strain marks, then the pop burst and petals
  if(t<.3){c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(X+d*26,150),c.lineTo(X+d*32,146),c.moveTo(X+d*26,158),c.lineTo(X+d*33,158),c.stroke()}
  const tau=t-.3
  if(tau>=0&&tau<.14){const r=10+tau*220;c.lineWidth=3.5;for(let k=0;k<8;k++){const a=-PI/2+(k-3.5)*.32;c.beginPath();c.moveTo(X+r*.55*cos(a),146+r*.55*sin(a));c.lineTo(X+r*cos(a),146+r*sin(a));c.stroke()}}
  if(tau>=0){c.fillStyle='#fff';c.lineWidth=2.5
    for(const[dx,h,o]of P){const s=min(1,tau*12)*max(0,1-max(0,tau-.45)/.25);if(s<=.05)continue
      const e=1-Math.exp(-tau*11),x=X+dx*e+6*sin(o+tau*14),y=146-h*e+70*tau;petal(c,x,y,o+tau*9,s)}}
}

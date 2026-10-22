// eager girl at her desk shooting her hand up and waving it, sparkly star eyes, bouncing in her seat
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const spark=(c,x,y,r)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,rr=k%2?r*.3:r;c.lineTo(x+rr*cos(a),y+rr*sin(a))}c.closePath();c.fill()}
const toned=(c,dot)=>{c.fillStyle='#fff';c.fill();c.fillStyle=dot;c.fill();c.stroke()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),b=-6*abs(sin(t*T*2)),w=.35*sin(t*T*2),tw=1+.3*sin(t*T*4)
  c.save();c.translate(18,b)
  // hair behind, screentone bob
  c.lineWidth=6;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,176);c.quadraticCurveTo(202,184,192,184);c.lineTo(64,184);c.quadraticCurveTo(54,184,52,176);c.bezierCurveTo(44,100,58,34,128,34);toned(c,dot)
  // black blazer, shirt and striped tie
  c.fillStyle='#111';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(66,196,58,236);c.lineTo(198,236);c.quadraticCurveTo(190,196,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(108,189);c.lineTo(128,226);c.lineTo(148,189);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(122,200);c.lineTo(134,200);c.lineTo(138,226);c.lineTo(118,226);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.lineWidth=3;for(const y of[204,212,220])c.beginPath(),c.moveTo(114,y+4),c.lineTo(142,y-4),c.stroke();c.restore()
  c.beginPath();c.moveTo(118,190);c.lineTo(128,200);c.lineTo(138,190);c.stroke()
  // raised arm, waving from the wrist
  c.save();c.translate(90,204);c.rotate(-.5+.06*sin(t*T*2))
  c.lineCap='butt';for(const[l,s]of[[32,'#fff'],[25,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(0,-104),c.stroke()
  c.lineCap='round';c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(-12,-118,24,14);c.fill();c.stroke()
  c.translate(0,-118);c.rotate(w)
  for(const[a,l]of[[-.5,22],[-.17,27],[.17,27],[.5,22],[1.25,18]]){const x=sin(a)*(l+8),y=-14-cos(a)*(l+8);for(const[lw,st]of[[12,'#111'],[5,'#fff']])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(0,-14),c.lineTo(x,y),c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(0,-12,13,14,0,0,T);c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();c.arc(1,-8,7,1.1*PI,1.7*PI);c.stroke()
  c.restore()
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,24);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  // face
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x,141,10.5,15,0,0,T);c.fill()
    c.fillStyle='#fff';spark(c,x-3,136,8*tw);c.beginPath();c.arc(x+4,149,2.2,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
  }
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*42+(k-1.5)*5-3,170),c.lineTo(128+d*42+(k-1.5)*5+3,161),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,190,142,164);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.beginPath();c.ellipse(128,180,8,5,0,0,T);c.fill();c.restore()
  // side-swept bangs, shine band, crossed pins
  c.lineWidth=6;c.beginPath();c.moveTo(66,178)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,178)
  c.quadraticCurveTo(186,130,176,104);c.quadraticCurveTo(170,108,166,116);c.quadraticCurveTo(160,96,148,90);c.quadraticCurveTo(142,104,132,112)
  c.quadraticCurveTo(126,96,112,92);c.quadraticCurveTo(108,104,96,114);c.quadraticCurveTo(92,104,82,104);c.quadraticCurveTo(70,140,66,178);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=30;k++){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?52:48)*cos(a),104+(k%2?52:48)*sin(a))}for(let k=30;k>=0;k--){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?44:40)*cos(a),104+(k%2?44:40)*sin(a))}c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(160,74);c.lineTo(182,88);c.moveTo(164,90);c.lineTo(180,70);c.stroke()
  c.restore()
  // "!" marks and sparkles by the hand, they pop on each bounce
  const p=.75+.35*abs(sin(t*T*2))
  c.fillStyle='#111';c.lineWidth=3
  for(const[x,y,a]of[[20,122,-.5],[238,62,.35]]){c.save();c.translate(x,y+b);c.rotate(a);c.scale(p,p);c.beginPath();c.moveTo(-5,-18);c.lineTo(5,-18);c.lineTo(2,4);c.lineTo(-2,4);c.closePath();c.fill();c.beginPath();c.arc(0,11,3.6,0,T);c.fill();c.restore()}
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=3
  for(const[x,y,o]of[[16,70,0],[96,92,.5]]){const s=9*abs(sin(PI*(t*2+o)));if(s>2){c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,rr=k%2?s*.3:s;c.lineTo(x+rr*cos(a),y+b+rr*sin(a))}c.closePath();c.fill();c.stroke()}}
  // desk in front, it doesn't bounce
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(26,214);c.lineTo(230,214);c.lineTo(242,230);c.lineTo(14,230);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const[x,y,l]of[[50,220,40],[120,224,60],[170,219,36]])c.beginPath(),c.moveTo(x,y),c.quadraticCurveTo(x+l/2,y-3,x+l,y),c.stroke()
  c.lineWidth=5;c.beginPath();c.rect(18,230,220,16);toned(c,dot)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(186,214,14,9,0,PI,0);c.fill();c.stroke()
}

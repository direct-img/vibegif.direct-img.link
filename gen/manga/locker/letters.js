// flustered girl at her open shoe locker while love letters keep pouring out onto a pile
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const env=(c,x,y,a,s=1)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.lineWidth=3.5;c.fillStyle='#fff'
  c.beginPath();c.rect(-15,-10,30,20);c.fill();c.stroke();c.beginPath();c.moveTo(-15,-10);c.lineTo(0,1);c.lineTo(15,-10);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-8,2,-5,-4,0,0);c.bezierCurveTo(5,-4,8,2,0,8);c.fill();c.restore()
}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),j=i%2?1.2:-1.2,dw=4*sin(t*T*2)
  // locker unit with the open door
  c.lineWidth=5;c.fillStyle=dot;c.beginPath();c.moveTo(150,46);c.lineTo(160,36);c.lineTo(246,36);c.lineTo(238,46);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(150,46,88,200);c.fill();c.stroke()
  c.lineWidth=3.5
  for(let r=0;r<4;r++)for(let k=0;k<2;k++){
    const x=154+k*42,y=50+r*48
    if(r==1&&!k){c.fillStyle='#111';c.fillRect(x,y,38,44);continue}
    c.beginPath();c.rect(x,y,38,44);c.stroke();c.fillStyle=dot;c.fillRect(x+12,y+6,14,6);c.strokeRect(x+12,y+6,14,6)
  }
  c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.moveTo(192,98);c.lineTo(218+dw,90);c.lineTo(218+dw,150);c.lineTo(192,142);c.closePath();c.fill();c.stroke()
  c.fillStyle=dot;c.fillRect(203+dw/2,104,8,5)
  // girl
  c.save();c.translate(-46,0)
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(192,36,204,100,200,170);c.lineTo(202,244);c.lineTo(54,244);c.lineTo(56,170);c.bezierCurveTo(52,100,64,36,128,36);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(64,196,60,244);c.lineTo(196,244);c.quadraticCurveTo(192,196,156,188);c.closePath();c.fill();c.stroke()
  c.lineWidth=4
  for(const d of[-1,1]){c.fillStyle=dot;c.beginPath();c.moveTo(128-d*28,189);c.lineTo(128-d*46,196);c.lineTo(128-d*8,236);c.lineTo(128,226);c.closePath();c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(128-d*38,196);c.lineTo(128-d*8,228);c.stroke();c.strokeStyle='#111';c.lineWidth=4}
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.moveTo(128,226),c.lineTo(128+d*16,244),c.lineTo(128+d*4,244),c.closePath(),c.fill()
  c.beginPath();c.ellipse(128,226,8,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,24);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // big ink eyes, trembling
  for(const[x,d]of[[103,-1],[153,1]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+j,141,10.5,15,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+j-3,136,4.5,0,T);c.fill();c.beginPath();c.arc(x+j+4,149,2,0,T);c.fill()
    c.strokeStyle='#fff';c.lineWidth=1.5;c.beginPath();c.arc(x+j,145,7,.2*PI,.8*PI);c.stroke();c.strokeStyle='#111'
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(x-5,158);c.lineTo(x+5,158);c.stroke()
  }
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<5;k++)c.beginPath(),c.moveTo(128+d*36+(k-2)*4.5-3,170),c.lineTo(128+d*36+(k-2)*4.5+3,161),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(116,170);for(let k=1;k<=6;k++)c.lineTo(116+k*4,170+(k%2?-3:3)*(i%2?1:.6));c.stroke()
  // hime-style bangs, ink black with a shine band
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(66,178)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,178)
  c.quadraticCurveTo(184,140,180,110);c.lineTo(170,112);c.quadraticCurveTo(166,106,158,112);c.quadraticCurveTo(150,106,142,112)
  c.quadraticCurveTo(134,106,126,112);c.quadraticCurveTo(118,106,110,112);c.quadraticCurveTo(102,106,94,112);c.quadraticCurveTo(88,106,84,112)
  c.lineTo(76,110);c.quadraticCurveTo(72,140,66,178);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=36;k++){const a=PI*(1.17+k*.0185);c.lineTo(128+(k%2?50:47)*cos(a),100+(k%2?50:47)*sin(a))}for(let k=36;k>=0;k--){const a=PI*(1.17+k*.0185);c.lineTo(128+(k%2?44:40)*cos(a),100+(k%2?44:40)*sin(a))}c.fill()
  c.strokeStyle='#fff'
  c.lineWidth=2;for(const x of[70,186])c.beginPath(),c.moveTo(x,130),c.quadraticCurveTo(x+(x<128?-2:2),190,x+(x<128?-6:6),236),c.stroke()
  c.strokeStyle='#111'
  // sweat and fluster marks
  c.fillStyle='#fff'
  c.lineWidth=4;c.beginPath();c.moveTo(196,72);c.quadraticCurveTo(206,90,196,96);c.quadraticCurveTo(186,90,196,72);c.fill();c.stroke()
  for(const[a,l]of[[-2.45,13],[-2.05,15],[-1.65,13]]){const s=1+.2*(i%2);c.beginPath();c.moveTo(128+62*cos(a),92+62*sin(a));c.lineTo(128+(62+l*s)*cos(a),92+(62+l*s)*sin(a));c.stroke()}
  c.restore()
  // the pile, then letters streaming out of the locker
  for(const[x,y,a]of[[118,236,-.3],[150,240,.15],[184,236,-.1],[136,226,.4],[170,228,-.35]])env(c,x,y,a)
  for(let k=0;k<5;k++){const p=(t+k/5)%1;env(c,176-56*p,116-36*p+150*p*p,k*1.3+5*p,.65+.35*p)}
}

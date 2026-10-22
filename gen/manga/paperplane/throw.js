// girl with crosshatched double buns throws a paper airplane that loops around and glides back into her hand
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,atan2,hypot,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const xt=createCanvas(6,6),h=xt.getContext('2d');h.strokeStyle='#111';h.lineWidth=1.2;for(const o of[-6,0,6])h.beginPath(),h.moveTo(o,6),h.lineTo(o+6,0),h.moveTo(o,0),h.lineTo(o+6,6),h.stroke()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const CX=192,CY=114,R=44
const at=u=>[CX+R*sin(T*u),CY+R*cos(T*u),atan2(-sin(T*u),cos(T*u))]
const plane=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=3.5;c.fillStyle='#fff'
  c.beginPath();c.moveTo(22,0);c.lineTo(-18,-12);c.lineTo(-10,0);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(22,0);c.lineTo(-10,0);c.lineTo(-16,9);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(22,0);c.lineTo(-14,4);c.stroke();c.restore()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),hat=c.createPattern(xt,'repeat')
  const fl=t>=.15&&t<.9,lin=fl?(t-.15)/.75:0,u=(1-cos(PI*lin))/2
  const pull=t<.15?sin(PI*t/.15):0,hx=CX-4-16*pull+(fl?6:0),hy=CY+R+8+4*pull-(fl?3:0)
  const[px,py,pa]=fl?at(u):[hx+4,hy-6,-.15*pull]
  c.save();c.translate(-34,46);c.scale(.82,.82)
  // double buns and back hair
  c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.arc(128+d*44,46,20,0,T),toned(c,hat)
  c.beginPath();c.moveTo(128,36);c.bezierCurveTo(194,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,62,36,128,36);toned(c,hat)
  // gym shirt with a name patch
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,58,244);c.lineTo(198,244);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(106,191);c.quadraticCurveTo(128,212,150,191);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.rect(90,214,30,18);c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(95,223);c.lineTo(115,223);c.stroke()
  c.lineWidth=5;c.beginPath();c.rect(116,168,24,24);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // eyes follow the plane
  for(const[x,d]of[[103,-1],[153,1]]){
    const dx=px+34-.82*x,dy=py-46-.82*140,n=hypot(dx,dy)||1,ox=3.5*dx/n,oy=3.5*dy/n
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.clip()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+ox,141+oy,10,14,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+ox-3,135+oy,4.5,0,T);c.fill();c.beginPath();c.arc(x+ox+4,148+oy,2,0,T);c.fill();c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
  }
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*40+(k-1.5)*5-3,170),c.lineTo(128+d*40+(k-1.5)*5+3,161),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath();c.moveTo(117,165);c.quadraticCurveTo(128,182,139,165);c.closePath();c.fill();c.stroke()
  // crosshatched bangs with a white shine
  c.lineWidth=6;c.beginPath();c.moveTo(70,146);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(184,114,174,104);c.quadraticCurveTo(168,112,160,112);c.quadraticCurveTo(156,98,146,94);c.quadraticCurveTo(140,106,128,110)
  c.quadraticCurveTo(122,98,110,94);c.quadraticCurveTo(106,106,96,112);c.quadraticCurveTo(88,112,82,104);c.quadraticCurveTo(72,114,70,146);c.closePath();toned(c,hat)
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=30;k++){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?52:48)*cos(a),104+(k%2?52:48)*sin(a))}for(let k=30;k>=0;k--){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?44:40)*cos(a),104+(k%2?44:40)*sin(a))}c.fill()
  c.restore()
  // throwing arm
  c.lineWidth=16;c.beginPath();c.moveTo(92,212);c.quadraticCurveTo(hx-46,hy+22,hx,hy);c.stroke();c.strokeStyle='#fff';c.lineWidth=9;c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(104,206,14,12,-.5,0,T);c.fill();c.stroke()
  // trail while it flies
  if(fl){c.lineWidth=3;for(let k=1;k<=3;k++){const v=u-k*.045;if(v<.02)break;const[a,b]=at(v),[a2,b2]=at(v-.02);c.beginPath();c.moveTo(a,b);c.lineTo(a2,b2);c.stroke()}}
  if(!fl)plane(c,px,py,pa)
  c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(hx,hy,11,12,0,0,T);c.fill();c.stroke()
  if(fl)plane(c,px,py,pa)
  // a sparkle when it lands back
  if(t>=.9){const s=10*sin(PI*(t-.9)/.1);c.fillStyle='#fff';c.lineWidth=3;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?s*.3:s;c.lineTo(hx+22+r*cos(a),hy-24+r*sin(a))}c.closePath();c.fill();c.stroke()}
}

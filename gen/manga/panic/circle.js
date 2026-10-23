// tiny chibi with a dotted top bun running in a panicked circle: arms flailing overhead, wailing, sweat flying off, a dust trail puffing behind her
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=70,rim=4
const DOT=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.5,0,T);x.fill();return t})()
const toned=(c,path)=>{path();c.fillStyle='#fff';c.fill();c.fillStyle=c.createPattern(DOT,'repeat');c.fill();path();c.stroke()}
const puff=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=4/s;c.beginPath();c.arc(-8,0,8,PI*.5,PI*1.6);c.arc(2,-5,9,PI*1.1,PI*1.95);c.arc(10,1,7,PI*1.4,PI*.5);c.closePath();c.fill();c.stroke();c.restore()}
// chibi drawn facing +x with feet at the origin, r is the run cycle angle
const chibi=(c,r)=>{
  for(const d of[-1,1]){const a=d*.7*sin(r);c.lineWidth=7;c.beginPath();c.moveTo(d*5,-22);c.lineTo(d*5+sin(a)*16,-22+cos(a)*20);c.stroke();c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(d*5+sin(a)*16+3,-1+cos(a)*2-4,7,4.5,0,0,T);c.fill();c.stroke()}
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-14,-22);c.lineTo(14,-22);c.lineTo(9,-46);c.lineTo(-9,-46);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;toned(c,()=>{c.beginPath();c.arc(-2,-108,13,0,T)})
  toned(c,()=>{c.beginPath();c.ellipse(0,-74,30,28,0,0,T)})
  c.fillStyle='#fff';c.beginPath();c.moveTo(-26,-70);c.quadraticCurveTo(-24,-46,6,-46);c.quadraticCurveTo(30,-48,30,-74);c.lineTo(22,-72);c.lineTo(16,-80);c.lineTo(8,-72);c.lineTo(-2,-82);c.lineTo(-10,-72);c.lineTo(-18,-80);c.closePath();c.fill();c.stroke()
  for(const x of[-2,16]){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(x,-64,6,7,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x+2,-64,1.8,0,T);c.fill()}
  c.fillStyle='#111';c.beginPath();c.ellipse(8,-52,5,4+1.5*sin(4*r),0,0,T);c.fill()
  c.lineWidth=2.5;c.beginPath();c.moveTo(-8,-76);c.lineTo(0,-73);c.moveTo(12,-73);c.lineTo(20,-76);c.stroke()
  for(const d of[-1,1]){const a=-PI/2+d*(1.05+.45*sin(2*r+d*1.3)),hx=d*12+cos(a)*36,hy=-44+sin(a)*36
    for(const[l,st]of[[9,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(d*12,-44),c.lineTo(hx,hy),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(hx,hy,6,0,T);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.arc(hx-cos(a)*2,hy-sin(a)*2,13,a-d*1.9,a-d*1.2,d>0);c.stroke()}}
export default(c,t)=>{
  const A=t*T+PI/2,pos=a=>[128+76*cos(a),178+30*sin(a)],dep=a=>.8+.2*sin(a)
  c.fillStyle=c.createPattern(DOT,'repeat');c.beginPath();c.ellipse(128,178,94,40,0,0,T);c.ellipse(128,178,58,22,0,0,T);c.fill('evenodd');c.lineWidth=3;c.beginPath();c.ellipse(128,178,94,40,0,0,T);c.stroke();c.beginPath();c.ellipse(128,178,58,22,0,0,T);c.stroke()
  const draw=()=>{const[x,y]=pos(A),s=dep(A)*1.35,dir=-sin(A)<0?-1:1
    for(let k=4;k>=1;k--){const[px,py]=pos(A-k*.38*(dir>0?1:1)),q=dep(A-k*.38)*(1-k/5)*1.2;puff(c,px,py,q)}
    c.fillStyle='#111';c.beginPath();c.ellipse(x,y,18*s,5*s,0,0,T);c.fill()
    c.save();c.translate(x,y);c.scale(s*dir,s);chibi(c,t*T*4);c.restore()
    c.fillStyle='#fff';c.lineWidth=3.5
    for(let k=0;k<3;k++){const p=(t*4+k/3)%1,dx=-dir*(14+p*30)*s,dy=(-120+k*14-p*20+p*p*30)*s
      if(p<.85){c.save();c.translate(x+dx,y+dy);c.rotate(dir*(PI/2+.4));c.scale(s*.8,s*.8);c.beginPath();c.moveTo(0,-10);c.quadraticCurveTo(7,0,6,4);c.arc(0,4,6,0,PI);c.quadraticCurveTo(-7,0,0,-10);c.fill();c.stroke();c.restore()}}}
  draw()
}

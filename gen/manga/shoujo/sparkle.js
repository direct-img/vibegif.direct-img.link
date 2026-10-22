// shoujo heroine with huge starry eyes, long wavy white hair drifting while bubbles rise and flowers turn around her
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=100,rim=4
const tone=(f,r)=>{const t=createCanvas(5,5),x=t.getContext('2d');x.fillStyle=f;x.beginPath();x.arc(2.5,2.5,r,0,T);x.fill();return t}
const DK=tone('#111',1.1)
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.14,y+(b-a)*r*.14,x+a*r,y+b*r);c.fill()}
const flower=(c,x,y,r,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=2.5
  for(let k=0;k<5;k++){c.save();c.rotate(k*T/5);c.beginPath();c.ellipse(0,-r*.56,r*.36,r*.54,0,0,T);c.fill();c.stroke();c.restore()}
  c.fillStyle='#111';c.beginPath();c.arc(0,0,r*.22,0,T);c.fill();c.restore()
}
const eye=(c,x,y,d,t)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,17,22,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,14,20,0,0,T);c.clip();c.fillStyle='#111';c.fillRect(x-20,y-24,40,50)
  c.restore();c.strokeStyle='#fff';c.lineWidth=1.6;c.beginPath();c.ellipse(x,y+4,10,15,0,PI*.15,PI*.85);c.stroke();c.strokeStyle='#111'
  const k=.75+.25*sin(2*T*t+d)
  c.fillStyle='#fff';star(c,x-5,y-7,9*k);c.beginPath();c.arc(x+6,y+8,3,0,T);c.fill();star(c,x+6,y-2,5*(1.75-k));c.beginPath();c.arc(x-6,y+12,1.8,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-19,y-8);c.quadraticCurveTo(x,y-29,x+19,y-8);c.stroke()
  c.lineWidth=3.5;c.beginPath();for(const[a,b,e,f]of[[13,-14,20,-23],[17,-9,26,-14],[19,-3,26,-3]])c.moveTo(x+d*a,y+b),c.lineTo(x+d*e,y+f);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-7,y+25);c.quadraticCurveTo(x,y+27,x+7,y+25);c.stroke()
}
const wv=(y,t,p)=>6*sin(T*t-y*.045+p)
export default(c,t)=>{
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,34)
  c.bezierCurveTo(176,34,196,62,192,100)
  for(let y=100;y<=240;y+=10)c.lineTo(128+64+(y-100)*.28+wv(y,t,0),y)
  for(let y=240;y>=100;y-=10)c.lineTo(128-64-(y-100)*.28+wv(y,t,2),y)
  c.bezierCurveTo(60,62,80,34,128,34);c.fill();c.stroke()
  c.lineWidth=2;for(const d of[-1,1])for(const o of[30]){c.beginPath();for(let y=120;y<=232;y+=8)c.lineTo(128+d*(o+20+(y-100)*.24)+wv(y,t,d<0?2:0),y);c.stroke()}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(66,198,60,246);c.lineTo(196,246);c.quadraticCurveTo(190,198,156,190);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,28);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=3.5;c.fillStyle='#fff';for(let k=0;k<6;k++){const a=PI*(.08+k*.168);c.beginPath();c.arc(128+cos(a)*30,192+sin(a)*12,7,0,T);c.fill();c.stroke()}
  for(const d of[-1,1]){c.fillStyle=c.createPattern(DK,'repeat');c.beginPath();c.moveTo(128,212);c.quadraticCurveTo(128+d*22,190,128+d*34,200);c.quadraticCurveTo(128+d*34,222,128,212);c.fill();c.stroke()
    c.beginPath();c.moveTo(128+d*2,214);c.lineTo(128+d*14,244);c.lineTo(128+d*22,236);c.closePath();c.fillStyle='#fff';c.fill();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.arc(128,211,6,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,101,138,-1,t);eye(c,155,138,1,t)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,157);c.lineTo(127,160);c.stroke()
  c.lineWidth=3;for(const x of[101,155])c.beginPath(),c.arc(x,140,30,PI*1.4,PI*1.6),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(121,170);c.quadraticCurveTo(128,175,135,170);c.stroke()
  c.lineWidth=2;for(const d of[-1,1])for(const k of[-6,-1,4])c.beginPath(),c.moveTo(128+d*44+k-3,170),c.lineTo(128+d*44+k+3,162),c.stroke()
  for(const d of[-1,1]){c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(128+d*52,100)
    for(let y=104;y<=214;y+=10)c.lineTo(128+d*(56+(y-100)*.1)+wv(y,t,d<0?2:0)*.7,y)
    for(let y=214;y>=104;y-=10)c.lineTo(128+d*(46+(y-100)*.1)+wv(y,t,d<0?2:0)*.5,y)
    c.closePath();c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,128);c.bezierCurveTo(54,70,90,36,128,36);c.bezierCurveTo(166,36,202,70,186,128)
  c.quadraticCurveTo(184,108,176,100);c.quadraticCurveTo(166,90,166,84);c.quadraticCurveTo(166,88,153,102);c.quadraticCurveTo(140,88,140,82);c.quadraticCurveTo(140,86,128,100);c.quadraticCurveTo(116,88,116,82);c.quadraticCurveTo(116,86,103,102);c.quadraticCurveTo(90,90,90,84);c.quadraticCurveTo(90,88,80,100);c.quadraticCurveTo(72,108,70,128);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const[a,b,e,f]of[[100,50,86,82],[128,44,124,78],[156,50,168,80]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+e)/2+4,(b+f)/2,e,f),c.stroke()
  c.lineWidth=2.5;for(let k=0;k<4;k++){const[x,y]=[[36,70],[222,62],[34,198],[224,190]][k];flower(c,x,y,15+k%2*3,T*t/5*(k%2?1:-1))}
  c.fillStyle='#fff';for(let k=0;k<5;k++){const p=(t+k/5)%1,s=max(0,sin(PI*p)),x=[50,208,22,236,196][k]+5*sin(T*(t+k/5)*2),y=232-p*196,r=[9,7,6,8,5][k]*(.4+.6*s);c.lineWidth=2.5;c.beginPath();c.arc(x,y,r,0,T);c.stroke();c.lineWidth=2;c.beginPath();c.arc(x,y,r*.6,PI*1.1,PI*1.5);c.stroke()}
  for(const[x,y,o]of[[64,30,0],[196,26,.5],[18,128,.25],[238,124,.75]]){c.fillStyle='#111';star(c,x,y,7*(.3+.7*Math.abs(sin(T*(t+o)))))}
}

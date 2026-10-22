// manga dragon girl with screentone twin buns and curled horns blowing smoke rings that drift off and break up, scaly tail swishing
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=100,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
// relaxed half-lidded eye
const eye=(c,x,y,d,tn)=>{
  c.save();c.beginPath();c.rect(x-20,y-6,40,30);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill()
  c.beginPath();c.ellipse(x+3,y+4,10,13,0,0,T);c.save();c.clip();c.fillStyle=tn;c.fillRect(x-10,y-12,26,30);c.fillStyle='#111';c.fillRect(x-10,y-12,26,14);c.restore();c.lineWidth=2.5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+5,4,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-1,y+1,3.5,4,-.4,0,T);c.fill();c.beginPath();c.arc(x+7,y+10,1.8,0,T);c.fill()
  c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-9,x+16,y-4);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-9);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-14,y-14);c.quadraticCurveTo(x,y-19,x+14,y-13);c.moveTo(x-6,y+20);c.lineTo(x+6,y+20);c.stroke()
}
const ring=(c,x,y,r,p)=>{
  // the outline breaks into dashes as the ring fades out
  const g=max(0,(p-.55)/.45)
  if(g>.98)return
  c.setLineDash(g>0?[22*(1-g)+4,4+14*g]:[]);c.lineDashOffset=0
  c.fillStyle='#fff';c.lineWidth=3.5-1.5*g
  c.beginPath();c.ellipse(x,y,r,r*.72,-.5,0,T);c.ellipse(x,y,r*.55,r*.36,-.5,0,T,true);if(!g)c.fill('evenodd');c.stroke()
  c.setLineDash([])
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),sw=sin(t*T)
  // tail behind: the base stays put, the tip swishes; spikes ride the outer edge
  const bz=(p,u)=>p[0].map((_,i)=>(1-u)**3*p[0][i]+3*(1-u)**2*u*p[1][i]+3*(1-u)*u*u*p[2][i]+u**3*p[3][i])
  const O=[[84,238],[8,228],[4+4*sw,150],[24+12*sw,100]],tip=O[3]
  for(let k=1;k<8;k++){const u=.12+k*.1,[x,y]=bz(O,u),[x2,y2]=bz(O,u+.02),l=Math.hypot(x2-x,y2-y),nx=(y2-y)/l,ny=-(x2-x)/l,h=11-k*.6
    c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x-(x2-x)/l*5,y-(y2-y)/l*5);c.lineTo(x+nx*h+(x2-x)/l*3,y+ny*h+(y2-y)/l*3);c.lineTo(x+(x2-x)/l*8,y+(y2-y)/l*8);c.closePath();c.fill();c.stroke()}
  const tail=()=>{c.beginPath();c.moveTo(...O[0]);c.bezierCurveTo(...O[1],...O[2],...tip);c.quadraticCurveTo(tip[0]+20,tip[1]-12,tip[0]+24,tip[1]+4);c.quadraticCurveTo(tip[0]+14,tip[1]+2,tip[0]+14,tip[1]+14);c.bezierCurveTo(30+8*sw,170,50,214,112,236);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';tail();c.fill();c.save();c.clip();c.lineWidth=2;for(let y=80;y<250;y+=9)for(let x=(y/9%2?4.5:0);x<120;x+=9)c.beginPath(),c.arc(x,y,4.5,0,PI),c.stroke();c.restore();tail();c.stroke()
  const H=f=>{c.save();c.translate(116,104);c.scale(.78,.78);c.translate(-128,-120);f();c.restore()}
  // twin buns and long side hair in screentone
  const hairTone=f=>{c.lineWidth=6;c.fillStyle='#fff';f();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(0,0,256,256);c.restore();f();c.stroke()}
  H(()=>{
    for(const d of[-1,1]){
      // curled dragon horns
      c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(128+d*34,50);c.bezierCurveTo(128+d*44,20,128+d*78,10,128+d*96,24);c.bezierCurveTo(128+d*80,22,128+d*62,30,128+d*56,58);c.closePath();c.fill();c.stroke()
      c.lineWidth=2.5;c.beginPath();for(const u of[.3,.5,.7])c.moveTo(128+d*(40+u*36),44-u*24),c.lineTo(128+d*(50+u*34),48-u*20);c.stroke()
      hairTone(()=>{c.beginPath();c.moveTo(128+d*40,80);c.bezierCurveTo(128+d*76,90,128+d*72,170,128+d*66,214);c.quadraticCurveTo(128+d*56,206,128+d*48,214);c.quadraticCurveTo(128+d*52,150,128+d*40,120);c.closePath()})
    }
  })
  // qipao with a high collar
  c.lineWidth=5;const body=()=>{c.beginPath();c.moveTo(100,170);c.quadraticCurveTo(64,178,54,252);c.lineTo(178,252);c.quadraticCurveTo(170,178,134,170);c.closePath()}
  c.fillStyle='#fff';body();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(40,186,160,70);c.restore();body();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,158);c.lineTo(104,178);c.quadraticCurveTo(117,184,130,178);c.lineTo(130,158);c.fill();c.lineWidth=4;c.stroke()
  c.beginPath();c.moveTo(117,182);c.quadraticCurveTo(136,194,150,214);c.stroke()
  c.lineWidth=3;for(const[x,y]of[[134,196],[144,206]])c.beginPath(),c.moveTo(x-6,y),c.lineTo(x+6,y),c.stroke(),c.beginPath(),c.arc(x+7,y,2.5,0,T),c.stroke()
  // smoke rings drifting up and right from her mouth
  const R=[]
  for(let k=0;k<3;k++){const p=(t+k/3)%1;if(p>.05)R.push([136+92*p,147-90*p**1.5,6+20*p,p])}
  // head
  const pf=max(0,1-((t*3)%1)/.3)
  H(()=>{
    c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1,tn);eye(c,153,140,1,tn)
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
    // pursed lips, cheek puffs right after each ring leaves
    c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(134,172,5+2*pf,5+pf,0,0,T);c.fill();c.stroke()
    if(pf>.3){c.lineWidth=3;c.beginPath();c.arc(170,166,8,-.9,.9);c.stroke()}
    // bangs and buns
    hairTone(()=>{c.beginPath();c.moveTo(72,140);c.bezierCurveTo(56,70,88,40,128,40);c.bezierCurveTo(168,40,200,70,184,140)
      c.quadraticCurveTo(178,112,170,104);c.quadraticCurveTo(160,110,154,118);c.quadraticCurveTo(150,100,140,94);c.quadraticCurveTo(132,108,124,114)
      c.quadraticCurveTo(120,100,108,94);c.quadraticCurveTo(102,108,94,114);c.quadraticCurveTo(90,104,84,104);c.quadraticCurveTo(76,118,72,140);c.closePath()})
    c.strokeStyle='#fff';c.lineWidth=4;for(const[a,e]of[[1.3,1.42],[1.5,1.6],[1.66,1.72]])c.beginPath(),c.arc(128,110,54,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
    for(const d of[-1,1]){hairTone(()=>{c.beginPath();c.arc(128+d*46,52,20,0,T)});c.lineWidth=2.5;c.beginPath();c.arc(128+d*46,52,11,d<0?PI*1.1:PI*1.9,d<0?PI*1.6:PI*.4,d>0);c.stroke()
      c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(128+d*30,66);c.lineTo(128+d*24,78);c.lineTo(128+d*36,74);c.closePath();c.fill();c.stroke()}
  })
  for(const[x,y,r,p]of R)ring(c,x,y,r,p)
}

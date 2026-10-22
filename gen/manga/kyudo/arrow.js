// archer with a screentone bob draws a tall kyudo bow to her cheek, lets the arrow streak off, and the string twangs
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,exp}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const dots=(col,r,s=6)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.4),LITE=dots('#fff',1.2)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const arrow=(c,x,y,tn)=>{
  for(const[l,s]of[[7,'#111'],[2.5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x-2,y),c.lineTo(x+92,y),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;c.fillStyle='#111';c.beginPath();c.moveTo(x+90,y-4);c.lineTo(x+100,y);c.lineTo(x+90,y+4);c.closePath();c.fill()
  c.fillStyle='#fff';for(const d of[-1,1]){c.beginPath();c.moveTo(x+4,y);c.lineTo(x+8,y+d*8);c.lineTo(x+26,y+d*8);c.lineTo(x+24,y);c.closePath();c.fill();c.save();c.clip();c.fillStyle='#111';for(const z of[9,15,21])c.fillRect(x+z,y-9,3,18);c.restore();c.stroke()}
}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),lt=c.createPattern(LITE,'repeat')
  const draw=t<.4?ease(t/.4):t<.55?1:0,rel=t>=.55,u=rel?(t-.55)/.45:0,d=t<.55?.35+.65*draw:0
  const G=[176,150],Tt=[160-10*d,14+4*d],Bt=[164-8*d,244-4*d]
  const rest=Tt[0]+(Bt[0]-Tt[0])*(128-Tt[1])/(Bt[1]-Tt[1]),vib=rel?9*exp(-u*6)*sin(u*T*9):0
  const sx=rel?rest+vib:140-44*draw+(t>=.4?.8*sin(t*T*12):0),sy=128
  const back=t<.55?0:t<.82?1:1-ease((t-.82)/.12),hand=rel?[(64+32*max(0,1-u*4))*back+140*(1-back),sy-6*back]:[sx,sy]
  const hasArrow=!rel||t>=.94
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,176);c.quadraticCurveTo(50,184,40,252);c.lineTo(160,252);c.quadraticCurveTo(152,184,122,176);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(118,184);c.quadraticCurveTo(146,190,148,228);c.lineTo(122,232);c.closePath();c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(100,176);c.lineTo(116,208);c.lineTo(124,178);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.rect(100,156,22,24);c.fill();c.beginPath();c.moveTo(100,156);c.lineTo(100,178);c.moveTo(122,156);c.lineTo(122,178);c.stroke()
  const hx=hand[0],hy=hand[1]
  for(const[l,s]of[[22,'#111'],[13,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(84,184),c.lineTo(46,140),c.lineTo(hx-6,hy),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(108,100);c.scale(.62,.62);c.translate(-128,-128)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(60,170);c.bezierCurveTo(40,90,80,34,128,34);c.bezierCurveTo(176,34,216,90,196,170);c.quadraticCurveTo(160,180,128,176);c.quadraticCurveTo(96,180,60,170);c.closePath();c.fill();c.fillStyle=tn;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,dd]of[[108,-1],[158,1]]){const y=140
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.save();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+3,9,13,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-2,y+6,20,12);c.fillStyle='#fff';c.beginPath();c.arc(x+3,y-2,3.5,0,T);c.fill();c.restore()
    c.lineWidth=7;c.beginPath();c.moveTo(x-15,y-6);c.quadraticCurveTo(x,y-14,x+15,y-6);c.lineTo(x+dd*20,y-11);c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(x-10,y-26);c.quadraticCurveTo(x,y-30-(rel?4:0),x+10,y-26);c.stroke()}
  c.lineWidth=4;c.beginPath();c.moveTo(134,172);c.lineTo(148,171);c.stroke()
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(66,140);c.bezierCurveTo(50,70,90,38,128,38);c.bezierCurveTo(166,38,206,70,190,140)
  c.quadraticCurveTo(186,110,176,96);c.lineTo(160,108);c.lineTo(156,92);c.lineTo(136,104);c.lineTo(130,88);c.lineTo(110,104);c.lineTo(104,90);c.lineTo(86,106);c.lineTo(80,96);c.quadraticCurveTo(70,112,66,140);c.closePath();c.fill();c.fillStyle=tn;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();for(const[a,b]of[[1.22,1.34],[1.44,1.54],[1.64,1.76]])c.arc(128,100,54,PI*a,PI*b);c.stroke();c.strokeStyle='#111'
  c.restore()
  for(const[l,s]of[[22,'#111'],[13,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(126,184),c.quadraticCurveTo(150,168,G[0]-6,G[1]+2),c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=2.5;c.beginPath();c.moveTo(...Tt);c.lineTo(sx,sy);c.lineTo(...Bt);c.stroke()
  if(rel&&u<.25){c.lineWidth=3;for(const y of[60,100,170,200]){c.beginPath();c.moveTo(rest-14,y);c.quadraticCurveTo(rest-20,y+8,rest-14,y+16);c.stroke()}}
  const bow=()=>{c.beginPath();c.moveTo(...Tt);c.quadraticCurveTo(G[0]+4,40,G[0],G[1]-16);c.lineTo(G[0],G[1]+14);c.quadraticCurveTo(G[0]+4,224,...Bt)}
  for(const[l,s]of[[11,'#111'],[4.5,'#fff']])c.lineWidth=l,c.strokeStyle=s,bow(),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111';c.fillRect(G[0]-6,G[1]-16,12,30)
  if(hasArrow)arrow(c,!rel?sx:140,sy,tn)
  if(rel&&u<.25){const ax=96+u/.25*300;c.lineWidth=3;for(const[y,o]of[[121,0],[135,24]]){const a0=max(ax-60+o,186),a1=min(ax+90,246);if(a1-a0>8)c.beginPath(),c.moveTo(a0,y),c.lineTo(a1,y),c.stroke()};if(ax+100<250)arrow(c,ax,sy,tn)}
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(G[0],G[1]-2,10,12,0,0,T);c.fill();c.stroke()

  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,11,10,0,0,T);c.fill();c.fillStyle=tn;c.fill();c.stroke()
  if(rel&&back>.5){c.lineWidth=3;c.beginPath();for(const a of[-.5,0,.5])c.moveTo(hx-14*cos(a),hy-14*sin(a)),c.lineTo(hx-22*cos(a),hy-22*sin(a));c.stroke()}
}

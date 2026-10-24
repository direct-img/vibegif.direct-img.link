// sunny day except for one guy's personal raincloud; he opens an umbrella, the cloud just shrinks and sneaks under it to keep raining on him
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=36,delay=80,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),lp=(a,b,u)=>a+(b-a)*u
const SKY='#d0ebff',GRASS='#8ce99a',SUN='#ffd43b',CLD='#adb5bd',RAIN='#339af0',UMB='#ff6b6b',UMD='#e03131',SKIN='#ffd3b0',HAIR='#5c3d2e',SH='#ffa94d'
const UX=150,HX=118,HY=168
const cloud=(c,x,y,s,u)=>{
  const B=[[-26,4,20],[0,-8,26],[26,2,20],[-12,10,16],[14,12,16]]
  c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#111';for(const[a,b,r]of B)c.beginPath(),c.arc(a,b,r+5/s,0,T),c.fill()
  c.fillStyle=CLD;for(const[a,b,r]of B)c.beginPath(),c.arc(a,b,r,0,T),c.fill()
  c.fillStyle='#ced4da';c.beginPath();c.arc(-4,-16,10,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*10+6*u,2+4*u,3.5,0,T),c.fill()
  c.strokeStyle='#111';c.lineWidth=3/s+1;c.beginPath();c.moveTo(-8+6*u,12+4*u);c.quadraticCurveTo(6*u,18+4*u,8+6*u,10+4*u);c.stroke()
  c.restore()
}
export default(c,t,i)=>{
  const o=io((t-.08)/.06)-io((t-.74)/.06),W=10+82*o
  let cx,cy,cs,cu=0
  if(t<.24)cx=128,cy=38,cs=1
  else if(t<.32){const u=io((t-.24)/.08);cx=lp(128,214,u),cy=lp(38,58,u),cs=1,cu=u}
  else if(t<.4){const u=io((t-.32)/.08);cx=214,cy=lp(58,120,u),cs=lp(1,.55,u),cu=1}
  else if(t<.47){const u=io((t-.4)/.07);cx=lp(214,124,u),cy=120,cs=.55,cu=1}
  else if(t<.8)cx=124,cy=120,cs=.55,cu=1
  else{const u=io((t-.8)/.16);cx=lp(124,128,u),cy=lp(120,38,u),cs=lp(.55,1,u),cu=1-u}
  cy+=2*sin(T*t*4)
  const under=cy>90,moving=t>.24&&t<.47
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=SKY;c.fill();c.clip()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SUN
  c.save();c.translate(36,36);for(let k=0;k<8;k++)c.rotate(T/8),c.beginPath(),c.moveTo(30,0),c.lineTo(40,0),c.stroke()
  c.beginPath();c.arc(0,0,22,0,T);c.fill();c.stroke();c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*8,-3,2.8,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(0,4,8,.15*PI,.85*PI);c.stroke();c.restore()
  c.fillStyle=GRASS;c.lineWidth=6;c.beginPath();c.moveTo(0,222);c.quadraticCurveTo(128,212,256,222);c.lineTo(256,256);c.lineTo(0,256);c.fill();c.stroke()
  for(const[x,col]of[[34,'#f783ac'],[222,'#ffd43b']]){c.lineWidth=4;c.beginPath();c.moveTo(x,232);c.lineTo(x,212);c.stroke();c.fillStyle=col;for(let k=0;k<5;k++)c.beginPath(),c.arc(x+7*cos(k*T/5),206+7*sin(k*T/5),5,0,T),c.fill(),c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x,206,4,0,T);c.fill();c.stroke()}
  const wet=!moving
  c.fillStyle='#74c0fc';c.lineWidth=4;c.beginPath();c.ellipse(HX,230,40+4*sin(T*t*2),7,0,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SH;c.beginPath();c.moveTo(HX-28,230);c.lineTo(HX-24,196);c.quadraticCurveTo(HX,186,HX+24,196);c.lineTo(HX+28,230);c.closePath();c.fill();c.stroke()
  for(const[w,s]of[[18,'#111'],[9,SH]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(HX+20,202),c.lineTo(UX-4,192),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(UX,62);c.lineTo(UX,200);c.arc(UX-9,200,9,0,PI*.9);c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.arc(UX,192,8,0,T);c.fill();c.stroke()
  c.save();c.translate(HX,HY);c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-30,0);c.quadraticCurveTo(-32,-32,0,-31);c.quadraticCurveTo(32,-32,30,0);c.lineTo(24,-10);c.lineTo(17,-1);c.lineTo(9,-12);c.lineTo(0,-2);c.lineTo(-9,-12);c.lineTo(-17,-1);c.lineTo(-24,-10);c.closePath();c.fill();c.stroke()
  const up=under&&t<.8?1:0
  c.fillStyle='#111';c.lineWidth=4
  for(const d of[-1,1]){c.beginPath();c.arc(d*11,11-3*up,4,0,T);c.fill();c.beginPath();c.moveTo(d*11-7,6-3*up);c.lineTo(d*11+7,6-3*up);c.stroke()}
  c.beginPath();c.moveTo(-6,24);c.lineTo(6,23);c.stroke()
  if(wet){c.fillStyle=RAIN;c.lineWidth=3;for(const[x,o]of[[-30,0],[28,.4],[-20,.7]]){const p=(t*3+o)%1,y=4+p*18;c.beginPath();c.moveTo(x,y-6);c.quadraticCurveTo(x+5,y+2,x,y+5);c.quadraticCurveTo(x-5,y+2,x,y-6);c.fill();c.stroke()}}
  c.restore()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=UMB
  c.beginPath();c.moveTo(UX-W,104);c.bezierCurveTo(UX-W,76,UX-W*.5,64,UX,62);c.bezierCurveTo(UX+W*.5,64,UX+W,76,UX+W,104)
  for(let k=3;k>=0;k--){const a=UX-W+W*k/2,b=a+W/2;c.quadraticCurveTo((a+b)/2,96,a,104)}
  c.closePath();c.fill();c.stroke()
  if(W>30){c.strokeStyle=UMD;c.lineWidth=5;c.beginPath();for(const d of[-.5,.5])c.moveTo(UX+d*W*.2,66),c.quadraticCurveTo(UX+d*W*.75,72,UX+d*W*.98,100);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(UX,62);c.lineTo(UX,54);c.stroke()
  c.strokeStyle=RAIN;c.lineWidth=4
  for(let k=0;k<7;k++){
    const x=cx+(k-3)*12*cs,p=((t*4+k*.37)%1),y0=cy+18*cs,hit=!under&&o>.4&&abs(x-UX)<W?72+28*((x-UX)/W)**2:abs(x-HX)<30?HY-30+((x-HX)/30)**2*24:220,y=y0+(hit-y0)*p
    if(hit<=y0||moving&&k%2)continue
    c.beginPath();c.moveTo(x,y);c.lineTo(x-2,y+10*cs);c.stroke()
    if(p>.75){c.lineWidth=3;c.beginPath();c.moveTo(x-6,hit-2);c.lineTo(x-10,hit-8);c.moveTo(x+6,hit-2);c.lineTo(x+10,hit-8);c.stroke();c.lineWidth=4}
  }
  cloud(c,cx,cy,cs,cu)
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}

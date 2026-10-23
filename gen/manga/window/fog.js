// seen from outside in the rain: a girl draws a heart in her fogged-up window with one finger and peeks through it, then the fog creeps back
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const HX=152,HY=146,hp=u=>{const a=PI+u*T,s=sin(a);return[HX-2.4*16*s*s*s,HY-2.4*(13*cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a))]}
const F=createCanvas(256,256),f=F.getContext('2d')
const D=[[46,0,1],[84,.4,1.5],[120,.75,1],[188,.2,1.5],[214,.6,.5],[70,.15,1]]
export default(c,t)=>{
  const DOT=tone(c,6,1.3),HAIR=tone(c,5,1.1)
  const s=ease(t/.55),done=t>=.58,back=ease((t-.84)/.14),[px,py]=hp(s),peek=done&&t<.9
  // the room side: the girl, close to the glass
  c.save();c.beginPath();c.rect(26,22,204,204);c.clip();c.fillStyle='#fff';c.fill()
  c.save();c.translate(120,140);c.scale(.96,.96);c.translate(-128,-130)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(56,190);c.bezierCurveTo(40,90,80,34,128,34);c.bezierCurveTo(176,34,216,90,200,190);c.quadraticCurveTo(206,214,192,224);c.quadraticCurveTo(186,206,176,212);c.lineTo(80,212);c.quadraticCurveTo(70,206,64,224);c.quadraticCurveTo(50,214,56,190);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(96,186);c.quadraticCurveTo(52,198,44,280);c.lineTo(212,280);c.quadraticCurveTo(204,198,160,186);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,188);c.quadraticCurveTo(128,214,152,188);c.stroke()
  c.beginPath();c.rect(116,166,24,24);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const lx=done?0:max(-5,min(5,(px-128)*.08)),ly=done?-2:max(-4,min(5,(py-150)*.08))
  for(const[x,d]of[[103,-1],[153,1]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,140+ly,10.5,14,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,135+ly,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,147+ly,2,0,T);c.fill()
    if(peek){c.save();c.translate(x+lx+4,138+ly);c.beginPath();for(let k=0;k<8;k++){const r=k%2?1.4:5,b=k*PI/4;c.lineTo(cos(b)*r,sin(b)*r)}c.fill();c.restore()}
    c.restore();c.lineWidth=6;c.beginPath();c.moveTo(x-16,135);c.quadraticCurveTo(x,120,x+16,135);c.moveTo(x+d*14,132);c.lineTo(x+d*21,127);c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=4.5;c.beginPath();if(peek)c.moveTo(116,166),c.quadraticCurveTo(128,180,140,166),c.closePath(),c.fillStyle='#111',c.fill();else c.moveTo(121,169),c.quadraticCurveTo(128,173,135,169);c.stroke()
  // wavy toned fringe and a white headband
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(70,140);c.bezierCurveTo(56,76,92,48,128,48);c.bezierCurveTo(164,48,200,76,186,140)
  c.quadraticCurveTo(184,112,172,106);c.quadraticCurveTo(164,118,152,112);c.quadraticCurveTo(144,100,134,112);c.quadraticCurveTo(124,100,114,112);c.quadraticCurveTo(104,100,96,112);c.quadraticCurveTo(84,104,78,118);c.quadraticCurveTo(72,128,70,140);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(72,80);c.quadraticCurveTo(128,40,184,80);c.lineTo(182,94);c.quadraticCurveTo(128,56,74,94);c.closePath();c.fill();c.stroke()
  c.restore();c.restore()
  // fog over the glass, wiped away along the heart (and its middle once it's drawn), creeping back at the end
  f.clearRect(0,0,256,256);f.globalCompositeOperation='source-over';f.fillStyle='rgba(255,255,255,.72)';f.fillRect(26,22,204,204)
  f.fillStyle='rgba(255,255,255,.95)';for(let k=0;k<40;k++){const x=30+(k*53)%196,y=26+(k*37)%196;f.beginPath();f.arc(x,y,1.5+(k%3),0,T);f.fill()}
  // water beads up along the wiped edge, so the heart keeps a soft gray rim
  const path=(e,cl)=>{f.beginPath();for(let k=0;k<=60;k++){const u=min(e,k/60);const[x,y]=hp(u);k?f.lineTo(x,y):f.moveTo(x,y)}if(cl)f.closePath()}
  f.globalAlpha=1-back;f.lineCap=f.lineJoin='round';f.strokeStyle='rgba(120,120,120,.85)';f.lineWidth=21;path(s);f.stroke()
  f.globalCompositeOperation='destination-out';f.lineCap=f.lineJoin='round';f.lineWidth=15;f.beginPath()
  for(let k=0;k<=60;k++){const u=min(s,k/60);const[x,y]=hp(u);k?f.lineTo(x,y):f.moveTo(x,y)}f.stroke()
  if(done){f.globalAlpha=(1-back)*ease((t-.58)/.08);f.beginPath();for(let k=0;k<=60;k++){const[x,y]=hp(k/60);f.lineTo(x,y)}f.fill()}
  f.globalAlpha=1;c.drawImage(F,0,0)
  // the wiping finger, close to the glass
  if(!done||t<.62){const go=done?ease((t-.58)/.04):0,fx=px+8*go,fy=py+30*go
    for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(fx+40,262),c.quadraticCurveTo(fx+30,fy+50,fx+14,fy+26),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(fx+14,fy+26,15,13,-.5,0,T);c.fill();c.stroke()
    for(const[l,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(fx+8,fy+16),c.lineTo(fx,fy),c.stroke();c.strokeStyle='#111'}
  // rain running down the outside of the pane
  c.save();c.beginPath();c.rect(26,22,204,204);c.clip()
  for(const[x,o,v]of D){const y=10+((t*v*2+o)%1)*230
    for(const[l,s]of[[6,'#111'],[2,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y-50),c.quadraticCurveTo(x+3,y-24,x,y-8),c.stroke()
    c.strokeStyle='#111';c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-10);c.quadraticCurveTo(x+6,y,x,y+5);c.quadraticCurveTo(x-6,y,x,y-10);c.fill();c.stroke()}
  c.restore()
  // window frame and sill
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.rect(12,8,232,232);c.rect(26,22,204,204);c.fill('evenodd');c.stroke();c.fillStyle=DOT;c.beginPath();c.rect(12,8,232,232);c.rect(26,22,204,204);c.fill('evenodd')
  c.beginPath();c.rect(26,22,204,204);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(4,230,248,18,4);c.fill();c.stroke()
}

// calm girl in a kimono whisks matcha in a tea bowl with a bamboo chasen, foam bubbling up, eyes serene
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const B=[[-30,0,0],[-14,-4,.25],[4,3,.5],[22,-2,.75],[-4,-6,.1],[12,5,.6],[-22,4,.4],[30,2,.85],[0,0,.3]]
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8),HAIR=tone(c,5,1.1)
  const look=t>=.5&&t<.75,wx=128+16*sin(t*T*4),wy=4*abs(cos(t*T*4))
  // girl
  c.save();c.translate(128,90);c.scale(.78,.78);c.translate(-128,-130)
  // low bun at the back with a kanzashi stick
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.arc(186,156,22,0,T);c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  for(const[l,s]of[[9,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(168,134),c.lineTo(214,170),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111';c.beginPath();c.arc(166,132,6,0,T);c.fill()
  // kimono: crossed collar, toned with little white flowers
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(96,184);c.quadraticCurveTo(40,196,30,300);c.lineTo(226,300);c.quadraticCurveTo(216,196,160,184);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y]of[[62,236],[198,226],[80,286],[186,284]]){for(let k=0;k<5;k++){const b=k*T/5;c.beginPath();c.arc(x+cos(b)*5,y+sin(b)*5,4,0,T);c.fill();c.stroke()}}c.restore()
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(102,184);c.lineTo(156,260);c.lineTo(140,268);c.lineTo(94,196);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(154,184);c.lineTo(110,250);c.lineTo(124,258);c.lineTo(162,196);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,22);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // serene closed eyes, opening for a look at the tea
  if(look)for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,146,13,10,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,146,13,10,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+1,151,10,12,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x-3,146,3.5,4,0,0,T);c.fill();c.restore()
      c.lineWidth=7;c.beginPath();c.moveTo(x-16,141);c.quadraticCurveTo(x,134,x+16,141);c.moveTo(x+d*14,139);c.lineTo(x+d*20,135);c.stroke()}
  else{c.lineWidth=6;for(const[x,d]of[[103,-1],[153,1]]){c.beginPath();c.moveTo(x-15,142);c.quadraticCurveTo(x,152,x+15,142);c.stroke();c.lineWidth=4;for(const k of[-8,0,8])c.beginPath(),c.moveTo(x+k,149-abs(k)*.2),c.lineTo(x+k*1.2,155-abs(k)*.2),c.stroke();c.lineWidth=6}}
  c.lineWidth=4;c.beginPath();c.moveTo(120,170);c.quadraticCurveTo(128,175,136,170);c.stroke()
  c.lineWidth=2.5;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,10,5,0,0,T),c.stroke()
  // screentone hair, side-parted, neat
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(70,156);c.bezierCurveTo(50,72,88,34,128,34);c.bezierCurveTo(168,34,206,72,186,156)
  c.quadraticCurveTo(184,120,178,108);c.quadraticCurveTo(160,92,140,90);c.quadraticCurveTo(128,96,122,108);c.quadraticCurveTo(110,96,94,104);c.quadraticCurveTo(80,116,76,130);c.quadraticCurveTo(72,142,70,156);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(130,40);c.quadraticCurveTo(124,70,122,104);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.6,1.72]])c.beginPath(),c.arc(128,108,54,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  // the tea bowl: glazed lower half, matcha inside, bubbling foam
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(60,214);c.quadraticCurveTo(62,254,100,254);c.lineTo(156,254);c.quadraticCurveTo(194,254,196,214);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=FINE;c.beginPath();c.moveTo(56,238);for(let x=56;x<=200;x+=12)c.quadraticCurveTo(x+6,230+(x%24?6:-2),x+12,238);c.lineTo(200,256);c.lineTo(56,256);c.fill();c.lineWidth=3;c.beginPath();c.moveTo(56,238);for(let x=56;x<=200;x+=12)c.quadraticCurveTo(x+6,230+(x%24?6:-2),x+12,238);c.stroke();c.restore()
  c.lineWidth=6;c.beginPath();c.ellipse(128,214,68,14,0,0,T);c.fillStyle='#fff';c.fill();c.stroke()
  c.beginPath();c.ellipse(128,216,58,9,0,0,T);c.fillStyle=DOT;c.fill()
  c.lineWidth=2.5;c.fillStyle='#fff';for(const[x,y,o]of B){const p=(t*2+o)%1,r=1.5+3.5*sin(PI*p);c.beginPath();c.arc(128+x,216+y,r,0,T);c.fill();c.stroke()}
  // her hands: one steadying the bowl, one gripping the whisk
    for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(84,160),c.quadraticCurveTo(48,184,54,218),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(58,224,14,18,.3,0,T);c.fill();c.stroke()
  // chasen: bamboo handle and a bulb of tines, swishing side to side
  for(const[l,s]of[[13,'#111'],[6,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(wx,160+wy),c.lineTo(wx,184+wy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(wx-6,182+wy);c.quadraticCurveTo(wx-20,198+wy,wx-12,212+wy);c.lineTo(wx+12,212+wy);c.quadraticCurveTo(wx+20,198+wy,wx+6,182+wy);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const k of[-8,-3,2,7])c.beginPath(),c.moveTo(wx+k*.6,186+wy),c.quadraticCurveTo(wx+k*1.6,200+wy,wx+k,210+wy),c.stroke()
  c.lineWidth=3;const dir=cos(t*T*4)>0?-1:1;for(const k of[0,1,2])c.beginPath(),c.moveTo(wx+dir*(20+k*6),192+wy+k*6),c.lineTo(wx+dir*(28+k*6),192+wy+k*6),c.stroke()
  for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(176,160),c.quadraticCurveTo(204,176,wx+14,166+wy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(wx+6,166+wy,13,11,0,0,T);c.fill();c.stroke()
}

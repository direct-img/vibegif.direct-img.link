// girl with round glasses and a white top bun sews a button on, the needle pulling thread up through the holes and back down, tongue out
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const BX=124,BY=206,H=[[-8,-8],[8,-8],[8,8],[-8,8]]
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  // needle cycle, twice per loop: up out of one hole, pull high, back down into the next
  const p=(t*2)%1,n=Math.floor(t*2),up=H[n*2%4],dn=H[(n*2+1)%4]
  const rise=p<.45?ease(p/.45):p<.55?1:1-ease((p-.55)/.4),hole=p<.5?up:dn
  const nx=BX+hole[0]+46*rise,ny=BY+hole[1]-60*rise,ang=-.9+.3*rise
  // girl
  c.save();c.translate(128,96);c.scale(.74,.74);c.translate(-128,-130)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(98,184);c.quadraticCurveTo(44,196,34,300);c.lineTo(222,300);c.quadraticCurveTo(212,196,158,184);c.closePath();c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(100,186);c.quadraticCurveTo(110,206,128,202);c.quadraticCurveTo(146,206,156,186);c.quadraticCurveTo(128,196,100,186);c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,22);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // white hair pulled up into a top bun with an ink scrunchie
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.arc(128,26,26,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.arc(124,26,14,1.2*PI,1.9*PI);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,48,24,9,0,0,T);c.fill()
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(50,74,88,46,128,46);c.bezierCurveTo(168,46,206,74,186,150);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // focused eyes looking down at the button, behind round glasses
  const lx=(nx-150)*.05,ly=6
  for(const[x,d]of[[103,-1],[153,1]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,144,12,13,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x,144,12,13,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,144+ly,9,11,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-3,140+ly,3.5,4,0,0,T);c.fill();c.restore()
    c.lineWidth=7;c.beginPath();c.moveTo(x-14,138);c.quadraticCurveTo(x,130,x+14,138);c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(x-12,124);c.quadraticCurveTo(x,118+d*2,x+12,122);c.stroke()}
  c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,144,21,0,T),c.stroke();c.beginPath();c.moveTo(122,140);c.quadraticCurveTo(128,134,134,140);c.stroke()
  const gl=sin(t*T)>.85;if(gl){c.strokeStyle='#111';c.lineWidth=3;for(const x of[103,153])c.beginPath(),c.moveTo(x+4,128),c.lineTo(x+14,138),c.moveTo(x-2,132),c.lineTo(x+10,146),c.stroke()}
  c.lineWidth=4;c.beginPath();c.moveTo(118,170);c.quadraticCurveTo(128,174,138,170);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(130,171);c.quadraticCurveTo(140,182,144,172);c.stroke();c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-3,170),c.lineTo(128+d*44+k+3,162),c.stroke()
  // white fringe in soft points
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(72,140);c.bezierCurveTo(60,80,96,52,128,52);c.bezierCurveTo(160,52,196,80,184,140);c.quadraticCurveTo(178,112,170,108);c.quadraticCurveTo(160,120,152,110);c.quadraticCurveTo(142,122,130,108);c.quadraticCurveTo(118,122,106,110);c.quadraticCurveTo(96,120,86,108);c.quadraticCurveTo(76,116,72,140);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[a,b]of[[100,64],[156,64],[128,58]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo(a+(a-128)*.2,b+18,a+(a-128)*.1,b+34),c.stroke()
  c.restore()
  // fabric patch with the button, and the stitches already done
  c.save();c.translate(BX,BY);c.rotate(-.06);c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(-74,-34);c.lineTo(70,-38);c.lineTo(76,40);c.lineTo(-70,44);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.lineWidth=3;c.setLineDash([6,5]);c.beginPath();c.moveTo(-64,-24);c.lineTo(60,-28);c.lineTo(66,32);c.lineTo(-60,34);c.closePath();c.stroke();c.setLineDash([]);c.restore()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.arc(BX,BY,24,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.arc(BX,BY,17,0,T);c.stroke()
  c.fillStyle='#111';for(const[x,y]of H)c.beginPath(),c.arc(BX+x,BY+y,3.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(BX-8,BY-8);c.lineTo(BX+8,BY+8);c.stroke()
  // hand holding the fabric
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(48,214,16,20,.4,0,T);c.fill();c.stroke()
  for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(40,256),c.quadraticCurveTo(34,238,42,226),c.stroke()
  c.strokeStyle='#111'
  // tomato pin cushion
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(216,232,26,18,0,0,T);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.lineWidth=3;for(const a of[-.6,0,.6])c.beginPath(),c.moveTo(216,216),c.quadraticCurveTo(216+a*40,226,216+a*30,246),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(216,212);for(let k=0;k<6;k++){const b=k*T/6;c.lineTo(216+cos(b)*(k%2?4:10),214+sin(b)*(k%2?3:6))}c.closePath();c.fill()
  c.lineWidth=2.5;for(const[a,b,r]of[[198,222,5],[232,220,5],[222,206,4]]){c.beginPath();c.moveTo(a,b);c.lineTo(a+(a-216)*.4,b-14);c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(a+(a-216)*.4,b-16,r,0,T);c.fill();c.stroke()}
  // thread from the hole to the needle's eye, the needle, and the pinching fingers
  {const ex=nx+30*cos(ang),ey=ny+30*sin(ang)
    for(const[l,s]of[[5,'#111'],[2,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(BX+hole[0],BY+hole[1]),c.quadraticCurveTo((BX+hole[0]+ex)/2+6,(BY+hole[1]+ey)/2+10*(1-rise),ex,ey),c.stroke()
    for(const[l,s]of[[7,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(nx,ny),c.lineTo(ex,ey),c.stroke()
    c.strokeStyle='#111'
    {const fx=nx+20*cos(ang),fy=ny+20*sin(ang)
      for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(178,150),c.quadraticCurveTo(220,176,fx+12,fy+6),c.stroke()
      c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(fx+6,fy+2,11,8,ang,0,T);c.fill();c.stroke()}}
}

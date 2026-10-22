// girl with long wavy white hair at the rooftop chain-link fence, wind streaming her hair and tie, clouds drifting behind the mesh
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const cloud=(c,x,y)=>{c.beginPath();for(const[dx,dy,r]of[[-26,4,14],[-6,-8,20],[16,-2,16],[30,6,10]])c.moveTo(x+dx+r,y+dy),c.arc(x+dx,y+dy,r,0,T);c.rect(x-28,y+4,58,14);c.save();c.lineWidth=8;c.stroke();c.restore();c.fill()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat')
  // clouds drifting between the tall posts above the rail
  c.save();c.beginPath();c.rect(20,6,216,40);c.clip();c.fillStyle='#fff';c.lineWidth=4
  for(let k=0;k<2;k++){const x=20+(k*108+t*108)%216;for(const o of[0,-216])c.save(),c.translate(x+o,28+k*4),c.scale(.7,.7),cloud(c,0,0),c.restore()}
  c.restore()
  // chain-link fence
  c.save();c.beginPath();c.rect(16,52,224,140);c.clip();c.lineWidth=2.5
  c.lineWidth=1.8;for(let x=-140;x<260;x+=30)c.beginPath(),c.moveTo(x,52),c.lineTo(x+140,192),c.moveTo(x+140,52),c.lineTo(x,192),c.stroke()
  c.restore()
  c.fillStyle='#fff';c.lineWidth=4
  for(const[x,y,w,h]of[[10,44,236,10],[10,190,236,8],[10,6,10,196],[236,6,10,196]])c.beginPath(),c.rect(x,y,w,h),c.fill(),c.stroke()
  c.save();c.translate(-28,6)
  // hair streaming right in the wind: tapered wavy locks behind the head
  c.lineWidth=5;c.fillStyle='#fff'
  for(let k=3;k>=0;k--){
    const L=124-k*4,yc=x=>62+k*30+(x-140)*.18+(x-140)*.14*sin(x*.055-t*T*2-k*.9),w=x=>21*Math.pow(1-(x-140)/L,.55)+.5
    c.beginPath();for(let x=140;x<=140+L;x+=3)c.lineTo(x,yc(x)-w(x));for(let x=140+L;x>=140;x-=3)c.lineTo(x,yc(x)+w(x));c.closePath();c.fill();c.stroke()
    c.lineWidth=2;c.beginPath();for(let x=150;x<=114+L;x+=3)c.lineTo(x,yc(x)-w(x)*.15);c.stroke();c.lineWidth=5
  }
  c.lineWidth=6;c.beginPath();c.moveTo(80,150);c.bezierCurveTo(60,70,96,38,134,40);c.bezierCurveTo(176,42,196,90,180,188);c.lineTo(92,190);c.quadraticCurveTo(84,176,80,150);c.closePath();c.fill();c.stroke()
  // blazer in screentone, shirt, flapping tie
  c.lineWidth=6;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(64,198,58,244);c.lineTo(198,244);c.quadraticCurveTo(192,198,156,190);c.closePath();c.fillStyle='#fff';c.fill();c.fillStyle=dot;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(108,191);c.lineTo(128,232);c.lineTo(148,191);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,168,24,24);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  const f=sin(t*T*2),g=sin(t*T*2-1.2)
  c.fillStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(122,196);c.lineTo(134,196);c.quadraticCurveTo(152+6*f,206,170+8*g,206+6*g);c.lineTo(164+8*g,218+6*g);c.quadraticCurveTo(146+6*f,214,124,206);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(128,198,7,5,0,0,T);c.fill()
  // face: calm half-lidded eyes looking into the wind
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,141,13,15,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x-3,142,10,14,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-6,136,4,0,T);c.fill();c.beginPath();c.arc(x+1,149,1.8,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,129);c.quadraticCurveTo(x,121,x+d*15,130);c.lineTo(x+d*21,126);c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(x-6,157);c.lineTo(x+4,157);c.stroke()
  }
  c.lineWidth=2.5;c.beginPath();c.moveTo(122,156);c.lineTo(120,160);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(118,169);c.quadraticCurveTo(126,174,134,168);c.stroke()
  // bangs pushed right by the wind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(72,150)
  c.bezierCurveTo(56,74,90,40,134,40);c.bezierCurveTo(172,42,204,80,188,132)
  const bx=k=>3*sin(t*T*2-k)
  c.quadraticCurveTo(190,110,196+bx(0),104);c.quadraticCurveTo(180,100,172,110);c.quadraticCurveTo(170,96,178+bx(1),84);c.quadraticCurveTo(158,90,150,108)
  c.quadraticCurveTo(144,94,156+bx(2),80);c.quadraticCurveTo(132,86,126,108);c.quadraticCurveTo(118,92,130+bx(3),78);c.quadraticCurveTo(104,84,98,110)
  c.quadraticCurveTo(92,96,98,86);c.quadraticCurveTo(80,96,78,118);c.quadraticCurveTo(74,132,72,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const[a,b,e]of[[[96,58],[120,50],[146,56]],[[90,72],[112,62],[136,64]],[[150,50],[170,58],[184,74]]])c.beginPath(),c.moveTo(...a),c.quadraticCurveTo(...b,...e),c.stroke()
  c.restore()
  // wind streaks
  for(const[y,o]of[[214,0],[230,.5]]){const p=(t+o)%1,x=176+p*40,l=28*sin(PI*p);if(l>6)for(const[lw,st]of[[8,'#111'],[3,'#fff']]){c.lineWidth=lw;c.strokeStyle=st;c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x+l*.4,y-10,x+l*.7,y+6,x+l,y-2);c.stroke()}}c.strokeStyle='#111'
}

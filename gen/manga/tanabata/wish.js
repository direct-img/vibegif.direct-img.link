// manga girl with a screentone side tail ties her wish strip to a bamboo branch, then clasps her hands and wishes while the strips flutter and stars twinkle
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=100,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u)),lerp=(a,b,u)=>a+(b-a)*ease(u)
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);c.fill();c.stroke()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.clip();c.beginPath();c.ellipse(x+3,y-3,10.5,14,0,0,T);c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x+3,y+8,10,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-1,y-8,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+7,y+3,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
const leaf=(c,x,y,a,l)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(l*.45,-8,l,0);c.quadraticCurveTo(l*.45,8,0,0);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(4,0);c.lineTo(l*.7,0);c.stroke();c.restore()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),HAIR=tone(c,5,1.1)
  const tie=t<.35,wish=t>=.42&&t<.92
  // bamboo branch with leaves
  for(const[l,st]of[[14,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(244,14),c.quadraticCurveTo(186,22,108,58),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;for(const[x,y]of[[214,17],[160,33]])c.beginPath(),c.moveTo(x-2,y-6),c.lineTo(x+2,y+6),c.stroke()
  const bz=.06*sin(t*T)
  for(const[x,y,a,l]of[[110,57,2.5,40],[118,52,3.5,34],[150,38,2.2,30],[188,26,-.6,32],[232,16,2.4,30],[200,22,1.9,26]])leaf(c,x,y,a+bz,l)
  // twinkling stars near the branch
  c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<4;k++){const p=(t*2+k/4)%1,[x,y]=[[112,22],[156,12],[242,60],[200,82]][k];spark(c,x,y,3+6*sin(PI*p))}
  // wish strips on strings: two already hanging, hers in the middle
  const strip=(x,y,a,f)=>{c.lineWidth=2.5;c.beginPath();c.moveTo(x,y);c.lineTo(x+sin(-a)*12,y+cos(a)*12);c.stroke();c.save();c.translate(x+sin(-a)*12,y+cos(a)*12);c.rotate(a);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.rect(-9,0,18,48);c.fill();f();c.lineWidth=4;c.beginPath();c.rect(-9,0,18,48);c.stroke();c.restore()}
  strip(142,44,.18*sin(t*T*2),()=>{c.fillStyle=DOT;c.fillRect(-9,0,18,48);c.lineWidth=2.5;for(const y of[10,20,30])c.beginPath(),c.moveTo(-3,y),c.lineTo(3,y+4),c.stroke()})
  strip(218,22,.16*sin(t*T*2+1.5),()=>{c.lineWidth=2.5;c.beginPath();for(const y of[8,16,24,32,40])c.moveTo(0,y),c.lineTo(0,y+4);c.stroke()})
  const ha=tie?.04*sin(t*T*8):.2*sin(t*T*2+.7)
  strip(178,30,ha,()=>{c.save();c.translate(0,14);c.fillStyle='#111';c.beginPath();c.moveTo(0,6);c.bezierCurveTo(-8,0,-5,-7,0,-3);c.bezierCurveTo(5,-7,8,0,0,6);c.fill();c.restore();c.lineWidth=2.5;c.beginPath();for(const y of[28,36])c.moveTo(-4,y),c.quadraticCurveTo(0,y-3,4,y);c.stroke()})
  // screentone side tail
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(56,130);c.bezierCurveTo(26,150,22,200,34,240);c.quadraticCurveTo(46,232,52,244);c.bezierCurveTo(50,200,58,170,74,150);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(50,150);c.bezierCurveTo(36,170,36,200,42,226);c.stroke();c.strokeStyle='#111'
  // yukata with stripes and obi
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(80,196);c.quadraticCurveTo(44,204,38,252);c.lineTo(172,252);c.quadraticCurveTo(160,204,124,196);c.closePath();c.fill()
  c.save();c.clip();c.lineWidth=3;for(let x=30;x<180;x+=12)c.beginPath(),c.moveTo(x,196),c.lineTo(x+4,252),c.stroke();c.restore();c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(80,196);c.lineTo(112,240);c.lineTo(124,232);c.lineTo(98,196);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(42,236);c.lineTo(168,236);c.lineTo(170,252);c.lineTo(40,252);c.closePath();c.fill()
  // her hands: tying the strip, then clasped
  const hx=tie?178+2*sin(t*T*8):t<.42?lerp(178,112,(t-.35)/.07):t<.92?112:lerp(112,178,(t-.92)/.08),hy=tie?52:t<.42?lerp(52,206,(t-.35)/.07):t<.92?206:lerp(206,52,(t-.92)/.08)
  const lerp2=(a,b,u)=>a+(b-a)*u,ex=lerp2(150,hx,.5),ey=lerp2(212,hy+12,.5)
  if(!wish){for(const[l,st]of[[16,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(ex,ey),c.lineTo(hx,hy+10),c.stroke()
  for(const[l,st]of[[30,'#111'],[21,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.lineCap='butt',c.beginPath(),c.moveTo(150,214),c.lineTo(ex,ey),c.stroke()
  c.lineCap='round';c.strokeStyle='#111';c.lineWidth=3;const g=Math.atan2(ey-214,ex-150);for(let k=1;k<5;k++){const u=k/5,x=lerp2(150,ex,u),y=lerp2(214,ey,u);c.beginPath();c.moveTo(x-cos(g+PI/2)*9,y-sin(g+PI/2)*9);c.lineTo(x+cos(g+PI/2)*9,y+sin(g+PI/2)*9);c.stroke()}
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(ex,ey,14,6,g+PI/2,0,T);c.fill();c.stroke()}
c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,9,10,0,0,T);c.fill();c.stroke()
  if(wish){c.beginPath();c.ellipse(hx-14,hy+2,9,10,0,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(hx-7,hy-6);c.lineTo(hx-7,hy+8);c.stroke()}
  // head, tilted up toward the branch
  c.save();c.translate(92,146);c.rotate(-.12);c.scale(.74,.74);c.translate(-128,-128)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(wish){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,140,13,.15*PI,.85*PI),c.stroke();c.lineWidth=4.5;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.lineTo(x-20,150),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-7,0,7])c.beginPath(),c.moveTo(128+d*40+k-3,167),c.lineTo(128+d*40+k+3,158),c.stroke()
  c.lineWidth=6;c.beginPath();c.arc(128,164,8,.15*PI,.85*PI);c.stroke()
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,122,70,150);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.54],[1.62,1.74]])c.beginPath(),c.arc(128,108,54,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?6:15,b=k*PI/5-PI/2;c.lineTo(160+cos(b)*r,62+sin(b)*r)}c.closePath();c.fill();c.stroke()
  c.restore()
}

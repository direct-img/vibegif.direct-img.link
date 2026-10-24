// mint side-ponytail girl beaming and bouncing as she holds up a totally blank calendar, flipping to yet another empty page, peace sign and sparkles
const{sin,cos,PI,abs,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#8ce99a',HD='#40c057',HL='#ebfbee',BL='#ffa8a8',TOP='#ffe066',TD='#fab005',CAL='#ff6b6b',CD='#e03131',GR='#dee2e6',RG='#adb5bd',MO='#c92a2a',TG='#ff8fab',SP='#ffd43b'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const sp=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.16,y+(b-a)*r*.16,x+a*r,y+b*r);c.fill();c.stroke()}
const page=c=>{c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.rect(-50,-30,100,74);c.fill();c.stroke()
  c.strokeStyle=GR;c.lineWidth=3;c.beginPath();for(let k=1;k<5;k++)c.moveTo(-50+k*20,-26),c.lineTo(-50+k*20,40);for(let k=1;k<4;k++)c.moveTo(-46,-30+k*18.5),c.lineTo(46,-30+k*18.5);c.stroke();c.strokeStyle='#111'}
export default(c,t)=>{
  const hp=t<.25?abs(sin(8*PI*t)):t>=.625&&t<.875?.8*abs(sin(8*PI*t)):0,b=-10*hp,sw=t%.25<.125?.06*hp:-.06*hp,fl=(t-.4)/.2
  // side ponytail swinging behind
  c.save();c.translate(0,b);c.save();c.translate(148,72);c.rotate(.25-.2*hp)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(30,-4,50,40,40,100);c.quadraticCurveTo(34,124,18,128);c.quadraticCurveTo(30,80,0,18);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(12,12);c.bezierCurveTo(30,30,38,64,32,100);c.stroke();c.strokeStyle='#111';c.restore()
  c.save();c.translate(92,170);c.scale(.74,.74);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,202,164);c.lineTo(54,164);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(54,198,44,300);c.lineTo(212,300);c.quadraticCurveTo(202,198,156,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle=TD;c.lineWidth=5;for(const y of[246,276])c.beginPath(),c.moveTo(56,y),c.lineTo(200,y),c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*34,212,128+d*30,190),c.quadraticCurveTo(128+d*16,192,128,206),c.fill(),c.stroke()
  c.save();c.translate(128,186);c.rotate(sw);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,14,8,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,164),c.lineTo(128+d*44+k+2,157),c.stroke()
  c.lineWidth=5;c.fillStyle=MO;c.beginPath();c.moveTo(110,164);c.quadraticCurveTo(128,168,146,164);c.quadraticCurveTo(144,188,128,188);c.quadraticCurveTo(112,188,110,164);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,10,7,0,0,T);c.fill();c.restore()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,158)
  c.bezierCurveTo(48,74,88,38,128,38);c.bezierCurveTo(168,38,208,74,190,158)
  c.quadraticCurveTo(188,120,180,104);c.quadraticCurveTo(172,100,166,92);c.quadraticCurveTo(158,106,146,108);c.quadraticCurveTo(140,96,132,90)
  c.quadraticCurveTo(124,104,112,108);c.quadraticCurveTo(106,98,98,94);c.quadraticCurveTo(90,106,78,106);c.quadraticCurveTo(68,128,66,158);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#f783ac';c.lineWidth=6;c.beginPath();c.ellipse(180,62,10,15,.5,0,T);c.fill();c.stroke()
  c.restore();c.restore()
  // peace sign
  const hx=40,hy=150
  ds(c,22,13,TOP,()=>{c.moveTo(62,200);c.quadraticCurveTo(34,196,hx,hy+14)})
  for(const[fx,fy]of[[-12,-30],[5,-33]])ds(c,14,7,SKIN,()=>{c.moveTo(hx,hy);c.lineTo(hx+fx,hy+fy)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy+4,13,12,0,0,T);c.fill();c.stroke()
  // calendar held up high, swaying, flipping to another blank page
  c.save();c.translate(188,92);c.rotate(-sw*.8)
  c.lineWidth=6;c.fillStyle=CAL;c.beginPath();c.roundRect(-54,-52,108,98,8);c.fill();c.stroke()
  page(c)
  if(fl>0&&fl<1){const s=cos(PI*fl*.67);c.save();c.translate(0,-30);c.scale(1,s);c.translate(0,30);if(s>0)page(c),c.restore();else{c.beginPath();c.rect(-50,-30,100,74);c.restore();c.fillStyle='#f1f3f5';c.lineWidth=5;c.fill();c.stroke()}}
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(-50,-38);c.lineTo(50,-38);c.stroke();c.strokeStyle='#111'
  for(const x of[-30,0,30])ds(c,10,4,RG,()=>{c.moveTo(x,-58);c.lineTo(x,-44)})
  c.restore()
  ds(c,22,13,TOP,()=>{c.moveTo(124,198);c.quadraticCurveTo(140,180,148,140)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(148,136,11,12,0,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o,r]of[[238,28,0,13],[124,30,.33,11],[240,150,.66,12],[22,94,.5,10]]){const s=.6+.4*sin(PI*min(1,hp+o));sp(c,x,y,r*s)}
}

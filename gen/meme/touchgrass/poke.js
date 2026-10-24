// screen-pale hoodie gremlin with its phone slowly reaches out and pokes a tuft of grass, jolts back in shock, then works up the nerve to try again
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=80,rim=5
const HD='#5c5f66',HL='#3d4045',SK='#dbe9f6',BAG='#b197fc',GR='#51cf66',GD='#2f9e44',DT='#a9744f',PH='#74c0fc'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const spark=(c,x,y,s)=>{c.fillStyle='#ffe066';c.lineWidth=3.5;c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.3:s,a=k*PI/4;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath();c.fill();c.stroke()}
const BLADES=[[-26,-34,-.5],[-14,-58,-.25],[-2,-44,0],[10,-62,.15],[22,-40,.4],[30,-52,.6]]
export default(c,t,i)=>{
  // idle on phone, glance at the grass, slow reach, ZAP at .5, recoil, shiver, back to the phone
  const reach=ez(t,.18,.5)-ez(t,.62,.68),zap=t>=.5&&t<.62,rec=t>=.62&&t<.86,lean=zap?0:rec?-10*(1-ez(t,.72,.86)):0,shake=zap?2.5*sin(i*2.5):0
  const look=t<.1||t>=.86?0:1,bend=zap?1:0
  // sun
  c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.arc(222,36,18,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4;c.moveTo(222+cos(a)*26,36+sin(a)*26);c.lineTo(222+cos(a)*34,36+sin(a)*34)}c.stroke()
  // grass
  const gx=204,gy=232
  c.fillStyle=DT;c.beginPath();c.ellipse(gx,gy,46,14,0,PI,T);c.closePath();c.fill();c.stroke()
  for(const[k,[x,h,a]]of BLADES.entries()){const sw=k==1?-bend*.55:bend?.08*sin(i*3+k):0
    c.save();c.translate(gx+x,gy-6);c.rotate(a*.5+sw)
    c.fillStyle=k%2?GR:'#69db7c';c.lineWidth=5;c.beginPath();c.moveTo(-7,4);c.quadraticCurveTo(-6,h*.5,0,h);c.quadraticCurveTo(6,h*.5,7,4);c.closePath();c.fill();c.stroke();c.restore()}
  c.fillStyle='#fff';c.lineWidth=4;for(let k=0;k<5;k++){const a=k*T/5;c.beginPath();c.ellipse(gx+34+cos(a)*7,gy-46+sin(a)*7,5,3.5,a,0,T);c.fill();c.stroke()}
  c.fillStyle='#ffd43b';c.beginPath();c.arc(gx+34,gy-46,5,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.strokeStyle=GD;c.beginPath();c.moveTo(gx+34,gy-40);c.quadraticCurveTo(gx+30,gy-22,gx+32,gy-8);c.stroke();c.strokeStyle='#111'
  // gremlin
  c.save();c.translate(shake+lean,0)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(14,240);c.bezierCurveTo(8,168,36,148,88,148);c.bezierCurveTo(140,148,162,180,156,240);c.closePath();c.fill();c.stroke()
  c.save();c.translate(86,106);c.rotate(zap?-.06:rec?-.1*(1-ez(t,.72,.86)):0)
  c.fillStyle=HD;c.beginPath();c.ellipse(0,0,70,64,0,0,T);c.fill();c.stroke()
  c.fillStyle=HL;c.beginPath();c.ellipse(6,8,54,48,0,0,T);c.fill()
  c.fillStyle=SK;c.lineWidth=6;c.beginPath();c.ellipse(8,12,47,41,0,0,T);c.fill();c.stroke()
  const hu=zap?10:0;c.lineWidth=5;c.beginPath();c.moveTo(-16,-24);c.lineTo(-8,-38-hu);c.lineTo(0,-24);c.lineTo(8,-42-hu);c.lineTo(16,-24);c.lineTo(22,-36-hu);c.lineTo(26,-24);c.closePath();c.fill();c.stroke()
  // face: glazed eyes with dark bags, on the phone or on the grass
  const lx=zap?0:look?6:-3,ly=zap?0:look?1:6
  for(const d of[-1,1]){const x=8+d*19,y=8
    c.strokeStyle=BAG;c.lineWidth=4;c.beginPath();c.arc(x,y+5,13,.2*PI,.8*PI);c.stroke();c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=4.5;const er=zap?15:12;c.beginPath();c.ellipse(x,y,er,er*(zap?1.1:.92),0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+lx,y+ly,zap?2.5:4.5,0,T);c.fill()}
  c.lineWidth=4.5
  if(zap)c.fillStyle='#c92a2a',c.beginPath(),c.ellipse(10,38,7,8,0,0,T),c.fill(),c.stroke()
  else if(rec)c.beginPath(),c.moveTo(-2,38),c.lineTo(4,35),c.lineTo(10,38),c.lineTo(16,35),c.lineTo(22,38),c.stroke()
  else{c.beginPath();c.moveTo(0,38);c.quadraticCurveTo(10,34,20,38);c.stroke()}
  c.restore()
  // phone in the near hand
  c.save();c.translate(64,192);c.rotate(-.3)
  c.fillStyle='#212529';c.lineWidth=5;c.beginPath();c.roundRect(-15,-26,30,46,6);c.fill();c.stroke()
  c.fillStyle=PH;c.beginPath();c.roundRect(-10,-20,20,34,3);c.fill()
  c.restore()
  c.fillStyle=SK;c.lineWidth=5;c.beginPath();c.ellipse(70,210,13,11,0,0,T);c.fill();c.stroke()
  // reaching arm with one pointer finger
  const hx=130+54*reach,hy=208-16*reach
  for(const[w,s]of[[30,'#111'],[17,HD]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(124,174),c.quadraticCurveTo(128+22*reach,188-6*reach,hx-10,hy),c.stroke()
  c.strokeStyle='#111';c.fillStyle=SK;c.lineWidth=5
  c.save();c.translate(hx,hy);c.rotate(-.3*reach)
  c.beginPath();c.roundRect(-4,-5,10+16*reach,10,5);c.fill();c.stroke()
  c.beginPath();c.ellipse(-4,3,12,11,0,0,T);c.fill();c.stroke()
  c.restore()
  if(rec)for(const[w,s]of[[9,'#111'],[3.5,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(const y of[60,80,100])c.moveTo(166,y),c.lineTo(178,y-4);c.stroke()}
  c.restore();c.strokeStyle='#111'
  if(zap){const p=ez(t,.5,.56);for(let k=0;k<5;k++){const a=k*T/5+.4;spark(c,192+cos(a)*(16+18*p),186+sin(a)*(14+16*p),13-4*p)}
    for(const[w,s]of[[15,'#111'],[7,'#ff6b6b']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(160,16);c.lineTo(156,48);c.moveTo(154,66);c.lineTo(154,66);c.stroke()}c.strokeStyle='#111'}
}

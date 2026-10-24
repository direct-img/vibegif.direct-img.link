// midnight kitchen: a guy in pajamas opens the fridge, stares at the same lone pickle, closes it, glances at you, and opens it again just in case
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=32,delay=85,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),bump=(t,m,w)=>io(1-abs(((t-m+1.5)%1)-.5)/w)
const WALL='#b197fc',FL='#9775fa',FR='#f1f3f5',IN='#fff9db',SH='#a5d8ff',PJ='#ffc9c9',PS='#fa5252',SKIN='#ffd3b0',HAIR='#5c3d2e',PK='#82c91e',JAR='#e3fafc'
export default(c,t,i)=>{
  const op=io((t-.06)/.1)-io((t-.54)/.1),w=106*cos(op*1.42),fx=236-w,sp=10*sin(op*1.42),look=bump(t,.75,.14),rch=max(bump(t,.04,.1),bump(t,.55,.1)),bl=i==14||i==26
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=WALL;c.fill();c.clip()
  c.fillStyle=FL;c.fillRect(0,222,256,40);c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(0,222);c.lineTo(256,222);c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.arc(36,38,16,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(36,38);c.lineTo(36,28);c.moveTo(36,38);c.lineTo(44,38);c.stroke()
  c.lineWidth=6;c.fillStyle=FR;c.beginPath();c.roundRect(130,26,106,212,10);c.fill();c.stroke()
  c.beginPath();c.moveTo(130,92);c.lineTo(236,92);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(142,48);c.lineTo(142,76);c.stroke()
  for(const[x,y,col]of[[180,44,'#ff6b6b'],[208,62,'#ffd43b'],[196,40,'#4dabf7']])c.fillStyle=col,c.lineWidth=4,c.beginPath(),c.arc(x,y,6,0,T),c.fill(),c.stroke()
  c.save();c.translate(170,62);c.rotate(-.08);c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(-12,-12,24,22);c.fill();c.stroke();c.strokeStyle='#40c057';c.beginPath();c.moveTo(-6,6);c.lineTo(-2,-4);c.lineTo(3,4);c.lineTo(7,-2);c.stroke();c.restore()
  c.strokeStyle='#111'
  if(op>.01){
    c.fillStyle=IN;c.lineWidth=5;c.beginPath();c.rect(136,98,96,134);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(184,106,7,0,PI);c.fill();c.stroke()
    c.strokeStyle=SH;c.lineWidth=5;c.beginPath();for(const y of[140,192])c.moveTo(138,y),c.lineTo(230,y);c.stroke()
    c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=JAR;c.beginPath();c.roundRect(170,152,36,38,6);c.fill();c.stroke()
    c.fillStyle='#e03131';c.beginPath();c.roundRect(167,146,42,10,3);c.fill();c.stroke()
    c.save();c.translate(188,172);c.rotate(.3+.1*sin(T*t*2));c.fillStyle=PK;c.lineWidth=3;c.beginPath();c.ellipse(0,0,8,14,0,0,T);c.fill();c.stroke();c.fillStyle='#5c940d';for(const[a,b]of[[-3,-6],[3,1],[-1,7]])c.beginPath(),c.arc(a,b,1.3,0,T),c.fill();c.restore()
  }
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=FR
  c.beginPath();c.moveTo(236,94);c.lineTo(fx,94-sp);c.lineTo(fx,236+sp);c.lineTo(236,236);c.closePath();c.fill();c.stroke()
  if(w>30){c.lineWidth=7;c.beginPath();c.moveTo(fx+12,110);c.lineTo(fx+12,150);c.stroke()}
  const hy=4*sin(T*t*2),sx=92,sy=144
  c.lineWidth=6;c.fillStyle=PJ
  c.beginPath();c.moveTo(48,226);c.lineTo(48,150);c.quadraticCurveTo(48,132,70,132);c.quadraticCurveTo(94,132,94,150);c.lineTo(94,226);c.closePath();c.fill();c.stroke()
  c.strokeStyle=PS;c.lineWidth=4;c.beginPath();for(const x of[60,72,84])c.moveTo(x,140),c.lineTo(x,222);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(70,184);c.lineTo(70,226);c.stroke()
  c.fillStyle='#ff8787';for(const x of[56,84])c.beginPath(),c.ellipse(x,228,15,7,0,0,T),c.fill(),c.stroke()
  const hx=sx+40*rch,hhy=196-44*rch
  for(const[lw,s]of[[20,'#111'],[10,PJ]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(sx-6,sy),c.quadraticCurveTo(sx+4+10*rch,sy+30-20*rch,hx,hhy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hhy,8,0,T);c.fill();c.stroke()
  c.save();c.translate(72+7*op,98+hy*.5+3*op);c.rotate(.12*op);c.lineWidth=6
  c.fillStyle=SKIN;c.beginPath();c.arc(0,0,34,0,T);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-34,-2);c.lineTo(-40,-20);c.lineTo(-26,-22);c.lineTo(-30,-40);c.lineTo(-12,-32);c.lineTo(-6,-46);c.lineTo(8,-34);c.lineTo(22,-44);c.lineTo(24,-28);c.lineTo(40,-26);c.lineTo(32,-10);c.quadraticCurveTo(10,-24,-10,-16);c.quadraticCurveTo(-24,-10,-34,-2);c.closePath();c.fill();c.stroke()
  const ex=10-10*look,ey=2+3*look
  c.fillStyle='#111';if(bl){c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(ex+d*12-5,ey),c.lineTo(ex+d*12+5,ey),c.stroke()}else for(const d of[-1,1])c.beginPath(),c.arc(ex+d*12,ey,4.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();for(const d of[-1,1])c.moveTo(ex+d*12-6,ey-8),c.lineTo(ex+d*12+6,ey-8);c.stroke()
  c.beginPath();c.moveTo(ex-5,ey+18);c.lineTo(ex+5,ey+18);c.stroke()
  c.fillStyle='#ff8fa3';c.beginPath();c.ellipse(ex+24,ey+12,6,4,0,0,T);c.fill()
  c.restore()
  const L=op,lit=()=>{c.moveTo(232,98);c.lineTo(136,98);c.lineTo(136-136*L,40-30*L);c.lineTo(136-150*L,256);c.lineTo(232,256);c.closePath()}
  c.fillStyle='rgba(20,18,64,.62)';c.beginPath();c.rect(0,0,256,256);if(L>.01)lit();c.fill('evenodd')
  if(L>.01&&L<.99){c.fillStyle=`rgba(20,18,64,${(.62*(1-L)).toFixed(2)})`;c.beginPath();lit();c.fill()}
  if(op>.5){c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=4;for(let k=0;k<3;k++)if(t>.22+k*.07&&t<.54)c.beginPath(),c.arc(66+k*15,28,5,0,T),c.fill(),c.stroke()}
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}

// girl with a white curly bob drops a holed coin into her piggy bank, lifts it to her ear and shakes it to hear the jingle, then sparkles
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const spark=(c,x,y,r)=>{c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();for(let k=0;k<8;k++){const q=k%2?r*.3:r,b=k*PI/4;c.lineTo(x+cos(b)*q,y+sin(b)*q)}c.closePath();c.fill();c.stroke()}
const curls=(c,cx,cy,rx,ry,n,b,a0,a1)=>{for(let k=0;k<=n;k++){const a=a0+(a1-a0)*k/n,m=a0+(a1-a0)*(k-.5)/n;k?c.quadraticCurveTo(cx+(rx+b)*cos(m),cy+(ry+b)*sin(m),cx+rx*cos(a),cy+ry*sin(a)):c.lineTo(cx+rx*cos(a),cy+ry*sin(a))}}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const up=ease((t-.4)/.08)*(1-ease((t-.72)/.08)),listen=t>=.46&&t<.74,clink=t>=.32&&t<.42,shine=t>=.78&&t<.94
  const shake=listen?7*sin(t*T*12):0,px=128+60*up+shake,py=206-66*up,ps=1-.18*up,pa=-.35*up+shake*.02
  // right hand: holding the coin over the slot, then on the pig, then fetching the next coin
  const g=t<.26?1:t<.32?1-ease((t-.26)/.06):t<.86?0:ease((t-.86)/.1)
  const hp=(lo,hi)=>[px+(lo[0]+(hi[0]-lo[0])*up)*ps,py+(lo[1]+(hi[1]-lo[1])*up)*ps]
  const L=hp([-46,14],[-30,32]),r=hp([46,14],[44,20]),R=[r[0]+(154-r[0])*g,r[1]+(150-r[1])*g]
  const head=()=>{c.translate(128,186);c.rotate(.08*up);c.translate(-128,-186)}
  c.save();c.translate(122,106);c.scale(.8,.8);c.translate(-128,-130)
  // curly white bob behind
  c.save();head();c.lineWidth=7;c.fillStyle='#fff';c.beginPath();curls(c,128,120,76,82,14,10,.05*PI,.95*PI);curls(c,128,120,76,82,14,10,.95*PI,2.05*PI);c.closePath();c.fill();c.stroke();c.restore()
  // the same white top every frame: ink peter-pan collar, little bow, button placket, a few folds
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(98,184);c.quadraticCurveTo(50,196,36,340);c.lineTo(220,340);c.quadraticCurveTo(206,196,158,184);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(66,206);c.quadraticCurveTo(78,226,76,250);c.moveTo(190,206);c.quadraticCurveTo(178,226,180,250);c.moveTo(128,212);c.lineTo(128,330);c.moveTo(96,280);c.quadraticCurveTo(104,300,100,320);c.moveTo(160,280);c.quadraticCurveTo(152,300,156,320);c.stroke()
  c.fillStyle='#fff';c.lineWidth=3.5;for(const y of[238,266,294])c.beginPath(),c.arc(128,y,5,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';c.lineWidth=6;for(const d of[-1,1]){c.beginPath();c.moveTo(128,192);c.quadraticCurveTo(128+d*44,184,128+d*46,200);c.quadraticCurveTo(128+d*44,224,128+d*4,214);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=2;c.setLineDash([4,4]);c.beginPath();c.moveTo(128+d*10,204);c.quadraticCurveTo(128+d*36,214,128+d*38,200);c.stroke();c.setLineDash([]);c.strokeStyle='#111'}
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*16,204),c.lineTo(128+d*16,222),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=DOT;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*3,212),c.lineTo(128+d*14,207),c.lineTo(128+d*14,219),c.closePath(),c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(128,212,5,0,T);c.fill();c.stroke()
  c.save();head();c.fillStyle='#fff';c.lineWidth=7
  c.beginPath();c.rect(116,166,24,22);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(listen||clink){c.lineWidth=6;for(const x of[103,153])c.beginPath(),listen?(c.moveTo(x-14,142),c.quadraticCurveTo(x,152,x+14,142)):(c.moveTo(x-12,134),c.lineTo(x+8,142),c.lineTo(x-12,150)),c.stroke()}
  else{const[lx,ly]=shine?[0,0]:t<.32?[5,-6]:[3,4];for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,140+ly,10.5,14,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,135+ly,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,147+ly,2,0,T);c.fill()
      if(shine){c.save();c.translate(x+2,140);c.beginPath();for(let k=0;k<10;k++){const r=k%2?2.5:7,b=k*PI/5-PI/2;c.lineTo(cos(b)*r,sin(b)*r)}c.fill();c.restore()}
      c.restore();c.lineWidth=6;c.beginPath();c.moveTo(x-16,135);c.quadraticCurveTo(x,120,x+16,135);c.moveTo(x+d*14,132);c.lineTo(x+d*21,127);c.stroke()}}
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=4.5;c.beginPath();if(listen||shine)c.moveTo(116,166),c.quadraticCurveTo(128,182,140,166),c.closePath(),c.fillStyle='#111',c.fill();else if(t<.32)c.arc(128,170,5,0,T);else c.moveTo(121,169),c.quadraticCurveTo(128,173,135,169);c.stroke()
  // curly fringe
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,124);curls(c,128,120,58,66,9,9,1.06*PI,1.94*PI);c.lineTo(182,124);c.quadraticCurveTo(170,104,156,108);c.quadraticCurveTo(146,96,134,106);c.quadraticCurveTo(122,96,110,106);c.quadraticCurveTo(98,98,88,108);c.quadraticCurveTo(78,110,74,124);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;for(const[x,y]of[[96,74],[128,62],[160,74],[110,90],[146,88]])c.beginPath(),c.arc(x,y,6,.2*PI,1.4*PI),c.stroke()
  c.restore();c.restore()
  // jingle marks while she shakes it
  if(listen){c.lineWidth=3.5;for(const d of[-1,1])for(const k of[0,1])c.beginPath(),c.arc(px,py,44+k*9,d>0?-.5:PI-.5,d>0?.5:PI+.5),c.stroke()
    for(const[o,dx]of[[0,-1],[.5,1]]){const p=(t*4+o)%1;c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(px+dx*(40+8*p),py-30-26*p,6,6,0,0,T);c.fill();c.stroke();c.beginPath();c.arc(px+dx*(40+8*p),py-30-26*p,2,0,T);c.stroke()}}
  // sleeves from the fixed shoulders out to the hands
  for(const[[sx,sy],[hx,hy],d]of[[[72,172],L,-1],[[172,172],R,1]]){const mx=(sx+hx)/2+d*12,my=max(sy,hy)+22
    for(const[l,s]of[[26,'#111'],[15,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.quadraticCurveTo(mx,my,hx,hy),c.stroke()}
  c.strokeStyle='#111'
  // piggy bank
  c.save();c.translate(px,py);c.rotate(pa);c.scale(ps,ps)
  c.lineWidth=6;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(d*18,-26),c.lineTo(d*30,-46),c.lineTo(d*36,-20),c.closePath(),c.fill(),c.stroke()
  for(const d of[-1,1])c.beginPath(),c.roundRect(d*24-8,24,16,16,5),c.fill(),c.stroke()
  c.beginPath();c.ellipse(0,0,48,36,0,0,T);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=DOT;for(const[x,y,r]of[[-30,-14,9],[30,-10,7],[24,20,10],[-26,18,7]])c.beginPath(),c.arc(x,y,r,0,T),c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.roundRect(-14,-36,28,7,3);c.fill()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(0,6,15,11,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*5,6,2.5,4,0,0,T),c.fill()
  for(const d of[-1,1])c.beginPath(),c.arc(d*22,-8,4,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-4,0,4])c.beginPath(),c.moveTo(d*30+k-2,8),c.lineTo(d*30+k+2,2),c.stroke()
  c.restore()
  // the holed coin: pinched by the right hand, dropped through the slot, and a fresh one fetched at the end
  const held=t<.22||t>.9,f=held?0:ease((t-.22)/.12)
  if(f<1&&(t<.4||t>.9)){const cx=held?R[0]-26:128,cy=held?R[1]:150+24*f,w=held?13:13*(1-f*.8)
    c.save();if(f>0){c.beginPath();c.rect(0,0,256,170);c.clip()}
    c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(cx,cy,w,13,0,0,T);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(cx,cy,w*.32,4,0,0,T);c.fill();c.lineWidth=3;c.stroke();c.restore()
    if(t<.22)spark(c,cx+14,cy-12,7*(.6+.4*sin(t*T*8)))}
  if(clink){c.lineWidth=4;for(const a of[-2.4,-1.9,-1.2,-.7])c.beginPath(),c.moveTo(128+cos(a)*18,170+sin(a)*18),c.lineTo(128+cos(a)*30,170+sin(a)*30),c.stroke()}
  // the hands holding the piggy
  c.lineWidth=6;c.fillStyle='#fff';for(const[[x,y],d]of[[L,-1],[R,1]])c.beginPath(),c.ellipse(x,y,13,15,d*.3*(1-g),0,T),c.fill(),c.stroke()
  if(shine)for(const[x,y,o]of[[80,186,0],[180,190,.5],[128,160,.25]])spark(c,x,y,10*(.6+.4*sin((t*6+o)*T)))
}

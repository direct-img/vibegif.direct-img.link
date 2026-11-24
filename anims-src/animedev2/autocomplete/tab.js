// a brown-skinned girl with a lavender bob and pink cat-ear headphones taps a big Tab key, grey ghost code fills in a whole function and she gasps with starry eyes, hands on her cheeks
// tags: excited, anime, coding, keyboard, sparkle, happy
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,min,max,abs,floor}=Math
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const star=(c,x,y,r,f,w=2)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/5-P/2,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();fs(c,f,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);c.stroke();c.beginPath();c.moveTo(x+f*9,y+3);c.lineTo(x+f*13,y);c.lineWidth=3;return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='line'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  if(ex=='dot'){el(c,x+lx,y+2+ly,3.2,4);fs(c,O,0)}
  else{el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){star(c,x+lx,y+ly+2,7.5*pp,'#fff36b',1.6);el(c,x+lx-4.5,y+ly-5,2.4,2.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,blc='rgba(255,100,125,.3)',fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,blc,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br);c.quadraticCurveTo(f*20,-15-br,f*28,-12+3*br);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else if(m=='drool'){c.moveTo(-5,0);c.quadraticCurveTo(0,3,5,0);c.stroke();c.beginPath();c.moveTo(4,1);c.quadraticCurveTo(7,6,5,9);c.quadraticCurveTo(2,6,4,1);fs(c,'#bfe8ff',1.6)}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const drop=(c,x,y,s=1)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=26,delay=80,rim=4
const H='#b9a2f0',Hd='#8a70d0',Hl='#e4daff',S='#9a6343',Sd='#7a4a30',J='#f4b63f',Jd='#c98a1e',HP='#ff7eb3',
  L1='function so',G=['rt(a){','  return a.sort(','    (x,y)=>x-y)','}'],K=['#ff9ed0','#7ee0ff','#a1f08f','#ffd166']
export default(c,t,i)=>{
  const ty=min(L1.length,floor(sg(t,.03,.25)*L1.length+.01)),gh=sg(t,.25,.3),pr=sg(t,.35,.4)*(1-sg(t,.44,.5)),fl=sg(t,.43,.56),
    ga=sg(t,.5,.58)*(1-sg(t,.86,.95)),fo=1-sg(t,.9,.98),hop=-sin(sg(t,.5,.62)*P)*7
  // editor window
  rr(c,8,12,146,120,10);fs(c,'#1e2236');rr(c,8,12,146,20,[10,10,0,0]);fs(c,'#363c58',3.5)
  ;['#ff5f57','#ffbd2e','#28c840'].forEach((f,k)=>{el(c,22+k*13,22,4);fs(c,f,0)})
  c.save();rr(c,10,33,142,97,8);c.clip();c.globalAlpha=fo
  c.font='bold 12px DejaVu Sans Mono';c.textAlign='left';c.textBaseline='middle'
  const cw=c.measureText('m').width,X=16,Y=48,dy=19
  c.fillStyle='#ff9ed0';c.fillText(L1.slice(0,ty),X,Y)
  const lines=[[X+cw*L1.length,Y,G[0]],...G.slice(1).map((s,k)=>[X,Y+dy*(k+1),s])]
  lines.forEach(([x,y,s],k)=>{
    if(gh>0){c.globalAlpha=fo*gh*.5;c.fillStyle='#9aa0b8';c.fillText(s,x,y)}
    const w=E(fl*5-k)*c.measureText(s).width
    if(w>0){c.save();c.beginPath();c.rect(x,y-10,w,20);c.clip();c.globalAlpha=fo;c.fillStyle=K[k];c.fillText(s,x,y);c.restore()}
  })
  c.globalAlpha=fo
  const cx=fl>.95?X+cw*1+2:ty<L1.length||gh<1?X+cw*ty+1:X+cw*ty+1,cy=fl>.95?Y+dy*3:Y
  if(i%4<2||(t>.03&&t<.25)){rr(c,cx,cy-8,2.5,16,1);fs(c,'#fff',0)}
  if(fl>0&&fl<1){const sx=X+fl*120,sy=Y+dy*min(3,floor(fl*4));star(c,sx,sy,7,'#fff',0)}
  c.restore()
  // keyboard with a big Tab key
  pg(c,14,196,170,196,176,238,8,238);fs(c,'#e6e9f2')
  for(let r=0;r<2;r++)for(let k=0;k<6;k++){rr(c,80+k*14.5,203+r*15,11,10,2);fs(c,'#fff',1.6)}
  const kd=pr*4;rr(c,16,184+kd,58,40,7);fs(c,'#2d8f8a');rr(c,20,186+kd,50,30,6);fs(c,'#5ee0d2',2.5);tx(c,'Tab⇥',40,201+kd,15,'#fff',4,'DejaVu Sans')
  if(pr>.5)for(const a of[-1.3,-.8,-.3]){c.beginPath();c.moveTo(45+sin(a)*36,202-cos(a)*36);c.lineTo(45+sin(a)*46,202-cos(a)*46);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
  // back hair bob
  c.save();c.translate(198,100+hop);c.scale(.8,.8)
  c.beginPath();c.moveTo(-54,-10);c.bezierCurveTo(-62,30,-58,50,-44,56);c.quadraticCurveTo(0,62,44,56);c.bezierCurveTo(58,50,62,30,54,-10);fs(c,Hd)
  c.restore()
  // torso: mustard sweater
  c.beginPath();c.moveTo(178,142+hop);c.bezierCurveTo(158,148,150,168,148,198);c.lineTo(148,240);c.lineTo(246,240);c.lineTo(246,198);c.bezierCurveTo(244,168,238,148,218,142+hop);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(186,144+hop);c.quadraticCurveTo(198,158,210,144+hop);fs(c,'#fff',3)
  c.strokeStyle=Jd;c.lineWidth=2.5;for(let y=212;y<236;y+=8){c.beginPath();c.moveTo(152,y);c.lineTo(242,y);c.stroke()}
  // head
  c.save();c.translate(198,100+hop);c.scale(.8,.8);c.rotate(-.05+ga*.05)
  hd(c,S)
  const look=t<.3?{lx:-5,ly:2}:{lx:-6,ly:-1}
  face(c,ga>.3?{e:['#0f6b70','#6fe6d8'],ex:'star',pp:1.1,m:'o',mo:1.6,br:1,bc:Hd,blc:'rgba(255,90,120,.45)'}
    :{e:['#0f6b70','#6fe6d8'],...look,pp:gh>.5?.75:1,op:gh>.5?1:.85,m:gh>.5&&t<.45?'o':'cat',mo:1,br:gh>.5?.6:0,bc:Hd,blc:'rgba(255,90,120,.4)'})
  c.beginPath();c.moveTo(-50,24);c.bezierCurveTo(-58,-42,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-42,50,24)
  qs(c,[50,24,46,-6,38,6,32,-16,22,-2,12,-20,2,-4,-8,-20,-18,-2,-28,-18,-38,4,-46,-6,-50,24],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  // cat-ear headphones
  for(const f of[-1,1]){pg(c,f*20,-62,f*30,-88,f*44,-56);fs(c,HP);pg(c,f*26,-64,f*31,-78,f*38,-60);fs(c,'#ffd0e4',0)}
  c.beginPath();c.arc(0,-12,56,P*1.08,P*1.92);st(c,8,HP,3)
  for(const f of[-1,1]){el(c,f*52,6,11,17);fs(c,HP);el(c,f*52,6,5,9);fs(c,'#ffd0e4',0)}
  c.restore()
  // arms: one reaches over to Tab, then both hands fly to her cheeks
  const arm=(sx,sy,qx,qy,x,y,cl=J)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(qx,qy,x,y);st(c,15,cl);el(c,x,y,9,8);fs(c,S,3.2)}
  const ch=x=>[198+x*.8*44,100+hop+.8*30]
  if(ga>.3){const[a,b]=ch(-1),[d,e]=ch(1);arm(170,164+hop,156,196,a-4,b+6);arm(226,164+hop,244,196,d+4,e+6)}
  else{arm(168,160,116,210-pr*8,62,192+kd-pr*4);arm(226,162,212,210,152,214)}
  if(ga>.3)for(let k=0;k<5;k++){const a=k*1.26+t*4,r=62+sin(t*20+k)*4;star(c,198+cos(a)*r*.9,98+hop+sin(a)*r*.8,5+2*sin(t*30+k),K[k%4],2)}
}

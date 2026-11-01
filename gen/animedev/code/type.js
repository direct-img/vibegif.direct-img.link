// a ginger girl with space buns typing fast and happily on a laptop, code lines popping off the screen
const P=Math.PI,O='#2b1d2e'
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,'rgba(255,100,125,.3)',0)}
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
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=16,delay=70,rim=4
const H='#ff8a3d',Hd='#d95a28',Hl='#ffc893',S='#ffe4d0',J='#62b8ff',Jd='#3a8ae0',
  K=['#ff79a8','#ffd166','#7ee0ff','#a1f08f','#c99bff'],toks=['{ }','=>','</>',';','( )','++']
export default(c,t,i)=>{
  const T=t*2*P,bob=0,e=x=>x<0?0:x>1?1:x*x*(3-2*x)
  // back hair and hood
  c.save();c.translate(90,96+bob);c.rotate(.07)
  c.beginPath();c.moveTo(-52,-10);c.bezierCurveTo(-62,40,-54,60,-46,66);c.quadraticCurveTo(0,74,46,66);c.bezierCurveTo(54,60,62,40,52,-10);fs(c,Hd)
  c.restore()
  // torso
  c.beginPath();c.moveTo(62,144);c.bezierCurveTo(40,150,32,170,30,200);c.quadraticCurveTo(28,232,40,236);c.lineTo(138,236);c.quadraticCurveTo(150,232,148,200);c.bezierCurveTo(146,168,138,150,118,144);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(72,145);c.quadraticCurveTo(90,162,108,145);fs(c,'#fff',3)
  for(const x of[80,100]){c.beginPath();c.moveTo(x,154);c.lineTo(x+(x-90)*.1,182);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke();el(c,x+(x-90)*.1,184,2.5);fs(c,'#fff',1.8)}
  // head
  c.save();c.translate(90,96+bob);c.rotate(.07)
  for(const f of[-1,1]){
    el(c,f*36,-68,17,16);fs(c,H)
    c.beginPath();c.arc(f*36,-68,10,P*.9,P*1.7);c.moveTo(f*36+5,-62);c.arc(f*36,-68,6,P*.3,P*1.2);c.lineWidth=2.6;c.strokeStyle=Hd;c.stroke()
  }
  hd(c,S)
  face(c,{e:['#12704a','#8eeaa8'],ex:i>9&&i<12?'happy':0,lx:4,ly:1,m:'smile',mo:1.05,br:.2,bc:Hd,fr:'#e6997a'})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,44,-8,36,6,30,-18,20,0,12,-20,2,-2,-6,-20,-16,-2,-24,-18,-34,4,-42,-8,-50,26],.18);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  for(const f of[-1,1]){el(c,f*27,-60,9,5.5,f*-.75);fs(c,f<0?'#ff6fa3':'#ffd34d',3);el(c,f*27,-60,3,2,f*-.75);fs(c,'#fff',0)}
  c.beginPath();c.moveTo(-36,30);c.quadraticCurveTo(-42,50,-38,62);c.moveTo(38,30);c.quadraticCurveTo(44,50,40,62);c.lineWidth=2.5;c.strokeStyle='#b8461c';c.stroke()
  c.restore()
  // laptop: deck, keys, lid, screen
  pg(c,146,168,234,190,198,232,106,208);fs(c,'#d4dae6')
  pg(c,144,174,222,193,198,222,122,204);fs(c,'#8e98ae',2.5)
  c.save();c.clip();c.lineWidth=1.6;c.strokeStyle='#6c7690'
  for(let k=1;k<4;k++){c.beginPath();c.moveTo(144-k*6.5,174+k*7.5);c.lineTo(222-k*6,193+k*7.2);c.stroke()}
  for(let k=1;k<7;k++){c.beginPath();c.moveTo(144+k*11,177+k*2.7);c.lineTo(122+k*11,207+k*2.7);c.stroke()}
  c.restore()
  pg(c,146,72,234,94,234,190,146,168);fs(c,'#dde3ee')
  c.save();c.transform(.88,.22,0,.96,146,72)
  rr(c,6,6,88,86,4);fs(c,'#232842',3);rr(c,6,6,88,86,4);c.clip()
  const n=4,f=t*n%1,s=e((f-.5)/.5)*12
  for(let k=-1;k<6;k++){
    const j=(k+Math.floor(t*n)+60)%4,ind=[0,10,20,10][j],w=[44,50,30,40][j],L=k<5?w:w*Math.min(1,(f+.25)/.75),y=14+k*12-s
    if(L>0){rr(c,14+ind,y,Math.min(L,16),6,3);fs(c,K[j],0);if(L>20){rr(c,34+ind,y,L-20,6,3);fs(c,K[(j+2)%5],0)}}
    if(k==5&&f<.5&&i%2<1){rr(c,15+ind+L,y-1,2.5,8,1);fs(c,'#fff',0)}
  }
  c.restore()
  // arms typing on the keys
  const arm=(sx,sy,qx,qy,x,y,k)=>{
    const u=-6*Math.max(0,Math.sin(T*4+k));y+=u
    c.beginPath();c.moveTo(sx,sy);c.lineTo(qx,qy+u*.3);c.lineTo(x-8,y);st(c,16,J)
    c.beginPath();c.moveTo(x-11,y-6);c.lineTo(x-11,y+6);c.lineWidth=5;c.strokeStyle='#fff';c.stroke()
    el(c,x,y+1,9,7.5,.3);fs(c,S,3.2)
    if(u>-1.5){c.lineWidth=2.4;c.strokeStyle=O;for(const a of[-.6,0,.6]){c.beginPath();c.moveTo(x+12*Math.sin(a),y-12*Math.cos(a));c.lineTo(x+17*Math.sin(a),y-17*Math.cos(a));c.stroke()}}
  }
  arm(124,158,150,192,184,208,P);arm(62,160,76,204,136,196,0)
  // code tokens popping off the screen
  toks.forEach((s,k)=>{
    const p=(t*2+k/toks.length)%1,x=158+k%3*22+p*14,y=96-p*80+k%2*8,z=Math.sin(Math.min(p*1.5,1)*P)**.6
    if(p<.66){c.save();c.translate(x,y);c.scale(z,z);c.rotate((k%2?-1:1)*.18);tx(c,s,0,0,20,K[k%5],5.5);c.restore()}
  })
}

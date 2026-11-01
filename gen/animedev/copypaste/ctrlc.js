// an emerald-haired girl with a low side bun holding down a giant Ctrl key and tapping C, then V three times as copies of a code card pop out
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
const spark=(c,x,y,r,f='#fff',w=2.2)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);fs(c,f,w)}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y);c.fillStyle=f;c.fillText(s,x,y)}
export const frames=20,delay=80,rim=4
const H='#1fae6a',Hd='#127a48',Hl='#8eecb8',S='#d6a07a',J='#f3e4c4',Jd='#dcc79c',W='#fbfbfd'
export default(c,t,i)=>{
  const e=x=>x<0?0:x>1?1:x*x*(3-2*x),cd=i>=1&&i<=2,vd=[5,6,8,9,11,12].includes(i),copied=i>=2&&i<16
  // a code card
  const card=(x,y,a,z,dash)=>{
    c.save();c.translate(x,y);c.rotate(a);c.scale(z,z)
    rr(c,-26,-19,52,38,6);fs(c,'#fff',3.2)
    ;[['#ff79a8',22],['#7ab8ff',30],['#a1e07f',18]].forEach(([f,w],k)=>{rr(c,-18+(k==1?6:0),-11+k*10,w,5,2.5);fs(c,f,0)})
    if(dash){rr(c,-31,-24,62,48,9);c.setLineDash([6,5]);c.lineDashOffset=-i*3;c.lineWidth=3;c.strokeStyle='#ff4f8b';c.stroke();c.setLineDash([])}
    c.restore()
  }
  card(44,74,-.12,1,copied)
  // pasted copies pop in on each V, then poof away together
  for(let k=0;k<3;k++){
    const a=5+k*3,z=i<a?0:i<16?Math.min(1,(i-a+1)/1.5)*(i==a?1.15:1):e((19-i)/3)
    if(z>0)card(202+k*6,44+k*30,.1-k*.08,z,0)
  }
  if(i>=16&&i<19)for(let k=0;k<5;k++){const a=k*1.26,r=22+(i-16)*7;spark(c,204+Math.cos(a)*r,78+Math.sin(a)*r*1.2,7-(i-16)*2,'#fff')}
  // girl: cream sweater vest over a white shirt
  c.beginPath();c.moveTo(108,140);c.bezierCurveTo(82,146,72,164,70,190);c.lineTo(186,190);c.bezierCurveTo(184,164,174,146,148,140);c.closePath();fs(c,W)
  c.save();c.beginPath();c.moveTo(84,154);c.quadraticCurveTo(98,150,108,142);c.lineTo(128,176);c.lineTo(148,142);c.quadraticCurveTo(158,150,172,154);c.lineTo(182,190);c.lineTo(74,190);c.closePath();fs(c,J,3);c.clip()
  c.lineWidth=2;c.strokeStyle=Jd;for(let x=80;x<180;x+=9){c.beginPath();c.moveTo(x,150);c.lineTo(x,190);c.stroke()}c.restore()
  c.beginPath();c.moveTo(108,142);c.lineTo(128,176);c.lineTo(148,142);c.lineWidth=5;c.strokeStyle=Jd;c.stroke();c.lineWidth=1.5;c.strokeStyle=O;c.stroke()
  pg(c,110,140,126,146,116,156);fs(c,W,2.6);pg(c,146,140,130,146,140,156);fs(c,W,2.6)
  // head with a bob cut
  c.save();c.translate(128,88);c.scale(.88,.88);c.rotate(vd?.06:0)
  c.beginPath();c.moveTo(-52,-8);c.bezierCurveTo(-58,24,-50,38,-40,40);c.lineTo(40,40);c.bezierCurveTo(50,38,58,24,52,-8);fs(c,Hd)
  el(c,52,40,18,16,.3);fs(c,H);c.beginPath();c.arc(52,40,9,P*.7,P*1.9);c.moveTo(58,46);c.arc(52,40,5,P*.2,P*1.3);c.lineWidth=2.4;c.strokeStyle=Hd;c.stroke()
  hd(c,S)
  face(c,vd?{ex:'happy',m:'grin',mo:1,br:.3,bc:Hd}:{e:['#b0306a','#ff9ccc'],lx:cd?-2:3,ly:3,m:'smug',mo:1.1,br:-.2,bc:Hd,tl:2})
  c.beginPath();c.moveTo(-50,46);c.quadraticCurveTo(-60,32,-52,20);c.quadraticCurveTo(-62,4,-54,-12);c.bezierCurveTo(-56,-50,-30,-70,2,-70);c.bezierCurveTo(36,-70,60,-46,54,-6);c.quadraticCurveTo(60,10,50,24)
  qs(c,[50,24,46,0,38,-10,30,0,18,-18,6,-10,-6,-24,-18,-8,-30,-16,-38,-2,-44,10,-42,30],.22);c.quadraticCurveTo(-38,40,-50,46);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(-40,-50);c.quadraticCurveTo(-20,-40,-10,-58);c.moveTo(20,-60);c.quadraticCurveTo(34,-48,44,-30);c.lineWidth=2.4;c.strokeStyle=Hd;c.stroke()
  c.beginPath();c.arc(0,-26,42,P*1.2,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  el(c,44,28,6,10,.5);fs(c,'#ff8a7a',2.8)
  c.restore()
  // giant keys: Ctrl held down, C and V tapped
  const key=(x,w,s,dn,z)=>{const y=dn?184:178;rr(c,x,y,w,52-(dn?6:0),11);fs(c,dn?'#b46a9a':'#a0a8be');rr(c,x+5,y+2,w-10,38-(dn?4:0),9);fs(c,dn?'#ffb3dc':'#fff',3);tx(c,s,x+w/2,y+20-(dn?2:0),z,dn?'#8a2a62':'#3a3f57',0,'DejaVu Sans')}
  key(18,80,'Ctrl',1,22);key(108,58,'C',cd,30);key(176,58,'V',vd,30)
  // arms: one holds Ctrl, the other taps C then V
  const arm=(sx,sy,x,y)=>{c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo((sx+x)/2+(x<128?-8:8),sy+10,x,y);st(c,15,W);el(c,x,y+2,10,8.5);fs(c,S,3.2)}
  arm(96,156,48,180)
  const vx=i<3?137:i<5?137+(i-2)*22:i<16?205:205-(i-15)*17,up=cd||vd?0:9
  arm(160,156,vx,180-up)
  if(cd||vd){const x=cd?137:205;for(const a of[-.7,0,.7]){c.beginPath();c.moveTo(x+Math.sin(a)*20,168-Math.cos(a)*14);c.lineTo(x+Math.sin(a)*28,168-Math.cos(a)*22);c.lineWidth=3.2;c.strokeStyle=O;c.stroke()}}
}

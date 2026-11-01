// a black-haired girl in big headphones typing cross-legged in the zone, a glowing aura flickering around her as code and music notes rise
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
export const frames=12,delay=90,rim=4
const H='#2a2240',Hd='#17121f',Hl='#6c74c9',S='#fde6d8',J='#ff9fc3',Jd='#e2779f',A='#4fd2ff',B='#bff4ff',
  bits=['0','1','♪','{}','1','0','♫','</>']
export default(c,t,i)=>{
  const T=t*2*P,X=128,Y=134
  // aura: flame tongues rising around her, flickering upward
  const flame=(rx,ry,col,w,ph,n=13,m=1)=>{
    const p=[]
    for(let k=0;k<=2*n;k++){
      const a=(k/n-1)*P,up=(1+Math.cos(a))/2,sx=Math.sin(a),bx=X+sx*rx,by=Y-Math.cos(a)*ry
      if(k%2)p.push(bx+sx*(4+6*up),by-(10+20*up)*(.72+.28*Math.sin(T*2*m+Math.abs(a)*3+ph)))
      else p.push(bx,by)
    }
    c.beginPath();c.moveTo(p[0],p[1]);qs(c,p,.16);c.closePath();fs(c,col,w)
  }
  flame(98,96,A,3.5,0);flame(82,80,B,0,2.2);flame(64,64,'#fff',0,4.4,13,0)
  c.save();c.translate(128,242);c.scale(.86,.86);c.translate(-128,-242)
  // long back hair floating up in the aura wind
  c.beginPath();c.moveTo(84,64);c.bezierCurveTo(66,100,58,150,58,196)
  for(let k=1;k<=10;k++){const a=k/10,w=Math.sin(T+a*6)*4;c.lineTo(58+a*140+w*(k%2?0:1),(k%2?182:204)+w)}
  c.bezierCurveTo(198,150,190,100,172,64);c.closePath();fs(c,H)
  c.beginPath();c.moveTo(70,120);c.quadraticCurveTo(66,160,70,192);c.moveTo(186,120);c.quadraticCurveTo(190,160,186,192);c.lineWidth=2.5;c.strokeStyle=Hl;c.stroke()
  // legs crossed
  for(const f of[-1,1]){el(c,128+f*22,231,13,7,f*.3);fs(c,'#fff');el(c,128+f*50,222,42,16,f*.1);fs(c,'#56628f')}
  // torso: oversized hoodie
  c.beginPath();c.moveTo(108,128);c.bezierCurveTo(84,132,74,150,72,176);c.lineTo(70,214);c.lineTo(186,214);c.lineTo(184,176);c.bezierCurveTo(182,150,172,132,148,128);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(110,130);c.quadraticCurveTo(128,146,146,130);fs(c,'#fff',3)
  // head
  c.save();c.translate(X,84);c.scale(.94,.94)
  hd(c,S)
  face(c,{e:['#4a2290','#c8a4ff'],op:.58,ly:3,m:'cat',mo:.8,br:-.35,bc:Hd,bl:.8})
  for(const f of[-1,1]){c.save();c.translate(f*20,16);c.rotate(-.5);rr(c,-3.5,-1.2,7,2.4,1);fs(c,'#8ff6ff',0);c.restore()}
  c.beginPath();c.moveTo(-51,40);c.bezierCurveTo(-58,-42,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-42,51,40);c.lineTo(36,40);c.lineTo(36,0)
  qs(c,[36,0,24,-3,14,0,4,-4,-6,0,-16,-3,-26,0,-36,-2],.05);c.lineTo(-36,40);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-24,40,P*1.22,P*1.46);c.lineWidth=5;c.strokeStyle=Hl;c.stroke()
  // headphones
  c.beginPath();c.arc(0,-6,60,P*1.08,P*1.92);st(c,8,'#3b3157')
  for(const f of[-1,1]){rr(c,f*58-11,-14,22,38,10);fs(c,'#3b3157');rr(c,f*58-(f<0?11:-5)-1,-8,6,26,3);fs(c,Math.sin(T*4)>0?'#8ff6ff':A,0)}
  c.restore()
  // keyboard on lap with glowing keys
  pg(c,74,184,182,184,196,220,60,220);fs(c,'#e9ecf6');pg(c,66,220,190,220,188,226,68,226);fs(c,'#b4bad0',3)
  for(let r=0;r<3;r++)for(let k=0;k<9-(r==2?3:0);k++){
    const w=r==2?40:11,x0=78-r*4+(r==2?33:0)+k*(r==2?0:12.4+r*.4),y0=188+r*10.5
    rr(c,x0,y0,r==2?44:10,8,2);fs(c,(k*3+r*5)%7==0?A:'#fff',1.6)
  }
  // arms typing
  const arm=(sx,sy,qx,qy,x,y,k)=>{
    const u=-5*Math.max(0,Math.sin(T*4+k));y+=u
    c.beginPath();c.moveTo(sx,sy);c.lineTo(qx,qy);c.lineTo(x,y);st(c,15,J)
    el(c,x+(x<128?4:-4),y+3,8,6.5);fs(c,S,3)
  }
  arm(92,146,80,184,100,196,0);arm(164,146,176,184,156,196,P)
  c.restore()
  // rising bits
  bits.forEach((s,k)=>{
    const p=(t+k/bits.length)%1,f=k%2?1:-1,x=X+f*(80-p*12)+Math.sin(p*9+k)*5,y=200-p*170,z=Math.min(1,p*5,(1-p)*4)
    c.save();c.translate(x,y);c.scale(z,z);tx(c,s,0,0,s.length>1?15:19,k%3?'#fff':'#ffe066',4.5,s.length>1?'DejaVu Sans Mono':'DejaVu Sans');c.restore()
  })
}

// China animeflag: the red flag of China with its big yellow star and four small yellow stars, waving on a silver pole, with an anime girl in the fly side with long black hair, golden eyes, a pink peony and swinging red tassel in her hair, a white blouse with gold trim, and a baby panda on her shoulder waving its paw
export const frames=16,delay=80
const W=240,H=160,X=12,Y=18,A=5,T=Math.PI*2,{sin,cos,round,atan2}=Math
const OL='#3a2024',SK='#ffe4d2',SKS='#f4bfa8'
const st=(c,x,y,r,a=0)=>{c.beginPath();for(let k=0;k<10;k++){const q=a-T/4+k*T/10,d=k%2?r*.382:r;c.lineTo(x+d*cos(q),y+d*sin(q))}c.closePath();c.fill()}
const sp=(c,a)=>{const n=a.length/2,p=k=>[a[k%n*2],a[k%n*2+1]],m=k=>{const[x,y]=p(k),[u,v]=p(k+1);return[(x+u)/2,(y+v)/2]}
  c.beginPath();c.moveTo(...m(0));for(let k=1;k<=n;k++)c.quadraticCurveTo(...p(k),...m(k));c.closePath()}
const lk=(c,ax,ay,bx,by,tx,ty,b)=>{const e=(x,y)=>[(x+tx)/2-(ty-y)*b,(y+ty)/2+(tx-x)*b]
  c.moveTo(ax,ay);c.quadraticCurveTo(...e(ax,ay),tx,ty);c.quadraticCurveTo(...e(bx,by),bx,by)}
const fs=(c,f,s=OL)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.stroke()}
const el=(c,x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T)}
const eye=(c,x,g,bl)=>{c.save();c.translate(x,.3);c.scale(g,1)
  const L='#2a1414'
  if(bl>.9){c.beginPath();c.moveTo(-.28,.04);c.quadraticCurveTo(.03,.16,.37,0);c.lineWidth=.075;c.strokeStyle=L;c.stroke();c.restore();return}
  if(bl)c.translate(0,.24),c.scale(1,.45),c.translate(0,-.24)
  c.beginPath();c.moveTo(-.28,-.02);c.quadraticCurveTo(.02,-.3,.34,-.07);c.quadraticCurveTo(.3,.22,.03,.27);c.quadraticCurveTo(-.25,.24,-.28,-.02)
  c.fillStyle='#fff';c.fill();c.save();c.clip()
  el(c,.03,.05,.18,.26);c.fillStyle='#e6a72a';c.fill();c.save();c.clip()
  el(c,.03,-.13,.3,.2);c.fillStyle='#8a4a12';c.fill()
  el(c,.03,.25,.14,.09);c.fillStyle='#ffd866';c.fill();c.restore()
  el(c,.03,.06,.08,.13);c.fillStyle='#4a2008';c.fill()
  el(c,-.05,-.04,.07,.08);c.fillStyle='#fff';c.fill()
  el(c,.11,.15,.035,.035);c.fill();c.restore()
  c.beginPath();c.moveTo(-.31,0);c.quadraticCurveTo(0,-.37,.37,-.09);c.lineTo(.44,-.01);c.lineTo(.33,-.04);c.quadraticCurveTo(.02,-.26,-.27,.02);c.closePath();c.fillStyle=L;c.fill()
  c.beginPath();c.moveTo(.0,.28);c.quadraticCurveTo(.2,.24,.3,.08);c.lineWidth=.035;c.strokeStyle=L;c.stroke();c.restore()}
const girl=(c,t,i)=>{
  const s=23,w=sin(T*t),bl=i==10||i==12?.5:i==11?1:0
  c.save();c.translate(170,62);c.rotate(-.05);c.scale(s,s);c.lineWidth=1.5/s
  // back hair streaming right
  sp(c,[0,-1.6,1.2,-1.25,1.5,-.1,1.7,1,2.3+w*.08,1.9,2.85+w*.12,2.7,2.6+w*.1,3.4,2.75+w*.12,4.3,2.1,4.2,1.6,6,-1.4,6,-1.7,4.4,-1.5,2.4,-1.4,.4,-1.35,-1])
  fs(c,'#1f1b29','#120f18')
  c.beginPath();c.moveTo(1.55,.4);c.quadraticCurveTo(1.9,1.4,2.6+w*.1,2.5);c.moveTo(1.75,1.9);c.quadraticCurveTo(2.2,2.9,2.45+w*.1,3.9);c.strokeStyle='#3a3650';c.stroke()
  // panda behind shoulder
  c.save();c.translate(1.42,1.22);c.rotate(.12)
  el(c,-.4,-.46,.21,.21);fs(c,'#1a1a1a','#000');el(c,.4,-.46,.21,.21);fs(c,'#1a1a1a','#000')
  el(c,0,0,.64,.57);fs(c,'#fff','#222')
  el(c,-.23,-.02,.15,.2,.5);c.fillStyle='#1a1a1a';c.fill();el(c,.23,-.02,.15,.2,-.5);c.fill()
  if(i<14){c.fillStyle='#fff';el(c,-.21,-.05,.05,.055);c.fill();el(c,.21,-.05,.05,.055);c.fill()}
  else{c.strokeStyle='#fff';c.lineWidth=.05;c.beginPath();c.moveTo(-.3,-.03);c.lineTo(-.13,-.03);c.moveTo(.13,-.03);c.lineTo(.3,-.03);c.stroke();c.lineWidth=1.5/s}
  el(c,0,.17,.1,.065);c.fillStyle='#1a1a1a';c.fill()
  c.beginPath();c.moveTo(-.09,.27);c.quadraticCurveTo(0,.35,0,.26);c.quadraticCurveTo(0,.35,.09,.27);c.strokeStyle='#222';c.lineWidth=.035;c.stroke();c.lineWidth=1.5/s
  el(c,-.42,.13,.09,.055);c.fillStyle='#ffb3c1';c.fill();el(c,.42,.13,.09,.055);c.fill()
  c.restore()
  // neck and blouse
  c.beginPath();c.moveTo(-.3,.7);c.lineTo(-.33,1.6);c.lineTo(.33,1.6);c.lineTo(.3,.7);fs(c,SK)
  el(c,0,1.02,.34,.22);c.fillStyle=SKS;c.fill()
  const bd=()=>{c.beginPath();c.moveTo(-.45,1.4);c.quadraticCurveTo(-1.15,1.55,-1.45,1.8);c.quadraticCurveTo(-1.8,2.05,-1.82,2.6)
    c.lineTo(-1.9,6);c.lineTo(1.9,6);c.lineTo(1.82,2.6);c.quadraticCurveTo(1.8,2.05,1.45,1.8);c.quadraticCurveTo(1.15,1.55,.45,1.4);c.closePath()}
  bd();fs(c,'#fbf7ef');c.save();bd();c.clip()
  c.beginPath();c.moveTo(1.28,2.4);c.quadraticCurveTo(1.25,3.6,1.32,6);c.lineTo(2,6);c.lineTo(2,1.8);c.fillStyle='#e6dccb';c.fill()
  c.beginPath();c.moveTo(-.6,1.5);c.quadraticCurveTo(0,1.95,.6,1.5);c.lineTo(.6,1.3);c.lineTo(-.6,1.3);c.fill();c.restore()
  c.beginPath();c.moveTo(-1.3,2.45);c.quadraticCurveTo(-1.25,3.6,-1.32,6);c.moveTo(1.28,2.4);c.quadraticCurveTo(1.25,3.6,1.32,6);c.strokeStyle='#cbbca6';c.stroke()
  c.beginPath();c.moveTo(.05,1.62);c.quadraticCurveTo(.8,1.72,.98,2.5);c.lineTo(1.02,6);c.strokeStyle='#e0a822';c.lineWidth=.13;c.stroke()
  c.strokeStyle=OL;c.lineWidth=1.5/s
  for(const[x,y]of[[.48,1.76],[.85,2.1],[1,2.7],[1.01,3.3]]){el(c,x,y,.09,.06);fs(c,'#ffd23a','#8a5a10')}
  c.beginPath();c.moveTo(-.46,1.25);c.quadraticCurveTo(0,1.42,.46,1.25);c.lineTo(.46,1.55);c.quadraticCurveTo(0,1.72,-.46,1.55);c.closePath();fs(c,'#fbf7ef')
  c.beginPath();c.moveTo(-.46,1.55);c.quadraticCurveTo(0,1.72,.46,1.55);c.strokeStyle='#e0a822';c.lineWidth=.08;c.stroke();c.lineWidth=1.5/s;c.strokeStyle=OL
  // panda paws on shoulder, one waving
  el(c,1.15,1.68,.18,.13,-.3);fs(c,'#1a1a1a','#000')
  c.save();c.translate(2.02,1.62);c.rotate(.55+.4*sin(T*t*2));el(c,0,-.42,.17,.3);fs(c,'#1a1a1a','#000');el(c,0,-.55,.08,.08);c.fillStyle='#ffb3c1';c.fill();c.restore()
  // face
  c.beginPath();c.moveTo(-1,-.4);c.bezierCurveTo(-1.02,.5,-.72,.98,0,1.24);c.bezierCurveTo(.72,.98,1.02,.5,1,-.4);c.bezierCurveTo(1,-1.5,-1,-1.5,-1,-.4);fs(c,SK)
  c.beginPath();c.moveTo(-1,-.2);c.quadraticCurveTo(0,.25,1,-.2);c.lineTo(1,-.6);c.lineTo(-1,-.6);c.fillStyle=SKS;c.fill()
  el(c,-.58,.68,.2,.09);c.fillStyle='rgba(255,120,140,.45)';c.fill();el(c,.58,.68,.2,.09);c.fill()
  eye(c,-.45,-1,bl);eye(c,.45,1,bl)
  c.beginPath();c.moveTo(.02,.62);c.lineTo(.05,.66);c.strokeStyle='#d9907a';c.lineWidth=.04;c.stroke()
  c.beginPath();c.moveTo(-.16,.85);c.quadraticCurveTo(0,.96,.16,.85);c.quadraticCurveTo(0,1.05,-.16,.85);c.fillStyle='#c4485a';c.fill();c.strokeStyle='#7a2a30';c.stroke()
  // front hair
  c.strokeStyle='#120f18';c.lineWidth=1.5/s
  sp(c,[-1.22,-.2,-1.22,-1.1,0,-1.66,1.22,-1.1,1.22,-.2,0,-.95]);fs(c,'#24202e','#120f18')
  c.save();c.clip();c.fillStyle='#4e4e72';for(let k=0;k<7;k++){const q=3.8+k*.26,x=1.05*cos(q),y=-.45+.85*sin(q);c.beginPath();lk(c,x-.09,y,x+.09,y,x*.72,y+.3,0);c.fill()};c.restore()
  c.beginPath()
  for(const[bx,tx,ty,b]of[[-.95,-1,.1,-.06],[-.6,-.62,.02,-.05],[-.25,-.3,.05,-.03],[.1,.1,.06,.02],[.45,.48,.0,.05],[.8,.9,.08,.07]])lk(c,bx-.3,-1.05,bx+.3,-1.05,tx,ty,b)
  lk(c,-1.25,-.7,-.88,-.6,-1.12+w*.03,1.35,-.04);lk(c,1.25,-.7,.88,-.6,1.14+w*.04,1.3,.04)
  fs(c,'#24202e','#120f18')
  // peony with gold pin and swinging tassel
  c.save();c.translate(-1.05,-.9);c.strokeStyle='#a23a5a'
  for(let k=0;k<7;k++){const q=k*T/7;el(c,.28*cos(q),.28*sin(q),.24,.17,q);fs(c,k%2?'#f7809f':'#ff9fb8','#a23a5a')}
  for(let k=0;k<5;k++){const q=k*T/5+.4;el(c,.13*cos(q),.13*sin(q),.15,.11,q);fs(c,'#ffc0cf','#a23a5a')}
  el(c,0,0,.08,.08);fs(c,'#ffd23a','#8a5a10');c.restore()
  c.save();c.translate(-1.2,-.62);c.rotate(.2*sin(T*t+1));c.strokeStyle='#8a5a10'
  c.beginPath();c.moveTo(0,0);c.lineTo(0,.6);c.lineWidth=.05;c.stroke();c.lineWidth=1.5/s
  el(c,0,.62,.07,.07);fs(c,'#ffd23a','#8a5a10')
  c.beginPath();c.moveTo(-.06,.68);c.lineTo(-.12,1.1);c.lineTo(.12,1.1);c.lineTo(.06,.68);c.closePath();fs(c,'#e8202f','#7a1018');c.restore()
  c.restore()
}
const Z=[.88,.9,.95]
export default(c,t,i)=>{
  c.save();c.translate(X,Y)
  c.fillStyle='#EE1C25';c.fillRect(0,0,W,H);c.fillStyle='#FFDE00'
  st(c,40,40,24)
  for(const[x,y]of[[80,16],[96,32],[96,56],[80,72]])st(c,x,y,8,atan2(40-y,40-x)+T/4)
  c.beginPath();c.rect(0,0,W,H);c.clip();girl(c,t,i);c.restore()
  // wave: shift each column, cel shade by slope
  const s=c.getImageData(X,Y,W,H).data,o=c.createImageData(W,H+2*A+2),d=o.data,D=[]
  c.clearRect(0,0,256,256)
  for(let x=0;x<W;x++){
    const u=x/W,a=A*Math.min(1,u*2.2),p=T*(u*1.3-t),dy=D[x]=round(a*sin(p)),g=cos(p)*a/A
    const f=g>.5?1:g<-.5?2:0
    for(let y=0;y<H;y++){const k=(y*W+x)*4,j=((y+dy+A+1)*W+x)*4
      for(let q=0;q<3;q++)d[j+q]=f==1?s[k+q]+(255-s[k+q])*.1:f==2?s[k+q]*Z[q]:s[k+q]
      d[j+3]=s[k+3]}}
  c.putImageData(o,X,Y-A-1)
  // outline
  c.beginPath();for(let x=0;x<=W;x+=4)c.lineTo(X+x,Y+D[Math.min(x,W-1)])
  for(let x=W;x>=0;x-=4)c.lineTo(X+x,Y+H+D[Math.min(x,W-1)]);c.closePath()
  c.lineWidth=2.5;c.strokeStyle='#111';c.stroke()
  // pole
  c.lineWidth=1.5;c.fillStyle='#aab1ba';c.beginPath();c.roundRect(X-8,Y-6,7,240,3);c.fill();c.stroke()
  c.fillStyle='#e4e8ec';c.fillRect(X-6.5,Y-4,2,234)
  c.beginPath();c.arc(X-4.5,Y-10,6,0,T);c.fillStyle='#f2c230';c.fill();c.stroke()
  c.beginPath();c.arc(X-6.5,Y-12,1.8,0,T);c.fillStyle='#fff3b0';c.fill()
}

// Turkey anime flag: the red flag of Turkey with its white crescent and star, waving on a silver pole, with an anime girl on the fly side, clear of the crescent and star, with long dark wavy hair, green eyes, a red tulip in her hair and a turquoise blouse, hugging a fluffy white odd-eyed Van cat that swishes its tail
export const frames=16,delay=80
const W=240,H=160,X=12,Y=18,A=5,T=Math.PI*2,{sin,cos,round}=Math
const OL='#3a2024',SK='#fbe0cc',SKS='#ecb8a0'
const st=(c,x,y,r,a=0)=>{c.beginPath();for(let k=0;k<10;k++){const q=a-T/4+k*T/10,d=k%2?r*.382:r;c.lineTo(x+d*cos(q),y+d*sin(q))}c.closePath();c.fill()}
const sp=(c,a)=>{const n=a.length/2,p=k=>[a[k%n*2],a[k%n*2+1]],m=k=>{const[x,y]=p(k),[u,v]=p(k+1);return[(x+u)/2,(y+v)/2]}
  c.beginPath();c.moveTo(...m(0));for(let k=1;k<=n;k++)c.quadraticCurveTo(...p(k),...m(k));c.closePath()}
const lk=(c,ax,ay,bx,by,tx,ty,b)=>{const e=(x,y)=>[(x+tx)/2-(ty-y)*b,(y+ty)/2+(tx-x)*b]
  c.moveTo(ax,ay);c.quadraticCurveTo(...e(ax,ay),tx,ty);c.quadraticCurveTo(...e(bx,by),bx,by)}
const fs=(c,f,s=OL)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.stroke()}
const el=(c,x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T)}
const eye=(c,x,g,bl,E)=>{c.save();c.translate(x,.3);c.scale(g,1)
  const L='#2a1414'
  if(bl>1){c.beginPath();c.moveTo(-.28,.08);c.quadraticCurveTo(.04,-.16,.36,.06);c.lineWidth=.08;c.strokeStyle=L;c.stroke();c.restore();return}
  if(bl>.9){c.beginPath();c.moveTo(-.28,.04);c.quadraticCurveTo(.03,.16,.37,0);c.lineWidth=.075;c.strokeStyle=L;c.stroke();c.restore();return}
  if(bl)c.translate(0,.24),c.scale(1,.45),c.translate(0,-.24)
  c.beginPath();c.moveTo(-.28,-.02);c.quadraticCurveTo(.02,-.3,.34,-.07);c.quadraticCurveTo(.3,.22,.03,.27);c.quadraticCurveTo(-.25,.24,-.28,-.02)
  c.fillStyle='#fff';c.fill();c.save();c.clip()
  el(c,.03,.05,.18,.26);c.fillStyle=E[0];c.fill();c.save();c.clip()
  el(c,.03,-.13,.3,.2);c.fillStyle=E[1];c.fill()
  el(c,.03,.25,.14,.09);c.fillStyle=E[2];c.fill();c.restore()
  el(c,.03,.06,.08,.13);c.fillStyle=E[3];c.fill()
  el(c,-.05,-.04,.07,.08);c.fillStyle='#fff';c.fill()
  el(c,.11,.15,.035,.035);c.fill();c.restore()
  c.beginPath();c.moveTo(-.31,0);c.quadraticCurveTo(0,-.37,.37,-.09);c.lineTo(.44,-.01);c.lineTo(.33,-.04);c.quadraticCurveTo(.02,-.26,-.27,.02);c.closePath();c.fillStyle=L;c.fill()
  c.beginPath();c.moveTo(.0,.28);c.quadraticCurveTo(.2,.24,.3,.08);c.lineWidth=.035;c.strokeStyle=L;c.stroke();c.restore()}
const girl=(c,t,i)=>{
  const s=19,w=sin(T*t),HR='#3b2622',HD='#1e1210',TQ='#30c0bc',TD='#1f9696'
  c.save();c.translate(201,61);c.rotate(.04);c.scale(s,s);c.lineWidth=1.5/s
  // back hair, long and wavy
  sp(c,[0,-1.62,1.25,-1.25,1.5,-.2,1.75,.8,1.55,1.5,2.1+w*.08,2.3,1.75,3,2.25+w*.1,3.8,1.6,4.4,1.4,6,-1.4,6,-1.55,4.3,-1.85,3.6,-1.6,2.8,-1.8,2,-1.5,1.1,-1.45,-.6])
  fs(c,HR,HD)
  c.beginPath();c.moveTo(1.55,.4);c.quadraticCurveTo(1.95,1.3,1.75,2);c.quadraticCurveTo(1.7,2.6,2+w*.08,3.4);c.moveTo(-1.55,1.4);c.quadraticCurveTo(-1.85,2.2,-1.6,2.9);c.strokeStyle='#6a4a40';c.stroke()
  // neck and turquoise blouse
  c.beginPath();c.moveTo(-.3,.7);c.lineTo(-.33,1.6);c.lineTo(.33,1.6);c.lineTo(.3,.7);fs(c,SK)
  el(c,0,1.02,.34,.22);c.fillStyle=SKS;c.fill()
  const bd=()=>{c.beginPath();c.moveTo(-.45,1.4);c.quadraticCurveTo(-1.15,1.55,-1.45,1.8);c.quadraticCurveTo(-1.8,2.05,-1.82,2.6)
    c.lineTo(-1.9,6);c.lineTo(1.9,6);c.lineTo(1.82,2.6);c.quadraticCurveTo(1.8,2.05,1.45,1.8);c.quadraticCurveTo(1.15,1.55,.45,1.4);c.closePath()}
  bd();fs(c,TQ);c.save();bd();c.clip()
  c.beginPath();c.moveTo(1.28,2.4);c.quadraticCurveTo(1.25,3.6,1.32,6);c.lineTo(2,6);c.lineTo(2,1.8);c.fillStyle=TD;c.fill();c.restore()
  c.beginPath();c.moveTo(-.55,1.38);c.quadraticCurveTo(0,2.2,.55,1.38);c.quadraticCurveTo(0,1.7,-.55,1.38);fs(c,'#fff')
  c.beginPath();c.moveTo(-1.3,2.45);c.quadraticCurveTo(-1.25,3,-1.3,3.4);c.moveTo(1.28,2.4);c.quadraticCurveTo(1.25,3,1.3,3.4);c.strokeStyle=TD;c.stroke();c.strokeStyle=OL
  // white Van cat held in her arms
  c.save();c.translate(.3,2.75)
  c.save();c.translate(-1,.55);c.rotate(.35*sin(T*t));c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-.55,.3,-.5,.9);c.quadraticCurveTo(-.45,1.25,-.15,1.3)
  c.lineWidth=.26+3/s;c.strokeStyle='#5a5a66';c.stroke();c.lineWidth=.26;c.strokeStyle='#fbfbfd';c.stroke();c.restore()
  c.lineWidth=1.5/s;c.strokeStyle='#5a5a66'
  el(c,-.55,.5,.85,.5,-.1);fs(c,'#fbfbfd','#5a5a66')
  el(c,-.75,.65,.5,.3,-.1);c.fillStyle='#e4e8ef';c.fill()
  c.restore()
  // arms hugging the cat
  const arm=(p)=>{c.beginPath();c.moveTo(p[0],p[1]);c.quadraticCurveTo(...p.slice(2));c.lineWidth=.62;c.strokeStyle=OL;c.stroke();c.lineWidth=.62-3/s;c.strokeStyle=TQ;c.stroke();c.lineWidth=1.5/s;c.strokeStyle=OL}
  arm([-1.55,2.1,-1.85,3.8,.25,3.72])
  el(c,.45,3.68,.24,.18,-.3);fs(c,SK)
  c.save();c.translate(.3,2.75)
  // cat head
  const ear=g=>{c.beginPath();c.moveTo(g*.18,-.4);c.lineTo(g*.52,-.78+(g>0&&i>=12&&i<14?.1:0));c.lineTo(g*.58,-.2);c.closePath();fs(c,'#fbfbfd','#5a5a66')
    c.beginPath();c.moveTo(g*.27,-.38);c.lineTo(g*.5,-.64);c.lineTo(g*.52,-.28);c.closePath();c.fillStyle='#ffb8c8';c.fill()}
  ear(-1);ear(1);el(c,0,0,.62,.5);fs(c,'#fbfbfd','#5a5a66')
  if(i==5||i==6){c.beginPath();c.moveTo(-.38,-.02);c.quadraticCurveTo(-.25,.06,-.12,-.02);c.moveTo(.12,-.02);c.quadraticCurveTo(.25,.06,.38,-.02);c.strokeStyle='#333';c.lineWidth=.045;c.stroke();c.lineWidth=1.5/s}
  else for(const[x,col]of[[-.25,'#58b4ff'],[.25,'#f5b82a']]){el(c,x,-.03,.13,.14);fs(c,col,'#333');el(c,x,-.03,.04,.11);c.fillStyle='#222';c.fill();el(c,x-.04,-.08,.035,.035);c.fillStyle='#fff';c.fill()}
  c.beginPath();c.moveTo(-.06,.13);c.lineTo(.06,.13);c.lineTo(0,.2);c.closePath();c.fillStyle='#ff8fa8';c.fill()
  c.beginPath();c.moveTo(0,.2);c.quadraticCurveTo(-.06,.29,-.13,.24);c.moveTo(0,.2);c.quadraticCurveTo(.06,.29,.13,.24);c.strokeStyle='#555';c.lineWidth=.035;c.stroke()
  c.beginPath();for(const g of[-1,1])for(const d of[-.05,.06]){c.moveTo(g*.35,.17);c.lineTo(g*.78,.13+d*2)}c.strokeStyle='#9aa';c.lineWidth=.02;c.stroke();c.lineWidth=1.5/s
  c.restore()
  arm([1.55,2.1,1.9,3.25,1,2.62])
  el(c,.85,2.5,.22,.17,.5);fs(c,SK)
  // face
  c.beginPath();c.moveTo(-1,-.4);c.bezierCurveTo(-1.02,.5,-.72,.98,0,1.22);c.bezierCurveTo(.72,.98,1.02,.5,1,-.4);c.bezierCurveTo(1,-1.5,-1,-1.5,-1,-.4);fs(c,SK)
  c.beginPath();c.moveTo(-1,-.2);c.quadraticCurveTo(0,.25,1,-.2);c.lineTo(1,-.6);c.lineTo(-1,-.6);c.fillStyle=SKS;c.fill()
  el(c,-.58,.68,.2,.09);c.fillStyle='rgba(255,110,120,.45)';c.fill();el(c,.58,.68,.2,.09);c.fill()
  const E=['#5f9a3c','#2a4a1a','#b8e07a','#1a2a10'],b=i==10||i==12?.5:i==11?1:0
  eye(c,-.45,-1,b,E);eye(c,.45,1,b,E)
  c.beginPath();c.moveTo(.02,.62);c.lineTo(.05,.66);c.strokeStyle='#d9907a';c.lineWidth=.04;c.stroke()
  c.beginPath();c.moveTo(-.17,.84);c.quadraticCurveTo(0,.97,.17,.84);c.strokeStyle='#8a3a3a';c.lineWidth=.06;c.stroke();c.lineWidth=1.5/s
  // front hair
  c.strokeStyle=HD
  sp(c,[-1.24,-.2,-1.24,-1.1,0,-1.66,1.24,-1.1,1.24,-.2,0,-.95]);fs(c,HR,HD)
  c.save();c.clip();c.fillStyle='#6a4a42';for(let k=0;k<7;k++){const q=3.8+k*.26,x=1.05*cos(q),y=-.45+.85*sin(q);c.beginPath();lk(c,x-.09,y,x+.09,y,x*.72,y+.3,0);c.fill()};c.restore()
  c.beginPath()
  for(const[bx,tx,ty,b]of[[-.95,-1.05,.12,-.07],[-.6,-.66,.0,-.05],[-.25,-.22,.08,-.02],[.1,.18,.02,.03],[.45,.55,.04,.05],[.82,.98,.14,.07]])lk(c,bx-.3,-1.05,bx+.3,-1.05,tx,ty,b)
  lk(c,-1.26,-.7,-.9,-.6,-1.15+w*.03,1.5,-.06);lk(c,1.26,-.7,.9,-.6,1.2+w*.04,1.45,.08)
  fs(c,HR,HD)
  // red tulip tucked in her hair
  c.save();c.translate(1.05,-.85);c.rotate(.5+.06*w)
  c.beginPath();c.moveTo(0,.2);c.lineTo(0,.75);c.strokeStyle='#2f7a2f';c.lineWidth=.08;c.stroke();c.lineWidth=1.5/s
  c.beginPath();lk(c,-.02,.75,.06,.7,-.32,.15,.1);fs(c,'#3d9a3a','#1a4a1a')
  c.beginPath();c.moveTo(-.25,-.05);c.quadraticCurveTo(-.3,.3,0,.32);c.quadraticCurveTo(.3,.3,.25,-.05);c.lineTo(.15,-.32);c.lineTo(.06,-.1);c.lineTo(0,-.38);c.lineTo(-.06,-.1);c.lineTo(-.15,-.32);c.closePath();fs(c,'#e8243a','#6a0f1c')
  c.beginPath();c.moveTo(0,-.3);c.lineTo(0,.25);c.strokeStyle='#ff7a88';c.stroke();c.restore()
  c.restore()
}
const Z=[.88,.9,.95]
export default(c,t,i)=>{
  c.save();c.translate(X,Y)
  c.fillStyle='#E30A17';c.fillRect(0,0,W,H);c.fillStyle='#fff'
  c.beginPath();c.arc(80,80,40,0,T);c.fill();c.fillStyle='#E30A17';c.beginPath();c.arc(90,80,32,0,T);c.fill()
  c.fillStyle='#fff';st(c,131.33,80,20,T*.75)
  c.beginPath();c.rect(156,0,W-156,H);c.clip();girl(c,t,i);c.restore()
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

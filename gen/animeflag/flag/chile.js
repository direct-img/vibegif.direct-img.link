// Chile anime flag: the flag of Chile, white and red bands with the blue canton and white star, waving on a silver pole, with a cheerful anime girl on the fly side with wavy brown hair, red copihue flowers in her hair and a blue cardigan, waving hello and winking
export const frames=16,delay=80
const W=240,H=160,X=12,Y=18,A=5,T=Math.PI*2,{sin,cos,round}=Math
const OL='#3a2024',SK='#fbdcc4',SKS='#eab497'
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
  const s=23,w=sin(T*t),v=sin(T*t*2),HR='#5a3426',HD='#2e1810',CA='#2c4fa3'
  c.save();c.translate(178,58);c.rotate(.05);c.scale(s,s);c.lineWidth=1.5/s
  // wavy back hair blowing right
  sp(c,[0,-1.6,1.25,-1.25,1.55,-.2,1.8,.7,2.3+w*.1,1.25,2.05,1.85,2.65+w*.12,2.45,2.35,3.05,2.85+w*.12,3.75,2.05,4.2,1.7,6,-1.5,6,-1.65,4.2,-1.95,3.4,-1.6,2.6,-1.85,1.8,-1.45,.8,-1.45,-.6])
  fs(c,HR,HD)
  c.beginPath();c.moveTo(1.6,.3);c.quadraticCurveTo(2.1,1,1.85,1.7);c.quadraticCurveTo(1.8,2.3,2.3+w*.1,2.9);c.moveTo(-1.5,1.2);c.quadraticCurveTo(-1.7,1.9,-1.45,2.5);c.strokeStyle='#7a4a38';c.stroke()
  // neck, blouse, cardigan
  c.beginPath();c.moveTo(-.3,.7);c.lineTo(-.33,1.6);c.lineTo(.33,1.6);c.lineTo(.3,.7);fs(c,SK)
  el(c,0,1.02,.34,.22);c.fillStyle=SKS;c.fill()
  const bd=()=>{c.beginPath();c.moveTo(-.45,1.4);c.quadraticCurveTo(-1.15,1.55,-1.45,1.8);c.quadraticCurveTo(-1.8,2.05,-1.82,2.6)
    c.lineTo(-1.9,6);c.lineTo(1.9,6);c.lineTo(1.82,2.6);c.quadraticCurveTo(1.8,2.05,1.45,1.8);c.quadraticCurveTo(1.15,1.55,.45,1.4);c.closePath()}
  bd();fs(c,CA);c.save();bd();c.clip()
  c.beginPath();c.moveTo(1.28,2.4);c.quadraticCurveTo(1.25,3.6,1.32,6);c.lineTo(2,6);c.lineTo(2,1.8);c.fillStyle='#21408a';c.fill()
  c.beginPath();c.moveTo(-.5,1.4);c.lineTo(0,3);c.lineTo(.5,1.4);c.closePath();fs(c,'#fff')
  c.beginPath();c.moveTo(0,3);c.lineTo(0,6);c.stroke()
  for(const y of[3.3,3.9])el(c,.12,y,.07,.07),fs(c,'#fff')
  c.restore()
  c.beginPath();c.moveTo(-.46,1.32);c.quadraticCurveTo(-.55,1.75,-.12,1.78);c.lineTo(0,1.5);c.lineTo(.12,1.78);c.quadraticCurveTo(.55,1.75,.46,1.32);c.quadraticCurveTo(0,1.55,-.46,1.32);fs(c,'#fff')
  c.beginPath();c.moveTo(1.28,2.45);c.quadraticCurveTo(1.25,3.6,1.32,6);c.strokeStyle='#1a3170';c.stroke();c.strokeStyle=OL
  // raised waving arm
  const ex=-2.3,ey=2.85,a=-.12+.2*v,wx=ex+1.65*sin(a),wy=ey-1.65*cos(a)
  c.beginPath();c.moveTo(-1.45,1.95);c.lineTo(ex,ey);c.lineTo(wx,wy);c.lineWidth=.78;c.strokeStyle=OL;c.stroke();c.lineWidth=.78-3/s;c.strokeStyle=CA;c.stroke()
  c.save();c.translate(wx,wy);c.rotate(a)
  c.lineWidth=1.5/s;el(c,0,0,.3,.13);fs(c,'#fff')
  const F=[[-.18,-.6,-.26,-1.02],[-.06,-.62,-.08,-1.14],[.06,-.62,.09,-1.1],[.17,-.58,.25,-.94],[.2,-.3,.46,-.55]]
  const hp=()=>{c.beginPath();c.roundRect(-.25,-.66,.5,.52,.15)}
  c.strokeStyle=OL;c.lineWidth=.13+3/s;for(const[x,y,u,q]of F){c.beginPath();c.moveTo(x,y);c.lineTo(u,q);c.stroke()}
  hp();c.lineWidth=3/s;c.stroke();c.fillStyle=SK;c.fill()
  c.strokeStyle=SK;c.lineWidth=.13;for(const[x,y,u,q]of F){c.beginPath();c.moveTo(x,y);c.lineTo(u,q);c.stroke()}
  c.beginPath();c.moveTo(-.12,-.25);c.quadraticCurveTo(0,-.35,.1,-.22);c.strokeStyle=SKS;c.lineWidth=.04;c.stroke()
  c.restore();c.lineWidth=1.5/s;c.strokeStyle=OL
  // face
  c.beginPath();c.moveTo(-1,-.4);c.bezierCurveTo(-1.02,.5,-.72,.98,0,1.24);c.bezierCurveTo(.72,.98,1.02,.5,1,-.4);c.bezierCurveTo(1,-1.5,-1,-1.5,-1,-.4);fs(c,SK)
  c.beginPath();c.moveTo(-1,-.2);c.quadraticCurveTo(0,.25,1,-.2);c.lineTo(1,-.6);c.lineTo(-1,-.6);c.fillStyle=SKS;c.fill()
  el(c,-.58,.68,.2,.09);c.fillStyle='rgba(255,110,120,.45)';c.fill();el(c,.58,.68,.2,.09);c.fill()
  const E=['#b8743a','#5a2a12','#f3b46a','#3a1808'],wk=i==8||i==12?.5:i>8&&i<12?2:0
  eye(c,-.45,-1,0,E);eye(c,.45,1,wk,E)
  c.beginPath();c.moveTo(.02,.62);c.lineTo(.05,.66);c.strokeStyle='#d9907a';c.lineWidth=.04;c.stroke()
  c.beginPath();c.moveTo(-.22,.8);c.quadraticCurveTo(0,.88,.22,.8);c.quadraticCurveTo(.05,1.12,-.22,.8);c.fillStyle='#a8303e';c.fill();c.strokeStyle='#6a1a22';c.lineWidth=1.5/s;c.stroke()
  c.save();c.clip();el(c,.0,1.02,.12,.08);c.fillStyle='#f07a8a';c.fill();c.restore()
  // front hair, side-swept bangs
  c.strokeStyle=HD
  sp(c,[-1.24,-.2,-1.24,-1.1,0,-1.68,1.24,-1.1,1.24,-.2,0,-.95]);fs(c,HR,HD)
  c.save();c.clip();c.fillStyle='#8c5a44';for(let k=0;k<7;k++){const q=3.8+k*.26,x=1.05*cos(q),y=-.45+.85*sin(q);c.beginPath();lk(c,x-.09,y,x+.09,y,x*.72,y+.3,0);c.fill()};c.restore()
  c.beginPath()
  for(const[bx,tx,ty,b]of[[-.95,-.98,.05,-.08],[-.62,-.5,-.02,-.1],[-.28,-.08,.06,-.1],[.08,.3,.02,-.1],[.45,.66,.0,-.08],[.82,1,.1,-.04]])lk(c,bx-.32,-1.05,bx+.3,-1.05,tx,ty,b)
  lk(c,-1.26,-.7,-.9,-.6,-1.1+w*.03,1.2,-.1);lk(c,1.26,-.7,.9,-.6,1.2+w*.04,1.25,.1)
  fs(c,HR,HD)
  // copihue flowers (Chile's national flower) hanging in her hair
  c.save();c.translate(1.0,-.98)
  el(c,.12,-.02,.3,.1,.1);fs(c,'#3d8a3a','#1a4a1a');el(c,-.32,.02,.24,.09,-.5);fs(c,'#3d8a3a','#1a4a1a');el(c,.5,.0,.22,.08,.6);fs(c,'#3d8a3a','#1a4a1a')
  for(const[x,r]of[[.34,.45],[-.12,-.15]]){c.save();c.translate(x,.05);c.rotate(r+.08*w)
    c.beginPath();c.moveTo(-.07,0);c.quadraticCurveTo(-.24,.4,-.22,.82);c.lineTo(-.13,.74);c.lineTo(-.07,.86);c.lineTo(0,.76);c.lineTo(.07,.86);c.lineTo(.13,.74);c.lineTo(.22,.82);c.quadraticCurveTo(.24,.4,.07,0);c.closePath();fs(c,'#e0203c','#6a0f1c')
    c.beginPath();c.moveTo(-.04,.14);c.lineTo(-.1,.66);c.moveTo(.05,.14);c.lineTo(.1,.66);c.strokeStyle='#ff7a8a';c.stroke();c.restore()}
  c.restore()
  c.restore()
}
const Z=[.88,.9,.95]
export default(c,t,i)=>{
  c.save();c.translate(X,Y)
  c.fillStyle='#fff';c.fillRect(0,0,W,H/2);c.fillStyle='#DA291C';c.fillRect(0,H/2,W,H/2)
  c.fillStyle='#0032A0';c.fillRect(0,0,H/2,H/2);c.fillStyle='#fff';st(c,40,40,20)
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

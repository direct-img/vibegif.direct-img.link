// Singapore animeflag: the red and white flag of Singapore with its white crescent and five stars, waving on a silver pole, with a smiling anime girl on the fly side with a swinging black ponytail and a lavender blouse, holding up a sprig of purple Vanda Miss Joaquim orchids, Singapore's national flower, with another orchid in her hair
export const frames=16,delay=80
const W=240,H=160,X=12,Y=18,A=5,T=Math.PI*2,{sin,cos,round}=Math
const OL='#3a2024',SK='#f6d3b8',SKS='#e3ac90'
const st=(c,x,y,r,a=0)=>{c.beginPath();for(let k=0;k<10;k++){const q=a-T/4+k*T/10,d=k%2?r*.382:r;c.lineTo(x+d*cos(q),y+d*sin(q))}c.closePath();c.fill()}
const sp=(c,a)=>{const n=a.length/2,p=k=>[a[k%n*2],a[k%n*2+1]],m=k=>{const[x,y]=p(k),[u,v]=p(k+1);return[(x+u)/2,(y+v)/2]}
  c.beginPath();c.moveTo(...m(0));for(let k=1;k<=n;k++)c.quadraticCurveTo(...p(k),...m(k));c.closePath()}
const lk=(c,ax,ay,bx,by,tx,ty,b)=>{const e=(x,y)=>[(x+tx)/2-(ty-y)*b,(y+ty)/2+(tx-x)*b]
  c.moveTo(ax,ay);c.quadraticCurveTo(...e(ax,ay),tx,ty);c.quadraticCurveTo(...e(bx,by),bx,by)}
const fs=(c,f,s=OL)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.stroke()}
const el=(c,x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T)}
const eye=(c,x,g,bl,E)=>{c.save();c.translate(x,.3);c.scale(g*(E[4]||1),E[4]||1)
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
const orc=(c,x,y,r,k)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(k,k)
  for(const q of[-1.57,-.35,.35,2.8,.34+3.14]){c.save();c.rotate(q);el(c,.3,0,.3,.14);fs(c,'#e7a0d8','#7a2a6a');c.restore()}
  c.beginPath();c.moveTo(-.18,.02);c.quadraticCurveTo(-.4,.5,0,.58);c.quadraticCurveTo(.4,.5,.18,.02);c.closePath();fs(c,'#b0349c','#5a1050')
  el(c,0,.16,.07,.09);c.fillStyle='#ffb02a';c.fill();el(c,0,.33,.05,.04);c.fillStyle='#f06ad0';c.fill();c.restore()}
const girl=(c,t,i)=>{
  const s=22,w=sin(T*t),HR='#211c26',HD='#0f0c14',LV='#b79be6',LD='#8f72c8'
  c.save();c.translate(178,52);c.rotate(.04*w);c.scale(s,s);c.lineWidth=1.5/s
  // swinging high ponytail
  c.save();c.translate(.95,-1.25);c.rotate(.12*sin(T*t-.6))
  c.beginPath();c.moveTo(-.2,-.15);c.quadraticCurveTo(1.1,-.3,1.45,.8);c.quadraticCurveTo(1.7,1.6,1.95+w*.1,2.45);c.quadraticCurveTo(1.55,2.05,1.38,1.95)
  c.quadraticCurveTo(1.5,2.5,1.32+w*.08,3.05);c.quadraticCurveTo(1.0,2.3,.85,1.65);c.quadraticCurveTo(.6,.75,.1,.25);c.closePath();fs(c,HR,HD)
  c.beginPath();c.moveTo(.15,0);c.quadraticCurveTo(1.25,.6,1.55+w*.08,2.4);c.moveTo(.1,.1);c.quadraticCurveTo(.9,.9,1.1+w*.06,2.6);c.strokeStyle='#4a4458';c.stroke()
  c.restore()
  // short back hair at the nape
  sp(c,[0,-1.62,1.25,-1.25,1.4,-.2,1.3,.8,.9,1.1,-.9,1.1,-1.3,.8,-1.4,-.2,-1.25,-1.25]);fs(c,HR,HD)
  // neck and lavender blouse
  c.beginPath();c.moveTo(-.3,.7);c.lineTo(-.33,1.6);c.lineTo(.33,1.6);c.lineTo(.3,.7);fs(c,SK)
  el(c,0,1.02,.34,.22);c.fillStyle=SKS;c.fill()
  const bd=()=>{c.beginPath();c.moveTo(-.45,1.4);c.quadraticCurveTo(-1.15,1.55,-1.45,1.8);c.quadraticCurveTo(-1.8,2.05,-1.82,2.6)
    c.lineTo(-1.9,6);c.lineTo(1.9,6);c.lineTo(1.82,2.6);c.quadraticCurveTo(1.8,2.05,1.45,1.8);c.quadraticCurveTo(1.15,1.55,.45,1.4);c.closePath()}
  bd();fs(c,LV);c.save();bd();c.clip()
  c.beginPath();c.moveTo(1.28,2.4);c.quadraticCurveTo(1.25,3.6,1.32,6);c.lineTo(2,6);c.lineTo(2,1.8);c.fillStyle=LD;c.fill();c.restore()
  c.beginPath();c.moveTo(-.5,1.36);c.lineTo(-.62,1.85);c.lineTo(0,1.62);c.lineTo(.62,1.85);c.lineTo(.5,1.36);c.quadraticCurveTo(0,1.6,-.5,1.36);fs(c,'#fff')
  c.beginPath();c.moveTo(0,1.62);c.lineTo(-.14,1.95);c.lineTo(0,1.85);c.lineTo(.14,1.95);c.closePath();fs(c,'#e03048')
  c.beginPath();c.moveTo(1.28,2.45);c.quadraticCurveTo(1.25,3.6,1.32,6);c.strokeStyle=LD;c.stroke();c.strokeStyle=OL
  // raised hand holding an orchid sprig
  c.beginPath();c.moveTo(-1.45,5);c.quadraticCurveTo(-1.6,3.2,-1.25,2.35);c.lineWidth=.62;c.strokeStyle=OL;c.stroke();c.lineWidth=.62-3/s;c.strokeStyle=LV;c.stroke();c.lineWidth=1.5/s;c.strokeStyle=OL
  el(c,-1.25,2.3,.29,.12,-.2);fs(c,'#fff')
  c.save();c.translate(-1.25,2.05);c.rotate(.08*sin(T*t+1))
  c.beginPath();c.moveTo(.05,0);c.quadraticCurveTo(-.25,-.8,-.55,-1.55);c.moveTo(-.2,-.62);c.quadraticCurveTo(-.55,-.8,-.75,-.75);c.strokeStyle='#3d8a3a';c.lineWidth=.07;c.stroke();c.lineWidth=1.5/s
  el(c,-.85,-.7,.1,.13);fs(c,'#cfe3a0','#3d6a2a')
  orc(c,-.58,-1.6,-.3,1);orc(c,-.3,-.9,.4,.85)
  c.restore()
  c.beginPath();c.roundRect(-1.48,1.82,.46,.42,.14);fs(c,SK)
  c.beginPath();c.moveTo(-1.42,1.95);c.lineTo(-1.1,1.95);c.moveTo(-1.42,2.07);c.lineTo(-1.1,2.07);c.strokeStyle=SKS;c.lineWidth=.04;c.stroke();c.lineWidth=1.5/s;c.strokeStyle=OL
  // face
  c.beginPath();c.moveTo(-1,-.4);c.bezierCurveTo(-1.02,.5,-.72,.98,0,1.22);c.bezierCurveTo(.72,.98,1.02,.5,1,-.4);c.bezierCurveTo(1,-1.5,-1,-1.5,-1,-.4);fs(c,SK)
  c.beginPath();c.moveTo(-1,-.2);c.quadraticCurveTo(0,.25,1,-.2);c.lineTo(1,-.6);c.lineTo(-1,-.6);c.fillStyle=SKS;c.fill()
  el(c,-.58,.68,.2,.09);c.fillStyle='rgba(255,100,120,.45)';c.fill();el(c,.58,.68,.2,.09);c.fill()
  const E=['#9a5a2a','#4a2410','#e0a060','#2a1408',1.08],b=i==4||i==6?.5:i==5?1:0
  eye(c,-.45,-1,b,E);eye(c,.45,1,b,E)
  c.beginPath();c.moveTo(.02,.62);c.lineTo(.05,.66);c.strokeStyle='#c98a70';c.lineWidth=.04;c.stroke()
  c.beginPath();c.moveTo(-.18,.82);c.quadraticCurveTo(0,.9,.18,.82);c.quadraticCurveTo(0,1.08,-.18,.82);c.fillStyle='#a8303e';c.fill();c.strokeStyle='#6a1a22';c.lineWidth=1.5/s;c.stroke()
  // front hair with a swept fringe
  c.strokeStyle=HD
  sp(c,[-1.24,-.2,-1.24,-1.1,0,-1.66,1.24,-1.1,1.24,-.2,0,-.95]);fs(c,HR,HD)
  c.save();c.clip();c.fillStyle='#4c4a66';for(let k=0;k<7;k++){const q=3.8+k*.26,x=1.05*cos(q),y=-.45+.85*sin(q);c.beginPath();lk(c,x-.09,y,x+.09,y,x*.72,y+.3,0);c.fill()};c.restore()
  c.beginPath()
  for(const[bx,tx,ty,b]of[[-.92,-1.02,.05,-.05],[-.55,-.72,-.05,-.08],[-.18,-.38,.02,-.09],[.2,-.02,.06,-.09],[.55,.38,-.02,-.08],[.88,.85,.08,-.03]])lk(c,bx-.32,-1.05,bx+.32,-1.05,tx,ty,b)
  lk(c,-1.26,-.7,-.9,-.6,-1.1,.95,-.06);lk(c,1.26,-.7,.9,-.6,1.12+w*.03,.95,.06)
  fs(c,HR,HD)
  // scrunchie and orchid hairpin
  el(c,.98,-1.3,.22,.18,.5);fs(c,'#e03048','#7a1020')
  orc(c,-.98,-.95,.3,1.05)
  c.restore()
}
const Z=[.88,.9,.95]
export default(c,t,i)=>{
  c.save();c.translate(X,Y)
  c.fillStyle='#fff';c.fillRect(0,0,W,H);c.fillStyle='#ED2939';c.fillRect(0,0,W,H/2)
  const k=W/54;c.fillStyle='#fff';c.beginPath();c.arc(11.405*k,9*k,6.625*k,0,T);c.fill()
  c.fillStyle='#ED2939';c.beginPath();c.arc(15.03*k,9*k,7.25*k,0,T);c.fill();c.fillStyle='#fff'
  for(let j=0;j<5;j++){const a=j*T/5;st(c,15.03*k+3.8*k*sin(a),9*k-3.8*k*cos(a),1.725*k,a)}
  c.beginPath();c.rect(104,0,W-104,H);c.clip();girl(c,t,i);c.restore()
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

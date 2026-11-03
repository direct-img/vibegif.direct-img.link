// Sweden animeflag: the blue flag of Sweden with its yellow Nordic cross, waving on a silver pole, with a gentle anime girl in the lower fly quadrant wearing a midsummer flower crown of daisies, her long wheat-blonde hair streaming in the wind as little daisies drift away on the breeze
export const frames=16,delay=80
const W=240,H=150,X=12,Y=24,A=5,T=Math.PI*2,{sin,cos,round}=Math
const OL='#5a3030',SK='#ffe9dc',SKS='#f3c3b0'
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
const girl=(c,t,i)=>{
  const s=17.5,w=sin(T*t),HR='#efd590',HD='#8a6428',HL='#fff4cc',y=k=>.16*sin(T*(t-k/4.5))
  c.save();c.translate(140,123.6);c.rotate(.04);c.scale(s,s);c.lineWidth=1.4/s
  // long hair streaming right in layered locks
  const rb=(x0,y0,L,w0,ph,f,hl)=>{const P=[],Q=[],R=[];for(let k=0;k<=14;k++){const u=k/14,x=x0+u*L,yy=y0+u*u*ph+y(x)*u*1.6,h=w0*(1-u)**.85
    P.push([x,yy-h]);Q.unshift([x,yy+h*.85]);R.push([x,yy-h*.55])}
    c.beginPath();for(const[x,q]of[...P,...Q])c.lineTo(x,q);c.closePath();fs(c,f,HD)
    if(hl){c.beginPath();for(const[x,q]of R.slice(1,11))c.lineTo(x,q);c.strokeStyle=HL;c.lineWidth=.1;c.stroke();c.lineWidth=1.4/s}}
  sp(c,[0,-1.68,1.3,-1.45,1.55,-.2,1.6,1.2,1.4,3,-1.3,3,-1.45,.8,-1.4,-.8]);fs(c,HR,HD)
  rb(.9,-.85,5.9,.45,.45,'#d4ae62');rb(.9,.35,5.6,.45,.75,'#d4ae62')
  rb(.9,1.05,4.4,.5,.9,HR,1);rb(.9,-.25,6.3,.6,.55,HR,1);rb(.9,-1.18,5.2,.4,.15,HR,1)
  // neck and blouse
  c.beginPath();c.moveTo(-.3,.7);c.lineTo(-.33,1.6);c.lineTo(.33,1.6);c.lineTo(.3,.7);fs(c,SK)
  el(c,0,1.02,.34,.22);c.fillStyle=SKS;c.fill()
  sp(c,[-.5,1.42,-1.4,1.65,-1.65,2.6,-1.65,3.4,1.65,3.4,1.65,2.6,1.4,1.65,.5,1.42]);fs(c,'#fdfbf6')
  c.beginPath();c.moveTo(-.5,1.42);c.quadraticCurveTo(0,1.9,.5,1.42);c.strokeStyle='#5b8fd6';c.lineWidth=.12;c.stroke();c.lineWidth=1.4/s;c.strokeStyle=OL
  // face
  c.beginPath();c.moveTo(-1,-.4);c.bezierCurveTo(-1.02,.5,-.72,.98,0,1.22);c.bezierCurveTo(.72,.98,1.02,.5,1,-.4);c.bezierCurveTo(1,-1.5,-1,-1.5,-1,-.4);fs(c,SK)
  c.beginPath();c.moveTo(-1,-.2);c.quadraticCurveTo(0,.2,1,-.2);c.lineTo(1,-.6);c.lineTo(-1,-.6);c.fillStyle=SKS;c.fill()
  el(c,-.6,.66,.22,.1);c.fillStyle='rgba(255,120,140,.5)';c.fill();el(c,.6,.66,.22,.1);c.fill()
  const E=['#3d93dc','#1a4a8a','#a8dcff','#10284a',1.06],b=i==6||i==8?.5:i==7?1:0
  eye(c,-.45,-1,b,E);eye(c,.45,1,b,E)
  c.beginPath();c.moveTo(-.15,.84);c.quadraticCurveTo(0,.96,.15,.84);c.strokeStyle='#8a3a3a';c.lineWidth=.06;c.stroke();c.lineWidth=1.4/s
  // front hair
  c.strokeStyle=HD
  sp(c,[-1.24,-.2,-1.24,-1.1,0,-1.68,1.24,-1.1,1.24,-.2,0,-.95]);fs(c,HR,HD)
  c.beginPath()
  for(const[bx,tx,ty,b]of[[-.9,-.95,.02,-.06],[-.5,-.5,-.05,-.04],[-.12,-.12,.04,.02],[.28,.32,-.04,.04],[.7,.85,.06,.06]])lk(c,bx-.34,-1.05,bx+.34,-1.05,tx,ty,b)
  lk(c,-1.26,-.7,-.9,-.6,-1.1,1.05,-.06);lk(c,1.26,-.7,.9,-.6,1.25+w*.05,1,.12)
  fs(c,HR,HD)
  c.save();sp(c,[-1.24,-.2,-1.24,-1.1,0,-1.68,1.24,-1.1,1.24,-.2,0,-.95]);c.clip();c.strokeStyle=HL;c.lineWidth=.1
  c.beginPath();c.ellipse(0,-.35,1.05,.95,0,3.75,4.35);c.stroke();c.beginPath();c.ellipse(0,-.35,1.05,.95,0,4.7,5.3);c.stroke();c.restore()
  // midsummer flower crown
  c.lineWidth=1.2/s
  for(let k=0;k<9;k++){const q=3.35+k*.34,x=1.22*cos(q),y=-.62+.72*sin(q)
    el(c,x*1.04,y+.12,.2,.08,q+1.6);fs(c,'#4f9a45','#24521f')}
  for(let k=0;k<8;k++){const q=3.5+k*.34,x=1.2*cos(q),y=-.6+.72*sin(q),f=k%3
    if(f==0){c.fillStyle='#fff';for(let p=0;p<6;p++){el(c,x+.13*cos(p*T/6),y+.13*sin(p*T/6),.11,.06,p*T/6);fs(c,'#fff','#8a8a7a')}el(c,x,y,.07,.07);fs(c,'#ffcf1a','#8a6a10')}
    else{el(c,x,y,.15,.15);fs(c,f==1?'#ff9ac0':'#6f8ff0',f==1?'#a04070':'#2c3f9a');el(c,x,y,.05,.05);c.fillStyle='#fff6';c.fill()}}
  c.restore()
  // little daisies drifting off on the wind
  for(let k=0;k<3;k++){const u=(t+k/3)%1,px=168+u*76,py=101+k*16+5*sin(T*(u+k*.3)),r=T*(u+k*.2)
    c.save();c.translate(px,py);c.rotate(r);c.lineWidth=.7;c.strokeStyle='#7a8a8a'
    for(let p=0;p<5;p++){el(c,2.3*cos(p*T/5),2.3*sin(p*T/5),2.2,1.2,p*T/5);c.fillStyle='#fff';c.fill();c.stroke()}
    el(c,0,0,1.3,1.3);c.fillStyle='#ffcf1a';c.fill();c.restore()}
}
const Z=[.88,.9,.95]
export default(c,t,i)=>{
  c.save();c.translate(X,Y)
  c.fillStyle='#005293';c.fillRect(0,0,W,H);c.fillStyle='#FECB00';c.fillRect(75,0,30,H);c.fillRect(0,60,W,30)
  c.beginPath();c.rect(108,94,W-108,H-94);c.clip();girl(c,t,i);c.restore()
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

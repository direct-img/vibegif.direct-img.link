// Italy flag waving on a pole: green, white and red vertical tricolor with an anime girl in the white band, long brown wavy hair blowing in the wind, olive sprig hairpin, white sailor blouse with green collar and red bow, waving hello and blinking
import{createCanvas as cc}from'@napi-rs/canvas'
export const frames=16,delay=75,rim=3
const Q=2,X=19,Y=44,W=228,H=152,A=7,L=180,T=Math.PI*2,{sin,cos,pow,abs}=Math
const amp=u=>A*pow(u/W,.8),ph=(u,t)=>T*(u/L-t)
const dy=(u,t)=>amp(u)*sin(ph(u,t))
const LN='#2b1712',SK='#fde2cf',SK2='#f2bfa4',HR='#5b3222',HR2='#8a5538',IR=['#1d4a2a','#2f7a40','#7cc46e']
const E=(f,x,y,rx,ry,r=0)=>(f.beginPath(),f.ellipse(x,y,rx,ry,r,0,T))
const fs=(f,a,b,w)=>{if(a){f.fillStyle=a;f.fill()}if(b){f.strokeStyle=b;f.lineWidth=w||1.2;f.stroke()}}
const P=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=4)f.quadraticCurveTo(p[k],p[k+1],p[k+2],p[k+3])}
const B=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=6)f.bezierCurveTo(...p.slice(k,k+6))}
const eye=(f,x,s,bl)=>{
  if(bl){P(f,x-7*s,2,x,7,x+7*s,1);fs(f,0,LN,1.6);P(f,x+7*s,1,x+8.5*s,0,x+9.5*s,-1.5);fs(f,0,LN,1.3);return}
  f.save();P(f,x-6.5*s,.5,x,-8,x+7*s,-2,x+7.5*s,4,x+5.5*s,9,x,13.5,x-5*s,9,x-6.5*s,6,x-6.5*s,.5);fs(f,'#fff');f.clip()
  E(f,x+.4*s,4,5.2,7.4);fs(f,IR[1]);E(f,x+.4*s,.2,5.6,4.2);fs(f,IR[0]);E(f,x+.6*s,8.4,3.4,2.4);fs(f,IR[2])
  E(f,x+.4*s,3,2.3,3.4);fs(f,IR[0]);E(f,x-2*s,0,2.1,2.6,.3);fs(f,'#fff');E(f,x+2.6*s,7.6,1,1);fs(f,'#fff')
  f.restore()
  P(f,x-7.2*s,1.4,x,-9.6,x+8*s,-2.8,x+10*s,-4.6,x+10.4*s,-3.2,x+9*s,-1.4,x+7.6*s,-.8,x,-6.6,x-6.6*s,2.4);f.closePath();fs(f,LN)
  P(f,x-2*s,12.6,x+2*s,13.2,x+5*s,10.4);fs(f,0,LN,.8)
  P(f,x-6*s,-12,x,-14.5,x+6*s,-12.5);fs(f,0,LN,1)
}
const hand=(f,a)=>{
  // open palm, fingers up, outlined by stroking dark then skin
  f.save();f.rotate(a)
  const fg=[[-6,-9,-1.6],[-2.2,-12,-.5],[1.8,-12,.4],[5.4,-9.5,1.2],[8,-1,1.9]]
  for(const k of[0,1]){
    f.strokeStyle=k?SK:LN;f.lineWidth=k?3.2:5.4
    for(const[x,y]of fg){f.beginPath();f.moveTo(x*.4,0);f.lineTo(x,y);f.stroke()}
    E(f,0,-1,k?5.6:6.8,k?5.4:6.6);fs(f,k?SK:LN)
  }
  f.restore()
}
const girl=(f,t,i)=>{
  const w=sin(T*t),w2=sin(T*t+1.2),bl=i==10||i==11
  const bp=()=>P(f,-25,12,-30,-14,-18,-30,-6,-36,6,-34,20,-31,27,-12,28,0,26,14,23,-2,19,-13,17,-6,14,-9,11,-14,8,-18,6,-9,2,-3,0,-12,-3,-18,-6,-12,-9,-10,-12,-15,-15,-17,-18,-8,-21,1,-22,4,-25,12)
  f.save();f.translate(W/2,56);f.scale(1.3,1.3);f.lineJoin=f.lineCap='round'
  // back hair, flowing toward the fly
  B(f,-4,-33,-28,-32,-32,-4,-29,16,-27,30,-33,40,-29+w2,54,-26,58,-20,52,-17,44,0,46,10,46,17,44,24,50,32,58,42+2*w,62,46,62,46,54,44,50,54,52,60,44,63+2*w2,36,62,32,56,30,52,28,60,24,66,16,68+2*w,8,66,4,58,4,52,4,54,-4,50,-10,46,-10,40,-30,20,-34,-4,-33)
  fs(f,HR,LN)
  f.strokeStyle='#3a1d13';f.lineWidth=.9
  for(const p of[[30,-14,46,-6,56,0,66+2*w,8],[34,8,44,18,54,28,61+2*w2,36],[28,24,32,40,36,52,42+2*w,60],[-26,10,-26,26,-30,38,-29+w2,52]]){B(f,...p);f.stroke()}
  // neck, shoulders, blouse
  P(f,-7,16,-7,24,-7,33,0,34,7,33,7,24,7,16);fs(f,SK,LN)
  P(f,-7,20,0,22,7,20,7,24,7,27,0,31,-7,27,-7,24,-7,20);fs(f,SK2)
  P(f,-8,31,-16,37,-36,41,-48,46,-50,100,0,100,50,100,48,46,36,41,16,37,8,31);f.closePath();fs(f,'#fff',LN)
  P(f,-10,31,-24,38,-36,42,-31,49,-26,56,-13,57,0,58,13,57,26,56,31,49,36,42,24,38,10,31,5,41,0,52,-5,41,-10,31);fs(f,'#009246',LN)
  f.strokeStyle='#fff';f.lineWidth=1.3
  f.beginPath();f.moveTo(-31,45);f.lineTo(-23,54);f.moveTo(31,45);f.lineTo(23,54);f.stroke()
  f.beginPath();f.moveTo(0,51);f.lineTo(-11,45);f.lineTo(-10,58);f.closePath();f.moveTo(0,51);f.lineTo(11,45);f.lineTo(10,58);f.closePath();fs(f,'#ce2b37',LN,1)
  f.beginPath();f.moveTo(-1,52);f.lineTo(-6,66);f.lineTo(0,62.5);f.lineTo(6,66);f.lineTo(1,52);fs(f,'#ce2b37',LN,1)
  E(f,0,51.5,2.6,2.6);fs(f,'#a81d29',LN,1)
  // face
  f.beginPath();f.moveTo(-23,-8);f.bezierCurveTo(-23,8,-15,21,0,26);f.bezierCurveTo(15,21,23,8,23,-8);f.arc(0,-8,23,0,Math.PI,true);fs(f,SK,LN)
  f.save();f.clip();f.translate(1,3.5);bp();fs(f,SK2);f.restore()
  E(f,-15,13,4.4,2);fs(f,'rgba(255,110,120,.4)');E(f,15,13,4.4,2);fs(f,'rgba(255,110,120,.4)')
  eye(f,-10,-1,bl);eye(f,10,1,bl)
  P(f,.4,13,1,14,1.6,15);fs(f,0,SK2,1.1)
  P(f,-4.5,18,0,18.6,4.5,18,3,23,0,23.4,-3,23,-4.5,18);fs(f,'#a8383a',LN,1)
  P(f,-2.6,21.6,0,20.4,2.6,21.6,0,23.2,-2.6,21.6);fs(f,'#f0868a')
  // bangs
  bp();fs(f,HR,LN)
  f.save();f.clip();f.beginPath();f.arc(-2,-4,24,Math.PI*1.12,Math.PI*1.62);f.strokeStyle=HR2;f.lineWidth=3;f.stroke()
  f.beginPath();f.arc(-2,-4,20,Math.PI*1.2,Math.PI*1.45);f.lineWidth=1.6;f.stroke();f.restore()
  // side locks
  B(f,-21,-8,-28,4,-24,22,-30+w,38,-24,30,-19,18,-19,4);f.closePath();fs(f,HR,LN,1.1)
  B(f,21,-8,28,4,24,22,30+w2,38,24,30,19,18,19,4);f.closePath();fs(f,HR,LN,1.1)
  // olive sprig hairpin
  f.save();f.translate(17,-26);f.rotate(.45)
  P(f,-9,0,0,-1,11,0);fs(f,0,'#4d5e2a',1)
  for(const[a,b,r]of[[-6,-1,-.6],[-2,1,.6],[2,-1,-.6],[6,1,.6],[10,-.3,-.2]]){E(f,a+2,b*2.6,3.4,1.5,r);fs(f,'#93a957',LN,.7)}
  E(f,-3,3.4,1.8,2.1);fs(f,'#3d4a2c',LN,.6)
  f.restore()
  // waving arm
  f.save();f.translate(-38,40)
  const a=-.18+.24*sin(T*t*2)
  P(f,-8,40,-6,20,1,-6);f.strokeStyle=LN;f.lineWidth=11.5;f.stroke();f.strokeStyle='#fff';f.lineWidth=9;f.stroke()
  f.translate(2,-11);hand(f,a);f.restore()
  f.restore()
}
export default(c,t,i)=>{
  const F=cc(W*Q,H*Q),f=F.getContext('2d');f.scale(Q,Q)
  f.fillStyle='#009246';f.fillRect(0,0,W/3+.5,H);f.fillStyle='#fff';f.fillRect(W/3,0,W/3+.5,H);f.fillStyle='#ce2b37';f.fillRect(W*2/3,0,W/3,H)
  girl(f,t,i)
  const G=cc(256*Q,256*Q),g=G.getContext('2d')
  g.scale(Q,Q);g.lineJoin=g.lineCap='round'
  g.beginPath();g.rect(X-7,24,6,228);fs(g,'#c9ccd3','#111',2.5)
  g.fillStyle='#eef0f3';g.fillRect(X-6,25,2,226)
  E(g,X-4,19,6.5,6.5);fs(g,'#f2c230','#111',2.5);E(g,X-6,17,2,2);fs(g,'#fff3b8')
  g.setTransform(1,0,0,1,0,0)
  for(let x=0;x<W*Q;x++){const u=(x+.5)/Q;g.drawImage(F,x,0,1,H*Q,X*Q+x,(Y+dy(u,t))*Q,1,H*Q)}
  g.globalCompositeOperation='source-atop'
  for(let x=0;x<W*Q;x++){
    const u=(x+.5)/Q,s=cos(ph(u,t))*pow(u/W,.4),k=Math.round(abs(s)*6)/6
    if(k){g.fillStyle=s>0?`rgba(255,255,255,${.2*k})`:`rgba(0,0,40,${.16*k})`;g.fillRect(X*Q+x,0,1,256*Q)}
  }
  g.globalCompositeOperation='source-over';g.scale(Q,Q)
  g.beginPath()
  for(let u=0;u<=W;u+=2)g.lineTo(X+u,Y+dy(u,t))
  for(let u=W;u>=0;u-=2)g.lineTo(X+u,Y+H+dy(u,t))
  g.closePath();g.strokeStyle='#111';g.lineWidth=3;g.stroke()
  c.drawImage(G,0,0,256,256)
}

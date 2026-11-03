// Argentina flag waving on a pole: light blue, white, light blue horizontal stripes with the golden Sun of May (face and 32 straight and wavy rays) in the center, and an anime girl on the fly side with long sky-blue hair streaming in the wind, amber eyes gazing at the sun, navy cardigan with an Argentine cockade pin, blinking and smiling
import{createCanvas as cc}from'@napi-rs/canvas'
export const frames=16,delay=75,rim=3
const Q=2,X=19,Y=44,W=228,H=146,A=6,L=190,T=Math.PI*2,{sin,cos,pow,abs,PI}=Math
const amp=u=>A*pow(u/W,.8),ph=(u,t)=>T*(u/L-t)
const dy=(u,t)=>amp(u)*sin(ph(u,t))
const LN='#24203a',SK='#fde4d2',SK2='#f2c0a8',HR='#c6e6fa',HR2='#f2faff',HR3='#7fb2dc',IR=['#6a3206','#c9801a','#ffd45e'],CE='#74acdf',BR='#85340a',GO='#f6b40e'
const E=(f,x,y,rx,ry,r=0)=>(f.beginPath(),f.ellipse(x,y,rx,ry,r,0,T))
const fs=(f,a,b,w)=>{if(a){f.fillStyle=a;f.fill()}if(b){f.strokeStyle=b;f.lineWidth=w||1.2;f.stroke()}}
const P=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=4)f.quadraticCurveTo(p[k],p[k+1],p[k+2],p[k+3])}
const B=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=6)f.bezierCurveTo(...p.slice(k,k+6))}
const eye=(f,x,s,bl,g=0)=>{
  if(bl){P(f,x-7*s,2,x,7,x+7*s,1);fs(f,0,LN,1.6);P(f,x+7*s,1,x+8.5*s,0,x+9.5*s,-1.5);fs(f,0,LN,1.3);return}
  f.save();P(f,x-6.5*s,.5,x,-8,x+7*s,-2,x+7.5*s,4,x+5.5*s,9,x,13.5,x-5*s,9,x-6.5*s,6,x-6.5*s,.5);fs(f,'#fff');f.clip()
  x+=g;E(f,x+.4*s,4,5.2,7.4);fs(f,IR[1]);E(f,x+.4*s,.2,5.6,4.2);fs(f,IR[0]);E(f,x+.6*s,8.4,3.4,2.4);fs(f,IR[2])
  E(f,x+.4*s,3,2.3,3.4);fs(f,IR[0]);E(f,x-2*s,0,2.1,2.6,.3);fs(f,'#fff');E(f,x+2.6*s,7.6,1,1);fs(f,'#fff');x-=g
  f.restore()
  P(f,x-7.2*s,1.4,x,-9.6,x+8*s,-2.8,x+10*s,-4.6,x+10.4*s,-3.2,x+9*s,-1.4,x+7.6*s,-.8,x,-6.6,x-6.6*s,2.4);f.closePath();fs(f,LN)
  P(f,x-2*s,12.6,x+2*s,13.2,x+5*s,10.4);fs(f,0,LN,.8)
}
// Sun of May: 16 straight and 16 wavy rays around a face
const sun=(f,t)=>{
  for(let k=0;k<32;k++){
    const a=k*T/32-PI/2,c=cos(a),s=sin(a),n=-s,m=c
    f.beginPath()
    if(k%2==0){f.moveTo(c*9+n*2.3,s*9+m*2.3);f.lineTo(c*22.5,s*22.5);f.lineTo(c*9-n*2.3,s*9-m*2.3)}
    else{
      const q=[]
      for(let j=0;j<=10;j++){const r=9+j*1.15,o=1.25*sin(j*.95-T*t*2+k),hw=1.8*(1-j/10)+.15;q.push([r,o,hw])}
      for(const[r,o,hw]of q)f.lineTo(c*r+n*(o+hw),s*r+m*(o+hw))
      for(const[r,o,hw]of q.reverse())f.lineTo(c*r+n*(o-hw),s*r+m*(o-hw))
    }
    f.closePath();fs(f,GO,BR,.6)
  }
  E(f,0,0,9.6,9.6);fs(f,GO,BR,.8)
  f.strokeStyle=BR;f.lineWidth=.7
  P(f,-6,-3.2,-4,-4.8,-1.6,-3.6);f.stroke();P(f,6,-3.2,4,-4.8,1.6,-3.6);f.stroke()
  for(const s of[-1,1]){P(f,3.2*s-1.6,-1.6,3.2*s,-2.6,3.2*s+1.6,-1.6,3.2*s,-.6,3.2*s-1.6,-1.6);fs(f,'#fff2c0',BR,.6);E(f,3.2*s,-1.6,.6,.6);fs(f,BR)}
  P(f,0,-2.6,-.6,.6,-.2,2);f.stroke();P(f,-1.4,2.2,0,2.8,1.4,2.2);f.stroke()
  P(f,-2.6,4.8,0,6.2,2.6,4.8);f.stroke();P(f,-1.4,4.6,0,4.2,1.4,4.6);f.stroke()
}
const girl=(f,t,i)=>{
  const w=sin(T*t),w2=sin(T*t+1.3),w3=sin(T*t+2.6),bl=i==3||i==4
  const bp=()=>P(f,-25,12,-30,-14,-18,-30,-6,-36,6,-34,20,-31,27,-12,28,0,26,14,23,-2,19,-13,17,-6,14,-9,11,-14,8,-18,6,-9,2,-3,0,-12,-3,-18,-6,-12,-9,-10,-12,-15,-15,-17,-18,-8,-21,1,-22,4,-25,12)
  f.save();f.translate(177,70);f.scale(1.07,1.07);f.rotate(-.04);f.lineJoin=f.lineCap='round'
  // long hair streaming toward the fly
  B(f,-4,-34,-28,-33,-34,-6,-30,16,-28,30,-34,44,-28+w3,58,-20,60,-16,54,-14,48,0,50,10,50,16,48,26,58,40,66,56+3*w,68,48,60,44,54,42,48,52,52,64,50,74+3*w2,46,62,40,54,34,48,28,58,26,68,18,78+3*w3,10,64,10,54,6,46,-2,52,-8,62,-14,70+3*w,-24,54,-24,44,-22,38,-24,30,-36,14,-38,-4,-34)
  fs(f,'#9ccbee',LN)
  f.strokeStyle=HR3;f.lineWidth=.9
  for(const p of[[30,-18,42,-16,54,-18,66+3*w,-22],[36,4,48,8,60,10,72+3*w3,10],[32,24,42,34,52,42,64+3*w2,46],[24,38,32,50,42,58,52+3*w,64],[-27,12,-28,28,-30,42,-28+w3,54]]){B(f,...p);f.stroke()}
  // neck, navy cardigan, white collar, cockade
  P(f,-7,16,-7,24,-7,33,0,34,7,33,7,24,7,16);fs(f,SK,LN)
  P(f,-7,20,0,22,7,20,7,24,7,27,0,31,-7,27,-7,24,-7,20);fs(f,SK2)
  P(f,-8,30,-18,36,-38,40,-48,46,-50,100,0,100,50,100,48,46,38,40,18,36,8,30,0,40,-8,30);fs(f,'#2b3f6b',LN)
  P(f,0,40,-4,50,0,100);fs(f,0,'#1c2a4a',1)
  f.beginPath();f.moveTo(-9,29);f.lineTo(-15,40);f.lineTo(0,40);f.lineTo(15,40);f.lineTo(9,29);f.quadraticCurveTo(0,38,-9,29);fs(f,'#fff',LN,1)
  f.beginPath();f.moveTo(-9,29);f.lineTo(-13,44);f.lineTo(0,38);f.lineTo(13,44);f.lineTo(9,29);f.quadraticCurveTo(0,37,-9,29);fs(f,'#fff',LN,1)
  f.save();f.translate(-24,52)
  f.beginPath();f.moveTo(-1,3);f.lineTo(-4,13);f.lineTo(-1.5,11);f.lineTo(0,13.5);f.closePath();fs(f,CE,LN,.8)
  f.beginPath();f.moveTo(1,3);f.lineTo(4,12);f.lineTo(1.5,10.5);f.lineTo(0,12.5);f.closePath();fs(f,'#fff',LN,.8)
  E(f,0,0,6,6);fs(f,CE,LN,.9);E(f,0,0,3.9,3.9);fs(f,'#fff',LN,.6);E(f,0,0,1.9,1.9);fs(f,CE,LN,.5)
  f.restore()
  // face
  f.beginPath();f.moveTo(-23,-8);f.bezierCurveTo(-23,8,-15,21,0,26);f.bezierCurveTo(15,21,23,8,23,-8);f.arc(0,-8,23,0,PI,true);fs(f,SK,LN)
  f.save();f.clip();f.translate(-1,3.5);bp();fs(f,SK2);f.restore()
  E(f,-15,13,4.4,2);fs(f,'rgba(255,110,130,.4)');E(f,15,13,4.4,2);fs(f,'rgba(255,110,130,.4)')
  eye(f,-10,-1,bl,-1.8);eye(f,10,1,bl,-1.8)
  P(f,-.6,13,-1,14,-1.6,15);fs(f,0,SK2,1.1)
  P(f,-5,18.5,-1,22.5,4,18.8);fs(f,0,LN,1.2)
  // bangs, side locks, shine
  bp();fs(f,HR,LN)
  f.save();f.clip();f.setLineDash([7,2.5]);f.beginPath();f.arc(-2,-4,24,PI*1.12,PI*1.62);f.strokeStyle=HR2;f.lineWidth=3;f.stroke()
  f.beginPath();f.arc(-2,-4,20,PI*1.2,PI*1.45);f.lineWidth=1.6;f.stroke();f.restore()
  f.strokeStyle=HR3;f.lineWidth=.8;for(const[x,y]of[[-15,-14],[-4,-16],[10,-15]]){P(f,x*.4,-30,x*.8,-24,x,y);f.stroke()}
  B(f,-21,-8,-28,4,-25,22,-29+w,40,-24,32,-19,18,-19,4);f.closePath();fs(f,HR,LN,1.1)
  B(f,21,-8,28,4,26,22,31+w2,40,25,32,19,18,19,4);f.closePath();fs(f,HR,LN,1.1)
  f.restore()
}
export default(c,t,i)=>{
  const F=cc(W*Q,H*Q),f=F.getContext('2d');f.scale(Q,Q)
  f.fillStyle=CE;f.fillRect(0,0,W,H);f.fillStyle='#fff';f.fillRect(0,H/3,W,H/3)
  f.save();f.translate(W/2,H/2);sun(f,t);f.restore()
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

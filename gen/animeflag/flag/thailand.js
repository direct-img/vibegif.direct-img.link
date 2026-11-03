// Thailand flag waving on a pole: red, white, wide blue, white, red horizontal stripes with an anime girl in the center greeting with a wai (palms pressed together) and a small bow, long black hair with side-swept bangs, yellow ratchaphruek (golden shower) flowers in her hair, pale gold silk top
import{createCanvas as cc}from'@napi-rs/canvas'
export const frames=16,delay=75,rim=3
const Q=2,X=19,Y=44,W=228,H=152,A=6,L=190,T=Math.PI*2,{sin,cos,pow,abs,PI}=Math
const amp=u=>A*pow(u/W,.8),ph=(u,t)=>T*(u/L-t)
const dy=(u,t)=>amp(u)*sin(ph(u,t))
const LN='#24140f',SK='#f6d2b4',SK2='#e3a988',HR='#1d1517',HR2='#463a40',IR=['#2a1208','#5e3418','#a8703c'],RD='#a51931',BL='#2d2a4a',GD='#e9c46e',GD2='#c99a3e'
const E=(f,x,y,rx,ry,r=0)=>(f.beginPath(),f.ellipse(x,y,rx,ry,r,0,T))
const fs=(f,a,b,w)=>{if(a){f.fillStyle=a;f.fill()}if(b){f.strokeStyle=b;f.lineWidth=w||1.2;f.stroke()}}
const P=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=4)f.quadraticCurveTo(p[k],p[k+1],p[k+2],p[k+3])}
const B=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=6)f.bezierCurveTo(...p.slice(k,k+6))}
const eye=(f,x,s,bl,g=0)=>{
  if(bl==2){P(f,x-7*s,4,x,-4,x+7*s,3);fs(f,0,LN,1.8);return}
  if(bl){P(f,x-7*s,2,x,7,x+7*s,1);fs(f,0,LN,1.6);P(f,x+7*s,1,x+8.5*s,0,x+9.5*s,-1.5);fs(f,0,LN,1.3);return}
  f.save();P(f,x-6.5*s,.5,x,-8,x+7*s,-2,x+7.5*s,4,x+5.5*s,9,x,13.5,x-5*s,9,x-6.5*s,6,x-6.5*s,.5);fs(f,'#fff');f.clip()
  x+=g;E(f,x+.4*s,4,5.2,7.4);fs(f,IR[1]);E(f,x+.4*s,.2,5.6,4.2);fs(f,IR[0]);E(f,x+.6*s,8.4,3.4,2.4);fs(f,IR[2])
  E(f,x+.4*s,3,2.3,3.4);fs(f,IR[0]);E(f,x-2*s,0,2.1,2.6,.3);fs(f,'#fff');E(f,x+2.6*s,7.6,1,1);fs(f,'#fff');x-=g
  f.restore()
  P(f,x-7.2*s,1.4,x,-9.6,x+8*s,-2.8,x+10*s,-4.6,x+10.4*s,-3.2,x+9*s,-1.4,x+7.6*s,-.8,x,-6.6,x-6.6*s,2.4);f.closePath();fs(f,LN)
  P(f,x-2*s,12.6,x+2*s,13.2,x+5*s,10.4);fs(f,0,LN,.8)
}
const flower=(f,x,y,r)=>{
  for(let k=0;k<5;k++){const a=k*T/5-PI/2;E(f,x+cos(a)*r*.55,y+sin(a)*r*.55,r*.52,r*.4,a);fs(f,'#f7d117',LN,.5)}
  E(f,x,y,r*.28,r*.28);fs(f,'#c98a10')
}
const girl=(f,t,i)=>{
  const w=sin(T*t),w2=sin(T*t+1.3)
  // bow: up, dip forward, back up
  const q=(t+.6)%1,bw=q<.5?0:sin((q-.5)*2*PI),bl=bw>.45?2:i==2?1:0
  const bp=()=>P(f,-25,12,-30,-14,-18,-30,-6,-36,6,-34,20,-31,27,-12,28,0,26,12,25,-6,19,-19,18,-12,13,-12,12,-16,8,-18,5,-12,1,-8,0,-14,-3,-16,-7,-12,-11,-11,-11,-12,-14,-13,-18,-6,-21,0,-23,6,-25,12)
  f.save();f.translate(W/2,60);f.scale(1.2,1.2);f.lineJoin=f.lineCap='round'
  f.save();f.translate(0,bw*3.5);f.scale(1+bw*.02,1-bw*.03)
  // long hair behind
  B(f,-4,-34,-30,-32,-34,-4,-31,18,-30,32,-34,46,-32+w2,62,-24,64,-18,56,-16,50,0,52,10,52,16,50,22,56,30,64,36+1.5*w,62,34,52,32,44,34,36,38,26,34,10,30,-6,34,-28,20,-36,-4,-34)
  fs(f,HR,LN)
  f.strokeStyle='#0e0a0c';f.lineWidth=.9
  for(const p of[[26,10,30,24,32,40,35+w,58],[-27,12,-28,28,-32,42,-31+w2,58]]){B(f,...p);f.stroke()}
  f.restore()
  // neck, gold silk top with round collar
  P(f,-7,16,-7,24,-7,33,0,34,7,33,7,24,7,16);fs(f,SK,LN)
  P(f,-7,20,0,22,7,20,7,24,7,27,0,31,-7,27,-7,24,-7,20);fs(f,SK2)
  P(f,-8,30,-18,36,-38,40,-48,46,-50,100,0,100,50,100,48,46,38,40,18,36,8,30,0,34,-8,30);fs(f,GD,LN)
  f.save();f.clip();f.fillStyle=GD2
  for(let y=44;y<100;y+=8)for(let x=-48+(y/8%2)*4;x<50;x+=8){f.beginPath();f.moveTo(x,y-1.6);f.lineTo(x+1.6,y);f.lineTo(x,y+1.6);f.lineTo(x-1.6,y);f.fill()}
  f.restore()
  P(f,-9,29,0,38,9,29,10,33,0,42,-10,33,-9,29);fs(f,'#f4dc96',LN,1)
  f.beginPath();f.moveTo(0,42);f.lineTo(0,100);f.strokeStyle=GD2;f.lineWidth=1.2;f.stroke()
  // wai: palms pressed together in front of the chest
  for(const s of[-1,1]){P(f,41*s,46,42*s,70,30*s,84);f.quadraticCurveTo(18*s,76,5*s,64);f.strokeStyle=LN;f.lineWidth=12.5;f.stroke();f.strokeStyle='#dfb75e';f.lineWidth=10;f.stroke()}
  for(const s of[-1,1]){E(f,6*s,65,4.5,2.6,.5*s);fs(f,'#f4dc96',LN,1)}
  P(f,0,38,6.4,46,6,54,5,62,4,64,0,65,-4,64,-5,62,-6,54,-6.4,46,0,38);fs(f,SK,LN,1.1)
  f.beginPath();f.moveTo(0,40);f.lineTo(0,63);f.strokeStyle=LN;f.lineWidth=.8;f.stroke()
  f.strokeStyle=SK2;f.lineWidth=.9
  f.beginPath();f.moveTo(-4.6,56);f.quadraticCurveTo(-3,51,-.8,49);f.moveTo(4.6,56);f.quadraticCurveTo(3,51,.8,49);f.stroke()
  // head
  f.save();f.translate(0,bw*3.5);f.scale(1+bw*.02,1-bw*.03)
  f.beginPath();f.moveTo(-23,-8);f.bezierCurveTo(-23,8,-15,21,0,26);f.bezierCurveTo(15,21,23,8,23,-8);f.arc(0,-8,23,0,PI,true);fs(f,SK,LN)
  f.save();f.clip();f.translate(-1,3.5);bp();fs(f,SK2);f.restore()
  E(f,-15,13,4.4,2);fs(f,'rgba(255,110,120,.4)');E(f,15,13,4.4,2);fs(f,'rgba(255,110,120,.4)')
  eye(f,-10,-1,bl);eye(f,10,1,bl)
  P(f,.4,13,1,14,1.6,15);fs(f,0,SK2,1.1)
  if(bl==2){P(f,-4.5,18.5,0,22.5,4.5,18.5);fs(f,0,LN,1.2)}
  else{P(f,-4.5,18,0,18.6,4.5,18,3,23,0,23.4,-3,23,-4.5,18);fs(f,'#a8383a',LN,1);P(f,-2.6,21.6,0,20.4,2.6,21.6,0,23.2,-2.6,21.6);fs(f,'#f0868a')}
  bp();fs(f,HR,LN)
  f.save();f.clip();f.setLineDash([7,2.5]);f.beginPath();f.arc(-2,-4,24,PI*1.12,PI*1.62);f.strokeStyle=HR2;f.lineWidth=3;f.stroke()
  f.beginPath();f.arc(-2,-4,20,PI*1.2,PI*1.45);f.lineWidth=1.6;f.stroke();f.restore()
  B(f,-21,-8,-28,4,-25,22,-29+w,40,-24,32,-19,18,-19,4);f.closePath();fs(f,HR,LN,1.1)
  B(f,21,-8,28,4,25,22,29+w2,40,24,32,19,18,19,4);f.closePath();fs(f,HR,LN,1.1)
  // drooping ratchaphruek flower chain by her ear
  const sx=26+2*w2,sy=18
  P(f,18,-24,30,-12,sx,sy);fs(f,0,'#6b7a2a',1)
  for(const[x,y,r]of[[19,-30,0],[25,-27,1]]){E(f,x,y,5,2.2,r?-.5:.4);fs(f,'#5a9a3a',LN,.7)}
  for(let k=0;k<8;k++){const u=k/7,x=(1-u)*(1-u)*18+2*u*(1-u)*30+u*u*sx,y=(1-u)*(1-u)*-24+2*u*(1-u)*-12+u*u*sy;flower(f,x+(k%2?2:-2),y,5.4-u*2.2)}
  f.restore()
  f.restore()
}
export default(c,t,i)=>{
  const F=cc(W*Q,H*Q),f=F.getContext('2d');f.scale(Q,Q)
  const u=H/6
  f.fillStyle=RD;f.fillRect(0,0,W,H);f.fillStyle='#fff';f.fillRect(0,u,W,4*u);f.fillStyle=BL;f.fillRect(0,2*u,W,2*u)
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

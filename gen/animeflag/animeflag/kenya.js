// Kenya flag waving on a pole: black, red and green horizontal stripes with white borders and the red Maasai shield with two crossed white spears in the center, and a laughing anime girl on the fly side with deep brown skin, two bouncy black hair puffs tied with red and green scrunchies, white top and a bead necklace in flag colors, blinking
import{createCanvas as cc}from'@napi-rs/canvas'
export const frames=16,delay=75,rim=3
const Q=2,X=19,Y=44,W=228,H=152,A=6,L=190,T=Math.PI*2,{sin,cos,pow,abs,PI}=Math
const amp=u=>A*pow(u/W,.8),ph=(u,t)=>T*(u/L-t)
const dy=(u,t)=>amp(u)*sin(ph(u,t))
const LN='#1c0e08',SK='#80502f',SK2='#5e351d',HR='#1b1311',HR2='#4a3a34',IR=['#1e0c04','#5a3014','#a8703a'],BK='#141414',RD='#bb0000',GR='#006600'
const E=(f,x,y,rx,ry,r=0)=>(f.beginPath(),f.ellipse(x,y,rx,ry,r,0,T))
const fs=(f,a,b,w)=>{if(a){f.fillStyle=a;f.fill()}if(b){f.strokeStyle=b;f.lineWidth=w||1.2;f.stroke()}}
const P=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=4)f.quadraticCurveTo(p[k],p[k+1],p[k+2],p[k+3])}
const B=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=6)f.bezierCurveTo(...p.slice(k,k+6))}
const eye=(f,x,s,bl,g=0)=>{
  if(bl==2){P(f,x-7*s,4,x,-4,x+7*s,3);fs(f,0,LN,1.9);return}
  if(bl){P(f,x-7*s,2,x,7,x+7*s,1);fs(f,0,LN,1.6);P(f,x+7*s,1,x+8.5*s,0,x+9.5*s,-1.5);fs(f,0,LN,1.3);return}
  f.save();P(f,x-6.5*s,.5,x,-8,x+7*s,-2,x+7.5*s,4,x+5.5*s,9,x,13.5,x-5*s,9,x-6.5*s,6,x-6.5*s,.5);fs(f,'#fff');f.clip()
  x+=g;E(f,x+.4*s,4,5.2,7.4);fs(f,IR[1]);E(f,x+.4*s,.2,5.6,4.2);fs(f,IR[0]);E(f,x+.6*s,8.4,3.4,2.4);fs(f,IR[2])
  E(f,x+.4*s,3,2.3,3.4);fs(f,IR[0]);E(f,x-2*s,0,2.1,2.6,.3);fs(f,'#fff');E(f,x+2.6*s,7.6,1,1);fs(f,'#fff');x-=g
  f.restore()
  P(f,x-7.2*s,1.4,x,-9.6,x+8*s,-2.8,x+10*s,-4.6,x+10.4*s,-3.2,x+9*s,-1.4,x+7.6*s,-.8,x,-6.6,x-6.6*s,2.4);f.closePath();fs(f,LN)
  P(f,x-2*s,12.6,x+2*s,13.2,x+5*s,10.4);fs(f,0,LN,.8)
}
// Maasai shield with crossed spears
const vs=(f,h,w)=>B(f,0,-h,w*1.33,-h*.62,w*1.33,h*.62,0,h,-w*1.33,h*.62,-w*1.33,-h*.62,0,-h)
const spear=(f,s)=>{
  f.save();f.scale(s,1);f.rotate(.5)
  f.beginPath();f.moveTo(0,64);f.lineTo(0,-50);f.strokeStyle=BK;f.lineWidth=4.4;f.stroke();f.strokeStyle='#fff';f.lineWidth=2.4;f.stroke()
  P(f,0,-72,3.6,-62,0,-50,-3.6,-62,0,-72);fs(f,'#fff',BK,1)
  P(f,0,-69,0,-60,0,-52);fs(f,0,'#bbb',.6)
  f.beginPath();f.moveTo(0,57);f.lineTo(0,66);f.strokeStyle=BK;f.lineWidth=4.4;f.stroke();f.strokeStyle='#fff';f.lineWidth=2.4;f.stroke()
  f.restore()
}
const shield=f=>{
  spear(f,1);spear(f,-1)
  vs(f,55,19);fs(f,BK,'#fff',2.2)
  vs(f,51,12);fs(f,RD,'#fff',1.8)
  f.save();vs(f,51,12);f.clip()
  for(const s of[-1,1]){f.beginPath();f.moveTo(0,-51*s);f.quadraticCurveTo(5.4,-22*s,0,-9*s);f.quadraticCurveTo(-5.4,-22*s,0,-51*s);fs(f,'#fff')}
  f.restore()
  E(f,0,0,4.4,6.4);fs(f,'#fff');E(f,0,0,2.6,4.2);fs(f,RD)
  f.beginPath();f.moveTo(-12,-6);f.lineTo(-5,-1);f.moveTo(-12,6);f.lineTo(-5,1);f.moveTo(12,-6);f.lineTo(5,-1);f.moveTo(12,6);f.lineTo(5,1);f.strokeStyle='#fff';f.lineWidth=1.6;f.stroke()
}
const puff=(f,x,y,r,a)=>{
  f.beginPath()
  for(let k=0;k<=48;k++){const q=k*T/48,rr=r+.9*sin(q*11+a);f.lineTo(x+cos(q)*rr,y+sin(q)*rr*.94)}
  f.closePath()
}
const girl=(f,t,i)=>{
  const w=sin(T*t),b=abs(sin(T*t*2)),bl=i>=5&&i<=8?2:i==13?1:0,laugh=bl==2
  f.save();f.translate(182,84-b*1.2);f.scale(1.08,1.08);f.rotate(.05*sin(T*t));f.lineJoin=f.lineCap='round'
  const hd=()=>{f.beginPath();f.arc(0,-6,27,PI*.93,PI*2.07);f.lineTo(25,10);f.lineTo(-25,10);f.closePath()}
  // white halo outline like the flag's fimbriations
  f.save();f.lineWidth=5;f.strokeStyle='#fff'
  puff(f,-22,-36+b*2,13,0);f.stroke();puff(f,22,-36+b*2,13,2);f.stroke();hd();f.stroke()
  P(f,-8,30,-18,36,-38,40,-48,46,-50,100,0,100,50,100,48,46,38,40,18,36,8,30);f.stroke()
  f.restore()
  // puffs and scrunchies
  for(const s of[-1,1]){
    puff(f,22*s,-36+b*2,13,s+1);fs(f,HR,LN,1)
    f.save();f.clip();for(const[x,y]of[[-5,-5],[3,-8],[-1,2],[6,-1]]){E(f,22*s+x,-36+b*2+y,2.2,1.4,.4);fs(f,HR2)}f.restore()
    E(f,16*s,-26+b,6.5,3.4,-.7*s);fs(f,s<0?RD:GR,LN,1)
    P(f,13*s,-26,16*s,-28,19*s,-26);fs(f,0,'rgba(255,255,255,.5)',.8)
  }
  // neck and white top with bead necklace
  P(f,-7,16,-7,24,-7,33,0,34,7,33,7,24,7,16);fs(f,SK,LN)
  P(f,-7,20,0,22,7,20,7,24,7,27,0,31,-7,27,-7,24,-7,20);fs(f,SK2)
  P(f,-8,30,-18,36,-38,40,-48,46,-50,100,0,100,50,100,48,46,38,40,18,36,8,30,0,38,-8,30);fs(f,'#fff',LN)
  P(f,0,40,-3,60,0,100);fs(f,0,'#d8d8de',1)
  for(let k=0;k<13;k++){const a=PI*(.08+k*.07),x=-cos(a)*13,y=31+sin(a)*10;E(f,x,y,1.6,1.6);fs(f,[RD,BK,'#fff',GR][k%4],LN,.5)}
  // face
  f.beginPath();f.moveTo(-23,-8);f.bezierCurveTo(-23,8,-15,21,0,26);f.bezierCurveTo(15,21,23,8,23,-8);f.arc(0,-8,23,0,PI,true);fs(f,SK,LN)
  E(f,-15,13,4.4,2);fs(f,'rgba(220,90,90,.35)');E(f,15,13,4.4,2);fs(f,'rgba(220,90,90,.35)')
  eye(f,-10,-1,bl,-1);eye(f,10,1,bl,-1)
  P(f,-5,-15,-10,-16.5,-14,-14.5);fs(f,0,LN,1.1);P(f,5,-15,10,-16.5,14,-14.5);fs(f,0,LN,1.1)
  P(f,-.4,13,-1,14,-1.8,15);fs(f,0,SK2,1.2)
  if(laugh){P(f,-6,17.5,0,18,6,17.5,5,25,0,25.4,-5,25,-6,17.5);fs(f,'#5a1a1a',LN,1);P(f,-5.4,18,0,18.6,5.4,18,4.6,20,0,20.2,-4.6,20,-5.4,18);fs(f,'#fff');P(f,-3,23.4,0,21.6,3,23.4,0,25,-3,23.4);fs(f,'#e0707a')}
  else{P(f,-5.5,17.5,0,18,5.5,17.5,4,23,0,23.4,-4,23,-5.5,17.5);fs(f,'#5a1a1a',LN,1);P(f,-4.8,17.9,0,18.4,4.8,17.9,4,19.4,0,19.6,-4,19.4,-4.8,17.9);fs(f,'#fff')}
  // short coily hairline
  f.beginPath();f.arc(0,-6,24.5,PI*1.02,PI*1.98);f.lineTo(23,-10)
  for(let k=0;k<=12;k++){const x=22-k*44/12,y=-14-5*sin(k/12*PI)+(k%2?1.6:-.6);f.lineTo(x,y)}
  f.closePath();fs(f,HR,LN,1.1)
  f.save();f.clip();for(const[x,y]of[[-10,-26],[0,-28],[10,-26],[-4,-22],[6,-22]]){E(f,x,y,2.2,1.3);fs(f,HR2)}f.restore()
  f.restore()
}
export default(c,t,i)=>{
  const F=cc(W*Q,H*Q),f=F.getContext('2d');f.scale(Q,Q)
  const u=H/20
  f.fillStyle=BK;f.fillRect(0,0,W,6*u+.5);f.fillStyle='#fff';f.fillRect(0,6*u,W,8*u);f.fillStyle=RD;f.fillRect(0,7*u,W,6*u);f.fillStyle=GR;f.fillRect(0,14*u,W,6*u)
  f.save();f.translate(W/2,H/2);shield(f);f.restore()
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

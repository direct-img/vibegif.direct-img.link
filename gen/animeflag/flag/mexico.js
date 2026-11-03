// Mexico flag waving on a pole: green, white and red vertical tricolor with the Mexican coat of arms (golden eagle on a prickly pear cactus eating a snake, oak and laurel wreath) centered in the white band, and an anime girl on the green hoist side presenting it with an open palm, long black hair with a pink dahlia flower, green blouse with a flower-embroidered white neckline, gold sparkles, blinking and smiling
import{createCanvas as cc}from'@napi-rs/canvas'
export const frames=16,delay=75,rim=3
const Q=2,X=19,Y=46,W=228,H=130,A=7,L=180,T=Math.PI*2,{sin,cos,pow,abs,PI}=Math
const amp=u=>A*pow(u/W,.8),ph=(u,t)=>T*(u/L-t)
const dy=(u,t)=>amp(u)*sin(ph(u,t))
const LN='#24140f',SK='#efc29c',SK2='#d99c76',HR='#221c26',HR2='#3d3648',IR=['#3a1c0c','#7a4518','#d69a4a']
const E=(f,x,y,rx,ry,r=0)=>(f.beginPath(),f.ellipse(x,y,rx,ry,r,0,T))
const fs=(f,a,b,w)=>{if(a){f.fillStyle=a;f.fill()}if(b){f.strokeStyle=b;f.lineWidth=w||1.2;f.stroke()}}
const P=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=4)f.quadraticCurveTo(p[k],p[k+1],p[k+2],p[k+3])}
const B=(f,...p)=>{f.beginPath();f.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=6)f.bezierCurveTo(...p.slice(k,k+6))}
const V=(f,...p)=>{f.beginPath();for(let k=0;k<p.length;k+=2)f.lineTo(p[k],p[k+1]);f.closePath()}
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
// coat of arms, ~60 units across, centered on the cactus
const arms=f=>{
  const ol='#2a1a10',lw=.7
  f.beginPath();f.arc(0,3,25,-PI*.12,PI*1.12);f.strokeStyle='#5a4a22';f.lineWidth=1.2;f.stroke()
  for(let k=0;k<12;k++){
    const a=PI*(.52+k*.088),x=25*cos(a),y=3+25*sin(a),o=k%2?1.6:-1.6
    E(f,x+o*cos(a),y+o*sin(a),4.4,2.6,a+PI/2+(k%2?.5:-.5));fs(f,k%2?'#2f6b2c':'#3b7d33',ol,lw)
  }
  for(let k=0;k<12;k++){
    const a=PI*(.48-k*.088),x=25*cos(a),y=3+25*sin(a),o=k%2?1.5:-1.5
    E(f,x+o*cos(a),y+o*sin(a),4.8,1.7,a+PI/2+(k%2?-.6:.6));fs(f,'#5a9a3c',ol,lw)
    if(k%3==1){E(f,x-o*cos(a)*.3,y-o*sin(a)*.3,1.2,1.2);fs(f,'#c8202f',ol,.5)}
  }
  V(f,-8,24,-3,24,-3,30,-8,30);fs(f,'#006847',ol,lw);V(f,-3,24,3,24,3,30,-3,30);fs(f,'#fff',ol,lw);V(f,3,24,8,24,8,30,3,30);fs(f,'#ce1126',ol,lw)
  V(f,-6,30,-9,36,-4,33);fs(f,'#006847',ol,lw);V(f,6,30,9,36,4,33);fs(f,'#ce1126',ol,lw)
  E(f,0,20,15,4.2);fs(f,'#3b82c6',ol,lw)
  P(f,-9,19,-6,18,-3,19.5,0,21,3,19.5);P(f,1,21.5,4,20.5,8,21.5);f.strokeStyle='#a8d2f2';f.lineWidth=.8;f.stroke()
  P(f,-7,19,-4,10,0,11,4,10,7,19);fs(f,'#8d6e50',ol,lw)
  // nopal
  for(const[x,y,rx,ry,r]of[[0,8,4.2,6,0],[-8,1,4.4,6.4,-.6],[8,2,4.4,6,.6],[1,-3,5.4,4.6,0]]){E(f,x,y,rx,ry,r);fs(f,'#3f8f3e',ol,lw)}
  for(const[x,y]of[[-11.5,-4.5],[-6.5,-4.5],[11,-3],[6,-6]]){E(f,x,y,1.5,1.9);fs(f,'#d8263a',ol,.5)}
  // eagle facing left, wings raised
  V(f,-2,-15,-8,-28,-15,-37,-11,-36,-12,-40,-7,-35,-6,-39,-3,-32,0,-35,1,-24,4,-17);fs(f,'#4e2b14',ol,lw)
  V(f,2,-12,4,-28,11,-40,14,-37,17,-42,19,-36,23,-39,23,-31,27,-32,26,-25,29,-23,25,-17,15,-7);fs(f,'#7d4a22',ol,lw)
  f.strokeStyle='#4e2b14';f.lineWidth=.8;f.beginPath()
  f.moveTo(7,-21);f.lineTo(14,-33);f.moveTo(10,-15);f.lineTo(20,-26);f.moveTo(14,-10);f.lineTo(23,-19);f.stroke()
  V(f,9,-5,16,4,12,4,13,7,9,4,6,2);fs(f,'#4e2b14',ol,lw)
  E(f,3,-9,7.5,10.5,.45);fs(f,'#6b3a1a',ol,lw)
  P(f,1,-4,1,0,2.5,3);fs(f,0,'#e2a92e',1.6);P(f,-.5,3,2.5,1.5,5,3.5);fs(f,0,'#e2a92e',1.1)
  E(f,-4,-19,5,5.4);fs(f,'#94602c',ol,lw)
  V(f,-8.2,-20.6,-12.8,-19.6,-13.2,-16.6,-11.8,-17.6,-8,-17);fs(f,'#f0b42e',ol,.6)
  E(f,-5.6,-20.4,.9,.9);fs(f,'#111')
  // snake from beak to raised talon
  P(f,-12.5,-17,-15,-14,-12,-11,-9,-8,-13,-6,-17,-4,-15,0);f.strokeStyle=ol;f.lineWidth=3.2;f.stroke();f.strokeStyle='#5f9a32';f.lineWidth=1.9;f.stroke()
  P(f,0,-8,-3,-10,-7,-9);fs(f,0,'#e2a92e',1.8);P(f,-7,-9,-10,-9,-11,-7);fs(f,0,'#e2a92e',1.1)
  E(f,-13,-17.5,1.8,1.3,.3);fs(f,'#5f9a32',ol,.5)
}
const girl=(f,t,i)=>{
  const w=sin(T*t),w2=sin(T*t+1.2),bl=i==6||i==7?2:i==12?1:0
  const bp=()=>P(f,-25,12,-30,-14,-18,-30,-6,-36,6,-34,20,-31,27,-12,28,0,26,14,23,-2,19,-13,17,-6,14,-9,11,-14,8,-18,6,-9,2,-3,0,-12,-3,-18,-6,-12,-9,-10,-12,-15,-15,-17,-18,-8,-21,1,-22,4,-25,12)
  f.save();f.translate(40,66);f.scale(1.06,1.06);f.rotate(.05);f.lineJoin=f.lineCap='round'
  // long black hair behind
  B(f,-4,-34,-30,-32,-34,-4,-31,18,-30,32,-34,46,-32+w2,60,-24,62,-18,56,-16,50,0,52,10,52,16,50,22,56,30,62,36+1.5*w,60,34,52,32,44,34,36,38,26,34,10,30,-6,34,-28,20,-36,-4,-34)
  fs(f,HR,LN)
  f.strokeStyle='#0f0c12';f.lineWidth=.9
  for(const p of[[26,10,30,24,32,40,35+w,56],[-27,12,-28,28,-32,42,-31+w2,56]]){B(f,...p);f.stroke()}
  // neck, blouse with embroidered neckline
  P(f,-7,16,-7,24,-7,33,0,34,7,33,7,24,7,16);fs(f,SK,LN)
  P(f,-7,20,0,22,7,20,7,24,7,27,0,31,-7,27,-7,24,-7,20);fs(f,SK2)
  P(f,-8,30,-18,36,-38,40,-48,46,-50,100,0,100,50,100,48,46,38,40,18,36,8,30,0,40,-8,30);fs(f,'#006847',LN)
  B(f,-15,31,-12,47,12,47,15,31);f.lineTo(9,30);f.bezierCurveTo(8,40,-8,40,-9,30);f.closePath();fs(f,'#fff',LN,1)
    for(let k=0;k<7;k++){const a=PI*(.15+k*.117),x=-cos(a)*12.5,y=33+sin(a)*9.5;E(f,x,y,1.4,1.4);fs(f,['#e8457a','#f2b417','#2f9a4a','#e8457a','#2f9a4a','#f2b417','#e8457a'][k])}
  // arm presenting the emblem, palm up
  P(f,36,44,50,64,56,50);f.strokeStyle=LN;f.lineWidth=11.5;f.stroke();f.strokeStyle='#006847';f.lineWidth=9;f.stroke()
  f.save();f.translate(57,45);f.rotate(-.35)
  B(f,-5,3,-7,-2,-3,-4,1,-3,4,-4,9,-5,11,-3,12,-1,9,1,5,3,2,4,-2,5,-5,3);fs(f,SK,LN,1.1)
  E(f,-1,-4.5,2,3,.6);fs(f,SK,LN,1);P(f,3,-2,6,-2,9,-3);fs(f,0,SK2,.8)
  f.restore()
  // face
  f.beginPath();f.moveTo(-23,-8);f.bezierCurveTo(-23,8,-15,21,0,26);f.bezierCurveTo(15,21,23,8,23,-8);f.arc(0,-8,23,0,PI,true);fs(f,SK,LN)
  f.save();f.clip();f.translate(1,3.5);bp();fs(f,SK2);f.restore()
  E(f,-15,13,4.4,2);fs(f,'rgba(235,90,100,.4)');E(f,15,13,4.4,2);fs(f,'rgba(235,90,100,.4)')
  eye(f,-10,-1,bl,1.6);eye(f,10,1,bl,1.6)
  P(f,.4,13,1,14,1.6,15);fs(f,0,SK2,1.1)
  if(bl==2){P(f,-5,17.5,0,18,5,17.5,4,24,0,24.4,-4,24,-5,17.5);fs(f,'#a8383a',LN,1);P(f,-3,22,0,20.6,3,22,0,24,-3,22);fs(f,'#f0868a')}
  else{P(f,-4.5,18.5,0,22,4.5,18.5);fs(f,0,LN,1.2)}
  // bangs, side locks, shine
  bp();fs(f,HR,LN)
  f.save();f.clip();f.setLineDash([7,2.5]);f.beginPath();f.arc(-2,-4,24,PI*1.12,PI*1.62);f.strokeStyle=HR2;f.lineWidth=3;f.stroke()
  f.beginPath();f.arc(-2,-4,20,PI*1.2,PI*1.45);f.lineWidth=1.6;f.stroke();f.restore()
  B(f,-21,-8,-28,4,-25,22,-29+w,40,-24,32,-19,18,-19,4);f.closePath();fs(f,HR,LN,1.1)
  B(f,21,-8,28,4,25,22,29+w2,40,24,32,19,18,19,4);f.closePath();fs(f,HR,LN,1.1)
  // dahlia
  f.save();f.translate(-19,-24);f.rotate(w*.06)
  for(const[n,r,c]of[[12,8.4,'#d63a6c'],[10,6,'#ec5d8c'],[8,3.8,'#f58fb0']])for(let k=0;k<n;k++){
    const a=k*T/n+r;E(f,cos(a)*r*.62,sin(a)*r*.62,r*.5,r*.24,a);fs(f,c,LN,.6)}
  E(f,0,0,1.8,1.8);fs(f,'#f6c431',LN,.6)
  f.restore()
  f.restore()
}
const spark=(f,x,y,r)=>{if(r<.5)return
  f.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?r*.3:r;f.lineTo(x+cos(a)*q,y+sin(a)*q)}f.closePath();fs(f,'#f6c431','#8a5a10',.8)
  E(f,x,y,r*.22,r*.22);fs(f,'#fff')}
export default(c,t,i)=>{
  const F=cc(W*Q,H*Q),f=F.getContext('2d');f.scale(Q,Q)
  f.fillStyle='#006847';f.fillRect(0,0,W/3+.5,H);f.fillStyle='#fff';f.fillRect(W/3,0,W/3+.5,H);f.fillStyle='#ce1126';f.fillRect(W*2/3,0,W/3,H)
  girl(f,t,i)
  f.save();f.translate(W/2,H/2+3);f.scale(1.02,1.02);arms(f);f.restore()
  for(const[x,y,k]of[[82,18,0],[148,24,1],[150,108,2],[80,104,3]])spark(f,x,y,6*sin(T*t+k*1.6))
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

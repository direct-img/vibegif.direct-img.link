// Germany flag (black, red and gold horizontal bands) rippling on a flagpole, with a confident anime girl personifying Germany printed across the bands: long golden hair with a black-red-gold ribbon, amber eyes, black blazer with a red tie, giving a thumbs up and a wink as her hair sways in the wind
export const frames=16,delay=80,rim=3
const W=236,H=142,X=16,Y=57,P=Math.PI*2,K='#111',RD='#DD0000',GD='#FFCE00'
const sh=(c,f,s=K,w=3.5)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const eye=(c,x,s,o)=>{
  const e=x-s*1.5
  if(o<0){c.beginPath();c.moveTo(x+11*s,4);c.lineTo(x-9*s,10);c.lineTo(x+11*s,16);c.lineWidth=4;c.stroke();return}
  if(o<.3){c.beginPath();c.moveTo(x-11,10);c.quadraticCurveTo(x,16,x+11,10);c.lineWidth=3.5;c.stroke();return}
  c.save();c.beginPath();c.ellipse(x,9,10.5,12.5*o,0,0,P);c.fillStyle='#fff';c.fill();c.clip()
  c.beginPath();c.ellipse(e,10,8.5,11.5,0,0,P);c.fillStyle='#D8901C';c.fill()
  c.beginPath();c.ellipse(e,3,8.5,7,0,0,P);c.fillStyle='#8A4A0C';c.fill()
  c.beginPath();c.ellipse(e,10,3.8,6,0,0,P);c.fillStyle='#3A1A04';c.fill()
  c.beginPath();c.ellipse(e,18,5.5,3,0,0,P);c.fillStyle='#FFD978';c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(e-3.4,4.5,3.2,3.8,-.4,0,P);c.fill()
  c.beginPath();c.arc(e+3.4,14,1.6,0,P);c.fill();c.restore()
  const v=9-12.5*o
  c.beginPath();c.moveTo(x-12*s,v+5);c.quadraticCurveTo(x-2*s,v-3,x+11*s,v+3);c.quadraticCurveTo(x+15*s,v+3,x+17*s,v);c.lineWidth=4.5;c.stroke()
  c.beginPath();c.moveTo(x+11*s,v+3);c.lineTo(x+16*s,v+7);c.lineWidth=2.5;c.stroke()
  c.beginPath();c.moveTo(x-8*s,v-3.5);c.quadraticCurveTo(x+2*s,v-7,x+10*s,v-3);c.lineWidth=1.5;c.stroke()
  c.beginPath();c.moveTo(x+7*s,20);c.lineTo(x+2*s,21);c.lineWidth=2;c.stroke()
}
const bang=c=>{
  c.beginPath();c.moveTo(-48,22);c.bezierCurveTo(-58,-30,-32,-64,0,-64);c.bezierCurveTo(32,-64,58,-30,48,22)
  c.quadraticCurveTo(44,4,40,-6);c.quadraticCurveTo(38,4,30,10);c.quadraticCurveTo(30,-4,26,-12)
  c.quadraticCurveTo(20,-2,14,4);c.quadraticCurveTo(14,-6,12,-14);c.quadraticCurveTo(6,-2,0,6)
  c.quadraticCurveTo(-2,-6,-6,-14);c.quadraticCurveTo(-12,0,-20,6);c.quadraticCurveTo(-20,-4,-24,-12)
  c.quadraticCurveTo(-30,2,-38,8);c.quadraticCurveTo(-38,-2,-42,-6);c.quadraticCurveTo(-46,6,-48,22);c.closePath()
}
const girl=(c,t,i)=>{
  const ph=P*t,bl=i==4?0:i==3||i==5?.5:1,wk=i>=10&&i<=13,HR='#F4C64E',HD='#C98F22',SK='#FFE6D4'
  // flowing back hair
  const w=Math.sin(ph)*5,w2=Math.sin(ph-1.2)*6
  c.beginPath();c.moveTo(0,-66);c.bezierCurveTo(-50,-66,-70,-24,-64,20);c.bezierCurveTo(-60,70,-68,110,-64,160)
  c.lineTo(84+w2,160);c.bezierCurveTo(70+w2,120,82+w,70,66,20);c.bezierCurveTo(70,-24,50,-66,0,-66);c.closePath();sh(c,HD)
  c.beginPath();c.moveTo(60,30);c.bezierCurveTo(74+w,70,64+w2,110,76+w2,150);c.lineWidth=2.5;c.strokeStyle='#9E6C12';c.stroke()
  c.beginPath();c.moveTo(-52,40);c.quadraticCurveTo(-56,90,-52,150);c.lineWidth=2.5;c.strokeStyle='#9E6C12';c.stroke()
  // neck, blazer
  c.beginPath();c.moveTo(-10,30);c.lineTo(-10,60);c.lineTo(10,60);c.lineTo(10,30);sh(c,SK)
  c.beginPath();c.moveTo(-10,40);c.quadraticCurveTo(0,52,10,40);c.lineTo(10,34);c.lineTo(-10,34);c.fillStyle='#F2BCA4';c.fill()
  c.beginPath();c.moveTo(-80,160);c.bezierCurveTo(-80,88,-64,68,-14,58);c.lineTo(14,58);c.bezierCurveTo(64,68,80,88,80,160);sh(c,'#26262B')
  c.beginPath();c.moveTo(-15,57);c.lineTo(0,96);c.lineTo(15,57);sh(c,'#fff',K,3)
  c.beginPath();c.moveTo(-4,64);c.lineTo(4,64);c.lineTo(7,92);c.lineTo(0,100);c.lineTo(-7,92);c.closePath();sh(c,RD,K,2.5)
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*16,57);c.lineTo(s*30,82);c.lineTo(s*22,86);c.lineTo(s*36,120);c.lineTo(s*2,104);c.lineWidth=3;c.strokeStyle=K;c.stroke()}
  c.beginPath();c.moveTo(-50,96);c.lineTo(-34,96);c.lineWidth=3;c.strokeStyle=GD;c.stroke()
  // face
  c.beginPath();c.moveTo(-41,-8);c.bezierCurveTo(-42,16,-30,32,-12,42);c.quadraticCurveTo(0,49,12,42)
  c.bezierCurveTo(30,32,42,16,41,-8);c.bezierCurveTo(41,-44,-41,-44,-41,-8);sh(c,SK)
  c.save();c.clip();c.translate(2,7);bang(c);c.fillStyle='#F7C9B0';c.fill();c.restore()
  c.fillStyle='#FFB5AE';for(const s of[-1,1]){c.beginPath();c.ellipse(s*26,24,7.5,3.8,0,0,P);c.fill()}
  c.strokeStyle='#EE7F80';c.lineWidth=1.5;for(const s of[-1,1])for(let k=-1;k<2;k++){c.beginPath();c.moveTo(s*26+k*4+2,21);c.lineTo(s*26+k*4-1,26);c.stroke()}
  c.strokeStyle=K;eye(c,-18,-1,wk?-1:bl);eye(c,18,1,bl)
  c.beginPath();c.moveTo(1,23);c.lineTo(-1,26);c.lineWidth=2;c.stroke()
  if(wk){c.beginPath();c.moveTo(-8,31);c.quadraticCurveTo(2,34,10,29);c.quadraticCurveTo(4,42,-8,31);sh(c,'#B8323F',K,2.5)}
  else{c.beginPath();c.moveTo(-7,32);c.quadraticCurveTo(0,37,7,32);c.lineWidth=2.5;c.stroke()}
  // bangs, ribbon
  bang(c);sh(c,HR)
  c.save();bang(c);c.clip();c.strokeStyle='#FFF0B8';c.lineWidth=4
  for(let k=-3;k<3;k++){c.beginPath();c.arc(0,10,54,-1.57+k*.22+.03,-1.57+k*.22+.17);c.stroke()}
  c.restore()
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-10);c.bezierCurveTo(s*54,14,s*52,40,s*48,62);c.quadraticCurveTo(s*42,34,s*36,2);sh(c,HR)}
  c.lineWidth=2.5;c.strokeStyle='#8A5A10';for(const s of[-1,1]){c.beginPath();c.moveTo(s*11,-9);c.quadraticCurveTo(s*19,-13,s*28,-9);c.stroke()}
  c.save();c.translate(36,-48);c.rotate(.45)
  for(const q of[-1,1]){c.beginPath();c.moveTo(0,0);c.bezierCurveTo(q*10,-18,q*26,-14,q*24,0);c.bezierCurveTo(q*26,14,q*10,18,0,0);sh(c,RD,K,3)
    c.beginPath();c.moveTo(q*7,-6);c.quadraticCurveTo(q*16,-4,q*19,-9);c.lineWidth=3;c.strokeStyle='#222';c.stroke()
    c.beginPath();c.moveTo(q*7,6);c.quadraticCurveTo(q*16,4,q*19,9);c.strokeStyle=GD;c.stroke()}
  c.beginPath();c.roundRect(-5,-6,10,12,3);sh(c,GD,K,2.5);c.restore()
  if(wk){c.save();c.translate(-44,-8);c.rotate(ph);c.beginPath();for(let k=0;k<8;k++){const r=k%2?2.5:8;c.lineTo(r*Math.cos(k*P/8),r*Math.sin(k*P/8))}c.closePath();sh(c,'#FFF6C0',K,2);c.restore()}
  // thumbs up
  const b=Math.sin(ph*2)*3
  c.save();c.translate(60,56+b);c.rotate(-.1)
  c.beginPath();c.moveTo(-6,26);c.lineTo(-10,46);c.lineWidth=27;c.strokeStyle=K;c.stroke();c.lineWidth=20;c.strokeStyle='#26262B';c.stroke()
  c.beginPath();c.moveTo(-16,26);c.lineTo(4,26);c.lineWidth=5;c.strokeStyle='#fff';c.stroke()
  c.beginPath();c.moveTo(-7,0);c.lineTo(-6,-17);c.lineWidth=19;c.strokeStyle=K;c.stroke();c.lineWidth=12;c.strokeStyle=SK;c.stroke()
  c.beginPath();c.roundRect(-14,-6,26,28,8);sh(c,SK,K,3.5)
  c.beginPath();c.moveTo(-6,-17);c.lineTo(-7,-4);c.lineWidth=12;c.strokeStyle=SK;c.stroke()
  c.lineWidth=2;c.strokeStyle='#C98A74';for(let k=0;k<3;k++){c.beginPath();c.moveTo(-2,2+k*6);c.lineTo(10,2+k*6);c.stroke()}
  c.restore()
}
const art=(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  ;['#000',RD,GD].forEach((f,k)=>{c.fillStyle=f;c.fillRect(X,Y+k*H/3,W,H/3+.5)})
  c.save();c.translate(X+150,Y+68);c.scale(.64,.64);girl(c,t,i);c.restore()
  c.restore();c.strokeStyle=K;c.lineWidth=3;c.strokeRect(X+1.5,Y+1.5,W-3,H-3)
}
export default(c,t,i)=>{
  art(c,t,i)
  const S=256,s=c.getImageData(0,0,S,S).data,o=c.createImageData(S,S),d=o.data
  for(let x=X;x<S;x++){
    const v=(x-X)/W,ph=P*(v*1.3-t),a=7*Math.min(1,v*2.5),dy=a*Math.sin(ph)
    const g=Math.cos(ph)*Math.min(1,v*4),m=Math.round((g<0?1+.16*g:1+.06*g)/.03)*.03
    for(let y=0;y<S;y++){
      const sy=y-dy,y0=Math.floor(sy),f=Math.round((sy-y0)*4)/4,p=(y*S+x)*4
      if(y0<0||y0>=S-1)continue
      const a0=(y0*S+x)*4,a1=a0+S*4,w0=s[a0+3]*(1-f),w1=s[a1+3]*f,al=w0+w1
      if(al<1)continue
      for(let k=0;k<3;k++){let q=(s[a0+k]*w0+s[a1+k]*w1)/al;q=m>1?q+(255-q)*(m-1)*1.5+(m-1)*120:q*m;d[p+k]=q}
      d[p+3]=al
    }
  }
  c.putImageData(o,0,0)
  c.lineWidth=3;c.strokeStyle=K
  c.beginPath();c.roundRect(8,Y-10,8,250-Y+10,3);c.fillStyle='#C9CDD6';c.fill();c.stroke()
  c.beginPath();c.moveTo(13,Y-6);c.lineTo(13,246);c.lineWidth=2;c.strokeStyle='#fff';c.stroke()
  c.beginPath();c.arc(12,Y-14,7,0,P);c.fillStyle='#F2C230';c.fill();c.lineWidth=3;c.strokeStyle=K;c.stroke()
  c.beginPath();c.arc(10,Y-16,2,0,P);c.fillStyle='#fff';c.fill()
}

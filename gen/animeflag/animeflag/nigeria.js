// Nigeria flag (green, white, green vertical bands) rippling on a flagpole, with a joyful anime girl personifying Nigeria printed in the white center band: dark brown skin, two bouncy afro puffs tied with green and white beads, gold hoop earrings, green patterned top, bobbing her head and singing as white music notes float up the green bands
export const frames=16,delay=80,rim=3
const W=236,H=118,X=16,Y=69,P=Math.PI*2,K='#111',G='#008751'
const sh=(c,f,s=K,w=3.5)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const eye=(c,x,s,o)=>{
  const e=x-s*1.5
  if(o<0){c.beginPath();c.moveTo(x-11,12);c.quadraticCurveTo(x,0,x+11,12);c.lineWidth=4;c.stroke();return}
  if(o<.3){c.beginPath();c.moveTo(x-11,10);c.quadraticCurveTo(x,16,x+11,10);c.lineWidth=3.5;c.stroke();return}
  c.save();c.beginPath();c.ellipse(x,9,10.5,12.5*o,0,0,P);c.fillStyle='#fff';c.fill();c.clip()
  c.beginPath();c.ellipse(e,10,8.5,11.5,0,0,P);c.fillStyle='#7A4420';c.fill()
  c.beginPath();c.ellipse(e,3,8.5,7,0,0,P);c.fillStyle='#3E1E0C';c.fill()
  c.beginPath();c.ellipse(e,10,3.8,6,0,0,P);c.fillStyle='#1A0A02';c.fill()
  c.beginPath();c.ellipse(e,18,5.5,3,0,0,P);c.fillStyle='#D9964E';c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(e-3.4,4.5,3.2,3.8,-.4,0,P);c.fill()
  c.beginPath();c.arc(e+3.4,14,1.6,0,P);c.fill();c.restore()
  const v=9-12.5*o
  c.beginPath();c.moveTo(x-12*s,v+5);c.quadraticCurveTo(x-2*s,v-3,x+11*s,v+3);c.quadraticCurveTo(x+15*s,v+3,x+17*s,v);c.lineWidth=4.5;c.stroke()
  c.beginPath();c.moveTo(x+11*s,v+3);c.lineTo(x+16*s,v+7);c.lineWidth=2.5;c.stroke()
  c.beginPath();c.moveTo(x-8*s,v-3.5);c.quadraticCurveTo(x+2*s,v-7,x+10*s,v-3);c.lineWidth=1.5;c.stroke()
  c.beginPath();c.moveTo(x+7*s,20);c.lineTo(x+2*s,21);c.lineWidth=2;c.stroke()
}
const puff=(c,x,y,r,q)=>{
  c.beginPath();for(let k=0;k<=36;k++){const a=k*P/36,b=r*(1+.06*Math.sin(a*9+q));c.lineTo(x+b*Math.cos(a),y+b*Math.sin(a))}
  sh(c,'#1E1512')
  c.strokeStyle='#4A3A33';c.lineWidth=3
  for(let k=0;k<5;k++){const a=-2.6+k*.3;c.beginPath();c.arc(x,y,r*.68,a,a+.18);c.stroke()}
}
const girl=(c,t,i)=>{
  const ph=P*t,bo=Math.abs(Math.sin(ph*2)),hb=-bo*4,bl=i==9?0:i==8||i==10?.5:1,lg=i>=1&&i<=4,SK='#8D5A3B',SD='#6E4128'
  // neck, top
  c.beginPath();c.moveTo(-10,30);c.lineTo(-10,56);c.lineTo(10,56);c.lineTo(10,30);sh(c,SK)
  c.beginPath();c.moveTo(-10,40);c.quadraticCurveTo(0,52,10,40);c.lineTo(10,34);c.lineTo(-10,34);c.fillStyle=SD;c.fill()
  c.save();c.beginPath();c.moveTo(-80,170);c.bezierCurveTo(-80,84,-62,64,-18,54);c.quadraticCurveTo(0,66,18,54);c.bezierCurveTo(62,64,80,84,80,170);sh(c,G);c.clip()
  c.fillStyle='#fff';c.strokeStyle='#F2C230';c.lineWidth=2.5
  for(let r=0;r<4;r++)for(let k=-4;k<5;k++){const x=k*20+(r%2)*10,y=74+r*20;c.beginPath();c.moveTo(x,y-6);c.lineTo(x+6,y);c.lineTo(x,y+6);c.lineTo(x-6,y);c.closePath();c.fill()
    c.beginPath();c.arc(x+10,y+10,2.5,0,P);c.stroke()}
  c.restore()
  c.beginPath();c.moveTo(-18,54);c.quadraticCurveTo(0,66,18,54);c.quadraticCurveTo(0,74,-18,54);sh(c,'#fff',K,3)
  c.save();c.translate(0,hb)
  // puffs
  const sq=1+bo*.05
  puff(c,-40,-50,27*sq,ph);puff(c,40,-50,27*sq,-ph)
  // head
  c.beginPath();c.moveTo(-44,10);c.bezierCurveTo(-52,-40,-28,-58,0,-58);c.bezierCurveTo(28,-58,52,-40,44,10);c.closePath();sh(c,'#1E1512')
  for(const s of[-1,1]){c.beginPath();c.ellipse(s*41,12,6,9,0,0,P);sh(c,SK,K,3)
    c.beginPath();c.arc(s*42,26,6,0,P);c.lineWidth=5;c.strokeStyle=K;c.stroke();c.lineWidth=2.5;c.strokeStyle='#F2C230';c.stroke()}
  c.beginPath();c.moveTo(-41,-8);c.bezierCurveTo(-42,16,-30,32,-12,42);c.quadraticCurveTo(0,49,12,42)
  c.bezierCurveTo(30,32,42,16,41,-8);c.bezierCurveTo(41,-36,26,-44,0,-44);c.bezierCurveTo(-26,-44,-41,-36,-41,-8);sh(c,SK)
  c.beginPath();c.moveTo(-42,-2);c.bezierCurveTo(-38,-30,-14,-34,0,-27);c.bezierCurveTo(14,-34,38,-30,42,-2);c.bezierCurveTo(44,-64,-44,-64,-42,-2);sh(c,"#1E1512",K,3)
  for(const s of[-1,1]){c.beginPath();c.ellipse(s*31,-47,11,6,s*.75,0,P);sh(c,G,K,3)
    c.beginPath();c.arc(s*24,-40,3.5,0,P);sh(c,'#fff',K,2);c.beginPath();c.arc(s*38,-54,3.5,0,P);sh(c,'#fff',K,2)}
      c.fillStyle='#A65848';for(const s of[-1,1]){c.beginPath();c.ellipse(s*26,24,7.5,3.8,0,0,P);c.fill()}
  c.fillStyle='#A06C4A';c.beginPath();c.ellipse(-22,-16,6,2.5,-.2,0,P);c.fill()
  c.strokeStyle=K;c.save();c.translate(0,9);c.scale(1.1,1.1);c.translate(0,-9);eye(c,-18,-1,lg?-1:bl);eye(c,18,1,lg?-1:bl);c.restore()
  c.lineWidth=2;for(const s of[-1,1]){c.beginPath();c.moveTo(s*11,-15);c.quadraticCurveTo(s*19,-21,s*27,-17);c.stroke()}
  c.beginPath();c.moveTo(1,23);c.lineTo(-2,26);c.lineWidth=2;c.stroke()
  const mo=lg?1.5:1.2
  c.beginPath();c.moveTo(-9,30);c.quadraticCurveTo(0,33,9,30);c.quadraticCurveTo(0,30+14*mo,-9,30);sh(c,'#7A1F28',K,2.5)
  c.beginPath();c.moveTo(-6,31.5);c.quadraticCurveTo(0,33.5,6,31.5);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()
  c.beginPath();c.ellipse(0,31+8*mo,4.5,2.6,0,0,P);c.fillStyle='#E0717A';c.fill()
  c.restore()
  // floating music notes
  for(let k=0;k<4;k++){const f=(t+k/4)%1,x=(k%2?1:-1)*(136+(k>1?14:-10))+Math.sin(f*P+k)*10,y=100-f*210,al=1
    c.save();c.translate(x,y);c.scale(al,al);c.rotate(.2*Math.sin(f*P*2))
    c.beginPath();c.ellipse(0,0,9,6.5,-.4,0,P);sh(c,'#fff',K,3.5)
    c.beginPath();c.moveTo(8,-2);c.lineTo(8,-28);c.quadraticCurveTo(12,-18,22,-16);c.lineWidth=9;c.strokeStyle=K;c.stroke();c.lineWidth=4;c.strokeStyle='#fff';c.stroke()
    c.restore()}
}
const art=(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.fillStyle='#fff';c.fillRect(X,Y,W,H);c.fillStyle=G;c.fillRect(X,Y,W/3,H);c.fillRect(X+W*2/3,Y,W/3,H)
  c.save();c.translate(X+W/2,Y+63);c.scale(.62,.62);girl(c,t,i);c.restore()
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
      for(let k=0;k<3;k++){let q=(s[a0+k]*w0+s[a1+k]*w1)/al;q=m>1?q+(255-q)*(m-1)*1.5:q*m;d[p+k]=q}
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

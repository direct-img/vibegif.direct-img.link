// Vietnam flag (red field with a large yellow five-pointed star) rippling on a flagpole, with a gentle anime girl personifying Vietnam printed beside the star: long black hair swaying in the wind, a yellow apricot blossom hairpin, dark eyes, yellow ao dai with a high collar, blinking and smiling as little sparkles twinkle
export const frames=16,delay=80,rim=3
const W=236,H=157,X=16,Y=50,P=Math.PI*2,K='#111',RD='#DA251D',YL='#FFFF00'
const sh=(c,f,s=K,w=3.5)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const q=-Math.PI/2+k*Math.PI/5,s=k%2?r*.382:r;c.lineTo(x+s*Math.cos(q),y+s*Math.sin(q))}c.closePath()}
const eye=(c,x,s,o)=>{
  const e=x-2
  if(o<.3){c.beginPath();c.moveTo(x-11,10);c.quadraticCurveTo(x,16,x+11,10);c.lineWidth=3.5;c.stroke();return}
  c.save();c.beginPath();c.ellipse(x,9,10.5,12.5*o,0,0,P);c.fillStyle='#fff';c.fill();c.clip()
  c.beginPath();c.ellipse(e,9,8.5,11.5,0,0,P);c.fillStyle='#6B3A22';c.fill()
  c.beginPath();c.ellipse(e,2,8.5,7,0,0,P);c.fillStyle='#2E140A';c.fill()
  c.beginPath();c.ellipse(e,9,3.8,6,0,0,P);c.fillStyle='#120602';c.fill()
  c.beginPath();c.ellipse(e,17,5.5,3,0,0,P);c.fillStyle='#C98A55';c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(e-3.4,3.5,3.2,3.8,-.4,0,P);c.fill()
  c.beginPath();c.arc(e+3.4,13,1.6,0,P);c.fill();c.restore()
  const v=9-12.5*o
  c.beginPath();c.moveTo(x-12*s,v+5);c.quadraticCurveTo(x-2*s,v-3,x+11*s,v+3);c.quadraticCurveTo(x+15*s,v+3,x+17*s,v);c.lineWidth=4.5;c.stroke()
  c.beginPath();c.moveTo(x+11*s,v+3);c.lineTo(x+16*s,v+7);c.lineWidth=2.5;c.stroke()
  c.beginPath();c.moveTo(x-8*s,v-3.5);c.quadraticCurveTo(x+2*s,v-7,x+10*s,v-3);c.lineWidth=1.5;c.stroke()
  c.beginPath();c.moveTo(x+7*s,20);c.lineTo(x+2*s,21);c.lineWidth=2;c.stroke()
}
const bang=c=>{
  c.beginPath();c.moveTo(-48,24);c.bezierCurveTo(-58,-30,-32,-64,0,-64);c.bezierCurveTo(32,-64,58,-30,48,24)
  c.quadraticCurveTo(46,4,42,-4);c.quadraticCurveTo(40,6,34,12);c.quadraticCurveTo(32,-2,30,-10)
  c.quadraticCurveTo(22,0,14,4);c.quadraticCurveTo(16,-6,14,-14);c.quadraticCurveTo(4,-4,-6,0)
  c.quadraticCurveTo(-2,-10,-4,-18);c.quadraticCurveTo(-14,-6,-26,-2);c.quadraticCurveTo(-24,-12,-24,-20)
  c.quadraticCurveTo(-34,-6,-40,6);c.quadraticCurveTo(-40,-4,-42,-8);c.quadraticCurveTo(-46,6,-48,24);c.closePath()
}
const girl=(c,t,i)=>{
  const ph=P*t,bl=i==7?0:i==6||i==8?.5:1,HR='#24212B',HL='#5C5670',SK='#FFE4CE'
  // streaming hair
  const w=Math.sin(ph)*6,w2=Math.sin(ph-1.3)*7
  c.beginPath();c.moveTo(0,-66);c.bezierCurveTo(-50,-66,-72,-24,-64,20);c.bezierCurveTo(-74+w,70,-62+w2,110,-80+w2,170)
  c.lineTo(80-w2,170);c.bezierCurveTo(62-w2,110,74-w,70,64,20);c.bezierCurveTo(72,-24,50,-66,0,-66);c.closePath();sh(c,HR)
  c.beginPath();c.moveTo(-58,40);c.bezierCurveTo(-66+w,80,-60+w2,120,-70+w2,160);c.moveTo(58,40);c.bezierCurveTo(66-w,80,60-w2,120,70-w2,160);c.lineWidth=2.5;c.strokeStyle=HL;c.stroke()
  // neck, ao dai
  c.beginPath();c.moveTo(-10,30);c.lineTo(-10,56);c.lineTo(10,56);c.lineTo(10,30);sh(c,SK)
  c.beginPath();c.moveTo(-10,40);c.quadraticCurveTo(0,52,10,40);c.lineTo(10,34);c.lineTo(-10,34);c.fillStyle='#F2BCA4';c.fill()
  c.beginPath();c.moveTo(-68,170);c.bezierCurveTo(-68,90,-56,68,-14,60);c.lineTo(14,60);c.bezierCurveTo(56,68,68,90,68,170);sh(c,'#FFD83A')
  c.beginPath();c.moveTo(-52,100);c.quadraticCurveTo(-50,130,-54,170);c.moveTo(52,100);c.quadraticCurveTo(50,130,54,170);c.lineWidth=2.5;c.strokeStyle='#E0A817';c.stroke()
  c.beginPath();c.moveTo(-15,44);c.lineTo(-15,62);c.quadraticCurveTo(0,68,15,62);c.lineTo(15,44);c.quadraticCurveTo(0,50,-15,44);sh(c,'#FFD83A',K,3)
  c.beginPath();c.moveTo(-15,58);c.quadraticCurveTo(0,64,15,58);c.lineWidth=2.5;c.strokeStyle=RD;c.stroke()
  c.beginPath();c.moveTo(4,64);c.quadraticCurveTo(14,74,40,82);c.lineWidth=3;c.strokeStyle=K;c.stroke()
  c.fillStyle=RD;for(const[x,y]of[[10,70],[22,77],[34,81]]){c.beginPath();c.arc(x,y,2.6,0,P);c.fill()}
  // pattern on ao dai
  c.save();c.translate(-30,118);for(let k=0;k<5;k++){c.rotate(P/5);c.beginPath();c.ellipse(0,-6,4,6,0,0,P);sh(c,'#FFF2A0','#E0A817',2)}c.restore()
  // face
  c.beginPath();c.moveTo(-41,-8);c.bezierCurveTo(-42,16,-30,32,-12,42);c.quadraticCurveTo(0,49,12,42)
  c.bezierCurveTo(30,32,42,16,41,-8);c.bezierCurveTo(41,-44,-41,-44,-41,-8);sh(c,SK)
  c.save();c.clip();c.translate(2,7);bang(c);c.fillStyle='#F7C9B0';c.fill();c.restore()
  c.fillStyle='#FFB5AE';for(const s of[-1,1]){c.beginPath();c.ellipse(s*26,24,7.5,3.8,0,0,P);c.fill()}
  c.strokeStyle='#EE7F80';c.lineWidth=1.5;for(const s of[-1,1])for(let k=-1;k<2;k++){c.beginPath();c.moveTo(s*26+k*4+2,21);c.lineTo(s*26+k*4-1,26);c.stroke()}
  c.strokeStyle=K;eye(c,-18,-1,bl);eye(c,18,1,bl)
  c.beginPath();c.moveTo(1,23);c.lineTo(-1,26);c.lineWidth=2;c.stroke()
  c.beginPath();c.moveTo(-8,30);c.quadraticCurveTo(0,33,8,30);c.quadraticCurveTo(0,42,-8,30);sh(c,'#B8323F',K,2.5)
  c.beginPath();c.ellipse(0,37,4,2.2,0,0,P);c.fillStyle='#FF8A8F';c.fill()
  // bangs, hairpin
  bang(c);sh(c,HR)
  c.save();bang(c);c.clip();c.strokeStyle=HL;c.lineWidth=4
  for(let k=-3;k<3;k++){c.beginPath();c.arc(0,10,54,-1.57+k*.22+.03,-1.57+k*.22+.17);c.stroke()}
  c.restore()
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-10);c.bezierCurveTo(s*54,14,s*52,40,s*48,66);c.quadraticCurveTo(s*42,34,s*36,2);sh(c,HR)}
  c.lineWidth=2.5;c.strokeStyle='#120F16';for(const s of[-1,1]){c.beginPath();c.moveTo(s*11,-11);c.quadraticCurveTo(s*19,-15,s*28,-11);c.stroke()}
  c.save();c.translate(-36,-40);c.rotate(ph/5)
  for(let k=0;k<5;k++){c.rotate(P/5);c.beginPath();c.arc(0,-8,6.5,0,P);sh(c,'#FFE14A',K,2.5)}
  c.beginPath();c.arc(0,0,4.5,0,P);sh(c,'#F08A1C',K,2);c.restore()
  // sparkles
  for(let k=0;k<3;k++){const f=(t*2+k/3)%1,z=Math.sin(f*Math.PI)*11,[x,y]=[[-62,-58],[58,-64],[-74,50]][k]
    if(z<.5)continue;c.beginPath();for(let q=0;q<8;q++){const r=q%2?z*.3:z;c.lineTo(x+r*Math.cos(q*P/8),y+r*Math.sin(q*P/8))}c.closePath();sh(c,YL,K,2)}
}
const art=(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip();c.fillStyle=RD;c.fillRect(X,Y,W,H)
  c.save();c.translate(X+195,Y+72);c.scale(.6,.6);girl(c,t,i);c.restore()
  star(c,X+W/2,Y+H/2,H*.3);c.fillStyle=YL;c.fill()
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

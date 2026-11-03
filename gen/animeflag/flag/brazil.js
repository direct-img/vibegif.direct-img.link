// Brazil flag (green field, yellow rhombus, blue starry globe with the white ORDEM E PROGRESSO band) rippling on a flagpole, with a sunny anime girl personifying Brazil printed beside the globe: long wavy dark brown hair with yellow ipe blossoms, green eyes, white blouse with a blue sailor collar and a green and yellow sash, swaying her head and laughing
export const frames=16,delay=80,rim=3
const W=236,H=165,X=16,Y=46,P=Math.PI*2,K='#111',G='#009440',YL='#FFCB00',BL='#302681',u=W/4200
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const q=-Math.PI/2+k*Math.PI/5,s=k%2?r*.4:r;c.lineTo(x+s*Math.cos(q),y+s*Math.sin(q))}c.closePath()}
const sh=(c,f,s=K,w=3.5)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const ST=[[-600,-132,1],[-535,177,1],[-625,243,2],[-463,132,4],[-382,250,2],[-404,323,3],[228,-228,1],[515,258,1],[617,265,3],[545,323,2],[368,477,2],[367,551,3],[441,419,3],[500,382,2],[365,405,3],[-280,30,2],[200,-37,3],[0,330,1],[85,184,2],[0,118,2],[-74,184,3],[-37,235,4],[220,495,2],[283,430,3],[162,412,3],[-295,390,1],[0,575,5]]
const SR=[0,31.5,26.25,21,15,10.5],TX='ORDEM E PROGRESSO',TA=[-7,-4,-1,2,5,0,9.75,0,14.5,17.5,20.5,23.5,26.5,29.5,32.5,35.5,38.5]
const eye=(c,x,s,o)=>{
  const e=x-s*1.5
  if(o<0){c.beginPath();c.moveTo(x-11,12);c.quadraticCurveTo(x,0,x+11,12);c.lineWidth=4;c.stroke();return}
  if(o<.3){c.beginPath();c.moveTo(x-11,10);c.quadraticCurveTo(x,16,x+11,10);c.lineWidth=3.5;c.stroke();return}
  c.save();c.beginPath();c.ellipse(x,9,10.5,12.5*o,0,0,P);c.fillStyle='#fff';c.fill();c.clip()
  c.beginPath();c.ellipse(e,10,8.5,11.5,0,0,P);c.fillStyle='#1E9E52';c.fill()
  c.beginPath();c.ellipse(e,3,8.5,7,0,0,P);c.fillStyle='#0C5A2C';c.fill()
  c.beginPath();c.ellipse(e,10,3.8,6,0,0,P);c.fillStyle='#062A15';c.fill()
  c.beginPath();c.ellipse(e,18,5.5,3,0,0,P);c.fillStyle='#9BE8B0';c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(e-3.4,4.5,3.2,3.8,-.4,0,P);c.fill()
  c.beginPath();c.arc(e+3.4,14,1.6,0,P);c.fill();c.restore()
  const v=9-12.5*o
  c.beginPath();c.moveTo(x-12*s,v+5);c.quadraticCurveTo(x-2*s,v-3,x+11*s,v+3);c.quadraticCurveTo(x+15*s,v+3,x+17*s,v);c.lineWidth=4.5;c.stroke()
  c.beginPath();c.moveTo(x+11*s,v+3);c.lineTo(x+16*s,v+7);c.lineWidth=2.5;c.stroke()
  c.beginPath();c.moveTo(x-8*s,v-3.5);c.quadraticCurveTo(x+2*s,v-7,x+10*s,v-3);c.lineWidth=1.5;c.stroke()
  c.beginPath();c.moveTo(x+7*s,20);c.lineTo(x+2*s,21);c.lineWidth=2;c.stroke()
}
const bang=c=>{
  c.beginPath();c.moveTo(-50,20);c.bezierCurveTo(-60,-30,-32,-64,2,-64);c.bezierCurveTo(36,-64,60,-30,50,20)
  c.quadraticCurveTo(46,0,40,-8);c.quadraticCurveTo(40,4,32,10);c.quadraticCurveTo(32,-4,26,-14)
  c.quadraticCurveTo(22,0,10,6);c.quadraticCurveTo(14,-6,10,-18);c.quadraticCurveTo(2,-2,-8,4)
  c.quadraticCurveTo(-6,-8,-10,-16);c.quadraticCurveTo(-16,-2,-26,4);c.quadraticCurveTo(-24,-6,-28,-12)
  c.quadraticCurveTo(-34,2,-42,8);c.quadraticCurveTo(-40,-2,-44,-4);c.quadraticCurveTo(-48,6,-50,20);c.closePath()
}
const wavy=(c,ph)=>{
  c.beginPath();c.moveTo(0,-66);c.bezierCurveTo(-50,-66,-74,-20,-66,24)
  for(let k=0;k<4;k++){const y=24+k*26,w=Math.sin(ph+k*1.3)*3;c.quadraticCurveTo(-80-w,y+13,-68-w,y+26)}
  c.lineTo(68,128);for(let k=3;k>=0;k--){const y=24+k*26,w=Math.sin(ph+1+k*1.3)*3;c.quadraticCurveTo(80+w,y+13,66+w*(k>0),y)}
  c.bezierCurveTo(74,-20,50,-66,0,-66);c.closePath()
}
const flower=(c,x,y,r,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.beginPath()
  for(let k=0;k<5;k++){const q=k*P/5;c.ellipse(Math.cos(q)*r*.55,Math.sin(q)*r*.55,r*.55,r*.38,q,0,P)}
  sh(c,'#FFD21C',K,2.5);c.beginPath();c.arc(0,0,r*.3,0,P);c.fillStyle='#E8821C';c.fill();c.restore()
}
const girl=(c,t,i)=>{
  const sw=Math.sin(P*t),tl=.09*sw,bl=i>=12?-1:i==6?0:i==5||i==7?.5:1,HR='#5A3320',HD='#38200F',SK='#EDB78E'
  // long wavy back hair
  c.save();c.translate(0,40);c.rotate(tl);c.translate(0,-40)
  wavy(c,P*t);sh(c,HD)
  c.beginPath();c.moveTo(-50,60);c.quadraticCurveTo(-58,90,-52,128);c.moveTo(50,60);c.quadraticCurveTo(58,90,52,128);c.lineWidth=2.5;c.strokeStyle='#24140A';c.stroke()
  c.restore()
  // neck, blouse
  c.beginPath();c.moveTo(-10,30);c.lineTo(-10,60);c.lineTo(10,60);c.lineTo(10,30);sh(c,SK)
  c.beginPath();c.moveTo(-10,40);c.quadraticCurveTo(0,52,10,40);c.lineTo(10,34);c.lineTo(-10,34);c.fillStyle='#D39468';c.fill()
  c.beginPath();c.moveTo(-72,170);c.bezierCurveTo(-72,90,-60,70,-14,58);c.quadraticCurveTo(0,70,14,58);c.bezierCurveTo(60,70,72,90,72,170);sh(c,'#fff')
  c.beginPath();c.moveTo(-66,112);c.quadraticCurveTo(0,124,66,112);c.lineTo(68,128);c.quadraticCurveTo(0,140,-68,128);c.closePath();sh(c,G,K,3)
  c.beginPath();c.moveTo(-66,120);c.quadraticCurveTo(0,132,66,120);c.lineWidth=2.5;c.strokeStyle=YL;c.stroke()
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*14,58);c.quadraticCurveTo(s*40,62,s*44,76);c.quadraticCurveTo(s*24,86,s*4,74);c.closePath();sh(c,BL,K,3)}
  c.beginPath();c.moveTo(0,74);c.lineTo(-10,100);c.lineTo(-2,98);c.lineTo(0,104);c.lineTo(2,98);c.lineTo(10,100);c.closePath();sh(c,BL,K,3)
  star(c,0,76,6);sh(c,'#fff',K,2)
  // head
  c.save();c.translate(0,40);c.rotate(tl);c.translate(0,-40)
  c.beginPath();c.moveTo(-41,-8);c.bezierCurveTo(-42,16,-30,32,-12,42);c.quadraticCurveTo(0,49,12,42)
  c.bezierCurveTo(30,32,42,16,41,-8);c.bezierCurveTo(41,-44,-41,-44,-41,-8);sh(c,SK)
  c.save();c.clip();c.translate(2,7);bang(c);c.fillStyle='#D69A70';c.fill();c.restore()
  c.fillStyle='#F2967E';for(const s of[-1,1]){c.beginPath();c.ellipse(s*26,24,7.5,3.8,0,0,P);c.fill()}
  c.strokeStyle='#D9665A';c.lineWidth=1.5;for(const s of[-1,1])for(let k=-1;k<2;k++){c.beginPath();c.moveTo(s*26+k*4+2,21);c.lineTo(s*26+k*4-1,26);c.stroke()}
  c.strokeStyle=K;eye(c,-18,-1,bl);eye(c,18,1,bl)
  c.beginPath();c.moveTo(1,23);c.lineTo(-1,26);c.lineWidth=2;c.stroke()
  const mo=bl<0?1.4:1
  c.beginPath();c.moveTo(-9,30);c.quadraticCurveTo(0,33,9,30);c.quadraticCurveTo(0,30+14*mo,-9,30);sh(c,'#A82E3A',K,2.5)
  c.beginPath();c.ellipse(0,31+8*mo,4.5,2.6,0,0,P);c.fillStyle='#FF8A8F';c.fill()
  bang(c);sh(c,HR)
  c.save();bang(c);c.clip();c.strokeStyle='#8A5A3A';c.lineWidth=4
  for(let k=-3;k<3;k++){c.beginPath();c.arc(0,10,54,-1.57+k*.22+.03,-1.57+k*.22+.17);c.stroke()}
  c.restore()
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*48,-10);c.bezierCurveTo(s*58,14,s*50,34,s*56,56);c.quadraticCurveTo(s*44,44,s*44,30);c.quadraticCurveTo(s*40,14,s*38,0);sh(c,HR)}
  c.lineWidth=2.5;c.strokeStyle='#2A160A';for(const s of[-1,1]){c.beginPath();c.moveTo(s*11,-9);c.quadraticCurveTo(s*19,-13,s*28,-9);c.stroke()}
  flower(c,-44,-34,13,.3);flower(c,-30,-50,11,1.1);flower(c,-56,-18,9,2)
  c.beginPath();c.ellipse(-48,-50,6,3,-.6,0,P);sh(c,'#3BA55C',K,2.5)
  c.restore()
}
const art=(c,t,i)=>{
  const cx=X+W/2,cy=Y+H/2
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip();c.fillStyle=G;c.fillRect(X,Y,W,H)
  c.save();c.translate(cx,cy);c.scale(u,u)
  c.beginPath();c.moveTo(-1743,0);c.lineTo(0,1113);c.lineTo(1743,0);c.lineTo(0,-1113);c.closePath();c.fillStyle=YL;c.fill()
  c.restore()
  c.save();c.translate(X+184,Y+66);c.scale(.6,.6);girl(c,t,i);c.restore()
  c.save();c.translate(cx,cy);c.scale(u,u)
  c.beginPath();c.arc(0,0,735,0,P);c.fillStyle=BL;c.fill();c.lineWidth=36;c.strokeStyle=K;c.stroke();c.clip()
  c.beginPath();c.arc(-420,1470,1785,0,P);c.arc(-420,1470,1680,0,P,true);c.fillStyle='#fff';c.fill()
  c.fillStyle=G;c.font='bold 92px DejaVu Sans';c.textAlign='center'
  for(let k=0;k<TX.length;k++)if(TX[k]!=' '){c.save();c.translate(-420,1470);c.rotate(TA[k]*Math.PI/180);c.fillText(TX[k],0,-1700);c.restore()}
  c.fillStyle='#fff';for(const[x,y,r]of ST){star(c,x,y,SR[r]*1.25);c.fill()}
  c.restore();c.restore();c.strokeStyle=K;c.lineWidth=3;c.strokeRect(X+1.5,Y+1.5,W-3,H-3)
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

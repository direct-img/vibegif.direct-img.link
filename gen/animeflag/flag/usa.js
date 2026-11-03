// United States flag (13 red and white stripes, blue canton with 50 white stars) rippling on a flagpole, with a cheerful anime girl personifying the USA printed in the stripes: auburn ponytail with a white star clip, blue eyes, navy jacket, blinking and waving hello
export const frames=16,delay=80,rim=3
const W=236,H=124,X=16,Y=52,P=Math.PI*2,R='#B22234',B='#3C3B6E',K='#111'
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const q=-Math.PI/2+k*Math.PI/5,s=k%2?r*.4:r;c.lineTo(x+s*Math.cos(q),y+s*Math.sin(q))}c.closePath()}
const sh=(c,f,s=K,w=3.5)=>{c.fillStyle=f;c.fill();c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const eye=(c,x,s,o)=>{
  const e=x-s*1.5
  if(o<.3){c.beginPath();c.moveTo(x-11,10);c.quadraticCurveTo(x,16,x+11,10);c.lineWidth=3.5;c.stroke();return}
  c.save();c.beginPath();c.ellipse(x,9,10.5,12.5*o,0,0,P);c.fillStyle='#fff';c.fill();c.clip()
  c.beginPath();c.ellipse(e,10,8.5,11.5,0,0,P);c.fillStyle='#3E86E0';c.fill()
  c.beginPath();c.ellipse(e,3,8.5,7,0,0,P);c.fillStyle='#1D4C9C';c.fill()
  c.beginPath();c.ellipse(e,10,3.8,6,0,0,P);c.fillStyle='#0B1F45';c.fill()
  c.beginPath();c.ellipse(e,18,5.5,3,0,0,P);c.fillStyle='#9CD0FF';c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(e-3.4,4.5,3.2,3.8,-.4,0,P);c.fill()
  c.beginPath();c.arc(e+3.4,14,1.6,0,P);c.fill();c.restore()
  const u=9-12.5*o
  c.beginPath();c.moveTo(x-12*s,u+5);c.quadraticCurveTo(x-2*s,u-3,x+11*s,u+3);c.quadraticCurveTo(x+15*s,u+3,x+17*s,u);c.lineWidth=4.5;c.stroke()
  c.beginPath();c.moveTo(x+11*s,u+3);c.lineTo(x+16*s,u+7);c.lineWidth=2.5;c.stroke()
  c.beginPath();c.moveTo(x-8*s,u-3.5);c.quadraticCurveTo(x+2*s,u-7,x+10*s,u-3);c.lineWidth=1.5;c.stroke()
  c.beginPath();c.moveTo(x+7*s,20);c.lineTo(x+2*s,21);c.lineWidth=2;c.stroke()
}
const cap=(c,a,b,w,f)=>{c.beginPath();c.moveTo(...a);c.lineTo(...b);c.lineWidth=w+7;c.strokeStyle=K;c.stroke();c.lineWidth=w;c.strokeStyle=f;c.stroke()}
const bang=c=>{
  c.beginPath();c.moveTo(-48,18);c.bezierCurveTo(-58,-30,-32,-62,0,-62);c.bezierCurveTo(32,-62,58,-30,48,18)
  c.quadraticCurveTo(44,-2,38,-10);c.quadraticCurveTo(38,0,32,8);c.quadraticCurveTo(30,-6,24,-16)
  c.quadraticCurveTo(22,-2,12,6);c.quadraticCurveTo(14,-8,8,-20);c.quadraticCurveTo(4,-4,-6,6)
  c.quadraticCurveTo(-6,-8,-10,-18);c.quadraticCurveTo(-14,-4,-24,4);c.quadraticCurveTo(-22,-8,-26,-14)
  c.quadraticCurveTo(-32,0,-40,8);c.quadraticCurveTo(-38,-2,-42,-6);c.quadraticCurveTo(-46,4,-48,18);c.closePath()
}
const girl=(c,t,i)=>{
  const sw=Math.sin(P*t),bl=i==11?0:i==10||i==12?.5:1,wv=Math.sin(P*t*2),HR='#B5562F',HD='#8A3A1E'
  // ponytail
  c.save();c.translate(-30,-48);c.scale(-.85,.85);c.rotate(.12*sw)
  c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(36,-24,74,10,62,62);c.quadraticCurveTo(56,92,38,112)
  c.quadraticCurveTo(46,84,32,62);c.quadraticCurveTo(24,32,4,16);c.closePath();sh(c,HR)
  c.beginPath();c.moveTo(22,2);c.bezierCurveTo(46,8,58,34,50,66);c.lineWidth=3;c.strokeStyle=HD;c.stroke()
  c.beginPath();c.moveTo(36,4);c.bezierCurveTo(56,14,62,30,60,44);c.lineWidth=4;c.strokeStyle='#E08257';c.stroke()
  c.restore()
  // back hair
  c.beginPath();c.moveTo(-50,40);c.bezierCurveTo(-64,-10,-44,-62,0,-62);c.bezierCurveTo(44,-62,64,-10,50,40)
  c.quadraticCurveTo(30,30,0,30);c.quadraticCurveTo(-30,30,-50,40);sh(c,HD)
  // neck, jacket
  c.beginPath();c.moveTo(-10,30);c.lineTo(-10,60);c.lineTo(10,60);c.lineTo(10,30);sh(c,'#FFE3D1')
  c.beginPath();c.moveTo(-10,40);c.quadraticCurveTo(0,52,10,40);c.lineTo(10,34);c.lineTo(-10,34);c.fillStyle='#F2B8A0';c.fill()
  c.beginPath();c.moveTo(-84,150);c.bezierCurveTo(-82,86,-66,68,-16,58);c.lineTo(16,58);c.bezierCurveTo(66,68,82,86,84,150);sh(c,B)
  c.beginPath();c.moveTo(-17,58);c.lineTo(0,88);c.lineTo(17,58);sh(c,'#fff')
  c.beginPath();c.moveTo(-23,56);c.lineTo(0,98);c.lineTo(23,56);c.lineTo(16,58);c.lineTo(0,88);c.lineTo(-16,58);c.closePath();sh(c,'#fff',K,3)
  c.beginPath();c.moveTo(-20,57);c.lineTo(0,93);c.lineTo(20,57);c.lineWidth=2.5;c.strokeStyle=R;c.stroke()
  star(c,-44,100,11);sh(c,'#fff',K,2.5)
  c.beginPath();c.moveTo(-58,80);c.quadraticCurveTo(-56,110,-58,150);c.lineWidth=2.5;c.strokeStyle='#23224A';c.stroke()
  // face
  c.beginPath();c.moveTo(-41,-8);c.bezierCurveTo(-42,16,-30,32,-12,42);c.quadraticCurveTo(0,49,12,42)
  c.bezierCurveTo(30,32,42,16,41,-8);c.bezierCurveTo(41,-44,-41,-44,-41,-8);sh(c,'#FFE3D1')
  c.save();c.clip();c.translate(2,7);bang(c);c.fillStyle='#F4BFA8';c.fill();c.restore()
  c.fillStyle='#FFB8B2';for(const s of[-1,1]){c.beginPath();c.ellipse(s*26,24,7.5,3.8,0,0,P);c.fill()}
  c.strokeStyle='#EE7F80';c.lineWidth=1.5;for(const s of[-1,1])for(let k=-1;k<2;k++){c.beginPath();c.moveTo(s*26+k*4+2,21);c.lineTo(s*26+k*4-1,26);c.stroke()}
  c.strokeStyle=K;eye(c,-18,-1,bl);eye(c,18,1,bl)
  c.beginPath();c.moveTo(1,23);c.lineTo(-1,26);c.lineWidth=2;c.stroke()
  c.beginPath();c.moveTo(-8,31);c.quadraticCurveTo(0,34,8,31);c.quadraticCurveTo(0,45,-8,31);sh(c,'#B8323F',K,2.5)
  c.beginPath();c.ellipse(0,38,4,2.4,0,0,P);c.fillStyle='#FF8A8F';c.fill()
  // bangs
  bang(c);sh(c,HR)
  c.save();bang(c);c.clip();c.strokeStyle='#E5875A';c.lineWidth=4
  for(let k=-3;k<3;k++){c.beginPath();c.arc(0,10,52,-1.57+k*.22+.03,-1.57+k*.22+.17);c.stroke()}
  c.restore()
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*46,-8);c.bezierCurveTo(s*54,14,s*52,36,s*46,54);c.quadraticCurveTo(s*42,28,s*36,2);sh(c,HR)}
  c.lineWidth=2.5;c.strokeStyle='#5A2412';for(const s of[-1,1]){c.beginPath();c.moveTo(s*11,-9);c.quadraticCurveTo(s*19,-13,s*28,-9);c.stroke()}
  star(c,-36,-42,11);sh(c,'#fff',K,3)
  // waving hand
  cap(c,[54,76],[84,54],22,B);c.save();c.translate(84,54);c.rotate(.22*wv)
  cap(c,[0,0],[2,-44],20,B);cap(c,[-9,-40],[13,-40],5,'#fff');c.translate(2,-54)
  const F=[[-9,-6,-12,-24],[-3,-8,-4,-29],[3,-8,4,-29],[9,-6,11,-24],[-8,4,-19,-6]]
  for(const g of[K,'#FFE3D1']){const e=g==K?7:0;c.fillStyle=c.strokeStyle=g
    for(const[a,b,x,y]of F){c.beginPath();c.moveTo(a,b);c.lineTo(x,y);c.lineWidth=7+e;c.stroke()}
    c.beginPath();c.ellipse(0,-2,11+e/2,11+e/2,0,0,P);c.fill()}
  c.beginPath();c.moveTo(-4,-8);c.lineTo(-4,-16);c.moveTo(3,-8);c.lineTo(3,-16);c.lineWidth=1.5;c.strokeStyle='#D79A84';c.stroke()
  c.restore()
}
const art=(c,t,i)=>{
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  for(let k=0;k<13;k++){c.fillStyle=k%2?'#fff':R;c.fillRect(X,Y+k*H/13,W,H/13+.5)}
  c.save();c.translate(X+150,Y+64);c.scale(.63,.63);girl(c,t,i);c.restore()
  const cw=W*.4,ch=H*7/13;c.fillStyle=B;c.fillRect(X,Y,cw,ch);c.fillStyle='#fff'
  for(let r=0;r<9;r++)for(let k=0;k<(r%2?5:6);k++){star(c,X+cw/12*(1+2*k+r%2),Y+ch/10*(1+r),3.5);c.fill()}
  c.restore();c.strokeStyle=K;c.lineWidth=3;c.strokeRect(X+1.5,Y+1.5,W-3,H-3)
}
export default(c,t,i)=>{
  art(c,t,i)
  const S=256,s=c.getImageData(0,0,S,S).data,o=c.createImageData(S,S),d=o.data
  for(let x=X;x<S;x++){
    const u=(x-X)/W,ph=P*(u*1.3-t),a=7*Math.min(1,u*2.5),dy=a*Math.sin(ph)
    const g=Math.cos(ph)*Math.min(1,u*4),m=Math.round((g<0?1+.16*g:1+.06*g)/.03)*.03
    for(let y=0;y<S;y++){
      const sy=y-dy,y0=Math.floor(sy),f=Math.round((sy-y0)*4)/4,p=(y*S+x)*4
      if(y0<0||y0>=S-1)continue
      const a0=(y0*S+x)*4,a1=a0+S*4,w0=s[a0+3]*(1-f),w1=s[a1+3]*f,al=w0+w1
      if(al<1)continue
      for(let k=0;k<3;k++){let v=(s[a0+k]*w0+s[a1+k]*w1)/al;v=m>1?v+(255-v)*(m-1)*1.5:v*m;d[p+k]=v}
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

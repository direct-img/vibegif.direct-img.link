// pink elephant in a little red fez marching in place, rainbow-striped trunk raised, wavy psychedelic rings rippling over its body and flapping ear
import{createCanvas}from'@napi-rs/canvas'
const P=Math.PI*2,hex=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16))
const A=['#ff6ec7','#ffb0de','#ff3d9a','#b47cff','#ff6ec7','#ffd166'].map(hex)
const B=['#ffd166','#ff9e5e','#ff3d9a','#b47cff','#5ec8ff','#7ef0a0'].map(hex)
const pal=[...A,...B,...['#d9579e','#ffffff','#111111','#e8433a'].map(hex)]
export const frames=20,delay=75
// full-canvas ring pattern (2x res) around cx,cy
const pat=(cx,cy,C,k,dir,t)=>{
  const v=createCanvas(512,512),x=v.getContext('2d'),I=x.createImageData(512,512),d=I.data
  for(let y=0;y<512;y++)for(let X=0;X<512;X++){
    const dx=X/2-cx,dy=y/2-cy,b=((Math.floor(Math.hypot(dx,dy)/k+1.1*Math.sin(3*Math.atan2(dy,dx)+P*t)+dir*t*6)%6)+6)%6,c=C[b],i=(y*512+X)*4
    d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2];d[i+3]=255
  }
  x.putImageData(I,0,0);return v
}
export default(o,t)=>{
  const g=createCanvas(512,512).getContext('2d'),s=Math.sin(P*t),c=Math.cos(P*t)
  const bob=-3*Math.abs(s),L1=Math.max(0,s)*20,L2=Math.max(0,-s)*20,gy=228-bob
  const pA=pat(108,138+bob,A,11,-1,t),pB=pat(150,108+bob,B,7,1,t)
  g.scale(2,2);g.lineJoin=g.lineCap='round';g.lineWidth=5;g.strokeStyle='#111';g.translate(0,bob)
  const fp=(path,v)=>{
    g.save();path();g.clip();g.save();g.setTransform(1,0,0,1,0,0);g.drawImage(v,0,0);g.restore();g.restore()
    path();g.stroke()
  }
  const fs=(path,col)=>{path();g.fillStyle=col;g.fill();g.stroke()}
  const leg=(x,L)=>()=>{
    const b=gy-L,m=L*.55
    g.beginPath();g.moveTo(x-17,120);g.lineTo(x+17,120);g.quadraticCurveTo(x+14+m*.5,(120+b)/2,x+18+m,b-9)
    g.quadraticCurveTo(x+18+m,b,x+9+m,b);g.lineTo(x-9+m,b);g.quadraticCurveTo(x-18+m,b,x-18+m,b-9)
    g.quadraticCurveTo(x-14+m*.5,(120+b)/2,x-17,120);g.closePath()
  }
  const toes=(x,L)=>{
    g.fillStyle='#fff';g.lineWidth=2.5
    for(const k of[-8,0,8]){g.beginPath();g.ellipse(x+k+L*.55,gy-L-2,3.5,3,0,P/2,P);g.closePath();g.fill();g.stroke()}
    g.lineWidth=5
  }
  // tail
  g.lineWidth=4;g.beginPath();g.moveTo(42,128);g.quadraticCurveTo(26,136+4*s,24+5*s,156);g.stroke()
  g.beginPath();g.ellipse(24+5*s,158,4,7,.3*s,0,P);g.fillStyle='#111';g.fill();g.lineWidth=5
  // far legs
  fs(leg(90,L1),'#d9579e');toes(90,L1);fs(leg(164,L2),'#d9579e');toes(164,L2)
  // near legs, then the body over their tops
  fp(leg(64,L2),pA);toes(64,L2)
  fp(leg(140,L1),pA);toes(140,L1)
  fp(()=>{g.beginPath();g.ellipse(108,136,72,54,0,0,P)},pA)
  // head group nods with the step
  g.save();g.translate(160,128);g.rotate(.06*s);g.translate(-160,-128)
  // head
  fp(()=>{g.beginPath();g.arc(180,102,42,0,P)},pA)
  // trunk raised, rings of color travelling up it
  const T=[[200,118],[238,150],[250+3*c,96],[226+6*s,48+3*c]],N=44
  const bz=f=>T[0].map((_,k)=>(1-f)**3*T[0][k]+3*(1-f)**2*f*T[1][k]+3*(1-f)*f*f*T[2][k]+f**3*T[3][k])
  const tp=[...Array(N)].map((_,i)=>[...bz(i/(N-1)),15-8*i/(N-1)])
  g.fillStyle='#111';tp.forEach(([x,y,r],i)=>{if(i>3){g.beginPath();g.arc(x,y,r+2.5,0,P);g.fill()}})
  tp.forEach(([x,y,r],i)=>{g.beginPath();g.arc(x,y,r,0,P);g.fillStyle=`rgb(${B[((Math.floor(i/5-t*6)%6)+6)%6]})`;g.fill()})
  const[ex,ey]=tp[N-1];g.beginPath();g.ellipse(ex,ey,6,3,.4*s,0,P);g.fillStyle='#111';g.fill()
  // ear flapping
  const f=1-.16*(1+Math.sin(P*t*2))/2
  fp(()=>{
    g.beginPath();g.moveTo(170,72)
    g.bezierCurveTo(170-48*f,58,170-62*f,128,170-30*f,146)
    g.bezierCurveTo(170-14*f,154,172,140,172,126);g.closePath()
  },pB)
  // tusk, eye
  g.lineWidth=3.5;g.fillStyle='#fff'
  g.beginPath();g.moveTo(196,126);g.quadraticCurveTo(206,142,220,138);g.quadraticCurveTo(210,132,204,122);g.closePath();g.fill();g.stroke()
  g.beginPath();g.ellipse(198,90,9,11,0,0,P);g.fill();g.stroke()
  g.beginPath();g.arc(200,92,5.5,0,P);g.fillStyle='#111';g.fill()
  g.beginPath();g.arc(202,89,2,0,P);g.fillStyle='#fff';g.fill()
  g.lineWidth=4;g.beginPath();g.moveTo(186,76);g.quadraticCurveTo(196,70,208,76);g.stroke()
  // fez with swinging tassel
  g.save();g.translate(176,62);g.rotate(-.18+.05*s)
  g.lineWidth=4;g.beginPath();g.moveTo(-16,4);g.lineTo(-11,-22);g.lineTo(11,-22);g.lineTo(16,4);g.closePath()
  g.fillStyle='#e8433a';g.fill();g.stroke()
  g.lineWidth=3;g.beginPath();g.moveTo(0,-22);g.quadraticCurveTo(-10-6*c,-20,-14-8*c,-6);g.stroke()
  g.beginPath();g.ellipse(-14-8*c,-4,3.5,5,.3,0,P);g.fillStyle='#ffd166';g.fill();g.stroke()
  g.restore();g.restore()
  // posterize to the palette, then 2x2 box-downsample
  const D=g.getImageData(0,0,512,512).data,O=o.createImageData(256,256),e=O.data
  for(let k=0;k<D.length;k+=4){
    if(D[k+3]<128){D[k+3]=0;continue}
    let bi=0,bd=1e9
    pal.forEach((p,j)=>{const q=(p[0]-D[k])**2+(p[1]-D[k+1])**2+(p[2]-D[k+2])**2;if(q<bd){bd=q;bi=j}})
    ;[D[k],D[k+1],D[k+2]]=pal[bi];D[k+3]=255
  }
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    let r=0,G=0,b=0,n=0
    for(const[dx,dy]of[[0,0],[1,0],[0,1],[1,1]]){const k=((y*2+dy)*512+x*2+dx)*4;if(D[k+3]){r+=D[k];G+=D[k+1];b+=D[k+2];n++}}
    const k=(y*256+x)*4
    if(n){e[k]=r/n;e[k+1]=G/n;e[k+2]=b/n;e[k+3]=n*255/4}
  }
  o.putImageData(O,0,0)
}

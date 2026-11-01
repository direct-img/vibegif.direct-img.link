// front-facing porcelain-white android bust with panel seams and glowing blue eyes that glances around and blinks, then glitches: horizontal slices of the face jump sideways with red/cyan RGB split and the eyes flash red
export const frames=20
const G=[0,0,0,0,0,0,.45,1,.7,0,0,0,0,0,0,0,.35,.95,.5,0]
export const delay=G.map(g=>g?60:110)
const P=Math.PI,K='#111',W='#f3efe9',S='#d6cfc6',L='#9a928a'
const rng=s=>()=>(s=s*1664525+1013904223>>>0)/4294967296
const head=c=>{
  c.beginPath();c.moveTo(128,24)
  c.bezierCurveTo(170,24,192,50,190,84);c.bezierCurveTo(191,104,190,112,187,124)
  c.bezierCurveTo(184,146,174,160,160,170);c.bezierCurveTo(150,180,140,184,128,184)
  c.bezierCurveTo(116,184,106,180,96,170);c.bezierCurveTo(82,160,72,146,69,124)
  c.bezierCurveTo(66,112,65,104,66,84);c.bezierCurveTo(64,50,86,24,128,24);c.closePath()
}
// fill, then a shadow crescent on the lower right left by the base colour shifted up-left
const vol=(c,path,dx,dy)=>{
  path(c);c.fillStyle=S;c.fill()
  c.save();path(c);c.clip();c.translate(-dx,-dy);path(c);c.fillStyle=W;c.fill();c.restore()
  path(c);c.lineWidth=5;c.strokeStyle=K;c.stroke()
}
const line=(c,w,s,f)=>{c.beginPath();f();c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const draw=(c,i,g)=>{
  const red=g>.3,eye=red?'#ff2b45':'#3fc3f0',look=[-3,-3,-3,-2,0,0,0,0,0,0,2,3,3,3,3,1,0,0,0,-2][i],shut=i==13
  // shoulders / chest
  const bust=c=>{
    c.beginPath();c.moveTo(100,198);c.bezierCurveTo(70,204,36,208,26,232)
    c.lineTo(22,250);c.lineTo(234,250);c.lineTo(230,232);c.bezierCurveTo(220,208,186,204,156,198);c.closePath()
  }
  vol(c,bust,8,0)
  line(c,2.5,L,()=>{c.moveTo(64,214);c.quadraticCurveTo(84,232,82,250);c.moveTo(192,214);c.quadraticCurveTo(172,232,174,250)})
  line(c,2.5,L,()=>{c.moveTo(104,232);c.quadraticCurveTo(128,240,152,232)})
  for(let k=0;k<4;k++)line(c,2.5,L,()=>{c.moveTo(42+k*7,236);c.lineTo(42+k*7,246)})
  // neck: dark core, cables, segmented spine
  c.beginPath();c.roundRect(104,160,48,50,8);c.fillStyle='#39414b';c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()
  for(const[x,col]of[[112,'#7a8592'],[144,'#7a8592'],[120,'#c45a4f'],[136,'#4f7fc4']])
    line(c,4,col,()=>{c.moveTo(x,166);c.lineTo(x+(x<128?-2:2),206)})
  for(let k=0;k<4;k++){c.beginPath();c.roundRect(119,170+k*9,18,7,3);c.fillStyle=k%2?S:W;c.fill();c.lineWidth=2.5;c.strokeStyle=K;c.stroke()}
  line(c,5,K,()=>{c.moveTo(100,199);c.lineTo(156,199)})
  // ear modules
  for(const x of[66,190]){
    c.beginPath();c.arc(x,108,15,0,2*P);c.fillStyle=S;c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()
    c.beginPath();c.arc(x,108,7,0,2*P);c.fillStyle=eye;c.fill();c.lineWidth=2.5;c.stroke()
  }
  vol(c,head,10,6)
  // seams: face plate, forehead, jaw
  line(c,2.5,L,()=>{
    c.moveTo(84,64);c.bezierCurveTo(76,96,78,124,92,150);c.quadraticCurveTo(108,170,128,172)
    c.quadraticCurveTo(148,170,164,150);c.bezierCurveTo(178,124,180,96,172,64)
    c.moveTo(84,64);c.quadraticCurveTo(128,52,172,64)
  })
  line(c,2.5,L,()=>{c.moveTo(128,24);c.lineTo(128,57)})
  // forehead status led
  c.beginPath();c.arc(128,72,4,0,2*P);c.fillStyle=red||i%4<2?eye:'#bfe6f5';c.fill();c.lineWidth=2;c.strokeStyle=K;c.stroke()
  // brows
  line(c,3.5,'#6d655e',()=>{c.moveTo(90,92);c.quadraticCurveTo(103,85,118,90);c.moveTo(138,90);c.quadraticCurveTo(153,85,166,92)})
  // eyes
  for(const x of[104,152]){
    if(shut){line(c,3.5,K,()=>{c.moveTo(x-15,106);c.quadraticCurveTo(x,112,x+15,106)});continue}
    const lid=()=>{c.beginPath();c.moveTo(x-15,106);c.quadraticCurveTo(x,95,x+15,105);c.quadraticCurveTo(x,115,x-15,106)}
    lid();c.fillStyle='#fdfdfd';c.fill()
    c.save();lid();c.clip()
    c.beginPath();c.arc(x+look,105,7,0,2*P);c.fillStyle=eye;c.fill();c.lineWidth=2;c.strokeStyle='#123';c.stroke()
    c.beginPath();c.arc(x+look,105,3,0,2*P);c.fillStyle='#0b1622';c.fill()
    c.beginPath();c.arc(x+look-2.5,102.5,1.6,0,2*P);c.fillStyle='#fff';c.fill()
    c.restore()
    line(c,3.5,K,()=>{c.moveTo(x-15,106);c.quadraticCurveTo(x,95,x+15,105)})
    line(c,1.5,L,()=>{c.moveTo(x-12,109);c.quadraticCurveTo(x,114,x+13,108)})
  }
  // nose
  c.beginPath();c.moveTo(131,112);c.quadraticCurveTo(134,128,137,134);c.quadraticCurveTo(133,138,129,137);c.quadraticCurveTo(131,124,131,112)
  c.fillStyle=S;c.fill()
  c.beginPath();c.ellipse(130,163,9,3,0,0,2*P);c.fill()
  line(c,2.5,'#8a827a',()=>{c.moveTo(131,110);c.quadraticCurveTo(134,128,137,134);c.quadraticCurveTo(132,139,126,137)})
  line(c,2.5,'#8a827a',()=>{c.moveTo(118,135);c.quadraticCurveTo(121,139,124,138)})
  // lips
  c.beginPath();c.moveTo(112,153);c.quadraticCurveTo(122,147,128,150);c.quadraticCurveTo(134,147,144,153)
  c.quadraticCurveTo(128,163,112,153);c.fillStyle='#d9b6ae';c.fill()
  line(c,2.5,'#5a3d3a',()=>{c.moveTo(112,153);c.quadraticCurveTo(128,156,144,153)})
  // cheek panel vents
  for(let k=0;k<3;k++)line(c,2,L,()=>{c.moveTo(166-k*1.5,124+k*6);c.lineTo(174-k*1.5,122+k*6)})
}
// glitch: rows shifted in bands, red taken from the right and green/blue from the left, some bands tinted or scanlined
const glitch=(c,g,i)=>{
  const R=rng(i*977+13),im=c.getImageData(0,0,256,256),s=im.data,o=new Uint8ClampedArray(s.length)
  const off=new Int16Array(256),tint=new Uint8Array(256),sp=Math.round(2+5*g)
  for(let y=0;y<256;){
    const h=3+R()*26|0,v=R()<.55*g?Math.round((R()-.5)*70*g):0,tn=R()<.3*g?1+(R()*2|0):0
    for(let k=0;k<h&&y<256;k++,y++){off[y]=v;tint[y]=tn==2&&y%2?3:tn}
  }
  const px=(x,y)=>x<0||x>255?-1:(y*256+x)*4
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    const sx=x-off[y],a=px(sx+sp,y),b=px(sx-sp,y),j=(y*256+x)*4
    const a1=a<0?0:s[a+3],a2=b<0?0:s[b+3],al=Math.max(a1,a2)
    if(!al||tint[y]==3)continue
    let r=a1?s[a]*a1/al:0,gg=a2?s[b+1]*a2/al:0,bb=a2?s[b+2]*a2/al:0
    if(tint[y]==1)[r,bb]=[bb,r]
    o[j]=r;o[j+1]=gg;o[j+2]=bb;o[j+3]=al
  }
  im.data.set(o);c.putImageData(im,0,0)
}
export default(c,t,i)=>{
  const g=G[i]
  if(g){c.translate(Math.round((rng(i)()-.5)*8*g),0)}
  draw(c,i,g)
  if(g)glitch(c,g,i)
}

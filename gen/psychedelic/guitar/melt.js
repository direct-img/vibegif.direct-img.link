// electric guitar whose rainbow-swirled body melts into gooey drips that stretch and fall, strings vibrating and wavy rainbow sound waves pulsing out from both sides
import{createCanvas}from'@napi-rs/canvas'
export const frames=32,delay=70
const T=Math.PI*2,C=['#ff2e63','#ff8a00','#ffe600','#3ddc5a','#00c2ff','#3b5bff','#b03bff']
const hx=h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)),rgb=C.map(hx)
const P=[...C,'#111111','#ffffff','#f4c26b','#a8742a','#bbbbbb'].map(hx),Q=P.flatMap((a,i)=>P.slice(i).map(b=>a.map((v,k)=>v+b[k]>>1)))
const X=128,Y=140
// single-cut body outline in canvas px
const B=[[117,100],[100,88,78,96,76,118],[74,128,82,134,80,140],[76,148,66,158,68,170],[70,190,100,198,128,198],[156,198,188,190,188,168],[188,152,176,146,176,138],[176,126,178,106,168,104],[160,102,150,124,142,122],[139,104]]
const D=[[-38,12,0],[-21,15,.4],[-4,11,.73],[13,16,.15],[30,12,.55],[44,9,.88]]
// each shape is a path builder: body, drips, falling drops
const shapes=t=>{
  const S=[c=>{for(const q of B)q.length<3?c[q==B[0]?'moveTo':'lineTo'](...q):c.bezierCurveTo(...q);c.closePath()}]
  for(const[dx,w,f]of D){
    const u=(t+f)%1,x=X+dx,ya=168+30*Math.sqrt(1-(dx/62)**2)-7
    const L=u<.75?10+40*(u/.75)**1.6:10+40*(1-(u-.75)/.25)**2,b=w/2*(u<.75?.8+.5*u/.75:.8),n=w*.22
    S.push(c=>{
      c.moveTo(x-w/2,ya);c.bezierCurveTo(x-w/2,ya+L*.5,x-n,ya+L-b*2,x-n,ya+L-b*.9)
      c.arc(x,ya+L,b,-Math.PI/2-1.1,-Math.PI/2+1.1,true);c.bezierCurveTo(x+n,ya+L-b*2,x+w/2,ya+L*.5,x+w/2,ya);c.closePath()
    })
    if(u>=.75){const v=(u-.75)/.25,dy=ya+50+v*v*70;S.push(c=>{c.ellipse(x,dy,b*.9,b*1.15,0,0,T)})}
  }
  return S
}
export default(c,t)=>{
  // sound waves both sides
  for(let j=0;j<4;j++){
    const p=(j+4*t)%4/4,r=36+p*52,w=9*(1-p)+1
    for(const m of[1,-1]){
      c.beginPath()
      for(let k=0;k<=24;k++){const a=(k/24-.5)*1.5,q=r+2*Math.sin(k/24*T*2+t*T*3)
        c.lineTo(X+m*(40+q*Math.cos(a)),Y+6+q*Math.sin(a))}
      c.lineWidth=w+4;c.strokeStyle='#111';c.stroke();c.lineWidth=w;c.strokeStyle=C[(j*2+(m>0?0:3))%7];c.stroke()
    }
  }
  // neck and headstock
  c.fillStyle='#f4c26b';c.lineWidth=5;c.strokeStyle='#111'
  c.beginPath();c.moveTo(118,22);c.lineTo(111,6);c.quadraticCurveTo(130,-1,148,8);c.lineTo(142,26);c.lineTo(139,36);c.lineTo(139,110);c.lineTo(117,110);c.closePath();c.fill();c.stroke()
  for(let k=0;k<3;k++){c.beginPath();c.arc(108,11+k*8,4,0,T);c.fill();c.lineWidth=3;c.stroke()}
  for(let k=0;k<3;k++){c.beginPath();c.arc(152,13+k*8,4,0,T);c.fill();c.stroke()}
  c.lineWidth=2;c.strokeStyle='#a8742a'
  for(let k=0;k<7;k++){const y=40+k*9.5;c.beginPath();c.moveTo(119.5,y);c.lineTo(136.5,y);c.stroke()}
  c.fillStyle='#111';for(const y of[54,73,92]){c.beginPath();c.arc(128,y,2.2,0,T);c.fill()}
  // body: outlines first, then flowing rainbow paint into every shape
  const S=shapes(t)
  c.lineWidth=11;c.strokeStyle='#111';for(const f of S){c.beginPath();f(c);c.stroke()}
  const o=createCanvas(256,256).getContext('2d'),d=o.createImageData(256,256),A=d.data
  for(let y=70;y<256;y++)for(let x=60;x<196;x++){
    const s=(y+7*Math.sin(x/13+y/40-t*T)+4*Math.sin(y/17+t*T))/9-t*7,k=rgb[((Math.floor(s)%7)+7)%7],p=(y*256+x)*4
    A[p]=k[0];A[p+1]=k[1];A[p+2]=k[2];A[p+3]=255
  }
  o.putImageData(d,0,0)
  for(const f of S){c.save();c.beginPath();f(c);c.clip();c.drawImage(o.canvas,0,0);c.restore()}
  // pickups, bridge, tailpiece, knobs
  c.lineWidth=3;c.strokeStyle='#111'
  for(const y of[116,148]){c.fillStyle='#111';c.beginPath();c.roundRect(113,y-7,30,14,4);c.fill()
    c.fillStyle='#777';for(let k=0;k<6;k++){c.beginPath();c.arc(116.5+k*4.6,y-2.5,1.4,0,T);c.arc(116.5+k*4.6,y+2.5,1.4,0,T);c.fill()}}
  c.fillStyle='#ddd';for(const[y,h]of[[160,5],[170,7]]){c.beginPath();c.roundRect(112,y,32,h,2);c.fill();c.stroke()}
  c.fillStyle='#ffd23f';for(const[x,y]of[[156,160],[172,156],[160,176],[176,172]]){c.beginPath();c.arc(x,y,5,0,T);c.fill();c.stroke()}
  // vibrating strings
  c.lineWidth=1.5;c.strokeStyle='#222'
  for(let k=0;k<6;k++){
    const x0=122.5+k*2.2,x1=117+k*4.4,ph=k*1.3
    c.beginPath()
    for(let j=0;j<=40;j++){const s=j/40,y=36+s*138,x=x0+(x1-x0)*s+Math.sin(Math.PI*s)*3*Math.cos(t*T*(4+k%2*2)+ph)*(.4+k*.12)
      c.lineTo(x,y)}
    c.stroke()
  }
  // snap to the palette (and halfway mixes) so it compresses well
  const g=c.getImageData(0,0,256,256),G=g.data
  for(let p=0;p<G.length;p+=4){
    if(G[p+3]<128){G[p+3]=0;continue}
    let m=1e9,k
    for(const q of Q){const e=(G[p]-q[0])**2+(G[p+1]-q[1])**2+(G[p+2]-q[2])**2;if(e<m)m=e,k=q}
    G[p]=k[0];G[p+1]=k[1];G[p+2]=k[2];G[p+3]=255
  }
  c.putImageData(g,0,0)
}

// round white robot chef in a puffy toque flipping a pancake high out of a frying pan, the pancake tumbling end over end while its visor eyes follow it, spatula raised in its other hand
export const frames=24,delay=60
const T=Math.PI*2,{sin:S,cos:C,max,min}=Math
const P=(c,f,s=1)=>{f&&(c.fillStyle=f,c.fill());s&&c.stroke()}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const O=(c,x,y,r)=>{c.beginPath();c.arc(x,y,r,0,T)}
const E=(c,x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T)}
const sm=x=>x*x*(3-2*x)
// pan pose keys: t, dip, tilt
const K=[[0,0,0],[.1,7,.1],[.17,-12,-.38],[.27,0,0],[.73,0,0],[.8,9,.12],[.9,-2,-.03],[1,0,0]]
const pose=t=>{
  let k=0;while(K[k+1][0]<=t)k++
  const[a,b]=[K[k],K[k+1]],s=sm((t-a[0])/(b[0]-a[0]))
  return[a[1]+(b[1]-a[1])*s,a[2]+(b[2]-a[2])*s]
}
// hand and pancake-rest point in world space for a time
const pan=t=>{
  const[d,a]=pose(t),hx=150,hy=180+d
  return{hx,hy,a,rx:hx+C(a)*64+S(a)*7,ry:hy+S(a)*64-C(a)*7}
}
const L0=.17,L1=.8
export default(c,t)=>{
  const p=pan(t),f=t>L0&&t<L1
  // pancake position and spin
  let x=p.rx,y=p.ry,r=p.a,sq=1
  if(f){
    const s=(t-L0)/(L1-L0),A=pan(L0),B=pan(L1)
    x=A.rx+(B.rx-A.rx)*s;y=A.ry+(B.ry-A.ry)*s-460*s*(1-s);r=-T*sm(s)
  }
  if(t>=L1&&t<.88)sq=1-.35*S((t-L1)/.08*Math.PI)
  // body bounce
  const bb=t>.8&&t<.92?2*S((t-.8)/.12*Math.PI):0,by=bb
  // feet and legs
  c.lineWidth=6
  for(const s of[-1,1]){
    rr(c,88+s*20-7,218,14,16,4);P(c,'#9aa5b0')
    E(c,88+s*22,236,18,8);P(c,'#6f7a86')
  }
  c.save();c.translate(0,by)
  // left arm raising a spatula
  const sw=.12*S(t*T*2),hx=30,hy=150
  c.save();c.translate(hx,hy);c.rotate(sw)
  c.lineWidth=12;c.beginPath();c.moveTo(0,0);c.lineTo(4,-44);c.stroke()
  c.strokeStyle='#8a5a3a';c.lineWidth=5;c.stroke();c.strokeStyle='#111';c.lineWidth=5
  c.beginPath();c.moveTo(4,-40);c.lineTo(6,-52);c.stroke()
  rr(c,-6,-80,24,30,4);P(c,'#c3ccd4')
  c.lineWidth=3;c.beginPath();c.moveTo(2,-74);c.lineTo(2,-58);c.moveTo(10,-74);c.lineTo(10,-58);c.stroke()
  c.restore();c.lineWidth=6
  c.lineWidth=16;c.beginPath();c.moveTo(54,170);c.lineTo(26,180);c.lineTo(hx,hy);c.stroke()
  c.strokeStyle='#c3ccd4';c.lineWidth=7;c.stroke();c.strokeStyle='#111';c.lineWidth=6
  O(c,hx,hy,9);P(c,'#9aa5b0')
  // body (chef jacket)
  rr(c,46,146,84,82,32);P(c,'#f7f9fa',0)
  c.save();c.clip();c.fillStyle='#d9e0e6';c.fillRect(110,140,30,100);c.fillRect(40,214,100,20);c.restore()
  rr(c,46,146,84,82,32);P(c,0)
  c.fillStyle='#8e9aa6'
  for(const yy of[176,192,208])for(const xx of[78,98]){O(c,xx,yy,3.5);c.fill()}
  // neckerchief
  c.lineWidth=5;c.beginPath();c.moveTo(68,148);c.lineTo(108,148);c.lineTo(88,168);c.closePath();P(c,'#e8473e')
  c.lineWidth=6
  // head
  const ex=max(-5,min(5,(x-88)/14)),ey=max(-4,min(4,(y-124)/18))
  rr(c,56,96,64,54,20);P(c,'#cfd7de')
  O(c,55,123,7);P(c,'#ff7a3d');O(c,121,123,7);P(c,'#ff7a3d')
  rr(c,64,108,48,30,12);P(c,'#1d252c')
  const hap=t>.84&&t<.98
  for(const s of[-1,1]){
    const cx=88+s*11+ex,cy=123+ey
    if(hap){c.strokeStyle='#5ee6dc';c.lineWidth=4;c.beginPath();c.arc(cx,cy+3,6,Math.PI*1.1,Math.PI*1.9);c.stroke();c.strokeStyle='#111';c.lineWidth=6}
    else{E(c,cx,cy,5,7);P(c,'#5ee6dc',0);O(c,cx+1.5,cy-3,1.8);P(c,'#fff',0)}
  }
  // toque: stroke all puffs, then fill them
  const pf=[[70,66,14],[88,56,18],[106,66,14],[88,72,14]]
  c.lineWidth=12;for(const[a,b,q]of pf){O(c,a,b,q);c.stroke()}
  rr(c,64,74,48,24,4);c.stroke()
  c.fillStyle='#fff';for(const[a,b,q]of pf){O(c,a,b,q);c.fill()}
  c.lineWidth=5
  rr(c,64,74,48,24,4);P(c,'#fff')
  c.strokeStyle='#d9e0e6';c.lineWidth=3;c.beginPath();c.moveTo(80,64);c.quadraticCurveTo(84,74,80,80);c.moveTo(97,64);c.quadraticCurveTo(93,74,97,80);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  // pan arm
  const ux=(124+p.hx)/2,uy=(170+p.hy)/2+14
  c.lineWidth=16;c.beginPath();c.moveTo(124,168);c.lineTo(ux,uy);c.lineTo(p.hx,p.hy);c.stroke()
  c.strokeStyle='#c3ccd4';c.lineWidth=7;c.stroke();c.strokeStyle='#111';c.lineWidth=6
  c.restore()
  // pan
  c.save();c.translate(p.hx,p.hy);c.rotate(p.a)
  c.lineWidth=12;c.beginPath();c.moveTo(-4,0);c.lineTo(30,0);c.stroke()
  c.strokeStyle='#8a5a3a';c.lineWidth=5;c.stroke();c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.moveTo(28,-4);c.lineTo(100,-4);c.lineTo(92,10);c.quadraticCurveTo(64,14,36,10);c.closePath();P(c,'#3f4650')
  c.strokeStyle='#a9b3bd';c.lineWidth=3;c.beginPath();c.moveTo(36,1);c.lineTo(92,1);c.stroke();c.strokeStyle='#111';c.lineWidth=6
  c.restore()
  O(c,p.hx,p.hy+by,9);P(c,'#9aa5b0')
  // speed ticks behind the pancake
  if(f){
    const s=(t-L0)/(L1-L0),v=460*(1-2*s)
    if(Math.abs(v)>160){
      const d=Math.sign(v),l=Math.abs(v)/22
      c.strokeStyle='#9aa5b0';c.lineWidth=4;c.beginPath()
      for(const k of[-16,0,16])c.moveTo(x+k,y+d*(14+(k?0:6))),c.lineTo(x+k,y+d*(14+(k?0:6)+l))
      c.stroke();c.strokeStyle='#111'
    }
  }
  // pancake
  c.save();c.translate(x,y);c.rotate(r);c.scale(1/sq**.3,sq)
  c.lineWidth=5
  E(c,0,3,24,7);P(c,'#b8692a')
  E(c,0,0,24,7);P(c,'#f3bb52')
  c.fillStyle='#d98c35';E(c,-8,-1,5,1.8);c.fill();E(c,7,1,4,1.5);c.fill();E(c,2,-3,3,1.2);c.fill()
  c.restore()
}

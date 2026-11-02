// retro wooden TV with rabbit-ear antennas wobbling and bending like jelly, its screen showing a turning rainbow flower-petal kaleidoscope blooming outward
export const frames=12,delay=100
const P=Math.PI*2,H=(h,l=58)=>`hsl(${(h%360+360)%360},95%,${l}%)`
export default(c,t)=>{
  const s=t*P,L=(w,k='#111')=>(c.lineWidth=w,c.strokeStyle=k,c.stroke())
  const rr=(x,y,w,h,r)=>{c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
  // squash and stretch around the feet
  const q=Math.sin(s*2)*.045
  c.save();c.translate(128,236);c.scale(1+q,1-q);c.translate(-128,-236)
  // antennas
  for(const[x,y,k]of[[78,24,0],[184,18,1]]){
    c.beginPath();c.moveTo(128,70);c.lineTo(x,y);L(9);L(4,'#c9c9d6')
    c.beginPath();c.arc(x,y,7,0,P);c.fillStyle=H(t*360+k*180,60);c.fill();L(4)
  }
  c.beginPath();c.ellipse(128,74,22,13,0,P/2,P);c.fillStyle='#5b5f73';c.fill();L(5)
  // legs
  for(const m of[-1,1]){c.beginPath();c.moveTo(128+m*66,200);c.lineTo(128+m*78,232);L(12);L(5,'#8a4a1c')}
  // cabinet
  rr(34,72,188,138,22);c.fillStyle='#e0802e';c.fill()
  c.save();c.clip()
  for(let k=0;k<7;k++){
    c.beginPath();c.moveTo(30,80+k*20)
    for(let x=30;x<=226;x+=14)c.lineTo(x,80+k*20+Math.sin(x*.05+k*1.7)*4)
    L(3,'#c4621b')
  }
  c.restore();rr(34,72,188,138,22);L(7)
  // control panel: knobs and speaker slots
  rr(174,88,36,106,8);c.fillStyle='#b8521a';c.fill();L(4)
  for(const[y,a]of[[110,s],[142,-s*2]]){
    c.beginPath();c.arc(192,y,11,0,P);c.fillStyle='#f4e3c3';c.fill();L(4)
    c.beginPath();c.moveTo(192,y);c.lineTo(192+Math.cos(a)*8,y+Math.sin(a)*8);L(3)
  }
  for(let k=0;k<4;k++){c.beginPath();c.moveTo(184,166+k*7);c.lineTo(200,166+k*7);L(3)}
  // screen with kaleidoscope
  rr(48,86,118,108,22);c.fillStyle='#160a2c';c.fill()
  c.save();c.clip()
  c.save();c.translate(107,140)
  for(let j=9;j>=-2;j--){
    const u=j+t*2,r=u*11,n=j%2?12:6,z=(8+u*2.4)*Math.min(1,Math.max(0,u))
    if(z<=0)continue
    c.save();c.rotate((j%2?-1:1)*s/6+u*.3)
    for(let k=0;k<n;k++){
      c.rotate(P/n);c.beginPath();c.moveTo(r-z*.6,0)
      c.quadraticCurveTo(r+z*.4,-z*.75,r+z*1.4,0);c.quadraticCurveTo(r+z*.4,z*.75,r-z*.6,0)
      c.fillStyle=H(u*70+290+k%2*(n>6?40:0),58);c.fill();L(2.5)
    }
    c.restore()
  }
  c.beginPath();c.arc(0,0,6,0,P);c.fillStyle=H(t*360+60,60);c.fill();L(2.5)
  c.restore()
  c.beginPath();c.moveTo(60,124);c.quadraticCurveTo(62,98,88,96);L(6,'rgba(255,255,255,.55)')
  c.restore()
  rr(48,86,118,108,22);L(7)
  c.restore()
  // jelly wobble: resample rows and columns along travelling sine waves, stronger toward the top
  const S=256,a=c.getImageData(0,0,S,S),d=a.data,o=new Uint8ClampedArray(d.length)
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){
    const g=Math.max(0,(236-y)/200),sx=x-Math.sin(y*.045-s)*7*g,sy=y-Math.sin(x*.04+s)*4*g
    const x0=Math.floor(sx),y0=Math.floor(sy),fx=sx-x0,fy=sy-y0,n=(y*S+x)*4
    let A=0,R=0,G=0,B=0
    for(const[dx,dy,w]of[[0,0,(1-fx)*(1-fy)],[1,0,fx*(1-fy)],[0,1,(1-fx)*fy],[1,1,fx*fy]]){
      const X=x0+dx,Y=y0+dy;if(X<0||Y<0||X>=S||Y>=S)continue
      const m=(Y*S+X)*4,al=d[m+3]*w;A+=al;R+=d[m]*al;G+=d[m+1]*al;B+=d[m+2]*al
    }
    if(A)o[n]=R/A,o[n+1]=G/A,o[n+2]=B/A,o[n+3]=A
  }
  a.data.set(o);c.putImageData(a,0,0)
}

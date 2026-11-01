// mint green robot lifts a red oil can to its mouth grille and gulps down golden oil, then blushes, its heart light glows and happy puffs of steam shoot from its ear vents
export const frames=36,delay=70
const P=Math.PI,MI='#9fe0c8',SH='#6fbfa5',DK='#2d3b40'
const cl=k=>Math.max(0,Math.min(1,k)),ez=k=>k*k*(3-2*k),lerp=(a,b,k)=>a+(b-a)*k
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const R=([x,y],a)=>[x*Math.cos(a)-y*Math.sin(a),x*Math.sin(a)+y*Math.cos(a)]
const add=(p,q)=>[p[0]+q[0],p[1]+q[1]],sub=(p,q)=>[p[0]-q[0],p[1]-q[1]]
const TIP=[-38,-44],HND=[25,-16],PV=[118,140],CS=1.3,TS=TIP.map(v=>v*CS),HS=HND.map(v=>v*CS)
const cloud=(c,x,y,s)=>{
  c.beginPath();for(const[a,b,r]of[[-6,2,7],[0,-4,8],[7,1,7],[1,4,6]])c.moveTo(x+(a+r)*s,y+b*s),c.arc(x+a*s,y+b*s,r*s,0,2*P)
  c.fillStyle='#f1f4f8';c.lineWidth=6;c.strokeStyle='#111';c.stroke();c.fill()
}
const can=c=>{
  // spout
  c.beginPath();c.moveTo(-10,-20);c.lineTo(TIP[0]-1,TIP[1]+2.5);c.lineTo(TIP[0]+1,TIP[1]-2.5);c.lineTo(-4,-26);c.closePath()
  c.fillStyle='#c9d1db';c.lineWidth=3.5;c.fill();c.stroke()
  // handle
  c.beginPath();c.moveTo(14,-24);c.bezierCurveTo(34,-26,34,-4,18,-4);c.lineWidth=9;c.stroke();c.lineWidth=4;c.strokeStyle='#c9d1db';c.stroke();c.strokeStyle='#111'
  // body
  c.beginPath();c.moveTo(-21,0);c.lineTo(-13,-26);c.lineTo(13,-26);c.lineTo(21,0);c.closePath();c.fillStyle='#e5483c';c.lineWidth=4.5;c.fill();c.stroke()
  c.beginPath();c.moveTo(-10,-26);c.quadraticCurveTo(0,-38,10,-26);c.fillStyle='#c9d1db';c.lineWidth=3.5;c.fill();c.stroke()
  c.beginPath();c.moveTo(-6,-15);c.quadraticCurveTo(-1,-21,0,-23);c.quadraticCurveTo(1,-21,6,-15);c.arc(0,-13,6.2,-.15*P,1.15*P);c.fillStyle='#ffd04a';c.lineWidth=2;c.fill();c.stroke()
  c.beginPath();c.moveTo(-15,-5);c.lineTo(-11,-21);c.lineWidth=3;c.strokeStyle='#ff9a8c';c.stroke();c.strokeStyle='#111'
}
export default(c,t)=>{
  const up=ez(cl((t-.1)/.18))*(1-ez(cl((t-.56)/.14))),pour=cl((t-.28)/.28)*(t<.56)
  const happy=cl((t-.6)/.05)*(1-cl((t-.93)/.05)),gul=pour>0?Math.sin(pour*3*2*P-P/2)*.5+.5:0
  const ht=-.13*up+Math.sin(t*2*P*6)*.03*happy,hop=-Math.abs(Math.sin(t*2*P*4))*3*happy
  const hp=p=>add(R(sub(p,PV),ht),add(PV,[0,hop]))
  // body
  rr(c,64,148,108,104,24);c.fillStyle=MI;c.fill();c.stroke()
  rr(c,150,154,16,90,8);c.fillStyle=SH;c.fill()
  rr(c,88,168,60,44,10);c.fillStyle=DK;c.lineWidth=5;c.fill();c.stroke()
  const hg=happy>.5
  c.save();c.translate(108,190);c.scale(1+hg*.08*Math.sin(t*2*P*8),1+hg*.08*Math.sin(t*2*P*8))
  c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-14,-2,-8,-14,0,-6);c.bezierCurveTo(8,-14,14,-2,0,8)
  c.fillStyle=hg?'#ff6f91':'#5a3a48';c.lineWidth=2.5;c.fill();c.stroke();c.restore()
  for(const[y,col]of[[182,'#ffd04a'],[198,'#7fe3ff']]){c.beginPath();c.arc(133,y,4.5,0,2*P);c.fillStyle=col;c.lineWidth=2.5;c.fill();c.stroke()}
  // left arm hanging
  c.lineWidth=17;c.beginPath();c.moveTo(66,166);c.quadraticCurveTo(46,196,52,232);c.stroke()
  c.lineWidth=9;c.strokeStyle=SH;c.stroke();c.strokeStyle='#111'
  c.beginPath();c.arc(52,234,10,0,2*P);c.fillStyle=MI;c.lineWidth=4.5;c.fill();c.stroke()
  // neck with gulp bulge
  c.lineWidth=7;rr(c,104,128,28,24,5);c.fillStyle='#8d97a6';c.fill();c.stroke()
  if(pour>0){const gy=lerp(128,150,(pour*3)%1);c.beginPath();c.ellipse(118,gy,17,4.5,0,0,2*P);c.fillStyle='#d99a1e';c.lineWidth=3;c.fill();c.stroke()}
  // head (tilts back while drinking)
  c.save();c.translate(0,hop);c.translate(...PV);c.rotate(ht);c.translate(-PV[0],-PV[1])
  c.lineWidth=5;c.beginPath();c.moveTo(118,54);c.lineTo(118+happy*Math.sin(t*2*P*6)*4,30);c.stroke()
  c.beginPath();c.arc(118+happy*Math.sin(t*2*P*6)*4,27,7,0,2*P);c.fillStyle=happy>.5&&Math.floor(t*24)%2?'#ff6f91':'#e5483c';c.lineWidth=4;c.fill();c.stroke()
  for(const g of[-1,1]){rr(c,118+g*56-9,74,18,36,6);c.fillStyle=SH;c.lineWidth=6;c.fill();c.stroke()
    c.lineWidth=2.5;for(const y of[84,92,100]){c.beginPath();c.moveTo(118+g*56-4,y);c.lineTo(118+g*56+4,y);c.stroke()}}
  rr(c,66,52,104,82,24);c.fillStyle=MI;c.lineWidth=7;c.fill();c.stroke()
  rr(c,150,60,12,66,6);c.fillStyle=SH;c.fill()
  // eyes: open looking at the can, closed while gulping, ^ ^ when happy
  for(const g of[-1,1]){const ex=118+g*21,ey=84
    if(up>.6||happy>.5){c.beginPath();c.lineWidth=5
      if(happy>.5){c.moveTo(ex-10,ey+4);c.lineTo(ex,ey-6);c.lineTo(ex+10,ey+4)}else{c.moveTo(ex-10,ey-1);c.quadraticCurveTo(ex,ey+9,ex+10,ey-1)}
      c.stroke()}
    else{c.beginPath();c.arc(ex,ey,12,0,2*P);c.fillStyle='#fff';c.lineWidth=4.5;c.fill();c.stroke()
      const lk=lerp(0,1,cl(1-up*2));c.beginPath();c.arc(ex+3+lk*3,ey+2+lk*3,5.5,0,2*P);c.fillStyle=DK;c.fill()
      c.beginPath();c.arc(ex+1.5+lk*3,ey+.5+lk*3,1.8,0,2*P);c.fillStyle='#fff';c.fill()}
    if(happy>0){c.beginPath();c.ellipse(118+g*36,104,8*happy,4.5*happy,0,0,2*P);c.fillStyle='#ff9fb2';c.fill()}
  }
  // mouth grille opens to gulp
  const mo=up>.6?6+gul*5:0
  rr(c,98,104-mo/2,40,14+mo,6);c.fillStyle=DK;c.lineWidth=4.5;c.fill();c.stroke()
  if(mo==0){c.lineWidth=2.5;c.strokeStyle='#8d97a6';for(const x of[108,118,128]){c.beginPath();c.moveTo(x,107);c.lineTo(x,115);c.stroke()}c.strokeStyle='#111'}
  c.restore()
  // right arm + can via 2-bone IK
  const rest=[210,222],ta=lerp(.85,-1.12,up),mouth=hp([124,110]),aim=hp([134,92])
  const drink=add(sub(aim,R(TS,-1.12)),R(HS,-1.12)),k=up
  const H=[lerp(rest[0],drink[0],k)+Math.sin(P*k)*14,lerp(rest[1],drink[1],k)]
  const O=sub(H,R(HS,ta)),S=[170,166],L1=50,L2=50
  const dv=sub(H,S),d=Math.min(Math.hypot(...dv),L1+L2-1),a=Math.atan2(dv[1],dv[0]),b=Math.acos((L1*L1+d*d-L2*L2)/(2*L1*d))
  const E=[S[0]+Math.cos(a-b)*L1,S[1]+Math.sin(a-b)*L1]
  for(const[w,col]of[[17,'#111'],[9,SH]]){c.lineWidth=w;c.strokeStyle=col;c.beginPath();c.moveTo(...S);c.lineTo(...E);c.lineTo(...H);c.stroke()}
  c.strokeStyle='#111'
  c.beginPath();c.arc(...E,7,0,2*P);c.fillStyle=MI;c.lineWidth=4;c.fill();c.stroke()
  c.save();c.translate(...O);c.rotate(ta);c.scale(CS,CS);can(c);c.restore()
  c.beginPath();c.arc(...H,10,0,2*P);c.fillStyle=MI;c.lineWidth=4.5;c.fill();c.stroke()
  // oil drips from spout into the grille
  if(pour>0){const tp=add(O,R(TS,ta)),w=Math.sin(t*2*P*9)*2
    c.beginPath();c.moveTo(tp[0]-1,tp[1]);c.quadraticCurveTo(tp[0]-4+w,(tp[1]+mouth[1])/2,mouth[0]+4,mouth[1]-2)
    c.lineWidth=8;c.stroke();c.lineWidth=4;c.strokeStyle='#e8a91f';c.stroke();c.strokeStyle='#111'
    const f=(pour*6)%1;c.beginPath();c.arc(tp[0]-3,lerp(tp[1],mouth[1],f),3,0,2*P);c.fillStyle='#ffd65a';c.fill()}
  // steam puffs from the ear vents
  if(t>.6&&t<.95)for(const g of[-1,1])for(let j=0;j<3;j++){
    const f=cl((t-.6-j*.07)/.2);if(f<=0||f>=1)continue
    const v=hp([118+g*64,84])
    cloud(c,v[0]+g*(6+f*26),v[1]-f*34,.45+Math.sin(P*f)*.75)
  }
}

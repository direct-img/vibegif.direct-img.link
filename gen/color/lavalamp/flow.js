// lava lamp with a happy base, pink blobs rising, merging and sinking through blue goo
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=24,delay=90
const CAP='#9775fa',CD='#7048e8',GOO='#74c0fc',BLOB='#f783ac',BH='#ffdeeb',BL='#faa2c1'
const glass=c=>{c.beginPath();c.moveTo(100,62);c.lineTo(156,62);c.lineTo(180,166);c.quadraticCurveTo(184,190,160,190);c.lineTo(96,190);c.quadraticCurveTo(72,190,76,166);c.closePath()}
export default(c,t)=>{
  c.fillStyle=CAP;c.beginPath();c.moveTo(94,186);c.lineTo(162,186);c.lineTo(194,232);c.quadraticCurveTo(198,244,184,244);c.lineTo(72,244);c.quadraticCurveTo(58,244,62,232);c.closePath();c.fill();c.stroke()
  c.fillStyle=CD;c.beginPath();c.roundRect(86,182,84,12,6);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*18,214,5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(126+d*18,212,1.8,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,219,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*34,224,8,4,0,0,T),c.fill()
  c.lineWidth=7;glass(c);c.fillStyle=GOO;c.fill()
  c.save();glass(c);c.clip()
  const bl=[[0,124,20],[.3,110,16],[.55,146,14],[.8,132,11]].map(([p,x,r])=>{
    const s=sin(T*(t+p)),y=126+54*cos(T*(t+p)),v=abs(s)
    return[x+7*sin(2*T*(t+p)),y,r*(1-.12*v),r*(1+.3*v)]
  })
  const blobs=()=>{c.beginPath();c.ellipse(128,198,58,20,0,0,T);c.moveTo(158,58);c.ellipse(128,58,30,9,0,0,T);for(const[x,y,rx,ry]of bl)c.moveTo(x+rx,y),c.ellipse(x,y,rx,ry,0,0,T)}
  c.lineWidth=10;blobs();c.stroke();c.fillStyle=BLOB;blobs();c.fill()
  c.fillStyle=BH;for(const[x,y,rx,ry]of bl)c.beginPath(),c.ellipse(x-rx*.35,y-ry*.4,rx*.28,ry*.2,-.5,0,T),c.fill()
  c.restore()
  c.lineWidth=7;glass(c);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(108,78);c.lineTo(92,150);c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle=CAP;c.beginPath();c.moveTo(96,64);c.lineTo(160,64);c.lineTo(146,22);c.quadraticCurveTo(144,16,138,16);c.lineTo(118,16);c.quadraticCurveTo(112,16,110,22);c.closePath();c.fill();c.stroke()
  c.fillStyle=CD;c.beginPath();c.roundRect(92,58,72,10,5);c.fill();c.lineWidth=5;c.stroke()
}

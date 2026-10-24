// typing LMAO with a dead straight face: the letters pop into the chat bubble and laugh their heads off while the face never moves
import{Path2D}from'@napi-rs/canvas'
const{sin,PI,min,max,abs}=Math,T=2*PI
const U=[0,.07,.14,.21,.28,.35,...Array.from({length:10},(_,k)=>.4+k*.05),.9,.95]
export const frames=U.length,delay=[400,140,140,140,140,160,...Array(10).fill(70),90,250],rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const K='#1b1b1f',B='#4dabf7',G='#c3fae8'
const F={L:'M0 0V10H6',M:'M0 10V0L3.5 6L7 0V10',A:'M0 10L3 0L6 10M1 6.5H5',O:'M3 0A3 5 0 1 1 3 10A3 5 0 1 1 3 0Z'}
const L=(c,ch,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s*4.4,s*4.4);c.translate(ch=='M'?-3.5:-3,-5);for(const[w,st]of[[5.6,K],[2.4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.stroke(new Path2D(F[ch]));c.restore()}
export default(c,_,i)=>{
  const t=U[i],lol=t>=.4&&t<.9,ph=T*(t-.4)*4,out=io((t-.88)/.06)
  // the bubble
  const bw=lol?3*sin(ph*1.5):0
  c.save();c.translate(128,64);c.rotate(.02*bw);c.translate(-128,-64)
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle=B;c.beginPath();c.roundRect(20,18,216,92,30);c.fill()
  c.beginPath();c.moveTo(168,100);c.lineTo(190,136);c.lineTo(196,100);c.fill();c.beginPath();c.moveTo(168,108);c.lineTo(190,136);c.lineTo(198,108)
  c.stroke();c.beginPath();c.roundRect(20,18,216,92,30);c.stroke();c.fillStyle=B;c.fillRect(170,100,26,14)
  c.restore()
  if(t<.05){c.fillStyle='#fff';for(const x of[100,128,156])c.beginPath(),c.arc(x,64,9,0,T),c.fill()}
  ;[...'LMAO'].forEach((ch,k)=>{const s=bk((t-.05-k*.07)/.05)*(1-out);if(s<.02)return
    const b=lol?abs(sin(ph+k*.9)):0,x=50+k*52+(ch=='M'?2:0)
    L(c,ch,x,66-14*b,s*(1+.12*b),lol?.22*sin(ph*.5*3+k*1.7):0)
  })
  // the face never moves
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle=G
  c.beginPath();c.moveTo(100,153);c.quadraticCurveTo(94,134,108,130);c.stroke()
  c.beginPath();c.ellipse(102,202,70,50,0,0,T);c.fill();c.stroke()
  c.fillStyle=K;for(const x of[78,122])c.beginPath(),c.roundRect(x-10,186,20,7,3),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(89,214);c.lineTo(111,214);c.stroke()
  // phone and tapping thumbs
  c.lineWidth=6;c.fillStyle='#495057';c.beginPath();c.roundRect(154,180,52,68,10);c.fill();c.stroke()
  c.fillStyle='#868e96';c.beginPath();c.arc(180,194,5,0,T);c.fill()
  const tp=t<.38?(i%2):0
  c.fillStyle=G;for(const[x,d]of[[156,0],[204,1]]){c.beginPath();c.ellipse(x,226-(d==tp?6:0),13,15,0,0,T);c.fill();c.stroke()}
}

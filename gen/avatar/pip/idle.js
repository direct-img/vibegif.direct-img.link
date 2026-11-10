// round coral avatar mascot ball with two white dot eyes idling: breathes softly, blinks, and takes one quick curious glance up to the side before settling again
export const frames=72,delay=50
const{PI,sin,cos}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:(x--,1+2.7*x*x*x+1.7*x*x),
B=(c,u,v,k)=>{
  c.translate(128,222);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,x,y,r,h,w,v)=>{
  c.translate(128,132);c.rotate(r);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047+x/90,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(v*cos(p)/.9539,v*cos(q)/.9978)
    c.beginPath();c.moveTo(-w,0);c.lineTo(w+.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let br=sin(2*T*t),
  G=o((i-31)/5)+.14*e((i-40)/3)-1.14*o((i-49)/8),
  L=e((i-32)/8)-e((i-50)/9),
  k=[.6,1,1,.4][i-12]||[.6,1,1,.4][i-51]||0
  B(c,1-.011*br+.01*L,1+.016*br-.01*L,-.04*L)
  F(c,24*G,-11*G-1.5*(sin(2*T*t-.6)+.565)+3*k,.08*L,26-20*k,11*k,1+.07*L*(1-k))
}

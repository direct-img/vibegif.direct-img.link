// round coral avatar mascot ball nodding yes: its two white dot eyes dip down the ball and bounce back up three times, quick and eager, flattening at the bottom of each nod as the whole ball bobs along
export const frames=52,delay=40
const{PI,sin,cos}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
V=[[0,0],[4,-6],[9,23],[15,-5],[20,21],[26,-4],[31,11],[37,-2],[43,0]],
p=f=>{
  let j=V.findIndex(v=>v[0]>f)
  if(j<1)return 0
  let[a,x]=V[j-1],[b,y]=V[j]
  return x+(y-x)*e(((f-a)/(b-a))**(y>x?1.5:.7))
},
B=(c,y,u,v)=>{
  c.translate(128,222+y);c.scale(u,v);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,y,v)=>{
  c.translate(128,132);c.strokeStyle='#fff';c.lineWidth=26
  for(let s of[-1,1]){
    let p=s*.3047,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(cos(p)/.9539,v*cos(q)/.9978)
    c.beginPath();c.moveTo(0,0);c.lineTo(.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let P=p(i),L=p(i-1.5)/22,d=P>0?P/22:0,br=sin(T*t)
  B(c,6*L,1+.03*L-.011*br,1-.045*L+.016*br)
  F(c,P-1.5*(sin(T*t-.6)+.565),1-.3*d*d)
}

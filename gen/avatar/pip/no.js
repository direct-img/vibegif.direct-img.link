// round coral avatar mascot ball shaking its head no: its two white dot eyes narrow to firm dashes and slide left and right across the ball as it shakes side to side, then pop open again as it settles
export const frames=56,delay=40
const{PI,sin,cos}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
V=[[0,0],[4,7],[9,-29],[16,29],[23,-27],[30,22],[36,-9],[42,3],[47,0]],
p=f=>{
  let j=V.findIndex(v=>v[0]>f)
  if(j<1)return 0
  let[a,x]=V[j-1],[b,y]=V[j]
  return x+(y-x)*e((f-a)/(b-a))
},
B=(c,x,u,v,k)=>{
  c.translate(128+x,222);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,x,y,h,w)=>{
  c.translate(128,132);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047+x/90,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(cos(p)/.9539,cos(q)/.9978)
    c.beginPath();c.moveTo(-w,0);c.lineTo(w+.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let P=p(i),L=p(i-2)/29,br=sin(T*t),
  E=e((i-2)/5)-e((i-41)/5)
  B(c,6*L,1-.011*br,1+.016*br,-.04*L)
  F(c,P,2*E-1.5*(sin(T*t-.6)+.565),26-14*E+3*sin(PI*e((i-44)/7)),7*E)
}

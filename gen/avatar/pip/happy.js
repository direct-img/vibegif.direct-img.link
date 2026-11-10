// round coral avatar mascot ball beaming with joy: its two white dot eyes curve into happy arcs as it bounces up and down, tilting side to side, with yellow and pink sparkles popping around it
export const frames=60,delay=40
const{PI,sin,cos}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
J=[[6,17,27,-1],[23,16,23,1],[39,11,9,-.4]],
Q=[[4,.1],[23,.12],[39,.1],[50,.06]],
K=[[226,36,21,9,0],[26,206,15,14,1],[30,36,21,26,0],[230,208,15,31,1]],
B=(c,y,u,v,k)=>{
  c.translate(128,222+y);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,x,y,r,h,w,b)=>{
  c.translate(128,132);c.rotate(r);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047+x/90,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(cos(p)/.9539,cos(q)/.9978)
    c.beginPath();c.moveTo(-w,b/2);c.bezierCurveTo(-w,-b*5/6,w,-b*5/6,w+.01,b/2);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let y=0,st=0,r=0,up=0,sq=0,br=sin(T*t),
  H=e((i-1)/5)-e((i-51)/5)
  for(let[a,d,h,z]of J){
    let x=(i-a)/d
    if(x>0&x<1)y=h*4*x*(1-x),st=h/27*sin(T*x)**2,r=z*sin(PI*x)**2,up=sin(PI*x)
  }
  for(let[a,d]of Q)sq+=d*sin(PI*e((i-a+4)/8))**2
  for(let[x,y,s,a,m]of K){
    let p=(i-a)/14
    if(p>0&p<1){
      c.save();c.translate(x,y);c.rotate(p*1.4);c.scale(s*=sin(PI*p**.6)**.8,s)
      c.fillStyle=m?'#ff7eb6':'#ffc62e';c.beginPath();c.moveTo(1,0)
      for(let n=1;n<5;n++)c.quadraticCurveTo(.3*cos(n*PI/2-PI/4),.3*sin(n*PI/2-PI/4),cos(n*PI/2),sin(n*PI/2))
      c.fill();c.restore()
    }
  }
  B(c,9*st-y,1+sq*.8-.07*st-.011*br,1-sq+.1*st+.016*br,-.05*r)
  F(c,6*r,30*sq-5*up-1.5*(sin(T*t-.6)+.565),.13*r,26-16*H,12*H,13*H)
}

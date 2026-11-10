// round coral avatar mascot ball celebrating: crouches, leaps high and spins in the air with its white dot eyes curved into happy arcs, while a burst of colourful confetti flies out from behind it and flutters down
export const frames=72,delay=40
const{PI,sin,cos,min,exp,abs}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
C=['#1fbf9c','#ffc62e','#7a5cff','#ff7eb6','#2f9bff'],
B=(c,y,u,v,k)=>{
  c.translate(128,222+y);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,y,r,h,w,b)=>{
  c.translate(128,132);c.rotate(r);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(cos(p)/.9539,cos(q)/.9978)
    c.beginPath();c.moveTo(-w,b/2);c.bezierCurveTo(-w,-b*5/6,w,-b*5/6,w+.01,b/2);c.stroke();c.restore()
  }
},
K=(c,i)=>{
  for(let j=0;j<14;j++){
    let n=sin(j*7.3)*.5+.5,f=i-20-j%3,
    a=j/14*T+.25*sin(j*5.7),g=sin(a),
    L=(g>0?28:38)+10*n,
    u=1-(1-min(1,f/11))**3,
    d=(.84+.16*n)*min(100/abs(cos(a)),(g<0?84:100)/abs(g)),
    s=e(u*3)*(1-e((f-L+8)/8)),
    v=f>7?30*((f-7)/32)**2:0
    if(f>0&s>.2){
      c.save()
      c.translate(128+cos(a)*d*u+6*sin(f*.25+j)*e((f-7)/9),104+g*d*u+v)
      c.rotate(j*2.4+f*.19*(j%2*2-1));c.scale(s,s*(.4+.6*cos(f*.33+j)**2))
      c.fillStyle=C[j%5];c.beginPath()
      j%3?c.roundRect(-11,-6.5,22,13,4):c.arc(0,0,8,0,T)
      c.fill();c.restore()
    }
  }
}
export default(c,t,i)=>{
  let br=sin(T*t),
  q=e((i-2)/8)*(1-e((i-10)/3)),
  x=(i-12)/26,z=(i-39)/11,a=x>0&x<1,
  y=a?30*4*x*(1-x):z>0&z<1?8*4*z*(1-z):0,
  st=a?sin(T*x)**2:0,
  up=a?sin(PI*x):0,
  l=exp(-(((i-38.5)/2.3)**2))*.15+exp(-(((i-50)/2.3)**2))*.06,
  H=e((i-10)/5)-e((i-53)/5)
  K(c,i)
  B(c,4*q-y+7*st,1+.13*q+l*.8-.06*st-.011*br,1-.17*q-l+.08*st+.016*br,-.04*sin(T*x)*up)
  F(c,12*l-7*q*(1-H)-6*up-1.5*(sin(T*t-.6)+.565),T*e((i-15)/19)+.14*sin(PI*e((i-28)/13)),26-16*H,12*H,13*H)
}

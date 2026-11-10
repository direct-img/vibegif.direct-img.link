// round coral avatar mascot ball startled in surprise: flinches, then jumps K with its two white dot eyes stretched huge and tall while yellow startle marks pop above it, trembles, blinks twice and settles
export const frames=60,delay=50
const{PI,sin,cos,min,exp}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:(x--,1+2.7*x*x*x+1.7*x*x),
B=(c,x,y,u,v)=>{
  c.translate(128+x,222+y);c.scale(u,v);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,y,h,w,u,v)=>{
  c.translate(128,132);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(u*cos(p)/.9539,v*cos(q)/.9978)
    c.beginPath();c.moveTo(-w,0);c.lineTo(w+.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let br=sin(2*T*t),
  q=sin(PI*e((i-3)/5))**2,
  w=o((i-7)/4),
  K=w-e((i-37)/12),
  j=i>7?exp(-(i-7)/3.5)*sin((i-7)/1.25):0,
  x=i>9?exp(-(i-9)/9)*sin(i*PI*.75)*2.2:0,
  G=w-.3*e((i-12)/14)-.3*e((i-39)/5)-.4*e((i-45)/6),
  k=[.6,1,.5][i-32]||[.6,1,1,.4][i-38]||0,
  m=w-e((i-14)/7),
  z=1-.08*K
  c.strokeStyle='#ffc62e';c.lineWidth=10*min(1,m*3)
  if(m>.15)for(let n=-1;n<2;n++){
    let a=n*.5-PI/2,r=96+2*m,d=(n?10:13)*m
    c.beginPath();c.moveTo(128+r*cos(a),126+r*sin(a));c.lineTo(128+(r+d)*cos(a),126+(r+d)*sin(a));c.stroke()
  }
  B(c,x,90*(z-1)-3*K+2*j,z*(1+.07*q-.07*j-.011*br),z*(1-.09*q+.1*j+.016*br))
  F(c,4*q-8*K-4*j-1.5*(sin(2*T*t-.6)+.565)+3*k,26-20*k,11*k*k,1+.42*G*(1-k),1+(1.05*G-.35*q)*(1-k))
}

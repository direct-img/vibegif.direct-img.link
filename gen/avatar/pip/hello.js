// round coral avatar mascot ball saying hello: hops up close to the viewer with a pop of yellow ticks, rocks side to side like a wave with its white dot eyes curved into happy arcs, then settles back
export const frames=64,delay=40
const{PI,sin,cos,min,exp}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:(x--,1+2.7*x*x*x+1.7*x*x),
B=(c,x,y,u,v,k)=>{
  c.translate(128+x,222+y);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,x,y,r,h,w,b,v)=>{
  c.translate(128,132);c.rotate(r);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047+x/90,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(v*cos(p)/.9539,v*cos(q)/.9978)
    c.beginPath();c.moveTo(-w,b/2);c.bezierCurveTo(-w,-b*5/6,w,-b*5/6,w+.01,b/2);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let br=sin(T*t),
  q=sin(PI*e((i-2)/7))**2,
  j=sin(PI*e((i-8)/11)**.8),
  l=i>19?exp(-(i-19)/4)*sin((i-19)/1.6):0,
  z=1+.1*(o((i-8)/8)-e((i-44)/10)),
  n=e((i-16)/5)*(1-e((i-38)/9)),
  w=f=>n*sin(T*(f-17)/11),W=w(i),V=w(i-1.5),
  H=e((i-14)/5)-e((i-42)/5),
  m=o((i-15)/5)-e((i-23)/7),
  k=[.6,1,1,.4][i-55]||0
  c.strokeStyle='#ffc62e';c.lineWidth=9*min(1,m*3)
  if(m>.15)for(let s of[-1,1])for(let a of[-1,-.78,-.56]){
    let r=110+6*m,d=(a+.78?11:16)*m
    c.beginPath();c.moveTo(128+s*r*cos(a),132+r*sin(a));c.lineTo(128+s*(r+d)*cos(a),132+(r+d)*sin(a));c.stroke()
  }
  B(c,10*V,90*(z-1)-10*j,z*(1+.07*q-.035*j+.04*l-.011*br),z*(1-.1*q+.05*j-.06*l+.016*br),-.07*V)
  F(c,5*W,3*q-4*j-1.5*(sin(T*t-.6)+.565)+3*k,.25*W,26-16*H-20*k,12*H+11*k,13*H,1+.1*j)
}

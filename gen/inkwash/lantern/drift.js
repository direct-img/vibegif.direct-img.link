// ink wash floating paper lanterns drifting down a river at dusk, each a warm translucent glow with a rippling reflection
const K=a=>`rgba(20,18,16,${a})`,{sin,cos,PI,min,max,abs,hypot,atan2}=Math,T=PI*2,
R=s=>()=>{let z=s+=0x6D2B79F5;z=Math.imul(z^z>>>15,z|1);z^=z+Math.imul(z^z>>>7,z|61);return((z^z>>>14)>>>0)/2**32},
// brush: dabs stamped along f(u) with radius w(u)
B=(c,f,w,n=40)=>{c.beginPath()
  for(let k=0;k<=n;k++){const u=k/n,[x,y]=f(u),r=w(u);r>.15&&(c.moveTo(x+r,y),c.arc(x,y,r,0,T))}
  c.fill()},
// pressure: press in, swell, taper to a point
P=u=>sin(PI*u**.6)**.8,
E=(c,on)=>c.globalCompositeOperation=on?'destination-out':'source-over',
fade=(c,w=16)=>{
  c.save();E(c,1)
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
,
W=(r,g,b,a)=>`rgba(${r},${g},${b},${a})`
export const frames=20,delay=125,dither=true
export default(c,t)=>{
  const r=R(8)
  // dusk water: a few wet sweeps along the lanterns' path, each trailing off to a point
  c.filter='blur(5px)'
  for(const[x,y,l,q,a]of[[146,104,88,9,.24],[100,126,122,12,.26],[56,152,138,14,.24],[30,182,128,14,.22],[26,210,92,11,.2]]){
    c.fillStyle=K(a)
    B(c,u=>[x+u*l,y+sin(u*5+y)*2.5-u*5],u=>q*sin(PI*u**.85)**.6,50)
  }
  // far bank: a short broken strip with a few tree dabs
  c.filter='blur(.7px)';c.fillStyle=K(.7)
  B(c,u=>[128+u*52,91-sin(PI*u)*3+sin(u*9)],u=>2.8*P(u),50)
  B(c,u=>[188+u*40,88-sin(PI*u)*2],u=>2.2*P(1-u),40)
  for(let k=0;k<7;k++){
    const x=136+r()*80,s=2.2+r()*2.6,y=84-r()*6
    c.fillStyle=K(r()<.5?.8:.55)
    B(c,u=>[x+(u-.5)*s*2.2,y],u=>s*.6*P(u),8)
  }
  // water: sparse ripple strokes beside the lanterns
  for(let k=0;k<7;k++){
    const p=.08+k*.14,y=106+112*p**1.5+(r()-.5)*14,x=212-166*p**1.1+(k&1?-1:1)*(26+r()*18)*(.5+p),l=14+p*26,w=sin(T*(t+r()))*3
    c.fillStyle=K(k%3?.3:.5)
    B(c,u=>[x+w+(u-.5)*l,y+sin(u*4+k)*.7],u=>(.5+p*.9)*P(u),30)
  }
  // lanterns: each slides along the current into the next one's place
  for(let k=0;k<4;k++){
    const p=(t+k)/4,s=.38+1.25*p,A=min(1,p*9,(1-p)*7),
      x=212-166*p**1.1+9*sin(p*8),y=104+112*p**1.5+sin(T*t*2+k*1.7)*1.1*s,
      w=6.6*s,h=18*s,a=sin(T*t+k*2.1)*.05,f=.85+.15*sin(T*t*3+k*2.4)
    // light opens the dusk, then warm colour pools in it
    E(c,1);c.filter=`blur(${7*s}px)`;c.fillStyle=W(0,0,0,.8*A)
    c.beginPath();c.ellipse(x,y-h*.4,w*2.6,h*1.25,0,0,T);c.fill();E(c)
    c.fillStyle=W(232,142,54,.36*A*f)
    c.beginPath();c.ellipse(x,y-h*.4,w*2.3,h*1.1,0,0,T);c.fill()
    // reflection: broken warm dashes thinning downward
    c.filter=`blur(${.6+s*.5}px)`
    for(let j=0;j<5;j++){
      const o=sin(T*t*2+j*1.4+k)*1.6*s,l=w*(1.5-j*.24)
      c.fillStyle=W(226,128,48,(.55-j*.09)*A)
      B(c,u=>[x+o+(u-.5)*l*2,y+(3+j*3.6)*s],u=>1.15*s*P(u),14)
    }
    c.save();c.translate(x,y);c.rotate(a)
    // paper body, brighter at the flame
    const g=c.createRadialGradient(0,-h*.45,1,0,-h*.5,h*.75)
    g.addColorStop(0,W(246,196,104,.9*A));g.addColorStop(1,W(224,120,48,.62*A))
    c.filter='blur(.6px)';c.fillStyle=g
    c.beginPath();c.moveTo(-w,-h);c.lineTo(w,-h);c.lineTo(w*.8,0);c.lineTo(-w*.8,0);c.fill()
    // ink frame: loaded rim strokes, lighter ribs, a dark float underneath
    c.fillStyle=K(.9*A)
    B(c,u=>[(u*2-1)*w*1.1,-h],u=>.4+.5*s*P(u),24)
    B(c,u=>[(u*2-1)*w*1.5,.8*s],u=>.5+1*s*P(u),30)
    c.fillStyle=K(.55*A)
    for(const m of[-1,0,1])B(c,u=>[m*w*(1-.2*u),-h+u*h],u=>.3+.3*s,16)
    c.restore()
  }
  // reeds in the near corner, swaying
  c.filter='blur(.5px)'
  for(const[x,l,d,w,a]of[[214,62,-30,2.3,.9],[224,40,-8,1.8,.6],[230,74,-16,2.1,.8],[240,48,12,1.7,.55]]){
    const q=d+sin(T*t+x*.3)*3.5
    c.fillStyle=K(a)
    B(c,u=>[x+q*u*u,246-l*u],u=>w*(1-u)**.7+.25,50)
  }
  // one seed head, heavy with ink
  c.fillStyle=K(.86)
  B(c,u=>[230-16-(sin(T*t+69)*3.5)*-1+u*-5,246-74+u*-9],u=>2.2*P(u),14)
  c.filter='none';fade(c,26);snap(c,16,6)
}

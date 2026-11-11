// ink wash whirlwind, a gust swirling autumn leaves up in a spiral of dry brush strokes and scattering them
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
// funnel: height p from ground to top
Y=p=>226-172*p,
Q=p=>9+58*p**1.3,
AX=(p,t)=>112+p*26+12*p*sin(p*3+T*t),
L=['176,58,40','196,140,52']
export const frames=24,delay=85,dither=true
export default(c,t)=>{
  const r=R(12)
  // ground: wind sweeping in low, dust at the foot
  c.filter='blur(.5px)'
  for(let k=0;k<3;k++){
    c.fillStyle=K(k&1?.3:.5)
    B(c,u=>[6+k*14+u*(104-k*14),224-k*5-u*u*(4+k*5)+sin(u*5+k+T*t)*1.2],u=>(1.5-k*.3)*P(1-u),80)
  }
  c.filter='blur(3px)';c.fillStyle=K(.3)
  B(c,u=>[74+u*88,233+sin(u*7)],u=>5*sin(PI*u),30)
  // the funnel: one rising helix; the brush presses on each near sweep and skims behind
  const hx=(p,o=0)=>{const a=T*3*p-T*t;return[AX(p,t)+cos(a)*Q(p),Y(p)+sin(a)*Q(p)*.27+o,a]},
    env=p=>sin(PI*p)**.45
  c.filter='blur(.6px)';c.fillStyle=K(.22)
  B(c,p=>hx(p),p=>sin(hx(p)[2])<.1?env(p)*(.5+p*.7):0,700)
  c.fillStyle=K(.8)
  B(c,p=>hx(p),p=>{const q=sin(hx(p)[2]);return q>0?env(p)*(.4+q**1.6*(2.2+4.2*p)):0},900)
  // feibai: hairline gaps scratched through the trailing half of each sweep
  E(c,1);c.filter='none';c.fillStyle='#000'
  for(const o of[-2.1,-.5,1.2,2.6])
    B(c,p=>hx(p,o*(.6+p)),p=>{const a=hx(p)[2];return sin(a)>0&&cos(a)>-.15&&sin(p*90+o*3)<.75?.35+.5*p*max(0,cos(a)):0},900)
  E(c)
  // leaves: caught at the foot, carried round and up, flung out at the top
  for(let k=0;k<13;k++){
    const p=(t+k/13+r()*.04)%1,h=p**.85,a=r()*T+T*(1.5+r())*p,o=.7+r()*.5,
      fl=max(0,p-.72),d=r()<.7?1:-1,
      x=AX(h,t)+cos(a)*Q(h)*o+d*fl*fl*520,y=Y(h)+sin(a)*Q(h)*.26*o-fl*40+fl*fl*260,
      fr=sin(a)>0,l=(7+r()*4.5)*(fr?1.15:.8),sp=r()*T+T*(r()<.5?2:-3)*p,
      A=min(1,p*8,(1-p)*4.5)*(fr?1:.6),col=r()
    c.fillStyle=col<.26?`rgba(${L[0]},${.8*A})`:col<.42?`rgba(${L[1]},${.8*A})`:K((col<.75?.86:.55)*A)
    c.filter='blur(.5px)'
    // a leaf is one pressed dab with a flicked stem
    B(c,u=>[x+cos(sp)*(u-.5)*l*2,y+sin(sp)*(u-.5)*l*2],u=>l*.34*sin(PI*u**.75)**.9*(.45+.55*abs(cos(sp*1.5+k))),18)
    B(c,u=>[x+cos(sp)*(-.5-u*.45)*l*2,y+sin(sp)*(-.5-u*.45)*l*2+u*u*2],u=>.55,8)
  }
  c.filter='none';fade(c,16);snap(c)
}

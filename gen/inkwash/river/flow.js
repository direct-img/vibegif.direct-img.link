// ink wash river winding through a valley from distant hills to the foreground, current strokes flowing along it between rocky banks
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
// river in perspective: v=0 far, v=1 near
Y=v=>62+178*v**1.5,
C=v=>126+(4+52*v**.9)*sin(T*1.45*v**.7+.4),
H=v=>(2+37*v**1.4),
ed=(s,v,o=0)=>[C(v)+s*(H(v)*(1+.2*sin(v*21+s*1.7)+.1*sin(v*47+s))+o),Y(v)],
seg=(L,u)=>{const v=u*(L.length-1),k=min(L.length-2,v|0),f=v-k;return[L[k][0]+(L[k+1][0]-L[k][0])*f,L[k][1]+(L[k+1][1]-L[k][1])*f]},
// boulder: angular wash with a loaded stroke along one contour
rock=(c,x,y,z)=>{
  const L=[[x-z,y+z*.35],[x-z*.75,y-z*.45],[x-z*.1,y-z*.85],[x+z*.65,y-z*.4],[x+z,y+z*.35]]
  c.filter='blur(1px)';c.fillStyle=K(.5);c.beginPath();L.map(p=>c.lineTo(...p));c.fill()
  c.filter='blur(.5px)';c.fillStyle=K(.93)
  B(c,u=>seg(L,u*.62),u=>z*.17*P(u)+.3,40)
}
export const frames=28,delay=85,dither=true
export default(c,t)=>{
  const r=R(4)
  // far hills closing the valley
  for(const[L,a]of[[[[2,90],[30,52],[56,36],[82,54],[116,74]],.34],[[[124,70],[164,46],[198,32],[226,48],[254,76]],.2]]){
    const g=c.createLinearGradient(0,30,0,108)
    g.addColorStop(0,K(a+.12));g.addColorStop(1,K(0))
    c.filter='blur(2.5px)';c.fillStyle=g;c.beginPath();c.moveTo(L[0][0],112)
    L.map(p=>c.lineTo(...p));c.lineTo(L[4][0],112);c.fill()
    c.filter='blur(.6px)';c.fillStyle=K(a+.25)
    B(c,u=>{const[x,y]=seg(L,.2+u*.55);return[x,y+sin(u*9)*1.3]},u=>1.7*P(u),60)
  }
  // banks: wet wash pooling at the water's edge and thinning outward
  for(const[o,q,a,b]of[[24,24,.14,8],[12,15,.2,5],[4,7,.3,2.5]]){
    c.filter=`blur(${b}px)`;c.fillStyle=K(a)
    for(const s of[-1,1])B(c,u=>ed(s,u,o*(.3+u)),u=>q*(.25+u)*(.75+.25*sin(u*19+s)),70)
  }
  // the water itself stays bare
  E(c,1);c.filter='blur(1.2px)';c.fillStyle='#000';c.beginPath()
  for(let k=0;k<=80;k++)c.lineTo(...ed(-1,k/80))
  for(let k=80;k>=0;k--)c.lineTo(...ed(1,k/80))
  c.fill();E(c)
  // broken bank contours, heavier toward the viewer
  c.filter='blur(.5px)'
  for(const[s,a,b]of[[-1,.03,.22],[-1,.3,.5],[-1,.56,.74],[-1,.8,.97],[1,.06,.3],[1,.36,.6],[1,.66,.86],[1,.9,1]]){
    c.fillStyle=K(.45+b*.4)
    B(c,u=>ed(s,a+(b-a)*u,.6),u=>(.5+2.1*(a+(b-a)*u))*P(u),110)
  }
  // boulders on the banks and one in the stream, small tree clumps further off
  for(const[v,s,o]of[[.22,1,2],[.34,-1,2],[.5,1,3],[.63,-1,4],[.8,1,5],[.93,-1,6]])
    rock(c,...ed(s,v,o),2+v*8)
  for(const[v,s,o]of[[.4,-1,20],[.45,-1,34],[.58,1,22],[.17,1,7],[.2,-1,9]]){
    const[x,y]=ed(s,v,o),z=2.5+v*9
    c.fillStyle=K(.8)
    B(c,u=>[x+u*z*.3,y-u*z*2.6],u=>z*.16*(1-u*.6),14)
    for(let k=0;k<6;k++){
      const h=z*(1.2+k*.42),w=z*(1.5-k*.17)*(.7+r()*.5),d=(r()-.5)*z*.8
      c.fillStyle=K(k&1?.86:.6)
      B(c,u=>[x+d+(u-.5)*w*1.6,y-h+sin(u*3)],u=>z*.42*P(u),10)
    }
  }
  const[rx,ry]=ed(.25,.7)
  rock(c,rx,ry,8)
  // current: thin tapered strokes sliding from far to near
  for(let k=0;k<20;k++){
    const o=(r()*2-1)*.68,p=(t+r())%1,l=.07+r()*.08,w=.3+r()*.4,a=k%3?.42:.66
    c.fillStyle=K(a*sin(PI*p)**.5)
    B(c,u=>{const v=min(1,p*1.03+u*l);return[C(v)+o*H(v),Y(v)]},u=>(.3+2.2*(p+u*l))*w*P(u),60)
  }
  // wake curling round the rock
  for(const m of[-1,1]){
    c.fillStyle=K(.5)
    B(c,u=>[rx+m*(10+u*6)+sin(T*t+m)*1.2,ry+3+u*14],u=>1.1*P(u),20)
  }
  c.filter='none';fade(c,22);snap(c)
}

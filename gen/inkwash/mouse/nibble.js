// ink wash little mouse sitting up holding and nibbling a chestnut, whiskers twitching and tail curling
const{PI,sin,cos,min,max,abs,hypot,floor}=Math,T=2*PI
const K=a=>a.at?a:`rgba(20,18,16,${a})`
const R=n=>(n=sin(n*127.1+3.7)*43758.5453,n-floor(n))
const sm=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x))
// smooth curve through points
const cv=(p,n=36)=>[...Array(n+1)].map((_,k)=>{
  const u=k/n*(p.length-1),i=min(u|0,p.length-2),f=u-i,
    a=p[max(i-1,0)],b=p[i],d=p[i+1],e=p[min(i+2,p.length-1)]
  return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f*f*f))
})
// pressure: press in, swell, taper to a point
const pf=u=>min(1,u*5)**.5*(1-u**2.5)
const nm=(s,k)=>{
  const a=s[max(k-1,0)],b=s[min(k+1,s.length-1)],l=hypot(b[0]-a[0],b[1]-a[1])||1
  return[(a[1]-b[1])/l,(b[0]-a[0])/l]
}
const F=(c,b)=>c.filter=b?`blur(${b}px)`:'none'
// loaded brush stroke: ribbon of varying width
const br=(c,p,w,a,f=pf,b=.6)=>{
  const s=cv(p),n=s.length-1,L=[],Q=[]
  s.forEach(([x,y],k)=>{
    const[nx,ny]=nm(s,k),h=w/2*f(k/n)+.3
    L.push([x+nx*h,y+ny*h]);Q.unshift([x-nx*h,y-ny*h])
  })
  F(c,b);c.fillStyle=K(a);c.beginPath()
  ;[...L,...Q].forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))
  c.fill();F(c)
}
// dry brush: parallel hairlines with gaps that grow toward the tail
const dry=(c,p,w,a,sd=1,g=.5,h=7)=>{
  const s=cv(p,48),n=s.length-1
  c.strokeStyle=K(a);c.lineWidth=max(.7,w/h*.6)
  for(let j=0;j<h;j++){
    const o=(j/(h-1)-.5)*w*(.8+.4*R(sd+j));let on=0
    c.beginPath()
    s.forEach(([x,y],k)=>{
      const u=k/n,[nx,ny]=nm(s,k),v=R(sd+j*17+(k/6|0)*3.1)>g*(.3+u),q=o*(.4+.6*pf(u))
      v&&(on?c.lineTo(x+nx*q,y+ny*q):c.moveTo(x+nx*q,y+ny*q));on=v
    })
    c.stroke()
  }
}
// wet wash blob through points
const ws=(c,p,a,b=3)=>{
  const n=p.length,m=k=>[(p[k%n][0]+p[(k+1)%n][0])/2,(p[k%n][1]+p[(k+1)%n][1])/2]
  F(c,b);c.fillStyle=K(a);c.beginPath();c.moveTo(...m(0))
  for(let k=1;k<=n;k++)c.quadraticCurveTo(...p[k%n],...m(k))
  c.fill();F(c)
}
const el=(c,x,y,rx,ry,r,a,b=2)=>{F(c,b);c.fillStyle=K(a);c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fill();F(c)}
const cut=(c,f)=>{c.globalCompositeOperation='destination-out';f();c.globalCompositeOperation='source-over'}
const fade=(c,w=16)=>cut(c,_=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){
    for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s
    d[k+3]=min(255,Math.round(d[k+3]/a)*a)
  }
  c.putImageData(m,0,0)
}
export const frames=24,delay=80,dither=true
const BR='rgba(120,70,40,.6)'
export default(c,t)=>{
  const n=sin(6*T*t)*(.55+.45*sin(T*t-1)),w=sin(3*T*t),tl=sin(T*t),b=sin(T*t)*.8
  // ground shadow, dry sweep
  el(c,128,214,62,6,0,.2,4)
  dry(c,[[60,216],[120,219],[196,215]],6,.4,3,.5,4)
  // tail: one long stroke curling at the tip
  br(c,[[92,196],[60,210],[34,196+tl*3],[32,170+tl*6],[48,160+tl*8],[56,170+tl*6]],6.5,.72,u=>(1-u*.75)*min(1,u*8+.3),.4)
  // body: soft wash strokes in two tones, belly left pale, contour broken, dry fur at the edges
  ws(c,[[110,138],[150,138],[162,168],[158,200],[134,213],[100,206]],.15,4)
  br(c,[[124,116],[94,136],[82,172],[92,202],[124,214]],34,.36,u=>min(1,u*3)**.6*(1-u**3)*(.75+.25*sin(u*PI)),3)
  br(c,[[114,122],[88,144],[79,176],[88,200]],15,.34,u=>sin(u*PI)**.6*(.7+.3*sin(u*7)**2),2.5)
  br(c,[[108,124],[90,138],[80,156]],4.5,.7,u=>min(1,u*4)**.5*(1-u**2))
  br(c,[[75,178],[80,196],[92,207]],4,.6,u=>sin(u*PI)**.6)
  for(let k=0;k<5;k++){
    const r=R(k+2),u=(k+.5)/5,x=92-sin(u*PI)*13,y=134+u*66
    for(let j=0;j<3;j++){
      const q=R(k*3+j+20),o=j*3.4-3
      br(c,[[x+9+o,y-8+o*.6],[x+1+o*.7,y+1+q*3],[x-6-r*4-q*4,y+8+r*5+j*2]],1.5+q*1.6,[.75,.45,.6][(j+k)%3],pf,.3)
    }
  }
  br(c,[[120,172],[144,173],[158,193],[147,210]],8,.4,u=>sin(u*PI)**.5*(.6+.4*sin(u*6)**2),1)
  // hind foot
  br(c,[[130,209],[148,213],[166,212]],7,.82,u=>1-u*.5)
  c.save();c.translate(0,b+n*.8);c.translate(130,130);c.rotate(n*.02);c.translate(-130,-130)
  // head: pale wash wedge, darker soft load over the crown, broken brow stroke
  ws(c,[[112,128],[122,100],[146,90],[170,98],[191,116],[186,128],[164,138],[134,140]],.22,3)
  br(c,[[116,116],[134,98],[158,96],[180,108]],20,.32,u=>sin(u*PI)**.5,3)
  br(c,[[140,92],[160,94],[178,105],[192,116]],5,.7,u=>min(1,u*4)**.5*(1-u**1.5)*(.5+.5*sin(u*6)**2))
  for(let j=0;j<3;j++)br(c,[[122+j*3,116+j*2],[119+j*3,128],[121+j*2,138+j*2]],1.8,.5-j*.1,pf,.3)
  // ears: translucent washes with a faint warm blush, rim pressed in on one side only
  const et=sin(3*T*t)*1.5
  ws(c,[[112,104],[104,86+et],[114,72+et],[128,78],[130,96]],.26,1.5)
  br(c,[[112,104],[104,86+et],[114,72+et]],4,.5,pf)
  ws(c,[[134,98],[129,74-et],[148,61-et],[163,76],[157,97]],.36,1.5)
  el(c,146,80-et*.5,8,10,-.3,'rgba(172,100,84,.14)',2.5)
  br(c,[[134,99],[129,74-et],[148,61-et],[160,70]],5.5,.8,u=>min(1,u*5)**.5*(1-u**2))
  br(c,[[162,80],[160,90],[156,97]],2.5,.45)
  // eye, nose, whiskers
  el(c,160,109,4,4.4,.2,.95,.3)
  cut(c,_=>el(c,161.2,107.6,1.1,1.1,0,1,0))
  el(c,191,117+n*.5,2.8,2.4,0,.9,.5)
  c.lineWidth=.9
  for(let k=0;k<5;k++){
    const a=-.6+k*.3+w*.12*(k%2?1:-1),l=22+R(k)*12
    c.strokeStyle=K(k%2?.75:.55);c.beginPath();c.moveTo(184,121)
    c.quadraticCurveTo(184+cos(a)*l*.5,121+sin(a)*l*.5-2,184+cos(a)*l,121+sin(a)*l-(3-k));c.stroke()
  }
  c.restore()
  // chestnut held in both paws, nibbled
  const cx=178,cy=152+n*1.5+b
  br(c,[[126,148],[148,158],[cx-12,cy+5]],10,.75,u=>1-u*.45)
  // chestnut: one loaded brown stroke, ink pooled on one side, pale base
  const nt=[[cx-12,cy+8],[cx-13,cy-6],[cx-2,cy-17],[cx+10,cy-8],[cx+11,cy+7]]
  br(c,[[cx-1,cy-20],[cx,cy-4],[cx,cy+13]],31,BR,u=>min(1,u*2.2)**.7*(1-u**6*.5),1.2)
  br(c,[[cx-9,cy+9],[cx-13,cy-4],[cx-5,cy-15]],9,.42,u=>sin(u*PI)**.5,1.8)
  br(c,[[cx-3,cy-23],[cx-1,cy-18],[cx+2,cy-15]],2.6,.8)
  cut(c,_=>br(c,[[cx-11,cy+10],[cx,cy+13],[cx+12,cy+9]],6,.75,u=>sin(u*PI)**.5,1))
  br(c,[[cx-12,cy+7],[cx,cy+9],[cx+12,cy+6]],1.6,.4,u=>sin(u*PI)**.5*(.4+.6*sin(u*7)**2))
  for(const o of[-6,-1,4])br(c,[[cx-18+abs(o)*.3,cy+o],[cx-12,cy+o+1.5],[cx-7,cy+o+1]],2.6,.9,u=>1-u*.5,.2)
  // crumbs falling
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1
    el(c,cx+14+k*3+p*5,cy-8+p*p*62,1.7,1.3,0,.7*(1-p),.2)
  }
  fade(c,16);snap(c)
}

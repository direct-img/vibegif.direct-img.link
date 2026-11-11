// ink wash snow monkey soaking in a steaming hot spring with eyes closed, snow on its head, snowflakes drifting down
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
export const frames=24,delay=100,dither=true
const RD='rgba(172,74,58,.5)'
export default(c,t)=>{
  const b=0,X=122,Y=120
  // rock behind, dry brushed, snow-capped
  ws(c,[[176,150],[196,128],[222,132],[240,156],[236,192],[180,194]],.36,3)
  dry(c,[[200,134],[188,160],[184,192]],22,.6,3,.4,7)
  dry(c,[[224,138],[232,162],[228,192]],18,.78,5,.45,6)
  br(c,[[184,146],[198,128],[220,130],[238,150]],6,.85)
  cut(c,_=>ws(c,[[186,138],[198,124],[216,124],[232,138],[218,140],[204,136]],1,1))
  c.save();c.translate(112,204);c.scale(1.22,1.22);c.translate(-122,-204)
  // shoulders sinking into the water
  ws(c,[[66,204],[70,172],[92,152],[122,148],[152,152],[174,172],[178,204],[122,210]],.4,3)
  ws(c,[[70,204],[80,180],[122,186],[164,180],[174,204],[122,210]],.3,4)
  for(let k=0;k<15;k++){
    const r=R(k+3),q=R(k+23),x=72+k*7.2+q*4,d=(x-122)/50
    br(c,[[x-d*5,154+abs(d)*16+q*8],[x,172+q*6],[x+d*6+r*3,188+r*14]],4+r*3,[.36,.55,.78][k%3],pf,.8)
  }
  dry(c,[[84,170],[80,186],[76,202]],12,.6,5,.4,5);dry(c,[[160,170],[164,186],[168,202]],12,.6,7,.4,5)
  // head: wet mass with radiating dry-brush fur
  ws(c,[[X-44,Y],[X-36,Y-30],[X,Y-42],[X+36,Y-30],[X+44,Y],[X+34,Y+30],[X,Y+38],[X-34,Y+30]],.42,3.5)
  for(let k=0;k<40;k++){
    const r=R(k+40),q=R(k+90),a=k/40*T+q*.3,ca=cos(a),sa=sin(a),r0=24+q*10,l=13+r*10
    br(c,[[X+ca*r0,Y+sa*r0*.92],[X+ca*(r0+l*.6)+q*2,Y+sa*(r0+l*.6)*.9+2],[X+ca*(r0+l),Y+sa*(r0+l)*.88+5+r*3]],3.5+r*3,[.4,.6,.8][k%3],pf,.7)
  }
  for(const a of[.5,2.6,3.6,5.9])dry(c,[[X+cos(a)*30,Y+sin(a)*27],[X+cos(a)*42,Y+sin(a)*37+3],[X+cos(a)*50,Y+sin(a)*42+9]],9,.7,a*9,.4,4)
  // ears
  for(const s of[-1,1]){
    el(c,X+s*38,Y-3,5,7,0,.6,1);el(c,X+s*38,Y-3,2.5,4,0,RD,.8)
  }
  // bare face, muted red
  const fc=[[X-18,Y-12],[X-8,Y-17],[X,Y-12],[X+8,Y-17],[X+18,Y-12],[X+22,Y+2],[X+15,Y+19],[X,Y+26],[X-15,Y+19],[X-22,Y+2]]
  cut(c,_=>ws(c,fc,1,1));ws(c,fc,RD,1.5)
  el(c,X,Y+14,11,9,0,'rgba(172,74,58,.25)',2)
  br(c,[[X-21,Y-10],[X-9,Y-13],[X,Y-9],[X+9,Y-13],[X+21,Y-10]],5,.8,u=>.6+.4*abs(cos(u*PI)))
  for(const s of[-1,1]){
    br(c,[[X+s*16,Y-1],[X+s*10,Y+.5],[X+s*5,Y-2]],2.8,.93,u=>.35+.65*sin(u*PI),.3)
    el(c,X+s*2.6,Y+11,1.1,1.6,s*.4,.9,.2)
  }
  br(c,[[X-7,Y+18],[X,Y+19.5],[X+7,Y+18.3]],1.9,.75,u=>sin(u*PI)+.2,.3)
  br(c,[[X-1,Y-6],[X-1.5,Y+2],[X-.5,Y+8]],2.2,.3)
  for(const s of[-1,1])el(c,X+s*10,Y-2,7.5,5,0,.2,2.5)
  // snow piled on the head
  const sn=[[X-28,Y-28],[X-18,Y-41],[X-2,Y-47],[X+16,Y-43],[X+28,Y-30],[X+14,Y-29],[X,Y-33],[X-14,Y-28]]
  cut(c,_=>ws(c,sn,1,.8))
  br(c,[[X-27,Y-33],[X-16,Y-44],[X-2,Y-49],[X+14,Y-46]],2.5,.36)
  c.restore()
  // ripples spreading on the water
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,a=sin(PI*p)**.7,w=72+p*40,y=208+p*16
    br(c,[[112-w,y-3],[112-w*.5,y+3],[112,y+5],[112+w*.55,y+3],[112+w,y-4]],5-p*2,.55*a,u=>sin(u*PI)**.5*(.5+.5*sin(u*7+k*2)**2))
  }
  cut(c,_=>{el(c,84,203,30,5,0,.8,3);el(c,150,205,24,4,0,.7,3)})
  // steam: faint wisps beside, soft erasures across the body
  for(let k=0;k<4;k++){
    const p=(t+k/4)%1,a=sin(PI*p),x=[34,206,78,160][k],y=190-p*80,s=sin(T*p+k)*7
    k<2?br(c,[[x,y+30],[x+s,y+10],[x-s,y-10],[x+s*.6,y-32]],20,.26*a,u=>sin(u*PI)**.6,4)
      :cut(c,_=>br(c,[[x,y+22],[x+s,y+8],[x-s,y-8],[x+s*.6,y-22]],16,.5*a,u=>sin(u*PI)**.6,5))
  }
  // snowflakes: holes over ink, faint dots over empty space
  for(let k=0;k<11;k++){
    const x=14+R(k+80)*228+sin(T*t+k)*5,r=1.6+R(k+60)*1.6
    for(const o of[-128,0,128]){
      const y=(R(k+70)*128+t*128)%128+o+40
      cut(c,_=>el(c,x,y,r+.6,r+.6,0,1,.4));el(c,x,y,r,r,0,.24,.4)
    }
  }
  fade(c,20);snap(c,16,8)
}

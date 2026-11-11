// ink wash elephant standing in shallow water, trunk curled up spraying an arc of water droplets over its back
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
export const frames=24,delay=85,dither=true
const leg=(c,p,a,w=22)=>{
  // heavy tapered stroke, a second darker load toward the foot
  br(c,p,w,a*.6,u=>min(1,u*4+.2)*(.8+.2*cos(u*T)-u*.12),2.2)
  br(c,p.slice(1),w*.9,a*.75,u=>min(1,u*1.6)**1.5*(.85+.15*sin(u*5)),1.8)
  const[x,y]=p[p.length-1]
  el(c,x,y-2,w*.56,5,0,a,1.2)
  cut(c,_=>{for(const o of[-7,-1,5])el(c,x+o,y,1.8,2.4,0,.7,.3)})
}
export default(c,t)=>{
  const s=sin(T*t),s2=sin(T*t+1.2)
  // far legs
  leg(c,[[126,150],[128,180],[124,198],[127,212]],.36,19);leg(c,[[208,144],[214,172],[207,194],[210,212]],.36,20)
  // body: one wet mass, ink pooled along the back and rear flank, belly and lit side left pale
  const bd=[[86,98],[112,80],[150,71],[190,77],[216,98],[227,130],[216,160],[180,168],[132,170],[96,160],[80,130]]
  ws(c,bd,.2,3)
  c.save();ws(c,bd,0,0);c.clip()
  br(c,[[236,150],[232,100],[200,70],[150,62],[104,74]],44,.46,u=>min(1,u*3)**.5*(1-u**2*.7),5)
  br(c,[[232,160],[222,120],[204,92]],34,.36,u=>sin(u*PI)**.5,7)
  br(c,[[150,84],[170,100],[176,128]],30,.16,u=>sin(u*PI)**.5,8)
  c.restore()
  cut(c,_=>br(c,[[112,150],[136,160],[166,158]],22,.5,u=>sin(u*PI)**.6,7))
  // a few sagging wrinkles, broken
  br(c,[[150,84],[158,104],[152,124]],2.6,.5,u=>sin(u*PI)**.5*(.4+.6*sin(u*7)**2),.5)
  br(c,[[176,90],[186,116],[180,146]],3,.45,u=>sin(u*PI)**.5*(.3+.7*sin(u*6+1)**2),.5)
  br(c,[[204,104],[211,128],[206,152]],2.4,.5,u=>sin(u*PI)**.5*(.3+.7*sin(u*8)**2),.5)
  dry(c,[[136,128],[142,146],[136,164]],8,.4,8,.5,3)
  // back line, pressed in at the rump and lifting off toward the head
  br(c,[[228,142],[226,106],[200,80],[160,70],[128,74]],9,.8,u=>min(1,u*4)**.5*(1-u**2)*(.7+.3*sin(u*6)**2))
  br(c,[[118,169],[150,174],[176,171]],3.5,.5,u=>sin(u*PI)**.5*(.4+.6*sin(u*6)**2))
  // tail
  br(c,[[226,110],[234+s2*3,134],[232+s2*7,160]],4.5,.8,u=>1-u*.5)
  dry(c,[[232+s2*7,158],[233+s2*9,168],[231+s2*11,176]],7,.85,2,.3,4)
  // near legs
  leg(c,[[102,146],[99,176],[103,196],[100,214]],.7);leg(c,[[188,140],[197,170],[188,193],[191,214]],.7,25)
  // head: wash, darker on the crown
  ws(c,[[62,104],[76,84],[100,80],[116,96],[112,130],[92,144],[70,136]],.3,2.5)
  br(c,[[112,90],[90,84],[70,98]],22,.3,u=>sin(u*PI)**.5,5)
  br(c,[[108,82],[86,80],[68,92],[62,112]],7,.78)
  // trunk: one swelling, curling stroke with a loaded underside
  const tx=96+s*3,ty=58-s*2,
    tr=[[70,128],[52,140],[36,126],[38,96],[56,72],[78,62],[tx,ty]]
  br(c,tr,24,.5,u=>(1-u*.6)*(.9+.1*sin(u*9)),1)
  br(c,tr.map(([x,y],k)=>[x-4+k*.5,y+3]),9,.75,u=>sin(u*PI)**.4*(1-u*.5)*(.7+.3*sin(u*11)**2),.6)
  // ear: large loaded wash, darker rim, two fold strokes
  const e=1+s*.08,E=([x,y])=>[122-(122-x)*e,y],
    er=[[104,90],[128,86],[144,104],[142,134],[124,154],[108,140],[102,114]].map(E)
  ws(c,er,.42,2.5)
  br(c,[[136,100],[140,128],[126,148]].map(E),18,.3,u=>sin(u*PI)**.5,4)
  br(c,[[108,90],[130,87],[145,106],[142,136],[123,155]].map(E),7,.82,u=>min(1,u*5)**.5*(1-u**3)*(.55+.45*sin(u*8)**2))
  br(c,[[114,100],[122,120],[116,140]].map(E),2.6,.5,u=>sin(u*PI)**.5*(.4+.6*sin(u*7)**2),.5)
  br(c,[[128,98],[133,116],[130,132]].map(E),2,.4,pf,.5)
  // tusk and eye
  cut(c,_=>br(c,[[80,132],[70,144],[58,148]],7,1,u=>1-u*.7,.3))
  br(c,[[82,136],[72,147],[59,150]],2,.6)
  el(c,88,108,2.6,2,0,.93,.3)
  br(c,[[82,103],[88,101],[94,104]],2,.7)
  // spray: a fine pale fan of wash, then droplets cut out of the ink and faint in the air
  for(const w of[24,36])
    br(c,[[100,54],[136,16],[188,22],[224,72]],w,.13,u=>min(1,u*3)*(1-u**3)*(.6+.4*sin(u*9+w)),5)
  cut(c,_=>br(c,[[150,72],[178,80],[204,96]],14,.45,u=>sin(u*PI)**.5,5))
  for(let k=0;k<30;k++){
    const p=(2*t+k/30+R(k)*.04)%1,r=R(k+5),q=R(k+15),vx=96+r*66,vy=96+q*50,gv=140+q*50,
      x=tx+4+p*vx,y=ty-2-p*vy+p*p*gv,
      a=min(1,p*8)*(1-p**5),z=2.2+q*2.2+p*.8,g=Math.atan2(2*p*gv-vy,vx)
    cut(c,_=>el(c,x,y,z*2+1,z+.6,g,a,.4))
    el(c,x,y,z*2,z*.6,g,(.4+r*.4)*a,.4)
  }
  // water at the feet
  cut(c,_=>{c.fillStyle='#000';F(c,3);c.fillRect(70,216,170,12);F(c)})
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,a=sin(PI*p)**.7,w=70+p*40,y=217+p*10
    br(c,[[150-w,y-2],[150-w*.4,y+3],[150+w*.3,y+1],[150+w,y-2]],5-p*2,.55*a,u=>sin(u*PI)**.5*(.5+.5*sin(u*8+k*2)**2))
  }
  fade(c,18);snap(c,8,8)
}

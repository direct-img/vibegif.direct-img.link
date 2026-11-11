// ink wash narcissus growing in a shallow bowl, long blade leaves swaying and small white flowers with golden cups nodding
export const frames=24,delay=90,dither=true
const{sin,cos,PI,min,max,hypot}=Math,T=PI*2
const I=a=>`rgba(20,18,16,${a})`
const rn=s=>()=>(s=s*16807%2147483647)/2147483647
const E=u=>u<0?0:u>1?1:u*u*(3-2*u),ss=(a,b,u)=>E((u-a)/(b-a))
const Q=(a,b,d,e,g,h)=>u=>[(1-u)**2*a+2*u*(1-u)*d+u*u*g,(1-u)**2*b+2*u*(1-u)*e+u*u*h]
// brush stroke: outline offset from a centerline, width following a pressure profile
const S=(c,f,w,col,pr=u=>sin(PI*u)**.6,n=18)=>{
  const P=[...Array(n+1)].map((_,k)=>f(k/n)),L=[],R=[]
  P.map(([x,y],k)=>{
    const[a,b]=P[max(k-1,0)],[d,e]=P[min(k+1,n)],h=hypot(d-a,e-b)||1,r=w*pr(k/n)/2
    L.push([x+(b-e)/h*r,y+(d-a)/h*r]);R.unshift([x-(b-e)/h*r,y-(d-a)/h*r])
  })
  c.fillStyle=col;c.beginPath();[...L,...R].map(([x,y])=>c.lineTo(x,y));c.fill()
}
// dry-brush hairlines riding along a stroke
const H=(c,f,w,col,m=4,u0=.5,sd=7)=>{
  const r=rn(sd);c.strokeStyle=col;c.lineWidth=.9
  for(let j=0;j<m;j++){
    const o=(j/(m-1)-.5)*w,a=u0+r()*.15,b=.8+r()*.2;c.beginPath()
    for(let k=0;k<=12;k++){
      const u=a+(b-a)*k/12,[x,y]=f(u),[X,Y]=f(u+.02),h=hypot(X-x,Y-y)||1
      c.lineTo(x-(Y-y)/h*o,y+(X-x)/h*o)
    }
    c.stroke()
  }
}
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
const C=p=>u=>{
  const n=p.length-1,s=min(n-1e-6,max(0,u)*n),k=s|0,f=s-k,g=j=>p[min(n,max(0,j))],[a,b,d,e]=[g(k-1),g(k),g(k+1),g(k+2)]
  return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f**3))
}
// flower: six pale petals cut out of the ink behind and drawn in fine line, a golden cup at the heart
const N=(c,x,y,r,rot)=>{
  c.save();c.translate(x,y);c.rotate(rot);c.scale(1,.84)
  for(let k=0;k<6;k++){
    const a=k*T/6+(k%2)*.12,tx=cos(a)*r,ty=sin(a)*r,nx=-sin(a)*r*.36,ny=cos(a)*r*.36,
      e=s=>Q(0,0,tx*.5+nx*s,ty*.5+ny*s,tx,ty)
    c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(tx*.5+nx*2,ty*.5+ny*2,tx,ty);c.quadraticCurveTo(tx*.5-nx*2,ty*.5-ny*2,0,0)
    c.globalCompositeOperation='destination-out';c.fillStyle='#000';c.fill()
    c.globalCompositeOperation='source-over';c.fillStyle=I(.07);c.fill()
    S(c,e(2),1.7,I(.72),u=>sin(PI*u)**.5+.2,10);S(c,e(-2),1.2,I(.5),u=>sin(PI*u)**.5+.2,10)
  }
  c.fillStyle='rgba(216,150,36,.9)';c.beginPath();c.arc(0,0,r*.34,0,T);c.fill()
  S(c,u=>[cos(u*4+1)*r*.34,sin(u*4+1)*r*.34],1.8,'rgba(150,84,16,.9)',u=>sin(PI*u),10)
  c.fillStyle=I(.8);c.beginPath();c.arc(0,0,1.2,0,T);c.fill()
  c.restore()
}
// blades: root x, lean, height, hook, width, tone, phase
const bl=[[100,-52,112,-20,9,.36,.1],[108,-22,156,-12,11,.8,.3],[116,10,176,14,10,.55,.5],
  [128,44,150,30,11,.8,.8],[136,80,118,34,9.5,.36,1.1],[122,24,96,8,8,.55,.6],[96,-76,70,-16,7,.55,0]]
export default(c,t)=>{
  const w=(p,a=1)=>a*sin(T*t-p)
  // flower stalks
  const st=[[110,96,62,.2],[126,166,80,.8]].map(([x0,x1,y1,p])=>{
    const dx=w(p,5),f=Q(x0,204,x0+(x1-x0)*.2,120,x1+dx,y1)
    S(c,f,3.4,I(.6),u=>1-u*.4,14)
    return[x1+dx,y1,p]
  })
  bl.map(([x,dx,h,hk,wd,a,p],k)=>{
    const s=w(p,h*.05),f=C([[x,206],[x+dx*.3+s*.25,206-h*.5],[x+dx*.8+s*.7,206-h*.9],[x+dx+hk*.5+s,206-h+Math.abs(hk)*.25]])
    S(c,f,wd,I(a),u=>(.4+.6*sin(PI*min(1,u*1.3))**.8)*(1-u)**.45*(1-.35*sin(PI*u)**6*(k%2)),26)
  })
  // bulbs
  ;[[102,203,12,.36],[120,205,14,.2],[138,204,11,.36]].map(([x,y,r,a],k)=>{
    c.filter='blur(1px)';c.fillStyle=I(a);c.beginPath();c.ellipse(x,y,r,r*.8,0,0,T);c.fill();c.filter='none'
    S(c,u=>[x+cos(2+u*2.6)*r,y+sin(2+u*2.6)*r*.8],2.6,I(.78),u=>sin(PI*u)**.5,12)
    S(c,Q(x-2,y-r*.8,x+k-1,y-r*1.1,x+1,y-r*1.4),5,I(.6),u=>1-u*.6,6)
  })
  // shallow bowl: one wet wash, a loaded rim stroke, a dry foot
  c.filter='blur(1px)';c.fillStyle=I(.3);c.beginPath();c.moveTo(62,209)
  c.bezierCurveTo(84,218,170,219,194,208);c.bezierCurveTo(184,232,158,240,126,240);c.bezierCurveTo(96,240,70,230,62,209);c.fill()
  c.fillStyle=I(.26);c.beginPath();c.moveTo(62,209);c.bezierCurveTo(70,232,100,240,132,240);c.bezierCurveTo(104,232,84,222,62,209);c.fill()
  c.filter='none'
  S(c,C([[58,205],[84,214],[128,217],[170,214],[198,204]]),5,I(.9),u=>(.3+.7*sin(PI*u)**.5)*(.7+.3*sin(u*6+1)),24)
  S(c,C([[196,206],[188,226],[164,237]]),2.4,I(.7),u=>sin(PI*u)**.5,10)
  S(c,Q(100,243,128,246,152,243),3,I(.55),u=>sin(PI*u)**.5)
  // flowers nodding on the stalks
  st.map(([x,y,p],k)=>{
    const n=w(p+.5,.12)
    ;(k?[[6,0,16,.2],[-16,12,14,-.5]]:[[-14,8,16,-.4],[12,12,16.5,.5],[2,-10,15,.1]]).map(([dx,dy,r,a])=>{
      S(c,Q(x,y+8,x+dx*.4,y+dy*.4,x+dx,y+dy),2,I(.6),u=>1-u*.3,6)
      N(c,x+dx+n*8,y+dy,r,a+n)
    })
  })
  fade(c);snap(c)
}

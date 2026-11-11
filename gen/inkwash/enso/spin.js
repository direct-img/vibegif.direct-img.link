// ink wash loading spinner, a single brush stroke chasing itself around a zen enso circle with a dark wet head and a dry fading tail
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
ink=(a,v=18)=>`rgba(${v+3},${v},${v-3},${a*.85})`,
// brush stroke with body: centerline f(u), width w(u), painted from u=a to u=e
br=(c,f,w,col,e=1,a=0,n=40)=>{
  const L=[],Q=[]
  for(let k=0;k<=n;k++){
    const u=a+(e-a)*k/n,[x,y]=f(u),[X,Y]=f(u+.01),g=atan2(Y-y,X-x)+PI/2,h=w(u)/2
    L.push([x+C(g)*h,y+S(g)*h]);Q.unshift([x-C(g)*h,y-S(g)*h])
  }
  c.fillStyle=col;c.beginPath();[...L,...Q].forEach(p=>c.lineTo(...p));c.fill()
},
// dry brush (feibai): hairlines along f that break up more toward the end; lim = paint-in progress
dry=(c,f,w,al,sd=1,a=0,e=1,lim=9,nh=7,n=46,v=18)=>{
  c.lineCap='butt'
  for(let h=0;h<nh;h++)for(let k=0;k<n;k++){
    const p=k/n,d=(e-a)/n,u=a+(e-a)*p,o=(h/(nh-1)*2-1)*.46
    if(u>lim||S(h*12.9+k*.37+sd)+S(h*4.1+k*.83+sd*2)<p*2.5-1.45)continue
    const[x,y]=f(u),[X,Y]=f(u+d),g=atan2(Y-y,X-x)+PI/2,m=o*w(u),M=o*w(u+d)
    c.strokeStyle=ink(al*(1-p*.55),v);c.lineWidth=max(.6,w(u)/nh*.75)
    c.beginPath();c.moveTo(x+C(g)*m,y+S(g)*m);c.lineTo(X+C(g)*M,Y+S(g)*M);c.stroke()
  }
}
export const dither=true,frames=24,delay=60
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const h=t*T-PI/2,L=1.75*PI,
  f=u=>{const a=h-u*L,r=64+3*S(u*7+1)-u*4;return[128+C(a)*r,128+S(a)*r]},
  w=u=>21*min(1,(u/.035)**.5)*(1-.45*u),
  tp=e=>u=>w(u)*(1-(u/e)**4)
  // wet halo bleeding into the paper
  c.filter='blur(4px)';br(c,f,u=>tp(.5)(u)*1.5,ink(.13),.5)
  c.filter='blur(.7px)'
  br(c,f,tp(.8),ink(.4,70),.8)
  br(c,f,tp(.55),ink(.7,30),.55,0,70)
  br(c,f,tp(.36),ink(.9,14),.36,0,70)
  c.filter='blur(.3px)'
  dry(c,f,w,.85,3,.22,1,9,12,70)
}

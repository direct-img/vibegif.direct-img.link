// ink wash praying mantis clinging to a grass stalk that sways in the breeze, forelegs unfolding and folding, head turning
const{sin,cos,PI,abs,min,max,hypot,floor,round}=Math,T=2*PI
// seeded random, ink colour (J swaps in an accent), smoothstep, pulse (0→1→0 between a and b)
const R=n=>(n=sin(n*91.7+7.3)*43758.5)-floor(n)
let J='20,18,16'
const K=a=>`rgba(${J},${a})`
const ss=(a,b,x)=>(x=max(0,min(1,(x-a)/(b-a))))*x*(3-2*x)
const pu=(a,b,x)=>x<a||x>b?0:sin((x-a)/(b-a)*PI)**2
// catmull-rom through points, z closes it
const cr=(p,n=36,z)=>{
  const o=[],L=p.length,g=i=>z?p[(i%L+L)%L]:p[max(0,min(L-1,i))],m=z?L:L-1
  for(let k=0;k<=n;k++){
    const u=k/n*m,i=min(floor(u),m-1),f=u-i,[a,b,d,e]=[g(i-1),g(i),g(i+1),g(i+2)]
    o.push([0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f*f*f)))
  }
  return o
}
const path=(c,s)=>{c.beginPath();s.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))}
// brush stroke: presses in, swells, tapers to a point
const pf=u=>min(1,.3+u*5)**.7*(1-u**2.4)
const B=(c,p,w,a,f=pf,n=32)=>{
  const s=cr(p,n),l=[],r=[]
  s.forEach(([x,y],k)=>{
    const[q,v]=s[min(n,k+1)],[e,g]=s[max(0,k-1)],h=hypot(q-e,v-g)||1,d=w*f(k/n)/2
    l.push([x+(g-v)/h*d,y+(q-e)/h*d]);r.unshift([x-(g-v)/h*d,y-(q-e)/h*d])
  })
  c.fillStyle=K(a);path(c,[...l,...r]);c.fill()
}
// wet stroke: soft dabs stamped along the curve, a is the ink per dab
const M=(c,p,w,a,f=pf,sd=0,n=26)=>cr(p,n).forEach(([x,y],k)=>{
  const r=max(.5,w*f(k/n)/2*(.8+.4*R(sd+k))),g=c.createRadialGradient(x,y,0,x,y,r),q=a*(.7+.6*R(sd+k*3.3))
  g.addColorStop(0,K(q));g.addColorStop(.55,K(q*.8));g.addColorStop(1,K(0))
  c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,T);c.fill()
})
// flying white: hairline gaps scraped out of the tail end of a stroke
const F=(c,p,w,m=4,sd=1,u0=.45,f=pf,n=32)=>X(c,_=>{
  const s=cr(p,n);c.strokeStyle='#000'
  for(let j=0;j<m;j++){
    const o=(R(sd+j*5.7)-.5)*.8,k0=floor(n*(u0+R(sd+j)*.25))
    c.lineWidth=.5+R(sd+j*2.3)*1.1;c.beginPath()
    for(let k=k0,k1=min(n,k0+floor(n*(.12+.25*R(sd+j*9.1))));k<=k1;k++){
      const[x,y]=s[k],[q,v]=s[min(n,k+1)],[e,g]=s[max(0,k-1)],h=hypot(q-e,v-g)||1,d=o*w*f(k/n)
      k>k0?c.lineTo(x+(g-v)/h*d,y+(q-e)/h*d):c.moveTo(x+(g-v)/h*d,y+(q-e)/h*d)
    }
    c.stroke()
  }
})
// dry brush: m broken hairlines across width w
const D=(c,p,w,a,m=5,sd=1,n=28)=>{
  const s=cr(p,n);c.strokeStyle=K(a)
  for(let j=0;j<m;j++){
    const o=(j/(m-1||1)-.5)*w;let on=0
    c.lineWidth=.5+R(sd+j)*1.2;c.beginPath()
    s.forEach(([x,y],k)=>{
      const[q,v]=s[min(n,k+1)],[e,g]=s[max(0,k-1)],h=hypot(q-e,v-g)||1,X=x+(g-v)/h*o,Y=y+(q-e)/h*o
      R(sd+j*17+floor(k/3)*3.1)<.32+k/n*.3?on=0:(on?c.lineTo(X,Y):c.moveTo(X,Y),on=1)
    })
    c.stroke()
  }
}
// wet wash: closed soft blob
const W=(c,p,a,b=2,n=48)=>{c.filter=b?`blur(${b}px)`:'none';c.fillStyle=K(a);path(c,cr(p,n,1));c.fill();c.filter='none'}
// cut light areas out of the ink
const X=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';f();c.restore()}
const fade=(c,w=16)=>X(c,_=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=24,delay=90,dither=true
const ink='20,18,16',grn='88,108,78',
  dot=(c,x,y,r,a)=>{c.fillStyle=K(a);c.beginPath();c.arc(x,y,r,0,T);c.fill()},
  lf=u=>sin(min(1,u*.92+.08)*PI)**.7
export default(c,t)=>{
  const sw=.05*sin(t*T),u=pu(.12,.62,t),hr=.55*sin(t*T+1)*ss(0,.2,t)*(1-ss(.8,1,t))+.0
  // grass: a pale blade behind, the main stalk and its leaf swaying from the root
  c.save();c.translate(204,262);c.rotate(.05*sin(t*T-.9));c.translate(-204,-262)
  B(c,[[198,262],[176,222],[128,200],[84,206]],7,.36,lf);B(c,[[210,262],[222,214],[244,184]],6,.45,lf)
  c.restore()
  c.translate(204,262);c.rotate(sw);c.translate(-204,-262)
  const st=[[204,266],[180,198],[140,134],[98,88],[58,64],[30,62]]
  B(c,st,7,.8,u=>min(1,.6+u*3)*(1-u**1.4*.8));F(c,st,6,3,2,.1,u=>1-u*.7)
  B(c,[[176,190],[196,150],[232,120],[250,122]],9,.6,lf)
  B(c,[[58,64],[44,58],[30,62],[22,72]],4,.7,u=>1-u*.5)
  // mantis frame: x runs up the stalk, -y is away from it
  c.translate(150,147);c.rotate(-2.2+sw*.6);c.scale(1.55,-1.55)
  // walking leg: tapered femur, thinner tibia, joint accent, foot flick
  const leg=(a,h,k,f,o,al)=>{
    B(c,[[a+o,-7],[(a+h)/2+o,(k-7)/2-2],[h+o,k]],3,al,u=>1-u*.5)
    B(c,[[h+o,k],[(h+f)/2+o,k/2-1],[f+o,1],[f+o+(f>0?4:-4),0]],1.9,al,u=>1-u*.6)
    dot(c,h+o,k,1.3,al)
  }
  leg(-6,-20,-17,-38,5,.4);leg(3,15,-15,27,5,.4)
  // abdomen: loaded translucent strokes, pooled dark along the belly edge
  const ab=[[-50,-1],[-26,-10],[1,-8]]
  J=grn;M(c,ab,21,.13,lf,3,14);B(c,ab,14,.42,lf);B(c,[[-44,-1],[-24,-6],[-4,-5]],7,.3,lf);J=ink
  B(c,[[-46,0],[-26,-3],[-8,-3]],2.4,.6);D(c,[[-30,-17],[-12,-16],[2,-12]],1.5,.5,2,6,12)
  X(c,_=>{c.strokeStyle='rgba(0,0,0,.45)';c.lineWidth=.6;for(const x of[-36,-28,-20,-12]){c.beginPath();c.moveTo(x,-2);c.lineTo(x+2,-9);c.stroke()}})
  // folded wings: a pale veil with a few veins
  B(c,[[-54,-6],[-24,-17],[3,-11]],8,.2,lf)
  c.strokeStyle=K(.5);c.lineWidth=.5
  for(const d of[0,3.6]){c.beginPath();c.moveTo(-50,-5+d*.4);c.quadraticCurveTo(-24,-19+d,0,-12+d*.6);c.stroke()}
  leg(-8,-24,-19,-42,0,.8);leg(1,12,-17,22,0,.8)
  // raised prothorax, dark down its back
  const pt=[[0,-8],[14,-17],[31,-31]]
  J=grn;M(c,pt,12,.14,_=>1,8,10);B(c,pt,8,.5,u=>.7+.3*sin(u*PI));J=ink
  B(c,[[1,-12],[13,-21],[22,-28]],2.6,.75);D(c,[[4,-6],[16,-14],[28,-25]],1,.5,2,9,10)
  // raptorial forelegs: swelling spiny strokes that fold to pray and reach out
  for(const[o,al,d]of[[4,.45,.12],[0,.9,0]]){
    const v=max(0,u-d),fa=-1.05+.8*v,ta=fa+2.75-1.7*v,cx=30+o,cy=-13,
      fx=cx+cos(fa)*19,fy=cy+sin(fa)*19,tx=fx+cos(ta)*16,ty=fy+sin(ta)*16,
      sp=(x0,y0,x1,y1,g,n,l)=>{for(let k=1;k<=n;k++){const q=k/(n+1),x=x0+(x1-x0)*q,y=y0+(y1-y0)*q;B(c,[[x,y],[x+cos(g)*l,y+sin(g)*l]],1.5,al,u=>1-u)}}
    B(c,[[21+o,-23],[26+o,-17],[cx,cy]],4.5,al,u=>1-u*.4)
    J=grn;B(c,[[cx,cy],[fx,fy]],8.5,al*.5,u=>sin(min(1,u*.8+.15)*PI)**.6);J=ink
    B(c,[[cx,cy],[(cx+fx)/2-sin(fa),(cy+fy)/2+cos(fa)],[fx,fy]],5,al,u=>sin(min(1,u*.8+.15)*PI)**.6)
    B(c,[[fx,fy],[tx,ty],[tx+cos(ta+1.1)*5,ty+sin(ta+1.1)*5]],3.4,al,u=>1-u*.7)
    sp(cx,cy,fx,fy,fa+1.9,4,3.2);sp(fx,fy,tx,ty,ta-1.8,3,2.6)
    dot(c,cx,cy,1.9,al);dot(c,fx,fy,1.7,al)
  }
  // triangular head with dark eyes at the corners, antennae
  c.translate(34,-34);c.rotate(-.75+hr)
  const hd=[[-7,-4],[0,-6],[7,-4],[1,6],[-1,6]]
  J=grn;W(c,hd,.25,1.5,18);W(c,hd,.5,.5,18);J=ink
  B(c,[[-6,-2],[-1,5],[1,6]],1.6,.7);dot(c,0,5.5,1.2,.9)
  dot(c,-6.5,-3.8,2.6,.93);dot(c,6.5,-3.8,2.6,.93)
  c.strokeStyle=K(.7);c.lineWidth=.8
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*2,-6);c.quadraticCurveTo(s*5,-18,s*13+hr*4,-25);c.stroke()}
  c.resetTransform();fade(c);snap(c)
}

// ink wash drop of black ink falling onto the page and blooming outward in feathery tendrils, then fading away
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
cl=(x,a=0,b=1)=>min(b,max(a,x)),
ss=(a,b,x)=>(x=cl((x-a)/(b-a)),x*x*(3-2*x)),
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
// irregular wash blob
bl=(c,x,y,rx,ry,col,sd=1,ro=0,wb=.12)=>{
  c.fillStyle=col;c.beginPath()
  for(let k=0;k<36;k++){
    const a=k/36*T,q=1+wb*(S(a*3+sd)+.6*S(a*5+sd*2.3)+.4*S(a*9+sd*4.1))/2,u=C(a)*rx*q,v=S(a)*ry*q
    c.lineTo(x+u*C(ro)-v*S(ro),y+u*S(ro)+v*C(ro))
  }
  c.fill()
},
// soften anything that runs off the canvas
fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out';c.filter='none';c.globalAlpha=1
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
// it is all one ink, so store a single colour and snap alpha to coarser steps so the lossless webp stays small
snap=c=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4){
    const a=e[k+3]=min(255,e[k+3]+4>>3<<3)
    e[k]=a&&21;e[k+1]=a&&18;e[k+2]=a&&15
  }
  c.putImageData(m,0,0)
}
export const dither=true,frames=26,delay=[...Array(26)].map((_,i)=>i==18?700:i>24?250:80)
export default(c,t,i)=>{
  c.globalCompositeOperation='multiply'
  const X=118,Y=140,d=i/5,g=1-(1-cl((i-5)/14))**2.2,o=ss(19,25,i),R=8+50*g,r=rn(9)
  if(i<5){
    // falling drop
    const y=Y-150*(1-d*d);c.filter='blur(.6px)'
    br(c,u=>[X,y-30+u*30],u=>14*u**1.6*min(1,((1.02-u)/.12)**.5),ink(.92),1,0,24)
  }else{
    c.globalAlpha=1-o
    // feathered edge creeping along the paper fibres
    c.filter=`blur(${.8+o*3}px)`
    for(let k=0;k<70;k++){
      const a=k/70*T+r()*.2,l=R*(1+r()*.45)*(1+.22*S(a*2+1)+.12*S(a*5)),z=r()-.5
      br(c,u=>{const m=R*.25+(l-R*.25)*u,b=a+z*.25*u*u;return[X+C(b)*m,Y+S(b)*m*.94]},
        u=>(1.5+5*g)*(1-u)**1.5+.4,ink(.2,34),1,0,10)
    }
    // wet wash pooling darker at its rim
    c.filter=`blur(${2.5+o*4}px)`
    const G=c.createRadialGradient(X,Y,0,X,Y,R*1.1)
    ;[[0,.6],[.4,.46],[.75,.24],[.9,.33],[1,0]].forEach(([s,a])=>G.addColorStop(s,ink(a,34)))
    bl(c,X,Y,R,R*.94,G,2,0,.3)
    for(let k=0;k<6;k++){
      const a=k*1.1+r(),m=R*.66,x=X+C(a)*m,y=Y+S(a)*m,s=R*(.32+r()*.2),H=c.createRadialGradient(x,y,0,x,y,s)
      H.addColorStop(0,ink(.24,30));H.addColorStop(.8,ink(.26,30));H.addColorStop(1,ink(0));bl(c,x,y,s,s,H,k,0,.4)
    }
    // dense core and splashes
    c.filter=`blur(${2.2+o*3}px)`
    bl(c,X,Y,9+17*g,8+16*g,ink(.8,14),4,0,.25)
    bl(c,X-2,Y+1,5+9*g,5+8*g,ink(.9,10),7,1,.2)
    c.filter='blur(.7px)'
    for(let k=0;k<7;k++){
      const a=r()*T,m=(20+r()*50)*min(1,(i-4)/3),s=.8+r()*2
      bl(c,X+C(a)*m,Y+S(a)*m,s,s,ink(.8),k)
    }
  }
  fade(c)
  snap(c)
}

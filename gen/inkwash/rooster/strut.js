// ink wash proud rooster strutting in place in a walk cycle, big sweeping dark tail strokes, wet wash body, small muted red comb and wattle, head bobbing with each step
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
cl=(x,a=0,b=1)=>min(b,max(a,x)),
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
// snap colour and alpha to coarser steps so the lossless webp stays small
snap=c=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4){
    const a=e[k+3]=min(255,e[k+3]+4>>3<<3)
    for(let j=0;j<3;j++)e[k+j]=a?min(255,e[k+j]+8>>4<<4):0
  }
  c.putImageData(m,0,0)
}
export const dither=true,frames=24,delay=70
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const r=rn(5),p=t*T,hb=S(p*2+.6),by=2.2*S(p*2),ts=S(p*2-1),G=222,
  cut=k=>{c.save();c.globalCompositeOperation='destination-out';c.filter='none';k();c.restore()},
  bz=(a,b,d)=>u=>[(1-u)**2*a[0]+2*u*(1-u)*b[0]+u*u*d[0],(1-u)**2*a[1]+2*u*(1-u)*b[1]+u*u*d[1]]
  // ground
  c.filter='blur(3px)';bl(c,126,G+4,70,5,ink(.2,40),1)
  // far leg, then tail, body, near leg
  const leg=(ph,hx,al)=>{
    const s=S(ph),l=max(0,s),fx=hx+3-17*C(ph),fy=G-l*20,kx=(hx+fx)/2-7-l*9,ky=(by+172+fy)/2-2+l*3
    c.filter='blur(.5px)'
    br(c,bz([hx,172+by],[kx-3,ky-8],[kx,ky]),u=>13-8*u,ink(al*.8,24),1,0,10)
    br(c,bz([kx,ky],[(kx+fx)/2+2,(ky+fy)/2],[fx,fy]),u=>4.8-1.6*u+.8*S(u*PI),ink(al,13),1,0,10)
    dry(c,bz([kx,ky],[(kx+fx)/2+2,(ky+fy)/2],[fx,fy]),u=>4.4,al*.6,3,0,1,9,3,10)
    // toes: spread on the ground, curled when lifted
    ;[[1,-.05],[.85,.38],[.8,-.5],[-.55,.1]].forEach(([d,a],k)=>{
      const g=a+l*(k<3?.9:-.6),z=(k<3?15:8)*(1-l*.25)
      br(c,u=>[fx+d/Math.abs(d)*C(g)*z*u*Math.abs(d),fy+S(g)*z*u*.7+l*5*u*u],u=>3.4*(1-u)**.8+.4,ink(al,13),1,0,8)
    })
    bl(c,kx,ky,3,2.6,ink(al,13),2)
  }
  leg(p+PI,128,.6)
  // tail: sweeping strokes that swell and trail off dry
  for(let k=0;k<7;k++){
    const q=k/6,a=[94+q*4,124+by+q*12],b=[70-q*52+ts*3,-6+q*56-ts*2],d=[12+q*4+q*q*52+ts*7*(1-q),70+q*128+ts*3],f=bz(a,b,d),
    w=u=>(3+(17-q*6)*S(u**.55*PI)**1.1)*(1-.3*u)
    c.filter='blur(.7px)'
    br(c,f,u=>w(u)*(1-u**5),ink(k%2?.5:.86,k%2?40:13),1,0,36)
    c.filter='blur(.4px)';dry(c,f,w,k%2?.5:.8,k+2,.5,1,9,9,30,k%2?40:13)
  }
  // rump and saddle feathers spilling over the tail root
  c.filter='blur(.6px)'
  for(let k=0;k<5;k++)br(c,bz([112-k*4,118+by],[86-k*5,124+k*5+by],[70-k*3+ts*2,150+k*9]),u=>1+5*S(u**.6*PI),ink(.55,34+k*6),1,0,14)
  // body: wet wash masses
  c.filter='blur(1.4px)'
  bl(c,126,142+by,46,33,ink(.62,40),3,-.35,.1)
  bl(c,144,150+by,26,24,ink(.62,18),5,-.3,.14);bl(c,150,160+by,16,14,ink(.5,10),2,0,.2)
  bl(c,116,170+by,14,10,ink(.5,30),4,0,.2);bl(c,134,172+by,13,9,ink(.5,22),6,0,.2)
  // wing
  c.filter='blur(.7px)'
  for(let k=0;k<4;k++)br(c,bz([146-k*3,128+k*5+by],[118-k*4,126+k*9+by],[86+k*5,146+k*7+by]),u=>1+(8-k)*S(u**.6*PI),ink(k?.5:.85,k?30:13),1,0,16)
  dry(c,bz([146,134+by],[116,138+by],[90,158+by]),u=>16,.5,6,.2,1,9,7,24)
  // neck hackles, stretching as the head thrusts
  const hx=174+hb*6,hy=80+by*.6-hb*2,nk=bz([144,132+by],[152+hb*2,104+by],[hx-6,hy+8])
  c.filter='blur(1.4px)';br(c,nk,u=>40-22*u**.7,ink(.5,44),1,0,20)
  c.filter='blur(.5px)'
  for(let k=0;k<6;k++){
    const o=(k-2.5)*5.4
    br(c,u=>{const[x,y]=nk(1-u*(.8+k%2*.2));return[x+o*(.4+u)-u*u*6,y+u*u*8]},u=>.8+3.2*S(u**.7*PI),ink(k%2?.5:.82,k%2?44:16),1,0,16)
  }
  // head
  c.filter='blur(1.2px)';bl(c,hx,hy,12,10.5,ink(.5,40),2,0,.1)
  // comb and wattle: muted translucent red
  c.filter='blur(.8px)'
  ;[[-8,-11,4.6,5.6],[-1,-15,5,7.4],[6,-14,4.6,7],[12,-9,3.6,5]].forEach(([x,y,rx,ry],k)=>bl(c,hx+x,hy+y,rx,ry,'rgba(178,56,44,.62)',k,k*.3-.4,.2))
  bl(c,hx+8,hy+14+hb,4.2,7.5,'rgba(178,56,44,.6)',3,.15,.2);bl(c,hx+2,hy+13,3.2,5.4,'rgba(160,50,40,.5)',5,.1,.2)
  c.filter='blur(.5px)'
  br(c,u=>[hx+C(3.3+u*2.6)*12,hy+S(3.3+u*2.6)*10.5],u=>.6+2*S(u*PI),ink(.85,13),1,0,14)
  br(c,u=>[hx+10+u*14,hy+1+u*u*5],u=>6.4*(1-u)**.8+.4,ink(.9,13),1,0,10)
  cut(()=>{c.fillStyle='#000';c.beginPath();c.arc(hx+3,hy-1.5,3,0,T);c.fill()})
  bl(c,hx+3.2,hy-1.5,1.7,1.7,ink(1,10),1)
  br(c,u=>[hx+3+C(u*T)*3,hy-1.5+S(u*T)*3],u=>.9,ink(.8,13),1,0,14)
  leg(p,138,.92)
  snap(c)
}

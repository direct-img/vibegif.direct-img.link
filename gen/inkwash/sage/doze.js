// ink wash old sage dozing under a pine tree, head nodding over an open scroll, long white beard swaying, a steaming cup of tea beside him
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
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
export const dither=true,frames=32,delay=90
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const nd=.62*(ss(0,.68,t)-ss(.7,.8,t)),bw=S(t*T)*.5+S(t*T*2+1)*.25,
  ln=(x,y,x2,y2,w,al=.9,v=13,b=1.5)=>br(c,u=>[x+(x2-x)*u,y+(y2-y)*u+S(u*PI)*b],u=>w*(.35+.65*S(u**.7*PI)),ink(al,v),1,0,14),
  pg=(P,k)=>{c.fillStyle=k;c.beginPath();P.forEach(q=>c.lineTo(...q));c.fill()},
  pc=k=>{c.save();c.globalCompositeOperation='destination-out';c.filter='none';k();c.restore()}
  // pine
  c.filter='blur(.7px)'
  const tr=u=>[26+u*40+20*S(u*2.6)+5*S(u*11),236-u*196],tw=u=>20-12*u+2*S(u*14)
  br(c,tr,tw,ink(.5,46),1,0,30);br(c,u=>{const[x,y]=tr(u);return[x+tw(u)*.3,y]},u=>tw(u)*.35,ink(.5,22),1,0,30)
  dry(c,tr,u=>tw(u)*1.05,.7,4,0,1,9,7,50)
  for(let k=0;k<9;k++){const[x,y]=tr(.08+k*.1);bl(c,x-4+k%3*5,y,2.6+k%2,4.5,ink(.8,13),k,.4,.4)}
  const b1=u=>[72+u*92,56-u*14-12*S(u*PI)],b2=u=>[66+u*52,96+u*4-8*S(u*PI)],b3=u=>[70-u*44,44-u*14]
  ;[b1,b2,b3].forEach((f,k)=>{br(c,f,u=>(6-k)*(1-u)**.7+1,ink(.85,16),1,0,20)})
  const fan=(x,y,z,k)=>{
    c.filter='blur(2px)';bl(c,x,y-z*.3,z*1.05,z*.6,ink(.2,50),k)
    c.filter='blur(.4px)'
    for(let q=0;q<13;q++){
      const a=-PI+q/12*PI+.05*S(t*T+k)+.1*S(q*7+k)
      br(c,u=>[x+C(a)*z*u,y+S(a)*z*u*.8+2],u=>1.9*(1-u)+.3,ink(.88,13),1,0,5)
    }
  }
  ;[[92,40,17],[122,30,18],[152,32,17],[172,44,15],[104,60,14],[138,52,15],[96,92,15],[122,96,14],[48,36,16],[26,30,13],[66,24,15]].forEach((a,k)=>fan(...a,k))
  // ground
  c.filter='blur(3px)';bl(c,150,214,62,6,ink(.22,44),1)
  c.filter='blur(.8px)';ln(70,220,150,221,2.4,.3,50,0);ln(140,223,232,220,3,.3,50,0)
  // robe
  const X=146,Y=168
  c.filter='blur(1.6px)'
  bl(c,X,Y+14,47,33,ink(.42,56),3,0,.08)
  pg([[X-16,Y-30],[X+16,Y-31],[X+34,Y+8],[X-32,Y+8]],ink(.42,56))
  bl(c,X+22,Y+22,22,22,ink(.3,34),5,.3,.2);bl(c,X-26,Y+30,16,12,ink(.25,34),2,0,.2)
  c.filter='blur(.6px)'
  br(c,u=>[X+C(-.5+u*2.2)*47,Y+14+S(-.5+u*2.2)*33],u=>.8+3.6*S(u**1.4*PI),ink(.9,13),1,0,30)
  br(c,u=>[X+C(2.1+u*1.3)*47,Y+14+S(2.1+u*1.3)*33],u=>.6+2.6*S(u*PI),ink(.85,13),1,0,20)
  ln(X-16,Y-30,X-34,Y+4,2.4,.85);ln(X+16,Y-31,X+36,Y-2,3,.9)
  ln(X+10,Y+12,X+30,Y+40,2,.6);ln(X-8,Y+26,X-30,Y+40,1.8,.5);ln(X+2,Y+30,X+6,Y+45,1.6,.5)
  // open scroll across his lap
  const sy=Y+6+nd*4
  pc(()=>pg([[X-36,sy-9],[X+30,sy-13],[X+32,sy+7],[X-34,sy+11]],'#000'))
  c.filter='blur(.5px)'
  ln(X-36,sy-9,X+30,sy-13,1.3,.7,13,-1);ln(X-34,sy+11,X+32,sy+7,1.6,.8,13,1)
  bl(c,X-36,sy+1,4,11.5,ink(.8,24),1,-.05,.08);bl(c,X+32,sy-3,4,11.5,ink(.8,24),2,-.05,.08)
  for(let k=0;k<8;k++)ln(X-26+k*7,sy-5-k*.4,X-26+k*7,sy+5-k*.4+k%3*2-2,1.1,.5,30,0)
  bl(c,X-25,sy+8,5.5,4,ink(.35,60),1);bl(c,X+22,sy+5,5.5,4,ink(.35,60),2)
  // head, nodding about the neck
  c.save();c.translate(X+2,Y-30);c.rotate(-nd);c.translate(0,-15)
  pc(()=>{c.fillStyle='#000';c.beginPath();c.ellipse(0,0,13,14,0,0,T);c.fill()})
  c.filter='blur(1.4px)';bl(c,4,-4,9,8,ink(.14,50),2);bl(c,-6,3,3.5,2.5,'rgba(200,110,90,.22)',1)
  c.filter='blur(.5px)'
  br(c,u=>[C(-2.5+u*3.9)*13,S(-2.5+u*3.9)*14],u=>.8+2.4*S(u**1.3*PI),ink(.9,13),1,0,24)
  bl(c,3,-17,5.5,4.5,ink(.9,13),3,0,.2);ln(-2,-13,8,-13,1.6,.8,13,-1)
  br(c,u=>[-11+u*6,-1+2*S(u*PI)],u=>.6+1.2*S(u*PI),ink(.92),1,0,8)
  br(c,u=>[-1+u*5,-1+2*S(u*PI)],u=>.6+1.2*S(u*PI),ink(.92),1,0,8)
  br(c,u=>[-13+u*7-u*u*3,-5+u*u*7],u=>1.6*(1-u)+.4,ink(.5,50),1,0,8)
  br(c,u=>[4+u*6+u*u*3,-5+u*u*8],u=>1.6*(1-u)+.4,ink(.5,50),1,0,8)
  br(c,u=>[-5-u*2,2+u*4],u=>1.2,ink(.7),1,0,4)
  c.restore()
  // long white beard hanging from the chin, its tip lagging behind the nod
  const hx=X+2-4*C(nd)-5*S(nd),hy=Y-30+4*S(nd)-5*C(nd),ex=X-4+bw*3-nd*5,ey=Y+17+nd*5,
  bd=q=>u=>[hx+(ex-hx)*u+q*(1-u**1.6)*7+3*S(u*PI)*bw,hy+(ey-hy)*u]
  pc(()=>{c.fillStyle='#000';c.beginPath()
    for(let k=0;k<=10;k++)c.lineTo(...bd(-1)(k/10));for(let k=10;k>=0;k--)c.lineTo(...bd(1)(k/10));c.fill()})
  c.filter='blur(.5px)'
  br(c,bd(-1),u=>.5+1.6*S(u*PI),ink(.7,24),1,0,14);br(c,bd(1),u=>.5+2*S(u*PI),ink(.8,20),1,0,14)
  ;[-.45,0,.5].forEach(q=>br(c,bd(q),u=>1.3*S(u*PI)+.2,ink(.35,60),.92,.1,12))
  // tea
  const cx=212,cy=204
  c.filter='blur(2px)'
  for(let k=0;k<2;k++){
    const p=(t+k/2)%1
    br(c,u=>[cx-2+k*5+6*S(u*4+p*T+k*2)*(.3+u)+p*5,cy-6-p*36-u*30],u=>5.5*S(u*PI)**.8+.3,ink(.36*S(p*PI)**1.2,70),1,0,16)
  }
  c.filter='blur(1px)';c.fillStyle=ink(.32,60);c.beginPath();c.ellipse(cx,cy+2,11,12,0,0,PI);c.fill()
  c.filter='blur(.5px)'
  bl(c,cx,cy+.5,8.5,2.2,ink(.6,30),1,0,.05)
  br(c,u=>[cx+C(u*T+2.6)*11,cy+S(u*T+2.6)*3.4],u=>.6+1.8*S(u*PI)**2,ink(.9,13),1,0,30)
  br(c,u=>[cx+C(.2+u*2.7)*11,cy+2+S(.2+u*2.7)*12],u=>.5+2*S(u**1.4*PI),ink(.85,13),.8,.05,16)
  fade(c)
  snap(c)
}

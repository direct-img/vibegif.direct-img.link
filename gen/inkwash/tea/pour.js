// ink wash teapot tilting to pour a stream of tea into a small cup on rice paper, steam curling up from the cup, then tilting back
const paper=(c,s=7)=>{
  const r=()=>(s=s*16807%2147483647)/2147483647,P=[...Array(160)].map((_,k)=>{
    const e=k/40|0,f=k%40/40,d=9+r()*3.5,w=256-2*d
    return[[d+f*w,d],[256-d,d+f*w],[256-d-f*w,256-d],[d,256-d-f*w]][e]
  }),edge=()=>{c.beginPath();P.forEach(p=>c.lineTo(...p));c.closePath()}
  c.save();edge();c.fillStyle='#f3ecdc';c.fill();c.clip()
  for(let k=0;k<7;k++){
    const x=r()*256,y=r()*256,g=c.createRadialGradient(x,y,0,x,y,40+r()*70)
    g.addColorStop(0,'rgba(190,170,130,.07)');g.addColorStop(1,'rgba(190,170,130,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  for(let k=0;k<170;k++){
    const x=r()*256,y=r()*256,a=r()*6.3,l=8+r()*24
    c.strokeStyle=r()<.7?'rgba(150,128,95,.13)':'rgba(255,253,245,.6)';c.lineWidth=.5+r()*.7
    c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+Math.cos(a+.5)*l/2,y+Math.sin(a+.5)*l/2,x+Math.cos(a)*l,y+Math.sin(a)*l);c.stroke()
  }
  c.restore();edge();c.clip()
}
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
cl=(x,a=0,b=1)=>min(b,max(a,x)),
ss=(a,b,x)=>(x=cl((x-a)/(b-a)),x*x*(3-2*x)),
ink=(a,v=18)=>`rgba(${v+3},${v},${v-3},${a})`,
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
// vermilion seal with carved marks
seal=(c,x,y,z=15,s=3)=>{
  const r=rn(s),j=()=>r()*1.5-.75
  c.save();c.globalCompositeOperation='source-over';c.filter='none';c.globalAlpha=1
  c.fillStyle='rgba(184,50,42,.9)';c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6*z
    c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][e])
  }
  c.fill();c.strokeStyle='#f3ecdc';c.lineWidth=z/11;c.lineCap='butt'
  ;[[.2,.24,.8,.22],[.5,.22,.5,.52],[.24,.5,.78,.52],[.3,.52,.2,.8],[.68,.52,.8,.8],[.42,.68,.42,.82],[.56,.66,.57,.8]]
    .forEach(m=>{c.beginPath();c.moveTo(x+m[0]*z+j()/2,y+m[1]*z);c.lineTo(x+m[2]*z,y+m[3]*z+j()/2);c.stroke()})
  c.restore()
}
export const frames=32,delay=75
export default(c,t)=>{
  paper(c,53);c.globalCompositeOperation='multiply'
  const th=.62*(ss(.03,.2,t)-ss(.7,.9,t)),s0=cl((t-.17)/.09),e0=cl((t-.69)/.09),on=s0>=1&&e0<.9,
  Z=1.2,px=86,py=98,tx=px+Z*(53*C(th)+17*S(th)),ty=py+Z*(53*S(th)-17*C(th)),cx=170,cy=192
  // steam curling off the cup
  c.filter='blur(2.2px)'
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,x=cx+12+(k-1)*9
    br(c,u=>[x+9*S(u*4+p*T+k*2)*(.3+u)+p*10,cy-12-p*52-u*44],u=>7*S(u*PI)**.8+.3,ink(.34*S(p*PI)**1.2,70),1,0,20)
  }
  // cup
  c.filter='blur(3px)';bl(c,cx+4,cy+26,34,5,ink(.2,50),2)
  c.filter='blur(1.2px)'
  c.fillStyle=ink(.3,60);c.beginPath();c.ellipse(cx,cy+3,21,22,0,0,PI);c.fill()
  bl(c,cx+9,cy+13,10,10,ink(.22,40),3,0,.3)
  c.filter='blur(.6px)'
  bl(c,cx,cy+1,16,4,ink(.6,30),1,0,.05)
  br(c,u=>[cx+C(u*T+2.6)*21,cy+S(u*T+2.6)*6.2],u=>.8+2.8*S(u*PI)**2,ink(.9,13),1,0,40)
  br(c,u=>[cx+C(.2+u*2.7)*21,cy+3+S(.2+u*2.7)*22],u=>.6+3*S(u**1.4*PI),ink(.85,13),.8,.05,24)
  br(c,u=>[cx-9+u*18,cy+26+S(u*PI)],u=>3.4*S(u*PI)**.5,ink(.9,13),1,0,10)
  // stream of tea
  if(s0>0&&e0<1){
    const f=u=>[tx+(cx-2-tx)*u**.8,ty+(cy+1-ty)*(.12*u+.88*u*u)]
    c.filter='blur(.5px)'
    br(c,f,u=>(4.4-1.8*u)*min(1,((u-e0)/.05)**.5,((s0+.01-u)/.05)**.5),ink(.8,22),s0,e0,30)
    if(on)for(let k=0;k<4;k++){
      const p=(t*8+k/4)%1,a=-1.57+(k-1.5)*.7
      bl(c,cx-2+C(a)*p*13,cy-2+S(a)*p*12+p*p*9,1.5-p,1.5-p,ink(.8),k)
    }
  }
  // teapot, tilting about its belly
  c.save();c.translate(px,py);c.rotate(th);c.scale(Z,Z)
  c.filter='blur(.6px)'
  const hd=u=>[-25*C(u*PI),-22-40*S(u*PI)**.8]
  br(c,hd,u=>3.6+1.6*C(u*T)**2,ink(.82,16),1,0,30);dry(c,hd,u=>7,.5,3,.1,.9,9,4,30)
  br(c,u=>[27+u*27-4*S(u*PI),6-u*23-3*S(u*PI)],u=>13-8*u**.7,ink(.8,22),1,0,16)
  c.filter='blur(1.6px)'
  bl(c,0,2,36,29,ink(.5,50),2,0,.05)
  bl(c,7,10,27,19,ink(.4,34),4,.2,.12)
  bl(c,13,17,17,10,ink(.4,20),6,.2,.2)
  c.filter='blur(.6px)'
  br(c,u=>[C(.25+u*2.5)*35,2+S(.25+u*2.5)*29],u=>.8+4*S(u**1.5*PI),ink(.9,13),1,0,30)
  br(c,u=>[C(3.5+u*1.1)*35,2+S(3.5+u*1.1)*29],u=>.5+2.4*S(u*PI),ink(.8,13),1,0,16)
  bl(c,0,-26,18,4.2,ink(.9,13),1,0,.06);bl(c,0,-32,4.5,3.8,ink(.92,13),2)
  c.restore()
  seal(c,34,206,15,9)
}

// ink wash squirrel perched on a grapevine nibbling a grape, bushy dry-brush tail flicking, a translucent purple-grey grape cluster and vine leaves swaying
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
export const dither=true,frames=20,delay=90
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const r=rn(17),nb=S(t*T*5),fl=S(cl((t-.45)/.3)*PI)**2*S(t*T*4),sw=S(t*T),
  ln=(x,y,x2,y2,w,al=.9,v=13,b=1.5)=>br(c,u=>[x+(x2-x)*u,y+(y2-y)*u+S(u*PI)*b],u=>w*(.35+.65*S(u**.7*PI)),ink(al,v),1,0,14),
  cut=k=>{c.save();c.globalCompositeOperation='destination-out';c.filter='none';k();c.restore()},
  gp=(x,y,z,k)=>{
    // one grape: layered wash, darker rim, a spared highlight
    c.filter='blur(1px)'
    bl(c,x,y,z,z,`rgba(86,70,104,${.34+k%3*.08})`,k,0,.06)
    bl(c,x+z*.2,y+z*.25,z*.72,z*.66,`rgba(60,48,78,${.22+k%2*.1})`,k+3,0,.1)
    c.filter='blur(.5px)'
    br(c,u=>[x+C(.3+u*2.4)*z,y+S(.3+u*2.4)*z],u=>.4+z*.22*S(u*PI),ink(.6,22),1,0,12)
    cut(()=>{c.fillStyle='rgba(0,0,0,.8)';c.beginPath();c.ellipse(x-z*.38,y-z*.4,z*.2,z*.13,-.7,0,T);c.fill()})
  },
  leaf=(x,y,z,a,k)=>{
    c.save();c.translate(x,y);c.rotate(a)
    c.filter='blur(1.8px)'
    ;[[0,z*.55,.5,.5,.62],[-z*.5,z*.36,.42,.36,.5],[z*.5,z*.38,.42,.36,.55],[-z*.3,z*.84,.32,.28,.45],[z*.32,z*.84,.32,.28,.5]].forEach(([u,v,rx,ry,al],q)=>
      bl(c,u,v,z*rx*1.3,z*ry*1.3,ink(al,24+q*8),k+q,q,.3))
    c.filter='blur(.5px)'
    ;[[0,1.05],[-.8,.45],[.8,.5],[-.48,.95],[.5,.95]].forEach(([u,v])=>br(c,w=>[u*z*w*.9+2*S(w*PI),v*z*w*.9],w=>1.6*(1-w)+.3,ink(.85,13),1,0,10))
    c.restore()
  },
  ten=(x,y,z,a,k)=>br(c,u=>{const g=a+u*u*7+.2*S(t*T+k),m=z*(1-u*.8);return[x+u*z*C(a)+m*.5*C(g)-z*.5*C(a),y+u*z*S(a)+m*.5*S(g)-z*.5*S(a)]},
    u=>1.5*(1-u)**.7+.3,ink(.8,16),1,0,40)
  // vines
  c.filter='blur(.6px)'
  const v1=u=>[262-u*210,26+26*S(u*2.6)+u*10+5*S(u*9)],v2=u=>[-6+u*236,214-u*26-12*S(u*PI)+4*S(u*10)]
  br(c,v1,u=>6.5*(1-u)**.6+1.2,ink(.8,20),1,0,40);dry(c,v1,u=>9*(1-u)+2,.5,3,0,.9,9,5,40)
  br(c,v2,u=>9-3*u+1.5*S(u*13),ink(.55,36),1,0,40);br(c,u=>{const[x,y]=v2(u);return[x,y+3]},u=>3,ink(.6,16),1,0,40)
  dry(c,v2,u=>11-3*u,.7,6,0,1,9,7,60)
  for(let k=0;k<5;k++){const[x,y]=v2(.12+k*.2);bl(c,x,y-1,3+k%2,4.5,ink(.8,13),k,.5,.4)}
  ten(40,60,30,2.4,1);ten(232,96,26,1.2,2);ten(206,214,26,-.4,3)
  leaf(70,30,44,.2,1);leaf(226,38,32,-.35,4);leaf(126,26,26,.05,7)
  // grape cluster swaying on its stalk
  c.save();c.translate(178,48);c.rotate(.06*sw);c.translate(-178,-48)
  c.filter='blur(.5px)';br(c,u=>[178+3*S(u*PI),48+u*26],u=>2.6-u,ink(.85,16),1,0,10)
  ;[[166,84],[184,82],[198,90],[156,98],[175,99],[192,106],[207,104],[163,115],[181,118],[198,122],[170,133],[188,137],[177,151],[186,164]]
    .forEach(([x,y],k)=>gp(x+r()*3,y+r()*3,9+r()*2,k))
  c.restore()
  // squirrel
  // tail: wet core, then dry-brush fur fanning off it
  const tl=u=>[84-58*S(u*2.3)+fl*14*u*u+30*u**3,186-u*106-10*S(u*PI)+fl*4*u],tw=u=>(8+30*S(u**.7*PI)**.8)*(1-.3*u)
  c.filter='blur(2.5px)';br(c,tl,u=>tw(u)*.8,ink(.25,40),1,0,30)
  c.filter='blur(1.2px)';br(c,tl,u=>tw(u)*.5,ink(.6,22),.92,0,30)
  c.filter='blur(.4px)'
  dry(c,tl,tw,.85,2,0,1,9,17,40);dry(c,tl,u=>tw(u)*1.2,.6,7,.1,1,9,15,34)
  for(let k=0;k<12;k++){
    const u=.25+k*.062,[x,y]=tl(u),[x2,y2]=tl(u+.04),a=atan2(y2-y,x2-x)+(k%2?1:-1)*(.5+r()*.3),l=tw(u)*.62+4
    br(c,w=>[x+C(a)*l*w,y+S(a)*l*w],w=>2.2*(1-w)+.3,ink(.75,16),1,.3,6)
  }
  // haunch and body
  c.filter='blur(1.6px)'
  bl(c,104,160,25,30,ink(.5,44),3,-.25,.1);bl(c,96,168,18,20,ink(.36,26),5,0,.15);bl(c,116,134,15,17,ink(.42,44),2,-.5,.1)
  c.filter='blur(.6px)'
  br(c,u=>[104+C(2.3+u*2.5)*26,160+S(2.3+u*2.5)*31],u=>.8+3.4*S(u**1.3*PI),ink(.88,13),1,0,24)
  br(c,u=>[96+C(.6+u*1.6)*19,172+S(.6+u*1.6)*18],u=>.6+2.6*S(u*PI),ink(.8,13),1,0,16)
  br(c,u=>[104+u*26,190+2*S(u*PI)],u=>5*S(u**.6*PI)**.7,ink(.88,13),1,0,12)
  dry(c,u=>[104+C(2.5+u*2)*21,160+S(2.5+u*2)*26],u=>9,.5,4,0,1,9,5,24)
  dry(c,u=>[100+u*16,176+u*8],u=>12,.4,8,0,1,9,5,14)
  // head, nibbling
  const hx=128,hy=116+nb*.8
  c.filter='blur(1.4px)';bl(c,hx,hy,16,12.5,ink(.5,40),4,-.2,.1);bl(c,hx-4,hy-4,10,7,ink(.3,24),6,-.3,.2)
  c.filter='blur(.5px)'
  br(c,u=>[hx-13+u*5,hy-8-u*11],u=>5*(1-u)+.6,ink(.85,13),1,0,8);br(c,u=>[hx-5+u*5,hy-10-u*10],u=>4.4*(1-u)+.6,ink(.8,13),1,0,8)
  br(c,u=>[hx+C(3.6+u*2.6)*16,hy+S(3.6+u*2.6)*12.5],u=>.6+2.4*S(u*PI),ink(.85,13),1,0,16)
  bl(c,hx+5,hy-2,3.2,3.4,ink(1,10),1);cut(()=>{c.fillStyle='#000';c.beginPath();c.arc(hx+4,hy-3.2,.9,0,T);c.fill()})
  bl(c,hx+16,hy+2,2.2,1.8,ink(.95,10),2)
  for(let k=0;k<3;k++)ln(hx+13,hy+5,hx+26,hy+3+k*4-nb,.7,.5,13,0)
  br(c,u=>[hx+8+u*6,hy+7.5+nb*.8+S(u*PI)],u=>.5+1.2*S(u*PI),ink(.8,13),1,0,6)
  // forepaws holding a grape
  br(c,u=>[114+u*21,141-u*12+nb*.6*u+3*S(u*PI)],u=>5-2.4*u,ink(.5,26),1,0,12)
  gp(hx+15,hy+13+nb*.5,6.5,5)
  br(c,u=>[hx+8+u*6,hy+10+nb*.6+u*5],u=>3.2-1.6*u,ink(.85,13),1,0,6)
  fade(c);snap(c)
}

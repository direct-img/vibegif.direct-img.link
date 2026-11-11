// ink wash grey heron stepping slowly through reeds in shallow water on rice paper, neck curving, ripples spreading from its legs
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
const T=Math.PI*2,S=Math.sin,C=Math.cos,H=Math.hypot,K=['#141210','#3a3632','#6e6962','#a39d94','#cfc9be']
const R=s=>(s=(s*7919+12345)*16807%2147483647,()=>(s=s*16807%2147483647)/2147483647)
// catmull-rom samples through points
const sp=(p,n=8)=>{
  const o=[],g=k=>p[Math.max(0,Math.min(p.length-1,k))]
  for(let k=0;k<p.length-1;k++)for(let j=0;j<n;j++){
    const u=j/n,a=g(k-1),b=g(k),d=g(k+1),e=g(k+2)
    o.push([0,1].map(m=>.5*(2*b[m]+(d[m]-a[m])*u+(2*a[m]-5*b[m]+4*d[m]-e[m])*u*u+(3*b[m]-a[m]-3*d[m]+e[m])*u*u*u)))
  }
  return o.push(g(1e9)),o
}
// brush stroke: half-width w shaped by pressure f(u), h>0 splits it into dry hairs
const B=(c,p,w,col=K[0],f=u=>Math.min(1,u*5)**.5*(1-u)**.6,h=0)=>{
  const q=sp(p),n=q.length-1,N=q.map((_,k)=>{
    const a=q[Math.max(0,k-1)],b=q[Math.min(n,k+1)],l=H(b[0]-a[0],b[1]-a[1])||1
    return[(a[1]-b[1])/l,(b[0]-a[0])/l]
  }),rib=(o,v)=>{
    c.beginPath()
    for(let k=0;k<=n;k++){const m=w*f(k/n)*(o+v);c.lineTo(q[k][0]+N[k][0]*m,q[k][1]+N[k][1]*m)}
    for(let k=n;k>=0;k--){const m=w*f(k/n)*(o-v);c.lineTo(q[k][0]+N[k][0]*m,q[k][1]+N[k][1]*m)}
    c.fillStyle=col;c.fill()
  }
  if(h)for(let j=0;j<h;j++)rib(((j+.5)/h*2-1)*.9,(.25+j*37%7/14)/h)
  else rib(0,1)
}
// blotchy closed blob path
const blob=(c,x,y,rx,ry,ro=0,s=1,n=.16,m=12)=>{
  const r=R(s),p=[...Array(m)].map((_,k)=>{
    const a=k/m*T,d=1+(r()-.5)*2*n,u=C(a)*rx*d,v=S(a)*ry*d
    return[x+u*C(ro)-v*S(ro),y+u*S(ro)+v*C(ro)]
  }),z=k=>p[(k+m)%m]
  c.beginPath();c.moveTo((z(-1)[0]+p[0][0])/2,(z(-1)[1]+p[0][1])/2)
  p.forEach((q,k)=>c.quadraticCurveTo(q[0],q[1],(q[0]+z(k+1)[0])/2,(q[1]+z(k+1)[1])/2))
  c.closePath()
}
// wet wash of the current path: soft fill plus a darker pooled rim
const W=(c,col,a=.5,b=3,rim=.4)=>{
  c.save();c.fillStyle=c.strokeStyle=col
  c.filter=`blur(${b}px)`;c.globalAlpha=a;c.fill()
  c.filter='blur(.7px)';c.globalAlpha=a*rim;c.lineWidth=1.1;c.stroke()
  c.restore()
}
// vermilion seal with carved marks
const seal=(c,x,y,z=15)=>{
  const r=R(z+x)
  c.save();c.translate(x,y);c.filter='blur(.4px)';c.globalAlpha=.85;c.fillStyle='#b8322a'
  c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6,d=z/2-r()*1.3,m=f*2-1
    c.lineTo(...[[m*d,-d],[d,m*d],[-m*d,d],[-d,-m*d]][e])
  }
  c.fill();c.globalCompositeOperation='source-over';c.globalAlpha=.9
  c.strokeStyle='#f3ecdc';c.lineWidth=z/11;c.lineCap='square'
  c.beginPath()
  ;[[-.28,-.3,.28,-.3],[0,-.3,0,.02],[-.3,.02,.3,.02],[-.2,.02,-.3,.32],[.2,.02,.3,.32],[-.08,.3,.08,.3]]
    .forEach(([a,b,d,e])=>{c.moveTo(a*z,b*z);c.lineTo(d*z,e*z)})
  c.stroke();c.restore()
}
// keep the half-transparent deckle pixels exactly as the paper left them, so ink at the edge doesn't bloat the webp
const keep=c=>{
  const pd=c.getImageData(0,0,256,256).data
  return()=>{
    const m=c.getImageData(0,0,256,256),e=m.data
    for(let k=0;k<e.length;k+=4)if(pd[k+3]<255)for(let j=0;j<4;j++)e[k+j]=pd[k+j]
    c.putImageData(m,0,0)
  }
}
const fin=u=>S(u*Math.PI)**.6,leaf=u=>u**.4*(1-u)**.8*1.6,ss=u=>u*u*(3-2*u),WL=199
// reed clumps repeat every 48px and slide past, so the bird wades without leaving the sheet
const reeds=(c,t,o,far)=>{
  for(let k=-1;k<7;k++){
    const r=R(far?4:9),x=o+k*48-t*48
    for(let j=0;j<(far?3:2);j++){
      const bx=x+(r()-.5)*48,h=far?56+r()*70:14+r()*44,ln=(r()-.5)*(far?40:44),s=S(t*T+j)*(far?2:1.2)
      c.globalAlpha=far?.5+r()*.2:.88
      B(c,[[bx,WL+3],[bx+ln*.2,WL-h*.45],[bx+ln*.6+s,WL-h*.82],[bx+ln+s*2,WL-h]],far?2.2:2.6,K[far?3-j%2:j%2],u=>(1-u)**.7*Math.min(1,u*5+.4),far&&j%2?3:0)
    }
  }
}
export default(c,t)=>{
  paper(c,53);const fix=keep(c)
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const bob=1.5*S(t*T+.6),nk=S(t*T-.4),HX=106,HY=137+bob
  reeds(c,t,30,1)
  // legs: plant, slide back with the water, lift and swing forward
  const leg=(ph,col)=>{
    const p=(t/2+ph)%1,s=(p-.6)/.4,fx=HX+(p<.6?29-58*p/.6:-29+58*ss(s)),fy=p<.6?208:208-S(s*Math.PI)*24,
      dx=fx-HX,dy=fy-HY,d=Math.min(H(dx,dy),77.9),a=Math.acos((36*36+d*d-42*42)/(72*d)),th=Math.atan2(dy,dx),
      kn=[HX+C(th+a)*36,HY+S(th+a)*36],ft=[HX+C(th)*d,HY+S(th)*d]
    // ripple rings left at the last place the foot went in, sliding back as they widen
    const rx=HX+29-96*p,q=4+p*30
    c.globalAlpha=(1-p)**1.3*.8
    ;[.3,3.45].forEach(e=>B(c,[0,1,2,3,4].map(j=>[rx+C(e+j*.6)*q,WL+2+S(e+j*.6)*q*.28]),1.3-p*.5,K[2],fin))
    c.save();c.beginPath();c.rect(0,0,256,WL);c.clip()
    c.globalAlpha=.95
    B(c,[[HX,HY-4],kn],1.7,col,u=>1.5-u*.6);B(c,[kn,ft],1.3,col,u=>1.1-u*.3)
    c.beginPath();c.arc(...kn,1.8,0,T);c.fillStyle=col;c.fill()
    ;[-.5,.1,.7].forEach(e=>B(c,[ft,[ft[0]+C(th-1.2+e)*9,ft[1]+S(th-1.2+e)*9]],1,col,u=>1-u*.6))
    c.restore()
  }
  leg(.5,K[0]);leg(0,K[0])
  c.save();c.translate(0,bob)
  // tail and wing tips: dry-brush feathers
  c.globalAlpha=.85;B(c,[[104,118],[84,128],[66,140]],8,K[1],u=>(1-u)**.5*Math.min(1,u*4+.3),6)
  // body: grey wet wash, darker folded wing over it
  c.filter='blur(1.2px)';c.globalAlpha=.85
  B(c,[[140,106],[124,116],[100,124],[74,134]],15,K[3],u=>S(u**.75*Math.PI)**.55*.9+.12)
  c.filter='blur(1.6px)';c.globalAlpha=.8
  B(c,[[132,108],[112,112],[92,122],[72,136]],8.5,K[2],u=>S(u**.7*Math.PI)**.6)
  c.filter='blur(.5px)';c.globalAlpha=.7
  B(c,[[126,112],[106,117],[88,126],[68,140]],7,K[1],u=>S(u**.7*Math.PI)**.6,5)
  // thigh feathers
  c.globalAlpha=.8;B(c,[[112,126],[108,134],[106,141]],4.5,K[3],u=>1-u*.7)
  // chest plumes
  c.globalAlpha=.6
  ;[0,1,2].forEach(j=>B(c,[[138-j*2,104+j*3],[137-j*3,116+j*3],[132-j*4,126+j*2]],1.1,K[2],u=>1-u*.7))
  c.restore()
  // neck: an S that tightens and reaches with each step
  const hd=[150+nk*5,51+bob*.6-nk*1.5],N=[[139,107+bob],[146-nk*1.5,92+bob],[134-nk*2.5,77+bob],[139+nk*2,60+bob*.8],hd]
  c.filter='blur(.8px)';c.globalAlpha=.9;B(c,N,4.2,K[3],u=>1.15-u*.5)
  c.filter='blur(.5px)';c.globalAlpha=.55;B(c,N.map(([x,y])=>[x+2,y]),1,K[1],u=>fin(u),2)
  // head, dagger beak, black crest plume, eye
  c.filter='blur(.7px)';c.globalAlpha=.9;blob(c,hd[0]+2,hd[1],6.5,4.6,.1,3,.05);c.fillStyle=K[3];c.fill()
  c.filter='blur(.5px)';c.globalAlpha=.95
  B(c,[[hd[0]+6,hd[1]],[hd[0]+18,hd[1]+2],[hd[0]+31,hd[1]+5]],2.2,K[1],u=>1-u*.92)
  B(c,[[hd[0]+5,hd[1]-3.5],[hd[0]-4,hd[1]-4],[hd[0]-13,hd[1]],[hd[0]-21+nk*2,hd[1]+7]],1.9,K[0],u=>(1-u)**.6*Math.min(1,u*5+.5))
  c.globalAlpha=1;c.fillStyle=K[0];c.beginPath();c.arc(hd[0]+4.5,hd[1]-.8,1.25,0,T);c.fill()
  reeds(c,t,74,0)
  seal(c,38,40,15);fix()
}
export const frames=16,delay=95

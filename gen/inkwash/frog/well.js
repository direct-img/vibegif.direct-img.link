// the frog in the well in ink wash: a little frog at the bottom of a deep stone well looks up at its small circle of sky as a bird and cloud drift across
const T=Math.PI*2,S=Math.sin,C=Math.cos,H=Math.hypot,K=[.93,.79,.58,.38,.21].map(a=>`rgba(20,18,16,${a})`)
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
// soften anything that runs off the canvas so it never looks cropped
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out';c.filter='none';c.globalAlpha=1
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
// wet wash of the current path: soft fill plus a darker pooled rim
const W=(c,col,a=.5,b=3,rim=.4)=>{
  c.save();c.fillStyle=c.strokeStyle=col
  c.filter=`blur(${b}px)`;c.globalAlpha=a;c.fill()
  c.filter='blur(.7px)';c.globalAlpha=a*rim;c.lineWidth=1.1;c.stroke()
  c.restore()
}
const fin=u=>S(u*Math.PI)**.6,X=132,Y=92
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const r=R(3),sky=()=>blob(c,X,Y,41,39,.3,9,.05,16)
  // the well shaft seen from the bottom: wet ink darkest round the mouth, thinning to nothing
  const g=c.createRadialGradient(X,Y+2,36,X,Y-6,150)
  ;[[0,.92],[.08,.72],[.22,.42],[.45,.2],[.72,.07],[1,0]].forEach(([o,a])=>g.addColorStop(o,`rgba(24,21,18,${a})`))
  c.save();sky();c.rect(0,0,256,256);c.clip('evenodd')
  c.filter='blur(2px)';c.fillStyle=g;c.fillRect(0,0,256,256)
  // a few blotches where the wash pooled
  for(let k=0;k<7;k++){
    const a=3+r()*3.6,d=52+r()*60
    c.globalAlpha=.08+r()*.08;blob(c,X+C(a)*d,Y+S(a)*d,14+r()*16,9+r()*10,a,k,.3);c.fillStyle=K[1];c.fill()
  }
  // courses of stone: a few long broken dry-brush arcs and sparse joints, thinning toward the bottom
  c.filter='blur(.5px)'
  const far=(x,y)=>H(x-92,y-200)>62&&y<214
  for(let j=1;j<4;j++){
    const q=41*1.5**j,y=Y+j*6,o=r()*T,m=3+j,p=q*1.5
    for(let k=0;k<3;k++){
      const a=o+k*2.1,l=1.1+r()*.6,P=[0,1,2,3,4,5].map(i=>[X+C(a+l*i/5)*q,y+S(a+l*i/5)*q*.97]).filter(e=>far(...e))
      c.globalAlpha=.6-j*.12
      if(P.length>3)B(c,P,1.4+j*.6,K[j>1?2:1],u=>.3+fin(u),j>1?3:0)
    }
    for(let k=0;k<m;k++){
      const b=o+(k+r()*.5)/m*T,e=[X+C(b)*q*1.06,y+S(b)*q*1.03],f=[X+C(b)*p*.95,y+6+S(b)*p*.93]
      c.globalAlpha=.4-j*.07
      if(far(...f)&&far(...e))B(c,[e,f],1+j*.3,K[2],u=>1-u*.6)
    }
  }
  c.restore()
  // the frog's whole sky: a drifting cloud and a bird crossing
  c.save();sky();c.clip()
  const cx=X-78+t*156
  c.filter='blur(2.5px)';c.fillStyle=K[3]
  ;[[0,0,17,7],[-12,4,12,5],[13,3,12,5],[3,-5,9,5]].forEach(([x,y,a,b],k)=>{c.globalAlpha=.4;blob(c,cx+x,Y-12+y,a,b,0,k+2,.2);c.fill()})
  c.filter='blur(.4px)';c.globalAlpha=.95
  const u=(t-.18)/.5,bx=X-50+u*100,by=Y+14-u*16-S(u*Math.PI)*6,f=S(t*T*5)
  if(u>0&&u<1)[-1,1].forEach(s=>B(c,[[bx,by],[bx+s*4-1,by-2-f*3],[bx+s*8-2,by+f*4]],1.3,K[0],v=>1-v*.7))
  c.restore()
  // rim of the mouth, a dark broken stroke
  c.globalAlpha=.9
  ;[[.4,2.6],[3.3,5.2],[5.6,6.4]].forEach(([a,b])=>B(c,[0,1,2,3,4].map(i=>[X+C(a+(b-a)*i/4)*42,Y+S(a+(b-a)*i/4)*40.5]),2.2,K[0],fin))
  // ledge: two dry strokes
  c.globalAlpha=.75;B(c,[[40,226],[76,229],[118,226],[150,229]],3,K[2],fin,4)
  c.globalAlpha=.45;B(c,[[58,235],[96,237],[130,235]],1.8,K[3],fin,3)
  // the little frog looking up
  const th=.5+.5*S(t*T*3),hd=-.06-.1*S(Math.min(1,Math.max(0,u))*Math.PI),bl=t>.8&&t<.88
  c.save();c.translate(90,203);c.scale(1.3,1.3)
  // body: mid-grey wet wash with the belly left light
  blob(c,-3,-3,19,11.5,-.62,7,.05);W(c,K[3],.85,1.1,.7)
  // darker back with a few blots
  c.filter='blur(1.8px)';c.globalAlpha=.75;B(c,[[-19,3],[-9,-8],[3,-17],[12,-22]],4.2,K[1],fin)
  c.filter='blur(.9px)';c.globalAlpha=.8;c.fillStyle=K[0]
  ;[[-13,-3,2.4],[-5,-10,2],[3,-15,1.7]].forEach(([x,y,z],k)=>{blob(c,x,y,z*1.3,z,-.6,k,.2,8);c.fill()})
  // hind leg folded: washed thigh, dark shin and long foot with toes
  c.filter='blur(.9px)';c.globalAlpha=.85;B(c,[[-18,4],[-8,-1],[4,5]],5,K[2],u=>.55+.5*fin(u))
  c.filter='blur(.5px)';c.globalAlpha=.9;B(c,[[-17,2],[-7,-4],[4,3]],1.1,K[0],u=>.5+fin(u))
  c.globalAlpha=.95;B(c,[[5,4],[-5,10],[-15,14]],2.7,K[0],u=>1-.45*u)
  B(c,[[-15,14],[-3,16.5],[9,16]],1.7,K[0],u=>1-.5*u)
  ;[-1,0,1].forEach(d=>B(c,[[9,16],[13+d,16.5+d*1.6],[17+d*2,16.5+d*2.8]],.9,K[0],u=>1-.6*u))
  // front leg and toes
  B(c,[[10,-5],[13,5],[12,14]],2.1,K[0],u=>1-.4*u)
  ;[-1,0,1].forEach(d=>B(c,[[12,14],[16+d*2,16+d*1.4],[20+d*3,16+d*2.4]],.9,K[0],u=>1-.6*u))
  // pale throat pulsing, only a rim of ink
  blob(c,18.5,-7-th*.6,5+th*1.7,4.6+th*1.6,0,4,.04);W(c,K[4],.55,.7,1.5)
  // head tilted up to the sky: grey wash, dark crown, eye stripe, mouth line, bulging eye
  c.translate(11,-17);c.rotate(hd)
  c.filter='blur(.8px)';c.globalAlpha=.9;B(c,[[-6,2],[4,-5],[18,-13]],6.6,K[3],u=>S(u**.7*Math.PI)**.5+.2*(1-u))
  c.filter='blur(1.3px)';c.globalAlpha=.7;B(c,[[-6,-3],[3,-10],[14,-15]],2.6,K[1],fin)
  c.filter='blur(.5px)';c.globalAlpha=.85
  B(c,[[2,-1],[10,-5],[19,-11]],.8,K[0],u=>.6+.5*fin(u))
  B(c,[[7,-11],[13,-13],[19,-14]],1.1,K[0],u=>1-u*.6)
  c.globalAlpha=1;c.fillStyle=K[0]
  c.beginPath();c.arc(3,-11,4.2,0,T);c.fill()
  c.globalCompositeOperation='destination-out';c.fillStyle='#000'
  if(!bl){c.beginPath();c.arc(4.5,-12.4,1.3,0,T);c.fill()}
  c.restore()
  fade(c)
}
export const dither=true,frames=30,delay=90

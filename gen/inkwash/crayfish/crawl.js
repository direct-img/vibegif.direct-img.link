// ink wash crayfish crawling over pebbles with claws raised and long antennae waving, wet translucent shell segments and dry-brush legs
const{sin,cos,PI,hypot,min,max,abs,floor,round}=Math,T=2*PI,
I=a=>`rgba(20,18,16,${a})`,
R=n=>(n=sin(n*91.7+7.3)*43758.5453)-floor(n),
// point on curve f at u, pushed r px along the normal
N=(f,u,r)=>{const[x,y]=f(u),[p,q]=f(u+.01),[g,h]=f(u-.01),l=hypot(p-g,q-h)||1;return[x+(h-q)/l*r,y+(p-g)/l*r]},
// loaded brush stroke: centerline f(u), width w(u), ink a (alpha or colour), soft edge b
S=(c,f,w,a,n=28,b=.6)=>{
  const P=[],Q=[]
  for(let k=0;k<=n;k++){const u=k/n,r=w(u)/2;P.push(N(f,u,r));Q.unshift(N(f,u,-r))}
  c.save();c.filter=b?`blur(${b}px)`:'none';c.fillStyle=a>0?I(a):a;c.beginPath()
  for(const[x,y]of[...P,...Q])c.lineTo(x,y)
  c.fill();c.restore()
},
// dry brush: m ragged hairlines across the width, each starting late, ending early or skipping a beat
D=(c,f,w,a,m=5,n=14,s=1,g=.3)=>{
  c.save();c.strokeStyle=I(a)
  for(let j=0;j<m;j++){
    const o=m>1?j/(m-1)-.5:0,u0=g*R(s+j*13),u1=1-g*R(s+j*7.7),q=u0+(u1-u0)*R(s+j*3.3)
    c.lineWidth=.7+1.2*R(s+j);c.beginPath()
    for(let k=0;k<=n;k++){
      const u=u0+(u1-u0)*k/n,p=N(f,u,w(u)*o)
      abs(u-q)<g*.2?c.moveTo(...p):c.lineTo(...p)
    }
    c.stroke()
  }
  c.restore()
},
// curves: quadratic bezier, ellipse arc
Z=(a,b,d)=>u=>{const v=1-u;return[v*v*a[0]+2*v*u*b[0]+u*u*d[0],v*v*a[1]+2*v*u*b[1]+u*u*d[1]]},
E=(x,y,p,q,a,b)=>u=>[x+p*cos(a+(b-a)*u),y+q*sin(a+(b-a)*u)],
// pressure: press in, swell, taper to a point
P=(u,e=.6)=>sin(PI*min(1,max(0,u))**e),
// wet wash blob
W=(c,x,y,p,q,r,a,b=3)=>{c.save();c.filter=`blur(${b}px)`;c.fillStyle=a>0?I(a):a;c.beginPath();c.ellipse(x,y,p,q,r,0,T);c.fill();c.restore()},
dot=(c,x,y,r,a)=>{c.fillStyle=a>0?I(a):a;c.beginPath();c.arc(x,y,r,0,T);c.fill()},
cut=(c,g)=>{c.save();c.globalCompositeOperation='destination-out';g();c.restore()},
fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=24,delay=75,dither=true
export default(c,t)=>{
  const q=sin(T*t),v=cos(T*t)
  // pebbles: pale wet dabs with a broken dark edge underneath
  for(const[x,y,p,r,a,s]of[[196,200,30,17,.24,1],[150,222,22,12,.3,2],[226,160,17,11,.18,3],[60,196,20,12,.2,4],[100,226,13,8,.26,5]]){
    W(c,x,y,p,r,.2*s,a,2)
    S(c,E(x,y,p,r,.1*PI+s,.85*PI+s*.3),u=>4*P(u,.45),a+.3,12,.6)
    D(c,E(x,y-r*.2,p*.6,r*.4,PI,1.9*PI),()=>r*.6,a+.1,3,8,s,.5)
  }
  c.save();c.translate(124+2.5*q,130+2*q);c.rotate(-2.42+.03*v)
  // tail fan: wet flicks opening and closing
  const ab=u=>[-8-56*u,9*u*u*(1+.5*q)],[tx,ty]=ab(1)
  for(let j=-2;j<3;j++){
    const a=PI+.2+j*(.36+.07*q)
    S(c,Z([tx+4,ty],[tx+cos(a)*10,ty+sin(a)*10],[tx+cos(a)*(20-abs(j)*2),ty+sin(a)*(20-abs(j)*2)]),u=>9*P(u*.9+.05,.6),.5-.06*abs(j),8,.8)
  }
  // walking legs: thin jointed strokes stepping in turn
  for(const m of[-1,1])for(let j=0;j<4;j++){
    const s=5*sin(T*2*t+j*1.6+(m>0?PI:0)),a=[4+9*j,m*10],k=[1+10*j+s*.5,m*(27+j)],b=[-7+11*j+s,m*(43-j*2)]
    S(c,Z(a,[(a[0]+k[0])/2,(a[1]+k[1])/2],k),u=>3.4-u,.7,6,.3)
    S(c,Z(k,[(k[0]+b[0])/2-2,(k[1]+b[1])/2],b),u=>2.6*(1-u)**.6+.5,.62,6,.2)
    dot(c,...k,1.7,.85)
  }
  // abdomen: overlapping translucent segments, each with a dark trailing rim
  for(let j=5;j>=0;j--){
    const u=(j+.5)/6,[x,y]=ab(u),h=11.5-5*u
    W(c,x,y,7.5,h,0,.42,1)
    S(c,E(x-1,y,6,h,.55*PI,1.45*PI),w=>4*P(w,.5),.74,10,.6)
  }
  // claws: jointed arms, a loaded pincer and a thin finger that opens
  for(const m of[-1,1]){
    const l=sin(T*t+(m>0?0:2.2)),a=[36,m*10],b=[55+3*l,m*(31+2*l)],d=[76+4*l,m*(31-3*l)],g=.25+.2*sin(T*2*t+m),
    h=Math.atan2(m*(-9-4*l),30),z=[d[0]+cos(h)*32,d[1]+sin(h)*32]
    S(c,Z(a,[44,m*24],b),u=>6-u,.66,8,.5)
    S(c,Z(b,[(b[0]+d[0])/2,b[1]+m*2],d),u=>6.5+2*u,.7,8,.5)
    dot(c,...b,3.2,.88);dot(c,...d,3.6,.88)
    S(c,Z(d,[d[0]+cos(h+m*.35)*16,d[1]+sin(h+m*.35)*16],z),u=>15*P(u*.86+.04,.42),.85,14,.8)
    S(c,Z([d[0]+cos(h-m*.5)*5,d[1]+sin(h-m*.5)*5],[d[0]+cos(h-m*(.5+g))*17,d[1]+sin(h-m*(.5+g))*17],[d[0]+cos(h-m*g)*30,d[1]+sin(h-m*g)*30]),u=>6*P(u*.9+.05,.45),.8,10,.4)
    D(c,Z(d,[d[0]+cos(h+m*.5)*14,d[1]+sin(h+m*.5)*14],z),()=>9,.5,3,8,m+5,.4)
  }
  // carapace: one loaded stroke with a wetter halo, a pointed rostrum, eyes on stalks
  S(c,Z([-8,0],[20,0],[47,0]),u=>30*P(u*.8+.14,.8),.5,20,1.6)
  S(c,Z([-4,0],[20,0],[58,0]),u=>19*(1-u)**.8*min(1,u/.1),.84,20,1)
  cut(c,()=>S(c,Z([2,-3],[12,0],[2,3]),u=>1.5*P(u,.5),'rgba(0,0,0,.6)',8,.3))
  for(const m of[-1,1]){
    S(c,Z([42,m*5],[46,m*8],[48,m*10]),u=>2,.8,4,0);dot(c,49,m*10.5,2.4,.93)
    // antennae: long sweeping hairlines, waving, and two short feelers
    const w=sin(T*t+(m>0?.8:2.6)),f=Z([50,m*4],[86,m*(8+10*w)],[120+4*w,m*(44+12*w)])
    S(c,f,u=>2.6*(1-u)**.7+.5,.75,24,0)
    S(c,Z([54,m*2],[66,m*(3-3*w)],[76,m*(11-5*w)]),u=>1.8*(1-u)+.4,.7,8,0)
  }
  c.restore()
  fade(c);snap(c)
}

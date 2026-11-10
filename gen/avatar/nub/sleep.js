// round mint green avatar sleeping: a jelly ball fast asleep with closed eyes, breathing deep and slow, head drooping on each exhale while blue z's drift up
const{sin,cos,asin,atan2,abs,min,max,PI:P}=Math,
S=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x)),
M=(a,b,x)=>a+(b-a)*x,
O=x=>(x=min(1,max(0,x))-1,max(0,1+2.7*x*x*x+1.7*x*x)),
B=(c,x,y,w,h,k,f)=>{
  c.save()
  c.translate(128+x,222+y);c.transform(w,0,-k,h,0,0);c.translate(0,-90)
  c.fillStyle='#1fbf9c';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#12987e';c.beginPath();c.rect(-99,-99,198,198);c.arc(-14,-16,94,0,7);c.fill('evenodd')
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff';c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1;f();c.restore()
},
E=(c,u,x,y,o,z=1,g=1)=>{
  let k=asin(u/90),j=asin(2/15),a=k+x/90,b=y/90-j,w=M(13.365,6.5,o),v=M(10.9-4.09*g,6,o),
  A=(s,d)=>{
    s=abs(s)<.1?.1:s
    let r=(w*w+s*s)/2/s,q=atan2(r-s,w)
    c.arc(0,v+s-r,abs(r),d?P-q:q,d?q:P-q,d?s>0:s<0)
  }
  c.save();c.translate(90*sin(a),90*sin(b));c.scale(z*cos(a)/cos(k),z*cos(b)/cos(j))
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=9;c.beginPath()
  A(M(8.19*g,6.5,o));o>.01&&(A(M(8.19*g,-6.5,o),1),c.fill());c.stroke();c.restore()
}
export const frames=72,delay=50
export default(c,t)=>{
  let I=t=>S(0,.4,t)-S(.45,.78,t),
  D=t=>S(.55,.78,t)-S(.8,.95,t),
  i=I(t),d=D(t),j=I(t-.04),e=D(t-.04)
  B(c,0,0,1-.03*i+.02*d,1+.065*i-.035*d,.012*e,_=>{
    c.rotate(.05*e)
    E(c,-30,3*e,5*e-3*j,0,1+.05*j,1-.12*e)
    E(c,30,3*e,5*e-3*j,0,1+.05*j,1-.12*e)
  })
  for(let n=0;n<3;n++){
    let p=(t-.05-.24*n)/.45
    if(p>0&&p<1){
      c.save()
      c.translate(172+50*p+5*sin(7*p+n),70-38*p);c.rotate(.22*sin(9*p+2*n)-.12)
      c.scale(p=(.75+.22*n+.6*p)*O(p/.22)*(1-S(.8,1,p)),p)
      c.beginPath();c.moveTo(-8,-8);c.lineTo(8,-8);c.lineTo(-8,8);c.lineTo(8,8)
      c.strokeStyle='#2f9bff';c.lineWidth=7.5;c.stroke();c.restore()
    }
  }
}

// round mint green avatar startled awake: a sleeping jelly ball jolts up with wide eyes and coral surprise marks, wobbles, glances left and right, then dozes off again
const{sin,cos,asin,atan2,abs,exp,min,max,PI:P}=Math,
S=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x)),
M=(a,b,x)=>a+(b-a)*x,
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
  let p=min(1,max(0,(t-.1)/.1)),u=max(0,t-.2),
  H=t=>1-.05*(S(.07,.1,t)-S(.1,.115,t))+.11*(S(.1,.125,t)-S(.13,.2,t))-.2*exp(-9*u)*sin(54*u)-.035*(S(.66,.78,t)-S(.82,.98,t)),
  h=H(t),
  o=(S(.1,.115,t)-.5*S(.62,.69,t))*(1-S(.455,.475,t)+S(.495,.525,t)),
  x=-16*S(.33,.37,t)+32*S(.47,.52,t)-16*S(.6,.66,t),
  y=40*(H(t-.03)-h)-5*(S(.1,.13,t)-S(.3,.4,t))+4*(S(.66,.78,t)-S(.82,.98,t)),
  z=1+.32*S(.1,.12,t)-.22*S(.2,.34,t)-.1*S(.6,.68,t)
  B(c,0,-56*p*(1-p),h**-.5,h,.04*exp(-8*u)*sin(44*u)+.001*x,_=>{
    E(c,-30,x,y,o-.5*S(.71,.78,t),z)
    E(c,30,x,y,o-.5*S(.8,.87,t),z)
  })
  c.strokeStyle='#ff5d4a'
  for(let i=0;i<4;i++){
    let a=[-2.62,-2.13,-1.01,-.52][i],e=S(.1,.17,t),d=S(.14,.25,t),
    r=102+26*e,q=102+26*d
    if(r-q>.5){
      c.lineWidth=min(10,(r-q)*1.5)
      c.beginPath();c.moveTo(128+q*cos(a),124+q*sin(a));c.lineTo(128+r*cos(a),124+r*sin(a));c.stroke()
    }
  }
}

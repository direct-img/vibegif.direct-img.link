// dark outlined round-bottom flask of pale glass, a blue stream pours in and the blue liquid rises with a sloshing wavy surface and a light highlight, bubbles drift up, then it drains away and refills
const{sin,PI,min,max,exp}=Math,T=2*PI
export const frames=60,delay=40
const cl=x=>x<0?0:x>1?1:x,io=x=>(x=cl(x),x<.5?2*x*x:1-2*(1-x)**2),
 X=128,Y=152,R=80,nw=22,top=30,
 flask=c=>{c.beginPath(),c.arc(X,Y,R,0,T),c.rect(X-nw,top,2*nw,Y-R+10-top)},
 // bubbles: [x offset, radius, rises per loop, phase]
 B=[[-34,6,2,.1],[18,4,3,.55],[40,5,2,.8],[-8,7,1,.35],[-48,4,3,.2],[30,6,1,.7]]
export default(c,t)=>{
 const fill=1-(1-cl((t-.04)/.44))**2-io((t-.62)/.3),
  // stream: its head falls in at the start, its tail falls away at the end
  hd=cl(t/.06)**2,tl=cl((t-.44)/.06)**2,pour=hd>0&&tl<1,
  L=Y+R+3-fill*(2*R-30),
  A=2.5+6*cl(t/.06)*cl((.5-t)/.06)+3*exp(-(((t-.55)/.06)**2)),
  sy=x=>L+A*sin(x*.06-T*t*3)+A*.6*sin(x*.11+T*t*2)
 c.lineWidth=20,flask(c),c.stroke()
 c.lineWidth=12,c.beginPath(),c.roundRect(X-nw-12,top-6,2*nw+24,16,8),c.stroke()
 c.fillStyle='#dbe9f5',flask(c),c.fill()
 c.beginPath(),c.roundRect(X-nw-12,top-6,2*nw+24,16,8),c.fill()
 c.save(),flask(c),c.clip()
 if(fill>0){
  c.fillStyle='#2d7be5',c.beginPath(),c.moveTo(40,sy(40))
  for(let x=44;x<=216;x+=4)c.lineTo(x,sy(x))
  c.lineTo(216,250),c.lineTo(40,250),c.fill()
  c.strokeStyle='#86c5ff',c.lineWidth=6,c.beginPath()
  for(let x=40;x<=216;x+=4)c.lineTo(x,sy(x)+5)
  c.stroke()
  c.strokeStyle='#cfe9ff',c.lineWidth=3.5
  for(const[o,r,n,p]of B){
   const u=(t*n+p)%1,y=Y+R-6-u*(Y+R-L),x=X+o+4*sin(u*T*1.5)
   if(y<sy(x)-r-6)c.beginPath(),c.arc(x,y,r*(.6+.4*u),0,T),c.stroke()
  }
 }
 if(pour){
  const s=min(L,sy(X))+4,a=top-8+tl*(s-top),b=top-8+hd*(s-top)
  c.fillStyle='#2d7be5',c.beginPath(),c.roundRect(X-6,a,12,max(12,b-a),6),c.fill()
 }
 c.restore()
 c.strokeStyle='#fff',c.lineWidth=8,c.beginPath(),c.arc(X,Y,R-16,PI*1.08,PI*1.36),c.stroke()
 c.beginPath(),c.arc(X,Y,R-16,PI*1.46,PI*1.5),c.stroke()
}

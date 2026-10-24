// a heart outline gets tapped, squashes, then pops big and fills in while a ring of tiny hearts and dots bursts out, settles, and drains back to an outline
const{sin,cos,PI,min,max,exp}=Math,T=2*PI
export const frames=24,delay=60
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const hp=(c,s)=>{c.beginPath();c.moveTo(0,-26*s);c.bezierCurveTo(-14*s,-56*s,-62*s,-54*s,-62*s,-16*s);c.bezierCurveTo(-62*s,14*s,-26*s,34*s,0,56*s);c.bezierCurveTo(26*s,34*s,62*s,14*s,62*s,-16*s);c.bezierCurveTo(62*s,-54*s,14*s,-56*s,0,-26*s);c.closePath()}
export default(c,t)=>{
  const u=(t-.2)/.34,k=t>.1&&t<.2?sin(PI*(t-.1)/.2):0,full=t>=.2&&t<.96,lv=-58+116*ease((t-.8)/.16)
  const s=t<.2?1:u<.2?.88+.42*(u/.2)**.7:1+.3*exp(-6*(u-.2))*cos((u-.2)*T*1.4)
  c.translate(128,130);c.scale(.86,.86)
  if(u>0&&u<1){
    const r=84+38*(1-(1-u)**3),z=1-u*u
    for(let j=0;j<12;j++){
      const a=j*T/12-PI/2,x=cos(a)*(j%2?r*.85:r),y=sin(a)*(j%2?r*.85:r)
      c.save();c.translate(x,y);c.lineWidth=5
      if(j%2)c.beginPath(),c.arc(0,0,9*z+2,0,T),c.fill(),c.stroke()
      else c.rotate(a+PI/2),hp(c,.3*z+.06),c.fill(),c.stroke()
      c.restore()
    }
  }
  if(t>.08&&t<.24){const v=(t-.08)/.16;for(const[w,st]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(0,0,8+30*v,0,T),c.stroke()}
  c.scale(s*(1+.12*k),s*(1-.16*k));c.translate(0,10*k)
  if(full){
    c.save();hp(c,1);c.clip();c.fillStyle='#555';c.fillRect(-70,max(-70,lv),140,140);c.restore()
    if(lv<-20){c.fillStyle='#fff';c.strokeStyle='#fff';c.lineWidth=9;c.beginPath();c.arc(-30,-18,20,PI*1.05,PI*1.5);c.stroke();c.beginPath();c.arc(-44,8,5,0,T);c.fill()}
  }
  for(const[w,st]of[[22,'#111'],[9,'#fff']])c.lineWidth=w,c.strokeStyle=st,hp(c,1),c.stroke()
}

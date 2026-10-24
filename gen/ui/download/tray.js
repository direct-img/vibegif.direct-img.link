// a down arrow pops up and drops into a smiling tray, which squashes and bounces as it catches it
const{sin,cos,PI,min,max,exp}=Math,T=2*PI
export const frames=18,delay=70
const back=u=>(u=min(1,max(0,u)),1+2.7*(u-1)**3+1.7*(u-1)**2)
const ln=(c,w,f)=>{for(const[l,s]of[[w,'#111'],[w-7,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const s=back(t/.16),v=max(0,(t-.14)/.3),y=58+142*v*v,h=t-.44,b=h>0?.16*exp(-7*h)*cos(h*T*3):0,hit=h>0&&h<.16
  c.translate(128,238);c.scale(1+b*.6,1-b);c.translate(-128,-238)
  c.fillStyle='#ddd';c.beginPath();c.roundRect(36,132,184,34,14);c.fill();c.stroke();c.fillStyle='#fff'
  if(v<1){
    c.save();c.beginPath();c.rect(0,0,256,226);c.clip()
    if(v>.25)for(const x of[-12,12])ln(c,11,()=>{c.moveTo(128+x,y-46);c.lineTo(128+x,y-46-34*v)})
    c.translate(128,y);c.scale(s,s)
    c.beginPath();c.moveTo(0,40);c.lineTo(36,2);c.lineTo(15,2);c.lineTo(15,-38);c.lineTo(-15,-38);c.lineTo(-15,2);c.lineTo(-36,2);c.closePath();c.fill();c.stroke()
    c.restore()
  }
  if(hit)for(const d of[-1,1])for(const a of[-.5,0,.5])ln(c,11,()=>{const q=-PI/2+d*(.9+a*.45);c.moveTo(128+d*96+cos(q)*14,134+sin(q)*14);c.lineTo(128+d*96+cos(q)*30,134+sin(q)*30)})
  c.beginPath();c.moveTo(24,150);c.lineTo(232,150);c.lineTo(214,236);c.lineTo(42,236);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.lineWidth=6
  if(hit)for(const d of[-1,1])c.beginPath(),c.arc(128+d*26,192,9,PI*1.15,PI*1.85),c.stroke()
  else for(const d of[-1,1])c.beginPath(),c.arc(128+d*26,188,7,0,T),c.fill()
  c.beginPath();if(hit)c.arc(128,200,11,0,PI),c.closePath(),c.fill();else c.arc(128,198,11,PI*.15,PI*.85),c.stroke()
}

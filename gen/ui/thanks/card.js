// a folded thank-you card swings open, a smiling heart pops out and floats up, bursts into lines, and the card closes again
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),ease=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),back=u=>(u=cl(u),1+3*(u-1)**3+2*(u-1)**2)
const heart=(c,r)=>{c.beginPath();c.moveTo(0,r);c.bezierCurveTo(-r*1.7,-r*.1,-r*.9,-r*1.45,0,-r*.6);c.bezierCurveTo(r*.9,-r*1.45,r*1.7,-r*.1,0,r);c.closePath()}
export default(c,t)=>{
  const D=(f,a=12,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const o=ease((t-.04)/.2)-ease((t-.84)/.14),th=o*PI,hx=76+52*o,Y=102,H=132,W=104
  c.beginPath();c.roundRect(hx,Y,W,H,6);c.fill();c.stroke()
  c.lineWidth=8;c.strokeStyle='#bbb';for(const[y,l]of[[Y+76,56],[Y+94,70],[Y+112,44]])c.beginPath(),c.moveTo(hx+16,y),c.lineTo(hx+16+l,y),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  const k=cos(th),lift=.1*sin(th)
  c.save();c.transform(k,-lift,0,1,hx,0);c.beginPath();c.roundRect(0,Y,W,H,6);c.fill();c.lineWidth=7;c.stroke()
  if(k>0){
    c.save();c.translate(W/2,Y+54);c.lineWidth=6;heart(c,22);c.stroke();c.restore()
    c.lineWidth=7;c.strokeStyle='#bbb';for(const[y,l]of[[Y+96,48],[Y+111,32]])c.beginPath(),c.moveTo(W/2-l/2,y),c.lineTo(W/2+l/2,y),c.stroke()
  }else{c.translate(W/2,Y+H-30);c.scale(-1,1);c.lineWidth=5;c.strokeStyle='#bbb';heart(c,10);c.stroke();c.beginPath();c.moveTo(-36,26);c.lineTo(36,26);c.stroke()}
  c.restore()
  const P=u=>[128+14*sin(u*T),170-108*u],u=min((t-.26)/.54,.96),b=cl((t-.78)/.08),[x,y]=P(u)
  if(u>0&&b<1){
    const s=back((t-.26)/.08)*(1-b)
    c.save();c.translate(x,y);c.rotate(.16*sin(u*T+1));c.scale(s,s);c.lineWidth=7/max(s,.2)
    heart(c,32);c.fill();c.stroke()
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*11,-4,4.5,0,T),c.fill()
    c.lineWidth=4.5/max(s,.2);c.beginPath();c.arc(0,4,7,.15*PI,.85*PI);c.stroke();c.restore()
  }
  if(b>0&&b<1)for(let i=0;i<8;i++){const a=i*T/8,r1=22+26*b,r2=r1+14*(1-b);D(()=>{c.moveTo(x+cos(a)*r1,y+sin(a)*r1);c.lineTo(x+cos(a)*r2,y+sin(a)*r2)},11,4)}
}

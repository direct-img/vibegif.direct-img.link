// mind blown: eyes go wide, the top of the head pops off in a burst of confetti, flips through the air and lands back on with a bonk, leaving it dizzy
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
const U=[0,.1,.17,.2,.23,.28,.36,.46,.55,.6,.63,.68,.76,.84,.92,.97]
export const frames=U.length,delay=[350,100,140,50,60,70,80,80,70,50,70,110,110,110,130,220],rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const K='#1b1b1f',H='#b197fc',HL='#d0bfff',P='#f783ac',CF=['#ff6b6b','#ffd43b','#69db7c','#4dabf7','#f783ac','#ff922b']
const CX=128,CY=150,R=74,Z=[[50,112],[70,104],[90,118],[110,104],[128,118],[146,104],[166,118],[186,104],[206,112]]
const zig=c=>{c.moveTo(...Z[0]);for(const p of Z)c.lineTo(...p)}
const star=(c,x,y,r,n,q,a=0)=>{c.beginPath();for(let k=0;k<2*n;k++){const rr=k%2?r*q:r,b=a+k*PI/n-PI/2;c.lineTo(x+rr*cos(b),y+rr*sin(b))}c.closePath()}
const hand=(c,x,y,a,sp)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=H;c.lineWidth=5
  for(const k of[-1,0,1])c.beginPath(),c.roundRect(-5+k*(9+5*sp),-20-5*sp*(1-abs(k)),10,20,5),c.fill(),c.stroke()
  c.beginPath();c.arc(0,4,14,0,T);c.fill();c.stroke();c.restore()}
export default(c,_,i)=>{
  const t=U[i],wide=io((t-.06)/.12)*(1-io((t-.88)/.09)),boom=t>=.2&&t<.62,dz=t>=.63&&t<.92,u=cl((t-.2)/.42)
  const ly=-4*200*u*(1-u),lr=T*u,sq=1-.08*sin(PI*cl((t-.6)/.1))-.05*sin(PI*cl((t-.13)/.08))
  const sp=t>=.2?1-io((t-.66)/.3):0,up=io((t-.06)/.12)*(1-io((t-.84)/.12))
  c.strokeStyle=K;c.lineWidth=6
  const bs=bk((t-.2)/.05)*(1-io((t-.27)/.12))
  if(bs>.01){c.fillStyle='#ffd43b';star(c,CX,96,92*bs,12,.6,t*2);c.fill();c.stroke();c.fillStyle='#ff922b';star(c,CX,96,56*bs,12,.6,t*2+.2);c.fill()}
  c.save();c.translate(CX,CY+R);c.scale(2-sq,sq);c.translate(-CX,-CY-R)
  // brain peeking out while the lid is off
  if(boom){c.save();c.beginPath();c.arc(CX,CY,R,0,T);c.clip();c.fillStyle=P;c.beginPath();c.ellipse(CX,118,58,30,0,PI,0);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();for(const[x,d]of[[100,1],[128,-1],[156,1]])c.moveTo(x,96),c.quadraticCurveTo(x+10*d,104,x,112);c.stroke();c.restore()}
  c.save();c.beginPath();zig(c);c.lineTo(230,256);c.lineTo(26,256);c.closePath();if(boom)c.clip()
  c.fillStyle=H;c.beginPath();c.arc(CX,CY,R,0,T);c.fill();c.lineWidth=6;c.stroke();c.restore()
  if(boom){c.save();c.beginPath();c.arc(CX,CY,R,0,T);c.clip();c.fillStyle=K;c.beginPath();zig(c);c.lineTo(206,124);c.lineTo(50,124);c.fill();c.restore()
    c.save();c.beginPath();c.arc(CX,CY,R+3,0,T);c.clip();c.lineWidth=6;c.beginPath();zig(c);c.stroke();c.restore()}
  // face
  c.fillStyle=K;c.lineWidth=5
  for(const d of[-1,1]){const x=CX+d*30,y=152
    if(dz){c.lineWidth=4;c.beginPath();for(let a=0;a<4*PI;a+=.3){const r=1.3*a;c.lineTo(x+r*cos(d*a+t*20),y+r*sin(d*a+t*20))}c.stroke()}
    else if(wide>.05){const er=8+14*wide;c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,er,er*1.15,0,0,T);c.fill();c.stroke();c.fillStyle=K;c.beginPath();c.arc(x,y,6-2.5*wide,0,T);c.fill()}
    else c.beginPath(),c.arc(x,y,7,0,T),c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(x-12,y-24-16*wide+(dz?10:0));c.lineTo(x+12,y-24-16*wide+(dz?10:0)-d*4*(1-wide));c.stroke()}
  c.fillStyle=K;c.beginPath()
  if(t>=.2&&t<.63)c.ellipse(CX,196,16,20,0,0,T),c.fill(),c.fillStyle='#ff8787',c.beginPath(),c.ellipse(CX,206,9,5,0,0,T),c.fill()
  else if(dz){c.lineWidth=4;c.moveTo(CX-18,196);for(let k=1;k<=6;k++)c.lineTo(CX-18+6*k,196+(k%2?-4:4));c.stroke()}
  else c.ellipse(CX,194,8*(1+wide*.4),5+6*wide,0,0,T),c.fill()
  c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(CX+d*52,180,9,5,0,0,T),c.fill()
  c.restore()
  // lid
  c.save();c.translate(CX,92+ly);c.rotate(lr);c.translate(-CX,-92)
  c.save();c.beginPath();zig(c);c.lineTo(230,0);c.lineTo(26,0);c.closePath();c.clip();c.fillStyle=H;c.beginPath();c.arc(CX,CY,R,0,T);c.fill();c.lineWidth=6;c.stroke()
  c.fillStyle=HL;c.beginPath();c.ellipse(96,98,16,9,-.5,0,T);c.fill();c.restore()
  if(boom){c.save();c.beginPath();c.arc(CX,CY,R+3,0,T);c.clip();c.lineWidth=6;c.beginPath();zig(c);c.stroke();c.restore()}
  c.restore()
  hand(c,CX-R+2-14*sp,170-50*up-14*sp,-.4-.7*sp,sp);hand(c,CX+R-2+14*sp,170-50*up-14*sp,.4+.7*sp,sp)
  if(t>.21&&t<.75)CF.concat(CF).forEach((f,k)=>{const a=-PI/2+(k/11-.5)*2.6,v=.8+.5*((k*7)%5)/5,tau=(t-.2)*v,x=CX+cos(a)*520*tau,y=96+sin(a)*520*tau+900*tau*tau
    c.save();c.translate(x,y);c.rotate(k+tau*30);c.fillStyle=f;c.lineWidth=3;c.beginPath();c.rect(-7,-4,14,8);c.fill();c.stroke();c.restore()})
  if(t>=.6&&t<.7){c.lineWidth=5;for(const a of[-.5,0,.5])c.beginPath(),c.moveTo(CX+60*sin(a),72-60*cos(a)+40),c.lineTo(CX+80*sin(a),72-80*cos(a)+40),c.stroke()}
  if(dz){c.fillStyle='#ffd43b';c.lineWidth=3;for(let k=0;k<3;k++){const a=T*(t*2.5)+k*T/3;star(c,CX+80*cos(a),66+16*sin(a),12,5,.45);c.fill();c.stroke()}}
}

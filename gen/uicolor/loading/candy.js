// a wrapped candy as a progress bar: peppermint stripes scroll in and fill it up, a shine sweeps across when it's full, then it drains and starts again
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ST='#f06595',TK='#ffdeeb',WR='#ffd43b',WD='#fab005'
const L=58,R=198,Y=128,H=42
const pill=c=>{c.beginPath();c.roundRect(L,Y-H,R-L,H*2,H)}
const spark=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const ss=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
export default(c,t)=>{
  const f=ss(t/.66),d=ss((t-.86)/.14),x0=L+(R-L)*d,x1=L+(R-L)*f,sh=(t-.68)/.14
  for(const s of[-1,1]){
    c.save();c.translate(128,Y);c.scale(s,1);c.translate(-128,-Y)
    const w=3*sin(T*t*2),P=[[16,Y-46],[28,Y-30],[12,Y-14],[26,Y],[12,Y+14],[28,Y+30],[16,Y+46]].map(([x,y])=>[x-w,y])
    c.fillStyle=WR;c.beginPath();c.moveTo(L-6,Y-12);P.forEach(([x,y])=>c.lineTo(x,y));c.lineTo(L-6,Y+12);c.closePath();c.fill();c.stroke()
    c.strokeStyle=WD;c.lineWidth=4;for(const k of[0,2,4,6])c.beginPath(),c.moveTo(L-14,Y+(k-3)*3),c.lineTo(P[k][0]+8,P[k][1]+(3-k)*1.5),c.stroke()
    c.strokeStyle='#111';c.fillStyle=WD;c.lineWidth=6;c.beginPath();c.roundRect(L-16,Y-15,22,30,9);c.fill();c.stroke()
    c.restore();c.lineWidth=7
  }
  c.fillStyle=TK;pill(c);c.fill()
  c.save();pill(c);c.clip()
  if(x1>x0+.5){
    c.beginPath();c.rect(x0,0,x1-x0,256);c.clip();c.fillStyle='#fff';c.fillRect(0,0,256,256)
    c.fillStyle=ST;const o=t*2*40;for(let x=L-80+o%40;x<R+50;x+=40)c.beginPath(),c.moveTo(x,Y-H),c.lineTo(x+20,Y-H),c.lineTo(x-16,Y+H),c.lineTo(x-36,Y+H),c.closePath(),c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(x1,Y-H);c.lineTo(x1,Y+H);c.stroke()
  }
  if(sh>0&&sh<1){const gx=L-30+(R-L+60)*sh;c.fillStyle='#fff';c.beginPath();c.moveTo(gx,Y-H);c.lineTo(gx+22,Y-H);c.lineTo(gx-2,Y+H);c.lineTo(gx-24,Y+H);c.closePath();c.fill()}
  c.restore()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(L+28,Y-26);c.lineTo(R-34,Y-26);c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;pill(c);c.stroke()
  if(t>.66&&t<.88)for(const[x,y,o]of[[84,56,0],[178,54,.4],[124,206,.2],[206,198,.6]]){const s=12*sin(PI*min(1,max(0,(t-.66)/.22*1.4-o*.4)));if(s>1.5)spark(c,x,y,s)}
}

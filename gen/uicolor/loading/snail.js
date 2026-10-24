// a snail slowly crawls along a progress bar dragging the slimy fill along behind it, at the end it ducks into its shell and rolls back to the start
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=90
const SH='#b197fc',SD='#7950f2',BD='#ffd8a8',FL='#63e6be',BL='#ff8787'
const GY=170,L=14,R=242,K=1.34,XA=L+56*K,XB=R-66*K
const ss=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const bar=c=>{c.beginPath();c.roundRect(L,GY,R-L,36,18)}
export default(c,t)=>{
  const u=min(1,t/.66),rb=ss((t-.74)/.18),e=t<.66?1:1-ss((t-.66)/.07)+ss((t-.92)/.08),x=t<.74?XA+(XB-XA)*u:XB-(XB-XA)*rb
  const F=t<.74?L+(R-L)*u:t<.92?L+(R-L)*(x-XA)/(XB-XA):L,st=t<.66?4*sin(T*t*6):0,rot=-T*rb
  c.fillStyle='#fff';bar(c);c.fill()
  c.save();bar(c);c.clip();if(F>L+1){c.fillStyle=FL;c.fillRect(L,GY,F-L,40);c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(L+14,GY+9);c.lineTo(max(L+14,F-12),GY+9);c.stroke()}c.restore()
  c.strokeStyle='#111';c.lineWidth=7;bar(c);c.stroke()
  c.save();c.translate(x,GY);c.scale(K,K)
  if(e>.02){
    c.save();c.translate(0,-30);c.scale(e,e);c.translate(0,30)
    const hx=44+st,hy=-36+st*.3,parts=(o,f)=>{
      c.lineWidth=8+o;c.beginPath();c.moveTo(hx-8,hy-12);c.lineTo(hx-16,hy-36);c.moveTo(hx+6,hy-14);c.lineTo(hx+10,hy-38);c.stroke()
      c.beginPath();c.arc(hx-16,hy-36,5+o/2,0,T);c.arc(hx+10,hy-38,5+o/2,0,T);f()
      c.beginPath();c.roundRect(-50-o/2,-20-o/2,90+st+o,20+o,10+o/2);f()
      c.lineWidth=26+o;c.beginPath();c.moveTo(hx-16,-10);c.lineTo(hx-2,hy+6);c.stroke()
      c.beginPath();c.arc(hx,hy,19+o/2,0,T);f()}
    c.strokeStyle=c.fillStyle='#111';parts(12,()=>c.fill())
    c.strokeStyle=c.fillStyle=BD;parts(0,()=>c.fill())
    c.strokeStyle='#111'
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(hx+2+d*8,hy-3,3.8,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(hx+.8+d*8,hy-4.5,1.4,0,T),c.fill()
    c.lineWidth=3.5;c.beginPath();c.arc(hx+2,hy+3,5,.15*PI,.85*PI);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(hx+2+d*13,hy+5,4,2.5,0,0,T),c.fill()
    c.restore()
  }
  const sy=-34-10*e
  c.save();c.translate(-4,sy);c.rotate(rot+.04*st)
  c.fillStyle=SH;c.lineWidth=7;c.beginPath();c.arc(0,0,34,0,T);c.fill();c.stroke()
  c.strokeStyle=SD;c.lineWidth=6;c.beginPath();for(let a=0;a<4.4*PI;a+=.2){const r=3+a*1.75;c.lineTo(cos(a)*r,sin(a)*r)}c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,0,26,PI*1.1,PI*1.4);c.stroke()
  c.restore()
  c.restore()
}

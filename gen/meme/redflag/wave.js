// heart-eyed little guy happily hops and waves red flags while more and more red flags spring up all around him
const{sin,PI,min,max,abs}=Math,T=2*PI
export const frames=12,delay=Array(12).fill(100),rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const K='#1b1b1f',R='#fa5252',C='#fff3bf'
const flag=(c,x,y,h,d,ph,a=0,W=40,H=27)=>{c.save();c.translate(x,y);c.rotate(a)
  for(const[w,s]of[[10,K],[4,'#e9ecef']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(0,-h),c.stroke()
  const o=k=>4*sin(ph-k*2.6)*k;c.strokeStyle=K;c.lineWidth=5;c.fillStyle=R;c.beginPath()
  for(let k=0;k<=1;k+=.25)c.lineTo(d*W*k,-h+o(k))
  for(let k=1;k>=0;k-=.25)c.lineTo(d*W*k,-h+H+o(k))
  c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(0,-h-3,5,0,T);c.fill();c.stroke();c.restore()}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-16,-2,-10,-16,0,-7);c.bezierCurveTo(10,-16,16,-2,0,8);c.fillStyle='#f06595';c.fill();c.lineWidth=3;c.stroke();c.restore()}
export default(c,t)=>{
  const ph=T*t*2,sink=io((t-.84)/.12)
  // ground flags pop up one after another, then all sink back at the end of the loop
  for(const[x,y,h,d,t0]of[[22,214,84,1,.06],[234,214,84,-1,.2],[44,250,52,1,.34],[212,250,52,-1,.48]]){const s=bk((t-t0)/.1)*(1-sink);if(s>.02){c.save();c.translate(x,y);c.scale(1,s);flag(c,0,0,h,d,ph+x,0,34,23);c.restore()}}
  const hop=abs(sin(ph)),sq=1-.07*(1-hop)
  c.save();c.translate(128,240);c.scale(2-sq,sq);c.translate(-128,-240-10*hop)
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle='#ffe066'
  for(const x of[112,144])c.beginPath(),c.ellipse(x,230,14,9,0,0,T),c.fill(),c.stroke()
  // arms wave the flags alternately
  const w=sin(ph),ax=[[94,176,84,124-10*w,-.32+.22*w,-1],[162,176,172,124+10*w,.32+.22*w,1]]
  for(const[sx,sy,hx,hy,a,d]of ax)flag(c,hx,hy+8,72,d,ph+sx,a)
  for(const[sx,sy,hx,hy]of ax){for(const[lw,s]of[[20,K],[9,C]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.lineTo(hx,hy),c.stroke()
    c.strokeStyle=K;c.fillStyle=C;c.lineWidth=5;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke()}
  c.fillStyle=C;c.lineWidth=6;c.beginPath();c.ellipse(128,184,44,46,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(108,156,8,12,.6,0,T);c.fill()
  const hs=1.1+.18*abs(sin(ph*2));heart(c,110,176,hs);heart(c,146,176,hs)
  c.fillStyle=K;c.beginPath();c.moveTo(116,194);c.quadraticCurveTo(128,192,140,194);c.quadraticCurveTo(138,212,128,212);c.quadraticCurveTo(118,212,116,194);c.fill()
  c.fillStyle='#ff8787';c.beginPath();c.ellipse(128,207,6,3.5,0,0,T);c.fill()
  c.fillStyle='#ffa8a8';for(const x of[96,160])c.beginPath(),c.ellipse(x,196,7,4.5,0,0,T),c.fill()
  c.restore()
}

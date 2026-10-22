// banana peel opening flap by flap to show the happy curved fruit inside, then folding shut again in reverse
// each flap is a quadratic center line widened along its normal, so it can bend from hugging the fruit to drooping open
// flap roots and the peel's top edge aren't outlined while shut, so the closed banana reads as one piece
const{sin,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const mix=(a,b,o)=>a.map((v,i)=>v+(b[i]-v)*o)
const flap=(c,[P,C,Q],W,o,stem)=>{
  const pt=s=>[(1-s)**2*P[0]+2*s*(1-s)*C[0]+s*s*Q[0],(1-s)**2*P[1]+2*s*(1-s)*C[1]+s*s*Q[1]]
  const L=[],R=[]
  for(let k=0;k<=20;k++){const s=k/20,[x,y]=pt(s),[x2,y2]=pt(min(1,s+.01)),[x0,y0]=pt(max(0,s-.01)),dx=x2-x0,dy=y2-y0,n=hypot(dx,dy)||1,h=W*(1-s)**.6;L.push([x-dy/n*h,y+dx/n*h]);R.push([x+dy/n*h,y-dx/n*h])}
  if(stem){const[x,y]=Q,[x0,y0]=pt(.95),n=hypot(x-x0,y-y0);c.lineWidth=12;c.beginPath();c.moveTo(x,y);c.lineTo(x+(x-x0)/n*14,y+(y-y0)/n*14);c.stroke();c.lineWidth=4;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111';c.lineWidth=7}
  c.beginPath();for(const p of L)c.lineTo(...p);for(const p of R.reverse())c.lineTo(...p);c.fill();c.stroke()
  if(o>.3)c.lineWidth=4,c.beginPath(),[...Array(17)].forEach((_,k)=>c.lineTo(...pt((k+1)/20))),c.stroke(),c.lineWidth=7
}
const star=(c,x,y,r)=>{const k=r*.18;c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,k,-k],[0,r,k,k],[-r,0,-k,k],[0,-r,-k,-k]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const shut=[[[110,166],[100,100],[132,56]],[[146,166],[156,104],[140,56]],[[127,170],[122,100],[136,58]]]
const wide=[[[110,154],[60,116],[44,198]],[[146,154],[198,120],[214,198]],[[127,158],[124,200],[112,236]]]
export default(c,t)=>{
  const o=[0,1,2].map(k=>ease((t-k*.13)/.13)-ease((t-.62-(2-k)*.1)/.1)),open=o[2]>.9
  c.beginPath();c.moveTo(104,162);c.bezierCurveTo(100,120,108,84,136,58);c.bezierCurveTo(148,84,154,120,152,162);c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[120,141])c.beginPath(),c.ellipse(x,110,4.5,6,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[119,140])c.beginPath(),c.arc(x,108,1.8,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(130,118,7,.15*PI,.85*PI);c.stroke()
  c.lineWidth=2.5;for(const x of[112,148])for(const k of[-3,1])c.beginPath(),c.moveTo(x+k-1.5,127),c.lineTo(x+k+1.5,122),c.stroke()
  c.lineWidth=7;c.fillStyle='#fff'
  const base=()=>{c.beginPath();c.moveTo(158,146);c.bezierCurveTo(160,186,146,210,124,220);c.quadraticCurveTo(112,224,110,216);c.bezierCurveTo(98,196,94,176,96,146)}
  for(const k of[0,1])flap(c,[0,1,2].map(i=>mix(shut[k][i],wide[k][i],o[k])),18,o[k])
  base();c.fill();c.stroke()
  const m=max(o[0],o[1]);if(m>.05)c.lineWidth=7*min(1,m*3),c.beginPath(),c.moveTo(96,148),c.quadraticCurveTo(127,156,158,148),c.stroke(),c.lineWidth=7
  c.save();c.translate(114,222);c.rotate(.5);c.beginPath();c.roundRect(-7,-4,14,10,4);c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke();c.restore()
  c.fillStyle='#fff'
  flap(c,[0,1,2].map(i=>mix(shut[2][i],wide[2][i],o[2])),16,o[2],1)
  if(open){c.lineWidth=4;const p=(t-.39)/.23;for(const[x,y,ph]of[[70,70,0],[190,78,.5]]){const r=11*sin(PI*((p*2+ph)%1));if(r>2)star(c,x,y,r)}}
}

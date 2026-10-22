// cut gem bobbing in place, light shimmering across its facets, a glint sweeping over and sparkles popping
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=70
const SH=['#c5f6fa','#99e9f2','#66d9e8','#3bc9db','#22b8cf']
const TOPL=[[92,72],[164,72]],G=[[44,104],[86,104],[128,104],[170,104],[212,104]],BOT=[128,224]
export default(c,t)=>{
  const y=-5*sin(t*T)
  for(const[x,yy,o]of[[40,52,0],[218,64,.33],[214,176,.66],[42,180,.15]]){const s=12*max(0,sin(PI*((t*2+o)%1)));if(s>1.5){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,yy-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,yy+qy,x+px,yy+py);c.fill();c.stroke()}}
  c.translate(0,y)
  const sh=k=>SH[((k+Math.floor(t*10))%SH.length+SH.length)%SH.length]
  const tri=(a,b,d,k)=>{c.fillStyle=sh(k);c.beginPath();c.moveTo(...a);c.lineTo(...b);c.lineTo(...d);c.closePath();c.fill()}
  c.fillStyle=sh(0);c.beginPath();c.moveTo(...TOPL[0]);c.lineTo(...TOPL[1]);c.lineTo(...G[3]);c.lineTo(...G[1]);c.closePath();c.fill()
  tri(G[0],TOPL[0],G[1],1);tri(TOPL[1],G[4],G[3],2);tri(TOPL[0],G[1],G[2],3);tri(TOPL[1],G[2],G[3],4)
  for(let k=0;k<4;k++)tri(G[k],G[k+1],BOT,k+2)
  c.save();c.beginPath();c.moveTo(...G[0]);c.lineTo(...TOPL[0]);c.lineTo(...TOPL[1]);c.lineTo(...G[4]);c.lineTo(...BOT);c.closePath();c.clip()
  const g=((t*1.4)%1)*260-60;c.strokeStyle='#fff';c.lineWidth=14;c.beginPath();c.moveTo(g,230);c.lineTo(g+80,40);c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath()
  c.moveTo(...G[0]);c.lineTo(...G[4])
  for(const p of[G[1],G[2],G[3]])c.moveTo(...p),c.lineTo(...BOT)
  c.moveTo(...TOPL[0]);c.lineTo(...G[1]);c.lineTo(...TOPL[0]);c.lineTo(...G[2]);c.moveTo(...TOPL[1]);c.lineTo(...G[3]);c.moveTo(...TOPL[1]);c.lineTo(...G[2])
  c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(...G[0]);c.lineTo(...TOPL[0]);c.lineTo(...TOPL[1]);c.lineTo(...G[4]);c.lineTo(...BOT);c.closePath();c.stroke()
}

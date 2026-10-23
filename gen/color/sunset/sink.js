// sun sinks into the sea inside a round sticker while the sky warms to dusk, sparkles on the water, then it rises again
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=90
const DAY=['#ffa94d','#ffc078','#ffd8a8','#fff3bf'],DUSK=['#7048e8','#9775fa','#f783ac','#ffa94d'],E=[0,60,98,130,156],BL='#ff8787'
const mix=(a,b,k)=>'#'+[1,3,5].map(i=>Math.round(parseInt(a.slice(i,i+2),16)*(1-k)+parseInt(b.slice(i,i+2),16)*k).toString(16).padStart(2,'0')).join('')
const spk=(c,x,y,s)=>{c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const k=(1-cos(t*T))/2,y=100+100*k,H=156,disc=()=>{c.beginPath();c.arc(128,128,112,0,T)}
  c.save();disc();c.clip()
  DAY.forEach((d,j)=>{c.fillStyle=mix(d,DUSK[j],k);c.fillRect(0,E[j],256,E[j+1]-E[j])})
  c.fillStyle=mix('#fff','#fcc2d7',k);c.lineWidth=5
  for(const[x,cy,w]of[[70,62,30],[186,86,24]])c.beginPath(),c.ellipse(x,cy,w,7,0,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=mix('#ffd43b','#ff922b',k);c.beginPath();c.arc(128,y,36,0,T);c.fill();c.stroke()
  c.fillStyle='#111'
  if(k<.5)for(const d of[-1,1])c.beginPath(),c.arc(128+d*13,y-4,5,0,T),c.fill()
  else{c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(128+d*13,y-7,6,.15*PI,.85*PI),c.stroke()}
  c.lineWidth=4;c.beginPath();c.arc(128,y+6,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*24,y+8,6,3.5,0,0,T),c.fill()
  c.fillStyle='#4dabf7';c.fillRect(0,H,256,100);c.fillStyle='#339af0';c.fillRect(0,H+46,256,60)
  c.lineWidth=7;c.beginPath();c.moveTo(0,H);c.lineTo(256,H);c.stroke()
  const L=(1-k)*42+12,sun=mix('#ffe066','#ff922b',k)
  for(const[j,dy]of[[0,14],[1,28],[2,42]]){const w=L*(1-j*.25),x=128+4*sin(2*t*T+j*2);for(const[lw,s]of[[11,'#111'],[5,sun]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(x-w,H+dy),c.lineTo(x+w,H+dy),c.stroke()}
  c.strokeStyle='#d0ebff';c.lineWidth=4
  for(const[x,cy]of[[42,184],[196,180],[70,218],[170,224]])for(const dx of[0,14])c.beginPath(),c.arc(x+dx,cy,7,PI*1.1,PI*1.9),c.stroke()
  c.strokeStyle='#111'
  for(const[x,cy,o]of[[60,200,0],[198,206,.5]])spk(c,x,cy,3+5*max(0,sin((t+o)*2*T)))
  c.restore();c.lineWidth=7;disc();c.stroke()
}

// stocky yellow robot weightlifter dips and presses a heavy red-plated barbell overhead, bar flexing, squinting with effort, chest pressure gauge maxing out, steam puffing from its head vents at lockout, then lowers it
export const frames=24,delay=70
const P=Math.PI*2,Y='#f4c430',YD='#cf9c18',G='#a3adb7',D='#2b2f36'
const S=x=>x<0?0:x>1?1:x*x*(3-2*x)
const B=(t,c,w)=>{let x=Math.abs(((t-c)%1+1.5)%1-.5)/w;return x<1?(1+Math.cos(Math.PI*x))/2:0}
const H=t=>S((t-.14)/.26)-S((t-.62)/.24)
// two-bone IK, elbow/knee bent to side s (-1 left, 1 right)
const ik=(a,b,l1,l2,s)=>{
  const dx=b[0]-a[0],dy=b[1]-a[1],d=Math.min(Math.hypot(dx,dy),l1+l2-.01),q=Math.atan2(dy,dx)+s*Math.acos((l1*l1+d*d-l2*l2)/(2*l1*d))
  return[a[0]+l1*Math.cos(q),a[1]+l1*Math.sin(q)]
}
const limb=(c,a,b,w,f)=>{
  c.beginPath();c.moveTo(...a);c.lineTo(...b);c.lineWidth=w+8;c.strokeStyle='#111';c.stroke()
  c.lineWidth=w;c.strokeStyle=f;c.stroke();c.strokeStyle='#111'
}
const dot=(c,p,r,f)=>{c.beginPath();c.arc(...p,r,0,P);c.fillStyle=f;c.fill();c.lineWidth=4;c.stroke()}
const puff=(c,x,y,r)=>{
  const O=[[0,0,1],[-r*.8,r*.3,.7],[r*.7,r*.35,.65]]
  for(const w of[5,0])for(const[u,v,q]of O){c.beginPath();c.arc(x+u,y+v,r*q+w/2,0,P);c.fillStyle=w?'#111':'#eef1f3';c.fill()}
}
export default(c,t)=>{
  const h=H(t),e=1/240,acc=(H(t+e)-2*h+H(t-e))/e/e,dip=7*B(t,.1,.07)+4*B(t,.86,.07)
  const by=110-54*h+dip,sag=3+acc*.085,cy=dip
  // legs
  for(const s of[-1,1]){
    const hp=[128+s*20,170+cy],ft=[128+s*44,226],k=ik(hp,ft,34,34,-s)
    limb(c,hp,k,20,G);limb(c,k,ft,18,Y);dot(c,k,8,D)
    c.beginPath();c.roundRect(ft[0]-18+s*4,ft[1]-2,36,14,5);c.fillStyle=D;c.fill();c.lineWidth=4;c.stroke()
  }
  // torso with shading, hazard belt and gauge
  c.save();c.translate(0,cy)
  const tp=()=>{c.beginPath();c.moveTo(82,110);c.lineTo(174,110);c.lineTo(160,172);c.lineTo(96,172);c.closePath()}
  tp();c.fillStyle=Y;c.fill();c.save();c.clip();c.fillStyle=YD;c.fillRect(150,100,30,80)
  c.fillStyle=D;c.fillRect(80,152,100,16);c.fillStyle=Y
  for(let x=70;x<190;x+=16){c.beginPath();c.moveTo(x,168);c.lineTo(x+8,168);c.lineTo(x+16,152);c.lineTo(x+8,152);c.fill()}
  c.restore();tp();c.lineWidth=5;c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(85,152);c.lineTo(171,152);c.moveTo(91,168);c.lineTo(165,168);c.stroke()
  const gn=-2.4+1.9*h+.08*Math.sin(P*t*12)*h
  dot(c,[128,132],13,'#f4f6f8')
  c.beginPath();c.arc(128,132,9,-.9,-.2);c.lineWidth=4;c.strokeStyle='#e8402f';c.stroke();c.strokeStyle='#111'
  c.beginPath();c.moveTo(128,132);c.lineTo(128+10*Math.cos(gn),132+10*Math.sin(gn));c.lineWidth=2.5;c.stroke()
  c.beginPath();c.arc(128,132,2.5,0,P);c.fillStyle='#111';c.fill()
  // head: neck, box, visor, antenna, eyes by mood
  c.beginPath();c.rect(120,100,16,12);c.fillStyle=D;c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(128,72);c.lineTo(128,60);c.stroke()
  dot(c,[128,57],5,h>.9&&t%.08<.04?'#ff5040':'#e8402f')
  c.beginPath();c.roundRect(106,72,44,32,7);c.fillStyle=Y;c.fill();c.lineWidth=5;c.stroke()
  for(const s of[-1,1]){c.beginPath();c.roundRect(128+s*25-4,80,8,16,3);c.fillStyle=G;c.fill();c.lineWidth=3.5;c.stroke()}
  c.beginPath();c.roundRect(112,80,32,15,5);c.fillStyle=D;c.fill();c.lineWidth=3.5;c.stroke()
  const up=t>.12&&t<.42,top=t>=.42&&t<.62
  c.strokeStyle=c.fillStyle='#3fe6ff';c.lineWidth=3
  for(const s of[-1,1]){
    const x=128+s*8,y=87.5
    c.beginPath()
    if(up){c.moveTo(x-s*4,y-4);c.lineTo(x+s*3,y);c.lineTo(x-s*4,y+4);c.stroke()}
    else if(top){c.moveTo(x-4,y+2);c.quadraticCurveTo(x,y-6,x+4,y+2);c.stroke()}
    else{c.arc(x,y,3.5,0,P);c.fill()}
  }
  c.strokeStyle='#111'
  c.restore()
  // arms with hydraulic upper arms
  const hy=g=>by+sag*(g/116)**2
  const Hs=[-1,1].map(s=>[128+s*56,hy(56)])
  for(const s of[-1,1]){
    const sh=[128+s*44,118+cy],hd=Hs[(s+1)/2],el=ik(sh,hd,34,32,s)
    limb(c,sh,el,16,G);limb(c,el,hd,15,Y)
    c.lineWidth=2.5;c.beginPath();c.moveTo(sh[0]+s*4,sh[1]+4);c.lineTo((sh[0]+el[0])/2+s*5,(sh[1]+el[1])/2+3);c.stroke()
    dot(c,el,7,D)
    // shoulder pauldron
    c.save();c.translate(...sh);c.rotate(s*.35)
    c.beginPath();c.moveTo(-17,6);c.arc(0,4,17,Math.PI,0);c.lineTo(17,6);c.quadraticCurveTo(0,10,-17,6)
    c.fillStyle=Y;c.fill();c.lineWidth=4.5;c.stroke()
    c.lineWidth=2.5;c.beginPath();c.arc(0,4,10,Math.PI*1.1,Math.PI*1.9);c.stroke()
    c.restore()
  }
  // steam from head vents at lockout
  for(const s of[-1,1]){const a=(t-.4)/.26;if(a>0&&a<1){const r=13*Math.sin(Math.PI*a**.7);puff(c,128+s*(34+a*68),90+cy-a*26,r)}}
  // barbell: bent bar, plates tilted to the bar's slope
  c.beginPath();c.moveTo(12,hy(116));c.quadraticCurveTo(128,by-sag,244,hy(116));c.lineWidth=10;c.stroke()
  c.lineWidth=5;c.strokeStyle='#c9d1d8';c.stroke();c.strokeStyle='#111'
  for(const s of[-1,1])for(const[g,w,ht,f]of[[86,9,26,'#555d66'],[96,11,58,'#d8433a'],[109,10,46,'#d8433a']]){
    c.save();c.translate(128+s*g,hy(g));c.rotate(Math.atan(2*sag*s*g/116/116))
    c.beginPath();c.roundRect(-w/2,-ht/2,w,ht,3);c.fillStyle=f;c.fill();c.lineWidth=4;c.stroke()
    if(ht>40){c.lineWidth=2;c.beginPath();c.moveTo(0,-ht/2+6);c.lineTo(0,ht/2-6);c.stroke()}
    c.restore()
  }
  for(const p of Hs){c.beginPath();c.roundRect(p[0]-10,p[1]-9,20,18,6);c.fillStyle=G;c.fill();c.lineWidth=4;c.stroke()}
}

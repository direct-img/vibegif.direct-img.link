// deeply unimpressed cat rolls its eyes so hard the pupils spin all the way around twice, then sighs and goes back to the flat stare
const{sin,cos,PI,min,max}=Math,T=2*PI
const U=[0,.15,.2,.25,...Array.from({length:12},(_,k)=>.27+k*.033),.68,.74,.8,.88]
export const frames=U.length,delay=[700,70,70,70,...Array(12).fill(45),80,90,110,600],rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u))
const K='#1b1b1f',O='#ffa94d',OD='#f76707',M='#fff4e6'
export default(c,_,i)=>{
  const t=U[i],tilt=io((t-.13)/.12)*(1-io((t-.68)/.12)),sp=cl((t-.25)/.42),th=-PI/2+2*T*(sp<.5?2*sp*sp:1-2*(1-sp)**2)
  const look=io((t-.13)/.12)*(1-io((t-.68)/.12)),lid=.5-.42*look,spin=t>.26&&t<.68
  c.save();c.translate(128,226);c.rotate(-.1*tilt);c.translate(-128,-226-8*tilt)
  c.strokeStyle=K;c.lineWidth=6;c.lineJoin='round'
  for(const d of[-1,1]){c.fillStyle=O;c.beginPath();c.moveTo(128+d*86,110);c.lineTo(128+d*70,22);c.lineTo(128+d*24,72);c.fill();c.stroke()
    c.fillStyle='#ffc9c9';c.beginPath();c.moveTo(128+d*74,88);c.lineTo(128+d*67,40);c.lineTo(128+d*42,68);c.fill()}
  c.fillStyle=O;c.beginPath();c.ellipse(128,146,96,80,0,0,T);c.fill();c.stroke()
  c.strokeStyle=OD;c.lineWidth=7;for(const d of[-18,0,18])c.beginPath(),c.moveTo(128+d,70),c.lineTo(128+d*.7,92),c.stroke()
  for(const d of[-1,1])for(const y of[132,152])c.beginPath(),c.moveTo(128+d*94,y),c.lineTo(128+d*76,y+4),c.stroke()
  c.strokeStyle=K;c.lineWidth=6
  c.fillStyle=M;c.beginPath();c.ellipse(128,186,46,30,0,0,T);c.fill()
  for(const d of[-1,1]){const x=128+d*38,y=136
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(x,y,26,24,0,0,T);c.fill()
    c.save();c.clip()
    const pr=spin?15:look>.5?15*look:0,px=x+pr*cos(spin?th:-PI/2)+(look<.5?d*-2:0),py=y+pr*sin(spin?th:-PI/2)+(look<.5?6*(1-look):0)
    if(spin){c.strokeStyle='#adb5bd';c.lineWidth=6;c.beginPath();c.arc(x,y,15,th-1.6,th-.3);c.stroke();c.strokeStyle=K}
    c.fillStyle=K;c.beginPath();c.arc(px,py,10,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(px+3,py-3,3,0,T);c.fill()
    c.fillStyle=O;c.fillRect(x-30,y-28,60,52*lid);c.restore()
    c.lineWidth=5;c.beginPath();c.ellipse(x,y,26,24,0,0,T);c.stroke()
    c.beginPath();c.moveTo(x-27,y-24+48*lid);c.lineTo(x+27,y-24+48*lid);c.stroke()}
  c.fillStyle='#f783ac';c.lineWidth=4;c.beginPath();c.moveTo(118,170);c.lineTo(138,170);c.lineTo(128,180);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(128,180);c.lineTo(128,188);c.moveTo(114,196);c.quadraticCurveTo(128,192,142,196);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const a of[-.12,.08])c.beginPath(),c.moveTo(128+d*50,184+a*30),c.lineTo(128+d*84,180+a*120),c.stroke()
  c.restore()
  const pf=cl((t-.72)/.14)
  if(pf>0&&pf<1){c.fillStyle='#fff';c.strokeStyle=K;c.lineWidth=4;for(const[k,r]of[[0,10],[1,14],[2,11]]){const s=(1-pf)*1.6;c.beginPath();c.arc(156+34*pf+k*17,204+12*pf+(k%2?-7:5),r*s+4,0,T);c.fill();c.stroke()}}
}

// pencil writing endless cursive loops while the paper slides along under it
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=24,delay=60
const PAPER='#fff9db',RULE='#a5d8ff',INK='#364fc7',Y='#ffd43b',YD='#fab005',WD='#ffd8a8',ER='#faa2c1',FE='#ced4da'
const R=10,D=17,TIP=162
const pt=th=>[R*th-D*sin(th),-D*cos(th)]
export default(c,t)=>{
  const off=t*2*T*R
  c.fillStyle=PAPER;c.beginPath();c.roundRect(16,64,224,140,12);c.fill();c.stroke()
  c.strokeStyle=RULE;c.lineWidth=3;for(const y of[96,128,160,192])c.beginPath(),c.moveTo(28,y),c.lineTo(228,y),c.stroke()
  c.strokeStyle='#ff8787';c.beginPath();c.moveTo(48,68);c.lineTo(48,200);c.stroke()
  c.save();c.beginPath();c.rect(20,64,220,140);c.clip()
  c.strokeStyle=INK;c.lineWidth=5;c.beginPath()
  let tip=[0,0]
  for(let th=(off-TIP)/R-2;th<=(off+TIP)/R;th+=.06){const[x,y]=pt(th),sx=x-off+TIP-pt(0)[0],sy=136+y;if(sx>TIP+.5)break;c.lineTo(sx,sy);tip=[sx,sy]}
  c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=7
  const[tx,ty]=tip
  c.save();c.translate(tx,ty);c.rotate(-PI/3.4)
  c.fillStyle=WD;c.beginPath();c.moveTo(0,0);c.lineTo(-12,-28);c.lineTo(12,-28);c.closePath();c.fill();c.stroke()
  c.fillStyle='#495057';c.beginPath();c.moveTo(0,0);c.lineTo(-5,-11);c.lineTo(5,-11);c.closePath();c.fill()
  c.fillStyle=Y;c.beginPath();c.rect(-13,-130,26,102);c.fill();c.stroke()
  c.fillStyle=YD;c.fillRect(4,-127,6,96)
  c.fillStyle=FE;c.beginPath();c.rect(-14,-150,28,20);c.fill();c.stroke()
  c.fillStyle=ER;c.beginPath();c.roundRect(-13,-172,26,24,[8,8,0,0]);c.fill();c.stroke()
  c.restore()
}

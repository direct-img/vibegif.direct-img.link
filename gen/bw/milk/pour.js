// milk carton tipping to pour into a glass that fills up, then a straw sips it back down for the loop
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const glass=c=>{c.beginPath();c.moveTo(160,140);c.lineTo(168,226);c.quadraticCurveTo(169,232,175,232);c.lineTo(213,232);c.quadraticCurveTo(219,232,220,226);c.lineTo(228,140)}
export default(c,t)=>{
  const a=1.05*(ease(t/.18)-ease((t-.55)/.15)),pour=a>.85,L=.78*(ease((t-.17)/.4)-ease((t-.68)/.22)),ly=230-88*L
  const C=[88,112],sp=[C[0]+34*cos(a)+42*sin(a),C[1]+34*sin(a)-42*cos(a)]
  c.lineWidth=4;for(const x of[172,180])c.beginPath(),c.moveTo(x,166),c.lineTo(x+4,196),c.stroke()
  if(L>.01){c.save();glass(c);c.clip();c.beginPath();c.moveTo(150,240);c.lineTo(150,ly);for(let x=150;x<=240;x+=3)c.lineTo(x,ly+(pour?2.5*sin(x/7-t*T*6):0));c.lineTo(240,240);c.fill();c.lineWidth=5;c.stroke();c.restore()}
  const st=t>=.62&&t<.96?min(1,(t-.62)/.06,(.96-t)/.06):0
  if(st>0){const o=(1-st)*70;for(const[w,s]of[[15,'#111'],[7,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(246+o*.4,70-o),c.lineTo(226+o*.4,100-o),c.lineTo(196+o*.4,214-o),c.stroke()}
  for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,glass(c),c.stroke()
  if(pour)for(const[w,s]of[[14,'#111'],[6,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(...sp),c.quadraticCurveTo(sp[0]+40,sp[1]-4,194,ly),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.save();c.translate(...C);c.rotate(a)
  c.beginPath();c.roundRect(-12,-72,24,12,3);c.fill();c.stroke()
  c.beginPath();c.moveTo(-36,64);c.lineTo(-36,-38);c.lineTo(0,-64);c.lineTo(36,-38);c.lineTo(36,64);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-36,-38);c.lineTo(36,-38);c.stroke()
  if(pour)for(const x of[-14,14])c.beginPath(),c.arc(x,8,7,PI*1.15,PI*1.85),c.stroke()
  else{c.fillStyle='#111';for(const x of[-14,14])c.beginPath(),c.ellipse(x,6,5,7,0,0,T),c.fill();c.fillStyle='#fff';for(const x of[-16,12])c.beginPath(),c.arc(x,3,2,0,T),c.fill()}
  c.beginPath();c.arc(0,16,9,.15*PI,.85*PI);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const o of[-5,0,5])c.beginPath(),c.moveTo(d*24+o-2,30),c.lineTo(d*24+o+2,23),c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(0,40);c.quadraticCurveTo(9,52,0,56);c.quadraticCurveTo(-9,52,0,40);c.stroke()
  c.restore()
}

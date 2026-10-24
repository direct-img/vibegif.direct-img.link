// red-handled scissors snipping their way down the dashed line of a yellow percent-off coupon, the dashes marching into the blades
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=24,delay=70
const CP='#ffd43b',CPD='#fab005',HD='#ff6b6b',BLD='#dee2e6',X=178
const tk=c=>{c.beginPath();c.moveTo(34,110);c.lineTo(222,110);c.arcTo(238,110,238,126,16);c.arc(238,170,15,-PI/2,PI/2,true);c.arcTo(238,232,222,232,16);c.lineTo(34,232);c.arcTo(18,232,18,216,16);c.arc(18,170,15,PI/2,-PI/2,true);c.arcTo(18,110,34,110,16);c.closePath()}
export default(c,t)=>{
  const sn=abs(sin(4*PI*t)),h=.04+.3*sn,dy=4*(1-sn)
  tk(c);c.fillStyle=CP;c.fill()
  c.save();tk(c);c.clip();c.fillStyle=CPD;c.fillRect(18,216,220,20);c.restore()
  tk(c);c.stroke()
  for(const[w,s]of[[26,'#111'],[13,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(130,138);c.lineTo(76,204);c.moveTo(94,145);c.arc(82,145,12,0,T);c.moveTo(134,198);c.arc(122,198,12,0,T);c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?8:19,a=k*PI/5-PI/2;c.lineTo(209+cos(a)*r,172+sin(a)*r)}c.closePath();c.fill();c.stroke()
  c.setLineDash([12,10]);c.lineDashOffset=t*66;c.lineWidth=5;c.beginPath();c.moveTo(X,116);c.lineTo(X,228);c.stroke();c.setLineDash([])
  c.translate(X,80+dy)
  for(const s of[1,-1]){
    c.save();c.rotate(s*h)
    for(const[w,st]of[[18,'#111'],[9,HD]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(0,0),c.lineTo(s*14,-30),c.moveTo(s*20+15,-48),c.arc(s*20,-48,15,0,T),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BLD;c.lineWidth=5;c.beginPath();c.moveTo(-s*1,-8);c.quadraticCurveTo(-s*10,28,0,62);c.quadraticCurveTo(s*9,26,s*6,-6);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(-s*2,6);c.quadraticCurveTo(-s*4,26,-s*1,40);c.stroke()
    c.restore()
  }
  c.strokeStyle='#111';c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(0,0,6,0,T);c.fill();c.stroke()
}

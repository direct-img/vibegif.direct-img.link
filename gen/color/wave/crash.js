// round ocean badge: curling waves rolling past under a sun, spray flicking off the crests
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const SKY='#d0ebff',SUN='#ffd43b',W1='#74c0fc',W2='#228be6'
const crest=(c,cx,base,h)=>{
  c.moveTo(cx-64,base);c.quadraticCurveTo(cx-30,base-4,cx-10,base-h*.7)
  c.quadraticCurveTo(cx+6,base-h*1.05,cx+30,base-h*.9);c.quadraticCurveTo(cx+40,base-h*.7,cx+26,base-h*.55)
  c.quadraticCurveTo(cx+18,base-h*.75,cx+10,base-h*.55);c.quadraticCurveTo(cx+24,base-10,cx+64,base)
}
const band=(c,base,h,sh)=>{c.beginPath();c.moveTo(-200,260);for(let k=-2;k<4;k++)crest(c,k*128+sh,base,h);c.lineTo(460,260);c.closePath()}
export default(c,t)=>{
  c.save();c.beginPath();c.arc(128,128,112,0,T);c.clip()
  c.fillStyle=SKY;c.fillRect(0,0,256,256)
  c.fillStyle=SUN;c.beginPath();c.arc(176,82,30,0,T);c.fill();c.stroke()
  band(c,170,70,-t*128+64);c.fillStyle=W1;c.fill();c.stroke()
  band(c,212,80,t*128*2%128-0);c.fillStyle=W2;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5
  for(let k=-1;k<3;k++){const cx=k*128+(t*256%128);c.beginPath();c.arc(cx+10,212-48,14,PI*1.1,PI*1.7);c.stroke()}
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=4
  for(let k=-1;k<3;k++)for(const[dx,dy,o]of[[38,-78,0],[46,-66,.4],[30,-88,.7]]){const p=(t*2+o)%1,cx=k*128+(t*256%128);c.beginPath();c.arc(cx+dx+p*16,212+dy-p*14+p*p*30,4*(1-p)+1,0,T);c.fill();c.stroke()}
  c.restore();c.lineWidth=7;c.beginPath();c.arc(128,128,112,0,T);c.stroke()
}

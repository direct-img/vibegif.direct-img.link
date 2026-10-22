// ice cream cone melting: drips stretch down the cone and drops fall off, the scoop looks worried
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=24,delay=80
export default(c,t)=>{
  c.beginPath();c.moveTo(80,146);c.lineTo(176,146);c.lineTo(128,246);c.closePath();c.fill()
  c.save();c.clip();c.lineWidth=4;for(let k=-6;k<8;k++)c.beginPath(),c.moveTo(60+k*18,140),c.lineTo(160+k*18,250),c.moveTo(196-k*18,140),c.lineTo(96-k*18,250),c.stroke();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(80,146);c.lineTo(176,146);c.lineTo(128,246);c.closePath();c.stroke()
  for(const[x,o]of[[108,0],[150,.5]]){
    const p=(t+o)%1,L=p<.7?10+40*(p/.7)**1.5:10+40*(1-(p-.7)/.3)**3,dy=p>=.7?150+50+(p-.7)/.3*90:0
    c.beginPath();c.roundRect(x-8,140,16,L+10,[0,0,8,8]);c.fill();c.stroke()
    if(dy){c.beginPath();c.arc(x,dy,7,0,T);c.fill();c.stroke()}
  }
  c.beginPath();c.arc(128,102,56,PI*.92,PI*.08)
  for(let k=0;k<=6;k++){const x=184-k*18.7;c.arc(x-9.3,148,9.4,0,PI)}
  c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(128,46);c.quadraticCurveTo(132,24,148,20);c.lineWidth=5;c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(128,48,13,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*18,104,5,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,90),c.lineTo(128+d*24,94),c.stroke()
  c.beginPath();c.moveTo(118,124);c.quadraticCurveTo(123,118,128,124);c.quadraticCurveTo(133,130,138,124);c.stroke()
  const sw=(t*2)%1
  c.save();c.translate(178,72+sw*20);c.fillStyle='#fff';c.beginPath();c.moveTo(0,-9);c.quadraticCurveTo(6,0,0,6);c.quadraticCurveTo(-6,0,0,-9);c.fill();c.lineWidth=4;c.stroke();c.restore()
}

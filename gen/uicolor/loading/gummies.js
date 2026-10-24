// three gummy bears, red, yellow and green, hopping one after another in a wave like a loading dots row
const{sin,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const B=[['#ff6b6b','#ffa8a8'],['#ffd43b','#fff3bf'],['#69db7c','#b2f2bb']],BL='#ff8787'
const shapes=c=>[()=>c.ellipse(-14,-12,12,13,0,0,T),()=>c.ellipse(14,-12,12,13,0,0,T),()=>c.ellipse(-25,-44,10,14,.5,0,T),()=>c.ellipse(25,-44,10,14,-.5,0,T),()=>c.ellipse(0,-36,26,29,0,0,T),()=>c.arc(-18,-96,10,0,T),()=>c.arc(18,-96,10,0,T),()=>c.arc(0,-76,25,0,T)]
export default(c,t)=>{
  B.forEach(([col,lt],k)=>{
    const h=max(0,sin(T*(t-k*.16))),y=-50*h**.8,sq=h<.15?1-(.15-h)*.8:1+.06*h*(1-h)*4
    c.save();c.translate(48+k*80,214);c.scale(2-sq,sq);c.translate(0,y/sq);c.scale(1.04,1.04)
    const S=shapes(c)
    c.fillStyle='#111';for(const f of S)c.beginPath(),f(),c.lineWidth=14,c.strokeStyle='#111',c.stroke()
    c.fillStyle=col;for(const f of S)c.beginPath(),f(),c.fill()
    c.fillStyle=lt;c.beginPath();c.ellipse(0,-32,15,17,0,0,T);c.fill();c.beginPath();c.ellipse(0,-68,12,8,0,0,T);c.fill()
    for(const d of[-1,1])c.beginPath(),c.arc(d*18,-96,4.5,0,T),c.fill()
    c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(-6,-22);c.quadraticCurveTo(-8,-12,-14,-6);c.moveTo(6,-22);c.quadraticCurveTo(8,-12,14,-6);c.stroke()
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*10,-80,4,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*10-1.5,-81.5,1.5,0,T),c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(0,-71,4,3,0,0,T);c.fill()
    c.lineWidth=3;c.beginPath();c.moveTo(-5,-65);c.quadraticCurveTo(-2.5,-62,0,-66);c.quadraticCurveTo(2.5,-62,5,-65);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*17,-70,4.5,2.8,0,0,T),c.fill()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,-76,18,PI*1.15,PI*1.4);c.stroke();c.beginPath();c.arc(0,-36,20,PI*1.05,PI*1.3);c.stroke()
    c.restore()
  })
}

// overheated server tower with dizzy x eyes, its lights blinking erratically, trembling while puffs of smoke rise from the top
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=90
export default(c,t,i)=>{
  const P=[0,1,2].map(k=>{const p=(t+k/3)%1,r=19*sin(PI*p)**.7;return[(k%2?150:110)+16*sin(T*p+k*2)*p,76-54*p,r]})
  for(const f of[0,1])for(const[x,y,r]of P)if(r>1)for(const[dx,dy,q]of[[-r*.6,r*.15,.7],[r*.6,r*.15,.7],[0,-r*.2,.9]]){c.beginPath();c.arc(x+dx,y+dy,r*q,0,T);f?(c.fillStyle='#ddd',c.fill()):(c.lineWidth=14,c.stroke())}
  c.lineWidth=7;c.fillStyle='#fff'
  c.translate(i%2?1.5:-1.5,0)
  for(const x of[84,172])c.beginPath(),c.roundRect(x-12,214,24,20,6),c.fill(),c.stroke()
  c.beginPath();c.roundRect(62,74,132,150,16);c.fill();c.stroke()
  for(let k=0;k<2;k++){
    const y=88+k*38
    c.beginPath();c.roundRect(76,y,104,28,8);c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(88,y+14);c.lineTo(124,y+14);c.stroke()
    for(let j=0;j<2;j++){c.beginPath();c.arc(146+j*18,y+14,5.5,0,T);c.fillStyle=(i*7+k*5+j*3)%5<2?'#111':'#fff';c.fill();c.stroke()}
    c.fillStyle='#fff';c.lineWidth=7
  }
  c.lineWidth=6;for(const x of[106,150])c.beginPath(),c.moveTo(x-8,170),c.lineTo(x+8,186),c.moveTo(x+8,170),c.lineTo(x-8,186),c.stroke()
  c.lineWidth=5;c.beginPath();for(let k=0;k<=6;k++)c.lineTo(110+k*6,204+(k%2?-4:3));c.stroke()
}

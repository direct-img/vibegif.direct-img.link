// five dots in a row colored blue, violet, magenta, coral and orange (cool to warm), riding a traveling sine wave left to right, each dot squashing flat at the bottom of its dip
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=40,delay=30
const C=['#3a7bff','#7b5cff','#c04fd8','#ff5a78','#ff8c2e']
export default(c,t)=>{
  for(let k=0;k<5;k++){
    const a=T*t-k*1.05,y=cos(a),  // y=1 is the bottom of the dip
      s=max(0,y)**6*.2,             // squash only near the bottom
      e=abs(sin(a))*.07             // slight stretch while moving fast
    c.save(),c.translate(48+k*40,128+40*y+19*s) // keep the bottom edge planted while squashed
    c.scale(1+s-e*.6,1-s+e)
    c.fillStyle=C[k],c.beginPath(),c.arc(0,0,19,0,T),c.fill()
    c.fillStyle='#ffffff55',c.beginPath(),c.arc(-6,-7,5.5,0,T),c.fill()
    c.restore()
  }
}

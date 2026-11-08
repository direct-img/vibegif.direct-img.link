// twelve rounded mid-grey capsule ticks with dark outlines around a circle, a white highlight sweeps clockwise with a little outward stretch and leaves a stepped trail fading from light grey back to mid grey
export const frames=36,delay=40
const{sin,cos,PI,floor}=Math,T=2*PI
const C=['#ffffff','#e4e4e4','#cbcbcb','#b1b1b1','#979797','#808080']
export default(c,t)=>{
  const p=12*t
  for(let j=0;j<12;j++){
    const d=((p-j)%12+12)%12,l=floor(d),a=T*j/12-PI/2,
      o=l?0:8*sin(PI*d), // head tick reaches outward
      x=cos(a),y=sin(a),r1=58+o*.4,r2=88+o
    c.beginPath(),c.moveTo(128+x*r1,128+y*r1),c.lineTo(128+x*r2,128+y*r2)
    c.lineWidth=22,c.strokeStyle='#111',c.stroke()
    c.lineWidth=12,c.strokeStyle=C[l<5?l:5],c.stroke()
  }
}

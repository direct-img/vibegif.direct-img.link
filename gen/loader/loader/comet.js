// a violet bead circles clockwise over a ring of tiny lavender dots, trailing a tapering tail of shrinking beads that shade from violet to hot pink, it speeds up and eases off each lap so the tail stretches out and bunches up
export const frames=40,delay=40
const{sin,cos,PI,round}=Math,T=2*PI
const A=t=>T*(t-.06*sin(T*t))-PI/2, // eased lap angle
  m=(a,b,f)=>a+(b-a)*f,
  H=[124,77,255],P=[255,79,154],R=82
export default(c,t)=>{
  c.fillStyle='#b9a3f2'
  for(let j=0;j<12;j++)c.beginPath(),c.arc(128+R*cos(T*j/12),128+R*sin(T*j/12),5,0,T),c.fill()
  for(let k=9;k>=0;k--){
    const a=A(t-k*.032),f=k/9,r=16-11*f
    c.fillStyle=`rgb(${H.map((v,n)=>round(m(v,P[n],f)))})`
    c.beginPath(),c.arc(128+R*cos(a),128+R*sin(a),r,0,T),c.fill()
  }
}

// square of coral paper with a cream back and dark outlines folds its four corners into the center one after another, each flap lifting toward you in perspective and casting a shadow, the folded envelope pops and spins a quarter turn, then the corners unfold in reverse
const{sin,cos,PI,round,abs,SQRT1_2}=Math
export const frames=64,delay=40
const cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),
 a=84,f=330,
 FR=['#f0604d','#dc5240','#c44432'],BK=['#fff4e0','#f1e0c4','#ddc8a6'],
 K=[[-1,-1],[1,-1],[1,1],[-1,1]],
 // fold: swing over, land with a small flutter; unfold: smooth swing back
 fold=u=>u<=0?0:u>=1?PI:u<.72?PI*sm(u/.72):PI*(1-.07*sin((u-.72)/.28*PI)),
 ang=(t,j)=>t<.5?fold((t-.03-j*.09)/.16):PI*(1-sm((t-.6-(3-j)*.075)/.15)),
 // quarter spin: wind up, turn, overshoot, settle
 ib=x=>x<.2?-.06*sm(x/.2):x<.72?-.06+1.12*sm((x-.2)/.52):1.06-.06*sm((x-.72)/.28),
 pr=(x,y,z)=>[x*f/(f-z),y*f/(f-z)],
 poly=(c,P)=>{c.beginPath();for(const p of P)c.lineTo(...p);c.closePath()}
export default(c,t)=>{
 const th=K.map((_,j)=>ang(t,j)),
  pop=t>.43&&t<.62?sin(cl((t-.43)/.19)*PI*2)*(1-cl((t-.43)/.19))*.09:0
 c.translate(128,128),c.rotate(ib(cl((t-.45)/.17))*PI/2),c.scale(1+pop,1+pop)
 c.lineWidth=6
 // base sheet: the square minus any corner that has started to fold
 const B=[]
 K.forEach(([x,y],j)=>{
  const e=[[x*a,0],[0,y*a]]
  th[j]>0?B.push(...(x*y>0?e:e.reverse())):B.push([x*a,y*a])
 })
 c.fillStyle=FR[0],poly(c,B),c.fill(),c.stroke()
 // crease marks
 c.save(),c.lineWidth=3,c.strokeStyle='#c94735',poly(c,[[a,0],[0,a],[-a,0],[0,-a]]),c.stroke(),c.restore()
 K.forEach(([x,y],j)=>{
  const q=th[j]
  if(!q)return
  const E1=[x*a,0],E2=[0,y*a],h=a/2,cq=cos(q),z=a*SQRT1_2*sin(q),
   P=pr(h*x+h*x*cq,h*y+h*y*cq,z)
  if(q<PI){
   // shadow on the sheet, pushed down-right by the lift
   c.save(),poly(c,B),c.clip()
   c.globalAlpha=.28,c.fillStyle='#000'
   poly(c,[E1,E2,[h*x+h*x*cq+z*.3,h*y+h*y*cq+z*.45]]),c.fill(),c.restore()
  }
  const cr=(E2[0]-E1[0])*(P[1]-E1[1])-(E2[1]-E1[1])*(P[0]-E1[0]),
   o=(E2[0]-E1[0])*(y*a-E1[1])-(E2[1]-E1[1])*(x*a-E1[0]),
   s=2-round(abs(cq)*2)
  c.fillStyle=(cr*o>0?FR:BK)[s],poly(c,[E1,P,E2]),c.fill(),c.stroke()
 })
}

// material style spinner: one thick arc spins round, stretching long and then shrinking short as it goes
const{PI,min,max,floor}=Math,T=2*PI
export const frames=30,delay=50
const e=u=>(u=min(1,max(0,u)),u<.5?4*u**3:1-4*(1-u)**3)
export default(c,t)=>{
  const q=t*2%1,G=1.5*PI,o=T*t*1.5+floor(t*2)*G-PI/2,a=o+G*e(q*2-1),b=o+.6+G*e(q*2)
  for(const[w,s]of[[42,'#111'],[28,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(128,128,86,a,b),c.stroke()
}

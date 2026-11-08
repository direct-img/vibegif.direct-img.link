// a pale peach figure-eight track with a bright orange comet racing along it, yellow-hot head and a tail of orange to red beads shrinking behind it, speeding up on the straights
export const frames=36,delay=50
const{sin,cos,PI}=Math,T=2*PI,
// lemniscate of Bernoulli, stretched taller
L=s=>{const d=1+sin(s)**2;return[128+86*cos(s)/d,128+118*sin(s)*cos(s)/d]},
mix=(a,b,k)=>`rgb(${a.map((v,j)=>v+(b[j]-v)*k|0)})`
export default(c,t)=>{
 c.lineWidth=13,c.strokeStyle='#f6c49a',c.beginPath()
 for(let j=0;j<=120;j++)c.lineTo(...L(j/120*T))
 c.stroke()
 // phase with gentle speed variation (faster through the crossing)
 const ph=s=>T*s-.22*sin(2*T*s)
 for(let j=48;j>=0;j--){const k=j/48,[x,y]=L(ph(t-k*.32))
  c.fillStyle=mix([255,150,30],[214,40,40],k),c.beginPath(),c.arc(x,y,15*(1-k)**.9+2.5,0,T),c.fill()}
 const[x,y]=L(ph(t))
 c.fillStyle='#ffe066',c.beginPath(),c.arc(x,y,8,0,T),c.fill()
}

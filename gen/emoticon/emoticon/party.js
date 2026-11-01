// emoticon in a party hat tooting a party horn that unrolls and curls back, confetti fluttering down
const P=Math.PI,K='#111',G='#9a9a9a',W='#fff',S=Math.sin,C=Math.cos
export const frames=24,delay=82
const cl=x=>Math.min(1,Math.max(0,x)),sm=x=>(x=cl(x),x*x*(3-2*x))
// party horn centreline: straight for the unrolled part, the rest still curled tight toward the tip
const horn=k=>{
  const L=86,n=43,ds=L/n,e=10+(L-10)*k,p=[[0,0]]
  let x=0,y=0,a=-.1
  for(let j=0;j<n;j++){
    const s=j*ds;a+=s<e?0:(1/9+(1/22-1/9)*Math.min(1,(L-s)/76))*ds
    x+=C(a)*ds;y+=S(a)*ds;p.push([x,y])
  }
  return p
}
export default(c,t,i)=>{
  const q=t*2%1,k=sm(q/.14)-sm((q-.5)/.2),up=sm(q/.12)*(1-sm((q-.42)/.3))
  // confetti fluttering down, most behind the head, a few in front
  const conf=front=>{
    for(let j=0;j<16;j++){
      if((j%6==1)!=front)continue
      const f=(t+j*.618)%1,s=Math.min(1,5*Math.min(f,1-f)),x=(front?[,40,,,,,,214,,,,,,52][j]:28+(j*67)%200)+10*S(2*P*(2*f+j*.3)),y=8+232*f
      c.save();c.translate(x,y);c.rotate(4*P*f+j);c.scale(s,s);c.lineWidth=3.5;c.beginPath()
      if(j%3<2)c.rect(-8,-4,16,8);else c.arc(0,0,5,0,2*P)
      c.fillStyle=j%3==1?W:G;c.fill();if(j%3==1)c.stroke()
      c.restore()
    }
  }
  conf(0)
  c.save()
  c.translate(128,146-7*up);c.rotate(-.04+.05*up)
  const sx=1+.04*k
  c.beginPath();c.ellipse(0,0,96*sx,96*(2-sx),0,0,2*P);c.fillStyle=W;c.fill();c.lineWidth=8;c.stroke()
  // party hat perched at a slant, wobbling on every toot
  c.save();c.rotate(-.7+.12*Math.exp(-5*q)*S(16*q));c.translate(0,-86)
  const cone=()=>{c.beginPath();c.moveTo(-32,0);c.lineTo(0,-60);c.lineTo(32,0);c.quadraticCurveTo(0,9,-32,0)}
  cone();c.fill();c.save();c.clip();c.fillStyle=K
  for(const y of[-45,-25,-5]){c.beginPath();c.moveTo(-38,y+7);c.lineTo(38,y-9);c.lineTo(38,y+1);c.lineTo(-38,y+17);c.fill()}
  c.restore();c.lineWidth=6;cone();c.stroke()
  c.beginPath();c.arc(0,-62,10,0,2*P);c.fillStyle=W;c.fill();c.lineWidth=5;c.stroke()
  c.restore()
  // happy shut eyes, scrunching tighter on each toot; brows hop up
  c.fillStyle=K;c.lineWidth=8
  for(const d of[-1,1]){
    c.beginPath();c.ellipse(d*34,-8+2*k,15,10+4*k,0,P,2*P);c.stroke()
    c.beginPath();c.arc(d*36+(d<0?4:0),-40-6*up,16,1.22*P,1.78*P);c.stroke()
  }
  // horn: pursed mouth, striped paper tube
  c.translate(10,48);c.rotate(.04*S(2*P*t*6)*k)
  const p=horn(k),path=()=>{c.beginPath();c.moveTo(...p[0]);for(const v of p)c.lineTo(...v)}
  c.lineCap='butt';c.lineWidth=18;path();c.stroke();c.strokeStyle=W;c.lineWidth=11;path();c.stroke()
  c.strokeStyle=K;c.setLineDash([7,7]);path();c.stroke();c.setLineDash([])
  c.beginPath();c.ellipse(-4,0,12,11,0,0,2*P);c.fill()
  // toot lines bursting off the open end
  if(k>.85){
    const[x,y]=p[p.length-1];c.strokeStyle=G;c.lineWidth=5;c.lineCap='round'
    for(const b of[-.8,-.1,.6]){const r=20+4*S(16*P*t);c.beginPath();c.moveTo(x+12*C(b),y+12*S(b));c.lineTo(x+r*C(b),y+r*S(b));c.stroke()}
  }
  c.restore();conf(1)
}

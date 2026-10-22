// puffy-cheeked wind cloud blowing, its cheeks swelling as dashed gusts stream out to the right
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  const pf=1+.08*(1-cos(2*T*t))/2,G=[
    ()=>{c.moveTo(156,112);c.bezierCurveTo(184,92,204,110,224,94);c.arc(224,108,14,-PI/2,PI*.9)},
    ()=>{c.moveTo(162,128);c.bezierCurveTo(190,120,210,142,240,130)},
    ()=>{c.moveTo(156,144);c.bezierCurveTo(180,166,196,152,214,176);c.arc(202,184,14,-.6,PI*1.3)}]
  c.setLineDash([34,22]);c.lineDashOffset=-2*t*56
  for(const g of G)for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),g(),c.stroke()
  c.setLineDash([]);c.strokeStyle='#111'
  const P=[[62,108,36],[102,82,40],[92,148,34],[50,154,26],[132,108,30],[140,138,22*pf]]
  c.lineWidth=14;for(const[x,y,r]of P)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
  for(const[x,y,r]of P)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.lineWidth=5;for(const[x,d]of[[84,1],[116,-1]])c.beginPath(),c.moveTo(x-8*d,100),c.lineTo(x+4*d,107),c.lineTo(x-8*d,114),c.stroke()
  c.lineWidth=4;for(const x of[78,110])c.beginPath(),c.arc(x,96,12,1.2*PI,1.7*PI),c.stroke()
  c.beginPath();c.arc(132,134,14*pf,-.2*PI,.6*PI);c.stroke()
  c.lineWidth=5;c.beginPath();c.ellipse(158,126,9,11,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(159,126,4,6,0,0,T);c.fill()
}

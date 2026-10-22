// leaf rocking down through the air like a pendulum while two small leaves tumble past behind it
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const leaf=(c,x,y,r,s)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.lineWidth=7/s
  for(const[l,st]of[[10,'#111'],[4,'#fff']])c.lineWidth=l/s,c.strokeStyle=st,c.beginPath(),c.moveTo(-44,0),c.lineTo(-62,6),c.stroke()
  c.lineWidth=7/s;c.strokeStyle='#111';c.beginPath();c.moveTo(-46,0);c.quadraticCurveTo(0,-36,46,0);c.quadraticCurveTo(0,36,-46,0);c.fill();c.stroke()
  c.lineWidth=4/s;c.beginPath();c.moveTo(-44,0);c.lineTo(38,0);for(const v of[-22,-2,18])c.moveTo(v,0),c.lineTo(v+12,-13),c.moveTo(v,0),c.lineTo(v+12,13);c.stroke()
  c.restore()
}
export default(c,t)=>{
  for(const[x0,o,s]of[[56,0,.68],[200,.5,.58]]){const p=(t+o)%1;leaf(c,x0+24*sin(p*T*2),-40+p*336,p*T*2,s)}
  leaf(c,128+46*sin(t*T),122+22*cos(2*t*T),.5*sin(t*T)+.15,1.45)
}

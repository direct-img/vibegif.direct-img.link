// two cherries on joined stems swinging like a pendulum, each lagging a little, the leaf flapping along
// the black cherries get a white rim so they show on dark backgrounds
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=70
export default(c,t)=>{
  const P=[128,30],ch=[[-.3,152,0],[.27,140,.35]]
  const ends=ch.map(([b,L,ph])=>{const a=b+.3*sin(T*t-ph);return[P[0]+L*sin(a),P[1]+L*cos(a),a]})
  for(const[w,s]of[[13,'#111'],[5,'#fff']]){c.lineWidth=w;c.strokeStyle=s;for(const[x,y,a]of ends)c.beginPath(),c.moveTo(...P),c.quadraticCurveTo((P[0]+x)/2-20*cos(a)*Math.sign(a),(P[1]+y)/2,x,y-30),c.stroke()}
  c.lineWidth=7;c.strokeStyle='#111'
  c.save();c.translate(...P);c.rotate(-.5+.18*sin(T*t-.6));c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-14,-26,-46,-30,-62,-14);c.bezierCurveTo(-46,4,-14,10,0,0);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(-4,-2);c.quadraticCurveTo(-32,-12,-56,-14);c.stroke();c.restore()
  c.lineWidth=7;c.beginPath();c.arc(...P,8,0,T);c.fill();c.stroke()
  for(const[k,[x,y]]of ends.entries()){
    c.beginPath();c.arc(x,y,36,0,T);c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()
    c.strokeStyle='#fff';c.fillStyle='#fff';c.lineWidth=5
    c.beginPath();c.arc(x,y,24,PI*1.12,PI*1.4);c.stroke()
    if(k)for(const d of[-1,1])c.beginPath(),c.ellipse(x+d*11,y+2,4,5.5,0,0,T),c.fill()
    else{c.beginPath();c.ellipse(x-11,y+2,4,5.5,0,0,T);c.fill();c.lineWidth=4;c.beginPath();c.moveTo(x+6,y+4);c.quadraticCurveTo(x+11,y-2,x+16,y+4);c.stroke()}
    c.lineWidth=4;c.beginPath();c.arc(x,y+11,6,.15*PI,.85*PI);c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff'
  }
}

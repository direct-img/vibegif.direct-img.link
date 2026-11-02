// ouroboros: a green-headed serpent biting its own tail in a ring, rainbow scale bands sliding around its body into its mouth forever
export const frames=20,delay=70
const P=Math.PI*2,X=128,Y=132,Rr=88,am=-1.38,bw=10
const C=['#ffd60a','#ff8a1a','#ff2d75','#c33cff','#3f5bff','#00c8ff','#24e06a']
export default(c,t)=>{
  const a0=am+.16,a1=am-.34+P,len=Rr*(a1-a0)
  const n=Math.ceil(len/2),bd=[]
  for(let k=0;k<=n;k++){
    const s=k/n,a=a0+s*(a1-a0),q=s*len
    bd.push([X+Rr*Math.cos(a),Y+Rr*Math.sin(a),4+12.5*s**.55,C[Math.floor(q/bw+7*t)%7]])
  }
  for(const[x,y,r]of bd)c.beginPath(),c.arc(x,y,r+3.5,0,P),c.fillStyle='#111',c.fill()
  for(const[x,y,r,k]of bd)c.beginPath(),c.arc(x,y,r,0,P),c.fillStyle=k,c.fill()
  // head, local x forward along the ring, y toward the center, origin at the corner of the mouth
  c.translate(X+Rr*Math.cos(am),Y+Rr*Math.sin(am));c.rotate(am+Math.PI/2)
  c.scale(.92,.92)
  c.beginPath()
  c.moveTo(-46,6);c.bezierCurveTo(-46,-14,-30,-28,-6,-28)
  c.bezierCurveTo(16,-28,34,-20,44,-8);c.quadraticCurveTo(47,-2,41,-1)
  c.lineTo(6,0);c.lineTo(36,12)
  c.bezierCurveTo(34,20,18,26,-4,25);c.bezierCurveTo(-26,24,-46,22,-46,6)
  c.fillStyle='#24e06a';c.lineWidth=6;c.fill();c.stroke()
  // diamond markings, fangs, eye with slit pupil, nostril
  c.lineWidth=2.5
  for(const[x,y,k]of[[-33,7,4],[-29,-5,3],[-19,-15,2]]){
    c.beginPath();c.moveTo(x-6,y);c.lineTo(x,y-5);c.lineTo(x+6,y);c.lineTo(x,y+5);c.closePath()
    c.fillStyle=C[k];c.fill();c.stroke()
  }
  c.fillStyle='#fff'
  for(const x of[20,32])c.beginPath(),c.moveTo(x-4,-.5),c.lineTo(x,9),c.lineTo(x+3,-.5),c.fill(),c.stroke()
  c.lineWidth=3.5
  c.beginPath();c.arc(0,-11,8.5,0,P);c.fillStyle='#ffd60a';c.fill();c.stroke()
  c.beginPath();c.ellipse(0,-11,2,6.5,0,0,P);c.fillStyle='#111';c.fill()
  c.beginPath();c.arc(35,-12,2,0,P);c.fill()
}

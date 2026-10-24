// a little smiling planet while two moons circle it at different speeds along dashed orbit paths
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const O=[[72,38,-.42,2,12],[102,58,.3,1,15]]
export default(c,t)=>{
  const pt=([rx,ry,a],f)=>[128+rx*cos(f)*cos(a)-ry*sin(f)*sin(a),128+rx*cos(f)*sin(a)+ry*sin(f)*cos(a)]
  const orb=(o,a0,a1)=>{for(const[w,s]of[[9,'#111'],[3.5,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.setLineDash([9,18]);c.beginPath();c.ellipse(128,128,o[0],o[1],o[2],a0,a1);c.stroke()}c.setLineDash([])}
  const M=O.map(o=>{const f=o[3]*T*t+o[3];return[...pt(o,f),o[4]*(1+.15*sin(f)),sin(f)]})
  const moon=([x,y,r])=>{c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.fillStyle='#ccc';c.beginPath();c.arc(x+r*.3,y-r*.25,r*.28,0,T);c.fill();c.fillStyle='#fff'}
  for(const o of O)orb(o,PI,T)
  for(const m of M)if(m[3]<0)moon(m)
  const b=3*sin(T*t*2)
  c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.arc(128,128+b,40,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#ddd';c.beginPath();c.ellipse(128,152+b,52,10,-.12,0,T);c.fill();c.restore()
  c.beginPath();c.arc(128,128+b,40,0,T);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*12,122+b,4.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,130+b,7,.15*PI,.85*PI);c.stroke();c.fillStyle='#fff'
  for(const o of O)orb(o,0,PI)
  for(const m of M)if(m[3]>=0)moon(m)
}

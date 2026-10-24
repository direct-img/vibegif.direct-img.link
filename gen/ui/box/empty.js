// cardboard box flaps pop open on an empty box, a spider drops in on its thread and dangles inside, climbs back out and the flaps close
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),ease=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),back=u=>(u=cl(u),1+2.6*(u-1)**3+1.6*(u-1)**2)
const G=232,W=72,H=84,Z=70,F=36,S=42,P=(x,y,z)=>[116+x+z*.32,G-y-z*.5]
export default(c,t)=>{
  const o=back((t-.02)/.12)-ease((t-.86)/.12),dn=back((t-.14)/.16)-cl((t-.7)/.14)**2,sx=127,sy=-36+164*dn+6*sin(2*T*t)*dn
  const q=Q=>{c.beginPath();for(const p of Q)c.lineTo(...P(...p));c.closePath();c.fill();c.stroke()}
  const fb=(z,d,a)=>{const y=H+sin(a)*F,w=z+d*cos(a)*F;q([[-W,H,z],[W,H,z],[W,y,w],[-W,y,w]])}
  const fs=(d,a)=>{const x=d*W-d*cos(a)*S,y=H+sin(a)*S;q([[d*W,H,0],[d*W,H,Z],[x,y,Z],[x,y,0]])}
  fb(Z,-1,o*1.9)
  c.fillStyle='#999';q([[-W,H,0],[W,H,0],[W,H,Z],[-W,H,Z]]);c.fillStyle='#fff'
  if(dn>0){
    for(const[l,s]of[[6,'#111'],[2,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,0),c.lineTo(sx,sy-18),c.stroke()
    const L=[]
    for(const d of[-1,1])for(let k=0;k<4;k++){const wg=5*sin(2*T*t+k*1.3+(d>0?1:0)),by=sy-8+k*6;L.push([[sx+d*14,by],[sx+d*(38+k*2),sy-24+k*12+wg*.5],[sx+d*(54-k*2),sy-6+k*16+wg]])}
    const pl=p=>{c.beginPath();c.moveTo(...p[0]);c.lineTo(...p[1]);c.lineTo(...p[2])}
    c.strokeStyle='#fff';c.lineWidth=14;for(const p of L)pl(p),c.stroke()
    c.beginPath();c.ellipse(sx,sy,24,21,0,0,T);c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;for(const p of L)pl(p),c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(sx,sy,24,21,0,0,T);c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(sx+d*9,sy-3,7,0,T),c.fill()
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(sx+d*8,sy-1,4,0,T),c.fill()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(sx,sy+6,5,.15*PI,.85*PI);c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=7
  }
  q([[W,0,0],[W,0,Z],[W,H,Z],[W,H,0]])
  q([[-W,0,0],[W,0,0],[W,H,0],[-W,H,0]])
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(116+d*26,G-30,6.5,0,T),c.fill()
  c.lineWidth=5;c.beginPath();dn>.3?c.ellipse(116,G-14,6,7,0,0,T):c.arc(116,G-21,9,.15*PI,.85*PI);c.stroke();c.lineWidth=7;c.fillStyle='#fff'
  fb(0,1,o*3.6)
  for(const d of[-1,1])fs(d,o*2.2)
}

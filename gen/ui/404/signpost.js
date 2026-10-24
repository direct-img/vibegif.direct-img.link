// a signpost whose arrow boards keep swinging round to point every which way, while a question mark bobs on top
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const bk=u=>(u=min(1,max(0,u)),1+2.7*(u-1)**3+1.7*(u-1)**2)
const B=[[112,94,0,-.12,[[.02,1],[.5,1]]],[154,82,PI,.1,[[.18,2],[.66,-2]]],[196,90,0,-.05,[[.34,1],[.84,1]]]]
export default(c,t)=>{
  const bs=B.map(([y,L,b,tl,S])=>[y,L,b+S.reduce((a,[t0,n])=>a+n*PI*bk((t-t0)/.14),0),tl])
  const board=([y,L,a,tl])=>{
    const k=cos(a),P=[[-14,-16],[L-22,-16],[L,0],[L-22,16],[-14,16]]
    c.lineWidth=7;c.beginPath();for(const[u,v]of P)c.lineTo(128+u*k,y+v+u*k*tl);c.closePath();c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(128+16*k,y+16*k*tl);c.lineTo(128+(L-34)*k,y+(L-34)*k*tl);c.stroke()
  }
  c.beginPath();c.roundRect(52,214,152,24,12);c.fill();c.stroke()
  for(const b of bs)if(sin(b[2])<0)board(b)
  c.lineWidth=7;c.beginPath();c.roundRect(118,86,20,140,6);c.fill();c.stroke()
  for(const b of bs)if(sin(b[2])>=0)board(b)
  c.save();c.translate(128,50+5*sin(T*t*2));c.rotate(.18*sin(T*t));c.scale(.88,.88)
  for(const[w,st]of[[24,'#111'],[11,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(0,-12,12,PI,PI*2.3),c.quadraticCurveTo(0,2,0,8),c.stroke()
  c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.arc(0,24,7,0,T);c.fill();c.stroke();c.restore()
}

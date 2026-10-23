// big smiley maple leaf rocking side to side like a pendulum as it floats, two little leaves fluttering down beside it
const{sin,cos,PI,abs,min}=Math,T=2*PI
export const frames=20,delay=90
const LEAF=[[0,-1],[.16,-.58],[.42,-.74],[.36,-.36],[.84,-.48],[.6,-.1],[.76,.08],[.4,.14],[.52,.42],[.12,.28],[0,.44]]
const PTS=[...LEAF,...LEAF.slice(0,-1).reverse().map(([x,y])=>[-x,y])],TIPS=[[0,-1],[.42,-.74],[.84,-.48],[.76,.08],[.52,.42]]
const CL=[['#ff6b6b','#c92a2a'],['#ff922b','#d9480f'],['#ffd43b','#e67700'],['#fa5252','#a61e1e']]
const leaf=(c,x,y,S,rot,fx,[col,dk],lw,v0=0)=>{
  const m=([px,py])=>{const X=px*S*fx,Y=py*S;return[x+X*cos(rot)-Y*sin(rot),y+X*sin(rot)+Y*cos(rot)]}
  for(const[w,s]of[[lw*1.8,'#111'],[lw*.7,dk]]){const[a,b]=m([0,.4]),[e,f]=m([0,.95]);c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(a,b);c.lineTo(e,f);c.stroke()}
  c.strokeStyle='#111';c.beginPath();for(const p of PTS)c.lineTo(...m(p));c.closePath();c.fillStyle=col;c.fill();c.lineWidth=lw;c.stroke()
  c.strokeStyle=dk;c.lineWidth=lw*.5;const[ox,oy]=m([0,.3])
  for(const[tx,ty]of TIPS)for(const d of tx?[-1,1]:[1]){const[ex,ey]=m([tx*d*.62,ty*.62]),[sx,sy]=v0?m([tx*d*v0,ty*v0]):[ox,oy];c.beginPath();c.moveTo(sx,sy);c.lineTo(ex,ey);c.stroke()}
  c.strokeStyle='#111';return m
}
export default(c,t)=>{
  const a=t*T,s=sin(a),x=128+38*s,y=126-16*s*s,rot=-.4*s
  for(const[o,x0,k]of[[0,40,1],[.5,214,2]]){
    const p=(t+o)%1,S=24*min(1,sin(PI*p)*2.5)
    if(S>2)leaf(c,x0+12*sin(p*T*2),34+p*188,S,.4*sin(p*T*2+o*6),cos(p*T*2+o*3),CL[k],4)
  }
  const v=cos(a),d=v>0?1:-1
  if(abs(v)>.5)for(const[dy,l]of[[-18,22],[6,30],[30,18]])for(const[w,st]of[[9,'#111'],[3.5,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x-d*68,y+dy),c.lineTo(x-d*(68+l*abs(v)),y+dy),c.stroke()
  c.strokeStyle='#111'
  const m=leaf(c,x,y,68,rot,1,CL[0],7,.38),lk=v*.03
  for(const d of[-1,1]){
    const[ex,ey]=m([d*.2,-.18]);c.fillStyle='#111';c.beginPath();c.ellipse(ex,ey,5.5,7,rot,0,T);c.fill()
    const[hx,hy]=m([d*.2-.03+lk,-.23]);c.fillStyle='#fff';c.beginPath();c.arc(hx,hy,2.2,0,T);c.fill()
    const[bx,by]=m([d*.38,-.04]);c.fillStyle='#ffa8a8';c.beginPath();c.ellipse(bx,by,7,4,rot,0,T);c.fill()
  }
  const[a0,b0]=m([-.13,-.04]),[a1,b1]=m([0,.1]),[a2,b2]=m([.13,-.04]);c.lineWidth=4;c.beginPath();c.moveTo(a0,b0);c.quadraticCurveTo(a1,b1,a2,b2);c.stroke()
}

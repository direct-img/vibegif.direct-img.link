// tornado of stacked swirl bands twisting and swaying, marks sliding round each band, debris whirling and dust puffing at the base
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  const N=8,B=[...Array(N)].map((_,k)=>{const f=k/(N-1);return[128+(4+30*f*f)*sin(t*T-2.6*f),40+k*24,10+92*(1-f)**1.3,16-6*f]})
  const deb=[[2.5,0,0],[4.2,2.1,1],[5.6,4.2,0]].map(([k,o,ty])=>{const b=B[Math.round(k)],a=2*T*t+o,r=b[2]+20;return[b[0]+r*cos(a),40+k*24+r*.22*sin(a),sin(a),ty,a]})
  const piece=([x,y,_,ty,a])=>{c.lineWidth=4;c.save();c.translate(x,y);c.rotate(a*1.5);c.beginPath();ty?c.rect(-9,-4,18,8):c.arc(0,0,5,0,T);c.fill();c.stroke();c.restore()}
  for(const d of deb)if(d[2]<0)piece(d)
  for(const[dx,r,o]of[[-22,10,0],[20,9,2],[0,9,4]])c.lineWidth=7,c.beginPath(),c.arc(B[N-1][0]+dx,226,r+2*sin(2*T*t+o),0,T),c.fill(),c.stroke()
  B.forEach(([x,y,r,h],k)=>{
    c.lineWidth=7;c.beginPath();c.ellipse(x,y,r,h,0,0,T);c.fill();c.stroke()
    c.lineWidth=4;for(const j of[0,1]){const a=((2*T*t+j*PI+k*1.3)%T+T)%T;if(a>.4&&a<PI-.4)c.beginPath(),c.ellipse(x,y,r-7,h-5,0,a-.4,a+.4),c.stroke()}
  })
  c.lineWidth=7;for(const d of deb)if(d[2]>=0)piece(d)
}

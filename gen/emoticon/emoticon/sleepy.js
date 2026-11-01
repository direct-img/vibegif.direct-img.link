// emoticon nodding off, heavy eyelids drooping shut until the head dips and jerks awake
export const frames=36,delay=85
// keys: t, lid (0 open..1 shut, <0 wide), dy, tilt, brow lift, mouth slack, jolt
const k=[
[0,  .42,0, 0,  .2, 0, 0],
[.13,.72,3, .03,.9, 0, 0],
[.19,.5, 2, .02,.5, 0, 0],
[.34,.86,7, .07,1.1,.2,0],
[.41,.68,6, .06,.8, .1,0],
[.56,1,  12,.13,0,  1, 0],
[.67,1,  20,.24,-.2,1, 0],
[.72,-.2,-7,-.03,1.5,.5,1],
[.8, .12,1, .01,.8, 0, 0],
[.9, .38,0, 0,  .3, 0, 0],
[1,  .42,0, 0,  .2, 0, 0]]
const P=Math.PI,cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,t)=>{
  const[L,dy,r,b,m,j]=K(t),B='#111',ln=(w,...p)=>{c.lineWidth=w;c.beginPath();c.moveTo(p[0],p[1]);for(let n=2;n<p.length;n+=2)c.lineTo(p[n],p[n+1]);c.stroke()}
  c.translate(128,224+dy);c.rotate(r);c.translate(0,-96)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  c.fillStyle=B
  for(const s of[-1,1]){
    const x=s*34,y=-6,ry=17*(L<0?1-L:1),yl=y-ry+2*ry*cl(L)
    c.save();c.beginPath();c.rect(x-20,yl,40,60);c.clip()
    c.beginPath();c.ellipse(x,y,12*(L<0?1-L/2:1),ry,0,0,2*P);c.fill();c.restore()
    if(L>0){const o=L>.95?-2:0;ln(7,x-s*17,yl-2+o,x,yl+(o?3:0),x+s*17,yl+5+o)}
    // tired bags
    c.strokeStyle='#9a9a9a';c.lineWidth=4;c.beginPath();c.arc(x,y+8,17,P*.3,P*.7);c.stroke();c.strokeStyle=B
    // brows lift as he fights to stay awake
    const by=y-ry-14-b*9
    ln(6,x+s*13,by+3,x-s*11,by-b*5)
  }
  // mouth: flat line that sags open into an o
  c.beginPath();c.ellipse(0,50+m*2,13-5*m,1.5+9*m,0,0,2*P);c.fill();c.lineWidth=5;c.stroke()
  // jolt marks
  if(j>.2)for(const s of[-1,1])for(const a of[-.35,0,.35]){
    const u=s*Math.cos(a),v=Math.sin(a),d=103
    for(const[w,q]of[[9,'#fff'],[4.5,B]]){c.strokeStyle=q;ln(w,u*d,v*d,u*(d+10*j),v*(d+10*j))}
  }
}

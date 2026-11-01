// emoticon building up a sneeze, squinting with the head tipping back, then a big achoo that squashes the face and sprays droplets, ending in a sniff
export const frames=34,delay=82
// keys: t, dy, features dy, scale x, scale y, lids, mouth open, achoo
const k=[
[0,  0,  0,  1,   1,   0,  .05,0],
[.06,0,  0,  1,   1,   0,  .05,0],
[.18,-6, -8, .98, 1.04,.5, .45,0],
[.25,-3, -4, 1,   1.02,.3, .3, 0],
[.42,-12,-14,.95, 1.08,.82,.9, 0],
[.47,15, 9,  1.14,.84, 1,  1,  1],
[.56,8,  5,  1.06,.93, 1,  .8, 1],
[.65,-4, -2, .98, 1.03,.35,.1, 0],
[.74,1,  0,  1,   1,   .1, .05,0],
[.8, -3, -3, .99, 1.02,.45,0,  0],
[.87,0,  0,  1,   1,   0,  .05,0],
[1,  0,  0,  1,   1,   0,  .05,0]]
const P=Math.PI,B='#111',G='#9a9a9a',cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,t)=>{
  const[dy,fy,sx,sy,L,m,ch]=K(t),jt=t>.34&&t<.45?Math.sin(t*P*60)*1.6:0,
  ln=(w,...p)=>{c.lineWidth=w;c.beginPath();c.moveTo(p[0],p[1]);for(let n=2;n<p.length;n+=2)c.lineTo(p[n],p[n+1]);c.stroke()},
  ink=(w,...p)=>{c.strokeStyle='#fff';ln(w+5,...p);c.strokeStyle=B;ln(w,...p)}
  c.save();c.translate(128+jt,128+dy);c.scale(sx,sy)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  c.fillStyle=B;c.translate(0,fy)
  for(const s of[-1,1]){
    const x=s*34,y=-8
    if(ch>.5)ink(7,x-s*14,y-11,x+s*9,y,x-s*14,y+11)   // > < scrunched
    else{
      // squint: lower lids push up, leaving a dome of eye
      const ry=15,yl=y+ry-1.6*ry*L
      c.save();c.beginPath();c.rect(x-20,yl-40,40,40);c.clip()
      c.beginPath();c.ellipse(x,y,12,ry,0,0,2*P);c.fill();c.restore()
      if(L>.1)ln(6,x-s*15,yl+2,x+s*15,yl-2)
    }
    // brows: hike up and tilt on the build, clench down hard on the achoo
    if(ch>.5)ln(6,x-s*13,y-22,x+s*12,y-30)
    else{const by=y-32-18*L;c.lineWidth=6;c.beginPath();c.moveTo(x-s*13,by+2-4*L);c.quadraticCurveTo(x,by-4-8*L,x+s*13,by+3);c.stroke()}
  }
  // mouth: ah.. opening up, then a wide achoo
  if(ch>.5){
    c.beginPath();c.ellipse(0,52,33,19,0,0,2*P);c.fill()
  }else{
    c.beginPath();c.ellipse(0,46+8*m,9+7*m,3+17*m,0,0,2*P);c.fill();c.lineWidth=4;c.stroke()
  }
  c.restore()
  // spray: droplets burst out from the mouth and shrink away before the edge
  const u=(t-.46)/.28
  if(u>0&&u<1)for(let n=0;n<18;n++){
    const a=n/18*2*P+.3*Math.sin(n*7.3),v=.65+.35*Math.abs(Math.sin(n*3.1)),
    ox=128,oy=128+dy+(60+fy)*sy,
    // furthest it can go in this direction without leaving the canvas
    ux=Math.cos(a),uy=Math.sin(a),lim=Math.min(ux?(ux>0?236-ox:ox-20)/Math.abs(ux):999,uy?(uy>0?240-oy:oy-16)/Math.abs(uy):999),
    d=18+(lim*v-18)*(1-(1-u)**2.2),r=(n%3?5.5:7.5)*(1-ez((u-.55)/.45)),px=ox+ux*d,py=oy+uy*d
    if(r<.6)continue
    c.beginPath();c.arc(px,py,r,0,2*P)
    if(n%3){c.fillStyle=G;c.fill()}else{c.fillStyle='#fff';c.fill();c.lineWidth=3.5;c.strokeStyle=B;c.stroke()}
  }
  // burst lines fanning out of the four corners on the achoo
  const b=t<.46?0:1-ez((t-.48)/.08)
  if(b>0)for(let n=0;n<12;n++){
    const a=P/4*(2*(n>>2)+1)+(n%3-1)*.32,ux=Math.cos(a),uy=Math.sin(a),
    rh=1/Math.hypot(ux/(96*sx+4),uy/(96*sy+4))+7,r1=rh+15*b
    ink(5,128+ux*rh,128+dy+uy*rh,128+ux*r1,128+dy+uy*r1)
  }
}

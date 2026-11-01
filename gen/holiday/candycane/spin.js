// candy cane with its red and green stripes spinning up the stick like a barber pole, green bow tied on
export const frames=16,delay=70,rim=6
const P=Math.PI*2,O='#1d1418',R=23,PIT=104,PER=52,sn=Math.sin,cs=Math.cos
// centreline in local coords: shaft up, hook arcs over to the left and ends pointing down
const C=[];for(let y=100;y>-40;y-=2)C.push([0,y]);for(let a=0;a<=Math.PI;a+=.04)C.push([-52+52*cs(a),-40-52*sn(a)]);for(let y=-40;y<=-14;y+=2)C.push([-104,y])
const S=[0];for(let k=1;k<C.length;k++)S.push(S[k-1]+Math.hypot(C[k][0]-C[k-1][0],C[k][1]-C[k-1][1]))
const L=S[S.length-1]
// point + unit tangent at arclength s (extrapolates straight past the ends)
const at=s=>{
  let k=1;while(k<C.length-1&&S[k]<s)k++
  const[a,b]=[C[k-1],C[k]],l=S[k]-S[k-1],u=(s-S[k-1])/l,tx=(b[0]-a[0])/l,ty=(b[1]-a[1])/l
  return[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u,tx,ty]
}
const Q=(s,w)=>{const[x,y,tx,ty]=at(s);return[x-ty*w*R,y+tx*w*R]}
const line=c=>{c.beginPath();for(const p of C)c.lineTo(...p)}
export default(c,t)=>{
  c.translate(167,117);c.rotate(-.4+.035*sn(P*t))
  // white tube
  c.lineCap='round';c.lineWidth=2*R;c.strokeStyle='#fdfbf7';line(c);c.stroke()
  // stripes painted only onto the tube: helix edge s=o+PIT*asin(w)/2pi across the width w, sliding one repeat per loop
  c.globalCompositeOperation='source-atop'
  const band=(c1,c2,col)=>{
    c.fillStyle=col;c.beginPath()
    for(let k=0;k<=16;k++){const w=-1+k/8;c.lineTo(...Q(c1+PIT*Math.asin(w)/P,w))}
    for(let k=16;k>=0;k--){const w=-1+k/8;c.lineTo(...Q(c2+PIT*Math.asin(w)/P,w))}
    c.fill()
  }
  for(let j=-3;j*PER<L+PER;j++){const o=j*PER+t*PER;band(o,o+19,'#e23b45');band(o+28,o+34,'#2f9a58')}
  // tube shading: soft shadow on one side, gloss streak on the other
  c.lineCap='butt'
  const off=(d,w,col)=>{c.lineWidth=w;c.strokeStyle=col;c.beginPath();for(let s=-30;s<L+30;s+=3)c.lineTo(...Q(s,d));c.stroke()}
  off(.8,14,'rgba(70,0,30,.24)');off(.5,10,'rgba(70,0,30,.1)');off(-.48,9,'rgba(255,255,255,.4)');off(-.5,3.5,'rgba(255,255,255,.55)')
  // outline behind everything
  c.globalCompositeOperation='destination-over';c.lineCap='round';c.lineWidth=2*R+12;c.strokeStyle=O;line(c);c.stroke()
  c.globalCompositeOperation='source-over'
  // green ribbon bow around the shaft
  const[bx,by]=at(50)
  c.lineWidth=4;c.strokeStyle=O;c.fillStyle='#2f9a58'
  c.beginPath();c.moveTo(-R-3,by-7);c.quadraticCurveTo(0,by-1,R+3,by-7);c.lineTo(R+3,by+7);c.quadraticCurveTo(0,by+13,-R-3,by+7);c.closePath();c.fill();c.stroke()
  c.save();c.translate(bx,by+3);c.scale(1.2,1.2);c.lineWidth=3.5
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(0,0);c.bezierCurveTo(s*12,-28,s*38,-20,s*30,-2);c.quadraticCurveTo(s*22,8,0,0);c.fill();c.stroke()
    c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(s*14,16,s*20,34);c.lineTo(s*10,32);c.quadraticCurveTo(s*6,16,0,0);c.fill();c.stroke()
    c.strokeStyle='#5cc47f';c.lineWidth=3;c.beginPath();c.moveTo(s*10,-8);c.quadraticCurveTo(s*20,-16,s*26,-8);c.stroke();c.strokeStyle=O;c.lineWidth=3.5
  }
  c.beginPath();c.ellipse(0,0,7,8,0,0,P);c.fill();c.stroke();c.restore()
}

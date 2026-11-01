// three tulips swaying in a spring breeze, heads nodding one after another as wind swooshes past
export const frames=24,delay=80,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const G=236
  c.translate(128,124);c.scale(.93,.93);c.translate(-128,-128)
  // a flowing stroke drawn twice: dark outline then colour
  const tube=(f,w,col)=>{f();c.lineWidth=w+7;c.strokeStyle='#111';c.stroke();f();c.lineWidth=w;c.strokeStyle=col;c.stroke();c.strokeStyle='#111'}
  // wind swooshes that draw themselves on and off, curling at the end
  for(const[p,x0,y0,L]of[[0,14,40,96],[.5,150,150,92]]){const u=(t+p)%1*2;if(u>=1)continue
    const s1=Math.min(1,u*1.6),s0=Math.max(0,u*1.6-.6);if(s1-s0<.04)continue
    c.beginPath();for(let s=s0;s<=s1+1e-9;s+=.02){const k=Math.max(0,s-.72)/.28,ang=k*4.2,r=14*(1-k*.45)
      c.lineTo(x0+L*Math.min(s,.72)+(k?r*S(ang):0),y0+5*S(s*9)+(k?-r*(1-C(ang)):0))}
    c.lineWidth=5;c.strokeStyle='#7cc4f5';c.stroke();c.strokeStyle='#111'}
  const fl=[ // base x, head x, head y, colour, shade, phase
    [112,70,118,'#ff8cc6','#e75aa2',.0],
    [142,182,122,'#ffd23f','#ebaa1c',-.9],
    [126,130,86,'#ff4a5c','#d42a42',-.45]]
  // leaves behind the front stems
  for(const[bx,tx,ty,m,ph]of[[108,44,160,-1,0],[148,214,166,1,-1],[124,92,140,-1,-.5]]){
    const s=7*S(P*t+ph)+4
    c.beginPath();c.moveTo(bx-8,G);c.bezierCurveTo(bx-m*4,ty+44,tx-m*14+s,ty+26,tx+s,ty);c.bezierCurveTo(tx+m*4+s,ty+40,bx+m*44,ty+50,bx+10,G);c.closePath()
    c.fillStyle='#4cbf55';c.lineWidth=5;c.fill();c.stroke()
    c.beginPath();c.moveTo(bx+1,G-8);c.quadraticCurveTo(bx+m*14,ty+40,tx+s*.9-m*6,ty+12);c.lineWidth=3;c.strokeStyle='#2f9a3c';c.stroke();c.strokeStyle='#111'}
  for(const[bx,hx,hy,col,sd,ph]of fl){
    const sw=13*S(P*t+ph)+3,x=hx+sw,y=hy+Math.abs(sw)*.15,cx=(bx+hx)/2+sw*.2,cy=(G+hy)/2+10
    tube(()=>{c.beginPath();c.moveTo(bx,G+4);c.quadraticCurveTo(cx,cy,x,y)},6,'#3fae4a')
    // head tilts along the stem
    const a=Math.atan2(x-cx,cy-y)
    c.save();c.translate(x,y);c.rotate(a);c.scale(1.18,1.18);c.lineWidth=4.5
    const cup=()=>{c.beginPath();c.moveTo(-17,-6);c.bezierCurveTo(-26,-24,-24,-38,-20,-50);c.lineTo(-9,-36);c.lineTo(0,-56);c.lineTo(9,-36);c.lineTo(20,-50);c.bezierCurveTo(24,-38,26,-24,17,-6);c.quadraticCurveTo(0,6,-17,-6);c.closePath()}
    cup();c.fillStyle=col;c.fill()
    c.save();cup();c.clip();c.beginPath();cup();c.translate(-8,-5);cup();c.fillStyle='rgba(120,0,40,.25)';c.fill('evenodd');c.restore()
    // petal edges
    c.beginPath();c.moveTo(-9,-36);c.quadraticCurveTo(-12,-16,-4,-2);c.moveTo(9,-36);c.quadraticCurveTo(12,-16,4,-2);c.lineWidth=3;c.strokeStyle=sd;c.stroke();c.strokeStyle='#111'
    c.beginPath();c.ellipse(-12,-28,3.5,9,.15,0,P);c.fillStyle='rgba(255,255,255,.6)';c.fill()
    c.lineWidth=4.5;cup();c.stroke()
    c.restore()
  }
  // grassy tuft hiding where they come out of the ground
  c.beginPath();c.moveTo(78,G+8);for(let k=0;k<=10;k++){const x=78+k*10,h=k%2?12:4;c.lineTo(x,G-h)}c.lineTo(180,G+8);c.quadraticCurveTo(129,G+16,78,G+8)
  c.fillStyle='#4cbf55';c.lineWidth=5;c.fill();c.stroke()
}

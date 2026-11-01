// emoticon stretching into a huge yawn, eyes squeezed and watering, a mitten hand patting the open mouth
export const frames=36,delay=80
// keys: t, stretch, mouth, squeeze, hand, tears
const k=[
[0,  0,  .05,0, 0,0],
[.1, .1, .2, .1,0,0],
[.3, 1,  1,  1, 0,0],
[.38,1,  1,  1, 1,.3],
[.62,1.05,.92,1,1,1],
[.72,-.45,0, .5,0,.8],
[.8, .15,.08,.2,0,.4],
[.88,0,  .05,0, 0,0],
[1,  0,  .05,0, 0,0]]
const P=Math.PI,B='#111',cl=x=>x<0?0:x>1?1:x,ez=x=>(x=cl(x),x*x*(3-2*x)),
K=t=>{let i=0;while(k[i+1][0]<=t)i++;const a=k[i],b=k[i+1],s=ez((t-a[0])/(b[0]-a[0]));return a.slice(1).map((v,j)=>v+(b[j+1]-v)*s)}
export default(c,t)=>{
  const[st,m,e,h,tr]=K(t),pat=t>.38&&t<.64?Math.abs(Math.sin((t-.38)/.26*P*3)):0,
  // a final droopy blink after the yawn
  bl=Math.max(0,1-Math.abs(t-.93)/.03),L=.32+.68*e+bl*(1-e)*.68,
  ln=(w,...p)=>{c.lineWidth=w;c.beginPath();c.moveTo(p[0],p[1]);for(let n=2;n<p.length;n+=2)c.lineTo(p[n],p[n+1]);c.stroke()}
  c.save()
  c.translate(128,224);c.rotate(-.06*cl(st));c.scale(1-.06*st,1+.1*st);c.translate(0,-96)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  c.fillStyle=B
  for(const s of[-1,1]){
    const x=s*35,y=-14
    if(L<.97){
      const ry=15,yl=y-ry+2*ry*L
      c.save();c.beginPath();c.rect(x-20,yl,40,40);c.clip()
      c.beginPath();c.ellipse(x,y,12,ry,0,0,2*P);c.fill();c.restore()
      ln(7,x-s*16,yl-1,x,yl,x+s*16,yl+4)
    }else{
      // squeezed shut: a sagging line with creases fanning from the outer corner
      c.lineWidth=7;c.beginPath();c.moveTo(x-s*15,y-2);c.quadraticCurveTo(x,y+8,x+s*15,y+3);c.stroke()
      ln(4,x+s*19,y-4,x+s*25,y-8);ln(4,x+s*20,y+4,x+s*27,y+5)
    }
    // tears welling at the outer corners
    if(tr>.05){
      const r=7*tr,tx=x+s*22,ty=y+10+12*tr
      c.beginPath();c.moveTo(tx,ty-r*2.1);c.bezierCurveTo(tx+r*1.2,ty-r*.6,tx+r,ty+r,tx,ty+r);c.bezierCurveTo(tx-r,ty+r,tx-r*1.2,ty-r*.6,tx,ty-r*2.1)
      c.fillStyle='#9a9a9a';c.fill();c.fillStyle=B
    }
    // brows climb up as the face stretches
    const by=y-30-12*e
    c.lineWidth=6;c.beginPath();c.moveTo(x-12,by+4-e*2);c.quadraticCurveTo(x,by-4-e*6,x+12,by+4-e*2);c.stroke()
  }
  // mouth: a small line that opens into a huge oval, tongue at the bottom
  const my=40+10*m,rx=11+17*m,ry=(3.5+32*m)*(1-.12*pat)
  c.beginPath();c.ellipse(0,my,rx,ry,0,0,2*P);c.fill();c.lineWidth=5;c.stroke()
  if(m>.3){c.save();c.clip();c.beginPath();c.ellipse(4,my+ry,rx*.75,ry*.5,0,0,2*P);c.fillStyle='#9a9a9a';c.fill();c.restore()}
  c.restore()
  // mitten hand pops up to pat the yawn
  if(h>.15){
    c.save();c.translate(170,218-30*h+9*pat);c.rotate(-.25-.15*pat-.3*(1-h));c.scale(.55+.45*h,.55+.45*h);c.fillStyle='#fff';c.strokeStyle=B;c.lineWidth=7
    const hd=()=>{c.beginPath();c.ellipse(0,0,27,21,0,0,2*P);c.moveTo(-1,-16);c.ellipse(-9,-17,8,13,-.7,0,2*P)}
    hd();c.fill();c.stroke();hd();c.fill()
    c.lineWidth=4;c.beginPath();c.moveTo(12,-12);c.quadraticCurveTo(18,0,12,12);c.stroke()
    c.restore()
  }
}

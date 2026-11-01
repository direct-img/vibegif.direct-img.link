// decorated Easter egg wobbling side to side on its round bottom, nestled in a grass tuft
export const frames=28,delay=50,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const a=.2*S(P*2*t),R=60,G=224
  // egg outline as a sub-path (offset dx,dy), top narrower than the bottom
  const E=(dx=0,dy=0)=>{for(let k=0;k<72;k++){const q=k/72*P,o=C(q);c[k?'lineTo':'moveTo'](dx+67*S(q)*(1-.12*o),dy-98*o)}c.closePath()}
  // a ring around the egg at height y: its front half sags into a smile, f adds an edge pattern
  const ring=(y,f=()=>0,w=86)=>{const p=[];for(let x=-w;x<=w;x+=2)p.push([x,y+12*Math.sqrt(Math.max(0,1-(x/w)**2))+f(x)]);return p}
  const band=(y0,y1,col,f0,f1)=>{c.beginPath();for(const[x,y]of[...ring(y0,f0),...ring(y1,f1).reverse()])c.lineTo(x,y);c.fillStyle=col;c.fill()}
  const zig=x=>Math.abs(((x+208)%16)-8)-4,wav=x=>3*S(x/6)
  c.save()
  c.translate(128+R*a,G-R);c.rotate(a);c.translate(0,R-98)
  c.beginPath();E();c.save();c.clip()
  c.fillStyle='#b99cff';c.fillRect(-99,-99,198,198)
  band(-60,-38,'#ffd447',zig,zig)
  band(-14,16,'#ff7eb3')
  band(38,58,'#5fd8b5',wav,wav)
  c.fillStyle='#fff'
  // dots on the pink band, squashed as they turn away
  for(let k=-4;k<=4;k++){const f=k/4*1.3;c.beginPath();c.ellipse(86*S(f),1+12*C(f),6*C(f),6,0,0,P);c.fill()}
  // sprinkle of dots on the cap and the bottom
  for(const[x,y,r]of[[-20,-76,4],[12,-82,3.5],[32,-64,3.5],[-38,-56,3],[-28,80,3.5],[6,84,4],[30,74,3]]){c.beginPath();c.arc(x,y,r,0,P);c.fill()}
  // shade crescent lower right, highlight upper left
  c.beginPath();E();E(-15,-13);c.fillStyle='rgba(50,0,90,.22)';c.fill('evenodd')
  c.beginPath();c.ellipse(-34,-40,9,22,.45,0,P);c.fillStyle='rgba(255,255,255,.75)';c.fill()
  c.restore()
  c.lineWidth=6;c.beginPath();E();c.stroke()
  c.restore()
  // grass tuft in front of the base: one outlined shape whose top edge is a row of curved blades
  const bl=[[-72,22,-.8],[-50,32,-.45],[-26,26,-.2],[0,34,.05],[26,28,.25],[50,32,.45],[72,22,.8]]
  c.beginPath();c.moveTo(48,G+14);c.quadraticCurveTo(38,G+14,42,G+4)
  for(const[x,h,l]of bl){const X=128+x;c.quadraticCurveTo(X-8,G-h*.45,X+l*16,G-h);c.quadraticCurveTo(X+2,G-h*.4,X+11,G+2)}
  c.quadraticCurveTo(218,G+14,208,G+14);c.closePath()
  c.fillStyle='#55c955';c.lineWidth=5;c.fill();c.stroke()
  c.lineWidth=3;c.strokeStyle='#2f9a3c'
  for(const[x,h,l]of bl.slice(1,-1)){const X=128+x;c.beginPath();c.moveTo(X-1,G+8);c.quadraticCurveTo(X-3,G-h*.3,X+l*10-2,G-h*.55);c.stroke()}
}

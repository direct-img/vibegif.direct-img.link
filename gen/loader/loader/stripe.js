// indeterminate progress bar: a pill-shaped track with a thick dark outline, filled with slanted rainbow candy stripes (red, orange, yellow, green, blue, violet) scrolling right, a soft white shine sweeping across now and then
export const frames=40,delay=40
const X=22,Y=94,W=212,H=68,P=22,S=H*.7, // track box, stripe width, slant
  C=['#ff5f7e','#ffa04a','#ffd84d','#4fd18b','#4aa3ff','#9a6bff'],
  ease=x=>x<.5?4*x*x*x:1-(2-2*x)**3/2
export default(c,t)=>{
  const pill=()=>{c.beginPath(),c.roundRect(X,Y,W,H,H/2)},
    band=(x,w)=>{c.beginPath(),c.moveTo(x,Y+H),c.lineTo(x+w,Y+H),c.lineTo(x+w+S,Y),c.lineTo(x+S,Y),c.fill()}
  c.save(),pill(),c.clip()
  // one full color cycle (6 stripes) per loop
  for(let j=0,x=X-S-12*P+t*6*P;x<X+W;x+=P,j++)c.fillStyle=C[j%6],band(x,P+.6)
  // shine: three stacked translucent bands, off the track at both ends of the loop
  const s=X-80+ease(t)*(W+120)
  c.fillStyle='#ffffff3a'
  for(const w of[46,30,14])band(s-w/2-S/2,w)
  // glossy top, shaded bottom
  c.fillStyle='#ffffff59',c.beginPath(),c.roundRect(X+24,Y+9,W-48,8,4),c.fill()
  c.fillStyle='#00000024',c.fillRect(X,Y+H-12,W,12)
  c.restore()
  c.lineWidth=9,pill(),c.stroke()
}

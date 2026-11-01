// a pair of knitted mittens on a string clapping together twice, little bursts on each clap
export const frames=32,delay=55,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const s=t*2%1,o=S(Math.PI*s**1.6),q=Math.max(0,1-o/.12),g=31+9*o,an=-.04+.4*o,Y=189
  const hand=()=>{c.beginPath();c.moveTo(-24,-30);c.bezierCurveTo(-31,-72,-33,-128,0,-128);c.bezierCurveTo(33,-128,31,-72,24,-30);c.closePath()}
  const mit=m=>{
    c.save();c.translate(128+m*g,Y);c.scale(m*(1-.07*q),1+.03*q);c.rotate(an);c.scale(1.05,1.05)
    // thumb, on the outside
    c.save();c.translate(27,-56);c.rotate(.5);c.beginPath();c.ellipse(0,-8,12.5,22,0,0,T)
    c.fillStyle='#3d86d9';c.fill();c.lineWidth=6;c.strokeStyle=K;c.stroke();c.restore()
    hand();c.fillStyle='#3d86d9';c.fill()
    c.save();c.clip()
    // knit stitches
    c.strokeStyle='#3576c4';c.lineWidth=2.5
    for(let y=-128;y<-28;y+=9)for(let x=-28;x<30;x+=9){c.beginPath();c.moveTo(x-3,y-3);c.lineTo(x,y+2);c.lineTo(x+3,y-3);c.stroke()}
    c.beginPath();c.ellipse(26,-80,14,70,0,0,T);c.fillStyle='#2f69b0';c.fill()
    // cream band with a zigzag and dots
    c.fillStyle='#fff4e3';c.fillRect(-32,-70,64,22)
    c.beginPath();for(let x=-32;x<=32;x+=8)c.lineTo(x,(x/8&1)?-64:-54);c.lineWidth=4;c.strokeStyle='#3d86d9';c.stroke()
    c.fillStyle='#e0403a';for(let x=-28;x<32;x+=16){c.beginPath();c.arc(x,-66,2.6,0,T);c.fill()}
    c.beginPath();c.moveTo(-14,-112);c.quadraticCurveTo(-18,-96,-17,-84);c.lineWidth=6;c.strokeStyle='#7fb6f0';c.stroke()
    c.restore()
    hand();c.lineWidth=6;c.strokeStyle=K;c.stroke()
    // ribbed cuff
    const cuff=()=>{c.beginPath();c.roundRect(-27,-36,54,36,9)}
    cuff();c.fillStyle='#fff4e3';c.fill()
    c.save();c.clip();c.strokeStyle='#d9cbb8';c.lineWidth=3.5
    for(let x=-18;x<20;x+=9){c.beginPath();c.moveTo(x,-34);c.lineTo(x,2);c.stroke()}c.restore()
    cuff();c.lineWidth=6;c.strokeStyle=K;c.stroke()
    c.restore()
  }
  // the string between the cuffs, sagging more as they close in
  const ax=128-g+S(an)*2,bx=256-ax,sg=30+(40-g)*1.4+5*q
  c.beginPath();c.moveTo(ax,Y);c.bezierCurveTo(ax-8,Y+sg,bx+8,Y+sg,bx,Y)
  c.lineWidth=11;c.strokeStyle=K;c.stroke();c.lineWidth=5;c.strokeStyle='#e0403a';c.stroke()
  mit(-1);mit(1)
  // clap burst
  if(s<.22){
    const u=s/.22,r0=17+15*u,r1=r0+14*(1-u)+2
    c.lineWidth=6*(1-u)+1.5;c.strokeStyle=K
    for(const a of[-.85,-.3,.3,.85].map(a=>a-Math.PI/2)){c.beginPath();c.moveTo(128+C(a)*r0,51+S(a)*r0);c.lineTo(128+C(a)*r1,51+S(a)*r1);c.stroke()}
  }
}

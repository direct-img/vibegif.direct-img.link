// northern lights ripple over snowy hills inside a rounded night-sky sticker, stars twinkling
// the dark sky gets a white rim so it doesn't vanish on dark backgrounds
const{sin,max}=Math,T=2*Math.PI
export const frames=16,delay=90
const SKY='#2b3a7a',R=[['#b197fc','#e5dbff',62,3.1,.1],['#38d9a9','#c3fae8',82,1.7,-.08],['#69db7c','#d3f9d8',104,0,.05]]
const spk=(c,x,y,s)=>{c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const pine=(c,x,y)=>{
  c.fillStyle='#a9744f';c.lineWidth=5;c.beginPath();c.rect(x-4,y-6,8,12);c.fill();c.stroke()
  c.fillStyle='#2f9e44';for(const[w,y0,h]of[[18,-6,18],[14,-18,16],[10,-28,14]])c.beginPath(),c.moveTo(x-w,y+y0),c.lineTo(x,y+y0-h),c.lineTo(x+w,y+y0),c.closePath(),c.fill(),c.stroke()
}
export default(c,t)=>{
  const a=t*T,win=()=>{c.beginPath();c.roundRect(14,26,228,206,48)}
  win();c.lineWidth=18;c.strokeStyle='#fff';c.stroke();c.fillStyle=SKY;c.fill();c.strokeStyle='#111'
  c.save();win();c.clip()
  for(const[x,y,o]of[[46,52,0],[208,48,.35],[134,40,.7],[226,100,.2],[34,112,.55]])spk(c,x,y,2+4*max(0,sin((t+o)*2*T)))
  for(const[col,lt,b,p,sl]of R){
    const top=x=>b+(x-128)*sl+12*sin(x/38+p+a)+5*sin(x/17-p-2*a),h=x=>34+10*sin(x/29+p*2-a)
    c.beginPath();for(let x=0;x<=256;x+=8)c.lineTo(x,top(x));for(let x=256;x>=0;x-=8)c.lineTo(x,top(x)+h(x));c.closePath()
    c.fillStyle=col;c.fill();c.lineWidth=4;c.stroke()
    c.save();c.clip();c.strokeStyle=lt;c.lineWidth=3
    for(let x=14*t-14;x<270;x+=14){const y0=top(x);c.beginPath();c.moveTo(x,y0+6);c.lineTo(x,y0+h(x)*.72);c.stroke()}
    c.restore();c.strokeStyle='#111'
  }
  c.lineWidth=7
  for(const[x0,x1,px,py]of[[96,300,206,104],[-40,170,56,92]]){
    c.fillStyle='#fff';c.beginPath();c.moveTo(x0,250);c.quadraticCurveTo(px,py,x1,250);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#a5d8ff';c.lineWidth=5;c.beginPath();c.moveTo(px-30,(250+py)/2+22);c.quadraticCurveTo(px-6,(250+py)/2+12,px+16,(250+py)/2+20);c.stroke();c.strokeStyle='#111';c.lineWidth=7
  }
  pine(c,190,186);pine(c,214,196);pine(c,58,182)
  c.restore();c.lineWidth=7;win();c.stroke()
}

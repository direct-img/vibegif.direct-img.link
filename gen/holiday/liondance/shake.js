// lion dance head swaying and shaking, blinking its big lidded eyes and snapping its jaw open
export const frames=48,delay=55,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),bp=(t,a,b)=>Math.sin(Math.PI*cl((t-a)/(b-a)))
const K=.84
export default(c,t)=>{
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  // fur: union of circles with one outline
  const F=(cs,col='#fff',w=6)=>{c.lineWidth=w;for(const q of w?[0,1]:[1])for(const[x,y,r]of cs){c.beginPath();c.arc(x,y,r,0,P);q?(c.fillStyle=col,c.fill()):c.stroke()}}
  const sw=Math.sin(P*t*2),lag=Math.sin(P*t*2-.9),sk=bp(t,.36,.6)
  const rot=.13*sw+.09*sk*Math.sin(P*t*12),m=Math.max(.75*Math.abs(Math.sin(Math.PI*cl((t-.1)/.2)*2))*bp(t,.1,.3)**.3,sm((t-.62)/.05)*(1-sm((t-.8)/.06)))
  const bl=Math.max(bp(t,.04,.1),bp(t,.48,.54),bp(t,.9,.96)),wow=sm((t-.62)/.05)*(1-sm((t-.8)/.06))
  c.translate(128+9*Math.sin(P*t*2+.4),128+4*Math.sin(P*t*4)-6*wow);c.rotate(rot-.08*wow);c.scale(K,K)
  // ears
  for(const d of[-1,1]){
    c.save();c.translate(d*78,-62);c.rotate(d*(.5+.22*lag+.1*sk*Math.sin(P*t*12)))
    c.lineWidth=6;const e=()=>{c.moveTo(-18,8);c.quadraticCurveTo(-14,-34,0,-40);c.quadraticCurveTo(14,-34,18,8);c.closePath()}
    S(e,'#e5413a','#b3262b',-4*d,0);c.fillStyle='#ff9bb0';c.beginPath();c.moveTo(-8,4);c.quadraticCurveTo(-6,-22,0,-27);c.quadraticCurveTo(6,-22,8,4);c.closePath();c.fill()
    c.restore()
  }
  // mane around the top and sides
  const mn=[]
  for(let j=0;j<=16;j++){const a=Math.PI*(.86+1.28*j/16),o=3*lag*Math.sin(a);mn.push([Math.cos(a)*100+o,-14+Math.sin(a)*86,j%2?14:17])}
  F(mn,'#ffb52e')
  F(mn.map(([x,y,r])=>[x*.97,y*.97+3,r*.62]),'#ff8a1f',0)
  // mouth inside, tongue
  const jy=34*m
  c.lineWidth=6;c.fillStyle='#5c0f19';c.beginPath();c.ellipse(0,46+jy/2,60,6+jy/2+4,0,0,P);c.fill();c.stroke()
  c.fillStyle='#ff7a9a';c.beginPath();c.ellipse(0,46+jy*.62,28,8+3*m,0,0,P);c.fill();c.lineWidth=4;c.stroke()
  // jaw with teeth and beard
  c.save();c.translate(0,jy)
  const bd=[];for(let j=0;j<9;j++){const x=-52+j*13;bd.push([x+2*lag,82-Math.abs(x)*.28+(j%2?2:6),j%2?11:13])}
  F(bd)
  c.lineWidth=6
  const jw=()=>{c.moveTo(-60,38);c.lineTo(60,38);c.bezierCurveTo(66,70,40,84,0,84);c.bezierCurveTo(-40,84,-66,70,-60,38);c.closePath()}
  S(jw,'#e5413a','#b3262b',-5,-5)
  c.strokeStyle='#f5c242';c.lineWidth=4;c.beginPath();c.moveTo(-48,62);c.quadraticCurveTo(0,82,48,62);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=3.5
  for(const x of[-44,-24,24,44]){c.beginPath();c.moveTo(x-7,40);c.lineTo(x,28);c.lineTo(x+7,40);c.closePath();c.fill();c.stroke()}
  c.restore()
  // head
  const H=()=>{c.moveTo(-64,48);c.bezierCurveTo(-92,46,-100,10,-96,-20);c.bezierCurveTo(-92,-70,-56,-98,0,-98);c.bezierCurveTo(56,-98,92,-70,96,-20);c.bezierCurveTo(100,10,92,46,64,48);c.quadraticCurveTo(0,58,-64,48);c.closePath()}
  c.lineWidth=7;S(H,'#e5413a','#b3262b',-7,-6)
  // gold piping over the dome
  c.save();c.beginPath();c.rect(-120,-120,240,86);c.clip();c.scale(.86,.86);c.translate(0,-6);c.strokeStyle='#f5c242';c.lineWidth=5;c.beginPath();H();c.stroke();c.restore()
  // upper fangs
  c.fillStyle='#fff';c.lineWidth=3.5
  for(const x of[-46,-26,26,46]){c.beginPath();c.moveTo(x-7,48+(Math.abs(x)>30?-2:2));c.lineTo(x,62);c.lineTo(x+7,48+(Math.abs(x)>30?-2:2));c.closePath();c.fill();c.stroke()}
  // cheek swirls
  for(const d of[-1,1]){c.lineWidth=4;c.fillStyle='#f5c242';c.beginPath();c.arc(d*66,22,12,0,P);c.fill();c.stroke();c.beginPath();c.arc(d*66,22,5,0,Math.PI*1.5);c.stroke()}
  // nose bridge and heart-shaped nose
  c.lineWidth=5;S(()=>c.roundRect(-9,-54,18,60,8),'#f5c242','#d0901c',-3,0)
  c.lineWidth=6;S(()=>{c.moveTo(0,30);c.bezierCurveTo(-10,28,-28,14,-26,4);c.bezierCurveTo(-24,-6,-8,-6,0,0);c.bezierCurveTo(8,-6,24,-6,26,4);c.bezierCurveTo(28,14,10,28,0,30);c.closePath()},'#f8c843','#d0901c',-4,-4)
  c.fillStyle='#fff6d0';c.beginPath();c.ellipse(-12,5,6,3.5,-.4,0,P);c.fill()
  // forehead mirror and horn
  c.lineWidth=5;c.fillStyle='#f5c242';c.beginPath();c.arc(0,-66,17,0,P);c.fill();c.stroke()
  c.fillStyle='#bfe3f5';c.lineWidth=3;c.beginPath();c.arc(0,-66,10,0,P);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(-3,-69,3,0,P);c.fill()
  c.lineWidth=6;S(()=>{c.moveTo(-12,-94);c.quadraticCurveTo(-8,-114,2,-122);c.quadraticCurveTo(10,-110,12,-94);c.closePath()},'#3aa95a','#23804a',-3,0)
  // eyes with heavy blinking lids and fluffy brows
  for(const d of[-1,1]){
    const x=d*42,y=-18,r=23,ly=y-r+2*r*(.2+.8*bl)
    c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(x,y,r,0,P);c.fill()
    c.save();c.clip()
    c.fillStyle='#111';c.beginPath();c.arc(x-5*sw+3*d,y+3,12,0,P);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-5*sw+3*d-4,y-1,4,0,P);c.fill()
    c.fillStyle='#3aa95a';c.fillRect(x-30,y-30,60,ly-y+30)
    c.restore()
    c.lineWidth=4;c.beginPath();c.moveTo(x-r,ly);c.lineTo(x+r,ly);c.stroke()
    c.lineWidth=6;c.beginPath();c.arc(x,y,r,0,P);c.stroke()
    const by=-50-7*wow,bw=[]
    for(let j=0;j<5;j++)bw.push([x+(j-2)*12*d,by+Math.abs(j-2)*1.5-(j-2)*d*2+2*lag*d,j%2?8:10])
    F(bw)
  }
}

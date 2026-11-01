// mechanical copper heart beating lub-dub: riveted plates swell, two pistons on top pump, steam puffs from the pipe, ratchet gears tick round in a porthole glowing red with each beat
export const frames=20,delay=60
const P=Math.PI*2
const B=(t,c,w)=>{let x=Math.abs(((t-c)%1+1.5)%1-.5)/w;return x<1?(1+Math.cos(Math.PI*x))/2:0}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x)
const mix=(a,b,k)=>'#'+[0,2,4].map(i=>Math.round(parseInt(a.substr(i+1,2),16)*(1-k)+parseInt(b.substr(i+1,2),16)*k).toString(16).padStart(2,'0')).join('')
const gear=(c,x,y,r,n,a)=>{
  c.beginPath()
  for(let k=0;k<n*4;k++){const q=a+k*P/n/4,R=k%4<2?r:r*.78;c.lineTo(x+R*Math.cos(q),y+R*Math.sin(q))}
  c.closePath();c.moveTo(x+r*.3,y);c.arc(x,y,r*.3,0,P,true);c.fill('evenodd')
}
const heart=c=>{
  c.beginPath();c.moveTo(0,-38);c.bezierCurveTo(-10,-64,-72,-66,-73,-18);c.bezierCurveTo(-74,18,-30,42,0,72)
  c.bezierCurveTo(30,42,74,18,73,-18);c.bezierCurveTo(72,-66,10,-64,0,-38);c.closePath()
}
const piston=(c,x,y,a,e)=>{
  c.save();c.translate(x,y);c.rotate(a);c.lineWidth=4
  c.beginPath();c.rect(-4,-30-e,8,22);c.fillStyle='#e6ebef';c.fill();c.stroke()
  c.beginPath();c.roundRect(-11,-38-e,22,9,3);c.fillStyle='#8e98a2';c.fill();c.stroke()
  c.beginPath();c.roundRect(-12,-22,24,26,3);c.fillStyle='#b9c3cc';c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(-12,-14);c.lineTo(12,-14);c.moveTo(-12,-6);c.lineTo(12,-6);c.stroke()
  c.restore()
}
export default(c,t)=>{
  const p=B(t,.08,.1)+.6*B(t,.3,.09),sx=1+.07*p,sy=1+.05*p
  c.translate(128,150);c.scale(1.14,1.14)
  c.save();c.scale(sx,sy)
  c.lineWidth=5
  // two pipes with flanged mouths rising from the notch, pistons on the lobes
  for(const[x,y,w]of[[-24,-92,17],[16,-82,21]]){
    c.beginPath();c.moveTo(x*.4,-40);c.lineTo(x,y);c.lineWidth=w+8;c.stroke();c.lineWidth=w;c.strokeStyle='#b9c3cc';c.stroke();c.strokeStyle='#111'
    c.lineWidth=4;c.beginPath();c.roundRect(x-w/2-5,y-4,w+10,10,3);c.fillStyle='#8e98a2';c.fill();c.stroke()
    c.beginPath();c.ellipse(x,y-4,w/2+1,3.5,0,0,P);c.fillStyle='#2a1410';c.fill();c.stroke()
    c.beginPath();c.roundRect(x*.75-w/2-4,-62,w+8,8,2);c.fillStyle='#8e98a2';c.fill();c.stroke()
  }
  piston(c,-50,-46,-.55,14*p)
  piston(c,50,-46,.55,14*B(t,.12,.11)+8*B(t,.34,.09))
  // body plates: shaded copper
  const g=c.createLinearGradient(-60,-60,50,70)
  g.addColorStop(0,'#f6b57a');g.addColorStop(.5,'#d9814a');g.addColorStop(1,'#9c4524')
  heart(c);c.fillStyle=g;c.fill();c.lineWidth=6;c.stroke()
  c.save();heart(c);c.clip()
  c.lineWidth=3
  c.beginPath();c.moveTo(-6,-40);c.bezierCurveTo(-30,-10,10,30,-4,80)
  c.moveTo(-80,-2);c.quadraticCurveTo(-40,8,-30,6);c.moveTo(80,4);c.quadraticCurveTo(46,10,30,8);c.stroke()
  c.fillStyle='#4a1f10'
  for(const[x,y]of[[-60,-4],[-48,1],[48,6],[60,4],[-16,-24],[-7,48],[-6,62],[-58,-30],[-50,-44],[56,-30],[50,-44]]){c.beginPath();c.arc(x,y,2.4,0,P);c.fill()}
  c.globalAlpha=.55;c.fillStyle='#fff4e0';c.beginPath();c.ellipse(-44,-30,12,7,-.7,0,P);c.fill();c.globalAlpha=1
  c.restore()
  // porthole: glowing chamber with ratchet gears
  const gx=6,gy=14,k=E((t-.04)/.12)+E((t-.26)/.1),gl=Math.round(Math.min(1,p)*4)/4
  c.beginPath();c.arc(gx,gy,31,0,P);c.fillStyle=mix('#5a0d0d','#ff4a2a',.25+.75*gl);c.fill()
  c.beginPath();c.arc(gx,gy,17,0,P);c.fillStyle=mix('#a0201a','#ffd08a',.2+.8*gl);c.fill()
  c.fillStyle='#2a1410'
  gear(c,gx-6,gy-4,19,10,k*P/10)
  gear(c,gx+16,gy+16,11,6,-k*P/6+.3)
  c.beginPath();c.arc(gx,gy,31,0,P);c.lineWidth=9;c.strokeStyle='#111';c.stroke();c.lineWidth=5;c.strokeStyle='#b9c3cc';c.stroke()
  c.fillStyle='#111'
  for(let j=0;j<8;j++){c.beginPath();c.arc(gx+31*Math.cos(j*P/8),gy+31*Math.sin(j*P/8),2,0,P);c.fill()}
  c.strokeStyle='#111';c.lineWidth=2;c.beginPath();c.arc(gx,gy,26.5,0,P);c.stroke()
  c.restore()
  // steam puffs from the pipe after each beat
  for(const[tb,m]of[[.1,1],[.32,.7]]){
    const a=((t-tb)%1+1)%1
    if(a<.5){
      // merged cloud: strokes of all circles first, then fills
      const r=m*11*Math.sin(Math.PI*a/.5),x=-25+a*14,y=-108-a*46,O=[[0,0,1],[-r*.8,r*.35,.7],[r*.75,r*.3,.65]]
      for(const w of[5,0])for(const[u,v,q]of O){c.beginPath();c.arc(x+u,y+v,r*q+w/2,0,P);c.fillStyle=w?'#111':'#eef1f3';c.fill()}
    }
  }
}

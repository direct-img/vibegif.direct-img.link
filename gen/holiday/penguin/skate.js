// a penguin in a red scarf ice skating in a loop on a patch of ice, leaning into the turns, scarf streaming behind
export const frames=40,delay=55,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const th=T*t,v=C(th),x=128+40*S(th),y=224+5*C(th),sc=1+.04*C(th),ln=-.24*S(th)
  const f=(col,w=6)=>{c.fillStyle=col;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
  const el=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T)}
  c.translate(0,-9)
  // ice patch with the skating loop scratched into it
  el(128,226,108,17);f('#cdeefc')
  c.lineWidth=3;c.strokeStyle='#97cfea';el(128,224,40,5);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(48,226);c.lineTo(62,222);c.moveTo(186,230);c.lineTo(204,226);c.stroke()
  c.save();c.translate(x,y);c.rotate(ln);c.scale(sc,sc)
  // scarf tail streaming out behind the body, opposite to the direction of travel
  const ph=Math.PI/2+1.15*v,L=108*(.55+.45*Math.abs(v)),pts=[]
  for(let j=0;j<=12;j++){const s=j/12,a=ph-.25*s*v+.22*s*S(4*th*2-s*5);pts.push([C(a)*L*s,-106+S(a)*L*s])}
  const tail=w=>{c.beginPath();pts.forEach(([a,b],j)=>j?c.lineTo(a,b):c.moveTo(a,b));c.lineWidth=w;c.stroke()}
  c.strokeStyle=K;tail(22);c.strokeStyle='#e0403a';tail(12)
  c.save();c.lineCap='butt';c.setLineDash([5,9]);c.strokeStyle='#fff';tail(12);c.restore()
  // body, belly and flippers
  for(const m of[-1,1]){
    c.save();c.translate(m*44,-84);c.rotate(-m*(.85+.18*S(2*th+m))-ln*.6);el(0,26,14,32);f('#33405e');c.restore()
  }
  el(0,-90,53,74);f('#33405e')
  const lx=6*v,face=()=>{el(lx*.5,-78,40,62);for(const m of[-1,1])c.ellipse(lx+m*15,-130,19,19,0,0,T)}
  face();c.fillStyle='#fbfdff';c.fill()
  c.save();face();c.clip();el(22+lx,-66,26,56);c.fillStyle='#e1ebf6';c.fill();c.restore()
  el(0,-90,53,74);c.lineWidth=6;c.strokeStyle=K;c.stroke()
  el(-24,-128,10,18,.5);c.fillStyle='#4f5f86';c.fill()
  // face looks the way it's going
  for(const m of[-1,1]){
    el(lx+m*14,-132,5.5,7.5);c.fillStyle=K;c.fill();el(lx+m*14+2,-135,2,2.4);c.fillStyle='#fff';c.fill()
    el(lx+m*25,-118,6,3.5);c.fillStyle='#f59fb0';c.fill()
  }
  const bx=lx*1.3;c.beginPath();c.moveTo(bx-9,-123);c.quadraticCurveTo(bx+lx*.4,-108,bx+9,-123);c.quadraticCurveTo(bx,-128,bx-9,-123);f('#f7a531',4.5)
  // scarf wrapped around the neck
  c.beginPath();c.moveTo(-50,-108);c.quadraticCurveTo(0,-94,50,-108);c.lineWidth=24;c.strokeStyle=K;c.stroke();c.lineWidth=14;c.strokeStyle='#e0403a';c.stroke()
  c.save();c.lineCap='butt';c.setLineDash([6,9]);c.lineDashOffset=2;c.strokeStyle='#fff';c.stroke();c.restore()
  // skates, the free foot kicks out and lifts
  for(const m of[-1,1]){
    const k=Math.max(0,-m*v)**2,fx=m*(20+10*k),fy=-15*k
    c.save();c.translate(fx,fy);c.rotate(m*.35*k);c.scale(m,1)
    c.beginPath();c.moveTo(-12,6);c.lineTo(16,6);c.quadraticCurveTo(24,6,22,-2);c.lineWidth=10;c.strokeStyle=K;c.stroke()
    c.lineWidth=4;c.strokeStyle='#d4dde7';c.stroke()
    c.beginPath();c.moveTo(-10,-2);c.quadraticCurveTo(-8,-14,4,-14);c.quadraticCurveTo(22,-12,22,-2);c.quadraticCurveTo(4,4,-10,-2);f('#f7a531',5)
    c.restore()
  }
  c.restore()
  // speed lines trailing behind
  const sp=Math.abs(v)
  if(sp>.4){
    const d=-Math.sign(v),q=(sp-.4)/.6;c.lineWidth=1+4*Math.min(1,q*3);c.strokeStyle=K
    for(const[dy,l]of[[-130,20],[-100,28],[-50,22]]){const x0=x+d*(62+6*q),yy=y+dy;c.beginPath();c.moveTo(x0,yy);c.lineTo(x0+d*l*q,yy);c.stroke()}
  }
}

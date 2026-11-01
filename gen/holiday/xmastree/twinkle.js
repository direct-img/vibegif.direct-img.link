// decorated Christmas tree with its string lights twinkling on and off, gold star on top sparkling
export const frames=24,delay=80,rim=6
const P=Math.PI*2,O='#1d1418',X=128
const hx=s=>[1,3,5].map(j=>parseInt(s.substr(j,2),16))
const mx=(a,b,k)=>a.map((v,j)=>v+(b[j]-v)*k|0),K=[0,0,0],Wh=[255,255,255]
const rn=n=>{const s=Math.sin(n*91.7+3.1)*43758.5;return s-Math.floor(s)}
// tiers: apex y, base y, half width
const T=[[118,198,104],[80,150,80],[44,104,56]]
const tier=(c,[a,b,w])=>{
  const n=Math.round(w/19)
  c.moveTo(X,a)
  c.quadraticCurveTo(X+w*.3,b-(b-a)*.35,X+w,b)
  for(let k=0;k<n;k++){const x0=X+w-2*w*k/n,x1=X+w-2*w*(k+1)/n;c.quadraticCurveTo((x0+x1)/2,b+15,x1,b)}
  c.quadraticCurveTo(X-w*.3,b-(b-a)*.35,X,a)
}
// n-point star path, outer radius R, inner r
const star=(c,x,y,n,R,r)=>{c.beginPath();for(let k=0;k<2*n;k++){const q=k*Math.PI/n-P/4,s=k%2?r:R;c.lineTo(x+s*Math.cos(q),y+s*Math.sin(q))}c.closePath()}
const HUE=['#ff4b4b','#ffd23a','#45c4ff','#ff7ad6','#7dff6a'].map(hx)
// light strings: each a swag across one tier (x0,y0)->(x1,y1) sagging by s, n bulbs
const W=[[[60,172],[198,166],16,7],[[78,126],[184,132],18,5],[[98,86],[160,82],12,3]]
const qp=([x0,y0],[x1,y1],s,u)=>{const cx=(x0+x1)/2,cy=(y0+y1)/2+s*2,v=1-u;return[v*v*x0+2*v*u*cx+u*u*x1,v*v*y0+2*v*u*cy+u*u*y1]}
export default(c,t)=>{
  c.translate(128,134);c.scale(.97,.97);c.translate(-128,-128)
  c.lineWidth=6;c.strokeStyle=O
  // trunk
  c.fillStyle='#8a5634';c.beginPath();c.roundRect(X-17,190,34,34,5);c.fill();c.stroke()
  c.fillStyle='#6b3f25';c.fillRect(X+3,198,11,23)
  // tiers, bottom first so upper ones overlap
  for(const d of T){
    c.save();c.beginPath();tier(c,d);c.fillStyle='#2f9a58';c.fill();c.clip()
    c.fillStyle='#237a45';c.beginPath();c.moveTo(X+4,d[0]);c.quadraticCurveTo(X+d[2]*.25,d[1]-10,X+d[2]*.45,d[1]+20);c.lineTo(X+d[2]+20,d[1]+20);c.lineTo(X+d[2],d[0]);c.fill()
    c.strokeStyle='#5cc47f';c.lineWidth=5;c.beginPath();c.moveTo(X-8,d[0]+16);c.quadraticCurveTo(X-d[2]*.3,d[1]-(d[1]-d[0])*.3,X-d[2]*.62,d[1]-6);c.stroke()
    c.restore();c.beginPath();tier(c,d);c.lineWidth=6;c.stroke()
  }
  // bulbs list
  const B=[];let id=0
  for(const[p0,p1,s,n]of W)for(let k=0;k<n;k++){
    const u=(k+.5)/n,[x,y]=qp(p0,p1,s,u),f=1+(rn(id)>.5),ph=rn(id+50)
    // twinkle: each bulb blinks off once or twice a loop
    const v=.5+.5*Math.cos(P*(t*f+ph)),b=v>.25?1:0
    B.push([x,y,HUE[(id*2+(id>11))%5],b]);id++
  }
  // wires + glow, clipped to the foliage
  c.save();c.beginPath();for(const d of T)tier(c,d);c.clip()
  c.strokeStyle=O;c.lineWidth=2.5
  for(const[p0,p1,s]of W){c.beginPath();c.moveTo(...p0);c.quadraticCurveTo((p0[0]+p1[0])/2,(p0[1]+p1[1])/2+s*2,...p1);c.stroke()}
  for(const[x,y,h,b]of B){if(!b)continue;const g=c.createRadialGradient(x,y+8,0,x,y+8,18);g.addColorStop(0,`rgba(${h},.6)`);g.addColorStop(1,`rgba(${h},0)`);c.fillStyle=g;c.fillRect(x-24,y-16,48,48)}
  c.restore()
  // a few baubles hung between the light strings
  for(const[x,y,f]of[[118,70,'#e23b45'],[152,124,'#ffd23a'],[102,128,'#45a8ff'],[128,170,'#e23b45']]){
    c.lineWidth=2.5;c.strokeStyle=O;c.fillStyle=f;c.beginPath();c.arc(x,y,7,0,P);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(x-2.5,y-2.5,2,0,P);c.fill()
  }
  // bulbs
  for(const[x,y,h,b]of B){
    c.fillStyle='#4a4a52';c.fillRect(x-3,y-2,6,5)
    c.beginPath();c.ellipse(x,y+9,5.5,7.5,0,0,P);c.fillStyle=`rgb(${mx(mx(h,K,.6),mx(h,Wh,.15),b)})`;c.fill()
    c.lineWidth=2;c.strokeStyle=O;c.stroke()
    if(b){c.fillStyle=`rgb(${mx(h,Wh,.8)})`;c.beginPath();c.ellipse(x-1.5,y+7,1.8,3,0,0,P);c.fill()}
  }
  // star
  c.save();c.translate(X,36);c.rotate(.09*Math.sin(P*t));c.scale(1+.05*Math.sin(P*2*t),1+.05*Math.sin(P*2*t))
  star(c,0,0,5,28,12.5);c.fillStyle='#ffd23a';c.fill();c.save();c.clip()
  c.fillStyle='#e9a21c';c.beginPath();c.moveTo(0,-30);c.lineTo(30,-30);c.lineTo(30,30);c.lineTo(0,30);c.lineTo(0,0);c.fill()
  c.fillStyle='#fff3b0';c.beginPath();c.ellipse(-7,-6,4,7,.5,0,P);c.fill();c.restore()
  star(c,0,0,5,28,12.5);c.lineWidth=6;c.stroke();c.restore()
  // sparkles around the star
  c.fillStyle='#fff6c8';c.strokeStyle=O
  for(const[x,y,ph,z]of[[84,24,0,15],[174,22,.5,16]]){
    const s=z*Math.max(0,Math.sin(P*(t+ph)))
    if(s>4){c.lineWidth=2.5;star(c,x,y,4,s,s*.3);c.fill();c.stroke()}
  }
  // presents under the tree
  const gift=(x,y,w,h,f,r)=>{
    c.lineWidth=5;c.fillStyle=f;c.beginPath();c.roundRect(x,y,w,h,3);c.fill();c.stroke()
    c.fillStyle=r;c.fillRect(x+w/2-5,y+2,10,h-4);c.fillRect(x+2,y+h*.4-4,w-4,8)
    c.lineWidth=4;c.beginPath();c.ellipse(x+w/2-9,y-6,9,6,-.4,0,P);c.ellipse(x+w/2+9,y-6,9,6,.4,0,P);c.fill();c.stroke()
    c.beginPath();c.roundRect(x,y,w,h,3);c.lineWidth=5;c.stroke()
  }
  gift(40,200,50,36,'#e23b45','#ffd23a');gift(170,206,44,30,'#f4f1ea','#e23b45')
}

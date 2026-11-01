// robot head thinking: brass gears mesh and turn inside its glass brain dome, eyes roll up in thought, mouth LEDs flicker, antenna bulb blinks
export const frames=24,delay=70
const P=Math.PI*2
const gear=(c,x,y,n,a,col)=>{
  const r=n*2.4,p=P/n
  c.save();c.translate(x,y);c.rotate(a);c.beginPath()
  for(let k=0;k<n;k++){
    const b=k*p
    for(const[q,R]of[[-.27,r-4],[-.14,r+4],[.14,r+4],[.27,r-4]])c.lineTo(R*Math.cos(b+q*p),R*Math.sin(b+q*p))
  }
  c.closePath();c.fillStyle=col;c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.arc(0,0,r*.62,0,P);c.fillStyle='#00000022';c.fill();c.stroke()
  c.lineWidth=4
  for(let k=0;k<4;k++){c.beginPath();c.moveTo(0,0);c.lineTo(r*.62*Math.cos(k*P/4),r*.62*Math.sin(k*P/4));c.stroke()}
  c.beginPath();c.arc(0,0,5,0,P);c.fillStyle='#6b4a1a';c.fill();c.lineWidth=3;c.stroke()
  c.restore()
}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
export default(c,t,i)=>{
  // antenna
  const on=i%12<4
  c.lineWidth=9;c.beginPath();c.moveTo(128,46);c.lineTo(128,28);c.stroke()
  c.lineWidth=3;c.strokeStyle='#9aa6b2';c.stroke();c.strokeStyle='#111'
  c.beginPath();c.arc(128,20,9,0,P);c.fillStyle=on?'#ff3b30':'#7a2420';c.fill();c.lineWidth=5;c.stroke()
  if(on){c.beginPath();c.arc(125,17,3,0,P);c.fillStyle='#ffd0c8';c.fill()}
  // ears
  c.lineWidth=6
  for(const x of[34,202]){rr(c,x,146,20,46,6);c.fillStyle='#9aa6b2';c.fill();c.stroke()}
  // head box with side shading
  rr(c,48,118,160,114,20);c.fillStyle='#e4e9ee';c.fill()
  c.save();c.clip();c.fillStyle='#c3ccd5';c.fillRect(180,110,40,130);c.fillStyle='#f6f8fa';c.fillRect(48,110,14,130);c.restore()
  c.lineWidth=7;c.stroke()
  // rivets
  c.fillStyle='#8a96a3';c.lineWidth=2.5
  for(const[x,y]of[[63,218],[193,218],[63,134],[193,134]]){c.beginPath();c.arc(x,y,3.5,0,P);c.fill();c.stroke()}
  // eyes
  const dx=5*Math.cos(P*t),dy=-4+2.5*Math.sin(P*t),bl=Math.abs(t-.8)<.05?.15:1
  for(const x of[98,158]){
    c.save();c.translate(x,160);c.scale(1,bl)
    c.beginPath();c.arc(0,0,17,0,P);c.fillStyle='#1d2a33';c.fill();c.lineWidth=5;c.stroke()
    c.beginPath();c.arc(dx,dy,9,0,P);c.fillStyle='#3fd8ff';c.fill()
    c.beginPath();c.arc(dx-3,dy-3,3,0,P);c.fillStyle='#fff';c.fill()
    c.restore()
  }
  // mouth grille with flickering LED bars
  rr(c,94,192,68,26,8);c.fillStyle='#1d2a33';c.fill();c.lineWidth=5;c.stroke()
  for(let k=0;k<6;k++){
    const h=4+7*Math.abs(Math.sin(P*t*2+k*1.7)*Math.cos(P*t+k))
    c.fillStyle=h>8?'#7dffb0':'#2fae6a';c.fillRect(101+k*10,205-h,6,h*2)
  }
  // glass dome with gears inside
  c.beginPath();c.arc(128,118,74,Math.PI,0);c.closePath();c.fillStyle='#d4ecf8';c.fill()
  c.save();c.clip()
  const n1=12,n2=8,n3=10,a1=P*t*3/n1,r=n=>n*2.4
  const x1=102,y1=98,f2=-.62,x2=x1+(r(n1)+r(n2))*Math.cos(f2),y2=y1+(r(n1)+r(n2))*Math.sin(f2)
  const a2=f2+Math.PI+P/n2/2-(a1-f2)*n1/n2
  const f3=.5,x3=x2+(r(n2)+r(n3))*Math.cos(f3),y3=y2+(r(n2)+r(n3))*Math.sin(f3)
  const a3=f3+Math.PI+P/n3/2-(a2-f3)*n2/n3
  gear(c,x3,y3,n3,a3,'#d98b2b');gear(c,x1,y1,n1,a1,'#f0b53c');gear(c,x2,y2,n2,a2,'#e6c35a')
  c.restore()
  // glass highlight + outline
  c.beginPath();c.arc(128,118,62,Math.PI*1.1,Math.PI*1.36);c.strokeStyle='#ffffffcc';c.lineWidth=7;c.stroke()
  c.beginPath();c.arc(128,118,62,Math.PI*1.44,Math.PI*1.5);c.stroke()
  c.strokeStyle='#111';c.beginPath();c.arc(128,118,74,Math.PI,0);c.closePath();c.lineWidth=7;c.stroke()
  rr(c,46,112,164,14,7);c.fillStyle='#9aa6b2';c.fill();c.lineWidth=6;c.stroke()
}

// red sleigh piled with presents flying through a swoop, nose dipping and climbing, speed lines and magic sparkles trailing behind
export const frames=24,delay=65,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos
// sleigh centre + tilt along the loop: one big dive and climb
const Z=.9,V=230,B=-.3,dx=cs(B),dy=sn(B),pos=u=>{const n=13*sn(P*u),f=4*sn(P*u+1.2);return[144-n*dy+f*dx,122+n*dx+f*dy,B-.14*cs(P*u)]}
// runner tail in world coords for a pose; V = how fast dropped sparkles fall behind (px per loop)
const tail=([x,y,a])=>[x+Z*(-78*cs(a)-34*sn(a)),y+Z*(-78*sn(a)+34*cs(a))]
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const a=k*P/10-P/4,d=k%2?r*.45:r;c.lineTo(x+d*cs(a),y+d*sn(a))}c.closePath()}
const box=(c,x,y,w,h,f,r)=>{
  c.fillStyle=f;c.beginPath();c.roundRect(x,y,w,h,3);c.fill()
  c.fillStyle=r;c.fillRect(x+w/2-4,y,8,h);c.fillRect(x,y+h/2-4,w,8)
  c.beginPath();c.roundRect(x,y,w,h,3);c.stroke()
}
export default(c,t)=>{
  const[x,y,a]=pos(t)
  // speed lines streaming off the back, stretching in and out
  c.strokeStyle=O;c.lineWidth=6
  for(const[o,l0,f]of[[-26,26,0],[2,38,.35],[30,22,.7]]){
    const bx=x+Z*(-96*cs(a)-o*sn(a)),by=y+Z*(-96*sn(a)+o*cs(a)),l=l0*(.75+.25*sn(P*(2*t+f)))
    c.beginPath();c.moveTo(bx,by);c.lineTo(bx-l*dx,by-l*dy);c.stroke()
  }
  // a sparkle dropped from the runner tail every 1/12 loop, left behind along the flight line, shrinking away
  for(let j=0;j<12;j++){
    const e=j/12,u=((t-e)%1+1)%1,g=u/.3;if(g>=1)continue
    const[sx,sy]=tail(pos(e)),r=(j%2?14:10)*(1-g)**.7+1
    if(r<3.5)continue
    c.fillStyle=j%3?'#ffd23a':'#fff6c8';c.lineWidth=3;star(c,sx-u*V*dx-dy*(j%3-1)*16*g,sy-u*V*dy+dx*(j%3-1)*16*g,r);c.fill();c.stroke()
  }
  c.save();c.translate(x,y);c.rotate(a);c.scale(Z,Z)
  // presents and sack in the seat
  c.lineWidth=5.6
  box(c,-70,-56,38,46,'#2f9a58','#e23b45')
  box(c,-50,-88,30,32,'#ffd23a','#e23b45')
  box(c,-34,-44,40,38,'#3a86e0','#ffd23a')
  // sack
  c.fillStyle='#b98352';c.beginPath();c.moveTo(4,-4);c.quadraticCurveTo(0,-46,26,-58);c.quadraticCurveTo(52,-48,52,-4);c.closePath();c.fill();c.stroke()
  c.fillStyle='#9a6a3e';c.beginPath();c.moveTo(18,-60);c.lineTo(30,-72);c.lineTo(36,-58);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#e23b45';c.lineWidth=5;c.beginPath();c.moveTo(16,-55);c.lineTo(36,-55);c.stroke();c.strokeStyle=O
  // runners: outline then gold, curl at the front
  const run=()=>{c.beginPath();c.moveTo(-86,36);c.quadraticCurveTo(-84,48,-70,48);c.lineTo(62,48);c.bezierCurveTo(92,48,100,24,90,10);c.bezierCurveTo(84,2,72,8,78,16)
    for(const sx of[-50,-6,38]){c.moveTo(sx,30);c.lineTo(sx,48)}}
  c.lineWidth=15;run();c.stroke();c.lineWidth=7.5;c.strokeStyle='#ffd23a';run();c.stroke();c.strokeStyle=O
  // body
  const bd=()=>{c.beginPath();c.moveTo(-84,-40);c.bezierCurveTo(-96,-40,-92,-20,-80,-22);c.lineTo(-76,30);c.lineTo(52,32);c.bezierCurveTo(80,32,90,10,86,-14);c.bezierCurveTo(84,-30,68,-30,70,-18);c.bezierCurveTo(60,-4,20,-8,-6,-10);c.bezierCurveTo(-40,-12,-60,-20,-64,-36);c.bezierCurveTo(-66,-46,-78,-46,-84,-40);c.closePath()}
  c.fillStyle='#e23b45';bd();c.fill()
  c.save();bd();c.clip()
  c.fillStyle='#b8283a';c.beginPath();c.moveTo(-90,20);c.bezierCurveTo(-20,26,40,26,96,4);c.lineTo(96,40);c.lineTo(-90,40);c.fill()
  c.strokeStyle='#ffd23a';c.lineWidth=5;c.beginPath();c.moveTo(-90,-2);c.bezierCurveTo(-60,4,0,6,30,4);c.bezierCurveTo(56,2,72,-4,80,-16);c.stroke()
  c.restore();bd();c.lineWidth=7.5;c.stroke()
  // gold star medallion on the side
  c.fillStyle='#ffd23a';c.lineWidth=4.4;star(c,-6,14,12);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-56,-14,4,9,.3,0,P);c.fill()
  c.restore()
}

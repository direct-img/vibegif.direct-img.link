// emoticon dizzy, spiral eyes spinning and head wobbling in circles while stars orbit around its crown
export const frames=24,delay=70
const P=Math.PI,B='#111',G='#9a9a9a',S=Math.sin,C=Math.cos
export default(c,t)=>{
  const a=2*P*t,
  star=(x,y,r,w)=>{c.save();c.translate(x,y);c.rotate(w);c.beginPath()
    for(let n=0;n<10;n++){const q=n*P/5-P/2,l=n%2?r*.48:r;c.lineTo(l*C(q),l*S(q))}
    c.closePath();c.lineWidth=6;c.strokeStyle='#fff';c.stroke();c.fillStyle=B;c.fill();c.restore()},
  // three stars around the crown, the far ones small and tucked behind the head
  st=[0,1,2].map(n=>{const q=a+n*2*P/3;return[84*C(q),-84+18*S(q),S(q)]}),
  sd=f=>st.filter(([,,z])=>f?z>=0:z<0).forEach(([x,y,z],n)=>star(x,y,17+4*z,a*2+n))
  c.translate(128+9*C(a),130+6*S(a));c.rotate(.12*S(a+.6))
  sd(0)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=B;c.stroke()
  // spiral eyes
  for(const s of[-1,1]){
    const x=s*35,y=-6
    c.beginPath()
    for(let q=0;q<=4.6*P;q+=.2){const r=1+18*q/(4.6*P),w=q-a*2;c.lineTo(x+r*C(w),y+r*S(w)*1.08)}
    c.lineWidth=6;c.stroke()
    // lopsided brows bobbing out of step
    const by=y-38-5*s*S(a*2)
    c.lineWidth=6;c.beginPath();c.moveTo(x-12,by+2);c.quadraticCurveTo(x,by-6,x+12,by+2);c.stroke()
  }
  // crooked open mouth with a lolling tongue
  c.save();c.translate(2,50);c.rotate(.22+.1*S(a))
  c.beginPath();c.ellipse(0,0,18,9,0,0,2*P);c.fillStyle=B;c.fill()
  c.beginPath();c.moveTo(3,4);c.lineTo(3,14+2*S(a*2));c.arc(10,14+2*S(a*2),7,P,0,true);c.lineTo(17,2);c.fillStyle=G;c.fill();c.lineWidth=4;c.stroke()
  c.restore()
  sd(1)
}

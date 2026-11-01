// emoticon upside down with a silly tongue-out grin, rocking on its head, then hopping right side up and flipping back over
export const frames=32,delay=70
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v,io=v=>(v=K(v),v<.5?2*v*v:1-2*(1-v)**2)
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  // flip A rights it (.06), flip B tips it back over (.46); the rest of the loop it rocks on its head
  const F=[.06,.46],D=.2,G=232 // flip starts, flip length, ground line
  let rot=Math.PI,hop=0,sx=1,sy=1,shut=0
  for(const f of F){
    const u=K((t-f)/D);rot+=Math.PI*io(u)
    if(u>0&&u<1)hop=S(Math.PI*u)*14,sy=1+.04*S(Math.PI*u),sx=1/sy
    const l=(t-f-D)/.09;if(l>=0&&l<1){const q=S(Math.PI*l);sy=1-.11*q;sx=1+.09*q;shut=q>.4}
    const k=(f-t)/.05;if(k>0&&k<1){const q=S(Math.PI*k);sy=1-.06*q;sx=1+.05*q}   // crouch before the hop
  }
  const r=(t+.26)%1,rk=r<.3?.13*S(P*r/.3):0,roll=-100*rk // one rock back and forth while upside down, rolling like a ball
  // grey spin arcs trailing the flip
  c.save();c.translate(128,G-100-hop);c.strokeStyle='#9a9a9a';c.lineWidth=5
  for(const f of F){const u=K((t-f)/D);if(u<=.08||u>=.92)continue
    c.globalAlpha=S(Math.PI*u);for(const o of[0,Math.PI]){c.beginPath();c.arc(0,0,110,rot+o-1.1,rot+o-.3);c.stroke()}}
  c.restore();c.globalAlpha=1
  c.translate(128+roll,G-hop);c.scale(sx,sy);c.translate(0,-100);c.rotate(rot+rk)
  E(0,0,96,96);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  c.fillStyle='#111';c.lineWidth=7
  if(shut)for(const d of[-1,1]){c.beginPath();c.moveTo(d*42,-24);c.lineTo(d*26,-16);c.lineTo(d*42,-8);c.stroke()}
  else{E(-32,-16,10,14);c.fill();E(32,-16,10,14);c.fill()}
  // tongue poking out of the grin's corner, then the grin and dimples over it
  c.save();c.translate(18,41);c.rotate(-.25);c.beginPath();c.moveTo(-12,0);c.lineTo(-12,12);c.arc(0,12,12,Math.PI,0,true);c.lineTo(12,0)
  c.fillStyle='#fff';c.fill();c.lineWidth=6;c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(0,4);c.lineTo(0,14);c.stroke();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(-44,24);c.quadraticCurveTo(0,66,44,24);c.stroke()
  c.lineWidth=6;for(const d of[-1,1]){c.beginPath();c.moveTo(d*50,17);c.quadraticCurveTo(d*47,26,d*40,26);c.stroke()}
}

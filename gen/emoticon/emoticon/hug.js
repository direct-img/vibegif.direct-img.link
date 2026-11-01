// emoticon opening its mitten arms wide, then crossing them into a squishy hug as a heart pops up
export const frames=30,delay=75
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v,io=v=>(v=K(v),v<.5?2*v*v:1-2*(1-v)**2)
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const ink=(w=7)=>{c.fillStyle='#fff';c.fill();c.lineWidth=w;c.strokeStyle='#111';c.stroke()}
  const pop=p=>p<=0?0:p>=1?1:1+2.7*(p-1)**3+1.7*(p-1)**2
  // h: 0 arms open .. 1 hugging; while hugging it squeezes twice and sways
  const h=io((t-.26)/.16)-io((t-.78)/.14),q=K((t-.42)/.36),sq=h*(.6+.4*S(q*P*2-1.6)),sway=h*.07*S(q*P)
  const wig=(1-h)*S(t*P*4)
  // mitten with cuff, wrist at origin, fingers toward -y, thumb on side m
  const M=(x,y,r,m)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(.92*m,.92)
    c.beginPath();c.roundRect(-15,-6,30,15,6);ink(7.6)
    c.save();c.translate(-19,-24);c.rotate(-.95);E(0,-8,9,14);ink(7.6);c.restore()
    c.beginPath();c.moveTo(-19,-2);c.lineTo(-21,-34);c.bezierCurveTo(-21,-66,21,-66,21,-34);c.lineTo(19,-2);c.closePath();ink(7.6)
    c.restore()}
  // head, squished wider in the hug
  c.save();c.translate(128,226);c.rotate(sway);c.scale(1+.06*sq,1-.06*sq);c.translate(0,-96)
  E(0,0,96,96);ink(8)
  c.fillStyle='#111';c.lineWidth=8
  if(h>.5)for(const d of[-1,1]){c.beginPath();c.arc(d*32,-8,13,Math.PI+.4,P-.4);c.stroke()}
  else for(const d of[-1,1])E(d*32,-16,10,14),c.fill()
  // grin: open while reaching, closed and wide while hugging
  if(h>.5){c.beginPath();c.moveTo(-36,18);c.quadraticCurveTo(0,52,36,18);c.stroke()}
  else{c.beginPath();c.moveTo(-32,20);c.quadraticCurveTo(0,68,32,20);c.closePath();c.fill();c.lineWidth=7;c.stroke()}
  c.restore()
  // arms: raised wide and wiggling, then swinging in to cross over the chest
  const L=(a,b)=>a+(b-a)*h
  M(L(54,84+4*sq),L(196-4*wig,208),L(-.62+.22*wig,1.25),-1)
  M(L(202,172-4*sq),L(196+4*wig,213),L(.62+.22*wig,-1.25),1)
  // heart floating up while hugging
  const s=pop((t-.44)/.1)*K((.82-t)/.06);if(s>0){c.save();c.translate(214,58-12*K((t-.44)/.36));c.rotate(.25);c.scale(s,s)
    c.beginPath();c.moveTo(0,15);c.bezierCurveTo(-28,-2,-15,-26,0,-10);c.bezierCurveTo(15,-26,28,-2,0,15);ink(6);c.restore()}
}

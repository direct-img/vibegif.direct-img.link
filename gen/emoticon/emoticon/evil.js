// emoticon with little horns, o-ring eyes under heavy ó ò accent brows and a grin of v^v^ glyph fangs glances shiftily side to side, then chuckles as h e h letters pop out
export const frames=32,delay=60
const K='#111',W='#fff',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x)),
// typed letters, drawn on a 26px em with the baseline at y=13: black ink over a white halo so they read on any background
gh=c=>{c.moveTo(-7,-14);c.lineTo(-7,13);c.moveTo(-7,13);c.lineTo(-7,2);c.arc(0,2,7,P,0);c.lineTo(7,13)},
ge=c=>{c.moveTo(-8,4);c.lineTo(8,4);c.arc(0,4,8,0,.3*P,true)},
ink=(c,f)=>{for(const[s,w]of[[W,19],[K,10]]){c.strokeStyle=s;c.lineWidth=w;c.beginPath();f(c);c.stroke()}}
export default(c,t)=>{
  const g=sm((t-.06)/.08)-2*sm((t-.3)/.1)+sm((t-.54)/.08),s=cl((t-.6)/.36),
  h=Math.abs(Math.sin(3*P*s)),q=Math.sin(P*s)**.5
  // heh: one letter bursts out from behind the head on each chuckle, all three duck back at the end
  for(const[k,f,x,y,a]of[[0,gh,186,226,-.5],[1,ge,218,196,-.75],[2,gh,236,156,-1]]){
    const p=sm((s-k/3)/.12)*(1-sm((s-.86)/.12))
    if(p>0){c.save();c.translate(128+(x-128)*(.7+.3*p),128+(y-128)*(.7+.3*p));c.rotate(a+.6);c.scale(p,p);ink(c,f);c.restore()}
  }
  c.save();c.translate(128,128-7*h);c.scale(1+.03*h,1-.03*h)
  // little horns, curling in at the tips
  c.lineWidth=7
  for(const m of[-1,1]){
    c.save();c.scale(m,1);c.rotate(.66);c.beginPath();c.moveTo(-16,-82);c.bezierCurveTo(-14,-104,-2,-120,-10,-130)
    c.bezierCurveTo(10,-120,18,-104,16,-82);c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(-14,-102);c.quadraticCurveTo(0,-98,13,-104);c.stroke();c.restore()
  }
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // eyes are bold o rings cut by the lid, each wearing its brow like an accent: ó ò. glance one way, the other, then squint with glee
  for(const m of[-1,1]){
    const x=36*m,d=8*q
    c.save();c.beginPath();c.moveTo(x-30,-34+12*m+d);c.lineTo(x+30,-34-12*m+d);c.lineTo(x+30,20);c.lineTo(x-30,20);c.clip()
    c.lineWidth=10;c.beginPath();c.ellipse(x+10*g,-12,11,12-3*q,0,0,2*P);c.stroke();c.restore()
    c.lineWidth=11;c.beginPath();c.moveTo(x-22,-42+15*m+d);c.lineTo(x+22,-42-15*m+d);c.stroke()
  }
  // wide crescent grin, its teeth a typed row of v fangs meeting ^ fangs, stretching wider on each chuckle
  const w=60+4*h,y=14-3*h,B=110+8*h,top=()=>{c.moveTo(-w,y);c.quadraticCurveTo(0,52,w,y)},
  out=()=>{c.beginPath();top();c.quadraticCurveTo(0,B,-w,y)},
  cy=(x,v)=>(u=>y*((1-u)**2+u*u)+v*2*u*(1-u))((x/w+1)/2)
  c.save();out();c.fillStyle=K;c.fill();c.clip()
  c.strokeStyle=W;c.lineWidth=6
  for(let k=-3;k<=3;k++){
    const x=k*17,a=cy(x,52)+1,b=cy(x+8,B)-1
    c.beginPath();c.moveTo(x-7,a);c.lineTo(x,a+13);c.lineTo(x+7,a);c.stroke()
    c.beginPath();c.moveTo(x+1,b);c.lineTo(x+8,b-12);c.lineTo(x+15,b);c.stroke()
  }
  c.restore();c.lineWidth=7;out();c.stroke();c.restore()
}

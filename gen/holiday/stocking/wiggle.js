// stuffed Christmas stocking wiggling on a gold hook, floppy foot lagging behind, goodies bouncing out the top
export const frames=28,delay=50,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos,HX=70,HY=22
// sampled outline: start point then quadratic segments [cx,cy,x,y]
const poly=(s,...q)=>{const r=[s];let p=s;for(const[a,b,x,y]of q){for(let k=1;k<=8;k++){const u=k/8,v=1-u;r.push([v*v*p[0]+2*v*u*a+u*u*x,v*v*p[1]+2*v*u*b+u*u*y])}p=[x,y]}return r}
const BODY=poly([64,90],[64,130,64,164],[60,214,104,214],[150,218,180,212],[212,204,204,180],[196,162,170,161],[148,160,148,140],[148,115,148,90])
const SH=poly([148,90],[146,140,148,148],[152,170,180,168],[236,176,236,236],[170,250,140,240],[132,200,132,150],[132,110,132,90])
// fluffy cuff puffs [x,y,r]
const PF=[];for(let k=0;k<=8;k++)PF.push([54+k*13.5,64+3*sn(k*2.1),12],[54+k*13.5,96+2*sn(k*1.7),11.5]);for(let k=0;k<4;k++)PF.push([64+k*30,80,16])
export default(c,t)=>{
  c.translate(0,12)
  // a lazy sway with a burst of wiggles mid-loop; at depth d (0 hook, 1 toe) lower parts lag and swing wider
  const en=u=>.5-.5*cs(P*u),w=u=>.04*sn(P*u)+.085*sn(P*4*u)*en(u),a=d=>w(t-.06*d)*(1+.35*d),dp=y=>Math.max(0,(y-HY)/200)
  const W=([x,y])=>{const q=a(dp(y)),X=x-HX,Y=y-HY;return[HX+X*cs(q)-Y*sn(q),HY+X*sn(q)+Y*cs(q)]}
  const path=pts=>{c.beginPath();for(const p of pts)c.lineTo(...W(p));c.closePath()}
  const at=(x,y,f)=>{const[X,Y]=W([x,y]);c.save();c.translate(X,Y);c.rotate(a(dp(y)));f();c.restore()}
  c.strokeStyle=O;c.lineWidth=6
  // goodies peeking out, hopping
  const b1=9*Math.abs(sn(P*4*t))*en(t),b2=9*Math.abs(sn(P*4*t+1.2))*en(t)
  at(150,94-b1,()=>{
    c.rotate(.16);c.lineCap='butt'
    const cane=()=>{c.beginPath();c.moveTo(0,0);c.lineTo(0,-56);c.arc(-14,-56,14,0,Math.PI,1);c.lineTo(-28,-50)}
    c.lineWidth=18;c.strokeStyle=O;cane();c.stroke();c.lineWidth=11;c.strokeStyle='#fff';cane();c.stroke()
    c.setLineDash([7,7]);c.strokeStyle='#e23b45';cane();c.stroke();c.setLineDash([]);c.lineCap='round'
  })
  at(108,56-b2,()=>{
    c.rotate(-.18);c.lineWidth=5;c.strokeStyle=O;c.fillStyle='#3a86e0'
    c.beginPath();c.roundRect(-20,-20,40,46,3);c.fill()
    c.fillStyle='#ffd23a';c.fillRect(-5,-18,10,42);c.beginPath();c.roundRect(-20,-20,40,46,3);c.stroke()
    c.lineWidth=4;c.beginPath();c.ellipse(-9,-25,9,6,-.5,0,P);c.ellipse(9,-25,9,6,.5,0,P);c.fill();c.stroke()
    c.beginPath();c.arc(0,-21,4,0,P);c.fill();c.stroke()
  })
  // body with shade, heel and toe patches
  path(BODY);c.fillStyle='#e23b45';c.fill();c.save();c.clip()
  c.fillStyle='#c42d3c';path(SH);c.fill()
  c.fillStyle='#2f9a58';c.strokeStyle=O;c.lineWidth=5
  const pt=[[60,216,40],[214,194,36]]
  for(const[x,y,r]of pt){const[X,Y]=W([x,y]);c.beginPath();c.arc(X,Y,r,0,P);c.fill();c.stroke()}
  c.strokeStyle='#fff';c.lineWidth=3;c.setLineDash([5,6])
  for(const[x,y,r]of pt){const[X,Y]=W([x,y]);c.beginPath();c.arc(X,Y,r-8,0,P);c.stroke()}
  c.setLineDash([]);c.restore()
  path(BODY);c.strokeStyle=O;c.lineWidth=6;c.stroke()
  // snowflake on the leg
  at(104,138,()=>{c.strokeStyle='#fff';c.lineWidth=3.5;for(let k=0;k<3;k++){c.rotate(P/6);c.beginPath();c.moveTo(-15,0);c.lineTo(15,0);for(const s of[-1,1]){c.moveTo(s*9,0);c.lineTo(s*14,-5);c.moveTo(s*9,0);c.lineTo(s*14,5)}c.stroke()}})
  // fluffy cuff: stroke every puff, then fill every puff, so only the outer edge is outlined
  const pf=(L,dx=0,dy=0,k=1)=>{c.beginPath();for(const[x,y,r]of L){const[X,Y]=W([x+dx,y+dy]);c.moveTo(X+r*k,Y);c.arc(X,Y,r*k,0,P)}}
  c.lineWidth=12;c.strokeStyle=O;pf(PF);c.stroke();c.fillStyle='#f6f3ee';pf(PF);c.moveTo(...W([54,64]));for(const p of[[162,64],[162,96],[54,96]])c.lineTo(...W(p));c.fill()
  c.save();pf(PF);c.clip();c.fillStyle='#dde2ea';pf(PF.filter((_,k)=>k%2&&k<18),4,8,.9);c.fill();c.fillStyle='#f6f3ee';pf(PF.filter(([,y])=>y<90),0,-3,.95);c.fill();c.restore()
  // ribbon loop hanging over a gold peg
  const[l1x,l1y]=W([56,68]),[l2x,l2y]=W([76,62])
  c.lineCap='round'
  for(const[lw,col]of[[11,O],[5,'#2f9a58']]){c.lineWidth=lw;c.strokeStyle=col;c.beginPath();c.moveTo(l1x,l1y);c.bezierCurveTo(HX-26,HY-4,HX-10,HY-1,HX,HY);c.bezierCurveTo(HX+10,HY+1,HX+8,HY+20,l2x,l2y);c.stroke()}
  c.fillStyle='#ffd23a';c.lineWidth=4.5;c.strokeStyle=O;c.beginPath();c.arc(HX,HY+9,9,0,P);c.fill();c.stroke()
  c.fillStyle='#fff3b0';c.beginPath();c.arc(HX-3,HY+6,2.5,0,P);c.fill()
}

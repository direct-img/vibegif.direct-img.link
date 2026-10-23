// purple crayon with a face scribbling a rainbow loop-de-loop, lifting off, then the line wipes away as it floats back
const{sin,cos,PI,min,max,floor}=Math,T=2*PI
export const frames=24,delay=80
const RB=['#ff6b6b','#ffa94d','#ffd43b','#69db7c','#4dabf7','#b197fc'],CR='#9775fa',CL='#d0bfff',CD='#7048e8',BL='#faa2c1'
const X0=36,X1=158,Y0=186,B=17,W=4.25,NS=90
const P=s=>[X0+(X1-X0)*s-B*sin(s*T*W),Y0-B*cos(s*T*W)+B*.3]
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
const sparkle=(c,x,y,s)=>{c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  let from=0,to=1,tip,lift=0
  if(t<.68)to=t/.68,tip=P(to)
  else if(t<.78){const u=(t-.68)/.1;tip=P(1);lift=34*sm(u)}
  else{const u=sm((t-.78)/.18);from=min(1,(t-.78)/.16);const a=P(1),b=P(0);tip=[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u];lift=34*(1-sm((t-.9)/.1))}
  if(to>from){
    const pts=[];for(let k=floor(from*NS);k<=to*NS;k++)pts.push([k/NS,...P(k/NS)]);pts.push([to,...P(to)])
    c.lineWidth=14;c.beginPath();for(const[,x,y]of pts)c.lineTo(x,y);c.stroke()
    c.lineWidth=7;for(let r=0;r<6;r++){const seg=pts.filter(([s])=>s>=r/6-.012&&s<=(r+1)/6+.012);if(seg.length<2)continue;c.strokeStyle=RB[r];c.beginPath();for(const[,x,y]of seg)c.lineTo(x,y);c.stroke()}
    c.strokeStyle='#111'
  }
  if(t>.68&&t<.84){const s=12*sin(PI*(t-.68)/.16),[x,y]=P(1);sparkle(c,x+20,y-24,s);sparkle(c,x-6,y-40,s*.6)}
  const wob=t<.68?.05*sin(8*T*t):0
  c.save();c.translate(tip[0],tip[1]-lift);c.rotate(.55+wob);c.lineWidth=6
  c.fillStyle=CR;c.beginPath();c.moveTo(-3,-2);c.quadraticCurveTo(0,1,3,-2);c.lineTo(12,-28);c.lineTo(-12,-28);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(-15,-112,30,86,[4,4,3,3]);c.fill();c.stroke()
  c.fillStyle=CL;c.beginPath();c.rect(-15,-96,30,58);c.fill();c.stroke()
  c.lineWidth=4;for(const y of[-88,-46])c.beginPath(),c.moveTo(-15,y),c.lineTo(15,y),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*6,-72,3.2,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(0,-66,4.5,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*10,-63,3.5,2,0,0,T),c.fill()
  c.fillStyle=CD;c.lineWidth=5;c.beginPath();c.roundRect(-15,-118,30,10,4);c.fill();c.stroke()
  c.restore()
}

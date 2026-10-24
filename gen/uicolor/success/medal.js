// gold medal with a star swinging on its red and blue ribbon, a glint sliding across it and sparkles popping around
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=14,delay=90
const G='#ffd43b',GD='#fab005',GE='#f59f00',RB=['#ff6b6b','#4dabf7']
const sp=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const disc=(c,r)=>{c.beginPath();c.arc(0,170,r,0,T)}
export default(c,t)=>{
  const a=.13*sin(t*T)
  for(const[x,y,o]of[[38,120,0],[220,104,.33],[214,216,.66],[46,224,.5]]){const s=12*max(0,sin(PI*((t*2+o)%1)));if(s>1.5)sp(c,x,y,s)}
  c.lineWidth=7;c.translate(128,20);c.rotate(a);c.scale(.94,.94)
  for(const[k,d]of[[0,1],[1,-1]]){
    const q=()=>{c.beginPath();c.moveTo(d*58,0);c.lineTo(d*22,0);c.lineTo(-d*16,112);c.lineTo(d*18,112);c.closePath()}
    q();c.fillStyle=RB[k];c.fill()
    c.save();q();c.clip();c.strokeStyle='#fff';c.lineWidth=9;c.beginPath();c.moveTo(d*40,0);c.lineTo(d*1,112);c.stroke();c.restore()
    q();c.stroke()
  }
  c.fillStyle=GD;c.beginPath();c.roundRect(-20,100,40,22,7);c.fill();c.stroke()
  disc(c,62);c.fillStyle=GD;c.fill();c.stroke()
  disc(c,48);c.fillStyle=G;c.fill()
  c.save();disc(c,48);c.clip()
  c.fillStyle=GD;c.beginPath();c.arc(0,170,48,0,T);c.arc(-12,157,48,0,T,true);c.fill()
  const g=t*360-120;c.strokeStyle='#fff';c.lineWidth=14;c.beginPath();c.moveTo(g-40,240);c.lineTo(g+30,100);c.stroke();c.lineWidth=5;c.beginPath();c.moveTo(g-16,240);c.lineTo(g+54,100);c.stroke()
  c.restore()
  c.lineWidth=5;disc(c,48);c.stroke()
  c.fillStyle=GE;c.beginPath();for(let k=0;k<10;k++){const r=k%2?14:31,b=k*PI/5-PI/2;c.lineTo(cos(b)*r,172+sin(b)*r)}c.closePath();c.fill();c.lineWidth=4;c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(0,170,54,PI*1.12,PI*1.36);c.stroke()
}

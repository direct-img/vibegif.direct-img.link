// yellow excavator digging into a dirt pile, lifting a full bucket and dumping it back, exhaust puffing, smiling as it works
const{sin,cos,PI,round}=Math,T=2*PI
export const frames=20,delay=90
const Y='#ffd43b',YD='#fab005',TR='#495057',WH='#ced4da',GL='#a5d8ff',DI='#c08552',DD='#8d6346',BL='#ffa8a8',EX='#868e96'
const arm=(c,a,b,w,col)=>{for(const[lw,s]of[[w,'#111'],[w-10,col]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(...a),c.lineTo(...b),c.stroke();c.strokeStyle='#111';c.lineWidth=7}
const pin=(c,[x,y])=>{c.fillStyle=WH;c.lineWidth=4;c.beginPath();c.arc(x,y,6,0,T);c.fill();c.stroke();c.lineWidth=7}
const pose=t=>{
  const s=.5-.5*cos(T*t),a1=-.15-.75*s,a2=1.5-.6*s,th=a2-PI/2+.5+.9*sin(T*t)
  const E=[128+80*cos(a1),128+80*sin(a1)],B=[E[0]+64*cos(a2),E[1]+64*sin(a2)]
  return{E,B,th,at:(x,y)=>[B[0]+x*cos(th)-y*sin(th),B[1]+x*sin(th)+y*cos(th)]}
}
const mound=c=>{c.beginPath();c.moveTo(146,240);c.bezierCurveTo(160,178,234,172,248,240);c.closePath()}
export default(c,t)=>{
  const{E,B,th}=pose(t),by=round(2*sin(2*T*t)),full=t>.03&&t<.5
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,r=4+8*sin(PI*p);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(34-8*p+4*sin(T*p),76-50*p+by,r,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  c.fillStyle=TR;c.beginPath();c.roundRect(10,192,132,44,22);c.fill();c.stroke()
  for(const x of[32,76,120]){c.fillStyle=WH;c.lineWidth=5;c.beginPath();c.arc(x,214,11,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x,214,3,0,T);c.fill()}
  c.lineWidth=7;c.translate(0,by)
  c.fillStyle='#343a40';c.beginPath();c.rect(34,180,92,14);c.fill();c.stroke()
  c.fillStyle=EX;c.beginPath();c.roundRect(28,80,12,40,4);c.fill();c.stroke()
  c.fillStyle=Y;c.beginPath();c.roundRect(56,50,72,76,14);c.fill();c.stroke()
  c.fillStyle=GL;c.lineWidth=5;c.beginPath();c.roundRect(68,62,48,40,8);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(80,72,4,8,.5,0,T);c.fill()
  c.lineWidth=7
  const body=()=>{c.beginPath();c.roundRect(14,114,124,70,14)}
  c.fillStyle=Y;body();c.fill();c.save();body();c.clip();c.fillStyle=YD;c.fillRect(0,114,34,80);c.restore();body();c.stroke()
  c.fillStyle='#111';for(const x of[66,100])c.beginPath(),c.ellipse(x,146,5,7,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[64,98])c.beginPath(),c.arc(x,143,2.2,0,T),c.fill()
  c.fillStyle=BL;for(const x of[52,114])c.beginPath(),c.ellipse(x,160,8,4.5,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(83,152,8,.15*PI,.85*PI);c.stroke()
  arm(c,[128,128],E,26,Y);arm(c,E,B,22,YD)
  c.save();c.translate(...B);c.rotate(th)
  if(full){c.fillStyle=DI;c.lineWidth=5;for(const[x,y,r]of[[-16,2,11],[-24,18,12],[-26,34,9],[-12,22,10]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()}
  c.fillStyle=EX;c.lineWidth=6;c.beginPath();c.moveTo(-10,-8);c.lineTo(16,-6);c.quadraticCurveTo(32,32,-2,44);c.lineTo(-28,42);c.quadraticCurveTo(-8,30,-10,-8);c.closePath();c.fill();c.stroke()
  c.fillStyle=WH;c.lineWidth=4;c.beginPath();c.moveTo(-28,42);c.lineTo(-36,46);c.lineTo(-24,48);c.lineTo(-30,52);c.lineTo(-14,48);c.closePath();c.fill();c.stroke()
  c.restore();pin(c,[128,128]);pin(c,E);pin(c,B)
  c.translate(0,-by);c.lineWidth=7
  c.fillStyle=DI;mound(c);c.fill();c.stroke()
  c.fillStyle=DD;for(const[x,y]of[[180,214],[206,200],[222,222],[194,230]])c.beginPath(),c.ellipse(x,y,5,3,0,0,T),c.fill()
  for(let k=0;k<4;k++){
    const t0=.44+k*.035,u=(t-t0)/.2
    if(u<0||u>1)continue
    const P=pose(t0),[x,y]=P.at(-20,20),yy=y+by+u*u*80,xx=x+(k-1.5)*7*u
    if(yy>204)continue
    c.fillStyle=DI;c.lineWidth=4;c.beginPath();c.arc(xx,yy,6-k%2,0,T);c.fill();c.stroke()
  }
}

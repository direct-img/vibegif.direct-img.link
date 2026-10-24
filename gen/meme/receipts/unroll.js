// fist holds up a receipt that drops and keeps unrolling until it heaps up in folds on the floor, gets a smug shake, then zips back up
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=32,delay=[...Array(31).fill(70),600],rim=4
const SK='#ffd8b5',SL='#5c7cfa',PA='#fff',LN='#868e96',W=84,X=128-W/2,TOP=70,FLR=238
const ease=x=>x<=0?0:x>=1?1:x*x
const lines=(c,y1,x)=>{for(let k=0;k*14+TOP+14<y1-4;k++){const y=TOP+14+k*14,m=k%6;c.lineWidth=4;c.strokeStyle=m==4?'#111':LN;c.beginPath();if(m==4){c.moveTo(x+8,y);c.lineTo(x+W-8,y)}else{c.moveTo(x+9,y);c.lineTo(x+20+(k*17)%26,y);c.moveTo(x+W-24+(k%3)*4,y);c.lineTo(x+W-9,y)}c.stroke()}c.strokeStyle='#111'}
const FOLD=[[-14,.05],[16,-.06],[-6,.08],[22,-.04],[-20,-.07],[8,.06]]
export default(c,t,i)=>{
  const dn=ease((t-.04)/.34),up=t>.84?min(1,(t-.84)/.1):0,L=(1-up)*dn*300,n=min(6,max(0,(L-(FLR-TOP-24))/16|0))
  const sh=t>.46&&t<.8?7*sin(T*(t-.46)*6):0
  c.save();c.translate(sh,0)
  // heap of curls on the floor, each one a loop of paper ribbon
  for(let k=0;k<n;k++){const[o,a]=FOLD[k],y=FLR-14-k*9;c.save();c.translate(128+o*1.6-sh*.6,y);c.rotate(a*2)
    for(const[w,s]of[[24,'#111'],[16,PA]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.ellipse(0,0,34+(k%3)*6,12,0,0,T),c.stroke()
    c.lineWidth=3;c.strokeStyle=LN;c.setLineDash([8,7]);c.beginPath();c.ellipse(0,0,34+(k%3)*6,12,0,0,T);c.stroke();c.setLineDash([]);c.strokeStyle='#111';c.restore()}
  // hanging strip, sways a little behind the shake
  const b=n?FLR-14-(n-1)*9:TOP+min(L,FLR-TOP-10),x=X-sh*.6
  if(L>2){c.fillStyle=PA;c.lineWidth=7;c.beginPath();c.moveTo(X,TOP);c.lineTo(X+W,TOP);c.lineTo(x+W,b)
    if(!n)for(let k=1;k<=8;k++)c.lineTo(x+W-k*W/8,b+(k%2?7:0));else c.lineTo(x,b)
    c.closePath();c.fill();c.stroke();c.save();c.clip();lines(c,b,X);c.restore()}
  // sleeve and fist
  c.fillStyle=SL;c.lineWidth=7;c.beginPath();c.roundRect(84,-14,88,42,8);c.fill();c.stroke()
  c.fillStyle=SK;c.beginPath();c.roundRect(72,22,112,58,24);c.fill();c.stroke()
  c.lineWidth=6;for(const x of[100,128,156])c.beginPath(),c.moveTo(x,27),c.lineTo(x,56),c.stroke()
  c.lineWidth=7;c.beginPath();c.roundRect(64,50,78,28,14);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(126,58);c.lineTo(130,70);c.stroke()
  c.restore()
  // smug shake marks
  if(sh){c.lineWidth=6;for(const d of[-1,1])for(const[y,s]of[[30,-1],[60,1]])c.beginPath(),c.moveTo(128+d*(70+(i%2)*4),y),c.lineTo(128+d*(88+(i%2)*4),y+s*6),c.stroke()}
}

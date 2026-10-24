// panicking server rack on fire, cartoon flames flickering out the top, red lights blinking while an extinguisher puffs foam at it
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=70
const RK='#495057',SL='#343a40',PN='#a5d8ff',FR=['#ff6b6b','#ff922b','#ffd43b'],EX='#ff6b6b',LED='#ff6b6b',BL='#ffa8a8'
const fl=(c,x,b,w,h,s)=>{c.beginPath();c.moveTo(x-w,b);c.bezierCurveTo(x-w*1.2,b-h*.45,x+s-w*.5,b-h*.62,x+s,b-h);c.bezierCurveTo(x+s+w*.55,b-h*.62,x+w*1.2,b-h*.45,x+w,b);c.closePath()}
export default(c,t,i)=>{
  for(const[k,[x,w,h,ph]]of[[54,30,58,1],[122,32,66,3],[88,44,86,0]].entries()){
    const hh=h*(1+.1*sin(2*T*t+ph)+.06*sin(4*T*t+ph*2)),s=8*sin(T*t*2+ph+k)
    for(const[j,col]of FR.entries()){const f=[1,.68,.38][j];fl(c,x+s*(1-f)*.5,112,w*f,hh*f,s*f);c.fillStyle=col;c.fill();if(!j)c.lineWidth=6,c.stroke()}
  }
  c.lineWidth=7;c.fillStyle=RK;c.beginPath();c.roundRect(26,100,124,138,12);c.fill();c.stroke()
  c.fillStyle=PN;c.lineWidth=5;c.beginPath();c.roundRect(38,112,100,52,8);c.fill();c.stroke()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(88+d*31,127),c.lineTo(88+d*13,120),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(88+d*21,136,5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(88+d*21-1.5,134.5,1.8,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(88,153,7,6+(i%2),0,0,T);c.fill()
  c.fillStyle='#4dabf7';c.lineWidth=3;c.beginPath();const sy=118+(i%4);c.moveTo(130,sy);c.quadraticCurveTo(136,sy+10,130,sy+12);c.quadraticCurveTo(124,sy+10,130,sy);c.fill();c.stroke()
  for(let k=0;k<3;k++){
    const y=172+k*21;c.fillStyle=SL;c.lineWidth=4;c.beginPath();c.roundRect(38,y,100,15,4);c.fill();c.stroke()
    c.strokeStyle='#868e96';c.lineWidth=3;c.beginPath();for(let x=50;x<100;x+=9)c.moveTo(x,y+4),c.lineTo(x,y+11);c.stroke();c.strokeStyle='#111'
    for(const[j,x]of[112,126].entries()){const on=((i>>1)+k+j)%2;c.fillStyle=on?LED:'#862e2e';c.lineWidth=2.5;c.beginPath();c.arc(x,y+7.5,4.5,0,T);c.fill();c.stroke()}
  }
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,x=160-60*p,y=110-58*p+10*sin(PI*p),r=(7+17*p)*min(1,(1-p)*4)
    if(r>1)c.fillStyle='#fff',c.lineWidth=5,c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  }
  for(const[w,s]of[[13,'#111'],[6,SL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(212,140),c.bezierCurveTo(186,150,178,138,172,124),c.stroke()
  c.strokeStyle='#111';c.lineWidth=16;c.beginPath();c.moveTo(174,126);c.lineTo(164,114);c.stroke()
  c.lineWidth=7;c.fillStyle='#adb5bd';c.beginPath();c.roundRect(204,128,20,18,3);c.fill();c.stroke()
  for(const[w,s]of[[12,'#111'],[5,'#adb5bd']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(206,124),c.lineTo(236,116),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=EX;c.beginPath();c.roundRect(190,144,48,94,[22,22,8,8]);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(196,180,36,26,4);c.fill();c.stroke()
  c.strokeStyle=EX;c.lineWidth=4;c.beginPath();c.moveTo(204,189);c.lineTo(224,189);c.moveTo(204,197);c.lineTo(218,197);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(198,162);c.lineTo(198,172);c.stroke()
}

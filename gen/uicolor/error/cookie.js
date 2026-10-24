// sad chocolate chip cookie trembles, a crack zigzags down it, it splits in two crying while crumbs tumble off, then it pulls itself back together
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80
const CK='#e0a96d',CKD='#c98c4f',CH='#5c3d2e',BL='#ffa8a8',TR='#74c0fc'
const C=[[0,-76],[-9,-56],[8,-36],[-7,-14],[9,10],[-7,34],[8,56],[0,76]]
const CH0=[[-42,-34],[30,-46],[50,6],[-52,18],[-24,50],[26,50],[-8,-60],[40,-22]]
const io=u=>u*u*(3-2*u),cl=u=>min(1,max(0,u))
const body=c=>{c.beginPath();for(let a=0;a<=T+.01;a+=.12){const r=76+3*sin(a*7);c.lineTo(cos(a)*r,sin(a)*r)}c.closePath()}
const crack=c=>{c.beginPath();for(const[x,y]of C)c.lineTo(x,y)}
export default(c,t,i)=>{
  const tr=t>.04&&t<.32?(i%2?2:-2):0,cp=t<.3?cl((t-.1)/.2):cl(1-(t-.9)/.1),sp=t<.32?0:t<.46?1-(1-(t-.32)/.14)**3:t<.78?1:t<.9?1-io((t-.78)/.12):0
  for(const d of[-1,1]){
    c.save();c.translate(128+tr+d*14*sp,126+5*sp);c.translate(0,84);c.rotate(d*.2*sp);c.translate(0,-84)
    if(sp>0){c.beginPath();for(const[x,y]of[[0,-110],...C,[0,110],[d*200,110],[d*200,-110]])c.lineTo(x,y);c.clip()}
    else if(d>0){c.restore();continue}
    body(c);c.fillStyle=CK;c.fill()
    c.save();body(c);c.clip();c.fillStyle=CKD;c.beginPath();c.arc(0,0,82,0,T);c.arc(-10,-12,78,0,T,true);c.fill();c.restore()
    c.lineWidth=7;body(c);c.stroke()
    c.fillStyle=CH;for(const[x,y]of CH0)c.beginPath(),c.ellipse(x,y,7,6,x,0,T),c.fill()
    c.lineWidth=4.5;for(const e of[-1,1])c.beginPath(),c.moveTo(e*38,-20),c.lineTo(e*17,-27),c.stroke()
    c.fillStyle='#111';for(const e of[-1,1])c.beginPath(),c.arc(e*26,-6,6,0,T),c.fill()
    c.fillStyle='#fff';for(const e of[-1,1])c.beginPath(),c.arc(e*26-2,-8,2.2,0,T),c.fill()
    c.lineWidth=5;c.beginPath();c.arc(0,36,13,PI*1.2,PI*1.8);c.stroke()
    c.fillStyle=BL;for(const e of[-1,1])c.beginPath(),c.ellipse(e*44,12,8,4.5,0,0,T),c.fill()
    if(sp>.5)for(const o of[0,.5]){const p=(t*4+o)%1,yy=2+p*36;c.fillStyle=TR;c.lineWidth=3;c.beginPath();c.moveTo(d*30,yy-8);c.quadraticCurveTo(d*30+6,yy+3,d*30,yy+5);c.quadraticCurveTo(d*30-6,yy+3,d*30,yy-8);c.fill();c.stroke()}
    if(sp>0){c.lineWidth=6;crack(c);c.stroke()}
    c.restore()
  }
  if(sp==0&&cp>0){
    const L=C.reduce((s,[x,y],k)=>k?s+Math.hypot(x-C[k-1][0],y-C[k-1][1]):0,0)
    c.save();c.translate(128+tr,126);c.lineWidth=6;c.setLineDash([L*cp,999]);c.lineDashOffset=t<.5?0:-L*(1-cp);crack(c);c.stroke();c.restore()
  }
  const u=(t-.33)/.5
  if(u>0&&u<1)for(let k=1;k<7;k++){
    const[cx,cy]=C[k],d=k%2?1:-1,x=128+cx+d*(18+k*7)*u*1.4,y=126+cy-(34+k*5%17)*u*1.2+280*u*u,r=(4+k%3*1.5)*min(1,(1-u)*5)
    if(y<230&&r>.5){c.fillStyle=k%2?CK:CKD;c.lineWidth=3;c.beginPath();c.moveTo(x-r,y);c.lineTo(x-r*.3,y-r);c.lineTo(x+r,y-r*.4);c.lineTo(x+r*.6,y+r);c.closePath();c.fill();c.stroke()}
  }
}

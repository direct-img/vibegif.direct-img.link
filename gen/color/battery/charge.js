// battery charging up bar by bar from red to green, sparks running down the cable, happy when full
const{sin,cos,PI,floor,max}=Math,T=2*PI
export const frames=25,delay=110
const LV=['#ff6b6b','#ffa94d','#ffd43b','#51cf66'],CB='#495057'
export default(c,t)=>{
  const n=floor(t*5),full=n>=4,col=LV[max(0,n-1)]
  for(const[w,st]of[[14,'#111'],[6,'#ced4da']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(0,200),c.bezierCurveTo(30,200,10,128,36,128),c.stroke()
  if(!full)for(let k=0;k<3;k++){const p=(t*3+k/3)%1,u=p,x=(1-u)**3*0+3*(1-u)**2*u*30+3*(1-u)*u*u*10+u**3*36,y=(1-u)**3*200+3*(1-u)**2*u*200+3*(1-u)*u*u*128+u**3*128;c.fillStyle='#ffd43b';c.lineWidth=3;c.strokeStyle='#111';c.beginPath();c.arc(x,y,4,0,T);c.fill();c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=CB;c.beginPath();c.roundRect(30,114,16,28,4);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(46,72,160,112,20);c.fill();c.stroke()
  c.fillStyle='#ced4da';c.beginPath();c.roundRect(206,106,18,44,6);c.fill();c.stroke()
  c.lineWidth=5;for(let k=0;k<4;k++)if(k<n){c.fillStyle=col;c.beginPath();c.roundRect(60+k*36,86,30,84,8);c.fill();c.stroke()}
  c.lineWidth=7
  if(!full&&floor(t*10)%2==0){c.fillStyle='#ffd43b';c.beginPath();for(const[x,y]of[[136,92],[110,134],[128,134],[118,166],[148,120],[130,120],[142,92]])c.lineTo(x,y);c.closePath();c.lineWidth=5;c.fill();c.stroke();c.lineWidth=7}
  if(full){
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(126+d*22,118,6,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(126+d*22-2,116,2.2,0,T),c.fill()
    c.lineWidth=5;c.beginPath();c.arc(126,128,12,.15*PI,.85*PI);c.stroke()
    for(const[x,y]of[[44,54],[214,56],[226,198],[60,206]]){const s=10;c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
  }
}

// pink frosted donut turning on the spot like it's on a turntable, sprinkles riding around with it
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=60
const DO='#e8a15a',IC='#f783ac',SPR=['#ffd43b','#4dabf7','#fff','#69db7c','#b197fc','#ffd43b','#4dabf7','#fff','#69db7c','#b197fc','#ff922b','#fff']
export default(c,t)=>{
  const y=4*sin(2*T*t),rot=t*T,X=128,Y=124+y,ry=.5
  c.fillStyle=DO
  c.beginPath();c.ellipse(X,Y+18,94,94*ry,0,0,PI);c.lineTo(X-94,Y);c.ellipse(X,Y,94,94*ry,0,PI,0,true);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(X,Y,94,94*ry,0,0,T);c.fill();c.stroke()
  c.fillStyle=IC;c.beginPath()
  for(let a=0;a<=T+.01;a+=.05){const r=80+7*sin(7*a-rot*7)*(sin(a)>-.2?1:.3);c.lineTo(X+cos(a)*r,Y+sin(a)*r*ry-2)}
  c.closePath();c.fill();c.stroke()
  c.lineWidth=5
  SPR.forEach((col,k)=>{
    const a=rot+k*T/SPR.length+(k%3)*.2,r=k%2?62:46,x=X+cos(a)*r,yy=Y-2+sin(a)*r*ry,o=a*1.7+k
    c.strokeStyle='#111';c.lineWidth=9;c.beginPath();c.moveTo(x-cos(o)*6,yy-sin(o)*3);c.lineTo(x+cos(o)*6,yy+sin(o)*3);c.stroke()
    c.strokeStyle=col;c.lineWidth=4;c.stroke()
  })
  c.strokeStyle='#111';c.lineWidth=7
  c.globalCompositeOperation='destination-out';c.beginPath();c.ellipse(X,Y-2,24,24*ry,0,0,T);c.fill();c.globalCompositeOperation='source-over'
  c.save();c.beginPath();c.ellipse(X,Y-2,24,24*ry,0,0,T);c.clip();c.fillStyle=DO;c.beginPath();c.ellipse(X,Y+8,24,24*ry,0,PI,T);c.lineTo(X+24,Y+20);c.lineTo(X-24,Y+20);c.fill();c.restore()
  c.beginPath();c.ellipse(X,Y-2,24,24*ry,0,0,T);c.stroke()
}

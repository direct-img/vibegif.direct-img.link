// spoiled milk carton swaying woozily with spinning spiral eyes and a wobbly mouth, green stink lines wafting up and a fly buzzing round
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=90
const BU='#74c0fc',BUD='#4dabf7',GR='#a9e34b',SB='#c0eb75',FLY='#495057',DR='#a5d8ff'
const spiral=(c,x,y,a)=>{c.beginPath();for(let k=0;k<=34;k++){const u=k*.32,r=1+u*1.15;c.lineTo(x+cos(u+a)*r,y+sin(u+a)*r)}c.stroke()}
export default(c,t,i)=>{
  const r=.07*sin(T*t),sk=.05*sin(2*T*t+1)
  for(const[x,o,h]of[[36,0,70],[220,.5,70]]){
    const p=(t+o)%1,y0=150-36*p,L=h*(1-.3*p)
    c.save();c.beginPath();c.rect(0,0,256,160);c.clip()
    for(const[w,s]of[[12,'#111'],[5,GR]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let k=0;k<=12;k++){const y=y0-k/12*L;c.lineTo(x+7*sin(y*.12+T*t*2),y)}c.stroke()}
    c.restore()
  }
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(128,238);c.rotate(r);c.transform(1,0,sk,1,0,0);c.translate(-128,-238)
  c.fillStyle=BU;c.beginPath();c.roundRect(90,66,76,20,6);c.fill();c.stroke()
  c.beginPath();c.moveTo(64,124);c.lineTo(88,84);c.lineTo(168,84);c.lineTo(192,124);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(64,122,128,114,10);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(64,122,128,114,10);c.clip()
  c.fillStyle=BUD;c.beginPath();c.moveTo(60,240);c.lineTo(60,210);for(let x=60;x<=196;x+=4)c.lineTo(x,210+5*sin(x*.09+T*t));c.lineTo(196,240);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.restore();c.lineWidth=7;c.beginPath();c.roundRect(64,122,128,114,10);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(128,104,10,8,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;for(const[x,d]of[[104,1],[152,-1]])spiral(c,x,152,d*T*t*2)
  c.fillStyle=SB;for(const x of[88,168])c.beginPath(),c.ellipse(x,174,9,5,0,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();for(let k=0;k<=8;k++){const x=110+k*4.5;c.lineTo(x,184+(k%2?-3:3)*(i%2?1:-1))}c.stroke()
  c.fillStyle=SB;c.lineWidth=3.5;c.beginPath();c.moveTo(130,185);c.quadraticCurveTo(132,200,140,198);c.quadraticCurveTo(146,194,140,184);c.fill();c.stroke()
  c.fillStyle=DR;c.lineWidth=3.5;const dy=(t*2%1)*14;c.beginPath();c.moveTo(178,128+dy);c.quadraticCurveTo(186,140+dy,178,144+dy);c.quadraticCurveTo(170,140+dy,178,128+dy);c.fill();c.stroke()
  c.restore()
  const fa=T*t,fx=128+84*cos(fa),fy=42+14*sin(2*fa),fl=-sin(fa)>0?1:-1
  c.save();c.translate(fx,fy);c.scale(fl,1)
  c.fillStyle='#fff';c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.ellipse(d*3-1,-8,5,9,d*.5+(i%2?.3:-.3)*d,0,T),c.fill(),c.stroke()
  c.fillStyle=FLY;c.lineWidth=3;c.beginPath();c.ellipse(0,0,9,6,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(6,-1,2.5,0,T);c.fill()
  c.restore()
}

// striped donkey piñata swinging on its rope, bonked by a stick from below, candy popping out and falling
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=90
const ST=['#f783ac','#ffd43b','#4dabf7','#69db7c'],PINK='#faa2c1',SN='#ffd8a8',ROPE='#e0a96d',STICK='#a9744f',CANDY=['#ff6b6b','#b197fc','#ffd43b','#38d9a9','#ffa94d','#4dabf7']
const parts=[
  c=>c.roundRect(-54,0,94,56,16),
  c=>{c.moveTo(12,10);c.lineTo(24,-30);c.lineTo(46,-26);c.lineTo(38,16);c.closePath()},
  c=>c.roundRect(22,-54,64,34,14),
  c=>c.ellipse(36,-62,6,16,-.25,0,T),
  c=>{c.moveTo(56,-62);c.ellipse(50,-62,6,16,.25,0,T)},
  ...[-46,-26,4,24].map(x=>c=>c.roundRect(x,48,14,28,4))
]
const burst=(c,x,y,s)=>{c.fillStyle='#fff9db';c.lineWidth=5;c.beginPath();for(let k=0;k<16;k++){const r=k%2?s*.45:s,a=k*PI/8;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const a=.18*cos(T*t),w=(t+.12)%1,hit=t<.14
  c.save();c.translate(132,-40);c.rotate(a)
  for(const[lw,st]of[[11,'#111'],[5,ROPE]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(0,0),c.lineTo(0,152),c.stroke()
  c.strokeStyle='#111';c.translate(0,150);c.rotate(-a*.4);c.scale(.9,.9)
  for(const[x,col]of[[-58,ST[0]],[-62,ST[1]],[-66,ST[2]]])for(const[lw,st]of[[9,'#111'],[4,col]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(-52,12),c.lineTo(x,40+(x+58)*-2),c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=14;for(const p of parts)c.beginPath(),p(c),c.stroke()
  c.fillStyle=PINK;for(const p of parts)c.beginPath(),p(c),c.fill()
  c.save();c.beginPath();parts[0](c);parts[1](c);c.clip()
  for(let k=0;k<8;k++){c.fillStyle=ST[k%4];c.beginPath();c.moveTo(-60,-34+k*12);for(let x=-60;x<=50;x+=10)c.lineTo(x+5,-34+k*12+6),c.lineTo(x+10,-34+k*12);c.lineTo(50,-34+k*12+14);c.lineTo(-60,-34+k*12+14);c.fill()}
  c.restore()
  c.save();c.beginPath();parts[2](c);c.clip();c.fillStyle=ST[1];c.beginPath();c.moveTo(22,-54);for(let x=22;x<=60;x+=8)c.lineTo(x+4,-42),c.lineTo(x+8,-54);c.fill()
  c.fillStyle=SN;c.beginPath();c.ellipse(80,-36,14,15,0,0,T);c.fill();c.restore()
  ;[-46,-26,4,24].forEach((x,k)=>{c.fillStyle=ST[(k+2)%4];c.beginPath();c.roundRect(x,48,14,28,4);c.fill()})
  c.lineWidth=4;for(const p of[parts[0],...parts.slice(5)])c.beginPath(),p(c),c.stroke()
  c.fillStyle='#111';c.lineWidth=3.5
  if(hit){c.beginPath();c.moveTo(50,-44);c.lineTo(58,-39);c.lineTo(50,-34);c.stroke()}
  else c.beginPath(),c.arc(54,-40,4,0,T),c.fill()
  c.beginPath();c.arc(84,-38,2.2,0,T);c.fill()
  c.beginPath();if(hit)c.ellipse(72,-26,4,3,0,0,T),c.fill();else c.arc(72,-30,5,.2*PI,.8*PI),c.stroke()
  c.restore()
  const sw=w<.12?sin(PI/2*w/.12):w<.3?cos(PI/2*(w-.12)/.18):0
  if(sw>0){
    const ph=-.08-1.356*sw
    c.save();c.translate(40,300);c.rotate(ph);c.lineWidth=7
    c.fillStyle=STICK;c.beginPath();c.moveTo(0,-7);c.lineTo(150,-11);c.quadraticCurveTo(158,0,150,11);c.lineTo(0,7);c.closePath();c.fill();c.stroke()
    c.lineWidth=4;for(const x of[96,116,136])c.beginPath(),c.moveTo(x,-10),c.lineTo(x-6,10),c.stroke()
    c.restore()
  }
  if(t<.16)burst(c,60,152,22*sin(PI*t/.16)+8)
  if(t<.62){
    const u=t
    for(let k=0;k<6;k++){
      const vx=-30+k*32,x=93+vx*u,y=157-110*u+380*u*u,s=u<.45?1:(.62-u)/.17
      if(y>270||s<=0)continue
      c.save();c.translate(x,y);c.rotate(k*1.3+u*9);c.scale(s,s);c.fillStyle=CANDY[k];c.lineWidth=4
      for(const d of[-1,1])c.beginPath(),c.moveTo(d*8,0),c.lineTo(d*17,-7),c.lineTo(d*17,7),c.closePath(),c.fill(),c.stroke()
      c.beginPath();c.ellipse(0,0,10,8,0,0,T);c.fill();c.stroke()
      c.restore()
    }
  }
}

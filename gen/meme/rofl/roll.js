// round-bottomed blob laughing so hard it keeps rolling over backwards, feet kicking in the air, tears spraying, HA HA popping out
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=12,delay=90,rim=5
const Y='#ffd43b',BL='#ff8787',MO='#c92a2a',TG='#ff8fab',TR='#74c0fc',HC=['#ff6b6b','#4dabf7','#51cf66']
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const G={H:[[0,0,0,6],[4,0,4,6],[0,3,4,3]],A:[[0,6,2,0,4,6],[.9,3.8,3.1,3.8]]}
const word=(c,s,h,col)=>{
  const k=h/6,W=(s.length*6-2)*k
  for(const[w,st]of[[h*.5,'#111'],[h*.25,col]]){c.lineWidth=w;c.strokeStyle=st;let x=-W/2;c.beginPath()
    for(const ch of s){for(const p of G[ch]){c.moveTo(x+p[0]*k,p[1]*k-h/2);for(let q=2;q<p.length;q+=2)c.lineTo(x+p[q]*k,p[q+1]*k-h/2)}x+=6*k}
    c.stroke()}
  c.strokeStyle='#111'}
export default(c,t)=>{
  c.save();c.translate(128,240);c.scale(.9,.9);c.translate(-128,-240)
  const rb=62,th=.1-.72*(.5-.5*cos(t*T)),X=146+rb*th,F=236,sh=abs(sin(t*T*3)),back=-th/.62
  // floor
  c.lineWidth=8;c.beginPath();c.moveTo(14,F+4);c.lineTo(242,F+4);c.stroke()
  c.save();c.translate(X,F-rb);c.rotate(th);c.translate(0,rb)
  // feet kicking more the further it tips back
  for(const d of[-1,1]){const k=sin(t*T*4+(d>0?PI:0))*max(0,back);c.save();c.translate(d*26,-14);c.rotate(d*.3+k*.7);c.fillStyle=Y;c.lineWidth=6;c.beginPath();c.roundRect(-12,-4,24,30,12);c.fill();c.stroke();c.restore()}
  // body
  c.lineWidth=7;c.fillStyle=Y;c.beginPath();c.moveTo(0,0);c.arc(0,-rb,rb,PI/2,PI);c.bezierCurveTo(-rb,-130,-40,-164,0,-164);c.bezierCurveTo(40,-164,rb,-130,rb,-rb);c.arc(0,-rb,rb,0,PI/2);c.closePath();c.fill();c.stroke()
  // eyes squeezed shut
  c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(d*10,-120),c.lineTo(d*27,-112),c.lineTo(d*10,-104),c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*40,-92,10,6,0,0,T),c.fill()
  // laughing mouth
  const mh=20+7*sh,M=()=>{c.beginPath();c.moveTo(-24,-96);c.lineTo(24,-96);c.quadraticCurveTo(24,-86+mh,0,-86+mh);c.quadraticCurveTo(-24,-86+mh,-24,-96);c.closePath()}
  c.fillStyle=MO;M();c.fill();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(0,-86+mh,15,9,0,0,T);c.fill();c.fillStyle='#fff';c.fillRect(-22,-96,44,6);c.restore()
  c.lineWidth=5.5;M();c.stroke()
  // hands clutching the belly
  for(const d of[-1,1]){const hx=d*(20+3*sh);for(const[w,st]of[[22,'#111'],[9,Y]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(d*58,-78),c.quadraticCurveTo(d*56,-44,hx+d*8,-40),c.stroke()
    c.strokeStyle='#111';c.fillStyle=Y;c.lineWidth=6;c.beginPath();c.ellipse(hx,-40,13,11,d*.4,0,T);c.fill();c.stroke()}
  c.restore()
  // tears spraying off both eyes
  for(let k=0;k<6;k++){const q=(t*2+k/6)%1,d=k%2?1:-1,lx=d*30,ly=-112+rb,ex=X+cos(th)*lx-sin(th)*(ly),ey=F-rb+sin(th)*lx+cos(th)*ly
    const x=ex+d*(8+q*44),y=ey-40*q+80*q*q,s=1-q*.5;if(q<.85){c.fillStyle=TR;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,5.5*s,7.5*s,d*.5,0,T);c.fill();c.stroke()}}
  c.restore()
  // HA popping around, each one holds still once it's out
  const S=[[52,52,-.25],[204,44,.22],[212,126,.3]]
  for(let k=0;k<3;k++){const q=(t*2+k/3)%1;if(q<.62){const[x,y,r]=S[k],s=q<.1?1.25:1;c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);word(c,'HA',32,HC[k]);c.restore()}}
}

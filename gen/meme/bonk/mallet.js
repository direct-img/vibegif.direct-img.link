// squeaky toy mallet comes down BONK on a smiling blob, it squashes flat with spiral eyes and stars circling, then springs back up none the wiser
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=84,rim=5
const Y='#ffd43b',BL='#ff8787',HR='#fa5252',HB='#ffd43b',HD='#4dabf7'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const G={B:[[0,3,0,0,2.6,0,3.6,.8,3.6,2.2,2.6,3,0,3],[0,3,0,6,2.8,6,4,5,4,4,2.8,3,0,3]],O:[[2,0,3.4,.6,4,2,4,4,3.4,5.4,2,6,.6,5.4,0,4,0,2,.6,.6,2,0]],N:[[0,6,0,0,4,6,4,0]],K:[[0,0,0,6],[3.8,0,0,3.8],[1.5,2.3,4,6]],'!':[[0,0,0,3.6],[0,6,0,6]]}
const word=(c,s,h,col)=>{
  const k=h/6,adv=s.split('').map(ch=>ch=='!'?1.8:6),W=(adv.reduce((a,b)=>a+b)-2)*k
  for(const[w,st]of[[h*.52,'#111'],[h*.26,col]]){c.lineWidth=w;c.strokeStyle=st;let x=-W/2;c.beginPath()
    s.split('').forEach((ch,j)=>{for(const p of G[ch]){c.moveTo(x+p[0]*k,p[1]*k-h/2);for(let q=2;q<p.length;q+=2)c.lineTo(x+p[q]*k,p[q+1]*k-h/2)}x+=adv[j]*k})
    c.stroke()}
  c.strokeStyle='#111'
}
const star=(c,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=Y;c.lineWidth=4;c.beginPath();for(let k=0;k<10;k++){const r=k%2?s*.45:s,b=k*PI/5-PI/2;c.lineTo(cos(b)*r,sin(b)*r)}c.closePath();c.fill();c.stroke();c.restore()}
const spiral=(c,x,y,a)=>{c.lineWidth=4;c.beginPath();for(let b=0;b<4*PI;b+=.3){const r=1+b*1.05;c.lineTo(x+cos(b+a)*r,y+sin(b+a)*r)}c.stroke()}
export default(c,t)=>{
  // swing: raised, wind-up wobble, slam at .3, lift back by .7
  const down=ez(t,.24,.3),up=ez(t,.42,.72),hit=t>=.3&&t<.42
  const sq=t<.3?0:t<.42?1:max(0,1-ez(t,.42,.52)*1.25)+(t>.42&&t<.7?sin((t-.42)*T*3.5)*.18*(1-ez(t,.42,.7)):0)
  const sy=1-.48*sq,sx=1+.4*sq
  const dz=t>=.36&&t<.92,fz=1-ez(t,.82,.92)
  // blob
  c.save();c.translate(116,236);c.scale(sx,sy)
  c.fillStyle=Y;c.beginPath();c.moveTo(-70,0);c.bezierCurveTo(-74,-70,-48,-118,0,-118);c.bezierCurveTo(48,-118,74,-70,70,0);c.closePath();c.fill();c.stroke()
  c.restore()
  const fy=236-60*sy,ex=27*sx
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(116+d*(ex+16),fy+14*sy,10,5,0,0,T),c.fill()
  c.fillStyle='#111'
  if(hit){c.lineWidth=5;for(const d of[-1,1]){const x=116+d*ex,y=fy;c.beginPath();c.moveTo(x-8,y-6);c.lineTo(x+8,y+6);c.moveTo(x+8,y-6);c.lineTo(x-8,y+6);c.stroke()}
    c.lineWidth=5;c.beginPath();c.moveTo(100,fy+20);c.lineTo(132,fy+20);c.stroke()}
  else if(dz){for(const d of[-1,1])spiral(c,116+d*ex,fy-2,t*T*4*d)
    c.lineWidth=4.5;c.beginPath();for(let x=-16;x<=16;x+=2)c.lineTo(116+x,fy+20+3*sin(x/4+t*T*3));c.stroke()}
  else{const look=t<.3?ez(t,.12,.2)*-5:0
    for(const d of[-1,1])c.beginPath(),c.ellipse(116+d*ex,fy-2+look,6,8,0,0,T),c.fill()
    c.lineWidth=4.5;c.beginPath();c.arc(116,fy+10,12,.2*PI,.8*PI);c.stroke()}
  // circling stars
  if(dz&&!hit&&fz>.4)for(let k=0;k<3;k++){const a=t*T*3+k*T/3,z=sin(a);star(c,116+cos(a)*54,fy-46-z*8+10*(1-sy),(10+3*z)*fz,a)}
  // mallet: head pose (x,y,handle angle) eases from cocked back up top to flat on the head
  const top=236-118*sy,w=t<.24?.04*sin(t*T*4):0,k=t<.3?down:1-up
  const hx=156+(116-156)*k,hy=54+w*60+(top-34-54)*k,ha=-.75+w+(.6)*k
  c.save();c.translate(hx,hy);c.rotate(ha)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.roundRect(20,-9,220,18,9);c.fill();c.stroke()
  if(hit)c.scale(1.12,.86)
  c.fillStyle=HR;c.beginPath();c.roundRect(-26,-38,52,76,10);c.fill();c.stroke()
  c.fillStyle=HB;for(const y of[-38,24])c.beginPath(),c.roundRect(-28,y,56,14,7),c.fill(),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-18,-18,7,30,3.5);c.fill()
  c.restore()
  // impact
  if(hit){const p=ez(t,.3,.34)
    c.save();c.translate(122,236-120*sy);c.lineWidth=6
    for(let k=0;k<7;k++){const a=-PI*.95+k*PI*.9/6;for(const[w,s]of[[11,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(cos(a)*76,sin(a)*40),c.lineTo(cos(a)*(96+8*p),sin(a)*(54+6*p)),c.stroke()}
    c.restore()
    c.save();c.translate(108,46);c.rotate(-.14);const s=1.15-.15*p;c.scale(s,s);word(c,'BONK!',38,'#fff');c.restore()}
}

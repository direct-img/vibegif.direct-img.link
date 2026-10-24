// computer monitor glitching out, RGB bars tearing across it and slices jumping sideways, spiral dizzy eyes and little stars circling overhead
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=80
const CS='#b197fc',SC='#e7f5ff',G=['#ff6b6b','#51cf66','#4dabf7','#ffd43b','#f783ac','#3bc9db'],BL='#ffa8a8',GS='0011010000111010'
const R=n=>abs(sin(n*127.1+311.7)*43758.5)%1
const star=(c,x,y,s)=>{c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();for(let k=0;k<10;k++){const r=k%2?s*.45:s,a=k*PI/5-PI/2;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath();c.fill();c.stroke()}
const face=(c,t,col,o)=>{
  c.strokeStyle=col;c.lineWidth=5
  for(const d of[-1,1]){c.beginPath();for(let a=0;a<4.4*PI;a+=.3){const r=1+a*1.15,b=(a+t*T*2)*d;c.lineTo(128+d*32+o+cos(b)*r,118+sin(b)*r)}c.stroke()}
  c.beginPath();for(let x=-22;x<=22;x+=2)c.lineTo(128+x+o,154+4*sin(x/6+t*T*2));c.stroke()
}
const M=(c,t,i,g)=>{
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle='#868e96';c.beginPath();c.roundRect(110,194,36,26,4);c.fill();c.stroke()
  c.fillStyle=CS;c.beginPath();c.roundRect(70,214,116,22,11);c.fill();c.stroke()
  c.beginPath();c.roundRect(22,52,212,148,24);c.fill();c.stroke()
  c.fillStyle=g?'#ff6b6b':'#51cf66';c.lineWidth=4;c.beginPath();c.arc(210,190,4.5,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(40,70,176,112,12);c.clip()
  c.fillStyle=SC;c.fillRect(0,60,256,130)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*58,140,9,5,0,0,T),c.fill()
  if(g)face(c,t,'#ff6b6b',-5),face(c,t,'#4dabf7',5)
  face(c,t,'#111',0)
  if(g)for(let n=0;n<5;n++)c.fillStyle=G[(i+n)%6],c.fillRect(40+R(i+n*13)*90,72+R(i*9+n)*104,30+R(i*7+n)*110,4+R(i*3+n*7)*10)
  c.restore()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.roundRect(40,70,176,112,12);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(54,96);c.lineTo(54,84);c.lineTo(66,84);c.stroke()
}
export default(c,t,i)=>{
  const g=GS[i]>0
  const st=b=>{for(let k=0;k<3;k++){const a=t*T+k*T/3,z=sin(a);if(z<0==b)star(c,128+cos(a)*76,30+z*10,14+3*z)}}
  st(1)
  if(!g)M(c,t,i,0)
  else{const Y=[0,64,92,118,140,166,196,256];for(let k=0;k<7;k++){const dx=R(i*5+k)>.45?(R(i*11+k)-.5)*40:0;c.save();c.beginPath();c.rect(0,Y[k],256,Y[k+1]-Y[k]);c.clip();c.translate(dx,0);M(c,t,i,1);c.restore()}}
  c.strokeStyle='#111'
  st(0)
}

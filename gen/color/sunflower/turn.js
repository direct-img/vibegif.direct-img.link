// potted sunflower turning its smiley face to follow a little sun swinging across the sky, petals swaying
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=100
const PT='#ff922b',PD='#e8590c',ST='#51cf66',SD='#2f9e44',PE=['#fcc419','#ffd43b'],CE='#a9744f',CD='#7f5539',BL='#ff8787'
const leaf=(c,x,y,a,L)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=ST;c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(L*.5,-L*.38,L,0);c.quadraticCurveTo(L*.5,L*.38,0,0);c.fill();c.stroke();c.strokeStyle=SD;c.lineWidth=3;c.beginPath();c.moveTo(4,0);c.lineTo(L*.8,0);c.stroke();c.restore();c.strokeStyle='#111'}
export default(c,t)=>{
  const s=sin(t*T),sx=128+94*s,sy=32+14*s*s,hx=128+12*s,hy=104,sq=1-.16*abs(s),w=.08*sin(2*t*T)
  c.save();c.translate(sx,sy);c.rotate(t*PI/4)
  for(let k=0;k<8;k++){const q=k*PI/4;for(const[lw,col]of[[10,'#111'],[4,'#ffd43b']])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(cos(q)*22,sin(q)*22),c.lineTo(cos(q)*28,sin(q)*28),c.stroke()}
  c.restore();c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#ffd43b';c.beginPath();c.arc(sx,sy,16,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(sx+d*5,sy-1,2.2,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();c.arc(sx,sy+3,4,.15*PI,.85*PI);c.stroke()
  for(const[lw,col]of[[20,'#111'],[11,ST]])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(128,200),c.quadraticCurveTo(128-6*s,160,hx,hy+20),c.stroke()
  c.strokeStyle='#111'
  leaf(c,127,176,-.5+w,44);leaf(c,127,160,PI+.45-w,40)
  c.lineWidth=7;c.fillStyle=PT;c.beginPath();c.moveTo(92,200);c.lineTo(164,200);c.lineTo(154,244);c.lineTo(102,244);c.closePath();c.fill();c.stroke()
  c.fillStyle=PD;c.beginPath();c.roundRect(84,190,88,20,8);c.fill();c.stroke()
  c.save();c.translate(hx,hy);c.rotate(.2*s)
  c.lineWidth=5
  for(const[r,o,col]of[[44,PI/14,PE[0]],[40,0,PE[1]]])for(let k=0;k<14;k++){const q=k*T/14+o+.05*sin(2*t*T+k);c.fillStyle=col;c.beginPath();c.ellipse(cos(q)*r*sq,sin(q)*r,15,6.5,q,0,T);c.fill();c.stroke()}
  const fx=9*s
  c.lineWidth=7;c.fillStyle=CE;c.beginPath();c.ellipse(0,0,31*sq,31,0,0,T);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=CD;for(let y=-28;y<30;y+=9)for(let x=-28;x<30;x+=9)c.beginPath(),c.arc(x+(y/9&1)*4.5,y,1.8,0,T),c.fill();c.restore()
  c.fillStyle='#fff3bf';c.beginPath();c.ellipse(fx,6,20*sq,15,0,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(fx+d*9*sq,1,4,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(fx+d*9*sq-1,-.5,1.5,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(fx,7,5,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(fx+d*15*sq,9,4,2.5,0,0,T),c.fill()
  c.restore()
}

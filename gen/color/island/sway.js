// tiny smiling island with a palm tree swaying in the breeze, waves lapping all around it, coconuts in the fronds
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=12,delay=120
const SEA='#4dabf7',SL='#a5d8ff',SAND='#ffd8a8',SD='#ffc078',TR='#a9744f',TD='#7f5539',FR='#51cf66',FD='#2f9e44',CO='#8d6346',BL='#ff8787'
export default(c,t)=>{
  const a=t*T,s=sin(a),f=4*sin(2*a)
  c.beginPath();for(let k=0;k<=96;k++){const q=k/96*T,r=1+.03*sin(8*q-2*a);c.lineTo(128+114*r*cos(q),198+42*r*sin(q))}c.closePath();c.fillStyle=SEA;c.fill();c.stroke()
  c.strokeStyle=SL;c.lineWidth=5;c.beginPath();c.ellipse(128,198,90+f,31+f*.4,0,0,T);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(128,194,74+f*.7,26+f*.3,0,0,T);c.stroke()
  for(const[x,y,o]of[[38,204,0],[214,196,2],[96,228,4],[170,226,1]]){const b=2*sin(2*a+o);c.lineWidth=4;c.beginPath();c.arc(x,y+b,7,PI*1.1,PI*1.9);c.stroke();c.beginPath();c.arc(x+13,y+b,7,PI*1.1,PI*1.9);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=SAND;c.beginPath();c.ellipse(128,190,64,22,0,0,T);c.fill();c.stroke()
  c.fillStyle=SD;c.beginPath();c.ellipse(96,194,14,4,0,0,T);c.fill()
  const px=150+10*s,py=84,bx=116,by=186,cx=110,cy=132
  for(const[w,col]of[[26,'#111'],[16,TR]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(bx,by),c.quadraticCurveTo(cx,cy,px,py),c.stroke()
  c.strokeStyle=TD;c.lineWidth=3
  for(let u=.12;u<.9;u+=.13){const v=1-u,x=v*v*bx+2*u*v*cx+u*u*px,y=v*v*by+2*u*v*cy+u*u*py,tx=2*v*(cx-bx)+2*u*(px-cx),ty=2*v*(cy-by)+2*u*(py-cy),l=Math.hypot(tx,ty),nx=-ty/l,ny=tx/l;c.beginPath();c.moveTo(x-nx*6,y-ny*6);c.quadraticCurveTo(x+tx/l*3,y+ty/l*3,x+nx*6,y+ny*6);c.stroke()}
  c.strokeStyle='#111'
  const frond=(d,q,L,k)=>{c.save();c.translate(px,py);c.scale(d,1);c.rotate(q+.1*sin(a+k*.7));c.fillStyle=FR;c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(L*.5,-20,L,10);c.quadraticCurveTo(L*.5,4,0,0);c.fill();c.stroke();c.strokeStyle=FD;c.lineWidth=3;c.beginPath();c.moveTo(4,-2);c.quadraticCurveTo(L*.5,-10,L-6,8);c.stroke();c.restore();c.strokeStyle='#111'}
  for(const[d,q,L,k]of[[-1,-.7,58,0],[1,-.75,56,1],[-1,.05,66,2],[1,.05,68,3],[-1,.62,52,4],[1,.6,54,5]])frond(d,q,L,k)
  c.fillStyle=CO;c.lineWidth=5;for(const[x,y]of[[-9,10],[7,11],[-1,19]])c.beginPath(),c.arc(px+x,py+y,9,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(146+d*12,196,4,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(146,200,6,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(146+d*22,202,5,3,0,0,T),c.fill()
}

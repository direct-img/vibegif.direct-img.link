// little blob sunk into a red cinema seat shoveling popcorn nonstop, eyes darting side to side following the drama
const{sin,cos,PI,max,min,abs,floor}=Math,T=2*PI
export const frames=24,delay=70,rim=5
const Y='#ffd43b',BL='#ff8787',SR='#e03131',SD='#a61e4d',SC='#ff6b6b',PC='#fff3bf',PB='#fa5252'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const pop=(c,x,y,s=1)=>{c.lineWidth=3.5;c.fillStyle=PC;c.beginPath();for(const[a,b,r]of[[-4,1,5],[4,1,5],[0,-4,5.5]])c.moveTo(x+a*s+r*s,y+b*s),c.arc(x+a*s,y+b*s,r*s,0,T);c.stroke();c.fill()}
export default(c,t,i)=>{
  // two scoops per loop: dip (0-.2), up to mouth (.2-.35), chew; eyes snap left/right each quarter
  const u=(t*2)%1,toM=ez(u,.18,.36)-ez(u,.62,.9),chew=u>.36&&u<.7?abs(sin((u-.36)*T*3)):0
  const ph=floor(t*4),snap=ez((t*4)%1,0,.12),look=(ph%2?-1:1)*(2*snap-1)*-1
  // seat
  c.fillStyle=SR;c.beginPath();c.roundRect(34,14,188,210,[60,60,14,14]);c.fill();c.stroke()
  c.fillStyle=SC;c.lineWidth=5;c.beginPath();c.roundRect(52,30,152,180,[46,46,10,10]);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(128,36);c.lineTo(128,90);c.stroke()
  // blob body
  c.lineWidth=7;c.fillStyle=Y;c.beginPath();c.moveTo(56,236);c.bezierCurveTo(50,120,74,70,128,70);c.bezierCurveTo(182,70,206,120,200,236);c.closePath();c.fill();c.stroke()
  // armrests + seat front
  c.fillStyle=SD;for(const x of[14,206])c.beginPath(),c.roundRect(x,170,36,70,10),c.fill(),c.stroke()
  // face
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,138+chew*2,11,6,0,0,T),c.fill()
  for(const d of[-1,1]){const x=128+d*24,y=112
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(x,y,15,17,0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+look*7,y+2,7,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+look*7+2.5,y-1,2.2,0,T);c.fill()
    c.lineWidth=5;c.beginPath();c.arc(x,y-4,24,-PI/2-.45-d*.12,-PI/2+.45-d*.12);c.stroke()}
  const mo=toM>.85?1:0
  c.fillStyle='#c92a2a';c.lineWidth=4.5
  if(mo)c.beginPath(),c.ellipse(128,148,12,11,0,0,T),c.fill(),c.stroke()
  else{c.beginPath();c.ellipse(128,148,9+chew*3,5+chew*4,0,0,T);c.fill();c.stroke()}
  // soda in the cup holder, other hand resting
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(16,134);c.lineTo(48,134);c.lineTo(44,176);c.lineTo(20,176);c.closePath();c.fill();c.stroke()
  c.fillStyle='#4dabf7';c.beginPath();c.moveTo(18,150);c.lineTo(46,150);c.lineTo(44.5,166);c.lineTo(19.5,166);c.closePath();c.fill();c.stroke()
  c.fillStyle='#e9ecef';c.beginPath();c.roundRect(12,126,40,10,5);c.fill();c.stroke()
  for(const[w,s]of[[12,'#111'],[5,'#ff6b6b']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(34,128),c.lineTo(40,104),c.lineTo(50,98),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=Y;c.beginPath();c.ellipse(64,184,16,14,-.3,0,T);c.fill();c.stroke()
  // bucket
  const bx=172,by=196
  c.save();c.beginPath();c.moveTo(bx-34,by-40);c.lineTo(bx+34,by-40);c.lineTo(bx+24,by+46);c.lineTo(bx-24,by+46);c.closePath();c.fillStyle='#fff';c.fill();c.clip()
  c.fillStyle=PB;for(let k=-3;k<4;k+=2){c.beginPath();c.moveTo(bx+k*10,by-40);c.lineTo(bx+(k+1)*10,by-40);c.lineTo(bx+(k+1)*7,by+46);c.lineTo(bx+k*7,by+46);c.fill()}
  c.restore();c.lineWidth=6;c.beginPath();c.moveTo(bx-34,by-40);c.lineTo(bx+34,by-40);c.lineTo(bx+24,by+46);c.lineTo(bx-24,by+46);c.closePath();c.stroke()
  for(const[x,y]of[[-24,-44],[-10,-50],[6,-48],[22,-44],[-16,-38],[14,-38],[0,-40],[30,-38]])pop(c,bx+x,by+y,1.2)
  // flying kernels
  for(let k=0;k<3;k++){const p=(t*3+k/3)%1,x=bx-20+k*18+p*(k-1)*30,y=by-50-60*p+70*p*p;if(p<.8)pop(c,x,y,.9)}
  // scooping hand
  const hx=bx-6+(140-bx+6)*toM,hy=by-46+(158-by+46)*toM-sin(toM*PI)*8
  c.lineWidth=7;c.fillStyle=Y
  for(const[w,s]of[[26,'#111'],[13,Y]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(190,170),c.quadraticCurveTo(206,hy-6,hx+10,hy+6),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  if(toM>.3&&!mo)pop(c,hx-6,hy-10,1)
  c.beginPath();c.ellipse(hx,hy,17,15,.3,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(hx-8,hy-4);c.lineTo(hx-2,hy-6);c.moveTo(hx-8,hy+4);c.lineTo(hx-2,hy+2);c.stroke()
}

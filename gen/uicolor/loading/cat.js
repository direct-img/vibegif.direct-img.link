// orange tabby curled in a ring chasing its own tail round and round like a spinner, paws scrabbling, eyes locked on the tail tip
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=16,delay=60
const OR='#ffa94d',OD='#f08c00',PK='#ffc9c9',BL='#ff8787',X=128,Y=134,R=58
const at=(a,r=R)=>[X+cos(a)*r,Y+sin(a)*r]
export default(c,t,i)=>{
  const h=t*T,tail=[];for(let s=0;s<=1.001;s+=.1){const a=h-3.3-s*1.9,r=R+8*sin(s*PI)+6*s*sin(T*t*4+s*3);tail.push(at(a,r))}
  const line=(pts,w,col)=>{c.lineWidth=w;c.strokeStyle=col;c.beginPath();pts.forEach(([x,y])=>c.lineTo(x,y));c.stroke()}
  const tp=tail.at(-1)
  line(tail,34,'#111');line(tail,20,OR);line(tail.slice(-3),20,'#fff')
  for(const[a,ph]of[[h-.75,0],[h-3.1,PI]])for(const s of[-1,1]){const q=a+.22*sin(T*t*4+ph+(s>0?0:PI)),[x,y]=at(q,R+s*26);c.fillStyle='#fff';c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.ellipse(x,y,11,8,q,0,T);c.fill();c.stroke()}
  c.strokeStyle='#111';c.lineWidth=54;c.beginPath();c.arc(X,Y,R,h-3.3,h-.2);c.stroke()
  c.lineWidth=40;c.strokeStyle=OR;c.beginPath();c.arc(X,Y,R,h-3.3,h-.2);c.stroke()
  c.lineWidth=6;c.strokeStyle=OD;for(let k=0;k<4;k++){const a=h-1.3-k*.52;c.beginPath();c.moveTo(...at(a-.08,R-14));c.lineTo(...at(a,R+14));c.stroke()}
  const[hx,hy]=at(h,R+2),d=atan2(tp[1]-hy,tp[0]-hx),ex=4*cos(d),ey=4*sin(d)
  c.strokeStyle='#111';c.lineWidth=7
  for(const s of[-1,1]){c.fillStyle=OR;c.beginPath();c.moveTo(hx+s*28,hy-6);c.lineTo(hx+s*24,hy-44);c.lineTo(hx+s*4,hy-26);c.closePath();c.fill();c.stroke();c.fillStyle=PK;c.beginPath();c.moveTo(hx+s*22,hy-14);c.lineTo(hx+s*22,hy-34);c.lineTo(hx+s*12,hy-24);c.closePath();c.fill()}
  c.fillStyle=OR;c.beginPath();c.ellipse(hx,hy,34,29,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.strokeStyle=OD;for(const s of[-1,0,1])c.beginPath(),c.moveTo(hx+s*9,hy-27),c.lineTo(hx+s*7,hy-17),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy+12,14,10,0,0,T);c.fill()
  c.fillStyle='#111';for(const s of[-1,1])c.beginPath(),c.arc(hx+s*14+ex,hy-1+ey,5.5,0,T),c.fill()
  c.fillStyle='#fff';for(const s of[-1,1])c.beginPath(),c.arc(hx+s*14+ex-2,hy-3+ey,2,0,T),c.fill()
  c.fillStyle='#ff8fab';c.beginPath();c.moveTo(hx-4,hy+6);c.lineTo(hx+4,hy+6);c.lineTo(hx,hy+10);c.closePath();c.fill()
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(hx-7,hy+13);c.quadraticCurveTo(hx-3.5,hy+17,hx,hy+12);c.quadraticCurveTo(hx+3.5,hy+17,hx+7,hy+13);c.stroke()
  c.fillStyle=BL;for(const s of[-1,1])c.beginPath(),c.ellipse(hx+s*24,hy+9,6,3.5,0,0,T),c.fill()
}

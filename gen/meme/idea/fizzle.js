// lightbulb gets a brilliant idea and blazes on with a "!", then flickers, fizzles out with a puff of smoke and is left with a blank "?"
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=[...Array(23).fill(90),700],rim=4
const G={'!':'M2 0L2 3.8M2 5.9L2 6','?':'M.1 1.2Q.6 0 2 0Q4 0 4 1.7Q4 3 2 3.3L2 4M2 5.9L2 6'}
const txt=(c,s,x,y,k,col,w)=>{
  const a=5.4*k,W=s.length*a-1.4*k;c.beginPath()
  ;[...s].forEach((ch,j)=>{const ox=x-W/2+j*a;for(const[,o,q]of(G[ch]||'').matchAll(/([MLQ])([^MLQ]*)/g)){const n=q.trim().split(/[ ,]+/).map((v,m)=>m%2?y+v*k:ox+v*k);o=='M'?c.moveTo(...n):o=='L'?c.lineTo(...n):c.quadraticCurveTo(...n)}})
  for(const[l,s]of[[w+7,'#111'],[w,col]])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111'
}
const pop=x=>x<=0?0:x>=1?1:1+sin(PI*x)*.45*(1-x)
const X=128,Y=118,R=58
export default(c,t,i)=>{
  const ph=i<3?0:i<11?1:i<16?2:3,on=ph==1||ph==2&&[0,1,0,1,0][i-11],tilt=ph==3?-.14*min(1,(i-15)/2):0
  c.save();c.translate(X,214);c.rotate(tilt);c.translate(-X,-214)
  // rays
  if(on){const p=1+.1*(i%2);c.strokeStyle='#111';for(const[w,s]of[[13,'#111'],[6,'#ffd43b']]){c.lineWidth=w;c.strokeStyle=s;for(let k=0;k<9;k++){if(k==4)continue;const a=PI*.86+k*PI*1.28/8,r0=R+12,r1=R+(k%2?24:36)*p;c.beginPath();c.moveTo(X+cos(a)*r0,Y+sin(a)*r0);c.lineTo(X+cos(a)*r1,Y+sin(a)*r1);c.stroke()}}c.strokeStyle='#111'}
  // screw base
  c.fillStyle='#adb5bd';c.lineWidth=7;c.beginPath();c.moveTo(96,166);c.lineTo(160,166);c.lineTo(154,206);c.lineTo(102,206);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const y of[180,194])c.beginPath(),c.moveTo(100,y),c.lineTo(156,y),c.stroke()
  c.fillStyle='#495057';c.lineWidth=6;c.beginPath();c.moveTo(108,206);c.lineTo(148,206);c.quadraticCurveTo(140,224,128,224);c.quadraticCurveTo(116,224,108,206);c.fill();c.stroke()
  // glass
  c.fillStyle=on?'#ffe066':'#e9ecef';c.lineWidth=7;c.beginPath();c.arc(X,Y,R,PI*.68,PI*2.32);c.quadraticCurveTo(156,150,158,166);c.lineTo(98,166);c.quadraticCurveTo(100,150,X-R*cos(PI*.32),Y+R*sin(PI*.32));c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(X,Y,R-14,PI*1.12,PI*1.42);c.stroke();c.strokeStyle='#111'
  // face
  const ey=116;c.fillStyle='#111';c.lineWidth=5
  if(ph==0){for(const d of[-1,1])c.beginPath(),c.arc(X+d*20,ey,5.5,0,T),c.fill();c.beginPath();c.moveTo(X-8,140);c.quadraticCurveTo(X,136,X+8,140);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(X+10,ey-16);c.lineTo(X+28,ey-20);c.stroke()}
  else if(ph==1){for(const d of[-1,1]){c.fillStyle='#111';c.beginPath();c.arc(X+d*20,ey,9,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(X+d*20+3,ey-3,3.5,0,T);c.fill()}c.fillStyle='#ff8787';c.beginPath();c.moveTo(X-16,134);c.quadraticCurveTo(X,162,X+16,134);c.closePath();c.fill();c.stroke()}
  else if(ph==2){for(const d of[-1,1])c.beginPath(),c.arc(X+d*20,ey,7,0,T),c.fill();c.beginPath();c.moveTo(X-12,144);for(let k=1;k<=4;k++)c.lineTo(X-12+k*6,144+(k%2?-4:0));c.stroke()}
  else{for(const d of[-1,1])c.beginPath(),c.arc(X+d*20,ey+2,4,0,T),c.fill();c.lineWidth=4;c.beginPath();c.moveTo(X-10,144);c.lineTo(X+10,144);c.stroke()}
  c.restore()
  // the idea, then the lack of it
  if(ph==1){const s=pop((i-3)/2);c.save();c.translate(X,46);c.scale(s,s);txt(c,'!',0,-36,6,'#ffd43b',9);c.restore()}
  if(ph==3){const s=pop((i-17)/2);c.save();c.translate(X+56,48);c.rotate(.15);c.scale(s,s);txt(c,'?',0,-21,6.4,'#fff',9);c.restore()}
  // smoke puff
  if(i>=15&&i<22){const q=(i-15)/7;c.fillStyle='#ced4da';c.lineWidth=5;for(let k=0;k<3;k++){const r=(8+k*3)*(1-q*.4),x=X-24+sin(q*6+k*2)*8,y=60-q*40-k*14;if(q*3>k){c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}}}
}

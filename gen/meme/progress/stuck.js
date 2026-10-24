// progress bar stuck at 99%, the green fill gritting its teeth and straining at the last bit while the time left keeps getting longer
const{sin,PI,max,min}=Math,T=2*PI
export const frames=24,delay=Array(24).fill(90),rim=4
const G={9:'M4 2Q4 0 2 0Q0 0 0 2Q0 3.7 2 3.7Q4 3.7 4 2L4 4Q4 6 2 6Q.9 6 .3 5.3','%':'M4 0L0 6M1 0Q0 0 0 1Q0 2 1 2Q2 2 2 1Q2 0 1 0M3 4Q2 4 2 5Q2 6 3 6Q4 6 4 5Q4 4 3 4',1:'M.8 1.2L2.2 0L2.2 6',4:'M3 6L3 0L0 4.2L4 4.2',3:'M.2 .6Q.9 0 2 0Q3.8 0 3.8 1.5Q3.8 3 1.8 3Q4 3 4 4.5Q4 6 2 6Q.8 6 0 5.3',S:'M3.8 .9Q3.1 0 2 0Q.2 0 .2 1.5Q.2 2.8 2 3Q3.9 3.2 3.9 4.5Q3.9 6 2 6Q.7 6 0 5.1',E:'M4 0L0 0L0 6L4 6M0 3L3.2 3',C:'M4 .9Q3.3 0 2.1 0Q0 0 0 3Q0 6 2.1 6Q3.3 6 4 5.1',M:'M0 6L0 0L2 3.6L4 0L4 6',I:'M2 0L2 6M.8 0L3.2 0M.8 6L3.2 6',N:'M0 6L0 0L4 6L4 0',H:'M0 0L0 6M4 0L4 6M0 3L4 3',R:'M0 6L0 0L2.3 0Q4 0 4 1.7Q4 3.4 2.3 3.4L0 3.4M2 3.4L4 6',D:'M0 0L0 6L1.7 6Q4 6 4 3Q4 0 1.7 0L0 0',A:'M0 6L2 0L4 6M.7 4L3.3 4',Y:'M0 0L2 3L4 0M2 3L2 6',L:'M0 0L0 6L4 6',F:'M4 0L0 0L0 6M0 3L3.2 3',T:'M0 0L4 0M2 0L2 6'}
const txt=(c,s,x,y,k,col,w)=>{
  const a=5.4*k,W=s.length*a-1.4*k;c.beginPath()
  ;[...s].forEach((ch,j)=>{const ox=x-W/2+j*a;for(const[,o,q]of(G[ch]||'').matchAll(/([MLQ])([^MLQ]*)/g)){const n=q.trim().split(/[ ,]+/).map((v,m)=>m%2?y+v*k:ox+v*k);o=='M'?c.moveTo(...n):o=='L'?c.lineTo(...n):c.quadraticCurveTo(...n)}})
  for(const[l,s]of[[w+6,'#111'],[w,col]])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111'
}
const LEFT=['1 SEC LEFT','4 MIN LEFT','3 HRS LEFT','9 DAYS LEFT'],BX=34,BW=188,BY=116,BH=46
export default(c,t,i)=>{
  const ph=t*4%1,st=sin(PI*min(1,ph/.8))**2,n=i%2?1:-1,sh=st>.5?n:0,fw=BW*(.9+.085*st)
  c.save();c.translate(sh,0)
  c.fillStyle='#fff';c.beginPath();c.roundRect(14,46,228,170,18);c.fill();c.stroke()
  txt(c,'99%',128,60,6,'#fff',6)
  // track, striped fill with a face at the front pushing
  c.fillStyle='#e9ecef';c.beginPath();c.roundRect(BX,BY,BW,BH,10);c.fill()
  c.save();c.beginPath();c.roundRect(BX,BY,fw,BH,10);c.clip();c.fillStyle='#40c057';c.fillRect(BX,BY,fw,BH)
  c.fillStyle='#69db7c';for(let x=BX-40+(t*4*24)%24;x<BX+fw;x+=24)c.beginPath(),c.moveTo(x,BY+BH),c.lineTo(x+12,BY+BH),c.lineTo(x+30,BY),c.lineTo(x+18,BY),c.fill()
  c.restore();c.lineWidth=5;c.beginPath();c.roundRect(BX,BY,fw,BH,10);c.stroke()
  c.lineWidth=7;c.beginPath();c.roundRect(BX,BY,BW,BH,10);c.stroke()
  const fx=BX+fw-26,fy=BY+BH/2
  c.lineWidth=4;c.fillStyle='#111'
  if(st>.4){for(const d of[-1,1])c.beginPath(),c.moveTo(fx+d*13,fy-13),c.lineTo(fx+d*5,fy-8),c.lineTo(fx+d*13,fy-3),c.stroke()
    c.fillStyle='#fff';c.beginPath();c.roundRect(fx-10,fy+2,20,11,3);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(fx-3,fy+2);c.lineTo(fx-3,fy+13);c.moveTo(fx+4,fy+2);c.lineTo(fx+4,fy+13);c.moveTo(fx-10,fy+7.5);c.lineTo(fx+10,fy+7.5);c.stroke()}
  else{for(const d of[-1,1])c.beginPath(),c.arc(fx+d*8,fy-5,3.5,0,T),c.fill();c.beginPath();c.arc(fx,fy+11,5,PI*1.15,PI*1.85);c.stroke()}
  // time left, longer every push
  txt(c,LEFT[t*4|0],128,180,2.6,'#ffd43b',3.5)
  c.restore()
  // sweat flying off
  if(st>.3){c.fillStyle='#74c0fc';c.lineWidth=4;for(const[x,y,d,z]of[[236,52,1,1.3],[20,60,-1,1]]){const p=st,sx=x+d*p*8,sy=y-p*10;c.save();c.translate(sx,sy);c.rotate(d*.5);c.scale(z,z);c.beginPath();c.moveTo(0,-12);c.quadraticCurveTo(8,0,0,5);c.quadraticCurveTo(-8,0,0,-12);c.fill();c.stroke();c.restore()}}
}

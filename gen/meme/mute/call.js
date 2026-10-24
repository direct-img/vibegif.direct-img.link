// video call tile where someone is passionately going "blah blah blah" and wagging a finger, while their red muted mic pulses in the corner
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=16,delay=Array(16).fill(85),rim=4
const G={B:'M0 3L0 0L2.3 0Q3.7 0 3.7 1.5Q3.7 3 2.3 3L0 3L0 6L2.5 6Q4 6 4 4.5Q4 3 2.3 3',L:'M0 0L0 6L4 6',A:'M0 6L2 0L4 6M.7 4L3.3 4',H:'M0 0L0 6M4 0L4 6M0 3L4 3'}
const txt=(c,s,x,y,k,w)=>{
  const a=5.4*k,W=s.length*a-1.4*k;c.beginPath()
  ;[...s].forEach((ch,j)=>{const ox=x-W/2+j*a;for(const[,o,q]of(G[ch]||'').matchAll(/([MLQ])([^MLQ]*)/g)){const n=q.trim().split(/[ ,]+/).map((v,m)=>m%2?y+v*k:ox+v*k);o=='M'?c.moveTo(...n):o=='L'?c.lineTo(...n):c.quadraticCurveTo(...n)}})
  c.lineWidth=w;c.stroke()
}
const BG='#343a40',SK='#ffd8b5',HA='#5c3a21',SH='#20c997',HX=156,HY=122
export default(c,t,i)=>{
  const m=[.2,1,.5,.9,.1,.8,.4,1][i%8],nod=[0,2,0,-1][i%4],ch=sin(T*t*4)
  c.fillStyle=BG;c.beginPath();c.roundRect(8,22,240,206,20);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(8,22,240,206,20);c.clip()
  // shoulders and shirt
  c.fillStyle=SH;c.beginPath();c.moveTo(78,232);c.quadraticCurveTo(80,182,120,176);c.lineTo(192,176);c.quadraticCurveTo(232,182,236,232);c.fill();c.stroke()
  c.fillStyle=SK;c.lineWidth=6;c.beginPath();c.moveTo(144,160);c.lineTo(144,180);c.quadraticCurveTo(156,190,168,180);c.lineTo(168,160);c.fill();c.stroke()
  // chopping hand
  const hx=222,hy=168-ch*16
  c.fillStyle=SH;c.lineWidth=7;c.beginPath();c.moveTo(214,232);c.lineTo(hx-6,hy+26);c.lineTo(hx+14,hy+30);c.lineTo(242,232);c.fill();c.stroke()
  c.fillStyle=SK;c.save();c.translate(hx,hy);c.rotate(-.2+ch*.25);c.lineWidth=6;c.beginPath();c.roundRect(-4,-46,13,40,6.5);c.fill();c.stroke();c.lineWidth=7;c.beginPath();c.roundRect(-16,-14,34,32,12);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(-10,-2);c.lineTo(6,-2);c.moveTo(-10,8);c.lineTo(8,8);c.stroke();c.restore()
  c.restore()
  // head
  c.save();c.translate(0,nod);c.fillStyle=SK;c.lineWidth=7;c.beginPath();c.arc(HX,HY,38,0,T);c.fill();c.stroke()
  c.fillStyle=HA;c.beginPath();c.moveTo(HX-40,HY-2);c.quadraticCurveTo(HX-44,HY-44,HX,HY-44);c.quadraticCurveTo(HX+44,HY-44,HX+40,HY-2);c.quadraticCurveTo(HX+28,HY-26,HX+4,HY-24);c.quadraticCurveTo(HX-26,HY-22,HX-40,HY-2);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(HX+d*14,HY+2,4.5,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(HX+d*8,HY-10-m*3+d*2),c.lineTo(HX+d*21,HY-12-m*3-d*2),c.stroke()
  c.fillStyle='#c92a2a';c.lineWidth=4;c.beginPath();c.ellipse(HX,HY+20,9,2+m*8,0,0,T);c.fill();c.stroke()
  c.restore()
  // speech bubble filling up with blah
  const n=min(4,1+(t*5|0))
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(96,92);c.lineTo(122,118);c.lineTo(84,96);c.fill();c.stroke()
  c.beginPath();c.roundRect(14,34,118,66,16);c.fill();c.stroke()
  c.beginPath();c.moveTo(94,94);c.lineTo(110,108);c.lineTo(86,96);c.fill()
  c.strokeStyle='#111';for(let k=0;k<n;k++)txt(c,'BLAH',k%2?102:44,k<2?44:70,2,4.5)
  // muted mic, pulsing
  const MX=46,MY=192,p=t*2%1
  c.strokeStyle='#ff8787';c.lineWidth=7*(1-p)+1;c.beginPath();c.arc(MX,MY,26+p*18,0,T);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fa5252';c.lineWidth=6;c.beginPath();c.arc(MX,MY,26,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(MX-6,MY-16,12,20,6);c.fill();c.beginPath();c.arc(MX,MY-4,11,.1*PI,.9*PI);c.moveTo(MX,MY+7);c.lineTo(MX,MY+14);c.moveTo(MX-6,MY+14);c.lineTo(MX+6,MY+14);c.stroke()
  c.strokeStyle='#fa5252';c.lineWidth=9;c.beginPath();c.moveTo(MX-15,MY-15);c.lineTo(MX+15,MY+15);c.stroke();c.strokeStyle='#fff';c.lineWidth=4;c.stroke();c.strokeStyle='#111'
}

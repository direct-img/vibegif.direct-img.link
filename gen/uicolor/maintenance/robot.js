// little robot cranking a bolt on its own chest with a big wrench, tongue out in concentration, sparks popping, gears turning on its head
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=90
const M='#ced4da',MD='#adb5bd',SC='#e7f5ff',G='#ffd43b',G2='#ffa94d',WR='#868e96',BL='#ffa8a8',RD='#ff6b6b',GN='#51cf66'
const gear=(c,x,y,r,n,a,col)=>{
  c.fillStyle=col;c.lineWidth=5;c.beginPath()
  for(let k=0;k<n;k++){const b=a+k*T/n,w=T/n/4;for(const[d,R]of[[-2*w,r],[-w*.8,r+8],[w*.8,r+8],[2*w,r]])c.lineTo(x+cos(b+d)*R,y+sin(b+d)*R)}
  c.closePath();c.fill();c.stroke();c.fillStyle=M;c.beginPath();c.arc(x,y,r*.42,0,T);c.fill();c.stroke()
}
const star=(c,x,y,s)=>{c.fillStyle=G;c.lineWidth=3.5;c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t,i)=>{
  const ph=(t*2)%1,q=ph<.6?ph/.6:1-(ph-.6)/.4,th=.15+.7*(q*q*(3-2*q)),ga=t*T/2,bx=156,by=184
  const hx=bx+68*cos(th),hy=by+68*sin(th)
  c.fillStyle=MD;c.beginPath();c.roundRect(122,48,12,20,4);c.fill();c.stroke()
  gear(c,128,38,17,10,ga,G);gear(c,165,22,10,6,-ga*10/6+.3,G2)
  c.lineWidth=7;c.fillStyle=M
  for(const x of[100,140]){c.beginPath();c.roundRect(x,206,18,26,6);c.fill();c.stroke()}
  for(const x of[90,134]){c.beginPath();c.roundRect(x,226,34,14,7);c.fill();c.stroke()}
  for(const[lw,s]of[[20,'#111'],[10,M]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(84,166),c.quadraticCurveTo(56,176,62,204),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=M;c.beginPath();c.arc(62,206,11,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=M;c.beginPath();c.roundRect(78,150,100,64,16);c.fill();c.stroke()
  c.fillStyle=MD;c.lineWidth=5;c.beginPath();c.roundRect(90,162,40,40,8);c.fill();c.stroke()
  for(const[x,y,col,on]of[[102,174,RD,i%4<2],[118,174,GN,i%4>=2],[102,190,G,i%8<4],[118,190,'#4dabf7',i%8>=4]]){c.fillStyle=on?col:'#868e96';c.lineWidth=3;c.beginPath();c.arc(x,y,5,0,T);c.fill();c.stroke()}
  c.lineWidth=7;c.fillStyle=MD;c.beginPath();c.rect(114,140,28,14);c.fill();c.stroke()
  c.fillStyle=M;for(const x of[58,198]){c.beginPath();c.roundRect(x-8,88,16,30,6);c.fill();c.stroke()}
  c.beginPath();c.roundRect(62,62,132,82,22);c.fill();c.stroke()
  c.fillStyle=SC;c.lineWidth=5;c.beginPath();c.roundRect(78,76,100,56,14);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(144,100,5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(142,97,2.2,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(105,94);c.lineTo(115,101);c.lineTo(105,108);c.stroke()
  c.fillStyle=BL;for(const x of[96,160])c.beginPath(),c.ellipse(x,116,7,4,0,0,T),c.fill()
  c.beginPath();c.moveTo(118,116);c.quadraticCurveTo(128,121,140,114);c.stroke()
  c.fillStyle='#ff8787';c.lineWidth=3.5;c.beginPath();c.ellipse(136,121,5,6,-.4,0,PI);c.fill();c.stroke()
  c.save();c.translate(bx,by);c.rotate(th)
  c.fillStyle=WR;c.lineWidth=6;c.beginPath();c.roundRect(10,-8,62,16,8);c.fill();c.stroke();c.fillStyle=RD;c.beginPath();c.roundRect(34,-9,40,18,9);c.fill();c.stroke();c.fillStyle=WR
  c.beginPath();c.arc(0,0,17,0,T);c.fill();c.stroke()
  c.fillStyle=G;c.lineWidth=4;c.beginPath();for(let k=0;k<6;k++)c.lineTo(cos(k*PI/3)*9,sin(k*PI/3)*9);c.closePath();c.fill();c.stroke()
  c.restore()
  for(const[lw,s]of[[20,'#111'],[10,M]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(174,166),c.quadraticCurveTo(212,160,hx,hy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=M;c.beginPath();c.arc(hx,hy,12,0,T);c.fill();c.stroke()
  const sp=ph>.6?(ph-.6)/.4:ph<.1?1+ph/.1:0
  if(sp>0&&sp<2){const s=sp<1?sp:2-sp;for(const[a,d]of[[-2.4,30],[-1.6,34],[-.8,28]])star(c,bx+cos(a)*d,by-6+sin(a)*d,3+6*s)}
}

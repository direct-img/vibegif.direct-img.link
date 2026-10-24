// two hands creak open a wallet: empty slots, a cobweb, and a moth flutters out in a puff of dust before it snaps shut again
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=32,delay=80,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),lp=(a,b,u)=>a+(b-a)*u
const BG='#e5dbff',LE='#a0522d',LD='#7a3b1c',LI='#c8794a',IN='#5e2e14',SKIN='#ffd3b0',SL='#748ffc'
const Y0=90,H=96,W=100
const moth=(c,x,y,f,a)=>{c.save();c.translate(x,y);c.rotate(a);c.strokeStyle='#111';c.lineWidth=3.5
  for(const d of[-1,1]){c.save();c.scale(d,f);c.fillStyle='#e6d5b8';c.beginPath();c.moveTo(0,-2);c.quadraticCurveTo(14,-20,22,-8);c.quadraticCurveTo(18,0,0,2);c.fill();c.stroke();c.fillStyle='#c9ad85';c.beginPath();c.moveTo(0,2);c.quadraticCurveTo(14,4,14,12);c.quadraticCurveTo(6,14,0,4);c.fill();c.stroke();c.fillStyle='#8d6e4a';c.beginPath();c.arc(13,-8,2.5,0,T);c.fill();c.restore()}
  c.fillStyle='#a1845c';c.beginPath();c.ellipse(0,2,4.5,9,0,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const d of[-1,1])c.moveTo(0,-6),c.quadraticCurveTo(d*3,-14,d*8,-15);c.stroke();c.restore()}
const hand=(c,x,y,d)=>{
  for(const[w,s]of[[34,'#111'],[24,SL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x+d*14,262),c.lineTo(x+d*6,y+50),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(x,y+30,20,26,d*.2,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(x-d*6,y,9,20,-d*.25,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(x-d*9,y-12);c.lineTo(x-d*3,y-12);c.stroke()}
export default(c,t,i)=>{
  const o=io((t-.1)/.18)-io((t-.86)/.1),th=PI*o,sx=lp(78,128,o),cw=W*cos(th),sh=t>.74&&t<.86?1.5*sin(i*3):0,sy=sh
  const m=cl((t-.26)/.6),dust=cl((t-.24)/.2)
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=BG;c.fill();c.clip()
  c.save();c.translate(0,sy)
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=LE;c.beginPath();c.roundRect(sx,Y0,W,H,[0,10,10,0]);c.fill();c.stroke()
  if(o>.5){
    c.fillStyle=LI;c.beginPath();c.roundRect(sx+6,Y0+6,W-12,H-12,6);c.fill()
    c.fillStyle=IN;c.beginPath();c.roundRect(sx+10,Y0+18,W-20,10,4);c.fill()
    c.strokeStyle=LD;c.lineWidth=3;c.setLineDash([5,5]);c.beginPath();c.roundRect(sx+6,Y0+6,W-12,H-12,6);c.stroke();c.setLineDash([])
    c.strokeStyle='#f1f3f5';c.lineWidth=2.2;const cx=sx+W-8,cy=Y0+8;c.beginPath();for(let k=0;k<5;k++){const a=PI/2+k*PI/8;c.moveTo(cx,cy);c.lineTo(cx+46*cos(a+PI/2),cy+46*sin(a+PI/2))}for(const r of[14,26,38]){for(let k=0;k<5;k++){const a=PI+k*PI/8;const b=a+PI/8;k?0:c.moveTo(cx+r*cos(a),cy+r*sin(a));if(k<4)c.quadraticCurveTo(cx+r*.8*cos(a+PI/16),cy+r*.8*sin(a+PI/16),cx+r*cos(b),cy+r*sin(b))}}c.stroke()
  }
  const L=abs(cw)
  c.strokeStyle='#111';c.lineWidth=6
  if(cw>=0){c.fillStyle=LE;c.beginPath();c.roundRect(sx,Y0-2,max(L,2),H+4,[0,10,10,0]);c.fill();c.stroke()
    if(L>30){c.strokeStyle=LD;c.lineWidth=3;c.setLineDash([5,5]);c.beginPath();c.roundRect(sx+6,Y0+5,L-12,H-10,6);c.stroke();c.setLineDash([])}}
  else{c.fillStyle=LI;c.beginPath();c.roundRect(sx-L,Y0-2,L,H+4,[10,0,0,10]);c.fill();c.stroke()
    if(L>30){c.fillStyle=LE;c.lineWidth=4;for(const y of[16,40,64]){c.beginPath();c.roundRect(sx-L+8,Y0+y,L-16,18,3);c.fill();c.stroke()}}}
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(sx,Y0-2);c.lineTo(sx,Y0+H+2);c.stroke()
  hand(c,lp(sx+4,sx-W+4,o),Y0+H-24,-1);hand(c,sx+W-4,Y0+H-24,1)
  c.restore()
  if(dust>0&&dust<1){c.strokeStyle='#111';c.lineWidth=3;for(let k=0;k<6;k++){const a=-PI*(.1+.8*k/5),r=20+56*dust,x=sx+W/2+r*cos(a),y=Y0+24+r*sin(a)*.8,z=12*(1-dust)+3;c.fillStyle='#dee2e6';c.beginPath();c.arc(x,y,z,0,T);c.fill();c.stroke()}}
  if(m>0&&m<1){const h=cl((m-.2)/.65),q=T*h*2,x=m<.2?lp(sx+W/2,150,io(m/.2)):m<.85?150+44*sin(q):lp(150,280,io((m-.85)/.15)),y=m<.2?lp(Y0+22,50,io(m/.2)):m<.85?50+12*sin(2*q):lp(50,10,(m-.85)/.15);c.save();c.translate(x,y);c.scale(1.5,1.5);moth(c,0,0,i%2?1:.3,.4*sin(T*m*2));c.restore()}
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}

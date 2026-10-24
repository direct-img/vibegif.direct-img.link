// blue vault with its gold wheel spun hard by a straining face, then jammed and rattling, locked tight as a padlock badge pops up
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=85
const BX='#4dabf7',DR='#ced4da',DRD='#adb5bd',G='#ffd43b',GD='#fab005',BL='#ffa8a8',SH='#868e96'
const ease=u=>u*u*(3-2*u)
export default(c,t)=>{
  const sp=t<.5,u=sp?ease(t/.5):1,rt=(t-.5)*2,rat=sp?0:.14*sin(T*rt*4)*(1-rt),ang=u*T/3+rat,sh=sp?0:2.5*sin(T*rt*8)*(1-rt)
  const pop=t<.5?0:t<.6?ease((t-.5)/.1)*1.2:t<.68?1.2-.2*ease((t-.6)/.08):t<.9?1:1-ease((t-.9)/.1)
  c.fillStyle=SH;for(const x of[38,182])c.beginPath(),c.roundRect(x,220,36,18,6),c.fill(),c.stroke()
  c.fillStyle=BX;c.beginPath();c.roundRect(16,16,224,208,28);c.fill();c.stroke()
  c.fillStyle=SH;for(const y of[64,170])c.beginPath(),c.roundRect(28,y-14,20,28,6),c.fill(),c.stroke()
  c.translate(sh,0)
  c.fillStyle=DRD;for(const a of[-.35,.35])c.beginPath(),c.roundRect(200,118+a*90-7,30,14,5),c.fill(),c.stroke()
  c.fillStyle=DR;c.beginPath();c.arc(128,120,90,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=DRD;c.beginPath();c.arc(128,120,72,0,T);c.fill();c.stroke()
  c.fillStyle=DR;for(let k=0;k<8;k++){const a=k*PI/4+PI/8;c.beginPath();c.arc(128+cos(a)*81,120+sin(a)*81,4.5,0,T);c.fill();c.lineWidth=3;c.stroke()}
  c.save();c.translate(128,120);c.rotate(ang)
  for(const[w,s]of[[14,'#111'],[6,GD]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(0,0,46,0,T),c.stroke()
  for(let k=0;k<6;k++){c.rotate(PI/3);for(const[w,s]of[[13,'#111'],[5,GD]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(24,0),c.lineTo(58,0),c.stroke();c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=G;c.beginPath();c.arc(62,0,9,0,T);c.fill();c.stroke()}
  c.restore()
  c.lineWidth=6;c.fillStyle=G;c.beginPath();c.arc(128,120,28,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(116,108,5,3,-.6,0,T);c.fill()
  c.lineWidth=3.5;c.fillStyle='#111'
  if(sp){
    for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*15,114),c.lineTo(128+d*7,118),c.lineTo(128+d*15,122),c.stroke()
    c.beginPath();c.moveTo(119,130);for(let k=1;k<=6;k++)c.lineTo(119+k*3,130+(k%2?-2.5:0));c.stroke()
  }else{
    for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*10,117,3.5,4.5,0,0,T),c.fill()
    c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*15,108),c.lineTo(128+d*5,111),c.stroke()
    c.beginPath();c.moveTo(120,128);c.quadraticCurveTo(128,132,137,125);c.stroke()
  }
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*17,127,4.5,2.5,0,0,T),c.fill()
  c.translate(-sh,0)
  if(pop>.02){
    c.save();c.translate(206,52);c.scale(pop,pop);c.rotate(.15*sin(T*rt*2))
    for(const[w,s]of[[16,'#111'],[7,DR]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(0,-8,14,PI,0),c.lineTo(14,4),c.moveTo(-14,4),c.lineTo(-14,-8),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=G;c.beginPath();c.roundRect(-24,-2,48,38,9);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(0,12,5,0,T);c.fill();c.beginPath();c.moveTo(-3,13);c.lineTo(3,13);c.lineTo(4,26);c.lineTo(-4,26);c.closePath();c.fill()
    c.restore()
  }
}

// fire truck rumbling along with its siren flashing red and blue, ladder bobbing, wheels turning, road dashes rolling past
const{sin,cos,PI,abs,round}=Math,T=2*PI
export const frames=16,delay=70
const RD='#ff6b6b',RDD='#e03131',WIN='#a5d8ff',TIRE='#343a40',HUB='#ced4da',LAD='#dee2e6',SB='#4dabf7',SR='#fa5252',G='#ffd43b',BL='#ffa8a8'
export default(c,t,i)=>{
  const b=-round(3*abs(sin(2*T*t))),rot=t*T,red=(i>>1)%2==0,la=-.05-.04*sin(2*T*t+1)
  c.fillStyle='#868e96';c.beginPath();c.roundRect(4,214,248,22,11);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(10,214,236,22);c.clip()
  for(let k=-1;k<5;k++){const x=k*64-((t*128)%64)+20;c.fillStyle='#fff';c.beginPath();c.roundRect(x,222,30,6,3);c.fill()}
  c.restore()
  c.translate(0,b)
  c.save();c.translate(34,104);c.rotate(la)
  for(const[w,s]of[[11,'#111'],[4,LAD]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.lineTo(136,0),c.moveTo(0,-14),c.lineTo(136,-14),c.stroke()
  c.lineWidth=4;c.strokeStyle='#111';c.beginPath();for(let x=12;x<136;x+=16)c.moveTo(x,0),c.lineTo(x,-14);c.stroke()
  c.restore();c.lineWidth=7
  c.fillStyle=RD;c.beginPath();c.roundRect(24,108,144,76,8);c.fill();c.stroke()
  c.beginPath();c.moveTo(160,184);c.lineTo(160,96);c.quadraticCurveTo(160,86,170,86);c.lineTo(204,86);c.quadraticCurveTo(214,86,220,96);c.lineTo(232,128);c.lineTo(232,184);c.closePath();c.fill();c.stroke()
  c.fillStyle=WIN;c.lineWidth=5;c.beginPath();c.moveTo(174,98);c.lineTo(206,98);c.lineTo(218,126);c.lineTo(174,126);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(184,108,3,7,.4,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(24,150,208,10);c.fill();c.beginPath();c.moveTo(24,150);c.lineTo(232,150);c.moveTo(24,160);c.lineTo(232,160);c.stroke()
  c.lineWidth=5;c.beginPath();for(const x of[72,120])c.moveTo(x,116),c.lineTo(x,146);c.moveTo(166,134);c.lineTo(166,180);c.stroke()
  c.fillStyle=G;c.beginPath();c.arc(48,130,13,0,T);c.fill();c.stroke();c.beginPath();c.arc(48,130,5,0,T);c.stroke()
  c.fillStyle=G;c.lineWidth=5;c.beginPath();c.roundRect(222,132,14,12,4);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(206,140,4,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(198,170,7,4,0,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(214,166,6,.2*PI,.8*PI);c.stroke()
  c.lineWidth=5;c.fillStyle='#ced4da';c.beginPath();c.roundRect(176,76,32,10,4);c.fill();c.stroke()
  for(const[d,on,col,dim]of[[-1,red,SR,'#c92a2a'],[1,!red,SB,'#1c7ed6']]){
    c.fillStyle=on?col:dim;c.beginPath();c.moveTo(192,76);c.arc(192,76,14,d<0?PI:PI*1.5,d<0?PI*1.5:0);c.closePath();c.fill();c.stroke()
    if(on)for(const a of[-.5,-.15,.2].map(v=>d<0?PI+v+.35:-v-.35))for(const[w,s]of[[9,'#111'],[4,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(192+cos(a)*22,76+sin(a)*22),c.lineTo(192+cos(a)*34,76+sin(a)*34),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5
  }
  c.fillStyle='#fff';c.beginPath();c.ellipse(187,69,2.5,4,-.5,0,T);c.fill()
  for(const x of[64,112,196]){
    c.lineWidth=7;c.fillStyle=TIRE;c.beginPath();c.arc(x,190,22,0,T);c.fill();c.stroke()
    c.fillStyle=HUB;c.beginPath();c.arc(x,190,10,0,T);c.fill();c.lineWidth=4;c.stroke()
    for(let k=0;k<4;k++){const a=rot+k*PI/2;c.beginPath();c.moveTo(x+cos(a)*4,190+sin(a)*4);c.lineTo(x+cos(a)*9,190+sin(a)*9);c.stroke()}
  }
}

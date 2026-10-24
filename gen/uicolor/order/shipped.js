// delivery truck driving along with a smiling parcel hopping on its flatbed, wheels turning, road dashes and speed lines rushing past
const{sin,cos,PI,abs,round,max}=Math,T=2*PI
export const frames=16,delay=60
const CAB='#4dabf7',CABD='#339af0',WIN='#e7f5ff',TIRE='#343a40',HUB='#ced4da',BED='#868e96',BX='#f0b878',BXD='#d99a5a',TAPE='#ffe8cc',BL='#ffa8a8'
export default(c,t)=>{
  const b=-round(3*abs(sin(2*T*t))),h=-round(7*max(0,sin(2*T*t-.8))),tl=.05*max(0,sin(2*T*t-.8)),rot=t*T
  c.fillStyle='#868e96';c.beginPath();c.roundRect(8,214,240,22,11);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(14,214,228,22);c.clip()
  for(let k=-1;k<5;k++){const x=k*64-((t*128)%64)+20;c.fillStyle='#fff';c.beginPath();c.roundRect(x,222,30,6,3);c.fill()}
  c.restore()
  for(const[y,o,l]of[[92,0,30],[122,.5,22],[150,.25,28]]){const p=(t*2+o)%1,x=40-p*28;if(p<.85)for(const[w,s]of[[9,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(x-l*(1-p),y),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
  c.translate(0,b)
  c.fillStyle=BED;c.beginPath();c.roundRect(34,166,136,22,6);c.fill();c.stroke()
  c.save();c.translate(104,166+h);c.rotate(-tl)
  c.fillStyle=BX;c.beginPath();c.roundRect(-58,-92,116,92,6);c.fill()
  c.fillStyle=BXD;c.fillRect(-58,-92,116,14)
  c.fillStyle=TAPE;c.fillRect(-14,-92,28,36)
  c.lineWidth=4;c.beginPath();c.moveTo(-14,-92);c.lineTo(-14,-56);c.lineTo(14,-56);c.lineTo(14,-92);c.moveTo(-58,-78);c.lineTo(-14,-78);c.moveTo(14,-78);c.lineTo(58,-78);c.stroke()
  c.lineWidth=7;c.beginPath();c.roundRect(-58,-92,116,92,6);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*20,-36,5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*20-2,-38,1.8,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(0,-30,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*36,-24,7,4,0,0,T),c.fill()
  c.restore()
  c.lineWidth=7;c.fillStyle=CAB;c.beginPath();c.moveTo(164,188);c.lineTo(164,98);c.quadraticCurveTo(164,88,174,88);c.lineTo(202,88);c.quadraticCurveTo(212,88,218,98);c.lineTo(232,130);c.lineTo(232,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=WIN;c.lineWidth=5;c.beginPath();c.moveTo(178,100);c.lineTo(204,100);c.lineTo(218,128);c.lineTo(178,128);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(188,110,3,7,.4,0,T);c.fill()
  c.fillStyle=CABD;c.beginPath();c.rect(164,160,68,10);c.fill();c.beginPath();c.moveTo(164,160);c.lineTo(232,160);c.moveTo(164,170);c.lineTo(232,170);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(184,140);c.lineTo(196,140);c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.roundRect(222,134,14,14,4);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(210,144,4,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(202,178,6,3.5,0,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(216,174,6,.2*PI,.8*PI);c.stroke()
  c.translate(0,-b)
  for(const x of[78,196]){
    c.lineWidth=7;c.fillStyle=TIRE;c.beginPath();c.arc(x,194,22,0,T);c.fill();c.stroke()
    c.fillStyle=HUB;c.beginPath();c.arc(x,194,10,0,T);c.fill();c.lineWidth=4;c.stroke()
    for(let k=0;k<4;k++){const a=rot+k*PI/2;c.beginPath();c.moveTo(x+cos(a)*4,194+sin(a)*4);c.lineTo(x+cos(a)*9,194+sin(a)*9);c.stroke()}
  }
}

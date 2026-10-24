// alarmed red siren on a hazard-striped base, its light spinning inside the dome, sweeping beams side to side and flashing bright when it faces you
const{sin,cos,PI,max,abs,sign}=Math,T=2*PI
export const frames=20,delay=50
const RD='#fa5252',RB='#ff8787',GL='#fff3bf',BM='#ffc9c9',HZ='#ffd43b',KN='#868e96'
const dome=c=>{c.beginPath();c.moveTo(66,186);c.lineTo(66,124);c.arc(128,124,62,PI,0);c.lineTo(190,186);c.closePath()}
export default(c,t)=>{
  const a=2*T*t,s=sin(a),k=cos(a),I=max(0,abs(s)-.25)/.75,fr=k>.55
  if(I>0){const d=sign(s);c.fillStyle=BM;c.lineWidth=5;c.beginPath();c.moveTo(128+d*48,112);c.lineTo(128+d*112,124-60*I);c.lineTo(128+d*112,124+60*I);c.lineTo(128+d*48,140);c.closePath();c.fill();c.stroke()}
  if(fr)for(const r of[-.84,-.67,-.5,-.33,-.16]){const b=r*PI,l=14+10*(k-.55)/.45;for(const[w,st]of[[11,'#111'],[5,HZ]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(128+cos(b)*80,124+sin(b)*80),c.lineTo(128+cos(b)*(80+l),124+sin(b)*(80+l)),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=KN;c.beginPath();c.roundRect(114,50,28,16,6);c.fill();c.stroke()
  dome(c);c.fillStyle=fr?RB:RD;c.fill()
  c.save();dome(c);c.clip()
  if(k>0){const x=128+46*s,w=34*max(.18,k);c.fillStyle=GL;c.beginPath();c.ellipse(x,128,w,52,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.ellipse(x,128,w*.45,30,0,0,T);c.fill()}
  c.restore()
  dome(c);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,124,48,PI*1.1,PI*1.36);c.stroke();c.beginPath();c.moveTo(80,128);c.lineTo(80,150);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*22,136,11,13,0,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,138,5,0,T),c.fill()
  c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,120,11,PI*1.25,PI*1.75),c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,166,8,9,0,0,T);c.fill()
  c.lineWidth=7;c.fillStyle=HZ;c.beginPath();c.roundRect(44,182,168,44,10);c.fill()
  c.save();c.clip();c.strokeStyle='#111';c.lineWidth=12;c.beginPath();for(let x=30;x<240;x+=32)c.moveTo(x,230),c.lineTo(x+36,178);c.stroke();c.restore()
  c.beginPath();c.roundRect(44,182,168,44,10);c.stroke()
}

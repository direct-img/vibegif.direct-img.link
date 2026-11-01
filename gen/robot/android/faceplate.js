// android head facing forward: the white porcelain faceplate splits into four plates that slide apart, revealing glowing cyan camera eyes, spinning cheek gears, wires and circuitry, then closes again
export const frames=32,delay=70
const{PI,sin,cos,max,min}=Math,T=PI*2
const K=(t,k)=>{for(let j=0;j<k.length-1;j++){const[a,u]=k[j],[b,v]=k[j+1];if(t<b){const e=(1-cos(PI*(t-a)/(b-a)))/2;return u+(v-u)*e}}return k.at(-1)[1]}
const head=(c,s=1)=>{
  c.save();c.translate(128,118);c.scale(s,s);c.translate(-128,-118)
  c.beginPath();c.moveTo(128,20);c.bezierCurveTo(176,20,198,54,198,100);c.bezierCurveTo(198,146,178,176,150,194)
  c.quadraticCurveTo(128,206,106,194);c.bezierCurveTo(78,176,58,146,58,100);c.bezierCurveTo(58,54,80,20,128,20);c.closePath()
  c.restore()
}
const almond=(c,x,y,w,h)=>{c.moveTo(x-w,y);c.quadraticCurveTo(x,y-h*2,x+w,y);c.quadraticCurveTo(x,y+h*1.6,x-w,y);c.closePath()}
const gear=(c,x,y,r,n,a,f)=>{
  c.save();c.translate(x,y);c.rotate(a);c.beginPath()
  for(let k=0;k<n*2;k++){const b=k*PI/n,q=k%2?r:r*.78;c.lineTo(cos(b-.12)*q,sin(b-.12)*q);c.lineTo(cos(b+.12)*q,sin(b+.12)*q)}
  c.closePath();c.fillStyle=f;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle='#2a2f37';c.beginPath();c.arc(0,0,r*.3,0,T);c.fill();c.stroke()
  c.restore()
}
// the faceplate drawn whole; each piece clips it
const plate=(c,glow,o)=>{
  c.save();c.beginPath();c.rect(0,62,256,194);c.clip()
  head(c,.88);almond(c,104,112,19,7);almond(c,152,112,19,7)
  const g=c.createLinearGradient(70,60,190,200);g.addColorStop(0,'#ffffff');g.addColorStop(1,'#d9dfe6')
  c.fillStyle=g;c.fill('evenodd');c.lineWidth=3.5;c.stroke()
  head(c,.88);c.clip()
  c.strokeStyle='#b9c2cc';c.lineWidth=3
  for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*12,92);c.quadraticCurveTo(128+d*26,84,128+d*42,92);c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(129,116);c.quadraticCurveTo(122,136,126,142);c.lineTo(132,142);c.stroke()
  c.strokeStyle='#c99a9a';c.lineWidth=3.5;c.beginPath();c.moveTo(114,163);c.quadraticCurveTo(128,170,142,163);c.stroke()
  c.strokeStyle=o>.02?'#111':glow?'#4fe9ff':'#cdd4dc';c.lineWidth=o>.02?6:glow?2.5:1.5
  c.beginPath();c.moveTo(128,62);c.lineTo(128,198);c.moveTo(60,130);c.lineTo(196,130);c.stroke()
  c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(0,63.5);c.lineTo(256,63.5);c.stroke()
  c.restore()
}
export default(c,t)=>{
  const o=K(t,[[0,0],[.14,0],[.24,1.08],[.3,1],[.68,1],[.84,0],[1,0]]),glow=t>.08&&t<.14
  const on=K(t,[[0,0],[.16,0],[.26,1],[.7,1],[.8,0],[1,0]])
  // neck
  c.fillStyle='#4a525d';c.fillRect(108,186,40,50);c.strokeRect(108,186,40,50)
  c.lineWidth=3;for(let y=196;y<234;y+=9)c.beginPath(),c.moveTo(110,y),c.lineTo(146,y),c.stroke()
  c.fillStyle='#dfe4ea';c.lineWidth=5;c.beginPath();c.ellipse(128,238,44,10,0,0,T);c.fill();c.stroke()
  // ear modules
  for(const x of[58,198]){c.fillStyle='#cfd6de';c.lineWidth=4;c.beginPath();c.arc(x,114,13,0,T);c.fill();c.stroke()
    c.fillStyle='#3b424c';c.beginPath();c.arc(x,114,5,0,T);c.fill()}
  // shell
  head(c);c.fillStyle='#eef1f4';c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle='#c3cbd4';c.lineWidth=2.5;c.beginPath();c.moveTo(128,24);c.lineTo(128,58);c.stroke()
  c.beginPath();c.arc(128,118,80,PI*1.28,PI*1.72);c.stroke();c.strokeStyle='#111'
  // cavity under the faceplate
  c.save();c.beginPath();c.rect(0,62,256,194);c.clip();head(c,.88);c.clip()
  c.fillStyle='#20252c';c.fillRect(0,0,256,256)
  c.fillStyle='#363d47';c.beginPath();c.moveTo(118,66);c.lineTo(138,66);c.lineTo(136,190);c.lineTo(120,190);c.closePath();c.fill()
  c.strokeStyle='#d9a441';c.lineWidth=2
  for(const d of[-1,1]){
    c.beginPath();c.moveTo(128+d*14,70);c.lineTo(128+d*14,80);c.lineTo(128+d*30,88);c.lineTo(128+d*56,88);c.stroke()
    c.beginPath();c.moveTo(128+d*22,66);c.lineTo(128+d*40,76);c.lineTo(128+d*60,76);c.stroke()
    c.fillStyle='#d9a441';c.beginPath();c.arc(128+d*56,88,2.5,0,T);c.arc(128+d*60,76,2.5,0,T);c.fill()
  }
  // wires
  for(const[d,col]of[[-1,'#e0483c'],[1,'#3d8bff']]){c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(128+d*12,190);c.bezierCurveTo(128+d*14,160,128+d*58,180,128+d*56,132);c.stroke()
    c.strokeStyle=col;c.lineWidth=3;c.stroke()}
  c.strokeStyle='#111'
  // cheek gears
  const a=T*t*2
  gear(c,92,152,14,10,a,'#b9c2cc');gear(c,111,166,9,7,-a*10/7+.2,'#d9a441')
  gear(c,164,152,14,10,-a,'#b9c2cc');gear(c,145,166,9,7,a*10/7+.2,'#d9a441')
  // speaker grille
  c.fillStyle='#0d0f12';for(let k=0;k<4;k++)c.fillRect(116,174+k*5,24,2.5)
  // nose leds
  for(let k=0;k<3;k++){c.fillStyle=(t*8+k*2|0)%3==0?'#5dff8a':'#1d4a2b';c.beginPath();c.arc(128,128+k*10,3,0,T);c.fill()}
  // camera eyes
  for(const x of[104,152]){
    c.fillStyle='#5a6370';c.lineWidth=3.5;c.beginPath();c.arc(x,112,19,0,T);c.fill();c.stroke()
    c.strokeStyle='#8b96a4';c.lineWidth=2;c.setLineDash([3,3]);c.lineDashOffset=x==104?t*24:-t*24
    c.beginPath();c.arc(x,112,15,0,T);c.stroke();c.setLineDash([]);c.strokeStyle='#111'
    const r=10+on*1.5,g=c.createRadialGradient(x-2,110,0,x,112,r)
    g.addColorStop(0,'#f2feff');g.addColorStop(.25+.15*on,'#55e6ff');g.addColorStop(.8,'#0a6b86');g.addColorStop(1,'#04232c')
    c.fillStyle=g;c.beginPath();c.arc(x,112,r,0,T);c.fill();c.lineWidth=2.5;c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(x-4,108,2.2,0,T);c.fill()
  }
  // inner rim
  head(c,.88);c.lineWidth=3;c.stroke();c.beginPath();c.moveTo(0,63.5);c.lineTo(256,63.5);c.stroke()
  c.restore()
  // faceplate pieces: lower first, then upper
  for(const[sx,sy,dx,dy,rt]of[[0,130,-30,22,-.16],[128,130,30,22,.16],[0,0,-36,-14,.14],[128,0,36,-14,-.14]]){
    c.save()
    const cx=sx+(sx?30:98),cy=sy?150:96,f=o+.035*on*sin(T*2*t+sx/50+sy/40)
    c.translate(dx*f+cx,dy*f+cy);c.rotate(rt*f);c.translate(-cx,-cy)
    c.beginPath();c.rect(sx,sy,128,sy?126:130);c.clip()
    if(o>.02){
      c.save();c.translate(-4*o*Math.sign(dx),-4*o*Math.sign(dy));c.beginPath();c.rect(0,62,256,194);c.clip()
      head(c,.88);c.fillStyle='#8f99a5';c.fill();c.lineWidth=3.5;c.stroke();c.restore()
    }
    plate(c,glow,o)
    c.restore()
  }
}

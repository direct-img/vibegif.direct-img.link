// cream and red retro robot hovering on rocket boots, flickering orange flames and dripping embers below, bobbing and wobbling with arms out for balance, happy arc eyes and a swaying antenna
export const frames=20,delay=60
const P=Math.PI*2
const h=n=>{n=Math.sin(n*127.1+311.7)*43758.5453;return n-Math.floor(n)}
const flame=(c,x,y,w,L,sw)=>{
  for(const[k,col]of[[1,'#ff5a1f'],[.68,'#ffb21f'],[.38,'#fff4c2']]){
    const W=w*k,l=L*k
    c.beginPath();c.moveTo(x-W/2,y)
    c.quadraticCurveTo(x-W*.7,y+l*.55,x+sw*k,y+l)
    c.quadraticCurveTo(x+W*.7,y+l*.55,x+W/2,y)
    c.closePath();c.fillStyle=col;c.fill()
  }
}
const bar=(c,a,b,w,col)=>{
  c.beginPath();c.moveTo(...a);c.lineTo(...b)
  c.strokeStyle='#111';c.lineWidth=w+7;c.stroke();c.strokeStyle=col;c.lineWidth=w;c.stroke()
}
const dot=(c,x,y,r,f,lw=5)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle=f;c.fill();c.strokeStyle='#111';c.lineWidth=lw;c.stroke()}
const CR='#f4ecdc',SH='#d9cdb6',RD='#e2483d'
export default(c,t,i)=>{
  const s=Math.sin(P*t),by=-6*s,rot=.07*Math.sin(P*t+1.2)
  c.translate(128,124+by);c.scale(.92,.92);c.rotate(rot);c.translate(-128,-118)
  // embers falling from the jets
  for(let k=0;k<10;k++){
    const bx=k%2?150:106,u=(t*2+k/10)%1,x=bx+(h(k)-.5)*20+(h(k+9)-.5)*18*u,y=206+u*40,r=4.5*(1-u)+1
    c.fillStyle=u<.4?'#ffd23f':'#ff7a2a';c.beginPath();c.arc(x,y,r,0,P);c.fill()
  }
  // flames under the boots
  for(const[x,o]of[[106,0],[150,5]]){
    const L=36+6*Math.sin(P*t*2+o)+10*h(i*3+o),sw=6*Math.sin(P*t*3+o)+(h(i+o)-.5)*6
    flame(c,x,197,22,L,sw)
  }
  // legs and boots
  const kk=.15*Math.sin(P*t+.5)
  bar(c,[116,146],[106+8*kk,172],11,'#7d8590');bar(c,[140,146],[150-8*kk,172],11,'#7d8590')
  for(const x of[106+8*kk,150-8*kk]){
    c.beginPath();c.moveTo(x-11,190);c.lineTo(x-15,198);c.lineTo(x+15,198);c.lineTo(x+11,190);c.closePath();c.fillStyle='#4b5560';c.fill();c.lineWidth=5;c.strokeStyle='#111';c.stroke()
    c.beginPath();c.moveTo(x-12,166);c.quadraticCurveTo(x,160,x+12,166);c.lineTo(x+16,190);c.lineTo(x-16,190);c.closePath()
    c.fillStyle=RD;c.fill();c.save();c.clip();c.fillStyle='#b8352d';c.fillRect(x+6,150,14,50);c.fillStyle='#ffffff55';c.fillRect(x-20,178,40,4);c.restore();c.lineWidth=6;c.stroke()
  }
  // arms out for balance
  const aw=.18*Math.sin(P*t-.6)
  for(const sd of[-1,1]){
    const sh=[128+sd*38,92],a1=.55+aw*sd,a2=a1-.75-aw*sd*.6
    const el=[sh[0]+sd*30*Math.cos(a1),sh[1]+30*Math.sin(a1)],hd=[el[0]+sd*26*Math.cos(a2),el[1]+26*Math.sin(a2)]
    bar(c,sh,el,11,'#7d8590');bar(c,el,hd,10,'#7d8590')
    dot(c,el[0],el[1],5.5,'#4b5560',3.5)
    dot(c,hd[0],hd[1],9,RD,5)
  }
  // torso + pelvis
  c.beginPath();c.roundRect(106,138,44,16,6);c.fillStyle='#4b5560';c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.moveTo(90,86);c.lineTo(166,86);c.lineTo(160,138);c.quadraticCurveTo(158,144,152,144);c.lineTo(104,144);c.quadraticCurveTo(98,144,96,138);c.closePath()
  c.fillStyle=CR;c.fill();c.save();c.clip();c.fillStyle=SH;c.fillRect(146,80,30,70);c.restore();c.lineWidth=7;c.stroke()
  c.beginPath();c.roundRect(110,98,36,30,6);c.fillStyle='#2a3038';c.fill();c.lineWidth=4;c.stroke()
  const gl=i%10<5
  dot(c,128,113,8,gl?'#59f0ff':'#2b8fa3',3)
  dot(c,90,90,9,RD,5);dot(c,166,90,9,RD,5)
  // neck + head
  c.beginPath();c.roundRect(119,72,18,16,3);c.fillStyle='#4b5560';c.fill();c.lineWidth=5;c.stroke()
  const sway=-.25*Math.sin(P*t-.9)
  bar(c,[128,34],[128+18*Math.sin(sway),34-18*Math.cos(sway)],2.5,'#7d8590')
  dot(c,128+21*Math.sin(sway),34-21*Math.cos(sway),5.5,RD,4)
  c.beginPath();c.roundRect(98,30,60,46,16);c.fillStyle=CR;c.fill()
  c.save();c.clip();c.fillStyle=SH;c.fillRect(146,24,20,60);c.restore();c.lineWidth=7;c.stroke()
  c.beginPath();c.roundRect(106,42,44,22,10);c.fillStyle='#2a3038';c.fill();c.lineWidth=4;c.stroke()
  c.strokeStyle='#59f0ff';c.lineWidth=4
  for(const x of[118,138]){c.beginPath();c.arc(x,56,6,Math.PI*1.1,Math.PI*1.9);c.stroke()}
  c.fillStyle='#ff9a8a';for(const x of[104,152]){c.beginPath();c.arc(x,66,3,0,P);c.fill()}
}

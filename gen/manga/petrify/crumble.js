// chibi girl turns to stone from the feet up, cracks spread, she crumbles into a pile, then rewinds back together and the stone fades off
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const cl=v=>min(1,max(0,v)),rnd=k=>{const v=sin(k*127.1+311.7)*43758.5;return v-Math.floor(v)}
const XS=[50,90,128,166,206],YS=[30,64,96,128,160,192,222,250]
const pt=(a,b)=>[XS[a]+(a%4?(rnd(a*9+b)-.5)*18:0),YS[b]+(b%7?(rnd(a+b*13)-.5)*16:0)]
const girl=(c,shock)=>{
  c.lineWidth=4.5;c.fillStyle='#fff'
  c.beginPath();c.moveTo(106,140);c.lineTo(150,140);c.lineTo(170,208);c.quadraticCurveTo(128,216,86,208);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(112,140);c.quadraticCurveTo(128,156,144,140);c.lineTo(140,138);c.quadraticCurveTo(128,148,116,138);c.closePath();c.stroke()
  c.lineWidth=2;for(const x of[104,118,138,152])c.beginPath(),c.moveTo(x,186),c.lineTo(x+(x-128)*.25,209),c.stroke()
  c.lineWidth=4.5;for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*12,212);c.lineTo(128+d*12,234);c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(128+d*14,238,10,6,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.moveTo(128+d*22,146);c.quadraticCurveTo(128+d*36,170,128+d*30,190);c.lineTo(128+d*22,186);c.quadraticCurveTo(128+d*26,170,128+d*16,154);c.closePath();c.fill();c.stroke()
    c.beginPath();c.arc(128+d*27,192,6,0,T);c.fill();c.stroke()}
  c.save();c.translate(128,90);c.scale(.62,.62);c.translate(-128,-118)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,212,100,204,166);for(let k=0;k<5;k++)c.quadraticCurveTo(196-k*30,186,186-k*30-8,170+(k%2)*6);c.lineTo(52,166);c.bezierCurveTo(44,100,60,36,128,36);c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=136;c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,18,0,0,T);c.fill()
    if(shock){c.lineWidth=3.5;c.stroke()}else{c.fillStyle='#111';c.beginPath();c.ellipse(x,y+2,11,15,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,5,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2.5,0,T);c.fill()}
    c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-8);c.quadraticCurveTo(x,y-21,x+16,y-8);c.moveTo(x+d*15,y-9);c.lineTo(x+d*22,y-14);c.stroke()}
  c.lineWidth=4.5;c.beginPath();if(shock){c.fillStyle='#fff';c.ellipse(128,170,7,9,0,0,T);c.fill()}else c.arc(128,162,9,.2*PI,.8*PI);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(72,140);c.bezierCurveTo(56,74,88,36,128,36);c.bezierCurveTo(168,36,200,74,184,140);c.quadraticCurveTo(180,108,168,98);c.quadraticCurveTo(160,110,150,112)
  c.quadraticCurveTo(148,98,138,92);c.quadraticCurveTo(130,106,118,110);c.quadraticCurveTo(116,98,104,94);c.quadraticCurveTo(98,106,88,110);c.quadraticCurveTo(86,100,82,98);c.quadraticCurveTo(74,112,72,140);c.closePath();c.fill();c.stroke()
  c.lineWidth=12;c.beginPath();c.arc(128,112,62,PI*1.2,PI*1.8);c.stroke();c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(128,112,62,PI*1.3,PI*1.4);c.stroke();c.strokeStyle='#111'
  c.lineWidth=3;for(const[a,b,e,f]of[[98,52,92,84],[150,50,160,86]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+e)/2+5,(b+f)/2,e,f),c.stroke()
  c.restore()
}
export default(c,t,i)=>{
  const o=createCanvas(256,256),x=o.getContext('2d')
  Object.assign(x,{lineWidth:7,lineCap:'round',lineJoin:'round',strokeStyle:'#111',fillStyle:'#fff'})
  const ys=t<.12?250:t<.36?250-(t-.12)/.24*226:t<.9?24:24+(t-.9)/.1*226,ck=t<.32?0:t<.9?cl((t-.32)/.12):0
  const fall=t<.48?0:t<.66?(t-.48)/.18:t<.74?1:t<.9?1-(t-.74)/.16:0
  girl(x,t>=.12&&t<.9)
  if(ys<250){x.save();x.globalCompositeOperation='source-atop';x.beginPath();x.rect(0,ys,256,256);x.clip()
    x.fillStyle='rgba(17,17,17,.14)';x.fillRect(0,0,256,256);x.lineWidth=1.1;x.strokeStyle='rgba(17,17,17,.6)';x.beginPath();for(let k=-260;k<260;k+=10)x.moveTo(k,256),x.lineTo(k+256,0),x.moveTo(k,0),x.lineTo(k+256,256);x.stroke()
    x.lineWidth=4;x.strokeStyle='#111';x.lineJoin='miter';x.restore()}
  if(ck){x.save();x.globalCompositeOperation='source-atop';x.lineWidth=3;x.lineJoin='miter'
    for(const[sx,sy,n]of[[128,60,7],[96,150,5],[150,176,6],[118,214,4]]){x.beginPath();x.moveTo(sx,sy);let px=sx,py=sy;for(let k=0;k<n*ck;k++){px+=(rnd(sx+k)-.5)*30;py+=12+rnd(sy+k)*8;x.lineTo(px,py)}x.stroke()}x.restore()}
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(128,244,70,7,0,0,T);c.fill();c.stroke()
  if(!fall){c.save();c.translate(t>=.4&&t<.48?(i%2?2:-2):0,0);c.drawImage(o,0,0);c.restore();return}
  const f=fall*fall*(3-2*fall)
  for(let a=0;a<4;a++)for(let b=0;b<7;b++){
    const q=[pt(a,b),pt(a+1,b),pt(a+1,b+1),pt(a,b+1)],cx=q.reduce((s,p)=>s+p[0],0)/4,cy=q.reduce((s,p)=>s+p[1],0)/4,k=a*7+b
    const d=cl(f*1.5-(1-cy/250)*.5),ex=(cx-128)*.55+(rnd(k)-.5)*30,ey=max(0,226-cy-rnd(k+5)*18-(6-b)*2),r=(rnd(k+9)-.5)*2.4*d
    c.save();c.translate(cx+ex*d,cy+ey*d*d);c.rotate(r);c.translate(-cx,-cy);c.beginPath();q.forEach(([px,py],n)=>n?c.lineTo(px,py):c.moveTo(px,py));c.closePath();c.clip();c.drawImage(o,0,0);c.restore()}
  if(fall>.5&&t<.74){const p=(t-.57)/.17;c.fillStyle='#fff';c.lineWidth=3;for(const d of[-1,1]){const r=5+6*sin(PI*cl(p));c.beginPath();c.arc(128+d*(60+p*14),234-p*8,r,0,T);c.fill();c.stroke()}}
}

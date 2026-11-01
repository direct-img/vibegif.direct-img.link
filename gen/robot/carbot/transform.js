// little blue car transforms into a standing robot: wheels fly up to the shoulders and legs, doors swing down into arms, the cabin flips into a chest, the head pops up and the visor lights, then it folds back into the car
export const frames=40,delay=60
const P=Math.PI,G=230
const cl=k=>Math.max(0,Math.min(1,k)),ez=k=>k*k*(3-2*k),lerp=(a,b,k)=>a+(b-a)*k
const PA='#2f7de1',HI='#7ab6ff',GL='#bfe3ff',ME='#9aa5b4',DK='#3a4250'
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const panel=(c,w,h,r)=>{
  rr(c,-w/2,-h/2,w,h,r);c.fillStyle=PA;c.fill()
  c.save();c.clip();c.fillStyle=HI;c.fillRect(-w/2,-h/2,w,h*.26);c.restore()
  rr(c,-w/2,-h/2,w,h,r);c.lineWidth=4.5;c.stroke()
}
const D={
  rear(c){panel(c,64,38,7);rr(c,-31,-12,7,11,2);c.fillStyle='#ff4a4a';c.lineWidth=2.5;c.fill();c.stroke()
    c.beginPath();c.moveTo(14,-17);c.lineTo(14,17);c.lineWidth=2.5;c.stroke()},
  door(c){panel(c,60,38,4);c.lineWidth=3;c.beginPath();c.moveTo(6,-6);c.lineTo(18,-6);c.stroke()
    c.lineWidth=2;c.beginPath();c.moveTo(-26,4);c.lineTo(26,4);c.stroke()},
  hood(c){panel(c,62,34,9);rr(c,22,-11,9,10,3);c.fillStyle='#ffe27a';c.lineWidth=2.5;c.fill();c.stroke()
    c.lineWidth=2;for(const y of[5,10]){c.beginPath();c.moveTo(14,y);c.lineTo(28,y);c.stroke()}},
  cabin(c){
    c.beginPath();c.moveTo(-50,17);c.lineTo(-25,-16);c.lineTo(26,-16);c.lineTo(50,17);c.closePath()
    c.fillStyle=PA;c.fill();c.lineWidth=4.5;c.stroke()
    for(const[a,b,e,f]of[[-40,-21,-3,-3],[3,3,21,40]]){
      c.beginPath();c.moveTo(a,13);c.lineTo(b,-11);c.lineTo(e,-11);c.lineTo(f,13);c.closePath();c.fillStyle=GL;c.lineWidth=3;c.fill();c.stroke()
      c.beginPath();c.moveTo((a+b)/2+6,6);c.lineTo((b+e)/2,-6);c.lineWidth=3;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111'}
  },
  wheel(c){
    c.beginPath();c.arc(0,0,19,0,2*P);c.fillStyle='#454c57';c.lineWidth=4.5;c.fill();c.stroke()
    c.beginPath();c.arc(0,0,10,0,2*P);c.fillStyle='#d5dbe3';c.lineWidth=3;c.fill();c.stroke()
    for(let k=0;k<5;k++){c.beginPath();c.arc(Math.cos(k*P*.4)*5.5,Math.sin(k*P*.4)*5.5,1.6,0,2*P);c.fillStyle='#111';c.fill()}
  },
  head(c,v){
    c.beginPath();c.moveTo(-5,-15);c.lineTo(0,-24);c.lineTo(5,-15);c.closePath();c.fillStyle=PA;c.lineWidth=3;c.fill();c.stroke()
    rr(c,-15,-15,30,28,7);c.fillStyle=ME;c.lineWidth=4.5;c.fill();c.stroke()
    rr(c,-11,-7,22,9,4);c.fillStyle=DK;c.lineWidth=3;c.fill();c.stroke()
    if(v>0){rr(c,-9,-5,18*v,5,2.5);c.fillStyle='#6ff3ff';c.fill()}
    c.lineWidth=2.5;c.beginPath();c.moveTo(-5,7);c.lineTo(5,7);c.stroke()
  },
  waist(c){rr(c,-17,-12,34,24,4);c.fillStyle=DK;c.lineWidth=4;c.fill();c.stroke()
    c.lineWidth=2;c.strokeStyle=ME;for(const y of[-4,4]){c.beginPath();c.moveTo(-11,y);c.lineTo(11,y);c.stroke()}},
  foot(c){rr(c,-19,-6,38,12,5);c.fillStyle=ME;c.lineWidth=4;c.fill();c.stroke()},
  fist(c){rr(c,-9,-8,18,16,5);c.fillStyle=ME;c.lineWidth=4;c.fill();c.stroke()}
}
// name, car pose [x,y,rot,sx,sy], robot pose, window in morph, arc lift
const parts=[
  ['head',[134,158,0,.6,.6],[128,58,0,1.3,1.3],[.62,1],10],
  ['waist',[132,190,0,.8,.8],[128,124,0,1,1],[.35,.7],0],
  ['foot',[70,196,0,.8,.8],[106,226,0,1,1],[.45,.8],0],
  ['foot',[70,196,0,.8,.8],[150,226,0,1,1],[.45,.8],0],
  ['fist',[132,190,0,.8,.8],[76,160,0,1,1],[.55,.9],0],
  ['fist',[132,190,0,.8,.8],[180,160,0,1,1],[.55,.9],0],
  ['rear',[70,189,0,1,1],[148,188,P/2,1,1],[.22,.68],18],
  ['door',[132,189,0,1,1],[180,124,P/2,1,1],[.14,.56],22],
  ['hood',[193,190,0,1,1],[128,146,0,1.15,.75],[.3,.72],16],
  ['rear',[70,189,0,1,1],[108,188,P/2,1,1],[.22,.68],18],
  ['door',[132,189,0,1,1],[76,124,-P/2,1,1],[.14,.56],22],
  ['cabin',[134,154,0,1,1],[128,94,P,1.08,1.25],[.38,.84],26],
  ['wheel',[72,211,0,1,1],[167,198,4*P,1,1],[.08,.5],40],
  ['wheel',[190,211,0,1,1],[180,84,4*P,1,1],[0,.42],56],
  ['wheel',[72,211,0,1,1],[89,198,4*P,1,1],[.08,.5],40],
  ['wheel',[190,211,0,1,1],[76,84,4*P,1,1],[0,.42],56]
]
export default(c,t)=>{
  const m=t<.52?cl((t-.08)/.36):1-cl((t-.62)/.34)
  const idle=m==0?Math.sin(t*2*P*5)*.8:m==1?Math.sin(t*2*P*5)*1:0
  const vis=ez(cl((m-.9)/.1))
  for(const[n,a,b,[w0,w1],lift]of parts){
    const k=ez(cl((m-w0)/(w1-w0))),[x,y,r,sx,sy]=a.map((v,j)=>lerp(v,b[j],k))
    c.save();c.translate(x,y-Math.sin(P*k)*lift+(n=='wheel'&&m==0?0:idle));c.rotate(r);c.scale(sx,sy)
    D[n](c,vis);c.restore()
  }
  // little sparks the moment the robot locks into place
  const sp=cl((m-.9)/.1)*(t<.52)
  if(sp>0&&sp<1)for(const[x,y]of[[60,70],[196,70],[128,30]]){
    const s=4+sp*8;c.lineWidth=3;c.strokeStyle='#ffd54a';c.beginPath()
    c.moveTo(x-s,y);c.lineTo(x+s,y);c.moveTo(x,y-s);c.lineTo(x,y+s);c.stroke()
  }
}

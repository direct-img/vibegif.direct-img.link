// magenta haired girl taps her card on a payment terminal, contactless waves ripple out, the screen flips green and a big check pops up as she beams
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#da77f2',HD='#ae3ec9',HL='#f8f0fc',EYE='#51cf66',ED='#2b8a3e',SWT='#ff8787',SD='#fa5252',BAND='#ffd43b',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',TER='#ced4da',TD='#868e96',SCR='#364fc7',OK='#51cf66',CARD='#4dabf7',CHIP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x+3,y+3,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-7,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+3,y+3,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-4,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+10,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const check=(c,x,y,s)=>ds(c,9*s,4.5*s,'#fff',()=>{c.moveTo(x-9*s,y);c.lineTo(x-3*s,y+7*s);c.lineTo(x+10*s,y-7*s)})
export default(c,t)=>{
  const k=ez(t,.04,.22)-ez(t,.84,.97),ok=t>=.28&&t<.9,q=min(1,max(0,(t-.28)/.12)),bs=ok?(1+2.7*(q-1)**3+1.7*(q-1)**2)*(1-ez(t,.8,.9)):0
  c.save();c.translate(96,254);c.scale(.86,.86);c.translate(-128,-250)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,150);c.quadraticCurveTo(214,200,204,250);c.lineTo(52,250);c.quadraticCurveTo(42,200,50,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=SWT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.quadraticCurveTo(128+d*18,186,128+d*32,190),c.quadraticCurveTo(128+d*30,206,128,212),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle=SD;c.lineWidth=4;for(const y of[226,240])c.beginPath(),c.moveTo(70,y),c.lineTo(190,y),c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(ok){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,165),c.lineTo(128+d*42+k+2,159),c.stroke()
  if(ok){c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(116,165);c.quadraticCurveTo(128,170,140,165);c.quadraticCurveTo(138,184,128,184);c.quadraticCurveTo(118,184,116,165);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,185,7,5,0,0,T);c.fill();c.restore()}
  else{c.lineWidth=3.5;c.beginPath();c.moveTo(122,169);c.quadraticCurveTo(128,173,134,169);c.stroke()}
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,196)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,196);c.quadraticCurveTo(182,184,178,192)
  c.quadraticCurveTo(184,124,178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,124,78,192);c.quadraticCurveTo(72,184,66,196);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=BAND;c.lineWidth=5;c.beginPath();c.moveTo(70,80);c.bezierCurveTo(90,48,166,48,186,80);c.lineTo(182,92);c.bezierCurveTo(162,64,94,64,74,92);c.closePath();c.fill();c.stroke()
  c.restore()
  // card arm
  const cx=186+8*k,cy=104+44*k,ca=-.35+.3*k
  ds(c,27,17,SWT,()=>{c.moveTo(138,228);c.lineTo(156,210);c.lineTo(cx-18,cy+22)})
  // terminal
  c.lineWidth=6;c.fillStyle=TER;c.beginPath();c.roundRect(158,150,80,100,14);c.fill();c.stroke()
  c.fillStyle=ok?OK:SCR;c.lineWidth=4;c.beginPath();c.roundRect(168,160,60,40,6);c.fill();c.stroke()
  if(ok)check(c,198,180,1.1);else ds(c,6,2.5,'#fff',()=>{for(const r of[6,12])c.arc(190,182,r,-.7,.7)})
  c.fillStyle='#fff';c.lineWidth=3;for(let r=0;r<2;r++)for(let j=0;j<3;j++)c.beginPath(),c.roundRect(172+j*19,210+r*16,14,10,3),c.fill(),c.stroke()
  // contactless ripples on the tap
  if(t>=.16&&t<.36){const p=(t-.16)/.2;ds(c,7,3,'#fff',()=>{for(const r of[28,38,48]){const R=r+8*p;c.moveTo(cx+R*cos(-2.3),cy+R*sin(-2.3));c.arc(cx,cy,R,-2.3,-.84)}})}
  // card + hand
  c.save();c.translate(cx,cy);c.rotate(ca)
  c.lineWidth=5;c.fillStyle=CARD;c.beginPath();c.roundRect(-32,-20,64,40,7);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(-32,-10,64,7);c.fill()
  c.fillStyle=CHIP;c.lineWidth=3;c.beginPath();c.roundRect(-22,2,14,11,2);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(-26,12,12,11,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(-16,4,9,5,-.4,0,T);c.fill();c.stroke()
  c.restore()
  // check badge pops up
  if(bs>.02){c.save();c.translate(206,56);c.scale(bs,bs)
    c.fillStyle=OK;c.lineWidth=6;c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,22,PI*1.1,PI*1.4);c.stroke()
    check(c,1,2,1.5);c.restore()
    c.fillStyle='#ffd43b';c.lineWidth=3.5;for(const[x,y,o]of[[160,30,0],[244,98,.3]]){const r=12*sin(PI*min(1,max(0,(t-.32-o*.2)/.4)));if(r>.5)c.beginPath(),c.moveTo(x,y-r),c.quadraticCurveTo(x+r*.15,y-r*.15,x+r,y),c.quadraticCurveTo(x+r*.15,y+r*.15,x,y+r),c.quadraticCurveTo(x-r*.15,y+r*.15,x-r,y),c.quadraticCurveTo(x-r*.15,y-r*.15,x,y-r),c.fill(),c.stroke()}}
}

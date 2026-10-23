// full-body chibi with apricot pigtails hiccuping twice per loop: a little hop, wide eyes, a hand over her mouth and a tiny hic bubble popping out
const{sin,PI,max,min,exp}=Math,T=2*PI
export const frames=20,delay=70
const SKIN='#ffe3d1',HAIR='#ffb87a',HD='#f0883e',HL='#ffe8cc',EYE='#f59f00',ED='#b35900',DR='#38d9a9',DRD='#0ca678',SHOE='#8d6346',BOB='#ffd43b',BL='#ffa8a8',HIC=[.1,.6]
const eye=(c,x,y,d,wide)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip()
  if(wide){c.fillStyle=EYE;c.beginPath();c.arc(x,y+2,6.5,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.arc(x,y+2,3,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-2,y,1.6,0,T);c.fill()}
  else{c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()}
  c.restore();c.lineWidth=3.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  // u is time since the latest hiccup, so everything below reacts to it
  const u=min(...HIC.map(h=>(t-h+1)%1)),hop=u<.16?-18*sin(PI*u/.16):0,jolt=exp(-u*14),wide=u<.22,Z=.66
  const dy=Math.round(hop)
  c.fillStyle='rgba(17,17,17,.18)';c.beginPath();c.ellipse(128,248,32*(1+hop/60),5,0,0,T);c.fill()
  c.translate(128,250);c.scale(1.1,1.1);c.translate(-128,-250+dy)
  for(const d of[-1,1])for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*12,212),c.lineTo(128+d*12-d*3*(hop<0?1:0),234),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*12-6,224,12,10,3),c.fill(),c.stroke()
  c.fillStyle=SHOE;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,240,11,6.5,0,0,T),c.fill(),c.stroke()
  // left arm hangs, flapping out a little on each hiccup
  for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(104,180),c.lineTo(90-8*jolt,204-6*jolt),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(89-8*jolt,207-6*jolt,6,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(112,164);c.lineTo(144,164);c.lineTo(146,184);c.lineTo(110,184);c.closePath();c.fill();c.stroke()
  c.fillStyle=DR;c.beginPath();c.moveTo(108,178);c.lineTo(148,178);c.lineTo(166,218);c.quadraticCurveTo(128,228,90,218);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*16,178),c.lineTo(128+d*14,166),c.stroke()
  c.fillStyle=BOB;for(const d of[-1,1])c.beginPath(),c.arc(128+d*15,182,3.5,0,T),c.fill(),c.stroke()
  c.strokeStyle=DRD;c.lineWidth=3;c.beginPath();c.moveTo(94,212);c.quadraticCurveTo(128,220,162,212);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(128,72-4*jolt);c.scale(Z,Z);c.translate(-128,-40)
  // pigtails swing out with each hop
  c.lineWidth=8;c.fillStyle=HAIR
  for(const d of[-1,1]){
    c.save();c.translate(128+d*70,148);c.scale(d,1);c.rotate(-(.2+.3*jolt))
    c.beginPath();c.moveTo(-10,-4);c.bezierCurveTo(-12,30,-4,64,14,84);c.bezierCurveTo(22,70,18,62,12,58);c.bezierCurveTo(18,36,16,14,10,-4);c.closePath();c.fill();c.stroke()
    c.restore()
  }
  c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,196,150);c.lineTo(60,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=BOB;for(const d of[-1,1])c.beginPath(),c.arc(128+d*70,150,10,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,wide);eye(c,153,140,1,wide)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,7,0,0,T),c.fill()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,146)
  c.bezierCurveTo(52,74,88,38,128,38);c.bezierCurveTo(168,38,204,74,188,146)
  c.quadraticCurveTo(186,118,180,104);c.lineTo(166,110);c.quadraticCurveTo(160,96,150,94);c.lineTo(142,110)
  c.quadraticCurveTo(132,96,122,94);c.lineTo(114,110);c.quadraticCurveTo(106,96,96,96);c.lineTo(88,110)
  c.lineTo(76,104);c.quadraticCurveTo(70,126,68,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke()
  // worried brows, raised on the hiccup
  c.strokeStyle='#111';c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,116-6*jolt),c.lineTo(128+d*38,110-10*jolt),c.stroke()
  c.restore()
  // right hand clapped over her mouth
  for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(150,180),c.lineTo(168,184),c.lineTo(142,158-4*jolt),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(136,157-4*jolt,13,9,-.3,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(147,151-4*jolt,4.5,6.5,-.5,0,T);c.fill();c.stroke()
  // jolt ticks beside her head
  if(jolt>.25)for(const[l,st]of[[7,'#111'],[2.5,'#fff']]){c.lineWidth=l;c.strokeStyle=st;for(const d of[-1,1])for(const k of[-1,0,1])c.beginPath(),c.moveTo(128+d*(56+4*k*k),66+k*16),c.lineTo(128+d*(68+4*k*k),62+k*20),c.stroke()}
  c.strokeStyle='#111'
  // the hic bubble pops out and floats away, in screen space so the hop doesn't push it off the top
  if(u<.4){
    const p=u/.4,sc=min(1,u/.05),x=204,y=48-14*p
    c.setTransform(1,0,0,1,0,0);c.save();c.globalAlpha=p>.7?1-(p-.7)/.3:1;c.translate(x,y);c.scale(sc,sc)
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(-27,-17,54,32,14);c.fill();c.stroke()
    c.beginPath();c.moveTo(-20,10);c.lineTo(-30,26);c.lineTo(-8,14);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.roundRect(-24,-14,48,26,12);c.fill()
    c.lineWidth=3.5;c.beginPath();c.moveTo(-16,-8);c.lineTo(-16,8);c.moveTo(-16,0);c.quadraticCurveTo(-10,-6,-7,0);c.lineTo(-7,8);c.moveTo(1,-1);c.lineTo(1,8);c.stroke()
    c.beginPath();c.arc(14,3,5.5,.25*PI,1.75*PI);c.stroke();c.fillStyle='#111';c.beginPath();c.arc(1,-7,2.2,0,T);c.fill()
    c.restore()
  }
}

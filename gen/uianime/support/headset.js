// cheerful support girl with light blue low twintails and a headset mic, nodding along as she talks with a hand on her earcup while a typing bubble bounces its dots and a pink heart bubble pops up
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#a5d8ff',HD='#5fa8ea',HL='#eef8ff',EYE='#9775fa',ED='#5f3dc4',PO='#748ffc',PD='#4c6ef5',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',HS='#e9ecef',HSD='#495057',PAD='#ff8fab',SC='#ffd43b',PK='#ff8fab',DOT=['#ff8787','#ffd43b','#69db7c']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+2,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+2,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+2,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-2,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const heart=(c,x,y,s)=>{c.beginPath();c.moveTo(x,y+s);c.bezierCurveTo(x-1.4*s,y-.1*s,x-.8*s,y-1.1*s,x,y-.45*s);c.bezierCurveTo(x+.8*s,y-1.1*s,x+1.4*s,y-.1*s,x,y+s);c.fill();c.stroke()}
export default(c,t,i)=>{
  const nd=4*(1-cos(2*T*t)),tl=.04*sin(T*t),hp=t>=.42&&t<.88,tk=!hp&&i%2,bk=i==3
  const q=min(1,max(0,(t-.4)/.14)),pb=(1+2.7*(q-1)**3+1.7*(q-1)**2)*(1-ez(t,.86,.97))
  const X=106,Y=198,Z=.84
  const H=(f,m=1)=>{c.save();c.translate(X,Y+nd*m);c.rotate(tl*m);c.scale(Z,Z);c.translate(-128,-186);f();c.restore()}
  H(()=>{c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,160);c.quadraticCurveTo(208,186,190,196);c.lineTo(66,196);c.quadraticCurveTo(48,186,50,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()})
  H(()=>{
    c.lineWidth=8;c.fillStyle=PO;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=PD;c.beginPath();c.roundRect(118,196,20,60,6);c.fill();c.stroke()
    c.fillStyle='#fff';for(const y of[218,238])c.beginPath(),c.arc(128,y,4,0,T),c.fill(),c.stroke()
    for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,188),c.lineTo(128+d*42,198),c.lineTo(128+d*26,222),c.lineTo(128+d*6,200),c.closePath(),c.fill(),c.stroke()
    c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(152,236,40,28,6);c.fill();c.stroke()
    c.fillStyle=PK;c.lineWidth=4;heart(c,172,250,9)
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.quadraticCurveTo(128,204,142,192);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,190);c.moveTo(142,168);c.lineTo(142,190);c.stroke()
  },0)
  H(()=>{
    const sw=6*sin(T*t)
    c.lineWidth=8;c.fillStyle=HAIR;for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*56,180);c.bezierCurveTo(128+d*104,190,128+d*112+sw,262,128+d*86+sw,326);c.quadraticCurveTo(128+d*80+sw,300,128+d*66+sw,296);c.quadraticCurveTo(128+d*80+sw,250,128+d*62,202);c.closePath();c.fill();c.stroke()
      c.strokeStyle=HL;c.lineWidth=5;c.beginPath();c.moveTo(128+d*80,206);c.quadraticCurveTo(128+d*96,236,128+d*90+sw,272);c.stroke();c.strokeStyle='#111';c.lineWidth=8}
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hp){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(bk){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.quadraticCurveTo(x,151,x+14,144),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(hp||tk){c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,168,142,164);c.quadraticCurveTo(140,hp?188:180,128,hp?188:180);c.quadraticCurveTo(116,hp?188:180,114,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,hp?190:182,9,7,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,176,140,166);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SC;c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*62,192,10,13,d*.6,0,T),c.fill(),c.stroke()
    ds(c,17,8,HS,()=>{c.ellipse(128,120,78,86,0,PI*1.03,PI*1.97)})
    c.fillStyle=HS;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.roundRect(d<0?36:192,98,28,48,12),c.fill(),c.stroke()
    c.fillStyle=PAD;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.roundRect(d<0?44:200,108,12,28,6),c.fill(),c.stroke()
    ds(c,11,5,HSD,()=>{c.moveTo(48,142);c.quadraticCurveTo(52,184,98,180)})
    c.fillStyle=HSD;c.lineWidth=6;c.beginPath();c.ellipse(102,179,10,8,0,0,T);c.fill();c.stroke()
  })
  const hx=X+(206-128)*Z,hy=Y+nd+(124-186)*Z
  ds(c,24,14,PO,()=>{c.moveTo(172,262);c.quadraticCurveTo(210,214,hx+4,hy+16)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx+2,hy+4,11,13,.2,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(hx-4,hy-2);c.lineTo(hx+4,hy-4);c.moveTo(hx-4,hy+5);c.lineTo(hx+5,hy+3);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(166,18,80,50,25);c.fill();c.stroke()
  c.beginPath();c.moveTo(178,62);c.lineTo(166,84);c.lineTo(194,66);c.fill();c.stroke()
  c.beginPath();c.rect(180,58,18,8);c.fill()
  for(let k=0;k<3;k++){const h=max(0,sin(T*(t*2-k*.15)));c.fillStyle=DOT[k];c.lineWidth=4;c.beginPath();c.arc(188+k*18,43-8*h,6.5,0,T);c.fill();c.stroke()}
  if(pb>.02){c.save();c.translate(218,112);c.scale(pb,pb)
    c.fillStyle=PK;c.lineWidth=6;c.beginPath();c.arc(0,0,24,0,T);c.fill();c.stroke()
    c.beginPath();c.moveTo(-16,16);c.lineTo(-28,30);c.lineTo(-6,22);c.fill();c.stroke();c.beginPath();c.arc(0,0,21,.6*PI,.95*PI);c.fill()
    c.fillStyle='#fff';c.lineWidth=4;heart(c,0,2,12);c.restore()}
}

// tangerine pigtailed girl with a squeaky toy mallet, a giant red map pin drops onto a little folded map and bounces, she bonks it in with a pop and ripples spread, then it hops away to drop again
const{sin,cos,PI,max,min,acos}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ff922b',HD='#d9480f',HL='#fff4e6',EYE='#4dabf7',ED='#1864ab',TEE='#fff',OV='#748ffc',OVD='#4c6ef5',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',PIN='#ff6b6b',PD='#e03131',M1='#d3f9d8',M2='#b2f2bb',RV='#74c0fc',RT='#f03e3e',MH='#ffd43b',MHD='#f59f00',WD='#c0805a',SP='#ffe066',TIE='#cc5de8'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const cl=(t,a,b)=>min(1,max(0,(t-a)/(b-a)))
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const PX=180,PY=228,L=60,R=27,B=acos(R/L)
export default(c,t,i)=>{
  const dr=t<.2?-230*(1-t/.2)**2:t>=.86?-230*cl(t,.86,1)**2:0
  const bo=t>=.2&&t<.42?-16*sin(PI*cl(t,.24,.42)):0,hit=t>=.5&&t<.58,land=t>=.2&&t<.25
  const sq=land?.78:hit?.72:t>=.58&&t<.64?1.08:1,sk=t>=.5&&t<.86?4:0
  const ma=t<.4?-1.3-.5*ez(t,0,.32):t<.5?-1.8+1.5*cl(t,.4,.5)**2:-.3-1*ez(t,.56,.8),hp=t>=.54&&t<.86,sh=hit
  c.lineWidth=6;c.fillStyle=M1;c.beginPath();c.moveTo(118,202);c.lineTo(232,202);c.lineTo(250,250);c.lineTo(100,250);c.closePath();c.fill();c.stroke()
  c.fillStyle=M2;c.beginPath();c.moveTo(156,202);c.lineTo(194,202);c.lineTo(200,250);c.lineTo(150,250);c.closePath();c.fill();c.lineWidth=3.5;c.stroke()
  c.strokeStyle=RV;c.lineWidth=7;c.beginPath();c.moveTo(126,206);c.bezierCurveTo(150,226,124,236,140,248);c.stroke()
  c.strokeStyle=RT;c.lineWidth=4;c.setLineDash([6,6]);c.beginPath();c.moveTo(214,246);c.quadraticCurveTo(220,214,PX+6,PY);c.stroke();c.setLineDash([]);c.strokeStyle='#111'
  c.lineWidth=6;c.beginPath();c.moveTo(118,202);c.lineTo(232,202);c.lineTo(250,250);c.lineTo(100,250);c.closePath();c.stroke()
  c.save();c.beginPath();c.moveTo(118,202);c.lineTo(232,202);c.lineTo(250,250);c.lineTo(100,250);c.closePath();c.clip()
  for(const[a,b]of[[.2,.62],[.5,.86]])if(t>=a&&t<b){const p=cl(t,a,b);c.strokeStyle=`rgba(255,255,255,${1-p})`;c.lineWidth=5;c.beginPath();c.ellipse(PX,PY,12+60*p,4+20*p,0,0,T);c.stroke();c.strokeStyle=`rgba(17,17,17,${.6*(1-p)})`;c.lineWidth=2.5;c.beginPath();c.ellipse(PX,PY,16+60*p,6+20*p,0,0,T);c.stroke()}
  c.restore();c.strokeStyle='#111'
  if(dr>-60){c.fillStyle='rgba(73,80,87,.3)';const s=1+dr/80;c.beginPath();c.ellipse(PX,PY+1,16*s,5*s,0,0,T);c.fill()}
  const H=f=>{c.save();c.translate(78,192);c.scale(.62,.62);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,150);c.lineTo(50,150);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    for(const d of[-1,1]){c.save();c.translate(128+d*64,66);c.rotate(d*(.1+.08*sin(T*t*2)));c.fillStyle=HAIR;c.beginPath();c.moveTo(0,-16);c.bezierCurveTo(d*50,-16,d*66,50,d*44,104);c.quadraticCurveTo(d*38,88,d*22,92);c.bezierCurveTo(d*38,44,d*18,14,0,16);c.closePath();c.fill();c.stroke()
      c.strokeStyle=HL;c.lineWidth=5;c.beginPath();c.moveTo(d*18,-4);c.bezierCurveTo(d*40,4,d*50,32,d*44,62);c.stroke();c.strokeStyle='#111';c.lineWidth=8
      c.fillStyle=TIE;c.beginPath();c.ellipse(0,0,12,16,0,0,T);c.fill();c.stroke();c.restore()}
    c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=OV;c.beginPath();c.moveTo(72,330);c.lineTo(80,250);c.lineTo(176,250);c.lineTo(184,330);c.closePath();c.fill();c.stroke()
    c.lineWidth=10;c.strokeStyle=OVD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*44,252),c.lineTo(128+d*36,196),c.stroke()
    c.strokeStyle='#111';c.fillStyle=MH;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*44,256,6,0,T),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(sh){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    else if(hp){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else eye(c,103,140,-1,5,t<.2?-4:3),eye(c,153,140,1,5,t<.2?-4:3)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(hp||sh){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,174,138,168);c.stroke();c.fillStyle=TG;c.lineWidth=4;c.beginPath();c.ellipse(134,174,5,6,-.3,0,T);c.fill();c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
  })
  const hx=136,hy=168
  c.save();c.translate(PX,PY+dr+bo+sk);c.scale(1/sq**.5,sq)
  c.fillStyle=PIN;c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.arc(0,-L,R,PI/2+B,PI/2-B+T);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=PD;c.beginPath();c.arc(14,-L+8,R+4,-.3,PI*.9);c.lineTo(0,0);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.arc(0,-L,R,PI/2+B,PI/2-B+T);c.closePath();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,-L,10,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,-L,R-7,PI*1.12,PI*1.4);c.stroke();c.strokeStyle='#111'
  c.restore()
  if(hit||t>=.58&&t<.66){c.fillStyle=SP;c.lineWidth=3.5;for(const[a,r]of[[-2.6,13],[-.5,11],[-1.6,9]])star(c,PX+cos(a)*44,PY-L-12+sin(a)*36,r)}
  ds(c,20,11,TEE,()=>{c.moveTo(108,236);c.quadraticCurveTo(126,224,hx,hy+10)})
  c.save();c.translate(hx,hy);c.rotate(ma)
  ds(c,13,6,WD,()=>{c.moveTo(-6,0);c.lineTo(62,0)})
  c.fillStyle=MH;c.lineWidth=6;c.beginPath();c.roundRect(52,-20,26,40,8);c.fill();c.stroke()
  c.fillStyle=MHD;c.lineWidth=5;for(const y of[-24,16])c.beginPath(),c.roundRect(50,y,30,8,4),c.fill(),c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,11,11,0,0,T);c.fill();c.stroke()
  if(t<.5&&t>=.4)for(const k of[0,1])ds(c,7,3,'#fff',()=>{c.arc(hx,hy,90-k*14,-1.5+k*.1,-.6+k*.1)})
}

// royal blue ponytailed girl in a little knight getup braces a big shield with a green check while grumpy bug viruses fly in, bonk off it with a star and tumble away dizzy
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=15,delay=90
const SKIN='#ffe3d1',HAIR='#4c6ef5',HD='#2f44b8',HL='#dbe4ff',EYE='#fcc419',ED='#e67700',TOP='#ff8787',AR='#dee2e6',ARL='#f8f9fa',ARD='#adb5bd',BL='#ffa8a8',GD='#ffd43b',GDD='#f59f00',SH='#e9ecef',SHL='#f8f9fa',OK='#40c057',SP='#ffe066',BUG=['#b197fc','#69db7c','#ff8787']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const L=(a,b,u)=>a+(b-a)*u
const eye=(c,x,y,d,lid)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-8,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-4,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+9,2,0,T);c.fill()
  c.fillStyle=SKIN;c.fillRect(x-16,y-20,32,lid);c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-20+lid);c.quadraticCurveTo(x,y-24+lid,x+16,y-20+lid);c.lineTo(x+d*21,y-25+lid);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const bug=(c,x,y,a,k,dz,s)=>{c.save();c.translate(x,y);c.rotate(a);k<2?c.scale(1.25/s,1.25*s):c.scale(1.25*s,1.25/s)
  c.fillStyle=BUG[k];c.lineWidth=4;for(let j=0;j<7;j++){const b=j*T/7;c.beginPath();c.moveTo(cos(b)*10,sin(b)*10);c.lineTo(cos(b)*17,sin(b)*17);c.stroke();c.beginPath();c.arc(cos(b)*17,sin(b)*17,3.5,0,T);c.fill();c.stroke()}
  c.lineWidth=4.5;c.beginPath();c.arc(0,0,12.5,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;if(dz)for(const d of[-1,1])c.beginPath(),c.moveTo(d*5-2.5,-4),c.lineTo(d*5+2.5,1),c.moveTo(d*5+2.5,-4),c.lineTo(d*5-2.5,1),c.stroke()
  else{c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*5,-1,2.6,0,T),c.fill();c.lineWidth=2.5;c.beginPath();c.moveTo(-9,-8);c.lineTo(-2,-5);c.moveTo(9,-8);c.lineTo(2,-5);c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.arc(0,dz?7:9,4,PI*1.15,PI*1.85);c.stroke();c.restore()}
const A=[[150,-26],[250,-24],[292,96]],C=[[160,94],[208,100],[230,148]],B=[[100,-30],[296,30],[296,200]]
export default(c,t,i)=>{
  const ps=[0,1,2].map(k=>(i+5*k)%15/15),hit=ps.some(p=>p>=.4&&p<.44),rc=hit?-4:0
  const H=f=>{c.save();c.translate(78,200);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    const sw=.12*sin(T*t)
    c.save();c.translate(90,40);c.rotate(sw);c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(4,-14);c.bezierCurveTo(-60,-34,-80,40,-66,110);c.bezierCurveTo(-58,150,-66,180,-52,214);c.quadraticCurveTo(-40,190,-34,170);c.bezierCurveTo(-34,120,-50,40,6,14);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=6;c.beginPath();c.moveTo(-36,-8);c.bezierCurveTo(-58,10,-60,60,-54,100);c.stroke();c.strokeStyle='#111'
    c.fillStyle=GD;c.lineWidth=7;c.beginPath();c.ellipse(0,0,13,17,-.6,0,T);c.fill();c.stroke();c.restore()
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=AR;c.beginPath();c.moveTo(80,206);c.quadraticCurveTo(128,196,176,206);c.lineTo(182,300);c.quadraticCurveTo(128,316,74,300);c.closePath();c.fill();c.stroke()
    c.strokeStyle=ARL;c.lineWidth=7;c.beginPath();c.moveTo(96,222);c.quadraticCurveTo(92,250,96,280);c.stroke();c.strokeStyle='#111'
    c.fillStyle=GD;c.lineWidth=6;c.beginPath();c.moveTo(128,236);c.lineTo(138,250);c.lineTo(128,264);c.lineTo(118,250);c.closePath();c.fill();c.stroke()
    c.fillStyle=ARD;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*66,212,26,16,d*.3,PI*(d>0?1:1),PI*2+.01),c.ellipse(128+d*66,212,26,10,d*.3,0,PI),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hit){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.quadraticCurveTo(x,151,x+14,144),c.stroke()}
    else eye(c,103,140,-1,7),eye(c,153,140,1,7)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;if(hit){c.fillStyle='#fff';c.beginPath();c.roundRect(112,162,32,14,6);c.fill();c.stroke();c.beginPath();c.moveTo(114,169);c.lineTo(142,169);c.stroke()}
    else{c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(130,174,142,162);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';ds(c,16,8,ARD,()=>{c.ellipse(128,108,60,62,0,PI*1.15,PI*1.85)})
    c.fillStyle='#ff6b6b';c.lineWidth=6;c.beginPath();c.moveTo(128,36);c.lineTo(138,48);c.lineTo(128,60);c.lineTo(118,48);c.closePath();c.fill();c.stroke()
  })
  const SXc=180+rc,SYc=178
  c.save();c.translate(SXc,SYc);c.rotate(.18+(hit?-.05:0));c.scale(.92,.92)
  const sp=()=>{c.beginPath();c.moveTo(-50,-60);c.quadraticCurveTo(0,-70,50,-60);c.bezierCurveTo(54,0,40,40,0,66);c.bezierCurveTo(-40,40,-54,0,-50,-60);c.closePath()}
  sp();c.fillStyle=GD;c.lineWidth=7;c.fill();c.stroke()
  c.save();c.translate(0,2);c.scale(.82,.82);sp();c.fillStyle=SH;c.fill();c.clip();c.fillStyle=SHL;c.fillRect(0,-80,70,160);c.restore()
  c.save();c.translate(0,2);c.scale(.82,.82);sp();c.lineWidth=5;c.stroke();c.restore()
  c.strokeStyle=GDD;c.lineWidth=3;c.beginPath();c.moveTo(-40,-56);c.quadraticCurveTo(0,-64,40,-56);c.stroke()
  ds(c,24,13,OK,()=>{c.moveTo(-22,0);c.lineTo(-6,16);c.lineTo(24,-18)})
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-34,-38);c.quadraticCurveTo(-36,-10,-28,10);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(SXc-44,SYc+4,11,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(SXc-48,SYc);c.lineTo(SXc-40,SYc-2);c.moveTo(SXc-48,SYc+7);c.lineTo(SXc-40,SYc+5);c.stroke()
  ps.forEach((p,k)=>{const[a,b]=A[k],[cx,cy]=C[k],[e,f]=B[k]
    if(p<.4){const u=(p/.4)**1.6;bug(c,L(a,cx,u),L(b,cy,u)+4*sin(T*p*6),0,k,0,1)}
    else{const u=(p-.4)/.6,sq=p<.44?.7:1;bug(c,L(cx,e,u)+(p<.44?-2:0),L(cy,f,u)-30*sin(PI*u),p<.44?0:-T*u*1.5,k,p>=.44,sq)
      if(p<.44){c.fillStyle=SP;c.lineWidth=4;star(c,cx-14,cy+16,15);for(const b of[-.6,.4,1.4])ds(c,7,3,SP,()=>{c.moveTo(cx-14+cos(b-PI/2)*20,cy+16+sin(b-PI/2)*20);c.lineTo(cx-14+cos(b-PI/2)*30,cy+16+sin(b-PI/2)*30)})}}})
}

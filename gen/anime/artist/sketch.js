// plum haired artist in a red beret doodling a cat in her sketchbook line by line, tongue out, then flipping to a fresh page
const{sin,cos,PI,hypot,min}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#be4bdb',HD='#862e9c',HL='#f3d9fa',EYE='#40c057',ED='#2b8a3e',BL='#ffa8a8',BER='#fa5252',SMK='#a5d8ff',KRA='#d9a066',PEN='#495057'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const R=-.06,W=(x,y)=>[180+x*cos(R)-y*sin(R),164+x*sin(R)+y*cos(R)]
const ST=[[...Array(41)].map((_,k)=>[32*cos(PI+k/40*T),10+30*sin(PI+k/40*T)]),[[-27,-6],[-24,-36],[-9,-18]],[[9,-18],[24,-36],[27,-6]],[[-17,8],[-12,3],[-7,8]],[[7,8],[12,3],[17,8]],[[-8,20],[-4,24],[0,20],[4,24],[8,20]],[[-20,16],[-42,11]],[[-20,22],[-42,25]],[[20,16],[42,11]],[[20,22],[42,25]]]
const LEN=ST.map(s=>s.slice(1).reduce((a,p,k)=>a+hypot(p[0]-s[k][0],p[1]-s[k][1]),0)),TOT=LEN.reduce((a,b)=>a+b)
const doodle=(c,q)=>{  // draws the first q px of the doodle, returns where the pencil is
  let tip=ST[0][0];c.strokeStyle=PEN;c.lineWidth=3.5
  for(const[k,s]of ST.entries()){if(q<=0)break;c.beginPath();c.moveTo(...s[0]);tip=s[0]
    for(let j=1;j<s.length&&q>0;j++){const[a,b]=[s[j-1],s[j]],l=hypot(b[0]-a[0],b[1]-a[1]),f=min(1,q/l);tip=[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f];c.lineTo(...tip);q-=l}
    c.stroke()}
  c.strokeStyle='#111';return tip
}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+4,y+5,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-5,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+6,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y,4.5,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const dr=t<.75,done=t>=.75&&t<.85,fp=t>=.85?(t-.85)/.15:-1,q=dr?t/.75*TOT:TOT
  c.lineWidth=6;c.fillStyle=SMK;c.beginPath();c.moveTo(70,166);c.quadraticCurveTo(28,176,22,256);c.lineTo(160,256);c.quadraticCurveTo(152,176,114,166);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=3;for(const[x,y,r]of[[48,226,6],[60,238,4],[132,214,5]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  c.save();c.translate(92,152);c.scale(.72,.72);c.translate(-128,-186)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,196,166);c.lineTo(60,166);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=HAIR;for(let k=0;k<5;k++)c.beginPath(),c.ellipse(62-k,160+k*18,13-k,11,0,0,T),c.fill(),c.stroke()
  c.fillStyle=BER;c.beginPath();c.ellipse(52,252,8,6,0,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(dr){eye(c,103,140,-1);eye(c,153,140,1)}
  else for(const d of[-1,1]){const x=128+d*25;c.lineWidth=7;c.beginPath();c.arc(x,148,13,PI*1.15,PI*1.85);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  if(dr){c.lineWidth=4.5;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(126,172,138,166);c.stroke();c.fillStyle='#ff8fab';c.lineWidth=3.5;c.beginPath();c.ellipse(140,172,5,6,-.4,0,T);c.fill();c.stroke()}
  else{c.lineWidth=4.5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,186,142,164);c.closePath();c.fill();c.stroke()}
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,156)
  c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,156)
  c.quadraticCurveTo(186,120,178,104);c.quadraticCurveTo(168,106,160,98);c.quadraticCurveTo(152,108,140,110);c.quadraticCurveTo(140,98,132,92)
  c.quadraticCurveTo(124,106,110,110);c.quadraticCurveTo(108,98,100,94);c.quadraticCurveTo(92,106,80,108);c.quadraticCurveTo(70,126,68,156);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.36,1.44],[1.52,1.6]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(112,46);c.rotate(.22);c.fillStyle=BER;c.lineWidth=7;c.beginPath();c.ellipse(0,0,74,26,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#c92a2a';c.lineWidth=4;c.beginPath();c.ellipse(-4,4,58,15,0,.2,PI-.2);c.stroke();c.strokeStyle='#111'
  ds(c,13,6,BER,()=>{c.moveTo(4,-25);c.lineTo(6,-38)});c.restore()
  c.restore()
  c.save();c.translate(180,164);c.rotate(R)
  c.fillStyle=KRA;c.lineWidth=6;c.beginPath();c.roundRect(-66,-62,132,128,6);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(-60,-56,120,116);c.fill();c.stroke()
  let tip=[0,0]
  if(fp<0){tip=doodle(c,q);if(done){c.fillStyle='#ffc9c9';for(const d of[-1,1])c.beginPath(),c.ellipse(d*20,16,5,3,0,0,T),c.fill();c.fillStyle='#ffd43b';c.lineWidth=3;c.beginPath();c.moveTo(40,-44);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(40+(a+b)*1.6,-34+(b-a)*1.6,40+a*10,-34+b*10);c.fill();c.stroke()}}
  else if(fp<.5){const h=116*(1-2*fp);c.save();c.translate(0,-56);c.scale(1,h/116);c.translate(0,56);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(-60,-56,120,116);c.fill();c.stroke();doodle(c,TOT);c.restore()}
  else{const h=60*sin(PI*fp);c.fillStyle='#e9ecef';c.lineWidth=4;c.beginPath();c.rect(-60,-56-h,120,h);c.fill();c.stroke()}
  c.fillStyle='#ced4da';c.lineWidth=3;for(let x=-52;x<=52;x+=13)c.beginPath(),c.ellipse(x,-58,3.5,7,0,0,T),c.fill(),c.stroke()
  c.restore()
  const[px,py]=fp<0&&dr?W(...tip):[150,214],hx=px+10,hy=py+24
  ds(c,20,11,SMK,()=>{c.moveTo(118,200);c.quadraticCurveTo(130,236,hx,hy+4)})
  ds(c,9,4.5,'#ffd43b',()=>{c.moveTo(px+2,py+5);c.lineTo(px+10,py+30)})
  c.fillStyle='#ffe8cc';c.lineWidth=3;c.beginPath();c.moveTo(px,py);c.lineTo(px+5,py+4);c.lineTo(px-1,py+6);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,9,9,0,0,T);c.fill();c.stroke()
}

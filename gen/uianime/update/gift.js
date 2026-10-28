// sky blue bob haired girl in a party hat hugging a pink present that rattles, the lid pops off and a big green update arrow bursts out in sparkles, then sinks back as the lid drops on
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#74c0fc',HD='#339af0',HL='#e7f5ff',EYE='#f06595',ED='#a61e4d',SW='#d0bfff',SWD='#9775fa',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',HAT='#ffd43b',HS='#ff6b6b',BOX='#fcc2d7',BXD='#f783ac',RIB='#ffd43b',GR='#51cf66',GRL='#b2f2bb',SP=['#ffd43b','#74c0fc','#ff8fab','#ffd43b','#b197fc']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const bk=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)))-1;return 1+2.7*x**3+1.7*x**2}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x+2,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+2,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+2,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-2,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t,i)=>{
  const sh=.06*sin(T*t*11)*ez(t,.04,.12)*(1-ez(t,.24,.3)),a=bk(t,.3,.44)*(1-ez(t,.78,.9)),out=t>=.3&&t<.86
  const lf=t<.28?0:t<.42?(-300*((t-.28)/.14)**2):t<.8?-300:t<.94?-300*(1-((t-.8)/.14)**2):0,lr=t<.28||t>=.94?0:t<.42?1.2*(t-.28)/.14:t<.8?1.2:1.2*(1-(t-.8)/.14)
  const sq=t>=.94?sin(PI*(t-.94)/.06)*.08:0,hap=t>=.33&&t<.86,BX=180,BY=252
  const H=f=>{c.save();c.translate(80,160+(hap?-3*sin(T*t*3):0));c.rotate(hap?-.05:sh*.5);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,206,180);c.quadraticCurveTo(204,200,190,204);c.lineTo(66,204);c.quadraticCurveTo(52,200,50,180);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,340);c.lineTo(216,340);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SWD;c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(128,222,158,190);c.lineTo(160,204);c.quadraticCurveTo(128,236,96,204);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(i==1){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,149,x+15,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath()
    if(hap)c.moveTo(110,163),c.quadraticCurveTo(128,168,146,163),c.quadraticCurveTo(144,190,128,190),c.quadraticCurveTo(112,190,110,163)
    else c.ellipse(128,172,8,9,0,0,T)
    c.fill();c.stroke();if(hap){c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,191,9,7,0,0,T);c.fill();c.restore()}
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,200)
    c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,194,200);c.quadraticCurveTo(186,190,180,198)
    c.quadraticCurveTo(186,130,178,104);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,76,198);c.quadraticCurveTo(70,190,62,200);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=HAT;c.lineWidth=7;c.beginPath();for(let k=0;k<10;k++){const r=k%2?7:15,b=k*PI/5-PI/2;c.lineTo(170+cos(b)*r,82+sin(b)*r)}c.closePath();c.fill();c.stroke()
    c.save();c.translate(104,46);c.rotate(-.35)
    c.fillStyle=HAT;c.lineWidth=8;c.beginPath();c.moveTo(-30,0);c.lineTo(0,-74);c.lineTo(30,0);c.closePath();c.fill();c.stroke()
    c.save();c.clip();c.strokeStyle=HS;c.lineWidth=8;for(const y of[-14,-38,-62])c.beginPath(),c.moveTo(-40,y+10),c.lineTo(40,y-10),c.stroke();c.restore()
    c.strokeStyle='#111';c.beginPath();c.moveTo(-30,0);c.lineTo(0,-74);c.lineTo(30,0);c.closePath();c.stroke()
    c.fillStyle=HS;c.beginPath();c.arc(0,-78,11,0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.ellipse(0,2,36,9,0,0,T);c.fill();c.stroke();c.restore()
  })
  c.save();c.translate(BX,BY);c.rotate(sh);c.translate(-BX,-BY)
  c.fillStyle='#5f3dc4';c.lineWidth=6;c.beginPath();c.roundRect(134,162,92,20,6);c.fill();c.stroke()
  if(a>.01){const y=166-128*a;c.save();c.beginPath();c.rect(0,0,256,176);c.clip()
    c.fillStyle=GR;c.lineWidth=7;c.beginPath();c.moveTo(BX,y);c.lineTo(BX+44,y+46);c.lineTo(BX+19,y+46);c.lineTo(BX+19,y+150);c.lineTo(BX-19,y+150);c.lineTo(BX-19,y+46);c.lineTo(BX-44,y+46);c.closePath();c.fill();c.stroke()
    c.strokeStyle=GRL;c.lineWidth=6;c.beginPath();c.moveTo(BX-8,y+60);c.lineTo(BX-8,y+120);c.moveTo(BX-26,y+38);c.lineTo(BX-8,y+18);c.stroke();c.strokeStyle='#111';c.restore()}
  c.fillStyle=BOX;c.lineWidth=7;c.beginPath();c.roundRect(132,172,96,88,6);c.fill();c.stroke()
  c.fillStyle=BXD;c.lineWidth=0;c.beginPath();c.rect(135,175,8,82);c.fill()
  c.fillStyle=RIB;c.lineWidth=6;c.beginPath();c.rect(BX-12,172,24,88);c.fill();c.stroke()
  c.restore()
  for(const[x,y,s]of[[132,200,-1],[228,198,1]]){if(s<0)ds(c,22,13,SW,()=>{c.moveTo(96,262);c.quadraticCurveTo(108,222,x-4,y+8)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(x+sh*40,y,11,13,0,0,T);c.fill();c.stroke()}
  if(lf>-280){c.save();c.translate(BX,170+lf);c.rotate(sh+lr);c.scale(1+sq,1-sq)
    c.fillStyle=BOX;c.lineWidth=7;c.beginPath();c.roundRect(-56,-24,112,26,6);c.fill();c.stroke()
    c.fillStyle=RIB;c.lineWidth=6;c.beginPath();c.rect(-12,-24,24,26);c.fill();c.stroke()
    for(const d of[-1,1])c.beginPath(),c.moveTo(0,-26),c.bezierCurveTo(d*34,-56,d*44,-26,d*4,-24),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.ellipse(0,-27,8,7,0,0,T);c.fill();c.stroke();c.restore()}
  if(out){const q=(t-.3)/.56
    if(q<.3)for(let k=0;k<7;k++){const b=-PI+k*PI/6,r=60+90*q;ds(c,7,3,SP[k%5],()=>{c.moveTo(BX+cos(b)*r,96+sin(b)*r*.8);c.lineTo(BX+cos(b)*(r+16),96+sin(b)*(r+16)*.8)})}
    c.lineWidth=3.5;for(const[k,[x,y,o]]of[[134,36,0],[236,58,.2],[230,130,.45],[142,112,.3],[214,20,.6]].entries()){const r=sin(PI*min(1,max(0,(q-o)*2.2)));if(r>.1)c.fillStyle=SP[k],spark(c,x,y,13*r)}}
}

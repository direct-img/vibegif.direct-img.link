// chestnut haired office girl with a messy side bun and a pencil in it, her printer spits pages flying wildly then jams with a crumpled sheet, rattles and puffs smoke while she pats it all flustered
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#9c5b35',HD='#663818',HL='#ecc9ac',EYE='#40c057',ED='#2b8a3e',CAR='#fcc2d7',CAD='#f06595',BL='#ffa8a8',MO='#c92a2a',PR='#e9ecef',PRD='#adb5bd',SLT='#343a40',SCR='#a5d8ff',PEN='#ffd43b',SM='#ced4da',SW='#a5d8ff',LN='#a5d8ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const cl=(t,a,b)=>min(1,max(0,(t-a)/(b-a)))
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,4.5,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const sheet=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,1);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.rect(-14,-18,28,36);c.fill();c.stroke()
  c.strokeStyle=LN;c.lineWidth=3;c.beginPath();for(const y of[-9,-2,5])c.moveTo(-8,y),c.lineTo(8,y);c.stroke();c.restore()}
export default(c,t,i)=>{
  const jam=t>=.42,sh=jam&&t<.9?(i%2?2.5:-2.5):0,pt=jam&&t>=.46&&t<.92,ph=pt?8*abs(sin(3*PI*cl(t,.46,.92))):0,jo=jam?1-cl(t,.82,.96):0
  const H=f=>{c.save();c.translate(78,210);c.rotate(jam?-.06:0);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HAIR;c.save();c.translate(70,46);c.rotate(-.6)
    c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
    for(const[a,l]of[[-2.2,22],[-1.4,18],[-.4,20],[2.6,16]]){c.beginPath();c.moveTo(cos(a)*26,sin(a)*26);c.quadraticCurveTo(cos(a+.3)*(30+l),sin(a+.3)*(30+l),cos(a+.5)*(26+l),sin(a+.5)*(26+l));c.stroke()}
    c.strokeStyle=HL;c.lineWidth=6;c.beginPath();c.arc(0,0,18,PI*1.1,PI*1.5);c.stroke();c.strokeStyle='#111'
    ds(c,13,6,PEN,()=>{c.moveTo(-40,8);c.lineTo(36,-8)});c.fillStyle='#ff8787';c.lineWidth=5;c.beginPath();c.arc(-42,9,5,0,T);c.fill();c.stroke();c.restore()
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,160);c.quadraticCurveTo(208,186,190,196);c.lineTo(66,196);c.quadraticCurveTo(48,186,50,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=CAR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*30,188),c.lineTo(128+d*36,214),c.closePath(),c.fill(),c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(128,206);c.lineTo(128,330);c.stroke()
    c.fillStyle=CAD;for(const y of[236,268])c.beginPath(),c.arc(140,y,5,0,T),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(jam){c.lineWidth=7;for(const x of[103,153]){c.beginPath();for(let a=0;a<T*1.6;a+=.3){const r=2+a*1.6;a?c.lineTo(x+cos(a+i)*r,142+sin(a+i)*r):c.moveTo(x+cos(a+i)*r,142+sin(a+i)*r)}c.stroke()}}
    else eye(c,103,140,-1,5,-6),eye(c,153,140,1,5,-6)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,168),c.lineTo(128+d*44+k+2,160),c.stroke()
    c.lineWidth=5;c.fillStyle=MO
    if(jam){c.beginPath();c.moveTo(112,172);for(let k=1;k<=4;k++)c.lineTo(112+k*8,k%2?166:172);c.stroke()}
    else{c.beginPath();c.ellipse(128,172,7,8,0,0,T);c.fill();c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,180,104);c.quadraticCurveTo(170,100,164,112);c.quadraticCurveTo(160,96,146,90);c.quadraticCurveTo(142,104,132,110)
    c.quadraticCurveTo(128,96,118,88);c.quadraticCurveTo(112,104,102,108);c.quadraticCurveTo(98,94,88,92);c.quadraticCurveTo(84,106,80,110)
    c.quadraticCurveTo(70,126,68,150);c.closePath();c.fill();c.stroke()
    c.lineWidth=6;for(const[x,y,a,b]of[[150,40,170,22],[176,62,198,52],[110,38,104,16]])c.beginPath(),c.moveTo(x,y),c.quadraticCurveTo((x+a)/2+6,(y+b)/2+4,a,b),c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
    if(jam){c.fillStyle=SW;c.lineWidth=6;for(const[x,y]of[[200,100],[212,132]])c.beginPath(),c.moveTo(x,y-16),c.quadraticCurveTo(x+11,y,x,y+6),c.quadraticCurveTo(x-11,y,x,y-16),c.fill(),c.stroke()}
  })
  c.save();c.translate(sh,0)
  c.save();c.translate(178,104);c.rotate(-.08);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.rect(-30,-22,60,40);c.fill();c.stroke()
  c.strokeStyle=LN;c.lineWidth=3;c.beginPath();for(const y of[-12,-4,4])c.moveTo(-20,y),c.lineTo(20,y);c.stroke();c.restore()
  c.fillStyle=PRD;c.lineWidth=6;c.beginPath();c.roundRect(122,116,114,26,8);c.fill();c.stroke()
  c.fillStyle=PR;c.beginPath();c.roundRect(112,134,134,74,12);c.fill();c.stroke()
  c.fillStyle=SCR;c.lineWidth=4;c.beginPath();c.roundRect(192,146,30,16,4);c.fill();c.stroke()
  c.fillStyle=jam?(i%2?'#ff6b6b':'#ffc9c9'):'#69db7c';c.beginPath();c.arc(232,154,5,0,T);c.fill();c.stroke()
  c.fillStyle=SLT;c.lineWidth=5;c.beginPath();c.roundRect(130,176,98,10,5);c.fill();c.stroke()
  c.fillStyle=PRD;c.lineWidth=5;c.beginPath();c.moveTo(124,206);c.lineTo(234,206);c.lineTo(242,222);c.lineTo(116,222);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(122,152);c.lineTo(122,196);c.stroke();c.strokeStyle='#111'
  if(jo>.2){const h=40*jo,P=[[146,182],[150,182-h*.7],[160,182-h*.95],[168,182-h*.6],[178,182-h],[188,182-h*.55],[198,182-h*.9],[208,182-h*.65],[212,182]];c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(const[x,y]of P)c.lineTo(x,y);c.closePath();c.fill();c.stroke()
    c.strokeStyle=PRD;c.lineWidth=3;c.beginPath();for(const k of[2,4,6])c.moveTo(P[k][0],P[k][1]+4),c.lineTo(P[k][0]+(k%4?-4:4),180);c.stroke();c.strokeStyle='#111'}
  c.restore()
  if(jam){const q=cl(t,.42,1),z=sin(PI*min(1,q*1.25));if(z>.05){c.fillStyle=SM;c.lineWidth=5;c.beginPath();for(const[x,y,r]of[[150,104,13],[168,88,18],[192,94,14],[178,66,13]])c.moveTo(x+4*q+r*z,y-44*q),c.arc(x+4*q,y-44*q,r*z,0,T);c.stroke();c.fill()}}
  if(!jam)for(let k=0;k<5;k++){const p=cl(t,k*.07-.04,k*.07+.22);if(p>0&&p<1){const vx=[-80,70,-20,104,30][k];sheet(c,178+vx*p,176-240*p+60*p*p,(k%2?1:-1)*T*p*.8,cos(T*p*1.5))}}
  if(t>=.42&&t<.52)for(const[a,r]of[[-.4,48],[.3,48],[-1.1,44]])ds(c,7,3,'#ffd43b',()=>{c.moveTo(178+cos(a-PI/2)*r,190+sin(a-PI/2)*r*.9);c.lineTo(178+cos(a-PI/2)*(r+16),190+sin(a-PI/2)*(r+16)*.9)})
  const hx=132,hy=124-ph
  ds(c,22,13,CAR,()=>{c.moveTo(118,240);c.quadraticCurveTo(150,200,hx-2,hy+12)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy+4,13,10,-.2,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const k of[-4,2,8])c.moveTo(hx+k,hy+9),c.lineTo(hx+k+2,hy+14);c.stroke()
  if(pt&&ph>5)ds(c,7,3,'#fff',()=>{c.moveTo(hx-14,hy-6);c.lineTo(hx-22,hy-12);c.moveTo(hx+8,hy-10);c.lineTo(hx+12,hy-20)})
}

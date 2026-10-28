// plum bob girl waiting in line with ticket 42, glancing up as the hanging counter dings 39 40 41, then it hits 42, the display turns green and she lights up waving her ticket
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=100
const SKIN='#ffe3d1',HAIR='#b565bd',HD='#7e3a8c',HL='#f6e3f8',EYE='#fab005',ED='#e67700',CA='#96f2d7',CD='#20c997',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',TK='#ffc9c9',TKD='#fa5252',BOX='#495057',SCR='#212529',RD='#ff6b6b',GR='#69db7c',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const SG=['abcdef','bc','abged','abgcd','fgbc','afgcd','afgedc','abc','abcdefg','abcdfg']
const seg=(c,x,y,w,h,s)=>{const P={a:[0,0,w,0],b:[w,0,w,h],c:[w,h,w,2*h],d:[0,2*h,w,2*h],e:[0,h,0,2*h],f:[0,0,0,h],g:[0,h,w,h]};c.beginPath();for(const k of s){const[a,b,e,f]=P[k];c.moveTo(x+a,y+b);c.lineTo(x+e,y+f)}c.stroke()}
const num=(c,x,y,w,h,n,g)=>{for(const[k,d]of[...String(n)].entries())seg(c,x+k*g,y,w,h,SG[d])}
const eye=(c,x,y,d,gx,gy,lid)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill()
  if(lid){c.fillStyle=SKIN;c.fillRect(x-16,y-20,32,lid);c.restore();c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-20+lid);c.lineTo(x+16,y-20+lid);c.lineTo(x+d*21,y-24+lid);c.stroke();return}
  c.restore();c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t,i)=>{
  const n=i<3?39:i<6?40:i<9?41:42,win=n==42,fr=i==3||i==6||i==9,u=win?(i-9)/6:0
  const hop=win?-10*sin(PI*min(1,u*2.2)):2*sin(T*i/3),ty=win?-18:0,ta=win?-.2+.12*sin(T*u*2):-.12+.06*sin(T*i/3)
  c.lineWidth=5;c.beginPath();c.moveTo(42,0);c.lineTo(42,14);c.moveTo(112,0);c.lineTo(112,14);c.stroke()
  c.fillStyle=BOX;c.lineWidth=6;c.beginPath();c.roundRect(14,14,126,76,14);c.fill();c.stroke()
  c.fillStyle=SCR;c.lineWidth=4;c.beginPath();c.roundRect(26,25,102,54,8);c.fill();c.stroke()
  c.strokeStyle=win?'#2b5f34':'#5c2626';c.lineWidth=7;num(c,48,32,20,20,88,40)
  c.shadowColor=win?GR:RD;c.shadowBlur=8;c.strokeStyle=win?GR:RD;num(c,48,32,20,20,n,40);c.shadowBlur=0;c.strokeStyle='#111'
  if(fr||win&&i<12)for(const[x,y,a]of[[146,24,-.6],[148,52,0],[146,80,.6]])ds(c,7,3,SP,()=>{c.moveTo(x+cos(a)*2,y+sin(a)*2);c.lineTo(x+cos(a)*14,y+sin(a)*14)})
  const H=f=>{c.save();c.translate(176,212+hop);c.scale(.74,.74);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,216,100,210,170);c.quadraticCurveTo(210,186,196,188);c.lineTo(60,188);c.quadraticCurveTo(46,186,46,170);c.bezierCurveTo(40,100,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=CA;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(102,188);c.lineTo(128,250);c.lineTo(154,188);c.closePath();c.fill();c.stroke()
    c.fillStyle=TG;c.lineWidth=6;c.beginPath();c.moveTo(128,206);c.lineTo(114,198);c.lineTo(114,214);c.closePath();c.moveTo(128,206);c.lineTo(142,198);c.lineTo(142,214);c.closePath();c.fill();c.stroke()
    c.fillStyle=CD;for(const y of[262,290])c.beginPath(),c.arc(150,y,5,0,T),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(win){eye(c,103,140,-1,0,-1,0);eye(c,153,140,1,0,-1,0);c.fillStyle=SP;c.lineWidth=3;for(const x of[99,149])star(c,x,134,7)}
    else{const g=fr;eye(c,103,140,-1,-4,g?-6:-2,g?0:12);eye(c,153,140,1,-4,g?-6:-2,g?0:12)}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,win?16:13,win?9:7,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(win){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
    else if(fr){c.beginPath();c.ellipse(128,170,5,6,0,0,T);c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(120,170);c.lineTo(136,169);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,184)
    c.bezierCurveTo(36,74,86,36,128,36);c.bezierCurveTo(170,36,220,74,200,184);c.lineTo(178,184)
    c.quadraticCurveTo(184,130,178,104);c.lineTo(166,112);c.lineTo(158,96);c.lineTo(146,110);c.lineTo(136,94);c.lineTo(124,110);c.lineTo(112,94);c.lineTo(102,110);c.lineTo(92,96);c.lineTo(80,108)
    c.quadraticCurveTo(72,130,78,184);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SP;c.lineWidth=6;c.save();c.translate(78,74);c.rotate(-.5);star(c,0,0,14);c.restore()
  })
  const hx=92,hy=204+ty+hop*.6
  ds(c,22,13,CA,()=>{c.moveTo(126,262);c.quadraticCurveTo(122,hy+30,hx+8,hy+12)})
  c.save();c.translate(hx-28,hy-4);c.rotate(ta)
  c.fillStyle=TK;c.lineWidth=6;c.beginPath();c.moveTo(-40,-24);c.lineTo(40,-24);c.arc(40,0,8,-PI/2,PI/2,true);c.lineTo(40,24);c.lineTo(-40,24);c.arc(-40,0,8,PI/2,-PI/2,true);c.closePath();c.fill();c.stroke()
  c.strokeStyle=TKD;c.lineWidth=3;c.setLineDash([5,5]);c.beginPath();c.moveTo(-24,-18);c.lineTo(-24,18);c.stroke();c.setLineDash([])
  c.lineWidth=7;c.strokeStyle='#111';num(c,-12,-15,12,15,42,24)
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx+4,hy+6,12,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(hx-2,hy);c.lineTo(hx+6,hy-2);c.moveTo(hx-2,hy+7);c.lineTo(hx+7,hy+5);c.stroke()
  if(win){c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[30,150,0],[132,148,.2],[44,250,.35],[232,120,.1]]){const r=13*sin(PI*min(1,max(0,(u-o)/.6)));if(r>1)star(c,x,y,r)}}
}

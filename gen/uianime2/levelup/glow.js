// electric blue girl with a spiky high ponytail clenching her fists and powering up in a flickering aura as her XP bar fills, then a LV UP sign with up arrows bursts out and she cheers before the bar resets
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#339af0',HD='#1864ab',HL='#d0ebff',EYE='#fab005',ED='#e67700',TOP='#fa5252',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',AU='#fff3bf',AD='#ffd43b',XP='#69db7c',XD='#2f9e44',UP='#ffd43b',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-18,y-22);c.lineTo(x+18,y-22);c.lineTo(x-d*18,y-12);c.lineTo(x+d*18,y-4);c.closePath();c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-d*16,y-11);c.lineTo(x+d*16,y-3);c.moveTo(x+d*14,y-4);c.lineTo(x+d*21,y-7);c.stroke()
}
const GL={L:x=>[[x,0],[x,20],[x+11,20]],V:x=>[[x,0],[x+6,20],[x+12,0]],P:x=>[[x,20],[x,0],[x+7,0],[x+12,3],[x+12,8],[x+7,11],[x,11]],X:x=>[[x,0],[x+12,20],null,[x+12,0],[x,20]],U:x=>[[x,0],[x,14],[x+3,20],[x+9,20],[x+12,14],[x+12,0]],'!':x=>[[x+2,0],[x+2,12],null,[x+2,20],[x+2,20.5]]}
const txt=(c,s,x,y,sc,a,b,col)=>ds(c,a,b,col,()=>{let o=0;for(const ch of s){if(GL[ch]){let m=1;for(const p of GL[ch](o)){if(!p){m=1;continue}const px=x+p[0]*sc,py=y+p[1]*sc;m?c.moveTo(px,py):c.lineTo(px,py);m=0}}o+=ch==' '?8:ch=='!'?8:18}})
const arrow=(c,x,y,s,f)=>{c.save();c.translate(x,y);c.scale(s,s);c.fillStyle=f;c.lineWidth=6/s;c.beginPath();c.moveTo(0,-28);c.lineTo(24,-4);c.lineTo(10,-4);c.lineTo(10,22);c.lineTo(-10,22);c.lineTo(-10,-4);c.lineTo(-24,-4);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4/s;c.beginPath();c.moveTo(-4,-18);c.lineTo(-14,-8);c.stroke();c.restore()}
export default(c,t,i)=>{
  const chg=i<8,lv=i>=8&&i<14,fill=chg?i/7:lv?1:1-(i-13)/2,jx=chg?(i%2?1.5:-1.5)*(.4+i/7):0,g=chg?.55+.45*i/7:lv?1:.7-.3*(i-14)
  const by=lv?-10*sin(PI*min(1,(i-8)/3)):0
  c.save();c.translate(128,150);c.scale(g,g);c.fillStyle=AU;c.strokeStyle=AD;c.lineWidth=7/g;c.beginPath()
  for(let k=0;k<=24;k++){const a=PI/2+k*T/24,top=-sin(a),r=(k%2?92:108+14*top*(1+.4*sin(T*t*4+k)))*(1+.12*max(0,top));c.lineTo(cos(a)*r*1.05,sin(a)*r*(1+.2*max(0,top))+18)}
  c.closePath();c.fill();c.stroke();c.restore()
  for(let k=0;k<6;k++){const q=(t*2+k/6)%1,x=[34,64,96,160,192,222][k],y=200-150*q;if(q>.1&&q<.9)ds(c,8,4,SP,()=>{c.moveTo(x,y);c.lineTo(x,y+18+k%2*8)})}
  const H=f=>{c.save();c.translate(128+jx,192+by);c.scale(.68,.68);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.save();c.translate(150,44);c.rotate(.3+.08*sin(T*t*4))
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(-26,10);c.lineTo(-40,-40);c.lineTo(-14,-24);c.lineTo(-6,-78);c.lineTo(10,-36);c.lineTo(36,-84);c.lineTo(34,-30);c.lineTo(66,-56);c.lineTo(48,-10);c.lineTo(78,-14);c.lineTo(30,18);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.lineTo(20,-50);c.moveTo(14,6);c.lineTo(48,-30);c.stroke();c.strokeStyle='#111'
    c.fillStyle=TOP;c.lineWidth=7;c.beginPath();c.ellipse(0,12,20,11,-.3,0,T);c.fill();c.stroke();c.restore()
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.lineTo(194,190);c.lineTo(62,190);c.lineTo(52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(104,188);c.lineTo(128,214);c.lineTo(152,188);c.lineTo(156,204);c.lineTo(128,226);c.lineTo(100,204);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*60,212),c.lineTo(128+d*76,330),c.stroke();c.strokeStyle='#111'
    c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(lv){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,142,-1),eye(c,153,142,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,168),c.lineTo(128+d*44+k+2,160),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(lv){c.beginPath();c.moveTo(110,163);c.quadraticCurveTo(128,168,146,163);c.quadraticCurveTo(144,190,128,190);c.quadraticCurveTo(112,190,110,163);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,192,10,8,0,0,T);c.fill();c.restore()}
    else{c.fillStyle='#fff';c.beginPath();c.roundRect(110,164,36,16,6);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(112,172);c.lineTo(144,172);for(const x of[122,134])c.moveTo(x,165),c.lineTo(x,179);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.lineTo(180,108);c.lineTo(168,114);c.lineTo(160,92);c.lineTo(146,108);c.lineTo(134,84);c.lineTo(124,108)
    c.lineTo(110,88);c.lineTo(100,110);c.lineTo(88,96);c.lineTo(82,116);c.lineTo(76,108);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
  })
  for(const d of[-1,1]){const sx=128+d*30+jx,sy=210+by,fx=lv?128+d*70:128+d*24+jx,fy=lv?110+by:208+(chg?(i%2)*2:0)
    ds(c,22,14,TOP,()=>{c.moveTo(sx,sy);lv?c.quadraticCurveTo(128+d*76,190,fx,fy+10):c.quadraticCurveTo(128+d*64,226,fx+d*8,fy+4)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.roundRect(fx-12,fy-11,24,22,9);c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();for(const k of[-4,4])c.moveTo(fx+k,fy-11),c.lineTo(fx+k,fy-4);c.stroke()}
  if(chg&&i>2)ds(c,7,3,'#fff',()=>{for(const d of[-1,1])for(const k of[0,1]){const x=128+d*(46+k*10),y=196+k*8;c.moveTo(x,y);c.lineTo(x+d*10,y-4)}})
  txt(c,'XP',8,226,.9,10,5,XP)
  c.fillStyle='#343a40';c.lineWidth=6;c.beginPath();c.roundRect(42,222,206,26,13);c.fill();c.stroke()
  const w=(206-10)*fill;if(w>4){c.save();c.beginPath();c.roundRect(47,227,w,16,8);c.fillStyle=lv&&i%2?'#b2f2bb':XP;c.fill();c.clip();c.strokeStyle=XD;c.lineWidth=4;c.beginPath();for(let x=30+(i*4)%14;x<260;x+=14)c.moveTo(x,250),c.lineTo(x+12,222);c.stroke();c.restore();c.strokeStyle='#111'}
  if(i>=8){const q=min(1,(i-7)/2),s=i<14?(q<1?1.2*q+.2:1)*(i==9?1.1:1):1-(i-13)*.3,y=36+20*(1-q)
    if(s>.5){c.save();c.translate(128,y);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.roundRect(-64,-24,128,48,16);c.fill();c.stroke();txt(c,'LV UP!',-50,-10,1,11,5.5,UP);c.restore()
      for(const d of[-1,1])arrow(c,128+d*92,110-30*q-10*abs(sin(T*t*2)),s*.9,UP)}}
}

// leaf green haired girl in a straw hat tracks a little buzzing red bug looping figure eights, swoops her butterfly net and bags it with a cheer, then it wriggles free and buzzes off again
const{sin,cos,PI,max,min,atan2}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#94d82d',HD='#5c940d',HL='#f4fce3',EYE='#ff922b',ED='#d9480f',SH='#ffd8a8',SHD='#f08c00',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',HAT='#ffe066',HTD='#e8b93c',RIB='#4dabf7',POLE='#c0805a',RIM='#ff8787',BUG='#ff6b6b',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const bug=(c,x,y,a,i,mad)=>{c.save();c.translate(x,y);c.rotate(a)
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-1,0,1])c.beginPath(),c.moveTo(k*6,d*7),c.lineTo(k*6+(i%2?2:-2),d*15),c.stroke()
  c.fillStyle='rgba(231,245,255,.85)';c.lineWidth=3;const w=i%2?1:.55;for(const d of[-1,1])c.beginPath(),c.ellipse(-2,d*12*w,11,7*w,d*.5,0,T),c.fill(),c.stroke()
  c.fillStyle=BUG;c.lineWidth=4;c.beginPath();c.ellipse(-2,0,13,11,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-15,0);c.lineTo(10,0);c.stroke();c.fillStyle='#111';for(const[sx,sy]of[[-6,-5],[-6,5],[2,-6],[2,6]])c.beginPath(),c.arc(sx,sy,2.4,0,T),c.fill()
  c.fillStyle='#343a40';c.lineWidth=4;c.beginPath();c.arc(13,0,7.5,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;for(const d of[-1,1])c.beginPath(),c.moveTo(17,d*4),c.quadraticCurveTo(24,d*6,26,d*12),c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(15,d*3,2.4,0,T),c.fill()
  if(mad){c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(10,-6);c.lineTo(14,-3);c.moveTo(10,6);c.lineTo(14,3);c.stroke()}
  c.restore()}
const PX=132,PY=198,PL=100,BX=204,BY=92,lis=u=>[BX-30*sin(T*u),BY-28*sin(2*T*u)]
export default(c,t,i)=>{
  const fly=t<.5||t>=.88,th=t<.42?-1.6+.06*sin(T*t*2/.42):t<.52?-1.6+.76*ez(t,.42,.52):t<.88?-.84+.06*ez(t,.52,.62):-.78-.82*ez(t,.88,1)
  const hx=PX+cos(th)*PL,hy=PY+sin(th)*PL,dx=cos(th),dy=sin(th),got=t>=.52&&t<.88,sw=t>=.42&&t<.52
  let bx,by,ba;if(t<.5){const u=t/.5;[bx,by]=lis(u);const[nx,ny]=lis(u+.01);ba=atan2(ny-by,nx-bx)}else if(t>=.88){const u=ez(t,.88,1);bx=hx+dx*24+(BX-hx-dx*24)*u;by=hy+dy*24+40+(BY-hy-dy*24-40)*u;ba=-1.2+1.2*u}else{bx=hx+dx*24+5+4*sin(T*t*6);by=hy+dy*24+42;ba=PI/2+.4*sin(T*t*5)}
  const gx=max(-5,min(6,(bx-70)/14)),gy=max(-6,min(4,(by-150)/14))
  const H=f=>{c.save();c.translate(66,212);c.scale(.66,.66);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,150);c.quadraticCurveTo(210,180,196,190);c.lineTo(60,190);c.quadraticCurveTo(46,180,50,150);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=SH;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,208),c.lineTo(128+d*32,188),c.lineTo(128+d*40,214),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SH;c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*38-16,236,32,30,4),c.fill(),c.stroke(),c.beginPath(),c.moveTo(128+d*38-16,246),c.lineTo(128+d*38+16,246),c.stroke()
    c.strokeStyle=SHD;c.lineWidth=5;c.beginPath();c.moveTo(128,212);c.lineTo(128,330);c.stroke();c.strokeStyle='#111'
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(got){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else eye(c,103,140,-1,gx,gy),eye(c,153,140,1,gx,gy)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(got){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
    else if(sw||t>=.88){c.beginPath();c.ellipse(128,171,7,8,0,0,T);c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,174,138,168);c.stroke();c.fillStyle=TG;c.lineWidth=4;c.beginPath();c.ellipse(122,174,5,6,.3,0,T);c.fill();c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,194,176);c.quadraticCurveTo(186,170,184,180);c.quadraticCurveTo(184,140,178,104)
    c.quadraticCurveTo(168,102,162,112);c.quadraticCurveTo(156,96,144,92);c.quadraticCurveTo(140,106,130,112);c.quadraticCurveTo(124,96,112,92);c.quadraticCurveTo(108,104,100,110)
    c.quadraticCurveTo(94,98,86,98);c.quadraticCurveTo(82,108,80,112);c.quadraticCurveTo(72,140,74,180);c.quadraticCurveTo(68,170,62,176);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.save();c.translate(128,60);c.rotate(-.1)
    c.fillStyle=HAT;c.lineWidth=8;c.beginPath();c.ellipse(0,8,96,20,0,0,T);c.fill();c.stroke()
    c.beginPath();c.moveTo(-54,10);c.bezierCurveTo(-54,-48,54,-48,54,10);c.quadraticCurveTo(0,20,-54,10);c.fill();c.stroke()
    c.fillStyle=RIB;c.beginPath();c.moveTo(-54,-2);c.quadraticCurveTo(0,8,54,-2);c.lineTo(54,10);c.quadraticCurveTo(0,20,-54,10);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HTD;c.lineWidth=4;c.beginPath();c.ellipse(0,8,80,13,0,.1*PI,.9*PI);c.stroke()
    c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(0,4,38,PI*1.2,PI*1.42);c.stroke();c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=5;for(let k=0;k<5;k++)c.beginPath(),c.ellipse(40+cos(k*T/5)*8,0+sin(k*T/5)*8,6,6,0,0,T),c.fill(),c.stroke()
    c.fillStyle=SP;c.beginPath();c.arc(40,0,5,0,T);c.fill();c.stroke();c.restore()
  })
  if(fly){c.fillStyle='#adb5bd';for(let k=1;k<=4;k++){const u=t<.5?t/.5-k*.035:0;if(t<.5&&u>0){const[x,y]=lis(u);c.beginPath();c.arc(x,y,3-k*.4,0,T);c.fill()}}}
  ds(c,11,5,POLE,()=>{c.moveTo(PX-dx*20,PY-dy*20);c.lineTo(hx,hy)})
  const cx=hx+dx*24,cy=hy+dy*24,[tx,ty]=sw?[cx-34,cy+36]:t>=.88?[cx+20,cy+56]:[cx+4+(got?4*sin(T*t*6):0),cy+64]
  const sk=()=>{c.beginPath();c.moveTo(cx-24,cy);c.bezierCurveTo(cx-30,cy+26,tx-18,ty,tx,ty);c.bezierCurveTo(tx+18,ty,cx+30,cy+26,cx+24,cy);c.arc(cx,cy,24,0,PI,true);c.closePath()}
  c.save();sk();c.fillStyle='rgba(255,255,255,.6)';c.fill()
  sk();c.clip();c.strokeStyle='rgba(134,142,150,.8)';c.lineWidth=2;c.beginPath();for(let k=-70;k<70;k+=9)c.moveTo(cx+k-50,cy-30),c.lineTo(cx+k+50,cy+70),c.moveTo(cx+k+50,cy-30),c.lineTo(cx+k-50,cy+70);c.stroke();c.restore()
  if(got)bug(c,bx,by,ba,i,1)
  c.lineWidth=5;c.beginPath();c.moveTo(cx-24,cy);c.bezierCurveTo(cx-30,cy+26,tx-18,ty,tx,ty);c.bezierCurveTo(tx+18,ty,cx+30,cy+26,cx+24,cy);c.stroke()
  ds(c,10,5,RIM,()=>{c.arc(cx,cy,24,0,T)})
  if(fly)bug(c,bx,by,ba,i,t>=.88)
  if(sw)for(const k of[0,1,2])ds(c,7,3,'#fff',()=>{c.arc(PX,PY,PL+18+k*10,th-.7+k*.1,th-.2+k*.1)})
  if(got){const q=(t-.52)/.36;c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[cx-30,cy-34,0],[cx-42,cy+8,.15],[cx-4,cy-44,.3]]){const r=12*sin(PI*min(1,max(0,(q-o)/.55)));if(r>1)star(c,x,y,r)}}
  ds(c,22,13,SH,()=>{c.moveTo(104,250);c.quadraticCurveTo(116,214,PX-4,PY+8)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(PX,PY,12,12,0,0,T);c.fill();c.stroke()
}

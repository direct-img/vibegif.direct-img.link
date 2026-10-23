// girl with a scarlet bob and sweatband leaps and smashes a falling shuttlecock, which rockets off with speed lines
const{sin,cos,PI,max,min,hypot,sqrt,atan2}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#f03e3e',HD='#c92a2a',HL='#ffc9c9',EYE='#fab005',ED='#e67700',JER='#9775fa',JD='#7048e8',SH='#364fc7',BAND='#fff',RQ='#fcc419',BL='#ffa8a8'
const eye=(c,x,y,d,lx,ly)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();const X=x+lx,Y=y+ly
  c.beginPath();c.ellipse(X,Y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(X,Y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(X,Y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(X+1,Y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(X-3,Y-5,4.5,0,T);c.fill();c.beginPath();c.arc(X+6,Y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const ik=(hx,hy,fx,fy,L,s=1)=>{const dx=fx-hx,dy=fy-hy,d=hypot(dx,dy),k=sqrt(max(0,L*L-d*d/4));return[hx+dx/2+s*dy/d*k,hy+dy/2-s*dx/d*k]}
const ss=u=>u*u*(3-2*u)
const key=(K,t)=>{let k=0;while(k<K.length-2&&t>=K[k+1][0])k++;const[t0,...a]=K[k],[t1,...b]=K[k+1],u=ss(min(1,max(0,(t-t0)/(t1-t0))));return a.map((v,j)=>v+(b[j]-v)*u)}
const RK=[[0,24,22,-.9],[.14,24,22,-.9],[.36,-8,-26,1.9],[.44,-4,-36,3.6],[.48,30,-34,5.35],[.6,30,24,7.1],[.82,24,22,5.38],[1,24,22,5.38]]
const cock=(c,x,y,a,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-4,-6);c.lineTo(-24,-13);c.quadraticCurveTo(-28,0,-24,13);c.lineTo(-4,6);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const k of[-7,0,7])c.beginPath(),c.moveTo(-5,k*.5),c.lineTo(-25,k*1.4),c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(-15,-9);c.quadraticCurveTo(-17,0,-15,9);c.stroke()
  c.fillStyle='#ff6b6b';c.lineWidth=4;c.beginPath();c.arc(0,0,7,-PI/2,PI/2);c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  const h=t>.28&&t<.7?32*sin(PI*(t-.28)/.42):0,cr=t>.16&&t<.28?7*sin(PI*(t-.16)/.12):t>.7&&t<.84?8*sin(PI*(t-.7)/.14):0,oy=cr-h
  const sh=[112,138+oy],[rdx,rdy,ra]=key(RK,t),hd=[sh[0]+rdx,sh[1]+rdy],air=h>6
  const up=t>.18&&t<.5,hit=t>.46&&t<.56
  c.translate(128,244);c.scale(.9,.9);c.translate(-128,-244)
  c.fillStyle='#dee2e6';c.beginPath();c.ellipse(108,234,40*(1-h/90),6*(1-h/90),0,0,T);c.fill()
  const oa=up?[sh[0]+38,sh[1]-6]:[sh[0]+18,sh[1]+24]
  line(c,[[sh[0]-4,sh[1]+2],[(sh[0]+oa[0])/2+4,(sh[1]+oa[1])/2+6],oa],7,SKIN)
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(...oa,6,0,T);c.fill();c.stroke()
  const hip=[104,180+oy]
  for(const[d,s]of[[-1,1],[1,-1]]){const f=air?[hip[0]+(d<0?-22:10),hip[1]+(d<0?30:38)]:[hip[0]+d*14,224],k=ik(...hip,f[0],f[1]-4,27,d<0?-1:1);line(c,[hip,k,[f[0],f[1]-4]],8,SKIN)
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(f[0]+4,f[1],12,7,air&&d<0?.5:0,0,T);c.fill();c.stroke();c.strokeStyle='#ff6b6b';c.lineWidth=3;c.beginPath();c.moveTo(f[0]-2,f[1]-2);c.lineTo(f[0]+10,f[1]-2);c.stroke();c.strokeStyle='#111'}
  c.fillStyle=SH;c.lineWidth=5;c.beginPath();c.moveTo(90,168+oy);c.lineTo(120,168+oy);c.lineTo(124,190+oy);c.lineTo(86,190+oy);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(106,124+oy,12,10);c.fill()
  c.fillStyle=JER;c.lineWidth=5;c.beginPath();c.moveTo(98,130+oy);c.lineTo(124,130+oy);c.lineTo(132,142+oy);c.lineTo(126,172+oy);c.lineTo(88,172+oy);c.lineTo(90,140+oy);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(92,156+oy);c.lineTo(128,152+oy);c.stroke();c.strokeStyle='#111'
  const bk=t>.2&&t<.47,arm=()=>{
  c.save();c.translate(...hd);c.rotate(ra)
  line(c,[[0,0],[40,0]],3,'#e9ecef');c.fillStyle='#fff';c.beginPath();c.ellipse(58,0,18,13,0,0,T);c.fill();c.save();c.clip();c.strokeStyle='#ced4da';c.lineWidth=1.5;for(let k=-18;k<=18;k+=5)c.beginPath(),c.moveTo(40,k),c.lineTo(76,k),c.moveTo(58+k,-14),c.lineTo(58+k,14),c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=9;c.beginPath();c.ellipse(58,0,18,13,0,0,T);c.stroke();c.strokeStyle=RQ;c.lineWidth=4;c.stroke();c.strokeStyle='#111'
  c.fillStyle=JD;c.lineWidth=4;c.beginPath();c.roundRect(-8,-4,16,8,3);c.fill();c.stroke();c.restore()
  line(c,[sh,[(sh[0]+hd[0])/2+(rdy<0?-10:8),(sh[1]+hd[1])/2+(rdy<0?2:6)],hd],8,SKIN)
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(...hd,6.5,0,T);c.fill();c.stroke()
  }
  if(bk)arm()
  const head=g=>{c.save();c.translate(114,92+oy);c.rotate(up?-.12:0);c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  head(()=>{
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(126,34);c.bezierCurveTo(196,34,210,96,196,170);c.quadraticCurveTo(178,178,166,166);c.lineTo(70,166);c.quadraticCurveTo(54,178,46,160);c.bezierCurveTo(40,96,56,34,126,34);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(78,96);c.bezierCurveTo(74,152,104,184,132,186);c.bezierCurveTo(160,184,190,152,186,96);c.bezierCurveTo(186,44,78,44,78,96);c.fill();c.stroke()
    if(hit){c.lineWidth=8;for(const[x,d]of[[108,1],[158,-1]])c.beginPath(),c.moveTo(x-12*d,128),c.lineTo(x+10*d,140),c.lineTo(x-12*d,152),c.stroke()}else eye(c,108,140,-1,4,up?-5:0),eye(c,158,140,1,4,up?-5:0)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(134+d*42,162,12,6,0,0,T),c.fill()
    c.fillStyle='#c92a2a';c.lineWidth=6;c.beginPath()
    if(hit||air)c.moveTo(120,164),c.quadraticCurveTo(138,190,152,164),c.closePath(),c.fill();else c.moveTo(126,168),c.quadraticCurveTo(136,174,146,166)
    c.stroke()
    c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(70,150);c.bezierCurveTo(56,74,92,40,132,40);c.bezierCurveTo(176,40,206,78,192,150)
    c.lineTo(184,112);c.lineTo(174,118);c.lineTo(166,104);c.lineTo(156,116);c.lineTo(146,100);c.lineTo(136,116);c.lineTo(124,100);c.lineTo(114,116);c.lineTo(102,102);c.lineTo(92,118);c.lineTo(80,112);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[a0,a1]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(132,104,56,PI*a0,PI*a1),c.stroke();c.strokeStyle='#111'
    c.fillStyle=BAND;c.lineWidth=8;c.beginPath();c.moveTo(64,80);c.quadraticCurveTo(132,50,200,80);c.lineTo(200,96);c.quadraticCurveTo(132,66,64,96);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#ff6b6b';c.lineWidth=5;c.beginPath();c.moveTo(70,86);c.quadraticCurveTo(132,60,194,86);c.stroke();c.strokeStyle='#111'
    for(const k of[0,1]){c.save();c.translate(62,90);c.rotate(2.4+k*.5+.25*sin(T*t+k));c.fillStyle=BAND;c.lineWidth=7;c.beginPath();c.moveTo(0,-7);c.quadraticCurveTo(24,-10,40,0);c.quadraticCurveTo(24,10,0,7);c.closePath();c.fill();c.stroke();c.restore()}
  })
  if(!bk)arm()
  const C=[176,28]
  if(t<.47||t>=.84){const u=((t+.16)%1)/.63,x=226+(C[0]-226)*u+6*sin(u*PI*3),y=4+(C[1]-4)*u;cock(c,x,y,PI/2+.25*sin(u*PI*3),t>=.84?min(1,(t-.84)/.06):1)}
  else if(t<.66){const u=(t-.47)/.19,x=C[0]+u*130,y=C[1]+u*230,a=atan2(230,130)
    for(const[k,l]of[[-9,40],[0,64],[9,40]])line(c,[[x-l*cos(a)+k*sin(a),y-l*sin(a)-k*cos(a)],[x-16*cos(a)+k*sin(a),y-16*sin(a)-k*cos(a)]],3,'#fff')
    cock(c,x,y,a)}
  if(hit){c.fillStyle='#fff3bf';c.lineWidth=4;c.beginPath();for(let k=0;k<16;k++){const r=k%2?9:22,b=k*PI/8+.2;c.lineTo(C[0]+4+r*cos(b),C[1]+4+r*sin(b))}c.closePath();c.fill();c.stroke()}
}

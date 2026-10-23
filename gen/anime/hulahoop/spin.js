// girl with long magenta hair twirling a striped hula hoop around her waist, hips swaying against it, arms up
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#da3ea0',HD='#a61e7a',HL='#fcc2e7',EYE='#15aabf',ED='#0b7285',TEE='#ffd43b',TD='#f59f00',SHO='#20c997',SD='#0ca678',SHOE='#f783ac',BL='#ffa8a8',HOOP=['#ff6b6b','#ffd43b','#69db7c','#4dabf7','#b197fc','#ff922b']
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const a=T*2*t,hx=128-6*cos(a),wy=168,sx=128-2*cos(a),bob=1.5*sin(2*a)
  const hc=[hx+14*cos(a),wy+2+4*sin(a)],R=[64,15]
  const hoop=(a0,a1)=>{
    for(const[lw,s]of[[15,'#111']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.ellipse(...hc,...R,0,a0,a1),c.stroke()
    const n=12;for(let k=0;k<n;k++){const s0=((k*T/n-a*1.5)%T+T)%T;for(let j=-1;j<=1;j++){const u0=max(a0,s0+j*T),u1=min(a1,s0+T/n+j*T);if(u1>u0)c.lineWidth=8,c.strokeStyle=HOOP[k%6],c.beginPath(),c.ellipse(...hc,...R,0,u0,u1),c.stroke()}}
    c.strokeStyle='#111'
  }
  c.translate(128,150);c.scale(1.07,1.07);c.translate(-128,-150)
  c.fillStyle='#dee2e6';c.beginPath();c.ellipse(128,234,46,6,0,0,T);c.fill()
  hoop(PI,T)
  const head=g=>{c.save();c.translate(sx,90+bob);c.rotate(-.04*cos(a));c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  head(()=>{
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,212,110,208,190);c.quadraticCurveTo(216+10*cos(a),236,200+14*cos(a),262);c.quadraticCurveTo(186,252,176,264+4*sin(a));c.lineTo(80,264-4*sin(a));c.quadraticCurveTo(70,252,56+14*cos(a),262);c.quadraticCurveTo(40+10*cos(a),236,48,190);c.bezierCurveTo(44,110,56,36,128,36);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*62,150),c.quadraticCurveTo(128+d*70+8*cos(a),210,128+d*64+10*cos(a),248),c.stroke();c.strokeStyle='#111'
  })
  for(const[x,d]of[[hx-10,-1],[hx+10,1]]){const kx=(x+128+d*12)/2+d*2;line(c,[[x,186],[kx,206],[128+d*12,226]],8,SKIN)}
  for(const d of[-1,1]){c.fillStyle=SHOE;c.lineWidth=5;c.beginPath();c.ellipse(128+d*15,229,12,7,0,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(128+d*15,233,12,3,0,0,PI);c.fill()}
  c.fillStyle=SHO;c.lineWidth=5;c.beginPath();c.moveTo(hx-20,168);c.lineTo(hx+20,168);c.lineTo(hx+25,192);c.lineTo(hx+3,192);c.lineTo(hx,186);c.lineTo(hx-3,192);c.lineTo(hx-25,192);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(sx-6,124+bob,12,10);c.fill()
  c.fillStyle=TEE;c.lineWidth=5;c.beginPath();c.moveTo(sx-14,130+bob);c.lineTo(sx+14,130+bob);c.lineTo(sx+28,138+bob);c.lineTo(sx+30,148+bob);c.lineTo(sx+20,146+bob);c.lineTo(hx+21,172);c.lineTo(hx-21,172);c.lineTo(sx-20,146+bob);c.lineTo(sx-30,148+bob);c.lineTo(sx-28,138+bob);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(sx-9,131+bob);c.quadraticCurveTo(sx,139+bob,sx+9,131+bob);c.stroke()
  c.fillStyle='#ff6b6b';c.lineWidth=3.5;c.beginPath();const px=(sx+hx)/2,py=154+bob/2;c.moveTo(px,py+7);c.bezierCurveTo(px-11,py-1,px-7,py-10,px,py-4);c.bezierCurveTo(px+7,py-10,px+11,py-1,px,py+7);c.fill();c.stroke()
  head(()=>{
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,13,7,0,0,T),c.fill()
    c.fillStyle='#c92a2a';c.lineWidth=6;c.beginPath();c.moveTo(114,162);c.quadraticCurveTo(128,186,142,162);c.closePath();c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,178,9,6,0,0,T);c.fill();c.restore()
    c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(66,150);c.bezierCurveTo(50,74,90,36,132,36);c.bezierCurveTo(176,36,206,80,188,150)
    c.quadraticCurveTo(184,118,174,100);c.quadraticCurveTo(160,104,150,118);c.quadraticCurveTo(146,98,134,88);c.quadraticCurveTo(116,110,92,116);c.quadraticCurveTo(100,104,102,92);c.quadraticCurveTo(84,104,76,118);c.quadraticCurveTo(68,130,66,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[a0,a1]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a0,PI*a1),c.stroke();c.strokeStyle='#111'
    c.fillStyle='#ffd43b';c.lineWidth=6;c.beginPath();for(let k=0;k<10;k++){const r=k%2?6:14,b=k*PI/5-PI/2;c.lineTo(84+r*cos(b),74+r*sin(b))}c.closePath();c.fill();c.stroke()
  })
  for(const d of[-1,1]){const s=[sx+d*20,140+bob],w=sin(a+(d>0?PI:0)),e=[sx+d*42,118+bob],h=[sx+d*(54+4*w),78+bob-3*w];line(c,[s,e,h],8,SKIN);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.ellipse(h[0],h[1]-3,7,9,d*.3,0,T);c.fill();c.stroke()}
  hoop(0,PI)
  c.lineWidth=4;for(const d of[-1,1]){const x=hc[0]+d*78,y=hc[1]-2;c.beginPath();c.arc(x-d*14,y,16,d>0?-.5:PI-.5,d>0?.5:PI+.5);c.stroke()}
}

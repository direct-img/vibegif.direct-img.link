// a hand bumps a coffee mug, it tips and floods the laptop, the screen dies, then the whole thing rewinds like ctrl+z
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=40,delay=70,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2)
const WALL='#ffe3c2',TOP='#d9a066',EDGE='#a86b3c',MUG='#4dabf7',COF='#6b3f22',CL='#8a5530',LAP='#ced4da',LAPD='#adb5bd',SCR='#e7f5ff',SL='#4dabf7',SLV='#ff922b',SKIN='#ffd3b0'
const PX=80,PY=216
const mug=(c,a)=>{
  c.save();c.translate(PX,PY);c.rotate(a);c.lineWidth=6
  c.fillStyle=MUG;c.beginPath();c.arc(-46,-28,13,0,T);c.stroke()
  c.beginPath();c.moveTo(-44,-54);c.lineTo(-44,-8);c.quadraticCurveTo(-44,0,-36,0);c.lineTo(-8,0);c.quadraticCurveTo(0,0,0,-8);c.lineTo(0,-54);c.closePath();c.fill();c.stroke()
  c.fillStyle=COF;c.lineWidth=5;c.beginPath();c.ellipse(-22,-54,22,6,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-34,-42);c.lineTo(-34,-18);c.stroke()
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(-22,-36);c.bezierCurveTo(-34,-46,-38,-28,-22,-18);c.bezierCurveTo(-6,-28,-10,-46,-22,-36);c.fill();c.stroke()
  c.restore()
}
const scr=(c,g,i)=>{
  c.save();c.beginPath();c.rect(146,108,86,70);c.clip()
  if(g<.35){c.fillStyle=SCR;c.fillRect(146,108,86,70);c.strokeStyle=SL;c.lineWidth=5;for(const[y,w]of[[124,52],[138,64],[152,40],[166,58]])c.beginPath(),c.moveTo(156,y),c.lineTo(156+w,y),c.stroke()}
  else if(g<.75){const P=['#ff6b6b','#51cf66','#cc5de8','#fcc419','#4dabf7','#fff'];for(let k=0;k<7;k++)c.fillStyle=P[(k+i)%6],c.fillRect(146+((k*37+i*23)%17)-8,108+k*10,100,10)}
  else{c.fillStyle='#343a40';c.fillRect(146,108,86,70);c.strokeStyle='#fff';c.lineWidth=5
    for(const d of[-1,1])c.beginPath(),c.moveTo(189+d*16-5,130),c.lineTo(189+d*16+5,140),c.moveTo(189+d*16+5,130),c.lineTo(189+d*16-5,140),c.stroke()
    c.beginPath();c.arc(189,168,13,PI*1.15,PI*1.85);c.stroke()}
  c.restore()
}
const undo=(c,s)=>{
  c.save();c.strokeStyle='#111';c.translate(52,50);c.scale(s,s);c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(2,4,13,PI*1.05,PI*.35,false);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-20,2);c.lineTo(-3,-1);c.lineTo(-16,-14);c.closePath();c.fill();c.restore()
}
export default(c,t,i)=>{
  const u=t<.54?t/.54:t<.62?1:t<.86?1-io((t-.62)/.24):0,rw=t>.6&&t<.88
  const hx=u<.2?-40+76*io(u/.2):36-80*io((u-.22)/.2),p=cl((u-.2)/.2),a=PI/2*p*p-.1*sin(PI*cl((u-.4)/.08))+.06*sin(PI*cl((u-.17)/.05))
  const s=cl((u-.32)/.3),g=cl((u-.5)/.4)
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=WALL;c.fill();c.clip()
  c.fillStyle=TOP;c.fillRect(0,150,256,110);c.strokeStyle=EDGE;c.lineWidth=4;c.beginPath();for(const y of[172,198,232])c.moveTo(0,y),c.lineTo(256,y);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(0,150);c.lineTo(256,150);c.stroke()
  c.lineWidth=6;c.fillStyle=LAP;c.beginPath();c.roundRect(138,98,102,92,8);c.fill();c.stroke()
  c.fillStyle='#111';c.fillRect(146,108,86,70);scr(c,g,i)
  c.fillStyle=LAPD;c.beginPath();c.moveTo(140,190);c.lineTo(238,190);c.lineTo(250,228);c.lineTo(128,228);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(let k=0;k<3;k++){const y=197+k*8,l=142-k*3;c.moveTo(l,y);c.lineTo(236+k*3,y)}for(let k=0;k<8;k++)c.moveTo(150+k*12,195),c.lineTo(147+k*12,219);c.stroke()
  c.lineWidth=5;c.beginPath();c.roundRect(170,220,38,6,3);c.stroke()
  if(s>0){
    const B=[[122+30*s,215,12+40*s,5+9*s],[164+36*s,211,4+34*s,3+8*s],[200+26*s,205,2+22*s,2+6*s],[150+40*s,222,3+20*s,2+5*s]]
    c.fillStyle='#111';for(const[x,y,a,b]of B)c.beginPath(),c.ellipse(x,y,a+5,b+5,0,0,T),c.fill()
    c.fillStyle=COF;for(const[x,y,a,b]of B)c.beginPath(),c.ellipse(x,y,a,b,0,0,T),c.fill()
    c.fillStyle=CL;for(const[x,y,a,b]of B.slice(0,3))c.beginPath(),c.ellipse(x-a*.25,y-b*.3,a*.45,b*.3,0,0,T),c.fill()
    c.fillStyle=COF;c.strokeStyle='#111';c.lineWidth=4
    for(let k=0;k<6;k++){const q=cl(s*1.8-k*.15);if(q<=0||q>=1)continue;const x=132+(24+k*18)*q,y=192-(34+k*8)*sin(PI*q)+18*q;c.beginPath();c.arc(x,y,7-k*.6,0,T);c.fill();c.stroke()}
  }
  mug(c,a)
  if(u<.22&&!rw){c.strokeStyle='#111';c.lineWidth=4;for(const k of[0,1]){const o=(t*3+k*.5)%1;c.globalAlpha=sin(PI*o);c.beginPath();c.moveTo(48+k*16,150-o*30);c.bezierCurveTo(56+k*16,140-o*30,40+k*16,128-o*30,48+k*16,118-o*30);c.stroke()}c.globalAlpha=1}
  if(g>.2&&g<.8){c.strokeStyle='#ffd43b';c.lineWidth=5;for(const[x,y,r]of[[150,190,-.6],[226,186,.5],[196,182,0]]){c.save();c.translate(x,y);c.rotate(r+.3*sin(i*2));c.beginPath();c.moveTo(0,0);c.lineTo(-5,-10);c.lineTo(4,-12);c.lineTo(-2,-24);c.stroke();c.restore()}}
  if(hx>-40){
    c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=SLV;c.beginPath();c.roundRect(hx-110,156,86,40,10);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(hx-28,160);c.lineTo(hx-4,160);c.quadraticCurveTo(hx+8,160,hx+8,168);c.quadraticCurveTo(hx+8,176,hx-4,176);c.quadraticCurveTo(hx+4,184,hx-4,192);c.lineTo(hx-28,192);c.closePath();c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(hx-14,176);c.lineTo(hx-4,176);c.moveTo(hx-14,184);c.lineTo(hx-6,184);c.stroke()
  }
  if(rw){
    c.fillStyle='rgba(255,255,255,.35)';for(const k of[0,1,2])c.fillRect(0,(i*41+k*83)%256,256,10+k*4)
    undo(c,1+.08*sin(T*t*8))
    c.fillStyle='#111';for(const d of[0,1])c.beginPath(),c.moveTo(200+d*20,30),c.lineTo(220+d*20,18),c.lineTo(220+d*20,42),c.closePath(),c.fill()
  }
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}

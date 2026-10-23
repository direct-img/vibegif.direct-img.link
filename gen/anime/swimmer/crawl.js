// swimmer in a cobalt cap and goggles doing the front crawl, arms windmilling over the water, turning to breathe, splashes at each stroke
const{sin,cos,PI,max,min,hypot}=Math,T=2*PI
export const frames=16,delay=75
const SKIN='#ffe3d1',HAIR='#3b5bdb',CAP='#4263eb',CD='#364fc7',GOG='#ff922b',LENS='#c5f6fa',EYE='#7950f2',SUIT='#f06595',WA='#4dabf7',WD='#1c7ed6',WL='#a5d8ff',BL='#ffa8a8'
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const WY=174
const surf=(x,t)=>WY+4*sin(x/256*T*3-T*t)
export default(c,t,i)=>{
  const f=T*t,br=max(0,sin(f+.6)),bob=2*sin(2*f)
  c.fillStyle=WA;c.lineWidth=6;c.beginPath();c.moveTo(10,surf(10,t)-10);for(let x=10;x<=246;x+=6)c.lineTo(x,surf(x,t)-10);c.lineTo(246,200);c.quadraticCurveTo(128,206,10,200);c.closePath();c.fill();c.stroke()
  c.strokeStyle=WL;c.lineWidth=3;for(const[x0,y]of[[40,172],[180,178]]){c.beginPath();c.moveTo(x0,y);c.lineTo(x0+26,y);c.stroke()}c.strokeStyle='#111'
  const G=()=>{c.translate(128,172);c.scale(1.35,1.35);c.translate(-128,-166)}
  const sh=[[118,168+bob],[98,166+bob]],arm=(k)=>{const a=f+k*PI,s=sh[k],hx=s[0]+44*cos(a),hy=s[1]+40*sin(a)-4,ex=s[0]+24*cos(a),ey=s[1]+18*sin(a)-16*max(0,-sin(a));return[s,[ex,ey],[hx,hy],a]}
  const draw=k=>{const[s,e,h]=arm(k);line(c,[s,e,h],10,SKIN);c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(h[0],h[1],8,7,0,0,T);c.fill();c.stroke()}
  c.save();G()
  draw(1)
  c.fillStyle=SUIT;c.lineWidth=6;c.beginPath();c.ellipse(110,172+bob,34,13,-.08,PI,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.ellipse(110,166+bob,17,6,-.08,PI,T);c.fill();c.lineWidth=4;c.stroke()
  c.save();c.translate(158,146+bob);c.rotate(-.15-.3*br);c.scale(.48,.48);c.translate(-128,-128)
  c.lineWidth=10;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,12,6,0,0,T),c.fill()
  c.fillStyle='#c92a2a';c.lineWidth=7;c.beginPath();if(br>.5)c.ellipse(132,168,11,13*br,0,0,T),c.fill();else c.moveTo(118,168),c.quadraticCurveTo(128,174,138,168);c.stroke()
  c.fillStyle=CAP;c.lineWidth=10;c.beginPath();c.moveTo(66,120);c.bezierCurveTo(52,30,204,30,190,120);c.quadraticCurveTo(128,100,66,120);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CD;c.lineWidth=6;c.beginPath();c.arc(128,96,52,PI*1.15,PI*1.5);c.stroke();c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,96,52,PI*1.58,PI*1.7);c.stroke();c.strokeStyle='#111'
  c.fillStyle=HAIR;c.lineWidth=8;c.beginPath();c.moveTo(70,118);c.quadraticCurveTo(80,132,94,122);c.quadraticCurveTo(88,114,70,118);c.fill();c.stroke()
  c.strokeStyle='#111';c.lineWidth=16;c.beginPath();c.moveTo(66,128);c.lineTo(190,128);c.stroke();c.strokeStyle=GOG;c.lineWidth=8;c.stroke();c.strokeStyle='#111'
  for(const x of[103,153]){c.fillStyle=GOG;c.lineWidth=9;c.beginPath();c.ellipse(x,132,24,21,0,0,T);c.fill();c.stroke();c.fillStyle=LENS;c.lineWidth=5;c.beginPath();c.ellipse(x,132,16,14,0,0,T);c.fill();c.stroke()
    if(br>.5&&i%8<3){c.lineWidth=7;c.beginPath();c.arc(x,138,9,PI*1.15,PI*1.85);c.stroke()}else{c.fillStyle=EYE;c.beginPath();c.ellipse(x+3,134,7,9,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x+4,135,3.5,5,0,0,T);c.fill()}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x-7,126,5,4,-.5,0,T);c.fill()}
  c.restore()
  draw(0)
  c.restore()
  c.fillStyle=WA;c.lineWidth=6;c.beginPath();c.moveTo(4,surf(4,t)+6);for(let x=4;x<=252;x+=6)c.lineTo(x,surf(x,t)+6+3*sin(x/40+f));c.lineTo(252,236);c.quadraticCurveTo(128,248,4,236);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=WD;c.globalAlpha=.35;c.beginPath();c.ellipse(118,206,70,14,0,0,T);c.fill();c.globalAlpha=1;c.restore()
  c.strokeStyle='#fff';c.lineWidth=4;for(const[x,y,w]of[[30,196,22],[200,214,30],[96,226,26]]){c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+w/2,y-5,x+w,y);c.stroke()}c.strokeStyle='#111'
  c.save();G()
  for(const k of[0,1]){const[,,h,a]=arm(k),m=((a%T)+T)%T,u=(m-PI*.02)/(PI*.6);if(u>0&&u<1){const s=sin(PI*u),x=sh[k][0]+42,y=WY-2;c.fillStyle='#fff';c.lineWidth=3.5;for(const[dx,dy,r]of[[-12,-14,4],[0,-22,5],[12,-12,4],[20,-20,3],[-20,-20,3]]){c.beginPath();c.arc(x+dx*s,y+dy*s,r*max(.4,s),0,T);c.fill();c.stroke()}}}
  c.restore()
  for(const[x,o]of[[222,0],[238,.5],[30,.25]]){const u=(t*2+o)%1,y=140-u*40,r=3+4*u;if(u<.85){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(x+4*sin(u*T),y,r,0,T);c.fill();c.stroke()}}
}

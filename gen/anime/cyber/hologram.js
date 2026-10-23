// cyber girl with split cyan and pink hair and a glowing visor tapping holographic screens that pop up and slide around her
const{sin,cos,PI,max,min,round}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HC='#66d9e8',HCD='#1098ad',HP='#f783ac',HPD='#c2255c',EYE='#9775fa',ED='#5f3dc4',JK='#f8f9fa',JD='#495057',CY='#3bc9db',GL='#c5f6fa',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const glow=(c,f,w=3)=>{for(const[lw,s]of[[w+5,CY],[w,'#fff']]){c.lineWidth=lw;c.strokeStyle=s;f();c.stroke()}c.strokeStyle='#111'}
const panel=(c,x,y,w,h,s,k,flash)=>{
  if(s<=.02)return
  c.save();c.translate(x,y);c.scale(s,s)
  const r=()=>{c.beginPath();c.roundRect(-w/2,-h/2,w,h,6)}
  c.globalAlpha=.85;c.fillStyle=flash?'#fff':GL;r();c.fill();c.globalAlpha=1;glow(c,r)
  c.strokeStyle=HCD;c.lineWidth=3;c.beginPath()
  if(k==0)for(let j=0;j<3;j++)c.moveTo(-w/2+8,-h/2+10+j*9),c.lineTo(-w/2+8+(w-16)*[.9,.6,.75][j],-h/2+10+j*9)
  else if(k==1){c.moveTo(-w/2+8,h/2-8);for(let j=0;j<5;j++)c.lineTo(-w/2+8+j*(w-16)/4,h/2-10-[6,14,9,18,12][j]*h/40)}
  else{c.arc(0,0,min(w,h)*.28,0,T);c.moveTo(0,0);c.lineTo(min(w,h)*.28,0)}
  c.stroke();c.strokeStyle='#111';c.restore()
}
export default(c,t)=>{
  const tap=(t*2)%1,push=tap<.25?sin(PI*tap/.25):0,fl=tap<.12&&tap>.0
  const sA=min(1,max(0,(t<.5?t:1-t)*6)),yA=round(4*sin(T*t)),sC=min(1,max(0,sin(T*(t+.25))*3))
  const g=(a,b)=>{const q=c.createLinearGradient(60,0,196,0);q.addColorStop(.5,a);q.addColorStop(.5,b);return q}
  c.lineWidth=6;c.fillStyle=g(HCD,HPD);c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,212,98,204,150);c.lineTo(210,208);c.lineTo(192,198);c.lineTo(184,212);c.lineTo(72,212);c.lineTo(64,198);c.lineTo(46,208);c.lineTo(52,150);c.bezierCurveTo(44,98,58,36,128,36);c.fill();c.stroke()
  panel(c,46,70+yA,58,42,1,0,false)
  c.fillStyle=JK;c.beginPath();c.moveTo(98,186);c.quadraticCurveTo(58,194,50,256);c.lineTo(206,256);c.quadraticCurveTo(198,194,158,186);c.closePath();c.fill();c.stroke()
  c.fillStyle=JD;c.beginPath();c.moveTo(104,188);c.lineTo(128,214);c.lineTo(152,188);c.lineTo(150,176);c.lineTo(106,176);c.closePath();c.fill();c.stroke()
  glow(c,()=>{c.beginPath();c.moveTo(96,210);c.lineTo(84,256);c.moveTo(160,210);c.lineTo(172,256)},2)
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(118,167);c.quadraticCurveTo(128,174,140,165);c.stroke()
  const vz=()=>{c.beginPath();c.moveTo(68,124);c.quadraticCurveTo(128,112,188,124);c.lineTo(184,152);c.quadraticCurveTo(128,162,72,152);c.closePath()}
  c.globalAlpha=.55;c.fillStyle=CY;vz();c.fill();c.globalAlpha=1;c.lineWidth=5;vz();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(82,128);c.lineTo(110,123);c.moveTo(150,124);c.lineTo(160,126);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  c.fillStyle=g(HC,HP);c.beginPath();c.moveTo(62,150)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,194,150)
  c.quadraticCurveTo(190,118,180,104);c.quadraticCurveTo(170,104,164,114);c.quadraticCurveTo(158,98,146,92);c.quadraticCurveTo(140,104,132,112)
  c.quadraticCurveTo(126,96,114,88);c.quadraticCurveTo(108,104,98,110);c.quadraticCurveTo(94,98,86,98);c.quadraticCurveTo(80,108,78,116)
  c.quadraticCurveTo(68,124,62,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,104,56,PI*1.25,PI*1.36);c.moveTo(150,52);c.arc(128,104,56,PI*1.6,PI*1.72);c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1]){c.fillStyle=JD;c.lineWidth=5;c.beginPath();c.roundRect(128+d*58-10,108,20,30,8);c.fill();c.stroke();c.fillStyle=(t*4|0)%2&&d>0?'#fff':CY;c.beginPath();c.arc(128+d*58,123,4,0,T);c.fill()}
  panel(c,214,80,52,40,sC,2,false)
  const px=196,py=168
  panel(c,px,py,74,56,1,1,fl)
  if(tap<.4){const r=8+tap*90;c.globalAlpha=max(0,1-tap/.4);glow(c,()=>{c.beginPath();c.arc(px-14,py+4,r,0,T)},2);c.globalAlpha=1}
  const hx=px-14-6*push,hy=py+4+10*(1-push)
  for(const[lw,s]of[[17,'#111'],[9,JK]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(184,256),c.quadraticCurveTo(186,214,hx+6,hy+18),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx+6,hy+16,10,9,0,0,T);c.fill();c.stroke()
  for(const[lw,s]of[[11,'#111'],[5,SKIN]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(hx+4,hy+10),c.lineTo(hx,hy),c.stroke()
  c.strokeStyle='#111'
}

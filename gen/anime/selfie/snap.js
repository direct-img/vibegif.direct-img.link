// silver haired girl with low pigtails posing for a selfie with a peace sign, the bunny phone flashes and she squints, sparkles after
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#d0bfff',HD='#9775fa',HL='#f3f0ff',EYE='#f06595',ED='#a61e4d',BL='#ffa8a8',SWT='#fff3bf',HRT='#ff8787',CASE='#faa2c1',SCR='#cc5de8'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,sq)=>{
  if(sq){c.lineWidth=6;c.beginPath();c.moveTo(x-d*14,y-10);c.lineTo(x+d*10,y);c.lineTo(x-d*14,y+10);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const fl=t>=.5&&t<.625,af=t>=.625,pb=-3*max(0,sin(4*T*t))
  const head=f=>{c.save();c.translate(128,186);c.rotate(.12);c.translate(-128,-186);f();c.restore()}
  head(()=>{
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,160);c.lineTo(58,160);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
    for(const d of[-1,1]){c.save();c.translate(128+d*66,150);c.rotate(-d*.12)
      c.fillStyle=HAIR;c.beginPath();c.moveTo(-10,-6);c.bezierCurveTo(d*30-6,10,d*26,60,d*14,92);c.quadraticCurveTo(d*6,104,-d*4,96);c.bezierCurveTo(d*8,60,-d*16,20,-10,-6);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(d*8,16);c.quadraticCurveTo(d*18,50,d*10,84);c.stroke();c.strokeStyle='#111'
      c.fillStyle=SCR;c.lineWidth=5;c.beginPath();c.ellipse(0,0,13,9,d*.4,0,T);c.fill();c.stroke();c.lineWidth=6;c.restore()}
  })
  c.lineWidth=6;c.fillStyle=SWT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=HRT;c.lineWidth=4;heart(c,128,226,1.3)
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.quadraticCurveTo(128,204,140,192);c.lineTo(140,168);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1,fl);eye(c,153,140,1,fl)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
    c.lineWidth=4;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,165);c.quadraticCurveTo(128,184,140,165);c.closePath();c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,178,7,5,0,0,T);c.fill();c.restore()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(172,108,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,84,110)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,124,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
  })
  ds(c,30,19,SWT,()=>{c.moveTo(184,232);c.lineTo(210,170);c.lineTo(204,112)})
  c.save();c.translate(196,72);c.rotate(.1)
  c.fillStyle=CASE;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(d*10,-48,6,15,d*.2,0,T),c.fill(),c.stroke()
  c.beginPath();c.roundRect(-22,-40,44,80,9);c.fill();c.stroke()
  c.fillStyle='#495057';c.lineWidth=3;c.beginPath();c.roundRect(-16,-34,16,20,5);c.fill();c.stroke()
  c.fillStyle='#fff';for(const y of[-29,-19])c.beginPath(),c.arc(-8,y,3.5,0,T),c.fill(),c.stroke()
  c.fillStyle=fl?'#ffd43b':'#fff';c.beginPath();c.arc(8,-28,3.5,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;heart(c,0,10,1.1)
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(206,112,13,12,0,0,T);c.fill();c.stroke()
  if(fl){const r=t<.5625?1:.75;c.fillStyle='#fff9db';c.lineWidth=5;c.beginPath();for(let k=0;k<16;k++){const q=k%2?16*r:44*r,b=k*PI/8;c.lineTo(206+cos(b)*q,45+sin(b)*q)}c.closePath();c.fill();c.stroke()
    c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(206,45,12*r,0,T);c.fill();c.stroke()}
  if(af){const p=(t-.625)/.375,s=sin(PI*p);c.fillStyle='#ffd43b';c.lineWidth=3.5
    for(const[x,y,o]of[[150,26,0],[238,104,.25],[236,22,.45]]){const q=p*1.5-o;if(q>0&&q<1)spark(c,x,y,11*sin(PI*q))}
    if(s>.2)c.fillStyle=HRT,c.lineWidth=4,heart(c,168,92-46*p,.5+.7*s)}
  for(const[l,k]of[[30,'#111'],[19,SWT]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(70,250),c.lineTo(56,212),c.lineTo(62,176+pb),c.stroke()
  c.strokeStyle='#111'
  const hx=62,hy=164+pb
  for(const[fx,fy]of[[-12,-32],[6,-34]])ds(c,14,7,SKIN,()=>{c.moveTo(hx,hy);c.lineTo(hx+fx,hy+fy)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy+4,13,12,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(hx+8,hy+2,5,8,.6,0,T);c.fill();c.stroke()
}

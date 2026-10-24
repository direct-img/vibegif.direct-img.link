// pink haired girl in a sailor top swinging a file up and tossing it into a cloud, the cloud gulps it with a bounce and she cheers, then grabs the next one
const{sin,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#faa2c1',HD='#e64980',HL='#fff0f6',EYE='#339af0',ED='#1864ab',TOP='#e5dbff',COL='#4263eb',SCF='#fa5252',BL='#ff8fab',CL='#e7f5ff',AR='#4dabf7',FL='#ffe066',FD='#f59f00',SP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x),L=(a,b,u)=>a+(b-a)*u
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y-1,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-11,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-7,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+6,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const file=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  c.fillStyle=FL;c.lineWidth=5;c.beginPath();c.moveTo(-18,-23);c.lineTo(7,-23);c.lineTo(18,-12);c.lineTo(18,23);c.lineTo(-18,23);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(7,-23);c.lineTo(7,-12);c.lineTo(18,-12);c.closePath();c.fill();c.stroke()
  c.strokeStyle=FD;c.lineWidth=4;c.beginPath();for(const[w,yy]of[[12,-4],[24,5],[18,14]])c.moveTo(-10,yy),c.lineTo(-10+w,yy);c.stroke();c.restore()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t)=>{
  const up=ease((t-.25)/.125)-ease((t-.6)/.2),dip=sin(PI*min(1,t/.25))*8,fp=(t-.3125)/.25,gulp=t>=.5625&&t<.75,cs=gulp?1+.14*sin(PI*(t-.5625)/.1875):1,hap=t>=.5625&&t<.875
  const hx=L(116,180,up),hy=L(212+dip,118,up)
  const H=f=>{c.save();c.translate(104,178);c.scale(.76,.76);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.save();c.translate(196,70);c.rotate(.25)
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(40,10,60,70,40,140);c.quadraticCurveTo(30,160,14,150);c.bezierCurveTo(30,90,20,30,-6,10);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.moveTo(14,18);c.bezierCurveTo(36,40,42,90,32,130);c.stroke();c.strokeStyle='#111'
    c.restore()
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,100,204,160);c.lineTo(52,160);c.bezierCurveTo(46,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=COL;c.beginPath();c.moveTo(96,190);c.lineTo(128,240);c.lineTo(160,190);c.lineTo(182,200);c.lineTo(128,270);c.lineTo(74,200);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(84,202);c.lineTo(128,258);c.lineTo(172,202);c.stroke();c.strokeStyle='#111'
    c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SCF;for(const d of[-1,1])c.beginPath(),c.moveTo(128,262),c.lineTo(128+d*26,250),c.lineTo(128+d*22,276),c.closePath(),c.fill(),c.stroke()
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,(hap?190:180),142,164);c.closePath();c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,180,8,6,0,0,T);c.fill();c.restore()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SCF;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(192,66),c.lineTo(192+d*16,56-d*8),c.lineTo(192+d*20,74+d*6),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.arc(192,66,7,0,T);c.fill();c.stroke()
  })
  c.save();c.translate(192,46);c.scale(.9*cs,.9*(2-cs))
  c.fillStyle=CL;c.lineWidth=11;c.beginPath();for(const[x,y,r]of[[-34,10,22],[-14,-8,26],[16,-12,24],[38,6,20]])c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.roundRect(-56,4,112,30,15);c.stroke();c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-20,-16,10,6,-.4,0,T);c.fill()
  const ay=gulp?-4*sin(PI*(t-.5625)/.1875):0
  c.fillStyle=AR;c.lineWidth=4.5;c.beginPath();c.moveTo(0,-14+ay*2);c.lineTo(15,2+ay);c.lineTo(6,2+ay);c.lineTo(6,20);c.lineTo(-6,20);c.lineTo(-6,2+ay);c.lineTo(-15,2+ay);c.closePath();c.fill();c.stroke()
  c.restore()
  if(fp>0&&fp<1){const e=1-(1-fp)**2;file(c,L(178,192,fp)+22*sin(PI*fp),L(100,52,e),fp*PI*1.5,L(1,.4,fp))}
  if(gulp){const q=(t-.5625)/.1875;c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[128,26,0],[240,104,.25],[150,100,.45]]){const r=sin(PI*min(1,max(0,q*1.4-o)));if(r>.1)spark(c,x,y,12*r)}}
  const ns=t<.3125?1:t>=.75?ease((t-.75)/.15):0
  ds(c,22,12,TOP,()=>{c.moveTo(54,206);c.quadraticCurveTo(58,236,84,216)})
  ds(c,22,12,TOP,()=>{c.moveTo(154,204);c.quadraticCurveTo(L(160,196,up),L(236,190,up),hx,hy+4)})
  if(ns>0)file(c,hx-16*(1-up),hy-14,up*.4,ns)
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[[84,214],[hx,hy]])c.beginPath(),c.ellipse(x,y,11,10,0,0,T),c.fill(),c.stroke()
}

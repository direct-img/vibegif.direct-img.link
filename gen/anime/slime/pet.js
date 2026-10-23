// girl with neon pink hair watching her jelly slime pet bounce on top of her head, both grinning, boing lines on each landing
const{sin,cos,PI,max,round,pow}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#f06595',HD='#c2255c',HL='#ffdeeb',EYE='#94d82d',ED='#5c940d',TOP='#ffec99',TD='#fab005',SL='#99e9f2',SD='#3bc9db',BL='#ffa8a8'
const eye=(c,x,y,d,u)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x,y-u+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-u-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y-u+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-u-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y-u+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const u=(t*2)%1,h=round(26*sin(PI*u)),sq=pow(1-sin(PI*u),3),st=cos(PI*u)*(1-sq)*.18,dip=round(3*sq)
  c.save();c.translate(128,262);c.scale(.8,.8);c.translate(-128,-262+dip)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,216,100,208,170);c.quadraticCurveTo(214,214,196,236);c.lineTo(60,236);c.quadraticCurveTo(42,214,48,170);c.bezierCurveTo(40,100,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=TOP;c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(58,198,50,256);c.lineTo(206,256);c.quadraticCurveTo(198,198,158,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle=TD;c.lineWidth=4;for(const y of[222,238])c.beginPath(),c.moveTo(62,y),c.quadraticCurveTo(128,y-10,194,y),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*18,206,128+d*30,190),c.lineTo(128+d*8,188),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,22);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const up=round(6-h/8);eye(c,103,140,-1,up);eye(c,153,140,1,up)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,165),c.lineTo(128+d*42+k+2,159),c.stroke()
  c.lineWidth=4;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,186,142,164);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,180,9,6,0,0,T);c.fill();c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,170)
  c.bezierCurveTo(46,74,88,34,128,34);c.bezierCurveTo(168,34,210,74,194,170)
  c.quadraticCurveTo(190,128,180,104);c.quadraticCurveTo(170,98,166,112);c.quadraticCurveTo(160,94,148,88);c.quadraticCurveTo(144,102,136,108)
  c.quadraticCurveTo(130,92,120,88);c.quadraticCurveTo(116,102,106,108);c.quadraticCurveTo(100,94,90,94);c.quadraticCurveTo(86,108,84,114)
  c.quadraticCurveTo(76,104,74,104);c.quadraticCurveTo(66,134,62,170);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  if(sq>.45){c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(128+d*58,38,10,d<0?PI*1.05:PI*1.55,d<0?PI*1.45:PI*1.95),c.stroke(),c.beginPath(),c.arc(128+d*58,38,18,d<0?PI*1.05:PI*1.55,d<0?PI*1.45:PI*1.95),c.stroke()}
  const w=56*(1+sq*.3-st),hh=46*(1-sq*.3+st),by=40-h
  c.save();c.translate(128,by)
  const sp=()=>{c.beginPath();c.moveTo(-w,0);c.bezierCurveTo(-w,-hh*.9,-w*.5,-hh*1.25,0,-hh*1.25);c.bezierCurveTo(w*.5,-hh*1.25,w,-hh*.9,w,0);c.quadraticCurveTo(0,8,-w,0);c.closePath()}
  c.lineWidth=6;c.fillStyle=SL;sp();c.fill();c.save();c.clip();c.fillStyle=SD;c.beginPath();c.ellipse(0,6,w*1.1,hh*.4,0,0,T);c.fill();c.restore();sp();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-w*.45,-hh*.8,7,4,-.6,0,T);c.fill();c.beginPath();c.arc(-w*.62,-hh*.5,3,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*16,-hh*.52,6,8,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*16-2,-hh*.52-3,2.5,0,T),c.fill()
  c.fillStyle='#ff8fab';for(const d of[-1,1])c.beginPath(),c.ellipse(d*30,-hh*.34,7,4,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(0,-hh*.4,7,.15*PI,.85*PI);c.stroke()
  c.restore();c.restore()
}

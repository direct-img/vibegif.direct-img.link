// chibi in a bunny-ear hoodie crouching and hopping, the floppy ears trailing behind the jump and flopping on landing
const{sin,cos,PI,max,round}=Math,T=2*PI
export const frames=16,delay=60
const SKIN='#ffe3d1',HAIR='#f8f0e3',HD='#d8c8a8',HL='#fff',EYE='#e64980',ED='#a61e4d',HOOD='#fff',HP='#faa2c1',HPD='#f06595',LEG='#b197fc',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const ear=(c,x,y,a,b)=>{
  c.save();c.translate(x,y);c.rotate(a)
  const p=(s,o)=>{c.beginPath();c.moveTo(-15*s,o);c.bezierCurveTo(-26*s,-44*s+o,(-14+b)*s,-76*s+o,b*s,-88*s+o);c.bezierCurveTo((16+b)*s,-76*s+o,26*s,-44*s+o,15*s,o);c.closePath()}
  c.lineWidth=9;c.fillStyle=HOOD;p(1,0);c.fill();c.stroke()
  c.fillStyle=HP;p(.55,-14);c.fill();c.restore()
}
export default(c,t)=>{
  let sq=0,h=0,v=0
  if(t<.2)sq=.8*sin(PI*t/.2)
  else if(t<.8){const p=(t-.2)/.6;h=round(32*sin(PI*p));v=cos(PI*p);sq=-.25*v*v}
  else sq=.6*sin(PI*(t-.8)/.2)
  const happy=sq>.3,arm=t>=.2&&t<.8?1:0
  c.fillStyle='#e9ecef';c.beginPath();c.ellipse(128,237,46-h*.4,7-h*.06,0,0,T);c.fill()
  c.save();c.translate(128,233-h);c.scale(.86*(1+sq*.14),.86*(1-sq*.16));c.translate(-128,-230)
  for(const x of[116,140]){line(c,[[x,196],[x,222]],9,LEG);c.lineWidth=5;c.fillStyle=HP;c.beginPath();c.ellipse(x+(x<128?-3:3),226,11,7,0,0,T);c.fill();c.stroke()}
  for(const d of[-1,1]){const a=arm?2.3+.3*v:.4+.3*sq,sx=128+d*20,sy=146,hx=sx+d*26*sin(a),hy=sy+26*cos(a)
    line(c,[[sx,sy],[hx,hy]],9,HOOD);c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,7,0,T);c.fill();c.stroke()}
  c.fillStyle=HOOD;c.lineWidth=5;c.beginPath();c.moveTo(110,136);c.lineTo(146,136);c.quadraticCurveTo(156,166,154,198);c.lineTo(102,198);c.quadraticCurveTo(100,166,110,136);c.closePath();c.fill();c.stroke()
  c.fillStyle=HP;c.beginPath();c.roundRect(112,172,32,16,6);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(122,140);c.lineTo(120,160);c.moveTo(134,140);c.lineTo(136,160);c.stroke()
  c.fillStyle=HP;c.lineWidth=3;for(const x of[120,136])c.beginPath(),c.arc(x,162,4,0,T),c.fill(),c.stroke()
  c.save();c.translate(128,96);c.scale(.62,.62);c.translate(-128,-128)
  for(const d of[-1,1])ear(c,128+d*36,46,d*(arm?.95+.3*max(0,v):.28+.5*sq),d*(arm?10+24*v:14-20*sq))
  c.lineWidth=9;c.fillStyle=HOOD;c.beginPath();c.moveTo(128,26);c.bezierCurveTo(214,26,226,110,212,170);c.quadraticCurveTo(206,200,176,204);c.lineTo(80,204);c.quadraticCurveTo(50,200,44,170);c.bezierCurveTo(30,110,42,26,128,26);c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();c.moveTo(70,170);c.bezierCurveTo(56,90,90,52,128,52);c.bezierCurveTo(166,52,200,90,186,170);c.closePath();c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(happy){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,144),c.quadraticCurveTo(x,128,x+15,144),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,13,7,0,0,T),c.fill()
  c.lineWidth=6;if(arm||happy){c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(128,184,140,164);c.closePath();c.fill();c.stroke()}else{c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(123,172,128,166);c.quadraticCurveTo(133,172,138,166);c.stroke()}
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(72,136)
  c.bezierCurveTo(64,84,94,58,128,58);c.bezierCurveTo(162,58,192,84,184,136)
  c.quadraticCurveTo(180,112,172,102);c.quadraticCurveTo(164,108,158,114);c.quadraticCurveTo(152,98,142,94);c.quadraticCurveTo(136,106,128,110)
  c.quadraticCurveTo(120,98,110,94);c.quadraticCurveTo(104,108,96,112);c.quadraticCurveTo(90,104,84,104);c.quadraticCurveTo(76,114,72,136);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;c.beginPath();for(const x of[110,146])c.moveTo(x,72),c.quadraticCurveTo(x+(x<128?-6:6),86,x+(x<128?-4:4),100);c.stroke();c.strokeStyle='#111'
  for(const[lw,col]of[[30,'#111'],[18,HOOD]])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(56,196),c.bezierCurveTo(40,100,80,46,128,46),c.bezierCurveTo(176,46,216,100,200,196),c.stroke()
  c.strokeStyle='#111';c.restore()
  c.restore()
}

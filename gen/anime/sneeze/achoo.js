// navy-haired girl with a cold: her nose tickles, she tips back "ah... ah..." and a big achoo burst jerks her forward, then a sniffle
const{sin,cos,PI,min,round}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#0c8599',HD='#0b7285',HL='#c5f6fa',EYE='#40c057',ED='#2b8a3e',SW='#d0ebff',SWD='#74c0fc',SC='#ff6b6b',NOSE='#ff8787',DROP='#a5d8ff',BURST='#fff3bf',MO='#c92a2a',BL='#ffa8a8'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,l,u)=>{
  const ly=y-14+22*l
  c.save();c.beginPath();c.moveTo(x-24,ly+6);c.quadraticCurveTo(x,ly-4,x+24,ly+6);c.lineTo(x+24,y+30);c.lineTo(x-24,y+30);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.beginPath();c.ellipse(x,y+2-u,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8-u,12,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3-u,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5-u,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8-u,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,ly+6);c.quadraticCurveTo(x,ly-4,x+16,ly+6);c.moveTo(x+d*15,ly+5);c.lineTo(x+d*21,ly);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
export default(c,t)=>{
  const a=min(1,t/.4),sn=t>=.45&&t<.6,k=(t-.45)/.15,r=(t-.6)/.4,rc=t>=.6
  const dy=sn?6:rc?round(6*(1-ease(r))):-round(6*a),fy=sn?3:rc?round(3*(1-ease(r))):-round(5*a)
  if(sn){c.fillStyle=BURST;c.lineWidth=6;const s=1-k*.5;c.beginPath();for(let j=0;j<24;j++){const b=j*PI/12,rr=(j%2?96:132)*s;c.lineTo(128+cos(b)*rr,172+sin(b)*rr)}c.closePath();c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle=SW;c.beginPath();c.moveTo(100,192);c.quadraticCurveTo(62,200,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,200,156,192);c.closePath();c.fill();c.stroke()
  c.strokeStyle=SWD;c.lineWidth=3;c.beginPath();for(const x of[80,96,160,176])c.moveTo(x,226),c.lineTo(x+(x<128?-2:2),248);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.rect(116,166,24,26);c.fill()
  c.save();c.translate(0,dy)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,136);c.lineTo(216,150);c.lineTo(198,154);c.lineTo(210,170);c.lineTo(186,164);c.lineTo(70,164);c.lineTo(46,170);c.lineTo(58,154);c.lineTo(40,150);c.lineTo(58,136);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.save();c.translate(0,fy)
  if(sn){c.lineWidth=5.5;c.beginPath();c.moveTo(91,131);c.lineTo(113,140);c.lineTo(91,149);c.moveTo(165,131);c.lineTo(143,140);c.lineTo(165,149);c.stroke()}
  else{const l=rc?.45-.3*r:.15+.55*a,u=rc?0:3*a;eye(c,103,140,-1,l,u);eye(c,153,140,1,l,u)
    if(rc&&r<.7){c.fillStyle=DROP;c.lineWidth=3;for(const x of[86,170])c.beginPath(),c.ellipse(x,152+10*r,3.5,5,0,0,T),c.fill(),c.stroke()}}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,13,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const j of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+j-2,164),c.lineTo(128+d*42+j+2,158),c.stroke()
  c.fillStyle=NOSE;c.beginPath();c.ellipse(128,156,6,4.5,0,0,T);c.fill()
  c.lineWidth=2.5;if(!sn&&!rc&&a>.4){c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*3,157,1.6,2.2,0,0,T),c.fill()}else{c.beginPath();c.moveTo(128,154);c.lineTo(127,158);c.stroke()}
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath()
  if(sn)c.ellipse(128,173,14,11,0,0,T),c.fill(),c.stroke()
  else if(rc){c.moveTo(120,170);c.quadraticCurveTo(124,166,128,170);c.quadraticCurveTo(132,174,136,170);c.stroke()}
  else c.ellipse(128,169,4+4*a,3+6*a,0,0,T),c.fill(),c.stroke()
  if(rc&&r<.6){c.fillStyle=DROP;c.lineWidth=3;const s=1-r/.6;c.beginPath();c.ellipse(128,162+3*s,3*s+1,5*s+1,0,0,T);c.fill();c.stroke()}
  c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,152)
  c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,192,152)
  c.quadraticCurveTo(190,124,182,110);c.lineTo(174,114);c.quadraticCurveTo(170,100,160,92);c.quadraticCurveTo(152,104,142,110)
  c.quadraticCurveTo(138,96,128,86);c.quadraticCurveTo(120,102,108,108);c.quadraticCurveTo(106,96,94,90);c.quadraticCurveTo(88,104,82,112)
  c.lineTo(74,110);c.quadraticCurveTo(68,128,64,152);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(120,40);c.quadraticCurveTo(116,20,100,18);c.quadraticCurveTo(116,28,112,40);c.moveTo(134,40);c.quadraticCurveTo(140,22,154,24);c.quadraticCurveTo(142,30,142,40);c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[b,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*b,PI*e),c.stroke()
  c.strokeStyle='#111'
  if(!sn&&!rc){c.lineWidth=4;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*38,124+fy),c.quadraticCurveTo(128+d*24,112+fy,128+d*13,114+fy);c.stroke()}
  c.restore()
  c.lineWidth=6;c.fillStyle=SC;c.beginPath();c.moveTo(94,184);c.quadraticCurveTo(128,198,162,184);c.quadraticCurveTo(170,196,162,208);c.quadraticCurveTo(128,222,94,208);c.quadraticCurveTo(86,196,94,184);c.fill();c.stroke()
  c.beginPath();c.moveTo(150,206);c.lineTo(166,246);c.lineTo(184,238);c.lineTo(164,200);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();for(const x of[110,128,146])c.moveTo(x,193+(x==128?4:0)),c.lineTo(x,213+(x==128?3:0));c.moveTo(160,220);c.lineTo(174,214);c.moveTo(165,232);c.lineTo(179,226);c.stroke()
  c.strokeStyle='#111'
  if(!sn&&!rc&&a>.15){for(const[l,s]of[[7,'#111'],[3,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*14,150+dy+fy),c.quadraticCurveTo(128+d*19,146+dy+fy+(t*20%2<1?-3:3),128+d*24,150+dy+fy);c.stroke()}c.strokeStyle='#111'}
  if(sn){c.fillStyle='#74c0fc';c.lineWidth=2.5;for(let j=0;j<9;j++){const b=-.15*PI+j*PI*1.3/8,d=40+76*(k+.3),x=128+cos(b)*d,y=176+dy+sin(b)*d*.8;c.save();c.translate(x,y);c.rotate(b-PI/2);c.scale(1.4,1.4);c.beginPath();c.moveTo(0,8);c.quadraticCurveTo(6,-2,0,-6);c.quadraticCurveTo(-6,-2,0,8);c.fill();c.stroke();c.restore()}}
}

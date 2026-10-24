// coral ponytail girl in a paper hat and splattered overalls rolling fresh paint up and down a wall, stripe by stripe
const{cos,PI,max,min,hypot}=Math,T=2*PI
export const frames=20,delay=85
const SKIN='#ffe3d1',HAIR='#ff8787',HD='#f03e3e',EYE='#339af0',ED='#1864ab',BL='#ffa8a8',OV='#f8f9fa',OVD='#ced4da',TS='#ffd43b',PA='#fff3bf',PB='#a5d8ff',PBD='#74c0fc',HN='#ff922b',MT='#868e96'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+4,y+1,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-9,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+2,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  // 4 strokes a loop: blue over yellow on both columns, then yellow back over blue
  const j=(t*4)|0,u=t*4-j,col=j%2,nw=j<2?PB:PA,dn=u<.5,ry=36+70*(1-cos(T*u)),cx=157.5+col*59
  const pr=k=>min(1,max(0,(t*4-k)*2))
  for(const k of[0,1]){const x=128+k*59,a=pr(k),b=pr(k+2),[bs,ov,h]=b>0?[PB,PA,b]:[PA,PB,a]
    c.fillStyle=bs;c.fillRect(x,10,59,194);if(h>0)c.fillStyle=ov,c.fillRect(x,10,59,h<1?ry-8:194)}
  c.lineWidth=6;c.beginPath();c.rect(128,10,118,194);c.stroke()
  // paint bucket
  c.fillStyle='#e9ecef';c.beginPath();c.moveTo(170,214);c.lineTo(240,214);c.lineTo(232,250);c.lineTo(178,250);c.closePath();c.fill();c.stroke()
  c.fillStyle=PBD;c.beginPath();c.moveTo(172,222);c.lineTo(238,222);c.lineTo(236,232);c.quadraticCurveTo(226,240,222,232);c.quadraticCurveTo(204,236,190,232);c.quadraticCurveTo(184,242,176,234);c.closePath();c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=6;c.fillStyle='#ced4da';c.beginPath();c.ellipse(205,214,36,7,0,0,T);c.fill();c.stroke()
  // girl
  c.save();c.translate(64,168);c.scale(.72,.72);c.translate(-128,-186)
  c.save();c.translate(70,70);c.rotate(-.4)
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(10,0);c.bezierCurveTo(-30,-10,-70,40,-64,120);c.quadraticCurveTo(-58,140,-44,148);c.quadraticCurveTo(-48,90,-4,22);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.moveTo(-12,10);c.bezierCurveTo(-40,30,-54,70,-52,118);c.stroke();c.strokeStyle='#111';c.restore()
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,202,160);c.lineTo(54,160);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=TS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(54,198,44,300);c.lineTo(212,300);c.quadraticCurveTo(202,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=OV;c.beginPath();c.moveTo(80,300);c.lineTo(84,238);c.lineTo(172,238);c.lineTo(176,300);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*44,240),c.lineTo(128+d*34,196),c.lineTo(128+d*22,196),c.lineTo(128+d*30,240),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=PBD;c.lineWidth=4;for(const[x,y,r]of[[104,262,7],[150,276,5],[160,254,4]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.fillStyle=PBD;c.lineWidth=4;c.beginPath();c.ellipse(90,152,6,5,.3,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,170,138,166);c.quadraticCurveTo(136,180,128,180);c.quadraticCurveTo(120,180,118,166);c.fill();c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,156)
  c.bezierCurveTo(50,80,88,46,128,46);c.bezierCurveTo(168,46,206,80,190,156)
  c.quadraticCurveTo(188,120,180,104);c.quadraticCurveTo(170,104,164,96);c.quadraticCurveTo(156,108,144,110);c.quadraticCurveTo(140,98,130,92)
  c.quadraticCurveTo(122,106,108,110);c.quadraticCurveTo(104,98,96,94);c.quadraticCurveTo(88,106,78,106);c.quadraticCurveTo(68,128,66,156);c.closePath();c.fill();c.stroke()
  // folded newspaper hat
  c.fillStyle='#fff';c.beginPath();c.moveTo(62,82);c.lineTo(128,18);c.lineTo(194,82);c.closePath();c.fill();c.stroke()
  c.strokeStyle=OVD;c.lineWidth=5;c.beginPath();for(const y of[50,64])c.moveTo(128-(y-18)*.8+14,y),c.lineTo(128+(y-18)*.8-14,y);c.stroke();c.strokeStyle='#111'
  c.fillStyle=HN;c.beginPath();c.moveTo(56,80);c.lineTo(200,80);c.lineTo(198,98);c.lineTo(58,98);c.closePath();c.fill();c.stroke()
  c.restore()
  // roller on its pole, hands on the handle
  const fx=cx-18,fy=ry+24,L=hypot(124-fx,210-fy),dx=(124-fx)/L,dy=(210-fy)/L,ax=124,ay=210
  ds(c,8,3,MT,()=>{c.moveTo(cx-24,ry);c.lineTo(cx-30,ry);c.lineTo(cx-30,ry+16);c.lineTo(fx,fy)})
  ds(c,14,8,HN,()=>{c.moveTo(fx,fy);c.lineTo(fx+dx*(L+26),fy+dy*(L+26))})
  c.fillStyle=nw;c.lineWidth=5;c.beginPath();c.roundRect(cx-25,ry-12,50,24,8);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(cx-18,ry-5);c.lineTo(cx+8,ry-5);c.stroke();c.strokeStyle='#111'
  ds(c,20,11,TS,()=>{c.moveTo(98,194);c.quadraticCurveTo(114,192,ax,ay)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(ax,ay,11,10,0,0,T);c.fill();c.stroke()
}

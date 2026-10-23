// butter-blonde girl in a bathrobe blow-drying her hair, long locks whooshing and fluttering in the air stream, eyes squinting, droplets flying off
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#ffe066',HD='#f2b705',HL='#fff9db',ROBE='#ffa8a8',RD='#fa5252',DRY='#9775fa',DD='#7048e8',BL='#ff8fab',MO='#c92a2a',DROP='#a5d8ff'
// a tapered lock streaming left from (x,y), rippling with phase o
const lock=(c,x,y,len,w0,o,t)=>{
  const P=[...Array(11)].map((_,k)=>{const f=k/10;return[x-len*f,y+f*f*10+9*f*sin(T*t*2-f*5+o)]}),L=[],R=[]
  P.forEach(([px,py],k)=>{
    const[ax,ay]=P[max(0,k-1)],[bx,by]=P[Math.min(10,k+1)],dx=bx-ax,dy=by-ay,n=Math.hypot(dx,dy),w=w0*(1-k/10*.9)/2
    L.push([px-dy/n*w,py+dx/n*w]);R.push([px+dy/n*w,py-dx/n*w])
  })
  c.beginPath();c.moveTo(...L[0]);for(const p of L)c.lineTo(...p);for(const p of R.reverse())c.lineTo(...p);c.closePath();c.fill();c.stroke()
}
export default(c,t)=>{
  c.lineWidth=6
  // air stream: dashes rushing left past her head
  c.save();c.setLineDash([20,14]);c.lineDashOffset=-68*t
  for(const[l,s]of[[9,'#111'],[3.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;for(const[y,o]of[[42,0],[60,17],[30,9]])c.beginPath(),c.moveTo(196,y+40),c.bezierCurveTo(160,y,90,y+4,10,y+14+o/4),c.stroke()}
  c.restore();c.strokeStyle='#111';c.lineWidth=6
  // streaming locks behind the head
  c.fillStyle=HD;for(const[x,y,len,w,o]of[[86,74,92,30,0],[78,108,104,34,1.3],[76,144,100,32,2.6],[84,178,86,28,3.9]])lock(c,x,y,len,w,o,t)
  c.fillStyle=HAIR;for(const[x,y,len,w,o]of[[96,92,78,26,.7],[90,128,94,30,2],[90,162,86,26,3.3]])lock(c,x,y,len,w,o,t)
  c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,200,90,194,150);c.quadraticCurveTo(190,178,176,188);c.lineTo(80,188);c.bezierCurveTo(60,150,56,36,128,36);c.fill();c.stroke()
  // robe with a wide white collar
  c.fillStyle=ROBE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(102,190);c.lineTo(128,240);c.lineTo(154,190);c.lineTo(166,196);c.lineTo(132,256);c.lineTo(122,256);c.lineTo(90,196);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,226);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.moveTo(140,168);c.lineTo(140,194);c.stroke()
  // face, squinting against the wind
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=6;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x+d*13,130);c.lineTo(x-d*9,141);c.lineTo(x+d*13,151);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,162,138,168);c.quadraticCurveTo(136,178,128,178);c.quadraticCurveTo(120,178,118,168);c.fill();c.stroke()
  // bangs swept left and fluttering
  const f=k=>4*sin(T*t*2+k)
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,148)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,196,70,184,120);c.quadraticCurveTo(182,104,176,98)
  c.quadraticCurveTo(160,104,150+f(0),118);c.quadraticCurveTo(140,98,124,96);c.quadraticCurveTo(112,100,98+f(1),118)
  c.quadraticCurveTo(96,100,84,98);c.quadraticCurveTo(68,104,50+f(2),112+f(3));c.quadraticCurveTo(66,96,72,90);c.quadraticCurveTo(68,120,70,148);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,100,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  // droplets flung off to the left
  c.fillStyle=DROP;c.lineWidth=3
  for(const[y,o]of[[70,0],[120,.33],[170,.66],[96,.5]]){const p=(t+o)%1,x=40-40*p,yy=y-8*p;if(p<.8){c.beginPath();c.ellipse(x,yy,6,4,-.2,0,T);c.fill();c.stroke()}}
  // hair dryer from the right, held by its handle
  for(const[l,s]of[[26,'#111'],[17,ROBE]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(196,256),c.quadraticCurveTo(222,214,228,172),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=DRY
  c.beginPath();c.roundRect(214,112,22,52,8);c.fill();c.stroke()
  c.beginPath();c.moveTo(194,84);c.lineTo(212,78);c.lineTo(212,118);c.lineTo(194,112);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(208,70,42,56,22);c.fill();c.stroke()
  c.fillStyle=DD;c.beginPath();c.arc(232,98,12,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(let k=0;k<3;k++){const a=k*T/3+t*T*3;c.moveTo(232,98);c.lineTo(232+cos(a)*10,98+sin(a)*10)}c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.roundRect(218,128,6,14,3);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(226,150,13,14,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(216,146);c.lineTo(228,146);c.moveTo(216,154);c.lineTo(228,154);c.stroke()
}

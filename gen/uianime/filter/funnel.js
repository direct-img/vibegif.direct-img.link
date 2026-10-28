// rose pink haired girl in an apron tips a bowl of mixed shapes into a big filter funnel, squares triangles and circles tumble in but only little hearts drip out the bottom into a jar
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#f783ac',HD='#c2255c',HL='#fff0f6',EYE='#7950f2',ED='#4c2fb0',BLZ='#fff',AP='#96f2d7',BL='#ffa8a8',MO='#c92a2a',FU='#d0bfff',FUD='#9775fa',IN='#5f3dc4',BW='#ffd8a8',BWD='#f59f00',GLS='#e7f5ff',HB='#fff',CS=['#4dabf7','#ffd43b','#69db7c','#ff6b9d'],HRT='#ff6b9d'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const heart=(c,x,y,s)=>{c.beginPath();c.moveTo(x,y+s);c.bezierCurveTo(x-1.4*s,y-.1*s,x-.8*s,y-1.1*s,x,y-.45*s);c.bezierCurveTo(x+.8*s,y-1.1*s,x+1.4*s,y-.1*s,x,y+s);c.fill();c.stroke()}
const shape=(c,k,x,y,a,z=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(z,z);c.fillStyle=CS[k];c.lineWidth=4;c.beginPath()
  if(k==0)c.roundRect(-8,-8,16,16,3);else if(k==1)c.moveTo(0,-10),c.lineTo(10,8),c.lineTo(-10,8),c.closePath();else if(k==2)c.arc(0,0,8.5,0,T);else{c.restore();c.fillStyle=CS[3];c.lineWidth=4;heart(c,x,y,9*z);return}
  c.fill();c.stroke();c.restore()}
const FX=196,FY=118,RX=54,RY=12
export default(c,t,i)=>{
  const bb=2*sin(2*T*t),ba=.75+.1*sin(4*T*t),bk=i==11
  const H=f=>{c.save();c.translate(62,206+bb*.5);c.scale(.68,.68);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,208,150);c.quadraticCurveTo(216,220,206,280);c.lineTo(50,280);c.quadraticCurveTo(40,220,48,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=BLZ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=AP;c.beginPath();c.moveTo(84,330);c.lineTo(90,226);c.quadraticCurveTo(128,216,166,226);c.lineTo(172,330);c.closePath();c.fill();c.stroke()
    c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*34,224),c.lineTo(128+d*26,196),c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(128,272);c.bezierCurveTo(108,256,114,240,128,250);c.bezierCurveTo(142,240,148,256,128,272);c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.quadraticCurveTo(x,151,x+14,144),c.stroke()}
    else eye(c,103,140,-1,5,-5),eye(c,153,140,1,5,-5)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath();c.moveTo(116,165);c.quadraticCurveTo(128,184,140,165);c.closePath();c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,200)
    c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,194,200);c.lineTo(180,200)
    c.quadraticCurveTo(186,130,180,100);c.quadraticCurveTo(160,96,150,110);c.quadraticCurveTo(144,92,128,86);c.quadraticCurveTo(122,100,108,104)
    c.quadraticCurveTo(102,90,92,88);c.quadraticCurveTo(88,100,80,110);c.quadraticCurveTo(70,140,76,200);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    ds(c,16,8,HB,()=>{c.ellipse(128,106,62,66,0,PI*1.12,PI*1.88)})
    c.fillStyle=HRT;c.lineWidth=6;heart(c,170,58,14)
  })
  c.lineWidth=6;c.fillStyle=GLS;c.beginPath();c.moveTo(FX-30,212);c.lineTo(FX+30,212);c.lineTo(FX+26,250);c.quadraticCurveTo(FX,256,FX-26,250);c.closePath();c.fill()
  c.fillStyle=HRT;c.lineWidth=3.5;for(const[x,y,a]of[[FX-12,240,-.3],[FX+10,238,.3],[FX,226,0]]){c.save();c.translate(x,y);c.rotate(a);heart(c,0,0,8);c.restore()}
  const dp=(t*2)%1,dg=min(1,dp/.4),dy=dp<.4?0:60*((dp-.4)/.6)**2
  c.fillStyle=HRT;c.lineWidth=4;if(dy<26)heart(c,FX,200+6*dg+dy,3+7*dg)
  c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.moveTo(FX-30,212);c.lineTo(FX-26,250);c.quadraticCurveTo(FX,256,FX+26,250);c.lineTo(FX+30,212);c.stroke()
  c.beginPath();c.ellipse(FX,212,30,6,0,0,T);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(FX-22,222);c.lineTo(FX-20,242);c.stroke();c.strokeStyle='#111'
  c.fillStyle=IN;c.lineWidth=6;c.beginPath();c.ellipse(FX,FY,RX,RY,0,0,T);c.fill()
  for(let k=0;k<4;k++){const p=(t*2+k/4)%1,x=166+44*p,y=54-30*p+98*p*p;shape(c,[0,3,1,2][k],x,y,T*p*(k%2?.5:-.5)+k,1.25)}
  c.fillStyle=FU;c.beginPath();c.moveTo(FX-RX,FY);c.ellipse(FX,FY,RX,RY,0,PI,0,true);c.lineTo(FX+11,174);c.lineTo(FX+11,194);c.quadraticCurveTo(FX,199,FX-11,194);c.lineTo(FX-11,174);c.closePath();c.fill();c.stroke()
  c.fillStyle=FUD;c.beginPath();c.moveTo(FX+RX-12,FY+10);c.lineTo(FX+11,174);c.lineTo(FX+11,194);c.quadraticCurveTo(FX+8,197,FX+4,197);c.lineTo(FX+4,174);c.quadraticCurveTo(FX+26,140,FX+RX-26,FY+12);c.closePath();c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(FX-RX,FY);c.ellipse(FX,FY,RX,RY,0,PI,0,true);c.lineTo(FX+11,174);c.lineTo(FX+11,194);c.quadraticCurveTo(FX,199,FX-11,194);c.lineTo(FX-11,174);c.closePath();c.stroke()
  c.beginPath();c.moveTo(FX-11,174);c.lineTo(FX+11,174);c.stroke()
  c.lineWidth=6;c.beginPath();c.ellipse(FX,FY,RX,RY,0,0,T);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(FX-RX+16,FY+16);c.lineTo(FX-18,164);c.stroke();c.strokeStyle='#111'
  const hx=122,hy=92+bb
  ds(c,24,14,BLZ,()=>{c.moveTo(104,232);c.quadraticCurveTo(152,178,hx,hy+12)})
  c.save();c.translate(hx,hy);c.rotate(-.35);ds(c,12,6,BWD,()=>{c.moveTo(0,0);c.lineTo(26,-8)});c.restore()
  c.save();c.translate(150,56+bb);c.rotate(ba)
  c.fillStyle=BW;c.lineWidth=6;c.beginPath();c.moveTo(-24,-12);c.quadraticCurveTo(-24,22,0,22);c.quadraticCurveTo(24,22,24,-12);c.closePath();c.fill();c.stroke()
  c.strokeStyle=BWD;c.lineWidth=4;c.beginPath();c.moveTo(-17,2);c.quadraticCurveTo(0,8,17,2);c.stroke();c.strokeStyle='#111'
  c.fillStyle=IN;c.lineWidth=5;c.beginPath();c.ellipse(0,-12,24,6,0,0,T);c.fill();c.stroke()
  for(const[k,x]of[[0,-12],[3,2],[1,14]])shape(c,k,x,-16,x*.05)
  c.fillStyle=BW;c.lineWidth=5;c.beginPath();c.ellipse(0,-12,24,6,0,0,PI);c.fill();c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,11,11,0,0,T);c.fill();c.stroke()
}

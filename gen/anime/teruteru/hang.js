// girl praying under the teru teru bozu she hung in the window: the rain stops, clouds roll away, the sun comes out and she cheers, then the clouds return
const{sin,cos,PI,max,min,round}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#69db7c',HD='#2f9e44',HL='#d3f9d8',EYE='#5c7cfa',ED='#364fc7',SHIRT='#fff',STR='#74c0fc',WOOD='#c08a5e',WD='#8d6346',RAIN=[159,179,200],SUN=[116,192,252],CLOUD='#dee2e6',CD='#adb5bd',SUNC='#ffd43b',DOLL='#fff',TIE='#fa5252',CLIP='#ffd43b',BL='#ffa8a8',MO='#c92a2a'
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x)
const mix=(a,b,k)=>`rgb(${a.map((v,i)=>round(v+(b[i]-v)*k)).join()})`
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=3.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
// clouds use the union-outline trick: stroke every puff wide, then fill them all over the inner lines
const cloud=(c,x,y,s,f)=>{c.fillStyle=f;c.lineWidth=10;c.beginPath();for(const[dx,dy,r]of[[-22,4,16],[0,-6,22],[24,4,15]])c.moveTo(x+(dx+r)*s,y+dy*s),c.arc(x+dx*s,y+dy*s,r*s,0,T);c.stroke();c.fill()}
export default(c,t)=>{
  const w=t<.85?ease(cl((t-.38)/.16)):1-ease(cl((t-.85)/.15)),sunny=w>.6,X0=40,Y0=12,X1=232,Y1=198
  // window: sky panes behind the frame
  c.lineWidth=7;c.fillStyle=mix(RAIN,SUN,w);c.beginPath();c.rect(X0+10,Y0+10,X1-X0-20,Y1-Y0-20);c.fill()
  c.save();c.beginPath();c.rect(X0+10,Y0+10,X1-X0-20,Y1-Y0-20);c.clip()
  if(w>.05){const s=w,rot=T*t;c.save();c.translate(92,62+30*(1-w));c.scale(s,s);c.strokeStyle='#111';c.lineWidth=7
    for(let k=0;k<8;k++){const a=rot/4+k*PI/4;c.beginPath();c.moveTo(30*cos(a),30*sin(a));c.lineTo(44*cos(a),44*sin(a));c.stroke()}
    c.strokeStyle=SUNC;c.lineWidth=3;for(let k=0;k<8;k++){const a=rot/4+k*PI/4;c.beginPath();c.moveTo(30*cos(a),30*sin(a));c.lineTo(44*cos(a),44*sin(a));c.stroke()}
    c.strokeStyle='#111';c.fillStyle=SUNC;c.lineWidth=6;c.beginPath();c.arc(0,0,22,0,T);c.fill();c.stroke();c.restore()}
  if(w<.5){c.globalAlpha=1-2*w;for(const[x,o]of[[70,0],[110,.4],[150,.7],[190,.2],[210,.55],[130,.9]]){const y=((t*3+o)%1)*200;for(const[l,s]of[[6,'#5c7cfa'],[2.5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x-y*.15,Y0+y),c.lineTo(x-y*.15-4,Y0+y+18),c.stroke()}c.globalAlpha=1;c.strokeStyle='#111'}
  const cx=t<.85?w*170:-170*w;cloud(c,92+cx,36,1.1,w<.5?CD:CLOUD);cloud(c,170+cx,48,1,w<.5?CD:CLOUD);cloud(c,128+cx*1.2,24,.8,w<.5?CD:CLOUD)
  c.restore()
  // frame and cross bars
  c.lineWidth=6;c.fillStyle=WOOD
  c.beginPath();c.rect(X0,Y0,X1-X0,Y1-Y0);c.rect(X0+10,Y1-10,X1-X0-20,-(Y1-Y0-20));c.fill('evenodd');c.stroke()
  c.beginPath();c.rect(X0+10,Y0+10,X1-X0-20,Y1-Y0-20);c.stroke()
  c.beginPath();c.rect(131,Y0+10,10,Y1-Y0-20);c.fill();c.stroke();c.beginPath();c.rect(X0+10,100,X1-X0-20,10);c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=3;for(const[x,y]of[[60,18],[200,18],[60,192],[200,192]])c.beginPath(),c.moveTo(x-10,y),c.lineTo(x+10,y),c.stroke();c.strokeStyle='#111'
  c.fillStyle=WD;c.lineWidth=6;c.beginPath();c.roundRect(X0-10,Y1-4,X1-X0+20,14,4);c.fill();c.stroke()
  // teru teru bozu swinging on its string from the top bar
  const a=.22*sin(T*t);c.save();c.translate(182,Y0+10);c.rotate(a)
  c.lineWidth=3;c.beginPath();c.moveTo(0,0);c.lineTo(0,34);c.stroke()
  c.fillStyle=DOLL;c.lineWidth=5;c.beginPath();c.moveTo(-10,52);c.quadraticCurveTo(-26,74,-24,88);c.quadraticCurveTo(-16,82,-10,90);c.quadraticCurveTo(-4,82,2,90);c.quadraticCurveTo(8,82,14,90);c.quadraticCurveTo(20,82,26,88);c.quadraticCurveTo(26,72,10,52);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(0,40,18,0,T);c.fill();c.stroke()
  c.strokeStyle=TIE;c.lineWidth=5;c.beginPath();c.moveTo(-11,56);c.lineTo(11,56);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*7,38,2.6,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();c.arc(0,42,5,.15*PI,.85*PI);c.stroke()
  if(sunny){c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(d*11,45,4,2.5,0,0,T),c.fill()}
  c.restore()
  // the girl in front, bottom left
  c.save();c.translate(84,256);c.scale(.66,.66);c.translate(-128,-256)
  c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(196,40,206,100,198,168);c.lineTo(58,168);c.bezierCurveTo(50,100,60,40,128,40);c.fill();c.stroke()
  c.fillStyle=SHIRT;c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(56,198,44,262);c.lineTo(212,262);c.quadraticCurveTo(200,198,156,188);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle=STR;c.lineWidth=9;for(let y=206;y<262;y+=20)c.beginPath(),c.moveTo(40,y),c.lineTo(216,y),c.stroke();c.restore()
  c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(56,198,44,262);c.lineTo(212,262);c.quadraticCurveTo(200,198,156,188);c.closePath();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,24);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sunny){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else if(w<.2){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,140,12,PI*.15,PI*.85),c.stroke()}
  else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle=MO;c.beginPath()
  if(sunny)c.moveTo(112,164),c.quadraticCurveTo(128,190,144,164),c.closePath(),c.fill(),c.stroke();else c.arc(128,168,7,1.15*PI,1.85*PI),c.stroke()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,166);c.bezierCurveTo(46,74,88,38,128,38);c.bezierCurveTo(168,38,210,74,194,166)
  c.quadraticCurveTo(186,124,178,106);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,126,62,166);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a0,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a0,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle=CLIP;c.lineWidth=7;for(const k of[0,1])c.beginPath(),c.roundRect(150+k*6,70+k*14,28,10,4),c.fill(),c.stroke()
  // hands: clasped under her chin while praying, thrown up when the sun comes out
  const u=ease(cl((w-.5)/.3))
  for(const d of[-1,1]){const hx=128+d*(10+70*u),hy=200-140*u
    for(const[l,s]of[[30,'#111'],[17,SHIRT]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*66,250),c.quadraticCurveTo(128+d*(60+30*u),220-60*u,hx,hy+14),c.stroke()
    c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,15,17,0,0,T);c.fill();c.stroke()}
  c.restore()
}

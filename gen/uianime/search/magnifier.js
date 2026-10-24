// honey blonde detective girl in a deerstalker sweeping a magnifying glass around, peering through it with a giant eye, then finding nothing: sweatdrop and a ?
const{sin,cos,PI,max,min,hypot,sqrt}=Math,T=2*PI
export const frames=20,delay=85
const SKIN='#ffe3d1',HAIR='#ffd43b',HD='#f59f00',EYE='#4dabf7',ED='#1864ab',BL='#ffa8a8',CT='#e0a96d',CTD='#c08552',HAT='#a9744f',HATD='#7f5539',TIE='#fa5252',RIM='#fcc419',GL='#d0ebff',SW='#a5d8ff'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,o)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+o,y+3,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+o,y-7,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+o,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+o-4,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+o+5,y+9,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const G=(c,f)=>{c.save();c.translate(128,158);c.scale(.82,.82);c.translate(-128,-186);f();c.restore()}
export default(c,t)=>{
  const sw=t<.4,u=t/.4,up=E((t-.4)/.1)-E((t-.62)/.1),af=t>.72,
    sx=128-60*cos(T*min(1,u)),sy=196-8*sin(2*T*min(1,u)),lx=sx+(107-sx)*up,ly=sy+(120-sy)*up,o=sw?(lx-128)/60*4:0,a=.9-.15*up
  G(c,()=>{
    c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,212,100,206,170);c.quadraticCurveTo(206,214,186,214);c.lineTo(70,214);c.quadraticCurveTo(50,214,50,170);c.bezierCurveTo(44,100,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=CT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(56,198,46,306);c.lineTo(210,306);c.quadraticCurveTo(200,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=CTD;c.beginPath();c.moveTo(98,192);c.quadraticCurveTo(54,204,40,262);c.quadraticCurveTo(128,286,216,262);c.quadraticCurveTo(202,204,158,192);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(108,190);c.lineTo(128,216);c.lineTo(148,190);c.closePath();c.fill();c.lineWidth=6;c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
    c.fillStyle=TIE;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*18,203),c.lineTo(128+d*18,221),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.arc(128,212,5,0,T);c.fill();c.stroke()
    c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(af){eye(c,103,140,-1,0);eye(c,153,140,1,0);c.lineWidth=5;c.beginPath();c.moveTo(114,170);for(let k=1;k<=7;k++)c.lineTo(114+k*4,170+(k%2?-3:2));c.stroke()}
    else{eye(c,103,140,-1,o);eye(c,153,140,1,o);c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(128+o,169,5,4,0,0,T);c.fill();c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
    c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,162)
    c.bezierCurveTo(48,74,88,40,128,40);c.bezierCurveTo(168,40,208,74,190,162)
    c.quadraticCurveTo(188,120,180,104);c.quadraticCurveTo(170,106,162,98);c.quadraticCurveTo(154,110,142,110);c.quadraticCurveTo(138,100,128,94)
    c.quadraticCurveTo(120,106,108,110);c.quadraticCurveTo(102,100,94,96);c.quadraticCurveTo(86,106,76,106);c.quadraticCurveTo(68,128,66,162);c.closePath();c.fill();c.stroke()
    // deerstalker
    const dome=()=>{c.beginPath();c.moveTo(60,92);c.bezierCurveTo(54,10,202,10,196,92);c.quadraticCurveTo(128,72,60,92);c.closePath()}
    c.fillStyle=HAT;dome();c.fill();c.save();c.clip();c.strokeStyle=HATD;c.lineWidth=5;c.beginPath();for(let x=40;x<230;x+=22)c.moveTo(x,0),c.lineTo(x-30,100),c.moveTo(x-40,0),c.lineTo(x-10,100);c.stroke();c.restore()
    c.strokeStyle='#111';c.lineWidth=7;dome();c.stroke()
    c.fillStyle=HATD;c.beginPath();c.moveTo(92,84);c.quadraticCurveTo(128,74,164,84);c.quadraticCurveTo(160,104,128,100);c.quadraticCurveTo(96,104,92,84);c.fill();c.stroke()
    c.fillStyle=HAT;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,26,14,8,d*.4,0,T),c.fill(),c.stroke()
    c.beginPath();c.arc(128,28,6,0,T);c.fill();c.stroke()
  })
  // magnifier: the hand holds the handle, the glass shows a giant eye when it is up at her face
  const hx=lx+54*cos(a),hy=ly+54*sin(a),sx0=166,sy0=210,d=hypot(hx-sx0,hy-sy0),h=sqrt(max(0,46*46-d*d/4)),nx=-(hy-sy0)/d*h,ny=(hx-sx0)/d*h,k=nx*.5+ny>0?1:-1,ex=(sx0+hx)/2+k*nx,ey=(sy0+hy)/2+k*ny
  ds(c,22,13,CT,()=>{c.moveTo(sx0,sy0);c.lineTo(ex,ey);c.lineTo(hx,hy)})
  ds(c,16,9,HATD,()=>{c.moveTo(lx+30*cos(a),ly+30*sin(a));c.lineTo(lx+68*cos(a),ly+68*sin(a))})
  c.save();c.beginPath();c.arc(lx,ly,27,0,T);c.fillStyle=GL;c.fill();c.clip()
  if(up>.6){c.fillStyle=SKIN;c.fillRect(lx-30,ly-30,60,60);c.translate(107,120);c.scale(1.45,1.45);c.translate(-107,-120);G(c,()=>eye(c,103,140,-1,0))}
  c.restore()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(lx,ly,19,PI*1.1,PI*1.45);c.stroke()
  c.strokeStyle='#111';c.fillStyle=RIM;c.lineWidth=5;c.beginPath();c.arc(lx,ly,34,0,T);c.arc(lx,ly,26,0,T,true);c.fill('evenodd');c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,11,10,a,0,T);c.fill();c.stroke()
  // nothing found
  if(af){const s=min(1,(t-.72)/.06)
    c.fillStyle=SW;c.lineWidth=4;c.beginPath();c.moveTo(194,86-18*s);c.quadraticCurveTo(194+11*s,102,194,106);c.quadraticCurveTo(194-11*s,102,194,86-18*s);c.fill();c.stroke()
    c.save();c.translate(220,54);c.scale(1.7*s,1.7*s);c.rotate(.2)
    ds(c,15,8,'#fff',()=>{c.moveTo(-10,-8);c.quadraticCurveTo(-10,-22,2,-22);c.quadraticCurveTo(14,-22,13,-10);c.quadraticCurveTo(12,-1,2,3);c.lineTo(2,9)})
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(2,21,5,0,T);c.fill();c.stroke();c.restore()}
}

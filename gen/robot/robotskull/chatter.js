// chrome robot skull front-on, angry glowing red eyes flaring, metal teeth chattering as its piston-hinged jaw clacks open and shut, head bobbing like it's cackling
export const frames=20,delay=60
const P=Math.PI*2,A=[1,.55,.85,.45]
const teeth=(c,y,h,dn)=>{
  for(let k=0;k<8;k++){
    const x=95+k*8.5,w=k==0||k==7?7:8
    c.beginPath();c.roundRect(x,dn?y:y-h,w,h,dn?[0,0,3,3]:[3,3,0,0]);c.fillStyle='#eef2f5';c.fill();c.stroke()
  }
}
export default(c,t)=>{
  const k=Math.floor(t*4),u=t*4-k,j=A[k]*(1-Math.cos(P*u))/2,o=22*j
  c.translate(128,150-5*j);c.rotate(.06*Math.sin(P*t)-.04*j);c.scale(1.1,1.1);c.translate(-128,-150)
  c.lineWidth=5
  const ch=(y0,y1)=>{
    const g=c.createLinearGradient(0,y0,0,y1)
    g.addColorStop(0,'#ffffff');g.addColorStop(.36,'#cfd7de');g.addColorStop(.5,'#76828e');g.addColorStop(.57,'#a7b1bb');g.addColorStop(1,'#e4eaef')
    return g
  }
  // mouth cavity
  c.beginPath();c.rect(92,148,72,32+o);c.fillStyle='#2a0707';c.fill()
  // jaw pistons from the hinges down to the mandible
  for(const s of[-1,1]){
    const hx=128+s*58,jx=128+s*44,jy=180+o,a=Math.atan2(jy-142,jx-hx),L=Math.hypot(jy-142,jx-hx)
    c.save();c.translate(hx,142);c.rotate(a)
    c.beginPath();c.rect(10,-3.5,L-10,7);c.fillStyle='#dfe6ec';c.fill();c.lineWidth=3.5;c.stroke()
    c.beginPath();c.roundRect(0,-8,30,16,4);c.fillStyle='#5d6873';c.fill();c.lineWidth=4;c.stroke()
    c.restore()
  }
  // mandible with lower teeth
  c.save();c.translate(0,o)
  c.beginPath();c.moveTo(80,170);c.lineTo(176,170);c.lineTo(178,184);c.quadraticCurveTo(172,212,128,214);c.quadraticCurveTo(84,212,78,184);c.closePath()
  c.fillStyle=ch(166,214);c.lineWidth=5;c.fill();c.stroke()
  c.lineWidth=2.5
  c.beginPath();c.moveTo(100,198);c.quadraticCurveTo(128,206,156,198);c.stroke()
  c.fillStyle='#111';for(const x of[92,164]){c.beginPath();c.arc(x,186,2.6,0,P);c.fill()}
  teeth(c,172,13,0)
  c.restore()
  // cranium
  c.beginPath();c.moveTo(128,24);c.bezierCurveTo(178,24,202,60,200,102);c.bezierCurveTo(199,124,190,136,186,148)
  c.lineTo(166,152);c.lineTo(90,152);c.lineTo(70,148);c.bezierCurveTo(66,136,57,124,56,102);c.bezierCurveTo(54,60,78,24,128,24)
  c.fillStyle=ch(24,152);c.lineWidth=6;c.fill();c.stroke()
  c.lineWidth=2.5
  c.beginPath();c.moveTo(128,26);c.lineTo(128,78)
  for(const s of[-1,1]){c.moveTo(128+s*52,46);c.quadraticCurveTo(128+s*64,96,128+s*58,140)}
  for(const s of[-1,1]){c.moveTo(128+s*8,90);c.quadraticCurveTo(128+s*30,78,128+s*54,88)}
  c.stroke()
  c.fillStyle='#111'
  for(const y of[36,50,64])for(const s of[-1,1]){c.beginPath();c.arc(128+s*7,y,2.3,0,P);c.fill()}
  // temple vents
  for(const s of[-1,1])for(const y of[104,113,122]){c.beginPath();c.moveTo(128+s*62,y);c.lineTo(128+s*68,y);c.lineWidth=3.5;c.stroke()}
  // upper teeth
  c.lineWidth=2.5;teeth(c,148,14,1)
  // nose cavity, cheek lines
  c.beginPath();c.moveTo(128,120);c.lineTo(137,140);c.lineTo(128,137);c.lineTo(119,140);c.closePath();c.fillStyle='#15181c';c.fill();c.lineWidth=3;c.stroke()
  c.lineWidth=2.5;for(const s of[-1,1]){c.beginPath();c.moveTo(128+s*20,132);c.quadraticCurveTo(128+s*40,128,128+s*54,138);c.stroke()}
  // eye sockets slanting down to the centre, red lenses flaring as the jaw opens
  const f=.5+.5*j
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(128+s*48,92);c.lineTo(128+s*10,104);c.lineTo(128+s*12,120);c.quadraticCurveTo(128+s*28,130,128+s*46,118);c.closePath()
    c.fillStyle='#15181c';c.lineWidth=4;c.fill();c.stroke()
    const x=128+s*29,y=111
    c.beginPath();c.arc(x,y,10.5,0,P);c.fillStyle=f>.75?'#a01010':'#6a0b0b';c.fill()
    c.beginPath();c.arc(x,y,7,0,P);c.fillStyle=f>.75?'#ff3b2b':'#e3221c';c.fill()
    c.beginPath();c.arc(x,y,2.5+1.5*j,0,P);c.fillStyle='#ffe0d0';c.fill()
  }
  // hinge bolts
  for(const s of[-1,1]){c.beginPath();c.arc(128+s*58,142,7,0,P);c.fillStyle='#5d6873';c.lineWidth=3.5;c.fill();c.stroke();c.beginPath();c.arc(128+s*58,142,2.5,0,P);c.fillStyle='#111';c.fill()}
}

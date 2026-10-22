// worn-out auburn-haired girl slumped over her desk with blank eyes, her little ghost soul drifting out of her mouth and getting sucked back in
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#c8642c',HD='#9c4a1c',HL='#f5c29f',HOOD='#dee2e6',HDK='#adb5bd',DESK='#e8b07a',DD='#c47f45',BAG='#d0bfff',PAPER='#fff'
export default(c,t)=>{
  const s=(1-cos(T*t))/2,a=t*T
  const head=f=>{c.save();c.translate(128,204);c.rotate(-.22);c.translate(-128,-200);f();c.restore()}
  head(()=>{c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,96,208,160);c.quadraticCurveTo(212,196,200,212);c.lineTo(56,212);c.quadraticCurveTo(44,196,48,160);c.bezierCurveTo(42,96,58,34,128,34);c.fill();c.stroke()})
  c.lineWidth=6;c.fillStyle=HOOD;c.beginPath();c.moveTo(92,196);c.quadraticCurveTo(50,200,40,240);c.lineTo(216,240);c.quadraticCurveTo(206,200,164,196);c.closePath();c.fill();c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    for(const x of[103,153]){
      c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(x,142,12,13,0,0,T);c.fill();c.stroke()
      c.strokeStyle=BAG;c.lineWidth=3;c.beginPath();c.arc(x,146,15,PI*.25,PI*.75);c.stroke();c.strokeStyle='#111'
    }
    c.fillStyle='#862e9c';c.lineWidth=4;c.beginPath();c.ellipse(128,170,7,9-3*s,0,0,T);c.fill();c.stroke()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,170)
    c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,190,170)
    c.quadraticCurveTo(184,130,180,110);c.quadraticCurveTo(170,112,168,124);c.quadraticCurveTo(160,104,150,98);c.quadraticCurveTo(146,110,140,116)
    c.quadraticCurveTo(132,100,122,94);c.quadraticCurveTo(120,108,112,118);c.quadraticCurveTo(104,102,94,100);c.quadraticCurveTo(92,112,86,120)
    c.quadraticCurveTo(80,112,76,110);c.quadraticCurveTo(72,140,66,170);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.24,1.34],[1.42,1.5],[1.62,1.72]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(124,40);c.quadraticCurveTo(118,14,98,14);c.quadraticCurveTo(108,22,114,40);c.fill();c.stroke()
  })
  c.fillStyle=DESK;c.beginPath();c.roundRect(6,212,244,30,8);c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=4;c.beginPath();c.moveTo(22,230);c.lineTo(234,230);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle=PAPER;c.lineWidth=4;for(let j=0;j<8;j++)c.beginPath(),c.roundRect(14+[0,4,1,5,2,0,3,1][j],203-j*8,56,8,2),c.fill(),c.stroke()
  for(const d of[-1,1]){for(const[w,st]of[[30,'#111'],[20,HOOD]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(128+d*44,206),c.lineTo(128+d*96,214),c.stroke();c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(128+d*114,215,11,7,0,0,T);c.fill();c.stroke()}
  const m=[121.5,174.7],e=[126+80*s+8*sin(2*a)*s,176-122*s],k=.35+.65*s
  const tail=()=>{c.beginPath();c.moveTo(m[0],m[1]);c.bezierCurveTo(m[0]+50*s,m[1]+10,e[0]-50*s,e[1]+40*s,e[0],e[1]+8*k)}
  for(const[w,st]of[[13*k,'#111'],[6*k,'#fff']])c.lineWidth=w,c.strokeStyle=st,tail(),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(e[0],e[1]);c.scale(k,k);c.rotate(.25*sin(2*a))
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(0,-6,20,PI,0);c.lineTo(20,10);for(let j=0;j<4;j++)c.quadraticCurveTo(15-j*10,20,10-j*10,12);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;for(const x of[-7,7])c.beginPath(),c.arc(x,-6,4,PI*.15,PI*.85),c.stroke()
  c.beginPath();c.ellipse(0,3,2.5,3,0,0,T);c.stroke()
  c.restore()
}

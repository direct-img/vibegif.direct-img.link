// masked kunoichi pops out of a smoke puff, throws a spinning shuriken that zips off to the right, then vanishes in smoke again
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=70
const SKIN='#ffe3d1',HAIR='#495057',HD='#343a40',HL='#adb5bd',EYE='#ff922b',ED='#d9480f',GI='#3b5bdb',GD='#364fc7',SC='#e03131',WR='#e9ecef',MET='#ced4da',SM='#f1f3f5'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,14,15,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+3,11.5,13.5,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-6,13,9,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+3,11.5,13.5,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4,5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+9,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.lineTo(x+16,y-6);c.moveTo(x+d*15,y-6);c.lineTo(x+d*21,y-11);c.stroke()
}
const star=(c,x,y,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.fillStyle=MET;c.lineWidth=4;c.beginPath()
  for(let k=0;k<4;k++){const b=k*PI/2;c.lineTo(15*cos(b),15*sin(b));c.lineTo(5*cos(b+PI/4),5*sin(b+PI/4))}
  c.closePath();c.fill();c.stroke();c.fillStyle='#868e96';c.beginPath();c.arc(0,0,3,0,T);c.fill();c.stroke();c.restore()
}
const smoke=(c,x,y,s,g)=>{
  const P=[[0,0,1],[-30,-22,.8],[30,-24,.85],[-30,30,.8],[32,28,.8],[0,-50,.72],[0,54,.72],[-46,4,.6],[46,2,.6],[0,-28,.8],[0,30,.8],[-18,0,.8],[18,0,.8]].map(([dx,dy,r])=>[x+dx*g,y+dy*g*1.3,r*40*s]).filter(p=>p[2]>7)
  c.fillStyle='#111';for(const[px,py,r]of P)c.beginPath(),c.arc(px,py,r+3.5,0,T),c.fill()
  c.fillStyle=SM;for(const[px,py,r]of P)c.beginPath(),c.arc(px,py,r,0,T),c.fill()
  c.strokeStyle='#ced4da';c.lineWidth=3;for(const[px,py,r]of P)if(r>12)c.beginPath(),c.arc(px-r*.2,py-r*.2,r*.55,PI*.9,PI*1.4),c.stroke()
  c.strokeStyle='#111'
}
export default(c,t,i)=>{
  const on=t>.06&&t<.94,w=t<.22?0:t<.3?(t-.22)/.08:t<.36?1-((t-.3)/.06)**2*1:0
  const a=t<.22?.3:t<.3?.3+2.4*w:t<.36?2.7-2.85*((t-.3)/.06):-.15,hx=124+36*cos(a),hy=142+36*sin(a),fly=t>=.35
  if(on){
    const sw=k=>5*sin(T*t*2-k)
    c.lineWidth=4
    for(const[w,col]of[[16,'#111'],[9,SC]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(100,130),c.quadraticCurveTo(76,128+sw(0),56,136+sw(1)),c.quadraticCurveTo(40,142+sw(2),26,136+sw(3)),c.stroke()
    c.strokeStyle='#111'
    c.save();c.translate(110,90);c.scale(.58,.58);c.translate(-128,-128)
    c.lineWidth=6;c.fillStyle=HAIR;c.save();c.translate(150,40);c.rotate(-.3+.12*sin(T*t*2))
    c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(-30,-60,40,-80,70,-50);c.quadraticCurveTo(50,-56,40,-40);c.quadraticCurveTo(62,-30,64,-4);c.quadraticCurveTo(40,-30,10,10);c.closePath();c.fill();c.stroke();c.restore()
    c.fillStyle=SC;c.beginPath();c.ellipse(152,40,12,16,.5,0,T);c.fill();c.stroke()
    c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,212,96,204,150);c.lineTo(52,150);c.bezierCurveTo(44,96,56,34,128,34);c.fill();c.stroke()
    c.restore()
    for(const[x0,x1]of[[100,92],[120,132]]){for(const[lw,col]of[[20,'#111'],[12,GI]])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(x0+(x0<110?2:-2),176),c.lineTo(x1,214),c.stroke()
      c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=WR;c.beginPath();c.moveTo(x1-9,206);c.lineTo(x1+9,206);c.lineTo(x1+10,222);c.quadraticCurveTo(x1+18,224,x1+16,230);c.lineTo(x1-10,230);c.closePath();c.fill();c.stroke()}
    c.lineWidth=4;c.fillStyle=GI;c.beginPath();c.moveTo(94,134);c.lineTo(126,134);c.quadraticCurveTo(134,156,134,184);c.lineTo(86,184);c.quadraticCurveTo(86,156,94,134);c.closePath();c.fill();c.stroke()
    c.fillStyle=GD;c.beginPath();c.moveTo(110,134);c.lineTo(126,134);c.lineTo(104,166);c.closePath();c.fill();c.stroke()
    c.fillStyle=SC;c.beginPath();c.rect(86,166,48,9);c.fill();c.stroke()
    for(const[w,col]of[[14,'#111'],[7,GI]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(96,142),c.lineTo(80,158),c.lineTo(90,170),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(92,170,6,0,T);c.fill();c.stroke()
    c.fillStyle=SC;c.lineWidth=4;c.beginPath();c.ellipse(110,132,20,7,0,0,T);c.fill();c.stroke()
    c.save();c.translate(110,90);c.scale(.58,.58);c.translate(-128,-128)
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(i==14){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,148,x+15,142),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=GI;c.beginPath();c.moveTo(75,154);c.quadraticCurveTo(128,150,181,154);c.bezierCurveTo(176,170,156,184,128,186);c.bezierCurveTo(100,184,80,170,75,154);c.closePath();c.fill();c.stroke()
    c.strokeStyle=GD;c.lineWidth=4;c.beginPath();c.moveTo(118,164);c.quadraticCurveTo(128,170,138,164);c.stroke();c.strokeStyle='#111'
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,140)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,140)
    c.quadraticCurveTo(184,118,178,104);c.lineTo(166,116);c.lineTo(160,100);c.lineTo(146,114);c.lineTo(138,98);c.lineTo(124,114);c.lineTo(116,98);c.lineTo(104,114);c.lineTo(96,100);c.lineTo(86,114);c.lineTo(78,104);c.quadraticCurveTo(72,118,70,140);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SC;c.beginPath();c.moveTo(66,80);c.quadraticCurveTo(128,62,190,80);c.lineTo(188,96);c.quadraticCurveTo(128,80,68,96);c.closePath();c.fill();c.stroke()
    c.fillStyle=MET;c.lineWidth=5;c.beginPath();c.moveTo(106,72);c.lineTo(150,72);c.lineTo(150,90);c.lineTo(106,90);c.closePath();c.fill();c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(122,76);c.lineTo(134,86);c.moveTo(134,76);c.lineTo(122,86);c.stroke()
    c.restore()
    for(const[w,col]of[[14,'#111'],[7,GI]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(124,142),c.lineTo(hx,hy),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,6.5,0,T);c.fill();c.stroke()
    if(!fly)star(c,hx+4,hy-6,a)
    if(t>.31&&t<.42){c.lineWidth=3.5;for(const r of[44,51])c.beginPath(),c.arc(124,142,r,-.1,1.4),c.stroke()}
  }
  if(fly){const p=(t-.35)/.2;if(p<1){const x=160+130*p*p*.3+130*p*.7,y=134-8*p;for(const k of[0,1,2]){const l=34+k*8;for(const[w,col]of[[8,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(x-20-l,y-8+k*8),c.lineTo(x-20,y-8+k*8),c.stroke()}c.strokeStyle='#111';star(c,x,y,T*t*6)}}
  const s=t<.18?1-t/.18:t>.82?(t-.82)/.18:0
  if(s>0)smoke(c,110,136,s,t<.5?.75+.35*(1-s):.5+.5*s)
}

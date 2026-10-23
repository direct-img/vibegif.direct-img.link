// festival girl in a happi coat and hachimaki pounding a big taiko drum with two bachi, sticks alternating, impact rings on the drumhead
const{sin,cos,PI,max,min,hypot}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#c92a2a',HD='#8f1d1d',HL='#ffa8a8',EYE='#fd7e14',ED='#d9480f',HAPPI='#364fc7',HP='#fff',BAND='#fff',KNOT='#e03131',DRUM='#a9744f',DD='#7f5539',HEAD='#fff4e6',RIV='#ffd43b',BACHI='#e9c46a',BL='#ffa8a8',MO='#c92a2a',TOM=['#e03131','#ffd43b','#4dabf7']
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,14,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,14,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-14,x+16,y-6);c.moveTo(x+d*15,y-6);c.lineTo(x+d*21,y-11);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-d*16,y-28);c.lineTo(x+d*14,y-20);c.stroke()
}
export default(c,t)=>{
  const ph=d=>(2*t+(d>0?.5:0))%1,up=p=>p<.12?0:p<.55?ease((p-.12)/.43):p<.85?1:1-ease((p-.85)/.15),hit=d=>ph(d)<.14,anyhit=hit(-1)||hit(1)
  const hand=d=>{const u=up(ph(d)),R=[128+d*82,96],D=[128+d*44,152];return[D[0]+(R[0]-D[0])*u,D[1]+(R[1]-D[1])*u,u]}
  c.save();c.translate(128,6);c.scale(.78,.78);c.translate(-128,0)
  // bun and back hair
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.arc(128,30,26,0,T);c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(196,40,206,100,196,150);c.lineTo(60,150);c.bezierCurveTo(50,100,60,40,128,40);c.fill();c.stroke()
  // happi coat
  c.fillStyle=HAPPI;c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(48,196,36,262);c.lineTo(220,262);c.quadraticCurveTo(208,196,156,188);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HP;c.lineWidth=6;for(let y=208;y<262;y+=18)c.beginPath(),c.moveTo(48,y),c.lineTo(60,y+6),c.moveTo(208,y),c.lineTo(196,y+6),c.stroke();c.strokeStyle='#111'
  c.fillStyle=HP;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*24,186),c.lineTo(128+d*4,262),c.lineTo(128+d*18,262),c.lineTo(128+d*36,190),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.lineTo(128,214);c.lineTo(140,190);c.lineTo(140,168);c.fill();c.lineWidth=6;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  // face
  c.lineWidth=7;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,6,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle=MO;c.beginPath()
  if(anyhit)c.moveTo(112,162),c.quadraticCurveTo(128,190,144,162),c.closePath(),c.fill(),c.stroke();else c.moveTo(116,168),c.lineTo(140,168),c.stroke()
  // bangs
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,140);c.bezierCurveTo(50,74,88,40,128,40);c.bezierCurveTo(168,40,206,74,190,140)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,124,66,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  // hachimaki with fluttering knot
  c.fillStyle=BAND;c.lineWidth=7;c.beginPath();c.moveTo(64,76);c.quadraticCurveTo(128,58,192,76);c.lineTo(194,92);c.quadraticCurveTo(128,74,62,92);c.closePath();c.fill();c.stroke()
  c.fillStyle=KNOT;c.beginPath();c.arc(128,70,9,0,T);c.fill();c.stroke()
  const fl=8*sin(4*T*t);c.fillStyle=BAND;for(const[dy,k]of[[0,1],[12,-1]])c.beginPath(),c.moveTo(192,80+dy*.5),c.quadraticCurveTo(212,70+dy+fl*k,232,78+dy+fl*k),c.lineTo(228,90+dy+fl*k),c.quadraticCurveTo(212,84+dy,194,90+dy*.5),c.closePath(),c.fill(),c.stroke()
  c.restore()
  // drum
  c.lineWidth=6;c.fillStyle=DRUM;c.beginPath();c.moveTo(42,176);c.quadraticCurveTo(34,214,46,250);c.lineTo(210,250);c.quadraticCurveTo(222,214,214,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=4;for(const x of[78,104,152,178])c.beginPath(),c.moveTo(x,186),c.lineTo(x+(x-128)*.06,248),c.stroke();c.strokeStyle='#111'
  c.save();c.translate(128,220);c.lineWidth=4;for(let k=0;k<3;k++){c.save();c.rotate(k*T/3);c.fillStyle=TOM[k];c.beginPath();c.arc(0,-8,9,0,T);c.moveTo(9,-8);c.quadraticCurveTo(14,8,-6,14);c.quadraticCurveTo(4,4,0,1);c.fill();c.stroke();c.restore()}c.restore()
  c.fillStyle=RIV;c.lineWidth=3;for(let k=0;k<9;k++){const x=50+k*19.5;c.beginPath();c.arc(x,190+((x-128)/80)**2*-6+6,3.5,0,T);c.fill();c.stroke()}
  const flex=anyhit?3:0
  c.fillStyle=HEAD;c.lineWidth=6;c.beginPath();c.ellipse(128,174,88,22-flex,0,0,T);c.fill();c.stroke()
  // impact rings and burst lines
  for(const d of[-1,1])if(hit(d)){const p=ph(d)/.14,x=128+d*22;c.strokeStyle=d<0?'#ff8787':'#74c0fc';c.lineWidth=4;for(const k of[0,.5]){const r=cl(p*1.2-k);if(r>0)c.beginPath(),c.ellipse(x,180,14+26*r,4+6*r,0,0,T),c.stroke()}
    c.strokeStyle='#111';c.lineWidth=5;for(const a of[-2.4,-1.9,-1.2])c.beginPath(),c.moveTo(x+d*20+30*cos(a),196+30*sin(a)*.6),c.lineTo(x+d*20+44*cos(a),196+44*sin(a)*.6),c.stroke()}
  // arms and bachi
  for(const d of[-1,1]){const[hx,hy,u]=hand(d),sx=128+d*50,sy=158,th=PI/2+d*.6+(-PI+d*-.1)*u,bx=hx+44*cos(th),by=hy+44*sin(th),ux=cos(th),uy=sin(th)
    for(const[l,s]of[[22,'#111'],[13,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.quadraticCurveTo(sx+d*18,(sy+hy)/2,hx,hy),c.stroke()
    for(const[l,s]of[[12,'#111'],[5,BACHI]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(hx-ux*8,hy-uy*8),c.lineTo(bx,by),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke()
    if(u>.6){c.lineWidth=4;c.beginPath();c.arc(hx,hy,22,d<0?PI*.9:-PI*.1,d<0?PI*1.3:PI*.1+.2);c.stroke()}}
}

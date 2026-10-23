// chibi in a pumpkin dress and cat-ear headband shaking her jack-o-lantern candy bucket, candies hopping out and dropping back in
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#862e9c',HD='#5f1f6e',HL='#e5c4ee',EYE='#94d82d',ED='#5c940d',PUMP='#ff922b',PD='#e8590c',STEM='#51cf66',SD='#2f9e44',EAR='#495057',PINK='#faa2c1',SOCK='#b197fc',BL='#ffa8a8',MO='#c92a2a',CANDY=['#f783ac','#4dabf7','#ffd43b','#69db7c']
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const candy=(c,x,y,col,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.fillStyle=col;c.lineWidth=3.5
  for(const d of[-1,1])c.beginPath(),c.moveTo(d*6,0),c.lineTo(d*15,-6),c.lineTo(d*15,6),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.ellipse(0,0,8,6.5,0,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  const s=5*sin(2*T*t),b=0,Z=.62,bx=194,by=214+s
  // twin tails behind everything
  c.save();c.translate(122,70+b);c.scale(Z,Z);c.translate(-128,-40)
  c.fillStyle=HAIR;c.lineWidth=8
  for(const d of[-1,1]){const sw=d*6*sin(2*T*t+1);c.beginPath();c.moveTo(128+d*58,110);c.bezierCurveTo(128+d*96,130,128+d*92+sw,190,128+d*72+sw,226);c.quadraticCurveTo(128+d*60,214,128+d*62,196);c.bezierCurveTo(128+d*64,160,128+d*52,140,128+d*44,126);c.closePath();c.fill();c.stroke()}
  c.restore()
  // legs, stockings and shoes
  for(const d of[-1,1]){for(const[l,col]of[[16,'#111'],[9,SOCK]])c.lineWidth=l,c.strokeStyle=col,c.beginPath(),c.moveTo(122+d*12,208),c.lineTo(122+d*13,234),c.stroke()
    c.strokeStyle=HD;c.lineWidth=3;for(const y of[214,222,230])c.beginPath(),c.moveTo(122+d*12-4,y),c.lineTo(122+d*12+4,y),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=EAR
  for(const d of[-1,1]){c.beginPath();c.ellipse(122+d*15,240,11,6.5,0,0,T);c.lineWidth=12;c.strokeStyle='#fff';c.stroke();c.lineWidth=5;c.strokeStyle='#111';c.fill();c.stroke()}
  // arm holding the bucket
  for(const[l,col]of[[16,'#111'],[9,SKIN]])c.lineWidth=l,c.strokeStyle=col,c.beginPath(),c.moveTo(146,180+b),c.lineTo(bx-6,by-46),c.stroke()
  c.strokeStyle='#111'
  // pumpkin dress
  c.save();c.translate(122,196+b)
  c.lineWidth=6;c.fillStyle=PUMP;c.beginPath();c.ellipse(0,0,44,30,0,0,T);c.fill();c.stroke()
  c.strokeStyle=PD;c.lineWidth=4;for(const k of[-1,0,1])c.beginPath(),c.ellipse(k*20,0,k?14:12,28,0,k<0?PI*.5:-PI*.5,k<0?PI*1.5:PI*.5),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=STEM
  for(const d of[-1,1])c.beginPath(),c.moveTo(0,-28),c.quadraticCurveTo(d*14,-38,d*24,-26),c.quadraticCurveTo(d*12,-24,0,-24),c.closePath(),c.fill(),c.stroke()
  c.restore()
  // candies hopping out of the bucket, drawn behind its front
  for(let k=0;k<3;k++){const p=(2*t+k/3)%1,h=46*sin(PI*p);if(p<.9)candy(c,bx-14+k*14+(k-1)*10*p,by-26-h,CANDY[(k+(2*t+k/3>=1?1:0))%4],(k-1)*1.5*p+k)}
  // jack-o-lantern bucket
  c.lineWidth=5;c.beginPath();c.moveTo(bx-24,by-18);c.quadraticCurveTo(bx,by-56,bx+24,by-18);c.lineWidth=11;c.stroke();c.strokeStyle=EAR;c.lineWidth=4;c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=PUMP;c.beginPath();c.ellipse(bx,by,30,26,0,0,T);c.fill();c.stroke()
  c.strokeStyle=PD;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.ellipse(bx+d*12,by,10,24,0,0,T),c.stroke()
  c.strokeStyle='#111';c.fillStyle=PD;c.lineWidth=5;c.beginPath();c.ellipse(bx,by-22,22,6,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.moveTo(bx+d*12,by-8),c.lineTo(bx+d*5,by+1),c.lineTo(bx+d*18,by+1),c.closePath(),c.fill()
  c.beginPath();c.moveTo(bx-15,by+8);c.quadraticCurveTo(bx,by+22,bx+15,by+8);c.lineTo(bx+8,by+12);c.lineTo(bx+4,by+8);c.lineTo(bx-4,by+12);c.lineTo(bx-8,by+8);c.closePath();c.fill()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(bx-6,by-46,8,0,T);c.fill();c.stroke()
  if(Math.abs(s)>3.5){c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(bx+d*40,by-14),c.lineTo(bx+d*48,by-20),c.moveTo(bx+d*40,by-2),c.lineTo(bx+d*50,by-2),c.stroke()}
  // head
  c.save();c.translate(122,70+b);c.scale(Z,Z);c.translate(-128,-40)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,196,150);c.lineTo(60,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1)
  if(t>=.5&&t<.75){c.lineWidth=8;c.beginPath();c.moveTo(166,130);c.lineTo(146,141);c.lineTo(166,152);c.stroke()}else eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=4.5;c.fillStyle=MO;c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,186,142,164);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(132,165);c.lineTo(136,173);c.lineTo(139,165);c.closePath();c.fill();c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,146)
  c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,190,146)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112)
  c.quadraticCurveTo(70,124,66,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  // cat-ear headband, white rimmed so it shows on black
  for(const d of[-1,1]){const tw=d>0&&t>=.25&&t<.375?.25:0;c.save();c.translate(128+d*44,52);c.rotate(d*(.35+tw))
    c.beginPath();c.moveTo(-24,14);c.lineTo(0,-38);c.lineTo(24,14);c.closePath();c.lineWidth=20;c.strokeStyle='#fff';c.stroke();c.fillStyle=EAR;c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
    c.fillStyle=PINK;c.beginPath();c.moveTo(-11,8);c.lineTo(0,-18);c.lineTo(11,8);c.closePath();c.fill();c.restore()}
  c.restore()
  // free arm making a cat paw by her cheek
  const pw=4*sin(2*T*t+1)
  for(const[l,col]of[[16,'#111'],[9,SKIN]])c.lineWidth=l,c.strokeStyle=col,c.beginPath(),c.moveTo(98,180+b),c.quadraticCurveTo(70,172,74+pw*.3,146+pw+b),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(76,140+pw+b,10,0,T);c.fill();c.stroke()
  c.lineWidth=3;for(const k of[-4,4])c.beginPath(),c.moveTo(76+k,132+pw+b),c.lineTo(76+k,138+pw+b),c.stroke()
}

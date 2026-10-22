// close-up of a girl with plum space buns blowing a bubblegum bubble that swells, pops all over her face, and gets slurped back in
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#cc5de8',HD='#9c36b5',HL='#f3d9fa',EYE='#fab005',ED='#e67700',JK='#3bc9db',GUM='#ff8cc6',GD='#f06595',BL='#ffa8a8'
const eye=(c,x,y,d,px,py)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+px,y+2+py,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+px,y-6+py,12,8,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+px,y+3+py,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+px-4,y-5+py,4.5,0,T);c.fill();c.beginPath();c.arc(x+px+5,y+8+py,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const blobs=(c,cs,lw)=>{c.lineWidth=lw;for(const[x,y,r]of cs)c.beginPath(),c.arc(x,y,r,0,T),c.stroke();c.fillStyle=GUM;for(const[x,y,r]of cs)c.beginPath(),c.arc(x,y,r,0,T),c.fill()}
export default(c,t)=>{
  const bw=t<.6,p=t/.6,pop=t>=.6&&t<.65,stuck=t>=.65,g=stuck?min(1,max(0,(1-t)/.14)):0,sh=t>=.65&&t<.88
  c.save();c.translate(128,140);c.scale(1.15,1.15);c.translate(-128,-140)
  c.lineWidth=6;c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.arc(128+d*50,50,22,0,T),c.fill(),c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.arc(128+d*50,50,12,d<0?PI*.2:PI*.8,d<0?PI*1.6:PI*2.2,d>0),c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,200,150);c.lineTo(56,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=JK;c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,158,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(108,190);c.lineTo(128,212);c.lineTo(148,190);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sh||pop){c.lineWidth=5.5;c.beginPath();c.moveTo(91,131);c.lineTo(113,140);c.lineTo(91,149);c.moveTo(165,131);c.lineTo(143,140);c.lineTo(165,149);c.stroke()}
  else{const q=bw?p:0;eye(c,103,140,-1,4*q,4*q);eye(c,153,140,1,-4*q,4*q)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,154);c.lineTo(127,158);c.stroke()
  c.lineWidth=3.5;c.fillStyle=GUM;c.beginPath();c.ellipse(128,170,5,4,0,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(52,76,88,38,128,38);c.bezierCurveTo(168,38,204,76,188,150)
  c.quadraticCurveTo(184,118,176,104);c.quadraticCurveTo(172,96,166,108);c.quadraticCurveTo(160,94,150,90);c.quadraticCurveTo(144,104,136,108)
  c.quadraticCurveTo(132,94,122,86);c.quadraticCurveTo(116,102,106,108);c.quadraticCurveTo(102,94,92,92);c.quadraticCurveTo(86,104,82,112)
  c.quadraticCurveTo(72,126,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  if(bw){const r=6+46*p**1.4+(p>.5?1.5*sin(T*t*5):0),y=170+r*.4;c.lineWidth=6;c.fillStyle=GUM;c.beginPath();c.arc(128,y,r,0,T);c.fill();c.stroke()
    if(r>14){c.strokeStyle='#fff';c.lineWidth=max(3,r*.12);c.beginPath();c.arc(128,y,r*.68,PI*1.12,PI*1.42);c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(128+cos(PI*1.55)*r*.68,y+sin(PI*1.55)*r*.68,r*.06+1,0,T);c.fill();c.strokeStyle='#111'}}
  if(pop){c.fillStyle=GUM;c.lineWidth=6;c.beginPath();for(let j=0;j<22;j++){const a=j*PI/11,rr=j%2?44:72;c.lineTo(128+cos(a)*rr,184+sin(a)*rr)}c.closePath();c.fill();c.stroke()
    for(let j=0;j<8;j++){const a=j*PI/4+.3;c.beginPath();c.arc(128+cos(a)*92,184+sin(a)*84,6,0,T);c.fill();c.stroke()}}
  if(stuck&&g>0){c.save();c.translate(128,172);c.scale(g,g);c.translate(-128,-172)
    blobs(c,[[100,170,20],[128,175,22],[156,170,20],[82,152,12],[174,152,13],[116,191,10],[142,190,8],[66,136,8],[192,130,7],[152,100,9],[100,104,7]],12)
    c.fillStyle=GD;for(const[x,y,r]of[[118,176,4],[146,168,3],[96,164,3]])c.beginPath(),c.arc(x,y,r,0,T),c.fill()
    c.restore()}
  c.restore()
}

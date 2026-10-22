// chibi with chocolate double buns trembling over a low table, flipping it off screen with a roar, then calmly sliding a new one back in
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=70
const SKIN='#ffe3d1',HAIR='#7b4a2e',HD='#5c3520',HL='#d9a47c',TEE='#d0bfff',TD='#9775fa',RIB='#ff6b6b',WOOD='#e8a35c',WD='#b8742f',BL='#ffa8a8',CUP='#fff',TEA='#69db7c',RG='#f03e3e'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const table=(c,x,y,r)=>{
  c.save();c.translate(x,y);c.rotate(r)
  c.lineWidth=6;c.fillStyle=WD
  for(const d of[-1,1])c.beginPath(),c.roundRect(d*58-7,4,14,40,4),c.fill(),c.stroke()
  c.beginPath();c.ellipse(0,6,94,16,0,0,PI);c.lineTo(-94,0);c.ellipse(0,0,94,16,0,PI,0,true);c.closePath();c.fill();c.stroke()
  c.fillStyle=WOOD;c.beginPath();c.ellipse(0,0,94,16,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#ffd8a8';c.lineWidth=3;c.beginPath();c.ellipse(-6,-2,60,8,0,PI*1.1,PI*1.6);c.stroke();c.strokeStyle='#111'
  c.restore()
}
const cup=(c,x,y,r)=>{c.save();c.translate(x,y);c.rotate(r);c.fillStyle=CUP;c.lineWidth=5;c.beginPath();c.moveTo(-12,-14);c.lineTo(12,-14);c.lineTo(9,6);c.quadraticCurveTo(0,10,-9,6);c.closePath();c.fill();c.stroke();c.fillStyle=TEA;c.beginPath();c.ellipse(0,-14,12,4,0,0,T);c.fill();c.stroke();c.restore()}
const eyes=(c,m)=>{
  for(const d of[-1,1]){const x=128+d*25,y=140
    if(m==2){c.lineWidth=6;c.beginPath();c.moveTo(x-10,y+2);c.lineTo(x+10,y+2);c.stroke();continue}
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(x,y,13,15,0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x,y+(m?0:3),m?3.5:6,0,T);c.fill()
    if(!m){c.fillStyle=SKIN;c.beginPath();c.moveTo(x-d*18,y-20);c.lineTo(x-d*18,y-12);c.lineTo(x+d*18,y);c.lineTo(x+d*18,y-20);c.fill();c.lineWidth=6;c.beginPath();c.moveTo(x-d*15,y-11);c.lineTo(x+d*15,y-1);c.stroke()}
  }
}
export default(c,t)=>{
  const p=(t-.25)/.25,fly=t>=.25&&t<.5,sl=ez(t,.6,.8),u=ez(t,.24,.3)-ez(t,.64,.8),m=t<.25?0:t<.6?1:2,tr=t<.25?2*sin(t*T*12):0
  const sx=[128-66,128+66],hx=d=>128+d*(66+12*u),hy=184-140*u
  c.save();c.translate(128,24);c.scale(.75,.75);c.translate(-128,-36)
  c.lineWidth=7;c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.arc(128+d*50,44,26,0,T),c.fill(),c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*50,44,14,d<0?PI*.9:PI*1.6,d<0?PI*1.6:PI*2.3),c.stroke();c.strokeStyle='#111'
  c.fillStyle=RIB;c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*34,58),c.lineTo(128+d*22,44),c.lineTo(128+d*20,66),c.closePath(),c.fill(),c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle='#4c6ef5';c.beginPath();c.moveTo(92,196);c.lineTo(164,196);c.lineTo(196,236);c.quadraticCurveTo(128,250,60,236);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#364fc7';c.lineWidth=3;for(const x of[-34,-12,12,34])c.beginPath(),c.moveTo(128+x*.6,200),c.lineTo(128+x,240),c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=TEE;c.beginPath();c.moveTo(104,136);c.quadraticCurveTo(76,142,80,200);c.lineTo(176,200);c.quadraticCurveTo(180,142,152,136);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(118,128);c.lineTo(118,140);c.quadraticCurveTo(128,148,138,140);c.lineTo(138,128);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(118,128);c.lineTo(118,139);c.moveTo(138,128);c.lineTo(138,139);c.stroke()
  const arms=()=>{for(const d of[-1,1]){const x=hx(d),y=hy+(u?0:tr);for(const[w,s]of[[24,'#111'],[14,TEE]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*32,150),c.quadraticCurveTo(128+d*(56+20*u),168-60*u,x,y),c.stroke();c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(x,y,11,10,0,0,T);c.fill();c.stroke()}}
  if(u>.5)arms()
  c.save();c.translate(128,24);c.scale(.75,.75);c.translate(-128,-36)
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eyes(c,m)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,11,5.5,0,0,T),c.fill()
  if(m==0){c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(112,162,32,14,4);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(112,169);c.lineTo(144,169);for(const x of[120,128,136])c.moveTo(x,162),c.lineTo(x,176);c.stroke()}
  else if(m==1){c.fillStyle='#c92a2a';c.lineWidth=4.5;c.beginPath();c.roundRect(110,158,36,26,9);c.fill();c.stroke();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,181,10,5,0,PI,0);c.fill()}
  else{c.lineWidth=4;c.beginPath();c.moveTo(120,170);c.lineTo(136,170);c.stroke()}
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,140)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,188,140)
  c.quadraticCurveTo(186,114,178,102);c.lineTo(166,112);c.quadraticCurveTo(160,98,150,94);c.lineTo(140,108)
  c.quadraticCurveTo(132,96,122,92);c.lineTo(112,108);c.quadraticCurveTo(104,96,94,96);c.lineTo(86,112)
  c.lineTo(78,104);c.quadraticCurveTo(70,120,68,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,b]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;if(m<2)c.beginPath(),c.moveTo(86,110),c.lineTo(114,122),c.moveTo(170,110),c.lineTo(142,122),c.stroke()
  c.restore()
  if(m==1)for(const d of[-1,1])for(const[w,s]of[[9,'#111'],[4,RG]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(128+d*76,40);c.lineTo(128+d*90,30);c.moveTo(128+d*80,62);c.lineTo(128+d*100,58);c.moveTo(128+d*74,18);c.lineTo(128+d*82,4);c.stroke()}
  c.strokeStyle='#111'
  if(fly){
    table(c,128+190*p,184-170*p+60*p*p,-p*PI*1.2)
    const cx=150+130*p,cy=166-260*p+120*p*p;cup(c,cx,cy,p*PI*2)
    c.fillStyle=TEA;c.lineWidth=3.5;if(p>.25)for(let k=1;k<4;k++){const pp=max(0,p-k*.08);c.beginPath();c.arc(150+130*pp-k*5,166-260*pp+120*pp*pp+k*8,6-k,0,T);c.fill();c.stroke()}
  }else if(t<.25||t>=.6){
    const x=t<.25?128+tr*.5:-110+238*sl
    table(c,x,184,0);cup(c,x+22,166,0)
    if(t>=.6&&t<.8)for(const y of[170,190,206])for(const[w,s]of[[9,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x-100-y%3*6,y),c.lineTo(x-130-y%3*6,y),c.stroke()
    c.strokeStyle='#111'
  }
  if(u<=.5)arms()
}

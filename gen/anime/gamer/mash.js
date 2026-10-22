// hime cut gamer girl in a cat ear headset mashing her controller, flames burning in her eyes, teeth gritted, sweat flying
const{sin,PI}=Math,T=2*PI
export const frames=12,delay=70
const SKIN='#ffe3d1',HAIR='#495057',HD='#343a40',HL='#adb5bd',EYE='#fa5252',ED='#c92a2a',BL='#ffa8a8',HS='#f783ac',HSD='#e64980',HOOD='#69db7c',PAD='#e9ecef',SW='#a5d8ff',LED=['#ff6b6b','#ffd43b','#69db7c','#4dabf7','#b197fc','#f783ac']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,i)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.save();c.clip();c.fillStyle=EYE;c.beginPath();c.ellipse(x,y+3,11.5,14,0,0,T);c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y+16,13,7,0,0,T);c.fill()
  const f=i%3,w=[5,6.5,5.5][f],h=[13,10,15][f],k=[-2,2,0][f]
  c.fillStyle='#ffd43b';c.lineWidth=2;c.beginPath();c.moveTo(x+k,y-h+3);c.quadraticCurveTo(x+w,y,x+w*.8,y+6);c.quadraticCurveTo(x,y+13,x-w*.8,y+6);c.quadraticCurveTo(x-w,y,x+k,y-h+3);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+6,2.5,4,0,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-20,y-24);c.lineTo(x+20,y-24);c.lineTo(x+20,y+d*-4-8);c.lineTo(x-20,y+d*4-8);c.closePath();c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x+d*17,y-13);c.lineTo(x-d*16,y-5);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+19);c.lineTo(x+8,y+19);c.stroke()
}
export default(c,t,i)=>{
  const a=t*T,lt=i%2,rt=(i+1)%2,sw=(t*2)%1
  for(const[l,k]of[[14,'#fff'],[7,'#111']])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(128,30),c.bezierCurveTo(202,30,214,100,206,170),c.lineTo(212,232),c.lineTo(44,232),c.lineTo(50,170),c.bezierCurveTo(42,100,54,30,128,30),c.stroke()
  c.fillStyle=HD;c.fill()
  c.lineWidth=6;c.fillStyle=HOOD;c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,198),c.lineTo(128+d*14,226),c.stroke(),c.beginPath(),c.arc(128+d*14,229,3.5,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,22);c.fill()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1,i);eye(c,153,142,1,i+1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(112,166);c.lineTo(144,166);c.quadraticCurveTo(146,178,136,178);c.lineTo(120,178);c.quadraticCurveTo(110,178,112,166);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(112,172);c.lineTo(145,172);for(const x of[120,128,136])c.moveTo(x,166),c.lineTo(x,178);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,186);c.lineTo(60,96);c.bezierCurveTo(60,46,92,34,128,34);c.bezierCurveTo(164,34,196,46,196,96);c.lineTo(196,186);c.lineTo(178,186);c.lineTo(176,116)
  c.lineTo(172,112);c.lineTo(164,116);c.lineTo(156,112);c.lineTo(148,116);c.lineTo(140,112);c.lineTo(132,116);c.lineTo(124,112);c.lineTo(116,116);c.lineTo(108,112);c.lineTo(100,116);c.lineTo(92,112);c.lineTo(84,116);c.lineTo(80,116)
  c.lineTo(78,186);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,100,58,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(86,114);c.lineTo(114,124);c.moveTo(142,124);c.lineTo(170,114);c.stroke()
  for(const d of[-1,1]){c.fillStyle=HS;c.lineWidth=5;c.beginPath();c.moveTo(128+d*22,52);c.lineTo(128+d*46,8);c.lineTo(128+d*66,62);c.closePath();c.fill();c.stroke();c.fillStyle=LED[(i+(d>0?3:0))%6];c.lineWidth=3;c.beginPath();c.moveTo(128+d*36,48);c.lineTo(128+d*46,26);c.lineTo(128+d*55,52);c.closePath();c.fill();c.stroke()}
  ds(c,14,7,HS,()=>{c.arc(128,110,72,PI*1.05,PI*1.95)})
  for(const d of[-1,1]){c.fillStyle=HS;c.lineWidth=6;c.beginPath();c.ellipse(128+d*68,128,13,22,0,0,T);c.fill();c.stroke();c.fillStyle=HSD;c.beginPath();c.ellipse(128+d*72,128,6,13,0,0,T);c.fill();c.lineWidth=3;c.stroke()}
  ds(c,8,3,HSD,()=>{c.moveTo(62,144);c.quadraticCurveTo(64,174,96,178)});c.fillStyle=HSD;c.lineWidth=3;c.beginPath();c.arc(98,178,5,0,T);c.fill();c.stroke()
  for(const[d,o]of[[1,0],[-1,.5]]){const p=(t*2+o)%1,s=sin(PI*p);if(s>.2){const x=128+d*(70+30*p),y=92-20*p+30*p*p;c.fillStyle=SW;c.lineWidth=4;c.beginPath();c.moveTo(x,y-11*s);c.quadraticCurveTo(x+7*s,y,x,y+5*s);c.quadraticCurveTo(x-7*s,y,x,y-11*s);c.fill();c.stroke()}}
  for(const d of[-1,1])ds(c,26,16,HOOD,()=>{c.moveTo(128+d*82,256);c.lineTo(128+d*64,226)})
  const pad=()=>{c.moveTo(80,204);c.lineTo(176,204);c.bezierCurveTo(206,204,214,236,200,246);c.quadraticCurveTo(186,254,170,236);c.lineTo(86,236);c.quadraticCurveTo(70,254,56,246);c.bezierCurveTo(42,236,50,204,80,204)}
  c.fillStyle=PAD;c.lineWidth=6;c.beginPath();pad();c.fill();c.stroke()
  c.fillStyle='#868e96';c.lineWidth=3;c.beginPath();c.rect(84,212,18,6);c.rect(90,206,6,18);c.fill();c.stroke()
  for(const[x,y,col,k]of[[164,206,'#4dabf7',0],[174,215,'#ff6b6b',1],[154,215,'#ffd43b',2],[164,224,'#69db7c',3]]){const pr=k%2==rt;c.fillStyle=col;c.beginPath();c.arc(x,y+(pr?1:0),pr?3:4.5,0,T);c.fill();c.stroke()}
  c.lineWidth=5;c.fillStyle=SKIN
  for(const[x,y,p]of[[60,236,0],[196,236,0],[96,218-4*lt+2,1],[166,218-4*rt+2,1]])c.beginPath(),p?c.ellipse(x,y,8,9,0,0,T):c.ellipse(x,y,13,15,0,0,T),c.fill(),c.stroke()
  for(const d of[-1,1])for(const k of[-1,1])ds(c,7,3,'#fff',()=>{const x=128+d*(54+(i%2)*3),y=196+k*8;c.moveTo(x,y);c.lineTo(x+d*10,y+k*5)})
}

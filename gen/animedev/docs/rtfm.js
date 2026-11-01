// honey-blonde anime girl with a pencil in her messy bun leaning over a giant open MANUAL, reading line by line until the pages flip on their own and her eyes turn to spirals
export const frames=28,delay=85,rim=3
const P=Math.PI,{sin,cos,min,max,abs,round}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const SK='#c98d62',SD='#a86c44',HR='#e9b75c',HD='#b9822e',HL='#fbe3a6',I=['#3b2a0c','#a0913c','#1f1606'],PG='#fffaf0',CV='#2d4f8c'
// one page from the spine (x=128) to an outer edge at signed offset w, lifted by h
const page=(c,w,h,col)=>F(c,()=>{c.moveTo(128,148);c.quadraticCurveTo(128+w*.5,138-h*.6,128+w,134-h);c.lineTo(128+w*1.02,194-h);c.quadraticCurveTo(128+w*.5,198-h*.3,128,214);c.closePath()},col,3)
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // phases: careful reading, pages run away and she gets lost, snaps back to reading
  const lost=sg(t,.32,.38)*(1-sg(t,.8,.88)),wob=sin(t*6*P)*lost
  // girl behind the book
  const hx=128,hy=88
  // torso + shoulders
  F(c,()=>{c.moveTo(hx-14,124);c.quadraticCurveTo(hx-36,126,hx-38,148);c.lineTo(hx+38,148);c.quadraticCurveTo(hx+36,126,hx+14,124);c.closePath()},'#fff')
  F(c,()=>{c.moveTo(hx-11,126);c.lineTo(hx-34,136);c.lineTo(hx-36,148);c.lineTo(hx+36,148);c.lineTo(hx+34,136);c.lineTo(hx+11,126);c.lineTo(hx,140);c.closePath()},'#4f8a5b',3)
  // head
  c.save();c.translate(hx,hy);c.rotate(round(wob*2)*.04)
  // bun with pencil
  c.save();c.translate(8,-58);c.rotate(1.15);F(c,()=>c.rect(-4,-34,8,52),'#f6c84c',2.5);F(c,()=>{c.moveTo(-4,18);c.lineTo(0,26);c.lineTo(4,18)},'#f3d9a8',2.5);F(c,()=>c.rect(-4,-40,8,7),'#f28aa0',2.5);c.restore()
  O(c,2,-56,19,15,HR);c.strokeStyle=HD;c.lineWidth=2.2;c.beginPath();c.arc(2,-56,9,.3,2.9);c.stroke();c.beginPath();c.moveTo(-14,-62);c.quadraticCurveTo(-24,-70,-20,-78);c.stroke()
  F(c,()=>{c.moveTo(-40,-14);c.bezierCurveTo(-50,8,-48,24,-42,34);c.lineTo(42,34);c.bezierCurveTo(48,24,50,8,40,-14);c.closePath()},HD)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  // eyes: reading along the lines, then spirals
  const rd=lost>.5?0:sin(t*8*P)*3.5
  for(const s of[-1,1]){c.save();c.translate(s*17,13);c.strokeStyle=L
    if(lost>.5){c.lineWidth=2.6;c.beginPath();for(let a=0;a<5.5*P;a+=.3){const r=a*.6;c.lineTo(cos(a+t*24*P*s)*r,sin(a+t*24*P*s)*r*1.1)}c.stroke()}
    else{c.save();c.beginPath();c.ellipse(0,0,9.5,11,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
      const g=c.createLinearGradient(0,-11,0,11);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1])
      c.beginPath();c.ellipse(rd,4,8,10.5,0,0,2*P);c.fillStyle=g;c.fill();c.beginPath();c.ellipse(rd,4,3.8,5.5,0,0,2*P);c.fillStyle=I[2];c.fill()
      c.fillStyle='#fff';c.beginPath();c.arc(rd-3,0,3,0,2*P);c.fill();c.restore()
      c.beginPath();c.moveTo(-10*s,-5);c.quadraticCurveTo(0,-10,11*s,-6);c.lineTo(13*s,-9);c.lineWidth=3.6;c.stroke()}
    c.restore()}
  c.fillStyle='rgba(230,100,90,.35)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,27,6,3,0,0,2*P);c.fill()}
  // mouth: concentrating -> wobbly
  if(lost>.5){c.beginPath();c.moveTo(-7,33);for(let k=1;k<=4;k++)c.lineTo(-7+k*3.5,33+(k%2?-2:1));c.lineWidth=2.5;c.strokeStyle=L;c.stroke()}
  else F(c,()=>c.ellipse(1,33,2.5,2,0,0,2*P),'#8a2f3d',2)
  // bangs swept to one side with loose strands
  F(c,()=>{c.moveTo(42,4);c.bezierCurveTo(48,-40,24,-58,0,-58);c.bezierCurveTo(-26,-58,-48,-40,-42,6);c.quadraticCurveTo(-36,-6,-30,-12)
    c.quadraticCurveTo(-28,0,-20,6);c.quadraticCurveTo(-18,-8,-12,-16);c.quadraticCurveTo(0,-2,14,-2);c.quadraticCurveTo(8,-12,10,-18);c.quadraticCurveTo(24,-8,30,4);c.quadraticCurveTo(32,-6,34,-12);c.quadraticCurveTo(40,-4,42,4)},HR)
  for(const s of[-1,1])F(c,()=>{c.moveTo(s*36,-12);c.quadraticCurveTo(s*44,12,s*40,34);c.quadraticCurveTo(s*35,24,s*32,22);c.quadraticCurveTo(s*34,6,s*30,-4)},HR,3)
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.5,-2.2,-1.35])c.beginPath(),c.arc(0,-8,42,a,a+.2),c.stroke()
  c.strokeStyle=HD;c.lineWidth=2.6;for(const s of[-1,1]){c.beginPath();const u=lost>.5?3:0;c.moveTo(s*9,-12+u*s*.5-u);c.quadraticCurveTo(s*17,-14+(lost>.5?-2:2),s*25,-11-u*s*.5+u*.4);c.stroke()}
  c.restore()
  // the giant manual: thick page blocks, cover, open pages
  for(const s of[-1,1]){F(c,()=>{c.moveTo(128,240);c.quadraticCurveTo(128+s*56,228,128+s*119,216);c.lineTo(128+s*119,190);c.lineTo(128+s*112,190);c.lineTo(128,214);c.closePath()},CV,3)
    F(c,()=>{c.moveTo(128,234);c.quadraticCurveTo(128+s*56,222,128+s*115,212);c.lineTo(128+s*114,134);c.lineTo(128+s*112,194);c.quadraticCurveTo(128+s*56,198,128,214);c.closePath()},'#efe4cc',3)
    c.strokeStyle='#c9b994';c.lineWidth=1.5;for(const d of[4,8,12,16]){c.beginPath();c.moveTo(128,214+d);c.quadraticCurveTo(128+s*56,198+d*.85,128+s*(112+d*.2),194+d*.9);c.stroke()}}
  page(c,-112,0,PG);page(c,112,0,PG)
  // text lines on the pages + heading
  c.strokeStyle='#b9b2a3';c.lineWidth=2.5
  for(const s of[-1,1])for(let j=0;j<6;j++){const y=160+j*8,x0=128+s*14,x1=128+s*(96-(j*37%23))
    if(s<0&&j<3)continue;c.beginPath();c.moveTo(x0,y+abs(x0-128)*.02);c.quadraticCurveTo((x0+x1)/2,y-6+j*.5,x1,y-12+j*.3);c.stroke()}
  c.save();c.translate(72,166);c.rotate(-.07);c.fillStyle=L;c.font='bold 18px DejaVu Serif';c.textAlign='center';c.textBaseline='middle';c.fillText('MANUAL',0,0);c.restore()
  // reading highlight line follows her eyes
  if(lost<.5){const x=158+(sin(t*8*P)+1)*30;c.fillStyle='rgba(255,220,60,.55)';c.beginPath();c.ellipse(x,164-(x-128)*.08,12,4,-.1,0,2*P);c.fill()}
  // pages flipping by themselves
  for(let j=0;j<4;j++){const f=(t-.36-j*.09)/.14;if(f<=0||f>=1)continue;const a=E(f)*P,w=cos(a)*112,h=sin(a)*56
    page(c,w,h,f<.5?'#fffdf7':'#f4ecdb');c.strokeStyle='#d3cbbb';c.lineWidth=2.5;for(let k=0;k<4;k++){const q=.25+k*.15;c.beginPath();c.moveTo(128+w*.15,150+k*12-h*.1+k*2);c.lineTo(128+w*.8,140+k*12-h*.85+k*3);c.stroke()}}
  // hands resting on the pages
  for(const s of[-1,1]){const x=hx+s*(s<0?24:46),y=146+(lost>.5?-3:0);T(c,[[hx+s*34,132],[x,y]],11,'#fff');O(c,x,y+2,8,7,SK,3)}
  // question marks popping up while lost
  for(let j=0;j<3;j++){const a=.38+j*.11,p=(t-a)/.3;if(p<=0||p>=1)continue
    c.save();c.globalAlpha=1-sg(p,.6,1);c.translate([196,58,214][j],66-p*26);c.rotate(sin(p*9+j)*.25);c.scale(min(1,p*5),min(1,p*5))
    c.font='bold 28px DejaVu Sans';c.textAlign='center';c.textBaseline='middle';c.lineWidth=6;c.strokeStyle='#fff';c.strokeText('?',0,0);c.fillStyle=['#e5484d','#3b82f6','#8b5cf6'][j];c.fillText('?',0,0);c.lineWidth=2;c.strokeStyle=L;c.strokeText('?',0,0);c.restore()}
  // whoosh lines while pages fly
  if(t>.38&&t<.74){c.strokeStyle=L;c.lineWidth=2.5;for(let j=0;j<3;j++){const y=118+j*12,o=((t*40+j*3)%6);c.beginPath();c.moveTo(232-o,y);c.lineTo(246-o,y-2);c.stroke()}}
}

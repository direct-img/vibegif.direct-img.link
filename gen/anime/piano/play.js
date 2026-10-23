// side-view chibi with long black-brown hair and a white bow playing an upright piano, hands taking turns on the keys, swaying, notes floating up
// the dark hair gets a white rim so it doesn't vanish on black
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=110
const SKIN='#ffe3d1',HAIR='#4d4549',HD='#363134',HL='#a5b1c4',EYE='#748ffc',ED='#3b5bdb',BL='#ffa8a8',DRS='#5c7cfa',DRD='#4263eb',WOOD='#a9744f',WDD='#7f5539',WDL='#c99a6e',BENCH='#e8590c',SOCK='#fff',SHOE='#c2255c'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+5,y+5,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+5,y-5,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+6,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y-1,4.5,0,T);c.fill();c.beginPath();c.arc(x+10,y+11,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const note=(c,x,y,s,col)=>{ds(c,8,3,col,()=>{c.moveTo(x+6*s,y);c.lineTo(x+6*s,y-22*s);c.quadraticCurveTo(x+18*s,y-16*s,x+14*s,y-6*s)});c.fillStyle=col;c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,7*s,5*s,-.4,0,T);c.fill();c.stroke()}
export default(c,t)=>{
  const sw=.03*sin(2*PI*t),p1=max(0,sin(4*T*t)),p2=max(0,sin(4*T*t+PI))
  for(const[x,o,col]of[[170,0,'#ffd43b'],[214,.33,'#f783ac'],[192,.66,'#74c0fc']]){const p=(t+o)%1,s=sin(PI*p);if(s>.2)note(c,x+6*sin(p*T),54-34*p,.45+.4*s,col)}
  const K=(f,d)=>[112+138*f+6*d,170-24*f+14*d],P=(...q)=>{c.beginPath();q.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}
  c.lineWidth=7;c.fillStyle=WOOD;P([118,184],[252,158],[252,246],[122,246]);c.fill();c.stroke()
  c.fillStyle=WDD;c.lineWidth=5;P([140,196],[236,178],[236,232],[140,236]);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=WOOD;P([112,170],[250,146],[250,70],[116,96]);c.fill();c.stroke()
  c.fillStyle=WDL;P([108,98],[254,70],[254,58],[108,86]);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;P([156,110],[206,101],[206,136],[156,145]);c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();for(const y of[0,8,16])c.moveTo(162,116+y),c.lineTo(200,109+y);c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[168,121],[180,127],[192,115]])c.beginPath(),c.ellipse(x,y,3,2.2,-.4,0,T),c.fill()
  c.fillStyle='#fff';c.lineWidth=6;P(K(0,0),K(1,0),K(1,1),K(0,1));c.fill();c.stroke()
  const n=16;c.fillStyle='#ced4da';for(const[f,p]of[[.2,p1],[.32,p2]])if(p>.3){const k=Math.floor(f*n);P(K(k/n,0),K((k+1)/n,0),K((k+1)/n,1),K(k/n,1));c.fill()}
  c.lineWidth=2;c.beginPath();for(let k=1;k<n;k++){const[a,b]=K(k/n,0),[x,y]=K(k/n,1);c.moveTo(a,b);c.lineTo(x,y)}c.stroke()
  c.fillStyle='#111';for(let k=1;k<n;k++)if(![3,7,10,14].includes(k)){const w=.018;P(K(k/n-w,0),K(k/n+w,0),K(k/n+w,.55),K(k/n-w,.55));c.fill()}
  c.lineWidth=6;P(K(0,0),K(1,0),K(1,1),K(0,1));c.stroke()
  c.lineWidth=6;c.fillStyle=BENCH;c.beginPath();c.roundRect(36,198,84,12,5);c.fill();c.stroke()
  for(const x of[44,110])ds(c,12,6,BENCH,()=>{c.moveTo(x,210);c.lineTo(x,244)})
  ds(c,14,7,SKIN,()=>{c.moveTo(112,204);c.lineTo(120,234)})
  c.fillStyle=SOCK;c.lineWidth=4;c.beginPath();c.roundRect(113,226,14,10,3);c.fill();c.stroke()
  c.fillStyle=SHOE;c.lineWidth=5;c.beginPath();c.ellipse(126,240,13,6,0,0,T);c.fill();c.stroke()
  c.save();c.translate(84,200);c.rotate(sw);c.translate(-84,-200)
  c.lineWidth=6;c.fillStyle=DRS;c.beginPath();c.moveTo(74,150);c.quadraticCurveTo(64,170,60,200);c.lineTo(122,204);c.quadraticCurveTo(116,188,104,180);c.quadraticCurveTo(102,160,96,150);c.closePath();c.fill();c.stroke()
  c.fillStyle=DRD;c.lineWidth=5;c.beginPath();c.moveTo(60,200);c.quadraticCurveTo(90,192,122,204);c.lineTo(124,210);c.quadraticCurveTo(90,200,58,206);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(76,150);c.quadraticCurveTo(86,162,96,150);c.quadraticCurveTo(86,156,76,150);c.fill();c.stroke()
  c.save();c.translate(84,108);c.scale(.56,.56);c.translate(-128,-120)
  const back=()=>{c.moveTo(118,40);c.bezierCurveTo(56,40,40,110,46,196);c.quadraticCurveTo(40,236,58,262);c.quadraticCurveTo(80,250,96,268);c.quadraticCurveTo(110,236,104,190);c.lineTo(170,150);c.bezierCurveTo(196,96,180,40,118,40)}
  c.strokeStyle='#fff';c.lineWidth=22;c.beginPath();back();c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();back();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,190,152,186,96);c.bezierCurveTo(184,44,74,44,74,96);c.fill();c.stroke()
  eye(c,112,140,-1);eye(c,162,140,1)
  c.fillStyle=BL;for(const x of[86,174])c.beginPath(),c.ellipse(x,164,12,7,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(130,168);c.quadraticCurveTo(140,176,150,167);c.stroke()
  const hair=()=>{c.moveTo(70,150);c.bezierCurveTo(52,74,90,38,130,38);c.bezierCurveTo(172,38,208,76,190,140)
    c.quadraticCurveTo(188,118,182,104);c.quadraticCurveTo(172,104,164,112);c.quadraticCurveTo(162,98,152,92);c.quadraticCurveTo(144,106,134,110)
    c.quadraticCurveTo(132,98,124,92);c.quadraticCurveTo(116,104,104,110);c.quadraticCurveTo(100,98,94,96);c.quadraticCurveTo(84,110,80,118);c.quadraticCurveTo(72,130,70,150);c.closePath()}
  c.strokeStyle='#fff';c.lineWidth=20;c.beginPath();hair();c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();hair();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.6,1.7]])c.beginPath(),c.arc(130,106,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=6;for(const a of[-.9,.9])c.beginPath(),c.ellipse(58+cos(a+PI)*0,70+18*sin(a),24,13,a*.6,0,T),c.fill(),c.stroke()
  c.beginPath();c.arc(58,70,9,0,T);c.fill();c.stroke()
  c.restore()
  const h1=[146,170+4*p1],h2=[162,167+4*p2]
  ds(c,17,9,DRS,()=>{c.moveTo(90,158);c.lineTo(106,178);c.lineTo(h1[0]-6,h1[1]+2)})
  ds(c,17,9,DRS,()=>{c.moveTo(96,154);c.lineTo(118,170);c.lineTo(h2[0]-6,h2[1]+2)})
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[h1,h2])c.beginPath(),c.ellipse(x,y,9,7,-.2,0,T),c.fill(),c.stroke()
}

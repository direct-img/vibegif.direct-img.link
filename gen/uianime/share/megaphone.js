// lemon haired girl with odango buns pumping her fist and cheerfully shouting into a red megaphone, sound arcs blast out toward a pulsing share icon badge
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#ffe066',HD='#f59f00',HL='#fff9db',TOP='#4dabf7',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',MG='#ff8787',MGD='#e03131',HN='#495057',BOW='#ff8fab',SH='#4dabf7',SC=['#ff8fab','#69db7c','#ffd43b']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
export default(c,t,i)=>{
  const p=(t*2)%1,k=p<.5?sin(T*p):0,MX=102,MY=160,MA=-.1-.04*k,bs=1+.18*sin(PI*min(1,p/.4))*(p<.4?1:0)
  const H=f=>{c.save();c.translate(96,172-3*k);c.rotate(-.04*k);c.scale(.72,.72);c.translate(-128,-186);f();c.restore()}
  c.save();c.translate(206,54);c.scale(bs,bs);c.rotate(.12*sin(T*t))
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(0,0,34,0,T);c.fill();c.stroke()
  ds(c,10,5,SH,()=>{c.moveTo(-14,0);c.lineTo(12,-14);c.moveTo(-14,0);c.lineTo(12,14)})
  c.lineWidth=4;for(const[n,[x,y]]of[[-14,0],[12,-14],[12,14]].entries()){const r=8*(1+.3*max(0,sin(PI*min(1,max(0,(p-n*.08)/.3)))));c.fillStyle=SC[n];c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
  c.restore()
  for(let n=0;n<3;n++){const q=(p+n/3)%1,r=26+40*q,w=1-q;if(w>.1)ds(c,9*w+2,5*w,'#fff',()=>{c.arc(MX+cos(MA)*86,MY+sin(MA)*86,r,MA-.6,MA+.6)})}
  ds(c,22,13,TOP,()=>{c.moveTo(52,222);c.quadraticCurveTo(20,190,26,130-10*k)})
  c.fillStyle=SKIN;c.lineWidth=5;c.save();c.translate(26,122-10*k);c.rotate(-.2+.2*k);c.beginPath();c.ellipse(0,0,13,14,0,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(-6,-4);c.lineTo(6,-4);c.moveTo(-6,2);c.lineTo(6,2);c.stroke();c.restore()
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,204,176);c.lineTo(52,176);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    for(const d of[-1,1]){c.fillStyle=HAIR;c.beginPath();c.arc(128+d*54,44,28,0,T);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.arc(128+d*54,44,15,PI*(d<0?1.1:-.1),PI*(d<0?1.9:.7));c.stroke();c.strokeStyle='#111';c.lineWidth=9
      c.fillStyle=BOW;c.beginPath();c.moveTo(128+d*34,58);c.lineTo(128+d*26,40);c.lineTo(128+d*44,44);c.closePath();c.fill();c.stroke()}
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(96,191);c.lineTo(128,226);c.lineTo(160,191);c.lineTo(170,202);c.lineTo(128,246);c.lineTo(86,202);c.closePath();c.fill();c.lineWidth=7;c.stroke()
    c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,210,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=9;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,168),c.lineTo(128+d*44+k+2,160),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath();c.moveTo(104,162);c.quadraticCurveTo(120,164,138,160);c.quadraticCurveTo(140,192,120,192);c.quadraticCurveTo(100,192,104,162);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(118,194,10,8,0,0,T);c.fill();c.restore()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,176)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,192,176);c.quadraticCurveTo(184,166,178,174)
    c.quadraticCurveTo(184,124,178,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,152,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,78,174);c.quadraticCurveTo(72,166,64,176);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
  })
  c.save();c.translate(MX-2*k,MY);c.rotate(MA)
  c.fillStyle=HN;c.lineWidth=5;c.beginPath();c.roundRect(22,4,13,30,4);c.fill();c.stroke()
  c.fillStyle=MG;c.lineWidth=6;c.beginPath();c.moveTo(0,-9);c.lineTo(84,-32);c.lineTo(84,32);c.lineTo(0,9);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.beginPath();c.rect(44,-40,13,80);c.fill();c.restore()
  c.strokeStyle=MGD;c.lineWidth=4;c.beginPath();c.moveTo(6,5);c.lineTo(82,26);c.stroke();c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.moveTo(0,-9);c.lineTo(84,-32);c.lineTo(84,32);c.lineTo(0,9);c.closePath();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-8,-10,12,20,5);c.fill();c.stroke()
  c.beginPath();c.ellipse(84,0,11,33,0,0,T);c.fill();c.stroke()
  c.fillStyle=MGD;c.lineWidth=4;c.beginPath();c.ellipse(86,0,5,25,0,0,T);c.fill();c.stroke()
  c.restore()
  const hx=MX+30*cos(MA)-26*sin(MA)-2*k,hy=MY+30*sin(MA)+26*cos(MA)
  ds(c,22,13,TOP,()=>{c.moveTo(150,262);c.quadraticCurveTo(152,222,hx+4,hy+10)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,12,12,0,0,T);c.fill();c.stroke()
}

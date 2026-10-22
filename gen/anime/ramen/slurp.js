// girl with ginger space buns slurping a big bowl of ramen, noodles zipping up into her puffed cheeks, steam curling up
const{sin,PI}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#3bc9db',HD='#1098ad',HL='#c5f6fa',BL='#ffa8a8',TOP='#74c0fc',BOWL='#fa5252',BR='#ffc078',ND='#ffe066',WOOD='#e0a96d',NORI='#2f9e44',ONI='#8ce99a'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
export default(c,t)=>{
  const pf=4+3*sin(4*T*t)
  c.lineWidth=6;c.fillStyle=TOP;c.beginPath();c.moveTo(102,146);c.quadraticCurveTo(50,154,38,226);c.lineTo(218,226);c.quadraticCurveTo(206,154,154,146);c.closePath();c.fill();c.stroke()
  ds(c,30,19,TOP,()=>{c.moveTo(206,218);c.lineTo(194,172)})
  c.save();c.translate(128,26);c.scale(.82,.82);c.translate(-128,-40)
  c.lineWidth=7;c.fillStyle=HAIR
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*54,50,27,0,T),c.fill(),c.stroke()
  c.strokeStyle=HD;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(128+d*54,50,14,0,4.4),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(194,36,206,96,196,154);c.lineTo(60,154);c.bezierCurveTo(50,96,62,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70-pf,152,100-pf,184,128,186);c.bezierCurveTo(156+pf,184,186+pf,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const d of[-1,1]){const x=128+d*25;c.lineWidth=6;c.beginPath();c.arc(x,148,13,PI*1.15,PI*1.85);c.moveTo(x+d*12,140);c.lineTo(x+d*18,135);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.lineWidth=4;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(128,170,7,8,0,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.restore()
  c.fillStyle=NORI;c.lineWidth=5;c.beginPath();c.moveTo(56,196);c.lineTo(50,154);c.lineTo(80,150);c.lineTo(86,196);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=BOWL;c.beginPath();c.moveTo(32,196);c.quadraticCurveTo(36,250,98,252);c.lineTo(158,252);c.quadraticCurveTo(220,250,224,196);c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();for(let x=24;x<240;x+=12)c.lineTo(x,x%24?236:228);c.stroke();c.restore()
  c.strokeStyle='#111';c.beginPath();c.moveTo(32,196);c.quadraticCurveTo(36,250,98,252);c.lineTo(158,252);c.quadraticCurveTo(220,250,224,196);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(128,196,96,20,0,0,T);c.fill();c.stroke()
  c.fillStyle=BR;c.lineWidth=4;c.beginPath();c.ellipse(128,197,84,13,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(84,197,15,7,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#f06595';c.lineWidth=2.5;c.beginPath();c.ellipse(84,197,8,3.5,0,0,PI*1.6);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(172,197,17,8,0,0,T);c.fill();c.stroke()
  c.fillStyle='#ff922b';c.lineWidth=3;c.beginPath();c.ellipse(172,197,8,4,0,0,T);c.fill();c.stroke()
  c.fillStyle=ONI;c.lineWidth=2.5;for(const[x,y]of[[108,203],[146,204],[198,193]])c.beginPath(),c.ellipse(x,y,4,2.5,0,0,T),c.fill(),c.stroke()
  const st=[[100,1.1],[114,.4],[128,2.2],[142,1.6],[156,3]].map(([xb,ph],k)=>[...Array(25)].map((_,j)=>{const s=j/24,xt=128+(k-2)*1.8,xm=128+(xb-128)*.18;return[(1-s)**2*xb+2*(1-s)*s*xm+s*s*xt+5*(1-s*.7)*sin(T*(s*1.6-2*t)+ph),200-62*s]}))
  for(const[l,k]of[[10,'#111'],[5,ND]]){c.lineWidth=l;c.strokeStyle=k;for(const p of st){c.beginPath();for(const[x,y]of p)c.lineTo(x,y);c.stroke()}}
  for(const d of[-1,1])ds(c,9,4,WOOD,()=>{c.moveTo(192,160+d*4);c.lineTo(118,170+d*7)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(194,166,13,14,.3,0,T);c.fill();c.stroke()
  for(const[x,o]of[[42,0],[214,.5]]){const p=(t+o)%1,y=184-46*p,w=7*sin(PI*p);if(w>1)ds(c,w+5,w,'#fff',()=>{for(let j=0;j<=10;j++)c.lineTo(x+5*sin(j/10*T+p*T),y-j*2.6)})}
  const sl=sin(4*T*t)>0;if(sl)for(const d of[-1,1])ds(c,7,3,'#fff',()=>{c.moveTo(128+d*16,146);c.lineTo(128+d*22,140)})
}

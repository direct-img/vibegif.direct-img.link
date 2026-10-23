// cupcake with a swirl of pink frosting, sprinkles raining down onto it and the cherry on top wobbling
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=70
const WR='#38d9a9',WD='#0ca678',FR='#faa2c1',CH='#ff6b6b',STEM='#a9744f',BL='#ffa8a8',SP=['#ffd43b','#4dabf7','#fff','#69db7c','#b197fc','#ff922b']
const rod=(c,x,y,a,col)=>{for(const[w,s]of[[9,'#111'],[4,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x-cos(a)*6,y-sin(a)*6),c.lineTo(x+cos(a)*6,y+sin(a)*6),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  c.fillStyle=WR;c.beginPath();c.moveTo(58,150);c.lineTo(198,150);c.lineTo(178,234);c.lineTo(78,234);c.closePath();c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=5;for(let k=1;k<6;k++)c.beginPath(),c.moveTo(58+k*140/6,158),c.lineTo(78+k*100/6,228),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,190,10,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,190,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24-2,188,2.2,0,T),c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(128,200,9,.15*PI,.85*PI);c.closePath();c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,204,9,5,0,0,T),c.fill()
  c.fillStyle=FR;for(const[y,rx,ry]of[[144,84,24],[116,66,22],[90,46,20]])c.beginPath(),c.ellipse(128,y,rx,ry,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.moveTo(108,84);c.quadraticCurveTo(116,58,132,60);c.quadraticCurveTo(150,66,148,86);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const[y,rx,ry]of[[144,72,14],[116,54,13],[90,34,11]])c.beginPath(),c.ellipse(128,y-2,rx,ry,0,PI*1.12,PI*1.32),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  ;[[90,154,.5],[118,162,-.6],[152,158,.9],[176,146,-.3],[74,140,1.2],[104,128,-1],[142,130,.4],[166,118,-.8],[112,104,.7],[140,100,-.2],[92,112,.2]].forEach(([x,y,a],k)=>rod(c,x,y,a,SP[k%6]))
  c.save();c.translate(128,66);c.rotate(.3*sin(2*T*t))
  for(const[w,s]of[[9,'#111'],[4,STEM]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,-24),c.quadraticCurveTo(2,-42,12,-50),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle=CH;c.beginPath();c.arc(0,-12,15,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,-12,8,PI*1.1,PI*1.45);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=7
  ;[[84,128],[104,104],[152,102],[176,126],[120,86],[164,112]].forEach(([x,land],k)=>{const p=(t+k/6)%1;rod(c,x+4*sin(p*T+k),12+p*(land-12),k+p*9,SP[(k+2)%6])})
}

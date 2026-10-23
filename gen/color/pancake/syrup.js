// stack of pancakes on a plate, the butter pat softening on top while blobs of syrup run down the sides
const{sin,PI,min,max,sqrt}=Math,T=2*PI
export const frames=20,delay=80
const PC='#ffc078',PT='#ffd8a8',SY='#b5651d',SL='#e8a35a',BU='#ffe066',BS='#fcc419',PL='#e7f5ff',BL='#ffa8a8'
const DR=[[70,60],[88,64],[170,64],[190,56]]
export default(c,t)=>{
  c.fillStyle=PL;c.beginPath();c.ellipse(128,214,112,24,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(128,212,88,15,0,0,T);c.stroke();c.lineWidth=7
  c.fillStyle=SY;c.beginPath();c.ellipse(128,206,100,15,0,0,T);c.fill();c.stroke()
  for(let k=0;k<3;k++){const y=200-k*28;c.fillStyle=PC;c.beginPath();c.ellipse(128,y,86,18,0,0,PI);c.lineTo(42,y-22);c.ellipse(128,y-22,86,18,0,PI,T);c.closePath();c.fill();c.stroke()}
  c.fillStyle=PT;c.beginPath();c.ellipse(128,122,86,18,0,0,T);c.fill();c.stroke()
  c.fillStyle=SY;c.beginPath();for(let a=0;a<=T+.01;a+=.1)c.lineTo(128+Math.cos(a)*(64+5*sin(a*5)),122+sin(a)*(12+2*sin(a*5)));c.closePath();c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  const m=(1+sin(T*t))/2
  c.fillStyle='#fff3bf';c.beginPath();c.ellipse(128,118,30+6*m,8+2*m,0,0,T);c.fill()
  c.fillStyle=BS;c.beginPath();c.moveTo(104,116);c.lineTo(128,128);c.lineTo(152,116);c.lineTo(152,116-10+3*m);c.lineTo(128,128-10+3*m);c.lineTo(104,116-10+3*m);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  const top=116-10+3*m;c.fillStyle=BU;c.beginPath();c.moveTo(104,top);c.quadraticCurveTo(116,top-14,128,top-13);c.quadraticCurveTo(142,top-14,152,top);c.lineTo(128,top+12);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(116,top-4);c.lineTo(126,top-8);c.stroke();c.strokeStyle='#111'
  DR.forEach(([x,L],k)=>{
    const p=(t+k*.27)%1,y0=122+18*sqrt(1-((x-128)/86)**2)-6,yb=y0+L*min(1,p/.6),ya=y0+L*max(0,(p-.6)/.4)
    for(const[w,s]of[[15,'#111'],[8,SY]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,ya),c.lineTo(x,yb),c.stroke()
    c.fillStyle=SY;c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.arc(x,yb+2,8,0,PI);c.stroke();c.beginPath();c.arc(x,yb+1,6.5,0,T);c.fill()
    c.strokeStyle=SL;c.lineWidth=3;c.beginPath();c.moveTo(x-2,ya+3);c.lineTo(x-2,max(ya+3,yb-6));c.stroke();c.strokeStyle='#111'
  })
  c.lineWidth=7
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20,151,5.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*20-2,149,2,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.arc(128,154,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*29,158,6,3.5,0,0,T),c.fill()
}

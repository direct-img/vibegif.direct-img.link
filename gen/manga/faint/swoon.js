// shoujo heroine with wavy screentone hair swoons backward, back of her hand to her forehead, as petals scatter
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const dots=(col,r,s=6)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.25)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const petal=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,9);c.bezierCurveTo(-9,3,-8,-8,-2,-9);c.lineTo(0,-6);c.lineTo(2,-9);c.bezierCurveTo(8,-8,9,3,0,9);c.restore();c.fill();c.stroke()}
const rose=(c,x,y,r)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.moveTo(x+cos(a)*r*.4,y+sin(a)*r*.4);c.arc(x+cos(a)*r*.62,y+sin(a)*r*.62,r*.42,a-1.4,a+1.4)}c.fill();c.stroke()
  c.beginPath();c.arc(x,y,r*.45,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.arc(x+1,y+1,r*.25,-.5,PI*1.3);c.stroke()}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat')
  const k=t<.4?ease(t/.4):t<.75?1:1-ease((t-.75)/.25),tilt=-.3*k+.02*sin(t*T*2)*(1-k),sw=k>.9
  rose(c,26,226,20);rose(c,230,222,22);rose(c,52,244,13);rose(c,206,246,12)
  c.save();c.translate(128,262);c.rotate(tilt);c.translate(-128,-262)
  const hair=()=>{c.beginPath();c.moveTo(128,38);c.bezierCurveTo(200,38,214,96,206,140);for(let j=0;j<4;j++)c.quadraticCurveTo(222-(j%2)*20,154+j*22,206-(j%2)*4,168+j*22);c.quadraticCurveTo(184,256,160,246);c.lineTo(96,246);c.quadraticCurveTo(72,256,50,256);for(let j=3;j>=0;j--)c.quadraticCurveTo(34+(j%2)*20,168+j*22,50+(j%2)*4,154+j*22);c.bezierCurveTo(42,96,56,38,128,38);c.closePath()}
  c.lineWidth=7;c.fillStyle='#fff';hair();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const d of[-1,1])for(const o of[14]){c.moveTo(128+d*(56+o),150);for(let j=0;j<4;j++)c.quadraticCurveTo(128+d*(70+o-(j%2)*14),130+j*28,128+d*(60+o),144+j*28)}c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,178);c.quadraticCurveTo(62,188,56,260);c.lineTo(200,260);c.quadraticCurveTo(194,188,156,178);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(let j=0;j<7;j++){const a=PI*(.15+.7*j/6),x=128-cos(a)*34,y=184+sin(a)*16;c.moveTo(x+6,y);c.arc(x,y,6,0,PI)}c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,208,7,9,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(126,205,2.5,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.rect(114,146,28,40);c.fill();c.beginPath();c.moveTo(114,146);c.lineTo(114,182);c.moveTo(142,146);c.lineTo(142,182);c.stroke()
  c.save();c.translate(128,106);c.rotate(-.12*k);c.scale(.9,.9);c.translate(-128,-128)
  c.lineWidth=8;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[104,-1],[152,1]]){c.lineWidth=9;c.beginPath();c.moveTo(x-17,138);c.quadraticCurveTo(x,155,x+17,138);c.moveTo(x+d*17,138);c.lineTo(x+d*26,132);c.stroke()
    c.lineWidth=4;c.beginPath();for(const j of[-8,0,8])c.moveTo(x+j,147-Math.abs(j)*.3),c.lineTo(x+j*1.5,154);c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const j of[-7,-1,5])c.beginPath(),c.moveTo(128+d*44+j-3,170),c.lineTo(128+d*44+j+3,162),c.stroke()
  c.lineWidth=4.5;c.fillStyle='#111';c.beginPath();if(sw)c.ellipse(128,174,5,7,0,0,T),c.fill();else c.moveTo(122,172),c.quadraticCurveTo(128,176,134,172),c.stroke()
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(72,140);c.bezierCurveTo(56,70,88,38,128,38);c.bezierCurveTo(168,38,200,70,184,140)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(172,108,166,114);c.quadraticCurveTo(160,100,148,94);c.quadraticCurveTo(144,106,136,112)
  c.quadraticCurveTo(130,100,120,94);c.quadraticCurveTo(116,106,108,112);c.quadraticCurveTo(102,98,94,96);c.quadraticCurveTo(90,106,86,114);c.quadraticCurveTo(80,106,78,104);c.quadraticCurveTo(70,124,72,140);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const[x0,y0,x1,y1]of[[110,52,98,90],[132,48,128,88],[152,54,150,88],[92,64,82,100]])c.moveTo(x0,y0),c.quadraticCurveTo((x0+x1)/2+4,(y0+y1)/2,x1,y1);c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;const fx=186,fy=74;c.beginPath();for(let j=0;j<5;j++){const a=j*T/5;c.moveTo(fx,fy);c.ellipse(fx+cos(a)*12,fy+sin(a)*12,11,8,a,0,T)}c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(fx,fy,6,0,T);c.fill()
  c.restore()
  const hx=82+14*k,hy=284-220*k,ex=74-22*k,ey=244-104*k
  for(const[l,s]of[[22,'#111'],[13,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(86,202),c.lineTo(ex,ey),c.lineTo(hx,hy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx+2,hy-4,13,9,-.5-.6*k,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const j of[-4,2,8])c.moveTo(hx-6+j,hy-10+j*.4),c.lineTo(hx+2+j,hy-6+j*.4);c.stroke()
  c.restore()
  if(t>=.38){const u=(t-.38)/.62;c.fillStyle='#fff';c.lineWidth=3.5
    for(let j=0;j<9;j++){const a=-PI*(.05+.9*j/8),r=40+120*u*(.7+.3*(j%3)/2),s=1.3*(1-u)+.2;petal(c,124+cos(a)*r*1.1,96+sin(a)*r*.75+50*u*u,j+u*T*(j%2?1:-1),s)}}
}

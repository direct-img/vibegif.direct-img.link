// chibi with a sprout ponytail staggers under a tall stack of moving boxes, the stack swaying and the top box nearly sliding off
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,exp}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const bump=exp(-(((t-.55)/.09)**2)),sw=sin(t*T*2)*(1+1.4*bump),strain=bump>.4,bx=150-sw*4
  // shadow and legs, stepping to keep balance
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(130,244,62,8,0,0,T);c.fillStyle=FINE;c.fill()
  for(const[x,o]of[[128,0],[160,PI]]){const lift=max(0,sin(t*T*2+o))*6
    c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.rect(x-7-sw*2,214,14,24-lift);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.roundRect(x-12-sw*2,234-lift,26,10,5);c.fill();c.fillStyle='#fff';c.fillRect(x-8-sw*2,240-lift,18,2)}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(116-sw*2,200);c.lineTo(172-sw*2,200);c.lineTo(176-sw*2,222);c.lineTo(112-sw*2,222);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  // girl's body behind the stack, head peeking out on the left
  const hx=96-sw*5,hy=100
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(hx-4,hy+20);c.lineTo(hx+20,hy+24);c.quadraticCurveTo(150,128,166,206);c.lineTo(108-sw*2,210);c.quadraticCurveTo(80,150,hx-4,hy+20);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.save();c.translate(hx,hy);c.rotate(-.12-sw*.05);c.scale(.5,.5);c.translate(-128,-130)
  c.lineWidth=11;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(strain){c.lineWidth=9;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*13,128);c.lineTo(x+d*10,140);c.lineTo(x-d*13,152);c.stroke()}
    c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(110,160,36,20,6);c.fill();c.stroke();c.beginPath();c.moveTo(110,170);c.lineTo(146,170);for(const x of[119,128,137])c.moveTo(x,160),c.lineTo(x,180);c.stroke()}
  else{for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,142,14,16,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,142,14,16,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+5,134,11,13,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x+1,129,4.5,5.5,0,0,T);c.fill();c.restore()
      c.lineWidth=9;c.beginPath();c.moveTo(x-16,136);c.quadraticCurveTo(x,124,x+16,136);c.stroke()
      c.lineWidth=6;c.beginPath();c.moveTo(x-12,114+d*4);c.lineTo(x+12,114-d*4);c.stroke()}
    c.lineWidth=6;c.beginPath();c.moveTo(116,172);for(let k=1;k<=4;k++)c.lineTo(116+k*6,k%2?167:172);c.stroke()}
  c.lineWidth=5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,168),c.lineTo(128+d*42+k+3,160),c.stroke()
  // short ink hair with a sprout ponytail on top
  c.lineWidth=11;c.fillStyle='#111';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(50,72,88,40,128,40);c.bezierCurveTo(168,40,206,72,186,150)
  c.quadraticCurveTo(182,118,174,104);c.quadraticCurveTo(162,112,152,108);c.quadraticCurveTo(144,96,134,106);c.quadraticCurveTo(124,96,112,106);c.quadraticCurveTo(102,98,92,108);c.quadraticCurveTo(80,112,76,124);c.quadraticCurveTo(72,138,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=9;c.beginPath();c.arc(128,104,50,1.3*PI,1.7*PI);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(128,42);c.rotate(sw*.25);c.fillStyle='#111';c.lineWidth=9;for(const a of[-.7,0,.7])c.beginPath(),c.ellipse(sin(a)*20,-24-cos(a)*6,9,24,a,0,T),c.fill(),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-14,-10,28,14,6);c.fill();c.stroke();c.restore()
  c.restore()
  // her arm wrapping round the stack to the bottom box
  for(const[l,s]of[[26,'#111'],[16,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(hx-2,hy+40),c.quadraticCurveTo(hx-22,hy+86,bx-42,204),c.stroke()
  c.strokeStyle='#111'
  // sweat drops flying off
  c.fillStyle='#fff';c.lineWidth=3.5;for(const[o,dx]of[[0,-1],[.5,1]]){const p=(t*2+o)%1;if(p<.7){const x=hx+dx*(26+30*p),y=hy-30-24*sin(PI*p/.7);c.beginPath();c.moveTo(x,y-8);c.quadraticCurveTo(x+6,y+2,x,y+5);c.quadraticCurveTo(x-6,y+2,x,y-8);c.fill();c.stroke()}}
  // the stack: each box sways a little more than the one below; the top one skids at the scary moment
  const box=(x,y,a,w,h,k)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.rect(-w/2,-h/2,w,h);c.fill();c.stroke()
    c.fillStyle=FINE;c.fillRect(-7,-h/2,14,h);c.lineWidth=3;c.strokeRect(-7,-h/2,14,h)
    c.lineWidth=3;c.beginPath();c.moveTo(-w/2,-h/2+8);c.lineTo(-10,-h/2+8);c.moveTo(10,-h/2+8);c.lineTo(w/2,-h/2+8);c.stroke()
    if(k==1){c.lineWidth=4;for(const x of[-24,-14])c.beginPath(),c.moveTo(x,6),c.lineTo(x,-6),c.moveTo(x-4,-2),c.lineTo(x,-7),c.lineTo(x+4,-2),c.stroke()}
    if(k==2){c.lineWidth=3.5;c.beginPath();c.moveTo(18,-8);c.lineTo(30,-8);c.lineTo(27,4);c.lineTo(21,4);c.closePath();c.stroke();c.beginPath();c.moveTo(24,4);c.lineTo(24,12);c.moveTo(20,12);c.lineTo(28,12);c.stroke()}
    c.restore()}
  let x=bx,y=196,a=0
  for(let k=0;k<4;k++){const w=[76,70,66,58][k],h=[40,40,38,34][k]
    if(k)x+=sw*(2+k*2.5)+(k==3?bump*14:0),y-=[0,40,39,36][k],a=sw*(.02+k*.025)+(k==3?bump*.3:0)
    box(x,y,a,w,h,k)}
  // hands gripping the bottom box
  c.lineWidth=6;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.ellipse(bx+d*40,204,10,13,0,0,T),c.fill(),c.stroke()
  // wobble marks beside the top box when it nearly goes
  if(bump>.3){c.lineWidth=4;for(const k of[0,1])c.beginPath(),c.moveTo(x+40+k*8,y-14),c.quadraticCurveTo(x+46+k*8,y,x+40+k*8,y+14),c.stroke()}
}

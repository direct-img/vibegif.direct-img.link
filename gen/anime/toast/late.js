// chibi with short orange hair sprinting late for school, toast in her mouth, scarf and bag flapping, dust puffs and speed lines behind
const{sin,cos,PI,max,min,sqrt,round,abs}=Math,T=2*PI
export const frames=12,delay=60
const SKIN='#ffe3d1',HAIR='#ff922b',HD='#e8590c',HL='#ffd8a8',EYE='#845ef7',ED='#5f3dc4',NAVY='#4263eb',ND='#364fc7',SCARF='#fa5252',SOCK='#fff',SOCKB='#dee2e6',SHOE='#a0522d',BAG='#a9744f',BAGD='#7f5539',CRUST='#d9822b',BREAD='#ffe8a3',BUTTER='#fff3bf',BL='#ffa8a8'
const knee=(hx,hy,fx,fy,l)=>{let vx=fx-hx,vy=fy-hy,d=sqrt(vx*vx+vy*vy);if(d>2*l-.5){const k=(2*l-.5)/d;vx*=k;vy*=k;d=2*l-.5}const h=sqrt(l*l-d*d/4);return[hx+vx/2+vy/d*h,hy+vy/2-vx/d*h,hx+vx,hy+vy]}
const dbl=(c,w,col,pts)=>{for(const[lw,s]of[[w,'#111'],[w-9,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();c.moveTo(...pts[0]);for(const p of pts.slice(1))c.lineTo(...p);c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const a=t*T,b=round(-5*abs(sin(a))),fl=k=>4*sin(2*a+k)
  for(const[y,o,l]of[[56,0,46],[100,.5,64],[150,.25,40],[200,.75,56]]){const p=(t*2+o)%1,x=52-70*p,w=l*min(1,(1-p)*2.5);if(w>4)dbl(c,13,'#fff',[[x,y],[x-w,y]])}
  for(const o of[0,.5]){const p=(t*2+o)%1,x=96-60*p,r=11*(1-p)+3;c.fillStyle='#fff';c.beginPath();for(const[dx,dy,s]of[[-r*.7,0,.8],[0,-r*.4,.9],[r*.7,0,.8]])c.moveTo(x+dx+s*r,236+dy),c.arc(x+dx,236+dy-r*.3,s*r,0,T);c.lineWidth=6;c.stroke();c.fill()}
  const hip=[126,192+b],sh=[130,152+b]
  const leg=(ph,sk)=>{const s=sin(a+ph),cc=cos(a+ph),[kx,ky,fx,fy]=knee(hip[0],hip[1],hip[0]+30*s,236-22*max(0,cc),27)
    dbl(c,22,SKIN,[hip,[kx,ky]]);dbl(c,22,sk,[[kx,ky],[fx,fy-4]])
    c.fillStyle=SHOE;c.lineWidth=5;c.beginPath();c.ellipse(fx+6,fy-3,14,8,s*.25,0,T);c.fill();c.stroke()}
  const arm=ph=>{const al=-.9*sin(a+ph),ex=sh[0]+22*sin(al),ey=sh[1]+22*cos(al),hx=ex+20*sin(al+1.7),hy=ey+20*cos(al+1.7)
    dbl(c,23,'#fff',[sh,[ex,ey],[hx,hy]]);c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,9,0,T);c.fill();c.stroke()}
  leg(PI,SOCKB);arm(PI)
  c.save();c.translate(84,180+b);c.rotate(.25+.18*sin(2*a+1))
  c.lineWidth=6;c.fillStyle=BAG;c.beginPath();c.roundRect(-22,-16,44,32,6);c.fill();c.stroke()
  c.fillStyle=BAGD;c.beginPath();c.roundRect(-22,-16,44,14,6);c.fill();c.stroke();c.lineWidth=4;c.fillStyle='#ffd43b';c.beginPath();c.roundRect(-4,-4,8,7,2);c.fill();c.stroke()
  c.restore()
  c.lineWidth=5;c.strokeStyle=BAGD;c.beginPath();c.moveTo(122,146+b);c.lineTo(88,164+b);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(140,80+b);c.scale(.9,.9)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(10,-62);c.bezierCurveTo(-40,-66,-70,-44,-80,-32+fl(0));c.lineTo(-60,-22);c.lineTo(-88,4+fl(1));c.lineTo(-62,10);c.lineTo(-80,36+fl(2));c.lineTo(-50,34);c.quadraticCurveTo(-40,56,-20,56);c.lineTo(30,30);c.closePath();c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(108,140+b);c.quadraticCurveTo(98,160,102,184+b);c.lineTo(152,184+b);c.quadraticCurveTo(158,158,150,140+b);c.closePath();c.fill();c.stroke()
  c.fillStyle=NAVY;c.beginPath();c.moveTo(102,180+b);c.lineTo(154,180+b);c.lineTo(168,208+b);c.lineTo(126,212+b);c.lineTo(86,200+b+fl(0));c.closePath();c.fill();c.stroke()
  c.strokeStyle=ND;c.lineWidth=3;for(const x of[118,132,146])c.beginPath(),c.moveTo(x,182+b),c.lineTo(x+(x-128)*.25,204+b),c.stroke();c.strokeStyle='#111'
  c.fillStyle=SCARF;c.lineWidth=5;c.beginPath();c.moveTo(140,152+b);c.quadraticCurveTo(118,150+b,96,146+b+fl(2));c.lineTo(100,160+b+fl(3));c.quadraticCurveTo(120,160+b,138,160+b);c.closePath();c.fill();c.stroke()
  c.fillStyle=NAVY;c.lineWidth=6;c.beginPath();c.moveTo(108,138+b);c.lineTo(150,138+b);c.lineTo(146,154+b);c.lineTo(104,152+b);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(141,156+b,5,0,T);c.fillStyle=SCARF;c.fill();c.lineWidth=4;c.stroke()
  leg(0,SOCK)
  c.save();c.translate(140,80+b);c.scale(.9,.9)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(-6,46);c.lineTo(-6,60);c.lineTo(10,60);c.lineTo(10,46);c.fill()
  c.beginPath();c.moveTo(-42,-6);c.bezierCurveTo(-42,40,-4,60,22,60);c.bezierCurveTo(44,58,58,30,58,-6);c.bezierCurveTo(58,-60,-42,-60,-42,-6);c.fill();c.stroke()
  for(const[x,rx,d]of[[4,12,-1],[42,9,1]]){
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,10,rx,15,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x+rx*.25,12,rx*.8,13,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+2,4,rx,8,0,0,T);c.fill();c.restore()
    c.lineWidth=2.5;c.beginPath();c.ellipse(x+rx*.25,12,rx*.8,13,0,0,T);c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+rx*.35,13,rx*.38,6,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-1,6,3.5,0,T);c.fill()
    c.lineWidth=5.5;c.beginPath();c.moveTo(x-rx-2,0);c.quadraticCurveTo(x,-10,x+rx+2,0);c.stroke()
  }
  c.fillStyle=BL;c.beginPath();c.ellipse(-14,32,10,5,0,0,T);c.fill()
  c.fillStyle='#c92a2a';c.lineWidth=3.5;c.beginPath();c.ellipse(30,42,6,5,0,0,T);c.fill();c.stroke()
  c.save();c.translate(52,44);c.rotate(-.3+.08*sin(2*a))
  c.fillStyle=CRUST;c.lineWidth=5;c.beginPath();c.moveTo(-14,18);c.lineTo(-14,-6);c.bezierCurveTo(-24,-10,-22,-26,-8,-24);c.bezierCurveTo(0,-30,14,-30,16,-22);c.bezierCurveTo(28,-22,26,-8,18,-6);c.lineTo(18,18);c.closePath();c.fill();c.stroke()
  c.fillStyle=BREAD;c.beginPath();c.moveTo(-9,14);c.lineTo(-9,-8);c.bezierCurveTo(-16,-12,-14,-20,-6,-19);c.bezierCurveTo(0,-24,12,-24,12,-18);c.bezierCurveTo(20,-16,20,-10,13,-8);c.lineTo(13,14);c.closePath();c.fill()
  c.fillStyle=BUTTER;c.lineWidth=3;c.beginPath();c.roundRect(-3,-6,10,8,2);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-46,10)
  c.bezierCurveTo(-56,-40,-26,-66,10,-66);c.bezierCurveTo(46,-66,68,-40,62,-4)
  c.lineTo(54,-10);c.lineTo(52,-2);c.lineTo(42,-14);c.lineTo(36,-4);c.lineTo(26,-18);c.lineTo(18,-6);c.lineTo(8,-20);c.lineTo(-2,-8)
  c.lineTo(-12,-20);c.lineTo(-22,-6);c.lineTo(-30,-14);c.lineTo(-36,2);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[s,e]of[[1.2,1.32],[1.4,1.48],[1.58,1.7]])c.beginPath(),c.arc(10,-12,46,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.moveTo(34,-40);c.lineTo(50,-30);c.lineTo(44,-26);c.lineTo(30,-36);c.closePath();c.fill();c.stroke()
  const p=(t*2)%1;c.fillStyle='#a5d8ff';c.lineWidth=3.5;c.save();c.translate(-50-30*p,-44-14*p);c.rotate(-.9);c.scale(1-p*.5,1-p*.5);c.beginPath();c.moveTo(0,-10);c.quadraticCurveTo(8,2,0,6);c.quadraticCurveTo(-8,2,0,-10);c.fill();c.stroke();c.restore()
  c.restore()
  arm(0)
}

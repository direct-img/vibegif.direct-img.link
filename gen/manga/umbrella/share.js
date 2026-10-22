// shy girl with an ink-black bob holding her umbrella out to share the dry side, a little heart under it, rain bouncing off the canopy
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,atan2,abs,min}=Math,T=2*PI
export const frames=12,delay=90,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
// canopy: a dome in the umbrella's own frame, tilted to the right
const TX=166,TY=42,A=atan2(28,134),R=84,D=38,H=46
const g=(x,y)=>[TX+x*cos(A)-y*sin(A),TY+x*sin(A)+y*cos(A)]
const top=[...Array(61)].map((_,k)=>g(-R*cos(k*PI/60),D-H*sin(k*PI/60)))
const can=c=>{c.beginPath();c.moveTo(-R,D);c.bezierCurveTo(-R,D-H*1.35,R,D-H*1.35,R,D);for(let k=5;k>=0;k--){const x0=-R+k*R/3,x1=x0+R/3;c.quadraticCurveTo((x0+x1)/2,D-12,x0,D)}c.closePath()}
const surf=x=>{let b=null;for(const[px,py]of top)if(abs(px-x)<2&&(b==null||py<b))b=py;return b}
const drops=[[12,0],[30,.55],[46,.3],[64,.8],[84,.12],[104,.62],[124,.38],[142,.88],[160,.2],[178,.7],[196,.45],[212,.95],[228,.25],[242,.75],[22,.42],[236,.08]]
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat')
  // puddle and ripples
  c.lineWidth=4;c.beginPath();c.ellipse(128,236,112,12,0,0,T);c.fillStyle='#fff';c.fill();c.fillStyle=dot;c.fill();c.stroke()
  // girl, small full body
  c.save();c.translate(84,118);c.scale(.66,.66);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,212,100,204,172);c.quadraticCurveTo(202,180,192,180);c.lineTo(64,180);c.quadraticCurveTo(54,180,52,172);c.bezierCurveTo(44,100,58,36,128,36);c.fill();c.stroke()
  // legs, rain boots, dress
  c.fillStyle='#fff';for(const x of[108,148]){c.lineWidth=7;c.beginPath();c.rect(x-8,250,16,50);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.moveTo(x-12,284);c.lineTo(x+12,284);c.lineTo(x+14,318);c.lineTo(x-16,318);c.closePath();c.fill();c.stroke();c.fillStyle='#fff'}
  c.beginPath();c.moveTo(104,184);c.quadraticCurveTo(78,196,72,262);c.lineTo(184,262);c.quadraticCurveTo(178,196,152,184);c.closePath();c.fillStyle='#fff';c.fill();c.fillStyle=dot;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(108,186);c.quadraticCurveTo(128,206,148,186);c.quadraticCurveTo(128,196,108,186);c.fill();c.stroke()
  c.lineWidth=4;for(const x of[96,118,140,162])c.beginPath(),c.moveTo(x+(x-128)*.05,228),c.lineTo(x+(x-128)*.15,262),c.stroke()
  c.lineWidth=7;c.beginPath();c.rect(116,166,24,22);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const bl=i==7
  for(const[x,d]of[[103,-1],[153,1]]){
    if(bl){c.lineWidth=6;c.beginPath();c.moveTo(x-14,142);c.quadraticCurveTo(x,150,x+14,142);c.stroke();continue}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+4,141,10,15,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+1,135,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,149,2,0,T);c.fill()
    c.lineWidth=7;c.beginPath();c.moveTo(x-d*12,130);c.quadraticCurveTo(x,119,x+d*15,131);c.lineTo(x+d*21,125);c.stroke()
  }
  c.lineWidth=3.5;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*40+(k-1.5)*6-3,172),c.lineTo(128+d*40+(k-1.5)*6+3,161),c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(120,170);c.quadraticCurveTo(128,176,136,170);c.stroke()
  // side-swept ink bangs with a shine band
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(64,176);c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,192,176)
  c.quadraticCurveTo(188,128,178,108);c.quadraticCurveTo(160,104,150,116);c.quadraticCurveTo(146,100,132,94);c.quadraticCurveTo(122,108,104,114);c.quadraticCurveTo(100,100,90,96);c.quadraticCurveTo(80,118,76,128);c.quadraticCurveTo(70,150,64,176);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=30;k++){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?52:48)*cos(a),104+(k%2?52:48)*sin(a))}for(let k=30;k>=0;k--){const a=PI*(1.2+k*.02);c.lineTo(128+(k%2?44:40)*cos(a),104+(k%2?44:40)*sin(a))}c.fill()
  c.restore()
  // umbrella: shaft, hand, scalloped canopy with toned panels
  c.save();c.translate(TX,TY);c.rotate(A)
  c.lineWidth=9;c.beginPath();c.moveTo(0,0);c.lineTo(0,142);c.arc(-8,142,8,0,PI);c.stroke();c.strokeStyle='#fff';c.lineWidth=3;c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;can(c);c.fillStyle='#fff';c.fill()
  c.save();c.clip();c.fillStyle=dot;for(let k=0;k<6;k+=2){const x0=-R+k*R/3;c.beginPath();c.moveTo(0,-8);c.lineTo(x0,D);c.lineTo(x0+R/3,D);c.closePath();c.fill()}c.restore();can(c);c.stroke()
  c.lineWidth=3;for(let k=1;k<6;k++)c.beginPath(),c.moveTo(0,-8),c.quadraticCurveTo((-R+k*R/3)*.6,0,-R+k*R/3,D),c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(0,-8);c.lineTo(0,-16);c.stroke()
  c.restore()
  c.lineWidth=13;c.beginPath();c.moveTo(102,168);c.quadraticCurveTo(118,178,134,172);c.stroke();c.strokeStyle='#fff';c.lineWidth=6;c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(139,170,9,10,0,0,T);c.fill();c.stroke()
  // a little heart floating in the dry space
  const hp=1+.15*sin(t*T*2),hy=136+4*sin(t*T)
  c.save();c.translate(198,hy);c.scale(hp,hp);c.fillStyle='#111';c.beginPath();c.moveTo(0,10);c.bezierCurveTo(-16,-1,-11,-15,0,-6);c.bezierCurveTo(11,-15,16,-1,0,10);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-5,-4,2.5,3.5,-.5,0,T);c.fill();c.restore()
  // rain: falls, splashes on the canopy or ripples in the puddle
  c.lineCap='round'
  for(const[x,o]of drops){
    const p=(t*2+o)%1,y=-14+p*260,s=surf(x),stop=s??232
    if(y<stop-16){c.lineWidth=2.5;c.beginPath();c.moveTo(x,y);c.lineTo(x-1.5,y+15);c.stroke()}
    else if(y<stop+30){const k=(y-stop+14)/44;c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(x+d*(3+k*12),stop-2-10*sin(PI*k),1.8,0,T),c.fill()
      if(s==null){c.lineWidth=2;c.beginPath();c.ellipse(x,236,6+k*14,1.5+k*3,0,0,T);c.stroke()}}
  }
}

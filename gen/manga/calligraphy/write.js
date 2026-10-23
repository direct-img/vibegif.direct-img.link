// girl with sleek ink hair kneeling at a low desk, writing the kanji 心 stroke by stroke with a big brush, a happy beat, then the ink fades for the next try
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=90,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const C=[128,224],S=.95
// strokes of 心 as points with brush radius, in stroke order
const ST=[[[-30,-2,2],[-27,5,3.5],[-24,12,4.5]],[[-16,-15,4],[-15.5,4,4.5],[-9,15,4.5],[6,18,4],[21,13,3.5],[28,7,3],[22,1,1.5]],[[-3,-21,2],[0,-15,3.5],[4,-10,4.5]],[[20,-19,2],[24,-12,3.5],[28,-6,4.5]]]
const P=ST.map(s=>s.map(([x,y,r])=>[C[0]+x*S,C[1]+y*S,r]))
const len=s=>{let l=0;for(let k=1;k<s.length;k++)l+=hypot(s[k][0]-s[k-1][0],s[k][1]-s[k-1][1]);return l}
// point at fraction p along a stroke
const along=(s,p)=>{let d=p*len(s);for(let k=1;k<s.length;k++){const a=s[k-1],b=s[k],l=hypot(b[0]-a[0],b[1]-a[1]);if(d<=l||k==s.length-1){const f=min(1,d/l);return[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f,a[2]+(b[2]-a[2])*f]}d-=l}}
const ink=(c,s,p)=>{const l=len(s),n=Math.ceil(l*p);for(let k=0;k<=n;k++){const[x,y,r]=along(s,min(p,k/l));c.beginPath();c.arc(x,y,r,0,T);c.fill()}}
// timeline: [start,end] of each stroke, the brush glides between them
const W=[[.06,.14],[.18,.4],[.44,.5],[.54,.62]],REST=[218,212]
const lerp=(a,b,f)=>[a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f]
const brushAt=t=>{
  if(t<W[0][0])return lerp(REST,P[0][0],t/W[0][0])
  for(let k=0;k<4;k++){const[a,b]=W[k];if(t<a)return lerp(along(P[k-1],1),P[k][0],(t-W[k-1][1])/(a-W[k-1][1]));if(t<b)return along(P[k],(t-a)/(b-a))}
  return t<.72?lerp(along(P[3],1),REST,(t-.62)/.1):REST
}
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat'),done=t>=.66&&t<.9,fade=t<.88?1:1-(t-.88)/.12,[bx,by]=brushAt(t)
  c.save();c.translate(128,-6);c.scale(.86,.86);c.translate(-128,0)
  // ink hair: sleek, center parted, sides down past the ears
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,100,196,170);c.lineTo(60,170);c.bezierCurveTo(50,100,60,36,128,36);c.fill();c.stroke()
  // white kimono with a dotted collar crossing
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,186);c.quadraticCurveTo(58,196,48,236);c.lineTo(208,236);c.quadraticCurveTo(198,196,156,186);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(112,186);c.lineTo(132,236);c.lineTo(146,236);c.lineTo(124,186);c.closePath();toned(c,dot)
  c.beginPath();c.moveTo(144,186);c.lineTo(118,222);c.lineTo(108,214);c.lineTo(132,186);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,184);c.moveTo(140,166);c.lineTo(140,184);c.stroke()
  // white ribbon on the low ponytail, peeking by her neck
  c.lineWidth=4;for(const r of[-.5,.6])c.beginPath(),c.ellipse(186,176,13,7,r,0,T),c.fill(),c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // eyes cast down at the paper, or shut happy when the kanji is done
  for(const[x,d]of[[103,-1],[153,1]]){
    if(done){c.lineWidth=5;c.beginPath();c.arc(x,144,12,1.15*PI,1.85*PI);c.stroke();continue}
    c.save();c.beginPath();c.rect(x-16,138,32,24);c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,146,12,13,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x,152,9,11,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-3,148,3,0,T);c.fill();c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-14,139);c.quadraticCurveTo(x,135,x+14,139);c.lineTo(x+d*19,143);c.stroke()
    c.lineWidth=2.5;for(const k of[-6,0,6])c.beginPath(),c.moveTo(x+k,139),c.lineTo(x+k*1.3,134),c.stroke()
  }
  c.lineWidth=3.5;for(const[x,d]of[[103,1],[153,-1]])c.beginPath(),c.moveTo(x-12,120+d*3),c.lineTo(x+12,120-d*3),c.stroke()
  c.lineWidth=3;c.beginPath();if(done)c.arc(128,166,6,.15*PI,.85*PI);else c.moveTo(123,170),c.lineTo(133,170);c.stroke()
  if(done){c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<3;k++)c.beginPath(),c.moveTo(128+d*42+(k-1)*5-3,166),c.lineTo(128+d*42+(k-1)*5+3,158),c.stroke()}
  // sleek ink bangs parted in the middle, white shine
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(54,76,88,38,128,38);c.bezierCurveTo(168,38,202,76,186,150)
  c.quadraticCurveTo(184,112,170,100);c.quadraticCurveTo(144,88,128,64);c.quadraticCurveTo(112,88,86,100);c.quadraticCurveTo(72,112,70,150);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=22;k++){const a=PI*(1.24+k*.024);c.lineTo(128+(k%2?54:50)*cos(a),106+(k%2?54:50)*sin(a))}for(let k=22;k>=0;k--){const a=PI*(1.24+k*.024);c.lineTo(128+(k%2?47:43)*cos(a),106+(k%2?47:43)*sin(a))}c.fill()
  c.restore()
  // low desk with a felt mat, paper, paperweight and inkstone
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(16,184);c.lineTo(240,184);c.lineTo(250,250);c.lineTo(6,250);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.rect(56,188,144,62);toned(c,dot)
  c.fillStyle='#fff';c.beginPath();c.rect(66,194,124,56);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.rect(66,190,124,9);c.fill()
  c.fillStyle='#111';c.beginPath();c.roundRect(204,200,32,42,5);c.fill();c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.roundRect(209,205,22,32,4);c.stroke();c.strokeStyle='#111'
  // the kanji so far, fading out at the end of the loop
  c.globalAlpha=fade;c.fillStyle='#111'
  for(let k=0;k<4;k++){const[a,b]=W[k];if(t>=a)ink(c,P[k],min(1,(t-a)/(b-a)))}
  c.globalAlpha=1
  if(done){c.fillStyle='#fff';c.lineWidth=2.5;const s=6+3*sin(T*(t-.66)*4);for(const[x,y]of[[176,204],[78,242]]){c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?s*.35:s;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}}
  // writing arm and brush, the hand stays above the paper
  const hx=bx+12,hy=by-54
  for(const[l,s]of[[28,'#111'],[22,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(166,160),c.quadraticCurveTo((166+hx)/2+6,(160+hy)/2+18,hx+8,hy+4),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(bx-1,by-8);c.lineTo(bx+16,by-86);c.lineTo(bx+24,by-84);c.lineTo(bx+7,by-7);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const f of[.3,.62])c.beginPath(),c.moveTo(bx-1+17*f,by-8-78*f),c.lineTo(bx+7+17*f,by-7-77*f),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(bx-2,by-10);c.quadraticCurveTo(bx-3,by-2,bx,by+1);c.quadraticCurveTo(bx+6,by-2,bx+8,by-9);c.closePath();c.fill()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(hx,hy,12,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(hx-8,hy-4);c.quadraticCurveTo(hx,hy-1,hx+8,hy-5);c.moveTo(hx-8,hy+4);c.quadraticCurveTo(hx,hy+7,hx+8,hy+3);c.stroke()
}

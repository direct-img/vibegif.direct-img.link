// an invite slides in and the little guy in pajamas dreads it, then a CANCELLED stamp slams down and he breaks into a happy dance
import{Path2D}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
const U=[.04,.1,.23,.26,.3,...Array.from({length:8},(_,k)=>.34+k*.0625),.86,.92]
export const frames=U.length,delay=[80,600,90,80,300,...Array(8).fill(95),95,80],rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const K='#1b1b1f',RD='#e03131',PJ='#a5d8ff'
const F={C:'M5.3 1.8A3 5 0 1 0 5.3 8.2',A:'M0 10L3 0L6 10M1 6.5H5',N:'M0 10V0L6 10V0',E:'M6 0H0V10H6M0 5H4.5',L:'M0 0V10H6',D:'M0 0V10H1.5A4.5 5 0 0 0 1.5 0Z'}
const note=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=K;c.strokeStyle=K;c.lineWidth=4;c.beginPath();c.ellipse(0,0,7,5,-.4,0,T);c.fill();c.beginPath();c.moveTo(6,-2);c.lineTo(6,-24);c.quadraticCurveTo(14,-18,16,-10);c.stroke();c.restore()}
export default(c,_,i)=>{
  const t=U[i],cin=bk(t/.1),st=t>=.2,sl=io((t-.2)/.03),jolt=t>=.23&&t<.3?.04*(i%2?1:-1):0,off=io((t-.86)/.1)
  const dance=t>=.32&&t<.95,dp=T*(t-.34)/.25,dw=dance?1-off*.6:0,happy=t>=.25
  // the invite card
  c.save();c.translate(128+150*off,-120*(1-cin)-30*off+58);c.rotate(jolt+.5*off);c.translate(-128,-58)
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(22,12,212,96,12);c.fill();c.stroke()
  c.fillStyle='#ff8787';c.beginPath();c.roundRect(22,12,212,26,[12,12,0,0]);c.fill();c.stroke()
  c.fillStyle='#ced4da';for(const[y,w]of[[56,120],[72,96],[88,110]])c.beginPath(),c.roundRect(84,y-4,w,9,4),c.fill()
  c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.ellipse(52,66,15,18,0,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(52,84);c.quadraticCurveTo(46,92,54,100);c.stroke()
  if(st){const s=1+1.4*(1-sl);c.save();c.translate(128,62);c.rotate(-.13);c.scale(s,s);c.globalAlpha=sl
    c.strokeStyle=RD;c.lineWidth=5;c.beginPath();c.roundRect(-104,-26,208,52,8);c.stroke();c.lineWidth=2.5;c.beginPath();c.roundRect(-97,-19,194,38,5);c.stroke()
    c.scale(2.5,2.5);c.translate(-35.6,-5);c.lineWidth=2.1;let x=0;for(const ch of'CANCELLED')c.save(),c.translate(x,0),c.stroke(new Path2D(F[ch])),c.restore(),x+=7.9
    c.restore()}
  c.restore()
  if(t>=.22&&t<.3){c.strokeStyle=K;c.lineWidth=5;for(const[x,y,a]of[[14,80,PI],[242,40,0],[242,86,.3],[14,34,PI-.3]])c.beginPath(),c.moveTo(x,y),c.lineTo(x+12*cos(a),y+12*sin(a)),c.stroke()}
  // pajama guy
  const sw=dw*sin(dp),hop=dw*abs(sin(dp)),lean=.14*sw
  c.save();c.translate(128+12*sw,244-14*hop);c.rotate(lean);c.translate(-128,-244)
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle=PJ
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*20,238-(dance&&d*sw>.3?6:0),14,9,0,0,T),c.fill(),c.stroke()
  const arms=happy?[[90,190,58,148-18*sw*(dance?1:0)],[166,190,198,148+18*sw*(dance?1:0)]]:[[90,192,80,228],[166,192,176,228]]
  for(const[sx,sy,hx,hy]of arms){for(const[w,s]of[[20,K],[9,PJ]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.lineTo(hx,hy),c.stroke()
    c.strokeStyle=K;c.fillStyle='#ffe8cc';c.lineWidth=5;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle=PJ;c.beginPath();c.ellipse(128,194,46,46,0,0,T);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#74c0fc';for(const[x,y]of[[96,214],[150,226],[160,176],[118,236],[88,182]])c.beginPath(),c.arc(x,y,5,0,T),c.fill();c.restore()
  c.fillStyle='#ffe8cc';c.beginPath();c.ellipse(128,184,34,26,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  // nightcap flops with the dance
  const cf=happy?-sw*.5:0;c.fillStyle='#4dabf7';c.lineWidth=6;c.beginPath();c.moveTo(90,162);c.quadraticCurveTo(110,108,150+40*cf,118+16*abs(cf));c.quadraticCurveTo(160,134,166,162);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(86,152,84,16,8);c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.arc(152+40*cf,120+16*abs(cf),10,0,T);c.fill();c.stroke()
  c.fillStyle=K;c.lineWidth=4
  if(!happy){for(const d of[-1,1])c.beginPath(),c.arc(128+d*13,184,6,PI*.1,PI*.9),c.stroke(),c.beginPath(),c.moveTo(128+d*7,172),c.lineTo(128+d*21,176),c.stroke()
    c.beginPath();c.moveTo(116,200);for(let k=1;k<=4;k++)c.lineTo(116+6*k,200+(k%2?-3:3));c.stroke()
    c.fillStyle='#74c0fc';c.lineWidth=3;c.beginPath();c.moveTo(166,160);c.quadraticCurveTo(175,176,166,180);c.quadraticCurveTo(157,176,166,160);c.fill();c.stroke()}
  else if(!dance){c.fillStyle='#ffd43b';c.lineWidth=3;for(const d of[-1,1]){c.beginPath();for(let k=0;k<8;k++){const r=k%2?3:9,a=k*PI/4;c.lineTo(128+d*14+r*cos(a),182+r*sin(a))}c.closePath();c.fill();c.stroke()}
    c.fillStyle=K;c.beginPath();c.ellipse(128,200,7,8,0,0,T);c.fill()}
  else{for(const d of[-1,1])c.beginPath(),c.arc(128+d*13,186,6,PI*1.1,PI*1.9),c.stroke()
    c.beginPath();c.moveTo(116,194);c.quadraticCurveTo(128,193,140,194);c.quadraticCurveTo(138,208,128,208);c.quadraticCurveTo(118,208,116,194);c.fill()}
  c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*25,196,6,4,0,0,T),c.fill()
  c.restore()
  if(dance){for(const[k,x]of[[0,34],[1,222]]){const u=((t-.34)*2+k*.5)%1;if(u<.9)note(c,x+10*sin(u*T),210-70*u,.3*sin(u*T+k))}}
}

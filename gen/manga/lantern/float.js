// manga girl in a polka-dot yukata sets a glowing paper lantern on dark water, it drifts away bobbing with ripples while fireflies blink
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const hatch=(c,s)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.strokeStyle='#111';x.lineWidth=1.4;for(const o of[-s,0,s])x.beginPath(),x.moveTo(o,s),x.lineTo(o+s,0),x.stroke();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u)),lerp=(a,b,u)=>a+(b-a)*ease(u)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.clip();c.beginPath();c.ellipse(x+3,y+4,10.5,14,0,0,T);c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x+3,y+15,10,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-1,y,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+7,y+11,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-3);c.quadraticCurveTo(x,y-16,x+16,y-3);c.moveTo(x+d*14,y-6);c.lineTo(x+d*21,y-10);c.stroke()
}
const lantern=(c,x,y,s,g)=>{
  c.save();c.translate(x,y);c.scale(s,s)
  c.lineWidth=3;for(let k=0;k<8;k++){const b=k*PI/4+PI/8,r=24+g*4;c.beginPath();c.moveTo(cos(b)*r,-8+sin(b)*r*.9);c.lineTo(cos(b)*(r+7+g*3),-8+sin(b)*(r+7+g*3)*.9);c.stroke()}
  c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.moveTo(-22,8);c.lineTo(22,8);c.lineTo(18,16);c.lineTo(-18,16);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(-15,-28,30,36);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(-15,-10);c.lineTo(15,-10);c.moveTo(0,-28);c.lineTo(0,8);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-6,2);c.quadraticCurveTo(-7,-6,0,-14);c.quadraticCurveTo(7,-6,6,2);c.closePath();c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(-18,-28);c.lineTo(18,-28);c.stroke();c.restore()
}
export default(c,t)=>{
  const DARK=tone(c,5,1.7),DOT=tone(c,6,1.3),HAT=hatch(c,5)
  const held=t<.2||t>=.95,calm=t>=.28&&t<.9
  // girl behind the water: polka-dot yukata and obi
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(84,150);c.quadraticCurveTo(44,158,36,214);c.lineTo(162,214);c.quadraticCurveTo(156,158,116,150);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle='#111';for(let y=150;y<216;y+=14)for(let x=30+(y/14%2)*7;x<170;x+=14)c.beginPath(),c.arc(x,y,3.2,0,T),c.fill();c.restore();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(84,150);c.lineTo(104,184);c.lineTo(116,150);c.fill();c.stroke()
  c.fillStyle='#111';c.fillRect(40,186,120,16);c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(42,194);c.lineTo(158,194);c.stroke();c.strokeStyle='#111'
  // dark water in front with ripples and reflections
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(14,206);c.bezierCurveTo(14,186,80,184,130,184);c.bezierCurveTo(200,184,244,186,244,206);c.bezierCurveTo(244,246,220,248,128,248);c.bezierCurveTo(36,248,14,246,14,206);c.fill();c.fillStyle=DARK;c.fill();c.stroke()
  c.save();c.clip()
  if(t>=.16&&t<.7){const u=(t-.16)/.54;c.strokeStyle='#fff';for(const k of[0,1]){const r=u*80-k*24;if(r>4){c.globalAlpha=1-u;c.lineWidth=4;c.beginPath();c.ellipse(100,222,r,r*.25,0,0,T);c.stroke()}}c.globalAlpha=1}
  c.strokeStyle='#fff';c.lineWidth=3;for(const[x,y,w]of[[40,234,24],[150,240,40],[220,200,20]])c.beginPath(),c.moveTo(x-w/2+4*sin(t*T*2),y),c.lineTo(x+w/2+4*sin(t*T*2),y),c.stroke()
  c.restore();c.strokeStyle='#111'
  // lantern drifting off to the right
  const lu=t<.2?0:t<.95?(t-.2)/.75:0,lx=t<.2?lerp(100,100,t/.2):100+lu*112,ly=t<.2?lerp(196,214,t/.2):214-lu*8+2*sin(t*T*3),ls=1.25-lu*.45,la=t>=.95?(t-.95)/.05:t>=.84?1-(t-.84)/.11:1
  c.globalAlpha=max(0,la)
  if(!held){c.strokeStyle='#fff';c.lineWidth=5*ls;c.beginPath();for(let k=0;k<3;k++)c.moveTo(lx-10*ls+k%2*4,ly+20*ls+k*6),c.lineTo(lx+10*ls-k%2*4,ly+20*ls+k*6);c.stroke();c.strokeStyle='#111'}
  lantern(c,lx,ly,ls,(sin(t*T*4)+1)/2);c.globalAlpha=1
  // fireflies
  for(let k=0;k<4;k++){const a=t*T+k*1.7,[x,y]=[196+[0,30,-22,14][k]+10*cos(a),96+[0,-26,26,44][k]+8*sin(2*a)],b=(sin(t*T*2+k*2)+1)/2
    c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.arc(x,y,3+b*2,0,T);c.fill();c.stroke();if(b>.5){c.lineWidth=2;for(let j=0;j<4;j++){const g=j*PI/2;c.beginPath();c.moveTo(x+cos(g)*8,y+sin(g)*8);c.lineTo(x+cos(g)*12,y+sin(g)*12);c.stroke()}}}
  // arms: holding the lantern, then resting together
  const H=held?[[lx-26*ls,ly-8],[lx+26*ls,ly-8]]:calm?[[92,184],[108,184]]:t<.28?[[lerp(lx-30,92,(t-.2)/.08),lerp(ly-8,184,(t-.2)/.08)],[lerp(lx+30,108,(t-.2)/.08),lerp(ly-8,184,(t-.2)/.08)]]:[[lerp(92,lx-26,(t-.9)/.05),lerp(184,ly-8,(t-.9)/.05)],[lerp(108,lx+26,(t-.9)/.05),lerp(184,ly-8,(t-.9)/.05)]]
  for(const[[sx,sy],[hx,hy]]of[[[70,164],H[0]],[[130,164],H[1]]]){for(const[l,st]of[[22,'#111'],[13,'#fff'],[13,DOT]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(sx,sy),c.lineTo(hx,hy-6),c.stroke();c.strokeStyle='#111'}
  for(const[hx,hy]of H){c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,8,9,0,0,T);c.fill();c.stroke()}
  // head, looking down at the water
  c.save();c.translate(100,108);c.rotate(.06);c.scale(.68,.68);c.translate(-128,-128)
  c.lineWidth=10;c.fillStyle='#fff';c.beginPath();c.arc(118,34,30,0,T);c.fill();c.fillStyle=HAT;c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(146,30);c.lineTo(178,12);c.moveTo(150,40);c.lineTo(184,30);c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(182,10,6,0,T);c.fill();c.stroke()
  c.lineWidth=10;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(calm){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,142,13,.15*PI,.85*PI),c.stroke()}else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-7,0,7])c.beginPath(),c.moveTo(128+d*40+k-3,168),c.lineTo(128+d*40+k+3,158),c.stroke()
  c.lineWidth=7;c.beginPath();c.arc(128,166,7,.2*PI,.8*PI);c.stroke()
  c.lineWidth=10;c.fillStyle='#fff';c.beginPath();c.moveTo(72,140)
  c.bezierCurveTo(56,72,88,40,128,40);c.bezierCurveTo(168,40,200,72,184,140)
  c.quadraticCurveTo(182,116,176,104);c.quadraticCurveTo(160,104,146,92);c.quadraticCurveTo(138,104,124,108);c.quadraticCurveTo(110,104,100,94);c.quadraticCurveTo(92,108,80,110);c.quadraticCurveTo(74,124,72,140);c.closePath();c.fill();c.fillStyle=HAT;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=10;for(const[s,e]of[[1.26,1.38],[1.46,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,108,52,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*56,120),c.quadraticCurveTo(128+d*64,150,128+d*58,176),c.stroke()
  c.restore()
}

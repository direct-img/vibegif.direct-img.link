// fed up little guy winds up and hurls his laptop off screen yelling YEET, then a fresh laptop drops right back into his hands
import{Path2D}from'@napi-rs/canvas'
const{PI,min,max}=Math,T=2*PI
const U=[0,.12,.2,.3,.335,.37,.41,.45,.5,.62,.84,.9,.94,.97]
export const frames=U.length,delay=[250,80,80,280,50,60,60,60,70,700,70,70,60,300],rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2),mix=(a,b,u)=>a+(b-a)*u
const K='#1b1b1f',B='#4dabf7',BD='#339af0'
const F={Y:'M0 0L3 5L6 0M3 5V10',E:'M6 0H0V10H6M0 5H4.5',T:'M0 0H6M3 0V10'}
const L=(c,ch,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s*4.8,s*4.8);c.translate(-3,-5);for(const[w,st]of[[5.8,K],[2.4,'#ffd43b']])c.lineWidth=w,c.strokeStyle=st,c.stroke(new Path2D(F[ch]));c.restore()}
const lap=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=5;c.strokeStyle=K
  c.fillStyle='#ced4da';c.beginPath();c.roundRect(-32,-42,64,42,5);c.fill();c.stroke()
  c.fillStyle='#4dabf7';c.beginPath();c.roundRect(-25,-35,50,28,2);c.fill()
  c.fillStyle='#d0ebff';c.fillRect(-19,-29,26,4);c.fillRect(-19,-21,16,4)
  c.fillStyle='#adb5bd';c.beginPath();c.moveTo(-36,0);c.lineTo(36,0);c.lineTo(40,8);c.lineTo(-40,8);c.closePath();c.fill();c.stroke();c.restore()}
const arm=(c,x,y,hx,hy)=>{for(const[w,s]of[[22,K],[11,B]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(hx,hy),c.stroke()
  c.fillStyle=B;c.strokeStyle=K;c.lineWidth=5;c.beginPath();c.arc(hx,hy,11,0,T);c.fill();c.stroke()}
export default(c,_,i)=>{
  const t=U[i],wu=io((t-.1)/.2),th=io((t-.3)/.06),fo=io((t-.36)/.1),drop=t>.8?io((t-.8)/.14):0,land=t>=.94
  const lean=-.16*wu+.42*th-.3*io((t-.44)/.18)*(t<.8)
  const held=t<.335||land,yell=t>=.33&&t<.62,happy=t>=.62&&t<.94
  // throwing hand path: side, up behind the head, released up front, follow through low
  let hx=mix(178,92,wu),hy=mix(196,92,wu);if(t>=.3){hx=mix(hx,196,th);hy=mix(hy,108,th);hx=mix(hx,184,fo);hy=mix(hy,214,fo)}
  if(t>=.8){hx=mix(184,178,drop);hy=mix(214,196,drop)}
  const behind=wu>.4&&th<.5
  c.save();c.translate(96,242);c.rotate(lean);c.translate(-96,-242)
  if(behind)arm(c,136,160,hx,hy),lap(c,hx-4,hy+6,-1.2*wu)
  c.lineWidth=6;c.strokeStyle=K;c.fillStyle=BD
  for(const x of[76,116])c.beginPath(),c.roundRect(x-12,206,24,34,11),c.fill(),c.stroke()
  c.fillStyle=B;c.beginPath();c.ellipse(96,170,56,56,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.globalAlpha=.55;c.beginPath();c.ellipse(70,140,10,17,.6,0,T);c.fill();c.globalAlpha=1
  c.fillStyle=K;c.lineWidth=5
  if(happy){for(const x of[78,114])c.beginPath(),c.arc(x,166,9,PI*1.1,PI*1.9),c.stroke();c.beginPath();c.arc(96,178,12,.1*PI,.9*PI);c.stroke()
    c.fillStyle='#ffa8a8';for(const x of[64,128])c.beginPath(),c.ellipse(x,184,8,5,0,0,T),c.fill()}
  else{for(const x of[78,114])c.beginPath(),c.arc(x,166,6,0,T),c.fill()
    c.beginPath();c.moveTo(64,146);c.lineTo(90,156);c.moveTo(128,146);c.lineTo(102,156);c.stroke()
    if(yell){c.beginPath();c.ellipse(97,190,14,13,0,0,T);c.fill();c.fillStyle='#ff8787';c.beginPath();c.ellipse(97,196,8,4,0,0,T);c.fill()}
    else if(wu>.3&&!th){c.fillStyle='#fff';c.beginPath();c.roundRect(80,180,34,14,4);c.fill();c.stroke();c.beginPath();for(const x of[89,97,105])c.moveTo(x,180),c.lineTo(x,194);c.stroke()}
    else{c.beginPath();c.moveTo(82,188);c.quadraticCurveTo(96,180,110,188);c.stroke()}}
  if(land){c.fillStyle='#74c0fc';c.lineWidth=3;c.beginPath();c.moveTo(140,124);c.quadraticCurveTo(149,140,140,145);c.quadraticCurveTo(131,140,140,124);c.fill();c.stroke()}
  arm(c,48,178,happy?30:yell?24:32,happy?126:yell?150:212)
  if(!behind){arm(c,140,168,hx,hy);if(held)lap(c,hx+2,hy+4,land?.05:0)}
  c.restore()
  if(t>=.335&&t<.5){const u=cl((t-.335)/.12),x=200+130*u,y=96-150*u;c.strokeStyle=K;c.lineWidth=5;c.lineCap='round'
    if(u<.6)for(const k of[1,2,3])c.globalAlpha=.3*k,c.beginPath(),c.moveTo(x-26*k-14,y+30*k+16),c.lineTo(x-26*k-40,y+30*k+46),c.stroke();c.globalAlpha=1
    lap(c,x,y,.6+u*5)}
  if(t>=.8&&!land)lap(c,180,-50+250*drop,.5*(1-drop))
  ;[...'YEET'].forEach((ch,k)=>{const tk=t-.36-k*.035,s=bk(tk/.07)*(1-io((t-.8)/.08)),u=io(tk/.07);if(s>.01)L(c,ch,mix(120,56+k*48,u),mix(110,50+(k%2?-6:6),u),s,(k-1.5)*.14)})
}

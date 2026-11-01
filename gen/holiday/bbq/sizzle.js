// backyard kettle grill with sausages and a burger sizzling, flames licking up and smoke puffs rising
export const frames=24,delay=60,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const Y=126,RY=32
  c.translate(128,128);c.scale(.93,.93);c.translate(-128,-128)
  c.lineWidth=6
  // legs
  c.lineWidth=11;c.strokeStyle='#111';c.beginPath();c.moveTo(72,180);c.lineTo(56,246);c.moveTo(184,180);c.lineTo(200,246);c.moveTo(128,196);c.lineTo(128,240);c.stroke()
  c.lineWidth=5;c.strokeStyle='#8a8f9c';c.stroke();c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.ellipse(56,246,9,4,0,0,P);c.ellipse(200,246,9,4,0,0,P);c.fillStyle='#333';c.fill()
  // smoke puffs: born small over the food, swell as they rise and drift, shrink away near the top
  const smoke=()=>{for(const[p,x0]of[[0,104],[1/3,140],[2/3,120]]){const u=(t+p)%1,x=x0+30*u+8*S(P*u),y=100-86*u,r=(5+20*u)*Math.min(1,u*5)*Math.min(1,(1-u)*4)
    if(r<1)continue
    c.beginPath();for(const[a,b,q]of[[-.6,.15,.7],[.55,.2,.65],[0,-.25,.8]]){c.moveTo(x+a*r+q*r,y+b*r);c.arc(x+a*r,y+b*r,q*r,0,P)}
    c.lineWidth=9;c.stroke();c.fillStyle='#eef0f5';c.fill();c.lineWidth=6}}
  smoke()
  // bowl
  const bowl=()=>{c.beginPath();c.ellipse(128,Y,100,80,0,0,Math.PI)}
  bowl();c.closePath();c.fillStyle='#e8433d';c.fill()
  c.save();bowl();c.closePath();c.clip();c.beginPath();c.ellipse(150,Y+10,120,100,0,0,P);c.ellipse(124,Y-6,100,80,0,0,P);c.fillStyle='rgba(90,0,10,.28)';c.fill('evenodd')
  c.beginPath();c.ellipse(52,Y+30,8,24,.5,0,P);c.fillStyle='rgba(255,255,255,.55)';c.fill();c.restore()
  bowl();c.closePath();c.stroke()
  // vent and handle
  c.beginPath();c.ellipse(128,Y+66,14,6,0,0,P);c.fillStyle='#c7cbd4';c.lineWidth=4;c.fill();c.stroke()
  c.beginPath();c.moveTo(224,Y+16);c.lineTo(240,Y+16);c.lineTo(240,Y+30);c.lineTo(222,Y+30);c.fillStyle='#8a8f9c';c.fill();c.stroke()
  // mouth of the grill: dark inside, glowing coals
  c.lineWidth=6;c.beginPath();c.ellipse(128,Y,100,RY,0,0,P);c.fillStyle='#2b1d1d';c.fill()
  c.save();c.beginPath();c.ellipse(128,Y,96,RY-3,0,0,P);c.clip()
  for(const[x,y,k]of[[86,Y+14,0],[128,Y+20,1],[170,Y+14,2]]){c.beginPath();c.ellipse(x,y,26,8,0,0,P);c.fillStyle=S(P*(2*t+k/3))>0?'#ff8a2a':'#ff6a2a';c.fill()}
  c.restore()
  // flames behind the food
  const fl=(x,y,h,w,k)=>{const f=1+.22*S(P*(3*t+k*.29))+.12*S(P*(5*t+k*.53)),H=h*f,sw=4*S(P*(2*t+k*.41))
    c.beginPath();c.moveTo(x-w,y);c.bezierCurveTo(x-w*1.1,y-H*.5,x-w*.2+sw,y-H*.6,x+sw*1.6,y-H);c.bezierCurveTo(x+w*.5+sw,y-H*.55,x+w*1.2,y-H*.4,x+w,y);c.closePath()}
  for(const[x,h,w,k]of[[50,34,13,0],[82,58,17,1],[118,48,15,2],[150,62,17,3],[186,50,16,4],[210,30,11,5]]){
    fl(x,Y-2,h,w,k);c.fillStyle='#ff6b2c';c.lineWidth=5;c.fill();c.stroke()
    fl(x,Y-2,h*.55,w*.55,k+2);c.fillStyle='#ffd23f';c.fill()}
  // grate bars
  c.save();c.beginPath();c.ellipse(128,Y,96,RY-3,0,0,P);c.clip()
  for(let k=-4;k<=4;k++){c.beginPath();c.moveTo(128+k*22-10,Y-40);c.lineTo(128+k*22+10,Y+40);c.lineWidth=6;c.strokeStyle='#111';c.stroke();c.lineWidth=2.5;c.strokeStyle='#c7cbd4';c.stroke()}
  c.restore();c.strokeStyle='#111'
  // food, each jiggling to its own sizzle
  const jig=k=>S(P*(4*t+k/3))>.3?-1.5:0
  const marks=(x,y,n,w,ang)=>{c.save();c.translate(x,y);c.rotate(ang);c.lineWidth=3.5;c.strokeStyle='#5a2312';for(let k=0;k<n;k++){const a=(k-(n-1)/2)*w;c.beginPath();c.moveTo(a-5,-6);c.lineTo(a+5,6);c.stroke()}c.restore();c.strokeStyle='#111'}
  const sausage=(x,y,a,k)=>{y+=jig(k);c.save();c.translate(x,y);c.rotate(a);c.lineWidth=5
    c.beginPath();c.roundRect(-40,-13,80,26,13);c.fillStyle='#d65a3a';c.fill()
    c.save();c.clip();c.beginPath();c.roundRect(-40,-4,80,26,13);c.fillStyle='rgba(110,20,0,.3)';c.fill();c.restore()
    marks(0,0,4,16,0);c.beginPath();c.roundRect(-28,-8,22,4.5,2);c.fillStyle='rgba(255,255,255,.6)';c.fill()
    c.beginPath();c.roundRect(-40,-13,80,26,13);c.stroke();c.restore()}
  const patty=(x,y,k)=>{y+=jig(k);c.lineWidth=5
    c.beginPath();c.ellipse(x,y+7,36,17,0,0,P);c.fillStyle='#5a2a17';c.fill();c.stroke()
    c.beginPath();c.ellipse(x,y,36,17,0,0,P);c.fillStyle='#8f4c2b';c.fill();c.stroke()
    c.save();c.beginPath();c.ellipse(x,y,36,17,0,0,P);c.clip();marks(x,y,4,15,0);c.restore()}
  sausage(82,Y-6,.18,0);sausage(174,Y-6,-.18,1);patty(128,Y+10,2)
  // grease pops
  for(const[p,x,dx]of[[0,100,-8],[.25,156,8],[.5,128,-6],[.75,190,6]]){const u=(t-p+1)%1,v=u/.3,pr=4*S(Math.PI*v);if(u>.3||pr<.6)continue;const X=x+dx*v,Yy=Y-6-34*v*(1-v)*2.2
    c.beginPath();c.arc(X,Yy,pr,0,P);c.fillStyle='#ffe27a';c.lineWidth=2.5;c.fill();c.stroke()}
  // front rim of the bowl
  c.lineWidth=6;c.beginPath();c.ellipse(128,Y,100,RY,0,0,P);c.stroke()
}

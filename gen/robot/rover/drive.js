// six-wheeled planetary rover driving right across scrolling rocky tan ground, rocker-bogie suspension flexing as its wheels climb over rocks, camera mast scanning, dust kicking up behind
export const frames=32,delay=60
const P=Math.PI*2,r=17.46
const rocks=[[70,46,21,[[-.5,0],[-.38,.62],[-.12,1],[.18,.92],[.4,.48],[.5,0]]],[196,30,12,[[-.5,0],[-.25,.85],[.1,1],[.36,.6],[.5,0]]]]
const g=x=>212+3*Math.sin(P*x/128)+1.5*Math.sin(P*x/256*5+1)
const wrap=d=>((d%256)+384)%256-128
const prof=(p,u)=>{for(let k=1;k<p.length;k++)if(u<=p[k][0]){const[a,b]=[p[k-1],p[k]];return a[1]+(b[1]-a[1])*(u-a[0])/(b[0]-a[0])}return 0}
const G=x=>g(x)-rocks.reduce((m,[x0,w,h,p])=>{const u=wrap(x-x0)/w;return m+(Math.abs(u)<.5?h*prof(p,u):0)},0)
export default(c,t)=>{
  const s=256*t
  const ci=(x,y,R,f)=>{c.beginPath();c.arc(x,y,R,0,P);c.fillStyle=f;c.fill();c.stroke()}
  const tube=(...p)=>{for(const[w,f]of[[12,'#111'],[5,'#aab3bd']]){c.lineWidth=w;c.strokeStyle=f;c.beginPath();for(let k=0;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);c.stroke()}c.lineWidth=7;c.strokeStyle='#111'}
  // ground band + rocks
  c.beginPath();c.moveTo(-8,262)
  for(let x=-8;x<=264;x+=4)c.lineTo(x,g(x+s))
  c.lineTo(264,262);c.closePath();c.fillStyle='#e2b48a';c.fill();c.stroke()
  c.fillStyle='#c48a5c'
  for(let k=0;k<9;k++){const x=((k*71+30-s)%256+256)%256,y=226+(k*37)%26;c.beginPath();c.ellipse(x,y,4+k%3*2,2.5+k%2,0,0,P);c.fill()}
  for(const[x0,w,h,p]of rocks)for(const o of[-256,0,256]){
    const X=((x0-s)%256+256)%256+o
    c.beginPath()
    for(const[u,v]of p)c.lineTo(X+u*w,g(X+u*w+s)-v*h+(v?0:3))
    c.closePath();c.fillStyle='#b5744b';c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(X+p[1][0]*w,g(X+s)-p[1][1]*h);c.lineTo(X,g(X+s)-h*.35);c.lineTo(X+p[p.length-2][0]*w,g(X+s)-p[p.length-2][1]*h);c.stroke();c.lineWidth=7
  }
  // wheel centres resting on the ground
  const W=[64,118,178].map(x=>{let y=1e9;for(let d=-r;d<=r;d++)y=Math.min(y,G(x+d+s)-Math.sqrt(r*r-d*d));return[x,y+1]})
  // dust behind the wheels
  const D=[]
  for(const[x,y]of W.slice(0,2))for(let k=0;k<4;k++){const p=(t*4+k/4)%1;D.push([x-r+2-p*30,y+r-6-p*14-Math.sin(p*3)*3,2+Math.sin(p*Math.PI)*6])}
  for(const[f,l]of[['#c9926a',5],['#f3dcc6',0]])for(const[x,y,R]of D){c.beginPath();c.arc(x,y,R+l/2,0,P);c.fillStyle=f;c.fill()}
  c.strokeStyle='#111'
  c.lineWidth=7
  // suspension
  const[A,B,F]=W,bp=[(A[0]+B[0])/2,(A[1]+B[1])/2-22]
  const L1=Math.hypot(150-91,46-22),L2=Math.hypot(178-150,46),d=Math.hypot(F[0]-bp[0],F[1]-bp[1])
  const ang=Math.atan2(F[1]-bp[1],F[0]-bp[0]),q=Math.acos((L1*L1+d*d-L2*L2)/(2*L1*d))
  const R=[bp[0]+Math.cos(ang-q)*L1,bp[1]+Math.sin(ang-q)*L1]
  const ba=Math.atan2(F[1]-A[1],F[0]-A[0])*.6
  // body
  c.save();c.translate(...R);c.rotate(ba)
  // mast + camera head
  const pan=Math.sin(P*t)*.18
  c.lineWidth=12;c.beginPath();c.moveTo(16,-40);c.lineTo(16,-96);c.stroke()
  c.lineWidth=5;c.strokeStyle='#aab3bd';c.stroke();c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(16,-104);c.rotate(pan)
  c.beginPath();c.roundRect(-16,-12,40,22,6);c.fillStyle='#eef1f4';c.fill();c.stroke()
  c.fillStyle='#3c434d';c.fillRect(18,-8,8,14)
  c.lineWidth=4;ci(12,-1,4.5,'#38d6f5');ci(0,-1,4.5,'#38d6f5');c.lineWidth=7
  c.restore()
  // dish antenna
  c.beginPath();c.moveTo(-40,-40);c.lineTo(-40,-56);c.stroke()
  c.beginPath();c.ellipse(-40,-62,15,6,-.25,0,P);c.fillStyle='#eef1f4';c.fill();c.stroke()
  // power unit at the back
  c.save();c.translate(-80,-28);c.rotate(-.5)
  c.beginPath();c.roundRect(-26,-9,30,18,4);c.fillStyle='#5d6672';c.fill();c.stroke()
  c.lineWidth=3;for(let k=-20;k<0;k+=6){c.beginPath();c.moveTo(k,-13);c.lineTo(k,13);c.stroke()}
  c.restore()
  // chassis
  c.beginPath();c.roundRect(-82,-44,118,36,6);c.fillStyle='#eef1f4';c.fill();c.stroke()
  c.fillStyle='#e0b24a';c.beginPath();c.roundRect(-74,-30,40,16,3);c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.moveTo(-82,-36);c.lineTo(36,-36);c.stroke()
  c.fillStyle='#c3cad3';c.fillRect(-24,-30,52,18);c.strokeRect(-24,-30,52,18)
  c.lineWidth=7
  // stowed arm at the front
  c.lineWidth=10;c.beginPath();c.moveTo(30,-22);c.lineTo(54,-10);c.lineTo(44,10);c.stroke()
  c.lineWidth=4;c.strokeStyle='#aab3bd';c.stroke();c.strokeStyle='#111';c.lineWidth=5
  c.beginPath();c.moveTo(44,18);c.lineTo(48,30);c.lineTo(52,18);c.fillStyle='#8b949f';c.fill();c.stroke()
  ci(48,14,8,'#5d6672');ci(54,-10,4,'#c3cad3');c.lineWidth=7
  c.restore()
  // rocker + bogie
  tube(A[0],A[1],bp[0],bp[1],B[0],B[1])
  tube(bp[0],bp[1],R[0],R[1],F[0],F[1])
  c.lineWidth=5;ci(...bp,6,'#5d6672');ci(...R,8,'#5d6672');c.lineWidth=7
  // wheels
  const sp=t*14*P/6
  for(const[x,y]of W){
    ci(x,y,r,'#3c434d')
    c.lineWidth=0;c.beginPath();c.arc(x,y,r-6,0,P);c.fillStyle='#c3cad3';c.fill()
    c.lineWidth=3;c.strokeStyle='#111'
    for(let k=0;k<6;k++){const a=sp+k*P/6;c.beginPath();c.moveTo(x+Math.cos(a)*3,y+Math.sin(a)*3);c.quadraticCurveTo(x+Math.cos(a+.5)*8,y+Math.sin(a+.5)*8,x+Math.cos(a+.3)*(r-6),y+Math.sin(a+.3)*(r-6));c.stroke()}
    c.strokeStyle='#8b949f';c.lineWidth=2.5
    for(let k=0;k<12;k++){const a=sp+k*P/12;c.beginPath();c.moveTo(x+Math.cos(a)*(r-3.5),y+Math.sin(a)*(r-3.5));c.lineTo(x+Math.cos(a+.22)*(r-3.5),y+Math.sin(a+.22)*(r-3.5));c.stroke()}
    c.strokeStyle='#111';c.lineWidth=4;ci(x,y,4,'#eef1f4');c.lineWidth=7
  }
}

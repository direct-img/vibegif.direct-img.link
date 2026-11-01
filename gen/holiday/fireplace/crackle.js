// a brick fireplace with a crackling fire, sparks popping, two stockings swaying on the mantel
export const frames=36,delay=65,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const f=(col,w=6)=>{c.fillStyle=col;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
  const w=(n,p)=>S(T*n*t+p)
  const hole=()=>{c.beginPath();c.moveTo(68,216);c.lineTo(68,124);c.quadraticCurveTo(68,92,100,92);c.lineTo(156,92);c.quadraticCurveTo(188,92,188,124);c.lineTo(188,216);c.closePath()}
  // brick surround
  c.beginPath();c.rect(34,48,188,170);c.fillStyle='#c9573f';c.fill()
  c.save();c.clip();c.strokeStyle='#a4402f';c.lineWidth=3
  for(let r=0;r<13;r++){const y=48+r*14;c.beginPath();c.moveTo(34,y);c.lineTo(222,y);for(let x=34+(r%2)*15;x<222;x+=30){c.moveTo(x,y);c.lineTo(x,y+14)}c.stroke()}
  c.fillStyle='#d9705a';for(const[x,y]of[[50,64],[190,78],[44,148],[200,176],[84,64],[160,64]])c.fillRect(x,y,24,8)
  c.restore();c.beginPath();c.rect(34,48,188,170);c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // firebox, lit from the fire
  const gl=1+.08*w(3,0)+.05*w(5,1)
  hole();const g=c.createRadialGradient(128,206,8,128,200,120*gl);g.addColorStop(0,'#a8481f');g.addColorStop(.55,'#4a2020');g.addColorStop(1,'#26141e')
  c.fillStyle=g;c.fill()
  c.save();c.clip()
  // flames: three layered tongues, each flickering and swaying
  const fl=(x,b,wd,h,sw)=>{
    for(const[k,col]of[[1,'#ff6a2a'],[.68,'#ffb02e'],[.38,'#ffe56b']]){
      const W=wd*k,H=h*(k*.8+.2),s=sw*(1.1-k*.3)
      c.beginPath();c.moveTo(x-W,b);c.bezierCurveTo(x-W*1.1,b-H*.45,x-W*.2+s*.4,b-H*.7,x+s,b-H)
      c.bezierCurveTo(x+W*.25+s*.4,b-H*.66,x+W*1.1,b-H*.45,x+W,b);c.quadraticCurveTo(x,b+W*.6,x-W,b)
      c.fillStyle=col;c.fill();if(k==1){c.lineWidth=5;c.strokeStyle=K;c.stroke()}
    }
  }
  fl(100,198,22,64*(1+.14*w(3,1)+.06*w(7,2)),9*w(2,.5))
  fl(158,198,22,70*(1+.13*w(3,3)+.06*w(5,1)),9*w(2,2))
  fl(128,198,34,98*(1+.1*w(2,0)+.07*w(5,4)),8*w(2,1.4))
  // logs
  for(const[x,a]of[[110,-.22],[146,.22]]){
    c.save();c.translate(x,206);c.rotate(a);c.beginPath();c.roundRect(-34,-9,68,18,9);f('#7a4a2e',5)
    c.beginPath();c.moveTo(-20,-2);c.lineTo(10,-2);c.lineWidth=3;c.strokeStyle='#5e3a26';c.stroke()
    c.beginPath();c.ellipse(a>0?30:-30,0,6,9,0,0,T);f('#d9a46a',4);c.restore()
  }
  // sparks drifting up, and a couple of crackling pops
  for(let k=0;k<9;k++){
    const p=(t*2+k/9)%1,x=128+((k*37)%60-30)*(1+p*.6)+6*S(T*p*2+k),y=172-74*p,r=3.4*(1-p)
    c.beginPath();c.arc(x,y,r,0,T);c.fillStyle=k%3?'#ffd64a':'#fff3b0';c.fill()
  }
  for(const[ph,x,y]of[[.1,92,186],[.42,166,180],[.73,124,192]]){
    const u=(t-ph+1)%1/.12;if(u>=1)continue
    c.strokeStyle='#fff3b0';c.lineWidth=3.5*(1-u)+1
    for(let j=0;j<6;j++){const a=j*T/6+.3,r0=4+10*u,r1=r0+8*(1-u)+2;c.beginPath();c.moveTo(x+C(a)*r0,y+S(a)*r0);c.lineTo(x+C(a)*r1,y+S(a)*r1);c.stroke()}
  }
  c.restore();hole();c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // hearth and mantel
  c.beginPath();c.roundRect(22,212,212,20,5);f('#8f8a9c')
  c.beginPath();c.moveTo(30,218);c.lineTo(226,218);c.lineWidth=3;c.strokeStyle='#b3aec0';c.stroke()
  c.beginPath();c.roundRect(28,46,200,10,3);f('#6e4630',5)
  c.beginPath();c.roundRect(18,26,220,22,6);f('#8a5a3b')
  c.beginPath();c.moveTo(28,33);c.lineTo(228,33);c.lineWidth=4;c.strokeStyle='#ab7a52';c.stroke()
  // stockings swaying on their hooks
  for(const[x,m,col,ph]of[[56,1,'#e0403a',0],[200,-1,'#2f9e5b',1.9]]){
    c.save();c.translate(x,54);c.rotate(.07*S(T*t+ph));c.scale(m,1)
    const sk=()=>{c.beginPath();c.moveTo(-13,12);c.lineTo(-13,52);c.bezierCurveTo(-13,64,-4,70,8,70);c.lineTo(22,70);c.bezierCurveTo(32,70,34,56,24,52);c.lineTo(13,48);c.lineTo(13,12);c.closePath()}
    sk();c.fillStyle=col;c.fill()
    c.save();c.clip();c.fillStyle='#fff4e6';c.fillRect(-20,30,40,7);c.beginPath();c.arc(26,62,11,0,T);c.fill();c.restore()
    sk();c.lineWidth=6;c.strokeStyle=K;c.stroke()
    c.beginPath();c.roundRect(-17,0,34,15,5);f('#fff4e6',5)
    c.restore()
  }
}

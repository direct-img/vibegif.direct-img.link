// emoticon puckering up and blowing a kiss off its mitten, a heart floats away and it winks
const P=Math.PI,K='#111',G='#9a9a9a',W='#fff',S=Math.sin
export const frames=40,delay=50
const cl=x=>Math.min(1,Math.max(0,x)),sm=x=>(x=cl(x),x*x*(3-2*x)),lp=(a,b,k)=>a+(b-a)*k
const heart=(c,x,y,s)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.beginPath()
  c.moveTo(0,1);c.bezierCurveTo(-.15,.8,-1,.35,-1,-.25);c.bezierCurveTo(-1,-.8,-.3,-1,0,-.5)
  c.bezierCurveTo(.3,-1,1,-.8,1,-.25);c.bezierCurveTo(1,.35,.15,.8,0,1);c.restore()
}
export default(c,t,i)=>{
  const up=sm((t-.08)/.18),out=sm((t-.36)/.08),back=sm((t-.7)/.22),hb=sm((t-.5)/.2)
  const pk=sm((t-.1)/.1)-sm((t-.42)/.1),eL=sm((t-.14)/.08)-sm((t-.46)/.06),eR=sm((t-.14)/.08)-sm((t-.82)/.06)
  const lb=out*(1-back),tilt=.1*up*(1-out)-.1*lb
  c.save();c.translate(128-12*lb,130+5*lb);c.rotate(tilt);c.scale(1+.03*pk,1+.03*pk)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.fillStyle=K
  for(const[x,e]of[[-34,eL],[34,eR]]){
    c.beginPath()
    if(e<.5)c.ellipse(x,-22,11,16*(1-2*e)+1,0,0,2*P),c.fill()
    else c.ellipse(x,-15,15,10*(2*e-1),0,P,2*P),c.stroke()
  }
  // mouth: smile melting into a pucker
  if(pk<.5){
    const w=40*(1-1.4*pk)
    c.lineWidth=9;c.beginPath();c.moveTo(-w,30);c.quadraticCurveTo(0,30+40*(1-2*pk),w,30);c.stroke()
  }else{
    const q=2*pk-1
    c.save();c.translate(2,40);c.scale(q,q)
    c.beginPath();c.ellipse(0,-9,15,10,0,0,2*P);c.ellipse(0,9,13,10,0,0,2*P);c.fill()
    c.strokeStyle=W;c.lineWidth=4;c.beginPath();c.moveTo(-10,0);c.lineTo(10,0);c.stroke();c.restore()
  }
  // blush
  c.strokeStyle=G;c.lineWidth=4
  for(const d of[-1,1])for(let k=-1;k<2;k++){
    const x=d*62+k*9;c.beginPath();c.moveTo(x-4,22);c.lineTo(x+4,10);c.stroke()
  }
  // mitten: rest by the chin, up to the lips, flung out, back
  let[x,y,a]=[56,86,.3]
  ;[[30,40,-.15,up],[92,-6,.7,out],[56,86,.3,hb]].map(([X,Y,A,k])=>(x=lp(x,X,k),y=lp(y,Y,k),a=lp(a,A,k)))
  c.translate(x,y);c.rotate(a)
  const sh=()=>{c.beginPath();c.ellipse(0,0,18,21,0,0,2*P);c.moveTo(-10,10);c.ellipse(-17,6,7,11,-.5,0,2*P)}
  c.strokeStyle=K;c.lineWidth=8;sh();c.stroke();c.fillStyle=W;sh();c.fill()
  c.restore()
  // the heart, popping off the hand and floating away
  const f=(t-.39)/.5
  if(f>0&&f<1){
    const s=19*Math.min(1.15,f/.12*1.15)*(f>.12?1-.15*cl((f-.12)/.1):1)*(1-sm((f-.7)/.3))
    const g=1-(1-f)**2
    heart(c,204+16*g+5*S(3*P*f),124-90*g,s)
    c.strokeStyle=W;c.lineWidth=5;c.stroke();c.fillStyle=K;c.fill()
  }
}

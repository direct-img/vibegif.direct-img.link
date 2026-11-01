// a mug of hot cocoa with marshmallows bobbing on top, steam curling up out of it
export const frames=36,delay=60,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const f=(col,w=6)=>{c.fillStyle=col;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
  const el=(x,y,a,b)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T)}
  const X=116,Y=118,A=76,B=19
  c.translate(-8,0)
  // steam: three tapered wisps that rise, sway and fade, each on its own phase
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,e=S(Math.PI*p),L=[],R=[],N=34,d=k%2?1:-1
    let x=[84,118,152][k],y=Y-2-p*38,a=-Math.PI/2
    for(let j=0;j<=N;j++){
      const s=j/N,w=e*(8+20*S(Math.PI*Math.pow(s,.6)))*(1-s*s*.8),nx=-S(a),ny=C(a)
      L.push([x+nx*w/2,y+ny*w/2]);R.unshift([x-nx*w/2,y-ny*w/2])
      a=-Math.PI/2+.5*S(4.5*s-T*p+k*2)+d*2.6*s**5;x+=C(a)*2;y+=S(a)*2
    }
    c.beginPath();[...L,...R].forEach(([x,y],j)=>j?c.lineTo(x,y):c.moveTo(x,y));c.closePath();f('#eef4fb',4)
  }
  // handle
  c.beginPath();c.moveTo(184,142);c.bezierCurveTo(236,128,240,200,180,196)
  c.lineWidth=30;c.strokeStyle=K;c.stroke();c.lineWidth=17;c.strokeStyle='#e0403a';c.stroke()
  c.beginPath();c.moveTo(212,150);c.quadraticCurveTo(224,162,218,176);c.lineWidth=4;c.strokeStyle='#ff8a80';c.stroke()
  // opening: back wall and cocoa surface
  c.save();el(X,Y,A,B);c.clip();c.fillStyle='#a3262b';c.fill()
  el(X,Y+5,A-4,B-3);c.fillStyle='#7c4428';c.fill()
  c.beginPath();c.ellipse(X+4,Y+6,40,7,0,3.6,6.1);c.lineWidth=4;c.strokeStyle='#9c6038';c.stroke()
  c.restore();el(X,Y,A,B);c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // marshmallows: little cylinders bobbing in the cocoa, each with a ripple ring
  ;[[118,106,4.2,0],[80,118,0,0],[152,120,2.1,1]].forEach(([x,y,ph,pk])=>{
    const a=T*2*t+ph,dy=5.5*S(a),r=.2*S(a+1.2)
    c.beginPath();c.ellipse(x,y+11,24+3*C(a),6+C(a),0,0,T);c.lineWidth=4;c.strokeStyle='#a86a40';c.stroke()
    c.save();c.translate(x+2*C(a),y-4+dy);c.rotate(r)
    c.beginPath();c.moveTo(-18,-6);c.lineTo(-18,8);c.ellipse(0,8,18,6.5,0,Math.PI,0,true);c.lineTo(18,-6);c.closePath()
    f(pk?'#f6a9c4':'#f3e6dc',5)
    el(0,-6,18,6.5);f(pk?'#ffd0e0':'#fffaf4',5)
    c.restore()
  })
  // mug body, top edge follows the front of the rim so it hides what sinks below it
  const body=()=>{c.beginPath();c.ellipse(X,Y,A,B,0,Math.PI,0,true)
    c.lineTo(X+A-8,216);c.quadraticCurveTo(X+A-10,232,X+A-26,232);c.lineTo(X-A+26,232);c.quadraticCurveTo(X-A+10,232,X-A+8,216);c.closePath()}
  body();c.fillStyle='#e0403a';c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(X+A+18,180,44,100,0,0,T);c.fillStyle='#b82e33';c.fill()
  c.beginPath();c.moveTo(X-A+18,148);c.lineTo(X-A+22,206);c.lineWidth=8;c.strokeStyle='#ff9a8f';c.stroke();c.restore()
  body();c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // snowflake on the side of the mug
  c.save();c.translate(X-4,178);c.strokeStyle='#fff6ec';c.lineWidth=5
  for(let k=0;k<6;k++){c.rotate(T/6);c.beginPath();c.moveTo(0,0);c.lineTo(0,-22);c.moveTo(-7,-15);c.lineTo(0,-10);c.lineTo(7,-15);c.stroke()}
  c.restore()
}

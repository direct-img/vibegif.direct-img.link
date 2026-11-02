// groovy 70s sun with a blissed-out smiling face, closed eyes and rosy cheeks, ringed by wavy nested flame rays whose rainbow bands cycle through every color while they wiggle and slowly turn
export const frames=20,delay=80
const P=Math.PI*2,n=12
export default(c,t)=>{
  c.translate(128,128)
  const sp=t*P/6
  // flame rays: nested wavy tongues, layer by layer
  for(let l=0;l<3;l++)for(let k=0;k<n;k++){
    const a0=k/n*P+sp,L=(k%2?108:124)-l*13,W=22*(1-l*.3),m=30
    const C=[],E=[]
    for(let j=0;j<=m;j++){
      const u=j/m,r=58+u*(L-58),v=(r-58)/66,a=a0+.14*v*Math.sin(v*6-t*P*2+k%2*Math.PI),w=W*(1-u)**.75/r
      C.push([r*Math.cos(a-w),r*Math.sin(a-w)]);E.push([r*Math.cos(a+w),r*Math.sin(a+w)])
    }
    c.beginPath()
    for(const p of[...C,...E.reverse()])c.lineTo(...p)
    c.closePath()
    c.fillStyle=`hsl(${t*360+k%2*180-l*48},100%,${58+l*6}%)`;c.fill()
    l||(c.lineWidth=5,c.stroke())
  }
  // wavy collar ring
  c.beginPath()
  for(let j=0;j<=96;j++){
    const a=j/96*P,r=67+4*Math.sin(a*16+t*P*2)
    c.lineTo(r*Math.cos(a),r*Math.sin(a))
  }
  c.fillStyle='#ff5d3a';c.lineWidth=5;c.fill();c.stroke()
  c.beginPath();c.arc(0,0,56,0,P);c.fillStyle='#ffd23f';c.fill();c.stroke()
  // face, gently tilting
  c.rotate(.1*Math.sin(t*P))
  c.fillStyle='#ff7aa8'
  for(const s of[-1,1]){c.beginPath();c.ellipse(s*31,12,9,6,0,0,P);c.fill()}
  c.lineWidth=4.5
  for(const s of[-1,1]){
    c.beginPath();c.arc(s*19,-12,9,Math.PI*.1,Math.PI*.9);c.stroke()
    for(const q of[-.5,0,.5]){
      const a=Math.PI/2+q,x=s*19+9*Math.cos(a),y=-12+9*Math.sin(a)
      c.beginPath();c.moveTo(x,y);c.lineTo(x+5*Math.cos(a),y+5*Math.sin(a));c.stroke()
    }
  }
  c.beginPath();c.arc(0,8,22,.18*Math.PI,.82*Math.PI);c.closePath()
  c.fillStyle='#c2185b';c.fill();c.stroke()
}

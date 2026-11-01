// cornucopia, a woven horn of plenty, with an apple, a pear and a corn cob tumbling out of its mouth and dropping into the harvest pile
export const frames=36,delay=55,rim=5
const K='#2a1810',P=Math.PI*2,PI=Math.PI,S=Math.sin,C=Math.cos
const bz=(a,b,c,d,u)=>(1-u)**3*a+3*(1-u)**2*u*b+3*(1-u)*u*u*c+u**3*d
// spine of the horn, tip to mouth, with radius growing toward the mouth
const SP=[];for(let k=0;k<=60;k++){const u=k/60,A=u<.3,v=A?u/.3:(u-.3)/.7,
  q=A?[[64,52],[38,36],[18,70],[40,96]]:[[40,96],[60,126],[112,132],[164,114]]
  SP.push([8+bz(q[0][0],q[1][0],q[2][0],q[3][0],v)*.88,22+bz(q[0][1],q[1][1],q[2][1],q[3][1],v)*.88,3+44*u**1.7])}
const NR=SP.map(([x,y],k)=>{const[a,b]=SP[Math.max(0,k-1)],[e,f]=SP[Math.min(60,k+1)],l=Math.hypot(e-a,f-b);return[(e-a)/l,(f-b)/l]})
export default(c,t)=>{
  c.strokeStyle=K;c.translate(-6,-13)
  const side=d=>SP.map(([x,y,r],k)=>[x-d*r*NR[k][1],y+d*r*NR[k][0]]),
    poly=p=>{p.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))},
    horn=()=>{c.beginPath();poly([...side(1),...side(-1).reverse()]);c.closePath()},
    [mx,my,mr]=SP[60],[tx,ty]=NR[60],ma=Math.atan2(ty,tx)
  // horn body: wicker with woven bands
  c.save();horn();c.fillStyle='#a86c2c';c.fill();c.clip()
  c.translate(-4,-7);horn();c.fillStyle='#d49a52';c.fill();c.translate(4,7)
  c.lineWidth=3.5;c.strokeStyle='#8a5522'
  for(let k=8;k<60;k+=5){const[x,y,r]=SP[k],[nx,ny]=NR[k];c.beginPath();c.moveTo(x-r*ny,y+r*nx);c.quadraticCurveTo(x+r*.7*nx,y+r*.7*ny,x+r*ny,y-r*nx);c.stroke()}
  c.lineWidth=2.5;c.strokeStyle='rgba(255,226,170,.55)'
  for(let k=10;k<60;k+=5){const[x,y,r]=SP[k],[nx,ny]=NR[k];c.beginPath();c.moveTo(x-r*.7*ny-3*nx,y+r*.7*nx-3*ny);c.quadraticCurveTo(x+r*.5*nx,y+r*.5*ny-2,x+r*.7*ny-2*nx,y-r*.7*nx-2*ny);c.stroke()}
  c.restore();c.lineWidth=6;horn();c.stroke()
  // mouth: dark inside, braided rim
  const mo=()=>{c.beginPath();c.ellipse(mx,my,mr*.42,mr,ma,0,P)}
  mo();c.fillStyle='#4a2c14';c.fill()
  c.lineWidth=16;mo();c.stroke();c.lineWidth=9;c.strokeStyle='#e0aa62';c.stroke()
  c.strokeStyle='#8a5522';c.lineWidth=2.5;c.setLineDash([5,6]);c.stroke();c.setLineDash([]);c.strokeStyle=K
  // wheat stalks poking out of the top of the mouth
  for(const[a,l]of[[-1.15,36],[-.85,42],[-.55,32]]){
    const bx=mx-6,by=my-30,ex=bx+l*C(a),ey=by+l*S(a)
    c.lineWidth=7;c.beginPath();c.moveTo(bx,by);c.lineTo(ex,ey);c.stroke();c.lineWidth=3;c.strokeStyle='#e8c060';c.stroke();c.strokeStyle=K
    c.save();c.translate(ex,ey);c.rotate(a);c.beginPath();c.ellipse(4,0,12,5.5,0,0,P);c.fillStyle='#f0c85a';c.fill();c.lineWidth=3.5;c.stroke()
    c.lineWidth=2.5;c.beginPath();for(let j=-1;j<=1;j+=2)for(let q=-6;q<=8;q+=5){c.moveTo(q,0);c.lineTo(q+3,j*4)}c.stroke();c.restore()
  }
  // tumbling produce: each rides out of the mouth and drops behind the pile
  const apple=()=>{c.beginPath();c.moveTo(0,-11);c.bezierCurveTo(10,-20,22,-6,15,8);c.bezierCurveTo(10,18,2,17,0,14);c.bezierCurveTo(-2,17,-10,18,-15,8);c.bezierCurveTo(-22,-6,-10,-20,0,-11);c.fillStyle='#d23a2c';c.fill();c.lineWidth=4.5;c.stroke()
      c.fillStyle='#ff9b84';c.beginPath();c.ellipse(-7,-3,3,5,.4,0,P);c.fill()
      c.lineWidth=4;c.beginPath();c.moveTo(0,-11);c.lineTo(2,-19);c.stroke()
      c.beginPath();c.moveTo(2,-16);c.quadraticCurveTo(12,-24,16,-16);c.quadraticCurveTo(8,-10,2,-16);c.fillStyle='#6fa043';c.fill();c.lineWidth=3;c.stroke()},
    pear=()=>{c.beginPath();c.moveTo(0,-18);c.bezierCurveTo(8,-18,8,-6,12,2);c.bezierCurveTo(18,12,10,20,0,20);c.bezierCurveTo(-10,20,-18,12,-12,2);c.bezierCurveTo(-8,-6,-8,-18,0,-18);c.fillStyle='#b9c94a';c.fill();c.lineWidth=4.5;c.stroke()
      c.fillStyle='#e7ee9a';c.beginPath();c.ellipse(-5,4,3,6,.3,0,P);c.fill()
      c.lineWidth=4;c.beginPath();c.moveTo(0,-18);c.quadraticCurveTo(1,-24,5,-26);c.stroke()},
    corn=()=>{c.beginPath();c.ellipse(4,0,22,10,0,0,P);c.fillStyle='#f6c843';c.fill();c.lineWidth=4.5;c.stroke()
      c.fillStyle='#d99a22';for(let x=-12;x<=20;x+=7)for(let y=-4;y<=4;y+=8){c.beginPath();c.arc(x,y+(x%2?2:0),1.8,0,P);c.fill()}
      c.beginPath();c.moveTo(-14,-6);c.quadraticCurveTo(-30,-14,-30,-4);c.quadraticCurveTo(-24,6,-6,6);c.quadraticCurveTo(-24,14,-28,4);c.closePath();c.fillStyle='#8fae4c';c.fill();c.lineWidth=4;c.stroke()}
  c.save();mo();c.rect(mx,0,256,256);c.clip()
  for(const[k,f]of[[0,apple],[1,pear],[2,corn]]){
    const q=((t-k/3)%1+1)%1,p=q/.62,g=Math.min(1,p/.2)
    if(p>=1||g<.05)continue
    const x=mx+4+60*p,y=my-2-64*p+158*p*p
    c.save();c.translate(x,y);c.rotate((k%2?-1:1)*(.4+4.5*p));c.scale(g,g);f();c.restore()
  }
  c.restore()
  // the pile in front: autumn leaves, grapes, a fat pumpkin
  const leaf=(x,y,a,f)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();c.moveTo(0,-22);c.lineTo(6,-10);c.lineTo(16,-14);c.lineTo(12,-2);c.lineTo(22,2);c.lineTo(10,8);c.lineTo(12,16);c.lineTo(0,10);c.lineTo(-12,16);c.lineTo(-10,8);c.lineTo(-22,2);c.lineTo(-12,-2);c.lineTo(-16,-14);c.lineTo(-6,-10);c.closePath();c.fillStyle=f;c.fill();c.lineWidth=4;c.stroke();c.beginPath();c.moveTo(0,16);c.lineTo(0,-12);c.lineWidth=2.5;c.stroke();c.restore()}
  leaf(92,210,-.6,'#d8572a');leaf(150,218,.3,'#e8a33c')
  for(const[x,y]of[[124,176],[140,176],[116,190],[132,190],[148,190],[124,204],[140,204],[132,218]]){c.beginPath();c.arc(x,y,9,0,P);c.fillStyle='#7a3f8f';c.fill();c.lineWidth=4;c.stroke();c.fillStyle='#b58ad0';c.beginPath();c.arc(x-3,y-3,2.5,0,P);c.fill()}
  c.lineWidth=5;c.beginPath();c.moveTo(132,170);c.quadraticCurveTo(134,160,142,156);c.stroke()
  let d=1;for(let k=0;k<3;k++)d=Math.min(d,((t-k/3-.62)%1+1)%1)
  const j=d<.12?S(PI*d/.12)*(1-d/.12):0
  c.save();c.translate(200,222);c.scale(1+.06*j,1-.08*j);c.translate(0,-25)
  c.lineWidth=5;c.beginPath();c.moveTo(-2,-22);c.quadraticCurveTo(-4,-34,6,-38);c.lineTo(10,-34);c.quadraticCurveTo(4,-30,6,-22);c.closePath();c.fillStyle='#6b5a2c';c.fill();c.stroke()
  for(const[x,rx]of[[-19,19],[19,19],[-8,19],[8,19],[0,16]]){c.beginPath();c.ellipse(x,0,rx,26,0,0,P);c.fillStyle=x?'#e2741d':'#f08a2a';c.fill();c.lineWidth=5;c.stroke()}
  c.strokeStyle='rgba(255,210,150,.7)';c.lineWidth=4;c.beginPath();c.ellipse(-4,-2,8,16,0,3.6,4.4);c.stroke()
  c.restore()
}

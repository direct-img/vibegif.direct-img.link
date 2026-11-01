// party blower giving a little puff, then unrolling with a toot and a burst of confetti, then curling back up
export const frames=48,delay=50,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),rn=n=>(n=Math.sin(n*127.1+311.7)*43758.5453,n-Math.floor(n))
const L=182,D=30,U0=22,A=-.7,X0=70,Y0=182,C=0
export default(c,t)=>{
  // how far it is unrolled: a small puff, then the big toot, then curling back
  const e=.16*Math.sin(Math.PI*cl((t-.06)/.14))+sm((t-.26)/.1)*(1-sm((t-.56)/.3))
  const u=U0+(L-C-U0)*e,fl=sm((t-.33)/.05)*(1-sm((t-.56)/.1))
  // centre line: straight for u, then a spiral that tightens towards the tip
  const pts=[]
  let x=X0,y=Y0,a=A
  for(let s=0;s<=L;s+=2){
    pts.push([x,y,a,s])
    const f=s/L
    a+=2*(s>u?Math.min(.12,Math.sqrt(Math.PI/(D*Math.max(L-s,1)))):0)+fl*.007*Math.sin(P*t*6-f*9)*f
    x+=Math.cos(a)*2;y+=Math.sin(a)*2
  }
  // mouthpiece
  c.save();c.translate(X0,Y0);c.rotate(A)
  c.lineWidth=6
  const mp=()=>{c.moveTo(-50,-8);c.lineTo(-8,-14);c.lineTo(4,-14);c.lineTo(4,14);c.lineTo(-8,14);c.lineTo(-50,8);c.closePath()}
  c.beginPath();mp();c.fillStyle='#2cb5c9';c.fill()
  c.save();c.clip();c.fillStyle='#ffd23f';for(let j=0;j<3;j++)c.fillRect(-45+j*13,-20,6,40);c.fillStyle='#1b8a9a';c.fillRect(-60,5,70,12);c.restore()
  c.beginPath();mp();c.stroke()
  c.beginPath();c.roundRect(-57,-10,10,20,4);c.fillStyle='#ff5fa2';c.fill();c.stroke()
  c.restore()
  // the paper tube, drawn in short pieces so overlapping turns keep their outline
  const seg=(i0,i1,w,col,dash)=>{
    c.beginPath();for(let i=i0;i<=i1;i++)c.lineTo(pts[i][0],pts[i][1])
    c.lineWidth=w;c.strokeStyle=col;c.setLineDash(dash||[]);c.lineDashOffset=dash?-pts[i0][3]:0;c.stroke()
  }
  c.lineCap='butt'
  for(let i=0;i<pts.length-1;i+=5){
    const j=Math.min(i+6,pts.length-1)
    seg(i,j,30,"#111");seg(i,j,20,"#ff5fa2");seg(i,j,20,"#ffd23f",[10,12])
  }
  c.setLineDash([]);c.lineCap='round';c.strokeStyle='#111'
  // tip fringe
  const[tx,ty,ta]=pts[pts.length-1]
  c.save();c.translate(tx,ty);c.rotate(ta)
  for(let j=-1;j<=1;j++){
    const b=j*.55*(.4+.6*e)+fl*.25*Math.sin(P*t*8+j*2),l=20*sm(e*1.6)
    if(l<1)continue
    c.beginPath();c.moveTo(0,j*5);c.lineTo(Math.cos(b)*l,j*5+Math.sin(b)*l)
    c.lineWidth=10;c.strokeStyle='#111';c.stroke();c.lineWidth=4.5;c.strokeStyle=['#2cb5c9','#ffd23f','#2cb5c9'][j+1];c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#ff5fa2';c.beginPath();c.roundRect(-4,-10,8,20,3);c.fill();c.stroke()
  c.restore()
  // confetti burst from the tip
  for(let j=0;j<16;j++){
    const q=(t-.32-rn(j)*.1)/.4
    if(q<=0||q>=1)continue
    const an=-1.1-1.5*rn(j+30),sp=110+90*rn(j+50),tt=q*.8
    const px=tx+Math.cos(an)*sp*tt,py=ty+Math.sin(an)*sp*tt+260*tt*tt
    const z=Math.min(1-q**3,(px-14)/9,(240-px)/9,(py-14)/9,(240-py)/9)
    if(z<.15)continue
    c.save();c.translate(px,py);c.rotate(rn(j+70)*6+q*9*(j%2?1:-1));c.scale(z,z*(.35+.65*Math.abs(Math.cos(q*12+j))))
    c.fillStyle=['#2cb5c9','#ffd23f','#ff5fa2','#7c5cff'][j%4];c.lineWidth=3
    c.beginPath();c.rect(-8,-4.5,16,9);c.fill();c.stroke();c.restore()
  }
  // toot lines
  if(fl>.05){
    const q=(t*5)%1
    for(let j=-1;j<=1;j++){
      const b=ta+j*.75,r1=20+q*7,r2=r1+9*(1-q)*fl
      c.beginPath();c.moveTo(tx+Math.cos(b)*r1,ty+Math.sin(b)*r1);c.lineTo(tx+Math.cos(b)*r2,ty+Math.sin(b)*r2);c.lineWidth=5;c.stroke()
    }
  }
}

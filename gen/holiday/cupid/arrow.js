// little cupid hovering on fluttering wings, drawing its bow with a wink and loosing a heart-tipped arrow that bursts into hearts
export const frames=48,delay=55,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),bp=(t,a,b)=>Math.sin(Math.PI*cl((t-a)/(b-a)))
const R=.42,OX=98,OY=147,AIM=-.28,D=40
export default(c,t)=>{
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  const u=t-R
  // draw back, release, string twang, new arrow appearing
  const pull=u<0?6+22*sm((t-.1)/.28)**1.4:6*sm((u-.3)/.12)+(u<.2?-5*Math.exp(-u*30)*Math.cos(u*90):0)
  const fl=u>0&&u<.08?u/.08:-1,nw=sm((t-.74)/.12),wk=sm((t-.2)/.04)*(1-sm((u+.01)/.04))
  const bob=5*Math.sin(P*t*2),lean=-.06*sm((t-.1)/.28)*(1-sm(u/.1))
  c.translate(OX,OY+bob);c.scale(1.02,1.02);c.rotate(lean)
  // wings flutter behind
  for(const k of[1,0]){
    c.save();c.translate(-16+k*4,-14+k*-6);c.rotate(.05+k*.35+.26*Math.sin(P*t*6+k*.8))
    c.lineWidth=5;const w=()=>{c.moveTo(4,4);c.bezierCurveTo(-6,-30,-44,-42,-62,-32);c.quadraticCurveTo(-54,-23,-58,-15);c.quadraticCurveTo(-46,-11,-48,-2);c.quadraticCurveTo(-34,0,-34,9);c.quadraticCurveTo(-16,10,4,4);c.closePath()}
    S(w,k?'#e8f1ff':'#fff',k?'#c4d6f2':'#d8e6fb',3,4)
    c.restore()
  }
  // legs dangling
  for(const[d,ph]of[[-9,0],[9,1.4]]){c.save();c.translate(d,30);c.rotate(.18*Math.sin(P*t*2+ph));c.lineWidth=5;S(()=>c.ellipse(0,8,9,13,0,0,P),'#ffd9bd','#efb595',-3,-3);c.restore()}
  // body with sash
  c.lineWidth=6;S(()=>c.ellipse(0,8,25,27,0,0,P),'#ffd9bd','#efb595',-5,-4)
  c.save();c.beginPath();c.ellipse(0,8,25,27,0,0,P);c.clip();c.fillStyle='#ff6f9c';c.lineWidth=4;c.beginPath();c.moveTo(-30,-14);c.lineTo(-20,-22);c.lineTo(30,26);c.lineTo(20,34);c.closePath();c.fill();c.stroke();c.restore()
  c.lineWidth=6;c.beginPath();c.ellipse(0,8,25,27,0,0,P);c.stroke()
  // aiming group: drawing arm (behind the arrow), bow, arrow, bow arm
  const sx=34-pull
  c.save();c.translate(12,-6);c.rotate(AIM);c.translate(-12,6)
  c.lineWidth=13;c.beginPath();c.moveTo(-2,-6);c.quadraticCurveTo(sx-8,6,sx,-8);c.stroke();c.lineWidth=7;c.strokeStyle='#ffd9bd';c.stroke();c.strokeStyle='#111'
  const bend=1+pull/60
  c.save();c.translate(54,-8)
  c.lineWidth=10;c.beginPath();c.moveTo(-16*bend,-50);c.quadraticCurveTo(10*bend,-38,0,0);c.quadraticCurveTo(10*bend,38,-16*bend,50);c.stroke()
  c.lineWidth=5;c.strokeStyle='#f5c242';c.stroke();c.strokeStyle='#111'
  c.lineWidth=2.5;c.beginPath();c.moveTo(-16*bend,-50);c.lineTo(sx-54,0);c.lineTo(-16*bend,50);c.stroke()
  c.restore()
  // arrow: nocked, flying, or appearing anew
  if(fl<0)arrow(c,sx,-8,u>0?nw:1)
  else{const x=sx+D*sm(fl*1.6);arrow(c,x,-8,1-sm((fl-.6)/.4))}
  c.lineWidth=4;c.fillStyle='#ffd9bd';c.beginPath();c.arc(sx,-6,7,0,P);c.fill();c.stroke()
  // bow arm in front
  c.lineWidth=13;c.beginPath();c.moveTo(12,-4);c.lineTo(52,-8);c.stroke();c.lineWidth=7;c.strokeStyle='#ffd9bd';c.stroke();c.strokeStyle='#111'
  c.lineWidth=4;c.fillStyle='#ffd9bd';c.beginPath();c.arc(54,-8,7,0,P);c.fill();c.stroke()
  // heart burst where the arrow ends up, sparkle as a new arrow appears on the string
  const m=c.getTransform(),W=(x,y)=>[m.a*x+m.c*y+m.e,m.b*x+m.d*y+m.f],[hx,hy]=W(6+D+58,-8),[ax,ay]=W(sx+50,-8),[bx,by]=W(sx+20,-8)
  c.restore()
  // head
  c.save();c.translate(6,-46);c.rotate(-lean*.5)
  c.lineWidth=6;S(()=>c.arc(0,0,32,0,P),'#ffe1c8','#f2bd9c',-5,-4)
  // golden curls
  c.lineWidth=4.5
  const cu=[[-22,-20,10],[-8,-29,11],[8,-29,10],[21,-20,9],[-28,-6,8],[0,-22,9]]
  for(const q of[0,1])for(const[x,y,r]of cu){c.beginPath();c.arc(x,y,r,0,P);q?(c.fillStyle='#ffd04a',c.fill()):c.stroke()}
  c.lineWidth=3;c.beginPath();c.arc(8,-36,6,Math.PI*.9,Math.PI*2.1);c.stroke()
  // face looking right: eyes (left one winks while aiming), cheeks, smile
  c.fillStyle='#ff9fb8';for(const x of[-6,26]){c.beginPath();c.ellipse(x,10,6.5,4.5,0,0,P);c.fill()}
  for(const x of[2,20]){
    if(x==2&&wk>.5){c.lineWidth=3.5;c.beginPath();c.moveTo(x-5,0);c.quadraticCurveTo(x,4,x+5,-1);c.stroke()}
    else{c.fillStyle='#111';c.beginPath();c.ellipse(x,0,4.2,5.5,0,0,P);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+1.4,-2,1.6,0,P);c.fill()}
  }
  c.lineWidth=3.5;c.beginPath();c.arc(12,10,6,.25,Math.PI-.25);c.stroke()
  c.restore()
  // heart burst where the arrow ends up, sparkles as a new arrow appears on the string
  c.setTransform(1,0,0,1,0,0)
  const v=(u-.05)/.34
  if(v>0&&v<1){
    heart(c,hx,hy-8*v,24*(v<.14?sm(v/.14)*1.15:1.15-sm((v-.14)/.42)*1.15),.2)
    for(let j=0;j<5;j++){
      const q=cl((v-.06)/.94),a=-Math.PI/2-.5+(j-2)*.6,d=16+26*sm(q*1.5)
      heart(c,hx+Math.cos(a)*d,hy+Math.sin(a)*d-14*q,10*Math.sin(Math.PI*q)**.5,(j-2)*.25)
    }
  }
  const sp=bp(t,.74,.9)
  if(sp>.05)tw(c,ax,ay-14,12*sp),tw(c,bx,by+16,8*bp(t,.78,.92))
}
// arrow with its nock at (x,y): shaft, pink fletching, heart head; z scales it in/out from the nock
const arrow=(c,x,y,z)=>{
  if(z<.02)return
  c.save();c.translate(x,y);c.scale(z,z)
  c.lineWidth=9;c.beginPath();c.moveTo(-4,0);c.lineTo(48,0);c.stroke();c.lineWidth=4;c.strokeStyle='#c98a3a';c.stroke();c.strokeStyle='#111'
  c.fillStyle='#ff6f9c';c.lineWidth=3.5
  for(const d of[-1,1]){c.beginPath();c.moveTo(-6,0);c.lineTo(-12,d*10);c.lineTo(8,d*10);c.lineTo(14,0);c.closePath();c.fill();c.stroke()}
  heart(c,55,0,11,-Math.PI/2)
  c.restore()
}
// heart centred at x,y of size z, rotated a (0 = point down)
const heart=(c,x,y,z,a)=>{
  if(z<.5)return
  c.save();c.translate(x,y);c.rotate(a);c.scale(z/10,z/10)
  c.beginPath();c.moveTo(0,9);c.bezierCurveTo(-4,6,-11,1,-11,-4);c.bezierCurveTo(-11,-10,-3,-11,0,-5);c.bezierCurveTo(3,-11,11,-10,11,-4);c.bezierCurveTo(11,1,4,6,0,9);c.closePath()
  c.fillStyle='#ff3d6e';c.lineWidth=30/z;c.fill();c.stroke()
  c.fillStyle='#ffc2d4';c.beginPath();c.ellipse(-5,-4,2.6,1.6,-.6,0,P);c.fill()
  c.restore()
}
// four point twinkle
const tw=(c,x,y,z)=>{
  if(z<.6)return
  c.beginPath()
  for(let j=0;j<8;j++){const a=j*Math.PI/4,r=j%2?z*.32:z;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=2.5;c.fill();c.stroke()
}

// string of firecrackers hanging from a lucky knot, popping one after another at the lit end as the string feeds down
export const frames=48,delay=55,rim=6
const P=Math.PI*2,N=8,G=18,Y0=64,YP=190,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),rn=n=>(n=Math.sin(n*127.1+311.7)*43758.5453,n-Math.floor(n))
const KX=128,KY=54
export default(c,t)=>{
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  const T=t*N+.3,s=Math.floor(T),f=T-s,ph=s+sm(f*2.6),sw=.06*Math.sin(Math.PI*(T-.15))
  c.save();c.translate(KX,KY);c.rotate(sw);c.translate(-KX,-KY)
  // crackers: tucked behind the knot, splaying out lower down; the lowest one pops each step
  for(let k=s+2;k>=s-6;k--){
    const y=Y0+(ph-k)*G,d=k%2?1:-1,a=.14+.92*sm((y-72)/60)
    if(y<40)continue
    c.save();c.translate(KX,y);c.rotate(d*a)
    c.lineWidth=5.5
    S(()=>c.roundRect(-9.5,2,19,46,5),'#e5413a','#b3262b',d*-5,0)
    c.fillStyle='#f5c242';c.lineWidth=3
    for(const b of[8,38]){c.beginPath();c.rect(-9.5,b,19,5);c.fill();c.stroke()}
    c.restore()
  }
  // braided fuse on top
  c.lineWidth=10;c.beginPath();c.moveTo(KX,KY);c.lineTo(KX,YP+8);c.stroke()
  c.lineWidth=4.5;c.strokeStyle='#8f1d22';c.setLineDash([5,4]);c.lineDashOffset=-ph*G;c.stroke();c.setLineDash([]);c.strokeStyle='#111'
  // lit end of the fuse
  const z=6+3*Math.sin(P*t*N*2)
  sp(c,KX,YP+12,z)
  // pops: burst, shreds and smoke for each of the N pops in the loop
  for(let i=0;i<N;i++){
    const age=((T/N-i/N)%1+1)%1,d=(i-7)%2?1:-1,a=1.06,bx=KX-d*Math.sin(a)*27,by=YP+Math.cos(a)*27
    // smoke
    const v=(age-.03)/.3
    if(v>0&&v<1){
      const r=10*Math.sin(Math.PI*v)**.6,x=bx-d*(8+14*v),y=by-6-34*v
      c.lineWidth=4;c.fillStyle='#e9eaf0'
      for(const w of[0,1])for(const[dx,dy,rr]of[[-.5,.2,.6],[.5,.25,.6],[0,-.25,.8]]){c.beginPath();c.arc(x+dx*r,y+dy*r,rr*r,0,P);w?c.fill():c.stroke()}
    }
    // paper shreds
    for(let j=0;j<7;j++){
      const q=age/.24
      if(q>=1)continue
      const an=-Math.PI/2-d*(.2+1.3*rn(i*9+j))+(rn(j+40)-.5)*.6,spd=80+80*rn(i*7+j+3),tt=q*.5
      const x=bx+Math.cos(an)*spd*tt,y=by+Math.sin(an)*spd*tt+300*tt*tt,zz=Math.min(1-q*q,(x-14)/8,(242-x)/8,(y-14)/8,(242-y)/8)
      if(zz<.15)continue
      c.save();c.translate(x,y);c.rotate(rn(j+i)*6+q*12);c.scale(zz,zz*(.4+.6*Math.abs(Math.cos(q*10+j))))
      c.fillStyle=j%3?'#e5413a':'#f5c242';c.lineWidth=2.5;c.beginPath();c.rect(-6,-3.5,12,7);c.fill();c.stroke();c.restore()
    }
    // bang
    if(age<.12){
      const q=age/.12,R=40*(q<.3?sm(q/.3):1-sm((q-.3)/.7)),n=9
      if(R>2)for(const[k,col]of[[1,'#ffd23f'],[.55,'#ff7b1c']]){
        c.beginPath()
        for(let j=0;j<n*2;j++){const an=j*Math.PI/n+i,r=(j%2?R*.5:R)*k;c.lineTo(bx+Math.cos(an)*r,by+Math.sin(an)*r)}
        c.closePath();c.fillStyle=col;c.lineWidth=5;c.fill();if(k==1)c.stroke()
      }
    }
  }
  c.restore()
  // lucky knot on top
  knot(c,S)
}
// sparkling fuse tip
const sp=(c,x,y,z)=>{
  c.beginPath()
  for(let j=0;j<12;j++){const a=j*Math.PI/6,r=j%2?z*.4:z;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=3;c.fill();c.stroke()
}
// red chinese knot: woven diamond with loops, gold beads
const knot=(c,S)=>{
  c.save();c.translate(KX,KY)
  c.lineWidth=6
  for(const d of[-1,1]){c.beginPath();c.ellipse(d*36,0,11,8,0,0,P);c.fillStyle='#e23838';c.fill();c.stroke()}
  c.beginPath();c.ellipse(0,-31,7,7,0,0,P);c.fill();c.stroke()
  c.save();c.rotate(Math.PI/4)
  S(()=>c.roundRect(-24,-24,48,48,6),'#e23838','#a91c25',-4,4)
  c.strokeStyle='#a91c25';c.lineWidth=3.5;c.beginPath()
  for(const o of[-12,0,12]){c.moveTo(o,-20);c.lineTo(o,20);c.moveTo(-20,o);c.lineTo(20,o)}
  c.stroke();c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.roundRect(-24,-24,48,48,6);c.stroke()
  c.restore()
  c.lineWidth=4;c.fillStyle='#f5c242'
  for(const y of[-26,34]){c.beginPath();c.arc(0,y,6.5,0,P);c.fill();c.stroke()}
  c.restore()
}

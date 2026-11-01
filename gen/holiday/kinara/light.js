// Kwanzaa kinara lighting its seven candles one by one (black, then red and green from the outside in), then puffing out
export const frames=48,delay=60,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x))
const bo=x=>(x=cl(x)-1,1+3.2*x**3+2.2*x*x)
// candle k: colour [base,shade,light], lit at L[k]
const C=[['#e5413a','#b3262b','#ff8a7a'],['#34303c','#1c1a22','#6a6478'],['#2fa656','#1c7c3d','#79d692']]
const L=[.13,.3,.47,.05,.55,.38,.22],O=.8
export default(c,t)=>{
  // fill path f in shade d, then base b shifted by x,y inside it (cel shading), then outline
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  const R=(x,y,w,h,r)=>()=>c.roundRect(x,y,w,h,r)
  const st=k=>Math.abs(k-3),X=k=>128+(k-3)*31,top=k=>148+st(k)*8
  const all=sm((t-.6)/.06)*(1-sm((t-O+.03)/.04)),hop=Math.sin(Math.PI*cl((t-.6)/.12))*4
  c.translate(0,14-hop)
  // wooden block with stepped top
  S(()=>{c.moveTo(20,204);for(let k=0;k<7;k++)c.lineTo(X(k)-15.5,top(k)),c.lineTo(X(k)+15.5,top(k));c.lineTo(236,204);c.closePath()},'#b56c34','#87471f',-5,-6)
  // kente-ish band of triangles
  c.lineWidth=3
  for(let j=0;j<14;j++){
    const x=30+j*14,u=j%2
    c.beginPath();c.moveTo(x,u?182:196);c.lineTo(x+7,u?196:182);c.lineTo(x+14,u?182:196);c.closePath()
    c.fillStyle=['#e5413a','#f3bd3a','#2fa656','#f3bd3a'][j%4];c.fill();c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(26,178);c.lineTo(230,178);c.moveTo(26,200);c.lineTo(230,200);c.stroke()
  for(let k=0;k<7;k++){
    const x=X(k),y=top(k),[B,D,H]=C[k<3?0:k>3?2:1],ct=y-76
    c.lineWidth=6
    S(R(x-11,ct,22,y-ct+2,5),B,D,-5,0)
    // wax light + drip
    c.fillStyle=H;c.beginPath();c.roundRect(x-6,ct+12,4,y-ct-22,2);c.fill()
    c.beginPath();c.moveTo(x-11,ct+4);c.lineTo(x-2,ct+4);c.lineTo(x-2,ct+14);c.arc(x-6.5,ct+14,4.5,0,Math.PI);c.closePath();c.fill()
    c.lineWidth=6;c.beginPath();c.roundRect(x-11,ct,22,y-ct+2,5);c.stroke()
    // brass cup
    c.lineWidth=5;S(R(x-14,y-7,28,10,4),'#f3bd3a','#c98a1c',-3,-2)
    // wick
    c.lineWidth=4;c.beginPath();c.moveTo(x,ct);c.lineTo(x+1,ct-7);c.stroke()
    // flame: pops in at L[k], flickers, shrinks out at O
    const a=t-L[k],s=bo(a/.07)*(1-sm((t-O)/.05))*(1+.1*all)
    if(a>0&&s>.02){
      const f=(r,h,col,lw)=>{
        const sw=(2.4*Math.sin(P*(3*t+k*.37))+1.4*Math.sin(P*(5*t+k*.61)))*s,hh=h*(1+.07*Math.sin(P*(4*t+k*.23))),y0=ct-4
        c.beginPath();c.moveTo(x+sw,y0-hh);c.quadraticCurveTo(x-r*1.25,y0-r*1.5,x-r,y0-r);c.arc(x,y0-r,r,Math.PI,0,true);c.quadraticCurveTo(x+r*1.25,y0-r*1.5,x+sw,y0-hh)
        c.fillStyle=col;c.fill();if(lw){c.lineWidth=lw;c.stroke()}
      }
      f(10*s,38*s,'#ff9d1e',4.5);f(5.5*s,24*s,'#ffe066');f(2.6*s,12*s,'#fffbe6')
    }
    // ignition burst
    if(a>0&&a<.1){
      const q=a/.1,d1=12+12*q,d2=d1+8*(1-q)
      for(let j=0;j<5;j++){
        const an=-Math.PI/2+(j-2)*.5,co=Math.cos(an),si=Math.sin(an)
        c.beginPath();c.moveTo(x+co*d1,ct-20+si*d1);c.lineTo(x+co*d2,ct-20+si*d2)
        c.lineWidth=8;c.strokeStyle='#111';c.stroke();c.lineWidth=3.5;c.strokeStyle='#ffd23f';c.stroke();c.strokeStyle='#111'
      }
    }
    // smoke puffs after blow-out
    const v=(t-O-k*.005)/.13,r=11*Math.sin(Math.PI*cl(v))**.7
    if(v>0&&r>1){
      const px=x+Math.sin(v*4+k)*4,py=ct-14-v*34
      c.lineWidth=3;c.fillStyle='#e3e5ee'
      for(const w of[0,1])for(const[dx,dy,rr]of[[-.45,.2,.62],[.45,.2,.62],[0,-.25,.8]]){c.beginPath();c.arc(px+dx*r,py+dy*r,rr*r,0,P);w?c.fill():c.stroke()}
    }
  }
  // twinkles once all are lit
  if(all>.01)for(let j=0;j<4;j++){
    const q=(t*5+j*.5)%1
    tw(c,[28,228,66,190][j],[44,48,24,26][j],11*Math.sin(Math.PI*q)*all)
  }
}
// little four point twinkle star
const tw=(c,x,y,z)=>{
  if(z<.6)return
  c.beginPath()
  for(let j=0;j<8;j++){const a=j*Math.PI/4,r=j%2?z*.32:z;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
  c.closePath();c.fillStyle='#ffd23f';c.lineWidth=2.5;c.fill();c.stroke()
}

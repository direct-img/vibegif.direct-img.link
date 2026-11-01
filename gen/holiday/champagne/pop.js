// champagne bottle trembling, then popping its cork with a bang and a fountain of foam
export const frames=48,delay=55,rim=6
const P=Math.PI*2,cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),rn=n=>(n=Math.sin(n*127.1+311.7)*43758.5453,n-Math.floor(n))
const T=.24,A0=.47,K=.86,BX=82,BY=221
export default(c,t)=>{
  const S=(f,b,d,x=-5,y=-4)=>{c.beginPath();f();c.fillStyle=d;c.fill();c.save();c.clip();c.translate(x,y);c.beginPath();f();c.fillStyle=b;c.fill();c.restore();c.beginPath();f();c.stroke()}
  // foam: union of circles with one outline, shaded underneath
  const F=(cs,w=7)=>{c.lineWidth=w+3;for(const q of[0,1,2])for(const[x,y,r]of cs)if(r>.4){c.beginPath();q<2?c.arc(x,y,r+1.5,0,P):c.arc(x-r*.18,y-r*.18,r*.85,0,P);q?(c.fillStyle=q<2?'#d6e4f0':'#fff',c.fill()):c.stroke()}}
  const u=t-T,pre=cl(t/T)
  // tilt: tremble before, recoil after
  const a=A0+(u<0?.045*pre*pre*Math.sin(P*t*12):-.12*Math.exp(-u*12)*Math.sin(u*40)),co=Math.cos(a),si=Math.sin(a)
  const mx=BX+K*184*si,my=BY-K*184*co
  const lift=u<0?6*sm(t/T*1.5-.5)+1.3*Math.sin(P*t*12)*pre:0,back=t>.56
  const cap=sm(u/.04)*(1-sm((t-.66)/.24))
  c.save();c.translate(BX,BY);c.rotate(a);c.scale(K,K)
  c.lineWidth=7
  const B=()=>{c.moveTo(-15,-178);c.lineTo(-15,-130);c.bezierCurveTo(-15,-106,-40,-108,-40,-80);c.lineTo(-40,-10);c.quadraticCurveTo(-40,0,-30,0);c.lineTo(30,0);c.quadraticCurveTo(40,0,40,-10);c.lineTo(40,-80);c.bezierCurveTo(40,-108,15,-106,15,-130);c.lineTo(15,-178);c.closePath()}
  S(B,'#22744b','#134a30',-8,0)
  // glass shine
  c.fillStyle='#5cb985';c.beginPath();c.roundRect(-31,-92,7,76,3.5);c.fill();c.beginPath();c.roundRect(-29,-110,6,10,3);c.fill()
  // label with ribbon and star
  c.lineWidth=5
  S(()=>c.roundRect(-35,-78,70,46,7),'#fff3d6','#e8cf9c',-5,-3)
  c.fillStyle='#d23c3c';c.fillRect(-35,-66,70,12)
  c.lineWidth=3;c.beginPath();c.moveTo(-35,-66);c.lineTo(35,-66);c.moveTo(-35,-54);c.lineTo(35,-54);c.stroke()
  c.fillStyle='#f2c03c';c.beginPath()
  for(let j=0;j<10;j++){const an=j*Math.PI/5-Math.PI/2,r=j%2?5:11;c.lineTo(Math.cos(an)*r,-60+Math.sin(an)*r)}
  c.closePath();c.fill();c.stroke()
  // gold foil over the neck, zigzag hem
  c.lineWidth=6
  S(()=>{c.moveTo(-16,-180);c.lineTo(-16,-132);for(let j=0;j<=8;j++)c.lineTo(-16+j*4,j%2?-124:-132);c.lineTo(16,-180);c.closePath()},'#f4c542','#c98d1c',-4,0)
  c.lineWidth=3;c.beginPath();c.moveTo(-16,-152);c.lineTo(16,-152);c.moveTo(-16,-145);c.lineTo(16,-145);c.stroke()
  // cork in place (before the pop, and back again under the foam)
  if(u<0||back)cork(c,S,0,-182-lift)
  c.lineWidth=6;S(()=>c.roundRect(-18,-188,36,10,4),'#f4c542','#c98d1c',-3,-2)
  c.restore()
  // foam spray: a cone of blobs flung from the mouth, merging into one bubbly mass, thinning as the pressure drops
  const cs=[]
  for(let j=0;j<84;j++){
    const s0=.004+.22*rn(j)**1.5,q=(u-s0)/.3
    if(q>0&&q<1){
      const an=a+.1+(rn(j+40)-.5)*(.8+s0*3),sp=(300-s0*560)*(.7+.42*rn(j+80)),tt=q*.55
      const x=mx+Math.sin(an)*sp*tt,y=my-Math.cos(an)*sp*tt+320*tt*tt
      const r=Math.min((6+9*rn(j+9))*(1-q**3)*(.5+.5*sm(q*6)),x-18,238-x,y-17,238-y)
      if(r>3.4)cs.push([x,y,r])
    }
  }
  F(cs)
  // foam cap bubbling over the lip (hides the cork coming back)
  if(cap>.01){
    const cs=[[0,-8,16],[-14,-1,11],[14,-2,12],[-8,-20,12],[8,-21,13],[0,-31,10],[-17,9,7],[18,9,6]]
    F(cs.map(([x,y,r],j)=>[mx+(x*co-y*si)*cap,my+(x*si+y*co)*cap,r*cap*(1+.08*Math.sin(P*(3*t+j*.4)))]))
  }
  // flying cork: shoots up, spinning, and shrinks away
  if(u>0&&u<.2){
    const q=u/.2,d=18+30*(1-(1-q)**2),b=a-.75
    c.save();c.translate(mx+Math.sin(b)*d,my-Math.cos(b)*d);c.rotate(a-q*7);const z=K*1.35*(1-q**3);c.scale(z,z);cork(c,S,0,10);c.restore()
  }
  // bang
  if(u>0&&u<.09){
    const q=u/.09,R1=16+30*q,R2=R1+18*(1-q)
    for(let j=0;j<9;j++){
      const an=P*j/9-Math.PI/2,cx=Math.cos(an),sx=Math.sin(an)
      c.beginPath();c.moveTo(mx+cx*R1,my+sx*R1);c.lineTo(mx+cx*R2,my+sx*R2)
      c.lineWidth=9;c.strokeStyle='#111';c.stroke();c.lineWidth=4.5;c.strokeStyle='#ffd23f';c.stroke();c.strokeStyle='#111'
    }
  }
}
// cork: mushroom top on a plug, origin at plug bottom
const cork=(c,S,x,y)=>{
  c.lineWidth=6
  S(()=>{c.moveTo(x-11,y+4);c.lineTo(x-11,y-12);c.lineTo(x+11,y-12);c.lineTo(x+11,y+4);c.closePath()},'#dcae6e','#a8743c',-4,0)
  S(()=>{c.moveTo(x-16,y-10);c.bezierCurveTo(x-16,y-32,x+16,y-32,x+16,y-10);c.closePath()},'#e3b878','#a8743c',-4,0)
  c.lineWidth=3;c.beginPath();c.moveTo(x-11,y-4);c.lineTo(x+11,y-4);c.stroke()
}

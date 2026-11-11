// ink wash arched stone bridge over water fading in and out of drifting fog while a tiny figure in a straw hat crosses
const K=a=>`rgba(20,18,16,${a})`,{sin,cos,PI,min,max,abs,hypot,atan2}=Math,T=PI*2,
R=s=>()=>{let z=s+=0x6D2B79F5;z=Math.imul(z^z>>>15,z|1);z^=z+Math.imul(z^z>>>7,z|61);return((z^z>>>14)>>>0)/2**32},
// brush: dabs stamped along f(u) with radius w(u)
B=(c,f,w,n=40)=>{c.beginPath()
  for(let k=0;k<=n;k++){const u=k/n,[x,y]=f(u),r=w(u);r>.15&&(c.moveTo(x+r,y),c.arc(x,y,r,0,T))}
  c.fill()},
// pressure: press in, swell, taper to a point
P=u=>sin(PI*u**.6)**.8,
E=(c,on)=>c.globalCompositeOperation=on?'destination-out':'source-over',
fade=(c,w=16)=>{
  c.save();E(c,1)
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
,
d=x=>152-37*sin(PI*(x-30)/196)**1.25,
// fog banks: [x, y, rx, ry, phase]
F=[[70,150,80,30,0],[190,130,90,28,.22],[120,190,100,24,.45],[150,112,70,26,.62],[60,200,80,22,.8]]
export const frames=32,delay=95,dither=true
export default(c,t)=>{
  const r=R(5)
  // water: the arch mirrored as broken dashes, a few ripples
  c.filter='blur(.7px)'
  for(let j=0;j<7;j++){
    const y=190+j*5.5,o=52*(1-(j/7.5)**2)**.5,w=sin(T*t+j*1.3)*2.5
    c.fillStyle=K(.4-j*.045)
    for(const s of[-1,1])B(c,u=>[128+s*o+w+(u-.5)*(22-j*2),y],u=>1.7*P(u),20)
  }
  for(let k=0;k<6;k++){
    const x=40+r()*170,y=196+r()*40,l=24+r()*30,w=sin(T*(t+r()))*5
    c.fillStyle=K(k&1?.36:.2)
    B(c,u=>[x+w+(u-.5)*l,y+sin(u*5+k)*.8],u=>1.2*P(u),30)
  }
  // bridge body wash
  const g=c.createLinearGradient(0,112,0,188)
  g.addColorStop(0,K(.55));g.addColorStop(1,K(.2))
  c.filter='blur(1.6px)';c.fillStyle=g;c.beginPath();c.moveTo(30,d(30))
  for(let x=30;x<=226;x+=4)c.lineTo(x,d(x))
  c.lineTo(226,186);c.lineTo(180,186);c.ellipse(128,186,52,50,0,0,PI,true);c.lineTo(30,186);c.fill()
  // stones: a few dry dashes in the spandrels
  c.filter='blur(.5px)';c.fillStyle=K(.5)
  for(let k=0;k<12;k++){
    const x=k&1?44+r()*34:178+r()*34,y=d(x)+9+r()*(176-d(x)-9),l=5+r()*7
    B(c,u=>[x+u*l,y],u=>.9*P(u),10)
  }
  // arch ring and deck: loaded strokes
  c.fillStyle=K(.78)
  B(c,u=>[128-cos(u*PI)*55,186-sin(u*PI)*53],u=>1.6+2.2*sin(PI*u)**2*(.7+.3*sin(u*31)),120)
  c.fillStyle=K(.93)
  B(c,u=>[26+u*204,d(30+u*196)-1+sin(u*40)*.4],u=>.8+2.3*P(u)*(.75+.25*sin(u*27)),160)
  // banks: left rock with a leaning bare tree, right rock fainter
  c.filter='blur(3px)';c.fillStyle=K(.45)
  c.beginPath();c.moveTo(4,190);c.lineTo(8,150);c.lineTo(30,138);c.lineTo(52,150);c.lineTo(64,188);c.fill()
  c.fillStyle=K(.3)
  c.beginPath();c.moveTo(204,188);c.lineTo(214,154);c.lineTo(236,146);c.lineTo(252,188);c.fill()
  c.filter='blur(.5px)';c.fillStyle=K(.93)
  B(c,u=>[8+u*24,152-u*14+sin(u*9)],u=>2.6*P(u),40)
  B(c,u=>[31+u*24,138+u*u*30],u=>2.8*P(1-u)+.4,40)
  B(c,u=>[6+u*62,189+sin(u*8)],u=>2.2*P(u),50)
  c.fillStyle=K(.6)
  B(c,u=>[213+u*22,156-u*9],u=>1.8*P(u),30)
  B(c,u=>[236+u*12,147+u*u*38],u=>1.8*P(1-u),30)
  c.fillStyle=K(.86)
  const tx=u=>26+u*16+u*u*10,ty=u=>142-u*62
  B(c,u=>[tx(u),ty(u)],u=>3.2*(1-u*.8)+.3,60)
  for(const[o,a,l]of[[.45,-.5,26],[.62,-2.5,20],[.8,-.9,20],[.95,-1.9,14],[.3,-2.7,13]]){
    B(c,u=>[tx(o)+cos(a+u*.4)*l*u,ty(o)+sin(a+u*.4)*l*u],u=>1.5*(1-u)+.3,30)
    // sparse leaf dabs at the tip
    c.fillStyle=K(.5)
    for(let j=0;j<3;j++){
      const x=tx(o)+cos(a+.3)*l*(.7+j*.2)+(r()-.5)*8,y=ty(o)+sin(a+.3)*l*(.7+j*.2)+(r()-.5)*8
      B(c,u=>[x+u*5,y+u*2],u=>1.6*P(u),8)
    }
    c.fillStyle=K(.86)
  }
  // the traveller: straw hat, robe, staff
  const u=t,x=44+u*170,y=d(x)-2-abs(sin(u*T*9))*.8,A=min(1,u*9,(1-u)*9),s=sin(u*T*9)
  c.fillStyle=K(.93*A)
  c.beginPath();c.moveTo(x-7.5,y-13);c.quadraticCurveTo(x,y-21,x+7.5,y-13);c.fill()
  B(c,v=>[x-v*.8,y-12.5+v*8.5],v=>1.5+v*2.3,12)
  B(c,v=>[x+s*3*v,y-4+v*4],v=>1,6)
  B(c,v=>[x-s*3*v,y-4+v*4],v=>1,6)
  B(c,v=>[x+6.5+v*1.5,y-17+v*17],v=>.6,18)
  // fog: soft banks cut out of everything, each swelling, drifting and thinning away
  E(c,1);c.filter='blur(11px)'
  for(const[X,Y,rx,ry,ph]of F){
    const p=(t+ph)%1
    c.fillStyle=`rgba(0,0,0,${.95*sin(PI*p)**1.3})`
    c.beginPath();c.ellipse(X+(p-.5)*90,Y+sin(T*p)*4,rx*(.7+.3*sin(PI*p)),ry,0,0,T);c.fill()
  }
  E(c);c.filter='none';fade(c,22);snap(c)
}

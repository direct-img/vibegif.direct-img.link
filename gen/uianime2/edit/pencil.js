// auburn haired girl in round glasses scribbling lines onto a document with a giant pencil, eraser end wiggling and tongue out, then she beams and slides the finished page away
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=18,delay=85
const SKIN='#ffe3d1',HAIR='#c0583c',HD='#86321f',HL='#f6d0c2',EYE='#40c057',ED='#2b8a3e',TOP='#66d9e8',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',GL='#e7f5ff',PB='#ffd43b',PBL='#ffe066',PBD='#f59f00',WO='#ffd8a8',GR='#495057',FE='#ced4da',ER='#ff8fab',PA='#fff',PL='#dee2e6',INK='#5c7cfa',SP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x-4,y+5,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x-4,y-5,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x-4,y+5,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-5,y+7,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-9,y-1,4.5,0,T);c.fill();c.beginPath();c.arc(x,y+12,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const LY=[154,180,206],LW=[72,78,52],X0=28,SX=72,SY=192,ln=(k,p)=>[X0+LW[k]*p,LY[k]+3*sin(p*LW[k]*.45)]
const sheet=(c,x,y,a,n,p)=>{c.save();c.translate(x,y);c.rotate(a)
  c.fillStyle=PA;c.lineWidth=6;c.beginPath();c.moveTo(-60,-74);c.lineTo(38,-74);c.lineTo(60,-52);c.lineTo(60,82);c.lineTo(-60,82);c.closePath();c.fill();c.stroke()
  c.fillStyle=PL;c.lineWidth=5;c.beginPath();c.moveTo(38,-74);c.lineTo(38,-52);c.lineTo(60,-52);c.closePath();c.fill();c.stroke()
  c.strokeStyle=INK;c.lineWidth=4.5;for(let k=0;k<n;k++){const q=k<n-1?1:p;c.beginPath();for(let s=0;s<=q+1e-6;s+=.04){const[px,py]=ln(k,min(s,q));c.lineTo(px-SX,py-SY)}c.stroke()}
  c.strokeStyle='#111';c.restore()}
export default(c,t,i)=>{
  const W=[[.02,.22],[.28,.48],[.54,.7]],wk=W.findIndex(([a,b])=>t>=a&&t<b),hap=t>=.72&&t<.92,sl=ez(t,.8,.98),n=W.filter(([a])=>t>=a).length,p=n?min(1,(t-W[n-1][0])/(W[n-1][1]-W[n-1][0])):0
  const tp=t=>{for(const[k,[a,b]]of W.entries()){if(t<a){const[px,py]=k?ln(k-1,1):[X0,LY[0]-10],[nx,ny]=ln(k,0),q=k?ez(t,W[k-1][1],a):t/a;return[px+(nx-px)*q,py+(ny-py)*q-(k?14*sin(PI*q):0)]}if(t<b)return ln(k,(t-a)/(b-a))}
    const[ex,ey]=ln(2,1),q=ez(t,.9,1);return[ex+(X0-ex)*q,ey-24*ez(t,.7,.76)+(LY[0]-10-ey+24)*q]}
  const tip=tp(t),th=.18+(wk>=0?.07*sin(p*LW[wk]*.45):0),hx=tip[0]+4*cos(th)+40*sin(th),hy=tip[1]+4*sin(th)-40*cos(th)
  sheet(c,SX,SY,0,0,0)
  if(sl<1)sheet(c,SX-200*sl,SY+20*sl,-.5*sl,n,p)
  const H=f=>{c.save();c.translate(192,150+(hap?-3:0));c.rotate(hap?.04:-.06);c.scale(.62,.62);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=10;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,190);c.lineTo(50,190);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HAIR;c.beginPath();c.arc(150,24,30,0,T);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=6;c.beginPath();c.arc(150,24,16,PI*1.1,PI*1.9);c.moveTo(136,32);c.quadraticCurveTo(150,42,164,30);c.stroke();c.strokeStyle='#111';c.lineWidth=10
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.lineTo(128,240);c.lineTo(156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.lineTo(128,212);c.lineTo(142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=10;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(i==5){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,144),c.quadraticCurveTo(x,151,x+15,144),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,166,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*46+k-2,170),c.lineTo(128+d*46+k+2,162),c.stroke()
    c.lineWidth=7;c.fillStyle=MO;c.beginPath()
    if(hap)c.moveTo(112,166),c.quadraticCurveTo(128,171,144,166),c.quadraticCurveTo(142,190,128,190),c.quadraticCurveTo(114,190,112,166),c.fill(),c.stroke(),c.save(),c.clip(),c.fillStyle=TG,c.beginPath(),c.ellipse(128,191,8,6,0,0,T),c.fill(),c.restore()
    else{c.moveTo(114,170);c.quadraticCurveTo(126,176,140,168);c.stroke();c.fillStyle=TG;c.beginPath();c.moveTo(118,172);c.quadraticCurveTo(116,186,123,186);c.quadraticCurveTo(130,184,128,174);c.fill();c.stroke()}
    c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,190)
    c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,196,190);c.quadraticCurveTo(188,180,180,188)
    c.quadraticCurveTo(186,130,178,104);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(160,96,150,88);c.quadraticCurveTo(144,104,134,110)
    c.quadraticCurveTo(128,94,116,90);c.quadraticCurveTo(112,104,104,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,78,188);c.quadraticCurveTo(70,180,60,190);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=7;for(const x of[103,153]){c.beginPath();c.ellipse(x,142,22,21,0,0,T);c.stroke()
      c.strokeStyle=GL;c.lineWidth=5;c.beginPath();c.moveTo(x+6,128);c.lineTo(x+14,136);c.stroke();c.strokeStyle='#111';c.lineWidth=7}
    c.beginPath();c.moveTo(125,140);c.quadraticCurveTo(128,134,131,140);c.moveTo(81,138);c.lineTo(72,134);c.moveTo(175,138);c.lineTo(184,134);c.stroke()
  })
  ds(c,20,12,TOP,()=>{c.moveTo(150,196);c.quadraticCurveTo(124,256,hx+6,hy+8)})
  c.save();c.translate(tip[0],tip[1]);c.rotate(th)
  c.fillStyle=WO;c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.lineTo(12,-24);c.lineTo(-12,-24);c.closePath();c.fill();c.stroke()
  c.fillStyle=GR;c.beginPath();c.moveTo(0,0);c.lineTo(4,-8);c.lineTo(-4,-8);c.closePath();c.fill();c.stroke()
  c.fillStyle=PB;c.beginPath();c.rect(-12,-96,24,72);c.fill();c.stroke()
  c.fillStyle=PBL;c.fillRect(-9.5,-93.5,6,67);c.fillStyle=PBD;c.fillRect(4,-93.5,5.5,67)
  c.strokeStyle=PBD;c.lineWidth=2;c.beginPath();c.moveTo(-3.5,-30);c.lineTo(-3.5,-90);c.moveTo(4,-30);c.lineTo(4,-90);c.stroke();c.strokeStyle='#111'
  c.fillStyle=ER;c.lineWidth=5;c.beginPath();c.roundRect(-12,-124,24,18,[8,8,0,0]);c.fill();c.stroke()
  c.fillStyle=FE;c.beginPath();c.rect(-13,-108,26,13);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(-13,-101.5);c.lineTo(13,-101.5);c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(4,-40,13,12,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-8,-44);c.quadraticCurveTo(-12,-38,-8,-34);c.stroke()
  c.restore()
  if(hap){const q=(t-.72)/.2;c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[24,112,0],[140,110,.2],[116,236,.4]]){const r=sin(PI*min(1,max(0,(q-o)*1.6)));if(r>.1){c.beginPath();c.moveTo(x,y-13*r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*2*r,y+(b-a)*2*r,x+a*13*r,y+b*13*r);c.fill();c.stroke()}}}
}

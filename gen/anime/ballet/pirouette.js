// ballerina with a coral bun rises on pointe and pirouettes twice, spotting her head front, tutu bouncing, then lands in plié
const{sin,cos,PI,max,min,abs,round}=Math,T=2*PI
export const frames=20,delay=75
const SKIN='#ffe3d1',HAIR='#ff7f6e',HD='#f0564a',HL='#ffd6cf',EYE='#40c057',ED='#2b8a3e',LEO='#b197fc',LD='#7950f2',TU='#e5dbff',TD='#b197fc',SHOE='#faa2c1',FL='#ffd43b',BL='#ffa8a8',WOOD='#e0a96d',WD='#b07d4f',SPOT='#fff3bf'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const ss=u=>u*u*(3-2*u),cl=u=>min(1,max(0,u))
export default(c,t,i)=>{
  const up=ss(cl((t-.18)/.08))*(1-ss(cl((t-.78)/.07))),pl=t<.18?4*sin(PI*t/.18):t>.85?4*sin(PI*(t-.85)/.15):0
  const q=4*PI*ss(cl((t-.26)/.52)),cq=cos(q),sq=sin(q),m=q%T,hq=m<4.4?0:(m-4.4)/(T-4.4)*T,ch=cos(hq),sh=sin(hq)
  const oy=pl-9*up,bounce=2.5*sin(T*t*5)*up
  c.fillStyle=WOOD;c.lineWidth=6;c.beginPath();c.ellipse(128,226,94,20,0,0,T);c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=3;for(const x of[78,112,146,180])c.beginPath(),c.moveTo(x,209+abs(x-128)*.06),c.lineTo(x-6,243-abs(x-128)*.06),c.stroke();c.strokeStyle='#111'
  c.fillStyle=SPOT;c.beginPath();c.ellipse(128,226,50,10,0,0,T);c.fill()
  c.lineWidth=3.5;for(const[x,y,p]of[[50,64,0],[206,84,.4],[40,150,.7],[218,170,.2]]){const s=5+4*sin(T*(t+p)*2);if(s>2){c.fillStyle=FL;c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.4:s,b=k*PI/4;c.lineTo(x+r*cos(b),y+r*sin(b))}c.closePath();c.fill();c.stroke()}}
  const pk=up*(1)
  const lx=128+3*cq
  line(c,[[lx-2,184+oy],[lx-1,206+oy+pl*.5],[lx,218+oy*.15-2]],8,SKIN)
  if(pk>.3){const kx=128+20*cq,ky=192+oy;line(c,[[134,184+oy],[kx,ky],[128+2*cq,206+oy]],8,SKIN);c.fillStyle=SHOE;c.lineWidth=4;c.beginPath();c.ellipse(128+3*cq,208+oy,6,8,0,0,T);c.fill();c.stroke()}
  else line(c,[[136,184+oy],[140,206+oy],[142,220]],8,SKIN)
  const shoe=(x,y,pt)=>{c.fillStyle=SHOE;c.lineWidth=4;c.beginPath();pt?c.ellipse(x,y,6,9,0,0,T):c.ellipse(x+3,y,11,6,0,0,T);c.fill();c.stroke();c.strokeStyle='#f06595';c.lineWidth=2.5;c.beginPath();c.moveTo(x-5,y-12);c.lineTo(x+5,y-6);c.moveTo(x+5,y-12);c.lineTo(x-5,y-6);c.stroke();c.strokeStyle='#111'}
  shoe(lx,222+oy*.15-(up>.5?6:0),up>.5);if(pk<=.3)shoe(142,222,0)
  const tut=(back)=>{const ry=17+2*bounce,rx=60,y=172+oy;c.save();c.beginPath();back?c.rect(0,0,256,y):c.rect(0,y,256,256);c.clip()
    for(const[r,dy,col]of[[1,5,'#fff'],[.94,0,TU]]){c.fillStyle=col;c.lineWidth=4;c.beginPath();for(let k=0;k<=32;k++){const a=k*T/32+q*.15,rr=(k%2?.95:1)*r;c.lineTo(128+rx*rr*cos(a),y+dy+ry*rr*sin(a))}c.closePath();c.fill();c.stroke()}
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(128,y,rx*.7,ry*.62,0,0,T);c.stroke();c.strokeStyle='#111'
    c.fillStyle=TD;for(let k=0;k<6;k++){const a=q+k*T/6;c.beginPath();c.arc(128+42*cos(a),y+11*sin(a),3,0,T);c.fill()}c.restore()}
  tut(1)
  c.fillStyle=LEO;c.lineWidth=5;c.beginPath();c.moveTo(114,128+oy);c.lineTo(142,128+oy);c.quadraticCurveTo(148,150,144,174+oy);c.lineTo(112,174+oy);c.quadraticCurveTo(108,150,114,128+oy);c.closePath();c.fill();c.stroke()
  c.strokeStyle=LD;c.lineWidth=3;c.beginPath();c.moveTo(118,140+oy);c.quadraticCurveTo(128+6*sq,150+oy,138,140+oy);c.stroke();c.strokeStyle='#111'
  c.fillStyle=FL;c.lineWidth=3.5;c.beginPath();c.arc(128+10*sq,134+oy,4,0,T);c.fill();c.stroke()
  tut(0)
  c.fillStyle=SKIN;c.beginPath();c.rect(122,120+oy,12,10);c.fill()
  const head=g=>{c.save();c.translate(128,90+oy);c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  const front=ch>-.2,ex=34*sh,es=25*ch
  head(()=>{
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,38);c.bezierCurveTo(194,38,200,96,190,138);c.lineTo(66,138);c.bezierCurveTo(56,96,62,38,128,38);c.fill();c.stroke()
    c.beginPath();c.ellipse(128+6*sh,28,30,24,0,0,T);c.fill();c.stroke();c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.ellipse(128+6*sh,28,18,13,0,PI,T);c.stroke();c.strokeStyle='#111'
    if(front){
      c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
      if(ch>.9&&up<.5){eye(c,103,140,-1);eye(c,153,140,1)}
      else{c.lineWidth=8;for(const d of[-1,1]){const x=128+ex+d*es;if(abs(es)>8||d*sh>0)c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke(),c.beginPath(),c.moveTo(x+d*12,138),c.lineTo(x+d*19,133),c.stroke()}}
      c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+ex+d*42*ch,162,11*max(.4,abs(ch)),6,0,0,T),c.fill()
      c.lineWidth=5;c.beginPath();c.arc(128+ex,164,7,.15*PI,.85*PI);c.stroke()
      c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(70,130);c.bezierCurveTo(56,70,92,42,128,42);c.bezierCurveTo(166,42,200,70,186,130)
      c.quadraticCurveTo(180,104,162,92);c.quadraticCurveTo(146,88,132,96);c.quadraticCurveTo(128,84,124,96);c.quadraticCurveTo(110,88,94,92);c.quadraticCurveTo(76,104,70,130);c.closePath();c.fill();c.stroke()
    }else{
      c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(72,100);c.bezierCurveTo(68,160,100,186,128,186);c.bezierCurveTo(156,186,188,160,184,100);c.bezierCurveTo(184,44,72,44,72,100);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,60),c.quadraticCurveTo(128+d*34,120,128+d*14,170),c.stroke();c.strokeStyle='#111'
    }
    c.strokeStyle=HL;c.lineWidth=8;c.beginPath();c.arc(128,104,56,PI*1.3,PI*1.44);c.stroke();c.strokeStyle='#111'
    c.save();c.translate(128+46*sh+30*ch*(front?1:-1),36);c.fillStyle=FL;c.lineWidth=6;for(let k=0;k<5;k++){const b=k*T/5;c.beginPath();c.arc(12*cos(b),12*sin(b),9,0,T);c.fill();c.stroke()}c.fillStyle='#ff6b6b';c.beginPath();c.arc(0,0,7,0,T);c.fill();c.stroke();c.restore()
  })
  const op=1-up
  for(const d of[-1,1]){const s=[128+d*14,136+oy],e=[128+d*(22+30*op),148+oy-24*op],h=[128+d*(8+50*op),158+oy-34*op];line(c,[s,e,h],7,SKIN);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(...h,5.5,0,T);c.fill();c.stroke()}
  if(up>.8)for(const[y,r]of[[176,72],[112,56]])for(const d of[-1,1]){const a0=d>0?.15:PI+.15;for(const[lw,s]of[[9,'#111'],[3.5,'#fff']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.ellipse(128,y+oy,r,r*.2,0,a0,a0+.8),c.stroke()}
  c.strokeStyle='#111'
}

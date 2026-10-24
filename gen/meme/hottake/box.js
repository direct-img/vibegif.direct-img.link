// a smug takeout box smoulders, then flips its lid open and a huge flame roars out of it: HOT TAKE
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=24,delay=90,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)},bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const G={H:'000c 808c 0686',O:'2060828a6c2c0a0220',T:'0080 404c'," ":'',A:'0c0440848c 0787',K:'000c 8007 358c',E:'80000c8c 0666'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
// cartoon flame with three curling tongues standing on (x,y), w wide and h tall
const flame=(c,x,y,w,h,t,col,lw)=>{
  const f=k=>sin(t*T*2+k),a=w*.06*f(0),b=w*.05*f(2),d=w*.05*f(4),hc=h*(.92+.08*sin(t*T*3)),hs=h*(.62+.06*f(1))
  c.save();c.translate(x,y);c.beginPath();c.moveTo(-w/2,0)
  c.bezierCurveTo(-w*.56,-h*.25,-w*.6,-hs*.8,-w*.5+b,-hs);c.bezierCurveTo(-w*.34,-hs*.8,-w*.24,-hs*.72,-w*.2,-h*.5)
  c.bezierCurveTo(-w*.28,-hc*.78,-w*.08,-hc*.9,a,-hc);c.bezierCurveTo(w*.16,-hc*.84,w*.26,-hc*.7,w*.2,-h*.5)
  c.bezierCurveTo(w*.26,-hs*.72,w*.36,-hs*.8,w*.5+d,-hs);c.bezierCurveTo(w*.6,-hs*.8,w*.56,-h*.25,w/2,0)
  c.bezierCurveTo(w*.46,w*.32,-w*.46,w*.32,-w/2,0);c.closePath()
  c.fillStyle=col;c.fill();if(lw)c.lineWidth=lw,c.strokeStyle='#111',c.stroke();c.restore()}
const BX=128,TOP=124,BOT=204
export default(c,t,i)=>{
  const op=bk((t-.26)/.08)-ez(t,.8,.92),fire=ez(t,.26,.32)*(1-ez(t,.78,.9)),hop=t>.26&&t<.4?-14*sin(PI*(t-.26)/.14):0
  c.save();c.translate(0,hop)
  // fire behind the front of the box, shooting out of the top
  const fh=30+100*fire,fw=96+40*fire
  if(op>.05||fire>0){flame(c,BX,TOP+10,fw,fh,t,'#ff6b6b',6);flame(c,BX,TOP+12,fw*.74,fh*.76,t+.15,'#ff922b',0);flame(c,BX,TOP+14,fw*.46,fh*.5,t+.3,'#ffd43b',0)}
  else{for(const[d,o]of[[-1,0],[1,.5]]){const u=(t*3+o)%1;c.save();c.translate(BX+d*22+6*sin(u*T),TOP-14-36*u);c.scale(1-u*.5,1-u*.5);c.fillStyle='#dee2e6';c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.arc(0,0,9,0,T);c.fill();c.stroke();c.restore()}}
  // wire handle
  c.lineWidth=9;c.strokeStyle='#111';c.beginPath();c.moveTo(70,TOP+4);c.quadraticCurveTo(BX,TOP-118,186,TOP+4);c.stroke();c.lineWidth=4;c.strokeStyle='#ced4da';c.stroke()
  // lid flaps, hinged at the top corners, swing outward when it opens
  c.strokeStyle='#111'
  for(const d of[-1,1]){c.save();c.translate(BX+d*62,TOP);c.rotate(d*1.9*op);c.fillStyle='#f1f3f5';c.lineWidth=6;c.beginPath();c.moveTo(0,0);c.lineTo(-d*62,0);c.lineTo(-d*60,-26);c.lineTo(-d*10,-18);c.closePath();c.fill();c.stroke();c.restore()}
  // box
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(BX-64,TOP);c.lineTo(BX+64,TOP);c.lineTo(BX+46,BOT);c.lineTo(BX-46,BOT);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#e03131';c.lineWidth=5;c.beginPath();c.moveTo(BX-60,TOP+14);c.lineTo(BX+60,TOP+14);c.moveTo(BX-50,BOT-14);c.lineTo(BX+50,BOT-14);c.stroke()
  // smug face
  c.strokeStyle='#111';const by=(i>>2)%2?-3:0
  for(const d of[-1,1]){const x=BX+d*22,y=TOP+42
    c.fillStyle='#111';c.beginPath();c.arc(x+3,y+2,5.5,0,PI);c.fill()
    c.lineWidth=4.5;c.beginPath();c.moveTo(x-10,y);c.lineTo(x+10,y);c.stroke()
    c.lineWidth=4.5;c.beginPath();c.moveTo(x-10,y-12+(d>0?by:0)-(d>0?3:0));c.quadraticCurveTo(x,y-17+(d>0?by:0)-(d>0?3:0),x+10,y-12+(d>0?by:0));c.stroke()}
  c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(BX+d*36,TOP+56,7,4,0,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(BX-14,TOP+60);c.quadraticCurveTo(BX+4,TOP+68,BX+18,TOP+55);c.stroke()
  c.restore()
  txt(c,'HOT TAKE',BX,236,22,'#fff')
}

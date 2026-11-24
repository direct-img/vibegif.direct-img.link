// a girl with a plum high ponytail, coral headband and slate tank top heaves a giant stone MONOLITH up a hill, it nearly reaches the top flag then slides all the way back down, she sighs and starts pushing again
// tags: tired, anime, coding, stone, struggle, slow
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x),sg=(t,a,b)=>E((t-a)/(b-a))
// head shape centred on the origin: radius 45, chin at y=46
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
// glossy anime eye at x (f=-1 left, 1 right); op lid openness, lx/ly look, pp pupil scale, ex special shapes
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='dot'){c.moveTo(x-9,y-2);c.lineTo(x+9,y-2);c.stroke();el(c,x,y+5,2.6,3);return fs(c,O,0)}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9,11.5);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+cos(a+f)*a*.6,y+2+ly+sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){c.save();c.translate(x+lx,y+2+ly);c.beginPath();for(let k=0;k<8;k++){const r=k%2?2.6:7.5,q=k*P/4-P/2;c.lineTo(cos(q)*r,sin(q)*r)}c.closePath();fs(c,'#fff',0);c.restore();el(c,x+lx+4,y+ly+7,1.6);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
// eyes, brows (br>0 worried, <0 angry), blush and mouth: smile grin o big cat wave smug grit frown flat tongue
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,by=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    eye(c,f*20,f,o)
    c.beginPath();c.moveTo(f*12,-11-4*br+by);c.quadraticCurveTo(f*20,-15-br+by,f*28,-12+3*br+by);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(0,32);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'){const w=m=='grin'?9:6.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*1.5,0,w*1.3);c.quadraticCurveTo(-w*.6,w*1.5,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*1.25,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='big'){el(c,0,2,6,7.5);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,8,4.5,3);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='tongue'){c.moveTo(-6,-1);c.quadraticCurveTo(0,3,6,-1);c.stroke();c.beginPath();c.moveTo(1,.5);c.quadraticCurveTo(3,7,6,5);c.quadraticCurveTo(7,2,5.5,-.5);fs(c,'#ff7d96',2/mo)}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const G={H:[6,'M0 0V10M6 0V10M0 5H6'],
  I:[3,'M0 0H3M1.5 0V10M0 10H3'],
  L:[5,'M0 0V10H5'],
  M:[7,'M0 10V0L3.5 6.2L7 0V10'],
  N:[6,'M0 10V0L6 10V0'],
  O:[6.4,'E3.2 5 3.2 5'],
  T:[6,'M0 0H6M3 0V10']}
// gp traces one glyph path: M L H V Q Z as in svg (absolute, one segment per letter) plus E cx cy rx ry for a full ellipse
const gp=(c,d)=>{c.beginPath();let x=0,y=0
  for(const[,o,a]of d.matchAll(/([MLHVQEZ])([^MLHVQEZ]*)/g)){const n=a.trim()?a.trim().split(/[\s,]+/).map(Number):[]
    if(o=='M')c.moveTo(x=n[0],y=n[1]);else if(o=='L')c.lineTo(x=n[0],y=n[1]);else if(o=='H')c.lineTo(x=n[0],y);else if(o=='V')c.lineTo(x,y=n[0])
    else if(o=='Q')c.quadraticCurveTo(n[0],n[1],x=n[2],y=n[3]);else if(o=='E'){c.moveTo(n[0]+n[2],n[1]);c.ellipse(n[0],n[1],n[2],n[3],0,0,2*Math.PI)}else c.closePath()}}
// lt(c, text, x, y, h, fill, align=.5, ol=1.4, wt=1.9): x is the anchor (align 0 left, .5 center, 1 right), y the middle of the cap height,
// h the cap height in px, ol the outline thickness in px on each side (0 for none), wt the stroke weight in grid units
// returns the drawn width in px. strokes use lineCap/lineJoin round, draws all outlines before all fills so letters don't cut each other
const lt=(c,s,x,y,h,f,al=.5,ol=1.4,wt=1.9,O='#2b1d2e')=>{
  const k=h/10,gs=[...s].map(ch=>G[ch]??[2.6,'']),tr=1.5+wt*.5+2*ol/k,W=gs.reduce((q,g)=>q+g[0],0)+tr*(gs.length-1)
  c.save();c.translate(x-W*k*al,y-5*k);c.scale(k,k);c.lineCap=c.lineJoin='round'
  const ps=[];let px=0;for(const g of gs){if(g[1])ps.push([px,g[1]]);px+=g[0]+tr}
  for(const[pass,col,lw]of[[0,O,wt+2*ol/k],[1,f,wt]])if(lw>wt||pass){c.strokeStyle=col;c.lineWidth=lw;for(const[q,d]of ps){c.save();c.translate(q,0);gp(c,d);c.stroke();c.restore()}}
  c.restore();return W*k
}
// 4-point sparkle, sweat drop
const spk=(c,x,y,r,f='#fff6a8',w=2.4)=>{c.beginPath();for(let k=0;k<8;k++){const q=k*P/4,d=k%2?r*.28:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath();fs(c,f,w)}
const drop=(c,x,y,s=1,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(7,0,7,8,0,8);c.bezierCurveTo(-7,8,-7,0,0,-10);fs(c,'#a6e1ff',2.6);el(c,-2,2,1.6,2.4);fs(c,'#fff',0);c.restore()}
export const frames=24,delay=100,rim=4
const S='#5e3a24',H='#7a2e5e',Hd='#55204a',Hl='#b55a92',J='#5a7ab0',Jd='#3e5a8a',A=-.34,CA=cos(A),SA=sin(A),OX=88,OY=211
// slope point: u along the hill, h height above it
const Pt=(u,h=0)=>[OX+u*CA+h*SA,OY+u*SA-h*CA]
export default(c,t,i)=>{
  // slab position along the slope: four heaves up, teeter, slide back, sigh, reset
  let s=0,tip=0
  if(t<.56){const u=t/.56*4,k=Math.floor(u),f=u-k;s=.92*(k+E(min(1,f/.75)))/4}
  else if(t<.63){s=.92;tip=sin((t-.56)/.07*P*2)*.05}
  else if(t<.76){const u=(t-.63)/.13;s=.92*(1-u*u);tip=-.06*sin(u*P)}
  const sx=28+54*s,push=t<.63,slide=t>=.63&&t<.76,sigh=t>=.78&&t<.92,ready=t>=.92
  const lean=push||slide?.5:ready?.35:sigh?.05:.15,sh=push&&(t/.56*4)%1<.75?(i%2?1:-1):0
  // hill wedge with grass and the summit flag
  const top=Pt(160),bot=Pt(-72)
  c.beginPath();c.moveTo(14,242);c.lineTo(240,242);c.lineTo(240,top[1]);c.lineTo(top[0],top[1]);c.lineTo(bot[0],bot[1]);c.closePath();fs(c,'#b98a5e')
  c.save();c.beginPath();c.moveTo(14,242);c.lineTo(240,242);c.lineTo(240,top[1]);c.lineTo(top[0],top[1]);c.lineTo(bot[0],bot[1]);c.closePath();c.clip()
  c.beginPath();c.moveTo(bot[0],bot[1]);c.lineTo(top[0],top[1]);ln(c,14,'#7cc860');c.fillStyle='#a77a50';for(const[u,v]of[[40,26],[120,20],[90,40],[170,30],[20,44]]){const p=Pt(u,-v);el(c,p[0],p[1],5,3,A);c.fill()}c.restore()
  c.beginPath();c.moveTo(bot[0],bot[1]);c.lineTo(top[0],top[1]);c.lineTo(240,top[1]);ln(c,3.5)
  c.beginPath();c.moveTo(230,top[1]+1);c.lineTo(230,108);ln(c,3.5);c.beginPath();c.moveTo(230,108);c.lineTo(250-6,116);c.lineTo(230,124);c.closePath();fs(c,'#ff5a6a',3)
  // the monolith slab, in the slope frame
  c.save();const b0=Pt(sx);c.translate(b0[0],b0[1]);c.rotate(A+tip)
  rr(c,0,-128,66,128,5);fs(c,'#a3a9b8');pg(c,66,-128,76,-136,76,-10,66,0);fs(c,'#7d8496',3)
  pg(c,0,-128,10,-136,76,-136,66,-128);fs(c,'#c3c8d4',3)
  c.beginPath();c.moveTo(18,-128);c.lineTo(24,-108);c.lineTo(16,-94);c.moveTo(54,-30);c.lineTo(46,-18);c.lineTo(52,-6);ln(c,2.2,'#6b7284')
  c.save();c.translate(52,-60);c.rotate(P/2);rr(c,-49,-12,98,24,4);fs(c,'#555c70',2.4);lt(c,'MONOLITH',0,0,13,'#fff',.5,0,2.1);c.restore()
  el(c,14,-8,9,5);fs(c,'#7cc860',2.4)
  c.restore()
  // dust when it slides back
  if(slide||t>=.76&&t<.8){const p=sg(t,.63,.8);for(let k=0;k<3;k++){const q=Pt(sx+12+k*22,4);c.save();c.globalAlpha=.9-p*.6;el(c,q[0],q[1]-6-p*10,7+p*8,5+p*5);fs(c,'#e9dccb',2.4);c.restore()}}
  // the girl, drawn in a local frame at the point between her feet, scaled down so the slab towers over her
  const K=.82,B=Pt(sx-58+(sh?.6:0)),L2=p=>[(p[0]-B[0])/K,(p[1]-B[1])/K]
  const hip=[-4,-46],shd=[hip[0]+36*sin(lean),hip[1]-36*cos(lean)],hc=[shd[0]+44*sin(lean*.55),shd[1]-44*cos(lean*.55)+6]
  const fb=L2(Pt(sx-58-(push||slide?34:10))),ff=L2(Pt(sx-58+(push||slide?6:10)))
  const hands=push||slide?[L2(Pt(sx-1,40)),L2(Pt(sx-1,62))]:sigh?[[shd[0]+4,shd[1]+46],[shd[0]+18,shd[1]+44]]:[[shd[0]+20,shd[1]+32],[shd[0]+26,shd[1]+16]]
  c.save();c.translate(B[0],B[1]);c.scale(K,K)
  // ponytail streaming back
  c.save();c.translate(hc[0],hc[1]);c.rotate(lean*.35);const sw=sin(t*8*P)*5
  c.beginPath();c.moveTo(-14,-60);c.bezierCurveTo(-66,-84,-84,-30,-76+sw,24);c.quadraticCurveTo(-68,10,-62,20);c.quadraticCurveTo(-66,-26,-24,-40);c.closePath();fs(c,H);c.beginPath();c.moveTo(-40,-60);c.quadraticCurveTo(-70,-56,-76+sw*.5,0);ln(c,2.4,Hd);el(c,-22,-54,7,10,.7);fs(c,'#ff7a5c',3)
  c.restore()
  // legs and shoes
  for(const f of[fb,ff]){c.beginPath();c.moveTo(hip[0],hip[1]+4);c.lineTo(f[0],f[1]-6);st(c,13,S);el(c,f[0]+3,f[1]-4,10,6,A);fs(c,'#f4f4f8',3)}
  // arms reach for the slab
  for(const h of hands){c.beginPath();c.moveTo(shd[0],shd[1]+4);c.quadraticCurveTo((shd[0]+h[0])/2,(shd[1]+h[1])/2+8,h[0]-6,h[1]);st(c,11,S)}
  // shorts and tank top
  c.save();c.translate(hip[0],hip[1]);c.rotate(lean);rr(c,-17,-6,34,20,6);fs(c,'#2f3242');rr(c,-16,-40,32,40,10);fs(c,J);c.beginPath();c.moveTo(-8,-40);c.quadraticCurveTo(0,-30,8,-40);ln(c,2.6,Jd);c.restore()
  for(const h of hands){el(c,h[0]-3,h[1],8,8.5);fs(c,S,3)}
  // head
  c.save();c.translate(hc[0],hc[1]);c.rotate(lean*.2)
  hd(c,S)
  const e=['#0f5a5a','#5ee0d0']
  const fc=slide?{e,pp:.4,lx:4,ly:-2,m:'big',mo:1.1,br:1}
    :t>=.56&&t<.63?{e,lx:5,ly:-5,pp:1.1,m:'smile',br:.4}
    :sigh?{ex:'calm',m:'wave',br:.9,bl:.6}
    :ready?{e,lx:4,op:.7,m:'smug',br:-.6}
    :push?((t/.56*4)%1<.5?{ex:'shut',m:'grit',mo:1.1,br:-.8}:{e,lx:5,ly:-2,op:.65,m:'grit',br:-.8})
    :{e,ly:3,op:.6,m:'flat',br:.8}
  face(c,{...fc,bc:Hd,bl:1.4})
  c.beginPath();c.moveTo(-50,22);c.bezierCurveTo(-56,-40,-30,-64,0,-64);c.bezierCurveTo(30,-64,56,-40,50,22)
  qs(c,[50,22,44,-4,38,4,34,-14,22,-4,16,-18,4,-6,-6,-18,-16,-4,-26,-16,-36,2,-44,-6,-50,22],.2);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-22,38,P*1.22,P*1.46);ln(c,4.5,Hl)
  c.beginPath();c.moveTo(-47,-26);c.quadraticCurveTo(0,-62,47,-26);st(c,7,'#ff7a5c',3)
  c.restore()
  // sweat, sigh puff
  if(push&&t>.1)drop(c,hc[0]-50,hc[1]-10+(i%3)*3,1,-.3)
  if(push&&t>.3)drop(c,hc[0]+44,hc[1]-36+(i%2)*3,.8,.3)
  if(sigh){const p=sg(t,.78,.92);c.save();c.globalAlpha=1-p*.5;el(c,hc[0]+20+p*16,hc[1]+44+p*6,7+p*5,5+p*3);fs(c,'#eef0ff',2.4);c.restore()}
  c.restore()
}

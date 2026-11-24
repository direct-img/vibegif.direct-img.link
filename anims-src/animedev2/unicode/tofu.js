// a girl with long wavy honey-blonde hair, a big red bow and a pink sweater reads a cute chat message on her phone that glitches into □□ □□□ tofu boxes, she squints in confusion as one tofu box wobbles like jelly
// tags: confused, anime, coding, phone, chat, glitch
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,min,max,floor,round}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const ln=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
const hd=(c,s,w)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,24,-22,46,0,46);c.bezierCurveTo(22,46,47,24,45,-20);c.arc(0,-20,45,0,P,1);fs(c,s,w)}
const E=x=>x<0?0:x>1?1:x*x*(3-2*x)
const sg=(t,a,b)=>E((t-a)/(b-a))
const eye=(c,x,f,o)=>{
  const y=10,{e,op=1,lx=0,ly=0,pp=1,tl=0,ex}=o,a=x-f*12,b=x+f*13,t=y-14+(1-op)*24,lid=()=>{c.beginPath();c.moveTo(a,t+6);c.quadraticCurveTo(x,t-5+11*(1-op),b,t+4-tl)}
  c.lineWidth=3.8;c.strokeStyle=O;c.beginPath()
  if(ex=='happy'){c.moveTo(x-10,y+5);c.quadraticCurveTo(x,y-10,x+10,y+5);return c.stroke()}
  if(ex=='calm'){c.moveTo(x-10,y+1);c.quadraticCurveTo(x,y+9,x+10,y+1);return c.stroke()}
  if(ex=='shut'){c.moveTo(x-f*9,y-5);c.lineTo(x+f*7,y+2);c.lineTo(x-f*9,y+9);return c.stroke()}
  if(ex=='flat'){c.moveTo(x-10,y+3);c.lineTo(x+10,y+3);return c.stroke()}
  c.save();el(c,x,y+1,11,13);c.clip();lid();c.lineTo(b,y+20);c.lineTo(a,y+20);c.clip()
  el(c,x,y+1,11,13);fs(c,'#fff',0)
  const g=c.createLinearGradient(0,y-11,0,y+13);g.addColorStop(0,e[0]);g.addColorStop(1,e[1])
  el(c,x+lx,y+2+ly,9*pp**.3,11.5*pp**.3);fs(c,g,1.4,e[0])
  if(ex=='swirl'){c.beginPath();for(let a=0;a<14;a+=.4)c.lineTo(x+lx+Math.cos(a+f)*a*.6,y+2+ly+Math.sin(a+f)*a*.75);c.lineWidth=1.8;c.stroke()}
  else if(ex=='star'){el(c,x+lx,y+ly+1,4.4,6.2);fs(c,O,0);c.beginPath();for(let k=0;k<10;k++){const q=k%2?2.4:6.5,a=k*P/5-P/2;c.lineTo(x+lx-1+Math.cos(a)*q,y+ly-1+Math.sin(a)*q)}fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  else{el(c,x+lx,y+ly+1,4.4*pp,6.2*pp);fs(c,O,0);el(c,x+lx-3.6,y+ly-4,3.4,4.2);fs(c,'#fff',0);el(c,x+lx+3.6,y+ly+6.5,1.8);fs(c,'#fff',0)}
  c.fillStyle='rgba(43,29,46,.22)';lid();c.lineTo(b,t+12);c.lineTo(a,t+12);c.fill()
  c.restore();lid();c.lineTo(b+f*4.5,t-1-tl);c.lineWidth=4.2;c.stroke()
  c.beginPath();c.ellipse(x,y+1,11,13,0,P*.32,P*.68);c.lineWidth=1.8;c.stroke()
}
const face=(c,o)=>{
  const{m='smile',mo=1,br=0,bc=O,bl=1,fr,mx=0,my=0}=o
  for(const f of[-1,1]){
    if(bl){el(c,f*30,25,8.5,4.8);fs(c,`rgba(255,100,125,${.3*bl})`,0)}
    if(fr)for(const[u,v]of[[25,21],[31,23],[28,27],[35,20]]){el(c,f*u,v,1.2);fs(c,fr,0)}
    const q={...o,...(f<0?o.L:o.R)},b=q.br??br;eye(c,f*20,f,q)
    c.beginPath();c.moveTo(f*12,-11-4*b);c.quadraticCurveTo(f*20,-15-b,f*28,-12+3*b);c.lineWidth=2.8;c.strokeStyle=bc;c.stroke()
  }
  c.save();c.translate(mx,32+my);c.scale(mo,mo);c.beginPath();c.strokeStyle=O;c.lineWidth=2.4/mo
  if(m=='smile'||m=='grin'||m=='open'){const w=m=='open'?10:m=='grin'?9:6.5,h=m=='open'?1.8:1.5;c.moveTo(-w,-2);c.quadraticCurveTo(0,0,w,-2);c.quadraticCurveTo(w*.6,w*h,0,w*h*.87);c.quadraticCurveTo(-w*.6,w*h,-w,-2);fs(c,'#a3304a',2.2/mo);c.save();c.clip();el(c,0,w*h*.83,w*.7,w*.5);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='o'){el(c,0,1,3.6,4.6);fs(c,'#a3304a',2.2/mo)}
  else if(m=='pant'){el(c,0,2,6,7);fs(c,'#a3304a',2.2/mo);c.save();el(c,0,2,6,7);c.clip();el(c,0,8,5,4);fs(c,'#ff8c9c',0);c.restore()}
  else if(m=='cat'){c.moveTo(-7,-1);c.quadraticCurveTo(-3.5,4,0,-.5);c.quadraticCurveTo(3.5,4,7,-1);c.stroke()}
  else if(m=='wave'){c.moveTo(-8,0);for(let k=1;k<5;k++)c.quadraticCurveTo(-8+k*4-2,k%2?-3.5:3.5,-8+k*4,0);c.stroke()}
  else if(m=='smug'){c.moveTo(-6,-1);c.quadraticCurveTo(1,4,7,-3);c.stroke()}
  else if(m=='grit'){rr(c,-9,-4,18,9,3);fs(c,'#fff',2.2/mo);c.beginPath();c.moveTo(-8,.5);c.lineTo(8,.5);c.moveTo(-3,-4);c.lineTo(-3,5);c.moveTo(3,-4);c.lineTo(3,5);c.lineWidth=1.4;c.stroke()}
  else if(m=='frown'){c.moveTo(-5,2);c.quadraticCurveTo(0,-3,5,2);c.stroke()}
  else{c.moveTo(-4,0);c.lineTo(4,0);c.stroke()}
  c.restore()
}
const tx=(c,s,x,y,z,f,w=5,fn='DejaVu Sans Mono')=>{c.font=`bold ${z}px ${fn}`;c.textAlign='center';c.textBaseline='middle';if(w){c.lineWidth=w;c.strokeStyle=O;c.strokeText(s,x,y)}c.fillStyle=f;c.fillText(s,x,y)}
export const frames=28,delay=80,rim=4
const SK='#fde3d3',H='#f5c56b',Hd='#d4983a',Hl='#fff0c2',J='#ffb3c9',Jd='#e37f9f',R='#ef3b4f'
const G=['h','i',0,'♥','★','✿'],GC=['#3a2f5a','#3a2f5a',0,'#ff4f7a','#ffb31a','#ff7fc0']
export default(c,T,i)=>{
  const t=(T+.1)%1
  // message pops in, glyphs break into tofu one by one, she squints, a new message pops in to loop
  const pin=t<.1?sin(min(1,t/.08)*P*.6)/sin(P*.6)*(t<.08?1:1)-0:1,pout=1-sg(t,.9,.98),bs=t<.1?min(1.08,t/.08*1.08)-(t>.08?(t-.08)/.02*.08:0):pout
  const tf=k=>t>.24+k*.025,cf=sg(t,.3,.4)*(1-sg(t,.86,.94)),lean=cf*6,hx=80+lean*.5,hy=108
  // long wavy hair behind
  c.save();c.translate(hx,hy);c.rotate(cf*.1)
  c.beginPath();c.moveTo(-50,-14);c.bezierCurveTo(-64,30,-54,70,-62,124);qs(c,[-62,124,-44,118,-30,128,-14,120,0,128,14,120,30,128,44,118,62,124],-.3);c.bezierCurveTo(54,70,64,30,50,-14);c.closePath();fs(c,Hd)
  c.restore()
  // sweater
  c.beginPath();c.moveTo(hx-24,hy+46);c.bezierCurveTo(hx-48,hy+52,hx-54,hy+80,hx-54,206);c.lineTo(hx-56,236);c.lineTo(hx+56,236);c.lineTo(hx+54,206);c.bezierCurveTo(hx+54,hy+80,hx+48,hy+52,hx+24,hy+46);c.closePath();fs(c,J)
  c.beginPath();c.moveTo(hx-22,hy+48);c.quadraticCurveTo(hx,hy+62,hx+22,hy+48);ln(c,6,'#fff');c.beginPath();c.moveTo(hx-22,hy+48);c.quadraticCurveTo(hx,hy+62,hx+22,hy+48);ln(c,2,Jd)
  for(const x of[-30,-14,14,30]){c.beginPath();c.moveTo(hx+x,hy+90);c.lineTo(hx+x,236);ln(c,2,Jd)}
  // head, leaning toward the phone while confused
  c.save();c.translate(hx,hy);c.rotate(cf*.12)
  hd(c,SK)
  face(c,cf>.5?{e:['#1b4aa6','#86ccff'],lx:5,ly:4,m:'wave',mo:.9,mx:4,bc:Hd,bl:1,L:{op:.32,tl:-3,br:-1},R:{op:1,pp:.6,br:1.3}}
    :{e:['#1b4aa6','#86ccff'],lx:5,ly:4,op:.95,ex:t<.22&&t>.12?'happy':0,m:'smile',bc:Hd,bl:1.2})
  c.beginPath();c.moveTo(-50,26);c.bezierCurveTo(-58,-40,-32,-68,0,-68);c.bezierCurveTo(32,-68,58,-40,50,26)
  qs(c,[50,26,46,-2,38,4,32,-16,20,-2,10,-20,0,-4,-10,-22,-20,-4,-32,-18,-40,2,-46,-4,-50,26],.22);c.closePath();fs(c,H)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*48,0);c.quadraticCurveTo(f*58,24,f*48,44);c.quadraticCurveTo(f*58,62,f*50,78);c.quadraticCurveTo(f*44,60,f*42,46);c.quadraticCurveTo(f*50,24,f*40,6);c.closePath();fs(c,H)}
  c.beginPath();c.arc(0,-24,40,P*1.2,P*1.48);ln(c,5,Hl)
  // big red bow
  c.save();c.translate(22,-62);c.rotate(.25)
  for(const f of[-1,1]){c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(f*20,-22,f*30,-6);c.quadraticCurveTo(f*32,10,0,0);fs(c,R,3);c.beginPath();c.moveTo(f*6,-2);c.quadraticCurveTo(f*16,-10,f*22,-6);ln(c,2,'#b31f32')}
  el(c,0,-1,6,6);fs(c,R,3);c.restore()
  c.restore()
  // phone held in both hands
  c.save();c.translate(172,182);c.rotate(-.14)
  rr(c,-30,-50,60,100,10);fs(c,'#3a2f5a');rr(c,-24,-42,48,80,5);fs(c,'#eef4ff',2.5)
  rr(c,-20,-36,30,10,4);fs(c,'#d8d2ee',0);rr(c,-6,-22,26,10,4);fs(c,tf(0)&&cf>0?'#ffd6df':'#ff9fb6',0);rr(c,-20,-8,24,10,4);fs(c,'#d8d2ee',0)
  rr(c,-6,6,26,10,4);fs(c,'#ff9fb6',0);el(c,0,44,4);fs(c,'#5a4f7a',0)
  c.restore()
  for(const[x,y]of[[138,206],[202,200]]){c.beginPath();c.moveTo(x<170?hx-36:hx+36,hy+62);c.quadraticCurveTo(x<170?hx-30:hx+56,226,x,y+4);st(c,15,J);el(c,x,y,9.5,8.5);fs(c,SK,3.2)}
  // the chat bubble with the message (or its tofu)
  if(bs>.01){c.save();c.translate(182,46);c.scale(bs,bs)
    c.beginPath();c.roundRect(-62,-28,124,52,16);c.moveTo(-12,24);c.lineTo(-22,44);c.lineTo(4,24);fs(c,'#fff',3.5);rr(c,-62,-28,124,52,16);fs(c,'#fff',0)
    const xs=[-46,-31,0,-6,18,42];let n=0
    for(let k=0;k<6;k++){if(!G[k])continue;const x=[-44,-28,0,-2,22,46][k],y=-1
      if(tf(n)){const wob=n==3?sin(t*P*14)*sg(t,.42,.5):0,jump=n==3?-abs(sin(t*P*7))*5*sg(t,.42,.5):0
        c.save();c.translate(x,y+9+jump);c.scale(1+wob*.22,1-wob*.22);rr(c,-8,-20,16,20,2);fs(c,'#fff',2.6);c.restore()}
      else tx(c,G[k],x,y,24,GC[k],0,'DejaVu Sans')
      n++}
    if(t>.24&&t<.32&&i%2){c.fillStyle='rgba(120,220,255,.6)';c.fillRect(-60,-6+(i%4)*4,120,4)}
    c.restore()}
  // question marks floating up while confused
  if(cf>.05)for(let k=0;k<2;k++){const p=(t*2+k*.5)%1;c.globalAlpha=cf*min(1,(1-p)*3);tx(c,'?',hx-54+k*20+sin(p*6)*3,hy-40-p*24-k*6,26+k*4,'#4aa8ff',5.5,'DejaVu Sans');c.globalAlpha=1}
}

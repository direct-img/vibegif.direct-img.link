// silver-haired captain girl steering a blue seven-spoke helm wheel through rolling waves, hair streaming in the wind
export const frames=11,delay=100,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#1c1a26',sk='#ffe9e0',ss='#f2c6b8',hr='#e6e9f2',hs='#aab2c8',hl='#ffffff',nv='#24345e',nd='#16213f',gd='#f2c14e'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  c.strokeStyle=K
  // the sea: an oval swell with a rolling top
  const sea=(cy,ry,a,ph,f)=>{B();for(let x=12;x<=244;x+=4){const e=Math.sqrt(Math.max(0,1-((x-128)/116)**2));L(x,cy-e*(ry+a*S(x/52*2*P+ph)))}c.ellipse(128,cy,116,ry*.55,0,0,P);c.closePath();F(f,3.5)}
  sea(204,30,4,-T,'#5aa8f0')
  for(let k=0;k<3;k++){const x=52+k*76+((t*76)%76)-38;c.globalAlpha=Math.max(0,Math.min(1,(100-Math.abs(x-128))/24));B();M(x-12,190);Q(x,182,x+12,190);W(3,'#e6f4ff')}c.globalAlpha=1
  // gusts
  for(let k=0;k<2;k++){const p=(t+k/2)%1,x=20+p*200,y=36+k*40;c.globalAlpha=S(p*P);B();M(x,y);Q(x+16,y-6,x+34,y);W(3,'#bcd7ff');c.globalAlpha=1}
  // hair streaming in the wind, behind everything else of her
  const hx=116,hy=78
  for(const[k,y0,w,len]of[[0,-34,26,104],[1,-10,30,118],[2,14,24,96]]){const ph=T*2-k*1.1,pt=q=>[hx+q*len,hy+y0+q*10+S(ph-q*5)*q*12]
    B();for(let j=0;j<=12;j++){const[x,y]=pt(j/12);L(x,y-(1-j/12)**.8*w/2)}for(let j=12;j>=0;j--){const[x,y]=pt(j/12);L(x,y+(1-j/12)**.8*w/2)}c.closePath();F(k==1?hs:hr,3)
    B();for(let j=1;j<=8;j++){const[x,y]=pt(j/12);j>1?L(x,y-2):M(x,y-2)}W(2.5,k==1?'#d4d9e6':'#fff')}
  // body: navy captain coat
  const tor=()=>{B();M(92,124);Q(116,116,140,124);Q(152,130,152,160);L(154,212);L(78,212);L(80,160);Q(80,130,92,124)}
  tor();F(nv);tor();W(3.5)
  B();M(104,122);L(116,146);L(128,122);c.closePath();F('#fff',2.5);B();M(113,124);L(116,136);L(119,124);c.closePath();F('#e2483d',0)
  for(const y of[154,172,190])for(const x of[102,130]){E(x,y,3);F(gd,1.5)}
  for(const s of[-1,1]){B();c.roundRect(116+s*30-11,118,22,8,3);F(gd,2.5);for(let k=-2;k<=2;k++){B();M(116+s*30+k*4,126);L(116+s*30+k*4,132);W(2,gd)}}
  // head
  c.save();c.translate(hx,hy)
  const face=()=>{B();M(-42,-6);Z(-42,24,-22,38,0,39);Z(22,38,42,24,42,-6);c.arc(0,-6,42,0,P,true)}
  B();M(-46,24);Z(-58,-50,58,-50,46,24);L(30,30);L(-30,30);c.closePath();F(hs)
  face();F(sk)
  const bang=()=>{B();M(-46,22);Z(-50,-44,50,-44,46,14);Q(40,-2,34,-6);Q(30,2,26,8);Q(22,-10,12,-2);Q(8,-14,-2,0);Q(-8,-12,-16,2);Q(-24,-10,-32,4);Q(-38,-4,-40,-6);Q(-42,8,-46,22)}
  c.save();face();c.clip();c.translate(3,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  B();M(-20,-30);Q(-10,-34,0,-30);M(10,-32);Q(20,-34,28,-28);W(3,'#fff')
  B();M(-30,-12);Q(-34,4,-30,14);M(24,-16);Q(30,0,34,8);W(2,hs)
  // captain hat with a wheel badge
  c.save();c.translate(0,-34);c.rotate(-.12)
  B();M(-40,4);Q(-44,-22,-6,-26);Q(40,-28,44,0);Q(0,-6,-40,4);F('#fff')
  B();M(-40,4);Q(0,-8,44,0);L(42,10);Q(0,4,-38,12);c.closePath();F(nv,3)
  B();M(-42,10);Q(0,4,46,8);Q(40,18,-36,18);c.closePath();F(nd,3)
  E(2,2,7);F(gd,2);for(let k=0;k<7;k++){const a=k*2*P/7;B();M(2,2);L(2+C(a)*5,2+S(a)*5);W(1.5,nv)}
  c.restore()
  // confident eyes and grin
  for(const s of[-1,1]){const x=s*18
    E(x,14,9.5,11.5);F('#fff',0);E(x+1,15,7,9.5);F('#e0405a',0);B();c.ellipse(x+1,15,7,9.5,0,P,2*P);F('#9a1c33',0)
    E(x+1,15,3,4.5);F('#3a0812',0);E(x-1.5,11,2.6,3);F('#fff',0);E(x+3.5,19,1.3);F('#fff',0)
    B();M(x-10*s,8);Q(x,0,x+11*s,7);L(x+14*s,3);W(3.5)
    B();M(x-6*s,-5+(s>0?-3:0));Q(x+2*s,-9+(s>0?-3:0),x+11*s,-6+(s>0?-3:0));W(3,'#7a8099')
    E(s*28,25,6,3);c.fillStyle='rgba(255,110,130,.35)';c.fill()}
  B();M(-10,27);Q(0,31,12,25);Q(8,36,0,36);Q(-7,35,-10,27);F('#7a2030',2.5);B();M(-8,28);Q(1,31,10,26.5);L(9,29);Q(1,32.5,-7,30);c.closePath();F('#fff',0)
  c.restore()
  // the helm: seven spokes, turned back and forth
  const wx=122,wy=178,r=S(T)*.5-.1
  const hand=a=>[wx+C(a+r)*44,wy+S(a+r)*44]
  for(let k=0;k<7;k++){const a=r+k*2*P/7-P/2;B();M(wx+C(a)*14,wy+S(a)*14);L(wx+C(a)*54,wy+S(a)*54);W(10);W(5,'#9fbaf0');E(wx+C(a)*57,wy+S(a)*57,6);F('#326ce5',3)}
  E(wx,wy,44);W(13);E(wx,wy,44);W(7,'#326ce5')
  B();for(let k=0;k<7;k++){const a=r+k*2*P/7-P/2;L(wx+C(a)*17,wy+S(a)*17)}c.closePath();F('#326ce5',3);E(wx,wy,7);F('#fff',2.5)
  // hands gripping the rim, arms from the shoulders
  for(const[sx,a]of[[94,-2.5],[138,-.64]]){const[x,y]=hand(a);B();M(sx,132);Q((sx+x)/2+(sx<116?-10:10),(132+y)/2,x,y);W(15);W(9,nv);E(x,y,7.5);F(sk,3)}
  // wooden hull, bow to the left
  B();M(14,196);Q(70,206,128,204);Q(200,202,240,192);L(232,226);Q(128,242,40,232);Q(22,218,14,196);F('#b07a4e')
  B();M(14,196);Q(70,206,128,204);Q(200,202,240,192);L(238,201);Q(200,212,128,214);Q(66,216,18,206);c.closePath();F('#d9a066',3)
  for(const x of[60,128,196]){E(x,222,4);F('#7a4e30',2)}
  // front spray at the bow
  for(let k=0;k<4;k++){const p=(t+k/4)%1,s=k%2?1:-1,x=128+s*(84+p*28),y=226-S(p*P)*30;c.globalAlpha=Math.min(1,p*6,(1-p)*5);E(x,y,4-p*2);F('#d6f0ff',2);c.globalAlpha=1}
  sea(240,12,3,T*2,'#4cb4ff')
}

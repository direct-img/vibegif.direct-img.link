// a pale girl with long silver hair and a white top screams KILL THE CACHE! while pounding her keyboard with both fists nonstop, keycaps flying off and her hair whipping
// tags: angry, anime, coding, keyboard, rage, fast
// ---
const P=Math.PI,O='#2b1d2e',{sin,cos,abs,max}=Math
const el=(c,x,y,a,b=a,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,2*P)}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pg=(c,...p)=>{c.beginPath();for(let j=0;j<p.length;j+=2)c.lineTo(p[j],p[j+1]);c.closePath()}
const fs=(c,f,w=3.5,s=O)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.strokeStyle=s;c.stroke()}}
const sk=(c,w,s=O)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const st=(c,w,f,o=3.5)=>{c.strokeStyle=O;c.lineWidth=w+2*o;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()}
const qs=(c,p,k=.15)=>{c.lineTo(p[0],p[1]);for(let j=2;j<p.length;j+=2){const x=p[j-2],y=p[j-1],X=p[j],Y=p[j+1];c.quadraticCurveTo((x+X)/2+k*(Y-y),(y+Y)/2-k*(X-x),X,Y)}}
// head centred on the eyes' row, jaw dropped a little for the yell
const hd=(c,f,w=3.5)=>{c.beginPath();c.moveTo(-45,-20);c.bezierCurveTo(-47,26,-22,50,0,50);c.bezierCurveTo(22,50,47,26,45,-20);c.arc(0,-20,45,0,P,1);fs(c,f,w)}
const vein=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();for(let k=0;k<4;k++){const a=k*P/2+P/4;c.moveTo(cos(a)*3+cos(a-P/4)*4,sin(a)*3+sin(a-P/4)*4);c.quadraticCurveTo(cos(a)*3,sin(a)*3,cos(a)*3+cos(a+P/4)*4,sin(a)*3+sin(a+P/4)*4)}
  c.lineWidth=5.5;c.strokeStyle=O;c.stroke();c.lineWidth=2.6;c.strokeStyle='#ff3b4e';c.stroke();c.restore()}
// hand-lettered text: glyphs are centerline paths on a grid with cap height 10 (baseline 10), stroked thick with round caps
const G={" ":[2.6,''],"!":[1,'M0.5 0V6.4M0.5 9.7V9.8'],
  A:[6,'M0 10L3 0L6 10M1.2 6.6H4.8'],
  C:[5.8,'M5.8 1.6Q4.7 0 3.1 0Q0 0 0 5Q0 10 3.1 10Q4.7 10 5.8 8.4'],
  E:[5.2,'M5.2 0H0V10H5.2M0 4.9H4.2'],
  H:[6,'M0 0V10M6 0V10M0 5H6'],
  I:[3,'M0 0H3M1.5 0V10M0 10H3'],
  K:[5.8,'M0 0V10M5.6 0L0 6.2M2 4.1L5.8 10'],
  L:[5,'M0 0V10H5'],
  T:[6,'M0 0H6M3 0V10']}
// gp traces one glyph path: M L H V Q Z as in svg (absolute, one segment per letter) plus E cx cy rx ry for a full ellipse
const gp=(c,d)=>{c.beginPath();let x=0,y=0
  for(const[,o,a]of d.matchAll(/([MLHVQEZ])([^MLHVQEZ]*)/g)){const n=a.trim()?a.trim().split(/[\s,]+/).map(Number):[]
    if(o=='M')c.moveTo(x=n[0],y=n[1]);else if(o=='L')c.lineTo(x=n[0],y=n[1]);else if(o=='H')c.lineTo(x=n[0],y);else if(o=='V')c.lineTo(x,y=n[0])
    else if(o=='Q')c.quadraticCurveTo(n[0],n[1],x=n[2],y=n[3]);else if(o=='E'){c.moveTo(n[0]+n[2],n[1]);c.ellipse(n[0],n[1],n[2],n[3],0,0,2*Math.PI)}else c.closePath()}}
// lt(c, text, x, y, h, fill, align=.5, ol=1.4, wt=1.9): x anchor, y middle of the cap height, h cap height px, ol outline px, wt stroke weight
const lt=(c,s,x,y,h,f,al=.5,ol=1.4,wt=1.9,O='#2b1d2e')=>{
  const k=h/10,gs=[...s].map(ch=>G[ch]??[2.6,'']),tr=1.5+wt*.5+2*ol/k,W=gs.reduce((q,g)=>q+g[0],0)+tr*(gs.length-1)
  c.save();c.translate(x-W*k*al,y-5*k);c.scale(k,k);c.lineCap=c.lineJoin='round'
  const ps=[];let px=0;for(const g of gs){if(g[1])ps.push([px,g[1]]);px+=g[0]+tr}
  for(const[pass,col,lw]of[[0,O,wt+2*ol/k],[1,f,wt]])if(lw>wt||pass){c.strokeStyle=col;c.lineWidth=lw;for(const[q,d]of ps){c.save();c.translate(q,0);gp(c,d);c.stroke();c.restore()}}
  c.restore();return W*k
}
const SK='#fde9e0',SKd='#f0c6b8',H='#dadeee',Hd='#9da4c2',Hl='#ffffff',W='#fdfdff',Wd='#d5d9ec',EY=['#8c0d2b','#ff5c76'],KB='#3d4260',KC='#eef0f8',
  GX=128,GY=124,HS=.88
// fists: down on the keys / raised high, L then R; shoulders
const D=[[92,207],[164,207]],U=[[44,128],[212,128]],SH=[[100,188],[156,188]]
// flying keycaps: spawn frame, side, vx, vy, spin, colour
const K=[[0,0,-10,-22,.6,'#ff8fb1'],[0,0,-6,-27,-.8,KC],[2,1,10,-21,-.6,'#8fe3d0'],[2,1,6,-27,.9,KC],[4,0,-12,-17,-.5,'#ffd36b'],[4,0,-7,-25,.7,KC],
  [6,1,12,-18,.5,'#ff8fb1'],[6,1,7,-25,-.7,KC],[8,0,-9,-24,.8,'#8fe3d0'],[8,0,-13,-20,-.6,KC],[10,1,9,-24,-.8,'#ffd36b'],[10,1,13,-20,.6,KC]]
export const frames=12,delay=55,rim=4
export default(c,t,i)=>{
  // p: 0 left fist slams, 2 right fist slams, 1/3 swapping; head sways with the slams, hair trails a quarter beat behind
  const p=i%4,hit=p==0?0:p==2?1:-1,a=i*P/2,hr=-.12*cos(a),hx=-5*cos(a),hy=hit>=0?2:0,w=-26*sin(a)+8*cos(a),
    uu=[[0,.8,1,.45][p],[1,.45,0,.8][p]],F=uu.map((u,s)=>[D[s][0]+(U[s][0]-D[s][0])*u+(s?16:-16)*sin(P*u)*(u>.5),D[s][1]+(U[s][1]-D[s][1])*u])
  // ---- back hair: long silver mass, locks whipping out to the sides
  c.save();c.translate(GX+hx,GY+hy);c.rotate(hr);c.scale(HS,HS)
  c.beginPath();c.moveTo(-47,-20)
  qs(c,[-47,-20,-60+w*.3,8,-82+w*1.2,28,-62+w*.6,36,-88+w*1.4,62,-60+w*.7,64,-72+w,94,-40,84,0,94,40,84,72+w,94,60+w*.7,64,88+w*1.4,62,62+w*.6,36,82+w*1.2,28,60+w*.3,8,47,-20],.1)
  c.arc(0,-20,47,0,P,1);c.closePath();fs(c,Hd)
  c.restore()
  // ---- torso: white top
  const by=hy*.5
  c.beginPath();c.moveTo(GX-14,170+by);c.bezierCurveTo(GX-44,174+by,GX-54,188,GX-56,210);c.lineTo(GX-58,240);c.lineTo(GX+58,240);c.lineTo(GX+56,210);c.bezierCurveTo(GX+54,188,GX+44,174+by,GX+14,170+by);c.closePath();fs(c,W)
  rr(c,GX-9,156+by,18,20,5);fs(c,SKd,3)
  c.beginPath();c.moveTo(GX-16,171+by);c.quadraticCurveTo(GX,190+by,GX+16,171+by);fs(c,SKd,0);c.beginPath();c.moveTo(GX-17,170+by);c.quadraticCurveTo(GX,192+by,GX+17,170+by);sk(c,3.2)
  // ---- keyboard jolts toward the slammed side
  c.save();if(hit>=0){c.translate(GX,219);c.rotate(hit?.03:-.03);c.translate(-GX,-217)}
  pg(c,46,199,210,199,226,231,30,231);fs(c,KB);pg(c,30,231,226,231,224,239,32,239);fs(c,'#262a40',3)
  for(let r=0;r<3;r++){const y=203+r*8.6,q=(y-199)/32,l=46-16*q+4,R=210+16*q-4,n=11,kw=(R-l)/n
    for(let k=0;k<n;k++){const x=l+k*kw,gone=(r==1&&k==2)||(r==2&&k==8)||(r==0&&k==6)
      rr(c,x+1,y,kw-2.5,6.6,1.8);fs(c,gone?'#1c1f30':r==2&&k>2&&k<8?'#c9cee2':(r==0&&k==0)?'#ff6b7f':KC,1.5)}}
  c.restore()
  // ---- impact burst under the slamming fist
  if(hit>=0){const[x,y]=D[hit],s=hit?1:-1
    c.beginPath();for(let k=0;k<16;k++){const q=k*P/8+i*.3,d=k%2?15:30+(k*7+i)%3*4;c.lineTo(x+cos(q)*d,y+2+sin(q)*d*.7)}c.closePath();fs(c,'#fff27a',3)
    c.beginPath();for(const q of[-2.6,-2.1,-1.6]){const qq=s>0?-P-q:q;c.moveTo(x+cos(qq)*32,y+sin(qq)*26);c.lineTo(x+cos(qq)*45,y+sin(qq)*36)}sk(c,3.4)}
  // ---- arms: white sleeves, big fists, speed lines while swapping
  for(const s of[0,1]){const[x,y]=F[s],[sx,sy]=SH[s],f=s?1:-1,u=uu[s],ex=sx+f*(26+12*u),ey=max(sy,y)+16-6*u
    c.beginPath();c.moveTo(sx,sy+by);c.quadraticCurveTo(ex,ey,x,y);st(c,17,W)
    const an=Math.atan2(y-ey,x-ex),cx=x-cos(an)*10,cy=y-sin(an)*10;c.beginPath();c.moveTo(cx-sin(an)*8.5,cy+cos(an)*8.5);c.lineTo(cx+sin(an)*8.5,cy-cos(an)*8.5);sk(c,3,Wd)
    el(c,x,y,13.5,12,an);fs(c,SK,3.4)
    c.save();c.translate(x,y);c.rotate(an-P/2);c.beginPath();for(const v of[-5,0,5]){c.moveTo(v,5);c.lineTo(v,10.5)}sk(c,2.3);c.restore()
    if(u%1){c.beginPath();const up=u>.5;for(const k of[-1,1]){c.moveTo(x+k*7,y+(up?16:-16));c.lineTo(x+k*7,y+(up?32:-32))}sk(c,3)}}
  // ---- head
  c.save();c.translate(GX+hx,GY+hy);c.rotate(hr);c.scale(HS,HS)
  hd(c,SK)
  // furious eyes: lids slanting down to the nose, tiny pupils
  for(const f of[-1,1]){const x=f*20,y=10
    el(c,f*31,28,8,4.5);fs(c,'rgba(255,70,95,.38)',0)
    c.save();el(c,x,y+2,11,12);c.clip();pg(c,x-f*16,y-1,x+f*16,y-12,x+f*16,y+20,x-f*16,y+20);c.clip()
    el(c,x,y+2,11,12);fs(c,'#fff',0)
    const g=c.createLinearGradient(0,y-8,0,y+14);g.addColorStop(0,EY[0]);g.addColorStop(1,EY[1])
    el(c,x-f*2,y+4,8.5,10);fs(c,g,1.4,EY[0]);el(c,x-f*2,y+5,2.8,4.2);fs(c,O,0);el(c,x-f*2-3,y,2.6,3.2);fs(c,'#fff',0)
    c.restore()
    c.beginPath();c.moveTo(x-f*12,y);c.quadraticCurveTo(x,y-4,x+f*15,y-12);sk(c,4.5)
    c.beginPath();c.ellipse(x,y+2,11,12,0,P*.3,P*.7);sk(c,1.8)}
  // the yell
  c.save();c.translate(0,22);c.scale(1+.06*(hit>=0),1+.1*(hit>=0))
  c.beginPath();c.moveTo(-13,0);c.quadraticCurveTo(0,-4,13,0);c.quadraticCurveTo(14,22,0,23);c.quadraticCurveTo(-14,22,-13,0);fs(c,'#8e1f3a',2.6)
  c.save();c.clip();rr(c,-14,-5,28,7.5,2);fs(c,'#fff',0);el(c,0,23,8,6);fs(c,'#ff8c9c',0);c.restore()
  c.restore()
  // bangs: spiky silver fringe, side locks whipping
  c.beginPath();c.moveTo(-50,20);c.bezierCurveTo(-58,-46,-32,-70,0,-70);c.bezierCurveTo(32,-70,58,-46,50,20)
  qs(c,[50,20,44,-12,38,2,30,-18,20,-2,12,-22,2,-4,-8,-22,-18,-2,-28,-18,-38,2,-44,-12,-50,20],.18);c.closePath();fs(c,H)
  c.beginPath();c.arc(0,-26,40,P*1.18,P*1.46);sk(c,5,Hl);c.beginPath();c.arc(0,-26,40,P*1.6,P*1.7);sk(c,5,Hl)
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*44,-14);c.quadraticCurveTo(f*54+w*.3,24,f*50+w*1.1,66);c.quadraticCurveTo(f*42+w*.4,30,f*36,4);c.closePath();fs(c,H,3.2)}
  // angry brows over the fringe
  for(const f of[-1,1]){c.beginPath();c.moveTo(f*8,-2);c.quadraticCurveTo(f*18,-6,f*32,-16);c.lineCap='round';sk(c,5)}
  vein(c,36,-40,hit>=0?1.3:1)
  c.restore()
  // ---- keycaps popping off
  for(const[s0,s,vx,vy,sp,col]of K){const g=(i-s0+frames)%frames;if(g<1||g>5)continue
    const x=D[s][0]+vx*g,y=D[s][1]-6+vy*g+3*g*g
    c.save();c.translate(x,y);c.rotate(sp*g);rr(c,-8,-7,16,14,3);fs(c,col,2.8);rr(c,-5,-5,10,7.5,2);fs(c,'rgba(255,255,255,.55)',0);c.restore()}
  // ---- jagged shout bubble with shaking lettering
  const jx=[2,-2,1,-1][i%4]*1.5,jy=[-1,1,1,-1][(i+1)%4],bx=128+jx,bY=46+jy,se=(v,e=.67)=>Math.sign(v)*abs(v)**e
  c.beginPath();for(let k=0;k<44;k++){const q=k*P/22+.07,o=k%2==0,v=o?1-((k*5+i*3)%4)*.03:1
    c.lineTo(bx+se(cos(q))*(o?108:94)*v,bY+se(sin(q))*(o?35:29.5)*v)}c.closePath();fs(c,'#fff',3.5)
  lt(c,'KILL THE',bx-jx*.6,bY-11.5+jy,14,'#ff2d4b',.5,1.4,2.3)
  lt(c,'CACHE!',bx+jx*.6,bY+11-jy,21,'#ff2d4b',.5,1.5,2.4)
}

// small gray robot standing in a puddle in the rain, getting wet and smiling while it holds a yellow umbrella out over a little orange kitten to keep it dry, raindrops splashing
export const frames=24,delay=70
const P=Math.PI,{sin,cos,min}=Math
let s=7
const rnd=()=>(s=s*16807%2147483647)/2147483647
const N=46,drops=[...Array(N)].map(()=>({x:4+rnd()*248,p:rnd(),g:212+rnd()*30}))
const A=.12,R=64,D=36,HX=136,HY=150,PX=62,PY=226
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const pl=(c,a)=>{c.beginPath();a.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y))}
export default(c,t,i)=>{
  const a=A+.035*sin(2*P*t),ax=HX+92*sin(a),ay=HY-92*cos(a)
  const W=([x,y])=>[ax+x*cos(a)-y*sin(a),ay+x*sin(a)+y*cos(a)]
  const sil=[];for(let k=0;k<=24;k++){const f=-P/2+P*k/24;sil.push(W([R*sin(f),D*(1-cos(f))]))}
  const top=x=>{for(let k=0;k<24;k++){const[x0,y0]=sil[k],[x1,y1]=sil[k+1];if(x>=x0&&x<=x1)return y0+(y1-y0)*(x-x0)/(x1-x0)}return 1e9}
  const head=x=>x>PX-26&&x<PX+32?104:1e9
  // puddle
  c.lineWidth=4;c.beginPath();c.ellipse(PX+6,PY,58,13,0,0,2*P);c.fillStyle='#9cc6ec';c.fill();c.stroke()
  c.strokeStyle='#d9ecfc';c.lineWidth=2.5;c.beginPath();c.ellipse(PX-16,PY+3,20,4,0,.2*P,.8*P);c.stroke()
  const sp=[],rain='#5d9bd8'
  for(const d of drops){
    const y=-20+((t*2+d.p)%1)*290,st=min(top(d.x),head(d.x),d.g)
    c.strokeStyle=rain;c.lineWidth=2.5
    if(y-16<st){c.beginPath();c.moveTo(d.x,y-16);c.lineTo(d.x,min(y,st));c.stroke()}
    const u=(y-st)/60
    if(u>=0&&u<1)sp.push([d.x,st,u,st==d.g&&(d.x-PX-6)**2/58**2+(st-PY)**2/13**2<1])
  }
  for(const[x,y,u,w]of sp)if(w){c.strokeStyle='#e8f4ff';c.lineWidth=2;c.beginPath();c.ellipse(x,y,3+12*u,(3+12*u)*.3,0,0,2*P);c.stroke()}
  // kitten
  const kx=182,ky=224,tw=sin(2*P*t)
  c.strokeStyle='#111';c.lineWidth=5
  c.beginPath();c.moveTo(kx+14,ky-6);c.bezierCurveTo(kx+34,ky-4,kx+30+6*tw,ky-30,kx+22+9*tw,ky-40);c.stroke()
  c.strokeStyle='#f39b4f';c.lineWidth=2;c.stroke();c.strokeStyle='#111';c.lineWidth=4.5
  c.beginPath();c.ellipse(kx+2,ky-18,18,19,0,0,2*P);c.fillStyle='#f6a55d';c.fill();c.stroke()
  c.fillStyle='#fff1df';c.beginPath();c.ellipse(kx-8,ky-14,8,11,0,0,2*P);c.fill()
  c.strokeStyle='#d4732f';c.lineWidth=3;for(const k of[0,1,2]){c.beginPath();c.arc(kx+6,ky-18,10+k*5,-.25*P,.05*P);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=4
  for(const k of[-10,-1]){rr(c,kx+k-4,ky-12,9,13,4);c.fillStyle='#f6a55d';c.fill();c.stroke()}
  const hx=kx-12,hy=ky-44
  for(const k of[-1,1]){pl(c,[[hx+k*13-2,hy-6],[hx+k*12+(k<0?-4:2),hy-21-(k<0&&i%12<2?-3:0)],[hx+k*3,hy-12]]);c.closePath();c.fillStyle='#f6a55d';c.fill();c.stroke()}
  c.beginPath();c.ellipse(hx,hy,16,14,0,0,2*P);c.fill();c.stroke()
  c.fillStyle='#d4732f';c.fillRect(hx-3,hy-13,2.5,6);c.fillRect(hx+2,hy-13,2.5,5)
  const kb=i>=15&&i<17
  c.fillStyle='#111'
  for(const k of[-1,1]){if(kb){c.lineWidth=2.5;c.beginPath();c.moveTo(hx+k*6-3.5,hy);c.lineTo(hx+k*6+3.5,hy);c.stroke()}
    else{c.beginPath();c.ellipse(hx+k*6-1,hy-1,3.6,4.6,0,0,2*P);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(hx+k*6-2.5,hy-3,1.5,0,2*P);c.fill();c.fillStyle='#111'}}
  c.fillStyle='#ff8fa3';c.beginPath();c.moveTo(hx-3,hy+5);c.lineTo(hx+1,hy+5);c.lineTo(hx-1,hy+7.5);c.fill()
  c.lineWidth=1.8;c.beginPath();c.arc(hx-3,hy+8,2,0,P);c.arc(hx+1,hy+8,2,0,P);c.stroke()
  // robot legs and body
  c.lineWidth=5;c.fillStyle='#c6ced8'
  for(const k of[-11,11]){rr(c,PX+k-6,198,12,22,4);c.fill();c.stroke()}
  for(const k of[-11,11]){c.beginPath();c.ellipse(PX+k+(k>0?2:-2),222,11,6,0,P,2*P);c.closePath();c.fillStyle='#7c8794';c.fill();c.stroke()}
  // arms
  const arm=(p)=>{c.strokeStyle='#111';c.lineWidth=13;pl(c,p);c.stroke();c.strokeStyle='#c6ced8';c.lineWidth=6;c.stroke();c.strokeStyle='#111'}
  arm([[PX-24,172],[PX-31,190],[PX-29,204]])
  rr(c,PX-27,156,54,46,12);c.lineWidth=5;c.fillStyle='#e3e8ee';c.fill()
  c.save();c.clip();c.fillStyle='#c6ced8';c.fillRect(PX+14,150,20,60);c.restore();c.stroke()
  rr(c,PX-12,168,24,16,4);c.fillStyle='#3b4652';c.fill();c.stroke()
  c.fillStyle=['#7ff0a0','#ffd447','#ff7a7a'][i>>3];for(let k=0;k<3;k++){c.beginPath();c.arc(PX-6+k*6,176,2,0,2*P);c.globalAlpha=k==(i>>1)%3?1:.35;c.fill()}c.globalAlpha=1
  c.beginPath();c.arc(PX-29,206,5,0,2*P);c.fillStyle='#7c8794';c.fill();c.stroke()
  // umbrella shaft and handle
  const bx=HX-14*sin(a),by=HY+14*cos(a)
  c.lineWidth=7;c.beginPath();c.moveTo(ax,ay);c.lineTo(bx,by);c.arc(bx-7,by,7,0,P*.95);c.stroke()
  c.lineWidth=3;c.strokeStyle='#8a5a32';c.stroke();c.strokeStyle='#111'
  arm([[PX+22,174],[PX+44,170],[HX-6,HY+3]])
  rr(c,HX-7,HY-6,14,13,5);c.fillStyle='#7c8794';c.lineWidth=4.5;c.fill();c.stroke()
  // head
  c.lineWidth=5;c.beginPath();c.moveTo(PX,104);c.lineTo(PX+3,88);c.stroke()
  c.beginPath();c.arc(PX+3,86,5.5,0,2*P);c.fillStyle='#ff6b6b';c.fill();c.stroke()
  for(const k of[-1,1]){rr(c,PX+k*31-5,118,10,20,4);c.fillStyle='#7c8794';c.fill();c.stroke()}
  rr(c,PX-29,104,58,50,16);c.fillStyle='#e3e8ee';c.fill()
  c.save();c.clip();c.fillStyle='#c6ced8';c.fillRect(PX+16,100,20,60);c.fillStyle='#fff';c.fillRect(PX-22,108,26,3.5);c.restore();c.stroke()
  rr(c,PX-21,115,42,29,10);c.fillStyle='#24303a';c.fill();c.lineWidth=4;c.stroke()
  c.strokeStyle='#7ff0ff';c.lineWidth=3.5
  const ex=PX+3
  if(i>=6&&i<8)for(const k of[-1,1]){c.beginPath();c.moveTo(ex+k*9-4,127);c.lineTo(ex+k*9+4,127);c.stroke()}
  else for(const k of[-1,1]){c.beginPath();c.arc(ex+k*9,129,4.5,1.15*P,1.85*P);c.stroke()}
  c.beginPath();c.arc(ex,132,5,.2*P,.8*P);c.stroke()
  // water beads running down the head
  c.fillStyle='#a9d4fb';c.strokeStyle='#111';c.lineWidth=1.5
  for(const[x,o]of[[PX-25,0],[PX+24,.5]]){const v=(t+o)%1;c.beginPath();c.ellipse(x,108+v*40,2.2,3,0,0,2*P);c.fill();c.stroke()}
  // canopy
  const rib=cc=>[...Array(11)].map((_,k)=>W([R*cc*sin(P/2*k/10),D*(1-cos(P/2*k/10))]))
  const cs=[-1,-.707,0,.707,1],rb=cs.map(rib)
  for(let k=0;k<4;k++){
    const[x0,y0]=rb[k][10],[x1,y1]=rb[k+1][10],m=W([R*(cs[k]+cs[k+1])/2,D-7])
    c.beginPath();rb[k].forEach(([x,y],j)=>j?c.lineTo(x,y):c.moveTo(x,y));c.quadraticCurveTo(m[0],m[1],x1,y1)
    for(let j=10;j>=0;j--)c.lineTo(...rb[k+1][j])
    c.fillStyle=k%2?'#f5ad1b':'#ffd447';c.fill();c.lineWidth=4;c.stroke()
  }
  c.lineWidth=5.5;pl(c,sil);c.stroke()
  for(const k of[0,4]){const[x,y]=rb[k][10];c.beginPath();c.arc(x,y,3,0,2*P);c.fillStyle='#111';c.fill()}
  const[tx,ty]=W([0,-9]);c.lineWidth=6;c.beginPath();c.moveTo(ax,ay);c.lineTo(tx,ty);c.stroke()
  // drips from the rim tips
  c.lineWidth=2
  for(const[k,o,gy]of[[0,0,104],[4,.5,224]]){
    const[x,y]=rb[k][10],v=(t+o)%1
    c.fillStyle='#a9d4fb'
    if(v<.4){const r=1+v*5;c.beginPath();c.ellipse(x,y+3+r,r*.8,r,0,0,2*P);c.fill();c.stroke()}
    else{const yy=y+5+(v-.4)**2*1200;if(yy<gy){c.beginPath();c.ellipse(x,yy,2.6,3.6,0,0,2*P);c.fill();c.stroke()}else sp.push([x,gy,min(.99,(yy-gy)/90),0])}
  }
  // splashes
  c.fillStyle=rain
  for(const[x,y,u,w]of sp)if(!w&&u<.5){const h=sin(P*u/.5)*6;for(const k of[-1,1]){c.beginPath();c.arc(x+k*(2+8*u),y-h,1.7,0,2*P);c.fill()}}
}

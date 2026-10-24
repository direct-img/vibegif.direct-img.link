// a panicked little guy sprints for his life while a giant red line spelling DEADLINE closes in behind him, calendar pages flying past
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=15,delay=65,rim=3
const BG='#fff3bf',GR='#ffe066',RED='#f03e3e',SH='#4dabf7',PA='#495057',SKIN='#ffd3b0',HAIR='#5c3d2e'
const G={D:[[[0,0],[0,6],[2,6],[3.4,5],[4,3],[3.4,1],[2,0],[0,0]]],E:[[[4,0],[0,0],[0,6],[4,6]],[[0,3],[3,3]]],A:[[[0,6],[2,0],[4,6]],[[.9,3.8],[3.1,3.8]]],L:[[[0,0],[0,6],[4,6]]],I:[[[2,0],[2,6]],[[1,0],[3,0]],[[1,6],[3,6]]],N:[[[0,6],[0,0],[4,6],[4,0]]]}
const glyph=(c,ch,x,y,s)=>{c.beginPath();for(const l of G[ch])l.forEach(([a,b],k)=>c[k?'lineTo':'moveTo'](x+a*s,y+b*s))}
const limb=(c,x,y,a1,l1,a2,l2,col,w)=>{const kx=x+l1*sin(a1),ky=y+l1*cos(a1),fx=kx+l2*sin(a2),fy=ky+l2*cos(a2);for(const[lw,s]of[[w+8,'#111'],[w,col]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(kx,ky),c.lineTo(fx,fy),c.stroke();return[fx,fy]}
export default(c,t,i)=>{
  const f=T*3*t,bx=58+26*sin(T*t)+6*sin(T*2*t),hx=166-6*sin(T*t),hy=150+5*cos(2*f)
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=BG;c.fill();c.clip()
  c.fillStyle=GR;c.fillRect(0,214,256,50);c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(0,214);c.lineTo(256,214);c.stroke()
  c.lineWidth=5;c.beginPath();for(let k=0;k<5;k++){const x=((k*64-t*3*64*2)%320+320)%320-40;c.moveTo(x,232);c.lineTo(x+26,232)}c.stroke()
  for(const[o,y,r]of[[0,56,.3],[.5,96,-.4]]){
    const p=((o-t*2)%1+1)%1,x=280-p*340,a=r+p*6
    c.save();c.translate(x,y+10*sin(T*(p*2+o)));c.rotate(a);c.lineWidth=4;c.strokeStyle='#111'
    c.fillStyle='#fff';c.beginPath();c.roundRect(-15,-16,30,32,4);c.fill();c.stroke()
    c.fillStyle=RED;c.beginPath();c.roundRect(-15,-16,30,10,[4,4,0,0]);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(-6,0);c.lineTo(6,0);c.moveTo(-6,8);c.lineTo(6,8);c.stroke()
    c.restore()
  }
  const leg=(p,col)=>{const a=.75*sin(p),b=.15+1.5*max(0,cos(p+PI/4))**1.5;limb(c,hx,hy,a,30,a-b,30,col,12);const kx=hx+30*sin(a),ky=hy+30*cos(a),fx=kx+30*sin(a-b),fy=ky+30*cos(a-b);c.save();c.translate(fx,fy);c.rotate(-(a-b)+.1);c.fillStyle='#212529';c.lineWidth=4;c.strokeStyle='#111';c.beginPath();c.ellipse(6,0,12,7,0,0,T);c.fill();c.stroke();c.restore()}
  const sx=hx+16,sy=hy-44,arm=(p,col)=>{const u=-.9*sin(p);const[x,y]=limb(c,sx,sy,u,24,u+1.7,20,col,11);c.fillStyle=SKIN;c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.arc(x,y,8,0,T);c.fill();c.stroke()}
  leg(f+PI,'#343a40');arm(f+PI,'#1c7ed6')
  for(const[w,col]of[[44,'#111'],[34,SH]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(hx,hy-6),c.lineTo(sx,sy),c.stroke()
  leg(f,PA)
  const tx=sx+10,ty=sy-30
  c.save();c.translate(tx,ty);c.rotate(.15)
  c.lineWidth=6;c.strokeStyle='#111';c.fillStyle=SKIN;c.beginPath();c.arc(0,0,27,0,T);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-27,-2);c.quadraticCurveTo(-30,-30,0,-28);c.quadraticCurveTo(22,-28,26,-12);c.quadraticCurveTo(6,-18,-6,-12);c.quadraticCurveTo(-14,-6,-27,-2);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(12,-2,9,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(15,-2,3.5,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(4,-16);c.lineTo(20,-12);c.stroke()
  c.fillStyle='#c92a2a';c.beginPath();c.ellipse(17,15,6,7+2*sin(f*2),0,0,T);c.fill();c.stroke()
  c.fillStyle='#ff8fa3';c.beginPath();c.ellipse(0,10,6,4,0,0,T);c.fill()
  c.restore()
  arm(f,SH)
  c.fillStyle='#74c0fc';c.strokeStyle='#111';c.lineWidth=3
  for(let k=0;k<2;k++){const p=(t*3+k/2)%1,x=tx-20-p*44,y=ty-24-20*sin(PI*p)+p*30;if(p<.8)c.beginPath(),c.moveTo(x,y-7),c.quadraticCurveTo(x+6,y+2,x,y+5),c.quadraticCurveTo(x-6,y+2,x,y-7),c.fill(),c.stroke()}
  c.save();c.translate(bx,0)
  c.fillStyle='#111';c.beginPath();c.moveTo(-26,0);for(let y=0;y<=256;y+=16)c.lineTo(26+(y/16)%2*8-4,y);c.lineTo(-300,256);c.lineTo(-300,0);c.fill()
  c.fillStyle=RED;c.beginPath();c.moveTo(-20,0);for(let y=0;y<=256;y+=16)c.lineTo(20+(y/16)%2*8-4,y);for(let y=256;y>=0;y-=16)c.lineTo(-20+(y/16+1)%2*8-4,y);c.fill()
  c.strokeStyle='#fff';c.lineWidth=4.5;c.lineCap='round';[...'DEADLINE'].forEach((ch,k)=>{glyph(c,ch,-7,22+k*27,3.4);c.stroke()})
  c.restore()
  c.strokeStyle='#111';c.lineWidth=5;for(const k of[0,1,2]){const y=70+k*50+6*sin(T*(t*3+k*.3)),x=bx+34+4*sin(T*(t*6+k*.5));c.beginPath();c.moveTo(x,y);c.lineTo(x+12+6*sin(T*(t*6+k)),y);c.stroke()}
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}

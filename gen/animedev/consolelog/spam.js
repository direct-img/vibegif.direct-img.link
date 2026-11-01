// violet twin-tailed girl in a pink hoodie gleefully flinging console.log sticky notes everywhere like confetti
export const frames=14,delay=105,rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,C=Math.cos,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
cl=v=>v<0?0:v>1?1:v,ez=v=>(v=cl(v),v*v*(3-2*v)),mx=(a,b,u)=>a+(b-a)*u,
eye=(c,x,y,s,k1,k2,lx=0,ly=0,r=1)=>{
  const sh=()=>{B(c);c.moveTo(x-11*s,y-7);c.bezierCurveTo(x-13*s,y+8,x-6*s,y+14,x+s,y+14);c.bezierCurveTo(x+9*s,y+14,x+13*s,y+6,x+12*s,y-8);c.bezierCurveTo(x+8*s,y-15,x-7*s,y-15,x-11*s,y-7)}
  sh();c.fillStyle='#fff';c.fill()
  c.save();sh();c.clip()
  const X=x+lx,Y=y+2+ly,g=c.createLinearGradient(0,Y-12,0,Y+12);g.addColorStop(0,k1);g.addColorStop(1,k2)
  E(c,X,Y,9.5*r,12.5*r);c.fillStyle=g;c.fill();c.lineWidth=1.5;c.strokeStyle=O;c.stroke()
  E(c,X,Y+r,4.4*r,6.5*r);c.fillStyle=O;c.fill()
  E(c,X-3.5*r,Y-4.5*r,3.6*r,4.4*r);c.fillStyle='#fff';c.fill()
  E(c,X+3.8*r,Y+5.5*r,1.9*r,1.9*r);c.fill()
  c.fillStyle='rgba(60,40,90,.2)';c.fillRect(x-15,y-16,30,9)
  c.restore()
  B(c);c.moveTo(x-12*s,y-6);c.bezierCurveTo(x-9*s,y-15,x+8*s,y-17,x+13*s,y-8);c.lineTo(x+16*s,y-6);c.lineWidth=4.6;c.strokeStyle=O;c.stroke()
  B(c);c.moveTo(x+6*s,y+13);c.quadraticCurveTo(x+10*s,y+12,x+12*s,y+8);c.lineWidth=2;c.stroke()
}
const SK='#fff0ea',SH='#f2cfc8',H1='#a77bf0',H2='#7a52c9',HL='#d9c4ff',HD='#ff9cc9',HD2='#e9779f',K1='#8a4a00',K2='#ffd23f'
const NC=['#fff27a','#9ef0ff','#ffb3d1','#b7f59a','#ffd59a']
// a sticky note saying log
const note=(c,x,y,r,s,k)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  B(c);c.roundRect(-19,-13,38,26,3);F(c,NC[k%5],2.6)
  c.fillStyle=O;c.font='bold 13px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillText('log',0,1)
  c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,x=128,y=112
  // each arm flings twice per loop, alternating
  const th=s=>{const p=((t*2+(s>0?.5:0))%1);return p<.13?ez(p/.13):1-ez((p-.2)/.5)}
  const bob=0,by=y+bob,hy=y-8+bob
  // caption
  c.save();c.font='bold 25px DejaVu Sans Mono';c.textBaseline='middle';c.translate(0,3);c.lineWidth=6;c.strokeStyle=O
  const w1=c.measureText('console').width,w2=c.measureText('.log').width,cx=128-(w1+w2)/2
  c.strokeText('console',cx,20);c.strokeText('.log',cx+w1,20);c.fillStyle='#62c1ff';c.fillText('console',cx,20);c.fillStyle='#ffd84a';c.fillText('.log',cx+w1,20);c.restore()
  // girl, scaled a touch to leave room for the confetti
  c.save();c.translate(128,240);c.scale(.9,.9);c.translate(-128,-240)
  // twin tails
  const tl=s=>{c.save();c.translate(x+42*s,hy-40);c.rotate(s*.1)
    B(c);c.moveTo(0,-6);c.bezierCurveTo(s*40,-14,s*50,30,s*42,70);c.lineTo(s*36,58);c.quadraticCurveTo(s*34,80,s*22,94);c.quadraticCurveTo(s*26,60,s*12,34);c.quadraticCurveTo(s*6,16,0,10);c.closePath();F(c,H1)
    c.strokeStyle=HL;c.lineWidth=3;B(c);c.moveTo(s*10,-4);c.quadraticCurveTo(s*34,0,s*38,30);c.stroke()
    c.restore()}
  tl(-1);tl(1)
  // legs + shoes
  for(const s of[-1,1]){L(c,SK,12,()=>{c.moveTo(x+14*s,by+86);c.lineTo(x+16*s,by+108)})
    B(c);c.roundRect(x+16*s-7,by+96,14,8,3);F(c,'#fff',2.4)
    B(c);c.moveTo(x+16*s-12,by+120);c.quadraticCurveTo(x+16*s-12,by+104,x+16*s,by+104);c.quadraticCurveTo(x+16*s+13,by+106,x+16*s+13,by+120);c.closePath();F(c,'#6b4fd1')}
  // hoodie
  B(c);c.moveTo(x-20,by+34);c.quadraticCurveTo(x-46,by+38,x-48,by+60);c.lineTo(x-50,by+92);c.quadraticCurveTo(x,by+98,x+50,by+92);c.lineTo(x+48,by+60);c.quadraticCurveTo(x+46,by+38,x+20,by+34);c.closePath();F(c,HD)
  B(c);c.moveTo(x-50,by+86);c.quadraticCurveTo(x,by+92,x+50,by+86);c.lineWidth=2.5;c.stroke()
  for(const s of[-1,1]){B(c);c.moveTo(x+8*s,by+44);c.lineTo(x+10*s,by+62);c.lineWidth=2.5;c.stroke();E(c,x+10*s,by+64,2.8,2.8);F(c,'#fff',2)}
  B(c);c.roundRect(x-24,by+68,48,16,6);c.lineWidth=2.5;c.stroke()
  // head
  B(c);c.moveTo(x-46,hy-2);c.bezierCurveTo(x-46,hy-62,x+46,hy-62,x+46,hy-2);c.bezierCurveTo(x+46,hy+24,x+22,hy+44,x,hy+46);c.bezierCurveTo(x-22,hy+44,x-46,hy+24,x-46,hy-2);F(c,SK)
  // hood collar behind chin
  B(c);c.moveTo(x-30,hy+40);c.quadraticCurveTo(x,hy+56,x+30,hy+40);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  c.fillStyle='rgba(255,110,150,.4)';E(c,x-28,hy+21,9,5);c.fill();E(c,x+28,hy+21,9,5);c.fill()
  eye(c,x-21,hy+6,-1,K1,K2,0,-1);eye(c,x+21,hy+6,1,K1,K2,0,-1)
  for(const s of[-1,1]){c.fillStyle='#fff';const sx=x+21*s+4,sy=hy+2;B(c);c.moveTo(sx,sy-4);c.lineTo(sx+1.2,sy-1.2);c.lineTo(sx+4,sy);c.lineTo(sx+1.2,sy+1.2);c.lineTo(sx,sy+4);c.lineTo(sx-1.2,sy+1.2);c.lineTo(sx-4,sy);c.lineTo(sx-1.2,sy-1.2);c.fill()}
  B(c);c.moveTo(x-13,hy+25);c.quadraticCurveTo(x,hy+29,x+13,hy+25);c.quadraticCurveTo(x+10,hy+42,x,hy+42);c.quadraticCurveTo(x-10,hy+42,x-13,hy+25);F(c,'#8c2f3f',2.4)
  E(c,x,hy+38,6,3);c.fillStyle='#f27d86';c.fill()
  B(c);c.moveTo(x+4,hy+27);c.lineTo(x+9,hy+27);c.lineTo(x+6.5,hy+32);c.closePath();c.fillStyle='#fff';c.fill();c.lineWidth=1.5;c.stroke()
  B(c);c.moveTo(x-50,hy+20);c.bezierCurveTo(x-60,hy-46,x-28,hy-64,x,hy-62);c.bezierCurveTo(x+28,hy-64,x+60,hy-46,x+50,hy+20)
  c.quadraticCurveTo(x+44,hy+2,x+40,hy-10);c.quadraticCurveTo(x+36,hy-4,x+30,hy+2);c.quadraticCurveTo(x+26,hy-12,x+18,hy-20);c.quadraticCurveTo(x+14,hy-8,x+4,hy-2);c.quadraticCurveTo(x+2,hy-14,x-6,hy-22)
  c.quadraticCurveTo(x-12,hy-8,x-22,hy-2);c.quadraticCurveTo(x-24,hy-14,x-30,hy-18);c.quadraticCurveTo(x-36,hy-4,x-40,hy+4);c.quadraticCurveTo(x-44,hy+10,x-50,hy+20);F(c,H1)
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,hy-10,44,-2.5,-1.95);c.stroke();B(c);c.arc(x,hy-10,44,-1.2,-.7);c.stroke()
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+31*s,hy-18);c.quadraticCurveTo(x+22*s,hy-22,x+12*s,hy-15);c.stroke()}
  for(const s of[-1,1]){c.save();c.translate(x+42*s,hy-42);c.rotate(s*.3);B(c);for(let k=0;k<10;k++){const q=k*P/5-P/2,rr=k%2?4.5:10;c.lineTo(C(q)*rr,S(q)*rr)}c.closePath();F(c,'#ffd84a',2.4);c.restore()}
  // arms: sleeve paws flinging up and out
  for(const s of[-1,1]){const u=th(s),sx=x+40*s,sy=by+46,hx=x+s*mx(46,84,u),hy2=mx(by+76,by-14,u)
    L(c,HD,18,()=>{c.moveTo(sx,sy);c.quadraticCurveTo(x+s*mx(62,66,u),mx(by+70,by+30,u),hx,hy2)})
    E(c,hx,hy2,11,10);F(c,HD2)}
  // notes: tossed up from a hand at the top of its fling, then flutter down like paper and shrink away
  c.restore()
  // notes: tossed up from the hand at the top of its fling, arc outward, flutter down beside her, shrink away
  for(let j=0;j<16;j++){const n=j>>2,s=n%2?1:-1,k=j%4,st=n*.25+.07+k*.012,a=((t-st)%1+1)%1
    if(a>.62)continue
    const q=(k+n*3)%8,dr=[14,-10,10,-4,12,2,-12,6][q],up=[40,66,56,24,62,34,68,50][q],fv=[260,220,300,240,280,230,210,270][q],
      r=1-Math.exp(-a*7),px=128+s*(76+dr*r)+S(a*15+j)*5*cl(a*4),py=118-up*S(Math.min(a/.18,1)*P/2)+(a>.18?fv*(a-.18):0),
      sc=(a<.04?a/.04:a>.48?(.62-a)/.14:1)*.82
    if(sc>.2)note(c,px,py,S(a*12+j)*.6+s*.25,sc,j)}
}

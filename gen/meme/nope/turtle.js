// a turtle pokes its head out, spots something off screen, NOPE pops up and it slams back into its shell to shiver
import{Path2D}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
const U=[.03,.08,.13,.18,.23,.27,.33,.385,.42,.46,.5,.56,.62,.66,.7,.75,.8,.88,.92,.97]
export const frames=U.length,delay=[80,80,80,120,120,120,450,50,60,60,60,70,70,70,70,70,70,80,80,350],rim=4
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u*u*(3-2*u)),bk=u=>(u=cl(u),1+2.7*(u-1)**3+1.7*(u-1)**2)
const K='#1b1b1f',G='#8ce99a',D='#2f9e44',S='#51cf66',Y='#ffe066'
const F={N:'M0 10V0L6 10V0',O:'M3 0A3 5 0 1 1 3 10A3 5 0 1 1 3 0Z',P:'M0 10V0H3A2.75 2.75 0 0 1 3 5.5H0',E:'M6 0H0V10H6M0 5H4.5'}
const L=(c,ch,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s*4.8,s*4.8);c.translate(-3,-5);for(const[w,st]of[[5.6,K],[2.4,'#ff6b6b']])c.lineWidth=w,c.strokeStyle=st,c.stroke(new Path2D(F[ch]));c.restore()}
const dome=c=>{c.beginPath();c.moveTo(26,198);c.bezierCurveTo(26,124,72,100,106,100);c.bezierCurveTo(140,100,186,124,186,198);c.closePath()}
export default(c,_,i)=>{
  const t=U[i]
  const out=io(t/.16)*(1-cl((t-.37)/.035)),lg=io(t/.1)*(1-cl((t-.37)/.03)),wide=t>.29&&t<.4
  const sv=t>.4&&t<.9?2.5*(1-io((t-.7)/.2)):0,jx=t<.6?sv*(i%2?1:-1):0,ex=sv*(i%2?.6:-.6),sq=1-.1*sin(PI*cl((t-.38)/.08))
  c.save();c.translate(106+jx,214);c.scale(2-sq,sq);c.translate(-106,-214)
  c.lineWidth=6
  for(const[x,f]of[[52,D],[92,D],[124,S],[164,S]]){c.fillStyle=f;c.beginPath();c.roundRect(x-14,186,28,10+24*lg,13);c.fill();c.stroke()}
  c.fillStyle=S;c.beginPath();c.moveTo(30,190);c.lineTo(10-8*lg,200);c.lineTo(32,204);c.fill();c.stroke()
  const hx=160+62*out,hy=180-38*out
  for(const[w,s]of[[36,K],[24,S]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(160,190),c.quadraticCurveTo(hx-20,192,hx,hy),c.stroke()
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle=S;c.beginPath();c.ellipse(hx,hy,30,26,-.1,0,T);c.fill();c.stroke()
  const er=wide?13:10,pr=wide?3.5:5.5,lk=t<.29?3*sin(T*cl((t-.12)/.17)):0
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(hx+6,hy-7,er,0,T);c.fill();c.stroke()
  c.fillStyle=K;c.beginPath();c.arc(hx+9+lk,hy-6,pr,0,T);c.fill()
  if(!wide){c.fillStyle=S;c.beginPath();c.arc(hx+6,hy-7,er+1.5,PI,0);c.lineTo(hx+6+er+1.5,hy-9);c.lineTo(hx+6-er-1.5,hy-9);c.fill();c.lineWidth=4;c.beginPath();c.moveTo(hx-6,hy-9);c.lineTo(hx+18,hy-9);c.stroke()}
  c.lineWidth=4;c.beginPath();wide?c.ellipse(hx+19,hy+11,4,5,0,0,T):c.arc(hx+13,hy+4,8,.25*PI,.7*PI);c.stroke()
  c.fillStyle='#ffa8a8';c.beginPath();c.ellipse(hx-6,hy+9,6,3.5,0,0,T);c.fill()
  c.lineWidth=6;dome(c);c.fillStyle=G;c.fill();c.save();c.clip()
  c.strokeStyle=D;c.lineWidth=5;c.beginPath();for(let k=0;k<6;k++){const a=k*PI/3+PI/6;c.lineTo(106+30*cos(a),150+24*sin(a))}c.closePath()
  for(let k=0;k<6;k++){const a=k*PI/3+PI/6;c.moveTo(106+30*cos(a),150+24*sin(a));c.lineTo(106+80*cos(a),150+66*sin(a))}c.stroke()
  c.restore();c.lineWidth=6;dome(c);c.stroke()
  c.fillStyle=Y;c.beginPath();c.roundRect(18,188,180,20,10);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(80,120,14,7,-.45,0,T);c.fill()
  if(out<.05){
    c.fillStyle=K;c.beginPath();c.ellipse(176,170,13,19,0,0,T);c.fill()
    if(t>.46){c.fillStyle='#fff';for(const d of[-5.5,5.5])c.beginPath(),c.arc(177+d+ex,166,4,0,T),c.fill()}
  }
  c.restore()
  if(wide){c.strokeStyle=K;c.fillStyle='#ff6b6b';c.lineWidth=5;c.beginPath();c.roundRect(hx+8,hy-96,18,42,9);c.fill();c.stroke();c.beginPath();c.arc(hx+17,hy-38,9,0,T);c.fill();c.stroke()}
  if(sv>.3&&t>=.6){c.strokeStyle=K;c.lineWidth=4;for(const d of[-1,1])for(const k of[0,1])c.beginPath(),c.arc(106,150,104+k*12+(i%2)*3,d>0?-.35:PI-.35,d>0?.35:PI+.35),c.stroke()}
  if(sv>.3){c.fillStyle='#74c0fc';c.strokeStyle=K;c.lineWidth=3;for(const[x,d]of[[60,-1],[150,1]]){const u=(t*6+(d>0?.5:0))%1;c.save();c.translate(x+d*28*u,108-26*sin(PI*u)+20*u);c.rotate(d*.6);c.beginPath();c.moveTo(0,-10);c.quadraticCurveTo(8,2,0,6);c.quadraticCurveTo(-8,2,0,-10);c.fill();c.stroke();c.restore()}}
  ;[...'NOPE'].forEach((ch,k)=>{const s=bk((t-.4-k*.045)/.08)*(1-io((t-.86)/.08));if(s>.01)L(c,ch,53+k*50,50,s,(k%2?.12:-.12))})
}

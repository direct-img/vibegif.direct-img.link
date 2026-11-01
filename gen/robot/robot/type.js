// blue robot hunched over a laptop on a desk typing furiously, metal fingers hammering the keys while colorful lines of code type out and scroll up the screen, steam puffing from its head
export const frames=32,delay=50
const T=Math.PI*2,{sin:S,cos:C,max,min}=Math
const P=(c,f,s=1)=>{f&&(c.fillStyle=f,c.fill());s&&c.stroke()}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const O=(c,x,y,r)=>{c.beginPath();c.arc(x,y,r,0,T)}
const sm=x=>(x=max(0,min(1,x)),x*x*(3-2*x))
// laptop geometry: lid screen W x H, base depth D, skewed into a 3/4 view
const W=90,H=80,D=36,LO=[142,76],XV=[1,-.1],YV=[-.06,1],DV=[-.84,.54]
const lid=(x,y)=>[LO[0]+XV[0]*x+YV[0]*y,LO[1]+XV[1]*x+YV[1]*y]
const base=(x,y)=>{const[a,b]=lid(x-6,H+6);return[a+DV[0]*y,b+DV[1]*y]}
// eight lines of code, seeded so every render matches
let sd=7;const R=()=>(sd=sd*16807%2147483647)/2147483647
const CL=['#ff6fb5','#5ee6dc','#ffd34a','#8fe36b','#ff9d5c']
const LN=[0,1,2,2,1,2,1,0].map(ind=>{
  const tk=[];let x=4+ind*7,n=2+R()*3|0
  for(let k=0;k<n&&x<W-10;k++){const w=min(W-6-x,6+R()*16|0);tk.push([x,w,CL[R()*5|0]]);x+=w+4}
  return tk
})
const sk=(c,pts)=>{c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}
export default(c,t)=>{
  const tp=k=>max(0,C(t*T*16+k*Math.PI)),bob=1.5*C(t*T*16)
  c.translate(128,128);c.scale(1.08,1.08);c.translate(-128,-103)
  // steam puffs from the head vent
  for(let k=0;k<3;k++){
    const p=(t*2+k/3)%1
    O(c,66+6*S(p*T+k)-p*14,30-p*26,2+S(p*Math.PI)*9);c.lineWidth=4;P(c,'#dfe5ea')
  }
  c.lineWidth=6
  // torso and head, leaning in
  c.save();c.translate(76,150);c.rotate(.08);c.translate(-64,-150+bob*.5)
  rr(c,22,96,84,70,20);P(c,'#a9cdee',0)
  c.save();c.clip();c.fillStyle='#7fa9d4';c.fillRect(18,96,22,80);c.restore()
  rr(c,22,96,84,70,20);P(c,0)
  c.fillStyle='#ff7a3d';O(c,88,122,5);c.fill()
  c.fillStyle=t*6%1<.5?'#7dffa0':'#2c8f52';O(c,88,138,5);c.fill()
  c.restore()
  c.save();c.translate(84,84+bob);c.rotate(.1)
  rr(c,-10,10,20,16,4);P(c,'#9aa5b0')
  rr(c,-38,-50,76,62,20);P(c,'#a9cdee',0)
  c.save();c.clip();c.fillStyle='#7fa9d4';c.fillRect(-40,-50,18,70);c.restore()
  rr(c,-38,-50,76,62,20);P(c,0)
  rr(c,-24,-58,18,10,3);P(c,'#9aa5b0')
  O(c,-34,-20,8);P(c,'#ff7a3d')
  // visor lit by the screen, eyes narrowed in focus
  rr(c,0,-36,40,30,10);P(c,'#1d252c')
  c.fillStyle='#5ee6dc'
  for(const x of[13,29]){rr(c,x-5,-25,10,5,2.5);c.fill()}
  c.strokeStyle='#5ee6dc';c.lineWidth=2.5;c.beginPath();c.moveTo(8,-31);c.lineTo(18,-29);c.moveTo(34,-31);c.lineTo(24,-29);c.stroke();c.strokeStyle='#111'
  c.lineWidth=4;c.beginPath();c.moveTo(18,0);c.lineTo(30,-2);c.stroke()
  c.restore()
  c.lineWidth=6
  // desk
  sk(c,[[22,148],[236,148],[242,194],[16,194]]);P(c,'#d9a066')
  rr(c,16,194,226,18,6);P(c,'#b07a45')
  // laptop lid and screen
  sk(c,[lid(-6,-6),lid(W+6,-6),lid(W+6,H+6),lid(-6,H+6)]);P(c,'#c3ccd4')
  c.save();c.transform(XV[0],XV[1],YV[0],YV[1],...LO)
  c.beginPath();c.rect(0,0,W,H);c.fillStyle='#13202b';c.fill()
  c.clip()
  const n=t*8,L=n|0,pr=n%1,e=sm(pr*3),lh=9.5
  for(let j=L-8;j<=L;j++){
    const y=H-7-(L-j)*lh+lh*(1-e),tk=LN[(j%8+8)%8]
    let lim=j<L?1e3:4+pr*1.15*(W-8)
    for(const[x,w,col]of tk){
      if(x>=lim)break
      c.fillStyle=col;rr(c,x,y-2,min(w,lim-x),4.5,2);c.fill()
    }
    if(j==L&&t*16%1<.5){const cx=min(W-6,max(...tk.map(([x,w])=>min(x+w,lim)))+3);c.fillStyle='#fff';c.fillRect(cx,y-3,4,6.5)}
  }
  c.restore()
  sk(c,[lid(0,0),lid(W,0),lid(W,H),lid(0,H)]);c.lineWidth=3;P(c,0)
  c.lineWidth=6
  sk(c,[lid(-6,-6),lid(W+6,-6),lid(W+6,H+6),lid(-6,H+6)]);P(c,0)
  // laptop base and keys
  sk(c,[base(0,0),base(W+12,0),base(W+12,D),base(0,D)]);P(c,'#dfe5ea')
  const hs=[[30,18,0],[66,14,1]],down=hs.map(([,,k])=>tp(k)>.6)
  for(let r=0;r<3;r++)for(let q=0;q<9;q++){
    const kx=10+q*9.5,ky=5+r*8.5
    const lit=hs.some(([hx,hy,k],m)=>down[m]&&Math.abs(kx+4-hx-(k?0:-4))<6&&Math.abs(ky+3-hy)<5)
    c.fillStyle=lit?'#5ee6dc':'#8e9aa6';sk(c,[base(kx,ky),base(kx+7,ky),base(kx+7,ky+5.5),base(kx,ky+5.5)]);c.fill()
  }
  // arms and tapping hands
  for(const[hx,hy,k]of hs){
    const[x,y]=base(hx,hy),up=tp(k)*9,sx=k?110:88,sy=k?124:128
    c.beginPath();c.moveTo(sx,sy+bob);c.lineTo(sx+(x-sx)*.3,y+2);c.lineTo(x-10,y-8-up)
    c.lineWidth=15;c.stroke();c.strokeStyle=k?'#c3ccd4':'#9aa5b0';c.lineWidth=6;c.stroke();c.strokeStyle='#111'
    c.lineWidth=4
    for(let f=0;f<3;f++){
      const fx=x-3+f*6.5,fu=max(0,C(t*T*16+k*Math.PI+f*2.1))*8
      rr(c,fx,y-12-up*.4-fu,5.5,14,2.7);P(c,'#9aa5b0')
    }
    rr(c,x-18,y-20-up,26,16,7);P(c,k?'#c3ccd4':'#9aa5b0')
    if(down[k]){
      c.beginPath()
      for(const[a,l]of[[-2.6,9],[-1.9,8],[-.6,9]])c.moveTo(x-4+C(a)*17,y-8+S(a)*13),c.lineTo(x-4+C(a)*(17+l),y-8+S(a)*(13+l))
      c.lineWidth=7;c.stroke();c.strokeStyle=k?'#ff6fb5':'#ffd34a';c.lineWidth=3.5;c.stroke();c.strokeStyle='#111'
    }
    c.lineWidth=6
  }
}

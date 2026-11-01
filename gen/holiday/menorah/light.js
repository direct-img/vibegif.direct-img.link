// a Hanukkah menorah: a spark from the shamash lights the eight candles one after another, then they puff out together and it starts again
export const frames=48,delay=75,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const Y=124,X=j=>128+j*25,ord=[-4,-3,-2,-1,1,2,3,4],L=k=>.07+k*.08,O=k=>.8+k*.01
  const f=(col,w=6)=>{c.fillStyle=col;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
  const gold=(w)=>{c.lineWidth=w+7;c.strokeStyle=K;c.stroke();c.lineWidth=w;c.strokeStyle='#f2b632';c.stroke()}
  // arms, stem and foot
  for(let j=4;j>0;j--){c.beginPath();c.arc(128,Y,j*25,0,Math.PI);gold(7)}
  c.beginPath();c.moveTo(128,Y-26);c.lineTo(128,226);gold(9)
  c.beginPath();c.moveTo(108,226);c.quadraticCurveTo(128,214,148,226);c.lineTo(162,236);c.quadraticCurveTo(128,244,94,236);c.closePath();f('#f2b632')
  c.beginPath();c.moveTo(106,234);c.quadraticCurveTo(128,239,150,234);c.lineWidth=3;c.strokeStyle='#c98a1e';c.stroke()
  for(let j=4;j>0;j--){c.beginPath();c.arc(128,Y,j*25,.3,.9);c.lineWidth=2.5;c.strokeStyle='#ffe08a';c.stroke()}
  // a candle in its cup, with a flame of size z
  const fl=(x,y,z,ph)=>{if(z<=0)return
    const h=29*z*(1+.1*S(T*4*t+ph)),w=9.5*z,s=2.6*S(T*3*t+ph*2)
    c.beginPath();c.moveTo(x,y+2);c.bezierCurveTo(x-w*1.4,y,x-w*.6,y-h*.6,x+s,y-h);c.bezierCurveTo(x+w*.6,y-h*.6,x+w*1.4,y,x,y+2);f('#ffab2e',4)
    c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x-w*.7,y-1,x-w*.3,y-h*.45,x+s*.6,y-h*.62);c.bezierCurveTo(x+w*.3,y-h*.45,x+w*.7,y-1,x,y);c.fillStyle='#ffe873';c.fill()
  }
  const candle=(x,y,col,z,ph)=>{
    const cd=()=>{c.beginPath();c.roundRect(x-7.5,y-46,15,46,3)}
    cd();c.fillStyle='#f4f7fd';c.fill()
    c.save();c.clip();c.strokeStyle=col;c.lineWidth=5;for(let k=-1;k<7;k++){c.beginPath();c.moveTo(x-9,y-k*10);c.lineTo(x+9,y-k*10-8);c.stroke()}c.restore()
    cd();c.lineWidth=5;c.strokeStyle=K;c.stroke()
    c.beginPath();c.moveTo(x,y-47);c.lineTo(x,y-52);c.lineWidth=3;c.stroke()
    c.beginPath();c.roundRect(x-11,y-4,22,9,3);f('#f2b632',5)
    fl(x,y-51,z,ph)
  }
  // shamash, raised in the middle, always burning
  candle(128,Y-26,'#f2b632',1,0)
  ord.forEach((j,k)=>{
    const a=(t-L(k))/.05,b=(t-O(k))/.04
    const z=t<L(k)?0:a<1?S(a*2.2)/S(2.2)*Math.min(1,a*3)*(1+.25*S(a*Math.PI)):b<0?1:Math.max(0,1-b)
    candle(X(j),Y,'#3d86d9',z,k*1.7)
    // smoke curl after it goes out
    const u=(t-O(k)-.01)/.07
    if(u>0&&u<1){c.beginPath();for(let i=0;i<=8;i++){const q=i/8;c.lineTo(X(j)+4*S(q*6-u*7),Y-56-q*22-u*16)}c.lineWidth=6*(1-u)+.5;c.strokeStyle='#9aa3b5';c.stroke()}
  })
  // the travelling spark that lights each candle
  ord.forEach((j,k)=>{
    const u=(t-L(k)+.055)/.055;if(u<=0||u>=1)return
    const x0=128,y0=Y-92,x1=X(j),y1=Y-56,mx=(x0+x1)/2,my=y0-22,bz=v=>[(1-v)**2*x0+2*v*(1-v)*mx+v*v*x1,(1-v)**2*y0+2*v*(1-v)*my+v*v*y1]
    for(let i=2;i>0;i--){const[x,y]=bz(Math.max(0,u-i*.12));c.beginPath();c.arc(x,y,5-i*1.3,0,T);c.fillStyle='#ffab2e';c.fill()}
    const[x,y]=bz(u)
    c.beginPath();c.arc(x,y,7.5,0,T);f('#ffe873',3.5)
  })
}

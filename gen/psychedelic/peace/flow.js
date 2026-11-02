// peace sign filled with swirling marbled liquid-light rainbow colors, white daisies spinning as they ride around the ring
export const frames=20,delay=80
const P=Math.PI*2,C=128,R=98,hw=15,bw=12.5,S=Math.SQRT1_2
const pal=[[255,43,214],[255,70,50],[255,160,0],[255,232,0],[80,240,70],[0,215,255],[110,80,255]]
const sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))),x*x*(3-2*x))
const sg=(x,y,ax,ay,bx,by)=>{const dx=bx-ax,dy=by-ay,h=Math.max(0,Math.min(1,((x-ax)*dx+(y-ay)*dy)/(dx*dx+dy*dy)));return Math.hypot(x-ax-dx*h,y-ay-dy*h)}
export default(c,t)=>{
  const d=c.createImageData(256,256),D=d.data,T=P*t
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    const X=x+.5,Y=y+.5
    const e=-Math.min(Math.abs(Math.hypot(X-C,Y-C)-R)-hw,sg(X,Y,C,C-R,C,C+R)-bw,sg(X,Y,C,C,C-R*S,C+R*S)-bw,sg(X,Y,C,C,C+R*S,C+R*S)-bw)
    if(e<-1)continue
    const wx=X+14*Math.sin(Y*.045+2*Math.sin(X*.03+T)),wy=Y+14*Math.cos(X*.04-T+1.5*Math.sin(Y*.035-T))
    const f=(wx*.6+wy*.8)/15+1.1*Math.sin(wx*.05-wy*.03+T)-7*t,k=Math.floor(f),fr=f-k,px=.075,K=j=>pal[((k+j)%7+7)%7]
    const u=Math.max(0,.5-fr/px),h=Math.max(0,.5-(1-fr)/px),a=sm(2.8,3.8,e),o=(y*256+x)*4,c0=K(0),c1=K(-1),c2=K(1)
    for(let i=0;i<3;i++)D[o+i]=17+(c0[i]+(c1[i]-c0[i])*u+(c2[i]-c0[i])*h-17)*a
    D[o+3]=255*Math.min(1,e+1)
  }
  c.putImageData(d,0,0)
  for(let j=0;j<6;j++){
    const g=j/6*P-T/6-P/12,x=C+Math.cos(g)*R,y=C+Math.sin(g)*R
    c.save();c.translate(x,y);c.rotate(-T/4)
    c.lineWidth=3.5
    for(let k=0;k<8;k++){c.rotate(P/8);c.beginPath();c.ellipse(0,-11,5.4,10,0,0,P);c.fillStyle='#fff';c.fill();c.stroke()}
    c.beginPath();c.arc(0,0,7,0,P);c.fillStyle="#ffd21a";c.fill();c.stroke()
    c.restore()
  }
}

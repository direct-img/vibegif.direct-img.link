// mirror disco ball spinning on its chain, tiles catching the light, colored light spots blinking around it
// the tile colors repeat every 4 columns and the ball turns 4 columns per loop, so the loop is seamless
const{sin,cos,PI,max,min,floor}=Math,T=2*PI
export const frames=16,delay=90
const TL=['#e7f5ff','#d0bfff','#c5f6fa','#ffdeeb'],TD=['#a5d8ff','#b197fc','#66d9e8','#faa2c1'],SP=['#ff6b6b','#ffd43b','#69db7c','#4dabf7','#b197fc','#f783ac']
const star=(c,x,y,s,col)=>{c.fillStyle=col;c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t,i)=>{
  const cx=128,cy=140,R=76,M=16,N=8,cw=T/M,rot=T*t/4
  for(let k=0;k<8;k++){
    const a=k*T/8+.39,r=104,on=(floor(t*8)+k*3)%4!=0
    if(on){c.lineWidth=4;star(c,cx+cos(a)*r,cy+sin(a)*r*.92,k%2?9:12,SP[k%6])}
  }
  for(const[w,st]of[[11,'#111'],[4,'#ced4da']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(cx,0),c.lineTo(cx,58),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#ced4da';c.beginPath();c.roundRect(cx-15,52,30,14,4);c.fill();c.stroke()
  c.fillStyle=TD[0];c.lineWidth=7;c.beginPath();c.arc(cx,cy,R,0,T);c.fill()
  c.save();c.beginPath();c.arc(cx,cy,R,0,T);c.clip()
  const P=(lo,la)=>[cx+R*cos(la)*sin(lo),cy+R*sin(la)]
  c.lineWidth=1.5;c.strokeStyle='#495057'
  for(let l=0;l<N;l++){
    const la0=-PI/2+l*PI/N,la1=la0+PI/N,lm=(la0+la1)/2
    for(let j=0;j<M;j++){
      let lo0=j*cw+rot-PI,lo1=lo0+cw
      lo0=((lo0+PI)%T+T)%T-PI;lo1=lo0+cw
      if(lo1<-PI/2||lo0>PI/2)continue
      const a0=max(lo0,-PI/2),a1=min(lo1,PI/2),lm2=(a0+a1)/2
      const lit=cos(lm2)*cos(lm)*.7-sin(lm2)*cos(lm)*.35-sin(lm)*.45,ci=(j+l*2)%4
      c.fillStyle=lit>.62?'#fff':lit>.25?TL[ci]:TD[ci]
      c.beginPath();for(const[lo,la]of[[a0,la0],[a1,la0],[a1,la1],[a0,la1]])c.lineTo(...P(lo,la));c.closePath();c.fill();c.stroke()
    }
  }
  c.restore();c.strokeStyle='#111'
  c.lineWidth=7;c.beginPath();c.arc(cx,cy,R,0,T);c.stroke()
  c.lineWidth=3
  for(const[x,y,p]of[[100,112,0],[156,154,.33],[116,178,.66]]){const s=13*max(0,sin(T*(2*t+p)));if(s>2)star(c,x,y,s,'#fff')}
}

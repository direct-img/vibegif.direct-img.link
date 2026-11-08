// solid black disc with sixteen thin needle spikes and a white sticker rim, the spike ring snaps in to about sixty percent and springs back past rest twice in a quick lub-dub heartbeat, then holds still
const{sin,cos,exp,PI}=Math,T=2*PI,N=16
// 22 motion frames at 30ms, then one held rest frame: 1.2s loop
export const frames=23,delay=[...Array(22).fill(30),540],rim=5
// one beat (x in seconds): quick snap in, then a damped spring back that overshoots outward
const beat=x=>x<0?0:x<.06?sin(PI/2*x/.06):(x-=.06,exp(-x/.06)*cos(x*T/.22))
export default(c,t,i)=>{
  c.translate(128,128),c.fillStyle='#111'
  const s=i*.03,d=i>21?0:beat(s)+.75*beat(s-.3),R=100*(1-.4*d),r=38+5*d
  c.rotate(.07*d)
  for(let k=0;k<N;k++){
    const a=k*T/N,y=sin(a),x=cos(a),w=6.5
    c.beginPath(),c.moveTo(R*x,R*y)
    c.lineTo(28*x-w*y,28*y+w*x),c.lineTo(28*x+w*y,28*y-w*x),c.fill()
  }
  c.beginPath(),c.arc(0,0,r,0,T),c.fill()
}

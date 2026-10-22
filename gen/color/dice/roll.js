// two dice bouncing and tumbling, landing on a new number every bounce
const{sin,cos,PI,abs,floor}=Math,T=2*PI
export const frames=24,delay=60
const PIPS={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]}
const die=(c,x,y,a,col,n)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.fillStyle=col;c.beginPath();c.roundRect(-34,-34,68,68,14);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;for(const[px,py]of PIPS[n])c.beginPath(),c.arc(px*17,py*17,6.5,0,T),c.fill(),c.stroke()
  c.restore();c.lineWidth=7
}
export default(c,t)=>{
  for(const[x,o,col,seq]of[[80,0,'#ff6b6b',[3,5]],[176,.25,'#4dabf7',[6,2]]]){
    const u=(t+o)%1,h=abs(sin(2*PI*u)),y=196-90*h,a=u*PI*(o?-1:1),n=seq[floor(u*2)%2]
    c.fillStyle='rgba(0,0,0,0)'
    die(c,x,y,a,col,n)
  }
}

// snowflakes of different sizes drifting down and slowly spinning
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=90
const F=[[46,0,20,1],[112,.3,30,1],[186,.62,24,1],[228,.15,16,1],[150,.82,38,1],[70,.55,26,1],[206,.42,32,1]]
export default(c,t)=>{
  for(const[x0,o,r,n]of F){
    const p=(t*n+o)%1,x=x0+12*sin(p*T+o*7),y=-r-6+p*(256+2*r+12),a=t*T/6*(n%2?1:-1)
    for(const[l,s]of[[10,'#111'],[4,'#fff']]){
      c.lineWidth=l;c.strokeStyle=s;c.beginPath()
      for(let k=0;k<6;k++){
        const b=a+k*PI/3,ux=cos(b),uy=sin(b),m=r*.55,q=r*.28
        c.moveTo(x,y);c.lineTo(x+ux*r,y+uy*r)
        for(const d of[-1,1])c.moveTo(x+ux*m,y+uy*m),c.lineTo(x+ux*m+cos(b+d*.9)*q,y+uy*m+sin(b+d*.9)*q)
      }
      c.stroke()
    }
  }
}

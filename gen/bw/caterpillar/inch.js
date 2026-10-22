// caterpillar crawling along a twig, a hump rolling through its segments from tail to head
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
export default(c,t)=>{
  c.beginPath();c.moveTo(60,222);c.quadraticCurveTo(52,246,82,248);c.quadraticCurveTo(84,228,60,222);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(62,226);c.quadraticCurveTo(66,240,80,246);c.stroke();c.lineWidth=7
  c.beginPath();c.roundRect(14,206,228,20,10);c.fill();c.stroke()
  c.lineWidth=4;for(const x of[44,116,196])c.beginPath(),c.moveTo(x,216),c.lineTo(x+18,216),c.stroke()
  const s=[...Array(7)].map((_,i)=>{const p=t*T-i*.9,l=max(0,sin(p));return[34+i*25-5*cos(p),186-20*l*l]})
  for(const[x,y]of s){
    c.lineWidth=5;for(const d of[-9,9])c.beginPath(),c.ellipse(x+d,y+20,5,4,0,0,T),c.fill(),c.stroke()
    c.lineWidth=7;c.beginPath();c.arc(x,y,20,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x,y-7,4.5,0,T);c.fill();c.fillStyle='#fff'
  }
  const p=t*T-7*.9,l=max(0,sin(p)),hx=34+7*25-5*cos(p)+2,hy=172-16*l*l
  for(const d of[-1,1]){
    const ex=hx+d*12+3*sin(t*T*2+d),ey=hy-46
    for(const[w,st]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(hx+d*8,hy-20),c.quadraticCurveTo(hx+d*6,hy-36,ex,ey),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.arc(ex,ey,6,0,T);c.fill();c.stroke()
  }
  c.lineWidth=7;c.beginPath();c.arc(hx,hy,27,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[hx-4,hx+14])c.beginPath(),c.ellipse(x,hy-4,5,7,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[hx-6,hx+12])c.beginPath(),c.arc(x,hy-7,2,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(hx+5,hy+8,7,.15*PI,.85*PI);c.stroke()
}

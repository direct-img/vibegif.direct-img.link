// little robot dancing: bouncing on its knees, swaying, swinging its arms, antenna blinking on the beat
const{sin,cos,PI}=Math,T=2*PI
export const delay=70
export default(c,t)=>{
  const b=6*(1-cos(2*T*t))/2,sw=.08*sin(t*T),beat=t%.5<.25
  const D=(f,a=20,i=8)=>{for(const[l,s]of[[a,'#111'],[i,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  for(const d of[-1,1]){const hx=128+d*20,kx=128+d*(24+b*1.6);D(()=>{c.moveTo(hx,186+b);c.lineTo(kx,208);c.lineTo(128+d*24,224)})}
  for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*24-15,222,30,12,6),c.fill(),c.stroke()
  c.translate(128,190+b);c.rotate(sw);c.translate(-128,-190)
  for(const d of[-1,1]){
    const a=-.1+.7*sin(2*T*t+(d>0?PI:0)),b=a-1,sx=128+d*44,sy=134
    const ex=sx+d*30*cos(a),ey=sy+30*sin(a),hx=ex+d*28*cos(b),hy=ey+28*sin(b)
    D(()=>{c.moveTo(sx,sy);c.lineTo(ex,ey);c.lineTo(hx,hy)})
    c.lineWidth=6;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke();c.lineWidth=7
  }
  c.beginPath();c.roundRect(84,118,88,68,12);c.fill();c.stroke()
  c.fillStyle='#111';for(const[x,f]of[[110,1],[128,0],[146,1]])c.beginPath(),c.arc(x,140,6,0,T),f?c.fill():(c.lineWidth=4,c.stroke())
  c.lineWidth=4;for(const y of[160,168,176])c.beginPath(),c.moveTo(112,y),c.lineTo(144,y),c.stroke()
  c.lineWidth=7;c.fillStyle='#fff'
  c.beginPath();c.rect(120,108,16,12);c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*42,78,8,0,T),c.fill(),c.stroke()
  D(()=>{c.moveTo(128,46);c.lineTo(128,26)},12,5)
  c.beginPath();c.arc(128,22,8,0,T);c.fillStyle=beat?'#111':'#fff';c.fill();c.stroke();c.fillStyle='#fff'
  c.beginPath();c.roundRect(86,46,84,64,14);c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[108,148])c.beginPath(),c.roundRect(x-6,beat?66:70,12,beat?20:12,6),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,90,10,.15*PI,.85*PI);c.stroke()
}

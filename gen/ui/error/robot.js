// broken robot slumped on the floor: head drooping, bent antenna sparking, one eye flickering, a loose spring boinging out of its head
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=90
const FL=[1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1],SP=[1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0]
export default(c,t,i)=>{
  const D=(f,a=20,b=8)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  c.translate(-8,0)
  const br=2*sin(T*t),ha=.5+.04*sin(T*t-.6)
  for(const d of[-1,1]){D(()=>{c.moveTo(118+d*24,206);c.lineTo(118+d*44,220)});c.beginPath();c.roundRect(118+d*50-18,210,36,22,9);c.fill();c.stroke()}
  for(const d of[-1,1]){
    D(()=>{c.moveTo(118+d*44,160+br);c.quadraticCurveTo(118+d*66,176,118+d*66,206)})
    c.lineWidth=6;c.beginPath();c.arc(118+d*66,214,10,0,T);c.fill();c.stroke();c.lineWidth=7
  }
  c.beginPath();c.roundRect(72,144+br,92,70-br,14);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(100,168+br,6,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(118,168+br,6,0,T);c.stroke()
  c.beginPath();c.moveTo(131,162+br);c.lineTo(141,172+br);c.moveTo(141,162+br);c.lineTo(131,172+br);c.stroke()
  for(const y of[188,198])c.beginPath(),c.moveTo(98,y+br*.5),c.lineTo(138,y+br*.5),c.stroke()
  c.fillStyle='#fff';c.lineWidth=7
  c.translate(126,146+br);c.rotate(ha)
  c.beginPath();c.rect(-8,-10,16,12);c.fill();c.stroke()
  c.save();c.translate(-44,-48);c.rotate(-1.75+.35*sin(2*T*t))
  D(()=>{for(let k=0;k<=60;k++){const u=k/60;c.lineTo(9*sin(u*T*4.5),-u*46)}},13,5)
  c.beginPath();c.arc(0,-52,9,0,T);c.fill();c.stroke();c.restore()
  D(()=>{c.moveTo(16,-70);c.lineTo(26,-92);c.lineTo(50,-90)},12,5)
  if(SP[i])for(let k=0;k<4;k++){const a=-1.6+k*1.05+(i%3)*.25,x=55+cos(a)*13,y=-90+sin(a)*13,p=a+1.4;D(()=>{c.moveTo(x,y);c.lineTo(x+cos(a)*10+cos(p)*5,y+sin(a)*10+sin(p)*5);c.lineTo(x+cos(a)*12-cos(p)*5,y+sin(a)*12-sin(p)*5);c.lineTo(x+cos(a)*19,y+sin(a)*19)},10,4)}
  c.beginPath();c.arc(55,-90,8,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(-46,-72,92,64,15);c.fill();c.stroke()
  c.fillStyle='#111'
  if(FL[i])c.beginPath(),c.roundRect(-28,-52,14,20,7),c.fill()
  else c.lineWidth=5,c.beginPath(),c.moveTo(-28,-41),c.lineTo(-14,-41),c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(13,-51);c.lineTo(27,-35);c.moveTo(27,-51);c.lineTo(13,-35);c.stroke()
  c.lineWidth=5;c.beginPath();for(let k=0;k<=4;k++)c.lineTo(-14+k*7,-20+(k%2?-4:2));c.stroke()
}

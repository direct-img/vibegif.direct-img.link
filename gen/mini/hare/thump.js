// hare sitting sideways: it slowly rocks its rear up and thumps its long hind foot down twice, dust ticks out, its ears twitch, then it blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const u=(t*2)%1,l=u<.34?sin(PI/2*u/.34):u<.4?cos(PI/2*(u-.34)/.06):0,hit=u>=.4&&u<.6,j=hit?1-(u-.4)/.2:0,bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  c.translate(122,138);c.scale(.94,.94);c.translate(-128,-128)
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  if(hit){const q=(u-.4)/.2;c.lineWidth=4
    for(const[x,d]of[[108,-1],[222,1]])for(const a of[.45,1.05]){const r=10+14*q;c.beginPath();c.moveTo(x+d*r*cos(a),218-r*sin(a));c.lineTo(x+d*(r+10)*cos(a),218-(r+10)*sin(a));c.stroke()}
    c.lineWidth=6}
  c.translate(100,220);c.rotate(-.15*l);c.translate(-100,-220+2*j)
  for(const[x,y,r]of[[124,60,.62],[110,58,.42]]){c.save();c.translate(x,y);c.rotate(r+.05*sin(T*t*2+r*9)-.22*j*(r>.5));shape(()=>c.ellipse(0,0,13,46,0,0,T));c.restore()}
  shape(()=>c.ellipse(166,212,46,9,0,0,T))
  shape(()=>{c.moveTo(96,140);c.bezierCurveTo(112,106,196,100,214,148);c.bezierCurveTo(226,184,214,206,190,208);c.lineTo(116,208);c.bezierCurveTo(94,206,86,168,96,140)})
  shape(()=>c.arc(218,160,13,0,T))
  shape(()=>c.roundRect(92,164,17,56,8))
  shape(()=>c.ellipse(84,122,36,28,-.18,0,T))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  c.beginPath();c.moveTo(109,184);c.lineTo(109,212);c.stroke()
  c.beginPath();c.moveTo(184,136);c.bezierCurveTo(200,160,196,190,168,204);c.stroke()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(76,114,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(76,116,6.5,0,T),c.fill()
  c.beginPath();c.arc(50,122,4,0,T);c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(50,126);c.quadraticCurveTo(52,134,60,134);c.stroke()
}

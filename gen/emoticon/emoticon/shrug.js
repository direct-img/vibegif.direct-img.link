// emoticon shrugs, bouncing its palm-up mitten hands up while it shuts its eyes, lifts its brows and tilts its head, who knows
export const frames=28,delay=70
const K='#111',W='#fff',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x)),
bk=x=>(x=cl(x),1+2.7*(x-1)**3+1.7*(x-1)**2)  // ease out with a little overshoot
export default(c,t)=>{
  const s=bk((t-.08)/.2)-sm((t-.66)/.2)+.1*Math.sin(P*cl((t-.36)/.24))**2,e=cl(s)
  c.save();c.translate(128,128+6*s);c.rotate(.1*s)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // eyes settle shut with a resigned whatever, brows climb with their inner ends up
  c.fillStyle=K
  for(const m of[-1,1]){
    const x=34*m,y=-10
    if(e<.5){c.beginPath();c.ellipse(x,y,11,15*(1-e*1.2),0,0,2*P);c.fill()}
    else{c.lineWidth=8;c.beginPath();c.moveTo(x-14,y-2);c.quadraticCurveTo(x,y+10,x+14,y-2);c.stroke()}
    c.lineWidth=8;c.beginPath();c.moveTo(x+16*m,-38-8*e);c.quadraticCurveTo(x,-50-14*e,x-16*m,-44-18*e);c.stroke()
  }
  // wobbly unsure mouth
  c.lineWidth=8;c.beginPath();c.moveTo(-26,44+2*e);c.bezierCurveTo(-12,34+2*e,8,56-2*e,26,40-4*e);c.stroke()
  c.restore()
  // palm-up mitten hands, fingers pointing outward, bouncing up beside the jaw
  for(const m of[-1,1]){
    c.save();c.translate(128+m*(80+4*s),208-30*s);c.scale(m,1);c.rotate(.15-.45*e)
    c.lineWidth=7;c.fillStyle=W
    c.beginPath();c.moveTo(-20,-8);c.bezierCurveTo(-8,-3,12,-4,23,-13);c.bezierCurveTo(38,-10,37,16,20,19);c.bezierCurveTo(4,23,-14,21,-22,10);c.closePath();c.fill();c.stroke()
    c.beginPath();c.ellipse(-12,-12,7,11,-.4,0,2*P);c.fill();c.stroke()
    c.restore()
  }
}

// shark fin circling round a pool of water, bigger as it passes in front, a little wake trailing behind
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=70
export default(c,t)=>{
  c.beginPath();for(let k=0;k<=120;k++){const a=k/120*T,r=1+.025*sin(a*16);c.lineTo(128+114*r*cos(a),150+74*r*sin(a))}
  c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(128,150,96,60,0,0,T);c.stroke()
  const a=t*T+PI/2,x=128+62*cos(a),y=158+36*sin(a),dir=sin(a)>0?-1:1,d=.75+.25*sin(a),sx=dir*(.4+.6*abs(sin(a)))*d*1.3,sy=d*1.3
  const P=(px,py)=>[x+px*sx,y+py*sy]
  c.lineWidth=4;c.beginPath()
  for(const s of[-1,1])c.moveTo(...P(-26,0)),c.quadraticCurveTo(...P(-40,5*s),...P(-58,4+8*s))
  c.stroke()
  c.beginPath();c.moveTo(...P(-22,0));c.quadraticCurveTo(...P(-6,-28),...P(-20,-64));c.quadraticCurveTo(...P(16,-46),...P(30,0));c.closePath()
  c.lineWidth=7;c.fillStyle='#111';c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(...P(14,-8));c.quadraticCurveTo(...P(8,-30),...P(-8,-46));c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff'
}

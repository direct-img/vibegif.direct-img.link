// two koi chasing each other's tails around a dark round pond like a yin-yang, their bodies shifting color and leaving rainbow ripple rings in their wake, rainbow striped pond rim
export const frames=20,delay=80
const TAU=Math.PI*2,R=70,L=1.95,D=Math.PI/12,P=['#ff2d6f','#ff8a00','#ffd500','#3ddc4a','#00b7ff','#8b4dff']
const hsl=(h,s,l)=>`hsl(${(h%360+360)%360},${s}%,${l}%)`
export default(c,t)=>{
  const H=Math.PI*t
  // pond with a rainbow striped rim
  c.lineWidth=14;c.beginPath();c.arc(128,128,120,0,TAU);c.stroke()
  c.fillStyle='#170b3f';c.fill()
  c.lineWidth=7
  for(let k=0;k<24;k++){c.strokeStyle=P[k%6];c.beginPath();c.arc(128,128,120,k*D,(k+1)*D+.02);c.stroke()}
  // ripples dropped every 2D radians along the path, growing and thinning with age
  c.save();c.beginPath();c.arc(128,128,116,0,TAU);c.clip()
  for(const f of[0,1]){
    const h=(H+f*Math.PI-L*.55)/(2*D)
    for(let a=0;a<5;a++){
      const m=Math.floor(h-a),q=h-m,p=m*2*D
      c.strokeStyle=P[(m%6+6)%6];c.lineWidth=3.2*(1-q/5)+.6
      c.beginPath();c.arc(128+R*Math.cos(p),128+R*Math.sin(p),8+q*7,0,TAU);c.stroke()
    }
  }
  c.restore()
  for(const f of[0,1])fish(c,H+f*Math.PI,t,180*t+f*180)
}
const fish=(c,h,t,hue)=>{
  // spine follows the circle, swim wave grows toward the tail
  const sp=s=>{
    const a=h-s*L,r=R+7*s*s*Math.sin(TAU*(1.1*s-3*t))
    return[128+r*Math.cos(a),128+r*Math.sin(a),a]
  }
  const W=s=>s<.17?22*Math.sqrt(1-((.17-s)/.17)**2):22*(1-(s-.17)/.83)**1.15+3
  const pt=(s,w)=>{const[x,y,a]=sp(s);return[x+w*Math.cos(a),y+w*Math.sin(a)]}
  const body=()=>{
    c.beginPath()
    for(let k=0;k<=40;k++)c.lineTo(...pt(k/40,W(k/40)))
    for(let k=40;k>=0;k--)c.lineTo(...pt(k/40,-W(k/40)))
    c.closePath()
  }
  c.lineWidth=3.5;c.strokeStyle='#111';c.fillStyle=hsl(hue+30,100,80)
  // flowing tail fan with a soft fork, and rounded pectoral fins
  c.beginPath();c.moveTo(...pt(.9,4));c.bezierCurveTo(...pt(1.02,8),...pt(1.14,24),...pt(1.32,19))
  c.quadraticCurveTo(...pt(1.22,8),...pt(1.2,0));c.quadraticCurveTo(...pt(1.22,-8),...pt(1.32,-19))
  c.bezierCurveTo(...pt(1.14,-24),...pt(1.02,-8),...pt(.9,-4));c.closePath();c.fill();c.stroke()
  for(const m of[1,-1]){
    c.beginPath();c.moveTo(...pt(.2,m*16));c.bezierCurveTo(...pt(.2,m*34),...pt(.34,m*38),...pt(.38,m*28));c.quadraticCurveTo(...pt(.32,m*20),...pt(.3,m*14));c.closePath();c.fill();c.stroke()
  }
  c.fillStyle='#fff';body();c.fill()
  // koi patches in the cycling hue, smaller spots in the opposite hue
  c.save();body();c.clip()
  for(const[s,o,w,l,k]of[[.06,3,16,.1,0],[.33,-7,14,.12,0],[.58,8,12,.1,0],[.82,-3,8,.08,0],[.22,11,6,.04,1],[.46,-12,5,.035,1],[.7,1,4,.035,1]]){
    const[x,y,a]=sp(s);c.fillStyle=hsl(hue+k*180,100,55)
    c.beginPath();c.ellipse(x+o*Math.cos(a),y+o*Math.sin(a),w,l*L*R,a,0,TAU);c.fill()
  }
  c.restore()
  body();c.stroke()
  c.lineWidth=2;c.beginPath();for(let k=12;k<=26;k++)c.lineTo(...pt(k/40,0));c.stroke()
  c.fillStyle='#111'
  for(const m of[1,-1]){c.beginPath();c.arc(...pt(.07,m*12),2.8,0,TAU);c.fill()}
}

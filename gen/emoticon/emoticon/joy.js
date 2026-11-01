// emoticon laughing so hard it cries, rocking side to side as big tears of joy well up and fly from both eyes
const P=Math.PI,K='#111',G='#9a9a9a',S=Math.sin,C=Math.cos
export const frames=28,delay=50
// head pose at time a: x, y, tilt
const pose=a=>[128+5*S(2*P*a),134-10*Math.abs(S(4*P*a)),.13*S(2*P*a)]
const drop=(c,x,y,R,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.beginPath()
  c.arc(0,0,R,-P/2,P/2);c.quadraticCurveTo(-R,R,-2.3*R,0);c.quadraticCurveTo(-R,-R,0,-R)
  c.fillStyle=G;c.lineWidth=4;c.strokeStyle=K;c.stroke();c.fill();c.restore()
}
export default(c,t,i)=>{
  const[hx,hy,hr]=pose(t),u=Math.abs(S(4*P*t))
  c.save();c.translate(hx,hy);c.rotate(hr)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // tightly shut happy eyes and worried-up brows
  c.lineWidth=9
  for(const d of[-1,1]){
    c.beginPath();c.ellipse(d*34,-20,16,13,0,P,2*P);c.stroke()
    c.beginPath();c.moveTo(d*20,-56-4*u);c.lineTo(d*48,-46-u);c.stroke()
  }
  // open laughing mouth with tongue
  const H=42+16*u
  c.beginPath();c.moveTo(-52,12);c.quadraticCurveTo(0,20,52,12);c.ellipse(0,12,52,H,0,0,P);c.closePath()
  c.fillStyle=K;c.fill();c.save();c.clip()
  c.fillStyle=G;c.beginPath();c.ellipse(0,12+H,28,18,0,0,2*P);c.fill();c.restore()
  c.restore()
  // tears: one per side each burst of laughter, swelling at the eye corner then flung off in an arc
  for(const d of[-1,1])for(let k=0;k<4;k++){
    const b=(k+(d>0?.5:0))/4,a=((t-b)%1+1)%1
    if(a<.1){
      const[x,y,r]=pose(t),e=a/.1,ex=d*52,ey=-12+6*e
      drop(c,x+ex*C(r)-ey*S(r),y+ex*S(r)+ey*C(r),3+8*e,P/2+r-d*.6)
    }else if(a<.42){
      const s=(a-.1)/.32,[x,y,r]=pose(b+.1),ex=d*52,ey=-6
      drop(c,x+ex*C(r)-ey*S(r)+d*60*s,y+ex*S(r)+ey*C(r)-56*s+160*s*s,11*Math.min(1,2.2*(1-s)),Math.atan2(-56+320*s,d*60))
    }
  }
}

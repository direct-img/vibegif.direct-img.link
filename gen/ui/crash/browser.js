// browser window with a dizzy sad face: a crack zigzags down it while it shakes, both halves sag apart, then it blinks off and reloads
const{sin,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=70
const cl=u=>min(1,max(0,u)),ease=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),back=u=>(u=cl(u),1+3*(u-1)**3+2*(u-1)**2)
const K=[[150,30],[150,44],[140,70],[154,96],[134,122],[148,148],[128,174],[140,212],[140,240]],B=[[[154,96],[178,90],[194,104]],[[134,122],[110,128],[96,118]],[[148,148],[170,160],[176,180]]]
const len=P=>P.slice(1).reduce((s,p,k)=>s+hypot(p[0]-P[k][0],p[1]-P[k][1]),0),LK=len(K.slice(1,8))
export default(c,t,i)=>{
  const r=t<.9,p=r?cl((t-.08)/.26):0,g=r?ease((t-.36)/.1):0,wb=t>.36&&t<.84?.02*sin((t-.36)*T*4)*(1-cl((t-.4)/.4)):0,off=cl((t-.84)/.06),on=back((t-.9)/.1)
  const pl=P=>{c.beginPath();for(const q of P)c.lineTo(...q)}
  const W=()=>{
    c.beginPath();c.roundRect(24,44,208,168,14);c.fill();c.stroke()
    c.beginPath();c.moveTo(24,72);c.lineTo(232,72);c.stroke()
    c.lineWidth=4;for(const k of[0,1,2])c.beginPath(),c.arc(42+k*16,58,5,0,T),c.stroke()
    c.beginPath();c.roundRect(96,51,122,14,7);c.stroke()
    c.lineWidth=7;for(const x of[96,162])c.beginPath(),c.moveTo(x-11,113),c.lineTo(x+11,135),c.moveTo(x+11,113),c.lineTo(x-11,135),c.stroke()
    c.lineWidth=6;c.beginPath();c.arc(129,194,24,1.2*PI,1.8*PI);c.stroke()
    if(p>0){
      c.lineWidth=9;c.setLineDash([LK*p,999]);pl(K.slice(1,8));c.stroke()
      B.forEach((b,k)=>{const q=cl((p-[.29,.46,.62][k])/.25);if(q>0)c.lineWidth=5,c.setLineDash([len(b)*q,999]),pl(b),c.stroke()})
      c.setLineDash([]);c.lineWidth=7
    }
  }
  if(t>=.9&&on<.02||t>.84&&t<.9&&off>.98)return
  const s=t<.84?1:t<.9?1-off:on,sy=t<.84||t>=.9?s:max(.03,1-off),sx=t<.84||t>=.9?s:1+.05*off
  c.translate(128+(t>.08&&t<.36?(i%2?3:-3):0),128);c.scale(sx*.94,sy*.94);c.translate(-128,-128)
  if(!g&&!wb)return W()
  for(const[d,px,py,a]of[[-1,24,44,.07*g+wb],[1,232,44,-.08*g-wb]]){
    c.save();c.translate(px,py);c.rotate(a);c.translate(-px,-py)
    pl([[d*999+128,0],...K,[d*999+128,256]]);c.clip();W();c.restore()
  }
}

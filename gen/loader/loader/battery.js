// white battery icon with a thick dark outline lying on its side, four green cells pop in one by one while a yellow lightning bolt in the middle pulses, at full the battery thumps and the cells flash bright green, then they drop out right to left and it starts over
const{sin,PI,max,min}=Math
export const frames=48,delay=40
const F=[.06,.2,.34,.48],B=.64, // cell fill times, beat time
  bump=(t,a,w)=>t>a&&t<a+w?sin(PI*(t-a)/w):0,
  cl=x=>min(1,max(0,x)),
  back=x=>(x=cl(x),1+2.7*(x-1)**3+1.7*(x-1)**2)
export default(c,t)=>{
  const beat=bump(t,B,.14)
  c.save(),c.translate(118,128),c.scale(1+.07*beat,1+.07*beat)
  c.lineWidth=10,c.strokeStyle='#111',c.fillStyle='#fff'
  c.beginPath(),c.roundRect(80,-22,24,44,7),c.fill(),c.stroke()
  c.beginPath(),c.roundRect(-85,-50,170,100,18),c.fill(),c.stroke()
  F.forEach((f,k)=>{
    const o=cl((t-.84-(3-k)*.025)/.05), // drop out, rightmost first
      s=back((t-f)/.09)*(1-o*o)
    if(s<=0)return
    c.save(),c.translate(-56.25+k*37.5,0),c.scale(s,s)
    c.fillStyle=beat>.2?'#7cf0a0':'#36c96a',c.beginPath(),c.roundRect(-15,-37,30,74,6),c.fill(),c.restore()
  })
  // bolt pulses with every cell and with the beat
  const p=1+.16*max(...F.map(f=>bump(t,f,.12)),beat*1.4)
  c.scale(p,p),c.lineWidth=5,c.fillStyle='#ffd23a'
  c.beginPath(),c.moveTo(5,-31),c.lineTo(-17,5),c.lineTo(-3,5),c.lineTo(-8,31),c.lineTo(16,-7),c.lineTo(2,-7),c.closePath(),c.fill(),c.stroke()
  c.restore()
}

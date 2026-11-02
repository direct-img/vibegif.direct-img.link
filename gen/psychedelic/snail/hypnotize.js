// green snail crawling in place with a rainbow lollipop-spiral shell that spins hypnotically and swirly hypnotized eyes on wobbling eyestalks
export const frames=24,delay=60,rim=4
const T=Math.PI*2,P=[[255,45,149],[255,122,26],[255,225,26],[43,227,107],[31,184,255],[139,77,255]]
export default(c,t)=>{
  const s=Math.sin(T*t),f=5*s,X=96,Y=110-2*Math.cos(T*t),R=62
  // shell: per-pixel rainbow spiral, 2x2 supersampled
  const w=2*R+4,x0=Math.floor(X-R-2),y0=Math.floor(Y-R-2),d=c.createImageData(w,w)
  for(let y=0;y<w;y++)for(let x=0;x<w;x++){
    let r=0,g=0,b=0,n=0
    for(let k=0;k<4;k++){
      const dx=x0+x+(k&1)/2+.25-X,dy=y0+y+(k>>1)/2+.25-Y,q=Math.hypot(dx,dy)
      if(q>R)continue
      const u=q/R*2-Math.atan2(dy,dx)/T-t,p=P[(Math.floor(u*6)%6+6)%6]
      r+=p[0];g+=p[1];b+=p[2];n++
    }
    if(n){const o=(y*w+x)*4;d.data.set([r/n,g/n,b/n,255],o)}
  }
  c.putImageData(d,x0,y0)
  c.translate(-8,-14)
  c.beginPath();c.arc(X+8,Y+14,R,0,T);c.stroke()
  c.lineWidth=5;c.strokeStyle='#fff'
  c.beginPath();c.arc(X+8,Y+14,R-12,3.6,4.3);c.stroke()
  // body, drawn behind the shell
  c.globalCompositeOperation='destination-over'
  c.lineWidth=7;c.strokeStyle='#111';c.fillStyle='#c6f7a8'
  c.beginPath()
  c.moveTo(18,214)
  c.quadraticCurveTo(70,188,120,186)
  c.lineTo(178,186)
  c.bezierCurveTo(184,156,192,136,212+f,134)
  c.bezierCurveTo(238+f,134,246+f,160,238+f,190)
  c.quadraticCurveTo(232+f,214,204+f,214)
  c.closePath()
  c.stroke();c.fill()
  c.globalCompositeOperation='source-over'
  // eyestalks with spiral eyes
  for(const[bx,ex,ph]of[[206,198,0],[222,230,1.3]]){
    const x=ex+f+5*Math.sin(T*t+ph),y=86+3*Math.cos(T*t*2+ph)
    c.strokeStyle='#111';c.lineWidth=11;c.beginPath();c.moveTo(bx+f,140);c.quadraticCurveTo(bx+f,110,x,y);c.stroke()
    c.strokeStyle='#c6f7a8';c.lineWidth=4;c.stroke()
    c.lineWidth=5;c.strokeStyle='#111';c.fillStyle='#fff'
    c.beginPath();c.arc(x,y,13,0,T);c.fill();c.stroke()
    c.lineWidth=2.2;c.beginPath()
    for(let a=0;a<T*2.6;a+=.2)c.lineTo(x+a*.6*Math.cos(a-T*t*2),y+a*.6*Math.sin(a-T*t*2))
    c.stroke()
  }
  // smile
  c.lineWidth=4;c.beginPath();c.arc(226+f,178,9,.3,1.6);c.stroke()
  c.fillStyle='#ff8fc8';c.beginPath();c.arc(214+f,168,5,0,T);c.fill()
}

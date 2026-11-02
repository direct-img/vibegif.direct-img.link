// rainbow spiral tie-dye t-shirt hanging from a clothesline by two wooden pegs, the dye spiral slowly spinning while the shirt flutters in the breeze
export const frames=18,delay=80
const T=Math.PI*2,{sin,cos,atan2,hypot,floor}=Math
const P=[[255,46,147],[255,122,26],[255,210,31],[61,220,106],[30,200,255],[123,92,255]]
// shirt outline in local coords, top hangs at y≈50
const S=[[104,50],[112,60],[128,65],[144,60],[152,50],[186,56],[228,92],[206,118],[190,104],[193,226],[128,231],[63,226],[66,104],[50,118],[28,92],[70,56]]
const pts=[]
S.forEach((p,i)=>{
  const q=S[(i+1)%S.length]
  for(let k=0;k<8;k++)pts.push([p[0]+(q[0]-p[0])*k/8,p[1]+(q[1]-p[1])*k/8])
})
export default(c,t)=>{
  const dx=y=>7*sin(T*t-(y-50)*.025)*(Math.max(0,y-50)/180)**1.3,shirt=()=>{
    c.beginPath()
    for(const[x,y]of pts)c.lineTo(x+dx(y),y)
    c.closePath()
  }
  c.fillStyle='#fff'
  shirt()
  c.fill()
  const d=c.getImageData(0,0,256,256),a=d.data,rot=T*t
  for(let Y=40;Y<240;Y++){
    const o=dx(Y)
    for(let X=0;X<256;X++){
      const j=(Y*256+X)*4
      if(!a[j+3])continue
      let R=0,G=0,B=0
      for(let s=0;s<4;s++){
        const x=X+(s&1)*.5-o-128+.25,y=Y+(s>>1)*.5-140+.25,r=hypot(x,y),th=atan2(y,x)-rot
        const v=th/T-r/64+.035*sin(9*th+r*.18)+.02*sin(17*th-r*.13)+.015*sin(r*.3),f=(v%1+1)%1*6,b=floor(f)%6,g=f-floor(f)
        const w=g<.06+.07*sin(11*th+r*.35)+.04*sin(r*.9)?.85:0,m=g>.82?(g-.82)*2.5:0,[p,q,z]=P[b],[p2,q2,z2]=P[(b+1)%6]
        R+=(p+(p2-p)*m)*(1-w)+255*w
        G+=(q+(q2-q)*m)*(1-w)+255*w
        B+=(z+(z2-z)*m)*(1-w)+255*w
      }
      a[j]=R/4
      a[j+1]=G/4
      a[j+2]=B/4
    }
  }
  c.putImageData(d,0,0)
  // clothesline behind
  c.globalCompositeOperation='destination-over'
  c.strokeStyle='#8d84a3'
  c.lineWidth=4
  c.beginPath()
  c.moveTo(-4,40)
  c.quadraticCurveTo(128,60,260,40)
  c.stroke()
  c.globalCompositeOperation='source-over'
  c.strokeStyle='#111'
  c.lineWidth=6
  shirt()
  c.stroke()
  // neck rib + cuffs
  c.lineWidth=4
  c.beginPath()
  c.moveTo(97,52)
  c.bezierCurveTo(104,76,152,76,159,52)
  c.moveTo(206+dx(105),105)
  c.lineTo(217+dx(92),92)
  c.moveTo(50+dx(105),105)
  c.lineTo(39+dx(92),92)
  c.stroke()
  // pegs
  c.lineWidth=3.5
  for(const x of[82,174]){
    c.fillStyle='#e0a96d'
    c.beginPath()
    c.roundRect(x-6,36,12,30,4)
    c.fill()
    c.stroke()
    c.beginPath()
    c.moveTo(x,40)
    c.lineTo(x,62)
    c.stroke()
    c.fillStyle='#b9b3c9'
    c.beginPath()
    c.roundRect(x-8,46,16,6,2)
    c.fill()
    c.stroke()
  }
}

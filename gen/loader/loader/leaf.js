// big orange maple leaf with a bold black outline drifting down from the top, swaying side to side and flipping over to show its paler back, landing with a bounce on a chunky rust-brown heap of big red, orange and yellow leaves and sinking into it as the next leaf pops in
export const frames=40,delay=60
const{sin,cos,min,max,PI}=Math,T=2*PI
const cl=x=>min(1,max(0,x)),io=x=>x<.5?2*x*x:1-2*(1-x)**2
const back=x=>x<=0?0:1+2.7*(x-1)**3+1.7*(x-1)**2
// right half of a maple leaf outline, unit size, stem at the bottom
const H=[[0,-1],[.16,-.6],[.5,-.78],[.4,-.36],[.94,-.32],[.62,-.02],[.74,.3],[.28,.2],[0,.42]]
const P=[...H,...H.slice(1,-1).reverse().map(([x,y])=>[-x,y])]
const leaf=(c,x,y,a,s,sx,f,v)=>{
  c.save(),c.translate(x,y),c.rotate(a),c.scale(s*sx,s)
  c.lineWidth=7/s/max(.3,Math.abs(sx))**.5
  c.beginPath(),c.moveTo(0,.42),c.lineTo(0,.78),c.stroke()
  c.beginPath(),P.forEach(([px,py])=>c.lineTo(px,py)),c.closePath(),c.fillStyle=f,c.stroke(),c.fill()
  c.beginPath();for(const[px,py]of[[0,-.8],[.42,-.62],[.76,-.28],[.6,.22],[-.42,-.62],[-.76,-.28],[-.6,.22]])c.moveTo(0,.36),c.lineTo(px*.8,py*.8+.07)
  c.strokeStyle=v,c.lineWidth=3.4/s,c.stroke(),c.restore()
}
const Y='#f4b52f',Yv='#c98a18',Rd='#d9432b',Rv='#9c2d1c',O='#ef7a24',Ov='#b4561a'
const PILE=[[-56,206,-1.2,Y,Yv],[56,208,1.3,Rd,Rv],[-26,186,-.75,Rd,Rv],[28,184,.8,Y,Yv],[0,212,.05,O,Ov]]
export default(c,t)=>{
  // leaf clock k, shifted so the first frame shows a leaf mid-air: pop in, fall with a pendulum sway and one flip,
  // bounce, then sink; the previous leaf (clock k+1) is still sinking while the next one pops in
  const k=(t+.18)%1
  for(const m of[k+1,k]){
    if(m>1.08)continue
    const u=cl(m/.7),ph=2.5*PI*u,l=max(0,m-.7)
    const x=128-40*cos(ph)*(1-u*.75),y=58+110*u-14*sin(ph)**2*(1-u)+(m>.86?66*io(cl((m-.86)/.2)):-5*sin(cl(l/.12)*PI))
    const a=.2+1.05*io(u)+.55*sin(ph)*(1-u)**1.5,sx=cos(T*io(u)),s=46*back(cl(m/.1))
    if(s>1)c.save(),c.beginPath(),c.rect(0,0,256,234),c.clip(),leaf(c,x,y,a,s,sx,sx>0?'#f5822a':'#ffb760',sx>0?'#c2551a':'#e38a3a'),c.restore()
  }
  const lnd=max(0,k-.7)
  // heap drawn in front so the landed leaf nestles and sinks into it, squashing a little on impact
  const q=1-.08*sin(PI*cl(lnd/.1))*(1-cl(lnd/.2))
  c.translate(128,234),c.scale(2-q,q),c.translate(-128,-234)
  c.lineWidth=7,c.beginPath(),c.moveTo(46,234),c.bezierCurveTo(50,198,92,178,128,178),c.bezierCurveTo(164,178,206,198,210,234),c.closePath()
  c.fillStyle='#b4532a',c.stroke(),c.fill()
  PILE.forEach(([px,py,pa,f,v])=>leaf(c,128+px,py,pa,33,1,f,v))
}

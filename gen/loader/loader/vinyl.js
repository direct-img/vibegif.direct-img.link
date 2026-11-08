// black vinyl record spinning on a tan wooden turntable, its coral-and-yellow split label turning, grey glints on the grooves with a white twinkle, the silver tone arm resting on it and bobbing gently
const{sin,cos,max,abs,PI}=Math,T=2*PI
export const frames=36,delay=40
const ink='#111',X=-18,Y=6
const P=(c,f,fill,lw=6)=>{c.beginPath(),f(),fill&&(c.fillStyle=fill,c.fill()),lw&&(c.lineWidth=lw,c.strokeStyle=ink,c.stroke())}
const star=(c,r)=>{for(let j=0;j<8;j++){const a=j*PI/4,s=j%2?r*.28:r;c.lineTo(s*cos(a),s*sin(a))}c.closePath()}
export default(c,t)=>{
  c.translate(128,128)
  // plinth, buttons
  P(c,()=>c.roundRect(-108,-98,216,196,18),'#e0a15a')
  P(c,()=>c.arc(88,74,9,0,T),'#ff6b6b',5)
  P(c,()=>c.arc(88,48,9,0,T),'#2ec4b6',5)
  // platter and record
  P(c,()=>c.arc(X,Y,80,0,T),'#b9bec8')
  P(c,()=>c.arc(X,Y,73,0,T),'#1c1c24',4)
  c.lineWidth=2,c.strokeStyle='#33334a'
  for(let r=34;r<70;r+=6)c.beginPath(),c.arc(X,Y,r,0,T),c.stroke()
  // light glints on the grooves, nudged as the slight warp tilts the record
  const d=.022*sin(T*3*t)+.01*sin(T*5*t)
  c.lineWidth=4,c.strokeStyle='#7d7d96'
  for(const b of[-2.2+3*d,.94+3*d])for(let r=37;r<70;r+=6)c.beginPath(),c.arc(X,Y,r,b-.24+r/400,b+.2-r/500),c.stroke()
  // label turns once per loop
  c.save(),c.translate(X,Y),c.rotate(T*t)
  P(c,()=>c.arc(0,0,26,0,T),'#ff6b6b',4)
  P(c,()=>{c.arc(0,0,26,0,PI),c.closePath()},'#ffd166',0)
  P(c,()=>c.arc(0,0,26,0,T),0,4)
  P(c,()=>c.arc(14,-8,3.5,0,T),'#fff',0)
  P(c,()=>c.arc(0,0,4.5,0,T),'#e8eaf0',3)
  c.restore()
  // twinkle pops on the upper glint
  const g=max(0,1-abs(t-.5)/.14)
  if(g>0){c.save(),c.translate(X-34,Y-48),c.scale(g,g),P(c,()=>star(c,16),'#fff',3),c.restore()}
  // tone arm rocks on its pivot riding the warp
  c.save(),c.translate(80,-66),c.rotate(d)
  P(c,()=>c.roundRect(-10,-30,20,16,4),'#7a7f8c',5)
  c.lineWidth=13,c.strokeStyle=ink
  const arm=()=>{c.beginPath(),c.moveTo(0,-14),c.lineTo(2,80),c.lineTo(-34,108),c.stroke()}
  arm(),c.lineWidth=6,c.strokeStyle='#dfe2e8',arm()
  c.save(),c.translate(-38,111),c.rotate(.66)
  P(c,()=>c.roundRect(-14,-8,24,16,3),'#dfe2e8',5)
  c.restore()
  P(c,()=>c.arc(0,0,15,0,T),'#b9bec8')
  P(c,()=>c.arc(0,0,6,0,T),'#55596a',0)
  c.restore()
}

// round glass fishbowl with light blue water, a gently rippling surface and a pebble floor with green weed on a wooden stand, an orange goldfish swimming laps and flipping around at each side while white bubbles rise to the top, bold black outlines
export const frames=40,delay=60
const{sin,cos,tanh,asin,max,PI}=Math,T=2*PI,X=128,Y=130,R=88
const h=n=>Math.abs(sin(n*127.1+311.7)*43758.5%1)
const PEB=[...Array(11)].map((_,k)=>[50+k*15+h(k)*6,190-h(k+9)*6+(k%2)*5,8+h(k+3)*4,['#c98f5b','#93a7bb','#e7b77d','#8cbf8a','#d98a7a'][k%5]])
const O=asin(52/R)
export default(c,t)=>{
  const bowl=()=>(c.beginPath(),c.arc(X,Y,R,-PI/2+O,1.5*PI-O))
  // stand
  c.lineWidth=7,c.fillStyle='#b9814f',c.beginPath(),c.roundRect(78,210,100,26,9),c.stroke(),c.fill()
  c.fillStyle='#9a6838',c.fillRect(82,224,92,8)
  // glass and water, clipped to the bowl
  c.save(),bowl(),c.closePath(),c.fillStyle='#e9f7fd',c.fill(),c.clip()
  const wl=x=>80+3*sin(x/14-T*t)
  c.beginPath(),c.moveTo(30,240);for(let x=30;x<=228;x+=6)c.lineTo(x,wl(x));c.lineTo(228,240)
  c.fillStyle='#78c8ee',c.fill(),c.lineWidth=4,c.strokeStyle='#bfe8fa',c.stroke(),c.strokeStyle='#111'
  // sand and pebbles
  c.fillStyle='#e8cf9c',c.fillRect(30,194,200,50)
  c.lineWidth=3,PEB.forEach(([x,y,r,f])=>{c.fillStyle=f,c.beginPath(),c.ellipse(x,y+6,r*1.2,r,0,0,T),c.fill(),c.stroke()})
  // weed swaying
  for(const[bx,hh,p]of[[68,78,0],[82,56,2]]){
    c.beginPath(),c.moveTo(bx,196)
    for(let k=1;k<=6;k++)c.lineTo(bx+6*sin(k*.9+p-T*t)*k/6,196-hh*k/6)
    c.lineWidth=12,c.stroke(),c.lineWidth=5,c.strokeStyle='#4cb35a',c.stroke(),c.strokeStyle='#111'
  }
  // bubbles
  for(let k=0;k<3;k++){
    const u=(t+k/3)%1,r=3+6*u,y=188-102*u,x=150+16*k-14*u+4*sin(T*2*u)
    if(u<.96)c.lineWidth=3,c.fillStyle='#fff',c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  }
  // goldfish: upper pass to the right, lower pass to the left, flips at the sides
  const th=T*t,fx=X+54*sin(th),fy=Y+6-18*cos(th),sx=tanh(3.5*cos(th))/tanh(3.5),w=.35*sin(T*6*t)
  c.save(),c.translate(fx,fy),c.scale(sx,1),c.lineWidth=5/max(.25,Math.abs(sx))**.5
  c.save(),c.translate(-20,0),c.rotate(w),c.beginPath(),c.moveTo(4,0),c.quadraticCurveTo(-14,-18,-22,-14),c.quadraticCurveTo(-14,0,-22,14),c.quadraticCurveTo(-14,18,4,0)
  c.fillStyle='#f0641e',c.stroke(),c.fill(),c.restore()
  c.beginPath(),c.moveTo(-8,-14),c.quadraticCurveTo(0,-26,12,-14),c.fillStyle='#f0641e',c.stroke(),c.fill()
  c.beginPath(),c.ellipse(0,0,26,17,0,0,T),c.fillStyle='#ff9a3c',c.stroke(),c.fill()
  c.beginPath(),c.ellipse(-4,4,7,4,.6+w,0,T),c.fillStyle='#f0641e',c.fill()
  c.beginPath(),c.arc(12,-4,5.5,0,T),c.fillStyle='#fff',c.fill(),c.beginPath(),c.arc(13.5,-4,3,0,T),c.fillStyle='#111',c.fill()
  c.restore(),c.restore()
  // glass shine, outline and lip
  c.lineWidth=7,c.strokeStyle='#fff',c.beginPath(),c.arc(X,Y,R-14,PI*1.05,PI*1.3),c.stroke()
  c.beginPath(),c.arc(X,Y,R-14,PI*.82,PI*.9),c.stroke(),c.strokeStyle='#111'
  c.lineWidth=8,bowl(),c.stroke()
  c.fillStyle='#e9f7fd',c.lineWidth=6,c.beginPath(),c.roundRect(X-62,Y-R*cos(O)-8,124,14,7),c.stroke(),c.fill()
}

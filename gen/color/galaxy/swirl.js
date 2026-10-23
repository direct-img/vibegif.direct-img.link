// spiral galaxy turning on a round night-sky sticker, two candy-striped arms around a smiley core, stars twinkling
// both arms match, so half a turn per loop is seamless; the dark sky gets a white rim for dark backgrounds
const{sin,cos,PI,exp,max,min,hypot}=Math,T=2*PI
export const frames=20,delay=90
const SKY='#2b3a7a',ARM='#9775fa',STRIPE='#faa2c1',BL='#ff8787',SQ=.64,M=9.4
const spk=(c,x,y,s)=>{c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const disc=()=>{c.beginPath();c.arc(128,128,112,0,T)},ph=-t*PI
  disc();c.lineWidth=18;c.strokeStyle='#fff';c.stroke();c.fillStyle=SKY;c.fill();c.strokeStyle='#111'
  c.save();disc();c.clip()
  for(const[x,y,o]of[[44,62,0],[206,50,.3],[218,190,.6],[50,198,.15],[128,30,.8],[136,230,.45]])spk(c,x,y,2+4*max(0,sin((t+o)*2*T)))
  const P=(th,k)=>{const r=16*exp(.19*th),q=th+k*PI+ph;return[128+r*cos(q),128+r*sin(q)*SQ]}
  for(const k of[0,1]){
    const C=[];for(let th=0;th<=M;th+=.2)C.push([P(th,k),th])
    const side=(f,g)=>C.map(([[x,y],th],j)=>{const[[x0,y0]]=C[max(0,j-1)],[[x1,y1]]=C[min(C.length-1,j+1)],l=hypot(x1-x0,y1-y0),w=f*(24*(1-th/M)+2);return[x-(y1-y0)/l*w*g,y+(x1-x0)/l*w*g]})
    for(const[f,col,lw]of[[1,ARM,5],[.4,STRIPE,0]]){c.beginPath();for(const[x,y]of[...side(f,1),...side(f,-1).reverse()])c.lineTo(x,y);c.closePath();c.fillStyle=col;c.fill();if(lw)c.lineWidth=lw,c.stroke()}
    c.fillStyle='#fff';for(const th of[3.4,5.2,7,8.4]){const[x,y]=P(th,k);c.beginPath();c.arc(x,y,2.6,0,T);c.fill()}
  }
  c.lineWidth=5;c.fillStyle='#fff3bf';c.beginPath();c.ellipse(128,128,36,28,0,0,T);c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.beginPath();c.ellipse(128,128,26,20,0,0,T);c.fill();c.lineWidth=4;c.stroke()
  for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,127,4.5,PI*1.15,PI*1.85),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.arc(128,130,5,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*16,133,4,2.5,0,0,T),c.fill()
  c.restore();c.lineWidth=7;disc();c.stroke()
}

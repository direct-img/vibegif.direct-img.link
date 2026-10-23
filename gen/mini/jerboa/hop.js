// jerboa hopping in place: it crouches, springs up on its long kangaroo legs with ears swept back and tufted tail swinging, then lands and squashes
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=75,rim=3,rimColor='#111'
// leg pose e: -1 crouched, 1 fully pushed off. keys are [t,e], eased between
const K=[[0,-1],[.2,1],[.5,.2],[.78,.5],[.92,-1],[1,-1]]
const pose=t=>{let i=0;while(K[i+1][0]<t)i++;const[a,x]=K[i],[b,y]=K[i+1],u=(t-a)/(b-a);return x+(y-x)*(1-cos(PI*u))/2}
const L=[22,34,26],G=232
const ang=e=>{const l=(a,b,c)=>e<0?b+(b-a)*e:b+(c-b)*e;return[l(.7,1,1.7),l(2.7,2.3,1.6),l(.2,.4,1.4)]}
const leg=e=>{let x=0,y=0;const p=[[0,0]];for(const[k,a]of ang(e).entries())x+=L[k]*cos(a),y+=L[k]*sin(a),p.push([x,y]);return p}
const rest=t=>{const p=leg(pose(t)).at(-1);return[142-p[0],G-14-p[1]]}
export default(c,t)=>{
  const air=t>.2&&t<.78,p=(t-.2)/.58,e=pose(t)
  let[bx,by]=rest(t)
  if(air){const[x0,y0]=rest(.2),[x1,y1]=rest(.78);bx=x0+(x1-x0)*p;by=y0+(y1-y0)*p-130*p*(1-p)}
  const ear=-.3*cos(T*(t-.2)),tl=.4*sin(T*(t-.15)),bl=t>.42&&t<.5
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.save();c.translate(bx-26,by+8);c.rotate(tl)
  c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-24,10,-48,6,-66,-8);c.stroke()
  c.lineWidth=6;shape(()=>c.ellipse(-72,-12,13,8,.5,0,T));c.restore()
  for(const d of[0,6]){
    const P=leg(e).map(([x,y])=>[bx-14+x-d,by+14+y])
    c.lineWidth=7;c.beginPath();c.moveTo(...P[0]);for(const q of P.slice(1))c.lineTo(...q);c.stroke()
  }
  shape(()=>c.ellipse(bx-12,by+8,18,22,-.3,0,T))
  shape(()=>c.ellipse(bx,by,32,26,-.25,0,T))
  const hx=bx+30,hy=by-22
  for(const[d,w]of[[-8,0],[2,.25]]){c.save();c.translate(hx+d,hy-14);c.rotate(-.25+ear+w);shape(()=>c.ellipse(0,-22,11,24,0,0,T));c.restore()}
  shape(()=>c.ellipse(hx,hy,24,20,.2,0,T))
  c.lineWidth=5;c.beginPath();c.moveTo(bx+22,by+6);c.lineTo(bx+32,by+18);c.stroke()
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(hx+6,hy-4,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(hx+6,hy-2,6,0,T),c.fill()
  c.beginPath();c.arc(hx+19,hy,3,0,T);c.fill()
  c.lineWidth=2;c.beginPath();c.moveTo(hx+4,hy+10);c.lineTo(hx+17,hy+9);c.moveTo(hx+4,hy+14);c.lineTo(hx+15,hy+17);c.stroke()
}

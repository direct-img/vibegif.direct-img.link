// five rounded bars in pink, orange, amber, green and blue standing on a common baseline, jumping to different heights on each beat like audio levels, with a springy overshoot
export const frames=48,delay=40
const C=['#ff4d6d','#ff8a3d','#f5b82e','#2ec98a','#3a9bff'],
  // level of each bar on each of 8 beats (0..1), wraps around for the loop
  H=[[.3,.75,.45,.95,.35,.7,.25,.85],[.65,.4,1,.55,.85,.35,.95,.5],[.9,.6,.75,.35,1,.7,.5,.8],[.45,.95,.55,.8,.4,.9,.65,.3],[.25,.55,.3,.6,.7,.45,.8,.4]],
  back=p=>1+2.4*(p-1)**3+1.4*(p-1)**2 // ease-out with a small overshoot
export default(c,t)=>{
  for(let k=0;k<5;k++){
    const b=(t*8-k*.12+8)%8,n=b|0,p=b-n,  // tiny per-bar lag keeps it organic
      a=H[k][n],z=H[k][(n+7)%8],h=z+(a-z)*back(Math.min(1,p*1.6)),
      tall=28+h*140
    c.fillStyle=C[k],c.beginPath(),c.roundRect(38+k*38,214-tall,28,tall,14),c.fill()
  }
}

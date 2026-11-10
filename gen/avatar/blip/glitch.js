// round violet avatar blip glitching: a glossy violet ball with two white square pixel eyes whose picture suddenly tears into sideways-shifted slices with mint and pink colour fringes and stray pixel blocks, snaps back together, then blinks in surprise
export const frames=60,delay=40
const{sin,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
G='000000003500000000799869785300000000046000000000000000000000'
export default(c,t,i)=>{
  let g=G[i]/9,n=i>>1,r=a=>abs(sin(a*91.7+n*37.3)*4e4)%1,
  u=sin(P*k((i-27)/8))**2,z=max(k(2.5-abs(i-44)),k(2.5-abs(i-50))),
  l=-10*s(i,10,12)+20*s(i,13,15)-10*s(i,16,18),
  A=(x,f,v)=>{
    c.save();c.translate(128+x+l/8,132-3*u-3*sin(4*P*t))
    c.fillStyle=f||'#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
    if(!f){
      c.save();c.clip()
      c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
      c.restore()
      c.globalAlpha=.55;c.fillStyle='#fff'
      c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
      c.globalAlpha=1
      c.translate(l,-6);c.scale(1-abs(l)/150,1)
      for(let j=v?6:2;j--;){
        let d=j%2*2-1,q=max(z,d>0&&i>26&&i<30),
        w=22+g*14*(r(d)-.4)+4*u+6*q,h=26+g*20*(r(d+5)-.5)+6*u-20*q
        c.fillStyle=['#fff','#1fbf9c','#ff7eb6'][j>>1]
        c.beginPath();c.roundRect(d*28-w/2+[0,-v,v][j>>1],-h/2,w,h,min(6,h/2));c.fill()
      }
    }
    c.restore()
  }
  for(let b=0,y=0;y<256;b++){
    let h=g?14+50*r(b)|0:256,x=r(b+50)>.3?(r(b+90)*2-1)*24*g|0:0,v=g*6+1|0,w=12+12*r(b+9)|0
    c.save();c.beginPath();c.rect(0,y,256,h);c.clip()
    if(g){
      A(x-v,'#1fbf9c');A(x+v,'#ff7eb6')
      if(r(b+7)>.4&&y>40&&y<200){
        c.fillStyle=['#ffc62e','#1fbf9c','#ff7eb6'][b%3]
        c.fillRect(r(b+3)>.5?8+26*r(b+4)|0:248-w-26*r(b+4)|0,y+3,w,8)
      }
    }
    A(x,0,g&&v);c.restore();y+=h
  }
}

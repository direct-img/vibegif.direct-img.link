// hearts of different colors floating up and swaying, swelling in and shrinking away as they rise
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const H=[[60,0,'#ff6b6b',34],[128,.5,'#f783ac',44],[196,.25,'#b197fc',30],[96,.75,'#ffa94d',24],[168,.85,'#ff8787',26],[40,.4,'#faa2c1',22]]
export default(c,t)=>{
  for(const[x0,o,col,r]of H){
    const p=(t+o)%1,s=r*sin(PI*p)/22,x=x0+14*sin(p*T+o*9),y=236-p*210
    if(s<.15)continue
    c.save();c.translate(x,y);c.rotate(.25*sin(p*T*2+o*5));c.scale(s,s)
    c.beginPath();c.moveTo(0,16);c.bezierCurveTo(-26,-2,-18,-24,0,-11);c.bezierCurveTo(18,-24,26,-2,0,16);c.restore()
    c.fillStyle=col;c.lineWidth=Math.min(7,3+s*2);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x-8*s,y-8*s,3.5*s,2*s,-.6,0,T);c.fill()
  }
}

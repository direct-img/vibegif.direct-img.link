// happy coffee mug rocking a little while steam curls up out of it
const{sin,PI}=Math,T=2*PI
export const delay=90
export default(c,t)=>{
  c.save();c.translate(119,214);c.rotate(.04*sin(t*T));c.translate(-119,-214)
  for(const[w,s]of[[27,'#111'],[13,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(172,160,26,-PI/2,PI/2),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.moveTo(66,120);c.lineTo(66,192);c.quadraticCurveTo(66,214,88,214);c.lineTo(150,214);c.quadraticCurveTo(172,214,172,192);c.lineTo(172,120)
  c.ellipse(119,120,53,12,0,0,PI,true);c.fill();c.stroke()
  c.beginPath();c.ellipse(119,120,53,12,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(119,121,42,7,0,0,T);c.fill()
  c.lineWidth=6
  for(const x of[100,138])c.beginPath(),c.arc(x,166,8,PI*1.15,PI*1.85),c.stroke()
  c.beginPath();c.arc(119,174,10,PI*.2,PI*.8);c.stroke()
  c.restore()
  for(const[x0,top,ph]of[[93,46,0],[119,30,.5],[145,46,1]])
    for(const[w,s]of[[13,'#111'],[6,'#fff']]){
      c.lineWidth=w;c.strokeStyle=s;c.beginPath()
      for(let y=100;y>=top;y-=2)c.lineTo(x0+(2+5*(100-y)/70)*sin((100-y)/40*T-t*T+ph),y)
      c.stroke()
    }
}

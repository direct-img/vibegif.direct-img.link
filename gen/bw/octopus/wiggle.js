// octopus bobbing with all six arms wiggling under it
const{sin,PI}=Math,T=2*PI
export default(c,t)=>{
  const b=4*sin(t*T)
  for(let i=0;i<6;i++){
    const x0=78+i*20,d=(i-2.5)/2.5
    for(const[l,s]of[[26,'#111'],[12,'#fff']]){
      c.lineWidth=l;c.strokeStyle=s;c.beginPath()
      for(let y=130;y<=224;y+=3){const k=(y-130)/94;c.lineTo(x0+d*k*36+13*k*sin(k*5-t*T+i*1.1),y+b*(1-k))}
      c.stroke()
    }
  }
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(128,98+b,64,60,0,0,T);c.fill();c.stroke()
  c.lineWidth=5;for(const[x,y,r]of[[104,64,7],[150,56,9],[130,76,5]])c.beginPath(),c.arc(x,y+b,r,0,T),c.stroke()
  c.fillStyle='#111';for(const x of[106,150])c.beginPath(),c.ellipse(x,112+b,8,11,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[103,147])c.beginPath(),c.arc(x,108+b,3,0,T),c.fill()
  c.beginPath();c.arc(128,130+b,9,.15*PI,.85*PI);c.stroke()
  c.lineWidth=3;for(const x of[86,162])for(const o of[-6,0,6])c.beginPath(),c.moveTo(x+o-2,132+b),c.lineTo(x+o+3,124+b),c.stroke()
}

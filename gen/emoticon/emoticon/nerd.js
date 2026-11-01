// emoticon nerd with round glasses and buck teeth, glasses slip down the nose, a mitten pushes them back up and they gleam
export const frames=32,delay=60
const K='#111',W='#fff',G='#9a9a9a',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t)=>{
  const up=sm((t-.04)/.13)-sm((t-.31)/.13),          // hand pops up to the rim and drops away
  ps=sm((t-.18)/.07),                                  // the push
  g=11*(1-ps)+11*sm((t-.44)/.54),                     // glasses slide back down the nose over the rest of the loop
  fl=Math.sin(P*cl((t-.25)/.17)),                      // gleam right after the push
  ly=-14+g,br=4*fl
  c.translate(128,128)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // eyes stay put while the glasses move over them
  for(const m of[-1,1]){
    c.lineWidth=7;c.beginPath();c.moveTo(m*24,-50-br);c.quadraticCurveTo(m*36,-58-br,m*50,-50-br);c.stroke()
    c.fillStyle=K;c.beginPath();c.ellipse(m*36,-14,9,11,0,0,2*P);c.fill()
  }
  // round glasses: thick rims, a bridge, arms to the ears, a slanted gleam across the lenses
  for(const m of[-1,1]){
    if(fl>0){
      c.save();c.beginPath();c.arc(m*36,ly,25,0,2*P);c.clip();c.fillStyle=G
      const o=-30+60*cl((t-.25)/.17);for(const[a,w]of[[0,11],[18,5]]){c.beginPath();c.moveTo(m*36+o+a-20,ly+30);c.lineTo(m*36+o+a+w-20,ly+30);c.lineTo(m*36+o+a+w+20,ly-30);c.lineTo(m*36+o+a+20,ly-30);c.fill()}
      c.restore()
    }
    c.lineWidth=8;c.beginPath();c.arc(m*36,ly,25,0,2*P);c.stroke()
    c.beginPath();c.moveTo(m*61,ly-6);c.lineTo(m*93,ly-14);c.stroke()
  }
  c.beginPath();c.moveTo(-11,ly-4);c.quadraticCurveTo(0,ly-10,11,ly-4);c.stroke()
  // goofy grin with two big buck teeth
  c.fillStyle=K;c.beginPath();c.moveTo(-30,34);c.quadraticCurveTo(0,40,30,34);c.quadraticCurveTo(26,58,0,58);c.quadraticCurveTo(-26,58,-30,34);c.fill()
  c.fillStyle=W;c.lineWidth=6
  for(const x of[-13,0]){c.beginPath();c.moveTo(x,36);c.lineTo(x,58);c.quadraticCurveTo(x,63,x+5,63);c.lineTo(x+8,63);c.quadraticCurveTo(x+13,63,x+13,58);c.lineTo(x+13,36);c.fill();c.stroke()}
  c.lineWidth=7;c.beginPath();c.moveTo(-30,34);c.quadraticCurveTo(0,40,30,34);c.stroke()
  // mitten pops up beside the face and shoves the rim back up
  const k=sm(up*1.6)
  if(k>.2){
    const hx=80+6*up,hy=100+(ly+22-100)*up
    c.save();c.translate(hx,hy);c.rotate(-.25+.35*(1-up));c.scale(k,k);c.fillStyle=W;c.lineWidth=7
    c.beginPath();c.ellipse(0,0,18,26,0,0,2*P);c.fill();c.stroke()
    c.beginPath();c.ellipse(-15,6,7,12,-.5,0,2*P);c.fill();c.stroke();c.restore()
  }
}

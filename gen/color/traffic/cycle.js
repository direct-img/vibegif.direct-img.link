// traffic light cycling green, yellow, red, the lit lamp has a face that grins, panics, then glares
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=90
const HOUSE='#495057',HD='#343a40',POLE='#adb5bd',L=[['#ff6b6b','#6b3434'],['#ffd43b','#6b5f2c'],['#51cf66','#2c5a37']],DROP='#a5d8ff'
export default(c,t,i)=>{
  const k=t<.42?2:t<.58?1:0
  c.fillStyle=POLE;c.beginPath();c.roundRect(114,200,28,52,6);c.fill();c.stroke()
  const h=()=>{c.beginPath();c.roundRect(70,8,116,206,30)}
  c.lineWidth=18;c.strokeStyle='#fff';h();c.stroke();c.fillStyle=HOUSE;h();c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()
  for(let j=0;j<3;j++){
    const y=46+j*65,on=j==k,[lc,dc]=L[j]
    c.fillStyle=HD;c.beginPath();c.arc(128,y,31,0,T);c.fill()
    if(on)for(const a of[-.5,0,.5,PI-.5,PI,PI+.5]){for(const[w,st]of[[9,'#111'],[3.5,lc]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(128+cos(a)*34,y+sin(a)*34),c.lineTo(128+cos(a)*42,y+sin(a)*42),c.stroke()}
    c.strokeStyle='#111';c.fillStyle=on?lc:dc;c.lineWidth=5;c.beginPath();c.arc(128,y,25,0,T);c.fill();c.stroke()
    c.fillStyle=on?'#fff':'#868e96';c.beginPath();c.ellipse(118,y-12,6,3.5,-.6,0,T);c.fill()
    if(!on)continue
    c.fillStyle='#111';c.lineWidth=3.5
    if(j==2){
      for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,y-2,5,PI*1.1,PI*1.9),c.stroke()
      c.beginPath();c.moveTo(118,y+5);c.quadraticCurveTo(128,y+20,138,y+5);c.closePath();c.fill()
      c.fillStyle='#ff8787';c.beginPath();c.ellipse(128,y+12,4,2.5,0,0,T);c.fill()
    }else if(j==1){
      c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,y-3,6,0,T),c.fill(),c.stroke()
      c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,y-3+(i%2),2.5,0,T),c.fill()
      c.beginPath();c.ellipse(128,y+11,3.5,4.5,0,0,T);c.fill()
      c.fillStyle=DROP;c.lineWidth=3;const dy=(i%3)*2;c.beginPath();c.moveTo(150,y-16+dy);c.quadraticCurveTo(157,y-6+dy,150,y-4+dy);c.quadraticCurveTo(143,y-6+dy,150,y-16+dy);c.fill();c.stroke()
    }else{
      c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*15,y-14),c.lineTo(128+d*5,y-9),c.stroke()
      for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,y-3,3.5,0,T),c.fill()
      c.beginPath();c.arc(128,y+14,7,PI*1.15,PI*1.85);c.stroke()
    }
  }
}

// Newton's cradle: the end balls take turns swinging out and clacking back while the middle three stay still
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=60
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const A=.42,L=104,P=44,sw=-A*sin(t*T)
  for(const d of[-1,1])D(c,()=>{c.moveTo(128+d*96,40);c.lineTo(128+d*110,222)},14,5)
  c.beginPath();c.roundRect(10,218,236,20,9);c.fill();c.stroke()
  const k=t<.1?176:t>=.5&&t<.6?80:0
  if(k)for(const a of[-.6,0,.6])D(c,()=>{c.moveTo(k+sin(a)*22,P+L-cos(a)*22);c.lineTo(k+sin(a)*38,P+L-cos(a)*38)})
  for(let i=0;i<5;i++){
    const x0=64+32*i,a=i==0&&t<.5||i==4&&t>=.5?sw:0,x=x0+L*sin(a),y=P+L*cos(a)
    D(c,()=>{c.moveTo(x0,P);c.lineTo(x,y)},9,3)
    c.beginPath();c.arc(x,y,16,0,T);c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();c.arc(x,y,9,PI*1.1,PI*1.5);c.stroke();c.lineWidth=7
  }
  c.beginPath();c.roundRect(22,28,212,16,8);c.fill();c.stroke()
}

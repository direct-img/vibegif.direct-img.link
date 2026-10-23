// arcade cabinet whose screen shows a blinking pixel face, joystick wiggling, buttons pressing, marquee lights chasing
const{sin,cos,PI,floor}=Math,T=2*PI
export const frames=16,delay=90
const CAB='#9775fa',CD='#7048e8',MQ='#ffd43b',BUL='#ffa94d',BEZ='#495057',SCR='#212529',PX='#69db7c',HT='#ff6b6b',PANEL='#4dabf7',PD='#1c7ed6',BTN=['#ffd43b','#69db7c'],COIN='#ffa94d'
const FACE=['..........','..##..##..','..##..##..','..........','.#......#.','..######..']
const BLINK=['..........','..........','..##..##..','..........','.#......#.','..######..']
const HEART=['.#.#.','#####','.###.','..#..']
const px=(c,rows,x,y,s,col)=>{c.fillStyle=col;rows.forEach((r,j)=>[...r].forEach((ch,k)=>{if(ch=='#')c.fillRect(x+k*s,y+j*s,s,s)}))}
export default(c,t,i)=>{
  const js=sin(T*t*2),b=floor(t*4)%2,pr=(t*4)%1<.5
  const body=()=>{c.beginPath();c.roundRect(62,40,132,208,12)}
  c.fillStyle=CAB;body();c.fill();c.stroke()
  c.save();body();c.clip();c.fillStyle=CD;c.fillRect(62,40,12,208);c.fillRect(182,40,12,208);c.restore()
  c.lineWidth=5;for(const x of[74,182])c.beginPath(),c.moveTo(x,40),c.lineTo(x,248),c.stroke()
  c.lineWidth=7;body();c.stroke()
  c.fillStyle=MQ;c.beginPath();c.roundRect(52,12,152,44,12);c.fill();c.stroke()
  for(let k=0;k<5;k++){const lit=(k+floor(t*16))%5<2;c.fillStyle=lit?'#fff':BUL;c.lineWidth=4;c.beginPath();c.arc(80+k*24,34,7,0,T);c.fill();c.stroke()}
  c.lineWidth=7;c.fillStyle=BEZ;c.beginPath();c.roundRect(72,64,112,94,10);c.fill();c.stroke()
  c.fillStyle=SCR;c.beginPath();c.roundRect(80,72,96,78,6);c.fill()
  const fl=i==6
  px(c,i==11||i==12?BLINK:FACE,98,92,6,fl?'#fff':PX)
  if(floor(t*8)%2==0)px(c,HEART,84,76,3,HT)
  c.fillStyle='rgba(255,255,255,.06)';for(let y=74;y<150;y+=4)c.fillRect(80,y,96,1.5)
  c.lineWidth=7;c.fillStyle=PANEL;c.beginPath();c.moveTo(48,162);c.lineTo(208,162);c.lineTo(200,194);c.lineTo(56,194);c.closePath();c.fill();c.stroke()
  c.fillStyle=PD;c.beginPath();c.ellipse(96,178,15,6,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  const bx=96+12*js,by=150
  for(const[w,st]of[[10,'#111'],[4,'#ced4da']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(96,177),c.lineTo(bx,by),c.stroke()
  c.strokeStyle='#111';c.fillStyle=HT;c.lineWidth=5;c.beginPath();c.arc(bx,by,11,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(bx-4,by-4,3,0,T);c.fill()
  BTN.forEach((col,k)=>{const x=146+k*28,y=178-k*3,on=k==b&&pr;c.fillStyle=col;c.beginPath();c.ellipse(x,y+(on?2:0),11,on?5:7,0,0,T);c.fill();c.lineWidth=5;c.stroke()})
  c.fillStyle=COIN;c.lineWidth=6;c.beginPath();c.roundRect(104,206,48,32,6);c.fill();c.stroke()
  c.fillStyle='#343a40';for(const x of[114,136])c.beginPath(),c.roundRect(x,213,6,16,2),c.fill()
}

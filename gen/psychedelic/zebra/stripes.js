// front view zebra head whose stripes are alternating black and rainbow bands rippling and flowing down its face like op-art waves, wide dark eyes, striped ears and mane tuft
import{createCanvas}from'@napi-rs/canvas'
export const frames=20,delay=80,rim=3
const S=256,P=['#ff2d6f','#ff8a00','#ffd500','#3ddc4a','#00b7ff','#8b4dff'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)))
// silhouette pieces, drawn mirrored around x=128
const ear=(c,m)=>{c.moveTo(128+m*20,62);c.bezierCurveTo(128+m*30,20,128+m*62,9,128+m*80,13);c.bezierCurveTo(128+m*84,34,128+m*72,66,128+m*48,82)}
const head=(c,m)=>{
  c.moveTo(128,46);c.bezierCurveTo(128+m*34,46,128+m*54,62,128+m*58,92)
  c.bezierCurveTo(128+m*62,118,128+m*46,140,128+m*38,176)
  c.bezierCurveTo(128+m*34,196,128+m*50,206,128+m*48,226)
  c.bezierCurveTo(128+m*46,242,128+m*20,247,128,247)
}
const tuft=c=>{
  c.moveTo(102,66)
  ;[[98,36],[108,52],[109,20],[120,44],[128,12],[136,44],[147,20],[148,52],[158,36],[154,66]].forEach(p=>c.lineTo(...p))
}
const g=createCanvas(S,S).getContext('2d'),reg=(col,f)=>{g.fillStyle=col;for(const m of[1,-1]){g.beginPath();f(g,m);g.closePath();g.fill()}}
reg('#f00',ear);reg('#00f',tuft);reg('#0f0',head)
g.fillStyle='#ff0';g.beginPath();g.ellipse(128,223,44,23,0,0,7);g.fill()
const D=g.getImageData(0,0,S,S).data,Z=new Uint8Array(S*S)
for(let k=0;k<S*S;k++){const o=k*4;if(D[o+3]>0)Z[k]=D[o]>200&&D[o+1]>200?4:D[o+1]>200?1:D[o]>200?2:3}
const line=(c,fs)=>{for(const f of fs)for(const m of[1,-1]){c.beginPath();f(c,m);if(f!=head)c.closePath();c.stroke()}}
export default(c,t)=>{
  c.lineWidth=10;line(c,[ear,tuft,head])
  const q=createCanvas(S,S).getContext('2d'),im=q.createImageData(S,S),d=im.data,T=2*Math.PI*t
  const U=(x,y,z)=>{
    const dx=Math.abs(x-128)
    return(z==1?(y+Math.max(.25,1.9-(y-46)*.014)*dx)/11:z==2?(y*.5+dx*.9)/8:dx/7)
      +.45*Math.sin(T+y*.045-dx*.02)+.25*Math.sin(2*T-dx*.06)-6*t
  }
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){
    const k=y*S+x,z=Z[k],o=k*4;if(!z)continue
    d[o+3]=255
    if(z==4){d[o]=d[o+1]=d[o+2]=34;continue}
    // antialiased band edges: distance to the nearest edge in px from the local gradient
    const X=x+.5,Y=y+.5,u=U(X,Y,z),g=Math.hypot(U(X+1,Y,z)-u,U(X,Y+1,z)-u)||1,n=Math.floor(u),f=u-n
    const w=f<.5?Math.max(0,.5-Math.min(.5-f,f)/g):Math.min(1,.5+Math.min(f-.5,1-f)/g),p=P[(((f<.25?n-1:n)%6)+6)%6]
    for(let j=0;j<3;j++)d[o+j]=17+(p[j]-17)*w
  }
  q.putImageData(im,0,0);c.drawImage(q.canvas,0,0)
  c.lineWidth=5;line(c,[head])
  c.beginPath();c.ellipse(128,223,44,23,0,0,7);c.stroke()
  // nostrils
  c.fillStyle='#000'
  for(const m of[1,-1]){c.beginPath();c.ellipse(128+m*20,224,7,10,m*.35,0,7);c.fill()}
  // eyes
  for(const m of[1,-1]){
    c.save();c.translate(128+m*48,104);c.rotate(m*.25)
    c.fillStyle='#111';c.beginPath();c.ellipse(0,0,12,16,0,0,7);c.fill()
    c.strokeStyle='#fff';c.lineWidth=3;c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(-m*3,-6,4,0,7);c.fill()
    c.restore()
  }
}

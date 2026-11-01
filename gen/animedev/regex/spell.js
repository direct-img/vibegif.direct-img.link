// witch girl with wavy rose-gold hair, a pointed hat and an indigo cape casting ^[a-z]+$ with her wand, regex glyphs swirling into a glowing magic circle
export const frames=16,delay=85,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#1f1830',sk='#ffe8dc',ss='#f5c8b8',hr='#e9a08f',hs='#c27466',hl='#ffd9c9',ind='#3b2a6b',idd='#281c4c',cy='#3fe0ff'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const star=(x,y,r)=>{B();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.35:r;L(x+C(a)*q,y+S(a)*q)}c.closePath()}
  const glow=(s,x,y,z)=>{c.font=`bold ${z}px DejaVu Sans Mono`;c.lineWidth=5;c.strokeStyle='#9ff0ff';c.strokeText(s,x,y);c.strokeStyle=K;c.fillStyle='#3a1f7a';c.fillText(s,x,y)}
  c.strokeStyle=K;c.textAlign='center';c.textBaseline='middle'
  // magic circle: soft fill, glowing rings, ticks turning one notch per loop, hexagram turning a sixth
  const cx=172,cy0=94,R=62
  E(cx,cy0,R);c.fillStyle='#e6fbff';c.fill()
  for(const r of[R,R-12]){E(cx,cy0,r);W(7);W(4,cy);W(1.5,'#e9fdff')}
  for(let k=0;k<24;k++){const a=k*P/12,q=k%2?3:6;B();M(cx+C(a)*(R-6+q/2),cy0+S(a)*(R-6+q/2));L(cx+C(a)*(R-6-q/2),cy0+S(a)*(R-6-q/2));W(2.5,'#7fe6f7')}
  for(let j=0;j<2;j++){B();for(let k=0;k<3;k++){const a=-T/6+j*P/3+k*2*P/3-P/2;L(cx+C(a)*(R-14),cy0+S(a)*(R-14))}c.closePath();W(2,'#a8eefa')}
  // the spell itself, pulsing
  E(cx,cy0,30,13);c.fillStyle='#e6fbff';c.fill();glow('^[a-z]+$',cx,cy0,15)
  // girl: hair, cape, body
  const hx=80,hy=140
  // wavy rose-gold hair, back layer
  B();M(hx-40,hy-20);Q(hx-56,hy+6,hx-46,hy+26);Q(hx-58,hy+44,hx-46,hy+62);Q(hx-34,hy+70,hx-24,hy+58);L(hx+24,hy+58);Q(hx+34,hy+70,hx+46,hy+62);Q(hx+58,hy+44,hx+46,hy+26);Q(hx+56,hy+6,hx+40,hy-20);c.closePath();F(hs)
  // cape and robe
  const tor=()=>{B();M(hx-24,hy+40);Q(hx,hy+34,hx+24,hy+40);Q(hx+40,hy+60,hx+42,hy+100);Q(hx,hy+108,hx-42,hy+100);Q(hx-40,hy+60,hx-24,hy+40)}
  tor();F(ind);c.save();tor();c.clip();B();M(hx+14,hy+34);Q(hx+40,hy+60,hx+30,hy+110);L(hx+60,hy+110);L(hx+60,hy+34);F(idd,0)
  for(const[x,y]of[[-26,74],[18,90],[-8,96],[30,66]]){star(hx+x,hy+y,4);c.fillStyle='#f0c64a';c.fill()}c.restore();tor();W(3.5)
  B();M(hx-16,hy+40);L(hx,hy+56);L(hx+16,hy+40);c.closePath();F('#fff',2.5)
  for(const s of[-1,1]){B();M(hx,hy+50);Q(hx+s*12,hy+42,hx+s*14,hy+54);Q(hx+s*10,hy+58,hx,hy+50);F('#ff7aa8',2.5)}E(hx,hy+50,3.5);F('#ff7aa8',2.5)
  // head
  c.save();c.translate(hx,hy)
  const face=()=>{B();M(-40,-6);Z(-40,22,-21,37,0,38);Z(21,37,40,22,40,-6);c.arc(0,-6,40,0,P,true)}
  face();F(sk)
  const bang=()=>{B();M(-46,22);Z(-52,-60,52,-60,46,22);Q(42,6,38,-2);Q(30,-6,24,6);Q(18,-10,8,0);Q(2,-12,-6,2);Q(-14,-10,-22,4);Q(-30,-6,-36,-2);Q(-42,6,-46,22)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  for(const s of[-1,1]){B();M(s*44,-10);Q(s*52,10,s*44,24);Q(s*54,38,s*44,52);Q(s*38,40,s*38,28);Q(s*42,12,s*34,-4);c.closePath();F(hr,3)}
  bang();F(hr)
  B();c.arc(0,-8,38,-2.5,-2.15);M(6,-46);c.arc(0,-8,38,-1.4,-1.1);W(3.5,hl)
  // eyes: a wink and a sparkly open eye, smug smile
  B();M(-26,14);Q(-18,6,-10,14);W(3.5)
  E(18,14,9,11);F('#fff',0);E(18,15,7,9.5);F('#2ec3d6',0);B();c.ellipse(18,15,7,9.5,0,P,2*P);F('#14748a',0)
  E(18,15,3,4.5);F('#0a2f3a',0);E(15.5,11,2.6,3);F('#fff',0);E(20.5,19,1.3);F('#fff',0)
  B();M(8,8);Q(18,0,28,7);L(31,3);W(3.5)
  for(const s of[-1,1]){E(s*27,24,6,3.2);c.fillStyle='rgba(255,110,140,.4)';c.fill()}
  B();M(-6,27);Q(2,34,9,26);Q(7,31,1,32);W(2.5)
  // pointed witch hat
  c.save();c.translate(-4,-40);c.rotate(-.1)
  B();M(-34,4);Q(-24,-30,-14,-56);Q(-6,-72,-30,-80);Q(-8,-74,6,-56);Q(20,-30,36,4);c.closePath();F(ind)
  B();M(-30,-4);Q(0,-10,32,-4);L(34,6);Q(0,0,-32,6);c.closePath();F('#f0b24a',3)
  star(0,1,6);F('#ffe066',2)
  E(0,6,62,12);c.save();E(0,6,62,12);c.clip();E(0,14,62,12);F(idd,0);c.restore();E(0,6,62,12);W(3.5)
  B();M(-34,4);Q(0,-4,36,4);W(3.5)
  c.restore()
  c.restore()
  // free hand on the hip, wand arm reaching to the circle with a little flourish
  B();M(hx-28,hy+50);Q(hx-44,hy+64,hx-34,hy+80);W(13);W(7,ind);E(hx-33,hy+80,6.5);F(sk,3)
  const ax=hx+42,ay=hy+12,wa=-.9+S(T*2)*.28,wx=ax+C(wa)*40,wy=ay+S(wa)*40
  B();M(hx+24,hy+48);Q(hx+44,hy+44,ax,ay);W(13);W(7,ind)
  B();M(ax,ay);L(wx,wy);W(7);W(3.5,'#8a5a3a');star(wx,wy,7);F('#ffe066',2.5)
  E(ax+1,ay-1,7);F(sk,3)
  // sparkles shed from the wand tip
  for(let k=0;k<3;k++){const p=(t*2+k/3)%1;c.globalAlpha=S(p*P);star(wx+3+p*14*C(k*2.1),wy-4-p*16+S(k*2.1)*p*10,4.5*(1-p)+2);F('#bff6ff',1.5);c.globalAlpha=1}
  // regex glyphs spiralling from the wand tip into the circle
  const gl=['^','\\d','[a-z]+','.*','$','\\w+']
  for(let k=0;k<6;k++){const p=(t+k/6)%1,a=P*.8+p*P*1.15,r=R+2-p*14,x=cx+C(a)*r,y=cy0+S(a)*r
    c.globalAlpha=Math.min(1,p*6,(1-p)*3);glow(gl[k],x,y,13);c.globalAlpha=1}
}

(()=>{"use strict";document.body.setAttribute("class","body change");const e=document.createElement("div");e.setAttribute("class","wrapper"),document.body.append(e);const t=document.createElement("header");t.setAttribute("class","header");const n=document.createElement("div");n.setAttribute("class","clock-face");const s=document.createElement("div");s.setAttribute("class","first-row");const a=document.createElement("div");a.setAttribute("class","level-block");const c=document.createElement("div");c.setAttribute("class","menu-title"),c.textContent="Level: ",a.append(c);const o=document.createElement("select");o.setAttribute("class","level");const i=document.createElement("option");i.value="value1",i.textContent="easy";const l=document.createElement("option");l.value="value2",l.textContent="medium";const r=document.createElement("option");r.value="value3",r.textContent="hard",o.appendChild(i),o.appendChild(l),o.appendChild(r),a.append(o),s.append(a);const d=document.createElement("div");d.setAttribute("class","mine-block");const u=document.createElement("div");u.setAttribute("class","menu-title"),u.textContent=" Mines: ",d.append(u);let m=document.createElement("input");m.setAttribute("class","mine-count"),m.setAttribute("type","number"),m.setAttribute("max","100"),m.setAttribute("maxlength","2"),m.placeholder=10,d.append(m),s.append(d);const p=document.createElement("div");p.setAttribute("class","second-row");const f=document.createElement("div");f.setAttribute("class","theme-toggle change"),p.append(f);const g=document.createElement("div");g.setAttribute("class","smile"),p.append(g);const b=document.createElement("div");b.setAttribute("class","smiley-face"),g.append(b);const h=document.createElement("div");h.setAttribute("class","eye-left"),b.append(h);const v=document.createElement("div");v.setAttribute("class","eye-right"),b.append(v);const E=document.createElement("div");E.setAttribute("class","mouth"),b.append(E);const A=document.createElement("div");A.setAttribute("class","mike change");const y=document.createElement("audio");y.setAttribute("class","audio-lost"),y.src="./assets/audio/ou_nou_nou_nou.mp3",A.append(y);const x=document.createElement("audio");x.setAttribute("class","audio-win"),x.src="./assets/audio/Queen_We_Are_The_Champions.mp3",A.append(x);const L=document.createElement("audio");L.setAttribute("class","audio-opened"),L.src="./assets/audio/neobyichnyiy-zvuk-knopki1.mp3",A.append(L);const k=document.createElement("audio");k.setAttribute("class","audio-my-mine"),k.src="./assets/audio/zvonkiy-zvuk-najatiya-knopki1.mp3",A.append(k),p.append(A);const C=document.createElement("div");C.setAttribute("class","third-row");const w=document.createElement("div");w.setAttribute("class","click-points");const S=document.createElement("div");S.setAttribute("class","flag"),S.innerHTML='<img src="./assets/img/Flag-green256_25053.png" alt="flag" width="30"  height="30">',w.append(S);const I=document.createElement("div");I.setAttribute("class","point-bombs change"),w.append(I);const M=document.createElement("div");M.setAttribute("class","menu-title"),M.textContent="Clicks: ",w.append(M);const T=document.createElement("div");T.setAttribute("class","point-clicks change"),T.textContent=0,w.append(T),C.append(w);const _=document.createElement("div");_.setAttribute("class","time-game");const q=document.createElement("div");q.setAttribute("class","menu-title"),_.append(q),q.textContent="Time: ";const O=document.createElement("div");O.setAttribute("class","time-game change"),O.textContent="00:00",_.append(O),C.append(_),n.append(s),n.append(p),n.append(C),t.append(n),e.append(t);const H=document.createElement("main");H.setAttribute("class","main");const N=document.createElement("div");N.setAttribute("class","playing-field"),H.append(N),e.append(H);const Y=document.createElement("footer");Y.setAttribute("class","footer");const z=document.createElement("h3");z.setAttribute("class","text-footer change"),Y.append(z),e.append(Y);const D=document.createElement("div");D.setAttribute("class","overlay"),document.body.append(D);let G=parseInt(m.value)||10,j=10,J=10,$=[],F=0,Q=!1,W=G,B=0;I.innerText=W;let K,P=!1,R=!1,U=localStorage.getItem("level")||"easy",V=0,X=!1,Z=!0;class ee{constructor(){this.isMine=!1,this.nearMine=0,this.isOpen=!1}}function te(e,t){j=e,J=e,G=t}function ne(e){"easy"===e&&te(10,10),"medium"===e&&te(15,40),"hard"===e&&te(25,70),m.placeholder=G,I.innerText=G}function se(){if(R)V=O.textContent;else if(Q){let e=~~((new Date-K)/1e3),t=~~(e/60),n=e%60;O.textContent=`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}}function ae(){const e=document.querySelector(".table-boxes");for(let t=0;t<j;t++)for(let n=0;n<J;n++){let s=e.rows[n].children[t];$[t][n].isMine&&s.classList.add("mine")}}function ce(e,t){let n=t>0?t-1:t,s=e<j-1?e+1:e,a=t<J-1?t+1:t,c=0;for(let o=e>0?e-1:e;o<=s;o++)for(let s=n;s<=a;s++)!$[o][s].isMine||e==o&&t==s||c++;$[e][t].nearMine=c,$[e][t].innerHTML=c}function oe(e){R||(re(e.target.cellIndex,e.target.parentNode.rowIndex),document.querySelectorAll("td").forEach((e=>{switch(e.textContent){case"1":e.classList.add("one");break;case"2":e.classList.add("two");break;case"3":e.classList.add("three");break;case"4":e.classList.add("four");break;case"5":e.classList.add("five")}})))}function ie(e){A.classList.contains("off")?e.pause():e.play()}function le(){A.classList.contains("off")?(k.pause(),y.pause(),L.pause(),x.pause()):("You lost!!!"===z.textContent&&y.play(),"Greeting!!! You win!!!"===z.textContent&&x.play())}function re(e,t){let n=document.querySelector(".table-boxes").rows[t].children[e];if(!$[e][t].isOpen)if($[e][t].isMine)n.classList.add("mine"),ae(),z.textContent="You lost!!!",R=!0,Q=!1,E.style.animation="mouth 1s infinite",ie(y),be(O.textContent);else if(0==$[e][t].nearMine?n.innerHTML="":n.innerHTML=$[e][t].nearMine,$[e][t].isOpen=!0,n.classList.add("opened"),n.classList.remove("my-mine"),ie(L),F++,j*J-G==F&&(z.textContent="Greeting!!! You win!!!",Q=!1,R=!0,ae(),ie(x),h.style.animation="eye 1s infinite",v.style.animation="eye 1s infinite",E.style.animation="mouth 1s infinite",be(O.textContent)),0==$[e][t].nearMine){let n=t>0?t-1:t,s=e+1<j?e+1:e,a=t+1<J?t+1:t;for(let t=e>0?e-1:e;t<=s;t++)for(let e=n;e<=a;e++)re(t,e)}}function de(){F=0,function(){$=[];for(let e=0;e<j;e++){let e=[];for(let t=0;t<J;t++)e.push(new ee);$.push(e)}P=!1}(),function(){N.innerHTML="";const e=document.createElement("table");e.setAttribute("class","table-boxes");for(let t=0;t<J;t++){const t=document.createElement("tr");for(let e=0;e<j;e++){const e=document.createElement("td");e.setAttribute("class","rows-boxes change"),f.classList.contains("dark")&&e.classList.add("dark"),t.appendChild(e)}e.appendChild(t)}N.appendChild(e)}(),z.textContent="Good Luck!!!"}o.addEventListener("change",(function(){let e=o.options[o.selectedIndex];U=e.textContent,me(),ne(U),de()})),m.addEventListener("change",(function(){G=parseInt(m.value),m.placeholder=G,I.innerText=G,de()})),A.addEventListener("click",(()=>{A.classList.toggle("off"),le(),Z=!A.classList.contains("off"),me()})),N.addEventListener("click",(function(e){T.textContent=++B,Q=!0,P?e.target.matches("td")&&!e.target.matches(".my-mine")&&oe(e):(K=new Date,setInterval(se,1e3),e.target.classList.add("opened"),function(e,t){for(let n=0;n<G;){let s=~~(Math.random()*j),a=~~(Math.random()*J);s!==e&&a!==t&&0==$[s][a].isMine&&($[s][a].isMine=!0,n++)}!function(){for(let e=0;e<j;e++)for(let t=0;t<J;t++)ce(e,t)}()}(e.target.cellIndex,e.target.parentNode.rowIndex),oe(e),P=!0)})),N.addEventListener("contextmenu",(function(e){Q=!0,e.preventDefault(),ie(k),e.target.matches("td")&&function(e){if(R)return;const t=document.querySelectorAll(".rows-boxes");let n=e.target.cellIndex,s=e.target.parentNode.rowIndex;if($[n][s].isOpen)return;e.target.classList.toggle("my-mine");const a=Array.from(t).filter((e=>e.classList.contains("my-mine")));W=G-a.length,W>=0?I.innerText=W:(I.innerText=0,e.target.classList.remove("my-mine"))}(e)})),de(),f.addEventListener("click",(()=>{document.querySelectorAll(".change").forEach((e=>e.classList.toggle("dark"))),X=!!f.classList.contains("dark"),me()}));const ue=document.querySelector('script[src="./index.js"]');function me(){localStorage.setItem("mike",Z),localStorage.setItem("theme",X),localStorage.setItem("level",U)}document.body.appendChild(ue),g.addEventListener("click",(function(){location.reload()})),window.getComputedStyle(E);const pe="duration",fe=localStorage.getItem(pe),ge=fe?JSON.parse(fe):[];function be(e){ge.push(e),ge.length>10&&ge.shift(),localStorage.setItem(pe,JSON.stringify(ge))}window.addEventListener("load",(function(){if(localStorage.getItem("mike")&&(Z=localStorage.getItem("mike"),"false"===Z?A.classList.add("off"):A.classList.remove("off"),le()),localStorage.getItem("theme")){X=localStorage.getItem("theme");const e=document.querySelectorAll(".change");"true"===X?e.forEach((e=>e.classList.add("dark"))):e.forEach((e=>e.classList.remove("dark")))}localStorage.getItem("level")&&(ne(localStorage.getItem("level")),function(e){Array.from(o.children).forEach((t=>{t.textContent===e&&(t.selected=!0)}))}(U),de())})),window.addEventListener("beforeunload",me)})();
(()=>{
 const root=document.documentElement;
 const tabs=[...document.querySelectorAll('[data-tab]')];
 tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.setAttribute('aria-selected',String(t===tab)));document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==tab.dataset.tab);}));
 const params=new URLSearchParams(location.search),from=params.get('from'),redirect=document.querySelector('.redirect');
 if(from&&redirect){redirect.textContent='↳ '+from+'에서 넘어옴';redirect.hidden=false;}
 const input=document.querySelector('.search input'),form=document.querySelector('.search'),results=document.querySelector('.search-results');
 const docs=[['대문','index.html'],['GLITCH (아이돌)','glitch.html'],['건호','geonho.html'],['임건호','geonho.html?from=임건호'],['진오','jino.html'],['이진오','jino.html?from=이진오'],['에단','ethan.html'],['해윤','haeyun.html'],['정해윤','haeyun.html?from=정해윤'],['오승재','zero.html?from=오승재'],['천쯔안','ethan.html?from=천쯔안'],['제로','zero.html'],['???','unknown.html'],['라임라이트 엔터테인먼트','limelight.html'],['GLITCH/봇 안내','guide.html'],['에단 버터','ethan.html?from=에단 버터'],['꽃사슴','haeyun.html?from=꽃사슴'],['길고양이','geonho.html?from=길고양이'],['도베르만','jino.html?from=도베르만'],['사막여우','zero.html?from=사막여우'],['건해','glitch.html?from=건해#s-8'],['멍냥즈','glitch.html?from=멍냥즈#s-8'],['뮤직 웨이브','music-wave.html'],['스테이지 원','stage-one.html'],['차트 하이','chart-high.html'],['쇼! 뮤직타운','music-town.html'],['수박 차트','subak.html'],['필보드','fillboard.html'],['핫게','hotge.html'],['스타라이브','starlive.html'],['팬링크','fanlink.html'],['K스냅','ksnap.html'],['LUMINA','lumina.html'],['HEX','hex.html'],['NOVA','nova.html'],['VELVET','velvet.html']];
 function matches(){let q=input.value.trim().toLowerCase();return q?docs.filter(d=>d[0].toLowerCase().includes(q)).slice(0,7):[];}
 input.addEventListener('input',()=>{results.replaceChildren();const list=matches();results.hidden=!input.value.trim();if(!list.length){const p=document.createElement('p');p.textContent='일치하는 문서가 없습니다.';results.append(p);}list.forEach(([name,url])=>{const a=document.createElement('a');a.href=url;a.textContent=name;results.append(a);});});
 form.addEventListener('submit',e=>{e.preventDefault();const list=matches();if(list.length)location.href=list[0][1];else{results.hidden=false;results.textContent='일치하는 문서가 없습니다.';}});
 document.addEventListener('click',e=>{if(!form.contains(e.target))results.hidden=true;});input.addEventListener('keydown',e=>{if(e.key==='Escape')results.hidden=true;});
})();

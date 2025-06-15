import{i as m,a as g,S as y}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),a=document.querySelector("#loader");console.log(a);function p(){a.classList.remove("hidden")}function h(){a.classList.add("hidden")}l.addEventListener("submit",L);function b(){c.innerHTML=""}function L(i){i.preventDefault(),p(),b();const o=l.elements["search-text"].value.trim();console.log(o),$(o).then(({data:{hits:r}})=>{if(r.length===0)return m.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});q(r)}).catch(r=>console.log(r)).finally(()=>{h()})}const S="50870264-4cff09f0574465c81a14bcda1",v="https://pixabay.com/api/",c=document.querySelector(".gallery");function $(i){return g(v,{params:{key:S,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en"}})}function q(i){const o=i.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:d,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${t}"
    />
  </a>
  <ul>
  <li>likes<br>${n}</li>
  <li>views<br>${u}</li>
  <li>comments<br>${d}</li>
  <li>downloads<br>${f}</li>
  </ul>
</li>`).join("");c.insertAdjacentHTML("beforeend",o),new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}console.log(a);
//# sourceMappingURL=index.js.map

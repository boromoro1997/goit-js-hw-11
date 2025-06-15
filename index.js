import{a as p,S as m,i as y}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="50870264-4cff09f0574465c81a14bcda1",h="https://pixabay.com/api/";function b(s){return p(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en"}})}const i=document.querySelector("#loader");function L(){i.classList.remove("hidden")}function x(){i.classList.add("hidden")}function S(){l.innerHTML=""}const l=document.querySelector(".gallery");function T(s){const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:u,comments:d,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${t}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${a}</li>
  <li><span class="spanText">Views</span><br>${u}</li>
  <li><span class="spanText">Comments</span><br>${d}</li>
  <li><span class="spanText">Downloads</span><br>${f}</li>
  </ul>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const c=document.querySelector(".form");c.addEventListener("submit",$);function $(s){s.preventDefault(),L(),S();const r=c.elements["search-text"].value.trim();console.log(r),b(r).then(({data:{hits:o}})=>{if(o.length===0)return y.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});T(o)}).catch(o=>console.log(o)).finally(()=>{x()})}
//# sourceMappingURL=index.js.map

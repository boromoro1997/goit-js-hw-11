import{a as h,S as g,i as l}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="50870264-4cff09f0574465c81a14bcda1",b="https://pixabay.com/api/";function u(s){return h(b,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en"}}).then(({data:r})=>r.hits)}u("cat").then(s=>{console.log(s)});const d=document.querySelector("#loader");function L(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}function w(){m.innerHTML=""}const m=document.querySelector(".gallery"),x=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function S(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:f,downloads:p})=>`<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${t}</li>
  <li><span class="spanText">Views</span><br>${a}</li>
  <li><span class="spanText">Comments</span><br>${f}</li>
  <li><span class="spanText">Downloads</span><br>${p}</li>
  </ul>
</li>`).join("");m.insertAdjacentHTML("beforeend",o),x.refresh()}const i=document.querySelector(".form");i.addEventListener("submit",$);function $(s){s.preventDefault(),L(),w();const o=i.elements["search-text"].value.trim();if(o.trim()==="")return i.reset(),c(),l.show({message:"❌ you must write something!!",backgroundColor:"red",position:"topRight"});u(o).then(r=>{if(r.length===0)return l.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});S(r)}).catch(r=>l.show({message:`Server error : ${r}`})).finally(()=>{c(),i.reset()})}
//# sourceMappingURL=index.js.map

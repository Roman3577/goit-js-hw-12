import{a as v,S as f,i as a}from"./assets/vendor-DXaqCXe3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const w="49351983-6f21a445dc99e49ed2940712c",b="https://pixabay.com/api/";async function g(o,e=1,i=15){try{return(await v.get(b,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function u(o,e){const i=o.map(r=>`
      <li> 
        <a href="${r.largeImageURL}" class="gallery__item">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>   
        <div class="card-info">
          <div class="likes">
            <h3>Likes </h3>
            <p>${r.likes}</p>
          </div> 
          <div class="views">
            <h3>Views </h3>
            <p>${r.views}</p>
          </div> 
          <div class="favor">
            <h3>Comments</h3>
            <p>${r.comments}</p>
          </div> 
          <div class="down">
            <h3>Downloads</h3>
            <p>${r.downloads}</p>
          </div> 
        </div>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",i),L.refresh()}const P=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=document.querySelector(".fetchPostsBtn"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});let l="",p=1;const m=15;P.addEventListener("submit",async o=>{if(o.preventDefault(),c.innerHTML="",d.classList.remove("is-visible"),l=o.currentTarget.elements["search-text"].value.trim(),p=1,!l){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}try{n.style.display="block";const e=await g(l,p,m);n.style.display="none",e.hits.length>0?(u(e.hits,c),y.refresh(),d.classList.add("is-visible")):a.warning({title:"Warning",message:"Sorry, no images found. Try again.",position:"topRight"})}catch{n.style.display="none",a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});d.addEventListener("click",async()=>{var o;p+=1;try{n.style.display="block";const e=await g(l,p,m);if(n.style.display="none",e.hits.length>0){u(e.hits,c),y.refresh();const i=((o=c.firstElementChild)==null?void 0:o.getBoundingClientRect().height)||0;window.scrollBy({top:i*2,left:0,behavior:"smooth"})}else a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.classList.remove("is-visible")}catch{n.style.display="none",a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map

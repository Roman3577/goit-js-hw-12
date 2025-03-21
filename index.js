import{a as c,i as a,S as d}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u="49351983-6f21a445dc99e49ed2940712c",p="https://pixabay.com/api/";function f(n){return loader.style.display="block",c.get(p,{params:{key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{const r=t.data.hits;return loader.style.display="none",r.length===0?(a.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}),[]):r}).catch(t=>(loader.style.display="none",a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error("Error fetching images:",t),[]))}function h(n,t){const r=n.map(s=>`
      <li> <a href="${s.largeImageURL}" class="gallery__item">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>   <div class="card-info">
           <div class="likes"><h3>Likes </h3>
           <p>${s.likes}</p></div> 
            <div class="views"><h3>Views </h3>
            <p>${s.views}</p></div> 
             <div class="favor"><h3>Comments</h3>
             <p> ${s.comments}</p></div> 
            <div class="down"><h3>Downloads</h3>
            <p> ${s.downloads}</p></div> 
           
          </div></li>
      `).join("");t.innerHTML=r}const m=document.querySelector(".form"),l=document.querySelector(".gallery");document.getElementById("loader");const g=new d(".gallery a",{captionsData:"alt",captionDelay:250});m.addEventListener("submit",n=>{n.preventDefault(),l.innerHTML="";const t=n.currentTarget.elements["search-text"].value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}f(t).then(r=>{r.length>0&&(h(r,l),g.refresh())}).catch(r=>{console.error("Error fetching images:",r)})});
//# sourceMappingURL=index.js.map

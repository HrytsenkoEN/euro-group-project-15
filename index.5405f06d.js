(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");document.querySelector("body"),e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}))})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-button]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};function t(){e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.5405f06d.js.map
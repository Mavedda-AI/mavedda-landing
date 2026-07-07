import React from 'react';

export const Hero = () => {
  return (
    <section className="section hero-dark u-overflow-clip"><div className="w-layout-blockcontainer container w-container"><div className="hero-layout"><h1 className="heading-underline-copy is-centered max-width-110 heading-underline is-white u-m-b-30 u-text-wrap-balance">Turn your most critical operations AI-native</h1><h3 className="heading-underline-copy is-centered max-width-110 heading-underline is-white u-m-b-30 u-text-wrap-balance">Managed AI transformation tailored to how your enterprise operates</h3><div className="hero-features-upd u-color-white u-m-b-48 hp"><div className="checkmark-row"><div className="u-text-wrap-balance">No upfront cost. No FDE required. Full agent governance.</div></div></div><div className="hero-cta-group u-m-b-64"><a href="/demo" data-wf--button--variant="white" className="btn-gradient-wrapper w-variant-e905cc6b-790b-61a3-a2bf-b0b588958d62 w-inline-block"><div className="btn-txt">Let&#x27;s connect</div><div className="btn-gradient"></div></a><a href="/customers" data-wf--button--variant="black-with-outline" className="btn-gradient-wrapper w-variant-7c699997-615a-b253-c65b-971825fd1318 w-inline-block"><div className="btn-txt">See our customers</div><div className="btn-gradient w-variant-7c699997-615a-b253-c65b-971825fd1318"></div></a></div><div className="hero-home-bg u-m-b-64"><img src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/69f47187219545bf5410b5e4_bg-hero-home-2c.webp" loading="lazy" width="1080" alt="" className="hero-home-bg-img"/></div><div className="hero-logo-marquee"><section className="section-marqee-dark"><div className="code-embed-6 w-embed w-script"><style dangerouslySetInnerHTML={{ __html: `
  .marquee{overflow:hidden!important;opacity:0;transition:opacity .6s ease}
  .marquee.is-ready{opacity:1}
`}} />
  <script dangerouslySetInnerHTML={{ __html: `
    (function(){
      function init(){
        document.querySelectorAll(".marquee__list").forEach(function(list){
          if(list.dataset.cloned==="1") return;
          list.dataset.cloned="1";

          /* force flex row */
          list.style.cssText="display:flex!important;flex-wrap:nowrap!important;width:max-content!important;will-change:transform!important;";
          Array.from(list.children).forEach(function(c){c.style.flexShrink="0"});

          /* wait for images inside the list */
          var imgs=list.querySelectorAll("img");
          var loaded=0, total=imgs.length||1;
          function onReady(){
            var setW=list.scrollWidth;
            var viewW=window.innerWidth;
            /* enough copies so there's always a full screen + spare */
            var copies=Math.ceil(viewW/setW)+1;
            var items=Array.from(list.children);
            for(var c=0;c<copies;c++){
              items.forEach(function(n){list.appendChild(n.cloneNode(true))});
            }
            /* rAF loop — pixel perfect */
            var pos=0,speed=0.5;
            (function tick(){
              pos-=speed;
              if(pos<=-setW) pos+=setW;
              list.style.transform="translateX("+pos+"px)";
              requestAnimationFrame(tick);
            })();
          }

          imgs.forEach(function(img){
            if(img.complete){loaded++;return}
            img.loading="eager";
            img.onload=img.onerror=function(){if(++loaded>=total)onReady()};
          });
          if(loaded>=total) onReady();
        });

        document.querySelectorAll(".marquee").forEach(function(m){m.classList.add("is-ready")});
      }

      if(document.readyState==="complete") init();
      else window.addEventListener("load",init);
    })();
  `}} /></div><div className="marquee-dark"><div className="marquee__track logo-animate is-autoheight"><div className="marquee__track is-autoheight w-dyn-list"><div role="list" className="marquee__list w-dyn-items"><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/6a3d57193f68110f0bde37f0_Q4%20Designs%20(1).png" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69de8fef8dc2b7910b55870f_freed-people.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d953cca32ab48f84d91b25_Avison%20Young.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69d9535c8240ca3015040341_Acora.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd88fe5e73969379501382_MasterTel.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd63f9981fc259848e19aa_DG.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c6f49ef28bc2e597483_Nzz.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bc2b8dbd81a37afa88634f_Cushman.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c8a734dc85c8e7ef63e_Climb.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c906794dd4c7691bcb9_AST.avif" alt="" className="marquee-logo-img is-inverted"/></a></div><div role="listitem" className="marquee-cms-item w-dyn-item"><a href="#" className="marquee__item w-inline-block"><img loading="lazy" src="https://cdn.prod.website-files.com/66e869dc4d7e3c951a23214f/69bd4c9545d050ae54e9713f_Armis.avif" alt="" className="marquee-logo-img is-inverted"/></a></div></div></div></div><div className="fader-dark right"></div><div className="fader-dark"></div></div></section></div></div></div></section>
  );
};

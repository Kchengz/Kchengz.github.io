var Affix={init:function(t,e){this.element=t,this.offset=e||0,this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition(),window.addEventListener("scroll",this.checkPosition.bind(this)),window.addEventListener("click",this.checkPositionWithEventLoop.bind(this)),window.matchMedia("(min-width: 992px)").addListener(t=>{t.matches&&(this.offset=NexT.utils.getAffixParam(),this.checkPosition())})},getState:function(t,e,i,n){var o,s,f=window.scrollY,l=window.innerHeight;return null!=i&&"top"===this.affixed?f<i&&"top":"bottom"===this.affixed?null!=i?!(this.unpin<=this.element.getBoundingClientRect().top)&&"bottom":!(f+l<=t-n)&&"bottom":(s=(o=null===this.affixed)?f:this.element.getBoundingClientRect().top+f,null!=i&&f<=i?"top":null!=n&&t-n<=s+(o?l:e)&&"bottom")},getPinnedOffset:function(){return this.pinnedOffset||(this.element.classList.remove("affix-top","affix-bottom"),this.element.classList.add("affix"),this.pinnedOffset=this.element.getBoundingClientRect().top)},checkPositionWithEventLoop(){setTimeout(this.checkPosition.bind(this),1)},checkPosition:function(){var t,e,i,n,o;"none"!==window.getComputedStyle(this.element).display&&(t=this.element.offsetHeight-CONFIG.sidebarPadding,n=(e=this.offset).top,e=e.bottom,i=document.body.scrollHeight,n=this.getState(i,t,n,e),this.affixed!==n&&(null!=this.unpin&&(this.element.style.top=""),o="affix"+(n?"-"+n:""),this.affixed=n,this.unpin="bottom"===n?this.getPinnedOffset():null,this.element.classList.remove("affix","affix-top","affix-bottom"),this.element.classList.add(o)),"bottom"===n)&&(this.element.style.top=i-t-e+"px")}};NexT.utils.getAffixParam=function(){var t=CONFIG.sidebar.offset||12,e=document.querySelector(".header-inner").offsetHeight+t,i=document.querySelector(".footer"),n=document.querySelector(".footer-inner"),n=i.offsetHeight-n.offsetHeight,i=i.offsetHeight+n;return document.querySelector(".sidebar").style.marginTop=e+"px",{top:e-t,bottom:i}},window.addEventListener("DOMContentLoaded",()=>{Affix.init(document.querySelector(".sidebar-inner"),NexT.utils.getAffixParam())});
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 AngularJS v1.2.25
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,t){'use strict';function D(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.25/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Pa(b){if(null==b||Ga(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:A(b)||I(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(I(b)||Pa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function hb(){for(var b=ma.length,a;b;){b--;a=ma[b].charCodeAt(0);if(57==a)return ma[b]="A",ma.join("");if(90==a)ma[b]="0";else return ma[b]=String.fromCharCode(a+1),ma.join("")}ma.unshift("0");return ma.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function J(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function U(b){return parseInt(b,
10)}function bc(b,a){return J(new (J(function(){},{prototype:b})),a)}function F(){}function Qa(b){return b}function ba(b){return function(){return b}}function y(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function A(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ta(b){return"[object Date]"===za.call(b)}function P(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===za.call(b)}
function Ga(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,a){var c=Ra(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Ga(b)||b&&b.$evalAsync&&b.$watch)throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ra(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(I(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;I(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)I(b)?a=Ha(b,[],c,d):ta(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));
return a}function ha(b,a){if(I(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(I(b)){if(!I(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(ta(b))return ta(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ga(b)||Ga(a)||I(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!P(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Ba.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ba.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=t:Ga(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return A(b)?JSON.parse(b):b}function Ua(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=M(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=v(b).clone();try{b.empty()}catch(a){}var c=v("<div>").append(b).html();try{return 3===b[0].nodeType?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),z(d)&&(b=z(c[1])?dc(c[1]):!0,kb.call(a,d)?I(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){I(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=v(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Ta("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ta("areq",a||"?",c||"required");return b}function Wa(b,a,c){c&&I(b)&&(b=b[b.length-1]);Db(P(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&P(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return v(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return v(c)}function Zc(b){var a=D("$injector"),c=D("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||D;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function $c(b){J(b,{bootstrap:fc,copy:Ha,extend:J,equals:Aa,element:v,forEach:r,injector:gc,noop:F,bind:Bb,toJson:na,fromJson:cc,identity:Qa,isUndefined:y,isDefined:z,isString:A,isFunction:P,isObject:T,isNumber:ib,isElement:Uc,isArray:I,version:ad,isDate:ta,lowercase:M,uppercase:Ia,callbacks:{counter:0},$$minErr:D,$$csp:Xa});Ya=Zc(W);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",bd)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);
a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Za(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,h,l,n,p,q,s;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=v(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(s=p.children()).length;q<p;q++)e.push(Ea(s[q]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;A(b)&&(b=aa(b));if(!(this instanceof S)){if(A(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(A(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);v(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(z(d))throw Hb("offargs");var e=oa(b,"events");oa(b,"handle")&&(y(a)?r(e,function(a,c){$a(b,c,a);delete e[c]}):r(a.split(" "),function(a){y(c)?($a(b,a,e[a]),delete e[a]):Sa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=ab[c];d&&(a?delete ab[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete ab[c],b.ng339=t))}function oa(b,a,c){var d=
b.ng339,d=ab[d||-1];if(z(c))d||(b.ng339=d=++ne,d=ab[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=oa(b,"data"),e=z(c),f=!e&&z(a),g=f&&!T(a);d||g||oa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];J(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!z(a.length)||Ga(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=I(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=v.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=qb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(y(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===t&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):I(b)?(c=b.length-1,Wa(b[c],"fn"),a=b.slice(0,c)):Wa(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,
$b(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(P(b)||I(b))b=n.instantiate(b);if(!b.$get)throw cb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(A(a))for(c=Ya(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else P(a)?b.push(n.invoke(a)):I(a)?b.push(n.invoke(a)):Wa(a,"module")}catch(l){throw I(a)&&(a=
a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),cb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw cb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw cb("itkn",h);f.push(e&&e.hasOwnProperty(h)?
e[h]:c(h))}I(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(I(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||P(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new bb([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ba(b))}),constant:a(function(a,
b){Da(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw cb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||F)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==M(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
Ba.call(arguments,1))}finally{if(s--,0===s)for(;E.length;)try{E.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){r(u,function(a){a()});B=b(fa,a)})()}function g(){w=null;N!=k.url()&&(N=k.url(),r(ca,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var s=0,E=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){r(u,function(a){a()});0===s?a():E.push(a)};
var u=[],B;k.addPollFn=function(a){y(B)&&f(100,n);u.push(a);return a};var N=h.href,R=a.find("base"),w=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(w=a,c?h.replace(a):h.href=a),k}else return w||h.href.replace(/%27/g,"'")};var ca=[],K=!1;k.onUrlChange=function(a){if(!K){if(d.history)v(b).on("popstate",g);if(d.hashchange)v(b).on("hashchange",g);
else k.addPollFn(g);K=!0}ca.push(a);return a};k.$$checkUrlChange=g;k.baseHref=function(){var a=R.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},da="",C=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===t?m.cookie=escape(a)+"=;path="+C+";expires=Thu, 01 Jan 1970 00:00:00 GMT":A(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+C).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==
da)for(da=m.cookie,d=da.split("; "),O={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=decodeURI(e.substring(0,k)),O[a]===t&&(O[a]=decodeURI(e.substring(k+1))));return O}};k.defer=function(a,b){var c;s++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(F),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw D("$cacheFactory")("iid",b);var g=0,k=J({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!y(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return J({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Da(a,"directive");A(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));
return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,s,E,u,B,N,R){function w(a,b,c,d,e){a instanceof
v||(a=v(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=v(b).wrap("<span></span>").parent()[0])});var f=K(a,b,a,c,d,e);ca(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ca(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,
p,s;f=c.length;var L=Array(f);for(q=0;q<f;q++)L[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=L[p],c=m[q++],f=m[q++],c?(c.scope?(l=a.$new(),v.data(h,"$scope",l)):l=a,s=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,h,d,s)):f&&f(a,h.childNodes,t,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=da(a[p],[],h,0===p?d:t,e),(f=l.length?H(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&ca(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?
null:K(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?g:null}function O(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function da(a,b,c,d,g){var m=c.$attr,h;switch(a.nodeType){case 1:fa(b,pa(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,s=0,E=p&&p.length;s<E;s++){var B=!1,N=!1;l=p[s];if(!Q||8<=Q||l.specified){h=l.name;q=
aa(l.value);l=pa(h);if(n=U.test(l))h=mb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(B=h,N=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6));l=pa(h.toLowerCase());m[l]=h;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);S(a,b,q,l);fa(b,l,"A",d,g,B,N)}}a=a.className;if(A(a)&&""!==a)for(;h=f.exec(a);)l=pa(h[2]),fa(b,l,"C",d,g)&&(c[l]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:M(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))l=pa(h[1]),fa(b,l,"M",
d,g)&&(c[l]=aa(h[2]))}catch(w){}}b.sort(y);return b}function C(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return v(d)}function x(a,b,c){return function(d,e,f,g,h){e=C(e[0],b,c);return a(d,e,f,g,h)}}function H(a,c,d,e,f,g,m,n,p){function E(a,b,c,d){if(a){c&&(a=x(a,c,d));a.require=G.require;a.directiveName=D;if(K===G||G.$$isolateScope)a=
tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=x(b,c,d));b.require=G.require;b.directiveName=D;if(K===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}function B(a,b,c,d){var e,f="data",g=!1;if(A(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else I(b)&&(e=[],r(b,function(b){e.push(B(a,b,c,d))}));return e}function N(a,e,f,g,p){function E(a,b){var c;2>arguments.length&&
(b=a,a=t);M&&(c=da);return p(a,b,c)}var u,L,w,O,x,C,da={},rb;u=c===f?d:ha(d,new Ob(v(f),d.$attr));L=u.$$element;if(K){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;C=e.$new(!0);!H||H!==K&&H!==K.$$originalDirective?L.data("$isolateScopeNoTemplate",C):L.data("$isolateScope",C);ca(L,"ng-isolate-scope");r(K.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;C.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){C[c]=a});u.$$observers[f].$$scope=e;u[f]&&(C[c]=b(u[f])(e));
break;case "=":if(g&&!u[f])break;l=q(u[f]);p=l.literal?Aa:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=C[c]=l(e);throw ja("nonassign",u[f],K.name);};m=C[c]=l(e);C.$watch(function(){var a=l(e);p(a,C[c])||(p(a,m)?n(e,a=C[c]):C[c]=a);return m=a},null,l.literal);break;case "&":l=q(u[f]);C[c]=function(a){return l(e,a)};break;default:throw ja("iscp",K.name,c,a);}})}rb=p&&E;R&&r(R,function(a){var b={$scope:a===K||a.$$isolateScope?C:e,$element:L,$attrs:u,$transclude:rb},c;x=a.controller;
"@"==x&&(x=u[a.name]);c=s(x,b);da[a.name]=c;M||L.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(w=m.length;g<w;g++)try{O=m[g],O(O.isolateScope?C:e,L,u,O.require&&B(O.directiveName,O.require,L,da),rb)}catch(G){l(G,ia(L))}g=e;K&&(K.template||null===K.templateUrl)&&(g=C);a&&a(g,f.childNodes,t,p);for(g=n.length-1;0<=g;g--)try{O=n[g],O(O.isolateScope?C:e,L,u,O.require&&B(O.directiveName,O.require,L,da),rb)}catch(z){l(z,ia(L))}}p=p||{};for(var u=-Number.MAX_VALUE,
O,R=p.controllerDirectives,K=p.newIsolateScopeDirective,H=p.templateDirective,fa=p.nonTlbTranscludeDirective,y=!1,J=!1,M=p.hasElementTranscludeDirective,Z=d.$$element=v(c),G,D,V,S=e,Q,Fa=0,qa=a.length;Fa<qa;Fa++){G=a[Fa];var U=G.$$start,Y=G.$$end;U&&(Z=C(c,U,Y));V=t;if(u>G.priority)break;if(V=G.scope)O=O||G,G.templateUrl||(db("new/isolated scope",K,G,Z),T(V)&&(K=G));D=G.name;!G.templateUrl&&G.controller&&(V=G.controller,R=R||{},db("'"+D+"' controller",R[D],G,Z),R[D]=G);if(V=G.transclude)y=!0,G.$$tlb||
(db("transclusion",fa,G,Z),fa=G),"element"==V?(M=!0,u=G.priority,V=Z,Z=d.$$element=v(X.createComment(" "+D+": "+d[D]+" ")),c=Z[0],Na(f,Ba.call(V,0),c),S=w(V,e,u,g&&g.name,{nonTlbTranscludeDirective:fa})):(V=v(Kb(c)).contents(),Z.empty(),S=w(V,e));if(G.template)if(J=!0,db("template",H,G,Z),H=G,V=P(G.template)?G.template(Z,d):G.template,V=W(V),G.replace){g=G;V=Ib.test(V)?v(aa(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",D,"");Na(f,Z,c);qa={$attr:{}};V=da(c,[],qa);var $=a.splice(Fa+
1,a.length-(Fa+1));K&&z(V);a=a.concat(V).concat($);F(d,qa);qa=a.length}else Z.html(V);if(G.templateUrl)J=!0,db("template",H,G,Z),H=G,G.replace&&(g=G),N=ue(a.splice(Fa,a.length-Fa),Z,d,f,y&&S,m,n,{controllerDirectives:R,newIsolateScopeDirective:K,templateDirective:H,nonTlbTranscludeDirective:fa}),qa=a.length;else if(G.compile)try{Q=G.compile(Z,d,S),P(Q)?E(null,Q,U,Y):Q&&E(Q.pre,Q.post,U,Y)}catch(ve){l(ve,ia(Z))}G.terminal&&(N.terminal=!0,u=Math.max(u,G.priority))}N.scope=O&&!0===O.scope;N.transcludeOnThisElement=
y;N.templateOnThisElement=J;N.transclude=S;p.hasElementTranscludeDirective=M;return N}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var s=0,u=e.length;s<u;s++)try{p=e[s],(g===t||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(E){l(E)}}return h}function F(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ca(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,h){var m=[],l,q,s=b[0],u=a.shift(),E=J({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;
b.empty();n.get(B.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,B;n=W(n);if(u.replace){n=Ib.test(n)?v(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ja("tplrt",u.name,N);n={$attr:{}};Na(d,b,p);var w=da(p,[],n);T(u.scope)&&z(w);a=w.concat(a);F(c,n)}else p=s,b.html(n);a.unshift(E);l=H(a,p,c,e,b,u,f,g,h);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=K(b[0].childNodes,e);m.length;){n=m.shift();B=m.shift();var R=m.shift(),x=m.shift(),w=b[0];if(B!==s){var C=B.className;h.hasElementTranscludeDirective&&
u.replace||(w=Kb(p));Na(R,v(B),w);ca(v(w),C)}B=l.transcludeOnThisElement?O(n,l.transclude,x):x;l(q,n,w,d,B)}m=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=O(b,l.transclude,e)),l(q,b,c,d,a))}}function y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function db(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function M(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ca(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ca(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function D(a,b){if("srcdoc"==b)return B.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(m[e],!0,D(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<
h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[v.expando]=d[v.expando];d=1;for(e=b.length;d<e;d++)f=b[d],v(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return J(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:pa,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===t?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);E.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var qa=b.startSymbol(),Z=b.endSymbol(),W="{{"==qa||"}}"==Z?Qa:function(a){return a.replace(/\{\{/g,qa).replace(/}}/g,Z)},U=/^ngAttr[A-Z]/;return w}]}function pa(b){return Za(b.replace(we,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=
0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?J(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;A(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Wa(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw D("$controller")("noscp",
k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return v(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=M(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:t;return function(c){a||(a=vc(b));return c?a[M(c)]||null:a}}function xc(b,a,c){if(P(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){A(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==za.call(a)&&"[object Blob]"!==za.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function q(a){function b(a){var d=J({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=J({},a.headers),d,f,b=J({},b.common,b[M(a.method)]);
a:for(d in b){a=M(d);for(f in c)if(M(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){P(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);J(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);y(c)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});y(a.withCredentials)&&!y(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},t],g=n.when(c);for(r(B,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function h(a,b,c,e){x&&(200<=a&&300>a?x.put(v,[a,b,vc(c),e]):x.remove(v));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function s(){var a=Ra(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var B=n.defer(),r=B.promise,x,H,v=E(c.url,c.params);q.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(x=T(c.cache)?c.cache:T(e.cache)?e.cache:u);if(x)if(H=x.get(v),z(H)){if(H&&P(H.then))return H.then(s,s),H;I(H)?p(H[1],H[0],ha(H[2]),H[3]):p(H,200,{},"OK")}else x.put(v,r);y(H)&&
((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,v,f,h,g,c.timeout,c.withCredentials,c.responseType));return r}function E(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||y(a)||(I(a)||(a=[a]),r(a,function(a){T(a)&&(a=ta(a)?a.toISOString():na(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var u=c("$http"),B=[];r(f,function(a){B.unshift(A(a)?p.get(a):p.invoke(a))});r(g,
function(a,b){var c=A(a)?p.get(a):p.invoke(a);B.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(J(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(J(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function xe(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw D("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){$a(f,"load",g);$a(f,"error",g);e.body.removeChild(f);f=null;var k=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,k="error"===a.type?404:200);c&&c(k,s)};sb(f,"load",g);sb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){A(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,s){function E(){B=g;R&&R();w&&w.abort()}function u(a,d,e,f,g){K&&c.cancel(K);R=w=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(F)}
var B;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==M(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){u(l,a,d[N].data,"",b);d[N]=F})}else{var w=a(e);w.open(e,m,!0);r(n,function(a,b){z(a)&&w.setRequestHeader(b,a)});w.onreadystatechange=function(){if(w&&4==w.readyState){var a=null,b=null,c="";B!==g&&(a=w.getAllResponseHeaders(),b="response"in w?w.response:w.responseText);B===g&&
10>Q||(c=w.statusText);u(l,B||w.status,b,a,c)}};q&&(w.withCredentials=!0);if(s)try{w.responseType=s}catch(ca){if("json"!==s)throw ca;}w.send(h||null)}if(0<p)var K=c(E,p);else p&&P(p.then)&&p.then(E)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,s=[],E=f.length,u=!1,B=[];q<E;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,
n+g))?(q!=n&&s.push(f.substring(q,n)),s.push(q=c(u=f.substring(n+g,p))),q.exp=u,q=p+k,u=!0):(q!=E&&s.push(f.substring(q)),q=E);(E=s.length)||(s.push(""),E=1);if(l&&1<s.length)throw yc("noconcat",f);if(!h||u)return B.length=E,q=function(a){try{for(var b=0,c=E,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=na(g)}B[b]=g}return B.join("")}catch(k){a=yc("interr",f,k.toString()),
d(a)}},q.exp=f,q.parts=s,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,s=z(m)&&!m;k=z(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);s||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
lb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function eb(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,eb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=ra(c,a);if(!A(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=ra(b,d))!==t)return d=e,(e=ra(a,e))!==t?c+(ra("/",e)||e):b+d;if((e=ra(c,d))!==t)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=ra(b,d)||ra(c,d),e="#"==e.charAt(0)?ra(a,e):this.$$html5?e:"";if(!A(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(eb(b)==eb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==eb(d))return d;if(e=ra(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}
function Cc(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=
eb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=v(a.target);"a"!==M(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(h&&0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;
else{var l=k.path().split("/"),h=h.split("/");2!==l.length||l[1]||(l.length=1);for(var q=0;q<h.length;q++)"."!=h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||F;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,
a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){va(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),
d);var k=va(b[f],d);k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(wa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===t&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);va(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return t;(h=h[a])&&h.then&&
(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return t;(h=h[c])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return t;(h=h[d])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return t;(h=h[e])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==
h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=t,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ka(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=ba(g);f=a.unwrapPromises?function(a,b){return k(a,b,wa)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;wa=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new fb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return F}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=t;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),E=function(d){try{l.resolve((P(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},u=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},B=function(b){try{l.notify((P(k)?k:c)(b))}catch(d){a(d)}};g?g.push([E,u,B]):h.then(E,u,B);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((P(g)?
g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,n){var p=e(),q,s=function(b){try{return(P(h)?h:c)(b)}catch(d){return a(d),g(d)}},E=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(s,E,u)))},function(a){q||(q=!0,p.resolve(E(a)))},function(a){q||p.notify(u(a))})});return p.promise},all:function(a){var b=e(),c=0,d=I(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=D("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Wa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!P(b)){var k=h(b||F,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Sa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Sa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,l=f(a),m=[],p={},n=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Pa(d))for(e!==m&&(e=m,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==
d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(Pa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,
f,k,h,l=this.$$asyncQueue,r=this.$$postDigestQueue,R,w,t=b,K,O=[],v,C,x;m("$digest");g.$$checkUrlChange();c=null;do{w=!1;for(K=this;l.length;){try{x=l.shift(),x.scope.$eval(x.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(h=K.$$watchers)for(R=h.length;R--;)try{if(d=h[R])if((f=d.get(K))!==(k=d.last)&&!(d.eq?Aa(f,k):"number"===typeof f&&"number"===typeof k&&isNaN(f)&&isNaN(k)))w=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,k===n?f:k,K),5>t&&(v=4-t,O[v]||(O[v]=[]),C=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):
d.exp,C+="; newVal: "+na(f)+"; oldVal: "+na(k),O[v].push(C));else if(d===c){w=!1;break a}}catch(z){p.$$phase=null,e(z)}if(!(h=K.$$childHead||K!==this&&K.$$nextSibling))for(;K!==this&&!(h=K.$$nextSibling);)K=K.$parent}while(K=h);if((w||l.length)&&!t--)throw p.$$phase=null,a("infdig",b,na(O));}while(w||l.length);for(p.$$phase=null;r.length;)try{r.shift()()}catch(A){e(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,
Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=F,this.$on=
this.$watch=function(){return F})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ra(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Ba.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;k.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,h)}catch(p){e(p)}else d.splice(l,
1),l--,m--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Ba.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(l){e(l)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};
var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Be(b){if("self"===b)return b;if(A(b)){if(-1<b.indexOf("***"))throw xa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw xa("imatcher");}function Gc(b){var a=[];z(b)&&r(b,function(b){a.push(Be(b))});return a}function be(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw xa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw xa("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw xa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===t||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw xa("insecurl",
d.toString());}if(c===ga.HTML)return e(d);throw xa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw xa("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=Qa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ga,function(a,b){var c=M(b);e[Za("parse_as_"+c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(M((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=A(f.body.style.webkitTransition),n=A(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=z(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=A(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=ba(W)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Kc);a("orderBy",Lc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!I(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Va.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=
b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){y(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,
e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));k.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;k=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;A(c)&&(c=He.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
if(!ta(c))return c;for(;e;)(m=Ie.exec(e))?(g=g.concat(Ba.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){k=Je[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function De(){return function(b){return na(b,!0)}}function Ee(){return function(b,a){if(!I(b)&&!A(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(A(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ta(a)&&ta(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a)||!c)return a;c=I(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Qa;if(A(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=
d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ya(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||yb,k=0,m=f.$error={},h=[];f.$name=
a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Da(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Sa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Sa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Ra(d,c))return}else m[a]=
d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function sa(b,a,c,d){b.$setValidity(a,c);return c?d:t}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ke(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,
b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Le),k=a[0].placeholder,m={},h=M(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if("password"!==h&&Ua(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==
f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(){p||(p=f.defer(function(){n();p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||q()});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return sa(d,
"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw D("ngPattern")("noregexp",s,e,ia(a));return sa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return sa(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var u=U(c.ngMaxlength);e=function(a){return sa(d,"maxlength",d.$isEmpty(a)||a.length<=u,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!I(a)){if(A(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<
b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=m(h,1);k.$addClass(q)}else if(!Aa(b,l)){var s=e(l),q=d(h,s),h=d(s,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ha(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):
(g=m(h,-1),k.$removeClass(g))}})}}}]}var Le="validity",M=function(b){return A(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,Ia=function(b){return A(b)?b.toUpperCase():b},Q,v,Ea,Ba=[].slice,Me=[].push,za=Object.prototype.toString,Ta=D("ng"),Va=W.angular||(W.angular={}),Ya,Ma,ma=["0","0","0"];Q=U((/msie (\d+)/.exec(M(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=U((/trident\/.*; rv:(\d+)/.exec(M(navigator.userAgent))||[])[1]));F.$inject=[];Qa.$inject=[];var I=function(){return P(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===za.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return A(b)?b.trim():b}:function(b){return A(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xa=function(){if(z(Xa.isActive_))return Xa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.25",major:1,minor:2,dot:25,codeName:"hypnotic-gesticulation"};S.expando="ng339";var ab=S.cache={},ne=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},$a=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,
je=/^moz([A-Z])/,Hb=D("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=
ea.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?v(this[b]):v(this[this.length+b])},length:0,push:Me,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[M(b)]=b});var rc={};r("input select option textarea button form details".split(" "),
function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:pb,scope:function(b){return v.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return v.data(b,"$isolateScope")||v.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Za(a);if(z(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],
""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?t:d);return d}},attr:function(b,a,c){var d=M(a);if(qb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||F).specified?d:t;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(y(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]=
"innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(y(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(y(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===t){if(T(a)){for(e=
0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(z(f))throw Hb("onargs");var g=oa(c,"events"),k=oa(c,"handle");g||oa(c,"events",g={});k||oa(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?
function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else sb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=v(a);a.on(c,function f(){a.off(c,
d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=v(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;y(f)&&(f=!Nb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(oa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:F,type:e,target:a},c.type&&(e=J(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=
function(c,e,f){for(var g,k=0;k<this.length;k++)y(g)?(g=a(this[k],c,e,f),z(g)&&(g=v(g))):Jb(g,a(this[k],c,e,f));return z(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});bb.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
cb=D("$injector"),Ne=D("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Ne("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=A(c)?c:I(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=A(c)?c:I(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){ob(a,c);nb(a,g)});k&&d(k)},enabled:F}}]}],ja=D("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var we=/^(x[\:\-_]|data[\:\-_])/i,yc=D("$interpolate"),Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
ze={http:80,https:443,ftp:21},Sb=D("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(y(a))return this.$$url;a=Oe.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Cc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(A(a)||ib(a))a=a.toString(),this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=D("$parse"),Fc={},wa,Pe=Function.prototype.call,Qe=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:F,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":F,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Re={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=t;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},
was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+
this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=
gb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=J(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Re[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=J(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=
this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===
e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return J(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return J(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return J(function(e,f){return c(e,f,a,d)},{constant:a.constant&&
d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return J(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return ub(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return J(function(e,f){var g=a(e,f),k=d(e,f),m;ka(k,c.text);if(!g)return t;(g=va(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&
(m=g,"$$v"in g||(m.$$v=t,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ka(d(e,g),c.text);(g=va(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(va(d[h](f,g),e.text));h=a(f,g,m)||F;va(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw la("isecfn",
l);if(h===Pe||h===Qe||Qc&&h===Qc)throw la("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return va(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return J(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return J(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},xa=D("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Hc=ua(W.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",Je={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Jc.$inject=["$locale"];var Fe=ba(M),Ge=ba(Ia);Lc.$inject=["$parse"];var dd=ba({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===za.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(qb,function(a,c){if("multiple"!=a){var d=pa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=pa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===za.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Q&&g&&e.prop(g,f[k])):"href"===
a&&f.$set(k,null)})}}}});var yb={$addControl:F,$removeControl:F,$setValidity:F,$setDirty:F,$setPristine:F};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",k);e.on("$destroy",function(){c(function(){$a(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),
h=f.name||f.ngForm;h&&ub(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&ub(a,h,t,h);J(g,yb)})}}}}}]},ed=Rc(),rd=Rc(!0),Se=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Te=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ue=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ue.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return t});Ke(e,"number",Ve,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return sa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return sa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return sa(e,"number",e.$isEmpty(a)||
ib(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"url",e.$isEmpty(a)||Se.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"email",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){y(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;A(f)||(f=!0);A(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:F,button:F,submit:F,reset:F,file:F},Ve=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[M(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Oa="ng-pristine",zb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw D("ngModel")("nonassign",d.ngModel,ia(e));this.$render=F;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,p=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=
c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=ba({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!y(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return I(a)?a.join(", "):t});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=ya({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==t?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=ya({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={},Ye={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=pa("ng-"+a);lc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Ye[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ua(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Va.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,E){var u=0,t,v,R,w=function(){v&&(v.remove(),v=null);t&&(t.$destroy(),t=null);
R&&(e.leave(R,function(){v=null}),v=R,R=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!z(l)||l&&!g.$eval(l)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();r.template=a;a=E(c,function(a){w();e.enter(a,null,k,m)});t=c;R=a;t.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===u&&w()}),g.$emit("$includeContentRequested")):(w(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=ya({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=ya({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[M(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=D("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,s,t,u,B={$id:Ka};if(!l)throw d("iexp",
h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){u&&(B[u]=a);B[t]=c;B.$index=d;return n(e,B)}):(q=function(a,c){return Ka(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];u=l[2];var z={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,B={},C,x,H,A,F,D,y,I=[];if(Pa(a))D=a,F=p||q;else{F=p||s;D=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&D.push(H);D.sort()}C=D.length;k=I.length=D.length;for(g=0;g<k;g++)if(H=a===
D?g:D[g],A=a[H],n=F(H,A,g),Da(n,"`track by` id"),z.hasOwnProperty(n))y=z[n],delete z[n],B[n]=y,I[g]=y;else{if(B.hasOwnProperty(n))throw r(I,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",h,n,na(A));I[g]={id:n};B[n]=!1}for(H in z)z.hasOwnProperty(H)&&(y=z[H],g=Eb(y.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),y.scope.$destroy());g=0;for(k=D.length;g<k;g++){H=a===D?g:D[g];A=a[H];y=I[g];I[g-1]&&(l=I[g-1].clone[I[g-1].clone.length-1]);if(y.scope){x=y.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
y.clone[0]!=n&&c.move(Eb(y.clone),null,v(l));l=y.clone[y.clone.length-1]}else x=e.$new();x[t]=A;u&&(x[u]=H);x.$index=g;x.$first=0===g;x.$last=g===C-1;x.$middle=!(x.$first||x.$last);x.$odd=!(x.$even=0===(g&1));y.scope||m(x,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,v(l));l=a;y.scope=x;y.clone=a;B[y.id]=y})}z=B})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ua(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ua(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=ya(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=
h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=ya({link:function(a,c,d,e,f){if(!f)throw D("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ze=D("ngOptions"),Ed=ba({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:F};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Da(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=F})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&u.prop("selected",!0)):y(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,
s,t,w;s=g.$modelValue;t=u(e)||[];var A=n?Zb(t):t,F,L,x;L={};x=!1;if(q)if(h=g.$modelValue,v&&I(h))for(x=new bb([]),d={},w=0;w<h.length;w++)d[m]=h[w],x.put(v(e,d),h[w]);else x=new bb(h);w=x;var C,J;for(x=0;F=A.length,x<F;x++){h=x;if(n){h=A[x];if("$"===h.charAt(0))continue;L[n]=h}L[m]=t[h];d=p(e,L)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=z(w.remove(v?v(e,L):r(e,L))):(v?(d={},d[m]=s,d=v(e,d)===v(e,L)):d=s===r(e,L),w=w||d);C=l(e,L);C=z(C)?C:"";h.push({id:v?v(e,L):n?A[x]:x,label:C,selected:d})}q||(E||null===
s?a[""].unshift({id:"",label:"",selected:!w}):w||a[""].unshift({id:"?",label:"",selected:!0}));L=0;for(A=c.length;L<A;L++){d=c[L];h=a[d];y.length<=L?(s={element:D.clone().attr("label",d),label:h.label},t=[s],y.push(t),f.append(s.element)):(t=y[L],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));C=null;x=0;for(F=h.length;x<F;x++)d=h[x],(w=t[x+1])?(C=w.element,w.label!==d.label&&C.text(w.label=d.label),w.id!==d.id&&C.val(w.id=d.id),C[0].selected!==d.selected&&(C.prop("selected",w.selected=d.selected),
Q&&C.prop("selected",w.selected))):(""===d.id&&E?J=E:(J=B.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:J,label:d.label,id:d.id,selected:d.selected}),C?C.after(J):s.element.append(J),C=J);for(x++;t.length>x;)t.pop().element.remove()}for(;y.length>L;)y.pop()[0].element.remove()}var h;if(!(h=s.match(d)))throw Ze("iexp",s,ia(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],p=c(h[3]||""),r=c(h[2]?h[1]:m),u=c(h[7]),v=h[8]?c(h[8]):null,y=[[{element:f,
label:""}]];E&&(a(E)(e),E.removeClass("ng-scope"),E.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=u(e)||[],d={},h,l,p,s,w,z,x;if(q)for(l=[],s=0,z=y.length;s<z;s++)for(a=y[s],p=1,w=a.length;p<w;p++){if((h=a[p].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(x=0;x<c.length&&(d[m]=c[x],v(e,d)!=h);x++);else d[m]=c[h];l.push(r(e,d))}}else if(h=f.val(),"?"==h)l=t;else if(""===h)l=null;else if(v)for(x=0;x<c.length;x++){if(d[m]=c[x],v(e,d)==h){l=r(e,d);break}}else d[m]=c[h],
n&&(d[n]=h),l=r(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(u,k);e.$watchCollection(function(){var a={},c=u(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,s=k.ngOptions,E=!1,u,B=v(X.createElement("option")),D=v(X.createElement("optgroup")),A=B.clone();k=0;for(var w=g.children(),F=w.length;k<F;k++)if(""===w[k].value){u=E=w.eq(k);break}p.init(m,
E,A);q&&(m.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:F,removeOption:F};return{restrict:"E",priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):
l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=ba({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=W.jQuery)&&Ea.fn.on?(v=Ea,J(Ea.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",!1,!1,!0)):v=S,Va.element=v,$c(Va),v(X).ready(function(){Xc(X,fc)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map
/** ace.min.js **/
!function(e,t){var a=function(t,a){var i=e.extend({},e.fn.ace_colorpicker.defaults,a),n=e(t),s="",r="",o=null,l=[];n.addClass("hide").find("option").each(function(){var e="colorpick-btn",t=this.value.replace(/[^\w\s,#\(\)\.]/g,"");this.value!=t&&(this.value=t),this.selected&&(e+=" selected",r=t),l.push(t),s+='<li><a class="'+e+'" href="#" style="background-color:'+t+';" data-color="'+t+'"></a></li>'}).end().on("change.color",function(){n.next().find(".btn-colorpicker").css("background-color",this.value)}).after('<div class="dropdown dropdown-colorpicker">		<a data-toggle="dropdown" class="dropdown-toggle" '+(i.auto_pos?'data-position="auto"':"")+' href="#"><span class="btn-colorpicker" style="background-color:'+r+'"></span></a><ul class="dropdown-menu'+(i.caret?" dropdown-caret":"")+(i.pull_right?" dropdown-menu-right":"")+'">'+s+"</ul></div>");var c=n.next().find(".dropdown-menu");c.on(ace.click_event,function(t){var a=e(t.target);if(!a.is(".colorpick-btn"))return!1;o&&o.removeClass("selected"),o=a,o.addClass("selected");var i=o.data("color");return n.val(i).trigger("change"),t.preventDefault(),!0}),o=n.next().find("a.selected"),this.pick=function(a,i){if("number"==typeof a){if(a>=l.length)return;t.selectedIndex=a,c.find("a:eq("+a+")").trigger(ace.click_event)}else if("string"==typeof a){var s=a.replace(/[^\w\s,#\(\)\.]/g,"");if(a=l.indexOf(s),-1==a&&i===!0&&(l.push(s),e("<option />").appendTo(n).val(s),e('<li><a class="colorpick-btn" href="#"></a></li>').appendTo(c).find("a").css("background-color",s).data("color",s),a=l.length-1),-1==a)return;c.find("a:eq("+a+")").trigger(ace.click_event)}},this.destroy=function(){n.removeClass("hide").off("change.color").next().remove(),l=[]}};e.fn.ace_colorpicker=function(i,n){var s,r=this.each(function(){var t=e(this),r=t.data("ace_colorpicker"),o="object"==typeof i&&i;r||t.data("ace_colorpicker",r=new a(this,o)),"string"==typeof i&&(s=r[i](n))});return s===t?r:s},e.fn.ace_colorpicker.defaults={pull_right:!1,caret:!0,auto_pos:!0}}(window.jQuery),function(e,t){var a="multiple"in document.createElement("INPUT"),i="FileList"in window,n="FileReader"in window,s="File"in window,r=function(t,a){var i=this;this.settings=e.extend({},e.fn.ace_file_input.defaults,a),this.$element=e(t),this.element=t,this.disabled=!1,this.can_reset=!0,this.$element.off("change.ace_inner_call").on("change.ace_inner_call",function(e,t){return t!==!0?l.call(i):void 0});var n=this.$element.closest("label").css({display:"block"}),s=0==n.length?"label":"span";this.$element.wrap("<"+s+' class="ace-file-input" />'),this.apply_settings(),this.reset_input_field()};r.error={FILE_LOAD_FAILED:1,IMAGE_LOAD_FAILED:2,THUMBNAIL_FAILED:3},r.prototype.apply_settings=function(){var t=this;this.multi=this.$element.attr("multiple")&&a,this.well_style="well"==this.settings.style,this.well_style?this.$element.parent().addClass("ace-file-multiple"):this.$element.parent().removeClass("ace-file-multiple"),this.$element.parent().find(":not(input[type=file])").remove(),this.$element.after('<span class="ace-file-container" data-title="'+this.settings.btn_choose+'"><span class="ace-file-name" data-title="'+this.settings.no_file+'">'+(this.settings.no_icon?'<i class="'+ace.vars.icon+this.settings.no_icon+'"></i>':"")+"</span></span>"),this.$label=this.$element.next(),this.$container=this.$element.closest(".ace-file-input");var n=!!this.settings.icon_remove;if(n){var s=e('<a class="remove" href="#"><i class="'+ace.vars.icon+this.settings.icon_remove+'"></i></a>').appendTo(this.$element.parent());s.on(ace.click_event,function(e){if(e.preventDefault(),!t.can_reset)return!1;var a=!0;if(t.settings.before_remove&&(a=t.settings.before_remove.call(t.element)),!a)return!1;t.reset_input();return!1})}this.settings.droppable&&i&&o.call(this)},r.prototype.show_file_list=function(t){var a="undefined"==typeof t?this.$element.data("ace_input_files"):t;if(a&&0!=a.length){this.well_style&&(this.$label.find(".ace-file-name").remove(),this.settings.btn_change||this.$label.addClass("hide-placeholder")),this.$label.attr("data-title",this.settings.btn_change).addClass("selected");for(var i=0;i<a.length;i++){var s="string"==typeof a[i]?a[i]:e.trim(a[i].name),r=s.lastIndexOf("\\")+1;0==r&&(r=s.lastIndexOf("/")+1),s=s.substr(r);var o="fa fa-file",l="file";if(/\.(jpe?g|png|gif|svg|bmp|tiff?)$/i.test(s)?(o="fa fa-picture-o file-image",l="image"):/\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i.test(s)?(o="fa fa-film file-video",l="video"):/\.(mp3|ogg|wav|wma|amr|aac)$/i.test(s)&&(o="fa fa-music file-audio",l="audio"),this.well_style){this.$label.append('<span class="ace-file-name" data-title="'+s+'"><i class="'+ace.vars.icon+o+'"></i></span>');var d=e.trim(a[i].type),u=n&&this.settings.thumbnail&&(d.length>0&&d.match("image")||0==d.length&&"image"==l);if(u){var h=this;e.when(c.call(this,a[i])).fail(function(e){h.settings.preview_error&&h.settings.preview_error.call(h,s,e.code)})}}else this.$label.find(".ace-file-name").attr({"data-title":s}).find(ace.vars[".icon"]).attr("class",ace.vars.icon+o)}return!0}},r.prototype.reset_input=function(){this.reset_input_ui(),this.reset_input_field()},r.prototype.reset_input_ui=function(){this.$label.attr({"data-title":this.settings.btn_choose,"class":"ace-file-container"}).find(".ace-file-name:first").attr({"data-title":this.settings.no_file,"class":"ace-file-name"}).find(ace.vars[".icon"]).attr("class",ace.vars.icon+this.settings.no_icon).prev("img").remove(),this.settings.no_icon||this.$label.find(ace.vars[".icon"]).remove(),this.$label.find(".ace-file-name").not(":first").remove(),this.reset_input_data()},r.prototype.reset_input_field=function(){this.$element.wrap("<form>").parent().get(0).reset(),this.$element.unwrap()},r.prototype.reset_input_data=function(){this.$element.data("ace_input_files")&&(this.$element.removeData("ace_input_files"),this.$element.removeData("ace_input_method"))},r.prototype.enable_reset=function(e){this.can_reset=e},r.prototype.disable=function(){this.disabled=!0,this.$element.attr("disabled","disabled").addClass("disabled")},r.prototype.enable=function(){this.disabled=!1,this.$element.removeAttr("disabled").removeClass("disabled")},r.prototype.files=function(){return e(this).data("ace_input_files")||null},r.prototype.method=function(){return e(this).data("ace_input_method")||""},r.prototype.update_settings=function(t){this.settings=e.extend({},this.settings,t),this.apply_settings()},r.prototype.loading=function(t){if(t===!1)this.$container.find(".ace-file-overlay").remove(),this.element.removeAttribute("readonly");else{var a="string"==typeof t?t:'<i class="overlay-content fa fa-spin fa-spinner orange2 fa-2x"></i>',i=this.$container.find(".ace-file-overlay");0==i.length&&(i=e('<div class="ace-file-overlay"></div>').appendTo(this.$container),i.on("click tap",function(e){return e.stopImmediatePropagation(),e.preventDefault(),!1}),this.element.setAttribute("readonly","true")),i.empty().append(a)}};var o=function(){var e=this,t=this.$element.parent();t.off("dragenter").on("dragenter",function(e){e.preventDefault(),e.stopPropagation()}).off("dragover").on("dragover",function(e){e.preventDefault(),e.stopPropagation()}).off("drop").on("drop",function(t){t.preventDefault(),t.stopPropagation();var a=t.originalEvent.dataTransfer,i=a.files;if(!e.multi&&i.length>1){var n=[];n.push(i[0]),i=n}return i=u.call(e,i,!0),i===!1?!1:(e.$element.data("ace_input_method","drop"),e.$element.data("ace_input_files",i),e.show_file_list(i),e.$element.triggerHandler("change",[!0]),!0)})},l=function(){var e=this.element.files||[this.element.value];return e=u.call(this,e,!1),e===!1?!1:(this.$element.data("ace_input_method","select"),this.$element.data("ace_input_files",e),this.show_file_list(e),!0)},c=function(t){var a=this,i=a.$label.find(".ace-file-name:last"),n=new e.Deferred,s=new FileReader;return s.onload=function(s){i.prepend("<img class='middle' style='display:none;' />");var o=i.find("img:last").get(0);e(o).one("load",function(){var s=50;"large"==a.settings.thumbnail?s=150:"fit"==a.settings.thumbnail&&(s=i.width()),i.addClass(s>50?"large":"");var l=d(o,s,t.type);if(null==l)return e(this).remove(),void n.reject({code:r.error.THUMBNAIL_FAILED});var c=l.w,u=l.h;"small"==a.settings.thumbnail&&(c=u=s),e(o).css({"background-image":"url("+l.src+")",width:c,height:u}).data("thumb",l.src).attr({src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="}).show(),n.resolve()}).one("error",function(){i.find("img").remove(),n.reject({code:r.error.IMAGE_LOAD_FAILED})}),o.src=s.target.result},s.onerror=function(){n.reject({code:r.error.FILE_LOAD_FAILED})},s.readAsDataURL(t),n.promise()},d=function(t,a){var i=t.width,n=t.height;i=i>0?i:e(t).width(),n=n>0?n:e(t).height(),(i>a||n>a)&&(i>n?(n=parseInt(a/i*n),i=a):(i=parseInt(a/n*i),n=a));var s;try{var r=document.createElement("canvas");r.width=i,r.height=n;var o=r.getContext("2d");o.drawImage(t,0,0,t.width,t.height,0,0,i,n),s=r.toDataURL()}catch(l){s=null}return s?(/^data\:image\/(png|jpe?g|gif);base64,[0-9A-Za-z\+\/\=]+$/.test(s)||(s=null),s?{src:s,w:i,h:n}:null):null},u=function(e,t){var a=f.call(this,e,t);return-1===a?(this.reset_input(),!1):a&&0!=a.length?((a instanceof Array||i&&a instanceof FileList)&&(e=a),a=!0,this.settings.before_change&&(a=this.settings.before_change.call(this.element,e,t)),-1===a?(this.reset_input(),!1):a&&0!=a.length?((a instanceof Array||i&&a instanceof FileList)&&(e=a),e):(this.$element.data("ace_input_files")||this.reset_input(),!1)):(this.$element.data("ace_input_files")||this.reset_input(),!1)},h=function(e){return e?("string"==typeof e&&(e=[e]),0==e.length?null:new RegExp(".(?:"+e.join("|")+")$","i")):null},p=function(e){return e?("string"==typeof e&&(e=[e]),0==e.length?null:new RegExp("^(?:"+e.join("|").replace(/\//g,"\\/")+")$","i")):null},f=function(t,a){var i=h(this.settings.allowExt),n=h(this.settings.denyExt),r=p(this.settings.allowMime),o=p(this.settings.denyMime),l=this.settings.maxSize||!1;if(!(i||n||r||o||l))return!0;for(var c=[],d={},u=0;u<t.length;u++){var f=t[u],v=s?f.name:f;if(!i||i.test(v))if(n&&n.test(v))"ext"in d||(d.ext=[]),d.ext.push(v);else{var g;if(s){if((g=e.trim(f.type)).length>0){if(r&&!r.test(g)){"mime"in d||(d.mime=[]),d.mime.push(v);continue}if(o&&o.test(g)){"mime"in d||(d.mime=[]),d.mime.push(v);continue}}l&&f.size>l?("size"in d||(d.size=[]),d.size.push(v)):c.push(f)}else c.push(f)}else"ext"in d||(d.ext=[]),d.ext.push(v)}if(c.length==t.length)return t;var m={ext:0,mime:0,size:0};"ext"in d&&(m.ext=d.ext.length),"mime"in d&&(m.mime=d.mime.length),"size"in d&&(m.size=d.size.length);var b;return this.$element.trigger(b=new e.Event("file.error.ace"),{file_count:t.length,invalid_count:t.length-c.length,error_list:d,error_count:m,dropped:a}),b.isDefaultPrevented()?-1:c};e.fn.ace_file_input=function(a,i){var n,s=this.each(function(){var t=e(this),s=t.data("ace_file_input"),o="object"==typeof a&&a;s||t.data("ace_file_input",s=new r(this,o)),"string"==typeof a&&(n=s[a](i))});return n===t?s:n},e.fn.ace_file_input.defaults={style:!1,no_file:"No File ...",no_icon:"fa fa-upload",btn_choose:"Choose",btn_change:"Change",icon_remove:"fa fa-times",droppable:!1,thumbnail:!1,allowExt:null,denyExt:null,allowMime:null,denyMime:null,maxSize:!1,before_change:null,before_remove:null,preview_error:null}}(window.jQuery);;"ace"in window||(window.ace={}),"helper"in window.ace||(window.ace.helper={}),"vars"in window.ace||(window.ace.vars={icon:" ace-icon ",".icon":".ace-icon"}),ace.vars.touch="ontouchstart"in document.documentElement,jQuery(function(e){ace.click_event=ace.vars.touch&&e.fn.tap?"tap":"click";var a=navigator.userAgent;ace.vars.webkit=!!a.match(/AppleWebKit/i),ace.vars.safari=!!a.match(/Safari/i)&&!a.match(/Chrome/i),ace.vars.android=ace.vars.safari&&!!a.match(/Android/i),ace.vars.ios_safari=!!a.match(/OS ([4-8])(_\d)+ like Mac OS X/i)&&!a.match(/CriOS/i),ace.vars.non_auto_fixed=ace.vars.android||ace.vars.ios_safari,ace.vars.non_auto_fixed&&e("body").addClass("mob-safari"),ace.vars.transition="transition"in document.body.style||"WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"OTransition"in document.body.style;var t={general_vars:null,handle_side_menu:null,add_touch_drag:null,sidebar_scrollable:[!0,!0,!1||ace.vars.safari||ace.vars.ios_safari,200,!1],sidebar_hoverable:null,general_things:null,widget_boxes:null,widget_reload_handler:null,settings_box:null,settings_rtl:null,settings_skin:null,enable_searchbox_autocomplete:null,auto_hide_sidebar:null,auto_padding:null,auto_container:null};for(var s in t)if(s in ace){var i=t[s];i!==!1&&(null==i?i=[jQuery]:i instanceof String?i=[jQuery,i]:i instanceof Array&&i.unshift(jQuery),ace[s].apply(null,i))}}),ace.general_vars=function(e){var a="menu-min",t="responsive-min",s="h-sidebar",i=e("#sidebar").eq(0);ace.vars.mobile_style=1,i.hasClass("responsive")&&!e("#menu-toggler").hasClass("navbar-toggle")?ace.vars.mobile_style=2:i.hasClass(t)?ace.vars.mobile_style=3:i.hasClass("navbar-collapse")&&(ace.vars.mobile_style=4),e(window).on("resize.ace.vars",function(){ace.vars.window={width:parseInt(e(this).width()),height:parseInt(e(this).height())},ace.vars.mobile_view=ace.vars.mobile_style<4&&ace.helper.mobile_view(),ace.vars.collapsible=!ace.vars.mobile_view&&ace.helper.collapsible(),ace.vars.nav_collapse=(ace.vars.collapsible||ace.vars.mobile_view)&&e("#navbar").hasClass("navbar-collapse");var i=e(document.getElementById("sidebar"));ace.vars.minimized=!ace.vars.collapsible&&i.hasClass(a)||3==ace.vars.mobile_style&&ace.vars.mobile_view&&i.hasClass(t),ace.vars.horizontal=!(ace.vars.mobile_view||ace.vars.collapsible)&&i.hasClass(s)}).triggerHandler("resize.ace.vars")},ace.general_things=function(e){var a=!!e.fn.ace_scroll;a&&e(".dropdown-content").ace_scroll({reset:!1,mouseWheelLock:!0}),e(window).on("resize.reset_scroll",function(){a&&e(".ace-scroll").ace_scroll("reset")}),e(document).on("settings.ace.reset_scroll",function(t,s){"sidebar_collapsed"==s&&a&&e(".ace-scroll").ace_scroll("reset")}),e(document).on("click.dropdown.pos",'.dropdown-toggle[data-position="auto"]',function(){var a=e(this).offset(),t=e(this.parentNode);parseInt(a.top+e(this).height())+50>ace.helper.scrollTop()+ace.helper.winHeight()-t.find(".dropdown-menu").eq(0).height()?t.addClass("dropup"):t.removeClass("dropup")}),e(document).on("click",".dropdown-navbar .nav-tabs",function(a){a.stopPropagation();{var t;a.target}(t=e(a.target).closest("[data-toggle=tab]"))&&t.length>0&&(t.tab("show"),a.preventDefault())}),e('.ace-nav [class*="icon-animated-"]').closest("a").one("click",function(){var a=e(this).find('[class*="icon-animated-"]').eq(0),t=a.attr("class").match(/icon\-animated\-([\d\w]+)/);a.removeClass(t[0])}),e(".sidebar .nav-list .badge[title],.sidebar .nav-list .badge[title]").each(function(){var a=e(this).attr("class").match(/tooltip\-(?:\w+)/);a=a?a[0]:"tooltip-error",e(this).tooltip({placement:function(a,t){var s=e(t).offset();return parseInt(s.left)<parseInt(document.body.scrollWidth/2)?"right":"left"},container:"body",template:'<div class="tooltip '+a+'"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'})});var t=e(".btn-scroll-up");if(t.length>0){var s=!1;e(window).on("scroll.scroll_btn",function(){ace.helper.scrollTop()>parseInt(ace.helper.winHeight()/4)?s||(t.addClass("display"),s=!0):s&&(t.removeClass("display"),s=!1)}).triggerHandler("scroll.scroll_btn"),t.on(ace.click_event,function(){var a=Math.min(500,Math.max(100,parseInt(ace.helper.scrollTop()/3)));return e("html,body").animate({scrollTop:0},a),!1})}if(ace.vars.webkit){var i=e(".ace-nav").get(0);i&&e(window).on("resize.webkit",function(){ace.helper.redraw(i)})}},ace.helper.collapsible=function(){var e;return null!=document.querySelector("#sidebar.navbar-collapse")&&null!=(e=document.querySelector('.navbar-toggle[data-target*=".sidebar"]'))&&e.scrollHeight>0},ace.helper.mobile_view=function(){var e;return null!=(e=document.getElementById("menu-toggler"))&&e.scrollHeight>0},ace.helper.redraw=function(e){var a=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=a},ace.helper.scrollTop=function(){return document.scrollTop||document.documentElement.scrollTop||document.body.scrollTop},ace.helper.winHeight=function(){return window.innerHeight||document.documentElement.clientHeight},ace.helper.camelCase=function(e){return e.replace(/-([\da-z])/gi,function(e,a){return a?a.toUpperCase():""})},ace.helper.removeStyle="removeProperty"in document.body.style?function(e,a){e.style.removeProperty(a)}:function(e,a){e.style[ace.helper.camelCase(a)]=""},ace.helper.hasClass="classList"in document.documentElement?function(e,a){return e.classList.contains(a)}:function(e,a){return e.className.indexOf(a)>-1},ace.handle_side_menu=function(e){var a=e(".sidebar").eq(0);e(document).on(ace.click_event+".ace.menu","#menu-toggler",function(){return a.toggleClass("display"),e(this).toggleClass("display"),e(this).hasClass("display")&&"sidebar_scroll"in ace.helper&&ace.helper.sidebar_scroll.reset(),!1}).on(ace.click_event+".ace.menu",".sidebar-collapse",function(){ace.vars.collapsible||ace.vars.horizontal||(ace.vars.minimized=!ace.vars.minimized,ace.settings.sidebar_collapsed.call(this,ace.vars.minimized))}).on(ace.click_event+".ace.menu",".sidebar-expand",function(){ace.vars.minimized&&ace.settings.sidebar_collapsed.call(this,!1,!1);var t=e(this).find(ace.vars[".icon"]),s=t.attr("data-icon1"),i=t.attr("data-icon2");a.hasClass("responsive-min")?(t.removeClass(s).addClass(i),a.removeClass("responsive-min"),a.addClass("display responsive-max"),ace.vars.minimized=!1):(t.removeClass(i).addClass(s),a.removeClass("display responsive-max"),a.addClass("responsive-min"),ace.vars.minimized=!0),e(document).triggerHandler("settings.ace",["sidebar_collapsed",ace.vars.minimized])});var t=ace.vars.ios_safari;e(document).on(ace.click_event+".ace.submenu",".sidebar .nav-list",function(a){var s=this,i=e(a.target).closest("a");if(i&&0!=i.length){var n=ace.vars.minimized&&!ace.vars.collapsible;if(i.hasClass("dropdown-toggle")){var r=i.siblings(".submenu").get(0);if(!r)return!1;var o=0,l=250,c=r.parentNode.parentNode;if(n&&c==s||e(r.parentNode).hasClass("hover")&&!ace.vars.collapsible)return a.preventDefault(),!1;0==r.scrollHeight&&e(c).find("> .open > .submenu").each(function(){this==r||e(this.parentNode).hasClass("active")||(o-=this.scrollHeight,ace.submenu.hide(this,l))});var d=0;return 1==(d=ace.submenu.toggle(r,l))?0!=o&&(o+=r.scrollHeight):-1==d&&(o-=r.scrollHeight),0!=o&&"sidebar_scroll"in ace.helper&&ace.helper.sidebar_scroll.prehide(o),a.preventDefault(),!1}if("tap"==ace.click_event&&n&&i.get(0).parentNode.parentNode==s){var u=i.find(".menu-text").get(0);if(a.target!=u&&!e.contains(u,a.target))return a.preventDefault(),!1}if(t&&"false"!==i.attr("data-link"))return document.location=i.attr("href"),a.preventDefault(),!1}})},ace.submenu={show:function(e,a){var t,s=$(e);if(s.trigger(t=$.Event("show.ace.submenu")),t.isDefaultPrevented())return!1;s.css({height:0,overflow:"hidden",display:"block"}).removeClass("nav-hide").addClass("nav-show");var i=function(){s.css({overflow:"",height:""}),ace.vars.webkit&&ace.helper.redraw(e),s.trigger($.Event("shown.ace.submenu"))};return s.parent().addClass("open"),a>0?s.animate({height:e.scrollHeight},{duration:a,complete:i}):i(),!0},hide:function(e,a){var t,s=$(e);if(s.trigger(t=$.Event("hide.ace.submenu")),t.isDefaultPrevented())return!1;var i=function(){s.css({display:"none",overflow:"",height:""}).removeClass("nav-show").addClass("nav-hide"),s.trigger($.Event("hidden.ace.submenu"))};return s.css({overflow:"hidden",height:e.scrollHeight}).parent().removeClass("open"),a>0?s.animate({height:0},{duration:a,complete:i}):i(),!0},toggle:function(e,a){if(0==e.scrollHeight){if(ace.submenu.show(e,a))return 1}else if(ace.submenu.hide(e,a))return-1;return 0}},ace.sidebar_scrollable=function(e,a,t,s,i,n){if(e.fn.ace_scroll){var r=ace.vars.safari&&navigator.userAgent.match(/version\/[1-5]/i),o=e(".sidebar"),l=(e(".navbar"),o.find(".nav-list")),c=o.find(".sidebar-toggle"),d=o.find(".sidebar-shortcuts"),u=e(window),v=o.get(0),p=l.get(0);if(v&&p){var h,f,g=null,m=null,b=null,w=null,_=null,y=!1,C=!1,a=a||!1,t=t||!1,s=s||!1,x="getComputedStyle"in window?function(){return v.offsetHeight,"fixed"==window.getComputedStyle(v).position}:function(){return v.offsetHeight,"fixed"==o.css("position")},H=x(),z=o.hasClass("h-sidebar"),T=ace.helper.sidebar_scroll={available_height:function(){var e=l.parent().offset();return H&&(e.top-=ace.helper.scrollTop()),u.innerHeight()-e.top-(s?0:c.outerHeight())},content_height:function(){return p.scrollHeight},initiate:function(u){if(!C&&H){l.wrap('<div style="position: relative;" />'),l.after("<div><div></div></div>"),l.wrap('<div class="nav-wrap" />'),s||c.css({"z-index":1}),t||d.css({"z-index":99}),g=l.parent().next().ace_scroll({size:T.available_height(),reset:!0,mouseWheelLock:!0,hoverReset:!1,dragEvent:!0,touchDrag:!1}).closest(".ace-scroll").addClass("nav-scroll"),_=g.data("ace_scroll"),m=g.find(".scroll-content").eq(0),b=m.find(" > div").eq(0),w=g.find(".scroll-bar").eq(0),t&&(l.parent().prepend(d).wrapInner("<div />"),l=l.parent()),s&&(l.append(c),l.closest(".nav-wrap").addClass("nav-wrap-t")),l.css({position:"relative"}),n===!0&&g.addClass("scrollout"),p=l.get(0),p.style.top=0,m.on("scroll.nav",function(){p.style.top=-1*this.scrollTop+"px"}),l.on("mousewheel.ace_scroll DOMMouseScroll.ace_scroll",function(e){return g.trigger(e)});var v=m.get(0);if(l.on("ace_drag.nav",function(e){if(y&&("up"==e.direction||"down"==e.direction)){_.move_bar(!0),move_nav=!1;var a=e.dy;Math.abs(a)>20&&(a=2*a),0!=a&&(v.scrollTop=v.scrollTop+a,p.style.top=-1*v.scrollTop+"px")}}),i&&l.on("ace_dragStart.nav",function(e){e.stopPropagation(),l.css("transition-property","none"),w.css("transition-property","none")}).on("ace_dragEnd.nav",function(e){e.stopPropagation(),l.css("transition-property","top"),w.css("transition-property","top")}),r&&!s){var h=c.get(0);h&&m.on("scroll.safari",function(){ace.helper.redraw(h)})}if(C=!0,1==u){if(T.reset(),a&&_.is_active()){var f,x=o.find(".nav-list");ace.vars.minimized&&!ace.vars.collapsible?f=x.find("> .active"):(f=l.find("> .active.hover"),0==f.length&&(f=l.find(".active:not(.open)")));var z=f.outerHeight();x=x.get(0);for(var k=f.get(0);k!=x;)z+=k.offsetTop,k=k.parentNode;var P=z-g.height();P>0&&(p.style.top=-P+"px",m.scrollTop(P))}a=!1}if("number"==typeof i&&i>0&&(l.css({"transition-property":"top","transition-duration":(i/1e3).toFixed(2)+"s"}),w.css({"transition-property":"top","transition-duration":(i/1500).toFixed(2)+"s"}),g.on("drag.start",function(e){e.stopPropagation(),l.css("transition-property","none")}).on("drag.end",function(e){e.stopPropagation(),l.css("transition-property","top")})),ace.vars.android){var q=ace.helper.scrollTop();2>q&&(window.scrollTo(q,0),setTimeout(function(){T.reset()},20));var E,N=ace.helper.winHeight();e(window).on("scroll.ace_scroll",function(){y&&_.is_active()&&(E=ace.helper.winHeight(),E!=N&&(N=E,T.reset()))})}}},reset:function(){if(!H)return void T.disable();C||T.initiate();var e=!ace.vars.collapsible&&(!z||z&&ace.vars.mobile_view)&&(h=T.available_height())<(f=p.scrollHeight);y=!0,e&&(b.css({height:f,width:8}),g.prev().css({"max-height":h}),_.update({size:h}).enable().reset()),e&&_.is_active()?o.addClass("sidebar-scroll"):y&&T.disable()},disable:function(){y=!1,g&&(g.css({height:"","max-height":""}),b.css({height:"",width:""}),g.prev().css({"max-height":""}),_.disable()),parseInt(p.style.top)<0&&i&&ace.vars.transition?l.one("transitionend.trans webkitTransitionEnd.trans mozTransitionEnd.trans oTransitionEnd.trans",function(){o.removeClass("sidebar-scroll"),l.off(".trans")}):o.removeClass("sidebar-scroll"),p.style.top=0},prehide:function(e){if(y&&!ace.vars.minimized)if(T.content_height()+e<T.available_height())T.disable();else if(0>e){var a=m.scrollTop()+e;if(0>a)return;p.style.top=-1*a+"px"}}};T.initiate(!0),e(document).on("settings.ace.scroll",function(e,a){"sidebar_collapsed"==a&&H?T.reset():("sidebar_fixed"===a||"navbar_fixed"===a)&&(H=x(),H&&!y?T.reset():H||T.disable())}),u.on("resize.ace.scroll",function(){H=x(),T.reset()}),o.on("hidden.ace.submenu shown.ace.submenu",".submenu",function(e){e.stopPropagation(),ace.vars.minimized||(ace.vars.webkit?setTimeout(function(){T.reset()},0):T.reset())})}}},ace.sidebar_hoverable=function(e){function a(a){var t=e(a);a.style.removeProperty("top"),a.style.removeProperty("bottom");var s=null;ace.vars.minimized&&(s=a.parentNode.querySelector(".menu-text"))&&s.style.removeProperty("margin-top");var i=t.offset(),n=ace.helper.scrollTop(),o=!1,d=n;l&&(d+=r.clientHeight+1);var u=a.scrollHeight;s&&(u+=40,i.top-=40);var v,p=parseInt(i.top+u);if((v=p-(window.innerHeight+n-50))>0)if(c>u-v&&i.top-v>d)a.style.top="auto",a.style.bottom="-10px",s&&(s.style.marginTop=-(u-50)+"px",o=!0);else{i.top-v<d&&(v=i.top-d),p-v<i.top+c&&(v-=c);var h=s?40:20;v>h&&(a.style.top=-v+"px",s&&(s.style.marginTop=-v+"px",o=!0))}var f=this.className.lastIndexOf("pull_up");o?-1==f&&(this.className=this.className+" pull_up"):f>=0&&(this.className=this.className.replace(/(^|\s)pull_up($|\s)/,"")),ace.vars.safari&&ace.helper.redraw(a)}if("querySelector"in document&&"removeProperty"in document.body.style){ace.helper.sidebar_hover={reset:function(){s.find(".submenu").each(function(){var a=this,t=this.parentNode;if(a){a.style.removeProperty("top"),a.style.removeProperty("bottom");var s=t.querySelector(".menu-text");s&&s.style.removeProperty("margin-top")}t.className.lastIndexOf("_up")>=0&&e(t).removeClass("pull_up")})}};var t="getComputedStyle"in window?function(){return r.offsetHeight,"fixed"==window.getComputedStyle(r).position}:function(){return r.offsetHeight,"fixed"==n.css("position")};e(window).on("resize.ace_hover",function(){l=t(),ace.helper.sidebar_hover.reset()}),e(document).on("settings.ace.hover",function(e,a,t){"sidebar_collapsed"==a?ace.helper.sidebar_hover.reset():"navbar_fixed"==a&&(l=t)});var s=e(".sidebar").eq(0),i=(s.get(0),s.find(".nav-list").get(0)),n=e(".navbar").eq(0),r=n.get(0),o=s.hasClass("h-sidebar"),l="fixed"==n.css("position");s.find(".submenu").parent().addClass("hsub"),s.on("mouseenter.ace_hover",".nav-list li.hsub",function(){if(!(ace.vars.collapsible||o&&!ace.vars.mobile_view)){var e=this.querySelector(".submenu");e&&(ace.helper.hasClass(this,"hover")?a.call(this,e):this.parentNode==i&&ace.vars.minimized&&a.call(this,e))}});var c=50}},ace.widget_boxes=function(e){e(document).on("hide.bs.collapse show.bs.collapse",function(a){var t=a.target.getAttribute("id");e('[href*="#'+t+'"]').find(ace.vars[".icon"]).each(function(){var t,s=e(this),i=null,n=null;return(i=s.attr("data-icon-show"))?n=s.attr("data-icon-hide"):(t=s.attr("class").match(/fa\-(.*)\-(up|down)/))&&(i="fa-"+t[1]+"-down",n="fa-"+t[1]+"-up"),i?("show"==a.type?s.removeClass(i).addClass(n):s.removeClass(n).addClass(i),!1):void 0})});var a=function(a){this.$box=e(a);this.reload=function(){var e=this.$box,a=!1;"static"==e.css("position")&&(a=!0,e.addClass("position-relative")),e.append('<div class="widget-box-overlay"><i class="'+ace.vars.icon+'loading-icon fa fa-spinner fa-spin fa-2x white"></i></div>'),e.one("reloaded.ace.widget",function(){e.find(".widget-box-overlay").remove(),a&&e.removeClass("position-relative")})},this.close=function(){var e=this.$box,a=300;e.fadeOut(a,function(){e.trigger("closed.ace.widget"),e.remove()})},this.toggle=function(e,a){var t=this.$box,s=t.find(".widget-body"),i=null,n="undefined"!=typeof e?e:t.hasClass("collapsed")?"show":"hide",r="show"==n?"shown":"hidden";if("undefined"==typeof a&&(a=t.find("> .widget-header a[data-action=collapse]").eq(0),0==a.length&&(a=null)),a){i=a.find(ace.vars[".icon"]).eq(0);var o,l=null,c=null;(l=i.attr("data-icon-show"))?c=i.attr("data-icon-hide"):(o=i.attr("class").match(/fa\-(.*)\-(up|down)/))&&(l="fa-"+o[1]+"-down",c="fa-"+o[1]+"-up")}var d=s.find(".widget-body-inner");s=0==d.length?s.wrapInner('<div class="widget-body-inner"></div>').find(":first-child").eq(0):d.eq(0);var u=300,v=200;"show"==n?(i&&i.removeClass(l).addClass(c),t.removeClass("collapsed"),s.slideUp(0,function(){s.slideDown(u,function(){t.trigger(r+".ace.widget")})})):(i&&i.removeClass(c).addClass(l),s.slideUp(v,function(){t.addClass("collapsed"),t.trigger(r+".ace.widget")}))},this.hide=function(){this.toggle("hide")},this.show=function(){this.toggle("show")},this.fullscreen=function(){var e=this.$box.find("> .widget-header a[data-action=fullscreen]").find(ace.vars[".icon"]).eq(0),a=null,t=null;(a=e.attr("data-icon1"))?t=e.attr("data-icon2"):(a="fa-expand",t="fa-compress"),this.$box.hasClass("fullscreen")?(e.addClass(a).removeClass(t),this.$box.removeClass("fullscreen")):(e.removeClass(a).addClass(t),this.$box.addClass("fullscreen")),this.$box.trigger("fullscreened.ace.widget")}};e.fn.widget_box=function(t,s){var i,n=this.each(function(){var n=e(this),r=n.data("widget_box"),o="object"==typeof t&&t;r||n.data("widget_box",r=new a(this,o)),"string"==typeof t&&(i=r[t](s))});return void 0===i?n:i},e(document).on("click.ace.widget",".widget-header a[data-action]",function(t){t.preventDefault();var s=e(this),i=s.closest(".widget-box");if(0!=i.length&&!i.hasClass("ui-sortable-helper")){var n=i.data("widget_box");n||i.data("widget_box",n=new a(i.get(0)));var r=s.data("action");if("collapse"==r){var o,l=i.hasClass("collapsed")?"show":"hide";if(i.trigger(o=e.Event(l+".ace.widget")),o.isDefaultPrevented())return;n.toggle(l,s)}else if("close"==r){var o;if(i.trigger(o=e.Event("close.ace.widget")),o.isDefaultPrevented())return;n.close()}else if("reload"==r){s.blur();var o;if(i.trigger(o=e.Event("reload.ace.widget")),o.isDefaultPrevented())return;n.reload()}else if("fullscreen"==r){var o;if(i.trigger(o=e.Event("fullscreen.ace.widget")),o.isDefaultPrevented())return;n.fullscreen()}else"settings"==r&&i.trigger("setting.ace.widget")}})};

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=b;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var h={};this.when=function(a,c){h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=
function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
/*
 AngularJS angular-resource v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function l(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";k=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),k=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),k=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),k=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),k=!1):(h+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,k,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(k,function(c,f){var m=
g.lowercase(f),k="img"===a&&"src"===m||"background"===m;!0!==Q[m]||!0===E[m]&&!d(c,k)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=l("area,br,col,hr,img,wbr");q=l("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=l("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,l("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,l("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=l("script,style"),D=g.extend({},x,u,v,w),E=l("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,l("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function k(a){a&&m.push(F(a))}function f(a,c){m.push("<a ");g.isDefined(b)&&(m.push('target="'),m.push(b),m.push('" '));m.push('href="',a.replace('"',"&quot;"),'">');k(c);m.push("</a>")}
if(!e)return e;for(var n,h=e,m=[],l,p;n=h.match(d);)l=n[0],n[2]==n[3]&&(l="mailto:"+l),p=n.index,k(h.substr(0,p)),f(l,n[0].replace(c,"")),h=h.substring(p+n[0].length);k(h);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.0 - 2014-05-01
 * License: MIT
 * 修改tab 监听scope destory事件。解决scope销毁时触发tab选中事件的问题。
 */

angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var d={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.createParser=function(a){var c=[],e=a.split("");return angular.forEach(d,function(b,d){var f=a.indexOf(d);if(f>-1){a=a.split(""),e[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+d.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+e.join("")+"$"),map:b(c,"index")}},this.parse=function(b,d){if(!angular.isString(b))return b;d=a.DATETIME_FORMATS[d]||d,this.parsers[d]||(this.parsers[d]=this.createParser(d));var e=this.parsers[d],f=e.regex,g=e.map,h=b.match(f);if(h&&h.length){for(var i,j={year:1900,month:0,date:1,hours:0},k=1,l=h.length;l>k;k++){var m=g[k-1];m.apply&&m.apply.call(j,h[k])}return c(j.year,j.month,j.date)&&(i=new Date(j.year,j.month,j.date,j.hours)),i}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),angular.forEach(["minDate","maxDate"],function(a){j[a]&&(h.$parent.$watch(b(j[a]),function(b){h[a]=b}),r.attr(l(a),a))}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){a&&a.isDefaultPrevented()||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b){b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g,0)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();h>=0&&!k&&(l=e.$new(!0),l.index=h,k=d("<div modal-backdrop></div>")(l),f.append(k));var i=angular.element("<div modal-window></div>");i.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var j=d(i)(b.scope);n.top().value.modalDomEl=j,f.append(j),f.addClass(m)},o.close=function(a,b){var c=n.get(a).value;c&&(c.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a).value;c&&(c.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";
return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disable&&b.$parent.$watch(a(e.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){/*f.removeTab(b)*/}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C;l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(C&&d.cancel(C),C=d(function(){B(a)},o)):B(a):(q(i,!1),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var D=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",D),i.$on("$destroy",function(){e.unbind("click",D)});var E=a(y)(w);t?e.find("body").append(E):j.after(E)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'\n<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]);
/*
 * @git https://github.com/danialfarid/ng-file-upload
 * @version 12.0.4 
 */
!function(){function a(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])}function b(a,b,c){try{Object.defineProperty(a,b,{get:c})}catch(d){}}if(window.FileAPI||(window.FileAPI={}),!window.XMLHttpRequest)throw"AJAX is not supported. XMLHttpRequest is not defined.";if(FileAPI.shouldLoad=!window.FormData||FileAPI.forceLoad,FileAPI.shouldLoad){var c=function(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}};a("open",function(a){return function(b,d,e){c(this),this.__url=d;try{a.apply(this,[b,d,e])}catch(f){f.message.indexOf("Access is denied")>-1&&(this.__origError=f,a.apply(this,[b,"_fix_for_ie_crossdomain__",e]))}}}),a("getResponseHeader",function(a){return function(b){return this.__fileApiXHR&&this.__fileApiXHR.getResponseHeader?this.__fileApiXHR.getResponseHeader(b):null==a?null:a.apply(this,[b])}}),a("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.getAllResponseHeaders?this.__fileApiXHR.getAllResponseHeaders():null==a?null:a.apply(this)}}),a("abort",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.abort?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),a("setRequestHeader",function(a){return function(b,d){if("__setXHR_"===b){c(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[b]=d,a.apply(this,arguments)}}),a("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isFileAPIShim){var d=arguments[0],e={url:c.__url,jsonp:!1,cache:!0,complete:function(a,d){a&&angular.isString(a)&&-1!==a.indexOf("#2174")&&(a=null),c.__completed=!0,!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==d.status&&b(c,"status",function(){return 0===d.status&&a&&"abort"!==a?500:d.status}),void 0!==d.statusText&&b(c,"statusText",function(){return d.statusText}),b(c,"readyState",function(){return 4}),void 0!==d.response&&b(c,"response",function(){return d.response});var e=d.responseText||(a&&0===d.status&&"abort"!==a?a:void 0);b(c,"responseText",function(){return e}),b(c,"response",function(){return e}),a&&b(c,"err",function(){return a}),c.__fileApiXHR=d,c.onreadystatechange&&c.onreadystatechange(),c.onload&&c.onload()},progress:function(a){if(a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded,a.total===a.loaded){var b=this;setTimeout(function(){c.__completed||(c.getAllResponseHeaders=function(){},b.complete(null,{status:204,statusText:"No Content"}))},FileAPI.noContentTimeout||1e4)}},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!FileAPI.hasFlash)throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else{if(this.__origError)throw this.__origError;a.apply(c,arguments)}}}),window.XMLHttpRequest.__isFileAPIShim=!0,window.FormData=FormData=function(){return{append:function(a,b,c){b.__isFileAPIBlobShim&&(b=b.data[0]),this.data.push({key:a,val:b,name:c})},data:[],__isFileAPIShim:!0}},window.Blob=Blob=function(a){return{data:a,__isFileAPIBlobShim:!0}}}}(),function(){function a(a){return"input"===a[0].tagName.toLowerCase()&&a.attr("type")&&"file"===a.attr("type").toLowerCase()}function b(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!==navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1}function c(a){var b=0,c=0;if(window.jQuery)return jQuery(a).offset();if(a.offsetParent)do b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a);return{left:b,top:c}}if(FileAPI.shouldLoad){if(FileAPI.hasFlash=b(),FileAPI.forceLoad&&(FileAPI.html5=!1),!FileAPI.upload){var d,e,f,g,h,i=document.createElement("script"),j=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)d=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)e=window.FileAPI.jsPath;else for(f=0;f<j.length;f++)if(h=j[f].src,g=h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/),g>-1){e=h.substring(0,g+1);break}null==FileAPI.staticPath&&(FileAPI.staticPath=e),i.setAttribute("src",d||e+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(i)}FileAPI.ngfFixIE=function(d,e,f){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var g=function(){var b=e.parent();d.attr("disabled")?b&&b.removeClass("js-fileapi-wrapper"):(e.attr("__ngf_flash_")||(e.unbind("change"),e.unbind("click"),e.bind("change",function(a){h.apply(this,[a]),f.apply(this,[a])}),e.attr("__ngf_flash_","true")),b.addClass("js-fileapi-wrapper"),a(d)||(b.css("position","absolute").css("top",c(d[0]).top+"px").css("left",c(d[0]).left+"px").css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("filter","alpha(opacity=0)").css("display",d.css("display")).css("overflow","hidden").css("z-index","900000").css("visibility","visible"),e.css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("position","absolute").css("top","0px").css("left","0px")))};d.bind("mouseenter",g);var h=function(a){for(var b=FileAPI.getFiles(a),c=0;c<b.length;c++)void 0===b[c].size&&(b[c].size=0),void 0===b[c].name&&(b[c].name="file"),void 0===b[c].type&&(b[c].type="undefined");a.target||(a.target={}),a.target.files=b,a.target.files!==b&&(a.__files_=b),(a.__files_||a.target.files).item=function(b){return(a.__files_||a.target.files)[b]||null}}},FileAPI.disableFileInput=function(a,b){b?a.removeClass("js-fileapi-wrapper"):a.addClass("js-fileapi-wrapper")}}}(),window.FileReader||(window.FileReader=function(){var a=this,b=!1;this.listeners={},this.addEventListener=function(b,c){a.listeners[b]=a.listeners[b]||[],a.listeners[b].push(c)},this.removeEventListener=function(b,c){a.listeners[b]&&a.listeners[b].splice(a.listeners[b].indexOf(c),1)},this.dispatchEvent=function(b){var c=a.listeners[b.type];if(c)for(var d=0;d<c.length;d++)c[d].call(a,b)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var c=function(b,c){var d={type:b,target:a,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d},d=function(d){b||(b=!0,a.onloadstart&&a.onloadstart(c("loadstart",d)));var e;"load"===d.type?(a.onloadend&&a.onloadend(c("loadend",d)),e=c("load",d),a.onload&&a.onload(e),a.dispatchEvent(e)):"progress"===d.type?(e=c("progress",d),a.onprogress&&a.onprogress(e),a.dispatchEvent(e)):(e=c("error",d),a.onerror&&a.onerror(e),a.dispatchEvent(e))};this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}});
/*
 * @git https://github.com/danialfarid/ng-file-upload
 * @version 12.0.4 
 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="12.0.4",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{loaded:a.loaded+d._start,total:d._file&&d._file.size||a.total,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){g&&d._chunkSize&&!d._finished&&d._file?(e({loaded:d._end,total:d._file&&d._file.size,config:d,type:"progress"}),f.upload(d,!0)):(d._finished&&delete d._finished,j.resolve(a))},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a.upload&&a.upload.addEventListener&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,i()},function(a){throw a}):(d._chunkSize&&(d._start=0,d._end=d._start+d._chunkSize),i()):i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},f.promisesCount++,k["finally"](function(){f.promisesCount--}),k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;f.promisesCount=0,this.isResumeSupported=function(){return window.Blob&&window.Blob.prototype.slice};var g=this.isResumeSupported();this.isUploadInProgress=function(){return f.promisesCount>0},this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.isFile=function(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size)},this.upload=function(a,b){function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._chunkSize),c.append("_currentChunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function h(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(f.isFile(d)){var g=c(d,b),i=e.split(",");i[1]&&(g.ngfName=i[1].replace(/^\s+|\s+$/g,""),e=i[0]),a._fileKey=a._fileKey||e,b.append(e,g,g.ngfName||g.name)}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),h(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection}}else b.append(e,d)}function i(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):h(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,i()),d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1024*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1048576*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1073741824*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.urlToBlob=function(c){var d=b.defer();return a({url:c,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),c=a.headers("content-type")||"image/WebP",e=new window.Blob([b],{type:c});d.resolve(e)},function(a){d.reject(a)}),d.promise},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c){var e=i.attrGetter("ngfResize",b,c);if(!e||!i.isResizeSupported()||!a.length)return i.emptyPromise();if(!(e instanceof Function))return h(e,a,b,c);var f=d.defer();e(a).then(function(d){h(d,a,b,c).then(function(a){f.resolve(a)},function(a){f.reject(a)})},function(a){f.reject(a)})}function h(a,b,c,e){function f(d,f){if(0===d.type.indexOf("image")){if(a.pattern&&!i.validatePattern(d,a.pattern))return;var h=i.resize(d,a.width,a.height,a.quality,a.type,a.ratio,a.centerCrop,function(a,b){return i.attrGetter("ngfResizeIf",c,e,{$width:a,$height:b,$file:d})},a.restoreExif!==!1);g.push(h),h.then(function(a){b.splice(f,1,a)},function(a){d.$error="resize",d.$errorParam=(a?(a.message?a.message:a)+": ":"")+(d&&d.name)})}}for(var g=[i.emptyPromise()],h=0;h<b.length;h++)f(b[h],h);return d.all(g)}var i=e;return i.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.rejectPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.reject.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,h,j,k,l){function m(f,g,j,l,m){d.$$ngfPrevValidFiles=f,d.$$ngfPrevInvalidFiles=g;var n=f&&f.length?f[0]:null,o=g&&g.length?g[0]:null;c&&(i.applyModelValidation(c,f),c.$setViewValue(m?n:f)),h&&a(h)(e,{$files:f,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:g,$invalidFile:o,$event:k});var p=i.attrGetter("ngfModelInvalid",d);p&&b(function(){a(p).assign(e,m?o:g)}),b(function(){})}function n(){function a(a,b){return a.name===b.name&&(a.$ngfOrigSize||a.size)===(b.$ngfOrigSize||b.size)&&a.type===b.type}function b(b){var c;for(c=0;c<s.length;c++)if(a(b,s[c]))return!0;for(c=0;c<t.length;c++)if(a(b,t[c]))return!0;return!1}if(j){r=[],u=[];for(var c=0;c<j.length;c++)b(j[c])?u.push(j[c]):r.push(j[c])}}function o(a){return angular.isArray(a)?a:[a]}function p(){w=[],v=[],angular.forEach(r,function(a){a.$error?v.push(a):w.push(a)})}function q(){function a(){b(function(){m(x?s.concat(w):w,x?t.concat(v):v,j,u,y)},A&&A.debounce?A.debounce.change||A.debounce:0)}g(z?r:w,d,e).then(function(){z?i.validate(r,s.length,c,d,e).then(function(){p(),a()}):a()},function(a){throw"Could not resize files "+a})}var r,s,t,u=[],v=[],w=[];s=d.$$ngfPrevValidFiles||[],t=d.$$ngfPrevInvalidFiles||[],c&&c.$modelValue&&(s=o(c.$modelValue));var x=i.attrGetter("ngfKeep",d,e);r=(j||[]).slice(0),("distinct"===x||i.attrGetter("ngfKeepDistinct",d,e)===!0)&&n(d,e);var y=!x&&!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d);if(!x||r.length){i.attrGetter("ngfBeforeModelChange",d,e,{$files:j,$file:j&&j.length?j[0]:null,$newFiles:r,$duplicateFiles:u,$event:k});var z=i.attrGetter("ngfValidateAfterResize",d,e),A=i.attrGetter("ngModelOptions",d,e);i.validate(r,s.length,c,d,e).then(function(){l?m(r,[],j,u,y):(A&&A.allowInvalid||z?w=r:p(),i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()?f(w,d,e).then(function(){q()}):q())})}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){for(var e=b.__files_||b.target&&b.target.files,f=[],g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a){if(b!==a)for(var c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];"type"!==d.name&&"class"!==d.name&&"style"!==d.name&&((null==d.value||""===d.value)&&("required"===d.name&&(d.value="required"),"multiple"===d.name&&(d.value="multiple")),a.attr(d.name,"id"===d.name?"ngf-"+d.value:d.value))}}function o(){if(k())return b;var a=angular.element('<input type="file">');n(a);var c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled"))return!1;if(!t("ngfSelectDisabled",a)){var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(w[0])||(g.push({el:b,ref:w.parent()}),document.body.appendChild(w.parent()[0]),w.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){w[0].click()},0):w[0].click(),!1}}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if("touchstart"===a.type)return v=b?b[0].clientY:0,!0;if(a.stopPropagation(),a.preventDefault(),"touchend"===a.type){var c=b?b[0].clientY:0;if(Math.abs(c-v)>20)return!1}}function r(b){j.shouldUpdateOn("click",c,a)&&w.val()&&(w.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(w&&!w.attr("__ngf_ie10_Fix_")){if(!w[0].parentNode)return void(w=null);a.preventDefault(),a.stopPropagation(),w.unbind("click");var b=w.clone();return w.replaceWith(b),w=b,w.attr("__ngf_ie10_Fix_","true"),w.bind("change",m),w.bind("click",s),w[0].click(),!1}w.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];u.push(a.$watch(t("ngfMultiple"),function(){w.attr("multiple",t("ngfMultiple",a))})),u.push(a.$watch(t("ngfCapture"),function(){w.attr("capture",t("ngfCapture",a))})),u.push(a.$watch(t("ngfAccept"),function(){w.attr("accept",t("ngfAccept",a))})),c.$observe("accept",function(){w.attr("accept",t("accept"))}),u.push(function(){c.$$observers&&delete c.$$observers.accept});var v=0,w=b;k()||(w=o()),w.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&w.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&w.val()&&w.val(null),a}),a.$on("$destroy",function(){k()||w.parent().remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,w,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var d=h;if("ngfThumbnail"===g&&(d||(d={width:e[0].clientWidth,height:e[0].clientHeight}),0===d.width&&window.getComputedStyle)){var f=getComputedStyle(e[0]);d={width:parseInt(f.width.slice(0,-2)),height:parseInt(f.height.slice(0,-2))}}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):d&&b.isResizeSupported()?b.resize(c,d.width,d.height,d.quality).then(function(a){j(a)},function(a){throw a}):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var f;try{f=c.createObjectURL(a)}catch(h){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){if(a.$ngfBlobUrl=f,f){g.resolve(f,a),d.blobUrls=d.blobUrls||[],d.blobUrlsTotalSize=d.blobUrlsTotalSize||0,d.blobUrls.push({url:f,size:a.size}),d.blobUrlsTotalSize+=a.size||0;for(var b=d.defaults.blobUrlsMaxMemory||268435456,e=d.defaults.blobUrlsMaxQueueSize||200;(d.blobUrlsTotalSize>b||d.blobUrls.length>e)&&d.blobUrls.length>1;){var h=d.blobUrls.splice(0,1)[0];c.revokeObjectURL(h.url),d.blobUrlsTotalSize-=h.size}}})}else{var i=new FileReader;i.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a),b(function(){delete a.$ngfDataUrl},1e3)})},i.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},i.readAsDataURL(a)}}else b(function(){a[e?"$ngfDataUrl":"$ngfBlobUrl"]="",g.reject()})}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b)},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){a.$dirty&&(d&&!angular.isArray(d)&&(d=[d]),f.validate(d,0,a,b,c).then(function(){f.applyModelValidation(a,d)}))})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.getValidationAttr=function(a,b,c,d,e){var g="ngf"+c[0].toUpperCase()+c.substr(1),h=f.attrGetter(g,a,b,{$file:e});if(null==h&&(h=f.attrGetter("ngfValidate",a,b,{$file:e}))){var i=(d||c).split(".");h=h[i[0]],i.length>1&&(h=h&&h[i[1]])}return h},f.validate=function(a,c,d,e,g){function h(b,c,h){if(a){for(var i=a.length,j=null;i--;){var k=a[i];if(k){var l=f.getValidationAttr(e,g,b,c,k);null!=l&&(h(k,l,i)||(k.$error=b,(k.$errorMessages=k.$errorMessages||{})[b]=!0,k.$errorParam=l,a.splice(i,1),j=!1))}}null!==j&&d.$ngfValidations.push({name:b,valid:j})}}function i(c,h,i,k,l){function m(a,b,d){null!=d?k(b,d).then(function(e){l(e,d)?a.resolve():(b.$error=c,(b.$errorMessages=b.$errorMessages||{})[c]=!0,b.$errorParam=d,a.reject())},function(){j("ngfValidateForce",{$file:b})?(b.$error=c,(b.$errorMessages=b.$errorMessages||{})[c]=!0,b.$errorParam=d,a.reject()):a.resolve()}):a.resolve()}var n=[f.emptyPromise()];return a?(a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var d=b.defer();return n.push(d.promise),!i||null!=a.type&&0===a.type.search(i)?void("dimensions"===c&&null!=f.attrGetter("ngfDimensions",e)?f.imageDimensions(a).then(function(b){m(d,a,j("ngfDimensions",{$file:a,$width:b.width,$height:b.height}))},function(){d.reject()}):"duration"===c&&null!=f.attrGetter("ngfDuration",e)?f.mediaDuration(a).then(function(b){m(d,a,j("ngfDuration",{$file:a,$duration:b}))},function(){d.reject()}):m(d,a,f.getValidationAttr(e,g,c,h,a))):void d.resolve()}),b.all(n).then(function(){d.$ngfValidations.push({name:c,valid:!0})},function(){d.$ngfValidations.push({name:c,valid:!1})})):void 0}d=d||{},d.$ngfValidations=d.$ngfValidations||[],angular.forEach(d.$ngfValidations,function(a){a.valid=!0});var j=function(a,b){return f.attrGetter(a,e,g,b)};if(null==a||0===a.length)return f.emptyPromise(d);a=void 0===a.length?[a]:a.slice(0),h("maxFiles",null,function(a,b,d){return b>c+d}),h("pattern",null,f.validatePattern),h("minSize","size.min",function(a,b){return a.size+.1>=f.translateScalars(b)}),h("maxSize","size.max",function(a,b){return a.size-.1<=f.translateScalars(b)});var k=0;if(h("maxTotalSize",null,function(b,c){return k+=b.size,k>f.translateScalars(c)?(a.splice(0,a.length),!1):!0}),h("validateFn",null,function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise(d,d.$ngfValidations);var l=b.defer(),m=[];return m.push(f.happyPromise(i("maxHeight","height.max",/image/,this.imageDimensions,function(a,b){return a.height<=b}))),m.push(f.happyPromise(i("minHeight","height.min",/image/,this.imageDimensions,function(a,b){return a.height>=b}))),m.push(f.happyPromise(i("maxWidth","width.max",/image/,this.imageDimensions,function(a,b){return a.width<=b}))),m.push(f.happyPromise(i("minWidth","width.min",/image/,this.imageDimensions,function(a,b){return a.width>=b}))),m.push(f.happyPromise(i("dimensions",null,/image/,function(a,b){return f.emptyPromise(b)},function(a){return a}))),m.push(f.happyPromise(i("ratio",null,/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<1e-4&&(d=!0);return d}))),m.push(f.happyPromise(i("maxRatio","ratio.max",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4}))),m.push(f.happyPromise(i("minRatio","ratio.min",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4}))),m.push(f.happyPromise(i("maxDuration","duration.max",/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)}))),m.push(f.happyPromise(i("minDuration","duration.min",/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)}))),m.push(f.happyPromise(i("duration",null,/audio|video/,function(a,b){return f.emptyPromise(b)},function(a){return a}))),m.push(f.happyPromise(i("validateAsyncFn",null,null,function(a,b){return b},function(a){return a===!0||null===a||""===a}))),b.all(m).then(function(){l.resolve(d,d.$ngfValidations)})},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].clientWidth,c=h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed").css("max-width","none !important").css("max-height","none !important");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j,k){var l=b.defer(),m=document.createElement("canvas"),n=document.createElement("img");return n.onload=function(){if(null!=k&&k(n.width,n.height)===!1)return void l.reject("resizeIf");try{if(i){var a=c.ratioToFloat(i),b=n.width/n.height;a>b?(e=n.width,f=e/a):(f=n.height,e=f*a)}e||(e=n.width),f||(f=n.height);var o=d(n.width,n.height,e,f,j);m.width=Math.min(o.width,e),m.height=Math.min(o.height,f);var p=m.getContext("2d");p.drawImage(n,Math.min(0,-o.marginX/2),Math.min(0,-o.marginY/2),o.width,o.height),l.resolve(m.toDataURL(h||"image/WebP",g||.934))}catch(q){l.reject(q)}},n.onerror=function(){l.reject()},n.src=a,l.promise};return c.dataUrltoBlob=function(a,b,c){for(var d=a.split(","),e=d[0].match(/:(.*?);/)[1],f=atob(d[1]),g=f.length,h=new Uint8Array(g);g--;)h[g]=f.charCodeAt(g);var i=new window.Blob([h],{type:e});return i.name=b,i.$ngfOrigSize=c,i},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")&&window.Blob},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),c.resize=function(a,d,f,g,h,i,j,k,l){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var m=b.defer();return c.dataUrl(a,!0).then(function(b){e(b,d,f,g,h||a.type,i,j,k).then(function(d){if("image/jpeg"===a.type&&l)try{d=c.restoreExif(b,d)}catch(e){setTimeout(function(){throw e},1)}try{var f=c.dataUrltoBlob(d,a.name,a.size);m.resolve(f)}catch(e){m.reject(e)}},function(b){"resizeIf"===b&&m.resolve(a),m.reject(b)})},function(a){m.reject(a)}),m.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){function l(){return c.attr("disabled")||r("ngfDropDisabled",a)}function m(b,c){i.updateModel(e,d,a,r("ngfChange")||r("ngfDrop"),b,c)}function n(b,c){if(!i.shouldUpdateOn(b,d,a)||!c)return i.rejectPromise([]);var e=[];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){e.push(c)});var f=[],g=[];if(e.length){angular.forEach(e,function(a){f.push(i.urlToBlob(a).then(function(a){g.push(a)}))});var h=k.defer();return k.all(f).then(function(){h.resolve(g)},function(a){h.reject(a)}),h.promise}return i.emptyPromise()}function o(a,b,c,d){var e=r("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(v=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||r("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function p(b,c,e,f){function g(a,b){var c=k.defer();if(null!=a)if(a.isDirectory){var d=[i.emptyPromise()];if(m){var e={type:"directory"};e.name=e.path=(b||"")+a.name+a.name,n.push(e)}var f=a.createReader(),h=[],p=function(){f.readEntries(function(e){try{e.length?(h=h.concat(Array.prototype.slice.call(e||[],0)),p()):(angular.forEach(h.slice(0),function(c){n.length<=j&&l>=o&&d.push(g(c,(b?b:"")+a.name+"/"))}),k.all(d).then(function(){c.resolve()},function(a){c.reject(a)}))}catch(f){c.reject(f)}},function(a){c.reject(a)})};p()}else a.file(function(a){try{a.path=(b?b:"")+a.name,m&&(a=i.rename(a,a.path)),n.push(a),o+=a.size,c.resolve()}catch(d){c.reject(d)}},function(a){c.reject(a)});return c.promise}var j=i.getValidationAttr(d,a,"maxFiles")||Number.MAX_VALUE,l=i.getValidationAttr(d,a,"maxTotalSize")||Number.MAX_VALUE,m=r("ngfIncludeDir",a),n=[],o=0,p=[i.emptyPromise()];if(b&&b.length>0&&"file"!==h.protocol())for(var q=0;q<b.length;q++){if(b[q].webkitGetAsEntry&&b[q].webkitGetAsEntry()&&b[q].webkitGetAsEntry().isDirectory){var s=b[q].webkitGetAsEntry();if(s.isDirectory&&!e)continue;null!=s&&p.push(g(s))}else{var t=b[q].getAsFile();null!=t&&(n.push(t),o+=t.size)}if(n.length>j||o>l||!f&&n.length>0)break}else if(null!=c)for(var u=0;u<c.length;u++){var v=c.item(u);if((v.type||v.size>0)&&(n.push(v),o+=v.size),n.length>j||o>l||!f&&n.length>0)break}var w=k.defer();return k.all(p).then(function(){if(f||m||!n.length)w.resolve(n);else{for(var a=0;n[a]&&"directory"===n[a].type;)a++;w.resolve([n[a]])}},function(a){w.reject(a)}),w.promise}var q=b(),r=function(a,b,c){return i.attrGetter(a,d,b,c)};if(r("dropAvailable")&&g(function(){a[r("dropAvailable")]?a[r("dropAvailable")].value=q:a[r("dropAvailable")]=q}),!q)return void(r("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==r("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var s,t=null,u=f(r("ngfStopPropagation")),v=1;c[0].addEventListener("dragover",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){if(b.preventDefault(),u(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(t),s||(s="C",o(a,d,b,function(d){s=d,c.addClass(s),r("ngfDrag",a,{$isDragging:!0,$class:s,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation(),t=g(function(){s&&c.removeClass(s),s=null,r("ngfDrag",a,{$isDragging:!1,$event:b})},v||100))},!1),c[0].addEventListener("drop",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){b.preventDefault(),u(a)&&b.stopPropagation(),s&&c.removeClass(s),s=null;var e,f=b.dataTransfer.items;try{e=b.dataTransfer&&b.dataTransfer.getData&&b.dataTransfer.getData("text/html")}catch(g){}p(f,b.dataTransfer.files,r("ngfAllowDir",a)!==!1,r("multiple")||r("ngfMultiple",a)).then(function(a){a.length?m(a,b):n("dropUrl",e).then(function(a){m(a,b)})})}},!1),c[0].addEventListener("paste",function(b){if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&b.preventDefault(),!l()&&i.shouldUpdateOn("paste",d,a)){var c=[],e=b.clipboardData||b.originalEvent.clipboardData;if(e&&e.items)for(var f=0;f<e.items.length;f++)-1!==e.items[f].type.indexOf("image")&&c.push(e.items[f].getAsFile());c.length?m(c,b):n("pasteUrl",e).then(function(a){m(a,b)})}},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location","Upload","$http","$q",function(b,c,d,e,f,g){
return{restrict:"AEC",require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){function c(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c)}}function d(a){for(var b="",c=new Uint8Array(a),d=c.byteLength,e=0;d>e;e++)b+=String.fromCharCode(c[e]);return window.btoa(b)}var e=a;return e.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&e.isResizeSupported()},e.readOrientation=function(a){var c=b.defer(),d=new FileReader,e=a.slice?a.slice(0,65536):a;return d.readAsArrayBuffer(e),d.onerror=function(a){return c.reject(a)},d.onload=function(a){var b={orientation:1},d=new DataView(this.result);if(65496!==d.getUint16(0,!1))return c.resolve(b);for(var e=d.byteLength,f=2;e>f;){var g=d.getUint16(f,!1);if(f+=2,65505===g){if(1165519206!==d.getUint32(f+=2,!1))return c.resolve(b);var h=18761===d.getUint16(f+=6,!1);f+=d.getUint32(f+4,h);var i=d.getUint16(f,h);f+=2;for(var j=0;i>j;j++)if(274===d.getUint16(f+12*j,h)){var k=d.getUint16(f+12*j+8,h);return k>=2&&8>=k&&(d.setUint16(f+12*j+8,1,h),b.fixedArrayBuffer=a.target.result),b.orientation=k,c.resolve(b)}}else{if(65280!==(65280&g))break;f+=d.getUint16(f,!1)}}return c.resolve(b)},c.promise},e.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return e.emptyPromise(a);var f=b.defer();return e.readOrientation(a).then(function(b){return b.orientation<2||b.orientation>8?f.resolve(a):void e.dataUrl(a,!0).then(function(g){var h=document.createElement("canvas"),i=document.createElement("img");i.onload=function(){try{h.width=b.orientation>4?i.height:i.width,h.height=b.orientation>4?i.width:i.height;var g=h.getContext("2d");c(g,b.orientation,i.width,i.height),g.drawImage(i,0,0);var j=h.toDataURL(a.type||"image/WebP",.934);j=e.restoreExif(d(b.fixedArrayBuffer),j);var k=e.dataUrltoBlob(j,a.name);f.resolve(k)}catch(l){return f.reject(l)}},i.onerror=function(){f.reject()},i.src=g},function(a){f.reject(a)})},function(a){f.reject(a)}),f.promise},e.restoreExif=function(a,b){var c={};return c.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c.encode64=function(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a[j++],c=a[j++],h=a[j++],d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+this.KEY_STR.charAt(d)+this.KEY_STR.charAt(e)+this.KEY_STR.charAt(f)+this.KEY_STR.charAt(i),b=c=h="",d=e=f=i="";while(j<a.length);return g},c.restore=function(a,b){a.match("data:image/jpeg;base64,")&&(a=a.replace("data:image/jpeg;base64,",""));var c=this.decode64(a),d=this.slice2Segments(c),e=this.exifManipulation(b,d);return"data:image/jpeg;base64,"+this.encode64(e)},c.exifManipulation=function(a,b){var c=this.getExifArray(b),d=this.insertExif(a,c);return new Uint8Array(d)},c.getExifArray=function(a){for(var b,c=0;c<a.length;c++)if(b=a[c],255===b[0]&225===b[1])return b;return[]},c.insertExif=function(a,b){var c=a.replace("data:image/jpeg;base64,",""),d=this.decode64(c),e=d.indexOf(255,3),f=d.slice(0,e),g=d.slice(e),h=f;return h=h.concat(b),h=h.concat(g)},c.slice2Segments=function(a){for(var b=0,c=[];;){if(255===a[b]&218===a[b+1])break;if(255===a[b]&216===a[b+1])b+=2;else{var d=256*a[b+2]+a[b+3],e=b+d+2,f=a.slice(b,e);c.push(f),b=e}if(b>a.length)break}return c},c.decode64=function(a){var b,c,d,e,f,g="",h="",i=0,j=[],k=/[^A-Za-z0-9\+\/\=]/g;k.exec(a)&&console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=this.KEY_STR.indexOf(a.charAt(i++)),e=this.KEY_STR.indexOf(a.charAt(i++)),f=this.KEY_STR.indexOf(a.charAt(i++)),h=this.KEY_STR.indexOf(a.charAt(i++)),b=d<<2|e>>4,c=(15&e)<<4|f>>2,g=(3&f)<<6|h,j.push(b),64!==f&&j.push(c),64!==h&&j.push(g),b=c=g="",d=e=f=h="";while(i<a.length);return j},c.restore(a,b)},e}]);
/**
 * oclazyload - Load modules on demand (lazy load) with angularJS
 * @version v1.0.9
 * @link https://github.com/ocombe/ocLazyLoad
 * @license MIT
 * @author Olivier Combe <olivier.combe@gmail.com>
 */
!function(e,n){"use strict";var r=["ng","oc.lazyLoad"],o={},t=[],i=[],a=[],s=[],u=e.noop,c={},l=[],d=e.module("oc.lazyLoad",["ng"]);d.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(d,f,p,m,v,y){function L(n,o,t){if(o){var i,s,d,f=[];for(i=o.length-1;i>=0;i--)if(s=o[i],e.isString(s)||(s=E(s)),s&&-1===l.indexOf(s)&&(!w[s]||-1!==a.indexOf(s))){var h=-1===r.indexOf(s);if(d=g(s),h&&(r.push(s),L(n,d.requires,t)),d._runBlocks.length>0)for(c[s]=[];d._runBlocks.length>0;)c[s].push(d._runBlocks.shift());e.isDefined(c[s])&&(h||t.rerun)&&(f=f.concat(c[s])),j(n,d._invokeQueue,s,t.reconfig),j(n,d._configBlocks,s,t.reconfig),u(h?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",s),o.pop(),l.push(s)}var p=n.getInstanceInjector();e.forEach(f,function(e){p.invoke(e)})}}function $(n,r){function t(n,r){var o,t=!0;return r.length&&(o=i(n),e.forEach(r,function(e){t=t&&i(e)!==o})),t}function i(n){return e.isArray(n)?M(n.toString()):e.isObject(n)?M(S(n)):e.isDefined(n)&&null!==n?M(n.toString()):n}var a=n[2][0],s=n[1],c=!1;e.isUndefined(o[r])&&(o[r]={}),e.isUndefined(o[r][s])&&(o[r][s]={});var l=function(e,n){o[r][s].hasOwnProperty(e)||(o[r][s][e]=[]),t(n,o[r][s][e])&&(c=!0,o[r][s][e].push(n),u("ocLazyLoad.componentLoaded",[r,s,e]))};if(e.isString(a))l(a,n[2][1]);else{if(!e.isObject(a))return!1;e.forEach(a,function(n,r){e.isString(n)?l(n,a[1]):l(r,n)})}return c}function j(n,r,o,i){if(r){var a,s,u,c;for(a=0,s=r.length;s>a;a++)if(u=r[a],e.isArray(u)){if(null!==n){if(!n.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);c=n[u[0]]}var l=$(u,o);if("invoke"!==u[1])l&&e.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var d=function(n){var r=t.indexOf(o+"-"+n);(-1===r||i)&&(-1===r&&t.push(o+"-"+n),e.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(e.isFunction(u[2][0]))d(u[2][0]);else if(e.isArray(u[2][0]))for(var f=0,h=u[2][0].length;h>f;f++)e.isFunction(u[2][0][f])&&d(u[2][0][f])}}}}function E(n){var r=null;return e.isString(n)?r=n:e.isObject(n)&&n.hasOwnProperty("name")&&e.isString(n.name)&&(r=n.name),r}function _(n){if(!e.isString(n))return!1;try{return g(n)}catch(r){if(/No module/.test(r)||r.message.indexOf("$injector:nomod")>-1)return!1}}var w={},O={$controllerProvider:d,$compileProvider:p,$filterProvider:m,$provide:f,$injector:v,$animateProvider:y},x=!1,b=!1,z=[],D={};z.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){w[e.name]=e}):w[n.modules.name]=n.modules),e.isDefined(n.debug)&&(x=n.debug),e.isDefined(n.events)&&(b=n.events)},this._init=function(o){if(0===i.length){var t=[o],a=["ng:app","ng-app","x-ng-app","data-ng-app"],u=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,c=function(e){return e&&t.push(e)};e.forEach(a,function(n){a[n]=!0,c(document.getElementById(n)),n=n.replace(":","\\:"),"undefined"!=typeof o[0]&&o[0].querySelectorAll&&(e.forEach(o[0].querySelectorAll("."+n),c),e.forEach(o[0].querySelectorAll("."+n+"\\:"),c),e.forEach(o[0].querySelectorAll("["+n+"]"),c))}),e.forEach(t,function(n){if(0===i.length){var r=" "+o.className+" ",t=u.exec(r);t?i.push((t[2]||"").replace(/\s+/g,",")):e.forEach(n.attributes,function(e){0===i.length&&a[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var l=function d(n){if(-1===r.indexOf(n)){r.push(n);var o=e.module(n);j(null,o._invokeQueue,n),j(null,o._configBlocks,n),e.forEach(o.requires,d)}};e.forEach(i,function(e){l(e)}),i=[],s.pop()};var S=function(n){try{return JSON.stringify(n)}catch(r){var o=[];return JSON.stringify(n,function(n,r){if(e.isObject(r)&&null!==r){if(-1!==o.indexOf(r))return;o.push(r)}return r})}},M=function(e){var n,r,o,t=0;if(0==e.length)return t;for(n=0,o=e.length;o>n;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t|=0;return t};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(n,t,a,c,d){function f(e){var r=d.defer();return n.error(e.message),r.reject(e),r.promise}var p,m=c("ocLazyLoad");return x||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),O.getInstanceInjector=function(){return p?p:p=t.data("$injector")||e.injector()},u=function(e,r){b&&a.$broadcast(e,r),x&&n.info(e,r)},{_broadcast:u,_$log:n,_getFilesCache:function(){return m},toggleWatch:function(e){e?s.push(!0):s.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error("You need to give the name of the module to get");return w[n]?e.copy(w[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error("You need to give the module config object to set");return w[n.name]=n,n},getModules:function(){return r},isLoaded:function(n){var o=function(e){var n=r.indexOf(e)>-1;return n||(n=!!_(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!o(n[t]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:E,_getModule:function(e){try{return g(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+S(e)+'" that you are trying to load does not exist. '+n.message),n}},moduleExists:_,_loadDependencies:function(n,r){var o,t,i,a=[],s=this;if(n=s._getModuleName(n),null===n)return d.when();try{o=s._getModule(n)}catch(u){return f(u)}return t=s.getRequires(o),e.forEach(t,function(o){if(e.isString(o)){var t=s.getModuleConfig(o);if(null===t)return void z.push(o);o=t,t.name=void 0}if(s.moduleExists(o.name))return i=o.files.filter(function(e){return s.getModuleConfig(o.name).files.indexOf(e)<0}),0!==i.length&&s._$log.warn('Module "',n,'" attempted to redefine configuration for dependency. "',o.name,'"\n Additional Files Loaded:',i),e.isDefined(s.filesLoader)?void a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)})):f(new Error("Error: New dependencies need to be loaded from external files ("+o.files+"), but no loader has been defined."));if(e.isArray(o)){var u=[];e.forEach(o,function(e){var n=s.getModuleConfig(e);null===n?u.push(e):n.files&&(u=u.concat(n.files))}),u.length>0&&(o={files:u})}else e.isObject(o)&&o.hasOwnProperty("name")&&o.name&&(s.setModuleConfig(o),z.push(o.name));if(e.isDefined(o.files)&&0!==o.files.length){if(!e.isDefined(s.filesLoader))return f(new Error('Error: the module "'+o.name+'" is defined in external files ('+o.files+"), but no loader has been defined."));a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)}))}}),d.all(a)},inject:function(n){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],t=this,a=d.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var s=[];return e.forEach(n,function(e){s.push(t.inject(e,r,o))}),d.all(s)}t._addToLoadList(t._getModuleName(n),!0,o)}if(i.length>0){var u=i.slice(),c=function f(e){z.push(e),D[e]=a.promise,t._loadDependencies(e,r).then(function(){try{l=[],L(O,z,r)}catch(e){return t._$log.error(e.message),void a.reject(e)}i.length>0?f(i.shift()):a.resolve(u)},function(e){a.reject(e)})};c(i.shift())}else{if(r&&r.name&&D[r.name])return D[r.name];a.resolve()}return a.promise},getRequires:function(n){var o=[];return e.forEach(n.requires,function(e){-1===r.indexOf(e)&&o.push(e)}),o},_invokeQueue:j,_registerInvokeList:$,_register:L,_addToLoadList:h,_unregister:function(n){e.isDefined(n)&&e.isArray(n)&&e.forEach(n,function(e){o[e]=void 0})}}}],this._init(e.element(n.document))}]);var f=e.bootstrap;e.bootstrap=function(n,r,o){return e.forEach(r.slice(),function(e){h(e,!0,!0)}),f(n,r,o)};var h=function(n,r,o){(s.length>0||r)&&e.isString(n)&&-1===i.indexOf(n)&&(i.push(n),o&&a.push(n))},g=e.module;e.module=function(e,n,r){return h(e,!1,!0),g(e,n,r)},"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window),function(e){"use strict";e.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function(n,r,o,t,i){return{restrict:"A",terminal:!0,priority:1e3,compile:function(i,a){var s=i[0].innerHTML;return i.html(""),function(i,a,u){var c=t(u.ocLazyLoad);i.$watch(function(){return c(i)||u.ocLazyLoad},function(t){e.isDefined(t)&&n.load(t).then(function(){o.enter(s,a),r(a.contents())(i)})},!0)}}}}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function(n,r,o,t){var i=!1,a=!1,s=o.document.getElementsByTagName("head")[0]||o.document.getElementsByTagName("body")[0];return n.buildElement=function(u,c,l){var d,f,h=r.defer(),g=n._getFilesCache(),p=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?e+"_dc="+n:e+"&_dc="+n:e+"?_dc="+n};switch(e.isUndefined(g.get(c))&&g.put(c,h.promise),u){case"css":d=o.document.createElement("link"),d.type="text/css",d.rel="stylesheet",d.href=l.cache===!1?p(c):c;break;case"js":d=o.document.createElement("script"),d.src=l.cache===!1?p(c):c;break;default:g.remove(c),h.reject(new Error('Requested type "'+u+'" is not known. Could not inject "'+c+'"'))}d.onload=d.onreadystatechange=function(e){d.readyState&&!/^c|loade/.test(d.readyState)||f||(d.onload=d.onreadystatechange=null,f=1,n._broadcast("ocLazyLoad.fileLoaded",c),h.resolve())},d.onerror=function(){g.remove(c),h.reject(new Error("Unable to load "+c))},d.async=l.serie?0:1;var m=s.lastChild;if(l.insertBefore){var v=e.element(e.isDefined(window.jQuery)?l.insertBefore:document.querySelector(l.insertBefore));v&&v.length>0&&(m=v[0])}if(m.parentNode.insertBefore(d,m),"css"==u){if(!i){var y=o.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(o.navigator.platform)){var L=o.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),$=parseFloat([parseInt(L[1],10),parseInt(L[2],10),parseInt(L[3]||0,10)].join("."));a=6>$}else if(y.indexOf("android")>-1){var j=parseFloat(y.slice(y.indexOf("android")+8));a=4.4>j}else if(y.indexOf("safari")>-1){var E=y.match(/version\/([\.\d]+)/i);a=E&&E[1]&&parseFloat(E[1])<6}}if(a)var _=1e3,w=t(function(){try{d.sheet.cssRules,t.cancel(w),d.onload()}catch(e){--_<=0&&d.onerror()}},20)}return h.promise},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.filesLoader=function(o){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,l=n._getFilesCache();n.toggleWatch(!0),e.extend(t,o);var d=function(r){var o,d=null;if(e.isObject(r)&&(d=r.type,r=r.path),c=l.get(r),e.isUndefined(c)||t.cache===!1){if(null!==(o=/^(css|less|html|htm|js)?(?=!)/.exec(r))&&(d=o[1],r=r.substr(o[1].length+1,r.length)),!d)if(null!==(o=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(r)))d=o[1];else{if(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!n.jsLoader.hasOwnProperty("requirejs"))return void n._$log.error("File type could not be determined. "+r);d="js"}"css"!==d&&"less"!==d||-1!==i.indexOf(r)?"html"!==d&&"htm"!==d||-1!==a.indexOf(r)?"js"===d||-1===s.indexOf(r)?s.push(r):n._$log.error("File type is not valid. "+r):a.push(r):i.push(r)}else c&&u.push(c)};if(t.serie?d(t.files.shift()):e.forEach(t.files,function(e){d(e)}),i.length>0){var f=r.defer();n.cssLoader(i,function(r){e.isDefined(r)&&n.cssLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),f.reject(r)):f.resolve()},t),u.push(f.promise)}if(a.length>0){var h=r.defer();n.templatesLoader(a,function(r){e.isDefined(r)&&n.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(r),h.reject(r)):h.resolve()},t),u.push(h.promise)}if(s.length>0){var g=r.defer();n.jsLoader(s,function(r){e.isDefined(r)&&(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||n.jsLoader.hasOwnProperty("requirejs"))?(n._$log.error(r),g.reject(r)):g.resolve()},t),u.push(g.promise)}if(0===u.length){var p=r.defer(),m="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return n._$log.error(m),p.reject(m),p.promise}return t.serie&&t.files.length>0?r.all(u).then(function(){return n.filesLoader(o,t)}):r.all(u)["finally"](function(e){return n.toggleWatch(!1),e})},n.load=function(o){var t,i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=r.defer(),l=e.copy(o),d=e.copy(i);if(e.isArray(l))return e.forEach(l,function(e){u.push(a.load(e,d))}),r.all(u).then(function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise;if(e.isString(l)?(s=a.getModuleConfig(l),s||(s={files:[l]})):e.isObject(l)&&(s=e.isDefined(l.path)&&e.isDefined(l.type)?{files:[l]}:a.setModuleConfig(l)),null===s){var f=a._getModuleName(l);return t='Module "'+(f||"unknown")+'" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},d,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h,!0):(n.filesLoader(s,h).then(function(){n.inject(null,h).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)}),c.promise)},n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.cssLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement("css",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,r){return n.jsLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement("js",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){"use strict";e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function(n,r,o,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,function(n){var i=o.defer();u.push(i.promise),t.get(n,s).success(function(o){e.isString(o)&&o.length>0&&e.forEach(e.element(o),function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&r.put(e.id,e.innerHTML)}),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()}).error(function(e){i.reject(new Error('Unable to load template file "'+n+'": '+e))})}),o.all(u).then(function(){a()},function(e){a(e)})},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),t=o.length>>>0;if(0===t)return-1;var i=+n||0;if(Math.abs(i)===1/0&&(i=0),i>=t)return-1;for(r=Math.max(i>=0?i:t-Math.abs(i),0);t>r;){if(r in o&&o[r]===e)return r;r++}return-1});
/*! messenger 1.4.1 */
(function(){var e,t=window.Messenger;e=window.Messenger=function(){return e._call.apply(this,arguments)},window.Messenger.noConflict=function(){return window.Messenger=t,e}})(),window.Messenger._=function(){if(window._)return window._;var e=Array.prototype,t=Object.prototype,n=Function.prototype,s=(e.push,e.slice),r=(e.concat,t.toString);t.hasOwnProperty;var o=e.forEach,i=(e.map,e.reduce,e.reduceRight,e.filter),a=(e.every,e.some,e.indexOf,e.lastIndexOf,Array.isArray,Object.keys),l=n.bind,u={},c={},h=u.each=u.forEach=function(e,t,n){if(null!=e)if(o&&e.forEach===o)e.forEach(t,n);else if(e.length===+e.length){for(var s=0,r=e.length;r>s;s++)if(t.call(n,e[s],s,e)===c)return}else for(var i in e)if(u.has(e,i)&&t.call(n,e[i],i,e)===c)return};u.result=function(e,t){if(null==e)return null;var n=e[t];return u.isFunction(n)?n.call(e):n},u.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}};var p=0;return u.uniqueId=function(e){var t=++p+"";return e?e+t:t},u.filter=u.select=function(e,t,n){var s=[];return null==e?s:i&&e.filter===i?e.filter(t,n):(h(e,function(e,r,o){t.call(n,e,r,o)&&(s[s.length]=e)}),s)},h(["Arguments","Function","String","Number","Date","RegExp"],function(e){u["is"+e]=function(t){return r.call(t)=="[object "+e+"]"}}),u.defaults=function(e){return h(s.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},u.extend=function(e){return h(s.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},u.keys=a||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)u.has(e,n)&&(t[t.length]=n);return t},u.bind=function(e,t){if(e.bind===l&&l)return l.apply(e,s.call(arguments,1));var n=s.call(arguments,2);return function(){return e.apply(t,n.concat(s.call(arguments)))}},u.isObject=function(e){return e===Object(e)},u}(),window.Messenger.Events=function(){if(window.Backbone&&Backbone.Events)return Backbone.Events;var e=function(){var e=/\s+/,t=function(t,n,s,r){if(!s)return!0;if("object"==typeof s)for(var o in s)t[n].apply(t,[o,s[o]].concat(r));else{if(!e.test(s))return!0;for(var i=s.split(e),a=0,l=i.length;l>a;a++)t[n].apply(t,[i[a]].concat(r))}},n=function(e,t){var n,s=-1,r=e.length;switch(t.length){case 0:for(;r>++s;)(n=e[s]).callback.call(n.ctx);return;case 1:for(;r>++s;)(n=e[s]).callback.call(n.ctx,t[0]);return;case 2:for(;r>++s;)(n=e[s]).callback.call(n.ctx,t[0],t[1]);return;case 3:for(;r>++s;)(n=e[s]).callback.call(n.ctx,t[0],t[1],t[2]);return;default:for(;r>++s;)(n=e[s]).callback.apply(n.ctx,t)}},s={on:function(e,n,s){if(!t(this,"on",e,[n,s])||!n)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:n,context:s,ctx:s||this}),this},once:function(e,n,s){if(!t(this,"once",e,[n,s])||!n)return this;var r=this,o=_.once(function(){r.off(e,o),n.apply(this,arguments)});return o._callback=n,this.on(e,o,s),this},off:function(e,n,s){var r,o,i,a,l,u,c,h;if(!this._events||!t(this,"off",e,[n,s]))return this;if(!e&&!n&&!s)return this._events={},this;for(a=e?[e]:_.keys(this._events),l=0,u=a.length;u>l;l++)if(e=a[l],r=this._events[e]){if(i=[],n||s)for(c=0,h=r.length;h>c;c++)o=r[c],(n&&n!==o.callback&&n!==o.callback._callback||s&&s!==o.context)&&i.push(o);this._events[e]=i}return this},trigger:function(e){if(!this._events)return this;var s=Array.prototype.slice.call(arguments,1);if(!t(this,"trigger",e,s))return this;var r=this._events[e],o=this._events.all;return r&&n(r,s),o&&n(o,arguments),this},listenTo:function(e,t,n){var s=this._listeners||(this._listeners={}),r=e._listenerId||(e._listenerId=_.uniqueId("l"));return s[r]=e,e.on(t,"object"==typeof t?this:n,this),this},stopListening:function(e,t,n){var s=this._listeners;if(s){if(e)e.off(t,"object"==typeof t?this:n,this),t||n||delete s[e._listenerId];else{"object"==typeof t&&(n=this);for(var r in s)s[r].off(t,n,this);this._listeners={}}return this}}};return s.bind=s.on,s.unbind=s.off,s};return e()}(),function(){var e,t,n,s,r,o,i,a,l,u,c,h={}.hasOwnProperty,p=function(e,t){function n(){this.constructor=e}for(var s in t)h.call(t,s)&&(e[s]=t[s]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},d=[].slice,f=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};e=jQuery,o=null!=(l=window._)?l:window.Messenger._,s=null!=(u="undefined"!=typeof Backbone&&null!==Backbone?Backbone.Events:void 0)?u:window.Messenger.Events,n=function(){function t(t){e.extend(this,s),o.isObject(t)&&(t.el&&this.setElement(t.el),this.model=t.model),this.initialize.apply(this,arguments)}return t.prototype.setElement=function(t){return this.$el=e(t),this.el=this.$el[0]},t.prototype.delegateEvents=function(e){var t,n,s,r,i,a,l;if(e||(e=o.result(this,"events"))){this.undelegateEvents(),t=/^(\S+)\s*(.*)$/,l=[];for(s in e){if(i=e[s],o.isFunction(i)||(i=this[e[s]]),!i)throw Error('Method "'+e[s]+'" does not exist');r=s.match(t),n=r[1],a=r[2],i=o.bind(i,this),n+=".delegateEvents"+this.cid,""===a?l.push(this.jqon(n,i)):l.push(this.jqon(n,a,i))}return l}},t.prototype.jqon=function(e,t,n){var s;return null!=this.$el.on?(s=this.$el).on.apply(s,arguments):(null==n&&(n=t,t=void 0),null!=t?this.$el.delegate(t,e,n):this.$el.bind(e,n))},t.prototype.jqoff=function(e){var t;return null!=this.$el.off?(t=this.$el).off.apply(t,arguments):(this.$el.undelegate(),this.$el.unbind(e))},t.prototype.undelegateEvents=function(){return this.jqoff(".delegateEvents"+this.cid)},t.prototype.remove=function(){return this.undelegateEvents(),this.$el.remove()},t}(),i=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return p(n,t),n.prototype.defaults={hideAfter:10,scroll:!0,closeButtonText:"&times;"},n.prototype.initialize=function(t){return null==t&&(t={}),this.shown=!1,this.rendered=!1,this.messenger=t.messenger,this.options=e.extend({},this.options,t,this.defaults)},n.prototype.show=function(){var e;return this.rendered||this.render(),this.$message.removeClass("messenger-hidden"),e=this.shown,this.shown=!0,e?void 0:this.trigger("show")},n.prototype.hide=function(){var e;if(this.rendered)return this.$message.addClass("messenger-hidden"),e=this.shown,this.shown=!1,e?this.trigger("hide"):void 0},n.prototype.cancel=function(){return this.hide()},n.prototype.update=function(t){var n,s=this;return o.isString(t)&&(t={message:t}),e.extend(this.options,t),this.lastUpdate=new Date,this.rendered=!1,this.events=null!=(n=this.options.events)?n:{},this.render(),this.actionsToEvents(),this.delegateEvents(),this.checkClickable(),this.options.hideAfter?(this.$message.addClass("messenger-will-hide-after"),null!=this._hideTimeout&&clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(function(){return s.hide()},1e3*this.options.hideAfter)):this.$message.removeClass("messenger-will-hide-after"),this.options.hideOnNavigate?(this.$message.addClass("messenger-will-hide-on-navigate"),null!=("undefined"!=typeof Backbone&&null!==Backbone?Backbone.history:void 0)&&Backbone.history.on("route",function(){return s.hide()})):this.$message.removeClass("messenger-will-hide-on-navigate"),this.trigger("update",this)},n.prototype.scrollTo=function(){return this.options.scroll?e.scrollTo(this.$el,{duration:400,offset:{left:0,top:-20}}):void 0},n.prototype.timeSinceUpdate=function(){return this.lastUpdate?new Date-this.lastUpdate:null},n.prototype.actionsToEvents=function(){var e,t,n,s,r=this;n=this.options.actions,s=[];for(t in n)e=n[t],s.push(this.events['click [data-action="'+t+'"] a']=function(e){return function(n){return n.preventDefault(),n.stopPropagation(),r.trigger("action:"+t,e,n),e.action.call(r,n,r)}}(e));return s},n.prototype.checkClickable=function(){var e,t,n,s;n=this.events,s=[];for(t in n)e=n[t],"click"===t?s.push(this.$message.addClass("messenger-clickable")):s.push(void 0);return s},n.prototype.undelegateEvents=function(){var e;return n.__super__.undelegateEvents.apply(this,arguments),null!=(e=this.$message)?e.removeClass("messenger-clickable"):void 0},n.prototype.parseActions=function(){var t,n,s,r,o,i;n=[],o=this.options.actions;for(r in o)t=o[r],s=e.extend({},t),s.name=r,null==(i=s.label)&&(s.label=r),n.push(s);return n},n.prototype.template=function(t){var n,s,r,o,i,a,l,u,c,h,p=this;for(i=e("<div class='messenger-message message alert "+t.type+" message-"+t.type+" alert-"+t.type+"'>"),t.showCloseButton&&(r=e('<button type="button" class="messenger-close" data-dismiss="alert">'),r.html(t.closeButtonText),r.click(function(){return p.cancel(),!0}),i.append(r)),a=e('<div class="messenger-message-inner">'+t.message+"</div>"),i.append(a),t.actions.length&&(s=e('<div class="messenger-actions">')),h=t.actions,u=0,c=h.length;c>u;u++)l=h[u],n=e("<span>"),n.attr("data-action",""+l.name),o=e("<a>"),o.html(l.label),n.append(e('<span class="messenger-phrase">')),n.append(o),s.append(n);return i.append(s),i},n.prototype.render=function(){var t;if(!this.rendered)return this._hasSlot||(this.setElement(this.messenger._reserveMessageSlot(this)),this._hasSlot=!0),t=e.extend({},this.options,{actions:this.parseActions()}),this.$message=e(this.template(t)),this.$el.html(this.$message),this.shown=!0,this.rendered=!0,this.trigger("render")},n}(n),r=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return p(t,e),t.prototype.initialize=function(){return t.__super__.initialize.apply(this,arguments),this._timers={}},t.prototype.cancel=function(){return this.clearTimers(),this.hide(),null!=this._actionInstance&&null!=this._actionInstance.abort?this._actionInstance.abort():void 0},t.prototype.clearTimers=function(){var e,t,n,s;n=this._timers;for(e in n)t=n[e],clearTimeout(t);return this._timers={},null!=(s=this.$message)?s.removeClass("messenger-retry-soon messenger-retry-later"):void 0},t.prototype.render=function(){var e,n,s,r;t.__super__.render.apply(this,arguments),this.clearTimers(),s=this.options.actions,r=[];for(n in s)e=s[n],e.auto?r.push(this.startCountdown(n,e)):r.push(void 0);return r},t.prototype.renderPhrase=function(e,t){var n;return n=e.phrase.replace("TIME",this.formatTime(t))},t.prototype.formatTime=function(e){var t;return t=function(e,t){return e=Math.floor(e),1!==e&&(t+="s"),"in "+e+" "+t},0===Math.floor(e)?"now...":60>e?t(e,"second"):(e/=60,60>e?t(e,"minute"):(e/=60,t(e,"hour")))},t.prototype.startCountdown=function(e,t){var n,s,r,o,i=this;if(null==this._timers[e])return n=this.$message.find("[data-action='"+e+"'] .messenger-phrase"),s=null!=(o=t.delay)?o:3,10>=s?(this.$message.removeClass("messenger-retry-later"),this.$message.addClass("messenger-retry-soon")):(this.$message.removeClass("messenger-retry-soon"),this.$message.addClass("messenger-retry-later")),r=function(){var o;return n.text(i.renderPhrase(t,s)),s>0?(o=Math.min(s,1),s-=o,i._timers[e]=setTimeout(r,1e3*o)):(i.$message.removeClass("messenger-retry-soon messenger-retry-later"),delete i._timers[e],t.action())},r()},t}(i),a=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return p(n,t),n.prototype.tagName="ul",n.prototype.className="messenger",n.prototype.messageDefaults={type:"info"},n.prototype.initialize=function(t){return this.options=null!=t?t:{},this.history=[],this.messageDefaults=e.extend({},this.messageDefaults,this.options.messageDefaults)},n.prototype.render=function(){return this.updateMessageSlotClasses()},n.prototype.findById=function(e){return o.filter(this.history,function(t){return t.msg.options.id===e})},n.prototype._reserveMessageSlot=function(t){var n,s,r=this;for(n=e("<li>"),n.addClass("messenger-message-slot"),this.$el.prepend(n),this.history.push({msg:t,$slot:n}),this._enforceIdConstraint(t),t.on("update",function(){return r._enforceIdConstraint(t)});this.options.maxMessages&&this.history.length>this.options.maxMessages;)s=this.history.shift(),s.msg.remove(),s.$slot.remove();return n},n.prototype._enforceIdConstraint=function(e){var t,n,s,r,o;if(null!=e.options.id)for(o=this.history,n=0,s=o.length;s>n;n++)if(t=o[n],r=t.msg,null!=r.options.id&&r.options.id===e.options.id&&e!==r){if(e.options.singleton)return e.hide(),void 0;r.hide()}},n.prototype.newMessage=function(e){var t,n,s,o,a=this;return null==e&&(e={}),e.messenger=this,i=null!=(n=null!=(s=Messenger.themes[null!=(o=e.theme)?o:this.options.theme])?s.Message:void 0)?n:r,t=new i(e),t.on("show",function(){return e.scrollTo&&"fixed"!==a.$el.css("position")?t.scrollTo():void 0}),t.on("hide show render",this.updateMessageSlotClasses,this),t},n.prototype.updateMessageSlotClasses=function(){var e,t,n,s,r,o,i;for(s=!0,t=null,e=!1,i=this.history,r=0,o=i.length;o>r;r++)n=i[r],n.$slot.removeClass("messenger-first messenger-last messenger-shown"),n.msg.shown&&n.msg.rendered&&(n.$slot.addClass("messenger-shown"),e=!0,t=n,s&&(s=!1,n.$slot.addClass("messenger-first")));return null!=t&&t.$slot.addClass("messenger-last"),this.$el[""+(e?"remove":"add")+"Class"]("messenger-empty")},n.prototype.hideAll=function(){var e,t,n,s,r;for(s=this.history,r=[],t=0,n=s.length;n>t;t++)e=s[t],r.push(e.msg.hide());return r},n.prototype.post=function(t){var n;return o.isString(t)&&(t={message:t}),t=e.extend(!0,{},this.messageDefaults,t),n=this.newMessage(t),n.update(t),n},n}(n),t=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return p(n,t),n.prototype.doDefaults={progressMessage:null,successMessage:null,errorMessage:"Error connecting to the server.",showSuccessWithoutError:!0,retry:{auto:!0,allow:!0},action:e.ajax},n.prototype.hookBackboneAjax=function(t){var n,s=this;if(null==t&&(t={}),null==window.Backbone)throw"Expected Backbone to be defined";return t=o.defaults(t,{id:"BACKBONE_ACTION",errorMessage:!1,successMessage:"Request completed successfully.",showSuccessWithoutError:!1}),n=function(e){var n;return n=o.extend({},t,e.messenger),s["do"](n,e)},null!=Backbone.ajax?(Backbone.ajax._withoutMessenger&&(Backbone.ajax=Backbone.ajax._withoutMessenger),(null==t.action||t.action===this.doDefaults.action)&&(t.action=Backbone.ajax),n._withoutMessenger=Backbone.ajax,Backbone.ajax=n):Backbone.sync=o.wrap(Backbone.sync,function(){var t,s,r;return r=arguments[0],t=arguments.length>=2?d.call(arguments,1):[],s=e.ajax,e.ajax=n,r.call.apply(r,[this].concat(d.call(t))),e.ajax=s})},n.prototype._getHandlerResponse=function(e){return e===!1?!1:e===!0||null==e?!0:e},n.prototype._parseEvents=function(e){var t,n,s,r,o,i,a;null==e&&(e={}),o={};for(r in e)s=e[r],n=r.indexOf(" "),i=r.substring(0,n),t=r.substring(n+1),null==(a=o[i])&&(o[i]={}),o[i][t]=s;return o},n.prototype._normalizeResponse=function(){var e,t,n,s,r,i,a;for(n=arguments.length>=1?d.call(arguments,0):[],s=null,r=null,e=null,i=0,a=n.length;a>i;i++)t=n[i],"success"===t||"timeout"===t||"abort"===t?s=t:null!=(null!=t?t.readyState:void 0)&&null!=(null!=t?t.responseText:void 0)?r=t:o.isObject(t)&&(e=t);return[s,e,r]},n.prototype.run=function(){var t,n,s,r,i,a,l,u,c,h,p,g=this;if(a=arguments[0],c=arguments[1],t=arguments.length>=3?d.call(arguments,2):[],null==c&&(c={}),a=e.extend(!0,{},this.messageDefaults,this.doDefaults,null!=a?a:{}),n=this._parseEvents(a.events),s=function(e,t){var n;return n=a[e+"Message"],o.isFunction(n)?n.call(g,e,t):n},l=null!=(p=a.messageInstance)?p:this.newMessage(a),null!=a.id&&(l.options.id=a.id),null!=a.progressMessage&&l.update(e.extend({},a,{message:s("progress",null),type:"info"})),i={},o.each(["error","success"],function(r){var u;return u=c[r],i[r]=function(){var i,h,p,m,y,v,_,w,b,x,M,C,k,$,E;return v=arguments.length>=1?d.call(arguments,0):[],b=g._normalizeResponse.apply(g,v),y=b[0],i=b[1],w=b[2],"success"===r&&null==l.errorCount&&a.showSuccessWithoutError===!1&&(a.successMessage=null),"error"===r&&(null==(x=a.errorCount)&&(a.errorCount=0),a.errorCount+=1),p=a.returnsPromise?v[0]:"function"==typeof u?u.apply(null,v):void 0,_=g._getHandlerResponse(p),o.isString(_)&&(_={message:_}),"error"!==r||0!==(null!=w?w.status:void 0)&&"abort"!==y?"error"===r&&null!=a.ignoredErrorCodes&&(M=null!=w?w.status:void 0,f.call(a.ignoredErrorCodes,M)>=0)?(l.hide(),void 0):(h={message:s(r,w),type:r,events:null!=(C=n[r])?C:{},hideOnNavigate:"success"===r},m=e.extend({},a,h,_),"number"==typeof(null!=(k=m.retry)?k.allow:void 0)&&m.retry.allow--,"error"===r&&(null!=w?w.status:void 0)>=500&&(null!=($=m.retry)?$.allow:void 0)?(null==m.retry.delay&&(m.retry.delay=4>m.errorCount?10:300),m.hideAfter&&(null==(E=m._hideAfter)&&(m._hideAfter=m.hideAfter),m.hideAfter=m._hideAfter+m.retry.delay),m._retryActions=!0,m.actions={retry:{label:"retry now",phrase:"Retrying TIME",auto:m.retry.auto,delay:m.retry.delay,action:function(){return m.messageInstance=l,setTimeout(function(){return g["do"].apply(g,[m,c].concat(d.call(t)))},0)}},cancel:{action:function(){return l.cancel()}}}):m._retryActions&&(delete m.actions.retry,delete m.actions.cancel,delete a._retryActions),l.update(m),_&&m.message?(Messenger(o.extend({},g.options,{instance:g})),l.show()):l.hide()):(l.hide(),void 0)}}),!a.returnsPromise)for(h in i)r=i[h],u=c[h],c[h]=r;return l._actionInstance=a.action.apply(a,[c].concat(d.call(t))),a.returnsPromise&&l._actionInstance.then(i.success,i.error),l},n.prototype["do"]=n.prototype.run,n.prototype.ajax=function(){var t,n;return n=arguments[0],t=arguments.length>=2?d.call(arguments,1):[],n.action=e.ajax,this.run.apply(this,[n].concat(d.call(t)))},n.prototype.expectPromise=function(e,t){return t=o.extend({},t,{action:e,returnsPromise:!0}),this.run(t)},n.prototype.error=function(e){return null==e&&(e={}),"string"==typeof e&&(e={message:e}),e.type="error",this.post(e)},n.prototype.info=function(e){return null==e&&(e={}),"string"==typeof e&&(e={message:e}),e.type="info",this.post(e)},n.prototype.success=function(e){return null==e&&(e={}),"string"==typeof e&&(e={message:e}),e.type="success",this.post(e)},n}(a),e.fn.messenger=function(){var n,s,r,i,l,u,c,h;return r=arguments[0],s=arguments.length>=2?d.call(arguments,1):[],null==r&&(r={}),n=this,null!=r&&o.isString(r)?(h=n.data("messenger"))[r].apply(h,s):(l=r,null==n.data("messenger")&&(a=null!=(u=null!=(c=Messenger.themes[l.theme])?c.Messenger:void 0)?u:t,n.data("messenger",i=new a(e.extend({el:n},l))),i.render()),n.data("messenger"))},window.Messenger._call=function(t){var n,s,r,o,i,a,l,u,c,h,p;if(a={extraClasses:"messenger-fixed messenger-on-bottom messenger-on-right",theme:"future",maxMessages:9,parentLocations:["body"]},t=e.extend(a,e._messengerDefaults,Messenger.options,t),null!=t.theme&&(t.extraClasses+=" messenger-theme-"+t.theme),l=t.instance||Messenger.instance,null==t.instance){for(c=t.parentLocations,s=null,r=null,h=0,p=c.length;p>h;h++)if(u=c[h],s=e(u),s.length){o=u;break}l?e(l._location).is(e(o))||(l.$el.detach(),s.prepend(l.$el)):(n=e("<ul>"),s.prepend(n),l=n.messenger(t),l._location=o,Messenger.instance=l)}return null!=l._addedClasses&&l.$el.removeClass(l._addedClasses),l.$el.addClass(i=""+l.className+" "+t.extraClasses),l._addedClasses=i,l},e.extend(Messenger,{Message:r,Messenger:t,themes:null!=(c=Messenger.themes)?c:{}}),e.globalMessenger=window.Messenger=Messenger}.call(this);
(function() {
  var $, FlatMessage, spinner_template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $ = jQuery;

  spinner_template = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';

  FlatMessage = (function(_super) {

    __extends(FlatMessage, _super);

    function FlatMessage() {
      return FlatMessage.__super__.constructor.apply(this, arguments);
    }

    FlatMessage.prototype.template = function(opts) {
      var $message;
      $message = FlatMessage.__super__.template.apply(this, arguments);
      $message.append($(spinner_template));
      return $message;
    };

    return FlatMessage;

  })(window.Messenger.Message);

  window.Messenger.themes.flat = {
    Message: FlatMessage
  };

}).call(this);
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return Bb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){vb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return o(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){sc[a]||(e(b),sc[a]=!0)}function h(a,b){return function(c){return r(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function k(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function l(){}function m(a,b){b!==!1&&H(a),p(this,a),this._d=new Date(+a._d),uc===!1&&(uc=!0,vb.updateOffset(this),uc=!1)}function n(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=vb.localeData(),this._bubble()}function o(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function p(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Kb.length>0)for(c in Kb)d=Kb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function s(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function t(a,b){var c;return b=M(b,a),a.isBefore(b)?c=s(a,b):(c=s(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function u(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=vb.duration(c,d),v(this,e,a),this}}function v(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&pb(a,"Date",ob(a,"Date")+f*c),g&&nb(a,ob(a,"Month")+g*c),d&&vb.updateOffset(a,f||g)}function w(a){return"[object Array]"===Object.prototype.toString.call(a)}function x(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function y(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&C(a[d])!==C(b[d]))&&g++;return g+f}function z(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=lc[a]||mc[b]||b}return a}function A(a){var b,d,e={};for(d in a)c(a,d)&&(b=z(d),b&&(e[b]=a[d]));return e}function B(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}vb[b]=function(e,f){var g,h,i=vb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=vb().utc().set(d,a);return i.call(vb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function C(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function D(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function E(a,b,c){return jb(vb([a,11,31+b-c]),b,c).week}function F(a){return G(a)?366:365}function G(a){return a%4===0&&a%100!==0||a%400===0}function H(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Db]<0||a._a[Db]>11?Db:a._a[Eb]<1||a._a[Eb]>D(a._a[Cb],a._a[Db])?Eb:a._a[Fb]<0||a._a[Fb]>24||24===a._a[Fb]&&(0!==a._a[Gb]||0!==a._a[Hb]||0!==a._a[Ib])?Fb:a._a[Gb]<0||a._a[Gb]>59?Gb:a._a[Hb]<0||a._a[Hb]>59?Hb:a._a[Ib]<0||a._a[Ib]>999?Ib:-1,a._pf._overflowDayOfYear&&(Cb>b||b>Eb)&&(b=Eb),a._pf.overflow=b)}function I(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function J(a){return a?a.toLowerCase().replace("_","-"):a}function K(a){for(var b,c,d,e,f=0;f<a.length;){for(e=J(a[f]).split("-"),b=e.length,c=J(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=L(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&y(e,c,!0)>=b-1)break;b--}f++}return null}function L(a){var b=null;if(!Jb[a]&&Lb)try{b=vb.locale(),require("./locale/"+a),vb.locale(b)}catch(c){}return Jb[a]}function M(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(vb.isMoment(a)||x(a)?+a:+vb(a))-+c,c._d.setTime(+c._d+d),vb.updateOffset(c,!1),c):vb(a).local()}function N(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function O(a){var b,c,d=a.match(Pb);for(b=0,c=d.length;c>b;b++)d[b]=rc[d[b]]?rc[d[b]]:N(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function P(a,b){return a.isValid()?(b=Q(b,a.localeData()),nc[b]||(nc[b]=O(b)),nc[b](a)):a.localeData().invalidDate()}function Q(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Qb.lastIndex=0;d>=0&&Qb.test(a);)a=a.replace(Qb,c),Qb.lastIndex=0,d-=1;return a}function R(a,b){var c,d=b._strict;switch(a){case"Q":return _b;case"DDDD":return bc;case"YYYY":case"GGGG":case"gggg":return d?cc:Tb;case"Y":case"G":case"g":return ec;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?dc:Ub;case"S":if(d)return _b;case"SS":if(d)return ac;case"SSS":if(d)return bc;case"DDD":return Sb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Wb;case"a":case"A":return b._locale._meridiemParse;case"x":return Zb;case"X":return $b;case"Z":case"ZZ":return Xb;case"T":return Yb;case"SSSS":return Vb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?ac:Rb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Rb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp($(Z(a.replace("\\","")),"i"))}}function S(a){a=a||"";var b=a.match(Xb)||[],c=b[b.length-1]||[],d=(c+"").match(jc)||["-",0,0],e=+(60*d[1])+C(d[2]);return"+"===d[0]?e:-e}function T(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Db]=3*(C(b)-1));break;case"M":case"MM":null!=b&&(e[Db]=C(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Db]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Eb]=C(b));break;case"Do":null!=b&&(e[Eb]=C(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=C(b));break;case"YY":e[Cb]=vb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Cb]=C(b);break;case"a":case"A":c._meridiem=b;break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Fb]=C(b);break;case"m":case"mm":e[Gb]=C(b);break;case"s":case"ss":e[Hb]=C(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Ib]=C(1e3*("0."+b));break;case"x":c._d=new Date(C(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=S(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=C(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=vb.parseTwoDigitYear(b)}}function U(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Cb],jb(vb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Cb],jb(vb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=kb(d,e,f,h,g),a._a[Cb]=i.year,a._dayOfYear=i.dayOfYear}function V(a){var c,d,e,f,g=[];if(!a._d){for(e=X(a),a._w&&null==a._a[Eb]&&null==a._a[Db]&&U(a),a._dayOfYear&&(f=b(a._a[Cb],e[Cb]),a._dayOfYear>F(f)&&(a._pf._overflowDayOfYear=!0),d=fb(f,0,a._dayOfYear),a._a[Db]=d.getUTCMonth(),a._a[Eb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Fb]&&0===a._a[Gb]&&0===a._a[Hb]&&0===a._a[Ib]&&(a._nextDay=!0,a._a[Fb]=0),a._d=(a._useUTC?fb:eb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Fb]=24)}}function W(a){var b;a._d||(b=A(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],V(a))}function X(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Y(b){if(b._f===vb.ISO_8601)return void ab(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Q(b._f,b._locale).match(Pb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(R(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),rc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Fb]<=12&&(b._pf.bigHour=a),b._a[Fb]=k(b._locale,b._a[Fb],b._meridiem),V(b),H(b)}function Z(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function $(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function _(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],Y(b),I(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));o(a,c||b)}function ab(a){var b,c,d=a._i,e=fc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=hc.length;c>b;b++)if(hc[b][1].exec(d)){a._f=hc[b][0]+(e[6]||" ");break}for(b=0,c=ic.length;c>b;b++)if(ic[b][1].exec(d)){a._f+=ic[b][0];break}d.match(Xb)&&(a._f+="Z"),Y(a)}else a._isValid=!1}function bb(a){ab(a),a._isValid===!1&&(delete a._isValid,vb.createFromInputFallback(a))}function cb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function db(b){var c,d=b._i;d===a?b._d=new Date:x(d)?b._d=new Date(+d):null!==(c=Mb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?bb(b):w(d)?(b._a=cb(d.slice(0),function(a){return parseInt(a,10)}),V(b)):"object"==typeof d?W(b):"number"==typeof d?b._d=new Date(d):vb.createFromInputFallback(b)}function eb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function gb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function hb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ib(a,b,c){var d=vb.duration(a).abs(),e=Ab(d.as("s")),f=Ab(d.as("m")),g=Ab(d.as("h")),h=Ab(d.as("d")),i=Ab(d.as("M")),j=Ab(d.as("y")),k=e<oc.s&&["s",e]||1===f&&["m"]||f<oc.m&&["mm",f]||1===g&&["h"]||g<oc.h&&["hh",g]||1===h&&["d"]||h<oc.d&&["dd",h]||1===i&&["M"]||i<oc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,hb.apply({},k)}function jb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=vb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function kb(a,b,c,d,e){var f,g,h=fb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:F(a-1)+g}}function lb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||vb.localeData(b._l),null===d||e===a&&""===d?vb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),vb.isMoment(d)?new m(d,!0):(e?w(e)?_(b):Y(b):db(b),c=new m(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function mb(a,b){var c,d;if(1===b.length&&w(b[0])&&(b=b[0]),!b.length)return vb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function nb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),D(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ob(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function pb(a,b,c){return"Month"===b?nb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function qb(a,b){return function(c){return null!=c?(pb(this,a,c),vb.updateOffset(this,b),this):ob(this,a)}}function rb(a){return 400*a/146097}function sb(a){return 146097*a/400}function tb(a){vb.duration.fn[a]=function(){return this._data[a]}}function ub(a){"undefined"==typeof ender&&(wb=zb.moment,zb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vb):vb)}for(var vb,wb,xb,yb="2.9.0",zb="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ab=Math.round,Bb=Object.prototype.hasOwnProperty,Cb=0,Db=1,Eb=2,Fb=3,Gb=4,Hb=5,Ib=6,Jb={},Kb=[],Lb="undefined"!=typeof module&&module&&module.exports,Mb=/^\/?Date\((\-?\d+)/i,Nb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ob=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Qb=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rb=/\d\d?/,Sb=/\d{1,3}/,Tb=/\d{1,4}/,Ub=/[+\-]?\d{1,6}/,Vb=/\d+/,Wb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Xb=/Z|[\+\-]\d\d:?\d\d/gi,Yb=/T/i,Zb=/[\+\-]?\d+/,$b=/[\+\-]?\d+(\.\d{1,3})?/,_b=/\d/,ac=/\d\d/,bc=/\d{3}/,cc=/\d{4}/,dc=/[+-]?\d{6}/,ec=/[+-]?\d+/,fc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gc="YYYY-MM-DDTHH:mm:ssZ",hc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ic=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],jc=/([\+\-]|\d\d)/gi,kc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),lc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},nc={},oc={s:45,m:45,h:22,d:26,M:11},pc="DDD w W M D d".split(" "),qc="M D H h m s w W".split(" "),rc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return r(this.year()%100,2)},YYYY:function(){return r(this.year(),4)},YYYYY:function(){return r(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+r(Math.abs(a),6)},gg:function(){return r(this.weekYear()%100,2)},gggg:function(){return r(this.weekYear(),4)},ggggg:function(){return r(this.weekYear(),5)},GG:function(){return r(this.isoWeekYear()%100,2)},GGGG:function(){return r(this.isoWeekYear(),4)},GGGGG:function(){return r(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return C(this.milliseconds()/100)},SS:function(){return r(C(this.milliseconds()/10),2)},SSS:function(){return r(this.milliseconds(),3)},SSSS:function(){return r(this.milliseconds(),3)},Z:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+":"+r(C(a)%60,2)},ZZ:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+r(C(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},sc={},tc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],uc=!1;pc.length;)xb=pc.pop(),rc[xb+"o"]=i(rc[xb],xb);for(;qc.length;)xb=qc.pop(),rc[xb+xb]=h(rc[xb],2);rc.DDDD=h(rc.DDD,3),o(l.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=vb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=vb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return jb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),lb(g)},vb.suppressDeprecationWarnings=!1,vb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),vb.min=function(){var a=[].slice.call(arguments,0);return mb("isBefore",a)},vb.max=function(){var a=[].slice.call(arguments,0);return mb("isAfter",a)},vb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),lb(g).utc()},vb.unix=function(a){return vb(1e3*a)},vb.duration=function(a,b){var d,e,f,g,h=a,i=null;return vb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Nb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:C(i[Eb])*d,h:C(i[Fb])*d,m:C(i[Gb])*d,s:C(i[Hb])*d,ms:C(i[Ib])*d}):(i=Ob.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):null==h?h={}:"object"==typeof h&&("from"in h||"to"in h)&&(g=t(vb(h.from),vb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new n(h),vb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},vb.version=yb,vb.defaultFormat=gc,vb.ISO_8601=function(){},vb.momentProperties=Kb,vb.updateOffset=function(){},vb.relativeTimeThreshold=function(b,c){return oc[b]===a?!1:c===a?oc[b]:(oc[b]=c,!0)},vb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return vb.locale(a,b)}),vb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?vb.defineLocale(a,b):vb.localeData(a),c&&(vb.duration._locale=vb._locale=c)),vb._locale._abbr},vb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Jb[a]||(Jb[a]=new l),Jb[a].set(b),vb.locale(a),Jb[a]):(delete Jb[a],null)},vb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return vb.localeData(a)}),vb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return vb._locale;if(!w(a)){if(b=L(a))return b;a=[a]}return K(a)},vb.isMoment=function(a){return a instanceof m||null!=a&&c(a,"_isAMomentObject")},vb.isDuration=function(a){return a instanceof n};for(xb=tc.length-1;xb>=0;--xb)B(tc[xb]);vb.normalizeUnits=function(a){return z(a)},vb.invalid=function(a){var b=vb.utc(0/0);return null!=a?o(b._pf,a):b._pf.userInvalidated=!0,b},vb.parseZone=function(){return vb.apply(null,arguments).parseZone()},vb.parseTwoDigitYear=function(a){return C(a)+(C(a)>68?1900:2e3)},vb.isDate=x,o(vb.fn=m.prototype,{clone:function(){return vb(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=vb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():P(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return I(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?vb.utc(this._a):vb(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.utcOffset(0,a)},local:function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(a){var b=P(this,a||vb.defaultFormat);return this.localeData().postformat(b)},add:u(1,"add"),subtract:u(-1,"subtract"),diff:function(a,b,c){var d,e,f=M(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=j(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:q(e)},from:function(a,b){return vb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(vb(),a)},calendar:function(a){var b=a||vb(),c=M(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,vb(b)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=gb(a,this.localeData()),this.add(a-b,"d")):b},month:qb("Month",!0),startOf:function(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=z(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this>+a):(c=vb.isMoment(a)?+a:+vb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+a>+this):(c=vb.isMoment(a)?+a:+vb(a),+this.clone().endOf(b)<c)},isBetween:function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)},isSame:function(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this===+a):(c=+vb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),a>this?this:a}),zone:f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}),utcOffset:function(a,b){var c,d=this._offset||0;return null!=a?("string"==typeof a&&(a=S(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateUtcOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.add(c,"m"),d!==a&&(!b||this._changeInProgress?v(this,vb.duration(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vb.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(S(this._i)),this},hasAlignedHourOffset:function(a){return a=a?vb(a).utcOffset():0,(this.utcOffset()-a)%60===0},daysInMonth:function(){return D(this.year(),this.month())},dayOfYear:function(a){var b=Ab((vb(this).startOf("day")-vb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=jb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=jb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=jb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return E(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return E(this.year(),a.dow,a.doy)},get:function(a){return a=z(a),this[a]()},set:function(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else a=z(a),"function"==typeof this[a]&&this[a](b);return this},locale:function(b){var c;return b===a?this._locale._abbr:(c=vb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vb.fn.millisecond=vb.fn.milliseconds=qb("Milliseconds",!1),vb.fn.second=vb.fn.seconds=qb("Seconds",!1),vb.fn.minute=vb.fn.minutes=qb("Minutes",!1),vb.fn.hour=vb.fn.hours=qb("Hours",!0),vb.fn.date=qb("Date",!0),vb.fn.dates=f("dates accessor is deprecated. Use date instead.",qb("Date",!0)),vb.fn.year=qb("FullYear",!0),vb.fn.years=f("years accessor is deprecated. Use year instead.",qb("FullYear",!0)),vb.fn.days=vb.fn.day,vb.fn.months=vb.fn.month,vb.fn.weeks=vb.fn.week,vb.fn.isoWeeks=vb.fn.isoWeek,vb.fn.quarters=vb.fn.quarter,vb.fn.toJSON=vb.fn.toISOString,vb.fn.isUTC=vb.fn.isUtc,o(vb.duration.fn=n.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=q(d/1e3),g.seconds=a%60,b=q(a/60),g.minutes=b%60,c=q(b/60),g.hours=c%24,e+=q(c/24),h=q(rb(e)),e-=q(sb(h)),f+=q(e/30),e%=30,h+=q(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return q(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*C(this._months/12)
},humanize:function(a){var b=ib(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=vb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=vb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=z(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=z(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*rb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(sb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:vb.fn.lang,locale:vb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vb.duration.fn.toString=vb.duration.fn.toISOString;for(xb in kc)c(kc,xb)&&tb(xb.toLowerCase());vb.duration.fn.asMilliseconds=function(){return this.as("ms")},vb.duration.fn.asSeconds=function(){return this.as("s")},vb.duration.fn.asMinutes=function(){return this.as("m")},vb.duration.fn.asHours=function(){return this.as("h")},vb.duration.fn.asDays=function(){return this.as("d")},vb.duration.fn.asWeeks=function(){return this.as("weeks")},vb.duration.fn.asMonths=function(){return this.as("M")},vb.duration.fn.asYears=function(){return this.as("y")},vb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===C(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Lb?module.exports=vb:"function"==typeof define&&define.amd?(define(function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(zb.moment=wb),vb}),ub(!0)):ub()}).call(this);
// moment.js locale configuration
// locale : chinese (zh-cn)
// author : suupic : https://github.com/suupic
// author : Zeno Zeng : https://github.com/zenozeng

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('zh-cn', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'Ah点mm',
            LTS : 'Ah点m分s秒',
            L : 'YYYY-MM-DD',
            LL : 'YYYY年MMMD日',
            LLL : 'YYYY年MMMD日LT',
            LLLL : 'YYYY年MMMD日ddddLT',
            l : 'YYYY-MM-DD',
            ll : 'YYYY年MMMD日',
            lll : 'YYYY年MMMD日LT',
            llll : 'YYYY年MMMD日ddddLT'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                    meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : function () {
                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%s内',
            past : '%s前',
            s : '几秒',
            m : '1分钟',
            mm : '%d分钟',
            h : '1小时',
            hh : '%d小时',
            d : '1天',
            dd : '%d天',
            M : '1个月',
            MM : '%d个月',
            y : '1年',
            yy : '%d年'
        },
        week : {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
/*! jQuery UI - v1.12.1 - 2016-10-27
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}t.ui=t.ui||{},t.ui.version="1.12.1";var i=0,s=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;r>a;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}})});/*! jQuery Waiting - v0.1.1 - 2013-06-08
* https://github.com/Novascreen/jquery.waiting
* Copyright (c) 2013 Thomas Hermann; Licensed MIT */
(function(i){"use strict";function t(t,e){this.element=t,this.$el=i(t),this.options=i.extend({},n,e),this._defaults=n,this._name=s,this._addPositionRelative=!1,this.init()}var s="waiting",n={waitingClass:s,position:"center",overlay:!0,fixed:!1};t.prototype={init:function(){this.$container=i('<div class="waiting-container hidden" />'),this.$indicator=i('<div class="waiting-indicator" />').appendTo(this.$container),this.options.overlay&&(this.$container.addClass("overlay"),this.$overlay=i('<div class="waiting-overlay" />').appendTo(this.$container)),this.options.overlay&&"custom"!==this.options.position&&this.$indicator.addClass(this.options.position),this.options.fixed&&this.$container.addClass("fixed"),""===this.element.style.position&&(this._addPositionRelative=!0),this.show()},show:function(){this._addPositionRelative&&(this.element.style.position="relative"),this.$el.addClass(this.options.waitingClass),this.$container.appendTo(this.$el).removeClass("hidden")},hide:function(){this.$container.addClass("hidden"),this.$container.detach(),this.$el.removeClass(this.options.waitingClass),this._addPositionRelative&&(this.element.style.position="")},again:function(){this.show()},done:function(){this.hide()}},i.fn[s]=function(n){return this.each(function(){var e,o,a;if(i.data(this,"plugin_"+s)){if(e=i.data(this,"plugin_"+s),o="again",a={again:!0,done:!0},"string"==typeof n){if(!a[n])return!1;o=n,n=null}e[o].call(e,n)}else i.data(this,"plugin_"+s,new t(this,n))})}})(jQuery,window,document);
/*!
 * common.js
 */
//获取页面请求参数
function getRequestParams() {
	   var url = location.search; 
	   var params = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	    	  params[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
	      }
	   }
	   return params;
}

//获取url中包含的表单sn
function parseFormSnInUrl(url) {
	if(url.indexOf('/f/')!=-1){
		var index = url.indexOf('/f/') + 3;
		var sub=url.substr(index);
		var snLength=sub.length;
		for(var i=0;i<sub.length;i++){
			if(sub.charAt(i)=='?'||sub.charAt(i)=='#'){
				snLength=i;
				break;
			}
		}
		return sub.substr(0,snLength);
	}
}
//对Date的扩展，将 Date 转化为指定格式的String 
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
//例子： 
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
// 淘汰！！！ 大家使用moment.js吧！！！
Date.prototype.Format = function(fmt){
	//author: meizz 
	var o = { 
	 "M+" : this.getMonth()+1,                 //月份 
	 "d+" : this.getDate(),                    //日 
	 "h+" : this.getHours(),                   //小时 
	 "m+" : this.getMinutes(),                 //分 
	 "s+" : this.getSeconds(),                 //秒 
	 "q+" : Math.floor((this.getMonth()+3)/3), //季度 
	 "S"  : this.getMilliseconds()             //毫秒 
	}; 
	if(/(y+)/.test(fmt)) 
	 fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	for(var k in o) 
	 if(new RegExp("("+ k +")").test(fmt)) 
	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
	return fmt; 
};
//String方法扩展替换｛num｝。例如："abc{0}".format("Good");
String.prototype.format = function(){
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,                
        function(m,i){
            return args[i];
        });
};

//为ie下添加indexOf方法,为ui-tab中兼容
if(!Array.indexOf){  
	   Array.prototype.indexOf = function(Object){  
	     for(var i = 0;i<this.length;i++){  
	        if(this[i] == Object){  
	           return i;  
	         }  
	     }  
	     return -1; 
	   }
}

/**
 * 判断js对象是否为空值，以下情况被视为空值：
 * 1. undefined 和 null
 * 2. {}
 * 3. "" 或者 ''
 * 4. []
 */
function isEmptyValue(value) {
    var type;
    if(value == null) { // 等同于 value === undefined || value === null
        return true;
    }
    type = Object.prototype.toString.call(value).slice(8, -1);
    switch(type) {
        case 'String':
            return !!$.trim(value);
        case 'Array':
            return !value.length;
        case 'Object':
            return $.isEmptyObject(value); // 普通对象使用 for...in 判断，有 key 即为 false
        default:
            return false; // 其他对象均视作非空
    }
};

//jQuery对象扩展
(function($){
	$.fn.extend({
		//权限验证
		checkPermission:function(){
			var $this = $(this);
			var perms = new Array();
			$this.find("[perm-res]").each(function(i,v){
				$(this).hide();
				perms.push($(this).attr("perm-res"));
			});
			if(perms.length>0){
				$.get("ws/isPermitedByBatch",{permExpr:perms}).success(function(data){
					var permitedData = data.result;
					for(k in permitedData){
						if(permitedData[k]){
							$this.find("[perm-res='"+k+"']").show().removeAttr("perm-res");
						}else{
							$this.find("[perm-res='"+k+"']").remove();
						}
					}
				});
			}
		}
	});
})(jQuery);  

/*兼容ie，ie8和9在没有打开开发者工具的情况下，console对象都是undefined*/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

var c2={
	$loadSubject:function(){
		$.ajax({url: 'ws/getSubject',dataType: 'json',success: function(data){
			 if (data && data.result) {
				c2.subject = data.result;
			}else if(data && data.accessToken){//oauth2 client
				c2.subject = data;
			}
		},error:function(response){
		  if(response.status==401){
		      var loginUrl = response.getResponseHeader("loginurl");
		      
		      var backUrl = window.location.hash;
			  var localBaseIndexOf = loginUrl.indexOf("redirect_uri=");
			  if(localBaseIndexOf!=-1){
				var localBase = loginUrl.substring(localBaseIndexOf+13,loginUrl.indexOf("oauth2-login"));
				backUrl = window.location.href.replace(localBase,"");
			  }
			  window.location.href=loginUrl+"?backUrl="+encodeURIComponent(backUrl);
		  }
	   }});//页面加载时先同步加载当前用户的信息(包括token)
	},
	$loadBackends:function(){
		$.ajax({url:'ctx/backends',dataType:"json",success:function(data){
			c2.backends= data;
		},error:function(){
			console.log("没有配置c2.ui.base或者加载c2-config.properties的c2.ui.base失败。如果没有使用base可以忽略。");
		}})
	},
	url:function(path,params,appName){
		var url = path;
		if(params){
			url = path.replace(/\{(\w+)\}/g,function(m,paramName){
				var urlParam = params[paramName];
				if(urlParam==null){
					console.error("请求参数["+paramName+"]不存在!");
					return "";
				}else{
					return urlParam;
				}
			});
		}
		
		if(appName){//如果定义了其他项目，则将其他项目baseUrl拼到url上，并且去除多余的“/”或者补全“/”
			var baseUrl = c2.backends[appName];
			if(baseUrl.substr(-1,1)==="/"){
				url = url.substr(0,1)==="/"?baseUrl+url.substring(1):baseUrl+url
			}else{
				url = url.substr(0,1)==="/"?baseUrl+url:baseUrl+"/"+url;
			}
		}
		return url;
	},
	base:function(appName){
		var baseUrl = c2.backends[appName];
		console.log("并没有在c2-config.properties文件中配置："+appName);
		return baseUrl;
	},
	backends:{}
}

$.ajaxSetup({async : false});
c2.$loadSubject();
c2.$loadBackends();
$("#directives").load("ui/dir/directives.html");
$.ajaxSetup({async : true,cache: true});

var applicationConfig={
	homeUrl:'home.html',
	messengerOptions:{
	    //http://github.hubspot.com/messenger/docs/welcome/
		extraClasses : 'messenger-fixed messenger-on-bottom',
		theme : 'flat'
	}
};

var c2UiStd = {version:"5.0.3"};

var services = angular.module('app.services', [ 'ngResource', 'ui.bootstrap','oc.lazyLoad' ]);

/**
 * 树型数据的数据源，内部实际上只是保存了从后台获取数据的url
 * 
 * @param $http
 * @param $resource
 * @param sn
 * @param pid
 * @constructor
 */
var TreeDataSource = function(url) {
	this.$url = url;
};

TreeDataSource.prototype = {
	$isAsync : true,
	$load : function() {
		// do nothing
	}
};

/**
 * 列表数据的数据源，内部实际上只是保存了从后台获取数据的url
 * 
 * @param $http
 * @param url
 * @param size
 * @param fk
 *            当前List数据源与外部主对象的主外键对应关系，如主对象主键为id,当前对象外键为uid，那么这里应该是{pk:'id',fk:'uid'}
 * @constructor
 */
var ListDataSource = function(url, sn, entity, fkMap) {
	this.$url = url;
	this.$entity = entity;
	this.$sn = sn;
	this.$fkMap = fkMap;
};

ListDataSource.prototype = {
	$isAsync : true,
	$load : function() {
		// do nothing
	}
}

/**
 * 调用后台WebService的数据源
 * 
 * @param $http
 *            angular的$http服务
 * @param sn
 *            服务序号
 * @constructor
 */
var WebServiceDataSource = function($http, sn, params,method,autoLoad,Messenger) {
	this.$type = "logicDataSource";
	this.$http = $http;
	this.$sn = sn;
	this.$paramsDefine = params;
	this.$method = method;
	this.$autoLoad = autoLoad;
	this.$Messenger = Messenger;
};

WebServiceDataSource.prototype = {
	/*根据逻辑数据源参数定义解析参数值和参数位置*/
	$$paramsDefineParse:function(){
		var _this = this;
		var dsParams = {QueryParam:{},PathParam:{},BodyParam:{}};
		//根据参数(数据源初始参数)类型（字符串还是变量）给参数赋值。如果为变量，从$scope中拿值
		angular.forEach(this.$paramsDefine,function(v,k){
			//position:QueryParam;PathParam;BodyParam
			if(angular.isUndefined(v.type))dsParams.BodyParam.k = v;
			else{
				if(v.type == "variate"){//变量
					dsParams[v.position][k] = eval("_this.$pageScope."+v.value);
				}else{
					dsParams[v.position][k] = v.value;
				}
			}
		});
		return dsParams;
	},
	/*数据源初始化时调用，保存页面scope，用于解析逻辑数据源参数为变量的情况*/
	$$loadInit:function(pageScope){
		this.$pageScope = pageScope;
	},
	$load : function(params,errorCallback) {
		/*
		 * 数据源第一次自动调用时，params参数为空。
		 * 如果params参数有值表示重新加载数据源，重新调用一次数据源，替换初始参数，参数类型按照数据源参数配置类型定义,如果没有配置默认放到body内。
		 * 
		 * */
		if(angular.isDefined(params)){
			var $paramsDefine = this.$paramsDefine;
			if(angular.isDefined(params)){
				var newParams = {};
				angular.forEach(params,function(v,k){
					newParams[k] = {value:v,type:"valued"};
					newParams[k].position = angular.isDefined($paramsDefine[k])?$paramsDefine[k].position:"BodyParam";
				});
				this.$paramsDefine = newParams;
			}
		}
		var _this = this;
		
		//初始计算逻辑数据源变量
		var dsParams = this.$$paramsDefineParse();
		var paramVerify = {verify:true,lackParams:[]};
		
		//支持RESTful的sn,将参数替换url的{参数}
		var sn = this.$sn;
		var url = sn.replace(/\{(\w+)\}/g,function(m,paramName){
			var urlParam = dsParams.PathParam[paramName];
			if(urlParam==null){
				paramVerify.verify = false;
				paramVerify.lackParams.push(paramName);
			}
			return urlParam;
		});
		//加必填验证
		if(!paramVerify.verify){
			_this.$Messenger.error("请求\""+sn+"\"缺少参数："+paramVerify.lackParams.join(","));
			return "缺少参数";
		}
		
		if(JSON.stringify(dsParams.QueryParam) != "{}"){
			try{
				url += "?"+$.param(dsParams.QueryParam);
			}catch(err){
				console.error("数据源QueryParam类型的参数转换错误！QueryParam类型参数的值只能为简单数据类型。");
			}
		}
		var promise=this.$http[this.$method](url, dsParams.BodyParam).success(function(data) {
			if(typeof _this.$filter == "function")_this.$filter(data);
			
			_this.$data = data; 
			if(angular.isObject(data) && !angular.isArray(data)){
				angular.forEach(data, function(value, key) {
					_this[key] = value;
				});
			}
			
			if(angular.isDefined(_this.addFilter))addFilter(_this);
			return _this;
		}).error(function() {
		  if (angular.isFunction(errorCallback)){
			  errorCallback();
		  }
		  return "没有数据";
		});
		
		return promise;
	},
	$reload : function(params,errorCallback) {
		return this.$load(params,errorCallback);
	}
};

var DataSourceWrapper=function($q,datasources){
	this.datasources=datasources;
	this.$q=$q;
};

DataSourceWrapper.prototype={
	loadAll:function($scope){
		var promises =[];
		var _q=this.$q;
		angular.forEach(this.datasources, function (ds, id) {
			ds.$q=_q;//将$q服务注入到每一个数据源内
            if (angular.isFunction(ds.$load)){
            	if(ds.$type=="logicDataSource")ds.$$loadInit($scope);
            	//所有数据源的$load必须返回一个promise
            	if(angular.isUndefined(ds.$autoLoad)||ds.$autoLoad===true)promises.push(ds.$load());
            }
        });
		return _q.all(promises);
	}
};

services.factory('ModelFactory', ['$resource','$http','$q','Messenger',
		function($resource, $http, $q,Messenger) {
			return {
				wrap:function(datasources,$params){
					return new DataSourceWrapper($q,datasources);
				},
				tree : function(url) {
					return new TreeDataSource(url);
				},
				/**
				 * 初始化列表型数据源
				 * 
				 * @param url
				 *            contentProvider的访问路径
				 * @param sn
				 *            实体编号，可以为空
				 * @param pk
				 *            实体主键key
				 * @param fk
				 *            当前List数据源与外部主对象的主外键对应关系，如外部主对象主键为id,当前对象外键为fid，那么这里应该是{pk:'id',fk:'uid'}
				 * @returns {ListDataSource}
				 */
				list : function(url, sn, pk, fkMap, children) {
					/*var reg = /[\\\/]+/g;
					var correctUrl;
					if(url.startsWith("//")||url.startsWith("\\\\"))correctUrl = "//"+url.substring(2).replace(reg,"/");
					else if(url.startsWith("http://")||url.startsWith("http:\\\\"))correctUrl = "http://"+url.substring(7).replace(reg,"/");
					else correctUrl = url.replace(reg,"/");*/
					if (sn) {
						// 支持RESTFul client，绑定该数据源的控件的增删改动作都可以使用标准的RESTFul接口完成
						var listData = new ListDataSource(url, sn, this.entity(sn, pk),fkMap);
						if (children) {
							angular.forEach(children, function(value, key) {
								ListDataSource.prototype[key] = value;
							});
						}
						return listData;
					} else {
						return new ListDataSource(url);
					}
				},
				ws : function(sn, params,method,autoLoad) {
					return new WebServiceDataSource($http, sn, params,method,autoLoad,Messenger);
				},
				/**
				 * 创建实体数据源(实际上是一个实体对应的RESTFul客户端)
				 * 
				 * @param sn
				 *            实体编号
				 * @param pmap
				 *            参数对应关系，主要是用于确定数据内那个属性是id属性，注:如果调用$delete时传入了{id:''}，那么传入的id比这里定义的id属性优先级高
				 * @returns {*}
				 */
				entity : function(sn, pk, children, params,isRestResouce) {
					var snPre = "";
					if(!isRestResouce)snPre = "e/";
					var resource = $resource(snPre + sn + '/:id', {
						id : '@' + pk
					}, {
						'get':{
							method:'GET',
							transformResponse:function(data, headers){
								var obj=angular.fromJson(data);
								if(typeof entity.$filter == "function")entity.$filter(obj);
								resource.prototype.$initialState=angular.copy(obj);
								return obj;
							}
						},
						'execute' : {
							method : 'POST',
							//调用操作url：e/{sn}/op/{op}/{id}
							url : "e/"+ sn + '/op' + '/:op' + '/:id'
						}
					});
					//angular的Resource的内置变量
					var innerPropertyNames=["$promise","$resolved","$q"];
					var countProperty=function(obj){
						//只计算非内置变量
						var count=0;
						angular.forEach(obj, function(value, key) {
							if($.inArray(key,innerPropertyNames) == -1)
								count++;
						});
						return count;
					};
					resource.prototype.$load = function(){
						//只返回一个promise变量，不调用任何加载逻辑
						return this.$promise;
					};
					resource.prototype.$dirty=function(dirty){
						var _this=this;
						if(angular.isUndefined(_this.$initialState)){
							return false;
						}
						if(angular.isDefined(dirty)){
							_this.$initialState=undefined;
							return false;
						}
						if(countProperty(_this) != countProperty(_this.$initialState)){
							return true;
						}
						var dirty = false;
						angular.forEach(_this.$initialState, function(value, key) {
							if(dirty)return;
							if(!angular.equals(_this[key],value)){
								dirty=true;	
							}
						});
						return dirty; 
					};
					resource.prototype.$reset=function(){
						var _this=this;
						if(angular.isDefined(_this.$initialState)){
							angular.forEach(_this, function(value, key) {
								if(!angular.equals(value,_this.$initialState[key])){
									_this[key] = _this.$initialState[key];
								}
							});
						}
					};
					if (children) {
						angular.forEach(children, function(value, key) {
							resource.prototype[key] = value;
						});
					}
					var entity;
					if(angular.isDefined(params)&&!isEmptyValue(params)){
						entity = resource.get(params);
					}else{
						resource.prototype.$initialState={};
						//参数为空时，在初始化时不去加载数据，减少页面加载时的请求数
						entity=new resource();
						
					}
					return entity;
				},
				/**
				 * 对应后台bean，但是没有初始化获取数据的过程
				 */
				bean : function() {
					return {
						$load : function() {
							return {};
						}
					};
				}
			};
		} ]);

services.factory('Messenger', function() {
	if(applicationConfig.messengerOptions){
		Messenger.options = applicationConfig.messengerOptions;
	}else{
		Messenger.options = {
				extraClasses : 'messenger-fixed messenger-on-bottom',
				theme : 'flat'
			};
	}
	var instance = Messenger();
	return {
		success:function(msg){
			return this.post({message:msg,type:'success'});
		},
		error:function(msg){
			return this.post({message:msg,type:'error'});
		},
		post : function(msg) {
			if (angular.isUndefined(msg.hideAfter)) {
				if ('error' == msg.type) {
					msg.hideAfter = 5;
				} else {
					msg.hideAfter = 2;
				}
			}
			if (angular.isUndefined(msg.showCloseButton)) {
				msg.showCloseButton = true;
			}
			return instance.post(msg);
		}
	};
});

services.service('FormContainerFactory', function() {
	var counter = 0;
	var FormContainer = function() {
		this.id = counter++;
		this.controls = {};
	};
	FormContainer.prototype = {
		$isFormContainer : true
	}
	this.create = function() {
		return new FormContainer;
	};
	this.findFormScope = function(scope) {
		var currScope = scope;
		while ((!currScope.form) || !currScope.form.$isFormContainer) {
			currScope = currScope.$parent;
			if (!currScope) {
				return undefined;
			}
		}
		return currScope;
	},
	// 查找最近的FormContainer
	this.findForm = function(scope) {
		var formScope = this.findFormScope(scope)
		if (formScope) {
			return formScope.form;
		}
		return undefined;
	};
});

var ModalContainer = function(instance, params) {
	this.instance = instance;
	if(angular.isUndefined(params))params={};
	this.params = params;
}

ModalContainer.prototype = {
	close : function(result) {
		if (this.instance)
			this.instance.close(result);
	},
	dismiss : function(reason) {
		if (this.instance)
			this.instance.dismiss(reason);
	}
}

/**
 * 对话框服务
 */
services.factory('Modal', [ 'c2modal', function(c2modal) {
	var modalStack = [];
	return {
		openConfirm : function(_params, onOK, onCancel) {
			this.open("f/sys_confirm", _params, onOK, onCancel);
		},
		openDelConfirm : function(_params, onOK, onCancel) {
			this.open("f/sys_del_confirm", _params, onOK, onCancel);
		},
		open : function(url, _params, onClose, onDismiss) {
			var modalInstance = c2modal.open({
				templateUrl : url,
				backdrop : 'static'
			});
			this.instance = new ModalContainer(modalInstance, _params);
			var _this = this;
			modalStack.push(this.instance);
			modalInstance.result.then(function(result) {
				//先弹栈，避免用户在close时再次调用Modal.open时导致数据错误
				//Modal.instance.close()一旦被调用，Modal.instance马上就拿不到东西了
				modalStack.pop();
				_this.instance = modalStack[modalStack.length - 1];
				if (onClose) {
					onClose(result);
				}
			}, function(reason) {
				modalStack.pop();
				_this.instance = modalStack[modalStack.length - 1];
				if (onDismiss) {
					onDismiss(reason);
				}
			});
			return this.instance;
		}
	}
} ]);

services.factory('Scroller',
		[ function() {
			var defaultOffset=50;
			return {
				/*设置默认offset，全局方法，不同地方调用会相互影响*/
				setDefaultOffset:function(offset){
					defaultOffset=offset;
				},
				scrollTo : function(eid, offset, smooth) {
					// This scrolling function
					// is from
					// http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
					var _this = this;
					var yOffset = offset ? offset : defaultOffset;
					var startY = currentYPosition();
					var stopY = elmYPosition(eid) - yOffset;
					var distance = stopY > startY ? stopY - startY : startY
							- stopY;
					// 不需要smooth的，直接滚动
					if (!smooth || distance < 100) {
						window.scrollTo(0, stopY);
						return;
					}
					var speed = Math.round(distance / 100);
					if (speed >= 20)
						speed = 20;
					var step = Math.round(distance / 25);
					var leapY = stopY > startY ? startY + step : startY - step;
					var timer = 0;
					if (stopY > startY) {
						for (var i = startY; i < stopY; i += step) {
							setTimeout("window.scrollTo(0, " + leapY + ")",
									timer * speed);
							leapY += step;
							if (leapY > stopY)
								leapY = stopY;
							timer++;
						}
						return;
					}
					for (var i = startY; i > stopY; i -= step) {
						setTimeout("window.scrollTo(0, " + leapY + ")", timer
								* speed);
						leapY -= step;
						if (leapY < stopY)
							leapY = stopY;
						timer++;
					}

					function currentYPosition() {
						// Firefox, Chrome, Opera, Safari
						if (self.pageYOffset)
							return self.pageYOffset;
						// Internet Explorer 6 - standards mode
						if (document.documentElement
								&& document.documentElement.scrollTop)
							return document.documentElement.scrollTop;
						// Internet Explorer 6, 7 and 8
						if (document.body.scrollTop)
							return document.body.scrollTop;
						return 0;
					}

					function elmYPosition(eid) {
						var elm = document.getElementById(eid);
						var y = elm.offsetTop;
						var node = elm;
						while (node.offsetParent
								&& node.offsetParent != document.body) {
							node = node.offsetParent;
							y += node.offsetTop;
						}
						return y;
					}
				}
			}
		} ]);

/**
 * 安全认证服务
 */
services.factory('SecurityFactory', [ '$http','$window','$location',
		function($http, $window,$location) {
			return {
				isAuthenticated : function() {
					if (!angular.isUndefined($window.sessionStorage.authenticated)) {
						return $window.sessionStorage.authenticated;
					}else{
						return false;
					}
				},
				getSubject : function() {
					if (angular.isDefined(c2.subject)) {
						return  c2.subject;
					}else{
						return undefined;
					}
				},
				logout : function() {
					$http.post("ws/logout",{}).success(function(data) {
						c2.subject = undefined;
						if (angular.isUndefined(data) || angular.isUndefined(data.result)) {
							$window.location.reload();
						}else{
							$window.location.href = data.result;
						}						
					}).error(function() {
					});
				}
		}} ]);


/**
 * json Circular reference 解析,引用传递
 * 例:var data=JsonCRParse.parse(jsonData);
 */
services.factory('JsonCRParse', function(){
	 var t_obj = typeof {};
	 var t_arr = Object.prototype.toString.apply([]);
	 var t_str = typeof "";
	 
	 return {
	      parse:function(jsonData){
			 var xpath = ['jsonData'];
			 //计算路径
			 function walk(path,_xpath,array){
		            if (path.indexOf('$')==0){
						path=path.replace("$","jsonData");
		                return path;
		            }else if(path.indexOf('@')==0){
		            	var x=_xpath.slice(0,-1);
		            	 path = x.join('.');
		            }else {
		                var x;
						var j = path.split('..');
						var k = -j.length + (array ? 1 : 0);
						var last = j.slice(-1)[0].replace('/', '.');
		                x = k < 0 ? _xpath.slice(0, k) : _xpath.slice(0);
		                if (last && !last.indexOf('.') && !last.indexOf('['))
		                    last = '.' + last;
		                path = x.join('.') + last;
		            }
		            return path;
			 };
			 
			 //递归转换
			 (function rez(data){
				var i, item, name, path, _x;
				 //json对象
				 if (data && typeof data === t_obj) {
					  //数组类型
					  if (Object.prototype.toString.apply(data) === t_arr) {
							for (var i = 0; i < data.length; i += 1) {
								item = data[i];
								if (item && typeof item === t_obj) {
									xpath.push(xpath.pop() + '[' + i + ']');    // 下标引用要合并分级
									path = item.$ref;
									if (typeof path === t_str)
										data[i] = eval(walk(path, xpath, true));
									else
										rez(item);
									if (_x = xpath.pop())
										xpath.push(_x.slice(0, _x.indexOf('[')));   // 下标引用还原分级
								}
							}
					   } else {
							for (name in data) {
								if (data.hasOwnProperty(name) && typeof data[name] === t_obj) {
									xpath.push(name);
									item = data[name];
									if (item) {
										path = item.$ref;
										if (typeof path === t_str)
											data[name] = eval(walk(path, xpath));
										else
											rez(item);
									}
									xpath.pop();
								}
							}
					   }
				 }
			 })(jsonData);
			 
			 return jsonData;
	      }
     };
});


/**
 * 重写angulajs ui-bootstrap弹出框modal相关服务，解决IE8下不兼容问题
 */
services.factory('c2modalStack', ['$transition', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
         function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {

           var OPENED_MODAL_CLASS = 'modal-open';

           var backdropDomEl, backdropScope;
           var openedWindows = $$stackedMap.createNew();
           var $modalStack = {};

           function backdropIndex() {
             var topBackdropIndex = -1;
             var opened = openedWindows.keys();
             for (var i = 0; i < opened.length; i++) {
               if (openedWindows.get(opened[i]).value.backdrop) {
                 topBackdropIndex = i;
               }
             }
             return topBackdropIndex;
           }

           $rootScope.$watch(backdropIndex, function(newBackdropIndex){
             if (backdropScope) {
               backdropScope.index = newBackdropIndex;
             }
           });

           function removeModalWindow(modalInstance) {

             var body = $document.find('body').eq(0);
             var modalWindow = openedWindows.get(modalInstance).value;

             //clean up the stack
             openedWindows.remove(modalInstance);

             //remove window DOM element
             removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function() {
               modalWindow.modalScope.$destroy();
               body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
               checkRemoveBackdrop();
             });
           }

           function checkRemoveBackdrop() {
               //remove backdrop if no longer needed
               if (backdropDomEl && backdropIndex() == -1) {
                 var backdropScopeRef = backdropScope;
                 removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
                   backdropScopeRef.$destroy();
                   backdropScopeRef = null;
                 });
                 backdropDomEl = undefined;
                 backdropScope = undefined;
               }
           }

           function removeAfterAnimate(domEl, scope, emulateTime, done) {
             // Closing animation
             scope.animate = false;

             var transitionEndEventName = $transition.transitionEndEventName;
             if (transitionEndEventName) {
               // transition out
               var timeout = $timeout(afterAnimating, emulateTime);

               domEl.bind(transitionEndEventName, function () {
                 $timeout.cancel(timeout);
                 afterAnimating();
                 scope.$apply();
               });
             } else {
               // Ensure this call is async
               $timeout(afterAnimating, 0);
             }

             function afterAnimating() {
               if (afterAnimating.done) {
                 return;
               }
               afterAnimating.done = true;

               domEl.remove();
               if (done) {
                 done();
               }
             }
           }

           $document.bind('keydown', function (evt) {
             var modal;

             if (evt.which === 27) {
               modal = openedWindows.top();
               if (modal && modal.value.keyboard) {
                 evt.preventDefault();
                 $rootScope.$apply(function () {
                   $modalStack.dismiss(modal.key, 'escape key press');
                 });
               }
             }
           });

           $modalStack.open = function (modalInstance, modal) {

             openedWindows.add(modalInstance, {
               deferred: modal.deferred,
               modalScope: modal.scope,
               backdrop: modal.backdrop,
               keyboard: modal.keyboard
             });

             var body = $document.find('body').eq(0),
                 currBackdropIndex = backdropIndex();

             if (currBackdropIndex >= 0 && !backdropDomEl) {
               backdropScope = $rootScope.$new(true);
               backdropScope.index = currBackdropIndex;
               backdropDomEl = $compile('<div modal-backdrop></div>')(backdropScope);
               body.append(backdropDomEl);
             }

             var angularDomEl = angular.element('<div></div>');
             angularDomEl.html(modal.content);
             
             if(angularDomEl.find("[modal-window]").length<=0){
            	 throw new Error('modal-window template incorrect');
             }
             
             angularDomEl.find("[modal-window]").attr({
                 'template-url': modal.windowTemplateUrl,
                 'window-class': modal.windowClass,
                 'size': modal.size,
                 'index': openedWindows.length() - 1,
                 'animate': 'animate'
               });
             
             var modalDomEl = $compile(angularDomEl)(modal.scope);
             openedWindows.top().value.modalDomEl = modalDomEl;
             body.append(modalDomEl);
             body.addClass(OPENED_MODAL_CLASS);
           };

           $modalStack.close = function (modalInstance, result) {
             var modalWindow = openedWindows.get(modalInstance).value;
             if (modalWindow) {
               modalWindow.deferred.resolve(result);
               removeModalWindow(modalInstance);
             }
           };

           $modalStack.dismiss = function (modalInstance, reason) {
             var modalWindow = openedWindows.get(modalInstance).value;
             if (modalWindow) {
               modalWindow.deferred.reject(reason);
               removeModalWindow(modalInstance);
             }
           };

           $modalStack.dismissAll = function (reason) {
             var topModal = this.getTop();
             while (topModal) {
               this.dismiss(topModal.key, reason);
               topModal = this.getTop();
             }
           };

           $modalStack.getTop = function () {
             return openedWindows.top();
           };

           return $modalStack;
         }]);


services.provider('c2modal', function () {

    var $modalProvider = {
      options: {
        backdrop: true, //can be also false or 'static'
        keyboard: true
      },
      $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', 'c2modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, c2modalStack) {

          var $modal = {};

          function getTemplatePromise(options) {
        	  return options.template ? $q.when(options.template) :
                  $http.get(options.templateUrl, {cache: $templateCache}).then(function (result) {
                    return result.data;
                  });
          }

          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }

          $modal.open = function (modalOptions) {

            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              close: function (result) {
                c2modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                c2modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;

              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;

              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });

                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }

              c2modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });

            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });

            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });

            return modalInstance;
          };

          return $modal;
        }]
    };

    return $modalProvider;
  });

services.service('debounce', ['$timeout', function ($timeout) {
    return function (func, wait, immediate) {
      var timeout, args, context, result;
      function debounce() {
        /* jshint validthis:true */
        context = this;
        args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
        }
        return result;
      }
      debounce.cancel = function () {
        $timeout.cancel(timeout);
        timeout = null;
      };
      return debounce;
    };
  }]);

/**
 * 用户偏好设置服务
 */
services.factory('UserPreferences',['$http','$cacheFactory',function($http,$cacheFactory){
	var cache = $cacheFactory('UserPreferencesCache');	
	$http.get('ws/getAllUserPreferences').success(function(data) {
		if (!angular.isUndefined(data)
			&& !angular.isUndefined(data.result)) {
			angular.forEach(data.result, function(value, key) {
				var content;
				try{
					content = eval('(' + value.infoContent + ')');				
				}catch(e){					
					content = value.infoContent;
				}
				if (angular.isUndefined(content)){
					content = "";
				}else if("null"==content){
					content = null;
				}
				cache.put(value.infoName,content);
			});
		}
	});
	function trim(str){   
	    str = str.replace(/^(\s|\u00A0)+/,'');   
	    for(var i=str.length-1; i>=0; i--){   
	        if(/\S/.test(str.charAt(i))){   
	            str = str.substring(0, i+1);   
	            break;   
	        }   
	    }   
	    return str;   
	}
	return {
		config:function(){
			if(arguments.length==1){				
				return cache.get(trim(arguments[0]));	
			}else if(arguments.length==2){
				if(angular.isUndefined(arguments[0])){
					return;
				}
				var infoName = trim(arguments[0]);
				if(""==infoName){
					return;
				}				
				if (angular.isUndefined(arguments[1])){
					this.remove(infoName);
				}else{
					var infoContent = arguments[1];
					if(null==infoContent){
						infoContent = "null";
					}else if("string"==typeof(infoContent)){
						infoContent = trim(infoContent);
					}
					
					if("null"==infoContent){
						cache.put(infoName,null);
					}else{
						cache.put(infoName,infoContent);
					}
					$http.post('ws/setUserPreferences',{"userPreferences":{"infoName":infoName,"infoContent":infoContent}});
				}
			}
		},
		remove:function(infoName){
			cache.remove(infoName);
			$http.post('ws/deleteUserPreferences',{"infoName":infoName});
		}
	};
}]);

services.provider('ResInjector', ['$interpolateProvider', function($interpolateProvider) {
	function ResInjector($compile, $rootScope){
        var head = angular.element(document.getElementsByTagName('head')[0]);
        //注入的JS只有初始化时为空，不提供删除的接口
        $rootScope.$$injectedJavaScript = {};

        //将样式添加到head标签中去，如果关联了作用域，那么注入的css文件与作用域生命周期相同
        var addStylesheet = function(css,scope,point){
        	 if($rootScope.$$injectedStylesheets === undefined){
        		 $rootScope.$$injectedStylesheets = [];
             }else{
                 for(var i in $rootScope.$$injectedStylesheets){
                     if($rootScope.$$injectedStylesheets[i].href == css)
                         return;
                 }
             }
        	 var item = {href: css};
        	 if(angular.isDefined(point)){
        		 if(point===true){
        			 item.point="low";
        		 }else{
        			 item.point=point;
        		 }
        	 }else{
        		 item.point="default" ;
        	 }
        	 $rootScope.$$injectedStylesheets.push(item);
        	 
        	 if(angular.isDefined(scope)){
        		 //绑定到作用域
        		 scope.$on('$destroy', function () {
        	          remove(css);
        	    });
        	 }
        };
        //移除一个样式文件
		var remove = function(css){
			if($rootScope.$$injectedStylesheets){
				for(var i = 0; i < $rootScope.$$injectedStylesheets.length; i++){
					if($rootScope.$$injectedStylesheets[i].href === css){
						$rootScope.$$injectedStylesheets.splice(i, 1);
						return;
					}
				}
			}
		};
		
		//注入js文件，只负责加载，不处理移除
        var addJs = function(){
        	var length=arguments.length;
        	
        	var callback,hrefs=[];
        	for(var i=0;i<length;i++){
        		var curr = arguments[i];
        		if(typeof curr === 'string'){
        			hrefs.push(curr);
        		}else if(curr.constructor === Array){
        			hrefs = hrefs.concat(curr);
        		}else if(typeof curr === 'function'){
        			callback = arguments[i];
        		}
        	}
        	
        	var total=hrefs.length,success=0,failed=0,cached=0;
        	function successHandleWrapper(href){
        		return function(){
        			success++;
        			$rootScope.$$injectedJavaScript[href]=true;
        			checkFinished()
        		};
        	}
        	function failedHandleWrapper(href){
        		return function(){
        			failed++;
    				checkFinished();
        		}
        	}
        	function checkFinished(){
        		if(total == success + failed + cached){
        			callback(success,failed,cached);
        		}
        	}
        	for(var i in hrefs){
        		var href = hrefs[i];
        		if($rootScope.$$injectedJavaScript[href] === undefined){
        			$.getScript(href,successHandleWrapper(href)).fail(failedHandleWrapper(href));
            	}else{
            		cached++;
            		checkFinished();
            	}
        	}
        }
        
        var handleAjaxError=function( jqXHR, textStatus,error){
        	console.log("同步加载js文件过程中发生了错误!"+jqXHR);
        }
        
        var addJsSync=function(){
        	var length=arguments.length;
        	var urls=[];
        	for(var i=0;i<length;i++){
        		var curr = arguments[i];
        		if(typeof curr === 'string'){
        			urls.push(curr);
        		}else if(curr.constructor === Array){
        			urls = urls.concat(curr);
        		}
        	}
        	
        	for(var i in urls){
        		var url = urls[i];
        		if($rootScope.$$injectedJavaScript[url] === undefined){
        			$.ajax({
        				  url: url,
        				  async:false,
        				  dataType: "script",
        				  error:handleAjaxError
        				});
            	}
        	}
        }
        

        return {
            addCss: addStylesheet,
			removeCss: remove,
            addJs: addJs,
            addJsSync:addJsSync
        };
	}

	this.$get = ['$compile', '$rootScope', function($compile, $rootScope){
		return new ResInjector($compile, $rootScope);
	}];
}]);
services.service('UIDirectiveService', [function () {
	//获取父到子节点名称路径（递归）
	var gp = function (node,nodeNameArray){
		if(node.level>0){
			var pn = node.getParentNode();
			nodeNameArray.push(node.name);
			gp(pn,nodeNameArray);
		}else{
			nodeNameArray.push(node.name);
		}
	};
	var setTipMessage =function(element,message){
		element.attr("data-original-title",message);
		element.addClass("tooltip-error").tooltip("enable");
		element.parents(".form-group").addClass("has-error");
	};
	var removeTipMessage = function(element){
		element.tooltip("disable");
		element.parents(".form-group").removeClass("has-error");
	}
	
	return {
		/**
    	 * 执行scope作用域内又返回值的函数
    	 * fn:函数名称
    	 * params：执行函数所需要的参数
    	 * returnObj: 如果函数未定义，默认返回的对象
    	 */
		invoke: function(fnName,fn,params,returnObj){
			if(fnName){
    			return fn(params);
    		}else{
    			return returnObj;
    		}
		},
		//获取表格下拉框代码【jqGrid】
		getSelectHtml:function(datajson,optionId,optionText,optionSelected){
			var selectHtml = "<select>";
    		angular.forEach(datajson,function(v,k){
    			var selected = "";
    			if(v[optionSelected]==true)selected="selected";
    			selectHtml += "<option value='"+v[optionId]+"' "+selected+">"+v[optionText]+"</option>";
    		});
    		selectHtml +="</select>";
    		return selectHtml;
		},
		//验证是否JSON格式 【simpleSelect】
		checkJSONString:function(str){
			try{
				var jsonData = angular.fromJson(str);
				if(jsonData)return true;
				else return false;
    		}catch(e){
    			return false;
    		}
		},
		//验证是否为数据源配置
		checkDataSourceString: function(str){
			if(str&&(str.indexOf("model")==0||str.indexOf("$model")==0)){
				return true;
			}else{
				return false;
			}
		},
		//获取数组对象中的默认值 【simpleSelect】
		getOpiontsSelectedValue: function(options,optionSelected,optionId){
			var selectedValue;
			angular.forEach(options,function(v,n){
    			if(v[optionSelected]){
    				selectedValue = v[optionId]+"";
    			}
    		});
			return selectedValue;
		},
		setTipMessage:setTipMessage,
		removeTipMessage:removeTipMessage,
		//验证文本框
		checkFormData:function(formEle,element,attrs){
			if(angular.isUndefined(formEle)) return true;
			var message = "";
			if(formEle.$invalid){
				if(formEle.$error.required)message+=i18n.c2.validation.required;
				if(formEle.$error.minlength)message+=i18n.c2.validation.minlength.format(attrs.ngMinlength);
				if(formEle.$error.maxlength)message+=i18n.c2.validation.maxlength.format(attrs.ngMaxlength);
				if(formEle.$error.min)message+=i18n.c2.validation.min.format(attrs.min);
				if(formEle.$error.max)message+=i18n.c2.validation.max.format(attrs.max);
				if(formEle.$error.number)message+=i18n.c2.validation.number;
				if(formEle.$error.email)message+=i18n.c2.validation.email;
				if(formEle.$error.url)message+=i18n.c2.validation.url;
				if(formEle.$error.date)message+=i18n.c2.validation.date;
				if(formEle.$error.pattern)message+=typeof attrs.patternError=="undefined"?"验证失败.":attrs.patternError;
				setTipMessage(element,message);
				return false;
			}else{
				removeTipMessage(element);
				return true;
			}
		},
		//验证控件属性必填 【simpleSelect,c2Input,c2SimpleTable,c2Datepicker】
		checkUIAttrs:function(UIName,attrs){
			var checkMsg = [{ui:"c2SimpleSelect",name:"简单下拉框",required:{ngModel:"数据绑定"}},
			                {ui:"c2RadioGroup",name:"radio组",required:{bindData:"数据绑定"}},
			                {ui:"c2CheckboxGroup",name:"checkbox组",required:{bindData:"数据绑定"}},
			                {ui:"c2Input",name:"文本框",required:{ngModel:"数据绑定"}},
			                {ui:"c2Textarea",name:"文本域",required:{ngModel:"数据绑定"}},
			                {ui:"c2Tree",name:"树",required:{treeId:"ID"}},
			                {ui:"c2SimpleTable",name:"简单表格",required:{bindData:"数据绑定"}},
			                {ui:"c2Datepicker",name:"日期选择",required:{id:"ID",name:"name属性",ngModel:"数据绑定"}},
			                {ui:"c2DatetimeRangePicker",name:"日期时间范围选择",required:{id:"ID"}},
			                {ui:"c2Datetimepicker",name:"日期时间选择",required:{id:"ID",name:"name属性",ngModel:"数据绑定"}},
			                {ui:"c2UiSelect",name:"搜索下拉框",required:{id:"ID",bindData:"数据绑定",selectOptions:"选项"}}
			                ];
			var check = true;
			angular.forEach(checkMsg,function(u,n){
				if(u.ui==UIName){
					angular.forEach(u.required,function(v,k){
						if(angular.isUndefined(attrs[k])){
							var uiID = attrs.id;
							if(!attrs.id)uiID="";
							console.error(u.name+"控件("+u.ui+")"+uiID+"没有设置["+v+"]。");
							check=false;
						}
					});
				}
			});
			return check;
		},
		//保证form-group没有写ng-show时不报错并且在设置变量时设置默认值
		checkGroupShow:function($scope,$element,$parse){
    		if($element.parents(".form-group")&&$element.parents(".form-group").attr("ng-show")){
    			var ngShowModel = $parse($element.parents(".form-group").attr("ng-show"));
    			if(angular.isUndefined(ngShowModel($scope.$parent))){
					ngShowModel.assign($scope.$parent,true);
				}
    		}
		},
		//url中参数转换：a/{id}/b + {id:1} --> a/1/b
		replacePathParams:function(path,params){
			if(!path) return ;
			var realPath = path.replace(/\{(\w+)\}/g,function(m,paramName){
				var paramValue = params[paramName];
				if(paramValue==null){
					console.error("'"+path+"'中参数["+paramName+"不存在。]");
					return "";
				}else{
					return paramValue;
				}
			});
			return realPath;
		}
	};
}]);
/**
 * Created by Vurt on 2014/5/19.
 */
// 定义响应拦截服务，所有的响应错误都在这里处理，包括响应状态码为200的业务错误
services.factory('ErrorResponseInterceptor', [ '$q', 'Messenger',
		function($q, Messenger) {
			// 还有一些请求是通过jquery的ajax发送的，要通过这种形式拦截
			var ajaxFilter = new C2InterceptorHelper.AjaxPrefilter(Messenger);
			$.ajaxPrefilter(ajaxFilter.filter);
			return {
				// 处理正常响应，要处理响应头中标识为错误的情况(后台业务错误)
				'response' : function(response) {
					if(angular.isDefined(response.headers().nologin)){
						//保留对nologin头的处理，兼容4.3版本前的后台自定义代码
						C2InterceptorHelper.toLoginPage(response.headers().loginurl);
						return $q.reject(response);
					}
					if ("true" == response.headers().isshowmessage) {
						Messenger.post({
							'message' : decodeURIComponent(response.headers().message./*将编码后的加号处理成空格*/replace(/\+/g, '%20')),
							'type' : response.headers().type,
							'id' : response.status
						});
					}
					if ("error" == response.headers().type) {
						return $q.reject(response);
					} else {
						return response;
					}
				},
				// 处理错误响应，既HTTP的状态码非2XX的响应
				'responseError' : function(response) {
					if('401' == response.status || angular.isDefined(response.headers().nologin)){
						C2InterceptorHelper.toLoginPage(response.headers().loginurl);
						return $q.reject(response);
					}else if('403' == response.status){
						Messenger.post({'message' : "很抱歉，您没有访问该资源的权限", 'type' : 'error', 'id' : response.status});
						return $q.reject(response);
					}else if('304' == response.status){
						return response;
					}
					
					var message = '服务器错误! 错误代码：' + response.status;

					if ("true" == response.headers().isshowmessage) {
						message = decodeURIComponent(response.headers().message./*将编码后的加号处理成空格*/replace(/\+/g, '%20'));
					} else if ('404' == response.status){
						message = '请求地址:' + response.config.url + '无效!';
					} else if(angular.isDefined(response.data)&&(angular.isDefined(response.data.message)||angular.isDefined(response.data.errorMessage))){
						message = response.data.message || response.data.errorMessage;
					}
					
					/*文件上传终止异常 */
					if(response.status== '0'){
						if(response.config.file)message="文件上传已被终止！";
						else message = "网络无法连通，请检查网络配置或联系网络管理员！";
					}
					Messenger.post({'message' : message,'type' : 'error','id' : response.status});
					return $q.reject(response);
				}
			};
		} ]);

var C2InterceptorHelper = {
		/**
		 * 跳转到登录页面，保留当前angular的前台路由信息
		 */
		toLoginPage: function(url){
			var loginUrl = url; 
			if(undefined == loginUrl || "" == loginUrl){
				loginUrl="/login.jsp";
			}
			var backUrl = window.location.hash;
			var localBaseIndexOf = loginUrl.indexOf("redirect_uri=");
			if(localBaseIndexOf!=-1){
				var localBase = loginUrl.substring(localBaseIndexOf+13,loginUrl.indexOf("oauth2-login"));
				backUrl = window.location.href.replace(localBase,"");
			}
			if(loginUrl.substring(0,1)=="/"){
				window.location.href="."+loginUrl+"?backUrl="+encodeURIComponent(backUrl);
			}else{
				window.location.href=loginUrl+"?backUrl="+encodeURIComponent(backUrl);
			}
		},
		AjaxPrefilter : function(Messenger) {
			var _Messenger = Messenger;
			this.filter = function(options, originalOptions, jqXHR) {
				C2InterceptorHelper.wrapAjaxOptions(options,_Messenger);
			};
		},
		wrapAjaxOptions : function(options,messager){
			var _Messenger = messager;
			var success = options.success;
			var error = options.error;
			options.success = function(data, textStatus, jqXHR) {
				if(null != jqXHR.getResponseHeader("nologin") && angular.isDefined(jqXHR.getResponseHeader("nologin"))){
					C2InterceptorHelper.toLoginPage(jqXHR.getResponseHeader("loginurl"));
					if (typeof (error) === "function"){
						return error(data, textStatus, jqXHR);
					}
				}
				
				if ("true" == jqXHR.getResponseHeader("isshowmessage")) {
					_Messenger.post({
						'message' : decodeURIComponent(jqXHR.getResponseHeader("message")./*将编码后的加号处理成空格*/replace(/\+/g, '%20')),
						'type' : jqXHR.getResponseHeader("type"),
						'id' : jqXHR.status
					});
				}
				if ("error" == jqXHR.getResponseHeader("type")) {
					if (typeof (error) === "function"){
						return error(data, textStatus, jqXHR);
					}
				}
				// override success handling
				if (typeof (success) === "function"){
					return success(data, textStatus, jqXHR);
				}
			};

			options.error = function(jqXHR, textStatus, errorThrown) {
				if("401" == jqXHR.status || (null!=jqXHR.getResponseHeader("nologin") && angular.isDefined(jqXHR.getResponseHeader("nologin")))){
					C2InterceptorHelper.toLoginPage(jqXHR.getResponseHeader("loginurl"));
				}else if('403' == jqXHR.status){
					//TODO angular的请求返回403是弹出错误消息，这边是显示错误页面，为什么？
					window.location.hash="/f/sys_unauthorized_normal";
				}
				
				if ("true" == jqXHR.getResponseHeader("isshowmessage")) {
					_Messenger.post({
						'message' : decodeURIComponent(jqXHR.getResponseHeader("message")./*将编码后的加号处理成空格*/replace(/\+/g, '%20')),
						'type' : jqXHR.getResponseHeader("type"),
						'id' : jqXHR.status
					});
				}
				// override error handling
				if (typeof (error) === "function")
					return error(jqXHR, textStatus, errorThrown);
			};
		}
}
services.factory('TitleResponseInterceptor', [ '$q', 'Messenger','$rootScope','$location',
	           function($q, Messenger,$rootScope,$location) {
	       			return {
	       				'response' : function(response){
	       					
	   						//非钻取情况不处理
	   						var urlLocation=window.location.hash.replace(/\?.*/,"").replace(/^#\//,"");
	   						var urlResponse=response.config.url.replace(/\?.*/,"").replace(/^#\//,"");
	   						if(urlLocation!=urlResponse){
	   							return response;
	   						}
	   						
	       					var formTitle;
	       					var tabtitle=response.headers()['form-title'];
	       					if(tabtitle!=undefined&&tabtitle!=""&&tabtitle!=null){
	       						formTitle=decodeURIComponent(response.headers()['form-title']./*将编码后的加号处理成空格*/replace(/\+/g, '%20'));
		   						$rootScope.formTitle=formTitle;
	       					}
	   						
	   						if(!$rootScope.menus||$rootScope.menus.length<=0){
	   							return response;
	   						}
	   						
				    		for(var i=0;i<$rootScope.breadcrumbArray.length;i++){
				    			if($rootScope.breadcrumbArray[i].menu){
				    			  	var menuDom=$("#menu_"+$rootScope.breadcrumbArray[i].menu.$$hashKey);
				                	if(menuDom&&menuDom.hasClass("hover")){
				                		$rootScope.breadcrumbArray[i].menu.open=false;
				                		$rootScope.breadcrumbArray[i].menu.isDown=true;
				                	}
				        			$rootScope.breadcrumbArray[i].menu.active=false;
				    			}
				    		}
				    		
							/**
	   				         * 初始化与当前url匹配的menu及其父menu的open和active状态
	   				         * @param parent 父menu
	   				         * @param menus  子menus数组
	   				         */
	   				        function initMenuStatus(parent,menus,url,breadcrumbArray){
	   				        	
	   				            for (var i = 0; i < menus.length; i++) {
	   				                var menu = menus[i];
	   				                if (menu) {
	   				                    if (menu.l && menu.l ==url){
	   				                        menu.active = true;
	   				                        breadcrumbArray.push({title:menu.t,menu:menu,url:menu.l});
	   				                        return true;
	   				                    }
	   				                    if (menu.c && menu.c.length > 0) {
	   				                        var flag=initMenuStatus(menu, menu.c,url,breadcrumbArray);
	       				                    if(flag){
	       				                    	breadcrumbArray.push({title:menu.t,menu:menu,url:menu.l});
	       				                    	menu.active = true;
	       			                    	 	menu.open = true;
	       			                    	 	menu.isDown=false;
	       				                    	return true;
	       				                    }
	   				                    }
	   				                }
	   				            }
	   				            return false;
	   				        }
	   				        
	   				        //每次页面加载，为面包屑准备数据
	   						$rootScope.breadcrumbArray=[];
	   						
	   						var flag=initMenuStatus(undefined, $rootScope.menus,window.location.hash,$rootScope.breadcrumbArray);
	   						
	   						$rootScope.breadcrumbArray.reverse();
	   						
	   						if(!flag&&formTitle){
	   							$rootScope.breadcrumbArray.push({title:formTitle});
	   						}
	   						
	   						return response;
	       				}
	       			};
	       		} ]);/**
 * OAuth2 Client前端拦截器，会拦截jquery和angular的ajax请求
 * 
 * Created by Vurt on 2016/10/12.
 */
services.factory('OAuth2Interceptor', ['$q', 'Messenger', '$timeout', '$injector', function($q, Messenger, $timeout, $injector) {
	 $.ajaxPrefilter(function(opts, originalOpts, jqXHR) {
	        jqXHR.setRequestHeader("Authorization", "Bearer " + c2.subject.accessToken);
	        opts._ac = "Bearer " + c2.subject.accessToken;
	        if (opts.refreshRequest) {
	            return;
	        }
	        //移除原始的错误回调，改由我们触发
	        opts._error = opts.error;
	        opts.error = $.noop();
	        if (originalOpts.error) {
	            originalOpts._error = originalOpts.error;
	            originalOpts.error = $.noop();
	        }

	        var deferred = $.Deferred();
	        jqXHR.done(deferred.resolve);
	        jqXHR.fail(function() {
	            var args = Array.prototype.slice.call(arguments);
	            if (jqXHR.status === 401) {
	                if (opts._ac === 'Bearer ' + c2.subject.accessToken) {
	                    $.ajax({
	                        url: 'oauth2/refresh_token',
	                        async: false,
	                        dataType: 'json',
	                        refreshRequest: true,
	                        success: function(data) {
	                            c2.subject = data;
	                        },
	                        error: function() {
	                            if (opts._error)
	                                deferred.fail(opts._error);
	                            deferred.rejectWith(jqXHR, args);
	                        }
	                    });
	                }
	                var newOpts = $.extend(true, {}, originalOpts, { refreshRequest: true });
	                $.ajax(newOpts).then(deferred.resolve, deferred.reject);
	            } else {
	                if (opts._error)
	                    deferred.fail(opts._error);
	                deferred.rejectWith(jqXHR, args);
	            }
	        });
	        return deferred.promise(jqXHR);
	    });
	    return {
	        request: function(config) {
	            config.headers.Authorization = 'Bearer ' + c2.subject.accessToken;
	            return config;
	        },
	        responseError: function(response) {
	            if (response.status === 401) {
	                var retry = angular.isDefined(c2.subject.accessToken); //at为空就没必要重试了
	                if (retry) {
	                    if (response.config.headers.Authorization === 'Bearer ' + c2.subject.accessToken) {
	                        //只有请求的access token与当前access token一致的情况下才刷refresh token
	                        //因为浏览器js是单线程执行，这样可以确保一次只有refresh token刷新的请求触发
	                        $.ajax({
	                            url: 'oauth2/refresh_token',
	                            async: false /*同步执行，非常重要*/ ,
	                            dataType: 'json',
	                            refreshRequest: true,
	                            success: function(data) {
	                                c2.subject = data;
	                            },
	                            error: function() {
	                                //重新请求token失败，清空at
	                                c2.subject.accessToken = undefined;
	                            }
	                        });
	                    }
	                    response.config.headers.Authorization = 'Bearer ' + c2.subject.accessToken;
	                    return $injector.get('$http')(response.config); /*重试*/
	                }
	            }
	            return $q.reject(response);
	        }
	    };
}]);var directives = angular.module('app.directives', []);
/**
 * Created by Vurt on 14-3-26.
 */
directives.directive('c2Navbar', function () {
    return {
        templateUrl: 'template/navbar.html',
        replace: true
    };
});

directives.directive('c2Sidebar', ['ResInjector',function (injector) {
    return {
        templateUrl: 'template/sidebar.html',
        controller: function($scope,$element,$attrs){
          //没有ace-elements.min.js sidebar不出滚动条
  		  injector.addJs("assets/ace-elements.min.js","assets/ace-extra.min.js",function(){
  			ace.settings.check('sidebar', 'collapsed');
          });
        }
    };
}]);

directives.directive('c2CssInjectorPoint',function(){
	return {
		scope:true,
		replace:true,
		template:"<link type='text/css' ng-repeat='stylesheet in $$injectedStylesheets | filter: {point:injectorFilter}' ng-href='{{stylesheet.href}}' rel='stylesheet' />",
		controller:function($scope,$element,$attrs){
			$scope.injectorFilter=$attrs.c2CssInjectorPoint;
		}
	}
});

directives.directive('c2LoadFinished',['$timeout','$http',function($timeout,$http){
	return {
		scope:{
			onFinished:'&',
			$dsLoadPromise:'='
		},
		link:function(scope,element,attr){
			if(angular.isDefined(scope.$parent.$dsLoadPromise)){
				scope.$parent.$dsLoadPromise.then(function(){
					$timeout(scope.onFinished,0);
				});
			}else{
				$timeout(scope.onFinished,0);
			}
		}
	};
}]);

directives.directive('draggable',['$ocLazyLoad',function($ocLazyLoad){
	return {
		link:function(scope,element,attr){
			var opts={};
			if(angular.isDefined(attr.dragHandle)){
				opts.handle=attr.dragHandle;
				element.find(opts.handle).css("cursor", "move");
			}
			$ocLazyLoad.load(["assets/jquery-ui/ui/plugin.js",
			                  "assets/jquery-ui/ui/safe-active-element.js",
			                  "assets/jquery-ui/ui/safe-blur.js",
			                  "assets/jquery-ui/ui/widgets/mouse.js",
			                  "assets/jquery-ui/ui/widgets/draggable.js"]).then(function(){
				element.draggable(opts);
			});
		}
	};
}]);

directives.directive('fixedHeightContainer',['$timeout',function($timeout){
	return {
		restrict:'C',
		compile:function(element,attr){
			var containerDom=element.parents('.fixed-height-container')[0];
			if(angular.isUndefined(containerDom)){
				//是最外层的定高容器，那么它的高度跟page-content的可用区域一样高
				var page_content=element.parents('.page-content');
				if(page_content.length == 0){
					console.log('只有.page-content元素外部不需要fixed-height-container');
					return;
				}
				var padding_top = page_content.css('padding-top').replace('px','');//如果是固定面包屑，那么这里还有padding-top
					
				//浏览器可用高度
				var viewHeight = document.documentElement.clientHeight;
					
				//页面内容可用高度
				var height = viewHeight - page_content.offset().top - padding_top;
				
				if(element.parents('.tab-pane').length>0){
					height -= 40;//减掉Tabs导航条的高度
					height -= 4;//如果在tabs导航下要有4个像素的高度修正，不然页面会出现全局的滚动条
				}
				
				if($('.footer').length>0){
					//如果内部有footer，还需要去掉footer高度
					height -= $('.footer')[0].clientHeight;
				}
					
				element.css('height',height+'px');
			}else{
				var parent=$(containerDom);
				var height=parent.height()-(element.offset().top - parent.offset().top);
				element.css('height',height+'px');
			}
			return function(){/*link do nothing*/};
		}
	};
}]);

directives.directive('debounce', ['debounce', '$parse', function (debounce, $parse) {
    return {
      require: 'ngModel',
      priority: 999,
      link: function ($scope, $element, $attrs, ngModelController) {
        var debounceDuration = $parse($attrs.debounce)($scope);
        var immediate = !!$parse($attrs.immediate)($scope);
        var debouncedValue, pass;
        var prevRender = ngModelController.$render.bind(ngModelController);
        var commitSoon = debounce(function (viewValue) {
          pass = true;
          ngModelController.$setViewValue(viewValue);
          pass = false;
        }, parseInt(debounceDuration, 10), immediate);
        ngModelController.$render = function () {
          prevRender();
          commitSoon.cancel();
          //we must be first parser for this to work properly,
          //so we have priority 999 so that we unshift into parsers last
          debouncedValue = this.$viewValue;
        };
        ngModelController.$parsers.unshift(function (value) {
          if (pass) {
            debouncedValue = value;
            return value;
          } else {
            commitSoon(ngModelController.$viewValue);
            return debouncedValue;
          }
        });
      }
    };
  }]);

directives.directive('c2Pagingbar', function () {
    return {
        templateUrl: 'template/pagingbar.html',
        require:"?^c2Jqgrid",
        replace: true,
        link:function($scope, $element, $attrs, ngModelController){
        	if(angular.isUndefined(pagination))return ;
			var maxSize = scope.pageLength;
			scope.pages = [];
			scope.pages.push({text:$sce.trustAsHtml('<i class="fa fa-angle-double-left"></i>'),pageNum:1,prev:true,disabled:pagination.pageIndex==1});
			scope.pages.push({text:$sce.trustAsHtml('<i class="fa fa-angle-left"></i>'),pageNum:pagination.pageIndex==1?1:pagination.pageIndex-1,prev:true,disabled:pagination.pageIndex==1});
			if(pagination.pageIndex>maxSize+2){
				scope.pages.push({text:"...",pageNum:pagination.pageIndex-maxSize-1,active:false});
			}else{
				if(pagination.pageIndex==maxSize+2)scope.pages.push({text:"1",pageNum:1,active:false});
			}
			var start = pagination.pageIndex-maxSize;
			var end = pagination.pageIndex+maxSize;
			if(pagination.pageIndex-maxSize<2)end=2*maxSize+2;
			if(pagination.totalPage-pagination.pageIndex<maxSize+2)start = start+pagination.totalPage-pagination.pageIndex-maxSize-1;
			for(var pageNum=start;pageNum<=end;pageNum++){
				if(pageNum>0&&pageNum<=pagination.totalPage){
					var page = {pageNum:pageNum,active:pageNum==pagination.pageIndex,text:pageNum+""};
					scope.pages.push(page);
				}
			}
			if(pagination.pageIndex<=pagination.totalPage-maxSize-2){
				scope.pages.push({text:"...",pageNum:pagination.pageIndex+maxSize+1,active:false});
			}else{
				if(pagination.pageIndex==pagination.totalPage-maxSize-1)scope.pages.push({text:pagination.totalPage+"",pageNum:pagination.totalPage,active:false});
			}
			scope.pages.push({text:$sce.trustAsHtml('<i class="fa fa-angle-right"></i>'),pageNum:pagination.pageIndex==pagination.totalPage?pagination.totalPage:pagination.pageIndex+1,next:true,disabled:pagination.pageIndex==pagination.totalPage});
			scope.pages.push({text:$sce.trustAsHtml('<i class="fa fa-angle-double-right"></i>'),pageNum:pagination.totalPage,next:true,disabled:pagination.pageIndex==pagination.totalPage});
//			console.log(scope.pages);
        }
        
    };
});

directives.directive('c2HorizontalNavMenu', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        scope: {
            items: '=?',
            onSearch:'&',
            searchEnable:'='
        },
        restrict: 'A',
        replace: true,
        templateUrl: "template/horizontal-nav-menu.html",
        compile: function (element, attrs) {
            return function (scope, element, attrs, ctrl) {
            	$timeout(function(){
            		var searchBtn=element.find('.nav-search-btn');
                	var searchText=element.find('.nav-search-text');
                	var searchContainer = element.find(".search-result-container");
                	
                	searchBtn.on('click', function(e) {
                		e.preventDefault();
                		this.blur();
                		searchText.animate({width: 'toggle'},0).focus();
                	});
                	
                	searchText.on("focus",function(){
                		searchContainer.show();
                	});
                	searchContainer.on("mouseleave",function(){
                		searchText.blur();
                		searchContainer.hide();
                	});
                	
                	scope.goSearchPage = function(categoryType,queryStr){
                		searchContainer.hide();
                		location.href="#/f/search?category="+categoryType+"&query="+queryStr;
                	}
                	scope.goResultPage = function(content){
                		searchContainer.hide();
                		location.href=content.url;
                	}
                	
                	scope.$watch('search.queryStr',function(nv){
                		if(angular.isDefined(nv)){
                			scope.search.processing=true;
                			scope.onSearch({queryStr:nv,searchObj:scope.search,element:'.nav-search-text'});
                		}
                	});
            	},0);
            	
            };
        },
        controller: function ($scope, $element, $attrs) {
        	$scope.search={
        			queryStr:'',
        			processing:false
        	};
        	
            function deleteElementInArray(array, element) {
                $.each(array, function (i) {
                    if (array[i] === element) {
                        array.splice(i, 1);
                        return false;
                    }
                });
            };

            function col(sections) {
                return sections >= 3 ? 3 : sections;
            };
            
            $scope.$watch('items', function (nv, ov) {
                if (angular.isDefined(nv)) {
                    //已根据数据重组过结构的
                    if (nv.$recombined) {
                        //只刷新一下选中状态
                    } else {
                        angular.forEach(nv, function (menu) {
                            //第一级菜单
                            if (menu.c && menu.c.length > 0) {
                                menu.$hasSection = false;
                                //有子菜单
                                angular.forEach(menu.c, function (submenu) {
                                    //如果二级菜单有子菜单，那么作为section来使用
                                    submenu.$isSection = angular.isDefined(submenu.c) && submenu.c.length > 0;
                                    //hasSection用于记录一级菜单是否完全没有section
                                    menu.$hasSection = menu.$hasSection || submenu.$isSection;
                                });

                                if (menu.$hasSection) {
                                    var otherSection = {t: "其他", c: []};
                                    angular.forEach(menu.c, function (submenu) {
                                        //二级菜单在有section的一级菜单下，且该二级菜单不是section，那么把它们统一放到"其他"section中
                                        if (!submenu.$isSection) {
                                            otherSection.c.push(submenu);
                                        }
                                    });
                                    if (otherSection.c.length > 0) {
                                        angular.forEach(otherSection.c, function (target) {
                                            deleteElementInArray(menu.c, target);
                                        });
                                        menu.c.push(otherSection);
                                    }
                                }
                                menu.$col = menu.$hasSection ? col(menu.c.length) : 1;
                            }
                        });
                        nv.$recombined = true;
                    }
                }
            });
        }
    };
}]);

//c2Menu 右侧菜单递归
directives.directive('c2Menu', ["$compile",function ($compile) {
    return {
    	scope:{
			currMenus:'=c2Menu'
		},
		restrict:'EA',		
        templateUrl: 'template/menu.html',
        controller:function($scope,$rootScope){
        	
        	//直接加载模块时的submenu菜单style状态
        	$scope.getLoadStyle=function(menu){
        		if(menu.loadOpen){
        			return {display:'block'};
        		}else{
        			return undefined;
        		}
        	}
        	
        	//菜单点击事件
        	$scope.onMenuClick = function (menu){

            	//控制展开图示up和down状态
            	var ctlMenu=$("#menu_"+menu.$$hashKey);
            	if(ctlMenu&&!ctlMenu.hasClass("hover")){
            		menu.isDown=!menu.isDown;
                	//展开时还原兄弟菜单状态
                	if(menu.isDown==false){
                		var brotherMenu;
                		if(menu.parentMenu){
                			brotherMenu=menu.parentMenu.c;
                		}else{
                			brotherMenu=$rootScope.menus;
                		}
                		
                		for(var i = 0; i < brotherMenu.length; i++){
                			if(brotherMenu[i].$$hashKey==menu.$$hashKey) continue;
                			var brotherJqDom=$("#menu_"+brotherMenu[i].$$hashKey);
                			if(brotherJqDom.find("li.active").length>0) continue;
                			if(!brotherJqDom.hasClass("open")&&brotherJqDom.children("ul").css("display")=="block") continue;
                			brotherMenu[i].isDown=true;
                		}
                	}
            	}
            }
        },
        compile: function (el) {
            var contents = el.contents().remove();
            var compiledContents ;
            return function(scope,ele){
            	 if(!compiledContents) {
                     compiledContents = $compile(contents);
                 }
                compiledContents(scope, function(clone, scope) {
                	ele.append(clone); 
            });
            };
        }
    };
}]);

directives.directive('permContainer',['$timeout','$http',function($timeout,$http){
	return {
		link:function(scope,element,attr){
			//调用jQuery对象扩展方法，权限验证
			element.checkPermission();
			//tab激活后验证权限
			scope.$on("tabActived",function(event, tabId){
				angular.element("#"+tabId).checkPermission();
			});
		}
	};
}]);

//表格单元格自定义列下拉框超出表格边界样式处理
directives.directive('c2CellDropdown', function () {
	return {
		restrict: 'C',
		controller:function($scope,$element,$attrs){
			$element.on("show.bs.dropdown",function(){
				$element.parents("td[role='gridcell']").css("overflow","visible");
				$element.parents(".ui-jqgrid-bdiv").css("overflow","visible");
			});
			$element.on("hidden.bs.dropdown",function(){
				$element.parents("td[role='gridcell']").css("overflow","hidden");
				$element.parents(".ui-jqgrid-bdiv").css("overflow","auto");
			});
		}
	};
});

//动态表单指令
directives.directive('c2DynamicWiget', ['$compile',function ($compile) {
    return{
    	scope:{config:"=",items:"=?",bindData:"=?"},
    	templateUrl:"template/c2DynamicWigetDirectiveTemplate.html",
    	controller:function($scope,$element,$attrs,$transclude){
    		this.config = {
    			span:6,
    			type:"input",
    			lable:"LableName",
    			lableWidth:100
    		}
    		if(!$scope.bindData)$scope.bindData = {};
    		$.extend(this.config,$scope.config);
    	},
    	link:function(scope,element,attrs,controller){
    		var wigets = [];
    		angular.forEach(scope.items,function(item){
    			var defaultItem = {span:controller.config.span,lableWidth:controller.config.lableWidth};
    			var wiget = $.extend(defaultItem,item);
    			wiget.labelStyle = {width:wiget.lableWidth+"px"};
    			wiget.wigetStyle = {"marginLeft":wiget.lableWidth+10+"px"};
    			switch (item.type) {
				case "radio":
					wiget.wigetStyle.paddingTop = "5px";
					break;
				case "checkbox":
					wiget.wigetStyle.paddingTop = "5px";
					break;	
				default:
					break;
				}
    			wigets.push(wiget);
    		});
    		console.log(wigets);
    		scope.wigets = wigets;
    		scope.$watch("bindData",function(v){
    			for(k in v){
    				scope.wigets.forEach(function(w){
        				if(w.name === k){
        					if(w.type === "checkbox"){
        						var checkValue = scope.bindData[k];
        						if(angular.isArray(checkValue)){
        							angular.forEach(checkValue,function(c){
        								angular.forEach(w.options,function(o){
        									if(c === o.value)o.checked=true;
        								})
        							});
        						}else{
        							console.error("checkbox类型的值不是数组！");
        						}
        					}else{
        						w.data = scope.bindData[k];
        					}
        				}
        			});
    			}
    		});
    		scope.$watch("wigets",function(newValue){
    			angular.forEach(newValue,function(v){
    				if(v.type === "checkbox"){
    					var checkValue = [];
    					angular.forEach(v.options,function(o){
    						if(o.checked)checkValue.push(o.value);
    					})
    					scope.bindData[v.name] = checkValue;
    				}else{
    					scope.bindData[v.name] = v.data;
    				}
    			})
    		},true);
    	}
    }
}]);var app = angular.module('app', ['ngRoute', 'app.services', 'app.directives','ngSanitize','ngFileUpload']);

app.config(['$routeProvider', '$httpProvider', '$controllerProvider','$compileProvider','$ocLazyLoadProvider', function ($routeProvider, $httpProvider, $controllerProvider,$compileProvider,$ocLazyLoadProvider) {
    app.registerCtrl = $controllerProvider.register;
    $httpProvider.defaults.headers.common['Show-In-UI-View'] = 'true';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';//为ajax请求添加header标记
//    $httpProvider.defaults.withCredentials = true;//跨域请求带上cookie
    
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript):/);
    
    $httpProvider.interceptors.push('ErrorResponseInterceptor');
    $httpProvider.interceptors.push('TitleResponseInterceptor');
    
//    if(c2.subject && c2.subject.accessToken){
//		$httpProvider.interceptors.push('OAuth2Interceptor');
//    }
    
    $ocLazyLoadProvider.config({
        debug: false,
        events: false,
        modules: [
            {
                name: 'ui.grid',
                files: ['assets/ui-grid/ui-grid.min.js','assets/ui-grid/ui-grid.min.css']
            },
            {
            	name:'ui.select',
            	files:['ext/widget/select/lib/select.min.css','ext/widget/select/lib/select.min.js']
            }
        ]
    })
}]);
app.config(['$routeProvider', '$httpProvider', '$controllerProvider', function ($routeProvider, $httpProvider, $controllerProvider) {
    $routeProvider.when('/',{controller:function($scope,$rootScope,$routeParams,$location){
    	for(var i=0;i<$rootScope.breadcrumbArray.length;i++){
			if($rootScope.breadcrumbArray[i].menu){
				$rootScope.breadcrumbArray[i].menu.open=false;
    			$rootScope.breadcrumbArray[i].menu.active=false;
			}
		}
		$rootScope.breadcrumbArray=[];
	},templateUrl:applicationConfig.homeUrl})
        .when('/f/:form', {templateUrl: function ($routeParams) {
            var sn = $routeParams.form;
            return 'f/' + sn;
        }}).when('/:url*', {templateUrl: function ($routeParams) {
        	var url=$routeParams.url;
    		var queryStrCount=0;
    		angular.forEach($routeParams,function(value,key){
    			if(key!="url"&&angular.isDefined(value)){
    				queryStrCount==0?url+="?":url+="&";
    				queryStrCount++;
    				url+=key+"="+value;
    			}
    		});
            return url;
        }});
}]);

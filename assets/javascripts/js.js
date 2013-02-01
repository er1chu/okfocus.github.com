/* OKSHADOW */
(function(b){b.okshadow=function(c,g){var a=this;a.$el=b(c);a.el=c;a.$el.data("okshadow",a);a.init=function(){a.options=b.extend({},b.okshadow.options,g);a.build()};a.build=function(){a.start()};a.clamp=function(a,b,c){return Math.max(b,Math.min(c,a))};a.setoption=function(e,d){if(typeof e==="string"){if(a.options[e]=d,e==="color")return a.update()}else a.options=b.extend(a.options,e);a.mousemove(a)};a.start=function(){b(window).bind({mousemove:a.mousemove});a.mousemove({pageX:b(window).width()/2,
pageY:b(window).height()/2});if(a.options.transparent)a.el.style.color="transparent"};a.mousemove=function(b){var d=a.$el.offset(),c=b.pageX,b=b.pageY,f=d.top+a.$el.height()/2,d=d.left+a.$el.width()/2-c;f-=b;sx=d/a.options.xFactor;sy=f/a.options.yFactor;distance=Math.sqrt(d*d+f*f);fuzz=distance/a.options.fuzz+a.options.fuzzMin;a.options.xMax!==null&&(sx=a.clamp(sx,-1*a.options.xMax,a.options.xMax));a.options.yMax!==null&&(sy=a.clamp(sy,-1*a.options.yMax,a.options.yMax));a.options.fuzzMax!==null&&
(fuzz=a.clamp(fuzz,a.options.fuzzMin,a.options.fuzzMax));sx+=a.options.xOffset;sy+=a.options.yOffset;a.pageX=c;a.pageY=b;a.sx=sx;a.sy=sy;a.fuzz=fuzz;a.update()};a.update=function(){a.options.textShadow?a.$el.css("text-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color):a.$el.css("box-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color)};a.init()};b.okshadow.options={color:"#888",fuzz:40,fuzzMin:0,fuzzMax:null,xOffset:0,xFactor:30,xMax:null,yOffset:0,yFactor:30,yMax:null,textShadow:false,transparent:false};
b.fn.okshadow=function(c){return this.each(function(){new b.okshadow(this,c)})}})(jQuery);
/* jquery.transition.js */
(function(a){function t(){setTimeout(x,0);return m=a.now()}function x(){m=void 0}var r={},k,q,y=/^(?:toggle|show|hide)$/,z=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,u,m,v=document.createElement("div").style,w;a.support.transition="MozTransition"in v?"MozTransition":"WebkitTransition"in v?"WebkitTransition":!1;a.cssNumber.color=a.cssNumber.backgroundColor=!0;w={linear:"linear",swing:"ease-out",bounce:"cubic-bezier(0,.35,.5,1.3)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeInCubic:"cubic-bezier(.55,.055,.675,.19)", easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)", easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)"};a.fn.extend({animate:function(d,e,g,b){function f(){!1===i.queue&&a._mark(this);var c=a.extend({},i),f=1===this.nodeType,e=f&&a(this).is(":hidden"),b,h,g,j,n;n=a.cssProps;var m=!c.step&& a.support.transition,s=[],o,p;c.animatedProperties={};c.transition={};for(g in d)if(b=a.camelCase(g),g!==b&&(d[b]=d[g],delete d[g]),(h=a.cssHooks[b])&&"expand"in h)for(g in j=h.expand(d[b]),delete d[b],j)g in d||(d[g]=j[g]);for(b in d){h=d[b];a.isArray(h)?(j=c.animatedProperties[b]=h[1],h=d[b]=h[0]):j=c.animatedProperties[b]=c.specialEasing&&c.specialEasing[b]||c.easing||"swing";if(j=m&&f&&0<c.duration&&b.indexOf("scroll")&&w[j])o=n[b]||b,p=o.replace(/([A-Z])/g,"-$1").toLowerCase(),j=p+" "+c.duration+ "ms "+j,c.transition[b]={lower:p,real:o},s.push(j);if("hide"===h&&e||"show"===h&&!e)return c.complete.call(this);if(f&&("height"===b||"width"===b))if(c.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===a.css(this,"display")&&"none"===a.css(this,"float")){if(!(h=!a.support.inlineBlockNeedsLayout)){h=this.nodeName;if(!r[h]){j=document.body;o=a("<"+h+">").appendTo(j);p=o.css("display");o.remove();if("none"===p||""===p){k||(k=document.createElement("iframe"),k.frameBorder= k.width=k.height=0);j.appendChild(k);if(!q||!k.createElement)q=(k.contentWindow||k.contentDocument).document,q.write((a.support.boxModel?"<!doctype html>":"")+"<html><body>"),q.close();o=q.createElement(h);q.body.appendChild(o);p=a.css(o,"display");j.removeChild(k)}r[h]=p}h="inline"===r[h]}h?this.style.display="inline-block":this.style.zoom=1}}null!=c.overflow&&(this.style.overflow="hidden");for(g in d)if(f=new a.fx(this,c,g),h=d[g],y.test(h))if(b=a._data(this,"toggle"+g)||("toggle"===h?e?"show": "hide":0))a._data(this,"toggle"+g,"show"===b?"hide":"show"),f[b]();else f[h]();else b=z.exec(h),n=f.cur(),b?(h=parseFloat(b[2]),j=b[3]||(a.cssNumber[g]?"":"px"),"px"!==j&&(a.style(this,g,(h||1)+j),n*=(h||1)/f.cur(),a.style(this,g,n+j)),b[1]&&(h=("-="===b[1]?-1:1)*h+n),f.custom(n,h,j)):f.custom(n,h,"");if(m&&s.length)for(g in j=this.style[m],e=window.getComputedStyle(this),this.style[m]=s.join()+(j&&j.indexOf("none")?","+j:""),c.transition)e[g],a.style.apply(null,c.transition[g].styleToSet);return!0} var i=a.speed(e,g,b);if(a.isEmptyObject(d))return this.each(i.complete,[!1]);d=a.extend({},d);return!1===i.queue?this.each(f):this.queue(i.queue,f)},stop:function(d,e,g){"string"!==typeof d&&(g=e,e=d,d=void 0);e&&!1!==d&&this.queue(d||"fx",[]);return this.each(function(){var b,f=false,e=a.timers,c=a._data(this),l=a.support.transition;g||a._unmark(true,this);if(d==null)for(b in c){if(c[b]&&c[b].stop&&b.indexOf(".run")===b.length-4){var k=c[b];a.removeData(this,b,true);k.stop(g)}}else if(c[b=d+".run"]&& c[b].stop){c=c[b];a.removeData(this,b,true);c.stop(g)}for(b=e.length;b--;)if(e[b].elem===this&&(d==null||e[b].queue===d)){if(g||l)e[b](g);g||e[b].saveState();f=true;e.splice(b,1)}(!g||!f)&&a.dequeue(this,d)})}});a.extend(a.fx.prototype,{cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var d,e=a.css(this.elem,this.prop);return isNaN(d=parseFloat(e))?!e||"auto"===e?0:e:d},custom:function(d,e,g){function b(a){return f.step(a)} var f=this,i=a.fx,c=f.options.transition,l=this.prop;this.startTime=m||t();this.end=e;this.now=this.start=d;this.pos=this.state=0;this.unit=g||this.unit||(a.cssNumber[l]?"":"px");b.queue=this.options.queue;b.elem=this.elem;b.saveState=function(){void 0===a._data(f.elem,"fxshow"+f.prop)&&(f.options.hide?a._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&a._data(f.elem,"fxshow"+f.prop,f.end))};(b.transition=c[l])?(a.timers.push(b),"transform"!=l&&(f.elem.style[c[l].real]=d+f.unit),a.fx.step[l]&& (e=Math.max(0,e)),c[l].styleToSet=[f.elem,l,e+f.unit],c[l].timeout=setTimeout(function(){a.timers.splice(a.timers.indexOf(b),1);f.step(!0)},f.options.duration+30)):b()&&a.timers.push(b)&&!u&&(u=setInterval(i.tick,i.interval))},step:function(d){var e,g=m||t(),b=!0,f=this.elem,i=this.options,c=i.transition[this.prop],l=g>=i.duration+this.startTime,k=a.support.transition;if(c||d||l){c?(clearTimeout(c.timeout),!d&&!l&&(this.elem.style[c.real]=a.css(this.elem,c.real))):(this.now=this.end,this.pos=this.state= 1,this.update());i.animatedProperties[this.prop]=!0;for(e in i.animatedProperties)!0!==i.animatedProperties[e]&&(b=!1);if(b){null!=i.overflow&&!a.support.shrinkWrapBlocks&&a.each(["","X","Y"],function(a,b){f.style["overflow"+b]=i.overflow[a]});i.hide&&a(f).hide();if(c){c=","+f.style[k];for(e in i.transition)c=c.split(i.transition[e].lower).join("_");c=c.replace(/, ?_[^,]*/g,"").substr(1);f.style[k]=c||"none";!c&&(f.style[k]=c)}if(i.hide||i.show)for(e in i.animatedProperties)(d||l)&&a.style(f,e,i.orig[e]), a.removeData(f,"fxshow"+e,!0),a.removeData(f,"toggle"+e,!0);if((e=i.complete)&&(d||l))i.complete=!1,e.call(f)}return!1}Infinity==i.duration?this.now=g:(d=g-this.startTime,this.state=d/i.duration,this.pos=a.easing[i.animatedProperties[this.prop]](this.state,d,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}});a.extend(a.fx,{tick:function(){for(var d,e=a.timers,g=0;g<e.length;g++)d=e[g],!d.transition&&!d()&&e[g]===d&&e.splice(g--,1);e.length||a.fx.stop()}})})(jQuery);


/*
 * OKGallery by OKFocus - http://okfoc.us - @okfocus
 * Version 1.0
 * Licensed under MIT.
 *
 */

(function($){
	"use strict";
	var hasCssTransitions;

	$.okgallery = function(el, options){
		var base = this;
		base.$el = $(el);
		base.el = el;
		base.$el.data("okgallery", base);
		base.$children = base.$el.children("div");

		var current = -1;
		
		base.init = function(){
			base.options = $.extend({}, $.okgallery.options, options);
			base.build();
		};
		
		base.build = function(){
			if (base.options.width != null &&
					base.options.height != null &&
					base.options.height > 0) {
				base.options.aspect = base.options.width / base.options.height;
			}
			base.$children.css("opacity", 0);

			if (base.options.applyTransitionBeforeStart) {
				base.buildTransitions();
			} else {
				// defer this so the wrapper does not slide open
				setTimeout(base.buildTransitions);
			}

			base.resize();

			base.buildLoader();
			base.buildCss();
			base.buildDots();
			base.bindArrows();

			base.$el.bind("click", base.clickNext);
			$(window).resize(base.debounceResize);
		};

		base.buildLoader = function(){
			base.loader = new Loader (base);
		};

		base.buildCss = function(){
			base.$el.css({
				'width': "100%",
				'position': 'relative',
				'overflow': 'hidden',
				'cursor': 'pointer',
				'WebkitUserSelect': 'none',
				'MozUserSelect': 'none',
				'MsUserSelect': 'none',
				'OUserSelect': 'none',
				'userSelect': 'none'
			});

			base.$children.css({
				'position': "absolute",
				'top': 0,
				'left': 0,
				'width': "100%",
				'height': "100%",
				'backgroundSize': base.options.backgroundSize,
				'backgroundPosition': base.options.backgroundPosition,
				'backgroundRepeat': base.options.backgroundRepeat,
				'WebkitUserSelect': 'none',
				'MozUserSelect': 'none',
				'MsUserSelect': 'none',
				'OUserSelect': 'none',
				'userSelect': 'none'
			});
			
      if (base.options.aspect == "fullscreen") {
  			base.$el.css({
          'height': "100%",
          'position': "fixed",
          'top': "0",
          'left': "0"
        });
        $("html,body").css({
          'width': '100%',
          'height': '100%',
          'margin': 0,
          'overflow-x': 'hidden'
        });
      }
		}
		
		base.buildTransitions = function(){
			// eased container resize -- "width, height, top, left"
			base.addTransition(base.$el, "width, height, top, left", base.options.resizeTime);
			
			// eased slide transition -- "opacity"
			base.addTransition(base.$children, "opacity", base.options.fadeTime);
		};

		base.addTransition = function($els, prop, ms){
			if (! hasCssTransitions) return;
			var transition = {};
			transition[hasCssTransitions + "Property"] = prop;
			transition[hasCssTransitions + "Duration"] = (ms/1000) + "s";
			$els.css(transition);
		};
		
		base.clearTransitions = function($els){
			if (! hasCssTransitions) return;
			var transition = {};
			transition[hasCssTransitions + "Property"] = "all";
			transition[hasCssTransitions + "Duration"] = "0s";
			$els.css(transition);
		};
		
		base.buildDots = function(){
			if (! base.options.dots) return;
			var dotWidth = px(base.options.dotWidth);
			var dotMargin = px(base.options.dotMargin);
			var dotColor = base.options.dotColor;
			var dotShadow = "0 0 ";
			dotShadow += px(base.options.dotShadowWidth);
			dotShadow += " " + base.options.dotShadowColor;

			base.$dotParent = $("<div/>").css({
				"width": "100%",
				"paddingTop": base.options.dotContainerPadding,
				"paddingBottom": base.options.dotContainerPadding,
				"textAlign": "center",
				'WebkitUserSelect': 'none',
				'MozUserSelect': 'none',
				'MsUserSelect': 'none',
				'OUserSelect': 'none',
				'userSelect': 'none'
			});
			
			base.$children.each(function(index){
				var $dot = $("<a/>");
				$dot.data("index", index)
				$dot.click(base.clickDot);
				
				if (base.options.dotClass) {
					$dot.addClass(base.options.dotClass);
				} else {
				  $dot.css({
				  	"cursor": "pointer",
				  	"display": "inline-block",
				  	"margin": dotMargin,
						"backgroundColor": dotColor,
						"width": dotWidth,
						"height": dotWidth,
						"borderRadius": dotWidth,
						"WebkitBorderRadius": dotWidth,
						"MozBorderRadius": dotWidth,
						"MsBorderRadius": dotWidth,
						"OBorderRadius": dotWidth,
						"boxShadow": dotShadow,
						"WebkitBoxShadow": dotShadow,
						"MozBoxShadow": dotShadow,
						"MsBoxShadow": dotShadow,
						"OBoxShadow": dotShadow
					});
				}
				base.$dotParent.append($dot);
			});
			
			if (base.options.dotsInside) {
				base.$el.append(base.$dotParent);
				base.$dotParent.css({
					'position': 'absolute',
					'bottom': 0,
					'left': 0,
					'zIndex': 1
				});
			} else {
				base.$dotParent.insertAfter(base.$el);
			}
			
			base.$dots = base.$dotParent.children();
		};
		
		base.bindArrows = function(){
			if (base.options.prevSelector != null) {
				$(base.options.prevSelector).click(base.clickPrev);
			}
			if (base.options.nextSelector != null) {
				$(base.options.nextSelector).click(base.clickNext);
			}
			if (base.options.useKeyboard) {
				$(window).keydown(function(e){
					if (e.keyCode == 37) {
						base.prev();
					} else if (e.keyCode == 39) {
						base.next();
					}
				});
			}
		};
				
		base.start = function(){
			if (base.options.onLoad) base.options.onLoad();
			base.next();
		};
		
		base.pause = function(){
			base.options.autoplay = false;
			clearTimeout(base.autoplayTimeout);
		};
		
		base.unpause = function(){
			base.options.autoplay = true;
			base.next();
		};

		base.rand = function(n,a) {
			var m = n;
			while (m == n) {
				m = Math.floor(Math.random() * a);
			}
			return m;
		};
		
		base.clickDot = function(e){
			e.preventDefault();
			e.stopPropagation();
			var index = $(this).data("index");
			base.show(index);
			return false;
		};
		
		base.clickPrev = function(){
			if (base.options.clickDisablesAutoplay) {
				base.pause();
			}
			if (base.options.clickDisablesRandom) {
				base.options.random = false;
			}
			base.prev();
		};
		
		base.clickNext = function(){
			if (base.options.clickDisablesAutoplay) {
				base.options.autoplay = false;
				clearTimeout(base.autoplayTimeout);
			}
			if (base.options.clickDisablesRandom) {
				base.options.random = false;
			}
			base.next();
		};
		
		base.next = function(){
			if (base.options.random) {
				base.show( base.rand(current, base.$children.length) );
			} else {
				base.show( current + 1 );
			}
		};
		
		base.prev = function(){
			base.show( current - 1 );
		};
		
		base.show = function(index){
			index = (index + base.$children.length) % base.$children.length;

			var $oldChild = base.$children.eq(current);
			var $oldDot = base.$dots.eq(current);
			var $newChild = base.$children.eq(index);
			var $newDot = base.$dots.eq(index);
			
			if (current > 0) {
				if (base.options.onFadeOut) {
					base.options.onFadeOut(base, $oldChild, current);
				} else if (hasCssTransitions) {
					$oldChild.css("opacity", 0);
				} else {
					$oldChild.stop().animate({"opacity": 0}, base.options.fadeTime);
				}
			}

			if (base.options.onFadeIn) {
				base.options.onFadeIn(base, $newChild, current);
			} else if (hasCssTransitions) {
				$newChild.css("opacity", 1);
			} else {
				$newChild.stop().animate({"opacity": 1}, base.options.fadeTime);
			}

			if (base.options.autoplay) {
				if (base.autoplayTimeout) clearTimeout(base.autoplayTimeout);
				base.autoplayTimeout = setTimeout(base.next, base.options.fadeTime + base.options.delayTime);
			}
			
			if (base.options.dots) {
				if (base.options.dotActiveClass) {
					$oldDot.removeClass(base.options.dotActiveClass);
					$newDot.addClass(base.options.dotActiveClass);
				} else {
					$oldDot.css("background-color", base.options.dotColor);
					$newDot.css("background-color", base.options.dotActiveColor);
				}
			}
			current = index;
		};
		
		base.autoplayTimeout = null;
		base.debounceTimeout = null;
		base.debounceResize = function(){
			if (base.debounceTimeout) clearTimeout(base.debounceTimeout);
			base.debounceTimeout = setTimeout(base.resize, 100);
		};

		base.resize = function(){
      if (base.options.aspect == "fullscreen") return;
  		base.el.style.height = Math.floor(base.$el.width() / base.options.aspect) + "px";
		};
		
		base.init();
	};

	hasCssTransitions = (function(){
		var div = document.createElement("div");
		var pre = ["msTransition", "OTransition", "WebkitTransition",
				"MozTransition", "transition"];
		var ext;
		for (var p in pre) {
			if (div.style[ pre[p] ] !== undefined) {
				ext = pre[p];
				break;
			}
		}
		return ext;
	})();

	function px (n) {
		if (n.toString().indexOf("px") == -1)
			return n + "px";
		return n;
	}
	
	function Loader (parent) {
		var base = this;
		base.$loader = $("<div/>");
		base.$pinwheel = $("<div/>");
		
		var images = [];
		var imageCount = 0;
		var loadCount = 0;
		var loaded = false;
		var timeout = null;

		this.init = function(){
			base.build();
			parent.$children.each(base.load);
			imageCount = Math.floor(images.length * 2/3);
			if (!imageCount) {
				loadCallback();
			} else {
				base.show();
			}
		};
		
		this.build = function(){
			base.$loader.css({
				"position": "absolute",
				"display": "none",
				"left": "0",
				"top": "0",
				"width": "100%",
				"height": "100%",
				"background": "url(" + parent.options.loaderImage + ") no-repeat center center"
			});
			parent.$el.append(base.$loader);
		};
		
		this.load = function(){
			var src = this.style.backgroundImage;
			if (!src) return;
			var image = new Image ();
			image.onload = function(){
				loadCount += 1;
				if (! loaded && (loaded = (loadCount >= images.length))) {
					parent.start();
					base.hide();
				}
			};
			image.src = src.replace(/^url\('?"?/,"").replace(/'?"?\)/,"");
			images.push(image);
		};

		base.show = function(){
			base.$loader.fadeIn();
		};
		base.hide = function(){
			base.$loader.fadeOut().remove();
			base.destroy();
		};
		base.destroy = function(){
			parent = null;
			base.$loader = null;
			base = null;
		};
		
		base.init();
	};

	
  $.okgallery.options = {
		'aspect': 16/9,
  	'width': null,
  	'height': null,
		'random': false,
		'autoplay': false,
  	'prevSelector': null,
  	'nextSelector': null,
		'clickDisablesRandom': true,
		'clickDisablesAutoplay': true,
		'resizeTime': 200,
		'delayTime': 2000,
		'fadeTime': 700,
		'backgroundSize': "cover",
		'backgroundPosition': "center center",
		'backgroundRepeat': "repeat",
		'dots': true,
		'dotsInside': false,
		'dotClass': null,
		'dotActiveClass': null,
		'dotWidth': 14,
		'dotMargin': 4,
		'dotContainerPadding': 10,
		'dotColor': "#eee",
		'dotShadowColor': "#888",
		'dotShadowWidth': 2,
		'dotActiveColor': "yellow",
		'useKeyboard': false,
		'useCSSTransitions': true,
		'applyTransitionBeforeStart': false,
		'images': null,
		'onFadeIn': null,
		'onFadeOut': null,
		'onLoad': null,
		'loaderImage': "bigger_spinner_bigger.gif"
  };
  
  $.fn.okgallery = function(options){
    return this.each(function(){
      (new $.okgallery(this, options));            
    });
  };

})(jQuery);


/**
 *
 * okjavascript
 *
**/


$(function(){
	
	$("#us .autoplay").okgallery({
		"random": false,
		"autoplay": true,
		"aspect": 16/7,
		'applyTransitionBeforeStart': true,
		"loaderImage": "../../assets/images/spinner.gif"
	});
	$(".autoplay").not("#us .gallery").okgallery({
		"random": false,
		"autoplay": true,
		"aspect": 16/7,
    "backgroundSize": "contain",
		'applyTransitionBeforeStart': true,
		"loaderImage": "../../assets/images/spinner.gif"
	});
	$(".studygallery").okgallery({
		"random": false,
		"backgroundSize": "contain",
		"autoplay": true,
		"dotShadowWidth": 0,
		"height": 500,
		"aspect": 16/7,
		'applyTransitionBeforeStart': true,
		"loaderImage": "../../assets/images/spinner.gif"
	});
   
  var hasTextShadow = checkTextShadow();
  if (! hasTextShadow) {
  	$("body").addClass('noTextShadow');
  }

	$('.logo').okshadow({
		color: 'black',
		textShadow: true,
		transparent: hasTextShadow,
		xMax: 0,
		yMax: 0,
		fuzzMin: 1.5,
		fuzz: 80
	});
	
	$('.contact .logo').okshadow({
		color: 'white',
		textShadow: true,
		transparent: hasTextShadow,
		xMax: 0,
		yMax: 0,
		fuzzMin: 1.5,
		fuzz: 80
	});

		var State = {
			'current': "front",
			'currentBg': $("#first-bg"),
			'nextBg': $("#second-bg"),
			
			'init': function(){
				var state;
				var partz = window.location.pathname.split("/");
				if (window.location.pathname.indexOf("html") !== -1) {
					state = partz[partz.length-2];
				} else {
					state = partz[partz.length-1] || partz[partz.length-2];
				}
				if (state == "v2") state = "front";

				if (state.length > 0) {
					State.swap(state);
				} else {
					State.front.load();
				}
			},
			
			'swap': function(newState){
				if (newState === State.current) return;
				var oldState = State.current;
				if (oldState) {
					State[oldState].unload();
					$("#" + oldState).hide();
				}

				$("body")
					.removeClass(oldState)
					.addClass(newState);

				if (newState in State)
					State[newState].load();
				
				$("#" + newState).show().removeClass("hide");

				
//				setTimeout(function(){ $("#" + newState).css("overflow-y","auto"); }, 100);
				
				State.current = newState;
			},
			
			'oldBgClass': undefined,
			'swapBg': function (newBgClass) {
				if (State.oldBgClass) {
					State.currentBg
						.stop()
						.animate({"opacity": 0.0}, 500, function(){
							this.className = "bg";
						});
				}
				State.nextBg
					.stop()
					.addClass(newBgClass + "-bg")
					.css("opacity", 0.0)
					.animate({"opacity": 1.0}, 500);
				
				var temp = State.currentBg;
				State.currentBg = State.nextBg;
				State.nextBg = temp;
				
				State.oldBgClass = newBgClass;
			},

			'front': {
				'load': function(){
					$("#front").stop().css({
						"left": 0,
						"width": $(window).width(),
						"height": $(window).height()
						}).show();
					$("body")
						.addClass("front");
					$('#front .logo').show().fadeIn(900);
					console.log('duh');
					State.swapBg('front');
				},
				'unload': function(){
					$("#front").show();
				}
			},

			'about': {
				'load': function(){
					State.swapBg('us');
				},
				'unload': function(){
				}
			},

			'work': {
				'load': function(){
					Filter.init();
				},
				'unload': function(){
					$("body").css("background-color", "transparent");
				}
			},
			
			'labs': {
				'load': function(){
					State.swapBg('labs');
				},
				'unload': function(){
				}
			},
			
			'contact': {
				'load': function(){
						var map, marker, markers = [], okfocus = new google.maps.LatLng(40.749622,-73.945287);
						var options = {
							center: okfocus,
							zoom: 15,
							tilt: 45,
							mapTypeControl: true,
							panControl: false,
							zoomControl: true,
							zoomControlOptions: {
								style: google.maps.ZoomControlStyle.SMALL
							},
							mapTypeId: google.maps.MapTypeId.SATELLITE
						};
						
						map = new google.maps.Map(document.getElementById('map'), options);
					
	        
          State.swapBg('contact');
          
          $('#directions').on('click', function(){
            $('#contact').fadeOut('fast', function(){
              marker = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: okfocus
              });

              markers.push(marker);

              google.maps.event.addListener(marker, 'click', function(event) {
                $('#contact').fadeIn('fast');             
                
                if (markers){
                  for (i in markers) {
                    markers[i].setMap(null);
                  }
                }
                markers.length = 0;
                
              });              

            });
            

          });
          
				}, 'unload': function(){
					$("#map").fadeOut();
				}
			}
		};

		var Filter = {
			'current': null,
			'currentToggle': null,
			'map': {
				'k': 'lolz',         // cat
				'c': 'development',  // computer
				'$': 'client',       // money
				'i': 'concept',      // lightbulb
				's': 'design',       // triangle
				'T': 'social',       // twitter
				'h': 'viral',        // hot!
				'p': 'mobile',       // iphone
				'z': 'self'
			},
			'initted': false,
			'init': function(){
				if (! Filter.initted) {
					$("#all_work > a").each(function(){
						var types = $(".okfont", this).html().split(" ");
						for (var i in types) {
							if (types[i].length > 0 && (types[i] in Filter.map)) {
								$(this).addClass("filter_" + Filter.map[types[i]]);
							}
						}
					});
					$("#filters li").click(Filter.toggle);
					$('#all_work').isotope({
						itemSelector: '#all_work > a',
						easing: 'linear',
						animationEngine: 'best-available',
						layoutMode: 'masonry',
						duration: 300,
						masonry: {
							columnWidth: 120
						},
						cellsByRow: {
							columnWidth: 220,
							rowHeight: 220
						},
						layoutMode: 'fitRows',
						transformsEnabled: true
					});
				}
				Filter.initted = true;
			},
			'toggle': function(){
				var filter = $(this).data('filter');
				if (Filter.currentToggle) {
					$(Filter.currentToggle).find("input").attr('checked', false);
				}
				if (filter == Filter.current) {
					Filter.currentToggle = null;
					Filter.current = null;
					$("#all_work").isotope({ 'filter': "*" });
				} else {
					Filter.current = filter;
					Filter.currentToggle = this;
					$(Filter.currentToggle).find("input").attr('checked', true);
					$("#all_work").isotope({ 'filter': ".filter_" + filter });
				}
			}
		};
		
		var scrollOptions = {
			'scrollspeed': 10,
			'cursoropacitymin': 0.5,
			'dblclickzoom': false,
			'gesturezoom': false,
			'boxzoom': false
		};

//		$("body").css({'overflow-y': 'auto'});
		
		$('.slider').each(function(){
			$(this).bjqs({
				'animation': 'slide',
				'width': 500,
				'height': 360,
				'automatic': true,
				'showMarkers': true,
				'useCaptions': false,
				'keyboardNav': false,
				'showControls': false
//				'centerMarkers': true
			});
		});
		
		State.init();
		
		var contentHideToggled = false;
		$("#labs input[type=checkbox]").click(function(){
			$("#labs").toggleClass("contentHide");
			contentHideToggled = ! contentHideToggled;
		});

	$('.accordion li').click(function() {
		$(this).next().slideToggle('medium');
		return false;
	}).next().hide();

  function checkTextShadow(){
    var div = document.createElement("div");
    var test = "textShadow" in div.style;
    div = null;
    return test;
  };

});




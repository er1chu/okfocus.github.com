/*! jQuery requestAnimationFrame - v0.1.2pre - 2013-03-05
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2013 Corey Frang; Licensed MIT */
(function(e){function o(){t&&(i(o),jQuery.fx.tick())}var t,n=0,r=["webkit","moz","o"],i=window.requestAnimationFrame,s=window.cancelAnimationFrame;for(;n<r.length&&!i;n++)i=window[r[n]+"RequestAnimationFrame"],s=s||window[r[n]+"CancelAnimationFrame"]||window[r[n]+"CancelRequestAnimationFrame"];i?(window.requestAnimationFrame=i,window.cancelAnimationFrame=s,jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!t&&(t=!0,o())},jQuery.fx.stop=function(){t=!1}):(window.requestAnimationFrame=function(e,t){var r=(new Date).getTime(),i=Math.max(0,16-(r-n)),s=window.setTimeout(function(){e(r+i)},i);return n=r+i,s},window.cancelAnimationFrame=function(e){clearTimeout(e)})})(jQuery);

/* OKSHADOW */
(function(b){b.okshadow=function(c,g){var a=this;a.$el=b(c);a.el=c;a.$el.data("okshadow",a);a.init=function(){a.options=b.extend({},b.okshadow.options,g);a.build()};a.build=function(){a.start()};a.clamp=function(a,b,c){return Math.max(b,Math.min(c,a))};a.setoption=function(e,d){if(typeof e==="string"){if(a.options[e]=d,e==="color")return a.update()}else a.options=b.extend(a.options,e);a.mousemove(a)};a.start=function(){b(window).bind({mousemove:a.mousemove});a.mousemove({pageX:b(window).width()/2,
pageY:b(window).height()/2});if(a.options.transparent)a.el.style.color="transparent"};a.mousemove=function(b){var d=a.$el.offset(),c=b.pageX,b=b.pageY,f=d.top+a.$el.height()/2,d=d.left+a.$el.width()/2-c;f-=b;sx=d/a.options.xFactor;sy=f/a.options.yFactor;distance=Math.sqrt(d*d+f*f);fuzz=distance/a.options.fuzz+a.options.fuzzMin;a.options.xMax!==null&&(sx=a.clamp(sx,-1*a.options.xMax,a.options.xMax));a.options.yMax!==null&&(sy=a.clamp(sy,-1*a.options.yMax,a.options.yMax));a.options.fuzzMax!==null&&
(fuzz=a.clamp(fuzz,a.options.fuzzMin,a.options.fuzzMax));sx+=a.options.xOffset;sy+=a.options.yOffset;a.pageX=c;a.pageY=b;a.sx=sx;a.sy=sy;a.fuzz=fuzz;a.update()};a.update=function(){a.options.textShadow?a.$el.css("text-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color):a.$el.css("box-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color)};a.init()};b.okshadow.options={color:"#888",fuzz:40,fuzzMin:0,fuzzMax:null,xOffset:0,xFactor:30,xMax:null,yOffset:0,yFactor:30,yMax:null,textShadow:false,transparent:false};
b.fn.okshadow=function(c){return this.each(function(){new b.okshadow(this,c)})}})(jQuery);

/* jquery.transition.js */
//(function(a){function t(){setTimeout(x,0);return m=a.now()}function x(){m=void 0}var r={},k,q,y=/^(?:toggle|show|hide)$/,z=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,u,m,v=document.createElement("div").style,w;a.support.transition="MozTransition"in v?"MozTransition":"WebkitTransition"in v?"WebkitTransition":!1;a.cssNumber.color=a.cssNumber.backgroundColor=!0;w={linear:"linear",swing:"ease-out",bounce:"cubic-bezier(0,.35,.5,1.3)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeInCubic:"cubic-bezier(.55,.055,.675,.19)", easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)", easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)"};a.fn.extend({animate:function(d,e,g,b){function f(){!1===i.queue&&a._mark(this);var c=a.extend({},i),f=1===this.nodeType,e=f&&a(this).is(":hidden"),b,h,g,j,n;n=a.cssProps;var m=!c.step&& a.support.transition,s=[],o,p;c.animatedProperties={};c.transition={};for(g in d)if(b=a.camelCase(g),g!==b&&(d[b]=d[g],delete d[g]),(h=a.cssHooks[b])&&"expand"in h)for(g in j=h.expand(d[b]),delete d[b],j)g in d||(d[g]=j[g]);for(b in d){h=d[b];a.isArray(h)?(j=c.animatedProperties[b]=h[1],h=d[b]=h[0]):j=c.animatedProperties[b]=c.specialEasing&&c.specialEasing[b]||c.easing||"swing";if(j=m&&f&&0<c.duration&&b.indexOf("scroll")&&w[j])o=n[b]||b,p=o.replace(/([A-Z])/g,"-$1").toLowerCase(),j=p+" "+c.duration+ "ms "+j,c.transition[b]={lower:p,real:o},s.push(j);if("hide"===h&&e||"show"===h&&!e)return c.complete.call(this);if(f&&("height"===b||"width"===b))if(c.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===a.css(this,"display")&&"none"===a.css(this,"float")){if(!(h=!a.support.inlineBlockNeedsLayout)){h=this.nodeName;if(!r[h]){j=document.body;o=a("<"+h+">").appendTo(j);p=o.css("display");o.remove();if("none"===p||""===p){k||(k=document.createElement("iframe"),k.frameBorder= k.width=k.height=0);j.appendChild(k);if(!q||!k.createElement)q=(k.contentWindow||k.contentDocument).document,q.write((a.support.boxModel?"<!doctype html>":"")+"<html><body>"),q.close();o=q.createElement(h);q.body.appendChild(o);p=a.css(o,"display");j.removeChild(k)}r[h]=p}h="inline"===r[h]}h?this.style.display="inline-block":this.style.zoom=1}}null!=c.overflow&&(this.style.overflow="hidden");for(g in d)if(f=new a.fx(this,c,g),h=d[g],y.test(h))if(b=a._data(this,"toggle"+g)||("toggle"===h?e?"show": "hide":0))a._data(this,"toggle"+g,"show"===b?"hide":"show"),f[b]();else f[h]();else b=z.exec(h),n=f.cur(),b?(h=parseFloat(b[2]),j=b[3]||(a.cssNumber[g]?"":"px"),"px"!==j&&(a.style(this,g,(h||1)+j),n*=(h||1)/f.cur(),a.style(this,g,n+j)),b[1]&&(h=("-="===b[1]?-1:1)*h+n),f.custom(n,h,j)):f.custom(n,h,"");if(m&&s.length)for(g in j=this.style[m],e=window.getComputedStyle(this),this.style[m]=s.join()+(j&&j.indexOf("none")?","+j:""),c.transition)e[g],a.style.apply(null,c.transition[g].styleToSet);return!0} var i=a.speed(e,g,b);if(a.isEmptyObject(d))return this.each(i.complete,[!1]);d=a.extend({},d);return!1===i.queue?this.each(f):this.queue(i.queue,f)},stop:function(d,e,g){"string"!==typeof d&&(g=e,e=d,d=void 0);e&&!1!==d&&this.queue(d||"fx",[]);return this.each(function(){var b,f=false,e=a.timers,c=a._data(this),l=a.support.transition;g||a._unmark(true,this);if(d==null)for(b in c){if(c[b]&&c[b].stop&&b.indexOf(".run")===b.length-4){var k=c[b];a.removeData(this,b,true);k.stop(g)}}else if(c[b=d+".run"]&& c[b].stop){c=c[b];a.removeData(this,b,true);c.stop(g)}for(b=e.length;b--;)if(e[b].elem===this&&(d==null||e[b].queue===d)){if(g||l)e[b](g);g||e[b].saveState();f=true;e.splice(b,1)}(!g||!f)&&a.dequeue(this,d)})}});a.extend(a.fx.prototype,{cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var d,e=a.css(this.elem,this.prop);return isNaN(d=parseFloat(e))?!e||"auto"===e?0:e:d},custom:function(d,e,g){function b(a){return f.step(a)} var f=this,i=a.fx,c=f.options.transition,l=this.prop;this.startTime=m||t();this.end=e;this.now=this.start=d;this.pos=this.state=0;this.unit=g||this.unit||(a.cssNumber[l]?"":"px");b.queue=this.options.queue;b.elem=this.elem;b.saveState=function(){void 0===a._data(f.elem,"fxshow"+f.prop)&&(f.options.hide?a._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&a._data(f.elem,"fxshow"+f.prop,f.end))};(b.transition=c[l])?(a.timers.push(b),"transform"!=l&&(f.elem.style[c[l].real]=d+f.unit),a.fx.step[l]&& (e=Math.max(0,e)),c[l].styleToSet=[f.elem,l,e+f.unit],c[l].timeout=setTimeout(function(){a.timers.splice(a.timers.indexOf(b),1);f.step(!0)},f.options.duration+30)):b()&&a.timers.push(b)&&!u&&(u=setInterval(i.tick,i.interval))},step:function(d){var e,g=m||t(),b=!0,f=this.elem,i=this.options,c=i.transition[this.prop],l=g>=i.duration+this.startTime,k=a.support.transition;if(c||d||l){c?(clearTimeout(c.timeout),!d&&!l&&(this.elem.style[c.real]=a.css(this.elem,c.real))):(this.now=this.end,this.pos=this.state= 1,this.update());i.animatedProperties[this.prop]=!0;for(e in i.animatedProperties)!0!==i.animatedProperties[e]&&(b=!1);if(b){null!=i.overflow&&!a.support.shrinkWrapBlocks&&a.each(["","X","Y"],function(a,b){f.style["overflow"+b]=i.overflow[a]});i.hide&&a(f).hide();if(c){c=","+f.style[k];for(e in i.transition)c=c.split(i.transition[e].lower).join("_");c=c.replace(/, ?_[^,]*/g,"").substr(1);f.style[k]=c||"none";!c&&(f.style[k]=c)}if(i.hide||i.show)for(e in i.animatedProperties)(d||l)&&a.style(f,e,i.orig[e]), a.removeData(f,"fxshow"+e,!0),a.removeData(f,"toggle"+e,!0);if((e=i.complete)&&(d||l))i.complete=!1,e.call(f)}return!1}Infinity==i.duration?this.now=g:(d=g-this.startTime,this.state=d/i.duration,this.pos=a.easing[i.animatedProperties[this.prop]](this.state,d,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}});a.extend(a.fx,{tick:function(){for(var d,e=a.timers,g=0;g<e.length;g++)d=e[g],!d.transition&&!d()&&e[g]===d&&e.splice(g--,1);e.length||a.fx.stop()}})})(jQuery);

/* OKZOOM */

$(function(c){var b=document.createElement("div");b.id="ok-lorgnette";b.style.position="absolute";b.style.backgroundRepeat="no-repeat";b.style.pointerEvents="none";b.style.display="none";b.style.zIndex=7879;document.body.appendChild(b);c.okzoom=function(d,e){var a=this;a.$el=c(d);a.el=d;a.$el.data("okzoom",a);a.init=function(){a.options=c.extend({},c.okzoom.options,e);a.el.onmouseover=a.build;a.el.onmousemove=a.mousemove;a.el.onmouseout=a.mouseout;a.options.height=a.options.height||a.options.width;
var b=a.$el.data("okimage");a.has_data_image="undefined"!==typeof b;if(a.has_data_image)a.img=new Image,a.img.src=b};a.build=function(){if(!a.has_data_image)a.img=a.el;a.offset=a.$el.offset();a.width=a.$el.width();a.height=a.$el.height();a.options.scaleWidth?(a.naturalWidth=a.options.scaleWidth,a.naturalHeight=Math.round(a.img.naturalHeight*a.options.scaleWidth/a.img.naturalWidth)):(a.naturalWidth=a.img.naturalWidth,a.naturalHeight=a.img.naturalHeight);a.widthRatio=a.naturalWidth/a.width;a.heightRatio=
a.naturalHeight/a.height;b.style.width=a.options.width+"px";b.style.height=a.options.height+"px";b.style.border=a.options.border;b.style.background=a.options.background+" url("+a.img.src+")";b.style.backgroundRepeat=a.options.backgroundRepeat;b.style.backgroundSize=a.options.scaleWidth?a.naturalWidth+"px "+a.naturalHeight+"px":"auto";b.style.borderRadius=b.style.OBorderRadius=b.style.MozBorderRadius=b.style.WebkitBorderRadius=a.options.round?a.options.width+"px":0;b.style.boxShadow=a.options.shadow};
a.mousemove=function(c){var d=a.options.width/2,f=a.options.height/2,e=-1*Math.floor((c.pageX-a.offset.left)*a.widthRatio-d),g=-1*Math.floor((c.pageY-a.offset.top)*a.heightRatio-f);document.body.style.cursor="none";b.style.display="block";b.style.left=c.pageX-d+"px";b.style.top=c.pageY-f+"px";b.style.backgroundPosition=e+"px "+g+"px";};a.mouseout=function(){b.style.display="none";b.style.background="none";document.body.style.cursor="auto"};a.init()};c.okzoom.options={width:150,height:null,scaleWidth:null,
round:!0,background:"#fff",backgroundRepeat:"no-repeat",shadow:"0 0 5px #000",border:0};c.fn.okzoom=function(b){return this.each(function(){new c.okzoom(this,b)})}});



/**
 *
 * okjavascript
 *
**/


$(function(){
	$('h1.logo').okshadow({
		color: 'black',
		textShadow: true,
		xMax: 0,
		yMax: 0,
		fuzzMin: 1.5,
		fuzz: 80
	});
	

	
	$("#okshadow-text").okshadow({
		textShadow: true,
		xMax: 7,
		yMax: 7,
		fuzzMin: 2
	});
	$(".okshadow-block").okshadow({
		xMax: 7,
		yMax: 7,
		fuzzMin: 2
	});
	$("#okzoom").okzoom({
	});
	
	function headerHeight(){
		return $('header').height() + 2 * parseInt( $("header").css('paddingTop').replace("px","") );
	}
	
	$('.thumb').click(function(e, dontAnimate) {
		if ($(this).hasClass('show')) return;
		$('.show').removeClass('show');
		$(this).find('.info').toggleClass('show');
		$(this).addClass('show');
		var scrollTop = $(this).offset().top - headerHeight();
		if (!dontAnimate) {
			$("body").animate({ scrollTop: scrollTop }, 200);
		} else {
			$("body").scrollTop(scrollTop);
		}
		return false;
	});
	
	$('body').click(function() {
		var $current = $('.thumb.show');
		if ($current.length) {
			$('.thumb').removeClass('show');
			var scrollTop = $current.offset().top - headerHeight();
			$("body").animate({ scrollTop: scrollTop }, 200);
		}
		return false;
	});
	
	$("header a").click(function(){
		var dir = $(this).attr("href").split("#")[1];
		if (dir.length) {
			var scrollTop = $("#" + dir).offset().top;
			$("body").animate({ scrollTop: scrollTop }, 20);
			$('.thumb').removeClass('show');
		}
		return false;
	});
	
	
	$("a").click(function(e){
		e.stopPropagation();
	});
	
	$(window).scroll(function() {    
	  var scroll = $(window).scrollTop();
	    if (scroll >= 150) {
			$("h1.logo").addClass("faded")
	    } else {
			$("h1.logo").removeClass("faded")
	    }
	});
	
	
	$(".next").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		var nextthing = $("li.show").next('li');
		
		if (nextthing.length) {
			$(nextthing).trigger("click", [true]);
		}

		else {
			 $(".show").parent().find("li").first().trigger("click", [true]);
		}
	});

	 $(".prev").on("click", function(e){
		e.preventDefault();			
		e.stopPropagation();
		var prevthing = $("li.show").prev('li');
		
		if (prevthing.length) {
			$(prevthing).trigger("click", [true]);
		}

		else {
			 $(".show").parent().find("li").last().trigger("click", [true]);
		} 
	});

	// right click moves forward
	$(document).keydown(function(event) {
	  if (event.which == 39) $(".next").first().trigger("click");
	  if (event.which == 37) $(".prev").first().trigger("click");
	  if (event.which == 27) $(".show").find(".close").trigger("click");
	});

});

$(function(){
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


	});	
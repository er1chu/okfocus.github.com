/*! jQuery requestAnimationFrame - v0.1.2pre - 2013-03-05
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2013 Corey Frang; Licensed MIT */
(function(e){function o(){t&&(i(o),jQuery.fx.tick())}var t,n=0,r=["webkit","moz","o"],i=window.requestAnimationFrame,s=window.cancelAnimationFrame;for(;n<r.length&&!i;n++)i=window[r[n]+"RequestAnimationFrame"],s=s||window[r[n]+"CancelAnimationFrame"]||window[r[n]+"CancelRequestAnimationFrame"];i?(window.requestAnimationFrame=i,window.cancelAnimationFrame=s,jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!t&&(t=!0,o())},jQuery.fx.stop=function(){t=!1}):(window.requestAnimationFrame=function(e,t){var r=(new Date).getTime(),i=Math.max(0,16-(r-n)),s=window.setTimeout(function(){e(r+i)},i);return n=r+i,s},window.cancelAnimationFrame=function(e){clearTimeout(e)})})(jQuery);

/* OKSHADOW */
(function(b){b.okshadow=function(c,g){var a=this;a.$el=b(c);a.el=c;a.$el.data("okshadow",a);a.init=function(){a.options=b.extend({},b.okshadow.options,g);a.build()};a.build=function(){a.start()};a.clamp=function(a,b,c){return Math.max(b,Math.min(c,a))};a.setoption=function(e,d){if(typeof e==="string"){if(a.options[e]=d,e==="color")return a.update()}else a.options=b.extend(a.options,e);a.mousemove(a)};a.start=function(){b(window).bind({mousemove:a.mousemove});a.mousemove({pageX:b(window).width()/2,
pageY:b(window).height()/2});if(a.options.transparent)a.el.style.color="transparent"};a.mousemove=function(b){var d=a.$el.offset(),c=b.pageX,b=b.pageY,f=d.top+a.$el.height()/2,d=d.left+a.$el.width()/2-c;f-=b;sx=d/a.options.xFactor;sy=f/a.options.yFactor;distance=Math.sqrt(d*d+f*f);fuzz=distance/a.options.fuzz+a.options.fuzzMin;a.options.xMax!==null&&(sx=a.clamp(sx,-1*a.options.xMax,a.options.xMax));a.options.yMax!==null&&(sy=a.clamp(sy,-1*a.options.yMax,a.options.yMax));a.options.fuzzMax!==null&&
(fuzz=a.clamp(fuzz,a.options.fuzzMin,a.options.fuzzMax));sx+=a.options.xOffset;sy+=a.options.yOffset;a.pageX=c;a.pageY=b;a.sx=sx;a.sy=sy;a.fuzz=fuzz;a.update()};a.update=function(){a.options.textShadow?a.$el.css("text-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color):a.$el.css("box-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color)};a.init()};b.okshadow.options={color:"#888",fuzz:40,fuzzMin:0,fuzzMax:null,xOffset:0,xFactor:30,xMax:null,yOffset:0,yFactor:30,yMax:null,textShadow:false,transparent:false};
b.fn.okshadow=function(c){return this.each(function(){new b.okshadow(this,c)})}})(jQuery);

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

	// Logo OKSHADOW
	$('h1.logo').okshadow({
		color: 'black',
		textShadow: true,
		xMax: 0,
		yMax: 0,
		fuzzMin: 1.5,
		fuzz: 80
	});
	
	// Demo OKSHADOW
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
	
	// Demo OKZOOM
	$("#okzoom").okzoom({
	});
	
	// Get the height of the header element..
	// jQuery calculates this wrong
	function headerHeight(){
		return $('header').height() + 2 * parseInt( $("header").css('paddingTop').replace("px","") );
	}
	
	// Click a project thumbnail to expand it
	$('.thumb').click(function(e, dontAnimate) {
		if ($(this).hasClass('show')) return;
		setUrl( "/#/" + $(this).attr("id") );
		$('.show').removeClass('show');
		$(this).addClass('show');
		$.waypoints('disable');
		var scrollTop = $(this).offset().top - headerHeight();
		if (!dontAnimate) {
			$("body").animate({ scrollTop: scrollTop }, 200);
		} else {
			$("body").scrollTop(scrollTop);
		}
		return false;
	});
	
	// Click anywhere on the body to close the current project
	$('body').click(function() {
		var $current = $('.thumb.show');
		if ($current.length) {
			$.waypoints('disable');
			$('.thumb').removeClass('show');
			var scrollTop = $current.offset().top - headerHeight();
			$("body").animate({ scrollTop: scrollTop }, 200, function(){
				$.waypoints('enable');
			});
			setUrl( "/#/" + $current.closest("ul").attr("class") );
		}
		return false;
	});
	
	// Header links
	$("header a").on("click", function(){
		var target = $(this).attr("href").split("#")[1];
		if (target) {
			setUrl( target );
			scrollToSection(target, 200);
		}
		return false;
	});
	
	$("#video").on("click", function(){
		var target = $(this).attr("href").split("#")[1];
		if (target) {
			setUrl( target );
			scrollToSection(target, 200);
		}
		return false;
	});
	
	// Make links work without triggering other things..
	$("a[target]").click(function(e){
		e.stopPropagation();
	});
	
	
	function scrollToSection (target, duration, offset) {
		offset = offset || 0;
		duration = duration || 20;
		var scrollTop = $("#" + target).offset().top - offset;
		$.waypoints('disable');
		$("body").animate({ scrollTop: scrollTop }, duration, function(){
			$.waypoints('enable');
		});
		$('.thumb').removeClass('show');
	}
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	    if (scroll >= 150) {
			$("h1.logo").addClass("faded")
	    } else {
			$("h1.logo").removeClass("faded")
	    }
	});
	

	// Next project arrow	
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

	// Previous project arrow
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

	// Arrow navigation
	$(document).keydown(function(event) {
	  if (event.which == 39) $(".next").first().trigger("click");			// right arrow
	  if (event.which == 37) $(".prev").first().trigger("click");			// left arrow
	  if (event.which == 27) $("body").trigger("click");					// escape
	});


	// Add a CSS rule on the fly
	(function(){
	  var loaded = false;
	  function newStyleSheet () {
		var stylesheet = document.createElement("style");
		stylesheet.type = "text/css";
		document.body.appendChild(stylesheet);
		loaded = true;
	  }

	  window.cssRule = function (selector, declaration) {
		if (! loaded) newStyleSheet();
		var x = document.styleSheets,
			y = x.length-1;
		x[y].insertRule(selector+"{"+declaration+"}", x[y].cssRules.length);
		$(selector).css(declaration.split(": "));
	  };
	})();

	$("h2").waypoint(function(dir){
		if (dir === "down") {
			setUrl( $(this).attr("id") );
		}
	}, { offset: headerHeight() });
	$("ul").waypoint(function(dir){
		if (dir === "up") {
			setUrl( $(this).prev("h2").attr("id") );
		}
	}, { offset: 'bottom-in-view' });

	$(".thumb").each(function(){
		var id = $(this).attr("id");
		var $table = $(this).find("table");
		var style = $table.attr("style");
		$table.attr("style", "");
		cssRule( "#" + id + ":hover table", style );
		cssRule( "#" + id + ".show table", style );
	});
	
	// History.js removes the "#" from all our URLs, which is undesired because
	// we do not have static assets serving from those URLs. Here is a tiny polyfill.
	window.history = window.history || {};
	window.history.pushState = window.history.pushState || function setHash(d,t,s){
		window.location.hash = "#" + s.split("#")[1];
	}
	function setUrl(s){
		if (s == "") {
			window.history.pushState("", document.title, window.location.pathname);
			return;
		}
		else { 
			s = "#!/" + s;
		}
		window.history.pushState("", document.title, window.location.pathname + s);
	}

	// Clicking the home link should clear the hash, if possible.
	$("#homelink").click(function(){
		setUrl("");
		$.waypoints('disable');
		$("body").animate({ scrollTop: 0 }, 400, function(){
			$.waypoints('enable');
		});
	});
	
	if (window.location.hash.length > 1) {
		var dest = window.location.hash.replace(/[#\/!]/g,"");
		var $section = $("#" + dest);
		if ($section.length) {
			$.waypoints('disable');
			//$("#video").hide();
			if ($section.hasClass("thumb")) {
				$section.addClass('show');
				var scrollTop = $section.offset().top - headerHeight() - 10;
				$("body").scrollTop(scrollTop - headerHeight());
				setTimeout(function(){
					$("body").scrollTop(scrollTop - headerHeight());
					$.waypoints('enable');
				}, 0);
			}
			else {
				var offset = dest == "about" ? 0 : headerHeight() + 20;
				scrollToSection(dest, undefined, offset);
			}
		}
	}
	// $("#map").height( window.innerHeight );
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

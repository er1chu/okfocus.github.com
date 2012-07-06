			/*

			  OKZoom by OKFocus
			  http://okfoc.us // @okfocus
			  Copyright 2012 OKFocus
			  Licensed under the MIT License

			*/

			$(function(c){var b=document.createElement("div");b.id="ok-lorgnette";b.style.position="absolute";b.style.backgroundRepeat="no-repeat";b.style.pointerEvents="none";b.style.display="none";b.style.zIndex=7879;document.body.appendChild(b);c.okzoom=function(d,e){var a=this;a.$el=c(d);a.el=d;a.$el.data("okzoom",a);a.init=function(){a.options=c.extend({},c.okzoom.options,e);a.el.onmouseover=a.build;a.el.onmousemove=a.mousemove;a.el.onmouseout=a.mouseout;a.options.height=a.options.height||a.options.width;
			var b=a.$el.data("okimage");a.has_data_image="undefined"!==typeof b;if(a.has_data_image)a.img=new Image,a.img.src=b};a.build=function(){if(!a.has_data_image)a.img=a.el;a.offset=a.$el.offset();a.width=a.$el.width();a.height=a.$el.height();a.options.scaleWidth?(a.naturalWidth=a.options.scaleWidth,a.naturalHeight=Math.round(a.img.naturalHeight*a.options.scaleWidth/a.img.naturalWidth)):(a.naturalWidth=a.img.naturalWidth,a.naturalHeight=a.img.naturalHeight);a.widthRatio=a.naturalWidth/a.width;a.heightRatio=
			a.naturalHeight/a.height;b.style.width=a.options.width+"px";b.style.height=a.options.height+"px";b.style.border=a.options.border;b.style.background=a.options.background+" url("+a.img.src+")";b.style.backgroundRepeat=a.options.backgroundRepeat;b.style.backgroundSize=a.options.scaleWidth?a.naturalWidth+"px "+a.naturalHeight+"px":"auto";b.style.borderRadius=b.style.OBorderRadius=b.style.MozBorderRadius=b.style.WebkitBorderRadius=a.options.round?a.options.width+"px":0;b.style.boxShadow=a.options.shadow};
			a.mousemove=function(c){var d=a.options.width/2,f=a.options.height/2,e=-1*Math.floor((c.pageX-a.offset.left)*a.widthRatio-d),g=-1*Math.floor((c.pageY-a.offset.top)*a.heightRatio-f);document.body.style.cursor="none";b.style.display="block";b.style.left=c.pageX-d+"px";b.style.top=c.pageY-f+"px";b.style.backgroundPosition=e+"px "+g+"px"};a.mouseout=function(){b.style.display="none";b.style.background="none";document.body.style.cursor="auto"};a.init()};c.okzoom.options={width:150,height:null,scaleWidth:null,
			round:!0,background:"#fff",backgroundRepeat:"no-repeat",shadow:"0 0 5px #000",border:0};c.fn.okzoom=function(b){return this.each(function(){new c.okzoom(this,b)})}});

			/**
			 *
			 * okhover
			 *
			**/

			(function(b){b(function(){b("body").append('<div id="ok-bg"></div>');b("#ok-bg").css({width:"100%",height:"100%",background:"scroll 150% 150% repeat",zIndex:-2,position:"fixed",top:0,left:0})});b.okhover=function(d,e){var a=this;a.$el=b(d);a.el=d;a.$el.data("okhover",a);a.init=function(){a.options=b.extend({},b.okhover.options,e);a.build()};a.build=function(){if(b("#ok-bg").length==0)throw Error("Failed to attach the ok-bg div to the DOM");else a.start()};a.start=function(){var c=b("#ok-bg");a.options.fadeIn&&
			c.hide();a.options.zIndex&&c.css("zIndex",a.options.zIndex);a.$el.bind({mouseover:function(){b(this).mousemove(function(a){c.css("backgroundPosition",a.pageX+"px "+a.pageY+"px")});c.css("backgroundImage","url("+b(this).attr("data-okimage")+")").show();a.options.fadeIn&&c.stop().fadeTo(a.options.fadeInDuration,1)},mouseout:function(){a.options.fadeOut?c.stop().fadeTo(a.options.fadeOutDuration,0,function(){b(this).css("backgroundImage","").hide()}):c.css("backgroundImage","").hide()}})};a.init()};b.okhover.options=
			{fadeIn:!1,fadeOut:!1,fadeInDuration:400,fadeOutDuration:400,zIndex:null};b.fn.okhover=function(d){return this.each(function(){new b.okhover(this,d)})}})(jQuery);


			/*
			 * OKType by OKFocus v1.0.0
			 * http://okfoc.us 
			 *
			 * Copyright 2012, OKFocus
			 * Licensed under the MIT license.
			 *
			 */

			(function(c){var e,b,f,g,h,i,j,k,l,m="100,200,300,400,500,600,700,800,900".split(","),n=["overline","line-through","underline"],o="arial,helvetica,arial black,comic sans ms,courier new,georgia,impact,monospace,times new roman,trebuchet ms,verdana,symbol,webdings,fantasy,cursive".split(",");c.oktype=function(d,p){var a=this;a.$el=c(d);a.el=d;a.init=function(){a.options=c.extend({},c.oktype.options,p);a.start()};a.start=function(){if(a.options.hover)if("function"===typeof c().on)a.$el.on({mouseenter:function(){a.hoverIn(c(this))},
			mouseleave:function(){a.hoverOut(c(this))}});else a.$el.bind({mouseenter:function(){a.hoverIn(c(this))},mouseleave:function(){a.hoverOut(c(this))}});else a.hoverIn(a.$el)};a.hoverIn=function(d){b=c(d);f=b.css("font-family");g=b.css("font-weight");h=b.css("font-size");i=b.css("color");j=b.css("text-transform");k=b.css("text-decoration");l=b.css("letter-spacing");a.options.hover&&b.addClass("oktype-hovering");e=window.setInterval(function(){b.css({"font-family":a.randomType(),"font-weight":a.options.weight?
			a.weight():b.css("font-weight"),"font-size":a.options.maxSize&&a.options.minSize?a.randomSize():b.css("font-size"),color:a.options.randomColor?a.randomColor():b.css("color"),"text-transform":a.options.toggleCase?a.toggleCase():b.css("text-transform"),"text-decoration":a.options.randomDecoration?a.randomDecoration():b.css("text-decoration"),"letter-spacing":a.options.minSpace&&a.options.maxSpace?a.randomSpacing():b.css("letter-spacing")})},a.options.interval)};a.hoverOut=function(){clearTimeout(e);
			a.options.hover&&b.removeClass("oktype-hovering");a.options.restore&&b.css({"font-family":f,"font-weight":g,"font-size":h,color:i,"text-transform":j,"text-decoration":k,"letter-spacing":l})};a.weight=function(){if("toggle"===a.options.weight)return a.randomBold();if("random"===a.options.weight)return a.randomWeight();console.log("OKType Error: You must set the option for weight to be either 'toggle' or 'random'.")};a.randomBold=function(){return 0==Math.round(1*Math.random())%2?"bold":"normal"};a.randomWeight=
			function(){return m[Math.floor(m.length*Math.random())]};a.toggleCase=function(){return 0==Math.round(1*Math.random())%2?"uppercase":"lowercase"};a.randomDecoration=function(){return n[Math.floor(n.length*Math.random())]};a.randomSpacing=function(){return Math.round(a.options.minSpace+Math.random()*(a.options.maxSpace-a.options.minSpace))+"px"};a.randomSize=function(){return Math.round(a.options.minSize+Math.random()*(a.options.maxSize-a.options.minSize))+"px"};a.randomColor=function(){return"#"+
			Math.floor(16777215*Math.random()).toString(16)};a.randomType=function(){return o[Math.floor(o.length*Math.random())]};a.init()};c.oktype.options={weight:null,minSize:null,maxSize:null,randomColor:null,randomDecoration:null,interval:100,toggleCase:null,maxSpace:null,minSpace:null,restore:!0,hover:!0};c.fn.oktype=function(b){return this.each(function(){new c.oktype(this,b)})}})(jQuery);
$(function(){
			 $('#okshadow').okshadow();
				$('.okhover').okhover();
		    $('#okzoom').okzoom({
						width: 200,
						height: 200
				});
				   $('#oktype-test').oktype({ randomColor: true });
 });
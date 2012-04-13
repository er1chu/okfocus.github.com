/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */

;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/**
 *
 * PW_TYPER
 *
**/

(function(c){c.extend({pwTyper:{wrap:function(a){a=a.replace(/(<span[^>]*?class="[^"]*pwText[^"]*>)([^<]*)(<\/span>)/g,"$2");a=a.replace(/(>|^(?!<))([^<]+)(<|(?!>)$)/g,'$1<span class="pwText">$2</span>$3');return a=a.replace(/<span class="pwText">[^<]*&\S*;[^<]*<\/span>/g,function(a){return a.replace(/(&[^;]+;)/g,'</span><span class="pwSpecial">$1</span><span class="pwText">')})},type:function(a){a.charCount>a.data[a.dataIndex].count&&a.dataIndex++;if(a.dataIndex==a.dataLength){a.thisElement.data("finished",
!0);a.thisElement.html(a.content);if(a.thisElement.data("callback")){var d=!0;c(a.thisElement.data("get")).each(function(){c(this).data("finished")||(d=!1)});if(d){var b=a.thisElement.data("callback");b&&b.call()}}return!1}for(b=a.data[a.dataIndex].element.data("order");a.order<=b;a.order++)a.thisElement.find(".order-"+a.order).removeClass("pwHidden");a.data[a.dataIndex].element.html(a.data[a.dataIndex].text.substr(0,a.charCount-(a.dataIndex>0?a.data[a.dataIndex-1].count:0)));a.delay=Math.round(a.minInterval+
Math.random()*(a.maxInterval-a.minInterval));a.thisElement.data("int",setTimeout(function(){c.pwTyper.type(a)},a.delay));a.charCount++;a.thisElement.data("G",a)},untype:function(a){a.dataIndex>0&&a.charCount<=a.data[a.dataIndex-1].count&&a.dataIndex--;if(a.charCount===0){a.thisElement.data("finished",!0);a.thisElement.html("");if(a.thisElement.data("callback")&&c(a.thisElement.data("get")).data("finished")){var d=!0;c(a.thisElement.data("get")).each(function(){c(this).data("finished")||(d=!1)});if(d){var b=
a.thisElement.data("callback");b&&b.call()}}return!1}for(b=a.data[a.dataIndex].element.data("order");a.order>b;a.order--)a.thisElement.find(".order-"+a.order).remove();a.data[a.dataIndex].element.html(a.data[a.dataIndex].text.substr(0,a.charCount-1-(a.dataIndex>0?a.data[a.dataIndex-1].count:0)));a.delay=Math.round(a.minInterval+Math.random()*(a.maxInterval-a.minInterval));a.thisElement.data("int",setTimeout(function(){c.pwTyper.untype(a)},a.delay));a.charCount--;a.thisElement.data("G",a)},createCSS:function(a,
d){var b=navigator.userAgent.toLowerCase(),b=/msie/.test(b)&&!/opera/.test(b)&&/win/.test(b),c=document.getElementById("pwTyperStyles");c||(c=document.createElement("style"),c.setAttribute("type","text/css"),c.setAttribute("media","screen"),c.setAttribute("id","pwTyperStyles"));c.innerHTML.indexOf(a+" {"+d+"}")===-1&&(b||c.appendChild(document.createTextNode(a+" {"+d+"}\n")),document.getElementsByTagName("head")[0].appendChild(c),b&&document.styleSheets&&document.styleSheets.length>0&&(b=document.styleSheets[document.styleSheets.length-
1],typeof b.addRule=="object"&&b.addRule(a,d)))}}});c.fn.extend({stopTyper:function(){clearInterval(this.data("int"));return this},resumeTyper:function(){this.data("func").call(c.pwTyper,this.data("G"));return this},finishTyper:function(){clearInterval(this.data("int"));this.data("func")==c.pwTyper.type?this.html(this.data("content")):this.empty();var a=this.data("callback");a&&a.call();return this},type:function(a){c.pwTyper.createCSS(".pwHidden","display:none;");clearInterval(this.data("int"));
var d={minInterval:40,maxInterval:90},d=jQuery.extend(d,a||{});this.data("func",c.pwTyper.type);this.data("get",this.get());this.data("callback",d.callback?d.callback:null);return this.each(function(){var b={charCount:0,charTotal:0,data:[],dataLength:0,dataIndex:0,thisElement:c(this),order:0,delay:0,newText:"",content:"",minInterval:d.minInterval,maxInterval:d.maxInterval};b.content=d.content?d.content instanceof jQuery?c(d.content).html():d.content:b.thisElement.html();b.thisElement.data("finished",
!1);b.thisElement.data("content",b.content);b.newText=c.pwTyper.wrap(b.content);b.thisElement.html(b.newText).find("*").each(function(b){c(this).addClass("pwHidden").data("order",b).addClass("order-"+b)});b.thisElement.find(".pwText").each(function(a){b.data[a]={order:c(this).data("order"),text:c(this).html(),element:c(this),count:a>0?c(this).html().length+b.data[a-1].count:c(this).html().length};c(this).empty()});b.dataLength=b.data.length;b.charTotal=b.data[b.dataLength-1].count;if(d.time){b.delay=
Math.floor(d.time/b.charTotal);if(b.delay===0)b.delay=1;if(d.deviation){if(d.deviation>1)d.deviation=1;b.minInterval=Math.round(b.delay*(1-d.deviation));b.maxInterval=b.delay+(b.delay-b.minInterval);if(b.minInterval===0)b.minInterval=1}else b.minInterval=b.delay,b.maxInterval=b.delay}d.delay?b.thisElement.data("int",setTimeout(function(){c.pwTyper.type(b)},d.delay)):c.pwTyper.type(b)})},untype:function(a){c.pwTyper.createCSS(".pwHidden","display:none;");clearInterval(this.data("int"));var d={minInterval:40,
maxInterval:90},d=jQuery.extend(d,a||{});this.data("func",c.pwTyper.untype);this.data("get",this.get());this.data("callback",d.callback?d.callback:null);return this.each(function(){var b={charCount:0,charTotal:0,data:[],dataLength:0,dataIndex:0,thisElement:c(this),order:0,delay:0,newText:"",content:c(this).html(),minInterval:d.minInterval,maxInterval:d.maxInterval};b.thisElement.data("finished",!1);b.newText=c.pwTyper.wrap(b.content);b.thisElement.html(b.newText).find("*").each(function(b){c(this).data("order",
b).addClass("order-"+b)});b.thisElement.find(".pwText").each(function(a){b.data[a]={order:c(this).data("order"),text:c(this).html(),element:c(this),count:a>0?c(this).html().length+b.data[a-1].count:c(this).html().length}});if(b.data.length>0&&(b.dataIndex=b.data.length-1,b.charTotal=b.data[b.dataIndex].count,b.charCount=b.charTotal,b.order=b.data[b.dataIndex].element.data("order"),d.time)){b.delay=Math.floor(d.time/b.charTotal);if(b.delay===0)b.delay=1;if(d.deviation){if(d.deviation>1)d.deviation=
1;b.minInterval=Math.round(b.delay*(1-d.deviation));b.maxInterval=b.delay+(b.delay-b.minInterval);if(b.minInterval===0)b.minInterval=1}else b.minInterval=b.delay,b.maxInterval=b.delay}d.delay?b.thisElement.data("int",setTimeout(function(){c.pwTyper.untype(b)},d.delay)):c.pwTyper.untype(b)})}})})(jQuery);

/**
 *
 * okhover
 *
**/

(function(b){b(function(){b("body").append('<div id="ok-bg"></div>');b("#ok-bg").css({width:"100%",height:"100%",background:"scroll 150% 150% repeat",zIndex:-1,position:"fixed",top:0,left:0})});b.okhover=function(d,e){var a=this;a.$el=b(d);a.el=d;a.$el.data("okhover",a);a.init=function(){a.options=b.extend({},b.okhover.options,e);a.build()};a.build=function(){if(b("#ok-bg").length==0)throw Error("Failed to attach the ok-bg div to the DOM");else a.start()};a.start=function(){var c=b("#ok-bg");a.options.fadeIn&&
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

/**
 *
 * OKSHADOW
 *
 **/

(function(b){b.okshadow=function(c,g){var a=this;a.$el=b(c);a.el=c;a.$el.data("okshadow",a);a.init=function(){a.options=b.extend({},b.okshadow.options,g);a.build()};a.build=function(){a.start()};a.clamp=function(a,b,c){return Math.max(b,Math.min(c,a))};a.setoption=function(e,d){if(typeof e==="string"){if(a.options[e]=d,e==="color")return a.update()}else a.options=b.extend(a.options,e);a.mousemove(a)};a.start=function(){b(window).bind({mousemove:a.mousemove});a.mousemove({pageX:b(window).width()/2,
pageY:b(window).height()/2});if(a.options.transparent)a.el.style.color="transparent"};a.mousemove=function(b){var d=a.$el.offset(),c=b.pageX,b=b.pageY,f=d.top+a.$el.height()/2,d=d.left+a.$el.width()/2-c;f-=b;sx=d/a.options.xFactor;sy=f/a.options.yFactor;distance=Math.sqrt(d*d+f*f);fuzz=distance/a.options.fuzz+a.options.fuzzMin;a.options.xMax!==null&&(sx=a.clamp(sx,-1*a.options.xMax,a.options.xMax));a.options.yMax!==null&&(sy=a.clamp(sy,-1*a.options.yMax,a.options.yMax));a.options.fuzzMax!==null&&
(fuzz=a.clamp(fuzz,a.options.fuzzMin,a.options.fuzzMax));sx+=a.options.xOffset;sy+=a.options.yOffset;a.pageX=c;a.pageY=b;a.sx=sx;a.sy=sy;a.fuzz=fuzz;a.update()};a.update=function(){a.options.textShadow?a.$el.css("text-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color):a.$el.css("box-shadow",sx+"px "+sy+"px "+fuzz+"px "+a.options.color)};a.init()};b.okshadow.options={color:"#888",fuzz:40,fuzzMin:0,fuzzMax:null,xOffset:0,xFactor:30,xMax:null,yOffset:0,yFactor:30,yMax:null,textShadow:false,transparent:false};
b.fn.okshadow=function(c){return this.each(function(){new b.okshadow(this,c)})}})(jQuery);



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
 * okjavascript
 *
**/


$(function(){

	  $('header').fadeIn(900);

    $('#demo-hover').okhover({ zIndex: 0 });

    $('#ls').localScroll({
        lock: true,
        hash: true,
        duration: 400          
    });       
    
    $('#labs p').localScroll({
        lock: true,
        hash: true,
        duration: 400          
    }); 
    
    $("#demo-hover").click(function(e){
    	  $("#ok-bg").css('backgroundImage', '');
    });

    $('#okzoom-test').okzoom({
        scaleWidth: 300,
        backgroundRepeat: "repeat",
        width: 200,
        height: 200
    });

    $('#oktype-test').oktype({ randomColor: true });

    
    var background = $('#bg'),
    hashes = [], 
    listItems = $('.okhover li');

    listItems.each(function(item) {
        var idsAsHash = "#more-" + $(this).attr('id');
        hashes.push(idsAsHash);
    });

    function remove() {
        background
            .css('z-index', 0)
            .removeClass()
            .children()
            .remove();

        $("#title").remove();

        window.location.hash = "#work";
    }    
    
    $(window).bind({
        hashchange: function(e){
            e.preventDefault();
            if (window.location.hash === '#work' && $('#p').length) remove();
            else if ($.inArray(window.location.hash,hashes) && 
                     $('#p').length === 0 && 
                     window.location.hash !== "#work") {                
                var loc = window.location.hash;
                var choppedLoc = loc.replace("#more-", "");
                $('#' + choppedLoc).click();            
            }
        },
        keyup: function(e){
            if (e.keyCode == 27) remove();
        },        
    }).unbind('scroll');  

    listItems.bind({ 
        mouseover: function() {
            var name = $(this).attr('id'), title = $(this).text();

            $(this).mousemove(function(e){
                background.css('backgroundPosition', e.pageX + 'px ' + e.pageY + 'px');
            });

            if ( $("#p").length == 0 ) background.addClass(name);


            _gaq.push(['_trackPageview', 'over-' + title]);
        },
        mouseout: function (){
            if ( $("#p").length == 0 ){
                background
                    .removeClass()
                    .children()
                    .remove();
            }
        },
        click: function(e){
            if ( !$(this).parent('ul').hasClass('no-modal') ){
                e.preventDefault();
                var descrip = $(this).attr('data-description'),
                title = $(this).text();

                background.css('z-index', 9999);

                $('body').append("<div id='title'><span class='the-title'>" + title + "</span></div>");
                var headline = $("#title");
                
                headline.css({ top: (e.clientY - headline.height() / 2), 
                               left: (e.clientX - headline.width() / 2),
                               position: 'fixed',
                               zIndex: 10000
                             });

                background
                    .append("<p></p>")
                    .type({ maxInterval: 5,
                            content: "<p id='p' style='top:0px' class='project-description'>" + descrip + "</p>",
                            callback: function(){
                                if ( $("#title").length == 0 ) $("#p").remove();
                            }
                          });

                if ( $(this).parent().attr('id') === 'press-list' ) {
                    $("#title").prepend("<span class='the-dash'>&mdash;</span>");
                }
                
                window.location.hash = "#more-" + $(this).attr('id');

                _gaq.push(['_trackPageview', 'click-' + title]);
            }
        }
    });


    $('nav a').click(function() {
        $(this)
            .addClass('selected')
            .siblings()
            .removeClass('selected');
    });

    $("#title").live('click', remove);
    $("#bg, #p").bind('click', remove);

    $('#demo-shadow').okshadow({
        xMax: 5,
        yMax: 5,
        fuzzMin: 1,
        fuzzMax: 10,
    });

    $('#demo-shadow2').okshadow({
        color: 'blue',
        textShadow: true,
        transparent: true,
        xMax: 0,
        yMax: 0,
        fuzzMin: 1.5,
        fuzz: 55
    });
});

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
 * okjavascript
 *
**/


$(function(){

	$('header').fadeIn(900);

    $('#ls').localScroll({
        lock: true,
        hash: true,
        duration: 400          
    });          
    
    var background = $('#bg');

    function remove() {
        background
            .css('z-index', 0)
            .removeClass()
            .children()
            .remove();

        $("#title").remove();
    }

    $('li').bind({ 
        mouseover: function() {
            var name = $(this).attr('id');

            $(this).mousemove(function(e){
                background.css('backgroundPosition', e.pageX + 'px ' + e.pageY + 'px');
            });

            if ( $("#p").length == 0 ) background.addClass(name);

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

});




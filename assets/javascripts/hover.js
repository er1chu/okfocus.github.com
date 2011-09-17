
var i = k = 0,
	f = false,
	t = bg_Name = "",
	browser_shit = !(typeof document.createElement("main").style.opacity != 'undefined');
window.onload = function() {
	var bg = document.getElementById('bg');
	function MMove(e) {
		e = e || window.event
		if (e.pageX == null && e.clientX != null ){ 
			var html = document.documentElement
			var body = document.body
			e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0)
			e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0)
		}
		bg.style.backgroundPosition = t = " "+(e.pageX-1450)+"px "+(e.pageY-1450)+"px";
	}
	if (document.layers) {document.captureEvents(Event.MOUSEMOVE);}
	document.onmousemove=MMove;
	var aObjects = document.getElementsByTagName('a');
	for( var i = 0; i < aObjects.length; i++) {
		aObjects[i].onmouseover = function() { 
			f=true; 
			var a_id = this.getAttribute("id");
			bgOver(a_id);
		}
	}
}
function bgOver(s) {
	f=false;
	i=100; 
	bg_Name = s;
	k=10;
	bgDel_scroll_d();
}
function bgDel() {
	f=false;
	i=100;
	bg_Name = "none";
	k=10;
	bgDel_scroll_d();
}
function bgDel_scroll_d() {
	if (f == false) {
		if(browser_shit) {
			i-=k*2;
			document.getElementById('bg').style.filter = 'alpha(opacity='+i+')';
		} else {
			i-=k;
			document.getElementById('bg').style.opacity = (i/20)
		}
		if (i > 0) setTimeout(bgDel_scroll_d,2);
		else {
			document.getElementById('bg').className=bg_Name; 
			i=0;
			bgDel_scroll_u();
		}
	}
}
function bgDel_scroll_u() { 
	if (f == false) {
		if(browser_shit) {
			i+=10;
			document.getElementById('bg').style.filter = 'alpha(opacity='+i+')';
		}else {
			i+=5;
			document.getElementById('bg').style.opacity = (i/20)
		}
		if ( (i < 100) && (f==false) ) setTimeout(bgDel_scroll_u,2);
		else if (browser_shit) document.getElementById('bg').style.filter = 'alpha(opacity=100)';
		else document.getElementById('bg').style.opacity = "1"
	}
}

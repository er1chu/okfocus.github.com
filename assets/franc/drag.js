var POST_WIDTH = $(window).width() + 200;
var BOTTOM_SHIM = $(window).height() + 200;
var RIGHT_SHIM = 300;
var STEPS = 10;
var PADDING = 1000
var EASING = "easeOutExpo";

var TOPSHIM = 0;
var Images = {
  pages: {},
  repage: function () {
    var iz = document.getElementsByTagName("div");
    var posts = [];
    for (var i = 0, len = iz.length; i < len; i++) {
      if (iz[i].className === "post") {
        iz[i].id = "post_" + i
        posts.push(iz[i]);
      }
    }
    TOPSHIM = $("#logo").height() + 50;
    var leftshim = 100;
    var canvas_height = $("#canvas-handle").height();
    var canvas_width = $("#canvas-handle").width();
    var window_width = $(window).width();
    var window_height = $(window).height();

    var post_width = POST_WIDTH;
    var heights = [TOPSHIM,TOPSHIM,TOPSHIM,TOPSHIM];

    var titles = [];
    Images.first_id = false;
    for (idx in posts) {
      var i = idx % 4;
      var p = posts[idx];
      var w = $("#"+p.id).width();
      var h = $("#"+p.id).height();
      p.style.top = (heights[i]) + "px"
      p.style.left = ((post_width * i) + RIGHT_SHIM) + ((post_width - w) / 2) + "px"
      heights[i] = (h + BOTTOM_SHIM + heights[i])
      var children = p.childNodes;
      var title = false;
      if (! Images.first_id)
        Images.first_id = "title_"+p.id
      for (i in children) {
        if (children[i].className === "title") {
          title = "<option id='title_"+p.id+"'>"+children[i].innerHTML+"</option>";
          break;
        }
      }
      if (! title)
        title = "<option id='title_"+p.id+"'>"+idx+"</option>";
      titles.push(title);
      Images.pages["title_"+p.id] = [p.style.top, p.style.left];
    }
    document.getElementById("navz").innerHTML = titles.join("");
    $("#canvas-handle").animate({opacity: 1}, 200)
    Images.home()
    $("#navz").bind("change", Images.pick);
    $("#mark").bind("click", Images.home);
  },
  home: function () {
    Images.go(Images.first_id);
  },
  pick: function () {
    var id = $("select option:selected")[0].id
    Images.go(id);
  },
  go: function (id) {
    var it = Images.pages[id];
    x = parseInt(it[1].replace("px", ""));
    y = parseInt(it[0].replace("px", ""));
    var easeType = EASING;
    $('#canvas-handle').animate({ left: -x+100, top: -y+TOPSHIM}, 700, easeType );
  },
}

function images_loaded() {
  document.getElementById('LB0').style.display='none';
  Images.repage()
}
function images_loading_bar() {
  m02=0;
  for (i=0;i<m01;i++)
    m02 += (m00[i].complete) ? 1 : 0;
  document.getElementById("LB1").style.width = Math.round(m02/m01*100)+'px';
  if (m02 == m01)
    setTimeout("images_loaded()", 128);
  else
    setTimeout("images_loading_bar()", 64);
};


$(document).ready(function () {
  m00 = document.getElementById("canvas-handle").getElementsByTagName("img");
  m01=m00.length;
  images_loading_bar();

    $('#canvas-handle').draggable({
        start: function(e, ui) {
            $("#canvas-handle").addClass("dragging");
            dragMomentum.start(this.id, e.clientX, e.clientY, e.timeStamp);
         },
        stop: function(e, ui) {
            $("#canvas-handle").removeClass("dragging");
            dragMomentum.end(this.id, e.clientX, e.clientY, e.timeStamp);
        }  
     });
});

var dragMomentum = new function () {    
    var howMuch = 120;  // change this for greater or lesser momentum
    var minDrift = 6; // minimum drift after a drag move
    var easeType = EASING;

    //  This easing type requires the plugin:  
    //  jquery.easing.1.3.js  http://gsgd.co.uk/sandbox/jquery/easing/

    var dXa =[0];
    var dYa =[0];
    var dTa =[0];

    this.start = function (elemId, Xa, Ya, Ta)  {
        $('#'+elemId).stop();
        dXa[elemId] = Xa;
        dYa[elemId] = Ya;
        dTa[elemId] = Ta;

      }; // END dragmomentum.start()

    this.end = function (elemId, Xb, Yb, Tb)  {        
        var Xa = dXa[elemId];
        var Ya = dYa[elemId];
        var Ta = dTa[elemId];
        var Xc = 0;
        var Yc = 0;

        var dDist = Math.sqrt(Math.pow(Xa-Xb, 2) + Math.pow(Ya-Yb, 2));
        var dTime = Tb - Ta;
        var dSpeed = dDist / dTime;
        dSpeed=Math.round(dSpeed*100)/100;

        var distX =  Math.abs(Xa - Xb);
        var distY =  Math.abs(Ya - Yb);

        var dVelX = (minDrift+(Math.round(distX*dSpeed*howMuch / (distX+distY))));
        var dVelY = (minDrift+(Math.round(distY*dSpeed*howMuch / (distX+distY))));

        var position = $('#'+elemId).position();
        var locX = position.left;
        var locY = position.top;

        if ( Xa > Xb ){  // we are moving left
            Xc = locX - dVelX;
        } else {  //  we are moving right
            Xc = locX + dVelX;
        }

        if ( Ya > Yb ){  // we are moving up
            Yc = (locY - dVelY);
        } else {  // we are moving down
            Yc = (locY + dVelY);
        }

        // must CLAMP the x and y so we don't lose control
        var drag = $("#canvas-handle").data('draggable')

        function clamp (x, min, max) { return Math.max(min, Math.min(max, x)) }

        var el = $("#canvas-handle")
        var xmin = window.innerWidth - el.width()
        var ymin = window.innerHeight - el.height()
        Xc = clamp(Xc, xmin, 0)
        Yc = clamp(Yc, ymin, 0)

        var newLocX = Xc + 'px';
        var newLocY = Yc + 'px';

        $('#'+elemId).animate({ left:newLocX, top:newLocY }, 700, easeType );

    }; // END  dragmomentum.end()

};  // END dragMomentum()


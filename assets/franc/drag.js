var POST_WIDTH = $(window).width();
var BOTTOM_SHIM = $(window).height();
var RIGHT_SHIM = 300;
var STEPS = 10;
var EASING = "easeOutExpo";

var TOPSHIM = 0;

var Images = {
  first_id: false,
  pages: {},
  hashes: {},
  repage: function () {
    var posts = find_posts();
    TOPSHIM = $("#logo").height() + 50;
    var heights = [TOPSHIM, TOPSHIM, TOPSHIM, TOPSHIM];
    var title_divs = [];
    for (idx in posts) {
      var column = idx % 4;
      var post = posts[idx];
      var w = $("#"+post.id).width();
      var h = $("#"+post.id).height();
      var top_offset = heights[column];
      var left_offset = POST_WIDTH * column + RIGHT_SHIM + (POST_WIDTH - w) / 2;
      heights[column] += Math.max(BOTTOM_SHIM, h + 200)

      post.style.left = left_offset + "px";
      post.style.top = top_offset + "px";

      var title = get_title_from_caption(post, idx);
      var title_id = "title_" + post.id;
      var title_div = "<option id='" + title_id + "'>" + title + "</option>";
      title_divs.push(title_div);

      var hash = title.replace(/[^ a-zA-Z0-9]/g, "").replace(/ /g, "-").toLowerCase()
      Images.hashes[hash] = title_id;
      Images.pages[title_id] = [left_offset, top_offset, w, h, hash];

      if (! Images.first_id)
        Images.first_id = title_id;
    }
    document.getElementById("navz").innerHTML = title_divs.join("");
    document.getElementById("navz").style.display = "inline"
    $("#canvas-handle").animate({opacity: 1}, 200)
    $("#navz").bind("change", Images.pick);
    $("#mark").bind("click", Images.home);
    Images.home()
  },
  home: function () {
    $("html,body").css({"position": "fixed", "top": "0", "left": "0"});
    var hash = window.location.hash.replace("#","");
    if (Images.hashes[hash])
      Images.go(Images.hashes[hash]);
    else
      Images.go(Images.first_id);
  },
  pick: function () {
    var id = $("select option:selected")[0].id
    Images.go(id);
  },
  go: function (id) {
    var it = Images.pages[id];
    x = it[0];
    y = it[1];
    var easeType = EASING;
    $('#canvas-handle').animate({ left: -x+400, top: -y+TOPSHIM}, 700, easeType );
    update_hash(-x+400, -y+TOPSHIM);
  },
}

var update_hash = function (x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  var width = $(window).width();
  var height = $(window).height();
  for (key in Images.pages) {
    var page = Images.pages[key];
    var pagex = page[0];
    var pagey = page[1];
    var pagew = page[2];
    var pageh = page[3];
    if ((pagex < x + width) && (x < pagex + pagew) &&
        (pagey < y + height) && (y < pagey + pageh)) {
      window.location.hash = page[4];
      $("#navz option:selected").removeAttr("selected");
      $("#" + key).attr("selected", "selected");
      return;
    }
  }
}

var find_posts = function () {
  var posts = [];
  var iz = document.getElementsByTagName("div");
  for (var i = 0, len = iz.length; i < len; i++) {
    if (iz[i].className === "post") {
      iz[i].id = "post_" + i
      posts.push(iz[i]);
    }
  }
  return posts;
}
var get_title_from_caption = function (post, offset) {
  var children = post.childNodes;
  var title = false;
  for (i in children) {
    if (title)
      break;
    if (children[i].className === "title") {
      title = children[i].innerHTML;
    } else if (children[i].className === "copy") {
      var subchildren = children[i].childNodes;
      for (j in subchildren) {
        if (! title) {
          inner = subchildren[j].innerHTML.replace(/<[^>]+>/g, "")
          if (inner.length) {
            title = inner;
          }
        }
      }
    }
  }
  if (! title)
    title = "Post #" + idx;
  return title;
}

function images_loaded() {
  document.getElementById('LB0').style.display='none';
  Images.repage();
  inject_photoset_css();
}

function images_loading_bar() {
  m02=0;
  for (i=0;i<m01;i++)
    m02 += (m00[i].complete) ? 1 : 0;
  document.getElementById("LB1").style.width = Math.round(m02/m01*100)+'px';
  if (m02 == m01)
    setTimeout(images_loaded, 128);
  else
    setTimeout(images_loading_bar, 64);
};


$(document).ready(function () {
  m00 = document.getElementById("canvas-handle").getElementsByTagName("img");
  m01=m00.length;
  images_loading_bar();

  // $('img').bind("onmousedown", function (e) { if (e) e.preventDefault() });

  $('#canvas-handle').draggable({
    start: function(e, ui) {
      $("#canvas-handle").addClass("dragging");
      dragMomentum.start(this.id, e.clientX, e.clientY, e.timeStamp);
    },
    stop: function(e, ui) {
      $("#canvas-handle").removeClass("dragging");
      dragMomentum.end(this.id, e.clientX, e.clientY, e.timeStamp);
      // e.preventDefault();
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
  };

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
    var xmin = $(window).width() - el.width()
    var ymin = $(window).height() - el.height()
    Xc = clamp(Xc, xmin, 0)
    Yc = clamp(Yc, ymin, 0)

    var newLocX = Xc + 'px';
    var newLocY = Yc + 'px';

    $('#'+elemId).animate({ left:newLocX, top:newLocY }, 700, easeType );

    update_hash(Xc, Yc);
  };
};


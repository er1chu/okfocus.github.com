var POST_WIDTH = $(window).width(),
    BOTTOM_SHIM = $(window).height(),
    POSTS_PER_ROW = 4,
    LEFT_SHIM = 100 + ($(window).width() - 1000) / 2,
    EASING = "easeOutExpo",
    // SELECT_HEADING = "PROJECTS",
    TOPSHIM = 0,
    wrapper_id = "#canvas-handle",
    first_id = false,
    pages_by_id = {},
    ids_by_hash = {},
    COLUMN_HEIGHTS = [],
    PAGE = 1,
    loading_div = null,
    loaded_sidebar = false,
    finished = false,
    index = 1;

var title_option = function (id, title) {
  if (title === "-")
    return "<option id='none'>-</option>";
  return "<option id='" + id + "'>" + title + "</option>";
}

var load_next_page = function () {
  if (finished) {
    return;
  }
  PAGE += 1;
  loading_div = $("<div/>");
  $(loading_div).load("/page/" + PAGE + " .post", null, load_callback);
}

var load_callback = function () {
  var posts = find_posts(loading_div);
  if (posts.length > 0)
    {
    var fragment = document.createDocumentFragment();
    repage(posts);
    for (var i = 0; i < posts.length; i++)
      fragment.appendChild( posts[i] );
    document.getElementById("canvas-handle").appendChild( fragment );
    // $('#canvas-handle').stop()
    }
  else
    finished = true;
}

var repage_init = function () {
  TOPSHIM = $("#logo").height() + 50;
  for (var i = 0; i < POSTS_PER_ROW; i++) {
    COLUMN_HEIGHTS.push(0);
  }
}
var repage = function (posts) {
  for (var i = 0; i < POSTS_PER_ROW; i++) {
    COLUMN_HEIGHTS[i] += TOPSHIM;
  }
  for (var idx in posts) {
    var column = idx % POSTS_PER_ROW;
    var post = posts[idx];

    var title = get_title_from_caption(post, index);
    var title_id = "title_" + post.id;
    $("#navz").append(title_option(title_id, title));

    if (title === "-") {
      $(post).hide();
      continue;
    }

    var w = $("#"+post.id).width();
    var h = $("#"+post.id).height();
    var post_shim = LEFT_SHIM //  + (POST_WIDTH - w) / 2;

    var top_offset = COLUMN_HEIGHTS[column];
    var left_offset = POST_WIDTH * column + post_shim;

    COLUMN_HEIGHTS[column] += Math.max(BOTTOM_SHIM, h + 200)

    post.style.left = left_offset + "px";
    post.style.top = top_offset + "px";
    post.style.display = "none"

    var hash = title.replace(/&amp;/g, "and").replace(/&quot;/g, "").replace(/_/g, "-").replace(/[^ a-zA-Z0-9]/g, "").replace(/ /g, "-").toLowerCase()
    ids_by_hash[hash] = title_id;
    pages_by_id[title_id] = [left_offset, top_offset, w, h, hash];

    if (! first_id)
      first_id = title_id;
    index += 1;
  }
  var total_width = Math.floor(POST_WIDTH * (POSTS_PER_ROW + 0.5))
  var total_height = 0;
  for (var i = 0; i < POSTS_PER_ROW; i++)
    total_height = Math.max(total_height, COLUMN_HEIGHTS[i]);
  $(wrapper_id).css({"width": total_width, "height": total_height})
  $(wrapper_id).animate({"opacity": 1 }, 200);
  $(".post").fadeIn(500);
  $("#navz").css("display", "inline");
  $("#navz").bind("change", pick);
  $("#mark").bind("click", go_home);
  // $("#navz").prepend(title_option("heading", SELECT_HEADING));
}

var go_home = function () {
  $("html,body").css({"position": "fixed", "top": "0", "left": "0"});
  var hash = window.location.hash.replace("#","");
  if (ids_by_hash[hash])
    go(ids_by_hash[hash]);
  else
    go(first_id);
}

var pick = function () {
  var id = $("select option:selected")[0].id;
  if (id)
    go(id);
}

var go = function (id) {
  var it = pages_by_id[id];
  x = it[0];
  y = it[1];
  var easeType = EASING;
  $(wrapper_id).animate({ left: -x+400, top: -y+TOPSHIM}, 700, easeType );
  update_hash(-x+400, -y+TOPSHIM);
}

var update_hash = function (x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  var width = $(window).width();
  var height = $(window).height();
  for (key in pages_by_id) {
    var page = pages_by_id[key];
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

var post_index = 0;
var find_posts = function (container) {
  var posts = [];
  if (! container)
    container = $(wrapper_id);
  container.children().each(function () {
    if (this.id === "sidebar")
      {
      if (loaded_sidebar)
        return;
      loaded_sidebar = true;
      }

    if (this.className === "post") {
      this.id = "post_" + post_index;
      posts.push(this);
    }
    post_index += 1;
  });
/*
  var iz = document.getElementsByTagName("div");
  for (var i = 0, len = iz.length; i < len; i++) {
    if (iz[i].className === "post") {
      iz[i].id = "post_" + i
      posts.push(iz[i]);
    }
  }
*/
  return posts;
}

var get_title_from_caption = function (post, index) {
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
    title = "Post #" + index;
  return title;
}

var images_loaded = function () {
  document.getElementById('LB0').style.display = 'none';
  var posts = find_posts();
  repage_init();
  repage(posts);
  go_home()
  // inject_photoset_css();
}

var images_loading_bar = function () {
  m02 = 0;
  for (var i = 0; i < m01; i++)
    m02 += m00[i].complete ? 1 : 0;
  document.getElementById("LB1").style.width = Math.round(m02/m01*100)+'px';
  if (m02 === m01)
    setTimeout(images_loaded, 128);
  else
    setTimeout(images_loading_bar, 64);
};

var dragging = false;
$(document).ready(function () {
  m00 = document.getElementById("canvas-handle").getElementsByTagName("img");
  m01 = m00.length;
  images_loading_bar();

  // $('img').bind("onmousedown", function (e) { if (e) e.preventDefault() });

  $(wrapper_id).draggable({
    start: function(e, ui) {
      $(wrapper_id).addClass("dragging");
      dragMomentum.start(this.id, e.clientX, e.clientY, e.timeStamp);
      dragging = true;
    },
    stop: function(e, ui) {
      $(wrapper_id).removeClass("dragging");
      dragMomentum.end(this.id, e.clientX, e.clientY, e.timeStamp);
      setTimeout('dragging = false', 50);
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
    dSpeed = Math.round(dSpeed*100)/100;

    var distX =  Math.abs(Xa - Xb);
    var distY =  Math.abs(Ya - Yb);

    var dVelX = (minDrift+(Math.round(distX*dSpeed*howMuch / (distX+distY))));
    var dVelY = (minDrift+(Math.round(distY*dSpeed*howMuch / (distX+distY))));

    var position = $('#'+elemId).position();
    var locX = position.left;
    var locY = position.top;

    if ( Xa > Xb ) {  // we are moving left
      Xc = locX - dVelX;
    } else {  //  we are moving right
      Xc = locX + dVelX;
    }

    if ( Ya > Yb ) {  // we are moving up
      Yc = (locY - dVelY);
    } else {  // we are moving down
      Yc = (locY + dVelY);
    }

    // must CLAMP the x and y so we don't lose control
    var drag = $("#"+elemId).data('draggable')

    function clamp (x, min, max) { return Math.max(min, Math.min(max, x)) }

    var el = $("#"+elemId)
    var xmin = $(window).width() - el.width()
    var ymin = $(window).height() - el.height()
    Xc = clamp(Xc, xmin, 0)
    Yc = clamp(Yc, ymin, 0)

    update_hash(Xc, Yc);

    if (Yc < ymin + 300)
      {
      load_next_page();
      Yc = ymin;
      }

    var newLocX = Xc + 'px';
    var newLocY = Yc + 'px';
    $('#'+elemId).animate({ left: newLocX, top: newLocY }, 700, easeType );
  };
};


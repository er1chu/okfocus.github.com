function inject_photoset_css () {
  $("iframe").each(function() {
    if ($(this).attr("src").indexOf("assets.tumblr.com") !== -1)
      return;
    var contents = $(this).contents();
    var photoset_div = contents.find("div")[0]
    var photoset_script = contents.find("script")[0].innerHTML.replace(/window\.parent\./g, "");
    $(this).replaceWith(photoset_div);
    $.globalEval(photoset_script)
  });
}


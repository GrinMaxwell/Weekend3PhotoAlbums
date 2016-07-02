var $main = $('.container');
var $header = $('.heading');
var tileHTML = '<li><img src=""/><h4 class="label"></h4></li>';
var gapHTML = '<div class="gap"></div>';
var buttonHTML = '<input type="button" class="album-button"/>';


$(document).ready(function() {


data.forEach(function(album, ia, arr) {

  var $albumThumb = $(tileHTML);

  $albumThumb.children('img').attr('src', album.albumPics[0].path);
  $albumThumb.children('img').addClass('thumbnail');
  $albumThumb.children('h4').text(album.albumName);

  $albumThumb.addClass('album');
  $albumThumb.addClass('tile');
  $main.append($albumThumb);

  if (((ia+1)%4)===0 && ia !== 0) {
    $albumThumb.addClass('omega');
  }


  $albumThumb.on('click', function functionName() {

    $header.text(album.albumName);
    $main.children('.album').addClass('hide');
    $main.children('.album').removeClass('tile');

    album.albumPics.forEach(function(picture, ib) {

      var $picThumb = $(tileHTML);
      $picThumb.children('img').attr('src', picture.path);
      $picThumb.children('img').addClass('thumbnail');
      $picThumb.children('h4').text(picture.caption);
      $picThumb.addClass('pic');
      $picThumb.addClass('tile');
      $main.append($picThumb);

      if (ib%4===0) {
        $picThumb.addClass('omega');
      }

    });

    var $sidebar = $('<aside class="sidebar"></aside>');
    arr.forEach(function(album, ic) {
      var $albumButton = $(buttonHTML);
      $albumButton.attr('value', album.albumName);
      $sidebar.append($albumButton);

    });
    $main.append($sidebar);
  });


});











});//end doc.ready

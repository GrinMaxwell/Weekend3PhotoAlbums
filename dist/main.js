var $albumMain = $('.album-container');
var $picMain = $('.pic-container');
var $picList = $('.picture-list');

var $header = $('.heading');

var tileHTML = '<li><img src=""/><h4 class="label"></h4></li>';
var gapHTML = '<div class="gap"></div>';
var buttonHTML = '<input type="button" class="album-button"/>';
var pictureHTML = '<div class="picture"><img src=""/><h6 class="caption"></h6></div>';
var $body = $('body');
var renders = [];

// var $grid = $('.grid').masonry({
//   columnWidth: 10,
//   itemSelector: '.grid-item',
//
// });


$(document).ready(function() {

  // $grid.imagesLoaded().progress( function() {
  //   $grid.masonry('layout');
  // });

data.forEach(function(album, ia, arr) {

  var $albumThumb = $(tileHTML);

  $albumThumb.children('img').attr('src', album.albumPics[0].path);
  $albumThumb.children('img').addClass('thumbnail');
  $albumThumb.children('h4').text(album.albumName);

  $albumThumb.addClass('album');
  $albumThumb.addClass('grid-item');
  // $albumThumb.addClass('tile');
  $albumMain.append($albumThumb);

  if (((ia+1)%4)===0 && ia !== 0) {
    $albumThumb.addClass('omega');
  }


  $albumThumb.on('click', function () {
    $header.text(album.albumName);
    $albumMain.addClass('hide');
    $albumMain.removeClass('show');
    renders.push(album.albumName);
    console.log(renders);

    // $albumMain.children('.album').removeClass('tile');

    album.albumPics.forEach(function(picture, ib) {

      $picMain.addClass('show');
      $picMain.removeClass('hide');


      var $picThumb = $(tileHTML);
      $picThumb.children('img').attr('src', picture.path);
      $picThumb.children('img').addClass('thumbnail');
      $picThumb.children('h4').text(picture.picName);

      $picThumb.addClass('show');
      $picThumb.addClass('grid-item');
      // $picThumb.addClass('tile');

      $picList.append( $picThumb);

      if (((ib+1)%3)===0 && ib !== 0) {
        $picThumb.addClass('omega');
      } else if ((ib%3)===0 && ib !== 0) {
        $picThumb.addClass('row-first');
      }

      $picThumb.on('click', function() {

        $header.text(picture.picName);
        $picMain.addClass('hide');
        $picMain.removeClass('show');

        var $picture = $('pictureHTML');
        $picture.children('img').attr('src', picture.path);
        $picture.children('img').addClass('thumbnail');
        $picThumb.children('h6').text(picture.caption);

      });

      // if (ib%4===0) {
      //   $picThumb.addClass('omega');
      // }

    });

    var $sidebar = $('<aside class="sidebar"></aside>');
    arr.forEach(function(album, ic) {
      var $albumButton = $(buttonHTML);
      $albumButton.attr('value', album.albumName);
      $sidebar.append($albumButton);

      $sidebar.addClass('sidebar');

      $picMain.append($sidebar);

    });




  });


});











});//end doc.ready

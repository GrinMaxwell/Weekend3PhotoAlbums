var $albumMain = $('.album-container');
var $picMain = $('.pic-container');
var $picList = $('.picture-list');
var $singlePic = $('.picture-view');
var $header = $('.heading');

var tileHTML = '<li><img src=""/><h4 class="label"></h4></li>';
var gapHTML = '<div class="gap"></div>';
var buttonHTML = '<input type="button" class="album-button"/>';
var pictureHTML = '<div class="picture"><input type="button" class="back-button"/><img src=""/><h5 class="caption"></h6></div>';
var mainHTML ='<section class=""></section>';

var last;

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

//initial render
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
  $albumThumb.on('click', albumRender(evt));
});


  function albumRender (evt) {
    last = evt.target;
    $header.text(data[ia].album.albumName);
    $albumMain.addClass('hide');
    $albumMain.removeClass('show');
    renders[0] = data[ia].album.albumName;
    console.log(renders);

    // $albumMain.children('.album').removeClass('tile');

    data[ia].album.albumPics.forEach(function(picture, ib, arr) {

      $picMain.addClass('show');
      $picMain.removeClass('hide');


      var $picThumb = $(tileHTML);
      $picThumb.children('img').attr('src', picture.path);
      $picThumb.children('img').addClass('thumbnail');
      $picThumb.children('h4').text(picture.picName);

      $picThumb.addClass('show');
      $picThumb.addClass('grid-item');
      // $picThumb.addClass('tile');

      $picList.append($picThumb);

      if (((ib+1)%3)===0 && ib !== 0) {
        $picThumb.addClass('omega');
      } else if ((ib%3)===0 && ib !== 0) {
        $picThumb.addClass('row-first');
      }

      $picThumb.on('click', picRender(evt));

      // if (ib%4===0) {
      //   $picThumb.addClass('omega');
      // }

    });

    var $sidebar = $('<aside class="sidebar"></aside>');
    arr.forEach(function(album, ic) {
      var $albumButton = $(buttonHTML);
      $albumButton.attr('value', album.albumName);
      $sidebar.append($albumButton);

      $albumButton.on('click',function () {

      });

      $sidebar.addClass('sidebar');

      $picMain.append($sidebar);
    });
}//end albumRender

function picRender (evt) {
  last = evt.target;
 $header.text(data[ia].albumPics[ib].picName);
 $picMain.addClass('hide');
 $picMain.removeClass('show');

 $singlePic.addClass('show');
 $singlePic.removeClass('hide');

 renders[1] = data[ia].albumPics[ib].picName;

 var $fullPic = $(pictureHTML);
 $fullPic.children('img').attr('src', data[ia].albumPics[ib].path);
 $fullPic.children('h5').text(data[ia].albumPics[ib].caption);
 $fullPic.children('input').attr('value', ('Back to '+data[ia].albumName));

 $fullPic.addClass('show');
 $singlePic.append($fullPic);
 console.log($fullPic);
 console.log($singlePic);

}










});//end doc.ready

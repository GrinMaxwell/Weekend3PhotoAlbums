var $albumMain = $('.album-container');
var $picMain = $('.pic-container');
var $picList = $('.picture-list');
var $singlePic = $('.picture-view');
var $header = $('.heading');
var albumButtons = $('.album-button');
var picClick = $('.pic-click');

var tileHTML = '<li><img src=""/><h4 class="label"></h4></li>';
var gapHTML = '<div class="gap"></div>';
var buttonHTML = '<input type="button" class="album-button"/>';
var pictureHTML = '<div class="picture"><input type="button" class="back-button"/><img src=""/><h5 class="caption"></h6></div>';
var mainHTML = '<section class=""></section>';

var target;
var targetSrc;
var currentAlbumIndex;

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
    data.forEach(function(album, i, arr) {

        var $albumThumb = $(tileHTML);

        $albumThumb.children('img').attr('src', album.albumPics[0].path);
        $albumThumb.children('img').addClass('thumbnail');
        $albumThumb.children('h4').text(album.albumName);

        $albumThumb.addClass('album');
        $albumThumb.addClass('grid-item');
        $albumThumb.addClass('album-click');
        // $albumThumb.addClass('tile');
        $albumMain.append($albumThumb);

        if (((i + 1) % 4) === 0 && i !== 0) {
            $albumThumb.addClass('omega');
        }
    });


    //the album rendering function
    $('.album-click').on('click', function albumRender(evt) {
        target = evt.target;
        targetSrc = $(target).attr('src');
        data.forEach(function(album, i, arr) {
            if (targetSrc === data[i].albumPics[0].path) {

                currentAlbumIndex = i;

                $header.text(data[i].albumName);
                $albumMain.addClass('hide');
                $albumMain.removeClass('show');
                renders[0] = data[i].albumName;

                // $albumMain.children('.album').removeClass('tile');

                data[i].albumPics.forEach(function(picture, ib, arr) {

                    $picMain.addClass('show');
                    $picMain.removeClass('hide');


                    var $picThumb = $(tileHTML);
                    $picThumb.children('img').attr('src', picture.path);
                    $picThumb.children('img').addClass('thumbnail');
                    $picThumb.children('h4').text(picture.picName);

                    $picThumb.addClass('show');
                    $picThumb.addClass('grid-item');
                    $picThumb.addClass('pic-click');
                    // $picThumb.addClass('tile');

                    $picList.append($picThumb);

                    if (((ib + 1) % 3) === 0 && ib !== 0) {
                        $picThumb.addClass('omega');
                    } else if ((ib % 3) === 0 && ib !== 0) {
                        $picThumb.addClass('row-first');
                    }


                    // if (ib%4===0) {
                    //   $picThumb.addClass('omega');
                    // }

                });

                var $sidebar = $('<aside class="sidebar"></aside>');
                arr.forEach(function(album, ic) {
                    var $albumButton = $(buttonHTML);
                    $albumButton.attr('value', album.albumName);
                    $albumButton.addClass('album-button');
                    $sidebar.append($albumButton);

                    $sidebar.addClass('sidebar');

                    $picMain.append($sidebar);
                });
            }
        });
    }); //end albumRender

    //album sidebar navigation (copying almost the entirety of albumRender, because I couldn't get it to work as an independent function for some reason)
    albumButtons.on('click', function albumRender(evt) {
          target = evt.target.value;
          data.forEach(function(album, i, arr) {
              if (target === data[i].albumName) {
                  $picMain.empty();
                  var $picList = $('<ul class="picture-list grid"></ul>');
                  $picMain.append($picList);

                  currentAlbumIndex = i;

                  $header.text(data[i].albumName);
                  renders[0] = data[i].albumName;

                  // $albumMain.children('.album').removeClass('tile');

                  data[i].albumPics.forEach(function(picture, ib, arr) {

                      var $picThumb = $(tileHTML);
                      $picThumb.children('img').attr('src', picture.path);
                      $picThumb.children('img').addClass('thumbnail');
                      $picThumb.children('h4').text(picture.picName);

                      $picThumb.addClass('show');
                      $picThumb.addClass('grid-item');
                      $picThumb.addClass('pic-click');
                      // $picThumb.addClass('tile');
                      console.log($picThumb);

                      $picList.append($picThumb);

                      if (((ib + 1) % 3) === 0 && ib !== 0) {
                          $picThumb.addClass('omega');
                      } else if ((ib % 3) === 0 && ib !== 0) {
                          $picThumb.addClass('row-first');
                      }


                      // if (ib%4===0) {
                      //   $picThumb.addClass('omega');
                      // }

                  });

                  var $sidebar = $('<aside class="sidebar"></aside>');
                  arr.forEach(function(album, ic) {
                      var $albumButton = $(buttonHTML);
                      $albumButton.attr('value', album.albumName);
                      $albumButton.addClass('album-button');
                      $sidebar.append($albumButton);

                      $sidebar.addClass('sidebar');

                      $picMain.append($sidebar);
                  });
              }
          });
      });//end the sidebar repeat of the entire albumrender function

    picClick.on('click', function picRender(evt) {
        target = evt.target;
        console.log(target);
        targetSrc = $(target).attr('src');
        data[currentAlbumIndex].forEach(function(pic, i, arr) {
            if (targetSrc === data[i].albumPics[0].path) {
                $header.text(data[i].albumPics[0].picName);
                $picMain.addClass('hide');
                $picMain.removeClass('show');

                $singlePic.addClass('show');
                $singlePic.removeClass('hide');

                renders[1] = data[ia].albumPics[ib].picName;

                var $fullPic = $(pictureHTML);
                $fullPic.children('img').attr('src', data[ia].albumPics[ib].path);
                $fullPic.children('h5').text(data[ia].albumPics[ib].caption);
                $fullPic.children('input').attr('value', ('Back to ' + data[ia].albumName));

                $fullPic.addClass('show');
                $singlePic.append($fullPic);
                console.log($fullPic);
                console.log($singlePic);
            }
        });
    });








}); //end doc.ready

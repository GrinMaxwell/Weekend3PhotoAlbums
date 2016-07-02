# Photo Album Viewer

### Assignment: Create a photo gallery application which allows users to view their albums as well as the individual photos contained within. We'll implement this as a single page application (SPA).

## Build Order
1. Initialize file structure (set up dist and app directories, make all the basic files: index.html, main.js, main.scss--compiling to main.css, data.js, readme.md, .gitignore and .surgeignore)
2. Basic HTML - but leave header/footer empty to populate the contents via javascript and jquery
3. Connect everything and test it's connections (log something to console from data.js and add some css to the app div)
4. some basic SCSS styles, set up bourbon and neat (since we'll want neat to make all the spacing tidy and easy)
5. Start writing the javascript and jquery to manifest the start page
6. finished the basics for the first page, started the interior of an album (all wrapped inside an `.on('click')` to render the pictures page)
7. fiddled with different ways of formatting, first trying 'neat', then running into some issues (see issue 1) and then trying 'masonry' (see issue 2), ended up returning to 'neat'.
8. finished building album view and the basics of the album view sidebar, then worked on building picture view (inside another `.on('click')`)

## Issues
1. having issues with neat in SASS (tried `@include omega(4n)` on all tiles and then later an `if(i%4===0)` statement, no luck, both still always adding `.omega` to the first or second pic, not the fourth) because when I hid the albums I still had them in the same container as the pictures, so the albums would still count as children and throw off the omega count. Jess suggested I put them in entirely different containers, which containers I would then hide or show. Makes more semantic sense, too.
2. A quick search unearthed a javascript library called Masonry (http://masonry.desandro.com/) which might also be a much better fit than neat for making tiled layouts. He has another handy library called 'imagesLoaded' to make sure that all the images are fully loaded before running the layout, which keeps it from breaking. I'm trying including both.
  - Having issues getting all the Masonry methods to work right. Suddenly all the images are cascading down the page really weirdly. Maybe not worth it after all. Reverting to neat again.

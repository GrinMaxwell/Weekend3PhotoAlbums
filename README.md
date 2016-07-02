# Photo Album Viewer

### Assignment: Create a photo gallery application which allows users to view their albums as well as the individual photos contained within. We'll implement this as a single page application (SPA).

## Build Order
1. Initialize file structure (set up dist and app directories, make all the basic files: index.html, main.js, main.scss--compiling to main.css, data.js, readme.md, .gitignore and .surgeignore)
2. Basic HTML - but leave header/footer empty to populate the contents via javascript and jquery
3. Connect everything and test it's connections (log something to console from data.js and add some css to the app div)
4. some basic SCSS styles, set up bourbon and neat (since we'll want neat to make all the spacing tidy and easy)
5. Start writing the javascript and jquery to manifest the start page

## Issues
1. having issues with neat in SASS (`@include omega(4n)`) because when I hid the albums I still had them in the same container as the pictures, so the albums would still count as children and throw off the omega count. Jess suggested I put them in entirely different containers, which containers I would then hide or show. Makes more semantic sense, too.

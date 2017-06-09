# Must-Knows

### Relative Sizing

* [Fixed size image](http://udacity.github.io/responsive-images/examples/1-07/singleImage640x360/)
* [width: 100%](http://udacity.github.io/responsive-images/examples/1-07/singleImageNotBigEnough100pc/)
* [max width: 100%](http://udacity.github.io/responsive-images/examples/1-07/singleImageMaxWidth100pc/)
* [Two images, 50% width](http://udacity.github.io/responsive-images/examples/1-07/twoImages50pc)
* [Two images, 50% width with margin](http://udacity.github.io/responsive-images/examples/1-07/twoImages50pcWithMargin)
    ```CSS
    body {
        margin: 0;
    }
    img {
        margin-right: 10px;
        max-width: 426px;
        width: calc((100% - 10px)/2);
    }
    img:last-of-type {
        margin-right: 0;
    }
    ```

### Less Well Known CSS Units

* 100vh -- 100% view port height
* 100vw -- 100% view port width
* 100vmin -- 100% view port whichever is smaller
* 100vmax -- 100% view port whichever is bigger

    :+1: Setting both the height and the width to 100vmax or 100vmin changes the
    image's aspect ratio? It'll compress your images to squares, so be careful if you want to maintain a different aspect ratio!

### Raster And Vector

* [Difference Between PNG and SVG](http://udacity.github.io/responsive-images/examples/1-11/svgVersusPng/)
* [Difference Between SVG PNG JPEG](http://udacity.github.io/responsive-images/examples/1-15/svgPngJpg/)
* Using devTool to check if they are PNG or SVG
    * Raster : JPEG || WebP
    * Vector : SVG || PNG

### WHICH FORMAT IS BEST?

>Unfortunately, there is no right answer. You need to determine which file format is most appropriate for the content of that image. If you’re looking to include animation, the GIF format is the obvious choice. Need your photographs to retain their detail and color? Go with a JPEG. To recap:

* JPEG

    * Great for images when you need to keep the size small
    * Good option for photographs
    * Bad for logos, line art, and wide areas of flat color

* GIF

    * Great for animated effects
    * Nice option for clip art, flat graphics, and images that use minimal
    * colors and precise lines
    * Good option for simple logos with blocks of colors

* PNG

    * Lossless
    * Excellent choice when transparency is a must
    * Good option for logos and line art
    * Not supported everywhere

>The best tools for judging which image format looks best are your eyes—and Litmus, of course! Preview how your emails (and images) render in over 40 email clients.

### Other materials

* [Image formats](https://litmus.com/blog/png-gif-or-jpeg-which-ones-should-you-use-in-email)

* [Image optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

* [More about WebP](https://developers.google.com/speed/webp/?csw=1)

* [Browser support for WebP](http://caniuse.com/#feat=webp)

### Compression, Optimization And Automation Tools
* GraphicsMagic & ImageMagick
* Grunt:
* Files used in scripting examples:
* Image processing tools:

### Increase the performance under HTTP1

To get websites to load in an acceptable time using HTTP1 we have developed a series of techniques; hacks really; to eke performance out of this old protocol. They are:

*   Spriting: taking multiple images, combining them into one image, and using CSS to only show part of that image in a particular place.
*   Concatenating: Taking multiple CSS or JS files and sticking them into one large file.
*   Serving assets from a cookie-less domain.
*   Sharding: creating different domains or sub-domains to host assets like images.

### Why HTTP2 is better

HTTP2 makes the cost of multiple requests far less because of a number of techniques it does itself.

*   It can leave the connection open for re-use for very extended periods of time, so there's no need for that costly handshake that HTTP1 requires for every request.
*   HTTP2 also uses compression, unlike HTTP1, and so the size of the request is significantly smaller - and thus faster.
*   HTTP2 multiplexes; it can send and receive multiple things at the same time over one connection.

>The long and short of it is; when you build a front-end to a website, and you know it's going to be served over HTTP2 - you need to ensure you're not using legacy HTTP1 performance techniques that are going to harm the site under HTTP2.

### Get used to the Unicode

```html
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
    <!-- or Hello symbol 𝄞-->
    <h1> Hello symbol &#119070;
</h1>
</body>
</html>
```

### Inlining Images With SVG And Data URIs
To reduce the HTTP requests

### Project 2 nodes
1.  add Unicode ☺
    *   copy and paste find them online
2.  replace the footer
3.  add Social media icon
    *   add header finle
    ```html
    <link rel="stylesheet" href="http://weloveiconfonts.com/api/?family=zocial" />
    ```
    *   apply the class
    ```html
          <a href="https://twitter.com/home?status=https://github.com/udacity/responsive-images" class="zocial-twitter">Twitter</a>
    ```
4.  Add a responsive logo (SVG)
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






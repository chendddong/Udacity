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

### All about images

***Pro tip:*** to get the maximum bang-for-your-buck when optimizing your site,
focus on very large images. Pick the ten largest!

In particular, resizing images in CSS or HTML can be a huge problem for big images. For example: you need a 1000x1000px image file to display in a 500x500px img element on a 2x screen. If you use a 1100x1100px image, that's 100 x 100 = 10,000 wasted pixels!


* For background images, use image-set with the appropriate fallbacks for
browsers that don't support it.
* For content images, use a srcset polyfill, or fallback to using image-set 
* For situations where you're willing to sacrifice image quality, consider using
heavily compressed 2x images.


### Use Srcset to solve the size problem

In JavaScript you can get the source of an **img** element with **currentSrc**.

The **sizes** attribute gives the browser information about the display size of
an image element – it does not actually cause the image to be resized. That's done in CSS!

```html
<img  src="images/great_pic_800.jpg"
      sizes="(max-width: 400px) 100vw, (min-width: 401px) 50vw"
      srcset="images/great_pic_400.jpg 400w, images/great_pic_800.jpg 800w"
      alt="great picture">
```

* ##### Reacting to Device Pixel Ratio

```html
<img src="image_2x.jpg" srcset="image_2x.jpg 2x, image_1x.jpg 1x" alt="a cool image">
```

* ##### Reacting to Image Width

```html
<img src="image_200.jpg" srcset="image_200.jpg 200w, image_100.jpg 100w" alt="a cool image">
```

* ##### The Picture Element

The browser would first choose the webp source, and if the browser doesn't
support this format, it would go down to the source list and select the ones
that it would support. Note that the webp is quite large since it's
lossless which means high-quality pictures

```html
<picture>
    <source srcset="kittens.webp" type="image/webp">
    <source srcset="kittens.jpg" type="image/jpeg">
    <img src="kittens.jpg" alt="Two grey tabby kittens">
</picture>
```

  * [Picture element: art direction](http://udacity.github.io/responsive-images/examples/3-08/pictureArtDirection/)
  * [Picture element: with srcset and media queries](http://udacity.github.io/responsive-images/examples/3-08/pictureFullMonty)
  * [Picturefill polyfill](http://udacity.github.io/responsive-images/examples/3-08/picturefill)

<br>

* ##### The Picture Element Cont...

With the addition of <picture>, the sizes attribute can be applied to both <img> and <source> elements:

```html
<picture>
  <source media="(min-width: 800px)"
          sizes="80vw"
          srcset="lighthouse-landscape-640.jpg 640w,
                  lighthouse-landscape-1280.jpg 1280w,
                  lighthouse-landscape-2560.jpg 2560w">
  <img src="lighthouse-160.jpg" alt="lighthouse"
       sizes="80vw"
       srcset="lighthouse-160.jpg 160w,
               lighthouse-320.jpg 320w,
               lighthouse-640.jpg 640w,
               lighthouse-1280.jpg 1280w">
</picture>
```

### General advice about alt attributes :sparkles:

*   **alt** attributes should be descriptive for important images, like this
body surfer. Because body surfing is important, I guess.
*   **alt** attributes should be empty for images that are just decorations, like this boiler image. Do you get the joke? It's a boiler to represent boiler plate code, which is sometimes empty of content.
*   **alt** attributes should be set on every image, just like this pig is set on being so darn cute.
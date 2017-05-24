# Must-Knows
* Common Patterns
    * Drop Box
    * Mostly Fluid -- could have some margins when fully spanned.
    ```CSS
    <style type="text/css">
      /*
      These are the responsive styles. Throw some breakpoints in here!
      */
      .container {
        display: flex;
        flex-wrap: wrap;
      }

      .box {
        width: 100%;
      }


      @media screen and (min-width: 450px) {
        .light_blue, .green {
          width: 50%;
        }
      }

      @media screen and (min-width: 550px) {
        .red {
          width: 33.3333%;
        }
        .orange {
          width: 66.6666%;
        }
      }

      @media screen and (min-width: 800px) {
        .container {
          /* Have to make the width fix to the min-width */
          width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    </style>
        }
    ```
    * Layout Shifter -- Use order and width %
    * Off Canvas:
        * Here's the JavaScript used to toggle the open class:
        ```
        menu.addEventListener('click', function(e) {
          drawer.classList.toggle('open');
          e.stopPropagation();
        });
        ```
        * Here's the relevant CSS for transitioning the hamburger menu:
        ```
        nav {
          width: 300px;
          position: absolute;
          /* This trasform moves the drawer off canvas. */
          -webkit-transform: translate(-300px, 0);
          transform: translate(-300px, 0);
          /* Optionally, we animate the drawer. */
          transition: transform 0.3s ease;
        }
        nav.open {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
        }
        ```

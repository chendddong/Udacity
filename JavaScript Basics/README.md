# Must-Knows
## Lesson 1
1.  JavaScript Conole
```JavaScript
console.log("Hello world!");
```

## Lesson 3

#### Truthy and Falsy Values

*   false
*   0 (zero)
*   "" (empty string)
*   null
*   undefined
*   NaN

All other values are truthy, including "0" (zero in quotes), "false" (false in quotes), empty functions, empty arrays, and empty objects.

```JavaScript
var a = !!(0); // variable is set to false
var b = !!("0"); // true
```


#### Comparing Falsy Values

Falsy values follow some slightly odd comparison rules which can lead to errors in program logic.

The falsy values false, 0 (zero), and "" (empty string) are all equivalent and can be compared against each other:

```JavaScript

var c = (false == 0); // true
var d = (false == ""); // true
var e = (0 == ""); // true
```

The falsy values null and undefined are not equivalent to anything except themselves:

```JavaScript

var f = (null == false); // false
var g = (null == null); // true
var h = (undefined == undefined); // true
var i = (undefined == null); // true

```

Finally, the falsy value NaN is not equivalent to anything — including NaN!

```JavaScript

var j = (NaN == null); // false
var k = (NaN == NaN); // false

```

You should also be aware that typeof(NaN) returns "number". Fortunately, the core JavaScript function isNaN() can be used to evaluate whether a value is NaN or not.
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

## Lesson 4
### Hidden values using DOM

If the resume you're building doesn't have data in a certain section, like Education, the empty section is automatically hidden. At the bottom of index.html, you'll find a few lines of JavaScript that follow this pattern:
```JavaScript
if (document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.display = "none";
}
```

### Remove "<" and ">" from code
```JavaScript
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
```

There are a few ways to remove < and > from code. The simplest is simply replacing them with their character entity references (\&lt; and \&gt;).

To do so, we can use string.replace(old, new). Note, however, that if you pass in a string as old, string.replace(old, new) will only replace the first instance of the old string.

You must pass in a regular expression as old to replace every instance of old in the string.

In the example above, we passed /</g and />/g as old into string.replace(old, new), which are regular expressions that grab all instances of < and >.

### Dot Notation Vs Bracket Notation

**Bracket notation always works**. Dot notation requires properties that begin
with a letter and do not include special characters.

Let's go through these one-by-one.

>"property"

**dot notation**: true

**bracket notation**: true

This one is normal. Either syntax is fine.

>"property1"

**dot notation**: true

**bracket notation**: true

A number attached to the end of a property is acceptable for dot and bracket notation.

>"property-2"

**dot notation**: false

**bracket notation**: true

Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.

>"property 3"

**dot notation**: false

**bracket notation**: true

Spaces are generally bad form in programming. Don't use them except within strings. But you can still access a property name with a space using bracket notation.

>"property$"

**dot notation**: true

**bracket notation**: true

Surprisingly, you actually can use $ within property names and still access them with dot notation.

>" property"

**dot notation**: false

**bracket notation**: true

In dot notation, the space actually gets ignored, so you are accessing "property" instead. But bracket notation still works.

>"property()"

**dot notation**: false

**bracket notation**: true

Without quotes, property() is a function call. This is just plain bad. While you can access a property like this one with bracket notation, there's no reason you should ever include () within an object property.

>"property[]"

**dot notation**: false

**bracket notation**: true

Like the last one, this is bad form too. [] already have a specific purpose in JavaScript and should never be used within a property.

>"8property"

**dot notation**: false

**bracket notation**: true

Dot notation fails to work if the property starts with a number. This is also bad form. Properties should never start with numbers.
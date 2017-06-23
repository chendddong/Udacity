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


## Lesson 5

### For-In Loops

Clarification

Use forEach or for to iterate over arrays like:

    countries = ['Argentina', 'China', 'England'];

Use for-in to loop over objects like:

    countries = {'country1':'Argentina', 'country2':'China','country3':'England'};

being careful to wrap the content of the for-in in a conditional statement that tests if the key is part of the object:

```JavaScript
myObj = {'country1':'Germany', 'country2':'Argentina'};
for (key in myObj){
    if (myObj.hasOwnProperty(key)) {
        console.log(myObj[key]);
    }
}
```

### jQury (:last)

The :last jQuery selector returns the final element in a list that matches
whatever precedes it. So for work-entry:last, if there are 3 work-entry
elements, it will only return the 3rd one. Example:

```HTML
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("p:last").css("background-color", "yellow");
});
</script>
</head>
<body>

<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
<p>This is the last paragraph.</p>

</body>
</html>
```

### Collecting Click Locations

```JavaScript
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
```

##### $(document).click()
$(document).click() is a jQuery event handler on the page, which is a fancy way of saying that it will hold some code that runs every time a user clicks on the page. The function (that doesn't have a name, making it an anonymous function) that gets passed into .click() will be run every time a user clicks on the page.

##### loc
loc is a jQuery event object that contains information about the click event. Learn about event's properties with jQuery's documentation.

### Return Statements

```JavaScript
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

function locationizer(work_obj) {
    var locations = [];
    for (job in work.jobs) {
        var singleLocation = work["jobs"][job].location;
        locations.push(singleLocation);
    }
    return locations;
}

console.log(locationizer(work));

```

### International Name format

"Peter Chen" -> "Peter CHEN"

```JavaScript
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
              name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
```

### JavaScript Anonymous functions

Anonymous functions are functions that don't have a name and are often returned
by other functions and objects. Example:

```JavaScript
$.getJSON("test.json", function(data) {
    console.log(data);
});
```

# Show the rest of the portfolio

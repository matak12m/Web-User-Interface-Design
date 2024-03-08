


This version overall improves the look of the webpage, fixes previous issues, and makes adds following features:

responsive style based on the width of the page
call to action button which now runs on Jquery instead of javascript
restructured the pages using <main>, <section>, and so on
Reworked the statistics page.S

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
notes for myself:


animations are done in CSS, not in JS. i need to give an element a transition property:
    >transision: 0.5s;
other properties like ease-in and ease-out exist as well to specify the timing of the animation

specific rounded corners can be sone by putting 4 different values to the border-radius property

inherit: element inherits the value from its parent element - can be useful for colour and such


flexboxes can be used to organize content into collumns, rows, and so on. by default, they have 1 collumn or row, but can be set to 
use more using CSS

<main> tag should include all the content that is unique to the webpage, NOT sidebars and menus and such
 be careful of the hierarchy! main cannot be inside a section or other similar tags, otherwise it will mess with the CSS of the website. 
     - same goes for <section> and <article>

putting a menu on the left side of the document is harder than putting it on the right - since the webpage starts at 0 0, which is top left, that means that there isnt any free space to the left - elements cannot easily slide onto the screen from outside.



JQUERY:

 - basically a shorthand version of javascript, one level of abstraction higher. It functions on javascript, with the same functions, but it can compress the code you write.
    => same thing as js, different syntax
    $ acts as a selector, example - $("button") selects all buttons, $(".myClass") selects all objects with a class, &("div:has(p)") selects all divs that contain a paragraph tag

  - Jquery can be linked by a CDN - usually in the head of an html.
 DOM - document object model - the document itself is an object




This version adds a new poppu window opening when you click the "click to sign up here" part of the text. 

Also has some mock-up articles at the bottom of the main website, which are organized using a flexbox.

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



this version adds expandable article and an alternate image for lower width.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
notes for myself:


animations are done in CSS, not in JS. i need to give an element a transition property:
    >transision: 0.5s;
other properties like ease-in and ease-out exist as well to specify the timing of the animation

specific rounded corners can be sone by putting 4 different values to the border-radius property

inherit: element inherits the value from its parent element - can be useful for colour and such


flexboxes can be used to organize content into collumns, rows, and so on. by default, they have 1 collumn or row, but can be set to 
use more using CSS

grids can accomplish a similar thing, except you can specify exactly what space each element should take up on a grid, even allowing for vertical ones.

alternate images are easy to add - just put a <source> tag with media: specifying the resolution requirement. 

nav bar on the right is a bit tricky the way I did it - the buttons simply appear at all times instead of only when the menu is expanded. Maybe remove the expandable menu in wide-enough screens?
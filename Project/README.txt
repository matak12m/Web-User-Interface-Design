Documentation - Design choices

My main goal was to create a portfolio on a single page, with no loading of additional pages, as to not disrupt the user flow. 
The only expection to this would be links to Github and similar sites. This was a bit of a challenge, given my overall vision of the page,
but I managed to achieve this by altering the HTML itself through Javascript. 

The aim of my portfolio was to portray a sense of playfulness, while still being professional. I was inspired by other portfolios when 
researching the design in the UI Prototyping module - I found that some portfolios weren't afraid to joke around a little bit 
(for example, a button that showed a photo of the person wo made the portfolio, with the caption "Peekaboo!")

The background is the main feature that follows this decision - colourful blobs around the main text of the page. 

My main idea for the structure of showing off my work was to have a digital recreation of a folder with bookmarks. 
The buttons that sort through all the projects look like bookmarks, and bring you to a different-coloured folder. The projects are
condensed into small cards that can be expanded to show all the details about it. The user can then click or tap off the card to minimize
the project.

The semantic elements are used to create a hierarchy or content, where <main> is the main content with contacts and About Me.
<section> tags are then used to seperate the different categories, like icons, text and images, and buttons.
<article> tags designate the project cards, as well as some pieces of text in the <main>.

One of the things that didn't make it into the portfolio was the background pieces forming a frame around the header and articles in
<main>, as it would be difficult to make them scale with any resolution, have them not cover up other shapes in the background, and 
have the around the text instead of behind it. I may look into this in the future. 
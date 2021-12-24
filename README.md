# odin-etch-a-sketch
Project to create something like Etch A Sketch toy using only HTML, CSS and JS.

From The Odin Project's curriculum.

Built with
Technologies
HTML
CSS
JS

Functionality
Clicking inside the grid will toggle the pen function, which fills every cell when the mouse pointer leaves it.

Each cell will also be filled on a click, regardless of whether the toggle state of the grid is active.

Random 1, 2, 3 use different ranges for possible RGBA values.

Incrementally Darken will darken each cell so that it should take exactly 10 almost equal passes for each individual cell to get to black. Since sometimes the calculation of each cell's individual increment will be a decimal value, sometimes the new RGBA values will get rounded.

When the Incrementally Darken radio button is clicked, the darkening step value resets, so it will again take 10 almost equal passes for each cell to turn black.

Tools
Visual Studio Code
Git and GitHub
Google Fonts

Outcome
Used HTML semantic elements for better readability and structure.
Used CSS flexbox to create layout.
Used Git and GitHub for project management.

Summary
What I learned
Better knowledge of Javascript.


1. Future Dev
    (1) try different ways to layout the boxes:
        float/clear
        inline-block
        flexbox
        CSS Grid
    (2) Gray Mode: grid turned 10% darker everytime passing through it
    (3) Drag bar: to adjust the panel pixel size

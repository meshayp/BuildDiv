
let colors = ["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"];
let smallSize = ["1px", "10px" , "20px" , "30px", "auto"];
let bigSize = ["50px", "100px", "200px" , "300px" , "400px", "500px", "600px", "auto"];
let borderStyle = ['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset','initial','inherit'];
let positionValues = ["static","relative","fixed","absolute","sticky"];
let textDecoStyle = ["solid","double","dotted","dashed","wavy","initial","inherit"];
let textDecoLine = ["none","underline","overline","line-through","initial","inherit"];
let props = { 
                

    'accent-color': {  'values' : colors , 'desc' : ' Specifies an accent color for user-interface controls'} ,
    'align-content': {  'values' : [] , 'desc' : ' Specifies the alignment between the lines inside a flexible container when the items do not use all available space'} ,
    'align-items': {  'values' : [] , 'desc' : ' Specifies the alignment for items inside a flexible container'} ,
    'align-self': {  'values' : [] , 'desc' : ' Specifies the alignment for selected items inside a flexible container'} ,
    'all': {  'values' : [] , 'desc' : ' Resets all properties (except unicode-bidi and direction)'} ,
    'animation': {  'values' : [] , 'desc' : ' A shorthand property for all the animation-* properties'} ,
    'animation-delay': {  'values' : [] , 'desc' : ' Specifies a delay for the start of an animation'} ,
    'animation-direction': {  'values' : [] , 'desc' : ' Specifies whether an animation should be played forwards, backwards or in alternate cycles'} ,
    'animation-duration': {  'values' : [] , 'desc' : ' Specifies how long an animation should take to complete one cycle'} ,
    'animation-fill-mode': {  'values' : [] , 'desc' : ' Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)'} ,
    'animation-iteration-count': {  'values' : [] , 'desc' : ' Specifies the number of times an animation should be played'} ,
    'animation-name': {  'values' : [] , 'desc' : ' Specifies a name for the @keyframes animation'} ,
    'animation-play-state': {  'values' : [] , 'desc' : ' Specifies whether the animation is running or paused'} ,
    'animation-timing-function': {  'values' : [] , 'desc' : ' Specifies the speed curve of an animation'} ,
    'backdrop-filter': {  'values' : [] , 'desc' : ' Defines a graphical effect to the area behind an element'} ,
    'backface-visibility': {  'values' : [] , 'desc' : ' Defines whether or not the back face of an element should be visible when facing the user'} ,
    'background': {  'values' : [] , 'desc' : ' A shorthand property for all the background-* properties'} ,
    'background-attachment': {  'values' : [] , 'desc' : ' Sets whether a background image scrolls with the rest of the page, or is fixed'} ,
    'background-blend-mode': {  'values' : [] , 'desc' : ' Specifies the blending mode of each background layer (color/image)'} ,
    'background-clip': {  'values' : [] , 'desc' : ' Defines how far the background (color or image) should extend within an element'} ,
    'background-color': {  'values' : colors , 'desc' : ' Specifies the background color of an element'} ,
    'background-image': {  'values' : [] , 'desc' : ' Specifies one or more background images for an element'} ,
    'background-origin': {  'values' : [] , 'desc' : ' Specifies the origin position of a background image'} ,
    'background-position': {  'values' : [] , 'desc' : ' Specifies the position of a background image'} ,
    'background-repeat': {  'values' : [] , 'desc' : ' Sets if/how a background image will be repeated'} ,
    'background-size': {  'values' : [] , 'desc' : ' Specifies the size of the background images'} ,
    'border': {  'values' : [] , 'desc' : ' A shorthand property for border-width, border-style and border-color'} ,
    'border-bottom': {  'values' : [] , 'desc' : ' A shorthand property for border-bottom-width, border-bottom-style and border-bottom-color'} ,
    'border-bottom-color': {  'values' : colors , 'desc' : ' Sets the color of the bottom border'} ,
    'border-bottom-left-radius': {  'values' : smallSize , 'desc' : ' Defines the radius of the border of the bottom-left corner'} ,
    'border-bottom-right-radius': {  'values' : smallSize , 'desc' : ' Defines the radius of the border of the bottom-right corner'} ,
    'border-bottom-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the bottom border'} ,
    'border-bottom-width': {  'values' : smallSize , 'desc' : ' Sets the width of the bottom border'} ,
    'border-collapse': {  'values' : [] , 'desc' : ' Sets whether table borders should collapse into a single border or be separated'} ,
    'border-color': {  'values' : colors , 'desc' : ' Sets the color of the four borders'} ,
    'border-image': {  'values' : [] , 'desc' : ' A shorthand property for all the border-image-* properties'} ,
    'border-image-outset': {  'values' : [] , 'desc' : ' Specifies the amount by which the border image area extends beyond the border box'} ,
    'border-image-repeat': {  'values' : [] , 'desc' : ' Specifies whether the border image should be repeated, rounded or stretched'} ,
    'border-image-slice': {  'values' : [] , 'desc' : ' Specifies how to slice the border image'} ,
    'border-image-source': {  'values' : [] , 'desc' : ' Specifies the path to the image to be used as a border'} ,
    'border-image-width': {  'values' : smallSize , 'desc' : ' Specifies the width of the border image'} ,
    'border-left': {  'values' : [] , 'desc' : ' A shorthand property for all the border-left-* properties'} ,
    'border-left-color': {  'values' : colors , 'desc' : ' Sets the color of the left border'} ,
    'border-left-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the left border'} ,
    'border-left-width': {  'values' : smallSize , 'desc' : ' Sets the width of the left border'} ,
    'border-radius': {  'values' : smallSize , 'desc' : ' A shorthand property for the four border-*-radius properties'} ,
    'border-right': {  'values' : [] , 'desc' : ' A shorthand property for all the border-right-* properties'} ,
    'border-right-color': {  'values' : colors , 'desc' : ' Sets the color of the right border'} ,
    'border-right-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the right border'} ,
    'border-right-width': {  'values' : smallSize , 'desc' : ' Sets the width of the right border'} ,
    'border-spacing': {  'values' : [] , 'desc' : ' Sets the distance between the borders of adjacent cells'} ,
    'border-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the four borders'} ,
    'border-top': {  'values' : [] , 'desc' : ' A shorthand property for border-top-width, border-top-style and border-top-color'} ,
    'border-top-color': {  'values' : colors , 'desc' : ' Sets the color of the top border'} ,
    'border-top-left-radius': {  'values' : smallSize , 'desc' : ' Defines the radius of the border of the top-left corner'} ,
    'border-top-right-radius': {  'values' : smallSize , 'desc' : ' Defines the radius of the border of the top-right corner'} ,
    'border-top-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the top border'} ,
    'border-top-width': {  'values' : smallSize , 'desc' : ' Sets the width of the top border'} ,
    'border-width': {  'values' : smallSize , 'desc' : ' Sets the width of the four borders'} ,
    'bottom': {  'values' : [] , 'desc' : ' Sets the elements position, from the bottom of its parent element'} ,
    'box-decoration-break': {  'values' : [] , 'desc' : ' Sets the behavior of the background and border of an element at page-break, or, for in-line elements, at line-break.'} ,
    'box-shadow': {  'values' : [] , 'desc' : ' Attaches one or more shadows to an element'} ,
    'box-sizing': {  'values' : [] , 'desc' : ' Defines how the width and height of an element are calculated: should they include padding and borders, or not'} ,
    'break-after': {  'values' : [] , 'desc' : ' Specifies whether or not a page-, column-, or region-break should occur after the specified element'} ,
    'break-before': {  'values' : [] , 'desc' : ' Specifies whether or not a page-, column-, or region-break should occur before the specified element'} ,
    'break-inside': {  'values' : [] , 'desc' : ' Specifies whether or not a page-, column-, or region-break should occur inside the specified element'} ,
    'caption-side': {  'values' : [] , 'desc' : ' Specifies the placement of a table caption'} ,
    'caret-color': {  'values' : colors , 'desc' : ' Specifies the color of the cursor (caret) in inputs, textareas, or any element that is editable'} ,
    '@charset': {  'values' : [] , 'desc' : ' Specifies the character encoding used in the style sheet'} ,
    'clear': {  'values' : [] , 'desc' : ' Specifies what should happen with the element that is next to a floating element'} ,
    'clip': {  'values' : [] , 'desc' : ' Clips an absolutely positioned element'} ,
    'color': {  'values' : colors , 'desc' : ' Sets the color of text'} ,
    'column-count': {  'values' : [] , 'desc' : ' Specifies the number of columns an element should be divided into'} ,
    'column-fill': {  'values' : [] , 'desc' : ' Specifies how to fill columns, balanced or not'} ,
    'column-gap': {  'values' : [] , 'desc' : ' Specifies the gap between the columns'} ,
    'column-rule': {  'values' : [] , 'desc' : ' A shorthand property for all the column-rule-* properties'} ,
    'column-rule-color': {  'values' : colors , 'desc' : ' Specifies the color of the rule between columns'} ,
    'column-rule-style': {  'values' : [] , 'desc' : ' Specifies the style of the rule between columns'} ,
    'column-rule-width': {  'values' : smallSize , 'desc' : ' Specifies the width of the rule between columns'} ,
    'column-span': {  'values' : [] , 'desc' : ' Specifies how many columns an element should span across'} ,
    'column-width': {  'values' : smallSize , 'desc' : ' Specifies the column width'} ,
    'columns': {  'values' : [] , 'desc' : ' A shorthand property for column-width and column-count'} ,
    'content': {  'values' : [] , 'desc' : ' Used with the :before and :after pseudo-elements, to insert generated content'} ,
    'counter-increment': {  'values' : [] , 'desc' : ' Increases or decreases the value of one or more CSS counters'} ,
    'counter-reset': {  'values' : [] , 'desc' : ' Creates or resets one or more CSS counters'} ,
    'cursor': {  'values' : [] , 'desc' : ' Specifies the mouse cursor to be displayed when pointing over an element'} ,
    'direction': {  'values' : [] , 'desc' : ' Specifies the text direction/writing direction'} ,
    'display': {  'values' : [] , 'desc' : ' Specifies how a certain HTML element should be displayed'} ,
    'empty-cells': {  'values' : [] , 'desc' : ' Specifies whether or not to display borders and background on empty cells in a table'} ,
    'filter': {  'values' : [] , 'desc' : ' Defines effects (e.g. blurring or color shifting) on an element before the element is displayed'} ,
    'flex': {  'values' : [] , 'desc' : ' A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties'} ,
    'flex-basis': {  'values' : [] , 'desc' : ' Specifies the initial length of a flexible item'} ,
    'flex-direction': {  'values' : [] , 'desc' : ' Specifies the direction of the flexible items'} ,
    'flex-flow': {  'values' : [] , 'desc' : ' A shorthand property for the flex-direction and the flex-wrap properties'} ,
    'flex-grow': {  'values' : [] , 'desc' : ' Specifies how much the item will grow relative to the rest'} ,
    'flex-shrink': {  'values' : [] , 'desc' : ' Specifies how the item will shrink relative to the rest'} ,
    'flex-wrap': {  'values' : [] , 'desc' : ' Specifies whether the flexible items should wrap or not'} ,
    'float': {  'values' : [] , 'desc' : ' Specifies whether an element should float to the left, right, or not at all'} ,
    'font': {  'values' : [] , 'desc' : ' A shorthand property for the font-style, font-variant, font-weight, font-size/line-height, and the font-family properties'} ,
    '@font-face': {  'values' : [] , 'desc' : ' A rule that allows websites to download and use fonts other than the "web-safe" fonts'} ,
    'font-family': {  'values' : [] , 'desc' : ' Specifies the font family for text'} ,
    'font-feature-settings': {  'values' : [] , 'desc' : ' Allows control over advanced typographic features in OpenType fonts'} ,
    '@font-feature-values': {  'values' : [] , 'desc' : ' Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType'} ,
    'font-kerning': {  'values' : [] , 'desc' : ' Controls the usage of the kerning information (how letters are spaced)'} ,
    'font-language-override': {  'values' : [] , 'desc' : ' Controls the usage of language-specific glyphs in a typeface'} ,
    'font-size': {  'values' : [] , 'desc' : ' Specifies the font size of text'} ,
    'font-size-adjust': {  'values' : [] , 'desc' : ' Preserves the readability of text when font fallback occurs'} ,
    'font-stretch': {  'values' : [] , 'desc' : ' Selects a normal, condensed, or expanded face from a font family'} ,
    'font-style': {  'values' : [] , 'desc' : ' Specifies the font style for text'} ,
    'font-synthesis': {  'values' : [] , 'desc' : ' Controls which missing typefaces (bold or italic) may be synthesized by the browser'} ,
    'font-variant': {  'values' : [] , 'desc' : ' Specifies whether or not a text should be displayed in a small-caps font'} ,
    'font-variant-alternates': {  'values' : [] , 'desc' : ' Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values'} ,
    'font-variant-caps': {  'values' : [] , 'desc' : ' Controls the usage of alternate glyphs for capital letters'} ,
    'font-variant-east-asian': {  'values' : [] , 'desc' : ' Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)'} ,
    'font-variant-ligatures': {  'values' : [] , 'desc' : ' Controls which ligatures and contextual forms are used in textual content of the elements it applies to'} ,
    'font-variant-numeric': {  'values' : [] , 'desc' : ' Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers'} ,
    'font-variant-position': {  'values' : [] , 'desc' : ' Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font'} ,
    'font-weight': {  'values' : [] , 'desc' : ' Specifies the weight of a font'} ,
    'gap': {  'values' : [] , 'desc' : ' A shorthand property for the row-gap and the column-gap properties'} ,
    'grid': {  'values' : [] , 'desc' : ' A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties'} ,
    'grid-area': {  'values' : [] , 'desc' : ' Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties'} ,
    'grid-auto-columns': {  'values' : [] , 'desc' : ' Specifies a default column size'} ,
    'grid-auto-flow': {  'values' : [] , 'desc' : ' Specifies how auto-placed items are inserted in the grid'} ,
    'grid-auto-rows': {  'values' : [] , 'desc' : ' Specifies a default row size'} ,
    'grid-column': {  'values' : [] , 'desc' : ' A shorthand property for the grid-column-start and the grid-column-end properties'} ,
    'grid-column-end': {  'values' : [] , 'desc' : ' Specifies where to end the grid item'} ,
    'grid-column-gap': {  'values' : [] , 'desc' : ' Specifies the size of the gap between columns'} ,
    'grid-column-start': {  'values' : [] , 'desc' : ' Specifies where to start the grid item'} ,
    'grid-gap': {  'values' : [] , 'desc' : ' A shorthand property for the grid-row-gap and grid-column-gap properties'} ,
    'grid-row': {  'values' : [] , 'desc' : ' A shorthand property for the grid-row-start and the grid-row-end properties'} ,
    'grid-row-end': {  'values' : [] , 'desc' : ' Specifies where to end the grid item'} ,
    'grid-row-gap': {  'values' : [] , 'desc' : ' Specifies the size of the gap between rows'} ,
    'grid-row-start': {  'values' : [] , 'desc' : ' Specifies where to start the grid item'} ,
    'grid-template': {  'values' : [] , 'desc' : ' A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties'} ,
    'grid-template-areas': {  'values' : [] , 'desc' : ' Specifies how to display columns and rows, using named grid items'} ,
    'grid-template-columns': {  'values' : [] , 'desc' : ' Specifies the size of the columns, and how many columns in a grid layout'} ,
    'grid-template-rows': {  'values' : [] , 'desc' : ' Specifies the size of the rows in a grid layout'} ,
    'hanging-punctuation': {  'values' : [] , 'desc' : ' Specifies whether a punctuation character may be placed outside the line box'} ,
    'height': {  'values' : smallSize , 'desc' : ' Sets the height of an element'} ,
    'hyphens': {  'values' : [] , 'desc' : ' Sets how to split words to improve the layout of paragraphs'} ,
    'image-rendering': {  'values' : [] , 'desc' : ' Specifies the type of algorithm to use for image scaling'} ,
    '@import': {  'values' : [] , 'desc' : ' Allows you to import a style sheet into another style sheet'} ,
    'isolation': {  'values' : [] , 'desc' : ' Defines whether an element must create a new stacking content'} ,
    'justify-content': {  'values' : [] , 'desc' : ' Specifies the alignment between the items inside a flexible container when the items do not use all available space'} ,
    '@keyframes': {  'values' : [] , 'desc' : ' Specifies the animation code'} ,
    'left': {  'values' : smallSize , 'desc' : ' Specifies the left position of a positioned element'} ,
    'letter-spacing': {  'values' : [] , 'desc' : ' Increases or decreases the space between characters in a text'} ,
    'line-break': {  'values' : [] , 'desc' : ' Specifies how/if to break lines'} ,
    'line-height': {  'values' : smallSize , 'desc' : ' Sets the line height'} ,
    'list-style': {  'values' : [] , 'desc' : ' Sets all the properties for a list in one declaration'} ,
    'list-style-image': {  'values' : [] , 'desc' : ' Specifies an image as the list-item marker'} ,
    'list-style-position': {  'values' : [] , 'desc' : ' Specifies the position of the list-item markers (bullet points)'} ,
    'list-style-type': {  'values' : [] , 'desc' : ' Specifies the type of list-item marker'} ,
    'margin': {  'values' : [] , 'desc' : ' Sets all the margin properties in one declaration'} ,
    'margin-bottom': {  'values' : [] , 'desc' : ' Sets the bottom margin of an element'} ,
    'margin-left': {  'values' : smallSize , 'desc' : ' Sets the left margin of an element'} ,
    'margin-right': {  'values' : smallSize , 'desc' : ' Sets the right margin of an element'} ,
    'margin-top': {  'values' : [] , 'desc' : ' Sets the top margin of an element'} ,
    'mask': {  'values' : [] , 'desc' : ' Hides parts of an element by masking or clipping an image at specific places'} ,
    'mask-clip': {  'values' : [] , 'desc' : ' Specifies the mask area'} ,
    'mask-composite': {  'values' : [] , 'desc' : ' Represents a compositing operation used on the current mask layer with the mask layers below it'} ,
    'mask-image': {  'values' : [] , 'desc' : ' Specifies an image to be used as a mask layer for an element'} ,
    'mask-mode': {  'values' : [] , 'desc' : ' Specifies whether the mask layer image is treated as a luminance mask or as an alpha mask'} ,
    'mask-origin': {  'values' : [] , 'desc' : ' Specifies the origin position (the mask position area) of a mask layer image'} ,
    'mask-position': {  'values' : [] , 'desc' : ' Sets the starting position of a mask layer image (relative to the mask position area)'} ,
    'mask-repeat': {  'values' : [] , 'desc' : ' Specifies how the mask layer image is repeated'} ,
    'mask-size': {  'values' : [] , 'desc' : ' Specifies the size of a mask layer image'} ,
    'mask-type': {  'values' : [] , 'desc' : ' Specifies whether an SVG <mask> element is treated as a luminance mask or as an alpha mask'} ,
    'max-height': {  'values' : smallSize , 'desc' : ' Sets the maximum height of an element'} ,
    'max-width': {  'values' : smallSize , 'desc' : ' Sets the maximum width of an element'} ,
    '@media': {  'values' : [] , 'desc' : ' Sets the style rules for different media types/devices/sizes'} ,
    'min-height': {  'values' : smallSize , 'desc' : ' Sets the minimum height of an element'} ,
    'min-width': {  'values' : smallSize , 'desc' : ' Sets the minimum width of an element'} ,
    'mix-blend-mode': {  'values' : [] , 'desc' : ' Specifies how an element\'s content should blend with its direct parent background'} ,
    'object-fit': {  'values' : [] , 'desc' : ' Specifies how the contents of a replaced element should be fitted to the box established by its used height and width'} ,
    'object-position': {  'values' : [] , 'desc' : ' Specifies the alignment of the replaced element inside its box'} ,
    'opacity': {  'values' : [] , 'desc' : ' Sets the opacity level for an element'} ,
    'order': {  'values' : [] , 'desc' : ' Sets the order of the flexible item, relative to the rest'} ,
    'orphans': {  'values' : [] , 'desc' : ' Sets the minimum number of lines that must be left at the bottom of a page or column'} ,
    'outline': {  'values' : [] , 'desc' : ' A shorthand property for the outline-width, outline-style, and the outline-color properties'} ,
    'outline-color': {  'values' : colors , 'desc' : ' Sets the color of an outline'} ,
    'outline-offset': {  'values' : [] , 'desc' : ' Offsets an outline, and draws it beyond the border edge'} ,
    'outline-style': {  'values' : [] , 'desc' : ' Sets the style of an outline'} ,
    'outline-width': {  'values' : smallSize , 'desc' : ' Sets the width of an outline'} ,
    'overflow': {  'values' : [] , 'desc' : ' Specifies what happens if content overflows an element\'s box'} ,
    'overflow-wrap': {  'values' : [] , 'desc' : ' Specifies whether or not the browser can break lines with long words, if they overflow the container'} ,
    'overflow-x': {  'values' : [] , 'desc' : ' Specifies whether or not to clip the left/right edges of the content, if it overflows the element\'s content area'} ,
    'overflow-y': {  'values' : [] , 'desc' : ' Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element\'s content area'} ,
    'padding': {  'values' : [] , 'desc' : ' A shorthand property for all the padding-* properties'} ,
    'padding-bottom': {  'values' : [] , 'desc' : ' Sets the bottom padding of an element'} ,
    'padding-left': {  'values' : smallSize , 'desc' : ' Sets the left padding of an element'} ,
    'padding-right': {  'values' : smallSize , 'desc' : ' Sets the right padding of an element'} ,
    'padding-top': {  'values' : [] , 'desc' : ' Sets the top padding of an element'} ,
    'page-break-after': {  'values' : [] , 'desc' : ' Sets the page-break behavior after an element'} ,
    'page-break-before': {  'values' : [] , 'desc' : ' Sets the page-break behavior before an element'} ,
    'page-break-inside': {  'values' : [] , 'desc' : ' Sets the page-break behavior inside an element'} ,
    'perspective': {  'values' : [] , 'desc' : ' Gives a 3D-positioned element some perspective'} ,
    'perspective-origin': {  'values' : [] , 'desc' : ' Defines at which position the user is looking at the 3D-positioned element'} ,
    'pointer-events': {  'values' : [] , 'desc' : ' Defines whether or not an element reacts to pointer events'} ,
    'position': {  'values' : [] , 'desc' : ' Specifies the type of positioning method used for an element (static, relative, absolute or fixed)'} ,
    'quotes': {  'values' : [] , 'desc' : ' Sets the type of quotation marks for embedded quotations'} ,
    'resize': {  'values' : [] , 'desc' : ' Defines if (and how) an element is resizable by the user'} ,
    'right': {  'values' : smallSize , 'desc' : ' Specifies the right position of a positioned element'} ,
    'row-gap': {  'values' : [] , 'desc' : ' Specifies the gap between the grid rows'} ,
    'scroll-behavior': {  'values' : [] , 'desc' : ' Specifies whether to smoothly animate the scroll position in a scrollable box, instead of a straight jump'} ,
    'tab-size': {  'values' : [] , 'desc' : ' Specifies the width of a tab character'} ,
    'table-layout': {  'values' : [] , 'desc' : ' Defines the algorithm used to lay out table cells, rows, and columns'} ,
    'text-align': {  'values' : [] , 'desc' : ' Specifies the horizontal alignment of text'} ,
    'text-align-last': {  'values' : [] , 'desc' : ' Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"'} ,
    'text-combine-upright': {  'values' : [] , 'desc' : ' Specifies the combination of multiple characters into the space of a single character'} ,
    'text-decoration': {  'values' : [] , 'desc' : ' Specifies the decoration added to text'} ,
    'text-decoration-color': {  'values' : colors , 'desc' : ' Specifies the color of the text-decoration'} ,
    'text-decoration-line': {  'values' : textDecoLine , 'desc' : ' Specifies the type of line in a text-decoration'} ,
    'text-decoration-style': {  'values' : textDecoStyle , 'desc' : ' Specifies the style of the line in a text decoration'} ,
    'text-decoration-thickness': {  'values' : smallSize , 'desc' : ' Specifies the thickness of the decoration line'} ,
    'text-emphasis': {  'values' : [] , 'desc' : ' Applies emphasis marks to text'} ,
    'text-indent': {  'values' : [] , 'desc' : ' Specifies the indentation of the first line in a text-block'} ,
    'text-justify': {  'values' : [] , 'desc' : ' Specifies the justification method used when text-align is "justify"'} ,
    'text-orientation': {  'values' : [] , 'desc' : ' Defines the orientation of the text in a line'} ,
    'text-overflow': {  'values' : [] , 'desc' : ' Specifies what should happen when text overflows the containing element'} ,
    'text-shadow': {  'values' : [] , 'desc' : ' Adds shadow to text'} ,
    'text-transform': {  'values' : [] , 'desc' : ' Controls the capitalization of text'} ,
    'text-underline-position': {  'values' : [] , 'desc' : ' Specifies the position of the underline which is set using the text-decoration property'} ,
    'top': {  'values' : [] , 'desc' : ' Specifies the top position of a positioned element'} ,
    'transform': {  'values' : [] , 'desc' : ' Applies a 2D or 3D transformation to an element'} ,
    'transform-origin': {  'values' : [] , 'desc' : ' Allows you to change the position on transformed elements'} ,
    'transform-style': {  'values' : [] , 'desc' : ' Specifies how nested elements are rendered in 3D space'} ,
    'transition': {  'values' : [] , 'desc' : ' A shorthand property for all the transition-* properties'} ,
    'transition-delay': {  'values' : [] , 'desc' : ' Specifies when the transition effect will start'} ,
    'transition-duration': {  'values' : [] , 'desc' : ' Specifies how many seconds or milliseconds a transition effect takes to complete'} ,
    'transition-property': {  'values' : [] , 'desc' : ' Specifies the name of the CSS property the transition effect is for'} ,
    'transition-timing-function': {  'values' : [] , 'desc' : ' Specifies the speed curve of the transition effect'} ,
    'unicode-bidi': {  'values' : [] , 'desc' : ' Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document'} ,
    'user-select': {  'values' : [] , 'desc' : ' Specifies whether the text of an element can be selected'} ,
    'vertical-align': {  'values' : [] , 'desc' : ' Sets the vertical alignment of an element'} ,
    'visibility': {  'values' : [] , 'desc' : ' Specifies whether or not an element is visible'} ,
    'white-space': {  'values' : [] , 'desc' : ' Specifies how white-space inside an element is handled'} ,
    'widows': {  'values' : [] , 'desc' : ' Sets the minimum number of lines that must be left at the top of a page or column'} ,
    'width': {  'values' : smallSize , 'desc' : ' Sets the width of an element'} ,
    'word-break': {  'values' : [] , 'desc' : ' Specifies how words should break when reaching the end of a line'} ,
    'word-spacing': {  'values' : [] , 'desc' : ' Increases or decreases the space between words in a text'} ,
    'word-wrap': {  'values' : [] , 'desc' : ' Allows long, unbreakable words to be broken and wrap to the next line'} ,
    'writing-mode': {  'values' : [] , 'desc' : ' Specifies whether lines of text are laid out horizontally or vertically'} ,
    'z-index': {  'values' : smallSize , 'desc' : ' Sets the stack order of a positioned element'} ,
    


}


document.addEventListener('DOMContentLoaded', function(){ 

    const propList = document.getElementById('propList');

    for (const item in props) {
        let elemDiv = document.createElement('li');
        elemDiv.innerText = item; 
        elemDiv.title=props[item].desc;
        elemDiv.addEventListener("click", liClick);
        elemDiv.style.color = 'lightgrey';
        if (props[item].values.length > 0)
        {
            elemDiv.style.color = 'black';
        }
        propList.appendChild(elemDiv);
    }

}, false);

function liClick(event)
{

   const flexElem = document.getElementById('flexView');
   flexElem.innerHTML = '';

   const currentDiv = document.getElementById('currentDiv');

   //if (!currentDiv.style.cssText)
   //{
   // currentDiv.cssText = "width:100px;height:100px;background-color:grey;";
   //}
            
    for (let j=0 ; j < props[event.target.textContent].values.length; j++)
    {
        //cssText += props[j].prop + ":" + props[j].vals[Math.floor(Math.random() * props[j].vals.length)] + ";";

        let cssText = currentDiv.style.cssText + event.target.textContent + ":" + props[event.target.textContent].values[j] + ";";

        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = currentDiv.style.cssText;
        elemDiv.style[event.target.textContent] = props[event.target.textContent].values[j];
        elemDiv.innerText = event.target.textContent + ":" + props[event.target.textContent].values[j];
        flexElem.appendChild(elemDiv);
        elemDiv.addEventListener("click", elementClick);
    }
        
}

function elementClick(event)
{
    const currentDiv = document.getElementById('currentDiv');
    currentDiv.style.cssText = event.target.style.cssText;

    const flexElem = document.getElementById('flexView');
    flexElem.innerHTML = '';

    const cssstyle = document.getElementById('cssstyle');
    cssstyle.innerHTML = event.target.style.cssText;
}
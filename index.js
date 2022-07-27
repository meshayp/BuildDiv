
let somecolors = ["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"];

let colors = ["IndianRed",
"LightCoral",
"Salmon",
"DarkSalmon",
"LightSalmon",
"Crimson",
"Red",
"FireBrick",
"DarkRed",
"Pink",
"LightPink",
"HotPink",
"DeepPink",
"MediumVioletRed",
"PaleVioletRed",
"LightSalmon",
"Coral",
"Tomato",
"OrangeRed",
"DarkOrange",
"Orange",
"Gold",
"Yellow",
"LightYellow",
"LemonChiffon",
"LightGoldenrodYellow",
"PapayaWhip",
"Moccasin",
"PeachPuff",
"PaleGoldenrod",
"Khaki",
"DarkKhaki",
"Lavender",
"Thistle",
"Plum",
"Violet",
"Orchid",
"Fuchsia",
"Magenta",
"MediumOrchid",
"MediumPurple",
"RebeccaPurple",
"BlueViolet",
"DarkViolet",
"DarkOrchid",
"DarkMagenta",
"Purple",
"Indigo",
"SlateBlue",
"DarkSlateBlue",
"MediumSlateBlue",
"GreenYellow",
"Chartreuse",
"LawnGreen",
"Lime",
"LimeGreen",
"PaleGreen",
"LightGreen",
"MediumSpringGreen",
"SpringGreen",
"MediumSeaGreen",
"SeaGreen",
"ForestGreen",
"Green",
"DarkGreen",
"YellowGreen",
"OliveDrab",
"Olive",
"DarkOliveGreen",
"MediumAquamarine",
"DarkSeaGreen",
"LightSeaGreen",
"DarkCyan",
"Teal",
"Aqua",
"Cyan",
"LightCyan",
"PaleTurquoise",
"Aquamarine",
"Turquoise",
"MediumTurquoise",
"DarkTurquoise",
"CadetBlue",
"SteelBlue",
"LightSteelBlue",
"PowderBlue",
"LightBlue",
"SkyBlue",
"LightSkyBlue",
"DeepSkyBlue",
"DodgerBlue",
"CornflowerBlue",
"MediumSlateBlue",
"RoyalBlue",
"Blue",
"MediumBlue",
"DarkBlue",
"Navy",
"MidnightBlue",
"Cornsilk",
"BlanchedAlmond",
"Bisque",
"NavajoWhite",
"Wheat",
"BurlyWood",
"Tan",
"RosyBrown",
"SandyBrown",
"Goldenrod",
"DarkGoldenrod",
"Peru",
"Chocolate",
"SaddleBrown",
"Sienna",
"Brown",
"Maroon",
"White",
"Snow",
"HoneyDew",
"MintCream",
"Azure",
"AliceBlue",
"GhostWhite",
"WhiteSmoke",
"SeaShell",
"Beige",
"OldLace",
"FloralWhite",
"Ivory",
"AntiqueWhite",
"Linen",
"LavenderBlush",
"MistyRose",
"Gainsboro",
"LightGray",
"Silver",
"DarkGray",
"Gray",
"DimGray",
"LightSlateGray",
"SlateGray",
"DarkSlateGray",
"Black" ];


let smallSize = ["1px", "5px", "10px" , "20px" , "30px", "50px" , "100px", "200px", "300px", "400px", "500px", "10%" , "20%" , "50%", "100%", "auto"];
let bigSize = ["50px", "100px", "200px" , "300px" , "400px", "500px", "600px", "auto"];
let borderStyle = ['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset','initial','inherit'];
let textDecoStyle = ["solid","double","dotted","dashed","wavy","initial","inherit"];
let textDecoLine = ["none","underline","overline","line-through","initial","inherit"];
let displayValues = ["inline","block","contents","flex","grid","inline-block","inline-flex","inline-grid","inline-table","list-item","run-in","table","table-caption","table-column-group","table-header-group","table-footer-group","table-row-group","table-cell","table-column","table-row","none","initial","inherit"];
let positionValues = ["static","absolute","fixed","relative","sticky","initial","inherit"];
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
    'bottom': {  'values' : smallSize , 'desc' : ' Sets the elements position, from the bottom of its parent element'} ,
    'box-decoration-break': {  'values' : [] , 'desc' : ' Sets the behavior of the background and border of an element at page-break, or, for in-line elements, at line-break.'} ,
    'box-shadow': {  'values' : [] , 'desc' : ' Attaches one or more shadows to an element'} ,
    'box-sizing': {  'values' : ['content-box','border-box','initial','inherit'] , 'desc' : ' Defines how the width and height of an element are calculated: should they include padding and borders, or not'} ,
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
    'display': {  'values' : displayValues , 'desc' : ' Specifies how a certain HTML element should be displayed'} ,
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
    'position': {  'values' : positionValues , 'desc' : ' Specifies the type of positioning method used for an element (static, relative, absolute or fixed)'} ,
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
    'top': {  'values' : smallSize , 'desc' : ' Specifies the top position of a positioned element'} ,
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


let htmlElements = [
	
{'type' : '!DOCTYPE','desc' : 'Defines the document type'},
{'type' : 'a','desc' : 'Defines a hyperlink'},
{'type' : 'abbr','desc' : 'Defines an abbreviation or an acronym'},
{'type' : 'acronym','desc' : 'Not supported in HTML5. Use <abbr> instead. Defines an acronym'},
{'type' : 'address','desc' : 'Defines contact information for the author/owner of a document'},
{'type' : 'applet','desc' : 'Not supported in HTML5. Use <embed> or <object> instead. Defines an embedded applet'},
{'type' : 'area','desc' : 'Defines an area inside an image map'},
{'type' : 'article','desc' : 'Defines an article'},
{'type' : 'aside','desc' : 'Defines content aside from the page content'},
{'type' : 'audio','desc' : 'Defines embedded sound content'},
{'type' : 'b','desc' : 'Defines bold text'},
{'type' : 'base','desc' : 'Specifies the base URL/target for all relative URLs in a document'},
{'type' : 'basefont','desc' : 'Not supported in HTML5. Use CSS instead.  Specifies a default color, size, and font for all text in a document'},
{'type' : 'bdi','desc' : 'Isolates a part of text that might be formatted in a different direction from other text outside it'},
{'type' : 'bdo','desc' : 'Overrides the current text direction'},
{'type' : 'big','desc' : 'Not supported in HTML5. Use CSS instead. Defines big text'},
{'type' : 'blockquote','desc' : 'Defines a section that is quoted from another source'},
{'type' : 'body','desc' : 'Defines the documents body'},
{'type' : 'br','desc' : 'Defines a single line break'},
{'type' : 'button','desc' : 'Defines a clickable button'},
{'type' : 'canvas','desc' : 'Used to draw graphics, on the fly, via scripting (usually JavaScript)'},
{'type' : 'caption','desc' : 'Defines a table caption'},
{'type' : 'center','desc' : 'Not supported in HTML5. Use CSS instead. Defines centered text'},
{'type' : 'cite','desc' : 'Defines the title of a work'},
{'type' : 'code','desc' : 'Defines a piece of computer code'},
{'type' : 'col','desc' : 'Specifies column properties for each column within a <colgroup> element '},
{'type' : 'colgroup','desc' : 'Specifies a group of one or more columns in a table for formatting'},
{'type' : 'data','desc' : 'Adds a machine-readable translation of a given content'},
{'type' : 'datalist','desc' : 'Specifies a list of pre-defined options for input controls'},
{'type' : 'dd','desc' : 'Defines a description/value of a term in a description list'},
{'type' : 'del','desc' : 'Defines text that has been deleted from a document'},
{'type' : 'details','desc' : 'Defines additional details that the user can view or hide'},
{'type' : 'dfn','desc' : 'Specifies a term that is going to be defined within the content'},
{'type' : 'dialog','desc' : 'Defines a dialog box or window'},
{'type' : 'dir','desc' : 'Not supported in HTML5. Use <ul> instead. Defines a directory list'},
{'type' : 'div','desc' : 'Defines a section in a document'},
{'type' : 'dl','desc' : 'Defines a description list'},
{'type' : 'dt','desc' : 'Defines a term/name in a description list'},
{'type' : 'em','desc' : 'Defines emphasized text '},
{'type' : 'embed','desc' : 'Defines a container for an external application'},
{'type' : 'fieldset','desc' : 'Groups related elements in a form'},
{'type' : 'figcaption','desc' : 'Defines a caption for a <figure> element'},
{'type' : 'figure','desc' : 'Specifies self-contained content'},
{'type' : 'font','desc' : 'Not supported in HTML5. Use CSS instead. Defines font, color, and size for text'},
{'type' : 'footer','desc' : 'Defines a footer for a document or section'},
{'type' : 'form','desc' : 'Defines an HTML form for user input'},
{'type' : 'frame','desc' : 'Not supported in HTML5. Defines a window (a frame) in a frameset'},
{'type' : 'frameset','desc' : 'Not supported in HTML5. Defines a set of frames'},
{'type' : 'h1toh6','desc' : 'Defines HTML headings'},
{'type' : 'head','desc' : 'Contains metadata/information for the document'},
{'type' : 'header','desc' : 'Defines a header for a document or section'},
{'type' : 'hr','desc' : 'Defines a thematic change in the content'},
{'type' : 'html','desc' : 'Defines the root of an HTML document'},
{'type' : 'i','desc' : 'Defines a part of text in an alternate voice or mood'},
{'type' : 'iframe','desc' : 'Defines an inline frame'},
{'type' : 'img','desc' : 'Defines an image'},
{'type' : 'input','desc' : 'Defines an input control'},
{'type' : 'ins','desc' : 'Defines a text that has been inserted into a document'},
{'type' : 'kbd','desc' : 'Defines keyboard input'},
{'type' : 'label','desc' : 'Defines a label for an <input> element'},
{'type' : 'legend','desc' : 'Defines a caption for a <fieldset> element'},
{'type' : 'li','desc' : 'Defines a list item'},
{'type' : 'link','desc' : 'Defines the relationship between a document and an external resource (most used to link to style sheets)'},
{'type' : 'main','desc' : 'Specifies the main content of a document'},
{'type' : 'map','desc' : 'Defines an image map'},
{'type' : 'mark','desc' : 'Defines marked/highlighted text'},
{'type' : 'meta','desc' : 'Defines metadata about an HTML document'},
{'type' : 'meter','desc' : 'Defines a scalar measurement within a known range (a gauge)'},
{'type' : 'nav','desc' : 'Defines navigation links'},
{'type' : 'noframes','desc' : 'Not supported in HTML5.  Defines an alternate content for users that do not support frames'},
{'type' : 'noscript','desc' : 'Defines an alternate content for users that do not support client-side scripts'},
{'type' : 'object','desc' : 'Defines a container for an external application'},
{'type' : 'ol','desc' : 'Defines an ordered list'},
{'type' : 'optgroup','desc' : 'Defines a group of related options in a drop-down list'},
{'type' : 'option','desc' : 'Defines an option in a drop-down list'},
{'type' : 'output','desc' : 'Defines the result of a calculation'},
{'type' : 'p','desc' : 'Defines a paragraph'},
{'type' : 'param','desc' : 'Defines a parameter for an object'},
{'type' : 'picture','desc' : 'Defines a container for multiple image resources'},
{'type' : 'pre','desc' : 'Defines preformatted text'},
{'type' : 'progress','desc' : 'Represents the progress of a task'},
{'type' : 'q','desc' : 'Defines a short quotation'},
{'type' : 'rp','desc' : 'Defines what to show in browsers that do not support ruby annotations'},
{'type' : 'rt','desc' : 'Defines an explanation/pronunciation of characters (for East Asian typography)'},
{'type' : 'ruby','desc' : 'Defines a ruby annotation (for East Asian typography)'},
{'type' : 's','desc' : 'Defines text that is no longer correct'},
{'type' : 'samp','desc' : 'Defines sample output from a computer program'},
{'type' : 'script','desc' : 'Defines a client-side script'},
{'type' : 'section','desc' : 'Defines a section in a document'},
{'type' : 'select','desc' : 'Defines a drop-down list'},
{'type' : 'small','desc' : 'Defines smaller text'},
{'type' : 'source','desc' : 'Defines multiple media resources for media elements (<video> and <audio>)'},
{'type' : 'span','desc' : 'Defines a section in a document'},
{'type' : 'strike','desc' : 'Not supported in HTML5. Use <del> or <s> instead.  Defines strikethrough text'},
{'type' : 'strong','desc' : 'Defines important text'},
{'type' : 'style','desc' : 'Defines style information for a document'},
{'type' : 'sub','desc' : 'Defines subscripted text'},
{'type' : 'summary','desc' : 'Defines a visible heading for a <details> element'},
{'type' : 'sup','desc' : 'Defines superscripted text'},
{'type' : 'svg','desc' : 'Defines a container for SVG graphics'},
{'type' : 'table','desc' : 'Defines a table'},
{'type' : 'tbody','desc' : 'Groups the body content in a table'},
{'type' : 'td','desc' : 'Defines a cell in a table'},
{'type' : 'template','desc' : 'Defines a container for content that should be hidden when the page loads'},
{'type' : 'textarea','desc' : 'Defines a multiline input control (text area)'},
{'type' : 'tfoot','desc' : 'Groups the footer content in a table'},
{'type' : 'th','desc' : 'Defines a header cell in a table'},
{'type' : 'thead','desc' : 'Groups the header content in a table'},
{'type' : 'time','desc' : 'Defines a specific time (or datetime)'},
{'type' : 'title','desc' : 'Defines a title for the document'},
{'type' : 'tr','desc' : 'Defines a row in a table'},
{'type' : 'track','desc' : 'Defines text tracks for media elements (<video> and <audio>)'},
{'type' : 'tt','desc' : 'Not supported in HTML5. Use CSS instead.  Defines teletype text'},
{'type' : 'u','desc' : 'Defines some text that is unarticulated and styled differently from normal text'},
{'type' : 'ul','desc' : 'Defines an unordered list'},
{'type' : 'var','desc' : 'Defines a variable'},
{'type' : 'video','desc' : 'Defines embedded video content'},
{'type' : 'wbr','desc' : 'Defines a possible line-break'},

	
]


/* let elementTree = { "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : [ 
														{ "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : [ 
																									  { "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : []} 
																								   ]},
														{ "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : [] } ,
														{ "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : [] } ,
														{ "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : [] } ,
														{ "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : [] } ,
												            ]};  */
															
let elementTree = { "type" : "div", "style" : "width:100px;height:100px;background-color:grey", children : []};  
															
let currentDiv = null;

let selectedTreeItems = [];

document.addEventListener('DOMContentLoaded', function(){ 

    const propList = document.getElementById('propList');

    for (const item in props) {
        let elemDiv = document.createElement('li');
		propList.appendChild(elemDiv);
		
		let elemOptionDiv = document.createElement('div');
		elemDiv.appendChild(elemOptionDiv);
		
        elemOptionDiv.innerText = item; 
        elemOptionDiv.title=props[item].desc;
        elemOptionDiv.addEventListener("click", liClick);
        elemOptionDiv.style.color = 'lightgrey';
        if (props[item].values.length > 0)
        {
            elemOptionDiv.style.color = 'black';
			
			let selectList = document.createElement("select");
			selectList.id = "mySelect";

			//Create and append the options
			for (var i = 0; i < props[item].values.length; i++) {
				var option = document.createElement("option");
				option.value = props[item].values[i];
				option.text = props[item].values[i];
				selectList.appendChild(option);
			}
			
			elemDiv.appendChild(selectList);
			
			selectList.addEventListener("change", onchangeOption);
        }
        
		
    }
	
	const itemstreeElement = document.getElementById('itemstree');
	
	showTree(itemstreeElement, elementTree);

    const htmlElement = document.getElementById('work');
	buildHtml(htmlElement , elementTree);
	
	currentDiv = elementTree;

}, false);

function onchangeOption(event)
{
	//const currentDiv = document.getElementById('currentDiv');
    currentDiv.style += event.target.parentElement.children[0].textContent + ":" + event.target.value + ";";

    const flexElem = document.getElementById('flexView');
    flexElem.innerHTML = '';

    //const cssstyle = document.getElementById('cssstyle');
    //cssstyle.innerHTML = event.target.style.cssText;
	
	const htmlElement = document.getElementById('work');
	htmlElement.innerHTML = '';
	buildHtml(htmlElement , elementTree);
}

function showTree(rootLi, item)
{
	let uLi = document.createElement('ul');
	rootLi.appendChild(uLi);
	
	for (let i=0; i < item.children.length; i++)
	{
		let elemLi = document.createElement('li');
		elemLi.innerText = item.children[i].type;
		elemLi.workItem = item.children[i];
		elemLi.addEventListener("click", treeLiClick);
		uLi.appendChild(elemLi);
		
		showTree(elemLi, item.children[i]);
	}
	
	let elemLi = document.createElement('li');
	uLi.appendChild(elemLi);

	let addBtn = document.createElement('button');
	addBtn.innerText = "+";
	addBtn.addEventListener("click", treeBtnClick);
	addBtn.workItem = item;
	elemLi.appendChild(addBtn);
	
	
	//Create array of options to be added
	//var array = ["div","span","button","img"];

	//Create and append select list
	var selectList = document.createElement("select");
	selectList.id = "mySelect";

	//Create and append the options
	for (var i = 0; i < htmlElements.length; i++) {
		var option = document.createElement("option");
		option.value = htmlElements[i].type;
		option.text = htmlElements[i].type;
		option.title = htmlElements[i].desc;
		selectList.appendChild(option);
	}
	
	elemLi.appendChild(selectList);
	
}

function treeLiClick(event)
{
	currentDiv = event.target.workItem;
	
	for (const element of selectedTreeItems) {
		element.classList.remove("selected");
	}
	
	selectedTreeItems = [];

	selectedTreeItems.push(event.target);
	
	for (const element of selectedTreeItems) {
		element.classList.add("selected");
	}
}

function treeBtnClick(event)
{
	event.target.workItem.children.push({ "type" : event.target.nextSibling.value, "style" : "width:100px;height:100px;background-color:grey", children : [] });
	const itemstreeElement = document.getElementById('itemstree');
	itemstreeElement.innerHTML = '';
	
	showTree(itemstreeElement, elementTree);
	
	const htmlElement = document.getElementById('work');
	htmlElement.innerHTML = '';
	buildHtml(htmlElement , elementTree);
}

function buildHtml(element , item)
{
	for (let i=0; i < item.children.length; i++)
	{
		let elem = document.createElement(item.children[i].type);
		elem.style.cssText = item.children[i].style;
		element.appendChild(elem);
		
		buildHtml(elem, item.children[i]);
	}
}

function liClick(event)
{

   const flexElem = document.getElementById('flexView');
   flexElem.innerHTML = '';

   //if (!currentDiv.style.cssText)
   //{
   // currentDiv.cssText = "width:100px;height:100px;background-color:grey;";
   //}
            
    for (let j=0 ; j < props[event.target.textContent].values.length; j++)
    {
        //cssText += props[j].prop + ":" + props[j].vals[Math.floor(Math.random() * props[j].vals.length)] + ";";

        let cssText = currentDiv.style + event.target.textContent + ":" + props[event.target.textContent].values[j] + ";";

		//let outerDiv = document.createElement(currentDiv.type);
		//outerDiv.style.cssText = "width:100px;height:100%;background-color:gray;position:relative;";
		//flexElem.appendChild(outerDiv);

        let elemDiv = document.createElement(currentDiv.type);
        elemDiv.style.cssText = currentDiv.style;
        elemDiv.style[event.target.textContent] = props[event.target.textContent].values[j];
        elemDiv.innerText = event.target.textContent + ":" + props[event.target.textContent].values[j];
        flexElem.appendChild(elemDiv);
        elemDiv.addEventListener("click", elementClick);
    }
        
}

function elementClick(event)
{
    //const currentDiv = document.getElementById('currentDiv');
    currentDiv.style = event.target.style.cssText;

    const flexElem = document.getElementById('flexView');
    flexElem.innerHTML = '';

    //const cssstyle = document.getElementById('cssstyle');
    //cssstyle.innerHTML = event.target.style.cssText;
	
	const htmlElement = document.getElementById('work');
	htmlElement.innerHTML = '';
	buildHtml(htmlElement , elementTree);
}
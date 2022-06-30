
let colors = ["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"];
let smallSize = ["1px", "10px" , "20px" , "30px", "auto"];
let bigSize = ["50px", "100px", "200px" , "300px" , "400px", "500px", "600px", "auto"];
let borderStyle = ['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset','initial','inherit'];
let positionValues = ["static","relative","fixed","absolute","sticky"];

let props = { 
                

                //  'background-color' : colors ,
                //  'width' : bigSize  ,
                //  'height' : bigSize  ,
                //  'border-style' : ["dotted", "dashed" , "solid" , "double"] ,
                //  'border-width' : smallSize ,
                //  'text-align' : ["left", "right" , "center" , "justify" , "initial" , "inherit"]  ,
                //  'color'	 : colors ,
                //  'line-height'		 : smallSize ,
                //  'letter-spacing'		 : smallSize,
                //  'text-align'		 : ["left", "right", "center", "justify"] ,
                //  'text-decoration'		 : ["none", "underline", "overline", "line-through" ] ,
                //  'text-indent'		 : smallSize ,
                //  'text-transform'		 : ["none", "capitalize", "uppercase", "lowercase" ] ,


'align-content': {  'values' : [] , 'desc' : ' Aligns items in a flex container along flex lines.'} ,
'align-items': {  'values' : [] , 'desc' : ' Aligns evenly spaced items in a flex container.'} ,
'align-self': {  'values' : [] , 'desc' : ' Aligns an item inside a flex container.'} ,
'all': {  'values' : [] , 'desc' : ' Resets all element properties to its default or inherited values.'} ,
'animation': {  'values' : [] , 'desc' : ' Creates an animating element.'} ,
'animation-delay': {  'values' : [] , 'desc' : ' Sets a delay before an animation begins.'} ,
'animation-direction': {  'values' : [] , 'desc' : ' Sets how, in which direction, an animation is played.'} ,
'animation-duration': {  'values' : [] , 'desc' : ' Defines the duration of an animation cycle.'} ,
'animation-fill-mode': {  'values' : [] , 'desc' : ' Defines how styles are applied before and after animation.'} ,
'animation-iteration-count': {  'values' : [] , 'desc' : ' Sets the number of times an animation is played.'} ,
'animation-name': {  'values' : [] , 'desc' : ' Defines a name for the animation.'} ,
'animation-play-state': {  'values' : [] , 'desc' : ' Sets the animation play state to running or paused.'} ,
'animation-timing-function': {  'values' : [] , 'desc' : ' Specifies the animation speed curve.'} ,
'backface-visibility': {  'values' : [] , 'desc' : ' Shows or hides the backface visibility of an element.'} ,
'background': {  'values' : [] , 'desc' : ' Sets the background of an element.'} ,
'background-attachment': {  'values' : [] , 'desc' : ' Defines how the background is attached to an element.'} ,
'background-blend-mode': {  'values' : [] , 'desc' : ' Defines the background layer blending mode.'} ,
'background-clip': {  'values' : [] , 'desc' : ' Defines how background extends beyond the element.'} ,
'background-color': {  'values' : colors , 'desc' : ' Sets the background color of the element.'} ,
'background-image': {  'values' : [] , 'desc' : ' Specifies a background image for an element.'} ,
'background-origin': {  'values' : [] , 'desc' : ' Specifies the background image origin position.'} ,
'background-position': {  'values' : positionValues , 'desc' : ' Sets the position of a background image.'} ,
'background-repeat': {  'values' : [] , 'desc' : ' Specifies how the background image is repeated.'} ,
'background-size': {  'values' : [] , 'desc' : ' Sets the size of the background image.'} ,
'border': {  'values' : [] , 'desc' : ' Specifies a border for an element'} ,
'border-bottom': {  'values' : [] , 'desc' : ' Specifies a bottom border for an element.'} ,
'border-bottom-color': {  'values' : colors , 'desc' : ' Sets the color of a bottom border .'} ,
'border-bottom-left-radius': {  'values' : [] , 'desc' : ' Sets the border radius of the bottom left corner.'} ,
'border-bottom-right-radius': {  'values' : [] , 'desc' : ' Sets the border radius of the bottom right corner'} ,
'border-bottom-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the bottom border.'} ,
'border-bottom-width': {  'values' : smallSize , 'desc' : ' Sets the width of the bottom border'} ,
'border-collapse': {  'values' : [] , 'desc' : ' Sets table borders to single collapsed line or separated.'} ,
'border-color': {  'values' : colors , 'desc' : ' Sets the color of the border.'} ,
'border-image': {  'values' : [] , 'desc' : ' Defines an image as border, instead of a color.'} ,
'border-image-outset': {  'values' : [] , 'desc' : ' Sets how far a border image extends beyond the border.'} ,
'border-image-repeat': {  'values' : [] , 'desc' : ' Defines if and how the border image is repeated.'} ,
'border-image-slice': {  'values' : [] , 'desc' : ' Defines how the border image will be sliced.'} ,
'border-image-source': {  'values' : [] , 'desc' : ' Specifies the url of the border image file.'} ,
'border-image-width': {  'values' : smallSize , 'desc' : ' Sets the width of the image border.'} ,
'border-left': {  'values' : [] , 'desc' : ' Sets the left border of the element.'} ,
'border-left-color': {  'values' : colors , 'desc' : ' Sets the color of the left border.'} ,
'border-left-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the left border.'} ,
'border-left-width': {  'values' : smallSize , 'desc' : ' Sets the width of the left border.'} ,
'border-radius': {  'values' : [] , 'desc' : ' Sets the radius of the border.'} ,
'border-right': {  'values' : [] , 'desc' : ' Sets the right border of the element.'} ,
'border-right-color': {  'values' : colors , 'desc' : ' Sets the color of the right border.'} ,
'border-right-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the right border.'} ,
'border-right-width': {  'values' : smallSize , 'desc' : ' Sets the width of the right border.'} ,
'border-spacing': {  'values' : [] , 'desc' : ' Sets the adjacent table cell distance.'} ,
'border-style': {  'values' : borderStyle , 'desc' : ' Defines the style of the border'} ,
'border-top': {  'values' : [] , 'desc' : ' Sets the top border of the element.'} ,
'border-top-color': {  'values' : colors , 'desc' : ' Sets the color of the top border.'} ,
'border-top-left-radius': {  'values' : [] , 'desc' : ' Sets the border radius of the top left corner.'} ,
'border-top-right-radius': {  'values' : [] , 'desc' : ' Sets the border radius of the top right corner.'} ,
'border-top-style': {  'values' : borderStyle , 'desc' : ' Sets the style of the top border.'} ,
'border-top-width': {  'values' : smallSize , 'desc' : ' Sets the width of the top border.'} ,
'border-width': {  'values' : smallSize , 'desc' : ' Sets the border width of the element.'} ,
'bottom': {  'values' : smallSize , 'desc' : ' Positions the element from the bottom of the relative container.'} ,
'box-shadow': {  'values' : [] , 'desc' : ' Adds a shadow effect to an element.'} ,
'box-sizing': {  'values' : [] , 'desc' : ' Sets how element height and width are calculated.'} ,
'caption-side': {  'values' : [] , 'desc' : ' Defines on which side of the table a caption is placed.'} ,
'caret-color': {  'values' : colors , 'desc' : ' Sets the color of the blinking mouse caret.'} ,
'@charset': {  'values' : [] , 'desc' : ' Specifies the character encoding of the stylesheet.'} ,
'clear': {  'values' : [] , 'desc' : ' Sets the element side that does not allow floating elements.'} ,
'clip': {  'values' : [] , 'desc' : ' Sets how an image is cropped or clipped inside a container.'} ,
'clip-path': {  'values' : [] , 'desc' : ' Clips an element inside a specific shape or SVG.'} ,
'color': {  'values' : colors , 'desc' : ' Specifies the color of text in an element.'} ,
'column-count': {  'values' : [] , 'desc' : ' Divides an element into the specified number of columns.'} ,
'column-fill': {  'values' : [] , 'desc' : ' Specifies how divided columns are filled.'} ,
'column-gap': {  'values' : [] , 'desc' : ' Specifies the space between divided columns.'} ,
'column-rule': {  'values' : [] , 'desc' : ' Sets the style, width, and color of a column divider.'} ,
'column-rule-color': {  'values' : colors , 'desc' : ' Sets the color of a column divider.'} ,
'column-rule-style': {  'values' : [] , 'desc' : ' Sets the style of a column divider.'} ,
'column-rule-width': {  'values' : smallSize , 'desc' : ' Sets the width of a column divider.'} ,
'column-span': {  'values' : [] , 'desc' : ' Sets number of divided columns an element should span.'} ,
'column-width': {  'values' : smallSize , 'desc' : ' Specifies the width of a divided column.'} ,
'columns': {  'values' : [] , 'desc' : ' Divide an element into columns of a certain width.'} ,
'content': {  'values' : [] , 'desc' : ' Used to insert content before or after an element.'} ,
'counter-increment': {  'values' : [] , 'desc' : ' Increase or decrease a CSS counter.'} ,
'counter-reset': {  'values' : [] , 'desc' : ' Initialize or reset CSS counter.'} ,
'cursor': {  'values' : [] , 'desc' : ' Specifies the shape of the mouse cursor.'} ,
'direction': {  'values' : [] , 'desc' : ' Specifies the text writing direction of a block-level element.'} ,
'display': {  'values' : [] , 'desc' : ' Specify an element\'s display behavior.'} ,
'empty-cells': {  'values' : [] , 'desc' : ' Specifies whether empty table cell borders will be displayed.'} ,
'filter': {  'values' : [] , 'desc' : ' Adds an image enhancing effect to an image.'} ,
'flex': {  'values' : [] , 'desc' : ' Specifies the width of the flexible items.'} ,
'flex-basis': {  'values' : [] , 'desc' : ' Specifies the initial width of a flex item.'} ,
'flex-direction': {  'values' : [] , 'desc' : ' Specifies the direction for the flex item to align.'} ,
'flex-flow': {  'values' : [] , 'desc' : ' Controls the direction and wrapping of flexible items.'} ,
'flex-grow': {  'values' : [] , 'desc' : ' Specifies how a flex item can grow inside the container.'} ,
'flex-shrink': {  'values' : [] , 'desc' : ' Specifies how a flex item can shrink inside the container.'} ,
'flex-wrap': {  'values' : [] , 'desc' : ' Specifies how flexible items wrap inside the container.'} ,
'float': {  'values' : [] , 'desc' : ' Sets how an element is positioned relative to other elements.'} ,
'font': {  'values' : [] , 'desc' : ' Sets font family, variant, weight, height, and size for an element.'} ,
'@font-face': {  'values' : [] , 'desc' : ' Embeds a custom font inside a web page'} ,
'font-family': {  'values' : [] , 'desc' : ' Sets the font family for an element.'} ,
'font-kerning': {  'values' : [] , 'desc' : ' Sets the spacing between the font\'s characters.'} ,
'font-size': {  'values' : [] , 'desc' : ' Sets the size of the font for an element.'} ,
'font-size-adjust': {  'values' : [] , 'desc' : ' Specifies a fall-back font size.'} ,
'font-stretch': {  'values' : [] , 'desc' : ' Sets the text characters to a wider or narrower variant.'} ,
'font-style': {  'values' : [] , 'desc' : ' Set the font style to normal, italic, or oblique.'} ,
'font-variant': {  'values' : [] , 'desc' : ' Specifies that text is displayed in a small-caps font.'} ,
'font-weight': {  'values' : [] , 'desc' : ' Sets the weight or thickness of the font.'} ,
'grid': {  'values' : [] , 'desc' : ' Defines a grid layout with responsive rows and columns.'} ,
'grid-area': {  'values' : [] , 'desc' : ' Sets the size and location of grid items in a grid container.'} ,
'grid-auto-columns': {  'values' : [] , 'desc' : ' Specifies the size of the columns in a grid container.'} ,
'grid-auto-flow': {  'values' : [] , 'desc' : ' Specifies the initial placement of items in a grid container.'} ,
'grid-auto-rows': {  'values' : [] , 'desc' : ' Specifies the initial size of the items in a grid container.'} ,
'grid-column': {  'values' : [] , 'desc' : ' Specifies the size and location of a grid item in a grid container.'} ,
'grid-column-end': {  'values' : [] , 'desc' : ' Specifies in which column-line the grid item will end.'} ,
'grid-column-gap': {  'values' : [] , 'desc' : ' Specifies the gap size between columns in a grid container.'} ,
'grid-column-start': {  'values' : [] , 'desc' : ' Specifies in which column line the grid item will start.'} ,
'grid-gap': {  'values' : [] , 'desc' : ' Specifies the gap size between grid rows and columns.'} ,
'grid-row': {  'values' : [] , 'desc' : ' Specifies the grid item size and location in a grid container.'} ,
'grid-row-end': {  'values' : [] , 'desc' : ' Specifies in which row-line the grid item will end.'} ,
'grid-row-gap': {  'values' : [] , 'desc' : ' Specifies the gap size between rows in a grid container.'} ,
'grid-row-start': {  'values' : [] , 'desc' : ' Specifies in which row line the grid item will start'} ,
'grid-template': {  'values' : [] , 'desc' : ' Divides a page into sections with a size, position, and layer.'} ,
'grid-template-areas': {  'values' : [] , 'desc' : ' Specifies area in a grid container.'} ,
'grid-template-columns': {  'values' : [] , 'desc' : ' Sets the number and width of columns in a grid container.'} ,
'grid-template-rows': {  'values' : [] , 'desc' : ' Sets the number and height of rows in a grid container.'} ,
'height': {  'values' : bigSize , 'desc' : ' Sets the height of an element.'} ,
'hyphens': {  'values' : [] , 'desc' : ' Specifies hyphenation with wrap opportunities in a line of text.'} ,
'@import': {  'values' : [] , 'desc' : ' Imports a style sheet inside another style sheet.'} ,
'justify-content': {  'values' : [] , 'desc' : ' Defines the alignment of items in a flex container.'} ,
'@keyframes': {  'values' : [] , 'desc' : ' Defines the CSS style to animate.'} ,
'left': {  'values' : smallSize , 'desc' : ' Positions the element from the left of the relative container.'} ,
'letter-spacing': {  'values' : [] , 'desc' : ' Sets the spacing between characters.'} ,
'line-height': {  'values' : [] , 'desc' : ' Sets the vertical spacing between lines of text.'} ,
'list-style': {  'values' : [] , 'desc' : ' Defines the markers (bullet points) for items in a list.'} ,
'list-style-image': {  'values' : [] , 'desc' : ' Defines an image markers (bullet points) for items in a list.'} ,
'list-style-position': {  'values' : positionValues , 'desc' : ' Sets the marker (bullet point) positions for items in a list'} ,
'list-style-type': {  'values' : [] , 'desc' : ' Defines the marker types (bullet points) for items in a list'} ,
'margin': {  'values' : [] , 'desc' : ' Sets the margin (outside spacing) for an element.'} ,
'margin-bottom': {  'values' : [] , 'desc' : ' Sets the bottom margin (outside spacing) for an element.'} ,
'margin-left': {  'values' : [] , 'desc' : ' Sets the left margin (outside spacing) for an element.'} ,
'margin-right': {  'values' : [] , 'desc' : ' Sets the right margin (outside spacing) for an element.'} ,
'margin-top': {  'values' : [] , 'desc' : ' Sets the top margin (outside spacing) for an element.'} ,
'max-height': {  'values' : [] , 'desc' : ' Sets the maximumn height for an element.'} ,
'max-width': {  'values' : smallSize , 'desc' : ' Sets the maximum width for an element.'} ,
'@media': {  'values' : [] , 'desc' : ' Applies media queries to a page.'} ,
'min-height': {  'values' : [] , 'desc' : ' Sets the minimum height for an element.'} ,
'min-width': {  'values' : smallSize , 'desc' : ' Sets the minimum width for an element.'} ,
'object-fit': {  'values' : [] , 'desc' : ' Specifies how an image or video fits inside a container.'} ,
'object-position': {  'values' : positionValues , 'desc' : ' Specifies the image or video position inside a container.'} ,
'opacity': {  'values' : [] , 'desc' : ' Sets the opacity (transparency) of the element.'} ,
'order': {  'values' : [] , 'desc' : ' Specifies the order of an item in a flex container.'} ,
'outline': {  'values' : [] , 'desc' : ' Adds an outline (highlighted border) to an element.'} ,
'outline-color': {  'values' : colors , 'desc' : ' Sets the color of an outline.'} ,
'outline-offset': {  'values' : [] , 'desc' : ' Sets the space between the outline and border.'} ,
'outline-style': {  'values' : [] , 'desc' : ' Sets the style of an outline.'} ,
'outline-width': {  'values' : smallSize , 'desc' : ' Sets the width of an outline.'} ,
'overflow': {  'values' : [] , 'desc' : ' Specifies the flow of content that exceeds the container.'} ,
'overflow-x': {  'values' : [] , 'desc' : ' Specifies the flow of content that exceeds the container width.'} ,
'overflow-y': {  'values' : [] , 'desc' : ' Specifies the flow of content that exceeds the container height.'} ,
'padding': {  'values' : [] , 'desc' : ' Sets the spacing between content and element border.'} ,
'padding-bottom': {  'values' : [] , 'desc' : ' Sets the spacing between content and bottom element border.'} ,
'padding-left': {  'values' : [] , 'desc' : ' Sets the spacing between content and left element border.'} ,
'padding-right': {  'values' : [] , 'desc' : ' Sets the spacing between content and right element border.'} ,
'padding-top': {  'values' : [] , 'desc' : ' Sets the spacing between content and top element border.'} ,
'page-break-after': {  'values' : [] , 'desc' : ' Adds a print page-break after an element.'} ,
'page-break-before': {  'values' : [] , 'desc' : ' Adds a print page-break before an element.'} ,
'page-break-inside': {  'values' : [] , 'desc' : ' Specifies if print page-break is allowed inside an element.'} ,
'perspective': {  'values' : [] , 'desc' : ' Adds perspective to a 3D-positioned element.'} ,
'perspective-origin': {  'values' : [] , 'desc' : ' Sets the origin of the perspective for a 3D-positioned element.'} ,
'pointer-events': {  'values' : [] , 'desc' : ' Specifies whether element reacts to pointer events or not.'} ,
'position': {  'values' : positionValues , 'desc' : ' Sets the element\'s positioning method.'} ,
'quotes': {  'values' : [] , 'desc' : ' Defines the quotation marks to be used on text.'} ,
'right': {  'values' : smallSize , 'desc' : ' Positions the element from the right of the relative container.'} ,
'scroll-behavior': {  'values' : [] , 'desc' : ' Specifies the scrolling behavior of an element'} ,
'table-layout': {  'values' : [] , 'desc' : ' Aligns elements according to a table with rows and columns.'} ,
'text-align': {  'values' : [] , 'desc' : ' Sets the alignment of text inside an element.'} ,
'text-align-last': {  'values' : [] , 'desc' : ' Sets the alignment for the last line of text.'} ,
'text-decoration': {  'values' : [] , 'desc' : ' Defines the style and color of underlined text.'} ,
'text-decoration-color': {  'values' : colors , 'desc' : ' Defines the color of underlined text.'} ,
'text-decoration-line': {  'values' : [] , 'desc' : ' Defines the kind of line to use with text.'} ,
'text-decoration-style': {  'values' : [] , 'desc' : ' Defines the style of underlined text.'} ,
'text-indent': {  'values' : [] , 'desc' : ' Sets the indentation to the beginning of text.'} ,
'text-justify': {  'values' : [] , 'desc' : ' Defines the text justification inside a container.'} ,
'text-overflow': {  'values' : [] , 'desc' : ' Sets the display behavior of text that overflows a container.'} ,
'text-shadow': {  'values' : [] , 'desc' : ' Adds a shadow effect to text.'} ,
'text-transform': {  'values' : [] , 'desc' : ' Defines text capitalization or casing.'} ,
'top': {  'values' : smallSize , 'desc' : ' Positions the element from the top of the relative container'} ,
'transform': {  'values' : [] , 'desc' : ' Applies a 2D or 3D transformation to an element.'} ,
'transform-origin': {  'values' : [] , 'desc' : ' Sets the origin for the transformation of the element.'} ,
'transform-style': {  'values' : [] , 'desc' : ' Specifies the display behavior of 3D space nested elements.'} ,
'transition': {  'values' : [] , 'desc' : ' Creates transitions from one property value to another.'} ,
'transition-delay': {  'values' : [] , 'desc' : ' Creates a delay before the transition effect starts.'} ,
'transition-duration': {  'values' : [] , 'desc' : ' Specifies the time the transition will take.'} ,
'transition-property': {  'values' : [] , 'desc' : ' Specifies the CSS property that will transition.'} ,
'transition-timing-function': {  'values' : [] , 'desc' : ' Defines the speed curve function of the transition.'} ,
'user-select': {  'values' : [] , 'desc' : ' Specifies how text can be selected (highlighted)'} ,
'vertical-align': {  'values' : [] , 'desc' : ' Specifies vertical alignment of an element.'} ,
'visibility': {  'values' : [] , 'desc' : ' Specifies the visibility of an element.'} ,
'white-space': {  'values' : [] , 'desc' : ' Specifies how white-space is handled inside an element.'} ,
'width': {  'values' : bigSize , 'desc' : ' Sets the width of an element.'} ,
'word-break': {  'values' : [] , 'desc' : ' Specifies how line breaks take place.'} ,
'word-spacing': {  'values' : [] , 'desc' : ' Sets the spacing between words.'} ,
'word-wrap': {  'values' : [] , 'desc' : ' Specifies how long words can be wrapped.'} ,
'writing-mode': {  'values' : [] , 'desc' : ' Sets the text reading orientation: top to bottom, etc.'} ,
'z-index': {  'values' : [] , 'desc' : ' Sets the vertical stacking order relative to other elements.'} ,


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
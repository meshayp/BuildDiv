document.addEventListener('DOMContentLoaded', function(){ 
    
    //let widths = [100,200,300,400];
    //let heights = [100,200,300,400];
    //let colors = [red, green, blue, yellow];

    // let props = [ 
    //                 { "prop" : 'background-color' , "vals" : ["red", "green" , "blue"]  }  ,
    //                 { "prop" : 'width' , "vals" : ["100px", "200px" , "300px" , "400px"]  } ,
    //                 { "prop" : 'height' , "vals" : ["100px", "200px" , "300px" , "400px"]  } ,
    //                 { "prop" : 'border-style' , "vals" : ["dotted", "dashed" , "solid" , "double"]  } ,
    //                 { "prop" : 'border-width' , "vals" : ["1px", "10px" , "20px" , "30px"]  } ,
    //                 { "prop" : 'text-align' , "vals" : ["left", "right" , "center" , "justify" , "initial" , "inherit"]  } 
    //             ];

    // const flexElem = document.getElementById('flexView');

    // for (let i=0 ; i < props.length; i++)
    // {
    //     for (let c=0; c < 5; c++)
    //     {
    //         let cssText = "";
    //         for (let j=0 ; j < props.length; j++)
    //         {
    //             cssText += props[j].prop + ":" + props[j].vals[Math.floor(Math.random() * props[j].vals.length)] + ";";
    //         }

    //         var elemDiv = document.createElement('div');
    //         elemDiv.style.cssText = cssText;
    //         elemDiv.innerText = cssText;
    //         flexElem.appendChild(elemDiv);
    //     }
    // }


}, false);

function liClick(event)
{

   let colors = ["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"];
   let smallSize = ["1px", "10px" , "20px" , "30px"];
   let bigSize = ["50", "100px", "200px" , "300px" , "400px", "500px", "600px"];

   let props = { 
                    'background-color' : colors ,
                    'width' : bigSize  ,
                    'height' : bigSize  ,
                    'border-style' : ["dotted", "dashed" , "solid" , "double"] ,
                    'border-width' : smallSize ,
                    'text-align' : ["left", "right" , "center" , "justify" , "initial" , "inherit"]  ,
                    'color'	 : colors ,
                    'line-height'		 : smallSize ,
                    'letter-spacing'		 : smallSize,
                    'text-align'		 : ["left", "right", "center", "justify"] ,
                    'text-decoration'		 : ["none", "underline", "overline", "line-through" ] ,
                    'text-indent'		 : smallSize ,
                    'text-transform'		 : ["none", "capitalize", "uppercase", "lowercase" ] ,

   }

   const flexElem = document.getElementById('flexView');
   flexElem.innerHTML = '';

   const currentDiv = document.getElementById('currentDiv');

   //if (!currentDiv.style.cssText)
   //{
   // currentDiv.cssText = "width:100px;height:100px;background-color:grey;";
   //}
            
    for (let j=0 ; j < props[event.textContent].length; j++)
    {
        //cssText += props[j].prop + ":" + props[j].vals[Math.floor(Math.random() * props[j].vals.length)] + ";";

        let cssText = currentDiv.style.cssText + event.textContent + ":" + props[event.textContent][j] + ";";

        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = currentDiv.style.cssText;
        elemDiv.style[event.textContent] = props[event.textContent][j];
        elemDiv.innerText = event.textContent + ":" + props[event.textContent][j];
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
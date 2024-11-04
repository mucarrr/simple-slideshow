//(function(){  //=> immediately invoked function expression. this prevent us to use variables accidentally somewhereelse. it prevents conflicts.
    //"use strict";   // => this is also a precautıon to prevent conflicts and insist to work the function safely.
//})();

(function(){
    "use strict";
    const myImages = [
        "fish1.jpg",
        "fish2.jpg",
        "fish3.jpg",
        "fish4.jpg",
        "fish5.jpg",
        "fish6.jpg",
        "fish5.jpg",
      ];
      
      const nextButton = document.getElementById("next");
      const myImage = document.getElementById("myimage");
      const previousButton = document.getElementById("previous");
      const container = document.getElementById("content");
      let i=0;

      nextButton.addEventListener("click", function(event){
        event.preventDefault();
        i++;
        if(i > myImages.length-1){i=0;}

        swapImage();

      });

      previousButton.addEventListener("click", ()=>{
        i--;
        if(i < 0){i=myImages.length-1;}

        swapImage();
      });

      function swapImage(){
        
        const newSlide =   document.createElement("img");newSlide.src = `./slides/${myImages[i]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if(container.children.length>2){
          container.removeChild(container.children[0]);
        }
      }
})();
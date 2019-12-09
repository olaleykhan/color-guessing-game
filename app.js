let gameModeNo = 6;
var colors = generateColorCodes(gameModeNo);

var pickedColor = pickAColor();
var colorGuess = document.querySelector('#colorGuess');
// var clickedColor ;
var squares = document.querySelectorAll('.square');
var verdictDisplay = document.querySelector('#verdict-display');
let resetButton = document.querySelector('#reset');

let heading= document.querySelector('#heading'); 
var clickedColor;
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

// ****** swithing between easy and hard mode of the game******

// *********easy mode button ************
easyBtn.addEventListener('click', function() {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    /* here, we call the function that generates the random color codes, but we make it generate 
    3 array inputs  instead of 6 because it is in easy mode
    we also call the function that picks a color out of the (in this case) 3 generated color codes*/
    gameModeNo=3;
    colors = generateColorCodes(gameModeNo);
    pickedColor = pickAColor();

    /* then we also make the picked color code be displayed in the heading as usual with the code below */
    colorGuess.textContent=pickedColor;

    /* having generated the 3 color codes, we still need to make the squares take up and display those colors and also make 
    3 of the square not be displayed in the first place by setting display to none */

    for(i=0; i<squares.length;i++){
        if (colors[i]) {
            squares[i].style.backgroundColor= colors[i];
        }   else{
            squares[i].style.display = 'none';
        }
    }


})
// **********hard mode button *********

hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');


    /* here, we call the function that generates the random color codes, it generates 6 again because it's changing back to hard mode
    we also call the function that picks a color out of the (in this case) 6 generated color codes*/
    gameModeNo=6;
    colors = generateColorCodes(gameModeNo);
    pickedColor = pickAColor();

    /* then we also make the picked color code be displayed in the heading as usual with the code below */
    colorGuess.textContent=pickedColor;

     /* having generated the 3 color codes, we still need to make the squares take up and display those colors and also make 
    3 of the square not be displayed in the first place by setting display to none */

    for(i=0; i<squares.length;i++){
            squares[i].style.backgroundColor= colors[i];
            squares[i].style.display = 'block';
    }
});



// *****the logic here loops through the squares and decides when
//  the picked color has been clicked on ****************

    for (var i = 0; i< squares.length; i++) {
        // add colors to squares
        squares[i].style.backgroundColor=colors[i];
        // add event listerners to squares

        squares[i].addEventListener('click', function(){
            clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                verdictDisplay.textContent = "Correct";
                changeColors(pickedColor);
                heading.style.backgroundColor=pickedColor;
                resetButton.textContent= 'Play Again ?';
                
            }
            else{
                this.style.backgroundColor= "#232323";
                verdictDisplay.textContent= "wrong";
            } console.log(clickedColor,  pickedColor);
        }) 
    }

       

    // a div that has a button and the declaration message 
    
    resetButton.addEventListener('click', function(){
       colors = generateColorCodes(gameModeNo);
        pickedColor= pickAColor();

        // change the color code displayed in the heading
        colorGuess.textContent= pickedColor;

        // change to color of the heading back to default
        heading.style.backgroundColor='burlywood';

        // change the text back to new colors

        this.textContent='New Colors';
        // remove the vertict display on the menu
        verdictDisplay.textContent= "";

        // to make the squares take up and display  the generated color codes 

        // loop through with a forloop and tthen change the colors

            for(i=0; i<squares.length; i++){
            squares[i].style.backgroundColor=colors[i];

            }

    
    })


    // let the color to be guessed be displayed by the system on the heading

         colorGuess.textContent= pickedColor;




    // function that changes the color of all the squares to the color of the picked color when clicked

    function changeColors(color){
        for(var i =0; i<squares.length;i++){
            squares[i].style.backgroundColor = color;
        }
    }

    // function for picking a random color amongst the 6 generated colors in the array

    function pickAColor(){
        let random = Math.floor(Math.random()*colors.length);
        return colors[random];
    }


    // function that generates the code used to create the colors in the color array
    
    function generateColorCodes(num){

        // create an array
        var arr = [                         ]

        // in between the creation and returning, create a loop that pushes a 
        // random number between 0-225 in between the array
        //  
        for(var i =0; i<num; i++){
            arr.push(generateCodeForArray());
        }

        return arr;
    }

    // in the function, create the array, then return the array
    //
    // create a function that generated the numbers between 0-225 that will be pushed
    //  into the generate colora function 

    function generateCodeForArray(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }


 




    // the heading that displays the name and info about the game and colors

    
     
    


// list data variables

let listData = [];


// var pens;

// pens = [mTitle, mYear, mRating];



// anything JS code that might run before the DOM is done loading needs to be in ...



//code to generate HTML from the JavaScript  (REACT!)





// function buttonClicked() {
//      document.getElementById("ButtonStart").style.visibility = 'hidden';
     
//      document.getElementById("ButtonChange").style.visibility = 'visible';
// }


function buttonClicked2() {

var userInput;
var ratings;


var mTitle = document.getElementById("title").value;
var mYear = document.getElementById("year").value;
var mRatingInt;
var mRating = document.getElementById("rating").value;

ratings = [1, 2, 3, 4, 5];

check(mRating);

function myFunction(item1, index2) {
    text += index2 + ": " + item1 + "<br>"; 
}

// if (mRating != ratings.indexOf((ratings)) > -1)
//     alert("data is not an integer")
// else(mRatingInt = parseInt(mRating));

//var pens;

function check(mRating) 
{
    mRating = parseInt(mRating); // Convert your user input string to integer

    if(ratings.indexOf(mRating)>-1) 
    { 
        console.log("Rating applied"); 
    }
    else
    {
        alert("Rating must be between 1-5");
    }
}

userInput = [mTitle, mYear, mRating];

for(let i = 0; i < userInput.length; i++){
    document.getElementById("demo").innerHTML = userInput;
}

//document.getElementById("demo").innerHTML = pens; 
}

// list data variables
let word1;
let word2;
let word3;

let listData = [];

let ButtonStart;
let image1;
let image2;
let balanceDisplay;
let turnCount;
let status;

let text1;
let text2;
let text3;


// anything JS code that might run before the DOM is done loading needs to be in ...
document.addEventListener("DOMContentLoaded", function (event) {


    ButtonStart = document.getElementById("ButtonStart");
    //buttonClicked() = document.getElementById("buttonClicked");
     image1 = document.getElementById("imageDG1");
     image2 = document.getElementById("imageDG2");
     balanceDisplay = document.getElementById("balance");
     turnCount = document.getElementById("turnCount");
     message = document.getElementById("message")

    image1 = document.getElementById("imageRO1");           
    image2 = document.getElementById("imageRO2");           
    
});

//code to generate HTML from the JavaScript  (REACT!)


function buttonClicked() {

    word1 = prompt("Please enter a word:", "");
    if (word1 != null || word1 != "") {
      text1 = word1;
    
    word2 = prompt("Please enter a word:", "");
    if (word2 != null || word2 != "") {
        text2 = word2;

    word3 = prompt("Please enter a word:", "");
    if (word3 != null || word3 != "") {
        text3 = word3;
        listData= [word1, word2, word3]
    }
     ul = document.createElement('ul');

     document.getElementById("myList").appendChild(ul)

     listData.forEach(function(listData)
     {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML+= listData;

     });

     document.getElementById("ButtonStart").style.visibility = 'hidden';
     
     document.getElementById("ButtonChange").style.visibility = 'visible';

     //localStorage.setItem('myList', myData);
    }
    };
     
}

function letterSwapFunction() 
{
    listData = word1.charAt(word1.length - 1) + word2.substring(1, word2.length - 1) + word3.charAt(0); 
};

function buttonClicked2() {

    page1.style.display= "none";
    page2.style.display= "block";

    document.getElementById("myList").appendChild(ul);

    listData.forEach(function(listData)
    {
       let li = document.createElement('li');
       ul.appendChild(li);
       li.innerHTML+= listData;
       document.getElementById("demo").innerHTML = listData;
    });
    
    newList = listData.map(letterSwapFunction);


    document.getElementById("demo").innerHTML = listData.map(newList);
}




newList = listData.map(letterSwapFunction);

document.getElementById("myList").innerHTML = newList;



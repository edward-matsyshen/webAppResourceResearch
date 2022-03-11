let movieArray = [];

let genre = "";

// define a constructor to create note objects

let movieObject = function (pTitle, pYear, pGenre) {
    this.title = pTitle;
    this.year = pYear;
    this.genre = pGenre;
}

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd()").addEventListener("click", function () {

    movieArray.push(new movieObject(document.getElementById("movieTitle").value, document.getElementById("movieYear").value, genre));

    //console.log(movieArray);

    document.getElementById("movieTitle").value = "";
    document.getElementById("movieYear").value = "";
    document.getElementById("select-type").value = "";

    $(document).bind("change", "#select-type", function (event, ui) {
        genre = document.getElementById("select-type").value;
        
        //console.log(genre);
    });

    // // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
});

function createList() {
    
    // clear prior data

    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.title + " (" + element.year + ") " + " (" + element.genre +") ";
        myul.appendChild(li);
    });
}});

// function buttonAdd()
// {
//     //noteArray [0] = noteA.value

//     document.getElementById("Movies").value = noteArray[0]

//     console.log(noteArray);
//     document.getElementById("myList").innerHTML = (noteArray[0]);

// }



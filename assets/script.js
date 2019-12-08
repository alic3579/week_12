var counter = 0;
// console.log(counter)


var saveUserInfo = function(){
  if (!storageAvailable('localStorage')){ return; } // if we can use localStorage, don't return

  
  // localStorage.removeItem('color');
  // localStorage.removeItem('counter');


  // on first site load
  if(localStorage.getItem('color')){ // using a string
    // if color has been saved: 
    var color = localStorage.getItem('color');

    // apply color to element: 
    document.querySelector("body").style.backgroundColor = color;

  }


  if(localStorage.getItem('counter')){ 
    // console.log(localStorage.getItem('counter'))
    if (localStorage.getItem('counter') === "NaN") {
      counter = 0;
    } else {
      counter = parseInt(localStorage.getItem('counter'));
    }
    console.log(counter)
  }


  if(localStorage.getItem('pageCounter')){ 
    var pageCounter = localStorage.getItem('pageCounter');
  }





  document.getElementById("button").addEventListener('click', function(){
    // when a user clicks on myDiv, produce a random color to save:

    console.log("clicked!")

    
    counter++;
    console.log(counter);

    // var newColor = "rgb(" + red + "," + green + "," + blue + ")";
    // var newColor = `rgb(${red}, ${green}, ${blue})`;
    var newColor = `#c98c1a`;
    var newColor2 = `#e3a228`;
    var newColor3 = `#e7b14b`;
    var newColor0 = `#000000`;


    if (counter == 1) {
    localStorage.setItem('color', newColor); // save new color
     // set new color to item:
     document.querySelector("body").style.backgroundColor = newColor;
    } 
    if (counter == 2) {
    localStorage.setItem('color', newColor2); // save new color
     // set new color to item:
     document.querySelector("body").style.backgroundColor = newColor2;
    } 
    if (counter == 3) {
    localStorage.setItem('color', newColor3); // save new color
     // set new color to item:
     document.querySelector("body").style.backgroundColor = newColor3;
    } 
    if (counter == 4) {
      console.log("reset")
      counter = 0;
      localStorage.setItem('color', newColor0);
       // set new color to item:
     document.querySelector("body").style.backgroundColor = newColor0;
    }


    var n = counter.toString();
    localStorage.setItem('counter', n);

   


  

  })



/////////////////////////////////////////////

// For the pages:

var pageCounter = "0";
console.log("page" + pageCounter)


var home = document.getElementById("home");
var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");

document.getElementById("c1").addEventListener('click', function(){

  

  pageCounter = "1";
  console.log("page" + pageCounter)
  localStorage.setItem('pageCounter', pageCounter); 

  if (pageCounter == 1) {

    home.style.display = `none`;
  ch1.style.display = `block`;
  ch2.style.display = `none`;
  ch3.style.display = `none`;
  }


})

document.getElementById("c2").addEventListener('click', function(){

home.style.display = `none`;
ch2.style.display = `block`;
ch1.style.display = `none`;
ch3.style.display = `none`;
})

document.getElementById("c3").addEventListener('click', function(){

home.style.display = `none`;
ch3.style.display = `block`;
ch1.style.display = `none`;
ch2.style.display = `none`;
})

document.querySelector("header").addEventListener('click', function(){

home.style.display = `block`;
ch1.style.display = `none`;
ch2.style.display = `none`;
ch3.style.display = `none`;

})

///////////////

//Try again:

// var allList = document.querySelectorAll("li");

// allList.forEach(function(thisList){

//   thisList.addEventListener("click", function(){

//     allList.forEach(function())


//   })

// })




///////////////
}

saveUserInfo(); // run saving user info

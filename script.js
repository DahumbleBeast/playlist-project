// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let photolink =[
  "https://images.app.goo.gl/815AfLWDgSn1FNsJ9"," https://images.app.goo.gl/PtAbsx9TqtiY73zG7","https://www.instagram.com/coverartmatters/p/C5geXqWLo7r/"."https://www.rcarecords.com/news/victoria-monet-releases-debut-album-jaguar-ii/","https://images.app.goo.gl/XB6pFHZjfapcXmGv7"
  
]
let artist =[
   "Doja Cat", "Sabrina Carpenter","Billie Eiliish","Victoria Monet"
]
let songname =[
  "Woman","espresso","Birds Of A Feather","Alright"
]
let links =["https://youtu.be/g7X9X6TlrUo?si=EKkHMwt7Dlaku45o","https://youtu.be/51zjlMhdSTE?si=MViaDlYe6Ibqh1xv","https://youtu.be/V9PVRfjEBTI?si=xJsKfHrFX2cFhLaE","https://youtu.be/q0oGhx2JT1A?si=37SnF-uFHZaeKWz7","https://youtu.be/5qiSykPdgy8?si=PX_QH2V9pNX-_SL7"]

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();

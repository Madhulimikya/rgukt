const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Looping through images */
for(var k=1;k<=5;k++){
    var newImage = document.createElement('img');
    newImage.setAttribute('src','images/pic' + k + '.jpg');
    thumbBar.appendChild(newImage);
    //assign a click event to every thumbnail
    newImage.addEventListener('click',setImage);
}
function setImage(e){
    //get the file path of the thumbnail picture
    var imagePath = e.target.getAttribute('src');
    //set thumbnail as the picture displayed
    displayedImage.setAttribute('src',imagePath);
}



/* Wiring up the Darken/Lighten button */
//assign a click event to a button
btn.addEventListener('click',switchBrightness);
function switchBrightness(){
    // get the state (class) of the button 
    var btnState = btn.getAttribute('class');
    if (btnState === 'dark'){
        // switch to light state
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        // swtich to dark state
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
      }
    }
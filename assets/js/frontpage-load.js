base_path = "/images/weebos_avif/";
//file_extension = ".avif"

// Create a new array to store the modified strings
imgArray = imgArray.map(img_path => base_path + img_path);

//console.log(imgArray)

// Set image display
var img = document.getElementById("random-img");
img.style.display = "block";

// text randomized
//document.getElementById("p1").innerHTML = "New tererxt!";

document.onload = randomImageBroker('random-img', imgArray);
randomTextBroker('random-text', text_array)
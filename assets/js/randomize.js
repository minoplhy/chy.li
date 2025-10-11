function randomImageBroker(ElemName, imgArray, type="id") {
  let imgELM;

  if (type === "id") {
    imgELM = document.getElementById(ElemName);
  } else {
    imgELM = document.getElementsByClassName(ElemName);
  }

  const randomIndex = Math.floor(Math.random() * imgArray.length);
  const randomImage = imgArray[randomIndex];

  if (type === "id") {
    imgELM.src = randomImage;
  } else {
    for (const el of imgELM) {
      el.src = randomImage;
    }
  }
}

function randomTextBroker(ElemName, textArray) {
  const textElm = document.getElementById(ElemName);
  const randomIndex = mathRandom(textArray);
  textElm.innerHTML = textArray[randomIndex]
}

function mathRandom(srcArray) {
  return Math.floor(Math.random()*srcArray.length);
}

base_path = "/images/weebos_avif/";
base_path_titleimg = "/images/title/";
//file_extension = ".avif"

// Create a new array to store the modified strings
imgArray = imgArray.map(img_path => base_path + img_path);
titleimgArray = titleimgArray.map(img_path => base_path_titleimg + img_path);

//console.log(imgArray)

// Set image display
var img = document.getElementById("random-img");
img.style.display = "block";

// text randomized
//document.getElementById("p1").innerHTML = "New tererxt!";

document.onload = randomImageBroker('random-img', imgArray);
document.onload = randomImageBroker('title-image', titleimgArray, "class");
randomTextBroker('random-text', text_array)
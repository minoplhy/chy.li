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
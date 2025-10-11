base_path_titleimg = "/images/title/";
titleimgArray = titleimgArray.map(img_path => base_path_titleimg + img_path);
document.onload = randomImageBroker('title-image', titleimgArray, "class");

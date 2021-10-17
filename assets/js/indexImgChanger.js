const images = [
  "index_img_001.jpg",
  "index_img_002.jpg",
  "index_img_003.jpg",
  "index_img_004.jpg",
  "index_img_005.jpg",
  "index_img_006.jpg",
];

const indexImg = document.getElementById("main_picture");

const randomImg = images[Math.floor(Math.random() * images.length)];

indexImg.src = `./assets/images/${randomImg}`;

console.log(randomImg);
console.log(images.length);

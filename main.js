var reasons = [
 "You are such a charming student  that teaching you is love",
  "A child who has been brought up with values, who is empthatic, respects everyone. ",
  "You are a real star! You put a lot of effort into everything you do and are very conscientious. ",
  "Aryan the  smart thinker, logicall,  most reselient child of my class and your behaviour made me love with you",
"A mother's arms are more comforting than anyone else's-this is for the one person whom you love the most",

  
];

var images = [
  "image2.jpeg",
  "image3.jpeg",
  "image6.jpeg",
  "image5.jpeg",
  "image4.jpeg",
];

var i = 0;
function nextslide() 
{  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
  document.getElementById("audio").play();
 
}


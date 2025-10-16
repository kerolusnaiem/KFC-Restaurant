
let text1 = "Welcome To KFC"; // الكلام اللي هيظهر
let text2 = "Offers"; // الكلام اللي هيظهر
let text3 = "Menu"; // الكلام اللي هيظهر
let text4 = "About"; // الكلام اللي هيظهر
let i = 0;
let speed = 150; // سرعة الكتابة (ms)

function typeEffect() {
  if (i < text1.length || i < text2.length || i < text3.length || i < text4.length) {
    document.getElementById("typing1").innerHTML += text1.charAt(i);
    document.getElementById("typing2").innerHTML += text2.charAt(i);
    document.getElementById("typing3").innerHTML += text3.charAt(i);
    document.getElementById("typing4").innerHTML += text4.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}



window.onload = typeEffect;
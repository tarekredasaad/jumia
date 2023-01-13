var lightDark = document.getElementById("lightDarkMode");
var Body = document.getElementById("TotalBody");
var downText = document.getElementById("downText");
lightDark.addEventListener("click", function () {
  lightDark.classList.toggle("fa-moon");
  if (this.classList.toggle("fa-sun")) {
    Body.classList.remove("darkMode");
    Body.classList.add("lightMode");
    // downText.style.color = "black";
    // downText.style.backgroundColor = "white";

  } else {
    Body.classList.remove("lightMode");
    Body.classList.add("darkMode");
    // downText.style.color = "green";
    // downText.style.backgroundColor = "darkgray";

  }
});
var HH=document.getElementById("hour");
var MM=document.getElementById("minute");
var SS=document.getElementById("second");

function countdown(duration, count) {
  if (currentIndex < count) {
    let minutes, seconds;
    countdownInterval = setInterval(function () {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      MM.innerText = `${minutes}`;
      SS.innerText = `${seconds}`;
      MM.innerHTML = `${minutes}`;

      if (--duration < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }
}

$(document).ready(function(){
  var product = document.getElementsByClassName('img_box_product');
  var length=product.length-1;
  for(let i =0;i<product.length;i++){

      $('.img_box_product').eq(i).hover(function(){
          $('.card-footer').eq(i).addClass('bg-warning ');
      },function(){
          $('.card-footer').eq(i).removeClass('bg-warning');
      })
  }
})

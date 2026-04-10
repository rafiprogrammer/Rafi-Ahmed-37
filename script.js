const about = document.getElementById("about")
const skill = document.getElementById("skill")
const footer = document.getElementById("footer")
const main = document.getElementById("light");
// const description = document.getElementById("homepageDescription");

// const lightMode = () => {
//     const currentBg = window.getComputedStyle(main).backgroundColor;

//     if (currentBg === "rgb(11, 11, 13)") {
//         main.style.background = "white";
//         main.style.color = "#0B0B0D";
//         main.style.transition = "1s";
//         description.style.transition = "1s";
//         description.style.color = "black"
//         about.style.color = "white";
//         skill.style.color = "white";
//         footer.style.color = "white";
//     }
//     else{
//         main.style.background = "#0B0B0D";
//         main.style.color = "white";
//         description.style.color = "white"
//     }
// }
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const website = document.getElementById("website");

  const minTime = 100; // minimum preloader time

  setTimeout(function () {
    preloader.style.opacity = "0"; // fade out
    setTimeout(function() {
      preloader.style.display = "none"; // remove preloader
      website.style.display = "block";  // show website
    }, 800);
  }, minTime);
});
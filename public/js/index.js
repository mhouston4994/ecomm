//Initiate WOWjs
new WOW().init();

// Category items
const cats = document.querySelectorAll('list-group-item');
cats.forEach(cat => {
  cat.addEventListener('click', cat =>{
    console.log(cat);
    cat.style.addClass = "active";
  });
});


// Toggle navbar visibillity on scroll
// let prevScrollpos = window.pageYOffset;
// window.onscroll = () => {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// }
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("open-nav");
  } else {
    document.getElementById("navbar").classList.add("open-nav");
  }
  prevScrollpos = currentScrollPos;
}
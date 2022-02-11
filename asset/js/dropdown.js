var button = document.getElementsByClassName("menu-button");
var content = document.getElementsByClassName("Navigation__Wrapper");

button[0].addEventListener("mouseenter", function () {
  document.getElementById("myDropdown").classList.toggle("show");
  //document.getElementByClassName("main_body").classList.add("hover_background");
});
// function myFunction_remove() {
//     document.getElementById("myDropdown").classList.toggle("remove");
// }

// button[0].addEventListener("mouseleave", function(){
//     myFunction_remove(this.value);
// });
// for (var i = 0; i < content.length; i++) {
//     content[i].classList.remove("show");
// }
//                 //         }
// window.addEventListener("mouseleave", function(){
//     myFunction_remove(this.value);
// }
//   //nếu click ra ngoài các button thì ẩn tất cả các menu con
window.addEventListener("mouseleave", function () {
  if (!event.target.matches(".menu-button")) {
    for (var i = 0; i < content.length; i++) {
      content[i].classList.remove("show");
    }
  }
});

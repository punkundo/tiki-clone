//    code này em có tham khảo bên viblo có dòng count = (checkSlickSlide === 'lastClone')?slickSlice.length - 2:(checkSlickSlide === 'firstClone')?1:count; em chưa hiểu lắm ạ :<
var prev = document.querySelector(".slick-prev");
var next = document.querySelector(".slick-next");

var slickTrack = document.querySelector(".slick-track");
var slickSlice = document.querySelectorAll(".slick-slide");
var slickDots = document.querySelectorAll(".slick-dots li");

var button = document.querySelectorAll(".slick-dots button");

var countOfButton = 0;

var size = slickSlice[0].clientWidth;
var done_stranslate = true;
var count = 1;
var interval = setInterval(() => {
  slickDots[count - 1].classList.remove("slick-active");
  slickTrack.style.transition = "transform 0.5s ease-in-out";
  slickTrack.style.transform = `translate3d(${-size * ++count}px,0px,0px)`;
  countOfButton = count - 1;
  if (count === slickSlice.length - 1) {
    slickDots[0].classList.add("slick-active");
  } else {
    slickDots[count - 1].classList.add("slick-active");
  }
}, 3000);

interval;

prev.addEventListener("click", function (e) {
  if (done_stranslate) bothButton(true, false, e);
});

next.addEventListener("click", function (e) {
  if (done_stranslate) bothButton(false, true, e);
});

function bothButton(arrowL, arrowR, e) {
  e.preventDefault();
  done_stranslate = false;
  if (arrowL)
    if (count <= 0) return;
    else {
      if (arrowR)
        if (count >= slickSlice.length - 1) {
          return;
        }
    }
  slickDots[count - 1].classList.remove("slick-active");
  slickTrack.style.transition = `transform 0.5s ease-in-out`;
  if (count == arrowL) count--;
  else count++;
  // kiểm tra nếu prev đc click thì giảm biến đếm cout và ngược lại
  slickTrack.style.transform = `translate3d(${-size * count}px,0px,0px)`;
  countOfButton = count - 1;
  if (count == 0) slickDots[slickDots.length - 1].classList.add("slick-active");
  else if (count == slickDots.length - 1)
    slickDots[slickDots.length - 1].classList.add("slick-active");
  else slickDots[count - 1].classList.add("slick-active");
}

slickTrack.addEventListener("transitionend", () => {
  done_stranslate = true;
  let checkSlickSlide = slickSlice[count].id;
  if (checkSlickSlide === "lastClone" || checkSlickSlide === "firstClone") {
    slickTrack.style.transition = `none`;
    count =
      checkSlickSlide === "lastClone"
        ? slickSlice.length - 2
        : checkSlickSlide === "firstClone"
        ? 1
        : count;
    countOfButton = count - 1;
    slickTrack.style.transform = `translateX(-${size * count}px)`;
  }
});

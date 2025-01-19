function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
// function moveRandomEl(elm) {
//   let container = document.querySelector('.container');
//   let containerRect = container.getBoundingClientRect();
//   let elmRect = elm.getBoundingClientRect();

//   let minTop = containerRect.top;
//   let maxTop = containerRect.bottom - elmRect.height;
//   let minLeft = containerRect.left;
//   let maxLeft = containerRect.right - elmRect.width;

//   let newTop = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
//   let newLeft = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;

//   elm.style.position = "absolute";
//   elm.style.top = newTop + "px";
//   elm.style.left = newLeft + "px";
// }

// const moveRandom = document.querySelector("#move-random");

// // Use "pointerenter" event for better touch and mouse support.
// moveRandom.addEventListener("pointerenter", function (e) {
//   moveRandomEl(e.target);
// });


// // Handle clicks on the GIF by preventing the default action.
// document.querySelector(".tenor-gif-embed").addEventListener('click', function(e) {
// e.preventDefault();  //Prevents focusing on the GIF content and not propagating to other elements.
// });
// function moveRandomEl(elm) {
//   elm.style.position = "absolute";
//   elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
//   elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
// }

// const moveRandom = document.querySelector("#move-random");

// moveRandom.addEventListener("mouseenter", function (e) {
//   moveRandomEl(e.target);
// });
function moveRandomEl(elm) {
  let container = document.querySelector('.container'); // Get the container
  let containerRect = container.getBoundingClientRect(); // Get container bounds
  let elmRect = elm.getBoundingClientRect();

  // Calculate a safe range for the button to move within
  let minTop = containerRect.top;
  let maxTop = containerRect.bottom - elmRect.height;
  let minLeft = containerRect.left;
  let maxLeft = containerRect.right - elmRect.width;

  // Generate random position within safe bounds
  let newTop = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
  let newLeft = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;

  // Set position
  elm.style.position = "absolute";
  elm.style.top = newTop + "px";
  elm.style.left = newLeft + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
moveRandomEl(e.target);
});
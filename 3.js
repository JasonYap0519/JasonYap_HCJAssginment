"use strict";

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

// Click on div1 -> print div1
// Click on div2 -> print div2 div1
// Click on div3 -> print div3 div2 div1
div1.addEventListener("click", () => {
  alert(div1.id);
});

div2.addEventListener("click", () => {
  alert(div2.id);
});

div3.addEventListener("click", () => {
  alert(div3.id);
});

// Click on div1 -> print div1
// Click on div2 -> print div1 div2
// Click on div3 -> print div1 div2 div3
// div1.addEventListener(
//   "click",
//   () => {
//     alert("div 1");
//   },
//   { capture: true }
// );
// div2.addEventListener(
//   "click",
//   () => {
//     alert("div 2");
//   },
//   {
//     capture: true,
//   }
// );
// div3.addEventListener("click", () => {
//   alert("div 3");
// });

// Click on div1 -> print div1 div2 div3
// Click on div2 -> print div2 div3
// Click on div3 -> print div3
// div1.addEventListener("click", (e) => {
//   alert(div1.id);
//   alert(e.target.children[0].id);
//   alert(e.target.children[0].children[0].id);
// });
// div2.addEventListener("click", (e) => {
//   alert(div2.id);
//   alert(e.target.children[0].id);
//   e.stopPropagation();
// });
// div3.addEventListener("click", (e) => {
//   alert(e.target.id);
//   e.stopPropagation();
// });

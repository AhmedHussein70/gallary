let btns = document.querySelectorAll(".btn");
let images = document.querySelectorAll(".ppImge");
let Nature = document.querySelector(".Nature");
let Cars = document.querySelector(".Cars");
let people = document.querySelector(".people");

let counter = 0;
btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    btns.forEach((ele) => {
      ele.classList.remove("active");
    });

    item.classList.add("active");

    images.forEach((element) => {
      element.classList.remove("block");
      if (element.getAttribute("class")[0] == item.getAttribute("class")[0]) {
        element.classList.add("block");
      }
      
    });

    if (item.getAttribute("Nature", "Nature") == "Nature") {
      Nature.classList.add("block");
    } else if (item.getAttribute("Cars", "Cars") == "Cars") {
      Cars.classList.add("block");
    } else if (item.getAttribute("people", "people") == "people") {
      people.classList.add("block");
    } else {
      images.forEach((element) => {
        element.classList.add("block");
      });
    }
  });
});

// let counter = 0;
// btns.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     btns.forEach((ele) => {
//       ele.classList.remove("active");
//     });

//     item.classList.add("active");

//     images.forEach((element) => {
//       element.classList.remove("block");
//     });
//     if (item.getAttribute("Nature", "Nature") == "Nature") {
//       Nature.classList.add("block");
//     } else if (item.getAttribute("Cars", "Cars") == "Cars") {
//       Cars.classList.add("block");
//     } else if (item.getAttribute("people", "people") == "people") {
//       people.classList.add("block");
//     } else {
//       images.forEach((element) => {
//         element.classList.add("block");
//       });
//     }
//   });
// });

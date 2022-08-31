// 2. given an array and print output data at schedule
// Let list = [{
// value: ‘a’, delay: 2000
// },{
// value: ‘b’, delay: 1000
// },{
// value: ‘c’, delay: 3000
// },
// ... ];
// We need to output ‘a’ after 2 seconds, output ‘b’ 1 second after ‘a’, and output ‘c’ 3
// seconds after ‘b’

"use strict";

let list = [
  {
    value: "a",
    delay: 2000,
  },
  {
    value: "b",
    delay: 1000,
  },
  {
    value: "c",
    delay: 3000,
  },
];
// setTimeout(() => console.log(list[0].value), 2000);
// setTimeout(() => console.log(list[1].value), 3000);
// setTimeout(() => console.log(list[2].value), 6000);

// we modify each output's delay time so that each output will shown correctly when using setTimeout
const modifyList = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      continue;
    }
    list[i].delay = list[i - 1].delay + list[i].delay;
  }
};

function printTasks(list) {
  modifyList(list);

  for (let i = 0; i < list.length; i++) {
    setTimeout(() => {
      console.log(list[i].value);
    }, list[i].delay);
  }
}

printTasks(list);

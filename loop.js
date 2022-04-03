const objArr = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
  {
    name: "Joe",
    age: 20,
  },
];

const arr = ["John", "Jane", "Joe"];

const obj = {
  name: "John",
  age: 30,
  id: 123,
};
obj[Symbol.iterator] = function * () {
  let keys = Object.keys(obj);
   for (let index = 0; index < keys.length; index++) {
     yield obj[keys[index]];
   }
}

// obj[Symbol.iterator] = function *(){
//   let keys = Object.keys(obj);
//   //取到key值的长度
//   let len = keys.length;
//   //定义循环变量
//    let n = 0;
//    //条件判断
//    while(n < len) {
//        yield {k:keys[n],v: obj[keys[n++]]};
//    }
// }

// obj.__proto__ .gender = 'male';

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     console.log('key: ' + key + ' value: ' + obj[key]);
//   }
// }

// for (const key in arr) {
//   // debugger;
//   console.log('key: ' + key + ' value: ' + arr[key]);
// }

// console.log(obj[Symbol.iterator]);

for (const item of obj) {
  console.log(item);
}

// objArr.forEach(element => {
//   console.log(element);
// });

// Object.entries(obj).forEach(key => {
//   console.log(key);
// });


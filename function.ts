function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
} // 没有返回值的函数，其返回值类型为 void,申明为 void 类型的变量，只能赋予 undefined 和 null
/* function printResult(num: number): undefined {
  console.log("Result: " + num);
  return;
} */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
// cb 回调函数
printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // =>创造函数类型

combineValues = add;
// combineValues = printResult;
// combineValues = 5; 5不是function

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

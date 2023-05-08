let userInput: unknown; // 可以分类任何值
let userName: string;

userInput = 5;
userInput = "Max";
// userInput = userName   !!error!!
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
// never 类型表示永远不会有值的一种类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// void 表示没有任何类型，never 表示永远不存在的值的类型。

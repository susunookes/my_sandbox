// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 25));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const num = null;
// const fee = num || "金額が未設定です";
// console.log(fee);

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

// 문제
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

const solution = (n1, n2) => {
  return Math.floor(n1 / n2);
};

const num1 = 10;
const num2 = 5;
console.log(solution(num1, num2));

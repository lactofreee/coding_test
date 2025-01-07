// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

const solution = (n1, n2) => {
  return n1 % n2 || 0;
};

console.log(solution(3, 2))
console.log(solution(10, 5))

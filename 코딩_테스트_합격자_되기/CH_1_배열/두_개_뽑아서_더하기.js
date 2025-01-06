// 문제
// - 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를
// 배열에 오름차순으로 담아 반환하는 solution()함수를 완성하세요.

// 제약 조건
// - numbers의 길이는 2 이상 100 이하입니다.
// - numbers의 모든 수는 0 이상 100 이하입니다.

const solution = (arr) => {
  let answer = [];
  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum.push(arr[i] + arr[j]);
    }
  }
  answer = [...new Set(sum)].sort((a, b) => a - b);
  return answer;
};

const arr = [2, 1, 3, 4, 1];
console.log(solution(arr));

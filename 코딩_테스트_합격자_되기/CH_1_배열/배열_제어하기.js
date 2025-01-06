// 문제
// 정수 배열을 하나 받습니다. 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 solution()함수를 구현하세요.

// 제약 조건
// - 배열 길이는 2 이상 1,000 이하입니다.
// - 각 배열의 데이터 값은 -100,000 이상 100,000 이하입니다.

const solution = (arr) => {
  const filteredArr = [...new Set(arr)];
  const sortedArr = filteredArr.sort((a, b) => a - b);
  return sortedArr;
};

const arr = [4, 2, 2, 1, 3, 4];
console.log(solution(arr));
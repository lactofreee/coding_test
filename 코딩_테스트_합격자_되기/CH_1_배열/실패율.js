// 문제
// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stage
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록  solution 함수를 완성하라.

// 제한사항
// 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// stages의 길이는 1 이상 200,000 이하이다.
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

const solution = (N, stages) => {
  const challanger = [...new Array(N + 2).fill(0)];
  for (let i = 0; i < stages.length; i++) {
    challanger[stages[i]] += 1;
  }

  const fails = {};
  let total = stages.length;
  for (let i = 1; i <= N; i++) {
    if (challanger[i] === 0) {
      fails[i] = 0;
      continue;
    }
    fails[i] = challanger[i] / total;
    total -= challanger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((val) => Number(val[0]));
};

const n = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(n, stages));

// 20250107
// Object.entries() 메서드 활용법
// 반복문 사용시 for ... of 구문 활용

// for문 기본 사용 예시
// for (let i = 0; i < stages.length; i++) {
//   challanger[stages[i]] += 1;
// }

// for ... of 구문 적용 예시
// for (const stage of stages) {
//   challanger[stage] += 1;
// }

/* 정수 NUM1과 num2가 매개 변수로 주어집니다. 두수가 같으면 1 ,,다르면 -1을 REURun하도록 함수를 완성해주세요 */

function solution(num1, num2) {
  let answer = 0;
  if (num1 == num2) answer = 1;
  else answer = -1;
  return answer;
}

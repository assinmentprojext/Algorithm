/*
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

answer = 요소 전체 합 / 요소 개수ㅇㄹㅇ
 */

function solution(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var answer = sum / numbers.length;
  return answer;
}

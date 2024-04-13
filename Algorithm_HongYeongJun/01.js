/* 1. 출력: [100, 200, 300]
2. 입력: 없음
3. array.length - 1로 배열 길이를 강제로 줄이면?
*/
let nums = [100, 200, 300, 400, 500];

function pop(array) {
  array.length = array.length - 1; // 배열이 객체이므로 가능
}
pop(nums);
pop(nums);
console.log(nums);

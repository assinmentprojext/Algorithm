// 1. 입력: 공백으로 구분된 학생 이름 2개, 공백으로 구분된 점수 2개
// 2. 출력: 이름이 키이고 점수가 값인 객체(점수는 숫자)
// 3. split 메서드로 문자 쪼갠 다음,  각각 배열에 저장
// 4. 배열의 값 대로 객체 생성(동적으로)(점수는 이 때 숫자로 바꾼다)
let names = "Yujin Hyewon";
let scores = "70 100";
let nameArr = names.split(" ");
let scoreArr = scores.split(" ");
let result = {};
result[nameArr[0]] = parseInt(scoreArr[0]);
result[nameArr[1]] = parseInt(scoreArr[1]);

console.log(result);

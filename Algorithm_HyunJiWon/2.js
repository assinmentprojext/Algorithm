//배열의 내장함수
//pass 부분에 배열 내장함수를 이용하여 코드를 입력, 다음과 같이 출력

// 데이터
// var arr = [200, 100, 300];
// //pass
// console.log(arr);

// 출력
// [200, 100, 10000, 300]

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

// splice()는 배열의 두 번째 위치에 값을 추가함.
//첫 번째 매개변수는 시작 위치를 나타내고, 두 번째 매개변수는 제거할 요소의 수, 세 번째 매개변수는 추가할 요소.
//출력은 [200, 100, 10000, 300]
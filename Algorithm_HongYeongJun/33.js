// 1. 입력: 띄어쓰기로 구분된 숫자
// 2. 출력: 입력한 숫자를 순서 거꾸로 한 결과
// 3. 구현 방법
//     1) 띄어쓰기로 구분하여 배열 생성(split?)
//     2) 1) 배열 순서 거꾸로 하기(for문)
//         (1) 마지막 인덱스: arr.length - 1(lastIndex)
//         (2) i번째 값과 lastIndex - i번째 값을 서로 바꾼다. (temp 변수 필요)
//         (3) lastIndex - i <= i가 되면 반복문 종료
//     3) 배열을 띄어쓰기로 구분해서 출력

inputNum = "1 2 3 4 5";
function reverse(inputNum) {
    let inputArr = inputNum.split(" ");
    let lastIndex = inputArr.length - 1;
    let temp;
    for (let i = 0; i < lastIndex - i; i++) {
        temp = inputArr[i];
        inputArr[i] = inputArr[lastIndex - i];
        inputArr[lastIndex - i] = temp;
    }
    let outputStr = inputArr.join(" ");
    return outputStr;
}
console.log(reverse(inputNum));

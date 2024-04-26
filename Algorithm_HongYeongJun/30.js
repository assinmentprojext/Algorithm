// pineapple is yummy: 비교 문자열
// apple: 찾을 문자열
// Edge Case부터 따로 정리하자!
// Edge case
// 1. 일반형
//     1) 비교 문자열 i번째 문자, 찾을 문자열 첫번째 문자 비교
//         (1) 일치하면 비교 문자열, 찾을 문자열 인덱스 모두 1 증가, sameCount 1 증가
//         (2) 불일치하면 비교 문자열 인덱스만 1 증가

let inputStr = "pineapple is yummy";
let goalStr = "apple";
function includes(inputStr, goalStr) {
    let sameCount = 0;
    let inputIndex = 0;
    let goalIndex = 0;
    while (inputIndex < inputStr.length) {
        if (sameCount === goalStr.length) {
            break;
        }
        if (inputStr[inputIndex] === goalStr[goalIndex]) {
            sameCount++;
            goalIndex++;
        } else {
            inputIndex++;
        }
    }
    if (sameCount === goalStr.length) {
        return inputIndex - sameCount + 1;
    } else {
        return -1;
    }
}
console.log(includes(inputStr, goalStr));

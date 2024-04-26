// 1. 입력: 문자열
// 2. 출력: 공백의 개수
// 3. 구현 방법
//     1) 문자열 전체 순회
//         (1) 공백이 나오면 공백 카운터 +1
//         (2) 공백 카운터 + 1 출력
let str = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
function countWords(inputStr) {
    let spaceCount = 0;
    Array.from(inputStr).forEach((el) => {
        if (el === " ") {
            spaceCount++;
        }
    });
    return spaceCount + 1; //단어 개수
}
console.log(countWords(str));

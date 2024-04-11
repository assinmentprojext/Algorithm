// 1. 입력: 알파벳 문자
// 2. 출력: 대소문자 여부
// 3. 구분법: 아스키 코드 값이 65이상 90 이하이면 대소문자
// 4. 함수: charCodeAt()
let char1 = "a";
let char2 = "B";
function isUpper(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        console.log("YES");
    else console.log("NO");
}
isUpper(char1);
isUpper(char2);

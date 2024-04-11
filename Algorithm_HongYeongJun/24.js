/*https://blog.naver.com/diceworld/220175224345
1. 입력: 소문자 이름(lowerName)
2. 출력: 대문자 이름(upperName)
3. for (let i = 0; i < lowerName.length; i++)
    1) 소문자 아스키 코드 변수: lowerASCII = lowerName.charCodeAt(i), 
    대문자 아스키 코드 배열: upperASCII
    2) lowerASCII - 32를 upperASCII 배열에 push
    3) upperName = String.fromCharCode(...upperASCII)(upperASCII는 배열이므로 전개 필요)
4. upperName 출력
*/

lowerName = "mary";
upperASCII = [];
for (let i = 0; i < lowerName.length; i++) {
    lowerASCII = lowerName.charCodeAt(i);
    upperASCII.push(lowerASCII - 32);
}
upperName = String.fromCharCode(...upperASCII);
console.log(upperName);

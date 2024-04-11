// 1. 입력: 없음
// 2. 출력: 2-gram
//     반복문에서 i와 i+1에 해당하는 문자 출력
// 각 문자는 띄어쓰기로 구분됨

let str = "Javascript";
for (let i = 0; i < str.length - 1; i++) {
    console.log(`${str[i]} ${str[i + 1]}`);
}

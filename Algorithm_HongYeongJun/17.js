/*
1. 입력: 키
2. 출력: 150cm 넘으면 YES, 아니면 NO
*/

let height = 150;
function measureHeight(height) {
    if (height > 150) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
measureHeight(height);
measureHeight(height + 1);

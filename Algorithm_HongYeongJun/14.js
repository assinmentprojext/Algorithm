/*
1. 입력: 자연수 n
2. 출력: 3의 배수면 짝, 아니면 자연수 그대로 출력
3. n % 3 == 0
    맞으면 짝 출력
    아니면 n 출력
*/

let num1 = 2;
let num2 = 3;
function three(input) {
    if (input % 3 == 0) {
        console.log("짝");
    } else {
        console.log(input);
    }
}
three(num1);
three(num2);

/*
1. 입력: 번호
2. 출력: 번호에 해당하는 행성
3. 방법: switch 문
        1이면 결과는 수성, 2이면 결과는 금성 ... 8이면 결과는 해왕성
*/
function planet(input) {
    let result;
    switch (input) {
        case 1:
            result = "수성";
            break;
        case 2:
            result = "금성";
            break;
        case 3:
            result = "지구";
            break;
        case 4:
            result = "화성";
            break;
        case 5:
            result = "목성";
            break;
        case 6:
            result = "토성";
            break;
        case 7:
            result = "천왕성";
            break;
        case 8:
            result = "해왕성";
            break;
    }
    return result;
}

console.log(planet(1));

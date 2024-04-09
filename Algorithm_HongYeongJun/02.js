/* 1. 출력: 10000을 push한 결과 출력
2. 입력: push(arr(배열 이름), 넣을 숫자, 넣을 자리)(내장함수 쓰면 노잼)
3. 배열 자리 늘리기: arr.length + 1
4. for (let i = 넣을 자리; i < arr.length; i++)
    4-1. arr[i+1] = arr[i]
5. arr[place] = 넣을 숫자
*/
let arr = [200, 100, 300];

function push(array, input, place) {
    array.length = array.length + 1;
    for (let i = place; i < array.length - 1; i++) {
        array[i + 1] = array[i];
    }
    array[place] = input;
}
push(arr, 10000, 2);
console.log(arr);

/*3. 배열 다루기
당신이 구현하고하자 하는 함수는
배열과 정수를 파라미터로 전달 받습니다. 함수 이름은 정해지지 않았으니 마음대로 하셔도 괜찮습니다. 전달받은 배열은 정확히 각 요소마다 값을 10을 더 합니다. 이후 값이 10씩 더해진 배열에서, 나머지 파라미터로 전달받은 정수가 있는지 확인하여
값이 없다면 콘솔에 검사하고자 하는 값이 없다는 로그를 보인 후 함수를 종료하세요
값이 있다면 해당 숫자를 제외한 배열을 반환하는 함수를 만드세요. 최종 목표
1. 해당 함수는 배열과 검사하고자 하는 수를 파라미터로 전달 받습니다. 
2. 해당 함수는 배열의 각 요소에 10을 더한 후 검사하고자 하는 수가 있는지 검사합니다. 
3. 만약 값이 없다면 결과값이 없습니다를 콘솔에 로그합니다. 
4. 값이 있다면 검사하고자하는 수를 제외한 배열을 반환합니다. 
5. 값이 없을 때 console.log에 undefined가 찍혀서는 안됩니다.*/

function checkAndFilter(arr, num) {
    // 배열의 각 요소에 10을 더하기
    const newArr = arr.map(element => element + 10);
  
    // 검사하고자 하는 수가 있는지 확인
    const index = newArr.indexOf(num);
  
    if (index === -1) {
      console.log(`검사하고자 하는 값 ${num}이(가) 배열에 없습니다.`);
      return; // 결과값이 없음을 나타내기 위해 함수 종료
    } else {
      // 검사하고자 하는 수를 제외한 배열 반환
      return newArr.filter((_, i) => i !== index);
    }
  }
  
  // 예시 배열과 정수
  const exampleArray = [1, 2, 3, 4, 5];
  const exampleNumber = 15;
  
  // 함수 호출 및 결과 출력
  const result = checkAndFilter(exampleArray, exampleNumber);
  if (result !== undefined) {
    console.log("결과 배열:", result);
  }
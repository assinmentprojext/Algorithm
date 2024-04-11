piaaapple is yummy
apple

1. 입력: 입력 문자열(inputStr), 찾을 문자열(goalStr)
2. 출력: goalStr이 시작되는 inputStr의 index
3. 필요 변수
    찾을 문자열이 시작되는 index(strStartIndex)
    안쪽 반복문이 시작되는 index(forStartIndex)(초기값 -1)
    찾을 문자열의 길이(goalMax)
4. 글자 비교
    i. goalStr의 첫 글자와 inputStr의 모든 글자 비교
        0) j = forStartIndex + 1
        1) inputStr[j] == goalStr[0] 이면 
            (1) startIndex와 forStartIndex에 현재 j값 저장 
            (2) 안쪽 반복문 break
        2) 아니면
            (1) j++
        3) inputStr 끝까지 도달해도 글자가 일치하지 않으면
            (1) "존재하지 않는 문자열입니다." 출력
            (2) 함수 종료  
    ii. goalStr의 두번째 글자와 inputStr의 모든 글자 비교
        0) forStartIndex 앞 글자는 볼 필요 없음. 따라서 j = forStartIndex + 1
        1) inputStr[j] == goalStr[1] 이면
            (1) forStartIndex에 현재 j값 저장
            (2) 만약 j == goalMax - 1이면
                {1} strStartIndex return
            (3) 아니면 
                {1} j == 
                안쪽 반복문 break
        2) 아니면 현재 j + 1부터 i번 과정을 수행한다. 
            (1) forStartIndex에 현재 j값 저장
            (2) 안쪽 반복문 break
    iii. ii과정을 goalStr.length만큼 반복한다. 
        1) 만약 
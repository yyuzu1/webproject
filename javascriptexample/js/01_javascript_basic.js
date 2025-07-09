function btnClick2(){
    alert("외부 알림창 출력!!!");
    // window는 생략 가능
}

function changeColor1(){
    document.querySelector("#box").style.backgroundColor = "red";
    // 셀렉토 메서드는 다중 선택 불가 그래서 여러 클래스 조건을 찾을 땐 사용 불가
}

function changeColor2(){
    document.getElementById("box").style.backgroundColor = "yellow";
}
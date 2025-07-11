function test1() {
    alert("함수 선언식");
}

function bgChange(color){
    document.getElementById("divBg").style.backgroundColor = color;
}

// function clickCount(){
//     const btn = document.getElementById("btn1");
//     btn.innerText = parseInt(btn.innerText) +1;
// }

function clickCount(btn) {
    btn.innerText = parseInt(btn.innerText) +1;
}

function add() {
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);
    let result = num1 + num2;

    document.getElementById("result").value = result;
}


// document.getElementById("요소id").addEventListener("이벤트",function() {

// });

// 1. 기본 형태
document.getElementById("btn2-1").addEventListener("click",() => {
    alert("화살표 함수 기본 형태입니다.")
})

// 2. 매개변수 1개인 경우
document.getElementById("btn2-2").addEventListener("click", e => {
    console.log(e.target.id);
    e.target.style.backgroundColor = "yellow";
})

function printConsole(fn) { //매개변수로 함수가 전달됨
    // 1), 2) 실핼문
    console.log(fn(2));

    //3) 실행문
    console.log(fn("홍길동",20));
}

//3. {} , return 생략
document.getElementById("btn2-3").addEventListener("click", () => {
    // 1) 함수 호출(익명 함수)
    printConsole( function(num){ return num *10});

    //2. 화살표
    // printConsole( num => num * 5);

    // //3.
    // printConsole((name,age) => { "name" : name, "age" : age}); // 문법오류 -> 객체를 주는 블록인데, 이렇게 주면 실행문이 됨
    // printConsole((name,age) => { return {"name" : name, "age" : age} } ); //위의 문제 해결 위해 리턴 생략 X
    printConsole( (name,age) => ({name : name, age : age}));
})

//this(이벤트가 발생한 요소) 사용 불가
// 1.익명 함수는 this 사용 가능
document.getElementById("btn2-4").addEventListener("click",function(){
    this.style.backgroundColor = "pink";
})

//2)화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click", e => {
    // 화살표 함수에서 this는 창 자체를 나타내는 객체(window)이다. 다시 말해 this는 window를 참조함
    // 화살표에서는 e(event).target
    console.log(e.target);
    // this.style.color = "white"; 불가
    e.target.style.color = "white";
})


// document.getElementById("fontChange").addEventListener("click", () => {
//     let color = document.getElementById("fontColor").value;
//     document.getElementById("bicycle").style.color = color;
// });

document.getElementById("fontColor").addEventListener("input", e => { //input은 값이 바뀌는 이벤트를 의미
    const fontColor = e.target.value;
    document.getElementById("bicycle").style.color = fontColor;
});
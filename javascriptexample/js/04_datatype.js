// 1. 변수를 중복 정의할 수 있다.
var number = 10;
var number = "자바스크립트" // var는 같은 이름으로 변수 재선언 가능
console.log(number);
console.log("------------------");

// 2-1. 변수가 사용된 후 선언되었을 때
console.log(number1); // 호이스팅 발생: 선언은 위로 끌러올려가지만 값을 할당되지 않음
var number1 = 30;
console.log(number1);
console.log("------------------");

// 2-2. 선언보다 먼저 값을 할당해도 에러 없음(호이스팅 영향)
number2 = 40;
var number2;
console.log(number2);
console.log("------------------");

// 3. for문 초기화식에서 var 변수 사용
console.log(i); // i 아래서 var로 선언되어 호이스팅~
for(var i =0; i <3; i++) {
    console.log("Test i = " + i);
}
i = 0;
console.log("------------------");

// 4. 변수 재사용
var i;
console.log(i);
for(i =0; i <3; i++) {
    console.log("Teat_1 i =" + i);
}
console.log("------------------");

// 5. 조건문
console.log(num)
if(num !== 10) {
    var num = 20;
    console.log("num !== 10");
} else {
    console.log("num === 10");
}
console.log("num = " + num);
console.log("------------------");

// 6. 함수 스코프 vs 암묵적 전역 변수
function test() {
    var number3 = 3;
    number4 = 4; // 암묵적 전역 변수

    if(true) {
        var number5 =5;
        number6 = 6; // 암묵적 전역 변수
    }

    console.log("number5 : " + number5);
}
test();

console.log("number4 : " + number4);

console.log("number6 : " + number6);
console.log("------------------");

// let 선언 & 초기화
let number7 = 100;
console.log(number7);
// 동일명 중복 선언 불가
// 변수 선언 호이스팅 X
console.log("------------------");

// const 상수 선언 & 초기화
 const number8 = 10;
 console.log(number8);

 // 자료형 확인
 function typeTest() {
    const typeBox = document.getElementById("typeBox");
    let temp; // 선언 후 값 초기화 X == undefined
    typeBox.innerHTML = `temp : ${temp}`;

    // string
    const name = "홍길동";
    const gender = "M";

    typeBox.innerHTML += `<br />name : ${name} / ${typeof name}`;
    typeBox.innerHTML += `<br />gender : ${gender} / ${typeof gender}`;

    // number
    const age =20;
    const height = 178.3;
    typeBox.innerHTML += `<br />age : ${age} / ${typeof age}`;
    typeBox.innerHTML += `<br />height : ${height} / ${typeof height}`;

    // boolean
    const isTrue = true;
    typeBox.innerHTML += `<br />isTrue : ${isTrue} / ${typeof isTrue}`;

    // object(배열)
    const array = [10,30,70,50];
    typeBox.innerHTML += `<br />array : ${array} / ${typeof array}`;
    for(let i = 0; i <array.length; i++) {
        typeBox.innerHTML +=`<br />array[${i}] : ${array[i]}`;
    }

    // object(객체)
    const user = {
        id : "javauser",
        pwd : "1234",
        name : "홍길동"
    };

     typeBox.innerHTML += `<br />user : ${user} / ${typeof user}`;
     typeBox.innerHTML += `<br />user.id : ${user.id}`;
     typeBox.innerHTML += `<br />user.pwd : ${user.pwd}`;
     typeBox.innerHTML += `<br />user.name : ${user.name}`;

     //function
    const sumFn = function(n1,n2) {
        return n1 + n2;
    }

     typeBox.innerHTML += `<br />sumFn : ${sumFn} / ${typeof sumFn}`;
     typeBox.innerHTML += `<br />sumFn(10,20) : ${sumFn} / ${typeof sumFn}`;
}

function tempFn(n3, fn) { // fn = function(n1,n2){ return n1 + n2;}
    return n3 + fn(10,20);
}
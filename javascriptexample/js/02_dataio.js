function fnAlert() {
    alert("alert 버튼 클릭됨");
}

function documentWrite(){
    document.write("자바스크립트<br />");
    document.write("<b>안녕하세요</b><br /><h2>반가워요</h2>");
}

function getInnerText() {
    const test1 = document.getElementById("test1");
    console.log(test1.innerText);
}
function setInnerText() {
    document.getElementById("test1").innerText = "innerText로 <br /> 변경된 내용입니다.";
}

// innerHTML로 읽어오기
function getInnerHTML1() {
    const test2 = document.getElementById("test2");
    console.log(test2.innerHTML);
}

// innerHTML로 변경하기
function setInnerHTML1() {
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML</strong>로 변경된 내용<br /> 반갑습니다.";
}
// innerHTML 예제
function print() {
    document.getElementById("title").innerHTML = "멈추지 않는 한 멈추지 않는다. 멈추지 않기 위해 멈추지 않는다.";
    title.className = "box1";
}
// confirm 확인하기
function fnConfirm(){
    const confirmBtn = document.getElementById("confirmBtn");

    if(confirm("버튼 배경색을 오렌지색으로 바꾸시겠습니까?")) {
        confirmBtn.style.backgroundColor = "orange";
    } else {
        confirmBtn.style.backgroundColor = "green";
    }
}

// prompt 확인하기
function fnPrompt1() {
    const name = prompt("당신의 이름은 무엇입니까?","");
    const age = prompt("당신의 나이는 몇 살입니까?","");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2");
    // divEl.innerHTML = "<b>앗, 당신이 바로 " + age + "살 " + name + "님이군요..!</b>";
    if(name !== null && name.trim() !== "" && age !== null && age.trim() !== ""){
    // !== === 자료형과 값이 다 같은지(엄격하게, 완전 일치하는지)
    // == !=(는 좀 덜 빡빡한..)값만 보는 것
    divEl.innerHTML = `<b>앗, 당신이 바로 ${age}살 ${name} 님이군요...!</b>`
    } else {
        alert("이름과 나이를 모두 입력해주세요!");
        divEl.innerHTML = "";
    }
}

function fnPrompt2(){
    const input = prompt("이름을 입력해주세요!","");
    const promoptResult = document.getElementById("area3");
// trim()은 문자 앞뒤로 있는 공백
    if(input !== null && input.trim() !== "") {
    promoptResult.innerHTML = `<b>${input}</b> 님 환영합니다!`
    } else {
        promoptResult.innerHTML = "이름을 입력해주세요."
    }
}

// 선택한 input요소.value 확인하기
function fnInput() {
    // const input1 = document.getElementById("userId");
    // const input2 = document.getElementById("userPwd");

    // const id = input1.value.trim(); //변수 = input1에 입력한 값
    // const pwd = input2.value.trim();

    const id = document.getElementById("userId").value;
                                            // trim() 잘못 입력한 공백 한 칸을 제거하겠다는 의미 
    const pwd = document.getElementById("userPwd").value;

    const result = document.getElementById("result");

    if( id !== "" && pwd !== "") {
     // result.value = id + ", " + pwd;
        result.value = `${id}, ${pwd}`
    } else {
        result.value = "다시 확인해주세요";
    }

    // input1.value = ""; //input요소의 초기화
    // input2.value = "";
    id = ""; //변수의 초기화
    pwd = "";
}

function fnChange() {
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");

    const x = num1.value;
    num1.value = num2.value;
    num2.value = x;
}
// HTML에 onclick 메소드 추가하여 ++
// function namePrint() {
//     const name = document.getElementById("name").value;
//     const namePrint = document.getElementById("namePrint");
//     namePrint.innerHTML = `${name}`;
// }

document.getElementById("btn").onclick = function() {
    document.getElementById("namePrint").innerHTML = document.getElementById("name").value;
}
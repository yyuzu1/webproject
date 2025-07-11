function test1(button) {
    button.style.backgroundColor = "pink";
    button.style.color = "white";
}

function changeBg(color) {
    const result = document.querySelector('#result');
    result.style.backgroundColor = color;
}

// 방법1 : 요소를 변수로 지정 & 미리 만든 함수 사용
// let btn = document.querySelector("#btn1");
// btn.onclick = changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "#f00";
// }

// 방법2: 요소를 따로 변수로 만들지 않고 사용
document.querySelector("#btn1").onclick = changeColor;

function changeColor() {
    document.querySelector("p").style.color = "#0f0";
}

// 방법3: 직접 함수 선언
document.querySelector("#btn1").onclick = function() {
    document.querySelector("p").style.color = "#00f";
};

document.getElementById("test2-1").onclick = function() {
    alert("고전 이벤트 모델로 출력된 대화상자")
};

//이벤트 제거
document.getElementById("test2-2").onclick = function() {
    document.getElementById("test2-1").onclick = null;
    alert("test2-1 이벤트를 제거하였습니다.")
};

document.getElementById("test2-3").onclick = function(e) {
    // 방법1. : 직접 선택
    // document.getElementById("test2-3").style.backgroundColor = "pink";

    // 방법2: 이벤트 객체 e 사용
    // e.target은 클릭된 요소를 가리킴
    // e.target.style.backgroundColor = "skyblue"

    // 방법3: this 사용(이벤트가 발생한 요소를 가리킴)
    this.style.backgroundColor = "yellow"
}


document.getElementById("test3").addEventListener("click",function(){
    this.style.width = (this.clientWidth + 20) + "px";
});

document.getElementById("test3").addEventListener("click", function() {
    this.style.height = (this.clientHeight + 20) + "px";
});

// document.getElementById("changeBtn1").addEventListener("click", (color) => {
//     color = document.getElementById("input1").value;
//     document.getElementById("div1").style.backgroundColor = color;
// })

document.getElementById("input1").addEventListener("change", function(){

    console.log("이벤트 발생");
    const div1 = document.getElementById("div1");

    const bgColor = this.value;
    div1.style.backgroundColor = bgColor;
    this.value = "";
})

const answers = ["꿈을 갖기 위해서", "교도소", "오목", "독수리 오형제"];

const listItems = document.querySelectorAll("#nonsense li");
const answerDiv = document.getElementById("answer");

listItems.forEach((li,index) => {
    li.addEventListener("mouseover", () => {
        answerDiv.className = "";
        answerDiv.innerHTML = answers[index];
    });

    li.addEventListener("mouseout", () => {
        answerDiv.innerHTML = "정답 보여주기";
    });
});
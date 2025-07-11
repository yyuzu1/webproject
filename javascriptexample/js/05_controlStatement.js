function result() {
    const ko = parseInt(document.getElementById("ko").value);
    const en = parseInt(document.getElementById("en").value);
    const math = parseInt(document.getElementById("math").value);

    // 유효성 검사
    if (isNaN(ko) || isNaN(en) || isNaN(math)) {
        alert("모든 과목에 숫자를 입력해주세요.");
        return;
    }

    const sum = ko + en +math;
    document.getElementById("sum").value = sum;

    const avg = parseInt(sum/3);
    document.getElementById("avg").value = avg;

    // let grade = document.getElementById("grade");
    // if(avg >= 90) {
    //     grade.value = "A";                
    // } else if(avg >= 80) {
    //     grade.value = "B";
    // } else if(avg >= 70) {
    //     grade.value = "C";
    // } else if(avg >= 60) {
    //     grade.value = "D";
    // } else {
    //     grade.value = "F";
    // }

    let grade;

    switch (Math.floor(avg / 10)) {
        case 10:
        case 9 :
            grade = "A"; break;
        case 8 :
            grade = "B"; break;
        case 7 :
            grade = "C"; break;
        case 6 :
            grade = "D"; break;
        default:
            grade = "F";
    }

    document.getElementById("grade").value = grade;
}

function keyEnter(event){
    if(event.key == "Enter"){
    result();
    }
}

// 숫자맞추기 게임
const computerNumber = Math.floor((Math.random() * 10)+1);
let nGuessess = 0;
let gameOver = false;

function check() {
    if(gameOver) return;

    let input = document.getElementById("user");
    let number = parseInt(input.value);
    let result = "";

    /* 입력값 유효성 검사 */
    if(isNaN(number) || number < 1 || number > 10) {
        alert("1부터 10 사이의 숫자를 입력해주세요.");
        input.value = "";
        input.focus();
        return;
    }

    nGuessess++;

    if(number === computerNumber) {
        result = "성공입니다! 😇";
        gameOver = true;
    } else if(number < computerNumber) {
        result = "입력한 숫자가 너무 낮습니다.";
    } else {
        result = "입력한 숫자가 너무 높습니다.";
    }

    document.getElementById("hint").value = result;
    document.getElementById("guesses").value = nGuessess;

    input.value = "";
    input.focus();
}

// 반복 출력
function print() {
    const hprint = document.getElementById("hprint");
    const imgprint = document.getElementById("imgprint");

    hprint.innerHTML = "";
    imgprint.innerHTML = "";

    for(let i=1;i < 7; i++) {
        hprint.innerHTML += `<h${i}> Hello JavaScript </h${i}>`;
    }

    for(let i=1; i < 4; i++) {
        imgprint.innerHTML += `<img src="../image/${i}.jpg" />`
    }

    imgprint.Id = "imgprint";
}

// 구구단 출력
function gugudanPrint() {
    let data = "";
    const gugudan = document.getElementById("gugudan");

    for(let i=1; i <= 9;i++){
        data += "<table>";
        data += `<tr><th>${i}단</th><tr>`;
        for(let j=1;j<=9;j++) {
            data += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
        }
        data += "</table>";
    }
    gugudan.innerHTML = data;
}
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

// function check() {
//     const number = document.getElementById("number").value;
    
//     let i = 0;
//     i++;
// }


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
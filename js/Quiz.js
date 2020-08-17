let color = document.getElementById("sub-1")
let answer = document.getElementById("result1")

function checkbtn() {
    let quest = document.getElementById("quest-1").value
    if (quest.toLowerCase() === "d") {
        color.style.backgroundColor = "green";
        answer.innerText = "correct";
        answer.style.color = "#00ff00";
    } else {
        color.style.backgroundColor = "red";
        answer.innerText = "wrong!. correct answer is D";
        answer.style.color = "#ff0000";
    }
}

let color2 = document.getElementById("sub-2")
let answer2 = document.getElementById("result2")

function checkbtn1() {
    let quest2 = document.getElementById("quest-2").value
    if (quest2.toLowerCase() === "a") {
        color2.style.backgroundColor = "green";
        answer2.innerText = "correct";
        answer2.style.color = "#00ff00";
    } else {
        color2.style.backgroundColor = "red";
        answer2.innerText = "wrong!. correct answer is A";
        answer2.style.color = "#ff0000";
    }
}

let color3 = document.getElementById("sub-3")
let answer3 = document.getElementById("result3")

function checkbtn2() {
    let quest3 = document.getElementById("quest-3").value
    if (quest3.toLowerCase() === "b") {
        color3.style.backgroundColor = "green";
        answer3.innerText = "correct";
        answer3.style.color = "#00ff00";
    } else {
        color3.style.backgroundColor = "red";
        answer3.innerText = "wrong!. correct answer is B";
        answer3.style.color = "#ff0000";
    }
}

let color4 = document.getElementById("sub-4")
let answer4 = document.getElementById("result4")

function checkbtn3() {
    let quest4 = document.getElementById("quest-4").value
    if (quest4.toLowerCase() === "c") {
        color4.style.backgroundColor = "green";
        answer4.innerText = "correct";
        answer4.style.color = "#00ff00";
    } else {
        color4.style.backgroundColor = "red";
        answer4.innerText = "wrong!. correct answer is C";
        answer4.style.color = "#ff0000";
    }
}

let color5 = document.getElementById("sub-5")
let answer5 = document.getElementById("result5")

function checkbtn4() {
    let quest5 = document.getElementById("quest-5").value
    if (quest5.toLowerCase() === "a") {
        color5.style.backgroundColor = "green";
        answer5.innerText = "correct";
        answer5.style.color = "#00ff00";
    } else {
        color5.style.backgroundColor = "red";
        answer5.innerText = "wrong!. correct answer is A";
        answer5.style.color = "#ff0000";
    }
}
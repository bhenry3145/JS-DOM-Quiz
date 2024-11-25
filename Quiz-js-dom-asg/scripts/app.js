let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let changeBtn = document.getElementById("changeBtn");
let resetBtn = document.getElementById("resetBtn");
let enterBoxNumber = document.getElementById("enterBoxNumber");
let enterColorChange = document.getElementById("enterColorChange");

let boxChoice = "";
let colorChoice = "";
let colors = ["red", "blue", "purple", "brown", "yellow"];
let boxes = ["1", "2", "3", "4", "5", "6", "7", "8"];

changeBtn.addEventListener('click', function () {
    boxChoice = enterBoxNumber.value
    colorChoice = enterColorChange.value
    if (colors.includes(colorChoice))
    {
        if (boxes.includes(boxChoice))
        {
            if (boxChoice === "1")
                {
                    box1.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "2")
                {
                    box2.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "3")
                {
                    box3.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "4")
                {
                    box4.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "5")
                {
                    box5.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "6")
                {
                    box6.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "7")
                {
                    box7.style.backgroundColor = colorChoice;
                }
            else if (boxChoice === "8")
                {
                    box8.style.backgroundColor = colorChoice;
                }
        }
        else {
            console.log("Please choose a box from 1-8");
        }    
    }
    else {
        console.log("Please enter one of the colors provided");
    }

})

resetBtn.addEventListener('click', function () {
    box1.style.backgroundColor = "";
    box2.style.backgroundColor = "";
    box3.style.backgroundColor = "";
    box4.style.backgroundColor = "";
    box5.style.backgroundColor = "";
    box6.style.backgroundColor = "";
    box7.style.backgroundColor = "";
    box8.style.backgroundColor = "";
})
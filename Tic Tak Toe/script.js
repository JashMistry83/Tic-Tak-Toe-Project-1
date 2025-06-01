
let temp = true
let box1 = document.getElementById(1)
let box2 = document.getElementById(2)
let box3 = document.getElementById(3)
let box4 = document.getElementById(4)
let box5 = document.getElementById(5)
let box6 = document.getElementById(6)
let box7 = document.getElementById(7)
let box8 = document.getElementById(8)
let box9 = document.getElementById(9)
let turn = document.getElementById("h2turn")
let disableboxes = false
let allboxes = document.getElementsByClassName("normal-box")
let Xwin = document.getElementById("Xwin")
let Owin = document.getElementById("Owin")
let Dwin = document.getElementById("draw")
let X = 0
let O = 0
let draw = 0

//function id number handler of input on user click
function inputHandler(pos) {
    let boxId = document.getElementById(pos)

    //this condition is used to make move one by one of O & X by checking their are blank or not if they are blank then it will run otherwise not , After that it will check TEMP's value which is True by default after making a move it's value get changes oppositely like if it's true it will becomes false
    if (boxId.value == "") {
        boxId.value = temp ? "O" : "X";
        temp = !temp
        turn.innerHTML = temp ? "<strong>O</strong>'s turn" : "<strong>X</strong>'s turn";

    }//else improvement remaining


    //FIRST ROW WIN CHECK


    if (box1.value == "O" && box2.value == "O" && box3.value == "O"
        || box4.value == "O" && box5.value == "O" && box6.value == "O"
        || box7.value == "O" && box8.value == "O" && box9.value == "O"
        || box1.value == "O" && box4.value == "O" && box7.value == "O"
        || box2.value == "O" && box5.value == "O" && box8.value == "O"
        || box3.value == "O" && box6.value == "O" && box9.value == "O"
        || box3.value == "O" && box5.value == "O" && box7.value == "O"
        || box1.value == "O" && box5.value == "O" && box9.value == "O") {
        alert("O is win");
        O += 1
        Owin.innerHTML = ("O-score :-" + O)
        disableboxes = true
        if (disableboxes == true) {
            for (let i = 0; i <= allboxes.length; i++) {
                allboxes[i].disabled = true
            }
        }
        // reload()

    } else if (box1.value == "X" && box2.value == "X" && box3.value == "X"
        || box4.value == "X" && box5.value == "X" && box6.value == "X"
        || box7.value == "X" && box8.value == "X" && box9.value == "X"
        || box1.value == "X" && box4.value == "X" && box7.value == "X"
        || box2.value == "X" && box5.value == "X" && box8.value == "X"
        || box3.value == "X" && box6.value == "X" && box9.value == "X"
        || box3.value == "X" && box5.value == "X" && box7.value == "X"
        || box1.value == "X" && box5.value == "X" && box9.value == "X"
    ) {
        alert("X is win");
        X += 1
        Xwin.innerHTML = ("X-score :-" + X)
        disableboxes = true
        if (disableboxes == true) {
            for (let i = 0; i <= allboxes.length; i++) {
                allboxes[i].disabled = true
            }
        }
        // reload()

    }
    else if (box1.value !== "" && box2.value !== "" && box3.value !== ""
        && box4.value !== "" && box5.value !== "" && box6.value !== ""
        && box7.value !== "" && box8.value !== "" && box9.value !== "") {
        alert("Draw");
        draw += 1
        Dwin.innerHTML = ("Drawed :-" + draw)
        disableboxes = true
        if (disableboxes == true) {
            for (let i = 0; i <= allboxes.length; i++) {
                allboxes[i].disabled = true
            }
        }
        // reload();

    }


    console.log(pos)
}

function reload() {
    alert("Reloading game...")
    for (let a = 0; a < allboxes.length; a++) {

        allboxes[a].value = ""
        allboxes[a].disabled = false
    }
}

function refresh() {
    if(confirm("Are you sure?")){

        location.reload(1000)
    }
}



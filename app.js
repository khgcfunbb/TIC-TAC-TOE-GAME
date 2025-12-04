let boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
let msg = document.querySelector("p")
let turn = true
let count = 0;
let winn = document.querySelector("#win");
let lose = document.querySelector("#lose");


let arr = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [8, 5, 2],
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        count++;
        console.log(count)
        if (turn) {
            turn = false
            box.innerText = "O"
            box.style.color = "blue"
            box.style.background="white"
            computer()
        }
        else {
            turn = true
            box.innerText = "X"
            box.style.color = "#0081a7"
            box.style.background="white"
        }
        box.disabled = true

        isWin = checkWin();
        if (count === 9 && !isWin) {
            // msg.style.marginLeft = "530px",
            msg.style.visibility = "visible"
            msg.innerText = "Draw Match"
        }



    })

});

const checkWin = () => {
    for (let i of arr) {
        let a = boxes[i[0]].innerText
        let b = boxes[i[1]].innerText
        let c = boxes[i[2]].innerText

        let d = boxes[i[0]]
        let e = boxes[i[1]]
        let f = boxes[i[2]]

        if (a != "" && b != "" && c != "") {
            if (a === b && b === c) {
                if (a === "O") {
                    msg.innerText = `Congrats YOU Win 🤩`
                    winn.play()
                    d.style.background="green"
                    e.style.background="green"
                    f.style.background="green"
                    
                }
                else {
                    msg.innerText = `You loose 😣`
                    lose.play();
                    d.style.background="red"
                    e.style.background="red"
                    f.style.background="red"
                }

                msg.style.visibility = "visible"

                db();
                return true
            }
        }
    }

    return false
};
let db = () => {
    for (let box of boxes) {
        box.disabled = true
    }
};

let eb = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
    msg.style.visibility = "hidden"
};
const resetGame = () => {
    eb();
    count = 0;
    winn.pause()
    winn.currentTime = 0;
    turn = true
    boxes.forEach( (bb)=>{
         bb.style.background="white"
    } )
};

let computer = () => {

    setTimeout(() => {
        let emptyboxes = [...boxes].filter((b) => {
            return b.innerText === ""

        })
        if (emptyboxes.length === 0) {
            return
        }
        let randbox = emptyboxes[Math.floor(Math.random() * emptyboxes.length)
        ];
        // count++

        randbox.click();

    }, 300);
}
reset.addEventListener("click", resetGame)

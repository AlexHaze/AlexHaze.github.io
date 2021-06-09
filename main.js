
const CHALLENGES = ["Defeat", "Someone AFK", "Someone flaming", "Someone saying \"ez\"", 
                    "Jungle difference", "Support difference", "Lost coinflip invade", "Objective stolen",
                    "Lost my lane", "Not getting an S", "10 deaths or more", "Got solo killed", 
                    "Enemy nashor", "xPeke", "YASUO/YONE", "TEEMO"];
const EXERCISES = ["plank", "lunges", "jumping jacks", "T push-ups", 
                    "squats", "diamond push-ups", "dips", "dumbell rows",
                    "press-ups", "push-ups", "star plank", "bicycle crunches",
                    "burpees", "pike push-ups", "leg raises", "bodyweight squats"];
const REPETITIONS = ["30\'", "15x (each leg)", "30x", "10x", 
                    "30x", "15x", "10x", "15x (each arm)",
                    "20x", "15x", "30\"", "10x (each side)",
                    "10x", "15x", "20x", "20x"];

window.onload = (event) => {
    var table = document.querySelector("#bingo-table");
    var boxes = Array.from(table.getElementsByTagName("td"));
    var boxesToggled = []
    for (var i = 0; i < boxes.length; i++) {
        boxesToggled.push(false);
    }
    var resetButton = document.getElementById("reset-button");

    boxes.forEach((elem, i) => {
        elem.innerHTML = CHALLENGES[i]
        elem.onclick = () => {
            toggleBox(i)
        }
    });

    resetButton.onclick = () => {
        for (var i = 0; i < boxes.length; i++) {
            boxesToggled[i] = true;
            toggleBox(i)
        }
    }

    function toggleBox(i){
        if(boxesToggled[i]){
            boxes[i].style.backgroundColor = ""
            boxes[i].innerHTML = CHALLENGES[i]
            boxesToggled[i] = false
        }
        else{
            boxes[i].style.backgroundColor = "LightCyan"
            boxes[i].innerHTML = "<span class=\"red-text\">" + REPETITIONS[i] + " </span>" + EXERCISES[i]
            boxesToggled[i] = true
        }
    }
}
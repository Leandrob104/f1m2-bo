const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput"); 

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}


let current_index = 0;


let locaties = [
    {//0 = object
        "titel":"0 ingang scheepsvaart museum",
        "image":"/img/1.jpg",
        "directions":{
            "zuid": 1
        }
    },
    {//1 = object
        "titel":"1 kamer 1",
        "image":"/img/55.jpg",
        "directions":{
            "noord": 3,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "titel":" 2 kamer 2",
        "image":"/img/7977979.jpg",
        "directions":{
            "oost": 1,
            "zuid": 3
            
        }
    },
    {
        "titel":"3 kamer 3",
        "image":"/img/33.jpg",
        "directions":{
            "noord": 2
        }
    },
    {
        "titel":"4 kamer 4",
        "image":"/img/4.jpg",
        "directions":{
            "noord": 1
        }
    },
    
    {
        "titel":"5 kamer 5",
        "image":"/img/66.jpg",
        "directions":{
            "west": 6,
            "oost": 7,
            "zuid": 10,
        }
    },
    {
        "titel":"6 kamer 6",
        "image":"/img/77.jpg",
        "directions":{
            "noord": 9,
            "west": 6,
            "zuid": 8
        }
    },
    {
        "titel":" 7 kamer 7",
        "image":"/img/88.jpg",
        "directions":{
            "noord": 5
        }
    },
    {
        "titel":"8 kamer 8",
        "image":"/img/99.jpg",
        "directions":{
            "west": 10,
            "zuid": 7
        }
    },
    {
        "titel":"9 kamer 9",
        "image":"/img/walvis.jpg",
        "directions":{
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "titel":"10 kamer 10",
        "image":"/img/11.jpg",
        "directions":{
            "noord": 6
        }
    },
];

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;
    //knoppen opnieuw berekenen
    updateDirections();
}
function updateDirections(){
    //haal de mogelijke directions op voor de current_index
    let possible = locaties[current_index].directions;
    // zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);
    //zet de keys van de buttons in een aparte variable
    let button_keys = Object.keys(directionButtons);
    console.log(possible_keys)
    //zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }
    //zet nu de mogelijke knoppen(directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}
function getInput(){
    show(myInput.value)
    myInput.value = "";
    myInput.focus();
}
function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
}
show(0)
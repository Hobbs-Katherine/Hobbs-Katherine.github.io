function rollTheDice1() {
    //get the number of rolls from the select tag
    var numRolls = document.getElementById("numDiceRolls").value;
    
    //cast num Rolls to int
    var numRolls = parseInt(numRolls);
    
    var list = "";
    //loop through the selected number of times and calculate the dice roll using the random function from the math library
    for(var i = 0; i < numRolls; i++) {
        list += getDiceRoll(i);
    }
   
    //append the dice rolls inside the unordered list
    document.getElementById("diceRolls").innerHTML = list;
   
}

function rollTheDice2() {
    //get the number of rolls from the select tag
    var numRolls = document.getElementById("numDiceRolls").value;
    
    //cast num Rolls to int
    var numRolls = parseInt(numRolls);
    
    var list = "";
    //loop through the selected number of times and calculate the dice roll using the random function from the math library
    var i = 0;
    while(i < numRolls) {
        list += getDiceRoll(i);
        i++;
    }
   
    //append the dice rolls inside the unordered list
    document.getElementById("diceRolls").innerHTML = list;
   
}

function getDiceRoll(value) {
    return "<li>Roll #" + (value+1) + ": " + getRandomNumber() + "</li>";
}

function getRandomNumber() {
    return (Math.floor(Math.random() * 6) + 1);
}

function getFavoriteThings() {
    var favoriteThings = {fruit:"bananas", color:"green", day:"Tuesday", smell:"rain"};
    
    var list = "";
    var item;
    for(item in favoriteThings) {
        list += "<li>" + item + ": " + favoriteThings[item] + "</li>";
    }
    
    document.getElementById("favoriteThings").innerHTML = list;
}

function beginGame() {
    var doContinue = false;
    var i = 0;
    var again = "Again";
    do {
        if(i == 0) {
            doContinue = confirm("Hello");   
        } else if (i > 0) {
            doContinue = confirm("Hello " + again);
            again += ", and Again";
        }
        i++;
    }
    while (doContinue);
    alert("Good-bye");
    
}

function areTheyEqual() {
    //get the numeric values of the selection
    var addition = document.getElementById("selectA").value;
    var selectA = parseInt(addition.substring(0, 1)) + parseInt(addition.substring(2));
    var selectB = parseInt(document.getElementById("selectB").value);
    
    //compare the numbers to see if they are equal
    if(selectA == selectB) {
        alert("Yes, " + addition + " equals " + selectB);
    } else {
        alert("Sorry, " + addition + " does not equal " + selectB);
    }
}

function canYouGuessMyNumber() {
    //get the numeric values of myNumber and the guess
    var guess = parseInt(document.getElementById("numberGuess").value);
    var myNumber = parseInt(getRandomNumber());
    
    //compare the numbers to see if they are equal
    if(guess === myNumber) {
        alert("You guessed right! My number was " + myNumber);
    } else if (guess === (myNumber + 1)) {
        alert("So close! My number was " + myNumber);
    } else if (guess === (myNumber - 1)) {
        alert("So close! My number was " + myNumber);
    } else {
        alert("Sorry guess again! My number was " + myNumber);
    }
}

function getSuprise() {
    var suprise = "";
    var numberIcons = getRandomNumber();
    for(var i = 0; i < numberIcons; i++) {
        var number = getRandomNumber();
        switch (number) {
            case 1:
                suprise += "<i class='fa fa-cloud text-blue'></i>";
                break;
            case 2:
                suprise += "<i class='fa fa-heart text-red'></i>";
                break;
            case 3:
            case 4:
                if(number == 3)
                    suprise += "<i class='fa fa-car text-orange'></i>";
                else 
                    suprise += "<i class='fa fa-car text-purple'></i>";
                break;
            case 5:
                suprise += "<i class='fa fa-envira text-green'></i>";
                break;
            default:
                suprise += "<i class='fa fa-cloud'></i>";
        }
    }
    document.getElementById("suprise").innerHTML = suprise;
}

function getNameStats() {
    //this will hold the data we display
    var stats = "";
    //get the name from the input field
    var name = document.getElementById("username").value;
    //if its empty alert them
    if(name.length == 0) {
        alert("Oops, it looks like you forgot to write your name!");
        return;
    }
    //store each letter in their name into an array;
    var letters = [];
    for(var i = 0; i < name.length; i++) {
        var letter = name[i].toLowerCase();
        if(letter === " ") {
            continue;
        }
        letters[letters.length] = letter
    }
    stats += "<li>There are " + letters.length + " letters in your name.</li>";
    stats += "<li>The letters in your name alphabetically are: " + letters.sort() + "</li>";
    stats += "<li>The letters in your name alphabetically reversed are: " + letters.reverse() + "</li>";
    stats += "<li>The letters in your name in randomized are: " + letters.sort(function(a, b){return 0.5 - Math.random()}) + "</li>";
    var commonLetters = 0;
    var commonLettersList = ["e", "t", "a", "o", "i", "n"];
    while(commonLettersList.length > 0) {
        var found = false;
        for(var i = 0; i < letters.length; i++) {
            if(letters[i] == commonLettersList[commonLettersList.length - 1]) {
                commonLetters++;
                commonLettersList.pop();
                found = true;
            } 
        }
        if(!found) {
            commonLettersList.pop();
        }
    }
    stats += "<li>There are " + commonLetters + " letters in your name that are found in the 6 most common letters in the english language.</li>";
    document.getElementById("nameFacts").innerHTML = stats;
}

function beginParty() {
    var theme = prompt("Lets plan a party!!! What is the theme of your party going to be?", "Harry Potter");

    var party = {};
    if (theme == null || theme == "") {
        alert("Lets plan a party someother time!");
        return;
    } else {
        party.theme = theme;
    }
    
    var name = prompt("What is the name of your party?", "Gryfindor vs. Slytherin");
    if (name == null || name == "") {
        alert("Lets plan a party someother time!");
        return;
    } else {
        party.name = name;
    }
    
    var date = prompt("What day will you host your party?", "July 31, 2018");
    if (date == null || date == "") {
        alert("Lets plan a party someother time!");
        return;
    } else {
        party.date = date;
    }
    
    var time = prompt("What time will you host your party?", "7:30 PM");
    if (time == null || time == "") {
        alert("Lets plan a party someother time!");
        return;
    } else {
        party.time = time;
    }
    
    var rsvp = confirm("Do you want your guests to RSVP?", "7:30 PM");
    if (rsvp == null) {
        alert("Lets plan a party someother time!");
        return;
    } else if (rsvp) {
        party.RSVP = "Yes";      
    } else {
        party.RSVP = "No";
    }
    var partyDetails = "";
    var detail;
    for(detail in party) {
        partyDetails += "<li>" + detail.substring(0, 1).toUpperCase() + detail.substring(1) + ": " + party[detail] + "</li>";
    }
    
    document.getElementById("partyInfo").innerHTML = partyDetails;
}
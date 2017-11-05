function makeFirstRequest() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                alert(err.message + " in " + xmlhttp.responseText);
                return;
            }
            //when the xml/json has returned send it to update page
            updatePage(data);
        }
    };
    //https://swapi.co/documentation#intro 
    xmlhttp.open("GET", "https://swapi.co/api/", true);
    xmlhttp.send();
}

function updatePage(obj) {
    
    var info = "";
    for (data in obj) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + obj[data] + "\", \"" + data + "\")' >" + data + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function makeRequest(url, dataType) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                alert(err.message + " in " + xmlhttp.responseText);
                return;
            }
            //when the xml/json has returned send it to update page
            displayData(data, dataType);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function displayData(obj, dataType) {
   switch(dataType) {
        case "films":
          displayFilms(obj); break;
        case "film":
          displayFilm(obj); break;
        case "people":
           displayPeople(obj); break;
        case "person":
           displayPerson(obj); break;
        case "planets":
          displayPlanets(obj); break;
        case "planet":
          displayPlanet(obj); break;
        case "species":
           displaySpecies(obj); break;
        case "specie":
           displaySpecie(obj); break;
        case "vehicles":
           displayVehicles(obj); break;
        case "vehicle":
           displayVehicle(obj); break;
        case "starships":
           displayStarships(obj); break;
        case "starship":
           displayStarship(obj); break;
       default:
           alert("An error occured, please try again.");
    }
}

function displayFilms(obj) {
     var info = "";
    results = obj["results"];
    for (data in results) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + results[data].url + "\", \"film\")' >" + results[data].title + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayFilm(obj) {
    var info = "";
    info += "<p><b>Title:</b> " + obj.title + "</p>";
    info += "<p><b>Director:</b> " + obj.director + "</p>";
    info += "<p><b>Release Date:</b> " + obj.release_date + "</p>";
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayPeople(obj) {
     var info = "";
    results = obj["results"];
    for (data in results) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + results[data].url + "\", \"person\")' >" + results[data].name + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayPerson(obj) {
    var info = "";
    info += "<p><b>Name:</b> " + obj.name + "</p>";
    info += "<p><b>Height:</b> " + obj.height + "</p>";
    info += "<p><b>Hair Color:</b> " + obj.hair_color + "</p>";
    info += "<p><b>Eye Color:</b> " + obj.eye_color + "</p>";
    info += "<p><b>Birth Year:</b> " + obj.birth_year + "</p>";
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayPlanets(obj) {
     var info = "";
    results = obj["results"];
    for (data in results) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + results[data].url + "\", \"planet\")' >" + results[data].name + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayPlanet(obj) {
    var info = "";
    info += "<p><b>Name:</b> " + obj.name + "</p>";
    info += "<p><b>Diameter:</b> " + obj.diameter + "</p>";
    info += "<p><b>Climate:</b> " + obj.climate + "</p>";
    info += "<p><b>Terrain:</b> " + obj.terrain + "</p>";
    info += "<p><b>Population:</b> " + obj.population + "</p>";
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displaySpecies(obj) {
     var info = "";
    results = obj["results"];
    for (data in results) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + results[data].url + "\", \"specie\")' >" + results[data].name + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displaySpecie(obj) {
    var info = "";
    info += "<p><b>Name:</b> " + obj.name + "</p>";
    info += "<p><b>Classification:</b> " + obj.classification + "</p>";
    info += "<p><b>Avg. Height:</b> " + obj.average_height + "</p>";
    info += "<p><b>Skin Colors:</b> " + obj.skin_colors + "</p>";
    info += "<p><b>Avg. Lifespan:</b> " + obj.average_lifespan + "</p>";
    info += "<p><b>Language:</b> " + obj.language + "</p>";
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayVehicles(obj) {
     var info = "";
    results = obj["results"];
    for (data in results) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + results[data].url + "\", \"vehicle\")' >" + results[data].name + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayVehicle(obj) {
    var info = "";
    info += "<p><b>Name:</b> " + obj.name + "</p>";
    info += "<p><b>Model:</b> " + obj.model + "</p>";
    info += "<p><b>Cost (Credits):</b> " + obj.cost_in_credits + "</p>";
    info += "<p><b>Crew:</b> " + obj.crew + "</p>";
    info += "<p><b>Passengers:</b> " + obj.passengers + "</p>";
    info += "<p><b>Vehicle Class:</b> " + obj.vehicle_class + "</p>";
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayStarships(obj) {
     var info = "";
    results = obj["results"];
    for (data in results) {
        info += "<button class='btn btn-blue' onclick='makeRequest(\"" + results[data].url + "\", \"starship\")' >" + results[data].name + "</button><br><br>";
    }
    
    document.querySelector("#parsedJSON").innerHTML = info;
}

function displayStarship(obj) {
    var info = "";
    info += "<p><b>Name:</b> " + obj.name + "</p>";
    info += "<p><b>Model:</b> " + obj.model + "</p>";
    info += "<p><b>Cost (Credits):</b> " + obj.cost_in_credits + "</p>";
    info += "<p><b>Crew:</b> " + obj.crew + "</p>";
    info += "<p><b>Passengers:</b> " + obj.passengers + "</p>";
    info += "<p><b>Cargo Capacity:</b> " + obj.cargo_capacity + "</p>";
    info += "<p><b>Hyperdrive Rating:</b> " + obj.hyperdrive_rating + "</p>";
    info += "<p><b>Starship Class:</b> " + obj.starship_class + "</p>";
    info += "<p><b>Films:</b></p>";
    document.querySelector("#parsedJSON").innerHTML = info;
}
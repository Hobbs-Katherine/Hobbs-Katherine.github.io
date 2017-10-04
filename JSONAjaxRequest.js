function makeRequest() {
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
 
    xmlhttp.open("GET", "JSONAjaxRequest.json", true);
    xmlhttp.send();
}

function updatePage(obj) {
    //the following JSON recieved is from https://en.wikipedia.org/wiki/JSON and was saved to a json file
    var info = "";
    info += "<b>Name: </b>" + obj.firstName + " " + obj.lastName + "<br>";
    info += "<b>Age: </b>" + obj.age + " years old <br>"; 
    info += "<b>Address: </b> <br><div class='m-l-5'>" + obj.address.streetAddress + "<br>" + obj.address.city + ", " + obj.address.state + " " + obj.address.postalCode + "</div>";
    info += "<b>Phone Numbers:</b> <br><div class='m-l-5'>";
    var phoneNumbers = obj.phoneNumbers;
    for(var i = 0; i < phoneNumbers.length; i++) {
        info += " <b>Number: </b>" + phoneNumbers[i].number + " (" + phoneNumbers[i].type + ")<br>";
    }
    info += "</div>"; 
  
    document.querySelector("#parsedJSON").innerHTML = info;
}

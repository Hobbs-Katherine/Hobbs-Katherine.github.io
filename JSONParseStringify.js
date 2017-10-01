function parseJSON() {
    //the following JSON is from https://en.wikipedia.org/wiki/JSON
    var json = '{"firstName": "John","lastName": "Smith","isAlive": true,"age": 25,"address": {"streetAddress": "21 2nd Street","city": "New York","state": "NY","postalCode": "10021-3100"},"phoneNumbers": [{"type": "home","number": "212 555-1234"},{"type": "office","number": "646 555-4567"},{"type": "mobile","number": "123 456-7890"}],"spouse": null}';
    var obj = JSON.parse(json);
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

function stringifyJSON() {
    var languages = {"spanish": {"numbers" : ["uno", "dos","tres"], "colors" : {"blue:" : "azul", "green":"verde"} }, "french": {"numbers" : [{"one": "un", "two" : "deux", "three": "trois"}], "colors" : {"blue:" : "bleu", "green":"vert"} }};
    var myJSON = JSON.stringify(languages);
    document.querySelector("#stringifiedJSON").innerHTML = myJSON;
}
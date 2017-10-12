function storageSupport() {
    if (typeof(Storage) === "undefined") {
       alert("We are sorry it looks like your browser does not support data storage, you may try using another browser such as Chrome");
    } else {
        if(localStorage.name) {
            alert("Welcome back, " + localStorage.name); 
            document.getElementById("removeName").style.display = 'inline';
            document.getElementById("addName").style.display = 'none';
        } else {
            alert("Welcome!");
            document.getElementById("removeName").style.display = 'none';
            document.getElementById("addName").style.display = 'inline';
        }
    }
}

function addName() {
    alert("name: " + localStorage.name);
    if(localStorage.name) {
        alert("Welcome back, " + localStorage.name);    
    } else {
        var name = prompt("This looks like your first time here lets make this page personal for you! \n What is your name?");
        localStorage.setItem("name", name);
    }
    document.getElementById("removeName").style.display = 'inline';
    document.getElementById("addName").style.display = 'none';
}

function removeName() {
    localStorage.removeItem('name');
    document.getElementById("removeName").style.display = 'none';
    document.getElementById("addName").style.display = 'inline';
}

function arrayStorage() {
    var myArray = [1, 2, 3, 4, 5];
    if(localStorage.myArray) {
       document.getElementById("myArray").innerHTML = JSON.parse(localStorage.getItem("myArray"));
    }else {
        localStorage.setItem("myArray", JSON.stringify(myArray));
        alert("Array was stored successfully");
        document.getElementById("myArray").innerHTML = JSON.parse(localStorage.getItem("myArray"));
    }
}

function associativeArrayStorage() {
    var data = "";
    var myAssociativeArray = {"fruit":"banana", "number": 7, "flower": "rose"};
    if(localStorage.myAssociativeArray) {
        var list = JSON.parse(localStorage.getItem("myAssociativeArray"));
        for(item in list) {
           data += "<li>" + item + ": " + list[item] + "</li>";
        }
    } else {
        localStorage.setItem("myAssociativeArray", JSON.stringify(myAssociativeArray));
         var list = JSON.parse(localStorage.getItem("myAssociativeArray"));
        for(item in list) {
            data += "<li>" + item  + ": " + list[item] + "</li>";
        }
    }
     document.getElementById("myAssociativeArray").innerHTML = data;
}

function objectStorage() {
    var data = "";
    var rose = {sName:"Rosa", classification:"Rosoideae", rank:"Genus", fact: "The world's largest rosebush is a white Lady Banksia located in Tombstone, Arizona. (flowerweb.com)"};
    if(localStorage.myObject) {
        var myRose = JSON.parse(localStorage.getItem("myObject"));
        data = "The scientific name of a rose is " + myRose.sName + ". " + myRose.classification + " is the rose classification. The rank of a rose is " + myRose.rank + ". " + myRose.fact;
    } else {
        localStorage.setItem("myObject", JSON.stringify(rose));
        var myRose = JSON.parse(localStorage.getItem("myObject"));
        data = "The scientific name of a rose is " + myRose.sName + ". " + myRose.classification + " is the rose classification. The rank of a rose is " + myRose.rank + ". " + myRose.fact;
    }
    document.getElementById("myObject").innerHTML = data;
}
function clearStorage() {
    localStorage.clear();
    document.getElementById("removeName").style.display = 'none';
    document.getElementById("addName").style.display = 'inline';
    document.getElementById("myArray").innerHTML = "";
    document.getElementById("myAssociativeArray").innerHTML = "";
    document.getElementById("myObject").innerHTML = "";
    alert("Storage has been cleared");
}
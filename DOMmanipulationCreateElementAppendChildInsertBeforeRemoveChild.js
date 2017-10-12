function createIconElement() {
    var icon = document.createElement("I");
    icon.classList.add("fa",getRandomShape(),getRandomColor());
    document.getElementById("suprise").appendChild(icon);
    showHideToggle(); //hide some features if there are no icons
}

function showHideToggle() {
    if(document.getElementById("suprise").hasChildNodes()) {
        document.getElementById("remove").style.display = "block";
    } else {
        document.getElementById("remove").style.display = "none";
    }
}

function getRandomShape() {
    var number = getRandomNumber(4);
        switch (number) {
            case 1:
                return "fa-cloud";
            case 2:
                return "fa-heart";
            case 3:
                return "fa-car";
            default:
                return "fa-envira";
        }
}

function getRandomColor() {
     var number = getRandomNumber(7);
        switch (number) {
            case 1:
                return "text-red";
            case 2:
                return "text-orange";
            case 3:
                return "text-yellow";
            case 4:
                return "text-green";
            case 5:
                return "text-blue";
            case 6:
                return "text-purple";
            default:
                return "text-black";
        }
}

function getRandomNumber(options) {
    return (Math.floor(Math.random() * options) + 1);
}

function removeIconElements() {
    var color = document.getElementById("removeColors").value;
    var classColor = getColorClass(color);
    var icons = document.getElementById("suprise").childNodes;
    var isRemoved = false;
    var iconsToRemove = [];
    for (var i = 0; i < icons.length; i++) {
        if(icons[i].classList.contains(classColor)) {
            isRemoved = true;
            iconsToRemove[iconsToRemove.length] = icons[i];
        }
    }
    for(var i = 0; i < iconsToRemove.length; i++) {
        document.getElementById("suprise").removeChild(iconsToRemove[i]);
    }
    if(isRemoved) {
        alert(color + " icons removed");
    } else {
        alert("No " + color + " icons found");
    }
    showHideToggle();
}

function getColorClass(color) {
    switch (color) {
            case "Red":
                return "text-red";
            case "Orange":
                return "text-orange";
            case "Yellow":
                return "text-yellow";
            case "Green":
                return "text-green";
            case "Blue":
                return "text-blue";
            case "Purple":
                return "text-purple";
            default:
                return "text-black";
        }
}

function addIconElements() {
    var color = document.getElementById("addIcons").value;
    var classColor = getColorClass(color);
    var icons = document.getElementById("suprise").childNodes;
     var iconsAdd = [];
    var canAdd = false;
    for (var i = 0; i < icons.length; i++) {
        if(icons[i].classList.contains(classColor)) {
            canAdd = true;
            iconsAdd[iconsAdd.length] = icons[i];
        }
    }
    for(var i = 0; i < iconsAdd.length; i++) {
        var icon = document.createElement("I");
        icon.classList.add("fa",getRandomShape(),getRandomColor());
        document.getElementById("suprise").insertBefore(icon, iconsAdd[i]);
    }
    if(!canAdd) {
        alert("No " + color + " icons found");
    }
}
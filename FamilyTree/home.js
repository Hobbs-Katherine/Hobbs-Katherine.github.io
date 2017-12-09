function onloadActivities() {
    addImages();
    showChristmasMessage();
}

function Person(name, image, ancestors) {
    this.name = name;
    this.image = image;
    this.ancestors = ancestors; //array for highlighting ancestors
};

function LivingPerson(name, image, ancestors, video) {
    Person.call(this, name, image, ancestors);
    this.video = video;
};

function DeceasedPerson(name, image, birthdate, birthplace, deathdate, deathplace, ancestors) {
   Person.call(this, name, image, ancestors);
    this.birthdate = birthdate;
    this.birthplace = birthplace;
    this.deathdate = deathdate;
    this.deathplace = deathplace;
};

function getPeople() {
    var siblingAncestors =  [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
   
    var personList = [];
    
    //gen-0
    personList["indv-1"] = new LivingPerson("Kevin", "images/1.jpg", siblingAncestors, "videos/kevin.mp4");
    personList["indv-2"] = new LivingPerson("Kimmi", "images/2.jpg", siblingAncestors, "videos/kimmi.mp4");
    personList["indv-3"] = new LivingPerson("Stephanie", "images/3.jpg", siblingAncestors, "videos/stephanie.mp4");
    personList["indv-4"] = new LivingPerson("Katherine", "images/4.jpg", siblingAncestors, "videos/katherine.mp4");
    personList["indv-5"] = new LivingPerson("Julianne", "images/5.jpg", siblingAncestors, "videos/julianne.mp4");
    personList["indv-6"] = new LivingPerson("Jessica", "images/6.jpg", siblingAncestors, "videos/jessica.mp4");
    //gen-1
    personList["indv-7"] = new LivingPerson("Wayne Hunter", "images/7.jpg", [9, 10, 13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 27, 28], "videos/wayne.mp4");
    personList["indv-8"] = new LivingPerson("Rebecca Ricks", "images/8.jpg", [11, 12, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35, 36], "videos/becky.mp4");
    
    //gen-2
    personList["indv-9"] = new LivingPerson("Lavell Hunter", "images/9.jpg", [13, 14, 21, 22, 23, 24], "videos/lavell.mp4");
    personList["indv-10"] = new LivingPerson("Kathleen Mackley", "images/10.jpg", [15, 16, 25, 26, 27, 28], "videos/kathy.mp4");
    personList["indv-11"] = new LivingPerson("Bert Ricks", "images/11.jpg", [17, 18, 29, 30, 31,32], "videos/bert.mp4");
    personList["indv-12"] = new LivingPerson("Dorothy Christiansen", "images/12.jpg", [19, 20, 33, 34, 35, 36], "videos/dorothy.mp4");
    
    //gen-3
    personList["indv-13"] = new DeceasedPerson("Mac Kay Hunter", "images/13.jpg", "July 6, 1906", "Mount Glen, Union, Oregon, United States", "April 11, 1997", "Boise, Ada, Idaho, United States", [21, 22]);
    personList["indv-14"] = new DeceasedPerson("Edith Roesberry", "images/14.jpg", "October 24, 1912", "Miami Mariposa, California, United States", "May 29, 1999", "Kuna, Ada, Idaho, United States", [23, 24]);
    personList["indv-15"] = new DeceasedPerson("Albert C. Mackley", "images/15.jpg", "May 9, 1898", "Spanish Fork, Utah, Utah, United States", "August 29, 1992", "Saint George, Washington, Utah, United States", [25, 26]);
    personList["indv-16"] = new DeceasedPerson("Pearl Dalby", "images/16.jpg", " December 23, 1903", "Omaha, Douglas, Nebraska, United States", "January 20, 1968", "Saint George, Washington, Utah, United States", [27, 28]);
    personList["indv-17"] = new DeceasedPerson("Earl Ricks", "images/17.jpg", " November 21, 1895", "Salem, Fremont, Idaho, United States", "September 15, 1964", "Teton, Madison, Idaho", [29, 30]);
    personList["indv-18"] = new DeceasedPerson("Theora Valentine", "images/18.jpg", "December 5, 1899", "Salem, Fremont, Idaho, United States", "February 27, 1985", "Idaho Falls, Bonneville, Idaho, United States", [31, 32]);
    personList["indv-19"] = new DeceasedPerson("James Christiansen", "images/19.jpg", "September 12, 1908", "Hyrum Cache, Utah, United States", "July 12, 1961", "Idaho Falls, Bonneville, Idaho, United States", [33, 34]);
    personList["indv-20"] = new DeceasedPerson("Rosetta Williams", "images/20.jpg", "August 1, 1920", "Lava Hot Springs, Bannock, Idaho, United States", "June 4, 2005", "Rexburg, Madison, Idaho, United States", [35, 36]);
   
    //gen-4
    personList["indv-21"] = new DeceasedPerson("John Hunter", "images/21.jpg", "March 26, 1869", "Grantsville, Toole, Utah, United States", "June 15, 1959", "Emmett, Gem, Idaho, United States", []);
    personList["indv-22"] = new DeceasedPerson("Charlotte Hale", "images/22.jpg", "December 5, 1872", "Grantsville, Toole, Utah, United States", "April 14, 1943", "Emmett, Gem, Idaho, United States", []);
    
    personList["indv-23"] = new DeceasedPerson("Seth Roesberry", "images/23.jpg", "July  23, 1883", "Pima, Grahm, Arizona, United States", "January 2, 1949", "Provo, Utah, Utah, United States", []);
    personList["indv-24"] = new DeceasedPerson("Mary Rogers", "images/24.jpg", "May 15, 1885", "Luna Valley, Socorro, New Mexico, United States", "February 15, 1971", "Saint George, Washington, Utah, United States", []);
    
    personList["indv-25"] = new DeceasedPerson("Albert J. Mackley", "images/25.jpg", "August 25, 1873", "Norwich, Norfolk, England", "August 31, 1967", "St. George, Washington, Utah, United States", []);
    personList["indv-26"] = new DeceasedPerson("Catherine Braithwaite", "images/26.jpg", "May 25, 1879", "Manti, Sanpete, Utah, United States", "April 30, 1949", "Mapleton, Utah, Utah, United States", []);
    
    personList["indv-27"] = new DeceasedPerson("William Dalby", "images/27.jpg", "September 17, 1872", "Kansas City, Wyandotte, Kansas, United States", "April 26, 1924", "Gooding, Gooding, Idaho, United States", []);
    personList["indv-28"] = new DeceasedPerson("Catherine Bronson", "images/28.jpg", "October 26, 1876", "Luray, Russell, Kansas, United States", "December 18, 1908", "Topeka, Shawnee, Kansas, United States", []);
    
     personList["indv-29"] = new DeceasedPerson("John Ricks", "images/29.jpg", "May 10, 1868", "Logan, Cache, Utah, United States", "May 4, 1920", "Teton, Idaho, United States", []);
    personList["indv-30"] = new DeceasedPerson("Julianna Hansen", "images/30.jpg", "June 12, 1871", "Trelose, Skelby, Soro, Denmark", "January 12, 1950", "Rexburg, Madison, Idaho, United States", []);
    
    personList["indv-31"] = new DeceasedPerson("Charles Valentine", "images/31.jpg", "March 3, 1873", "Calls Fort, Box Elder, Utah, United States", "April 16, 1933", "Salem, Fremont, Idaho, United States", []);
    personList["indv-32"] = new DeceasedPerson("Minerva Dille", "images/32.jpg", "September 11, 1872", "Hyrum, Cache, Utah, United States", "December 26, 1913", "Rexburg, Madison, Idaho, United States", []);
    
    personList["indv-33"] = new DeceasedPerson("Joseph Christiansen", "images/33.jpg", "November 11, 1882", "Hyrum, Cache, Utah, United States", "November 6, 1918", "Menan, Jefferson, Idaho", []);
    personList["indv-34"] = new DeceasedPerson("Sarah Baron", "images/34.jpg", "October 31, 1884", "Brigham City, Box, Elder, Utah, United States", "March 11, 1962", "Soda Springs, Caribou, Idaho, United States", []);
    
    personList["indv-35"] = new DeceasedPerson("Edward Williams", "images/35.jpg", "August 13, 1876", "Council Bluffs, Pottawattamie, Iowa, United States", "December 22, 1962", "Downey, Bannock, Idaho, United States", []);
    personList["indv-36"] = new DeceasedPerson("Hazel Reese", "images/36.jpg", "May 1, 1895", "Dempsey, Bannock, Idaho, United States", "July 17, 1964", "Pocatello, Bannock, Idaho, United States", []);
    return personList;
}


function select(personId) {
    var personList = getPeople();
    var personAncestors = personList["indv-" + personId].ancestors;
    document.getElementById("indv-" + personId).classList.add("individual-hover");
    if(personId >= 13) {
        document.getElementById("indv-" + personId).style.borderWidth = "3px";
    }
    for(var i = 0; i < personAncestors.length; i++) {
        var ancestorId = personAncestors[i];
        document.getElementById("indv-" + ancestorId).classList.add("individual-hover");
    }
}

function deselect(personId) {
    var personList = getPeople();
    var personAncestors = personList["indv-" + personId].ancestors;
     document.getElementById("indv-" + personId).classList.remove("individual-hover");
    if(personId >= 13) {
        document.getElementById("indv-" + personId).style.borderWidth = "2px";
    }
    for(var i = 0; i < personAncestors.length; i++) {
        var ancestorId = personAncestors[i];
        document.getElementById("indv-" + ancestorId).classList.remove("individual-hover");
    }
}

function addImages() {
    var person;
    var personList = getPeople();
    for(person in personList) {
        var img = document.createElement("IMG");
        img.setAttribute("src", personList[person].image);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "100%");
        img.setAttribute("class", "card");
        document.querySelector("#" + person).appendChild(img);
    }
}

function displayModal(personId) {
    document.getElementById('id01').style.display='block';
    var personList = getPeople();
    var person = personList["indv-" + personId];
    
    document.getElementById("name-pl").innerHTML = person.name;
    document.getElementById("b-date-pl").innerHTML = person.birthdate;
    document.getElementById("b-place-pl").innerHTML = person.birthplace;
    document.getElementById("d-date-pl").innerHTML = person.deathdate;
    document.getElementById("d-place-pl").innerHTML = person.deathplace;
}

function displayLivingModal(personId) {
    document.getElementById('id02').style.display='block';
    var personList = getPeople();
    var person = personList["indv-" + personId];
    
    document.getElementById("video-pl").setAttribute("src", person.video);
    document.getElementById("video").load();
}

function loadChart() {
    document.getElementById("tree").style.display= "none";
    document.getElementById("chart").style.display= "block";
    
    google.charts.load('current', {'packages':['timeline']});
    google.charts.setOnLoadCallback(drawChart);
    
}

function drawChart() {
    var container = document.getElementById('chart');
    var chart = new     google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    
    dataTable.addColumn({ type: 'string', id: 'Ancestor' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    
    var personList = getPeople();
    var count = 1;
    for (p in personList) {
        var id = p.substr(5);
        if (id > 12) {
            var person = personList[p];
            var bday = Date.parse(person.birthdate);
            var dday = Date.parse(person.deathdate);
            dataTable.addRow(
                [ count + "" /*add quotes to cast to string*/, person.name, new Date(bday), new  Date(dday) ]);
            count++;
        }
    }
    
    var options = {
        timeline: { showRowLabels: false },
        height: 1500
    };
    
    chart.draw(dataTable, options);
}

function unloadChart() {
    document.getElementById("tree").style.display= "block";
    document.getElementById("chart").style.display= "none";
}

function drawCanvas() {
    document.getElementById('id03').style.display='block';
    
    drawTree();
    drawLeaf();
}

function drawTree() {
    //I made some adaptations to an example found at https://www.spjeff.com/2013/12/05/christmas-tree-html5-js-and-css3/
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
 
    //stump
    ctx.fillStyle = "brown";
    ctx.fillRect(70, 120, 20, 50);
    
    //tree base
    ctx.fillStyle = "green";
    ctx.fillRect(60, 50, 40, 90);
    ctx.fillRect(40, 110, 80, 40);
    
    //leaves
    a = 60;
    b = 10;
    for (var i = 0; i < 4; i++) {
        drawLeaf(-20 + a - (i * 10), b + (i * 30), ctx, "left");
        drawLeaf(20 + a + (i * 10), b + (i * 30), ctx, "right");
    }
 
    //star
    drawStar(ctx, 80, 20, 20, 5, 0.5);
 
    //ornaments 
    drawCircle(ctx, -5, 35, "red");
    drawCircle(ctx, 20, 75, "red");
    drawCircle(ctx, -30, 100, "red");
    drawHalfCircle1(ctx);
    drawHalfCircle2(ctx);
}

function drawLeaf(x, y, ctx, style) {
    // Right Filled triangle
    ctx.beginPath();
    ctx.fillStyle = "green";
    if (style == "right") {
        ctx.moveTo(x, y);
        ctx.lineTo(x + 40, y + 40);
        ctx.lineTo(x, y + 40);
    } else {
        ctx.moveTo(x + 40, y);
        ctx.lineTo(x, y + 40);
        ctx.lineTo(x + 40, y + 40);
    }
    ctx.fill();
}
 
function drawStar(ctx, x, y, r, p, m) {
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - r);
    for (var i = 0; i < p; i++) {
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - (r * m));
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.restore();
}

function drawCircle(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawHalfCircle1(ctx) {
    ctx.strokeStyle = "gold";
    ctx.beginPath();
    ctx.arc(-17,25,37,0,0.60*Math.PI);
    ctx.stroke();
}

function drawHalfCircle2(ctx) {
    ctx.strokeStyle = "gold";
    ctx.beginPath();
    ctx.arc(6,36,62,0.3*Math.PI,0.8*Math.PI);
    ctx.stroke();
}

function showChristmasMessage() {
 // localStorage.clear(); //for debugging
  if (typeof(Storage) !== "undefined") {
       if(localStorage.getItem("christmasMessage") === null) {
           drawCanvas();
       }
   } 
}

function setChristmasMessage() {
    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("christmasMessage") != false) {
            localStorage.setItem("christmasMessage", false);
        }
    }
}
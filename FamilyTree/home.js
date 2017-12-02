function Person(name, image, ancestors) {
    this.name = name;
    this.image = image;
    this.ancestors = ancestors; //array for highlighting ancestors
};

function LivingPerson(name, image, ancestors) {
    Person.call(this, name, image, ancestors);
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
    personList["indv-1"] = new LivingPerson("Kevin", "images/1.jpg", siblingAncestors);
    personList["indv-2"] = new LivingPerson("Kimmi", "images/2.jpg", siblingAncestors);
    personList["indv-3"] = new LivingPerson("Stephanie", "images/3.jpg", siblingAncestors);
    personList["indv-4"] = new LivingPerson("Katherine", "images/4.jpg", siblingAncestors);
    personList["indv-5"] = new LivingPerson("Julianne", "images/5.jpg", siblingAncestors);
    personList["indv-6"] = new LivingPerson("Jessica", "images/6.jpg", siblingAncestors);
    //gen-1
    personList["indv-7"] = new LivingPerson("Wayne Hunter", "images/7.jpg", [9, 10, 13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 27, 28]);
    personList["indv-8"] = new LivingPerson("Rebecca Ricks", "images/8.jpg", [11, 12, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35, 36]);
    
    //gen-2
    personList["indv-9"] = new LivingPerson("Lavell Hunter", "images/9.jpg", [13, 14, 21, 22, 23, 24]);
    personList["indv-10"] = new LivingPerson("Kathleen Mackley", "images/10.jpg", [15, 16, 25, 26, 27, 28]);
    personList["indv-11"] = new LivingPerson("Bert Ricks", "images/11.jpg", [17, 18, 29, 30, 31,32]);
    personList["indv-12"] = new LivingPerson("Dorothy Christiansen", "images/12.jpg", [19, 20, 33, 34, 35, 36]);
    
    //gen-3
    personList["indv-13"] = new DeceasedPerson("Mac Kay Hunter", "images/13.jpg", "6 July 1906", "Mount Glen, Union, Oregon, United States", "11 April 1997", "Boise, Ada, Idaho, United States", [21, 22]);
    personList["indv-14"] = new DeceasedPerson("Edith Roesberry", "images/14.jpg", "24 October 1912", "Miami Mariposa, California, United States", "29 May 1999", "Kuna, Ada, Idaho, United States", [23, 24]);
    personList["indv-15"] = new DeceasedPerson("Albert Mackley", "images/15.jpg", "9 May 1898", "Spanish Fork, Utah, Utah, United States", "29 August 1992", "Saint George, Washington, Utah, United States", [25, 26]);
    personList["indv-16"] = new DeceasedPerson("Pearl Dalby", "images/16.jpg", "23 December 1903", "Omaha, Douglas, Nebraska, United States", "20 January 1968", "Saint George, Washington, Utah, United States", [27, 28]);
    personList["indv-17"] = new DeceasedPerson("Earl Ricks", "images/17.jpg", "21 November 1895", "Salem, Fremont, Idaho, United States", "15 September 1964", "Teton, Madison, Idaho", [29, 30]);
    personList["indv-18"] = new DeceasedPerson("Theora Valentine", "images/18.jpg", "5 December 1899", "Salem, Fremont, Idaho, United States", "27 February 1985", "Idaho Falls, Bonneville, Idaho, United States", [31, 32]);
    personList["indv-19"] = new DeceasedPerson("James Christiansen", "images/19.jpg", "12 September 1908", "Hyrum Cache, Utah, United States", "12 July 1961", "Idaho Falls, Bonneville, Idaho, United States", [33, 34]);
    personList["indv-20"] = new DeceasedPerson("Rosetta Williams", "images/20.jpg", "1 August 1920", "Lava Hot Springs, Bannock, Idaho, United States", "4 June 2005", "Rexburg, Madison, Idaho, United States", [35, 36]);
   
    //gen-4
    personList["indv-21"] = new DeceasedPerson("John Hunter", "images/21.jpg", "26 March 1869", "Grantsville, Toole, Utah, United States", "15 June 1959", "Emmett, Gem, Idaho, United States", []);
    personList["indv-22"] = new DeceasedPerson("Charlotte Hale", "images/22.jpg", "5 December 1872", "Grantsville, Toole, Utah, United States", "14 April 1943", "Emmett, Gem, Idaho, United States", []);
    
    personList["indv-23"] = new DeceasedPerson("Seth Roesberry", "images/23.jpg", "23 July 1883", "Pima, Grahm, Arizona, United States", "2 January 1949", "Provo, Utah, Utah, United States", []);
    personList["indv-24"] = new DeceasedPerson("Mary Rogers", "images/24.jpg", "15 May 1885", "Luna Valley, Socorro, New Mexico, United States", "15 February 1971", "Saint George, Washington, Utah, United States", []);
    
    personList["indv-25"] = new DeceasedPerson("Albert Mackley", "images/25.jpg", "25 August 1873", "Norwich, Norfolk, England", "31 August 1967", "St. George, Washington, Utah, United States", []);
    personList["indv-26"] = new DeceasedPerson("Catherine Braithwaite", "images/26.jpg", "25 May 1879", "Manti, Sanpete, Utah, United States", "30 April 1949", "Mapleton, Utah, Utah, United States", []);
    
    personList["indv-27"] = new DeceasedPerson("William Dalby", "images/27.jpg", "17 September 1872", "Kansas City, Wyandotte, Kansas, United States", "26 April 1924", "Gooding, Gooding, Idaho, United States", []);
    personList["indv-28"] = new DeceasedPerson("Catherine Bronson", "images/28.jpg", "26 October 1876", "Luray, Russell, Kansas, United States", "18 December 1908", "Topeka, Shawnee, Kansas, United States", []);
    
     personList["indv-29"] = new DeceasedPerson("John Ricks", "images/29.jpg", "10 May 1868", "Logan, Cache, Utah, United States", "4 May 1920", "Teton, Idaho, United States", []);
    personList["indv-30"] = new DeceasedPerson("Julianna Hansen", "images/30.jpg", "12 June 1871", "Trelose, Skelby, Soro, Denmark", "12 January 1950", "Rexburg, Madison, Idaho, United States", []);
    
    personList["indv-31"] = new DeceasedPerson("Charles Valentine", "images/31.jpg", "3 March 1873", "Calls Fort, Box Elder, Utah, United States", "16 April 1933", "Salem, Fremont, Idaho, United States", []);
    personList["indv-32"] = new DeceasedPerson("Minerva Dille", "images/32.jpg", "11 September 1872", "Hyrum, Cache, Utah, United States", "29 December 1913", "Rexburg, Madison, Idaho, United States", []);
    
    personList["indv-33"] = new DeceasedPerson("Joseph Christiansen", "images/33.jpg", "11 November 1882", "Hyrum, Cache, Utah, United States", "6 November 1918", "Menan, Jefferson, Idaho", []);
    personList["indv-34"] = new DeceasedPerson("Sarah Baron", "images/34.jpg", "31 October 1884", "Brigham City, Box, Elder, Utah, United States", "11 March 1962", "Soda Springs, Caribou, Idaho, United States", []);
    
    personList["indv-35"] = new DeceasedPerson("Edward Williams", "images/35.jpg", "13 August 1876", "Council Bluffs, Pottawattamie, Iowa, United States", "22 December 1962", "Downey, Bannock, Idaho, United States", []);
    personList["indv-36"] = new DeceasedPerson("Hazel Reese", "images/36.jpg", "1 May 1895", "Dempsey, Bannock, Idaho, United States", "17 July 1964", "Pocatello, Bannock, Idaho, United States", []);
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

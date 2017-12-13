function onloadActivities() {
    addImages();
    showChristmasMessage();
    drawCanvas();
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

function DeceasedPerson(name, image, birthdate, birthplace, deathdate, deathplace, ancestors, bio) {
   Person.call(this, name, image, ancestors);
    this.birthdate = birthdate;
    this.birthplace = birthplace;
    this.deathdate = deathdate;
    this.deathplace = deathplace;
    this.bio = bio;
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
    personList["indv-13"] = new DeceasedPerson("Mac Kay Hunter", "images/13.jpg", "July 6, 1906", "Mount Glen, Union, Oregon, United States", "April 11, 1997", "Boise, Ada, Idaho, United States", [21, 22], "");
    personList["indv-14"] = new DeceasedPerson("Edith Roesberry", "images/14.jpg", "October 24, 1912", "Miami Mariposa, California, United States", "May 29, 1999", "Kuna, Ada, Idaho, United States", [23, 24], "");
    personList["indv-15"] = new DeceasedPerson("Albert C. Mackley", "images/15.jpg", "May 9, 1898", "Spanish Fork, Utah, Utah, United States", "August 29, 1992", "Saint George, Washington, Utah, United States", [25, 26], "While working in the shop in Challis I had prayed for a chance to do work with the Indians. But I thought I wasn't going to get that prayer answered. But when it came it came all of a sudden. I was doing stake missionary work and I was also secretary for the mission. One day an Indian man and his wife were in the shop and had been sitting there almost all day. Along about 5:30 a voice came to me from the Holy Ghost. It said if you are going to do anything you better do it now. So I walked around there and said to this man. You know you are not Indians. He said what are we, I said Lamanites. Where did you get that from. I said from the history of your people. I said yes we call it the Book of Mormon. He said tell me about it. So I began to tell him about Lehi and his Family leaving Jerusalem under the direction of the Lord. 1½ hours I related the story to him. Later he wanted the book and I promised to give it to him before he left to go back up to Gallup, New Mexico. I finally got him and his family to going to church. and several of them were baptized. We had as many in just 3 weeks as 175 Indians to our meetings. I have still got pictures of them. I did missionary work for 5 years and 3 months in Rupert.");
    personList["indv-16"] = new DeceasedPerson("Pearl Dalby", "images/16.jpg", " December 23, 1903", "Omaha, Douglas, Nebraska, United States", "January 20, 1968", "Saint George, Washington, Utah, United States", [27, 28], "");
    personList["indv-17"] = new DeceasedPerson("Earl Ricks", "images/17.jpg", " November 21, 1895", "Salem, Fremont, Idaho, United States", "September 15, 1964", "Teton, Madison, Idaho", [29, 30], "When I was eight, I paid my first tithing. I remember my father tried to pay an honest tithing. He used to pay a tenth of his hay and grain and other income.When I was a small child, my folks used to make wheat beer and let us have all of it we wanted at hay and grain harvest time. I developed a liking for beer, and Mother tells me that when I was a small child wearing dress and sun bonnet, I used to run away and toddle down to Grandpa Hansen’s to get beer.Tea and coffee were on our table almost every meal until I was 12 or 13 years of age when the Word of Wisdom became a commandment. Mother threw her supply out on the ground and we had no more.");
    personList["indv-18"] = new DeceasedPerson("Theora Valentine", "images/18.jpg", "December 5, 1899", "Salem, Fremont, Idaho, United States", "February 27, 1985", "Idaho Falls, Bonneville, Idaho, United States", [31, 32], "In the spring of 1919 after school was out I went to help the James Gardner family while his wife was confined with a new baby. During this time I met my future husband, Earl Edwin Ricks. He and a couple he had baptized on his mission, the Arthur Mendenhalls took me several places in the buggy. Our courtship continued during the following year and in June 1920 we boarded the train at Sugar City and journeyed to Salt Lake City where we were married in the Temple 9 June 1920. We stayed in a hotel and visited the sites and relations for several days. It was an enjoyable time for me as I had never been away from home before. The largest city I had visited previously was Idaho Falls. Earl’s cousin, Henry Hansen found our hotel room and filled the bed with hair brushes. We had a good laugh and a few uncomfortable moments as we found all the brushes that night.");
    personList["indv-19"] = new DeceasedPerson("James Christiansen", "images/19.jpg", "September 12, 1908", "Hyrum Cache, Utah, United States", "July 12, 1961", "Idaho Falls, Bonneville, Idaho, United States", [33, 34], "From an excerpt written by James to Rosetta on June 22, 1938: <br> I’m glad to hear Don and Frankie went through the temple. If I even get married it will be in the temple. Don’t you think it the rite thing to do?");
    personList["indv-20"] = new DeceasedPerson("Rosetta Williams", "images/20.jpg", "August 1, 1920", "Lava Hot Springs, Bannock, Idaho, United States", "June 4, 2005", "Rexburg, Madison, Idaho, United States", [35, 36], "I have loved horses all of my life, and have spent a lot of time riding, helping with the cattle, and just riding for pleasure. I still ride when the weather permits.");
   
    //gen-4
    personList["indv-21"] = new DeceasedPerson("John Hunter", "images/21.jpg", "March 26, 1869", "Grantsville, Toole, Utah, United States", "June 15, 1959", "Emmett, Gem, Idaho, United States", [], "As told by Melvin E. Davis: <br> Hunting pheasants and partiridges. Gradpa, Pa, Frank, and I were on this trip. Grandpa hada long barreled shotgun - a single shot. One time a bird got up and all of us shot and missed - except Gradpa. He waited until we had all shot, then pulled up, took aim and knocked it down.");
    personList["indv-22"] = new DeceasedPerson("Charlotte Hale", "images/22.jpg", "December 5, 1872", "Grantsville, Toole, Utah, United States", "April 14, 1943", "Emmett, Gem, Idaho, United States", [], "As written by Cora Hunter Harris: <br> Charlotte was very good at caring for the sick. During her lifetime she cared for her family and others for which she never reveived renumeration. <br> Charlotte was married on May 10, 1892 in the Logan Temple as Salt Lake Temple was not yet completed. They did however visit the Salt Lake Temple site and climbed the scaffold to touch the feet of the Angel Moroni.");
    
    personList["indv-23"] = new DeceasedPerson("Seth Roesberry", "images/23.jpg", "July  23, 1883", "Pima, Grahm, Arizona, United States", "January 2, 1949", "Provo, Utah, Utah, United States", [], "As written By Mary Ann Rogers: <br> One day there was a crowd of us young folks together and one girl, Sarah Reynolds, asked me to go with her where there was a boy she knew. She said she wanted to go with him so we went to the house where he was and he took me home instead of her. So that was the starting of Dave Roesbery and my courtship. We went together two years. He lived ten miles down by Fort Thomas. He had to come horse back or buggy. He was always up for the friday night dances and [would] stay to his aunts over Sunday. The way we learned to round dance [was]; Dave would ask the older women to teach him a dance [and] when he learned [it] he taught me--so we learned together. We got so we never turned any of them down. We danced good together [and] we have been in several dance contests and won. We both loved to dance.");
    personList["indv-24"] = new DeceasedPerson("Mary Rogers", "images/24.jpg", "May 15, 1885", "Luna Valley, Socorro, New Mexico, United States", "February 15, 1971", "Saint George, Washington, Utah, United States", [], "When I was young I was always singing until one day I was out heating the wash water and singing as loud as I could and mother told my brother Dave to go and feed the pigs and he come to the door and said so I could hear him: he said, 'It is not the pigs squealing, it is Mamie singing' (that was my nickname). Well, that stopped my singing and I still don't sing. It hurt me so much I never got over it and I have always had an inferiority complex all my life and [have been] easy to hurt. Everything went right to the heart.");
    
    personList["indv-25"] = new DeceasedPerson("Albert J. Mackley", "images/25.jpg", "August 25, 1873", "Norwich, Norfolk, England", "August 31, 1967", "St. George, Washington, Utah, United States", [], "We was always glad to see the Elders. We would go across the city and hold meetings at each others homes but after so many left to come to Zion the harvest was poor. I and my father was baptized the same night in the river Wensum. The Elder that baptized me and father was named Joseph W. Vickers. He lived in Nephi, Utah [and was a] very good man. He treated me like a son. As the mobs were on the Elder's heels, that was the reason we was baptized at night.<br> My grandma was skin and bones but she traveled like a streak. One night after dark a mob gathered and was going to mob the Elders. I went in the house and told Grandmother some men was after the Elders. She had a large wash basin full of boiling water and she throwed it in their face and she told them if they didn't go she would give them another. They left. I seen them. She was a real Latter-day Saint. She would stand up for the Gospel. She was about 90 years old when we got word we was going to America. People says, 'Mrs. Holmes, you'll die on the way.' She says, 'I don't care, I've been looking for this opportunity for a good many years.' She was one of the first that joined the church in that part. My mother says she [grandmother] was baptized by Apostle Benson, grandfather of Ezra T. Benson.");
    personList["indv-26"] = new DeceasedPerson("Catherine Braithwaite", "images/26.jpg", "May 25, 1879", "Manti, Sanpete, Utah, United States", "April 30, 1949", "Mapleton, Utah, Utah, United States", [], "I had to go back to the shop in Driggs, Idaho. There I run and tried to keep some cows there. We sold milk to customers. The children married off and I stayed with the shop. My wife's health got bad. [The] climate was to high so we moved to Rigby, Idaho. We rented a house for a few years. Finally I bought a lot and we built a nice little house. My wife felt so bad when we left our home in Spanish Fork I told her, 'Don't feel bad, we will build you a house and you can have it the way you want it.' We had a nice little home fixed like a doll house, everything the way she wanted. A lawn with all kinds of flowers. You could find her out taking care of them. I planted a nice lot of fruit trees and had a lot of chickens. And then Martha was the only one home. She got married and they moved to Clearfield so we didn't enjoy the doll house too many years. They wanted us to move there so we bought a nice house across from them. We could see them everyday. We would drop over or they would. We was enjoying it fine 'till Rex thought he could do better on a farm as he was working at the Navy Base there. So it wasn't long 'till they moved to Mud Lake and we was not better off. We could have lived in Rigby and went 25 or 30 miles and seen them there but we don't know the workings of the Lord. I think he moved us around to suit his purpose.");
    
    personList["indv-27"] = new DeceasedPerson("William Dalby", "images/27.jpg", "September 17, 1872", "Kansas City, Wyandotte, Kansas, United States", "April 26, 1924", "Gooding, Gooding, Idaho, United States", [], "");
    personList["indv-28"] = new DeceasedPerson("Catherine Bronson", "images/28.jpg", "October 26, 1876", "Luray, Russell, Kansas, United States", "December 18, 1908", "Topeka, Shawnee, Kansas, United States", [], "");
    
     personList["indv-29"] = new DeceasedPerson("John Ricks", "images/29.jpg", "May 10, 1868", "Logan, Cache, Utah, United States", "May 4, 1920", "Teton, Idaho, United States", [], "As written by Dora Irene Ricks: <br> He was honest to the nth degree. In a transaction he would sooner take a loss than take the advantage of another. <br> I never saw Father smoke or take a drink of liquor though I saw him turn many down. I never heard him swear or utter a vulgar word. I never heard him tell a dirty story. If he saw a person doing wrong he was quick to chastise. <br> Father was a firm believer in punctuality. If a meeting was appointed to start at a certain time (if he had his say) regardless of how few were there at the appointed time he would start the meeting. <br> He loved his wife and family and was a good provider. In financial matters he had a fixed pattern which he followed religiously. When he got money, first he would turn 10% of it over to the Lord, second if taxes were due he would pay his taxes. Then if he owed his fellow men he would pay them.");
    personList["indv-30"] = new DeceasedPerson("Julianna Hansen", "images/30.jpg", "June 12, 1871", "Trelose, Skelby, Soro, Denmark", "January 12, 1950", "Rexburg, Madison, Idaho, United States", [], "My folks were to meet me at Eagle Rock, Idaho Falls. I hadn’t arrived. The day I was to leave Ogden, the lady I stayed with was taken ill. I stayed two weeks longer until she was better. Then there was no one to meet me in Idaho Falls. My brother was working on the railroad at Idaho Falls, and he told me about all I could do was to get a job and go to work. I was just 13 years old, but I got a job in the old Brooks Hotel to wait on tables for $15.00 per month. I worked a few months for that and did as much work as the older girls, and they were getting 20.00 per month. I asked the boss why I couldn’t have as much when I did the same work. He said, “It doesn’t cost as much for your short dresses as it does for the girls’ long ones.” I said, “All right, give me as much as you do them and I will wear the long dresses.” He gave me $20.00 and I wore the long dresses.");
    
    personList["indv-31"] = new DeceasedPerson("Charles Valentine", "images/31.jpg", "March 3, 1873", "Calls Fort, Box Elder, Utah, United States", "April 16, 1933", "Salem, Fremont, Idaho, United States", [], "As written by Mabel and Theora Valentine: <br> Father was a farmer and also a cattle man. He loved people and was good to every one. He was unable to refuse anyone who asked a favor of him. Many people took advantage of his generosity. He would sign notes with unfortunate people and then he would have to pay them. <br> He was called many times to homes where there was death. He would lay out the dead all over the valley. He was never too busy to help those in need.");
    personList["indv-32"] = new DeceasedPerson("Minerva Dille", "images/32.jpg", "September 11, 1872", "Hyrum, Cache, Utah, United States", "December 26, 1913", "Rexburg, Madison, Idaho, United States", [], "As written by Mabel and Theora Valentine: <br> Mother was a very good cook. Everything she cooked always tasted so good. Many of her friends said she could make a meal out of most anything and make it taste good. She always could make our clothes look good. Her sewing ability was superb. She was a very good, clean housekeeper. Our kitchen was made of logs but every newspaper was saved and mother would make paste and paste the paper on the walls. The bare floor was scrubbed every day. It was as clean as some people’s tables. We had a very good family life with lots of company. Mother loved to serve everyone who came to visit.");
    
    personList["indv-33"] = new DeceasedPerson("Joseph Christiansen", "images/33.jpg", "November 11, 1882", "Hyrum, Cache, Utah, United States", "November 6, 1918", "Menan, Jefferson, Idaho", [], "");
    personList["indv-34"] = new DeceasedPerson("Sarah Baron", "images/34.jpg", "October 31, 1884", "Brigham City, Box, Elder, Utah, United States", "March 11, 1962", "Soda Springs, Caribou, Idaho, United States", [], "");
    
    personList["indv-35"] = new DeceasedPerson("Edward Williams", "images/35.jpg", "August 13, 1876", "Council Bluffs, Pottawattamie, Iowa, United States", "December 22, 1962", "Downey, Bannock, Idaho, United States", [], "As written by Gladys Burruo Williams: <br> [Ed] did not have much formal schooling but he could read and his penmanship was so beautiful that one time when he signed his daughter's school report card, the teacher told her to take it back home and have her parents sign it, not guessing it was her father's signature. <br> His carpentry work was of the best quality and he would often show up at a neighbor's home to assist in the work harvesting or whatever that was needed to be done.");
    personList["indv-36"] = new DeceasedPerson("Hazel Reese", "images/36.jpg", "May 1, 1895", "Dempsey, Bannock, Idaho, United States", "July 17, 1964", "Pocatello, Bannock, Idaho, United States", [], "As written by Rosetta Williams Christiansen: <br> We had houses and a few cows. I remember a team of mules, Jack and Jenny. They were never to be trusted. Jack would sometimes kick and carry on while he was being hitched. I remember one time they got through the gate one of use had left open. Mom always had flowers (California poppies) around the house and yard. Mom took after them with the broom, and not being able to catch them she threw the broom at them, Old Jenny turned around picked it up in her teeth and nonchalantly trotted out the gate, taking Mom's broom with her.");
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
    
    //add bio and header if there is one
    if(person.bio != "") {
        document.getElementById("factHeader").style.display='block';
    } else {
        document.getElementById("factHeader").style.display='none';
    }
    document.getElementById("fact").innerHTML = person.bio;
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
        height: 1200
    };
    
    chart.draw(dataTable, options);
}

function unloadChart() {
    document.getElementById("tree").style.display= "block";
    document.getElementById("chart").style.display= "none";
}

function drawCanvas() {
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
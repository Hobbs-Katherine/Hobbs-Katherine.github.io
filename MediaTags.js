function drawTemple() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    buildBase(ctx);
    buildEmbrasures(ctx);
    buildLeftTower(ctx);
    buildRightTower(ctx);
    buildMiddleTower(ctx);
    buildTurets(ctx);
    buildWindows(ctx);
}

function buildBase(ctx) {
    ctx.fillRect(10, 220, 240, 175); //Base
    ctx.fillRect(10, 175, 55, 220);  //left Tower Base
    ctx.fillRect(100, 160, 70, 200); //middle Tower Base
    ctx.fillRect(200, 175, 55, 220); //Right Tower Base
}

function buildEmbrasures(ctx) {
    ctx.fillRect(73, 213, 6, 7);   //lower left side
    ctx.fillRect(79, 217, 7, 7);
    ctx.fillRect(86, 210, 6, 10);  //upper left side
    ctx.fillRect(92, 214, 8, 7);
    ctx.fillRect(188, 213, 6, 7);  //lower right side
    ctx.fillRect(182, 217, 7, 7);
    ctx.fillRect(176, 210, 6, 10); //upper right side
    ctx.fillRect(170, 214, 8, 7);
}

function buildLeftTower(ctx) {
    ctx.beginPath();
    ctx.moveTo(15, 175);
    ctx.lineTo(35, 80);
    ctx.lineTo(60, 175);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(35,80,3,0,2*Math.PI); //circle
    ctx.fill();
    
    buildLeftLightningRods(ctx);
}

function buildLeftLightningRods(ctx) {
    ctx.beginPath();
    ctx.moveTo(35,80);
    ctx.lineTo(35,70);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(35,73,1.5,0,2*Math.PI);
    ctx.fill();
}

function buildRightTower(ctx) {
    ctx.beginPath();
    ctx.moveTo(205, 175);
    ctx.lineTo(225, 80);
    ctx.lineTo(250, 175);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(225,80,3,0,2*Math.PI); //circle
    ctx.fill();
    
    buildRightLightningRods(ctx);
}

function buildRightLightningRods(ctx) {
    ctx.beginPath();
    ctx.moveTo(225,80);
    ctx.lineTo(225,70);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(225,73,1.5,0,2*Math.PI);
    ctx.fill();
}

function buildMiddleTower(ctx) {
    ctx.beginPath();
    ctx.moveTo(105, 165);
    ctx.lineTo(135, 40);
    ctx.lineTo(165, 165);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(135,40,4,0,2*Math.PI); //circle
    ctx.fill();
    
    buildAngelMoroni(ctx);
}

function buildAngelMoroni(ctx) {
    ctx.beginPath();
    ctx.moveTo(137, 38); //1
    ctx.lineTo(136, 33); //2
    ctx.lineTo(137, 32); //3
    ctx.lineTo(137, 30); //4
    ctx.lineTo(138, 28); //5
    ctx.lineTo(138, 25); //6
    ctx.lineTo(140, 29); //7
    ctx.lineTo(138, 22); //8
    ctx.lineTo(136, 22); //9
    ctx.lineTo(135.8, 18); //10
    ctx.lineTo(133, 17.8); //11
    ctx.lineTo(129, 13); //12
    ctx.lineTo(128, 15); //13a
    ctx.lineTo(130, 16); //13b
    ctx.lineTo(131, 17); //14
    ctx.lineTo(130.8, 21); //15
    ctx.lineTo(132, 21.8); //16
    ctx.lineTo(132, 28); //17
    ctx.lineTo(133, 28); //18
    ctx.lineTo(133, 30); //19
    ctx.lineTo(134, 33); //20
    ctx.lineTo(134, 38); //21
    ctx.fill();
}

function turet(x, y, ctx) {
    //Base
    ctx.fillRect(x + 10, y + 20, 5, 4);
    ctx.fillRect(x + 11, y + 24, 3, 20);
    //triangle
    ctx.beginPath();
    ctx.moveTo(x + 11, y + 20);
    ctx.lineTo(x + 12.5, y + 10);
    ctx.lineTo(x + 14, y + 20);
    ctx.fill();
    //circle on top of turet
    ctx.beginPath();
    ctx.arc(x + 12.5, y + 10, 1, 0, 2*Math.PI);
    ctx.fill();
}

function buildTurets(ctx) {
    //bottom row left tower to right tower
    turet(-1, 151, ctx);
    turet(51, 151, ctx);
    turet(89, 136, ctx);
    turet(156, 136, ctx);
    turet(189, 151, ctx);
    turet(241, 151, ctx);

    //middle row left tower to right tower
    turet(5, 131, ctx);
    turet(44, 131, ctx);
    turet(97, 116, ctx);
    turet(148, 116, ctx);
    turet(195, 131, ctx);
    turet(234, 131, ctx);

    //top row left tower to right tower
    turet(10, 111, ctx);
    turet(39, 111, ctx);
    turet(102, 96, ctx);
    turet(143, 96, ctx);
    turet(199, 111, ctx);
    turet(229, 111, ctx);
}

function smallArch(x, y, ctx) {
    ctx.fillRect(x + 35, y + 215, 10, 15);
    ctx.beginPath();
    ctx.arc(x + 40, y + 215,5,0,Math.PI,true);
    ctx.fill();
}

function mediumArch(x, y, ctx) {
    ctx.fillRect(x + 75, y + 350, 20, 20);
    ctx.beginPath();
    ctx.arc(x + 85, y + 350,10,0,Math.PI,true);
    ctx.fill();
}

function largeArch(x, y, ctx) {
    ctx.fillRect(x + 130, y + 185, 15, 45);
    ctx.beginPath();
    ctx.arc(x + 137.5, y + 185,7.5,0,Math.PI,true);
    ctx.fill();
}

function circular(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x + 85, y + 255,7,0,2*Math.PI);
    ctx.fill();
}

function buildWindows(ctx) {
    ctx.fillStyle = "white";
    //small arch windows
    for(var i = 0; i < 150; i += 35) {
     smallArch(0, i, ctx);
     smallArch(185, i, ctx);
    }
    smallArch(45, 70, ctx);
    smallArch(145, 70, ctx);
    //medium arch windows
    mediumArch(0,0, ctx);
    mediumArch(100, 0, ctx);
     //large arch windows
    for(var i = 0; i < 150; i += 70) {
      largeArch(0, i, ctx);
    }
    for(var i = 0; i < 140; i += 70) {
     circular(0, i, ctx);
     circular(100, i, ctx);
    }
}
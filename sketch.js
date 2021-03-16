var canvas;
var m;
var b, rs, gs, bs, os; 
var s1, s2, s3, s4;

function preload(){
    m = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(670,600);
    m.play();
    //create 4 different surfaces
    gs = createSprite(580, 585, 150, 20);
    gs.shapeColor = "rgb(0,100,0)";

    rs = createSprite(420, 585, 150, 20);
    rs.shapeColor = "rgb(153,0,76)";

    os = createSprite(260, 585, 150, 20);
    os.shapeColor = "rgb(255,128,0)";

    bs = createSprite(100, 585, 150, 20);
    bs.shapeColor = "rgb(0,0,255)";
    //create box sprite and give velocity
    b = createSprite(335, 300, 25, 25);
    b.velocityX = 4;
    b.velocityY = 4;
}
function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    b.bounceOff(edges);
 
    //add condition to check if box touching surface and make it change color
    if (b.isTouching(rs)){
        b.shapeColor = "rgb(153,0,76)";
    }
    if (b.isTouching(bs)){
        b.shapeColor = "rgb(0,0,255)";
    }
    if (b.isTouching(gs)){
        b.shapeColor = "rgb(0,100,0)";
    }
    if (b.isTouching(os)){
        b.shapeColor = "rgb(255,128,0)";
    }
    b.bounceOff(bs);
    b.bounceOff(rs);
    b.bounceOff(gs);
    b.bounceOff(os);
    drawSprites();
}

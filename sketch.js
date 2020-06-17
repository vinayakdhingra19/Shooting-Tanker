// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ball,canonBall,ground,shootBall,tanker;
var rect1;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/




function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,400)
    
    engine = Engine.create();
    world = engine.world;

    

}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(255,255,255);  
  
    Engine.update(engine);
    
    rect(100,240,50,13);
    rect(100,228,50,13);
    ellipse(125,225,50,0);
    arc(125,225,50,40,PI,0,false);
    ellipse(400,100,20,20);
    ellipse(450,150,20,20)
    rect(151,218,30,10)

    drawSprites();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}
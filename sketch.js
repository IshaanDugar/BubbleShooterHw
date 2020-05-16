const {Engine, World, Bodies} = Matter;

var engine, world;

var bub1, bub2, bub3, bub4, bub5, bub6, bub7;

var bubblesX, bubblesY;

var shooter;

var points = 0;
function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800, 800)

    bubblesX =  Math.round(random(50, 750));
    bubblesY =  Math.round(random(50, 350));

    bub1 = new Bubbles(bubblesX, bubblesY, 50, 50);
    bub2 = new Bubbles(bubblesX, bubblesY, 50, 50);
    bub3 = new Bubbles(bubblesX, bubblesY, 50, 50);
    bub4 = new Bubbles(bubblesX, bubblesY, 50, 50);
    bub5 = new Bubbles(bubblesX, bubblesY, 50, 50);
    bub6 = new Bubbles(bubblesX, bubblesY, 50, 50);

    shooter = new Shooter(100, 200, 50, 50);
}

function draw(){
    Engine.update(engine);
    background(0, 0, 0);

    bub1.display();
    bub2.display();
    bub3.display();
    bub4.display();
    bub5.display();
    bub6.display();

    shooter.display();


    if(bub1.y > 800){
        bub1.y = 10;
    }
    if(bub2.y > 800){
        bub2.y = 10;
    }
    if(bub3.y > 800){
        bub3.y = 10;
    }
    if(bub4.y > 800){
        bub4.y = 10;
    }
    if(bub5.y > 800){
        bub5.y = 10;
    }
    if(bub6.y > 800){
        bub6.y = 10;
    }
    
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      shooter.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      shooter.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
      shooter.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
      shooter.setDir(0, -1);
    }
}
  
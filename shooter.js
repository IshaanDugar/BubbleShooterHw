class Shooter{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height
        this.xdir = 0;
        this.ydir = 0;

        World.add(world, this.body)
    }

    setDir(x, y){
        this.xdir = x;
        this.ydir = y;
    }
    display(){
        var pos = this.body.position;

        rect(pos.x, pos.y, this.width, this.height);
    }
}
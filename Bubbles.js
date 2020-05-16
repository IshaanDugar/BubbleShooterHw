class Bubbles{
    constructor(x, y, radiusX, radiusY){

        this.body = Bodies.circle(x, y, radiusX, radiusY);

        this.radiusX = radiusX;
        this.radiusY = radiusY;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        ellipse(pos.x, pos.y, this.radiusX, this.radiusY);
    }
}
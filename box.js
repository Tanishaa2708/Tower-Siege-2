class Box{
    constructor(x,y,width,height){

        var options = {
            friction:0,
            restitution:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width = width
        this.height = height
    }
    display(){
        console.log(this.body.speed)
        if(this.body.speed<3)
        {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
            World.remove(world,this.body)
        }

    }
}
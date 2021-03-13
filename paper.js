class Paper{
    constructor(x,y,radius){
        var options={
            'density':1.2,
            'friction':0,
            'restitution':0.3,
            'isStatic':false
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER); 
        image(this.image, 0,0,this.radius, this.radius)
       // ellipseMode(CENTER);
        fill("red");
      //  ellipse(pos.x,pos.y,this.radius);
      pop();
    }
}
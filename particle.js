class Particle{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.2,
            'friction':0.5,
            'density':0.7
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.colour=color(random(0,255),random(0,255),random(0,255));
        this.radius=radius;
        World.add(world,this.body);
      
     
    }
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.colour);
        ellipse(0,0,16);        
        pop();
    }
};

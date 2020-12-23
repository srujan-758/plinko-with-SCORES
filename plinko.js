class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            'restitution':0.2,
            'friction':0.5,
            'density':0.7
        }
        this.body = Bodies.circle(x,y,radius,options);
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
        fill("white");
        ellipse(0,0,10);        
        pop();
    }
};

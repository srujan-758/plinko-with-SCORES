
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score = 0;
var turn = 0;

function preload()
{
	
}

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground= new Ground(600,697,1200,20);

  for (var k=0; k <=500; k=k+80) {
	divisions.push(new Divisions(k, 700-divisionheight/2,10,divisionheight));
	
  }

  for (var j=40; j <=500; j=j+50) {
	plinko.push(new Plinko(j,75,10));
	
  }

  for (var j=15; j <=500-10; j=j+50) {
	plinko.push(new Plinko(j,165,10));
	
  }

  for (var j=40; j <=500; j=j+50) {
	plinko.push(new Plinko(j,255,10));
	
  }

  for (var j=15; j <=500-10; j=j+50) {
	plinko.push(new Plinko(j,355,10));
	
  }
  
	Engine.run(engine);
  

}

var divisions=[];
var divisionheight=300;

var plinko=[];
//var particle=[];
//var plinkoheight=300;
var particle;


function draw() {
  rectMode(CENTER);
  background(0);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score,300, 50)
  text("Turn  " + turn,100, 50)

 if(keyCode===32 && turn<=5){
  if (frameCount%60===0) { 	 
	particle = new Particle(random(500/2-10),random(500/2+10),10);
  }
}
  if (turn===6){
	text("GAME OVER  " ,250, 350)  
  }	
  
 
for (var i=0;i<divisions.length;i++){
	divisions[i].display();
}

for (var a=0;a<plinko.length;a++){
	plinko[a].display();
}

for (var b=0;b<plinko.length;b++){
	plinko[b].display();
}

for (var c=0;c<divisions.length;c++){
	plinko[i].display();
}

for (var d=0;d<plinko.length;d++){
	plinko[d].display();
}



	if (particle!=null){

      particle.display();

		if (particle.body.position.y>640){

			if (particle.body.position.x<80){

				score=score+500;
				turn=turn+1;
				particle=null;
			}
		}
	}

	if (particle!=null){

		particle.display();
  
		  if (particle.body.position.y>640){
  
			  if (particle.body.position.x<160){
  
				  score=score+50;
				  turn=turn+1;
				  particle=null;
			  }
		  }
	  }

	  if (particle!=null){

		particle.display();
  
		  if (particle.body.position.y>640){
  
			  if (particle.body.position.x<240){
  
				  score=score+100;
				  turn=turn+1;
				  particle=null;
			  }
		  }
	  }
	  
	  if (particle!=null){

		particle.display();
  
		  if (particle.body.position.y>640){
  
			  if (particle.body.position.x<320){
  
				  score=score+300;
				  turn=turn+1;
				  particle=null;
			  }
		  }
	  }


	  if (particle!=null){

		particle.display();
  
		  if (particle.body.position.y>640){
  
			  if (particle.body.position.x<400){
  
				  turn=turn+1;
				  score=score+800;
				  particle=null;
			  }
		  }
	  }

	  if (particle!=null){

		particle.display();
  
		  if (particle.body.position.y>640){
  
			  if (particle.body.position.x<480){
  
				 turn=turn+1;
				  score=score+900;
				  particle=null;
			  }
		  }
	  }

drawSprites();
ground.display();


}

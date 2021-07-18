var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var snow = [];
var divisionHeight=300;
var score =0;

function preload() {
  bg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(900, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  /*for (var k = 0; k <=800; k = k + 133) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }*/

  //create 1st row of plinko objects
  /*for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }*/

  //create particle objects
  
}
 


function draw() {
  background(bg);
  //textSize(20)
  console.log(frameCount)
  Engine.update(engine);
  //ground.display();
  
  if (frameCount%20===0){
    particles.push(new Snowing(random(width/2-350,width/2+350),10))
  }
  //display the plinkos 
  /*for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }*/
   
  //display the divisions
  /*for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }*/

  //display the particles
  for (var j = 0; j < particles.length; j++) { 
    particles[j].display();
  }


}
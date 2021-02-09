const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world
 football = new Football(200,370,10,10)
 ground = new Ground(400,380,800,20)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  football.display()
    ground.display()
  

}
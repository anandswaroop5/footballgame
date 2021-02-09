class Football{
    constructor(x,y,r){
    var options = {
        restitution:0.5,
        density:0.8
    }
    this.x = x
    this.y = y
    this.r = r
    this.image = loadImage("images/footbal game img 1.png")
    this.body  = Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    ellipseMode(CENTER)
    image(this.image,200,300,this.r*7,this.r*7)
    }
}